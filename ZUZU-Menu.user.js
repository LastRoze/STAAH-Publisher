// ==UserScript==
// @name         STAAH Publisher
// @namespace    https://linkedin.com/in/lastroze
// @author       Last Roze
// @description  ZUZU Hospitality - STAAH publisher is created to easily publish rates across OTA with one click.
// @icon         https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1503462675/pnd8ig9snambqtixjnge.jpg
// @version      1.2
// @copyright    ©2019 - Yoga Budiman
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getResourceURL
// @grant        GM_getValue
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        GM.deleteValue
// @grant        GM.getResourceUrl
// @grant        GM.getValue
// @grant        GM.openInTab
// @grant        GM.xmlHttpRequest
// @grant        unsafeWindow
// @match        *://cp.staah.net/common-cgi/motels/admin/ChannelUpdate.pl*
// @noframes
// ==/UserScript==

var unlocker = document.getElementById('middleselfpass');
unlocker.style.display = null;

var oneClick = "<tr><td style=\"text-align: center;\">ZUZU Menu</td></tr><tr><td style=\"text-align: center;\"> <input title=\"Update the rates for 30 days\" value=\"30 Days\" style=\"margin-right: 5px;\" type=\"button\" onclick=\"$('.btn-danger').click();\"><input title=\"Update the rates for 1 year\" value=\"Full Sync\" type=\"button\" onclick=\"$('.btn-gray').click();\"></td></tr>";
$(oneClick).appendTo("thead");
