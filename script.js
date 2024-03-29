// ==UserScript==
// @name         Freedium Replacer
// @namespace    http://tampermonkey.net/
// @version      2024-01-10
// @description  Replaces Medium Articles HTML with Freedium
// @author       Pixelblob
// @match        https://medium.com/*
// @include      https://*.medium.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=medium.com
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    //document.body.innerHTML="";
let html = await (await fetch("https://freedium.cfd/"+document.location)).text()
ReplaceContent(html)

function ReplaceContent(NC) {
        document.open();
        document.write(NC);
        document.close();
      }
})();
