import { ISceneLoaderProgressEvent } from "@babylonjs/core/Loading/sceneLoader";
import { Scene } from "@babylonjs/core/scene";
import { AssetContainer } from "@babylonjs/core/assetContainer";
export default class MMDLoader {
    constructor();
    name: string;
    parser: any;
    private _forAssetContainer;
    extensions: {
        ".pmd": {
            isBinary: boolean;
        };
        ".pmx": {
            isBinary: boolean;
        };
    };
    importMeshAsync(meshesNames: any, scene: Scene, data: any, rootUrl: string, onProgress?: (event: ISceneLoaderProgressEvent) => void, fileName?: string): Promise<any>;
    loadAsync(scene: Scene, data: string, rootUrl: string, onProgress?: (event: ISceneLoaderProgressEvent) => void, fileName?: string): Promise<void>;
    loadAssetContainerAsync(scene: Scene, data: string, rootUrl: string, onProgress?: (event: ISceneLoaderProgressEvent) => void, fileName?: string): Promise<AssetContainer>;
    private _getParser;
    private _parseMesh;
    private _buildGeometry;
}
