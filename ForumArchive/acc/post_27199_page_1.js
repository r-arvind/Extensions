[{"Owner":"MackeyK24","Date":"2016-12-20T13:17:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there anything like _qt_Stage Width and Height_qt_... I am asking because i am getting some weird scaling where the X scale looks like it _qt_real skinny_qt_ ONLY when i change the #renderCanvas to try and make 600 x 900 canvas center in page... Centers and looks great but my models look _qt_SQEEZED_qt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_10859_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/58592e424705e_ScreenShot2016-12-20at3_12_02AM.png.14e371c10014c680323a789c2d3e3d0b.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Screen Shot 2016-12-20 at 3.12.02 AM.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10859_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/58592e437075a_ScreenShot2016-12-20at3_12_02AM.thumb.png.a6262d248c7e44707d014e45292108f8.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now i get by by just adding a little KLUDGE to the scaling.x by giving it an offset... Should look more like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_10861_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/58592ed1dfbc0_ScreenShot2016-12-20at3_13_40AM.png.5c69b3d61df9c1851870f7aff651222e.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Screen Shot 2016-12-20 at 3.13.40 AM.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10861_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/58592ed36bc32_ScreenShot2016-12-20at3_13_40AM.thumb.png.3c585ebe8ef7b10ff7f9c250da5041ca.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there some kind of stage width and height and or scaling options we have to set when not using a canvas at 100%\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere my my #css_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        #cvs {\n            position_dd_ absolute_sm_\n            width_dd_ 600px_sm_\n            height_dd_ 900px_sm_\n            margin_dd_ auto_sm_\n            top_dd_ 0_sm_\n            left_dd_ 0_sm_\n            right_dd_ 0_sm_\n            bottom_dd_ 0_sm_\n            padding_dd_ 0_sm_\n            opacity_dd_ 0_sm_\n            z-index_dd_ 0_sm_\n            outline_dd_ none_sm_\n            touch-action_dd_ none_sm_\n            -ms-touch-action_dd_ none_sm_\n            background-color_dd_ #000000_sm_\n        }\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyone Got Any Ideas On This One ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-12-20T18:06:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tare you doing an engine_co_resize()?_lt_br /_gt__lt_br /_gt_\n\tOhh nm I know!~_lt_br /_gt__lt_br /_gt_\n\tJust make a container div for your scene_co_ and set its width and height_co_ then leave your canvas to 100% and 100% so that way the offsetWidth and height still work otherwise your breaking the engine resize.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-12-20T18:12:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_window.onresize _eq_ function() {\n    engine.resize()_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-12-20T21:39:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep... I tried BOTH with an WITHOUT the window.resize event... Still looks _qt_Squeezed_qt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-12-20T22:00:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tjust fire engine.resize()\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-12-20T22:27:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI am... But for some reason if canvas width is too small like 600px ... it squeeze like show above... If i increase to say 900px NO squeezing looks good... Its just Bigger than the intended size... Really weird\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-12-21T07:28:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI have no problem making a container div setting it to absolute and the size I want then placing the canvas inside of the div and doing the normal process_co_ I_t_ve had to manual fire the resize event before but other then that I_t_ve never seen the behavior you have described.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-12-21T07:42:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you show me the HTML and CSS you use to put canvas in div... I think that might it... my canvas is just in the body.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-12-21T16:00:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes_co_ let me do a write up really quick... I could show you the quick and dirty but let me set up a nice sheet for you that has some tricks applied (ill explain them) like a fixed wrapper to keep the _qt_bump_qt_ navigation off on touch-clients and the such.  _lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-12-21T16:28:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t&lt_sm_!DOCTYPE html PUBLIC _qt_-//W3C//DTD XHTML 1.0 Transitional//EN_qt_ _qt_http_dd_//www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd_qt_&gt_sm__lt_br /_gt_\n\t&lt_sm_html xmlns_eq__qt_http_dd_//www.w3.org/1999/xhtml_qt_&gt_sm__lt_br /_gt_\n\t&lt_sm_head&gt_sm__lt_br /_gt_\n\t&lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_sm_ charset_eq_utf-8_qt_ /&gt_sm__lt_br /_gt_\n\t&lt_sm_title&gt_sm_Fixed Size Game&lt_sm_/title&gt_sm__lt_br /_gt_\n\t&lt_sm_/head&gt_sm__lt_br /_gt_\n\t&lt_sm_style&gt_sm__lt_br /_gt_\n\t@charset _qt_utf-8_qt__sm__lt_br /_gt_\n\t      html_co_ body {_lt_br /_gt_\n\t         overflow_dd_ hidden_sm__lt_br /_gt_\n\t         width_dd_ 100%_sm__lt_br /_gt_\n\t         height_dd_ 100%_sm__lt_br /_gt_\n\t         min-height_dd_ 100%_sm_/*IE hack...*/_lt_br /_gt_\n\t         margin_dd_ 0_sm__lt_br /_gt_\n\t         padding_dd_ 0_sm__lt_br /_gt_\n\t         background_dd_black_sm__lt_br /_gt_\n\t         color_dd_white_sm_         _lt_br /_gt_\n\t         letter-spacing_dd_0.15em_sm__lt_br /_gt_\n\t         line-height_dd_1.225em_sm__lt_br /_gt_\n\t         font-size_dd_16px_sm__lt_br /_gt_\n\t      }_lt_br /_gt_\n\t      _lt_br /_gt_\n\t      body *{_lt_br /_gt_\n\t          box-sizing_dd_border-box_sm_  _lt_br /_gt_\n\t          -moz-box-sizing_dd_border-box_sm_  _lt_br /_gt_\n\t          -webkit-box-sizing_dd_border-box_sm_  _lt_br /_gt_\n\t      }_lt_br /_gt_\n\t      .main-wrap{_lt_br /_gt_\n\t        position_dd_fixed_sm_/*Bump Fix*/_lt_br /_gt_\n\t        z-index_dd_1_sm__lt_br /_gt_\n\t        width_dd_600px_sm__lt_br /_gt_\n\t        min-height_dd_100%_sm__lt_br /_gt_\n\t        top_dd_0_sm_left_dd_50%_sm__lt_br /_gt_\n\t        /*Old Browser support*/ _lt_br /_gt_\n\t        /*margin-left_dd_-300px_sm_*/_lt_br /_gt_\n\t        /*Modern Browser support*/ _lt_br /_gt_\n\t        transform_dd_translateX(-50%)_sm__lt_br /_gt_\n\t        -moz-transform_dd_translateX(-50%)_sm__lt_br /_gt_\n\t        -webkit-transform_dd_translateX(-50%)_sm__lt_br /_gt_\n\t        background_dd_rgba(255_co_255_co_255_co_0.2)_sm__lt_br /_gt_\n\t        overflow_dd_hidden_sm_        _lt_br /_gt_\n\t      }_lt_br /_gt_\n\t      .game-block{_lt_br /_gt_\n\t        position_dd_absolute_sm__lt_br /_gt_\n\t        width_dd_100%_sm__lt_br /_gt_\n\t        height_dd_100%_sm__lt_br /_gt_\n\t        top_dd_0_sm_left_dd_0_sm_        _lt_br /_gt_\n\t        border-left_dd_1px solid rgba(255_co_255_co_255_co_0.6)_sm__lt_br /_gt_\n\t        border-right_dd_1px solid rgba(255_co_255_co_255_co_0.6)_sm__lt_br /_gt_\n\t      }_lt_br /_gt_\n\t      _lt_br /_gt_\n\t      .game-block canvas{_lt_br /_gt_\n\t         width_dd_ 100%_sm__lt_br /_gt_\n\t         height_dd_ 100%_sm__lt_br /_gt_\n\t         touch-action_dd_ none_sm_  _lt_br /_gt_\n\t      }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_/style&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_script src_eq__qt_../babylon.custom.js_qt_&gt_sm_&lt_sm_/script&gt_sm_ &lt_sm_!-- BJS location --&gt_sm__lt_br /_gt_\n\t&lt_sm_body&gt_sm__lt_br /_gt_\n\t&lt_sm_div class_eq__t_main-wrap_t_&gt_sm__lt_br /_gt_\n\t    &lt_sm_div class_eq__t_game-block_t_&gt_sm__lt_br /_gt_\n\t        &lt_sm_canvas id_eq__t_game-canvas_t_&gt_sm_&lt_sm_/canvas&gt_sm__lt_br /_gt_\n\t    &lt_sm_/div&gt_sm__lt_br /_gt_\n\t&lt_sm_/div&gt_sm__lt_br /_gt_\n\t&lt_sm_/body&gt_sm__lt_br /_gt_\n\t&lt_sm_script&gt_sm__lt_br /_gt_\n\t document.addEventListener(_qt_DOMContentLoaded_qt__co_ function() {_lt_br /_gt_\n\t         var canvas _eq_ document.getElementById(_t_game-canvas_t_)_sm__lt_br /_gt_\n\t        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm__lt_br /_gt_\n\t        var scene _eq_ new BABYLON.Scene(engine)_sm__lt_br /_gt_\n\t        scene.clearColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm__lt_br /_gt_\n\t        _lt_br /_gt_\n\t        var camera _eq_ new BABYLON.FreeCamera(_qt_camera1_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ scene)_sm__lt_br /_gt_\n\t        camera.setTarget(BABYLON.Vector3.Zero())_sm__lt_br /_gt_\n\t        camera.attachControl(canvas_co_ false)_sm__lt_br /_gt_\n\t        _lt_br /_gt_\n\t        var lights _eq_ [new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0.5)_co_ scene)_co__lt_br /_gt_\n\t                       new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ -0.2_co_ -0.35)_co_ scene)]_lt_br /_gt_\n\t          _lt_br /_gt_\n\t                    _lt_br /_gt_\n\t        lights[0].intensity _eq_ .85_sm__lt_br /_gt_\n\t        lights[1].intensity _eq_ .35_sm__lt_br /_gt_\n\t    \n_lt_/p_gt_\n\n_lt_p_gt_\n\t        var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 16_co_ 2_co_ scene)_sm__lt_br /_gt_\n\t        sphere.position.y _eq_ 1_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 6_co_ 6_co_ 2_co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t      engine.runRenderLoop(function () {_lt_br /_gt_\n\t         scene.render()_sm__lt_br /_gt_\n\t      })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t      window.addEventListener(_qt_resize_qt__co_ function () {_lt_br /_gt_\n\t         engine.resize()_sm__lt_br /_gt_\n\t      })_sm__lt_br /_gt_\n\t            _lt_br /_gt_\n\t    _lt_br /_gt_\n\t  }_co_ false)_sm__lt_br /_gt_\n\t&lt_sm_/script&gt_sm__lt_br /_gt_\n\t&lt_sm_/html&gt_sm__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tGive this a shot_co_ its very basic_co_ but it shows you correct css structure and blah...  I would rework how the scene is built and make it a called function that is on a separate script.  But this works at least.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-12-21T21:19:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNot sure if it is relevant but to avoid distortion canvas width and height should be set directly using canvas.width _eq_ and canvas.height _eq_ rather than using styles or css\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-12-21T21:46:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMan... I tried them ALL... Custom CSS ... Explicitly setting canvas.width and canvas.height still squeezed....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf i set the canvas.width to at LEAST 900... No squeezing... Must be something in babylon canvas scaling or the babylon ORTHOGRAPHIC view.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-12-21T21:48:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWOW... Perspective work fine at 600px\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Can you please weight in here... Please look at previous post for snapshots of scaling in OTHROGRAPHIC camera mode...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerspective works great.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-12-21T23:15:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think its in how the engine.resize works..._lt_br /_gt__lt_br /_gt_\n\tThe quick and dirty way that gl resizes its context is thorough canvas.width _eq_ canvas.offsetWidth_sm_ canvas.height _eq_ canvas.offsetHeight_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIm not sure how babylon handles its engine resize but Id assume its something like this_co_ so to make a set width scene just have a set width container for the canvas and have the canvas set to 100% 100% on its styling._lt_br /_gt__lt_br /_gt_\n\tNow the Ortho cameras perspective will not be the same because its is a different projection_co_ you can tailor it by setting the cameras settings to be in relation to the ratio of height vs width and it will not distort.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-12-22T05:53:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_156287_qt_ data-ipsquote-contentid_eq__qt_27199_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1482362123_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tNow the Ortho cameras perspective will not be the same because its is a different projection_co_ you can tailor it by setting the cameras settings to be in relation to the ratio of height vs width and it will not distort.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat is interesting... is there some formula for calculating the correct... Right now I make the orthographic view based on he one size field you have in unity_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            if (camera.orthographic)\n            {\n                float size _eq_ camera.orthographicSize_sm_\n                babylonCamera.orthoTop _eq_ size_sm_\n                babylonCamera.orthoBottom _eq_ -size_sm_\n                babylonCamera.orthoLeft _eq_ -size_sm_\n                babylonCamera.orthoRight _eq_ size_sm_\n                babylonCamera.mode _eq_ 1_sm_\n            }\n            else\n            {\n                babylonCamera.mode _eq_ 0_sm_\n            }\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo there should be some kinda of OFFSET with WIDTH and HEIGHT based on the BOX i am creating for the ortho view ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-12-22T09:18:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow about this? Does this help?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tengine.setSize(width_co_height)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.5/Engine#setsize-width-height-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.5/Engine#setsize-width-height-rarr-void_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-12-22T11:03:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_156339_qt_ data-ipsquote-contentid_eq__qt_27199_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1482398281_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHow about this? Does this help?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tengine.setSize(width_co_height)_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.5/Engine#setsize-width-height-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.5/Engine#setsize-width-height-rarr-void_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSame problem... It is ONLY with Orthographic View... I thinks is how i make the box out of Otho Top_co_Left_co_Right and Bottom\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kesshi","Date":"2016-12-22T11:52:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_156349_qt_ data-ipsquote-contentid_eq__qt_27199_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1482404626_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t49 minutes ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSame problem... It is ONLY with Orthographic View... I thinks is how i make the box out of Otho Top_co_Left_co_Right and Bottom\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tCurrently BabylonJs doesn_t_t update the aspect ratio of orthographic cameras during the resize. This is what i_t_m doing manually afterwards_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private updateOrthoAspectRatio()_dd_ void\n{\n    let tAspect _eq_ this.mEngine.getAspectRatio(this.mCamera)_sm_\n    let tOrtho _eq_ this.mCamera.orthoTop_sm_\n    this.mCamera.orthoBottom _eq_ -tOrtho_sm_\n    this.mCamera.orthoLeft _eq_ -tOrtho * tAspect_sm_\n    this.mCamera.orthoRight _eq_ tOrtho * tAspect_sm_\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-12-22T11:55:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHolyshit ... I think i got it_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_float vert _eq_ camera.orthographicSize_sm_\nfloat horz _eq_ vert * exportationOptions.CameraAspectRatio_sm_\nbabylonCamera.orthoTop _eq_ vert_sm_\nbabylonCamera.orthoBottom _eq_ -vert_sm_\nbabylonCamera.orthoLeft _eq_ -horz_sm_\nbabylonCamera.orthoRight _eq_ horz_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe camera aspect ratio would the the canvas width and height ratio... 600 x 900 _eq_ .66\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if unity ortho vertical size _eq_ 10 the horizontal size would be vert * ratio or 6.66\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo BabylonJS Ortho Box (top_dd_ 10_co_ bottom_dd_ -10_co_ left_dd_ 6.66_co_ right_dd_ -6.66)  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo far... working great... trying other screen dimensions to make sure _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNOTE_dd_ You have to manually set (in the scene exporter panel) the _qt_default camera aspect ratio_qt_ for your project... So if you set your canvas to 600 x 900 (global for all scenes)... And your are going to use a ORTHOGRAPHIC CAMERA... You have to set the Camera Aspect Ratio to .66 to sync up things... There is NO WAY for me to tell at Export time WHAT YOU CANVAS size is... so you gotta set... Again.. For ORTHO camera.  Defaults to 1.0\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-12-22T11:58:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/16973-kesshi/?do_eq_hovercard_qt_ data-mentionid_eq__qt_16973_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/16973-kesshi/_qt_ rel_eq__qt__qt__gt_@Kesshi_lt_/a_gt_ ... I think we figured it out at the same exact time... How weird is that _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tJust as i got a notification from you... I just hit save with my solution as well... And they are basically the same...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExcept i can_t_t use your engine.GetAspectRatio... Unless i move my other camera stuff to client code and not the exporter...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt__lt_strong_gt_EDIT_dd__lt_/strong_gt__lt_/u_gt_ But i don_t_t seem to have to change in RESIZE event... I just set the orthoTop-Left-Right-Bottom in C# unity toolkit and serialize to the scene file... It seems to work even when browser window resized... But I DONT call any kind of UpdateCameraOtherView on resize.  Note the exporter snippet_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            if (camera.orthographic)\n            {\n                float vert _eq_ camera.orthographicSize_sm_\n                float horz _eq_ vert * exportationOptions.CameraAspectRatio_sm_\n                babylonCamera.orthoTop _eq_ vert_sm_\n                babylonCamera.orthoBottom _eq_ -vert_sm_\n                babylonCamera.orthoLeft _eq_ -horz_sm_\n                babylonCamera.orthoRight _eq_ horz_sm_\n                babylonCamera.mode _eq_ 1_sm_\n            }\n            else\n            {\n                babylonCamera.mode _eq_ 0_sm_\n            }\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-12-22T15:23:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tY_t_all got it before I woke up this morning cool!  Yeah I was gonna explain you just gotta find your ratio and set up the box accordingly but it looks like you did it.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]