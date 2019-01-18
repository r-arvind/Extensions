[{"Owner":"reddozen","Date":"2013-11-06T20:54:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is there a way to join meshes together so that even if they_t_re scaled_co_ they maintain their joined position?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Example_dd__lt_/p_gt__lt_p_gt_I have a terrain and sepraite tree meshes. If i want to scale the entire scene down how can I make sure that the location of the trees stays relative to their original position on the terrain?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-11-06T21:09:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know if it exists a way to do that automatically in Babylon_co_ But i would link the tree position to the terrain actual size_dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_tree.position _eq_ getTreePosition(terrain)_lt_/pre_gt__lt_p_gt_Something like this._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2013-11-06T21:31:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_13760_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_2030_qt_ data-ipsquote-username_eq__qt_Temechon_qt_ data-cite_eq__qt_Temechon_qt_ data-ipsquote-timestamp_eq__qt_1383772193_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hi_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know if it exists a way to do that automatically in Babylon_co_ But i would link the tree position to the terrain actual size_dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_tree.position _eq_ getTreePosition(terrain)_lt_/pre_gt__lt_p_gt_Something like this._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s basicially what I_t_m asking. If there_t_s a way to join the 2 meshes at a point or combine them._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-11-07T07:18:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_To join two meshes_co_ you can use the property _qt_parent_qt_ on a mesh to join another one _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_tree.parent _eq_ terrain_lt_/pre_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_This way_co_ all transformations done on terrain will be done to the tree as well._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But i_t_m not sure this will keep the tree relative position on the terrain. In this case_co_ you will have to do the work with your own code._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]