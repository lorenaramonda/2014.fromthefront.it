/*!
 * VERSION: 0.5.1
 * DATE: 2014-02-14
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";var t,e,r,i,n={scale:1,shadowOffset:1,fillPatternOffset:1,offset:1,fill:2,stroke:2,shadowColor:2},s={},o={},a=/(\d|\.)+/g,h=/(?:_cw|_ccw|_short)/,u=window._gsDefine.globals.com.greensock.plugins,l={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},f=function(t,e,r){return t=0>t?t+1:t>1?t-1:t,255*(1>6*t?e+(r-e)*t*6:.5>t?r:2>3*t?e+(r-e)*(2/3-t)*6:e)+.5|0},_=function(t){if(""===t||null==t||"none"===t)return l.transparent;if(l[t])return l[t];if("number"==typeof t)return[t>>16,t>>8&255,255&t];if("#"===t.charAt(0))return 4===t.length&&(t="#"+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)+t.charAt(3)+t.charAt(3)),t=parseInt(t.substr(1),16),[t>>16,t>>8&255,255&t];if("hsl"===t.substr(0,3)){t=t.match(a);var e=Number(t[0])%360/360,r=Number(t[1])/100,i=Number(t[2])/100,n=.5>=i?i*(r+1):i+r-i*r,s=2*i-n;return t.length>3&&(t[3]=Number(t[3])),t[0]=f(e+1/3,s,n),t[1]=f(e,s,n),t[2]=f(e-1/3,s,n),t}for(var o=t.match(a)||l.transparent,h=o.length;--h>-1;)o[h]=Number(o[h]);return o},c=function(t,e,r,i){this.getter=e,this.setter=r;var n=_(t[e]());this.proxy={r:n[0],g:n[1],b:n[2],a:n.length>3?n[3]:1},i&&(this._next=i,i._prev=this)},p=[],g=function(){var r=p.length;if(0!==r){for(;--r>-1;)p[r].draw(),p[r]._gsDraw=!1;p.length=0}else t.removeEventListener("tick",g),e=!1},w=function(t,e){var r="x"===e?"y":"x",i="_gs_"+t;s[t]=function(){return this["get"+t]()[e]},o[t]=function(n){var s=this["get"+t](),o=this[i];return o||(o=this[i]={}),o[e]=n,o[r]=s[r],this[t](o),this}},y=function(t,e){return function(r){return arguments.length?e(r):t()}},d=function(t,e){var r,i,a,h,u=[];for(r in e)if(i=e[r],"bezier"!==r&&"autoDraw"!==r&&"set"!==r.substr(0,3)&&void 0===t[r]&&(u.push(r),delete e[r],r="set"+r.charAt(0).toUpperCase()+r.substr(1),e[r]=i),n[r]){if(1===n[r])return e[r+"X"]=e[r+"Y"]=e[r],delete e[r],d(t,e);!t[r]&&o[r]&&(h=t.prototype||t,h[r]=y(s[r],o[r]))}else if("bezier"===r)for(i=i instanceof Array?i:i.values||[],a=i.length;--a>-1;)0===a?u=u.concat(d(t,i[a])):d(t,i[a]);return u},v=function(t){var e,r={};for(e in t)r[e]=t[e];return r};for(i in n)1===n[i]&&(w(i,"x"),w(i,"y"));var b=window._gsDefine.plugin({propName:"kinetic",API:2,version:"0.5.1",init:function(e,i,s){var o,a,l,f,p,g;if(!r&&(r=parseInt(Kinetic.version.split(".")[0],10)<5))throw"The GSAP KineticPlugin that's loaded requires KineticJS version 5.0.0 or later. For earlier versions, use KineticPlugin from GSAP 1.11.3 or earlier.";this._overwriteProps=d(e,i),this._target=e,this._layer=i.autoDraw!==!1?e.getLayer():null,!t&&this._layer&&(t=s.constructor.ticker);for(o in i){if(a=i[o],2===n[o])f=this._firstSP=new c(e,o,o,this._firstSP),a=_(a),f.proxy.r!==a[0]&&this._addTween(f.proxy,"r",f.proxy.r,a[0],o),f.proxy.g!==a[1]&&this._addTween(f.proxy,"g",f.proxy.g,a[1],o),f.proxy.b!==a[2]&&this._addTween(f.proxy,"b",f.proxy.b,a[2],o),(a.length>3||1!==f.proxy.a)&&f.proxy.a!==a[3]&&this._addTween(f.proxy,"a",f.proxy.a,a.length>3?a[3]:1,o);else if("bezier"===o){if(p=u.BezierPlugin,!p)throw"BezierPlugin not loaded";p=this._bezier=new p,"object"==typeof a&&a.autoRotate===!0&&(a.autoRotate=["x","y","rotation",0,!1]),p._onInitTween(e,a,s),this._overwriteProps=this._overwriteProps.concat(p._overwriteProps),this._addTween(p,"setRatio",0,1,o)}else if("rotation"!==o&&"rotationDeg"!==o||"string"!=typeof a||!h.test(a))a instanceof Array?this._initArrayTween(e[o](),a,o):"autoDraw"!==o&&(l="get"+o.substr(3),this._addTween(e,o,("function"==typeof e[o]?e["get"!==l&&"function"==typeof e[l]?l:o]():e[o])||0,a,o));else{if(g=u.DirectionalRotationPlugin,!g)throw"DirectionalRotationPlugin not loaded";g=this._directionalRotation=new g,l={useRadians:!1},l[o]=a,g._onInitTween(e,l,s),this._addTween(g,"setRatio",0,1,o)}this._overwriteProps.push(o)}return!0},kill:function(t){return t=v(t),d(this._target,t),this._bezier&&this._bezier._kill(t),this._directionalRotation&&this._directionalRotation._kill(t),this._super._kill.call(this,t)},round:function(t,e){return t=v(t),d(this._target,t),this._bezier&&this._bezier._roundProps(t,e),this._super._roundProps.call(this,t,e)},set:function(r){this._super.setRatio.call(this,r);var i,n,s,o,a,h,u=this._firstSP,l=this._layer,f=this._arrayTweens;if(u)for(a=this._target;u;)h=u.proxy,a[u.setter]((1!==h.a?"rgba(":"rgb(")+(0|h.r)+", "+(0|h.g)+", "+(0|h.b)+(1!==h.a?", "+h.a:"")+")"),u=u._next;if(f){for(i=f.length;--i>-1;)n=f[i],o=n.s+n.c*r,n.a[n.i]=1e-6>o&&o>-1e-6?0:o;for(s in this._arrayProps)this._target[s](this._arrayProps[s])}l&&!l._gsDraw&&(p.push(l),l._gsDraw=!0,e||(t.addEventListener("tick",g),e=!0))}});i=b.prototype,i._initArrayTween=function(t,e,r){this._arrayTweens||(this._arrayTweens=[],this._arrayProps={});for(var i,n,s=t.length,o=this._arrayTweens;--s>-1;)i=t[s],n=e[s],i!==n&&o.push({a:t,i:s,s:i,c:n-i});o.length&&(this._arrayProps[r]=t)}}),window._gsDefine&&window._gsQueue.pop()();