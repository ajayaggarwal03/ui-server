import{g as n}from"./navigation-6709cf39.js";const c={replaceState:!0,keepfocus:!0,noscroll:!0},h=async({parameter:e,value:t,url:s,goto:o=n,allowEmpty:a=!1})=>{const r=String(t);return t?s.searchParams.set(e,r):a?s.searchParams.set(e,""):s.searchParams.delete(e),s.href!==window.location.href&&o(i(s),c),t},i=e=>(e.hash="#",String(e));export{h as u};
