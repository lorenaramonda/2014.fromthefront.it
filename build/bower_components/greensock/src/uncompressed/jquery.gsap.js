/*!
 * VERSION: 0.1.7
 * DATE: 2014-04-29
 * UPDATES AND DOCS AT: http://www.greensock.com/jquery-gsap-plugin/
 *
 * Requires TweenLite version 1.8.0 or higher and CSSPlugin.
 *
 * @license Copyright (c) 2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
!function(e){"use strict";var n,i,t,o=e.fn.animate,a=e.fn.stop,r=!0,l=function(e){var n,i={};for(n in e)i[n]=e[n];return i},s={overwrite:1,delay:1,useFrames:1,runBackwards:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,autoCSS:1},u=function(e,n){for(var i in s)s[i]&&void 0!==e[i]&&(n[i]=e[i])},f=function(e){return function(n){return e.getRatio(n)}},c={},d=function(){var o,a,r,l=window.GreenSockGlobals||window;if(n=l.TweenMax||l.TweenLite,n&&(o=(n.version+".0.0").split("."),a=!(Number(o[0])>0&&Number(o[1])>7),l=l.com.greensock,i=l.plugins.CSSPlugin,c=l.easing.Ease.map||{}),!n||!i||a)return n=null,!t&&window.console&&(window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)."+(a?" Version "+o.join(".")+" is too old.":"")),t=!0),void 0;if(e.easing){for(r in c)e.easing[r]=f(c[r]);d=!1}};e.fn.animate=function(t,a,s,f){if(t=t||{},d&&(d(),!n||!i))return o.call(this,t,a,s,f);if(!r||t.skipGSAP===!0||"object"==typeof a&&"function"==typeof a.step||null!=t.scrollTop||null!=t.scrollLeft)return o.call(this,t,a,s,f);var g,h,p,w,m=e.speed(a,s,f),v={ease:c[m.easing]||(m.easing===!1?c.linear:c.swing)},y=this,S="object"==typeof a?a.specialEasing:null;for(h in t){if(g=t[h],g instanceof Array&&c[g[1]]&&(S=S||{},S[h]=g[1],g=g[0]),"toggle"===g||"hide"===g||"show"===g)return o.call(this,t,a,s,f);v[-1===h.indexOf("-")?h:e.camelCase(h)]=g}if(S){v=l(v),w=[];for(h in S)g=w[w.length]={},u(v,g),g.ease=c[S[h]]||v.ease,-1!==h.indexOf("-")&&(h=e.camelCase(h)),g[h]=v[h],delete v[h];0===w.length&&(w=null)}return p=function(i){var t,o=l(v);if(w)for(t=w.length;--t>-1;)n.to(this,e.fx.off?0:m.duration/1e3,w[t]);o.onComplete=function(){i?i():m.old&&e(this).each(m.old)},n.to(this,e.fx.off?0:m.duration/1e3,o)},m.queue!==!1?(y.queue(m.queue,p),m.old&&y.queue(m.queue,function(e){m.old(),e()})):p.call(y),y},e.fn.stop=function(e,i){if(a.call(this,e,i),n){if(i)for(var t,o=n.getTweensOf(this),r=o.length;--r>-1;)t=o[r].totalTime()/o[r].totalDuration(),t>0&&1>t&&o[r].seek(o[r].totalDuration());n.killTweensOf(this)}return this},e.gsap={enabled:function(e){r=e},version:"0.1.7"}}(jQuery);