[{"Owner":"lostwoods91","Date":"2016-09-28T11:16:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi everyone!\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti_t_m trying to make a function that zooms my scene to fit all screen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is a playground example of my code_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#EHLMG%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#EHLMG#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can ignore the computeBounds() and drawBox() functions_co_ they are only auxiliary tools.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tas you can see_co_ the function doesn_t_t fit the entire node on screen... _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tdo i have to make some computations on the fov parameter? or is it just the obvious angle of view of my camera?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthank you!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLoris\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"lostwoods91","Date":"2016-09-28T12:04:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSOLVED!\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti thought that fovMode VERTICAL_FIXED meant that the fov parameter_co_ free to change_co_ was the HORIZONTAL fov!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit_t_s related to the VERTICAL fov_co_ instead...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin fact_co_ thinking about it_co_ two fov parameters can_t_t exist in the same context.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tnow i have another problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhen at runtime i change my camera_t_s fovMode_co_ i don_t_t see any change at screen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti_t_ve to manually edit fov parameter to see some changes. why?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-28T16:14:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tFixed (See your other post_dd_))\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]