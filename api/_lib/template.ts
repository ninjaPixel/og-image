import {marked} from 'marked';
import {sanitizeHtml} from './sanitizer';
import {ParsedRequest} from './types';
import {reset, variables} from "./css";
import {readFileSync} from 'fs';
const barlow = readFileSync(`${__dirname}/../_fonts/BarlowCondensed-Bold.woff2`).toString('base64');


const fontDeclaration = `
@font-face {
    font-family: 'Barlow Condensed';
    font-style:  normal;
    font-weight: bold;
    src: url(data:font/woff2;charset=utf-8;base64,${barlow}) format('woff2');
}`;

const twemoji = require('twemoji');
const twOptions = {folder: 'svg', ext: '.svg'};
const emojify = (text: string) => twemoji.parse(text, twOptions);



function getCss(fontSize='var(--s4)') {
    return `
${fontDeclaration}

${reset}

html {  

${variables}

padding: var(--s2);
}



    body {
        height: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        border: var(--border-thick);
        border-style: dashed;
    }


    
    .root {
        position: relative;
        width: 100%;
        min-width:400px;
        min-height:400px;
}


.square100 {
    width: 100%;
}

.square80 {
    width: 80%;
}

.square100:after,
.square80:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.stripey {
  --light-stripe: var(--color-light);
  --dark-stripe: var(--color-darkish);
  background: repeating-linear-gradient(
    135deg,
    var(--light-stripe),
    var(--light-stripe) 5px,
    var(--dark-stripe) 5px,
    var(--dark-stripe) 10px
  );
  margin-top: var(--s-1);
  position: absolute;
  top: 0;
  right: 0;
}

.black {
  background-color: var(--color-dark);
  position: absolute;
}

.contentRoot {
    border: var(--border-thick);
    z-index: 10;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    background-color: var(--color-light);
    display: flex;
    align-items: center;
    justify-content: center; 
    top:var(--s1);
}
.contentRootText {
  padding: var(--s-2);
}

.contentRootText  h2 {
  font-family: var(--font-special);
  font-size: ${fontSize};
  font-weight: bold;
}
    
    `;
}

export function getHtml(parsedReq: ParsedRequest) {
    const {text,  md, fontSize} = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss( fontSize)}
    </style>
    <body>
        <div>
            <div class="root">
                <div class="square80 black"></div>
    
                <div class="square80 contentRoot">
                    <div class="contentRootText">
                        <h2>${emojify(
                                md ? marked(text) : sanitizeHtml(text)
                            )}</h2>
                        </>
        
        
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>`;
}

// function getImage(src: string, width = 'auto', height = '225') {
//     return `<img
//         class="logo"
//         alt="Generated Image"
//         src="${sanitizeHtml(src)}"
//         width="${sanitizeHtml(width)}"
//         height="${sanitizeHtml(height)}"
//     />`
// }
//
// function getPlusSign(i: number) {
//     return i === 0 ? '' : '<div class="plus">+</div>';
// }
