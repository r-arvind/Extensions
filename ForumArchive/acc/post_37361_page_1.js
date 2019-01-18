[{"Owner":"1glayfan","Date":"2018-05-02T17:24:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOn certain scene_co_ I noticed (by checking the debug panel) that the # of active meshes is always the same_co_ which is pretty much all the meshes in the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is not expected as I expect only the meshes visible from the camera should be active. For ex_dd_ If I view just the ground mesh_co_ the # active mesh should be close to 1_co_ but in my scenario it does not change.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny idea why would this happen ? I don_t_t do anything special with regard to forcing/unforcing the active state of the meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-02T17:30:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI might be mistaken_co_ but even if they are not enabled I believe they still come up as active._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/image.png.ebbafe3a959a84826072c2bfa0f0b06c.png_qt_ data-fileid_eq__qt_18096_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18096_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/image.thumb.png.fb9678949df62b1e9c8b77c545539e79.png_qt_ alt_eq__qt_image.thumb.png.fb9678949df62b1e9c8b77c545539e79.png_qt_ /_gt__lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat are you trying to accomplish?_lt_br /_gt_\n\tI think you are looking for isVisible count not isActive count_co_ perhaps?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-02T17:40:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7157-mattstyles/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7157_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7157-mattstyles/_qt_ rel_eq__qt__qt__gt_@mattstyles_lt_/a_gt_ or anouther admin please move this to the correct forum?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"1glayfan","Date":"2018-05-02T17:40:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe counter I am referring to is the _t_Active meshes_t_ as shown in the pic you attached.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNormally the value of this counter will reflect the actual # of meshes which I can see (via the camera).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor ex_dd_ I am looking at the ground only_co_ then it should be 1. If I am seeing 2 boxes only_co_ the it should be 2.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut for this particular scene_co_ the _t_Active meshes_t_ stays the same all the same (and it is almost as many as  all the meshes in the scene)_co_ it does not matter where I look in the camera. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-02T17:42:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you make a PG to demonstrate?_lt_br /_gt_\n\t_lt_br /_gt_\n\tCause it seems to be working on the example I provided.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"1glayfan","Date":"2018-05-02T19:04:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ it_t_s a little tricky to port it to PG but I will try. Thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-02T20:51:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis should not be the case so either you hit a bug or there is a good reason for that  (like scene.freezeACtiveMeshes or mesh.alwaysSelectAsActiveMesh _eq_ true).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t//Also_dd_ moved the post to the correct forum.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"1glayfan","Date":"2018-05-02T22:07:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s very interesting you mentioned those 2 calls _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTrying to remedy the situation I actually did try to call the opposite of both calls. Once for the scene.unfreezeActiveMeshes and one call for mesh.alwaysSelectAsActiveMesh _eq_ false for each mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately it did not help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am not sure if I can reproduce the issue in PG_co_ but I will try.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]