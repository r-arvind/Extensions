[{"Owner":"pwetpwet","Date":"2014-04-15T12:28:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Hello_co__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I created a scene (with blender) composed of cubes and a map (plan). _lt_/div_gt__lt_br_gt__lt_div_gt_I checked _qt_enable collisions_qt_ for all my objects and only put a mass to my cubes. _lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_But I have a problem in blender I can_t_t choose _qt_mesh_qt_ for my plan to export otherwise it create me an error_co_ so I have to export it as a box. _lt_/div_gt__lt_br_gt__lt_div_gt_But in box mode_co_ if my cube is outside the map (the map is pierced in the middle)_co_ the cube stops falling anyway because I chose the box mode. _lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I read that there was a notion of precision_co_ but I did not find in blender. _lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Thank you for your help._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I work with blender 1.68a and Babylon.js 1.10._lt_/div_gt__lt_br_gt__lt_div_gt_An example to my problem_dd__lt_/div_gt__lt_br_gt__lt_/div_gt__lt_br_gt__lt_div_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/48211107/babylonjsBlender.rar_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//dl.dropboxusercontent.com/u/48211107/babylonjsBlender.rar_lt_/a_gt__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-15T20:23:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Beware_dd_ collisions are related to camera (first person) collisions_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You need physics in your case I think. If you want your box to fall_co_ you have to give it a mass. Without mass_co_ it will be static (but still physic)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pwetpwet","Date":"2014-04-16T08:24:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Physics and mass work fine_co_ cubes fall on the map._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Like this_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//img15.hostingpics.net/pics/707762cap1.jpg_qt_ alt_eq__qt_707762cap1.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//img15.hostingpics.net/pics/480973cap2.jpg_qt_ alt_eq__qt_480973cap2.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But when he fall_co_ the collisions are detected like a box for my plan_co_ because I select _qt_box_qt_ in shape property._lt_/p_gt__lt_p_gt_The _qt_mesh_qt_ or _qt_converx hull_qt_ in shape property make an error when I export blender to babylon._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-16T16:16:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh yes. Right now we only support (due to cannon.js) box_co_ plane and sphere _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pwetpwet","Date":"2014-04-16T18:34:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh ok!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To try babylon.js_co_ I have thinking to create a little car game._lt_/p_gt__lt_p_gt_In my example_co_ the cube will be the car._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you think it_t_s possible? If collision detect only box_co_ plane and sphere_co_ I think I have a big problem_co_ because the solution is to make a walls on my map _co_ but the wall can_t_t be a box_co_plane or sphere too _co_ they are round. And I think the car will be on the wall if the map is like a cube too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Futhermore_co_ I don_t_t know how to know if the cube is on the map._lt_/p_gt__lt_p_gt_The fonction IsIntersect() will give me the same problem with collisions?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you very much for all of your answers._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Artem","Date":"2014-04-16T19:50:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just _t_draw_t_ all the collision using boxes through the path_co_ you can go with round walls using boxes as well (just place them that way)_sm_ probably not the best solution by far_co_ but that_t_s an option_co_ I think. If I were you I would write my own physics rules. Yeah_co_ that_t_s a pain_co_ but that would be much better than using boxes as walls everywhere. Just my opinion here_co_ not even a tip _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pwetpwet","Date":"2014-04-18T11:08:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I undestand_co_ thank you._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will try all of your options._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pwetpwet","Date":"2014-04-20T09:37:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have create a square map in _qt_block_qt_(multi box) to make an easy map_co_ it_t_s not funny to design with blender but it_t_s work. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Secondly_co_ I have try to move a cube in the runRenderLoop function with for example_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.position.y +_eq_0.1_sm__lt_/pre_gt__lt_p_gt_But the position don_t_t change_co_ the position stay in the absolute position._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It is normal? Maybe babylon.js have I option to stay in the absolute position?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thx you._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Artem","Date":"2014-04-20T12:20:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When you use physical objects you can_t_t move them just like that (at least I don_t_t know how at moment)_co_ but you can apply some force to them_co_ or (even better) place your box on a sphere (make a group) and then make a motor from sphere (or just rotate it_co_ I don_t_t know_co_ didn_t_t played much with it). I think you need to take some closer look at _lt_a href_eq__qt_https_dd_//github.com/schteppe/cannon.js_qt_ rel_eq__qt_external nofollow_qt__gt_cannon.js_lt_/a_gt__co_ also you can try motor function or _t_applyForce_t__co_ or _t_applyImpulse_t_. Just my thoughts_co_ but that should help you with your project there. Good luck_co_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/user/8189-pwetpwet/_qt_ title_eq__qt__qt__gt_pwetpwet_lt_/a_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]