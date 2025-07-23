# Chakra UI

[Chakra UI](https://chakra-ui.com/) is a modular and accessible component library.

Chakra groups its different [components](https://chakra-ui.com/docs/components) by categories, like layout, forms, data display, feedback, typography or overlay.

**Layout** components are in charge of setting virtual delimiters or boundaries for your content. They also manage how their children are laid (row or column) and the spacing between them among other properties. Some layout components to highlight are:
* HStack and VStack: they display children using flex properties and stack elements horizontally or vertically respectively. Both take a spacing prop that allows you to set the spacing between the elements.

* Box: it allows you to create a box with a background color, border, shadow, etc. It takes a bg prop that allows you to set the background color.

**Typography** is also an important category that is worth mentioning. There are two main components from this group:

* Heading: renders one of the different DOM header tags (*h1*, *h2*, *h3*…). It takes a size prop that allows you to set the size of the heading and an as prop to specify the particular semantic HTML tag.
```html
<Heading as='h2' size='2xl'>
  Little Lemon
</Heading>
```
* Text: is used to render text and paragraph. Offers a `fontSize` prop.
```html
<Text fontSize='lg'>Best restaurant in town</Text>
```

## Style props
Chakra uses [style props](https://chakra-ui.com/docs/styled-system/style-props) to provide css directives directly as props to the different components.

As a general rule, you can consider camelCase versions of css styles to be valid style props. But you can also leverage the shorthand version. For example, instead of using `backgroundColor`, you can use `bg`.
```html
<Box backgroundColor='tomato' /> is equivalent to <Box bg='tomato' />
```

Putting all together, the below example represents three boxes stacked in a row, with a vertical space of 16px between boxes, where each box has a height of 40px and a different background color, as well as a particular number as its children:
```html
<HStack spacing=”16px”>
  <Box h='40px' bg='yellow.200'>
    1
  </Box>
  <Box h='40px' bg='tomato'>
    2
  </Box>
  <Box h='40px' bg='pink.100'>
    3
  </Box>
</HStack>
```
