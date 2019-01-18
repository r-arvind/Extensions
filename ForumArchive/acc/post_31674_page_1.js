[{"Owner":"Kreeba","Date":"2017-07-16T09:21:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_div style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\tI am building the GUI for my Bridge Sim. The end result will be something like the images below. The game is in 3D_co_ but the weapons view is a locked camera on top.\n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\tVisually I would like it to look like the top image here_co_ with a pulsing gradient texture. Functionally I would need to be able to set a _t_forward_t_ angle and then the beginning and ends of the arc (up to a full circle)_co_ then the arc would move with the gun/ship as it rotated.\n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\tI am guessing that it is best achieved in 3D_co_ rather than 2D so I can use animated materials and textures. What is the best direction to go and how should I get started?\n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\t_lt_img alt_eq__qt_687474703a2f2f63662e6765656b646f2d696d61_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_https_dd_//boardgamegeek.com/camo/5281bc5eabf5f6560a464dc136f5322c2b35540b/687474703a2f2f63662e6765656b646f2d696d616765732e636f6d2f696d616765732f706963313433313339382e706e67_qt_ /_gt__lt_img alt_eq__qt_300px-Weapon_Broadside.png?version_eq_444a2_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_https_dd_//hydra-media.cursecdn.com/sto.gamepedia.com/thumb/9/95/Weapon_Broadside.png/300px-Weapon_Broadside.png?version_eq_444a22f88a87bed299946ca481f9a34d_qt_ /_gt__lt_img alt_eq__qt_weapon-arcs.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_722_qt_ src_eq__qt_https_dd_//theenginescannaetakeit.files.wordpress.com/2010/02/weapon-arcs.jpg_qt_ width_eq__qt_1000_qt_ /_gt__lt_/p_gt_\n_lt_/div_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-07-16T10:15:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/jbousquie/UserFunctions/blob/master/showAngleSector.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/jbousquie/UserFunctions/blob/master/showAngleSector.js_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#FUK3S%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#FUK3S#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twith _lt_em_gt_sectorType_lt_/em_gt_ paramater equals 3\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-16T11:26:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t think that will handle a firing arc more than 180 degrees? I would need to to generate up to a full circle.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-07-16T11:37:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\twhy not ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-16T11:46:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBecause it uses the shortest angle between two axis to draw the arc.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-07-16T12:10:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_181930_qt_ data-ipsquote-contentid_eq__qt_31674_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1500205615_qt_ data-ipsquote-userid_eq__qt_27667_qt_ data-ipsquote-username_eq__qt_Kreeba_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t16 minutes ago_co_ Kreeba said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBecause it uses the shortest angle between two axis to draw the arc.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe given example is calculating the angle from two given vectors and is designed to use the smallest angle. In your case it seems that you already know the angle and so it does not have to be calculated. Hence the example can be adapted_co_ as a starting point_co_ to meet your needs _co_ you just pass the start vector and the angle rather than two vectors._lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-16T13:12:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI worked something out_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#84JJ9K%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#84JJ9K#6_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-16T13:23:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI tried to complete the function to meet the same standards as the inbuilt ones by passing the _t_scene_t_ object in as the last parameter. It would crash the PG though. What am I doing wrong?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-07-16T13:56:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPossibly because you had scene after a missing optional parameter. In this PG _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#84JJ9K%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#84JJ9K#7_lt_/a_gt_ you have to put in the centerAngle. If you want some parameters to be optional they must follow all the required parameters_co_ see _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#84JJ9K%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#84JJ9K#8_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-17T13:01:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOK. This might possibly need a maths genius.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can I now check to see if an X/Z coordinate falls within the the arc?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-17T13:26:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI guess_co_ if I ignore the arc and just treat it as a AABB style detection. See if the object is within the two angles of the detector object. Then check for min and max distances.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hate maths_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//nic-gamedev.blogspot.com/2011/11/using-vector-mathematics-and-bit-of.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//nic-gamedev.blogspot.com/2011/11/using-vector-mathematics-and-bit-of.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//stackoverflow.com/questions/13652518/efficiently-find-points-inside-a-circle-sector_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//stackoverflow.com/questions/13652518/efficiently-find-points-inside-a-circle-sector_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tToo be honest I could use a little help converting this into something that will work with Babylon/pure JS. Also would need a Min/Mac distance check (he talks about this at the bottom)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-07-17T13:53:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you are happy with AABB detection use intersectMesh_co_ you can always do a more refined check on top.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#84JJ9K%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#84JJ9K#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlines 49 are the important ones.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-17T13:55:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks. I need to do this without Babylon as it also has to run on the server for verification. The second link I posted looks the easiest. However my maths is nowhere good enough to think how it will work if the gun is parented to a moving ship_co_ and the gun is fixed (so the firing arc will move).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-17T16:42:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDone it. that was HARD!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#84JJ9K%2310_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#84JJ9K#10_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-17T17:14:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCleaned it up a little_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#84JJ9K%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#84JJ9K#11_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-07-17T19:18:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWell done_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-17T19:22:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOK this has absolutely stumped me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to get it to work with y axis rotation (for when the ships are turning)........I applied a offsetAngle variable to the code_co_ but it totally messes up when the radians flip from + to - \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anyone help with the best way to handle y axis rotation?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sable","Date":"2017-07-17T23:00:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis seemed interesting_co_ so I had a play about with it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#P4IH5X%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#P4IH5X#1_lt_/a_gt__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not entirely sure if that_t_s sort of what you were getting at or not_co_ so let me know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#P4IH5X%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#P4IH5X#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMistake in first pg when sphere not at origin_co_ see lines 110 to 112 --&gt_sm_ I_t_d translated an already translated point\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-18T03:15:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks sable_co_ that looks exactly what I want. I will go through and try to understand it a little later.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-18T04:16:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSable_co_ could this be adapted so it didn_t_t use the babylon line let _lt_strong_gt_distance _eq_ BABYLON.Vector3.Distance(point_co_ center)_sm_?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEventually I would like to also run this function server-side for verification_co_ and wouldn_t_t have access to the Babylon framework? This is why I did my own distance calculation using sqrt before.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sable","Date":"2017-07-18T04:21:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep_co_ it can be done in the same way you were calculating distance before. The vector subtraction could also easily be done without babylonjs. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-18T04:25:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCheers. Is that the point.subtractToRef(center_co_ _translatedPoint)_sm_ line? This is some maths I have never seen before. What does it do?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sable","Date":"2017-07-18T04:32:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAll that is doing is subtracting the center vector from the point vector and storing it in another vector called _translatedPoint.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Vector3.prototype.subtractToRef _eq_ function (otherVector_co_ result) {\n    result.x _eq_ this.x - otherVector.x_sm_\n    result.y _eq_ this.y - otherVector.y_sm_\n    result.z _eq_ this.z - otherVector.z_sm_\n    return this_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-18T04:35:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I have begun ripping out source from Babylon as well.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kreeba","Date":"2017-07-30T19:38:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks for everyones help. I got them working fine with detection as well. Marked as solved\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]