[{"Owner":"MasterK","Date":"2016-09-02T09:45:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think bjs need this.\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#2b2b2b_sm_color_dd_#a9b7c6_sm_font-family_dd__t_Lucida Sans Typewriter_t__sm_font-size_dd_15pt_sm__qt__gt_\nScene._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_prototype_lt_/span_gt_._lt_span style_eq__qt_color_dd_#ffc66d_sm__qt__gt__animate _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_function _lt_/span_gt_() {\n    _lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_if _lt_/span_gt_(!_lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_animationsEnabled _lt_/span_gt_|| _lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt__activeAnimatables_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_length _lt_/span_gt__eq__eq__eq_ _lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_0_lt_/span_gt_) {\n        _lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_return_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_    _lt_/span_gt_}\n    _lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_if _lt_/span_gt_(!_lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt__animationStartDate_lt_/span_gt_) {\n        _lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_if _lt_/span_gt_(_lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt__pendingData_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_length _lt_/span_gt_&gt_sm_ _lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_0_lt_/span_gt_) {\n            _lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_return_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_        _lt_/span_gt_}\n        _lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt__animationStartDate _lt_/span_gt__eq_ BABYLON._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_Tools_lt_/span_gt_.Now_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_    _lt_/span_gt_}\n    _lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_// Getting time\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_    _lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_var _lt_/span_gt_now _eq_ BABYLON._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_Tools_lt_/span_gt_.Now_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_    _lt_/span_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt_var _lt_/span_gt_delay _eq_ (now - _lt_span style_eq__qt_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt_._animationStartDate) * this.animationTimeScale_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_    _lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_for _lt_/span_gt_(_lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_var _lt_/span_gt_index _eq_ _lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm_ _lt_/span_gt_index &lt_sm_ _lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt__activeAnimatables_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt_length_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm_ _lt_/span_gt_index++) {\n        _lt_span style_eq__qt_color_dd_#cc7832_sm_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9876aa_sm__qt__gt__activeAnimatables_lt_/span_gt_[index]._lt_span style_eq__qt_color_dd_#ffc66d_sm__qt__gt__animate_lt_/span_gt_(delay)_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_    _lt_/span_gt_}\n}_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm__lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_add a timeScale_co_ default value is 1. so we can make animation speed *2 or * 0.5 by setting scene.timeScale _eq_ 2 or 0.5_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Is that ok? May be not only this one place to modify._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-02T16:17:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow is it different from the speedRatio parameter?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/Scene#beginanimation-target-from-to-loop-speedratio-onanimationend-animatable-rarr-animatable-classes-2-3-animatable-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/Scene#beginanimation-target-from-to-loop-speedratio-onanimationend-animatable-rarr-animatable-classes-2-3-animatable-_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-09-05T01:49:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t use this speedRatio to set everything. I want a overall control of animation speed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd more can_t_t_co_ i can_t_t change speedRatio when i already began animation.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Diaco","Date":"2016-09-05T06:37:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Guys _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17014_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/_qt_ rel_eq__qt__qt__gt_@MasterK_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know Bjs has owned its animation engine _co_ but I think that be good to try _lt_strong_gt__lt_a href_eq__qt_http_dd_//greensock.com/_qt_ rel_eq__qt_external nofollow_qt__gt_GSAP _lt_/a_gt_ _lt_/strong_gt_since it_t_s really powerful &amp_sm_ high-performance animation engine _co_ easily can handle all your needs about animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou will have benefits of timelines_co_ and easily sequence tweens_co_ use stagger Tweens_co_ manage timescale_co_ repeat_co_ delays _co_ ...etc .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tpls check this out _dd_ _lt_a href_eq__qt_http_dd_//codepen.io/MAW/pen/66760a5b8426c1c871776d4f202d30c7?editors_eq_0010_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//codepen.io/MAW/pen/66760a5b8426c1c871776d4f202d30c7?editors_eq_0010_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-09-05T13:09:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23433-diaco/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23433_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23433-diaco/_qt_ rel_eq__qt__qt__gt_@Diaco_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twow_co_ that_t_s amazing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut i think gsap can_t_t help me with skeleton animation... or other animation exported from 3dmax/unity.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Diaco","Date":"2016-09-05T13:23:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17014_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/_qt_ rel_eq__qt__qt__gt_@MasterK_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thmm _co_ actually GSAP can animate any javascript object property _co_ I don_t_t know really about _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_skeletons _co_ maybe that be better to fork that codepen with a simple version of your code _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-09-05T13:26:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23433-diaco/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23433_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23433-diaco/_qt_ rel_eq__qt__qt__gt_@Diaco_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11BH6Z%2318_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11BH6Z#18_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see this. And i_t_ll go home now. See you tomorrow~.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Diaco","Date":"2016-09-05T14:08:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think it_t_s possible _co_ but my problem is I don_t_t know what property is animating by this line _dd_  _lt_strong_gt_scene.beginAnimation(skeletons[0]_co_ 0_co_ 100_co_ true_co_ 1.0)_sm_ _lt_/strong_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-09-06T01:48:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23433-diaco/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23433_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23433-diaco/_qt_ rel_eq__qt__qt__gt_@Diaco_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s in .babylon file. Lots of properties and changes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ i think add this timeScale is a simple way to solve some problem. If _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ won_t_t handle this. I can only make it in my own project.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-06T15:55:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo no_co_ don_t_t take me wrong_dd_) I tried to be sure that we do not already have it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m fine with you adding this through a PR\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-09-06T16:20:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17014_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/_qt_ rel_eq__qt__qt__gt_@MasterK_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI set up a simple PG of animationScale slowly go up and down from 0 to 1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this the expected result?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11BH6Z%2382_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11BH6Z#82_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere animationScale going between .5 and 1_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11BH6Z%2383_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11BH6Z#83_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I first saw your request_co_ I was thinking that you wanted a way to slow an animation down to a stop and slowly speed it up to full speed.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-09-06T16:40:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is what I thought you wanted_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11BH6Z%2384_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11BH6Z#84_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11BH6Z%2385_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11BH6Z#85_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-09-07T04:02:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_142971_qt_ data-ipsquote-contentid_eq__qt_24931_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1473177314_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tNo no_co_ don_t_t take me wrong_dd_) I tried to be sure that we do not already have it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI_t_m fine with you adding this through a PR\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_I didn_t_t say you wrong _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI just don_t_t sure I can make good PR. I want you modify it because you can think better.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_142976_qt_ data-ipsquote-contentid_eq__qt_24931_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1473178839_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17014_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/_qt_ rel_eq__qt__qt__gt_@MasterK_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI set up a simple PG of animationScale slowly go up and down from 0 to 1.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIs this the expected result?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11BH6Z%2382_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11BH6Z#82_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHere animationScale going between .5 and 1_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#11BH6Z%2383_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#11BH6Z#83_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWhen I first saw your request_co_ I was thinking that you wanted a way to slow an animation down to a stop and slowly speed it up to full speed.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_Yes. That_t_s it. though i can_t_t see PG_t_s animation... And i don_t_t understand your first thought...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-09-07T17:45:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_143053_qt_ data-ipsquote-contentid_eq__qt_24931_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1473220948_qt_ data-ipsquote-userid_eq__qt_17014_qt_ data-ipsquote-username_eq__qt_MasterK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 hours ago_co_ MasterK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAnd i don_t_t understand your first thought...\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI think you will understand when you see the PGs I created.  They should be working again now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-09-08T02:38:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_143127_qt_ data-ipsquote-contentid_eq__qt_24931_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1473270348_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI think you will understand when you see the PGs I created.  They should be working again now.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYeah~~ I see now~~ Thank you for try~ I_t_ll use your code~\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]