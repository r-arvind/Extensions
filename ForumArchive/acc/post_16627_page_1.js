[{"Owner":"andrew_","Date":"2015-08-21T10:15:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I made a test of concept demo which gave me an ok frame rate on my laptop... not sure what it is but quite acceptable ... maybe 30 f.p.s. something like that. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It has 12 spheres and 102 cylinders all standard babylon meshes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When I run it on an iPad 4_co_ it does about 1 frame per second on either Chrome or Safari._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is this expected performance on iPad?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I see some webGL demos on iPad 4 that look like they have an ok framerate._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks very much for help._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-08-21T11:15:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For mobile devices I use this bit of code to ensure I get above 50fps on a modern device._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_engine.setHardwareScalingLevel(1)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tableuraz","Date":"2015-08-21T12:38:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve had the issue_co_ and fixed it by reducing the amount of vertices of each mesh and merging mesh_co_ also_co_ changing the hardware scaling level helps a lot (and the iPad doesn_t_t seem to play well with big textures_co_ be sure to run a scene optimizer in order to reduce the textures resolutions). If you need help on how to set up your own sceneOptimizer_co_ either go read the tutorial or ask me_co_ I would be more than happy to make a playground to show it.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"andrew_","Date":"2015-08-21T14:49:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you very much._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]