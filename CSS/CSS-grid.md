# Grid and flexbox

* `display: grid` or `inline-grid`

* `grid-template-rows: none | auto 1fr auto` - elements organized similarly to rows on a table.
* `grid-template-columns: none` - elements organized like columns on a table
* `grid-template-areas: none` - configure the names of a grid and how they sit in relation to one another
* `grid-auto-rows: auto` - Default setting for row sizes
* `grid-auto-columns: auto` - Ditto for column sizes
* `grid-auto-flow: row` - Default location for rows
* `column-gap: normal`
* `row-gap: normal`

### Grid properties for container
* `grid-template-columns: measurement units | % units |repeat(12, 1fr)` - maintain a constant size of column items.
* `grid-template-rows: measurement units | % units |repeat()` - ditto for rows
* `grid-auto-columns: measurement unit`
* `grid-auto-rows: measurement unit`
* `grid-template: “header1 header2” auto` (or `“main right” 75vh`)

### Gap
* `grid-gap` - 
* `grid-column-gap:`
* `grid-row-gap: m-unit-1  m-unit-2` - between columns (??)

### Alignment
* `justify-items: start | center | end | stretch`
* `align-items: start | center | end | stretch`
* `place-items: start | center | stretch` - shorthand for two properties above

### Justification
* `justify-content: start | center | end | stretch | space-between | space-evenly | space-around`
* `align-content: start | center | end | stretch | space-between | space-evenly | space-around`
* `place-content: center | start`

### Positioning
* `grid-auto-flow: row | column | dense`
* `grid-auto-columns`
* `grid-auto-rows` -  size for rows

### Grid item properties
* `grid-column: 1/ span 12;` - corresponds to '.parent { grid-template-columns: repeat(12, 1fr); }`
* `grid-column-start`
* `grid-column-end`
* `grid-row`
* `grid-row-start`
* `grid-row-end`

### Justification and alignment
* `justify-self: start | center | end | stretch`
* `align-self:   start | center | end | stretch`
* `place-self:   start | stretch` - shorthand for two properties above

## Flexbox
* `flex-direction: row | row-reverse | column | column-reverse`
* `align-items: flex-start | flex-end | center |Stretch`
* `justify-content: flex-start | flex-end | center | space-between | space-evenly`

### flexbox item properties
* `flex-grow`
* `flex-basis: auto | % | XXem`
* `order` - `ascending` by default
* `align-self:  start | center | end | stretch`

### Grid template area
Grid areas are a way to group one or more grid cells.
The grid template area is an extension of this concept where you can give names to these grid areas.
```css
body {
    display: grid;
    height: 200px;
    /* ‘head’ is written twice to imply two columns */
    grid-template-areas: "head head"
                         "nav  main"
                         "footer  footer";
    grid-template-rows: 30px 1fr 30px;
    grid-template-columns: 150px 1fr;
  }

  header {
    grid-area: head;
    background-color: lightsalmon;
  }

  .nav-bar {
    grid-area: nav;
    background-color: lightblue;
  }
```
