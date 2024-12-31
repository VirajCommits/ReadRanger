(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8860:(e,n,r)=>{Promise.resolve().then(r.bind(r,9906))},9906:(e,n,r)=>{"use strict";r.d(n,{default:()=>c});var l=r(5155),t=r(2115);let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.filter((e,n,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===n).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,t.forwardRef)((e,n)=>{let{color:r="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:d="",children:c,iconNode:u,...h}=e;return(0,t.createElement)("svg",{ref:n,...o,width:l,height:l,stroke:r,strokeWidth:i?24*Number(s)/Number(l):s,className:a("lucide",d),...h},[...u.map(e=>{let[n,r]=e;return(0,t.createElement)(n,r)}),...Array.isArray(c)?c:[c]])}),d=((e,n)=>{let r=(0,t.forwardRef)((r,l)=>{let{className:o,...d}=r;return(0,t.createElement)(i,{ref:l,iconNode:n,className:a("lucide-".concat(s(e)),o),...d})});return r.displayName="".concat(e),r})("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function c(){var e;let[n,r]=(0,t.useState)({minutesPerDay:60,readingSpeed:300,months:3}),[s,a]=(0,t.useState)(null),[o,i]=(0,t.useState)([]),[c,u]=(0,t.useState)([]),[h,m]=(0,t.useState)(!1),[g,x]=(0,t.useState)(!1),[f,p]=(0,t.useState)(null),[v,b]=(0,t.useState)(null);(0,t.useEffect)(()=>{let e=()=>{let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};return e(),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[]),(0,t.useEffect)(()=>{s&&s.close(),i([]),u([]),x(!1),p(null),m(!0);let e=new URLSearchParams({minutesPerDay:n.minutesPerDay,readingSpeed:n.readingSpeed,months:n.months}).toString(),r=new EventSource("https://read-ranger-2a90b350a47f.herokuapp.com/api/recommend-books-stream?".concat(e));return r.onopen=()=>console.log("SSE connection opened"),r.onerror=e=>{console.error("SSE error:",e),p("Something went wrong with SSE connection."),m(!1),r.close()},r.addEventListener("genre",e=>{try{let{books:n}=JSON.parse(e.data);i(e=>[...e,...n])}catch(e){console.error("Error parsing genre event:",e)}}),r.addEventListener("done",e=>{x(!0),m(!1),r.close()}),a(r),()=>r.close()},[n]),(0,t.useEffect)(()=>{let e=c.length,n=setInterval(()=>{e<o.length?(u(n=>[...n,o[e]]),e++):clearInterval(n)},300);return()=>clearInterval(n)},[o]);let w=e=>{let{name:n,value:l}=e.target;r(e=>({...e,[n]:Number(l)}))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("style",{children:"\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter&display=swap');\n\n/* Reset all margins and paddings */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Essential body/html resets for full viewport coverage */\nhtml, body {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  position: fixed;\n  font-family: 'Inter', sans-serif;\n}\n\n/* Fix iOS viewport height issues */\n:root {\n  --vh: 100%;\n}\n\n/* Root element styles */\n#root, main {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background-color: #141e33;\n}\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fadeInUp {\n  animation: fadeInUp 0.8s ease forwards;\n}\n\nh1, h2, h3, .font-heading {\n  font-family: 'Playfair Display', serif !important;\n}\n\n/* Hide scrollbar but keep functionality */\n.hide-scrollbar {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.hide-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n"}),(0,l.jsx)("div",{className:"fixed inset-0 bg-[#141e33] text-gray-100",children:(0,l.jsx)("div",{className:"h-full w-full overflow-y-auto hide-scrollbar",children:(0,l.jsxs)("div",{className:"min-h-full w-full flex flex-col items-center px-4 py-6",children:[(0,l.jsx)("h1",{className:"text-3xl sm:text-4xl font-heading font-bold text-center mb-6",children:"Reading Time Calculator"}),(0,l.jsxs)("div",{className:"w-full max-w-sm bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg",children:[(0,l.jsxs)("form",{className:"space-y-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block mb-2 font-heading font-semibold",children:"If I read"}),(0,l.jsxs)("select",{name:"minutesPerDay",value:n.minutesPerDay,onChange:w,className:"w-full p-3 rounded-lg bg-gray-700/50 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-500",children:[(0,l.jsx)("option",{value:"15",children:"☕️ 15 minutes/day"}),(0,l.jsx)("option",{value:"30",children:"\uD83C\uDF05 30 minutes/day"}),(0,l.jsx)("option",{value:"45",children:"\uD83C\uDFAF 45 minutes/day"}),(0,l.jsx)("option",{value:"60",children:"⭐️ 1 hour/day"}),(0,l.jsx)("option",{value:"90",children:"\uD83C\uDF1F 1.5 hours/day"}),(0,l.jsx)("option",{value:"120",children:"\uD83C\uDFC6 2 hours/day"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block mb-2 font-heading font-semibold",children:"at"}),(0,l.jsxs)("select",{name:"readingSpeed",value:n.readingSpeed,onChange:w,className:"w-full p-3 rounded-lg bg-gray-700/50 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-500",children:[(0,l.jsx)("option",{value:"150",children:"\uD83D\uDC0C Slow (150 wpm)"}),(0,l.jsx)("option",{value:"200",children:"\uD83D\uDC63 Average (200 wpm)"}),(0,l.jsx)("option",{value:"250",children:"\uD83C\uDFC3 Fast (250 wpm)"}),(0,l.jsx)("option",{value:"300",children:"⚡ Very Fast (300 wpm)"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block mb-2 font-heading font-semibold",children:"speed for"}),(0,l.jsxs)("select",{name:"months",value:n.months,onChange:w,className:"w-full p-3 rounded-lg bg-gray-700/50 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-500",children:[(0,l.jsx)("option",{value:"1",children:"\uD83C\uDF31 1 month"}),(0,l.jsx)("option",{value:"2",children:"\uD83C\uDF3F 2 months"}),(0,l.jsx)("option",{value:"3",children:"\uD83C\uDF32 3 months"}),(0,l.jsx)("option",{value:"6",children:"\uD83C\uDF33 6 months"}),(0,l.jsx)("option",{value:"12",children:"\uD83C\uDF84 12 months"})]})]})]}),f&&(0,l.jsx)("div",{className:"mt-4 text-red-400 text-sm font-bold",children:f})]}),(0,l.jsxs)("div",{className:"w-full max-w-4xl mt-8 text-center",children:[(0,l.jsxs)("h2",{className:"text-xl sm:text-2xl font-heading mb-6",children:["I have found ",o.length," book(s) total"]}),(0,l.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:c.map((e,n)=>{var r;return(null==e?void 0:null===(r=e.imageLinks)||void 0===r?void 0:r.thumbnail)?(0,l.jsx)("div",{onClick:()=>b(e),className:"aspect-[2/3] cursor-pointer hover:scale-105 transition-transform fadeInUp bg-gray-800/50 rounded-lg overflow-hidden shadow-lg border border-gray-700/50",children:(0,l.jsx)("img",{src:e.imageLinks.thumbnail,alt:e.title,className:"w-full h-full object-cover"})},n):null})})]})]})})}),v&&(0,l.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:(0,l.jsx)("div",{className:"w-full max-w-lg bg-gray-800 rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-700 max-h-[90vh] overflow-hidden",children:(0,l.jsxs)("div",{className:"flex flex-col h-full",children:[(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("h3",{className:"text-2xl font-heading text-purple-300",children:v.title}),(0,l.jsxs)("p",{className:"text-sm text-gray-300 font-semibold mt-1",children:["By: ",v.authors.join(", ")]})]}),(0,l.jsxs)("div",{className:"flex-1 overflow-y-auto hide-scrollbar",children:[(null===(e=v.imageLinks)||void 0===e?void 0:e.thumbnail)&&(0,l.jsx)("img",{src:v.imageLinks.thumbnail,alt:v.title,className:"w-full h-auto mb-4 rounded-md shadow"}),(0,l.jsx)("p",{className:"whitespace-pre-line text-gray-200 leading-relaxed",children:v.description||"No description available."})]}),(0,l.jsx)("button",{onClick:()=>b(null),className:"absolute top-4 right-4 text-gray-300 hover:text-red-400 transition-transform hover:scale-110",children:(0,l.jsx)(d,{size:24})})]})})})]})}}},e=>{var n=n=>e(e.s=n);e.O(0,[441,517,358],()=>n(8860)),_N_E=e.O()}]);