# iFrame sandbox

The `<iframe>` is the *inline frame* element that embeds an HTML page into another page.
* `<iframe name = "My Frame" width="400" height="300"></iframe>`
* [`allow` attribute](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/allow)
  * allow="fullscreen”
  * allow=“geolocation”
  * allow="camera; microphone"
* `referrerpolicy`
  * no-referrer - The referrer header will not be sent
  * origin - The referrer will be limited to the origin of the referring page
  * strict-origin The origin of the document is sent as the referrer, only when using the same protocol (HTTP/HTTPS)
* [`sandbox`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/sandbox)
  When the value of this attribute is empty, all restrictions are applied.
  To lift some restrictions, use a space-separated list: `<iframe src="frm1.html" sandbox="allow-forms allow-scripts">`
  * `allow-downloads` Allow the user to download an item
  * `allow-forms` Allow the user to submit forms
  * `allow-modals` The IFrame can open modal windows
  * `allow-orientation-lock` Let the IFrame lock the screen orientation
  * `allow-popups` Allow opening popups
  * `allow-presentation` Allow a presentation session to start
  * `allow-scripts` Let the IFrame run scripts (without creating popup windows)
* `srcdoc` - override the `src` attribute: `<iframe src="frm0.html" srcdoc="<p>My inline HTML</p>" >`
* `loading` - `eager` or `lazy` loading
* `title` - for accessibility purposes: `<iframe src="hist.html" title="HTML history form 1993 to present days (last updated 2025-05-14)"> </iframe>`

