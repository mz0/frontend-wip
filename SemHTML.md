# Semantic HTML

## Sectioning tags

Use the following tags to organize your HTML document into structured sections. 

* `<header>` The header of a content section or the web page.
  The web page header often contains the website branding or logo.
* `<nav>` The navigation links of a section or the web page.
* `<footer>` The footer of a content section or the web page. On a web page, it often contains secondary links,
  the copyright notice, privacy policy and cookie policy links.
* `<main>` Specifies the main content of a section or the web page.
* `<aside>` A secondary set of content that is not required to understand the main content.
* `<article>` An independent, self-contained block of content such as a blog post or product.
* `<section>` A standalone section of the document that is often used within the body and article elements.
* `<details>` A collapsed section of content that can be expanded if the user wishes to view it.
* `<summary>` Specifies the summary or caption of a `<details>` element.
* `<h1> <h2> <h3> <h4> <h5> <h6>` Headings on the web page. `<h1>` indicates the most important heading
  whereas `<h6>` indicates the least important. 


## Content tags

* `<blockquote>` Used to describe a quotation.
* `<dd>` Used to define a description for the preceding `<dt>` element.
* `<dl>` Used to define a description list.
* `<dt>` Used to describe terms inside `<dl>` elements.
* `<figcaption>` Defines a caption for a photo image.
* `<figure>` Applies markup to a photo image.
* `<hr>` Adds a horizontal line to the parent element.
* `<li>` Used to define an item within a list.
* `<menu>` A semantic alternative to `<ul>` tag.
* `<ol>` Defines an ordered list.
* `<p>` Defines a paragraph.
* `<pre>` Used to represent preformatted text. Typically rendered in the web browser using a monospace font.
* `<ul>` Unordered list


## Inline tags

* `<a>` An anchor link to another HTML document.
* `<abbr>` Specifies that the containing text is an abbreviation or acronym.
* `<b>` Bolds the containing text. When used to indicate importance use `<strong>` instead.
* `<br>` A line break. Moves the subsequent text to a new line.
* `<cite>` Defines the title of creative work (for example a book, poem, song, movie, painting or sculpture).
  The text in the `<cite>` element is usually rendered in italics.
* `<code>` Indicates that the containing text is a block of computer code.
* `<data>` Indicates machine-readable data.
* `<em>` Emphasizes the containing text.
* `<i>` The containing text is displayed in italics. Used to indicate idiomatic text or technical terms.
* `<mark>` The containing text should be marked or highlighted.
* `<q>` The containing text is a short quotation.
* `<s>` Displays the containing text with a strikethrough or line through it.
* `<samp>` The containing text represents a sample.
* `<small>` Used to represent small text, such as copyright and legal text.
* `<span>` A generic element for grouping content for CSS styling.
* `<strong>` Displays the containing text in bold. Used to indicate importance.
* `<sub>` The containing text is subscript text, displayed with a lowered baseline.
* `<sup>` The containing text is superscript text, displayed with a raised baseline.
* `<time>` A semantic tag used to display both dates and times.
* `<u>` Displays the containing text with a solid underline.
* `<var>` The containing text is a variable in a mathematical expression.


## Embedded content and media tags

* `<audio>` Used to embed audio in web pages.
* `<canvas>` Used to render 2D and 3D graphics on web pages.
* `<embed>` Used as a containing element for external content provided by an external application
  such as a media player or plug-in application. 
* `<iframe>` Used to embed a nested web page. 
* `<img>` Embeds an image on a web page.
* `<object>` Similar to `<embed>` but the content is provided by a web browser plug-in.
* `<picture>` An element that contains one `<img>` element and one or more `<source>` elements
  to offer alternative images for different displays/devices.
* `<video>` Embeds a video on a web page.
* `<source>` Specifies media resources for `<picture>`, `<audio>` and `<video>` elements.
* `<svg>` Used to define Scalable Vector Graphics within a web page.


## Table tags

* `<table>` Defines a table element to display table data within a web page.
* `<thead>` Represents the header content of a table. Typically contains one `<tr>` element.
* `<tbody>` Represents the main content of a table. Contains one or more `<tr>` elements.
* `<tfoot>` Represents the footer content of a table. Typically contains one `<tr>` element.
* `<tr>` Represents a row in a table. Contains one or more `<td>` elements when used within `<tbody>` or `<tfoot>`.
  When used within `<thead>`, contains one or more `<th>` elements.
* `<td>` Represents a cell in a table. Contains the text content of the cell.
* `<th>` Defines a header cell of a table. Contains the text content of the header.
* `<caption>` Defines the caption of a table element.
* `<colgroup>` Defines a semantic group of one or more columns in a table for formatting.
* `<col>` Defines a semantic column in a table.

## Input fields and forms
* `<button>`
  ```html
  <button onclick="foo()"> 
    <img src="buttonFoo.jpg" alt="perform foo" height="16" width="64">
  </button> 
  ``` 
* `<input type="button" value="Click me" onclick="msg()" />`
* `checkbox`
  ```html
  <input type="checkbox" id="dog" name="dog" value="Dog">
  <label for="dog">It's a dog</label>
  ```
* `radio`
  ```html
  <input type="radio" id="light" name="theme" value="Light"> 
  <label for="light">Light</label>
  ```
* `<input type="image" src="submitButton.png" alt="Submit" height="24">` - graphical submit button
* `submit` - a button for submitting all values from an HTML form to a form-handler.
  ```html
  <form action="myserver.com" method="POST">
  <input ..
  
  <input type="submit" value="Submit" />
  </form>
  ```
* `text` - a basic single-line text field
  ```html
  <label for="fname">First name:</label> 
  <input type="text" id="fname" name="fname">
  ```
* `<input type="search" id="gsearch" name="gsearch">` - functionally identical to text inputs,
   but may be styled differently depending on the browser.
* `<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}">` - for entering a telephone number.
   Browsers that do not support “tel” fall back to standard text input.
   You can optionally use the "pattern" field to perform validation.
* `<input type="url" id="homepage" name="homepage">` - similar to a text input, but performs automatic validation before being submitted to the server.
* `<input type="password" id="pwd" name="pwd">`
* `date`
  ```html
  <label for="dob">Date of birth:</label>
  <input type="date" id="dob" name="date_of_birth">
  ```
* `<input type="week" id="week" name="week">` - a newer type, is not supported by all the browsers.
* `<input type="month" id="bdaymonth" name="bdaymonth" min="1930-01" value="2000-01">` - a control for entering a month and year.
* `<input type="datetime-local" id="birthdaytime" name="birthdaytime">`
* `<input type="time" id="appt" name="appt">` - a control for entering a time value in hours and minutes, with no time zone.
* `<input type="email" id="email" name="email">`
* `<input type="number" id="quantity" name="quantity" min="1" max="5">`
* `<input type="range" id="volume" name="volume" min="0" max="10">`
* `<input type="file" id="gal1" name="myfiles" multiple>` lets the user select and upload a file
* `<input type="hidden" id="custId" name="custId" value="3487">` invisible part of submitted data
* `<input type="reset">` - a button that resets the contents of the form to their default values
* companion `<output name="result" for="p q">57</output>` (use JavaScript to update it.
  ```js
  const form = document.getElementById("example-form");
  const a = form.elements["a"];
  const b = form.elements["b"];
  const result = form.elements["result"];

  function updateResult() {
    const aValue = parseInt(a.value);
    const bValue = parseInt(b.value);
    result.value = aValue + bValue;
  }

  form.addEventListener("input", updateResult);

  updateResult();
  ```

### Other inputs
* <select>`, `<optgroup>`, `<option>`
  ```html
  <select id="dino-select">
    <optgroup label="Theropods">
      <option>Tyrannosaurus</option>
      <option>Velociraptor</option>
      <option>Deinonychus</option>
    </optgroup>
    <optgroup label="Sauropods">
      <option>Diplodocus</option>
      <option>Saltasaurus</option>
      <option>Apatosaurus</option>
    </optgroup>
  </select>
  ```
* `<fieldset>`, `legend>`
  ```html
  <fieldset>
    <legend>Personal Info</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br>
  </fieldset>
  ```
* `<textarea>`
  ```html
  <textarea name="response" rows="10" cols="30" maxlength=”200”>

  </textarea>
  ```


## Metadata

HTML `<meta>` tags
* `<meta name="author" content="Lewis Carrol">`
* `<meta http-equiv="refresh" content="30">`
* `<meta name="google"/>`tells Google not to show the sitelinks search box for your page when showing search results 
* `<meta name="googlebot" content=”notranslate” />` tells Google you don’t want to provide
   an automatic translation for your page if the user uses a different language
* `<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />`
* `<meta name="rating" content="safe for kids">`
* `<meta http-equiv="Cache-Control" content="no-cache">`
* Responsive design/mobile meta tags
  * `<meta name="format-detection" content="telephone=yes"/>`  indicates that telephone numbers should appear as hypertext links
  * `<meta name="HandheldFriendly" content="true"/>`
  * `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>`

## [Open Graph Protocol](https://ogp.me)

The Open Graph protocol was originally created at Facebook and is inspired by
[Dublin Core](https://en.wikipedia.org/wiki/Dublin_Core),
[ link-rel canonical](https://googlewebmastercentral.blogspot.com/2009/02/specify-your-canonical.html),
[Microformats](https://microformats.org/), and [RDFa](https://en.wikipedia.org/wiki/RDFa).

The specification is available under the [Open Web Foundation Agreement, Version 0.9](https://openwebfoundation.org/legal/the-0-9-agreements---necessary-claims). 

Basic Metadata

* `og:title` - The title of your object
* `og:type` - The type of your object, e.g., "video.movie".
* `og:image` - An image URL which should represent your object within the graph.
* `og:url` - The canonical URL of your object that will be used as its permanent ID in the graph

```html
<html prefix="og: https://ogp.me/ns#">
<head>
<title>The Rock (1996)</title>
<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
...
</head>
...
</html>
```

[Optional Metadata](https://ogp.me/#optional)
* `og:locale`  - The locale (lang_TERRITORY) - e.g. `pt_BR`
* `og:description` - A one to two sentence description of your object.
* `og:site_name`
...

### [Implementations](https://ogp.me/#implementations)
* [Facebook Object Debugger](https://developers.facebook.com/tools/debug/) - Facebook's official parser and debugger
* [Google Rich Snippets Testing Tool](https://www.google.com/webmasters/tools/richsnippets) - Open Graph protocol support in specific verticals and Search Engines.
* [OpenGraph for Java](https://github.com/callumj/opengraph-java)
* [PyPoenGraph](https://pypi.python.org/pypi/PyOpenGraph)
also PHP, Ruby, Perl, WordPress plugins.
