[{"Owner":"tamarind","Date":"2015-05-30T00:33:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m trying to get a simple scene working with the Oculus but I really dont understand how to get this to work._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is no issue with the Oculus setup_co_ I have loads of games and demos working. I ran the installation for the driver and am using IE 11_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have swapped my FreeCamera for an OculusCamera which gives me the dual windows in the browser but how do i get this sending to the Oculus itself. Moving the Oculus around doesnt do anything either and im not sure where i could check for the incoming events that the driver is meant to capture._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What am I missing here? Everyone else just seems to plug and play!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Rubis","Date":"2015-06-01T08:16:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if you rift is a dk2 it doesn_t_t work_co_ the driver was specified for a DK1._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But you can still use babylon and the rift. You need to use WebVR  with a compatible browser( link bellow) and then use the webVRCamera available in Babylon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Unfortunatly WebVR technologie is a draft so spécification move quickly and aren_t_t stable_co_ that why currently the WebVRCamera doesn_t_t work anymore ( delta work on it) so you must be patient._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if you really want to work on rift right now_co_ you can download an old version of browser ( like chronium VR 41 &lt_sm_---- AREN_t_T STABLE AT ALL) and use the webVRCamera._lt_/p_gt__lt_p_gt_You might be change some axis because the quaternion to euler angle convertion do messy thing ( some math skill do the job _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Chronium VR_dd_ _lt_a href_eq__qt_https_dd_//drive.google.com/folderview?id_eq_0BzudLt22BqGRbW9WTHMtOWMzNjQ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/folderview?id_eq_0BzudLt22BqGRbW9WTHMtOWMzNjQ_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_MozVR_dd_ _lt_a href_eq__qt_http_dd_//mozvr.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//mozvr.com/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_WebVR_dd_ _lt_a href_eq__qt_http_dd_//webvr.info/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//webvr.info/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_WebVrCamera statut _dd_ _lt_a href_eq__qt_http_dd_//babylonjs.uservoice.com/forums/267546-general/suggestions/7811055-to-update-the-webvr-camera_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.uservoice.com/forums/267546-general/suggestions/7811055-to-update-the-webvr-camera_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_ be aware that WebVR is a draft and browsers like chronium are far from a Beta_co_ FPS are divided by two and moreover latency and judder are inevitable._lt_/p_gt__lt_p_gt_That why currently_co_ the rift experience with webVr disapoint a bit._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hope i help you and sorry for my poor english skill._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-06-01T15:37:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_We stopped direct Oculus support as it was just working on IE. WebVR is the way to go_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]