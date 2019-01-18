[{"Owner":"dbawel","Date":"2015-12-14T05:27:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I should have posted this a couple of months ago_co_ however it causes no problems with my scene_co_ only reports the console errors for the babylon.js 2.2 master file - which also apears to be the cause of reporting an error in my index.html file. So I just wanted to share these in case these are errors which the community may be unaware of_co_ and may need to be addressed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_  _lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-11286-0-69494100-1450070547.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-11286-0-69494100-1450070547.jpg_qt_ data-fileid_eq__qt_5826_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-11286-0-69494100-1450070547.jpg_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ it reports that it is not able to find my .mp4 file - however this video file loads correctly even though the console reports that it is not found._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-14T08:46:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi DB_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Those are chrome errors_co_ not Babylon.js_t_s. B.js might have tried downloading them_co_ but chrome reports 404._lt_/p_gt__lt_p_gt_I tried the mp4 file - _lt_a href_eq__qt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/textures/Dora.mp4_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/textures/Dora.mp4_lt_/a_gt_ _co_ unless I misspelled_co_ the file really doesn_t_t exist. Maybe it is somehow cached in your browser_ maybe you gave two different URLs to the video texture? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-14T20:38:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@RaananW - the file does exist in the specified directory_co_ and is called correctly and plays correctly when the scene is loaded - which is why I posted the console messages_co_ as my scene works fine and all files including the Dora.mp4 is loaded as a video texture and plays correctly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you would like to see this working_co_ I have a test scne with this .mp4 file working - the .mp4 which generates the 404 error. This scene is WIP_co_ and geared toward a young demographic_co_ so it_t_s a bit cartoonish - but you can see the scene working_co_ and will find the console errors._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/index2.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/index2.html_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You may need to refresh a couple of times for all of the buttons to appear_co_ until I add refresh and loader functions to assure all elements load correctly before playing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-14T21:22:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi DB_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The .mp4 file is 404 not found. The video texture loads a webm file (Dora.webm - located at _lt_a href_eq__qt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/textures/Dora.webm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/textures/Dora.webm_lt_/a_gt_ ) that actually exists. The JPG file returns 404.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just want to make sure it really isn_t_t a B.js problem._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-14T21:44:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi RanaanW_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As you can see_co_ there is a Dora.mp4 file in the same directory as the Dora.webm file. So this is why I tought I might post the console errors as it was a concern. Also_co_ when I try and load this scene on my Android tablet_co_ the video will not play - even if I initiate a _lt_strong_gt__lt_em_gt_videoTexture.video.play() _lt_/em_gt__lt_/strong_gt_operation. Any ideas on how I might get the videoTexture to play on mobile devices? I thought that using a webm file and calling a play function would solve this. What might I be missing?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-11286-0-69300300-1450129451.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-11286-0-69300300-1450129451.jpg_qt_ data-fileid_eq__qt_5828_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-11286-0-69300300-1450129451.jpg_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-14T22:00:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi DB_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_filenames are case sensitive. dora.mp4 is not the same as Dora.mp4 _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To play the video on mobile devices you will have to create a user interaction (videos won_t_t auto play on mobiles). I updated the advanced texturing doc_co_ explaining how to do that. check video texture on this page - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/01._Advanced_Texturing_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/01._Advanced_Texturing_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-14T22:23:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi RaananW_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ this of course I am aware - so I made an idiot mistake which is why the 404 error just showed itself - as I was writing out different video files to test last week to try and get the video texture to play on mobile. Dumb mistake which is now corrected. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ alt_eq__qt__dd_blink_dd__qt__gt_ The file is returned to it_t_s uppercase name_co_ and the 404 error is gone_co_ duh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ all other errors for the babylon.2.2.js master file are still the same as the image of the console I posted earlier - so I wanted you to know to make certain that there is not an issue with the master file. If you try this link again_co_ you_t_ll see that the scene is calling the .Dora.mp4 file correctly again_co_ and you_t_ll see the babylon.js error in the console and be able to look at the specific lines in the babylon.js master file which are providing the WebGL GL_Texture_2D and other errors - so it_t_s worth looking at to perhaps know the cause._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So yes_co_ it was playing the .webm file on my desktop since I negated the .mp4 file by naming incorrectly on export while testing. Now it is using the .mp4 file again._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I still cannot get the videoTexture to play on my tablet - even though I have the play and pause controls set to GUI buttons on the interface - which as you can see work fine on the desktop. So why wouldn_t_t they work on the tablet - as you directed me to do this several times_co_ and I_t_ve done specifically as documented_co_ but this still only works on my desktop. Any other thoughts as to why the .webm file might not play? I_t_ve written various .webm files out of several different imaging applications_co_ so I don_t_t believe that it is a formatting_co_ codec_co_ or compression issue - but of course_co_ I cannot be certain. If you have a .webm file that you know works on Anroid tablets_co_ it would help me if I could call a known working file to rule out file issues._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_em_gt_EDIT - _lt_/em_gt_I just again set the following in my script_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_div_gt_scene.onPointerDown _eq_ function () { _lt_/div_gt__lt_div_gt_  videoTexture.video.play()_sm__lt_/div_gt__lt_div_gt_}_lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_And as before_co_ I cannot get the video to play on the tablet - and I_t_ve tried everythig you_t_ve been suggesting these past weeks_co_ as well as everything else I could think of doing._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-14T22:58:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_just checked on my android device - works. But requires patience._lt_/p_gt__lt_p_gt_I believe the entire film buffered before it started playing. This might be server related_co_ or device related. If the server doesn_t_t support streaming (206 status)_co_ the entire file would have to be downloaded before playing it. I can_t_t debug it at the moment. check on your end if it starts playing after a minute or two._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-14T23:07:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you so much for your help on this post today. I did wait almost a minute_co_ as I knew it required to buffer the entire video - but I did not wait long enough obviously. I_t_m still trying to get the scene to play_co_ and it would be helpful to know what actions you used to get the video to play._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Upon loading_co_ when you see the black screen (videoTexture plane mesh)_co_ do you simply wait and then hit the play button? Or what actions did you take to get this to work? Also_co_ what tablet are you using?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-15T07:22:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Morning_co__lt_/p_gt__lt_p_gt_All I did was press the play button and waited. I tested this on my android smartphone_co_ running stock Android 5.1.1_lt_/p_gt__lt_p_gt_Just a note - when testing this morning_co_ the play button only started the audio and not the video. The screen stayed black. Did you change anything?_lt_/p_gt__lt_p_gt_Would be great to know if anyone else tested the scene and saw (or didn_t_t) dora. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-15T08:56:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The scene has not changed at all_co_so there should be no change in behavior. I_t_m running 4.4.2 on my Sony Xperia Z2 Anroid tablet_co_ and the behavior you_t_re reporting is exactly what I would expect as that is the way I_t_ve build the function into the scripts. However_co_ on my tablet_co_ when I hit the play button_co_ the screen turns white (in chrome)_co_ and I receive a meesage that says _qt_oops - WebGL hit a snag._qt_ - and then there is a hypertecxt on the bottom right of the screen that says LEARN MORE_co_ RELOAD_co_ or IGNORE.  When I hit reload_co_ the screen reloads and the same process occurs when I hit the play button and the browser screen turns white again upon refresh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If anyone else reading this could please follow the link below and onc the scene is loaded with a black screen_co_ please press the play button and let me know what happens and what device and version of Anroid you_t_re using - or other OS such as Apple. This is the only way I can think of to perhaps begin to understand why my tablet will not play the video will not play for me but plays for RaananW._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Please test on your tablet if you can_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/index2.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/index2.html_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-12-15T12:40:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Hi_co__lt_/div_gt__lt_br_gt__lt_div_gt_you have to try the ogv format. not sure it changes a lot_co_ but depending on the browser_co_ certain format are not supported. Or maybe the file is too large for the tablet._lt_/div_gt__lt_br_gt__lt_div_gt_Try with a small video file and with 3 formats (mp4_co_ webm and ogv) to test._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-15T21:38:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Dad72 and RaananW_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_OK_co_ I_t_m now using the .ogv file format for my video texture_co_ and the scene is working - except I_t_m finding the same behavior as RaananW - which is no video image_co_ only audio playback with the play and pause buttons working fine. I_t_m very confused as RW said he first was able to play both video and audio on his phone yesterday - but now only audio which is only what I am able to play back also. The scene still runs fine on desktop_co_ but I_t_m not certain how to proceed to fix video playback for mobile devices._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If anyone has any experience with this_co_ I would greatly appriciate any suggestions you might have. And thank you both Dad72 and RW for helping me to get this far_co_ as even audio playback is a good advancement._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Again_co_ if anyone can possible help to troubleshoot this_co_ the WIP link is_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/index2.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/index2.html_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not all buttons are attached to functions currently_co_ as I_t_m in the process of optimizing the code overall - and on a seperate script_co_ as I_t_ll keep this script consistant until I can solve the video playback problem on mobile devices. However_co_ the play and pause buttons are working correctly and you are still able to select a color and draw directly on the video._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-15T22:22:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi DB_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just checked once again - video is showing correctly on my android phone (see attachment)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Clicked play_co_ waited a bit_co_ and there is was._lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-10310-0-46640900-1450218149.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-10310-0-46640900-1450218149_thumb.png_qt_ data-fileid_eq__qt_5841_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10310-0-46640900-1450218149_thumb.p_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-12-15T22:37:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s strange if you had the sound and not pictures..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_I try with my _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_android phone_lt_/span_gt_ and I have the same problem. the sound but no picture. I have a black screen. _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I do not know why. I think of incompatibility or activate one option in the phone._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-12-15T23:00:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_I just see that I have a double screen on my browser. maybe this is the problem ?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-5292-0-08971200-1450220423.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-5292-0-08971200-1450220423.jpg_qt_ data-fileid_eq__qt_5843_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-5292-0-08971200-1450220423.jpg_qt__gt__lt_/a_gt__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_look at the picture center_co_ you have a second small video screen_lt_/div_gt__lt_br_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-16T01:15:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@Dad72_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ the artifact seen at the origin (cery tiny) has been in the scene since I began building the app months ago. I am not creating any additional objects other than what you see on screen_co_ and the only thing I can think of is that this is some kind of artifact from the bGui extension - but I_t_m not familiar enough with Temechon_t_s code to know if this is the case. However_co_ I have not had any conflicts whatsoever from any function or operation in my scene - so I don_t_t believe that this is contributing in any way to my video playback issue_co_ and I_t_ve never had any playback problems on my laptop with this artifact always present._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And as mentioned_co_ the scene works perfectly on desktops and laptops - and only has a problem on my tablet. I have been looking at this artifact_co_ and have a message into Temechon on this and another issue_co_ but haven_t_t heard back from him in a couple of days. I_t_m sure he_t_ll respond soon_co_ and I_t_ll ask him to see if he might have an idea if the bGui extension might somehow be causing this artifact. However_co_ I believe this is a bug in babylon.js from using multiple canvas_t_ to draw on a dynamic texture - but not certain why_co_ although I_t_m sure this is not contributing to the videoTexture playback issue. If you have time and are able to view the scene on a desktop or laptop_co_ you can see all connected GUI and other functions working correctly as you are able to select colors and paint on the video or a 3D object. And I can report that the draw function is working fine on mobile_co_ only that you are not able to see the result as the video plane mesh is rendered black without the video color on mobile devices - since the video is not playing any color image - there is no image_co_ only black with audio playing. And of course_co_ the play and pause buttons are enabled and working fine. And if any buttons do not load their images correctly_co_ you can refresh or simply use them without their images - however_co_ they usually load OK on refresh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ if I replace the videoTexture with an image_co_ the image displays correctly on all devices_co_ and allows me to paint on a textured 3D mesh or the same video plane which I_t_m attaching the videoTexture on. I have spent several weeks now trying to figure out why I cannot play a videoTexture on my tablet - but have not made this a huge priority until now as I still had many functions to build into the app. Now that I have practically every function built and am ready to complete the app (close to completion)_co_ I now have this as a priority to solve the mobile videoTexture playback problem. The scene I_t_ve directed the link below to is a version of the app that does not have all of the features_co_ as I stripped out everything that was not essential in order to work with a scene that only plays back video and still has the draw function embedded_co_ as the draw function using a dynamic texture is key to the app._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So if you or anyone else has time to look at my primary index.js script with the GUI_co_ scene creation_co_ and essential functions_co_ perhaps someone might be able to see what the problem is. Otherwise_co_ I have very little more to build for the app to be finished_co_ and it will be good if I could only get the scene to perform on mobile devices the same way it performs on desktops. I_t_ve attached a zip file of the script (index.js) to this post if anyone has the time to review_co_ and below is a new link to the scene using the attached index.js file_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/index11.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/index11.html_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you and everyone very much for your time_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-12-16T01:35:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Sorry I have no idea of ​​the problem. For against yes_co_ the small double image is caused by the orthographic camera bGUI. I already had this problem when I try. and I ended up construir CastorGUI._lt_/div_gt__lt_br_gt__lt_div_gt_I think you can used with layerMask this problem to avoid duplicates._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I hope you find the solution._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-16T02:31:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Dad72_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not certain how I might implement layer masks to correct the duplicate scene objects artifact. If you have any examples I might review_co_ it would be very helpful._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ I really like bGUI_co_ however_co_ I_t_ve been anxious to try CastorGUI - but it has taken me much longer than expected to finish my current app due to serious family illness which I_t_ve had to dedicate much of my time lately. But now I have to deliver the drawing app for beta testing to a couple of companies by the first week of January. But my next app will use CastorGUI_co_ and I_t_m looking forward to pushing the envelope as far as possible with the next app - which is a multi-user real-time social app to share Facebook_co_ YouTube_co_ personal media_co_ and many of the most popular social sites - by groups of friends simltaniously synced in real-time. I already have many of the functions working_co_ but no GUI as of yet - so I_t_ll be diving into this by mid-January._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks so much_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-16T06:05:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Finally - I have the video and audio correctly playing on all tested mobile devices_co_ browsers_co_ and OS versions. The problem was a video encoding issue. Although I used every application I could including Premiere_co_ Sony Vegas_co_ and so many others_co_ and attempting to encode videos using literally every online converter to .webm and .ogv_co_ none of these would provide proper encoding for playback on all mobile devices - yet none of these formats which I encoded in various applications and online played back both video and audio correctly on my desktops and of course laptops. And I had no idea if it was a conflict in my scripts_co_ an issue with multiple canvas_t_ and dynamic materials and textures_co_ or some unknown bug I_t_d had the bad fortune to run into._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So the solutions I found are to use either Sony Vegas_co_ Premiere (which I was already using to encode video and audio)_co_ although I now prefer and recommend the VLC player/converter for encoding .mp4 video files for the very best control and optimization for an HTML5 video or a videoTexture in babylon.js - within all browsers I tested today. So encoding and playback .mp4 video files using most video editors and encoders was never a problem on desktops and most browsers_co_ but the best solution in my opinion for .mp4 is definately the VLC player/converter._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now_co_ for the main problem which I have been having playback issues for 2 months now_co_ is that I could not encode a .webm or .ogv video file for playback on all mobile devices_co_ and at best_co_ only audio and rarely video playback worked - dependng on the mobile device and the browser on various tablets and phones - both Android and Iphone._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So in despair I kept at it_co_ and after trying practically everything I could think of_co_ I spent the past two days just working on encoding and analyzing the resulting video_co_ compression_co_ bitrates_co_ etc. What I discovered is that if I encode both the .webm and .ogv using the FireFogg extension for FireFox_co_ and using the correct advanced settings_co_ I now have video files which so far have played back both video and audio correctly on multiple mobile devices_co_ OS versions_co_ and browsers without fail._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I found that I did not need to modify my scene (scripts and application) in any way - that the problem was only due to encoding and conversion of video files. I have read other posts in the past where users have had similar issues and there was apparently no solution_co_ so I hope now that no one else has to go through the lengthy troubleshooting process which I had to do - along with all of the other seasoned users on this forum who aided me as much as they were able._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If anyone needs the general conversion settings and specifics I found to universally work for video and audio on most all devices_co_ browsers_co_ and OS versions_co_ please let me know and I_t_m happy to post these. If you believe this is appropriate to add to the documentation site_co_ I_t_ll certainly update the site - however_co_ these might change in future revisions of browsers and OS versions_co_ but I doubt it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So for me_co_ this is a banner day. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Although_co_ it has been one of the most painful periods I_t_ve ever spent troubleshooting ny application_co_ since there is no consistant documentation online for HTML5 video encoding for mobile devices - as nothing I read online worked. And as working in baylon.js is generally new to practically all of us and evolving rapidly_co_ there was no basis for believing it wasn_t_t in my scripting or usage. I simply tried everything and stumbled upon a very reliable set of encoding solutions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you to all those who responded to my posts and put in the time to provide help. I_t_m just very happy that I found a solution - not only for me_co_ but for everyone who might now avoid any incompatabilities in the future._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]