## MathJax Rendering

Include MathJax CDN Script:
```html
<head>
  <script>
  // Configuration
  window.MathJax = { 
    tex: {
      // recognize inline math enclosed within '$' symbols or \(...\)
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    },
    svg: {
      fontCache: 'global'
    }
  };
  </script>
  <script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
```
