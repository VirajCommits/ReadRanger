(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},5490:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>d,pages:()=>c,routeModule:()=>f,tree:()=>u});var n=r(260),i=r(8203),a=r(5155),o=r.n(a),s=r(7292),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1377)),"/Users/virajmurab/Documents/FALL2024/saas/reading-tracker/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/Users/virajmurab/Documents/FALL2024/saas/reading-tracker/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/virajmurab/Documents/FALL2024/saas/reading-tracker/src/app/page.tsx"],d={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},7733:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},8266:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},8540:()=>{},2092:()=>{},8260:(e,t,r)=>{Promise.resolve().then(r.bind(r,329))},4292:(e,t,r)=>{Promise.resolve().then(r.bind(r,7075))},7075:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var n=r(5512),i=r(8009);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,i.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:l,iconNode:u,...c},d)=>(0,i.createElement)("svg",{ref:d,...s,width:t,height:t,stroke:e,strokeWidth:n?24*Number(r)/Number(t):r,className:o("lucide",a),...c},[...u.map(([e,t])=>(0,i.createElement)(e,t)),...Array.isArray(l)?l:[l]])),u=((e,t)=>{let r=(0,i.forwardRef)(({className:r,...n},s)=>(0,i.createElement)(l,{ref:s,iconNode:t,className:o(`lucide-${a(e)}`,r),...n}));return r.displayName=`${e}`,r})("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),c=`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter&display=swap');

/* Reset all margins and paddings */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Essential body/html resets for full viewport coverage */
html, body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  font-family: 'Inter', sans-serif;
}

/* Fix iOS viewport height issues */
:root {
  --vh: 100%;
}

/* Root element styles */
#root, main {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #141e33;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}

h1, h2, h3, .font-heading {
  font-family: 'Playfair Display', serif !important;
}

/* Hide scrollbar but keep functionality */
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
`;function d(){let[e,t]=(0,i.useState)({minutesPerDay:60,readingSpeed:300,months:3}),[r,a]=(0,i.useState)(null),[o,s]=(0,i.useState)([]),[l,d]=(0,i.useState)([]),[f,p]=(0,i.useState)(!1),[m,h]=(0,i.useState)(!1),[g,x]=(0,i.useState)(null),[v,y]=(0,i.useState)(null),b=e=>{let{name:r,value:n}=e.target;t(e=>({...e,[r]:Number(n)}))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:c}),(0,n.jsx)("div",{className:"fixed inset-0 bg-[#141e33] text-gray-100",children:(0,n.jsx)("div",{className:"h-full w-full overflow-y-auto hide-scrollbar",children:(0,n.jsxs)("div",{className:"min-h-full w-full flex flex-col items-center px-4 py-6",children:[(0,n.jsx)("h1",{className:"text-3xl sm:text-4xl font-heading font-bold text-center mb-6",children:"Reading Time Calculator"}),(0,n.jsxs)("div",{className:"w-full max-w-sm bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg",children:[(0,n.jsxs)("form",{className:"space-y-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block mb-2 font-heading font-semibold",children:"If I read"}),(0,n.jsxs)("select",{name:"minutesPerDay",value:e.minutesPerDay,onChange:b,className:"w-full p-3 rounded-lg bg-gray-700/50 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-500",children:[(0,n.jsx)("option",{value:"15",children:"☕️ 15 minutes/day"}),(0,n.jsx)("option",{value:"30",children:"\uD83C\uDF05 30 minutes/day"}),(0,n.jsx)("option",{value:"45",children:"\uD83C\uDFAF 45 minutes/day"}),(0,n.jsx)("option",{value:"60",children:"⭐️ 1 hour/day"}),(0,n.jsx)("option",{value:"90",children:"\uD83C\uDF1F 1.5 hours/day"}),(0,n.jsx)("option",{value:"120",children:"\uD83C\uDFC6 2 hours/day"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block mb-2 font-heading font-semibold",children:"at"}),(0,n.jsxs)("select",{name:"readingSpeed",value:e.readingSpeed,onChange:b,className:"w-full p-3 rounded-lg bg-gray-700/50 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-500",children:[(0,n.jsx)("option",{value:"150",children:"\uD83D\uDC0C Slow (150 wpm)"}),(0,n.jsx)("option",{value:"200",children:"\uD83D\uDC63 Average (200 wpm)"}),(0,n.jsx)("option",{value:"250",children:"\uD83C\uDFC3 Fast (250 wpm)"}),(0,n.jsx)("option",{value:"300",children:"⚡ Very Fast (300 wpm)"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block mb-2 font-heading font-semibold",children:"speed for"}),(0,n.jsxs)("select",{name:"months",value:e.months,onChange:b,className:"w-full p-3 rounded-lg bg-gray-700/50 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-500",children:[(0,n.jsx)("option",{value:"1",children:"\uD83C\uDF31 1 month"}),(0,n.jsx)("option",{value:"2",children:"\uD83C\uDF3F 2 months"}),(0,n.jsx)("option",{value:"3",children:"\uD83C\uDF32 3 months"}),(0,n.jsx)("option",{value:"6",children:"\uD83C\uDF33 6 months"}),(0,n.jsx)("option",{value:"12",children:"\uD83C\uDF84 12 months"})]})]})]}),g&&(0,n.jsx)("div",{className:"mt-4 text-red-400 text-sm font-bold",children:g})]}),(0,n.jsxs)("div",{className:"w-full max-w-4xl mt-8 text-center",children:[(0,n.jsxs)("h2",{className:"text-xl sm:text-2xl font-heading mb-6",children:["I had found ",o.length," book(s) total"]}),(0,n.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:l.map((e,t)=>e?.imageLinks?.thumbnail?(0,n.jsx)("div",{onClick:()=>y(e),className:"aspect-[2/3] cursor-pointer hover:scale-105 transition-transform fadeInUp bg-gray-800/50 rounded-lg overflow-hidden shadow-lg border border-gray-700/50",children:(0,n.jsx)("img",{src:e.imageLinks.thumbnail,alt:e.title,className:"w-full h-full object-cover"})},t):null)})]})]})})}),v&&(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:(0,n.jsx)("div",{className:"w-full max-w-lg bg-gray-800 rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-700 max-h-[90vh] overflow-hidden",children:(0,n.jsxs)("div",{className:"flex flex-col h-full",children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("h3",{className:"text-2xl font-heading text-purple-300",children:v.title}),(0,n.jsxs)("p",{className:"text-sm text-gray-300 font-semibold mt-1",children:["By: ",v.authors.join(", ")]})]}),(0,n.jsxs)("div",{className:"flex-1 overflow-y-auto hide-scrollbar",children:[v.imageLinks?.thumbnail&&(0,n.jsx)("img",{src:v.imageLinks.thumbnail,alt:v.title,className:"w-full h-auto mb-4 rounded-md shadow"}),(0,n.jsx)("p",{className:"whitespace-pre-line text-gray-200 leading-relaxed",children:v.description||"No description available."})]}),(0,n.jsx)("button",{onClick:()=>y(null),className:"absolute top-4 right-4 text-gray-300 hover:text-red-400 transition-transform hover:scale-110",children:(0,n.jsx)(u,{size:24})})]})})})]})}},5852:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{t.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var i={},a=t.split(n),o=(r||{}).decode||e,s=0;s<a.length;s++){var l=a[s],u=l.indexOf("=");if(!(u<0)){var c=l.substr(0,u).trim(),d=l.substr(++u,l.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==i[c]&&(i[c]=function(e,t){try{return t(e)}catch(t){return e}}(d,o))}}return i},t.serialize=function(e,t,n){var a=n||{},o=a.encode||r;if("function"!=typeof o)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var s=o(t);if(s&&!i.test(s))throw TypeError("argument val is invalid");var l=e+"="+s;if(null!=a.maxAge){var u=a.maxAge-0;if(isNaN(u)||!isFinite(u))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(u)}if(a.domain){if(!i.test(a.domain))throw TypeError("option domain is invalid");l+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw TypeError("option path is invalid");l+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var e=decodeURIComponent,r=encodeURIComponent,n=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/})(),e.exports=t})()},8577:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{function e(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){for(var i="",a=r+1;a<e.length;){var o=e.charCodeAt(a);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o){i+=e[a++];continue}break}if(!i)throw TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:i}),r=a;continue}if("("===n){var s=1,l="",a=r+1;if("?"===e[a])throw TypeError('Pattern cannot start with "?" at '+a);for(;a<e.length;){if("\\"===e[a]){l+=e[a++]+e[a++];continue}if(")"===e[a]){if(0==--s){a++;break}}else if("("===e[a]&&(s++,"?"!==e[a+1]))throw TypeError("Capturing groups are not allowed at "+a);l+=e[a++]}if(s)throw TypeError("Unbalanced pattern at "+r);if(!l)throw TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:l}),r=a;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,a=void 0===n?"./":n,o="[^"+i(t.delimiter||"/#?")+"]+?",s=[],l=0,u=0,c="",d=function(e){if(u<r.length&&r[u].type===e)return r[u++].value},f=function(e){var t=d(e);if(void 0!==t)return t;var n=r[u];throw TypeError("Unexpected "+n.type+" at "+n.index+", expected "+e)},p=function(){for(var e,t="";e=d("CHAR")||d("ESCAPED_CHAR");)t+=e;return t};u<r.length;){var m=d("CHAR"),h=d("NAME"),g=d("PATTERN");if(h||g){var x=m||"";-1===a.indexOf(x)&&(c+=x,x=""),c&&(s.push(c),c=""),s.push({name:h||l++,prefix:x,suffix:"",pattern:g||o,modifier:d("MODIFIER")||""});continue}var v=m||d("ESCAPED_CHAR");if(v){c+=v;continue}if(c&&(s.push(c),c=""),d("OPEN")){var x=p(),y=d("NAME")||"",b=d("PATTERN")||"",E=p();f("CLOSE"),s.push({name:y||(b?l++:""),pattern:y&&!b?o:b,prefix:x,suffix:E,modifier:d("MODIFIER")||""});continue}f("END")}return s}function r(e,t){void 0===t&&(t={});var r=a(t),n=t.encode,i=void 0===n?function(e){return e}:n,o=t.validate,s=void 0===o||o,l=e.map(function(e){if("object"==typeof e)return RegExp("^(?:"+e.pattern+")$",r)});return function(t){for(var r="",n=0;n<e.length;n++){var a=e[n];if("string"==typeof a){r+=a;continue}var o=t?t[a.name]:void 0,u="?"===a.modifier||"*"===a.modifier,c="*"===a.modifier||"+"===a.modifier;if(Array.isArray(o)){if(!c)throw TypeError('Expected "'+a.name+'" to not repeat, but got an array');if(0===o.length){if(u)continue;throw TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<o.length;d++){var f=i(o[d],a);if(s&&!l[n].test(f))throw TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but got "'+f+'"');r+=a.prefix+f+a.suffix}continue}if("string"==typeof o||"number"==typeof o){var f=i(String(o),a);if(s&&!l[n].test(f))throw TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+f+'"');r+=a.prefix+f+a.suffix;continue}if(!u){var p=c?"an array":"a string";throw TypeError('Expected "'+a.name+'" to be '+p)}}return r}}function n(e,t,r){void 0===r&&(r={});var n=r.decode,i=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var a=n[0],o=n.index,s=Object.create(null),l=1;l<n.length;l++)!function(e){if(void 0!==n[e]){var r=t[e-1];"*"===r.modifier||"+"===r.modifier?s[r.name]=n[e].split(r.prefix+r.suffix).map(function(e){return i(e,r)}):s[r.name]=i(n[e],r)}}(l);return{path:a,index:o,params:s}}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function a(e){return e&&e.sensitive?"":"i"}function o(e,t,r){void 0===r&&(r={});for(var n=r.strict,o=void 0!==n&&n,s=r.start,l=r.end,u=r.encode,c=void 0===u?function(e){return e}:u,d="["+i(r.endsWith||"")+"]|$",f="["+i(r.delimiter||"/#?")+"]",p=void 0===s||s?"^":"",m=0;m<e.length;m++){var h=e[m];if("string"==typeof h)p+=i(c(h));else{var g=i(c(h.prefix)),x=i(c(h.suffix));if(h.pattern){if(t&&t.push(h),g||x){if("+"===h.modifier||"*"===h.modifier){var v="*"===h.modifier?"?":"";p+="(?:"+g+"((?:"+h.pattern+")(?:"+x+g+"(?:"+h.pattern+"))*)"+x+")"+v}else p+="(?:"+g+"("+h.pattern+")"+x+")"+h.modifier}else p+="("+h.pattern+")"+h.modifier}else p+="(?:"+g+x+")"+h.modifier}}if(void 0===l||l)o||(p+=f+"?"),p+=r.endsWith?"(?="+d+")":"$";else{var y=e[e.length-1],b="string"==typeof y?f.indexOf(y[y.length-1])>-1:void 0===y;o||(p+="(?:"+f+"(?="+d+"))?"),b||(p+="(?="+f+"|"+d+")")}return new RegExp(p,a(r))}function s(t,r,n){return t instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(t,r):Array.isArray(t)?RegExp("(?:"+t.map(function(e){return s(e,r,n).source}).join("|")+")",a(n)):o(e(t,n),r,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=e,t.compile=function(t,n){return r(e(t,n),n)},t.tokensToFunction=r,t.match=function(e,t){var r=[];return n(s(e,r,t),r,t)},t.regexpToFunction=n,t.tokensToRegexp=o,t.pathToRegexp=s})(),e.exports=t})()},8077:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fillMetadataSegment:function(){return f},normalizeMetadataPageToRoute:function(){return m},normalizeMetadataRoute:function(){return p}});let n=r(9177),i=function(e){return e&&e.__esModule?e:{default:e}}(r(8130)),a=r(8654),o=r(3960),s=r(3171),l=r(2045),u=r(8977),c=r(8758);function d(e){let t=i.default.dirname(e);if(e.endsWith("/sitemap"))return"";let r="";return t.split("/").some(e=>(0,c.isGroupSegment)(e)||(0,c.isParallelRouteSegment)(e))&&(r=(0,s.djb2Hash)(t).toString(36).slice(0,6)),r}function f(e,t,r){let n=(0,l.normalizeAppPath)(e),s=(0,o.getNamedRouteRegex)(n,!1),c=(0,a.interpolateDynamicPath)(n,t,s),{name:f,ext:p}=i.default.parse(r),m=d(i.default.posix.join(e,f)),h=m?`-${m}`:"";return(0,u.normalizePathSep)(i.default.join(c,`${f}${h}${p}`))}function p(e){if(!(0,n.isMetadataRoute)(e))return e;let t=e,r="";if("/robots"===e?t+=".txt":"/manifest"===e?t+=".webmanifest":r=d(e),!t.endsWith("/route")){let{dir:e,name:n,ext:a}=i.default.parse(t);t=i.default.posix.join(e,`${n}${r?`-${r}`:""}${a}`,"route")}return t}function m(e,t){let r=e.endsWith("/route"),n=r?e.slice(0,-6):e,i=n.endsWith("/sitemap")?".xml":"";return(t?`${n}/[__metadata_id__]`:`${n}${i}`)+(r?"/route":"")}},9177:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{STATIC_METADATA_IMAGES:function(){return i},getExtensionRegexString:function(){return o},isMetadataRoute:function(){return c},isMetadataRouteFile:function(){return s},isStaticMetadataRoute:function(){return u},isStaticMetadataRouteFile:function(){return l}});let n=r(8977),i={icon:{filename:"icon",extensions:["ico","jpg","jpeg","png","svg"]},apple:{filename:"apple-icon",extensions:["jpg","jpeg","png"]},favicon:{filename:"favicon",extensions:["ico"]},openGraph:{filename:"opengraph-image",extensions:["jpg","jpeg","png","gif"]},twitter:{filename:"twitter-image",extensions:["jpg","jpeg","png","gif"]}},a=["js","jsx","ts","tsx"],o=(e,t)=>t?`(?:\\.(${e.join("|")})|((\\[\\])?\\.(${t.join("|")})))`:`\\.(?:${e.join("|")})`;function s(e,t,r){let a=[RegExp(`^[\\\\/]robots${r?`${o(t.concat("txt"),null)}$`:""}`),RegExp(`^[\\\\/]manifest${r?`${o(t.concat("webmanifest","json"),null)}$`:""}`),RegExp("^[\\\\/]favicon\\.ico$"),RegExp(`[\\\\/]sitemap${r?`${o(["xml"],t)}$`:""}`),RegExp(`[\\\\/]${i.icon.filename}\\d?${r?`${o(i.icon.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.apple.filename}\\d?${r?`${o(i.apple.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.openGraph.filename}\\d?${r?`${o(i.openGraph.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.twitter.filename}\\d?${r?`${o(i.twitter.extensions,t)}$`:""}`)],s=(0,n.normalizePathSep)(e);return a.some(e=>e.test(s))}function l(e){return s(e,[],!0)}function u(e){return"/robots"===e||"/manifest"===e||l(e)}function c(e){let t=e.replace(/^\/?app\//,"").replace(/\/route$/,"");return"/"!==t[0]&&(t="/"+t),!t.endsWith("/page")&&s(t,a,!1)}},4713:(e,t,r)=>{"use strict";function n(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:n}=r(5852);return n(Array.isArray(t)?t.join("; "):t)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getCookieParser",{enumerable:!0,get:function(){return n}})},2828:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return i},extractInterceptionRouteInformation:function(){return o},isInterceptionRouteAppPath:function(){return a}});let n=r(2045),i=["(..)(..)","(.)","(..)","(...)"];function a(e){return void 0!==e.split("/").find(e=>i.find(t=>e.startsWith(t)))}function o(e){let t,r,a;for(let n of e.split("/"))if(r=i.find(e=>n.startsWith(e))){[t,a]=e.split(r,2);break}if(!t||!r||!a)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":a="/"===t?`/${a}`:t+"/"+a;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);a=t.split("/").slice(0,-1).concat(a).join("/");break;case"(...)":a="/"+a;break;case"(..)(..)":let o=t.split("/");if(o.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);a=o.slice(0,-2).concat(a).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:a}}},8654:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getUtils:function(){return h},interpolateDynamicPath:function(){return p},normalizeDynamicRouteParams:function(){return m},normalizeVercelUrl:function(){return f}});let n=r(9551),i=r(9160),a=r(5296),o=r(3960),s=r(7073),l=r(8469),u=r(5e3),c=r(2045),d=r(2216);function f(e,t,r,i,a){if(i&&t&&a){let t=(0,n.parse)(e.url,!0);for(let e of(delete t.search,Object.keys(t.query))){let n=e!==d.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(d.NEXT_QUERY_PARAM_PREFIX),i=e!==d.NEXT_INTERCEPTION_MARKER_PREFIX&&e.startsWith(d.NEXT_INTERCEPTION_MARKER_PREFIX);(n||i||(r||Object.keys(a.groups)).includes(e))&&delete t.query[e]}e.url=(0,n.format)(t)}}function p(e,t,r){if(!r)return e;for(let n of Object.keys(r.groups)){let i;let{optional:a,repeat:o}=r.groups[n],s=`[${o?"...":""}${n}]`;a&&(s=`[${s}]`);let l=t[n];i=Array.isArray(l)?l.map(e=>e&&encodeURIComponent(e)).join("/"):l?encodeURIComponent(l):"",e=e.replaceAll(s,i)}return e}function m(e,t,r,n){let i=!0;return r?{params:e=Object.keys(r.groups).reduce((a,o)=>{let s=e[o];"string"==typeof s&&(s=(0,c.normalizeRscURL)(s)),Array.isArray(s)&&(s=s.map(e=>("string"==typeof e&&(e=(0,c.normalizeRscURL)(e)),e)));let l=n[o],u=r.groups[o].optional;return((Array.isArray(l)?l.some(e=>Array.isArray(s)?s.some(t=>t.includes(e)):null==s?void 0:s.includes(e)):null==s?void 0:s.includes(l))||void 0===s&&!(u&&t))&&(i=!1),u&&(!s||Array.isArray(s)&&1===s.length&&("index"===s[0]||s[0]===`[[...${o}]]`))&&(s=void 0,delete e[o]),s&&"string"==typeof s&&r.groups[o].repeat&&(s=s.split("/")),s&&(a[o]=s),a},{}),hasValidParams:i}:{params:e,hasValidParams:!1}}function h({page:e,i18n:t,basePath:r,rewrites:n,pageIsDynamic:c,trailingSlash:h,caseSensitive:g}){let x,v,y;return c&&(x=(0,o.getNamedRouteRegex)(e,!1),y=(v=(0,s.getRouteMatcher)(x))(e)),{handleRewrites:function(o,s){let d={},f=s.pathname,p=n=>{let u=(0,a.getPathMatch)(n.source+(h?"(/)?":""),{removeUnnamedParams:!0,strict:!0,sensitive:!!g})(s.pathname);if((n.has||n.missing)&&u){let e=(0,l.matchHas)(o,s.query,n.has,n.missing);e?Object.assign(u,e):u=!1}if(u){let{parsedDestination:a,destQuery:o}=(0,l.prepareDestination)({appendParamsToQuery:!0,destination:n.destination,params:u,query:s.query});if(a.protocol)return!0;if(Object.assign(d,o,u),Object.assign(s.query,a.query),delete a.query,Object.assign(s,a),f=s.pathname,r&&(f=f.replace(RegExp(`^${r}`),"")||"/"),t){let e=(0,i.normalizeLocalePath)(f,t.locales);f=e.pathname,s.query.nextInternalLocale=e.detectedLocale||u.nextInternalLocale}if(f===e)return!0;if(c&&v){let e=v(f);if(e)return s.query={...s.query,...e},!0}}return!1};for(let e of n.beforeFiles||[])p(e);if(f!==e){let t=!1;for(let e of n.afterFiles||[])if(t=p(e))break;if(!t&&!(()=>{let t=(0,u.removeTrailingSlash)(f||"");return t===(0,u.removeTrailingSlash)(e)||(null==v?void 0:v(t))})()){for(let e of n.fallback||[])if(t=p(e))break}}return d},defaultRouteRegex:x,dynamicRouteMatcher:v,defaultRouteMatches:y,getParamsFromRouteMatches:function(e,r,n){return(0,s.getRouteMatcher)(function(){let{groups:e,routeKeys:i}=x;return{re:{exec:a=>{let o=Object.fromEntries(new URLSearchParams(a)),s=t&&n&&o["1"]===n;for(let e of Object.keys(o)){let t=o[e];e!==d.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(d.NEXT_QUERY_PARAM_PREFIX)&&(o[e.substring(d.NEXT_QUERY_PARAM_PREFIX.length)]=t,delete o[e])}let l=Object.keys(i||{}),u=e=>{if(t){let i=Array.isArray(e),a=i?e[0]:e;if("string"==typeof a&&t.locales.some(e=>e.toLowerCase()===a.toLowerCase()&&(n=e,r.locale=n,!0)))return i&&e.splice(0,1),!i||0===e.length}return!1};return l.every(e=>o[e])?l.reduce((t,r)=>{let n=null==i?void 0:i[r];return n&&!u(o[r])&&(t[e[n].pos]=o[r]),t},{}):Object.keys(o).reduce((e,t)=>{if(!u(o[t])){let r=t;return s&&(r=parseInt(t,10)-1+""),Object.assign(e,{[r]:o[t]})}return e},{})}},groups:e}}())(e.headers["x-now-route-matches"])},normalizeDynamicRouteParams:(e,t)=>m(e,t,x,y),normalizeVercelUrl:(e,t,r)=>f(e,t,r,c,x),interpolateDynamicPath:(e,t)=>p(e,t,x)}}},620:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return i}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function i(e){return r.test(e)?e.replace(n,"\\$&"):e}},3171:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r)&0xffffffff;return t>>>0}function n(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return n}})},164:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},8977:(e,t)=>{"use strict";function r(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return r}})},2045:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return a},normalizeRscURL:function(){return o}});let n=r(164),i=r(8758);function a(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,i.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function o(e){return e.replace(/\.rsc($|\?)/,"$1")}},1089:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return i}}),r(1706);let n=r(6678);function i(e,t,r){void 0===r&&(r=!0);let i=new URL("http://n"),a=t?new URL(t,i):e.startsWith(".")?new URL("http://n"):i,{pathname:o,searchParams:s,search:l,hash:u,href:c,origin:d}=new URL(e,a);if(d!==i.origin)throw Error("invariant: invalid relative URL, router received "+e);return{pathname:o,query:r?(0,n.searchParamsToUrlQuery)(s):void 0,search:l,hash:u,href:c.slice(d.length)}}},7600:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseUrl",{enumerable:!0,get:function(){return a}});let n=r(6678),i=r(1089);function a(e){if(e.startsWith("/"))return(0,i.parseRelativeUrl)(e);let t=new URL(e);return{hash:t.hash,hostname:t.hostname,href:t.href,pathname:t.pathname,port:t.port,protocol:t.protocol,query:(0,n.searchParamsToUrlQuery)(t.searchParams),search:t.search}}},5296:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPathMatch",{enumerable:!0,get:function(){return i}});let n=r(8577);function i(e,t){let r=[],i=(0,n.pathToRegexp)(e,r,{delimiter:"/",sensitive:"boolean"==typeof(null==t?void 0:t.sensitive)&&t.sensitive,strict:null==t?void 0:t.strict}),a=(0,n.regexpToFunction)((null==t?void 0:t.regexModifier)?new RegExp(t.regexModifier(i.source),i.flags):i,r);return(e,n)=>{if("string"!=typeof e)return!1;let i=a(e);if(!i)return!1;if(null==t?void 0:t.removeUnnamedParams)for(let e of r)"number"==typeof e.name&&delete i.params[e.name];return{...n,...i.params}}}},8469:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{compileNonPath:function(){return d},matchHas:function(){return c},prepareDestination:function(){return f}});let n=r(8577),i=r(620),a=r(7600),o=r(2828),s=r(484),l=r(4713);function u(e){return e.replace(/__ESC_COLON_/gi,":")}function c(e,t,r,n){void 0===r&&(r=[]),void 0===n&&(n=[]);let i={},a=r=>{let n;let a=r.key;switch(r.type){case"header":a=a.toLowerCase(),n=e.headers[a];break;case"cookie":n="cookies"in e?e.cookies[r.key]:(0,l.getCookieParser)(e.headers)()[r.key];break;case"query":n=t[a];break;case"host":{let{host:t}=(null==e?void 0:e.headers)||{};n=null==t?void 0:t.split(":",1)[0].toLowerCase()}}if(!r.value&&n)return i[function(e){let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);(n>64&&n<91||n>96&&n<123)&&(t+=e[r])}return t}(a)]=n,!0;if(n){let e=RegExp("^"+r.value+"$"),t=Array.isArray(n)?n.slice(-1)[0].match(e):n.match(e);if(t)return Array.isArray(t)&&(t.groups?Object.keys(t.groups).forEach(e=>{i[e]=t.groups[e]}):"host"===r.type&&t[0]&&(i.host=t[0])),!0}return!1};return!!r.every(e=>a(e))&&!n.some(e=>a(e))&&i}function d(e,t){if(!e.includes(":"))return e;for(let r of Object.keys(t))e.includes(":"+r)&&(e=e.replace(RegExp(":"+r+"\\*","g"),":"+r+"--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":"+r+"\\?","g"),":"+r+"--ESCAPED_PARAM_QUESTION").replace(RegExp(":"+r+"\\+","g"),":"+r+"--ESCAPED_PARAM_PLUS").replace(RegExp(":"+r+"(?!\\w)","g"),"--ESCAPED_PARAM_COLON"+r));return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),(0,n.compile)("/"+e,{validate:!1})(t).slice(1)}function f(e){let t;let r=Object.assign({},e.query);delete r.__nextLocale,delete r.__nextDefaultLocale,delete r.__nextDataReq,delete r.__nextInferredLocaleFromDefault,delete r[s.NEXT_RSC_UNION_QUERY];let l=e.destination;for(let t of Object.keys({...e.params,...r}))l=t?l.replace(RegExp(":"+(0,i.escapeStringRegexp)(t),"g"),"__ESC_COLON_"+t):l;let c=(0,a.parseUrl)(l),f=c.query,p=u(""+c.pathname+(c.hash||"")),m=u(c.hostname||""),h=[],g=[];(0,n.pathToRegexp)(p,h),(0,n.pathToRegexp)(m,g);let x=[];h.forEach(e=>x.push(e.name)),g.forEach(e=>x.push(e.name));let v=(0,n.compile)(p,{validate:!1}),y=(0,n.compile)(m,{validate:!1});for(let[t,r]of Object.entries(f))Array.isArray(r)?f[t]=r.map(t=>d(u(t),e.params)):"string"==typeof r&&(f[t]=d(u(r),e.params));let b=Object.keys(e.params).filter(e=>"nextInternalLocale"!==e);if(e.appendParamsToQuery&&!b.some(e=>x.includes(e)))for(let t of b)t in f||(f[t]=e.params[t]);if((0,o.isInterceptionRouteAppPath)(p))for(let t of p.split("/")){let r=o.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e));if(r){"(..)(..)"===r?(e.params["0"]="(..)",e.params["1"]="(..)"):e.params["0"]=r;break}}try{let[r,n]=(t=v(e.params)).split("#",2);c.hostname=y(e.params),c.pathname=r,c.hash=(n?"#":"")+(n||""),delete c.search}catch(e){if(e.message.match(/Expected .*? to not repeat, but got an array/))throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");throw e}return c.query={...r,...c.query},{newUrl:t,destQuery:f,parsedDestination:c}}},6678:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,i]=e;Array.isArray(i)?i.forEach(e=>t.append(r,n(e))):t.set(r,n(i))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return i}})},7073:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return i}});let n=r(1706);function i(e){let{re:t,groups:r}=e;return e=>{let i=t.exec(e);if(!i)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},o={};return Object.keys(r).forEach(e=>{let t=r[e],n=i[t.pos];void 0!==n&&(o[e]=~n.indexOf("/")?n.split("/").map(e=>a(e)):t.repeat?[a(n)]:a(n))}),o}}},3960:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return h},getNamedRouteRegex:function(){return m},getRouteRegex:function(){return d},parseParameter:function(){return l}});let n=r(2216),i=r(2828),a=r(620),o=r(5e3),s=/\[((?:\[.*\])|.+)\]/;function l(e){let t=e.match(s);return t?u(t[1]):u(e)}function u(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function c(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),r={},n=1;return{parameterizedRoute:t.map(e=>{let t=i.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),o=e.match(s);if(t&&o){let{key:e,optional:i,repeat:s}=u(o[1]);return r[e]={pos:n++,repeat:s,optional:i},"/"+(0,a.escapeStringRegexp)(t)+"([^/]+?)"}if(!o)return"/"+(0,a.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:i}=u(o[1]);return r[e]={pos:n++,repeat:t,optional:i},t?i?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function d(e){let{parameterizedRoute:t,groups:r}=c(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function f(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:i,keyPrefix:o}=e,{key:s,optional:l,repeat:c}=u(n),d=s.replace(/\W/g,"");o&&(d=""+o+d);let f=!1;(0===d.length||d.length>30)&&(f=!0),isNaN(parseInt(d.slice(0,1)))||(f=!0),f&&(d=r()),o?i[d]=""+o+s:i[d]=s;let p=t?(0,a.escapeStringRegexp)(t):"";return c?l?"(?:/"+p+"(?<"+d+">.+?))?":"/"+p+"(?<"+d+">.+?)":"/"+p+"(?<"+d+">[^/]+?)"}function p(e,t){let r;let s=(0,o.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:s.map(e=>{let r=i.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&o){let[r]=e.split(o[0]);return f({getSafeRouteKey:l,interceptionMarker:r,segment:o[1],routeKeys:u,keyPrefix:t?n.NEXT_INTERCEPTION_MARKER_PREFIX:void 0})}return o?f({getSafeRouteKey:l,segment:o[1],routeKeys:u,keyPrefix:t?n.NEXT_QUERY_PARAM_PREFIX:void 0}):"/"+(0,a.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function m(e,t){let r=p(e,t);return{...d(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function h(e,t){let{parameterizedRoute:r}=c(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:i}=p(e,!1);return{namedRegex:"^"+i+(n?"(?:(/.*)?)":"")+"$"}}},1706:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return x},NormalizeError:function(){return h},PageNotFoundError:function(){return g},SP:function(){return f},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return l},getLocationOrigin:function(){return o},getURL:function(){return s},isAbsoluteUrl:function(){return a},isResSent:function(){return u},loadGetInitialProps:function(){return d},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return y}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return r||(r=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>i.test(e);function o(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=o();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function d(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await d(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let f="undefined"!=typeof performance,p=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class x extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>l});var n=r(2740),i=r(2202),a=r.n(i),o=r(4988),s=r.n(o);r(1135);let l={title:"Create Next App",description:"Generated by create next app"};function u({children:e}){return(0,n.jsx)("html",{lang:"en",children:(0,n.jsx)("body",{className:`${a().variable} ${s().variable} antialiased`,children:e})})}},1377:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(2740),i=r(329);function a(){return(0,n.jsx)("main",{className:"min-h-screen p-24",children:(0,n.jsx)(i.default,{})})}},329:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/virajmurab/Documents/FALL2024/saas/reading-tracker/src/components/ReadingForm.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/virajmurab/Documents/FALL2024/saas/reading-tracker/src/components/ReadingForm.jsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(8077);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,619],()=>r(5490));module.exports=n})();