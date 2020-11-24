import {createGlobalStyle} from "styled-components"

const IconsGlobalStyles = createGlobalStyle`

@font-face {
  font-display: fallback;/* disable flickering */
  font-family: 'Font Awesome 5 Brands';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("/libs/fontawesome-5.6.3/webfonts/fa-brands-400.eot");
  src: url("/libs/fontawesome-5.6.3/webfonts/fa-brands-400.eot?#iefix") format("embedded-opentype"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-brands-400.woff2") format("woff2"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-brands-400.woff") format("woff"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-brands-400.ttf") format("truetype"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-brands-400.svg#fontawesome") format("svg");
}

@font-face {
  font-display: fallback;
  font-family: 'Font Awesome 5 Free';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("/libs/fontawesome-5.6.3/webfonts/fa-regular-400.eot");
  src: url("/libs/fontawesome-5.6.3/webfonts/fa-regular-400.eot?#iefix") format("embedded-opentype"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-regular-400.woff2") format("woff2"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-regular-400.woff") format("woff"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-regular-400.ttf") format("truetype"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-regular-400.svg#fontawesome") format("svg");
}

@font-face {
  font-display: fallback;
  font-family: 'Font Awesome 5 Free';
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url("/libs/fontawesome-5.6.3/webfonts/fa-solid-900.eot");
  src: url("/libs/fontawesome-5.6.3/webfonts/fa-solid-900.eot?#iefix") format("embedded-opentype"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-solid-900.woff2") format("woff2"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-solid-900.woff") format("woff"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-solid-900.ttf") format("truetype"),
  url("/libs/fontawesome-5.6.3/webfonts/fa-solid-900.svg#fontawesome") format("svg");
}

.fab {
  font-family: 'Font Awesome 5 Brands';
  font-weight: 400;
}
.far {
  font-family: 'Font Awesome 5 Free';
  font-weight: 400;
}
.fa,
.fas {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
}

.fa,
.fas,
.far,
.fal,
.fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}

/* ====ICONS===== */
/* //get new icons from ref _all.css in /libs/fontawesome-5.6.3 */

.fa-chevron-down:before {
  content: "\f078";
}

.fa-chevron-left:before {
  content: "\f053";
}

.fa-chevron-right:before {
  content: "\f054";
}

.fa-chevron-up:before {
  content: "\f077";
}

.fa-houzz:before {
  content: "\f27c";
}
  
.fa-star-of-life:before {
  content: "\f621";
}

.fa-asterisk:before {
  content: "\f069";
}

.fa-plus-square:before {
  content: "\f0fe";
}
  
.fa-minus-square:before {
  content: "\f146";
}

`

export default IconsGlobalStyles