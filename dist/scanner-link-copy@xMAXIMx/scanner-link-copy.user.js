// ==UserScript==
// @id             scanner-link-copy@xMAXIMx
// @name           Scanner link-copy
// @version        0.2.1
// @description    Adds scanner link (copy mode) to IITC
// @author         xMAXIMx
// @category       Info
// @include        *://*.ingress.com/*
// @match          *://*.ingress.com/*
// @updateURL      https://raw.githubusercontent.com/IITC-CE/IITC-Store/master/dist/scanner-link-copy@xMAXIMx/scanner-link-copy.meta.js
// @downloadURL    https://raw.githubusercontent.com/IITC-CE/IITC-Store/master/dist/scanner-link-copy@xMAXIMx/scanner-link-copy.user.js
// ==/UserScript==

function wrapper(plugin_info) {
  if(typeof window.plugin !== 'function') window.plugin = function(){};
  window.plugin.scannerLinkCopy = function () {};
  window.plugin.scannerLinkCopy.portalInfo = function () {$('.linkdetails').append('<aside><a id="scannerLinkCopy" target="_blank" onclick="window.plugin.scannerLinkCopy.copyLink(\'https://link.ingress.com/?link=https%3A%2F%2Fintel.ingress.com%2Fportal%2F' + window.selectedPortal + '&apn=com.nianticproject.ingress&isi=576505181&ibi=com.google.ingress&ifl=https%3A%2F%2Fapps.apple.com%2Fapp%2Fingress%2Fid576505181&ofl=https%3A%2F%2Fintel.ingress.com%2Fintel%3Fpll%3D' + window.portals[window.selectedPortal]._latlng.lat + '%2C' + window.portals[window.selectedPortal]._latlng.lng + '\')">Copy Scanner Link</a></aside>');};
  window.plugin.scannerLinkCopy.copyLink = function (link){if (typeof android !== "undefined") {androidCopy(link);}else{navigator.clipboard.writeText(link);}}
  function setup() {window.addHook('portalDetailsUpdated', window.plugin.scannerLinkCopy.portalInfo);}
  setup.info = plugin_info;
  if (!window.bootPlugins) window.bootPlugins = [];
  window.bootPlugins.push(setup);
  if (window.iitcLoaded && typeof setup === 'function')setup();
}
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) {info.script = {version: GM_info.script.version,name: GM_info.script.name,description: GM_info.script.description};}
var textContent = document.createTextNode('('+ wrapper +')('+ JSON.stringify(info) +')');
script.appendChild(textContent);
(document.body || document.head || document.documentElement).appendChild(script);
