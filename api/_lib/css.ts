export const reset=`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}`

export const variables =`
--font-plain: Helvetica Neue, Helvetica, Arial, sans-serif;
        --font-special: Barlow Condensed, Helvetica, sans-serif;
        --font-mono: Menlo, Courier, Courier New, Andale Mono, monospace;
        --font-mono-size: 0.85em;
        --color-dark: #050505;
        --color-darkish: #404040;
        --color-mid: grey;
        --color-lightish: #e6e6e6;
        --color-light: #fafafa;
        --ratio: 1.4;
        --s-5: calc(
        var(--s0) / var(--ratio) / var(--ratio) / var(--ratio) / var(--ratio) /
          var(--ratio)
        );
        --s-4: calc(
        var(--s0) / var(--ratio) / var(--ratio) / var(--ratio) / var(--ratio)
        );
        --s-3: calc(var(--s0) / var(--ratio) / var(--ratio) / var(--ratio));
        --s-2: calc(var(--s0) / var(--ratio) / var(--ratio));
        --s-1: calc(var(--s0) / var(--ratio));
        --s0: 1rem;
        --s1: calc(var(--s0) * var(--ratio));
        --s2: calc(var(--s0) * var(--ratio) * var(--ratio));
        --s3: calc(var(--s0) * var(--ratio) * var(--ratio) * var(--ratio));
        --s4: calc(
        var(--s0) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio)
        );
        --s5: calc(
        var(--s0) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) *
          var(--ratio)
        );
        
        /*
        Don't use 'ch' units for measure as that is different for h1 vs p etc
        and means that things won't line-up!
        */
        --measure: 40rem;
        --line-height: var(--ratio);
        --line-height-small: 0.9;
        /*
          Need an actual pixel value for border, otherwise funny gaps can appear
          due to the way that the browser will render the contents.
          See https://johnresig.com/blog/sub-pixel-problems-in-css/
         */
        --border-thick: 6px solid var(--color-dark);
        line-height: var(--line-height);
        font-family: var(--font-plain);
        background-color: var(--color-light);
        color: var(--color-dark);
        --main-padding: var(--s-1);
`
