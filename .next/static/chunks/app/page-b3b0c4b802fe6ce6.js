(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8860:(e,n,a)=>{Promise.resolve().then(a.bind(a,7181))},7181:(e,n,a)=>{"use strict";a.d(n,{default:()=>r});var s=a(5155),l=a(2115),t=a(1110);function r(){var e;let[n,a]=(0,l.useState)({minutesPerDay:60,readingSpeed:300,months:3}),[r,o]=(0,l.useState)(null),[i,d]=(0,l.useState)([]),[c,u]=(0,l.useState)([]),[m,h]=(0,l.useState)(!1),[g,x]=(0,l.useState)(!1),[p,f]=(0,l.useState)(null),[v,y]=(0,l.useState)(null);(0,l.useEffect)(()=>{r&&r.close(),d([]),u([]),x(!1),f(null),h(!0);let e=new URLSearchParams({minutesPerDay:n.minutesPerDay,readingSpeed:n.readingSpeed,months:n.months}).toString(),a="https://read-ranger-2a90b350a47f.herokuapp.com/api/recommend-books-stream?".concat(e);console.log(a);let s=new EventSource(a);return s.onopen=()=>{console.log("SSE connection opened")},s.onerror=e=>{console.error("SSE error:",e),f("Something went wrong with SSE connection."),h(!1),s.close()},s.addEventListener("genre",e=>{try{let{books:n}=JSON.parse(e.data);d(e=>[...e,...n])}catch(e){console.error("Error parsing genre event:",e)}}),s.addEventListener("done",e=>{console.log("DONE EVENT =>",e.data),x(!0),h(!1),s.close()}),o(s),()=>{s.close()}},[n]),(0,l.useEffect)(()=>{let e=c.length,n=setInterval(()=>{e<i.length?(u(n=>[...n,i[e]]),e++):clearInterval(n)},300);return()=>clearInterval(n)},[i]);let b=e=>{let{name:n,value:s}=e.target;a(e=>({...e,[n]:Number(s)}))},j=e=>y(e),w=()=>y(null);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{children:"\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter&display=swap');\n\n/* Reset margins, etc. */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background: #0e1111; /* Full-page dark background */\n  font-family: 'Inter', sans-serif;\n}\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fadeInUp {\n  animation: fadeInUp 0.8s ease forwards;\n}\n\n/* Headings use \"Playfair Display\" for a distinctive style */\nh1, h2, h3, .font-heading {\n  font-family: 'Playfair Display', serif !important;\n}\n"}),(0,s.jsxs)("div",{className:" min-h-screen w-full bg-gray-900 text-gray-100 flex flex-col items-center p-8 ",children:[(0,s.jsx)("h1",{className:"mt-2 mb-6 text-4xl font-heading font-bold drop-shadow-lg",children:"Reading Time Calculator"}),(0,s.jsxs)("div",{className:" bg-gray-800 bg-opacity-90 rounded-xl p-6 w-full max-w-xl shadow-2xl border border-gray-700 ",children:[(0,s.jsxs)("form",{className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-heading font-semibold text-gray-100",children:"If I read"}),(0,s.jsxs)("select",{name:"minutesPerDay",value:n.minutesPerDay,onChange:b,className:" w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 ",children:[(0,s.jsx)("option",{value:"15",children:"☕️ 15 minutes/day"}),(0,s.jsx)("option",{value:"30",children:"\uD83C\uDF05 30 minutes/day"}),(0,s.jsx)("option",{value:"45",children:"\uD83C\uDFAF 45 minutes/day"}),(0,s.jsx)("option",{value:"60",children:"⭐️ 1 hour/day"}),(0,s.jsx)("option",{value:"90",children:"\uD83C\uDF1F 1.5 hours/day"}),(0,s.jsx)("option",{value:"120",children:"\uD83C\uDFC6 2 hours/day"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-heading font-semibold text-gray-100",children:"at"}),(0,s.jsxs)("select",{name:"readingSpeed",value:n.readingSpeed,onChange:b,className:" w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 ",children:[(0,s.jsx)("option",{value:"150",children:"\uD83D\uDC0C Slow (150 wpm)"}),(0,s.jsx)("option",{value:"200",children:"\uD83D\uDC63 Average (200 wpm)"}),(0,s.jsx)("option",{value:"250",children:"\uD83C\uDFC3 Fast (250 wpm)"}),(0,s.jsx)("option",{value:"300",children:"⚡ Very Fast (300 wpm)"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-heading font-semibold text-gray-100",children:"speed for"}),(0,s.jsxs)("select",{name:"months",value:n.months,onChange:b,className:" w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 ",children:[(0,s.jsx)("option",{value:"1",children:"\uD83C\uDF31 1 month"}),(0,s.jsx)("option",{value:"2",children:"\uD83C\uDF3F 2 months"}),(0,s.jsx)("option",{value:"3",children:"\uD83C\uDF32 3 months"}),(0,s.jsx)("option",{value:"6",children:"\uD83C\uDF33 6 months"}),(0,s.jsx)("option",{value:"12",children:"\uD83C\uDF84 12 months"})]})]})]}),p&&(0,s.jsx)("div",{className:"mt-4 text-red-400 text-sm font-bold",children:p})]}),(0,s.jsxs)("div",{className:"mt-8 w-full max-w-5xl text-center",children:[m&&(0,s.jsx)("p",{className:"text-purple-400 mb-2 italic font-semibold"}),g&&(0,s.jsx)("p",{className:"text-green-400 mb-2 font-semibold"}),(0,s.jsxs)("h2",{className:"text-2xl font-heading text-gray-100 mb-6 mt-2",children:["I have found ",i.length," book(s) total"]}),(0,s.jsx)("div",{className:"\n              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6\n              items-start justify-items-center\n              transition-opacity duration-300\n              ".concat(m?"opacity-90":"opacity-100","\n            "),children:c.map((e,n)=>{var a;return(null==e?void 0:null===(a=e.imageLinks)||void 0===a?void 0:a.thumbnail)?(0,s.jsx)("div",{onClick:()=>j(e),className:" w-32 h-48 cursor-pointer hover:scale-105 transition-transform hover:z-10 relative fadeInUp bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center ",children:(0,s.jsx)("img",{src:e.imageLinks.thumbnail,alt:e.title,className:"object-cover w-full h-full rounded-lg"})},n):null})})]})]}),(0,s.jsxs)(t.lG,{open:!!v,onClose:w,className:"relative z-50",children:[(0,s.jsx)("div",{className:"fixed inset-0 bg-black/40","aria-hidden":"true"}),(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center p-4",children:(0,s.jsx)(t.lG.Panel,{className:" mx-auto max-w-lg w-full bg-gray-800 text-gray-100  rounded-xl p-6  shadow-2xl relative border border-gray-700 overflow-hidden ",children:v&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.lG.Title,{className:"text-2xl font-heading mb-4 text-purple-300",children:v.title}),(0,s.jsxs)("p",{className:"mb-2 text-sm text-gray-300 font-semibold",children:["By: ",v.authors.join(", ")]}),(0,s.jsxs)("div",{className:"max-h-[60vh] overflow-y-auto pr-1",children:[(null===(e=v.imageLinks)||void 0===e?void 0:e.thumbnail)?(0,s.jsx)("img",{src:v.imageLinks.thumbnail,alt:v.title,className:"w-full h-auto mb-4 rounded-md shadow"}):(0,s.jsx)("div",{className:"w-full h-44 bg-gray-700 flex items-center justify-center mb-4",children:"No Image"}),(0,s.jsx)("p",{className:"whitespace-pre-line text-gray-200 leading-relaxed",children:v.description||"No description available."})]}),(0,s.jsx)("button",{onClick:w,className:" absolute top-4 right-4 text-gray-300 hover:text-red-400 transition-transform  transform hover:scale-110 ",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]})})})]})]})}}},e=>{var n=n=>e(e.s=n);e.O(0,[110,441,517,358],()=>n(8860)),_N_E=e.O()}]);