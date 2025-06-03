Links:
* [MDN: @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
* https://freefrontend.com/css-animation-examples/
* https://goingclear.com/website-effects/
* https://www.opendesignsin.com/blog/10-web-design-effects-to-enhance-your-website/
* https://dev.to/kiranrajvjd/simple-text-effects-using-css-3dgp
* https://freefrontend.com/css-typing-text/
* https://uicookies.com/css-text-effects/
* https://www.w3schools.com/css/css3_animations.asp
* https://www.lambdatest.com/blog/css-transforms-and-transitions-property/

## Text effects

* Text-transform: None, uppercase, lowercase, capitalize, full-width
* Font-style: Normal, italic, oblique
* Font-weight: Normal, weight, lighter, bolder, 100-900
* Text-decoration: None, underline, overline, line-through

additional properties:
* Text-align-last: Alignment for the last line when text set to justify
* Text-combine-upright: Multiple characters into the space of a single character placed upright like in Mandarin
* Text-decoration-color: Color configuration of the text-decoration
* Text-decoration-line: Line type in text-decoration such as underline, overline and so on
* Text-decoration-style: Styles added to lines under text such as wavy, dotted and so on
* Text-decoration-thickness: Thickness of the decoration line
* Text-emphasis: Shorthand for other properties such as color and style 
* Text-indent: The indentation of the first line
* Text-justify: Specifies the justification method used when text-align is "justify"
* Text-orientation: Orientation of text in a line such as sideways, upright and so on
* Text-shadow:
* Text-underline-position: Declare position of underline set using the text-decoration property
* Text-overflow: clip, ellipsis
* Word-wrap: Normal, anywhere, break-word (Applies to inline elements, alias for overflow-wrap)
* Word-break: Normal, break-all, keep-all, break-word
* Writing-mode: Horizontal-tb, vertical-lr, vertical-rl

## Animation and effects
* transform: none | matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
* transform: rotate(60deg); | rotate3d(3,2,1, 90deg), rotateX(), rotateZ()
* transform: translate3d(10px, 20px, 30px); | scale3d(2, 1, 0.3);
* transform: skew(10deg, deg) | skewX(), skewY()

Global value types: `transform: inherit;` `initial` `revert` `revert-layer` `unset`

Combine: `transform: rotate(45deg) scale(1.5) translate(45px);`
Anchor point: `transform-origin: 10px 10px;`, `transform-origin: right bottom;`

**Shorthand** for the `animation` property consists of
the following properties with their default values:
`animation:` <name> <duration> [timing-function] [delay] ...;

* name: none 
* duration: 0s
* timing-function: ease (| ease-in)
* delay: 0s
* iteration-count: 1
* direction: normal
* fill-mode: none
* play-state: running
* timeline: auto

Animation combination: 
```css
animation: animation-a 2s linear infinite alternate, 
        animation-b 3s ease infinite alternate;
```