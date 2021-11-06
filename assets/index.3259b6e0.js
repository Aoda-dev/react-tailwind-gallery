import{j as m,r as d,R as h,a as p}from"./vendor.946264bb.js";const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}};f();const t=m.exports.jsx,l=m.exports.jsxs,x=({image:c,likes:n,views:i,downloads:a,user:e,tags:s})=>{const o=s.split(",");return l("div",{className:"max-w-sm rounded overflow-hidden shadow-lg cursor-pointer",children:[t("img",{src:c,alt:"",className:"w-full bg-red"}),l("div",{className:"px-6 py-4",children:[l("div",{className:"font-bold text-purple-500 text-xl mb-2",children:["Photo by ",e]}),l("ul",{children:[l("li",{children:[t("strong",{children:"Views: "}),i]}),l("li",{children:[t("strong",{children:"Downloads: "}),a]}),l("li",{children:[t("strong",{children:"Likes: "}),n]})]})]}),t("div",{className:"px-6 py-4",children:o.map((u,r)=>t("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2",children:u},r))})]})},b=({searchText:c,safeSearch:n,setIsSafeSearch:i})=>{const[a,e]=d.exports.useState("");return t("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto",children:t("form",{onSubmit:o=>{o.preventDefault(),c(a)},className:"w-full max-w-sm",children:l("div",{className:"flex items-center border-b border-b-2 border-blue-500 py-2",children:[t("input",{onChange:o=>e(o.target.value),className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Search Image Term..."}),t("button",{className:"flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit",children:"Search"}),t("button",{onClick:o=>i(u=>!u),className:`flex-shrink-0 bg-${n?"blue":"red"}-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded`,children:n?"Safe search on":"Safe search off"})]})})})};function g(){const[c,n]=d.exports.useState([]),[i,a]=d.exports.useState(!0),[e,s]=d.exports.useState(!0),[o,u]=d.exports.useState("");return d.exports.useEffect(()=>{a(!0),fetch(`https://pixabay.com/api/?key=24201526-6161a03ee1dd0a63469991b4f&q=${o}&image_type=photo&pretty=true&safesearch=${e}`).then(r=>r.json()).then(r=>{n(r.hits),a(!1)}).catch(r=>console.log(r))},[o,e]),l("div",{className:"container mx-auto",children:[t(b,{safeSearch:e,setIsSafeSearch:s,setLoading:a,searchText:r=>u(r)}),!i&&!c.length?t("h1",{className:"text-6xl text-center mx-auto mt-32",children:"Not found :("}):null,t("div",{className:"grid grid-cols-3 gap-4",children:i?t("h1",{className:"text-6xl text-center mx-auto mt-32",children:"Loading..."}):c.map(r=>t(x,{image:r.webformatURL,likes:r.likes,views:r.views,downloads:r.downloads,user:r.user,tags:r.tags},r.id))})]})}h.render(t(p.StrictMode,{children:t(g,{})}),document.getElementById("root"));