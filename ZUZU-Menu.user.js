// ==UserScript==
// @name         STAAH Publisher
// @namespace    https://linkedin.com/in/lastroze
// @author       Last Roze
// @description  ZUZU Hospitality - STAAH publisher is created to easily publish rates across OTA with one click.
// @icon         https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1503462675/pnd8ig9snambqtixjnge.jpg
// @version      1.3
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

var oneClick = "<tr><td style=\"text-align: center;color: #202c2d;background: #FFFFFF;text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;\">ZUZU Menu</td></tr><tr><td style=\"text-align: center;\"> <input title=\"Update the rates for 30 days\" value=\"30 Days\" style=\"margin-right: 5px;\" type=\"button\" onclick=\"$('.btn-danger').click();\"><input title=\"Update the rates for 1 year\" value=\"Full Sync\" type=\"button\" onclick=\"$('.btn-gray').click();\"></td></tr>";
$(oneClick).appendTo("thead");
