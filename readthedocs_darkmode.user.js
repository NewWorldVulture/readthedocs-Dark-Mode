// ==UserScript==
// @name         ReadTheDocs dark theme / night mode
// @namespace    https://github.com/NewWorldVulture
// @version      0.1
// @description  Dark theme / night mode for ReadTheDocs.io
// @author       Ada
// @match        https://*.readthedocs.io/*
// @match        https://*.python.org/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('body { color: #111; background-color: #111; }');
GM_addStyle('div { background-color: #111; }');
GM_addStyle('div.document { color: #111; background-color: #111; }');
GM_addStyle('div.note { color: #222; background-color: #222; border: 1px solid #333; }');
GM_addStyle('div.body { color: #111; background-color: #111; }');
GM_addStyle('div.body h1, h2, h3, h4, h5 { color: #c40; background-color: #111; }');
GM_addStyle('div.section { color: #111; background-color: #111; }');
GM_addStyle('div.sphinxsidebar { color: #05050505; background-color: #05050505; }');
GM_addStyle('div.related { color: #111; background-color: #111; border-bottom: 1px solid #222; border-top: 1px solid #222; }');
GM_addStyle('div.related:first-child { color: #111; background-color: #111; border-bottom: 1px solid #222; border-top: 1px solid #222; }');

GM_addStyle('code { color: #d75; background-color: #333; }');
GM_addStyle('toctree-l1, toctree-l2, toctree-l3 { color: #333; }');
GM_addStyle('h1, h2, h3, h4, h5 { color: #d40; }');
GM_addStyle('p { color: #930; }');
GM_addStyle('li { color: #930; }');

GM_addStyle('a:link { color: #a30; }');
GM_addStyle('a:visited { color: #a77; }');
GM_addStyle('a:hover { color: #b54; }');
GM_addStyle('a:active { color: #920; }');
