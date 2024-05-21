// ==UserScript==
// @name         Freedium Replacer
// @namespace    http://tampermonkey.net/
// @version      2024-01-10
// @description  Replaces Medium Articles HTML with Freedium
// @author       Pixelblob
// @match        https://medium.com/*
// @include      https://*.medium.com/*
// @include      https://*.plainenglish.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=medium.com
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    if (window.location.hash.includes("bypass")) return
    document.location = "https://freedium.cfd/"+document.location
})();
