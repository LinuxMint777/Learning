/**
 * 1. Css Introduction: Css => Cascading Style Sheet. (CSS3 - Version).
 * 
 * 2. className {font-size: 16px;} => .className (Selector), font-size (Property Name), 16px (Value)
 * 
 * 3. How to Add Css: Inline Css, Internal Css, External Css.
 * 
 * 4. Css Selector: #idName,.className, ElementName, #idName .className ElementName ...
 * 
 * 5. Css Comments: Css comments format.
 * 
 * 6. Color in Css: colorName, rgb color, hex color, hsl color, rgba color.
 * 
 * 7. Css Backgorund: {background: color url() no-repeat center center;
 * [background-color, background-url, background-repeat, background-position],background-size: cover, background-attachment: fixed; }
 * 
 * 8. Css Border: {border: 3px solid #ddd;} [border-width, border-style, border-color], border-radius: 3px 3px 5px 5px;
 * 
 * 9. Css height & width: {width: 800px; height: 500px; max-width: 700px; min-height: 600px}
 * 
 * 10. Css Padding: {padding: 10px 15px 10px 15px; box-sizing: border-box}
 * 
 * 11. Css Margin: {margin: 10px 15px}
 * 
 * 12. Css Box-Model: {Box-Model => Content => padding => border => Outline => Margin} = {box-sizing: border-box} 
 *
 * 13. Css Text: {font-size, font-family, text-decoration, text-style, text-transform, text-direction, writting-mode, vertical-align: middle, line-height, text-indent, letter-spacing, word-spacing, white-space: pre, word-wrap: break-word; text-shadow,}
 * 
 * 14. Css link: [a, a:link, a:visited, a:hover, a:active]
 * 
 * 15. Css Font: how to use google font, {font-family: 'Poppins', fallbackFontsName} [@font-face {font-family: 'fontName'; src: url('./fonts/fontsName.ttf)}], {font-size, font-style, font-variant: small-caps, font-weight, }
 * 
 * 16. Css Units: (Absolute Unit: px, pt; Relative Unit: em =? parent multiplication by own, & rem => root html multiplication by own, vw => viewport width, vh => viewport height, % => device percentage)
 * 
 * 17. Css Cursor: {cursor: help, cursor: all-scroll, cursor: crosshair, cursor: grab, cursor: not-allowed; cursor: pointer, cursor: progress, cursor: wait;}
 * 
 * 18. Css important: {font-size: 18px !important;} => !important highest priority.
 * 
 * 19. Css Box Shadow: {box-shadow: 3px 4px 5px #ededed;} [box-shadow: 3px 4px 5px #ededed, 3px 4px 5px red;] - multiple shadow use.
 * 
 * 20. Css Opactity: {opacity: 0.7;} = (0.7 => 70%)
 * 
 * 21. Css Filter: filter use for images {filter: blur(10px), brithness(50%), contrast(50%), drop-shadow(5px 5px 5px red), grayscale(80%), hue-rotate(80deg), invert(90%), opacity(70%), saturation(80%), speia(80%)
 * 
 * 22. Image Sprites: Only one image but show crop and different selction. {height: 100px; background: url('./img.png') no-repeat; background-position: 0px -100px)
 * 
 * 23. Css Gradiant: liniar-gradient => ({background-image: liniar-gradient(to top right, red, gree, blue); liniar-gradient(145deg, red, gree, blue);}), radial-gradient => ({background-image: radial-gradient(circle, red 50%, green 30%, blue 40%)}, repeating-radial-gradient(red 50%, green 30%, blue 40%)}), conic-gradient => (background-image: conic-gradient(red, green, blue)
 * 
 * 24. Css overflow: {overflow: hidden, scroll, auto}
 * 
 * 25. Css resize: {resize: none, horizontal, vertical, both} must be {overflow: auto, scroll, hidden}
 * 
 * 26. Css list: {list-style-type: none;list-style-image: url('./img.png'); list-style-position: inside;}
 * 
 * 27. Css table: table{table-layout: auto, fixed (width must be included); border-collapse: collapse; border-spacing: 5px; empty-cell: hide}, table, th, td{border: 1px solid #ddd; text-align: center}, caption{caption-side: bottom}, tr th , tr:nth-child(even){backgorund-color: violet}
 * 
 * 28. Css function: {width: cal(100vw - 200px), {color: var(--primaryColor;}
 * 
 * 29. Css Box-Sizing: {box-sizing: content-box, border-box}
 * 
 * 30. Css initial vs inherit: {font-size: inherit (parent er size nibe);} and initial default;
 * 
 * 31. Css Object-fit: {object-fit: cover; object-position: top center}
 * 
 * 32. Css Pseudo Class: li:last-child {}, li:first-child(), li:nth-child(2), li:nth-child(even), li:nth-child(3n), li:nth-child(3n + 0)
 * 
 * 33. Css Pseudo element: .className::before, #idName::after, tagName::first-letter, tagName::first-line, ::selection{backgorund-color: violet}

 * 34. Css Display: {display: block, inline, inline-block, none} {visibility: hidden}
 * 
 * 35. Css Position: {position: static, relative, fixed, absolute} {top, bottom, left, right}
 *
 * 36. Css Layer & z-index: {position: relative; z-index: 1;}, {position: relative; z-index: 2;}, {position: relative; z-index: 3;} (must be position: relative, abosulte, fixed) thaktei hbe onnothai z-index kaj korbe nah.
 * 
 * 37. float & clear: {float: right}, {float:right; clear: both;} [clear both means sob gulai width khuja bad diye new line theke suru kora]
 * 
 * 38. Css 2D Style: {transform: rotate(45deg), skew(45deg), translate(50px 50px), scale(2); transform-origin: 0% 0% (left-top), 100% 0% (right-top), 100% 100% (right-bottom), 0% 100% (left-bottom) }
 * 
 * 39. Css 3D Style: {transform: perspective(100px) rotate(0,0,50, 25deg); perspective-origin: 50% 50%}
 * 
 * 40. Css transition: {transition: propety duration timing-fuc dealy;} {transition-property: width; transition-duration: 0.5s; transition-dealy: 2s; transition-timing-function: ease-in-out}
 * 
 * 41. Css animation: {animation-name: name; animation-duration: 2s; animation-iteration-count: 5; animation-dealy: 2s; animation-direction: reverse; animation-timing-function: ease-in-out} @keyframes animationName{from{} to{}}; @keyframes animationName{0{} 25%{} 50%{} 76%{} 100%{}}
 * 
 * 42. Css print style: @media screen{}; @media print{}
 * 
 * 43. Css Responsive Web Design: Mobile First Design. 
 * 
 * 44. HTML Viewport: include add html file in <meta name="viewport" content="width=device-width, initial-scale=1.0">
 * 
 * 45. Css Media Query: @media screen and (max-width: 776px){} - Media Query Shikhe tarport Css framework shikha ucit.
 * 
 * 46. Css Advanced Selector: Type/Tag/Element Selector [h2{}], ID Selectior[#myId{}], Class Selector[.className{}], Pseudo Class and Pseudo Element[a:active{}, .className::before{}], Attributes Selector (a[href="www.google.com"]{}, input[type="text"]{}), * Universal Selector [* {margin:0; padding:0; box-sizing:border-box}], Combinator Selector: decendant combinatory [.className span{}], child combinatory [.className > span{}], adjacent combinatory (left right sibling) [.className + h2{}], general sibling combinatory (all sibling) [.className ~ h2{}], And selector [.className, h2{}]
 * 
 * 47. Css Specificity: More Specific rule will get more value. Css kon rule ta follow korbe seitai holo specificity. General Rule: 1. !important will override everything. 2. inline css can override everything without only !important. 3. External will work according to specificity.
 * specificity rule: 1. #ID is highest priority. 2. * Universal is lowest priority.
 *   => 10000 point (!important)
 *   => 1000  point (inline css)
 *   => 100   point (#ID)
 *   => 10    point (.className, attributes input[type="text"], PesudoClass a:active)
 *   => 1     point (TagName/Element selectior, Pesudo elements h2::after)
 *   => 0     point (* Universal Selector)
 *   => your write same rule 2 line then css file execute last line.
 * 
 * 48. Multiple Column in Css: {column-count: 3; column-rule: 1px solid #ddd; column-gap: 50px; column-width: 300px;} {column-span: all}
 * 
 * 49. Css Flex: flex-container{display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-evenly; algin-content: space-between; align-items: center;} flex-items{order: 3; flex-grow: 1; flex-shirink: 1; flex-basis: 300px} -- shortform {flex-flow: direction wrap;} {flex: grow shirink basis}
 * 
 * 50. Css Grid: grid-container{display: grid; grid-template-column: 1fr auto 1fr; grid-template-column: repeat(3, 1fr); grid-template-row: repeat(3, 1fr); grid-gap: 5px; grid-template: row / columns; grid-template-areas: 'hhhh'; grid-template-column: repeat(auto-fit, minmax(200px, 1fr)); grid-tempalte-rows: repeat(2, 1fr); grid-auto-rows: 1fr; justify-content: center; align-content: center; aling-items: center; grid-auto-flow: dense} grid-items{grid-column: 1 / -1; grid-column: 1 / span 3; grid-row: 1 / -2; grid-area: aName}
 * 
 * 51. Css Validator: 
 * 
 */
