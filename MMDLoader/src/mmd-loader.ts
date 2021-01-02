import { Tools } from "@babylonjs/core/Misc/tools";
import { SceneLoader, ISceneLoaderPlugin, ISceneLoaderPluginExtensions } from "@babylonjs/core/Loading/sceneLoader";
import { Nullable } from "@babylonjs/core/types";
import { Scene } from "@babylonjs/core/scene";
import {AbstractMesh} from "@babylonjs/core/Meshes/abstractMesh"
import {Skeleton} from "@babylonjs/core/Bones/skeleton"
import { MMDParser } from './mmd-parser';
import {IParticleSystem} from "@babylonjs/core/Particles/IParticleSystem"
import {Vector2,Vector3} from "@babylonjs/core/Maths/math.vector"
import {Geometry} from "@babylonjs/core/Meshes/geometry"
import {VertexData} from "@babylonjs/core/Meshes/mesh.vertexData"
import {VertexBuffer} from "@babylonjs/core/Meshes/buffer"
import { WebRequest } from '@babylonjs/core/Misc/webRequest';


export class MMDLoader {

    public parser = null;
	public modelExtensions = ["pmx","pmd"]

    /**

     * @param rootUrl The root url for scene and resources
     * @param onError The callback when import fails
     * @returns true if successful or false otherwise
     */
    public loadMesh(url: string): boolean {

    }

    private _getParser(){
        if (this.parser === null) {
            if ( typeof MMDParser === 'undefined' ) {
                throw new Error( 'THREE.MMDLoader: Import MMDParser https://github.com/takahirox/mmd-parser' );
            }
            this.parser = new MMDParser.Parser(); // eslint-disable-line no-undef
        }
        return this.parser;
    }


	private _buildGeometry(data) {

			// for geometry
			var positions = [];
			var uvs = [];
			var normals = [];

			var indices = [];

			var groups = [];

			var bones = [];
			var skinIndices = [];
			var skinWeights = [];

			var morphTargets = [];
			var morphPositions = [];

			var iks = [];
			var grants = [];

			var rigidBodies = [];
			var constraints = [];

			// for work
			var offset = 0;
			var boneTypeTable = {};

			
			// positions, normals, uvs, skinIndices, skinWeights
			for ( var i = 0; i < data.metadata.vertexCount; i ++ ) {
				var v = data.vertices[ i ];
				for ( var j = 0, jl = v.position.length; j < jl; j ++ ) {
					positions.push( v.position[ j ] );
				}
				for ( var j = 0, jl = v.normal.length; j < jl; j ++ ) {
					normals.push( v.normal[ j ] );
				}
				for ( var j = 0, jl = v.uv.length; j < jl; j ++ ) {
					uvs.push( v.uv[ j ] );
				}
				for ( var j = 0; j < 4; j ++ ) {
					skinIndices.push( v.skinIndices.length - 1 >= j ? v.skinIndices[ j ] : 0.0 );
				}
				for ( var j = 0; j < 4; j ++ ) {
					skinWeights.push( v.skinWeights.length - 1 >= j ? v.skinWeights[ j ] : 0.0 );
				}
			}

			// indices
			for ( var i = 0; i < data.metadata.faceCount; i ++ ) {
				var face = data.faces[ i ];
				for ( var j = 0, jl = face.indices.length; j < jl; j ++ ) {
					indices.push( face.indices[ j ] );
				}
			}

			// groups
			for ( var i = 0; i < data.metadata.materialCount; i ++ ) {
				var material = data.materials[ i ];
				groups.push( {
					offset: offset * 3,
					count: material.faceCount * 3
				} );
				offset += material.faceCount;
			}

			// bones
			for ( var i = 0; i < data.metadata.rigidBodyCount; i ++ ) {
				var body = data.rigidBodies[ i ];
				var value = boneTypeTable[ body.boneIndex ];
				// keeps greater number if already value is set without any special reasons
				value = value === undefined ? body.type : Math.max( body.type, value );
				boneTypeTable[ body.boneIndex ] = value;
			}

			for ( var i = 0; i < data.metadata.boneCount; i ++ ) {
				var boneData = data.bones[ i ];
				var bone = {
					parent: boneData.parentIndex,
					name: boneData.name,
					pos: boneData.position.slice( 0, 3 ),
					rotq: [ 0, 0, 0, 1 ],
					scl: [ 1, 1, 1 ],
					rigidBodyType: boneTypeTable[ i ] !== undefined ? boneTypeTable[ i ] : - 1
				};
				if ( bone.parent !== - 1 ) {
					bone.pos[ 0 ] -= data.bones[ bone.parent ].position[ 0 ];
					bone.pos[ 1 ] -= data.bones[ bone.parent ].position[ 1 ];
					bone.pos[ 2 ] -= data.bones[ bone.parent ].position[ 2 ];
				}
				bones.push( bone );
			}

			// iks

			// TODO: remove duplicated codes between PMD and PMX
			if ( data.metadata.format === 'pmd' ) {
				for ( var i = 0; i < data.metadata.ikCount; i ++ ) {
					var ik = data.iks[ i ];
					var param = {
						target: ik.target,
						effector: ik.effector,
						iteration: ik.iteration,
						maxAngle: ik.maxAngle * 4,
						links: []
					};
					for ( var j = 0, jl = ik.links.length; j < jl; j ++ ) {
						var link:any = {};
						link.index = ik.links[ j ].index;
						link.enabled = true;
						if ( data.bones[ link.index ].name.indexOf( 'ひざ' ) >= 0 ) {
							link.limitation = new Vector3( 1.0, 0.0, 0.0 );
						}
						param.links.push( link );
					}
					iks.push( param );
				}

			} else {
				for ( var i = 0; i < data.metadata.boneCount; i ++ ) {
					var ik = data.bones[ i ].ik;
					if ( ik === undefined ) continue;
					let param = {
						target: i,
						effector: ik.effector,
						iteration: ik.iteration,
						maxAngle: ik.maxAngle,
						links: []
					};
					for ( var j = 0, jl = ik.links.length; j < jl; j ++ ) {
						let link:any = {};
						link.index = ik.links[ j ].index;
						link.enabled = true;
						if ( ik.links[ j ].angleLimitation === 1 ) {
							// Revert if rotationMin/Max doesn't work well
							// link.limitation = new Vector3( 1.0, 0.0, 0.0 );
							var rotationMin = ik.links[ j ].lowerLimitationAngle;
							var rotationMax = ik.links[ j ].upperLimitationAngle;
							// Convert Left to Right coordinate by myself because
							// MMDParser doesn't convert. It's a MMDParser's bug
							var tmp1 = - rotationMax[ 0 ];
							var tmp2 = - rotationMax[ 1 ];
							rotationMax[ 0 ] = - rotationMin[ 0 ];
							rotationMax[ 1 ] = - rotationMin[ 1 ];
							rotationMin[ 0 ] = tmp1;
							rotationMin[ 1 ] = tmp2;
							link.rotationMin = new Vector3().fromArray( rotationMin );
							link.rotationMax = new Vector3().fromArray( rotationMax );
						}
						param.links.push( link );
					}
					iks.push( param );
				}
			}

			// grants
			if ( data.metadata.format === 'pmx' ) {
				for ( var i = 0; i < data.metadata.boneCount; i ++ ) {
					var boneData = data.bones[ i ];
					var grant = boneData.grant;
					if ( grant === undefined ) continue;
					let param = {
						index: i,
						parentIndex: grant.parentIndex,
						ratio: grant.ratio,
						isLocal: grant.isLocal,
						affectRotation: grant.affectRotation,
						affectPosition: grant.affectPosition,
						transformationClass: boneData.transformationClass
					};
					grants.push( param );
				}
				grants.sort( function ( a, b ) {
					return a.transformationClass - b.transformationClass;
				} );
			}

			// morph
			function updateAttributes( attribute, morph, ratio ) {
				for ( var i = 0; i < morph.elementCount; i ++ ) {
					var element = morph.elements[ i ];
					var index;
					if ( data.metadata.format === 'pmd' ) {
						index = data.morphs[ 0 ].elements[ element.index ].index;
					} else {
						index = element.index;
					}
					attribute.array[ index * 3 + 0 ] += element.position[ 0 ] * ratio;
					attribute.array[ index * 3 + 1 ] += element.position[ 1 ] * ratio;
					attribute.array[ index * 3 + 2 ] += element.position[ 2 ] * ratio;
				}
			}
			for ( var i = 0; i < data.metadata.morphCount; i ++ ) {
				var morph = data.morphs[ i ];
				var params = { name: morph.name };

				var attribute = new Float32BufferAttribute( data.metadata.vertexCount * 3, 3 );
				attribute.name = morph.name;

				for ( var j = 0; j < data.metadata.vertexCount * 3; j ++ ) {

					attribute.array[ j ] = positions[ j ];

				}

				if ( data.metadata.format === 'pmd' ) {

					if ( i !== 0 ) {

						updateAttributes( attribute, morph, 1.0 );

					}

				} else {

					if ( morph.type === 0 ) { // group

						for ( var j = 0; j < morph.elementCount; j ++ ) {

							var morph2 = data.morphs[ morph.elements[ j ].index ];
							var ratio = morph.elements[ j ].ratio;

							if ( morph2.type === 1 ) {

								updateAttributes( attribute, morph2, ratio );

							} else {

								// TODO: implement

							}

						}

					} else if ( morph.type === 1 ) { // vertex

						updateAttributes( attribute, morph, 1.0 );

					} else if ( morph.type === 2 ) { // bone

						// TODO: implement

					} else if ( morph.type === 3 ) { // uv

						// TODO: implement

					} else if ( morph.type === 4 ) { // additional uv1

						// TODO: implement

					} else if ( morph.type === 5 ) { // additional uv2

						// TODO: implement

					} else if ( morph.type === 6 ) { // additional uv3

						// TODO: implement

					} else if ( morph.type === 7 ) { // additional uv4

						// TODO: implement

					} else if ( morph.type === 8 ) { // material

						// TODO: implement

					}

				}

				morphTargets.push( params );
				morphPositions.push( attribute );

			}

			// rigid bodies from rigidBodies field.

			for ( var i = 0; i < data.metadata.rigidBodyCount; i ++ ) {

				var rigidBody = data.rigidBodies[ i ];
				var params = {};

				for ( var key in rigidBody ) {

					params[ key ] = rigidBody[ key ];

				}

				/*
				 * RigidBody position parameter in PMX seems global position
				 * while the one in PMD seems offset from corresponding bone.
				 * So unify being offset.
				 */
				if ( data.metadata.format === 'pmx' ) {

					if ( params.boneIndex !== - 1 ) {

						var bone = data.bones[ params.boneIndex ];
						params.position[ 0 ] -= bone.position[ 0 ];
						params.position[ 1 ] -= bone.position[ 1 ];
						params.position[ 2 ] -= bone.position[ 2 ];

					}

				}

				rigidBodies.push( params );

			}

			// constraints from constraints field.

			for ( var i = 0; i < data.metadata.constraintCount; i ++ ) {

				var constraint = data.constraints[ i ];
				var params = {};

				for ( var key in constraint ) {

					params[ key ] = constraint[ key ];

				}

				var bodyA = rigidBodies[ params.rigidBodyIndex1 ];
				var bodyB = rigidBodies[ params.rigidBodyIndex2 ];

				// Refer to http://www20.atpages.jp/katwat/wp/?p=4135
				if ( bodyA.type !== 0 && bodyB.type === 2 ) {

					if ( bodyA.boneIndex !== - 1 && bodyB.boneIndex !== - 1 &&
					     data.bones[ bodyB.boneIndex ].parentIndex === bodyA.boneIndex ) {

						bodyB.type = 1;

					}

				}

				constraints.push( params );

			}

			// build BufferGeometry.

			var geometry = new BufferGeometry();

			geometry.setAttribute( 'position', new Float32BufferAttribute( positions, 3 ) );
			geometry.setAttribute( 'normal', new Float32BufferAttribute( normals, 3 ) );
			geometry.setAttribute( 'uv', new Float32BufferAttribute( uvs, 2 ) );
			geometry.setAttribute( 'skinIndex', new Uint16BufferAttribute( skinIndices, 4 ) );
			geometry.setAttribute( 'skinWeight', new Float32BufferAttribute( skinWeights, 4 ) );
			geometry.setIndex( indices );

			for ( var i = 0, il = groups.length; i < il; i ++ ) {

				geometry.addGroup( groups[ i ].offset, groups[ i ].count, i );

			}

			geometry.bones = bones;

			geometry.morphTargets = morphTargets;
			geometry.morphAttributes.position = morphPositions;
			geometry.morphTargetsRelative = false;

			geometry.userData.MMD = {
				bones: bones,
				iks: iks,
				grants: grants,
				rigidBodies: rigidBodies,
				constraints: constraints,
				format: data.metadata.format
			};

			geometry.computeBoundingSphere();

			return geometry;

		}

	};
}
