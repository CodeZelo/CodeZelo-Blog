---
title: "الألوان في CSS"
description: ""
draft: true
categories: ["articles"]
tags: ["learn-css"]
authors:
  - mahmoudadel
slug: "colors-in-css"
series: ["CSS Tutorial"]
series_order: 3
weight: -17
---

أهلاً بك يا صديقي المبرمج في رحلتك المستمرة لتعلّم تطوير الويب. بعد أن وضعنا حجر الأساس وفهمنا 
[كيفية أختيار العناصر في CSS باستخدام Selectors](http://localhost:1313/categories/articles/css-selectors-full-guide/)
 في الأجزاء السابقة، حان الوقت لنعطي الروح الي هذه الصفحات ونجعلها جذابة بصرية وتخطف الأنظار. وكل هذا سيبدأ بفهم كيفية التعامل مع الألوان في CSS.

تخيل أن صفحة الويب بدون ألوان هي مجرد هيكل عظمي أو مخطط هندسي أبيض وأسود؛ الألوان هي التي تمنح الموقع هويته، وتوجه عين الزائر، بل وتؤثر على مشاعره وقراراته. في هذا الدليل الشامل، سنغوص عميقاً في عالم **الألوان في CSS**، لنعرف كيف يفكر المتصفح، وكيف تختار اللون الأنسب لمشروعك القادم.

## جدول الـ 140 لوناً المدعومة عالمياً

<div> <table style="width: 100%; border-collapse: collapse; font-size: 14px;"> <thead> <tr style="background-color: #222;"> <th style="padding: 10px; border: 1px solid #ddd; color: white !important;">Name</th> <th style="padding: 10px; border: 1px solid #ddd; color: white !important;">HEX Value</th> <th style="padding: 10px; border: 1px solid #ddd; color: white !important;">Live Demo</th> </tr> </thead> <tbody> <tr><td>AliceBlue</td><td>#F0F8FF</td><td style="background-color: #F0F8FF; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>AntiqueWhite</td><td>#FAEBD7</td><td style="background-color: #FAEBD7; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Aqua</td><td>#00FFFF</td><td style="background-color: #00FFFF; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Aquamarine</td><td>#7FFFD4</td><td style="background-color: #7FFFD4; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Azure</td><td>#F0FFFF</td><td style="background-color: #F0FFFF; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Beige</td><td>#F5F5DC</td><td style="background-color: #F5F5DC; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Bisque</td><td>#FFE4C4</td><td style="background-color: #FFE4C4; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Black</td><td>#000000</td><td style="background-color: #000000; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>BlanchedAlmond</td><td>#FFEBCD</td><td style="background-color: #FFEBCD; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Blue</td><td>#0000FF</td><td style="background-color: #0000FF; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>BlueViolet</td><td>#8A2BE2</td><td style="background-color: #8A2BE2; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Brown</td><td>#A52A2A</td><td style="background-color: #A52A2A; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>BurlyWood</td><td>#DEB887</td><td style="background-color: #DEB887; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>CadetBlue</td><td>#5F9EA0</td><td style="background-color: #5F9EA0; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Chartreuse</td><td>#7FFF00</td><td style="background-color: #7FFF00; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Chocolate</td><td>#D2691E</td><td style="background-color: #D2691E; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Coral</td><td>#FF7F50</td><td style="background-color: #FF7F50; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>CornflowerBlue</td><td>#6495ED</td><td style="background-color: #6495ED; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Cornsilk</td><td>#FFF8DC</td><td style="background-color: #FFF8DC; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Crimson</td><td>#DC143C</td><td style="background-color: #DC143C; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Cyan</td><td>#00FFFF</td><td style="background-color: #00FFFF; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkBlue</td><td>#00008B</td><td style="background-color: #00008B; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkCyan</td><td>#008B8B</td><td style="background-color: #008B8B; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkGoldenRod</td><td>#B8860B</td><td style="background-color: #B8860B; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkGray</td><td>#A9A9A9</td><td style="background-color: #A9A9A9; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkGreen</td><td>#006400</td><td style="background-color: #006400; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkKhaki</td><td>#BDB76B</td><td style="background-color: #BDB76B; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkMagenta</td><td>#8B008B</td><td style="background-color: #8B008B; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkOliveGreen</td><td>#556B2F</td><td style="background-color: #556B2F; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkOrange</td><td>#FF8C00</td><td style="background-color: #FF8C00; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkOrchid</td><td>#9932CC</td><td style="background-color: #9932CC; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkRed</td><td>#8B0000</td><td style="background-color: #8B0000; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkSalmon</td><td>#E9967A</td><td style="background-color: #E9967A; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkSeaGreen</td><td>#8FBC8F</td><td style="background-color: #8FBC8F; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkSlateBlue</td><td>#483D8B</td><td style="background-color: #483D8B; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkSlateGray</td><td>#2F4F4F</td><td style="background-color: #2F4F4F; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkTurquoise</td><td>#00CED1</td><td style="background-color: #00CED1; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DarkViolet</td><td>#9400D3</td><td style="background-color: #9400D3; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DeepPink</td><td>#FF1493</td><td style="background-color: #FF1493; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DeepSkyBlue</td><td>#00BFFF</td><td style="background-color: #00BFFF; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DimGray</td><td>#696969</td><td style="background-color: #696969; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>DodgerBlue</td><td>#1E90FF</td><td style="background-color: #1E90FF; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>FireBrick</td><td>#B22222</td><td style="background-color: #B22222; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>FloralWhite</td><td>#FFFAF0</td><td style="background-color: #FFFAF0; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>ForestGreen</td><td>#228B22</td><td style="background-color: #228B22; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Fuchsia</td><td>#FF00FF</td><td style="background-color: #FF00FF; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Gainsboro</td><td>#DCDCDC</td><td style="background-color: #DCDCDC; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>GhostWhite</td><td>#F8F8FF</td><td style="background-color: #F8F8FF; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Gold</td><td>#FFD700</td><td style="background-color: #FFD700; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>GoldenRod</td><td>#DAA520</td><td style="background-color: #DAA520; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Gray</td><td>#808080</td><td style="background-color: #808080; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Green</td><td>#008000</td><td style="background-color: #008000; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>GreenYellow</td><td>#ADFF2F</td><td style="background-color: #ADFF2F; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>HoneyDew</td><td>#F0FFF0</td><td style="background-color: #F0FFF0; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>HotPink</td><td>#FF69B4</td><td style="background-color: #FF69B4; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>IndianRed</td><td>#CD5C5C</td><td style="background-color: #CD5C5C; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Indigo</td><td>#4B0082</td><td style="background-color: #4B0082; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Ivory</td><td>#FFFFF0</td><td style="background-color: #FFFFF0; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Khaki</td><td>#F0E68C</td><td style="background-color: #F0E68C; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Lavender</td><td>#E6E6FA</td><td style="background-color: #E6E6FA; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LavenderBlush</td><td>#FFF0F5</td><td style="background-color: #FFF0F5; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LawnGreen</td><td>#7CFC00</td><td style="background-color: #7CFC00; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LemonChiffon</td><td>#FFFACD</td><td style="background-color: #FFFACD; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightBlue</td><td>#ADD8E6</td><td style="background-color: #ADD8E6; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightCoral</td><td>#F08080</td><td style="background-color: #F08080; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightCyan</td><td>#E0FFFF</td><td style="background-color: #E0FFFF; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightGoldenRodYellow</td><td>#FAFAD2</td><td style="background-color: #FAFAD2; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightGray</td><td>#D3D3D3</td><td style="background-color: #D3D3D3; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightGreen</td><td>#90EE90</td><td style="background-color: #90EE90; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightPink</td><td>#FFB6C1</td><td style="background-color: #FFB6C1; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightSalmon</td><td>#FFA07A</td><td style="background-color: #FFA07A; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightSeaGreen</td><td>#20B2AA</td><td style="background-color: #20B2AA; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightSkyBlue</td><td>#87CEFA</td><td style="background-color: #87CEFA; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightSlateGray</td><td>#778899</td><td style="background-color: #778899; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightSteelBlue</td><td>#B0C4DE</td><td style="background-color: #B0C4DE; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LightYellow</td><td>#FFFFE0</td><td style="background-color: #FFFFE0; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Lime</td><td>#00FF00</td><td style="background-color: #00FF00; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>LimeGreen</td><td>#32CD32</td><td style="background-color: #32CD32; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Linen</td><td>#FAF0E6</td><td style="background-color: #FAF0E6; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Magenta</td><td>#FF00FF</td><td style="background-color: #FF00FF; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Maroon</td><td>#800000</td><td style="background-color: #800000; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MediumAquaMarine</td><td>#66CDAA</td><td style="background-color: #66CDAA; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MediumBlue</td><td>#0000CD</td><td style="background-color: #0000CD; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MediumOrchid</td><td>#BA55D3</td><td style="background-color: #BA55D3; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MediumPurple</td><td>#9370DB</td><td style="background-color: #9370DB; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MediumSeaGreen</td><td>#3CB371</td><td style="background-color: #3CB371; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MediumSlateBlue</td><td>#7B68EE</td><td style="background-color: #7B68EE; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MediumSpringGreen</td><td>#00FA9A</td><td style="background-color: #00FA9A; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MediumTurquoise</td><td>#48D1CC</td><td style="background-color: #48D1CC; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MediumVioletRed</td><td>#C71585</td><td style="background-color: #C71585; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MidnightBlue</td><td>#191970</td><td style="background-color: #191970; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MintCream</td><td>#F5FFFA</td><td style="background-color: #F5FFFA; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>MistyRose</td><td>#FFE4E1</td><td style="background-color: #FFE4E1; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Moccasin</td><td>#FFE4B5</td><td style="background-color: #FFE4B5; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>NavajoWhite</td><td>#FFDEAD</td><td style="background-color: #FFDEAD; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Navy</td><td>#000080</td><td style="background-color: #000080; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>OldLace</td><td>#FDF5E6</td><td style="background-color: #FDF5E6; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Olive</td><td>#808000</td><td style="background-color: #808000; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>OliveDrab</td><td>#6B8E23</td><td style="background-color: #6B8E23; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Orange</td><td>#FFA500</td><td style="background-color: #FFA500; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>OrangeRed</td><td>#FF4500</td><td style="background-color: #FF4500; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Orchid</td><td>#DA70D6</td><td style="background-color: #DA70D6; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>PaleGoldenRod</td><td>#EEE8AA</td><td style="background-color: #EEE8AA; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>PaleGreen</td><td>#98FB98</td><td style="background-color: #98FB98; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>PaleTurquoise</td><td>#AFEEEE</td><td style="background-color: #AFEEEE; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>PaleVioletRed</td><td>#DB7093</td><td style="background-color: #DB7093; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>PapayaWhip</td><td>#FFEFD5</td><td style="background-color: #FFEFD5; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>PeachPuff</td><td>#FFDAB9</td><td style="background-color: #FFDAB9; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Peru</td><td>#CD853F</td><td style="background-color: #CD853F; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Pink</td><td>#FFC0CB</td><td style="background-color: #FFC0CB; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Plum</td><td>#DDA0DD</td><td style="background-color: #DDA0DD; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>PowderBlue</td><td>#B0E0E6</td><td style="background-color: #B0E0E6; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Purple</td><td>#800080</td><td style="background-color: #800080; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>RebeccaPurple</td><td>#663399</td><td style="background-color: #663399; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Red</td><td>#FF0000</td><td style="background-color: #FF0000; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>RosyBrown</td><td>#BC8F8F</td><td style="background-color: #BC8F8F; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>RoyalBlue</td><td>#4169E1</td><td style="background-color: #4169E1; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>SaddleBrown</td><td>#8B4513</td><td style="background-color: #8B4513; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Salmon</td><td>#FA8072</td><td style="background-color: #FA8072; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>SandyBrown</td><td>#F4A460</td><td style="background-color: #F4A460; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>SeaGreen</td><td>#2E8B57</td><td style="background-color: #2E8B57; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>SeaShell</td><td>#FFF5EE</td><td style="background-color: #FFF5EE; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Sienna</td><td>#A0522D</td><td style="background-color: #A0522D; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Silver</td><td>#C0C0C0</td><td style="background-color: #C0C0C0; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>SkyBlue</td><td>#87CEEB</td><td style="background-color: #87CEEB; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>SlateBlue</td><td>#6A5ACD</td><td style="background-color: #6A5ACD; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>SlateGray</td><td>#708090</td><td style="background-color: #708090; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Snow</td><td>#FFFAFA</td><td style="background-color: #FFFAFA; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>SpringGreen</td><td>#00FF7F</td><td style="background-color: #00FF7F; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>SteelBlue</td><td>#4682B4</td><td style="background-color: #4682B4; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Tan</td><td>#D2B48C</td><td style="background-color: #D2B48C; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Teal</td><td>#008080</td><td style="background-color: #008080; color: white; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Thistle</td><td>#D8BFD8</td><td style="background-color: #D8BFD8; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Tomato</td><td>#FF6347</td><td style="background-color: #FF6347; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Turquoise</td><td>#40E0D0</td><td style="background-color: #40E0D0; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Violet</td><td>#EE82EE</td><td style="background-color: #EE82EE; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Wheat</td><td>#F5DEB3</td><td style="background-color: #F5DEB3; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>White</td><td>#FFFFFF</td><td style="background-color: #FFFFFF; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>WhiteSmoke</td><td>#F5F5F5</td><td style="background-color: #F5F5F5; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>Yellow</td><td>#FFFF00</td><td style="background-color: #FFFF00; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> <tr><td>YellowGreen</td><td>#9ACD32</td><td style="background-color: #9ACD32; color: black; text-align: center; font-weight: bold; border: 1px solid #ddd;">Preview</td></tr> </tbody> </table> </div>

## الألوان في CSS

هل سألت نفسك يوماً: "كيف يفهم الكمبيوتر أن هذا اللون هو 'أزرق' بينما الآخر 'أخضر'؟"

هذه السلسلة مصممة خصيصاً لك، سواء كنت:
* مبتدئاً تماماً في عالم التنسيق (Styling) وتريد فهم الأساسيات العلمية.
* مصمماً لديه خبرة سابقة ويريد معرفة الفرق الدقيق بين أنظمة الألوان المختلفة (RGB, HEX, HSL).
* مطوراً يسعى لتحويل تصميمات (Figma) أو (Adobe XD) إلى أكواد CSS دقيقة بنسبة 100%.

أعدك أنك بنهاية هذا المقال، لن تتعامل مع الألوان كمجرد "أكواد منقولة"، بل ستفهم المنطق البرمجي والفيزيائي خلف كل بكسل يظهر على الشاشة.

## ماذا سوف تتعلم هنا؟

لقد قسمنا هذا الدليل المرجعي إلى 4 أقسام رئيسية، لنتدرج معك من البساطة إلى الاحتراف:
  
1. **أساسيات تعريف الألوان:** الأسماء المحددة والأنظمة الرقمية.

2. **الأنظمة المتقدمة (RGB & HEX):** لغة الضوء وكيفية مزج الألوان برمجياً.

3. **نظام HSL والشفافية:** كيف تجعل ألوانك "تتنفس" وتتفاعل مع الخلفيات.

4. **تطبيق عملي:** كيف تختار لوحة ألوان (Palette) متناسقة لموقعك وتطبقها باحترافية.

> [!ALERT] **ملاحظة هامة**
> يمكنك العودة لأي قسم من خلال العناوين الجانبية، كما نوفر لك نماذج كود جاهزة لكل نظام لتبدأ تجربتها فوراً.

## كيف تُعرّف لوناً في لغة CSS؟

أول خطوة في طريق الاحتراف هي معرفة **طريقة كتابة اكواد CSS** الخاصة بالألوان. في لغة CSS، نحن لا نلون النصوص فقط، بل نتحكم في ألوان الخلفيات، الحدود (Borders)، الظلال، وحتى التدرجات.

### 1. الكلمات المفتاحية (Color Keywords)

هي أبسط طريقة؛ حيث توفر CSS حوالي 140 اسماً للألوان الجاهزة التي يفهمها المتصفح مباشرة مثل `red` أو `blue` أو `darkgreen`.

**مثال:**

```css
h1 {
  color: tomato; /* استخدام اسم اللون مباشرة */
}
```

### 2. نظام الـ HEX (التمثيل الست عشري)
  
هو النظام الأكثر شيوعاً بين المصممين، ويبدأ دائماً بعلامة `#` متبوعة بـ 6 أرقام أو حروف.

**مثال:**

```css
h1 {
  color: #ff0000; /* اللون الأحمر */
}
```
ده اللون الأحمر، وبيتكتب بست أرقام أو حروف.  
أول اتنين للأحمر، الاتنين اللي بعدهم للأخضر، وآخر اتنين للأزرق.

ميزة الـ HEX إنها مختصرة وقصيرة…  
لكن صعب تفهم اللون بعينك.

### 3. نظام RGB (الضوء)

يعتمد على فكرة أن شاشتك هي في الأصل "ضوء"، ويمزج ثلاث قيم (الأحمر، الأخضر، الأزرق) لإنتاج أي لون تتخيله.
  
**مثال:**

```css
h1 {
  color: rgb(255, 0, 0);
}
```
> نفس اللون الأحمر… بس متقسم أرقام من 0 لـ 255.

**ممكن كمان نضيف شفافية:**

```css
h1 {
  color: rgb(255, 0, 0, 0.5);
}
```

> وده بيعطيك **red نصف شفاف**.

ميزة RGB إنها منطقية أكتر من HEX…  
بس برضه مش الأسهل لو عايز تعمل تدرجات ألوان.

## ما هي الألوان المسموح بها في CSS

لفهم الأنظمة بعمق، دعنا نتخيل الألوان كأنها "وصفة طبخ"؛ كل نظام يعطيك المقادير بطريقة مختلفة. 

### أولاً: نظام HEX (أكواد الألوان HTML)

هذا النظام يعتمد على لغة الآلة، حيث يتم تمثيل الألوان بقيم تتراوح من `00` إلى `FF`. 

* أول رقمين: لدرجة الأحمر (Red).
* الرقمين الأوسطين: لدرجة الأخضر (Green).
* آخر رقمين: لدرجة الأزرق (Blue).

**جدول توضيحي لأكواد HEX الأساسية:** 

| اللون | كود HEX | المعنى البرمجي |
| --- | --- | --- |
| الأسود | `#000000` | انعدام تام للألوان |
| الأبيض | `#FFFFFF` | تشبع كامل لجميع الألوان |
| الأحمر | `#FF0000` | أحمر خالص، لا أخضر ولا أزرق |
| الرمادي | `#808080` | مزيج متساوي بدرجة متوسطة |

### ثانياً: نظام RGB و RGBA

هنا نستخدم دالة تسمى `rgb()` ونمرر لها ثلاث قيم من (0 إلى 255). 

* **RGB:** اختصار لـ Red, Green, Blue.
* **RGBA:** حرف الـ **A** هنا يعني (Alpha)، وهو المسؤول عن **الشفافية**. وتكون قيمته بين `0` (شفاف تماماً) و `1` (معتم تماماً). 

**مثال عملي:**

```css
div {
  background-color: rgba(255, 99, 71, 0.5); /* لون طماطمي بـ 50% شفافية */
}
```

### ثالثاً: نظام HSL - الطريق نحو الاحتراف

إذا كنت تريد نظاماً "يفهمه البشر" أكثر من الآلات، فـ HSL هو اختيارك. هو يعتمد على الطريقة التي نرى بها الألوان في الواقع. 

1. **Hue (الدرجة):** هي مكان اللون على عجلة الألوان (من 0 إلى 360 درجة).
2. **Saturation (التشبع):** مدى قوة اللون (0% رمادي، 100% لون فاقع).
3. **Lightness (الإضاءة):** مدى قربه من الأبيض أو الأسود (0% أسود، 100% أبيض).
 
> **لماذا HSL مهم للسيو وتنظيم الكود؟** 
> استخدام HSL يسهل عليك إنشاء "سمات" (Themes) للموقع؛ فبمجرد تغيير درجة الإضاءة، يمكنك إنشاء نسخة "Dark Mode" من موقعك دون الحاجة لتغيير الأكواد بالكامل. 

## **إزاي "تتلاعب" بالألوان في CSS وتطوعها لمزاجك؟ (Color Manipulation)**

بص يا سيدي، زمان كان المبرمج عشان يغير درجة لون يروح يفتح الـ Photoshop أو الـ Figma ويقعد يختار درجة أفتح شوية أو أغمق شوية، لكن الـ CSS دلوقتي بقت "صايعة" تقنياً، ووفرت لنا دوال (Functions) بتخليك تعدل في الألوان وأنت واقف في مكانك جوه ملف التنسيق، وده بيديك مرونة جبارة في التصميم.

### **1. دوال الألوان (Color Functions)**

تخيل إن عندك لون أساسي وعايز تطلع منه "كولكشن" كامل؟ الـ CSS وفرت لك دوال بتعمل ده في ثانية:

* **دوال الـ `lighten()` والـ `darken()`:** دي وظيفتها تخلي اللون "ينور" أو "يضلم". بتديها اللون ونسبة مئوية، وهي تقوم بالواجب.

**مثال:**
 لو عندك برجراف لونه أخضر، وعايز تخلي العناوين أفتح بنسبة 30%، الكود هيحسبها لوحده ويطلع لك درجة متناسقة بدل ما توجع دماغك.

```css 
p {
  color: green;
}
h2 {
  color: lighten(green, 30%);
}
 ```

* **دوال الـ `saturate()` والـ `desaturate()`:** هنا بقى بنلعب في "زهزهة" اللون. لو عايز اللون يبقى فاقع وشبعان (Vibrant) أو مطفي وهادي شوية، الدوال دي هي الحل.

**مثال:**
 زرار لونه أورانج، لما المستخدم ييجي بالماوس عليه (Hover)، ممكن تخليه "مطفي" شوية بـ `desaturate` عشان تدي تأثير بصري شيك.

```css
button {
  background-color: hsl(30, 80%, 60%);
}
button:hover {
  background-color: desaturate(hsl(30, 80%, 60%), 30%);
}
```

> **الزتونة:** الفايدة من الدوال دي إنها بتخلي تصميمك كله "لايق على بعضه" لأنك بتشتق كل الدرجات من لون واحد أساسي، وده بيحافظ على الـ Brand Identity بتاعتك.

### **2. الألوان النسبية (Relative Colors)**

دي بقى ميزة "رايقة" جداً ولسه جديدة في الـ CSS. فكرتها إنك بتقول للمتصفح: "خد اللون ده **من (from)** اللون الأساسي ده، بس عدل لي في جيناته شوية".

* **بتشتغل إزاي؟** بتستخدم كلمة `from` وبعدها اللون الأساسي، وبعدين تبدأ تلعب في قيم الـ (r, g, b, a) براحتك.
* *مثال صايع:* لو غيرت لون الموقع الأساسي من أزرق لأخضر، كل الألوان "النسبية" اللي معتمدة عليه هتتغير لوحدها أوتوماتيك وتحافظ على التناسق. كأنك رابطهم ببعض بـ "حبل سري".

```css
.header-title {
  color: blue;
}
.header-title-highlight {
  color: from blue lighten(r, 30%) saturate(g, 60%);
}
```

> [!CAUTION] ملحوظة للمحترفين
> الألوان النسبية لسه طازة، فيا ريت قبل ما تستخدمها تتأكد إن المتصفحات اللي زوارك بيستخدموها بتدعمها (Check Browser Compatibility).

### **3. تحديثات CSS3.. المستقبل وصل!**

الـ CSS3 مبطلتش ابتكار، وطلعت لنا شوية حاجات تخلي المبرمجين "يدلعوا" التصميم:

* **نظام HWB:** اختصار لـ (Hue, Whiteness, Blackness)، وده نظام "بشري" جداً، بتقول فيه أنا عايز الدرجة دي وعايز أزود بياض قد كذا وسواد قد كذا. أسهل بكتير في التخيل!
* **أنظمة Lab و LCH:** دي بقى للناس اللي بتدور على الدقة المتناهية، لأنها بتعتمد على طريقة رؤية العين البشرية الحقيقية للألوان مش مجرد أرقام ديجيتال.
* **دالة `color-mix()`:** دي بقى الخلاط بتاع الـ CSS. بتقدر تخلط لونين مع بعض بنسب معينة، زي ما بتعمل بالضبط في برامج تعديل الصور.

**كلمة أخيرة:** الحاجات الجديدة دي بتخلي شغلك "تقيل" ومحترف، بس دايما خلي عينك على دعم المتصفحات عشان موقعك يظهر مظبوط عند كل الناس.

بصفتي كاتبك التقني المفضل، خليني أشرحلك القسم ده بلهجة مصرية "فارقة" وعملية جداً، عشان لما تيجي تصمم خلفية موقعك، متكتفيش بلون واحد ميت، لا.. إحنا هنخليها تنطق!

---

### **تقنيات الألوان المتقدمة: إزاي تعمل "ميكس" ألوان احترافي؟ (Gradients)**

بص يا هندسة، لو عايز تخرج من دائرة الألوان التقليدية "السادة" وتدخل في عالم الألوان المتداخلة اللي بتدي عمق وشياكة للموقع، يبقى لازم تفهم الـ **Gradients** (التدرجات اللونية). دي مش مجرد ألوان جنب بعض، دي عملية دمج بتخلي العين ترتاح وهي بتشوف التصميم.

في الـ CSS، عندنا كذا نوع من التدرجات، وكل نوع له "هيبته":

#### **1. التدرج الخطي (Linear Gradients): ماشي في خط مستقيم**

ده النوع الأكثر استخداماً، وفكرته إن الألوان بتتحرك في خط مستقيم من نقطة لنقطة. إنت اللي بتحدد الاتجاه (يعني تقوله: "يا لون امشي ناحية اليمين" أو "انزل لتحت بزاوية").

* **الكود بيقول إيه؟**

```css
/* تدرج بيبدأ من الشمال لليمين وبيمر بـ 3 ألوان */
background: linear-gradient(to right, red, orange, yellow);

```

#### **2. التدرج الدائري (Radial Gradients): طالع من المركز**

تخيل إنك رميت حجر في مية، والألوان بتبدأ تخرج من المركز لبره على شكل دايرة أو شكل بيضاوي. ده ممتاز جداً لو عايز تعمل تأثير "إضاءة" في نص العنصر.

* **الكود بيقول إيه؟**

```css
/* تدرج بيبدأ من الأزرق في المركز وبينتهي بالأزرق الفاتح */
background: radial-gradient(blue, lightblue);

```

#### **3. التدرجات المتكررة (Repeating Gradients): شغل النقشات**

ده بقى للمحترفين اللي عايزين يعملوا "تخطيط" أو "نقشات" (Patterns) من غير ما يستخدموا صور. إنت بتعمل تدرج صغير وبتقوله: "كرر نفسك لحد ما تملى المساحة".

* **الكود بيقول إيه؟**

```css
/* تأثير الخطوط المايلة (زي ورق الزينة) */
background: repeating-linear-gradient(45deg, black, black 10px, white 10px, white 20px);

```

> **نصيحة من "صنايعي" كود:** بدل ما تقعد تجرب الأرقام وتتعب قلبك، في مواقع اسمها **Gradient Generators** بتخليك ترسم التدرج بالماوس وتديك الكود جاهز "على المفتاح". استخدمها ووفر وقتك للإبداع!

---

### **أهم التحديثات في CSS3.. المستقبل بين إيديك**

الـ CSS3 مسبتش حاجة للصدفة، وطورت طرق التلاعب بالألوان عشان تخليك "برنس" في مجالك:

* **نظام HWB:** اختصار لـ (Hue, Whiteness, Blackness)، وده أسهل نظام بشري ممكن تتخيله، بتقول الدرجة إيه وعايز بياض وسواد قد إيه.. بسيط زي ما بتطلب قهوتك بالضبط!
* **أنظمة Lab و LCH:** دي بقى للناس اللي بتدور على "الدقة الإكلينيكية"، لأنها بتتعامل مع الألوان زي ما العين البشرية بتشوفها في الحقيقة، مش مجرد حسابات شاشة.
* **دالة `color-mix()`:** دي بقى "الخلاط" بتاعك. تقدر تخلط لونين مع بعض بنسب معينة (مثلاً 20% أحمر على 80% أبيض) وتطلع لون جديد تماماً من غير ما تفتح Palette الألوان.

> [!TIP]
> **خلي بالك:** الحاجات دي "أبهة" جداً، بس دايماً تشيك على دعم المتصفحات (Browser Support) عشان متعملش تصميم عالمي وييجي مستخدم بمتصفح قديم يشوفه أبيض وإسود!

**كده إنت معاك "شنطة العدة" كاملة للألوان.. جرب الأكواد دي وقولي لو في "درجة" معصلجة معاك!**

بصفتي كاتبك التقني، خليني أشرحلك القسم ده بلهجة مصرية "برمجية" تخليك فاهم كل كبيرة وصغيرة في تحريك الألوان وتنسيقها زي المحترفين:

---

### **إزاي تخلي ألوان موقعك "تتحرك" وترد على المستخدم؟ (Animations & Transitions)**

بص يا سيدي، الألوان السادة جميلة، بس الألوان اللي بتتحرك بتدي "روح" للموقع وتخلي الزائر يحس إن الموقع بيتفاعل معاه. الـ CSS بتديك طريقتين عشان تعمل الحركة دي:

#### **1. الـ Transitions (النقلة الناعمة)**

دي بنستخدمها لما نكون عايزين اللون يتغير "بالتدريج" لما يحصل حاجة، زي مثلاً لما المستخدم يقف بالماوس على زرار. بدل ما اللون يقلب فجأة من أزرق لأخضر ويخض العين، بنخليه يتغير في نص ثانية بنعومة.

* **الكود بيقول إيه؟**

```css
button {
   background-color: blue;
   transition: background-color 0.5s ease-in-out; /* غير اللون في نص ثانية بنعومة */
}
button:hover {
   background-color: green; /* اللون اللي هيتحول له */
}

```

#### **2. الـ Animations (الحركة المستمرة)**

هنا بقى إنت بتعمل "فيلم قصير" للون. باستخدام الـ `@keyframes` بتحدد نقط بداية ونهاية ونقط في النص، واللون بيفضل يلف بينهم.

* **مثال:** زرار "بينبض" (Pulse) بلون أحمر لصفر عشان يلفت الانتباه.

---

### **فلاتر الـ CSS (Filters): "فوتوشوب" جوه المتصفح**

من غير ما تفتح برامج تعديل صور، الـ CSS بتقدم لك "فلاتر" جاهزة تغير شكل الصور أو الخلفيات بكلمة واحدة:

* **`grayscale()`:** يقلب الصورة أبيض وإسود.
* **`sepia()`:** يدي تأثير الصور القديمة (البني).
* **`blur()`:** يخلي الصورة "مغلغلة" أو مش واضحة (تمويه).
* **`hue-rotate()`:** يلف الألوان على دايرة الألوان ويغيرها تماماً.

**تريكاية:** تقدر تدمج كذا فلتر مع بعض، وتستخدم الـ `transition` عشان لما المستخدم يقف على الصورة، الفلتر يتشال بالتدريج وتظهر الألوان الحقيقية.

---

### **المتغيرات (CSS Variables): ذكاء المبرمجين**

لو موقعك فيه 100 صفحة، وقررت تغير اللون الأساسي من أزرق لأخضر، هل هتمشي على صفحة صفحة؟ طبعاً لأ! هنا بييجي دور **المتغيرات (Variables)**.

* **بتشتغل إزاي؟** بتعرف اللون مرة واحدة فوق خالص في الـ `:root` وتديله اسم سهل (زي `--main-color`).
* **الفايدة؟** لما تحب تغير اللون، بتغيره في مكان واحد بس، والموقع كله بيسمع فيه فوراً.

```css
:root {
  --primary-color: #007bff; /* عرفنا اللون هنا */
}

h1 {
  color: var(--primary-color); /* استخدمناه هنا */
}

```

> **نصيحة الزتونة:** المتغيرات بتخلي الكود بتاعك "نضيف" ومفهوم لأي حد يقرأه بعدك، وبتسهل عليك جداً لو عايز تعمل "Dark Mode" لموقعك في المستقبل.

---

### **كلمة عن الأدوات المساعدة (Sass & Less)**

فيه حاجات اسمها "Preprocessors" زي **Sass**، دي بتديك عضلات أكتر في التعامل مع الألوان، زي إنك تعمل عمليات حسابية على الألوان أو تحط متغيرات جوه متغيرات. مش ضرورية في البداية، بس لما مشروعك يكبر، هتكون هي إيدك اليمين.

**كده إنت بقيت "مايسترو" ألوان في CSS. عندك أي جزء محتاج نوضحه أكتر بالكود؟**

## ما هي أكواد الألوان للتصميم؟ (نصائح عملية)

لا يكفي أن تعرف كيف تكتب الكود، بل يجب أن تعرف كيف تختار اللون الصحيح. إليك أهم القواعد التي يتبعها المحترفون: 

* **قاعدة 60-30-10:**
* **60%** لون أساسي (غالباً للخلفيات والمساحات الكبيرة).
* **30%** لون ثانوي (للعناوين والحدود). 
* **10%** لون لفت الانتباه (لأزرار الإرسال Submit أو الروابط الهامة). 
* **التباين (Contrast):** تأكد دائماً أن لون النص متباين جداً مع لون الخلفية لسهولة القراءة (Accessibility). 

## أين تضع أكواد الألوان في صفحة الويب؟

كما تعلمنا في أول درس في سلسلة تعلم الـ CSS والذي يسمي
 [3 طرق لربط CSS بـ HTML](http://localhost:1313/categories/articles/css-usage-and-linking-methods-in-html/)
  لدينا عدة أماكن لوضع التنسيقات: 

1. **داخل ملف CSS خارجي (الأفضل):** نربطه بوسم `<link>` داخل الـ `<head>`. 

2. **داخل وسم `<style>`:** في رأس الصفحة مباشرة. 

3. **تنسيق مباشر (Inline Styling):** داخل العنصر نفسه باستخدام خاصية `style`.

**مثال لربط ملف التنسيق:** 

## خلاصة الرحلة مع الألوان

لقد قطعت شوطاً كبيراً اليوم! تعلمت أن الألوان في CSS ليست مجرد أشكال جمالية، بل هي نظام متكامل من البيانات (Data) التي تتعامل معها المتصفحات ومحركات البحث بدقة. 

**تذكر دائماً:**

* استخدم **HEX** للثبات والسرعة.
* استخدم **RGBA** إذا كنت بحاجة للشفافية. 
* استخدم **HSL** إذا كنت تصمم نظام ألوان مرن وسهل التعديل.
* لا تنسَ **الوسوم الدلالية (Semantic Tags)** لتنظيم هيكلك قبل تلوينه، لضمان أفضل نتائج في السيو. 

## الأسئلة الشائعة حول ألوان CSS

> **س: هل هناك فرق في الأداء بين استخدام HEX و RGB؟**
> ج: الفرق لا يذكر تقريباً، المتصفحات الحديثة تعالج الجميع بنفس السرعة، لذا اختر ما يريحك في الكتابة.

> **س: كيف أحصل على أكواد الألوان من صورة أعجبتني؟**
> ج: يمكنك استخدام أدوات مثل "Color Picker" في متصفح كروم أو مواقع مثل Adobe Color لاكتشاف لوحات ألوان متناسقة.