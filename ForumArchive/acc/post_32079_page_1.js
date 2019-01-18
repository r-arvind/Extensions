[{"Owner":"simon_bg","Date":"2017-08-01T11:57:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello everyone_co_ _lt_br /_gt__lt_br /_gt_\n\tIs is possible to implement some occlusion or LOD-like mechanism for sprites in Babylon?  I have a scene with a very large terrain and some forest areas represented by thousands of tree sprites. There are so many sprites that they actually affect performance. _lt_br /_gt__lt_br /_gt_\n\tCould someone point me in the right direction? Is there a way to adapt LOD for sprites? Or could I put the camera into some kind of transparent mesh and in some way occlude the sprites behind the mesh walls?_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-01T21:47:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhy not relying on actual lod for meshes and use planes with billboard to simulate sprites?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"simon_bg","Date":"2017-08-02T07:20:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you for your response!_lt_br /_gt__lt_br /_gt_\n\tI tried to do that_co_ but unfortunately the performance is waaay worse with meshes_co_ even using instances and LOD with small distance to the camera_dd__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KBBWVT%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KBBWVT#1_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tWith 10000 sprites it renders with 60 FPS on my computer_co_ but using 10000 planes with instances and LOD results in 20 FPS _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-08-02T09:34:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19049-simon_bg/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19049_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19049-simon_bg/_qt_ rel_eq__qt__qt__gt_@simon_bg_lt_/a_gt_ Could you send me a playground with an examples with sprites ? I_t_ll code a lod function for this._lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"simon_bg","Date":"2017-08-02T10:33:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tLike this_co_ you mean? _lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KBBWVT%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KBBWVT#2_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-08-02T12:20:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KBBWVT%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KBBWVT#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe performance is almost the same as billboards\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"simon_bg","Date":"2017-08-02T13:02:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat_t_s a pity..._lt_br /_gt__lt_br /_gt_\n\tThank you for your time anyways!_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]