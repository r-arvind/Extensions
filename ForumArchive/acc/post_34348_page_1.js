[{"Owner":"brianzinn","Date":"2017-12-02T02:55:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust a question about floorMeshName.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_export interface VRTeleportationOptions {\n   floorMeshName?_dd_ string_sm_ // If you_t_d like to provide a mesh acting as the floor\n   floorMeshes?_dd_ Mesh[]_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI was expecting from that comment a different comparison than (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/VR/babylon.vrExperienceHelper.ts#L498_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/VR/babylon.vrExperienceHelper.ts#L498_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (this._floorMeshName &amp_sm_&amp_sm_ mesh.name _eq__eq__eq_ this._floorMeshName) {\n  return true_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tOtherwise if you set the floor mesh name to _t_ground_t_ and then had another mesh like _t_ground-cover_t_ or any mesh _t_ground_t_ as a substring would be teleportable.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-12-02T03:32:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyup definitely agree. Ping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-12-02T04:12:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf that_t_s the case then assuming the mesh already exists you could do here (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/VR/babylon.vrExperienceHelper.ts#L511_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/VR/babylon.vrExperienceHelper.ts#L511_lt_/a_gt_)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (vrTeleportationOptions) {\n  if (vrTeleportationOptions.floorMeshes &amp_sm_&amp_sm_ Array.isArray(vrTeleportationOptions.floorMeshes)) {\n    this._floorMeshesCollection _eq_ vrTeleportationOptions.floorMeshes_sm_\n  }\n\n  if (vrTeleportationOptions.floorMeshName) {\n    let floorMesh _eq_ this_scene.getMeshByName(vrTeleportationOptions.floorMeshName)_sm_\n    if (floorMesh) {\n      this.addFloorMesh(floorMesh)_sm_ // assuming you added a method to add/remove meshes or this._floorMeshesCollection.push(floorMesh)\n    }\n  }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tI like highlightLayer addMesh() and removeMesh().  Glad to see the floor mesh collection added_co_ as I have a bunch of teleportable meshes!  I guess I_t_m just expecting it to work like HighlightLayer/ShadowGenerator to allow changed after enabling teleportation _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I_t_m happy to do a PR.  Looks incredible in Windows Mixed Reality. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2017-12-02T08:05:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep you_t_re right! Please do a PR to change that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen providing a collection of meshes I_t_m comparing to the ID. So_co_ we won_t_t have this problem.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-12-02T09:44:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPR in progress will test Monday before merging\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]