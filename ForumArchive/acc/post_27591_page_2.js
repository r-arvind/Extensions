[{"Owner":"adam","Date":"2017-01-19T00:48:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ll try to figure it out over the next couple of days.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tracked down the code that made this break.  I might actually have a fix tonight.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-01-19T01:41:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#OCCLB%2340_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#OCCLB#40_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPR submitted.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"negrant","Date":"2017-01-19T07:28:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_159769_qt_ data-ipsquote-contentid_eq__qt_27591_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1484790108_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#OCCLB%2340_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#OCCLB#40_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tPR submitted.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSorry_co_ but I not fully understood about your dialog with Deltakosh. I am not strong in English _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ it is working example? or what it is? because this code stop all my animations on the scene\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt__lt_span_gt_var_lt_/span_gt_ Animatable _eq_ BABYLON.Animatable_sm_\n\nAnimatable.prototype.stop _eq_ _lt_span_gt__lt_span_gt_function_lt_/span_gt_ _lt_span_gt_(animationName)_lt_/span_gt_ {_lt_/span_gt_\n    _lt_span_gt_var_lt_/span_gt_ idx _eq_ _lt_span_gt_this_lt_/span_gt_._scene._activeAnimatables.indexOf(_lt_span_gt_this_lt_/span_gt_)_sm_\n    _lt_span_gt_if_lt_/span_gt_ (idx &gt_sm_ -_lt_span_gt_1_lt_/span_gt_) {\n        _lt_span_gt_if_lt_/span_gt_ (animationName) {\n            _lt_span_gt_var_lt_/span_gt_ animations _eq_ _lt_span_gt_this_lt_/span_gt_._animations_sm_\n            _lt_span_gt_var_lt_/span_gt_ numberOfAnimationsStopped _eq_ _lt_span_gt_0_lt_/span_gt__sm_\n            _lt_span_gt_for_lt_/span_gt_ (_lt_span_gt_var_lt_/span_gt_ index _eq_ animations.length - _lt_span_gt_1_lt_/span_gt__sm_ index &gt_sm__eq_ _lt_span_gt_0_lt_/span_gt__sm_ index--) {\n                _lt_span_gt_if_lt_/span_gt_ (_lt_span_gt_typeof_lt_/span_gt_ animationName _eq__eq__eq_ _lt_span_gt__qt_string_qt__lt_/span_gt_ &amp_sm_&amp_sm_ animations[index].name !_eq_ animationName) {\n                    _lt_span_gt_continue_lt_/span_gt__sm_\n                }\n                animations[index].reset()_sm_\n                animations.splice(index_co_ _lt_span_gt_1_lt_/span_gt_)_sm_\n                numberOfAnimationsStopped++_sm_\n            }\n            _lt_span_gt_if_lt_/span_gt_ (animations.length _eq__eq_ numberOfAnimationsStopped) {\n                _lt_span_gt_this_lt_/span_gt_._scene._activeAnimatables.splice(idx_co_ _lt_span_gt_1_lt_/span_gt_)_sm_\n                _lt_span_gt_if_lt_/span_gt_ (_lt_span_gt_this_lt_/span_gt_.onAnimationEnd) {\n                    _lt_span_gt_this_lt_/span_gt_.onAnimationEnd()_sm_\n                }\n            }\n        }\n        _lt_span_gt_else_lt_/span_gt_ {\n            _lt_span_gt_this_lt_/span_gt_._scene._activeAnimatables.splice(index_co_ _lt_span_gt_1_lt_/span_gt_)_sm_\n            _lt_span_gt_var_lt_/span_gt_ animations _eq_ _lt_span_gt_this_lt_/span_gt_._animations_sm_\n            _lt_span_gt_for_lt_/span_gt_ (_lt_span_gt_var_lt_/span_gt_ index _eq_ _lt_span_gt_0_lt_/span_gt__sm_ index &lt_sm_ animations.length_sm_ index++) {\n                animations[index].reset()_sm_\n            }\n            _lt_span_gt_if_lt_/span_gt_ (_lt_span_gt_this_lt_/span_gt_.onAnimationEnd) {\n                _lt_span_gt_this_lt_/span_gt_.onAnimationEnd()_sm_\n            }\n        }\n    }\n}_sm__lt_/code_gt__lt_/pre_gt_\n\t_lt_span style_eq__qt_background_dd_url(&quot_sm_//www.html5gamedevs.com/applications/core/interface/ckeditor/ckeditor/plugins/widget/images/handle.png&quot_sm_)_sm__qt__gt__lt_/span_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-01-19T12:12:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere is a bug with that fix.  Here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#OCCLB%2344_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#OCCLB#44_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"shen","Date":"2017-02-12T20:06:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSeems the mesh is only updated to the bone_t_s position during an animation is playing. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI find that attachToBone doesn_t_t work with the bone moved with BoneIKController. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]