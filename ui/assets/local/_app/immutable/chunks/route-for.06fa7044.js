import{B as f}from"./prod-browser.becde89a.js";import{b as o}from"./paths.889fb1f1.js";import{e as c}from"./encode-uri.dfce78e4.js";const $=(r,t)=>{const e=t instanceof URLSearchParams;return t&&!e&&(t=new URLSearchParams(t)),t?`${r}?${t}`:r},g=()=>`${o}/namespaces`,u=({namespace:r})=>`${o}/namespaces/${r}`,P=()=>`${o}/select-namespace`,F=r=>`${u(r)}/workflows`,k=({namespace:r,query:t,search:e,page:s})=>$(F({namespace:r}),{query:t,search:e,...s&&{page:s}}),v=r=>`${u(r)}/archival`,n=({workflow:r,run:t,...e})=>{const s=c(r);return`${F(e)}/${s}/${t}`},h=r=>`${u(r)}/schedules`,S=({namespace:r})=>`${h({namespace:r})}/create`,U=({scheduleId:r,namespace:t})=>{const e=c(r);return`${h({namespace:t})}/${e}`},y=({scheduleId:r,namespace:t})=>{const e=c(r);return`${h({namespace:t})}/${e}/edit`},R=({queryParams:r,...t})=>{const e=`${n(t)}/history`;return $(`${e}`,r)},W=({eventId:r,...t})=>{const e=`${n(t)}/history/events/${r}`;return $(`${e}`)},E=r=>`${n(r)}/workers`,L=r=>{const t=c(r.queue);return`${u({namespace:r.namespace})}/task-queues/${t}`},b=r=>`${n(r)}/call-stack`,q=r=>`${n(r)}/query`,H=r=>`${n(r)}/pending-activities`,B=r=>{const{settings:t,searchParams:e,originUrl:s}=r,a=new URL(`${o}/auth/sso`,t.baseUrl);let i=t.auth.options??[];return i=[...i,"returnUrl"],i.forEach(l=>{if(!e)return;const m=e.get(l);m&&a.searchParams.set(l,m)}),!a.searchParams.get("returnUrl")&&s&&a.searchParams.set("returnUrl",s),a.toString()},A=(r="",t=f)=>{if(t){const e=new URL(`${o}/login`,window.location.origin);return e.searchParams.set("returnUrl",window.location.href),r&&e.searchParams.set("error",r),e.toString()}return`${o}/login`},N=(r,t)=>r&&t?`${o}/import/events/${r}/workflow/run/history/${t}`:`${o}/import/events`,O=({namespace:r})=>`${o}/namespaces/${r}/batch-operations`,Q=({namespace:r,jobId:t})=>`${o}/namespaces/${r}/batch-operations/${t}`;export{F as a,v as b,g as c,h as d,O as e,N as f,R as g,E as h,H as i,b as j,q as k,P as l,L as m,W as n,u as o,Q as p,U as q,A as r,S as s,$ as t,k as u,y as v,B as w};
