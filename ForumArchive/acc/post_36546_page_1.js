[{"Owner":"Pryme8","Date":"2018-03-22T00:26:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am working on converting_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/spacejack/poaceae/blob/master/ts/grass.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/spacejack/poaceae/blob/master/ts/grass.ts_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tto a playground._lt_br /_gt_\n\t_lt_br /_gt_\n\tI have gotten to this part_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_const geo _eq_ new THREE.InstancedBufferGeometry()\n\t// Make a giant bounding sphere so the mesh never goes out of view.\n\t// Also_co_ because there are no position vertices_co_ we must create our own bounding sphere.\n\tgeo.boundingSphere _eq_ new THREE.Sphere(\n\t\tnew THREE.Vector3(0_co_0_co_0)_co_ Math.sqrt(opts.radius * opts.radius * 2.0) * 10000.0\n\t)\n\tgeo.addAttribute(_t_vindex_t__co_ new THREE.BufferAttribute(buffers.vindex_co_ 1))\n\tgeo.addAttribute(_t_shape_t__co_ new THREE.InstancedBufferAttribute(buffers.shape_co_ 4))\n\tgeo.addAttribute(_t_offset_t__co_ new THREE.InstancedBufferAttribute(buffers.offset_co_ 4))\n\tgeo.setIndex(new THREE.BufferAttribute(buffers.index_co_ 1))_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand am trying to figure out the BJS equivalent._lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JPJVL4%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JPJVL4#1_lt_/a_gt__lt_br /_gt_\n\tApprox Line 49 is where this section would need to go.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-22T16:57:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/3.1/instancingattributeinfo_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/classes/3.1/instancingattributeinfo_lt_/a_gt_ maybe?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-22T17:05:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI added comment inline_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JPJVL4#2_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JPJVL4#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-22T17:13:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JPJVL4%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JPJVL4#3_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tI get a error when I follow along with those instructions._lt_br /_gt_\n\t_lt_span style_eq__qt_background-color_dd_#c73228_sm_color_dd_#ffffff_sm_font-size_dd_medium_sm__qt__gt_Line 19_dd_4984 - t.getKind is not a function_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-22T17:31:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry I was unclear_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JPJVL4#3_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JPJVL4#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-22T20:08:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JPJVL4%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JPJVL4#6_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tSo is this correct now?_lt_br /_gt_\n\t_lt_br /_gt_\n\tI noticed that I prolly needed to change_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var vIndexBuffer _eq_ new BABYLON.Buffer(engine_co_ new Float32Array(args.BLADE_VERTS * 2 * 1)_co_ false_co_ 2)_sm_\nvar shapeBuffer _eq_ new BABYLON.Buffer(engine_co_ new Float32Array(4 * args.numBlades)_co_ false_co_ 4_co_ false_co_ true)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tto_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var vIndexBuffer _eq_ new BABYLON.Buffer(engine_co_ this.buffers.vID_co_ false_co_ 2)_sm_\nvar shapeBuffer _eq_ new BABYLON.Buffer(engine_co_ this.buffers.shape_co_ false_co_ 4_co_ false_co_ true)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\totherwise the data I built wont be included if I_t_m not mistaken?_lt_br /_gt_\n\t_lt_br /_gt_\n\tThen what_co_ is this on the mesh as a VBO?_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-23T18:21:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you called setVerticesBuffer_co_ yes!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]