import{b as o}from"./paths.f5c08f69.js";const $=!0;function c(e){return e&&e.replace(/%/g,"%25").replace(/,/g,"%2C").replace(/\//g,"%2F").replace(/\\/g,"%5C").replace(/\?/g,"%3F").replace(/:/g,"%3A").replace(/@/g,"%40").replace(/&/g,"%26").replace(/=/g,"%3D").replace(/\+/g,"%2B").replace(/\$/g,"%24").replace(/#/g,"%23")}function m(e){return e&&e.replace(/%2C/g,",").replace(/%2F/g,"/").replace(/%5C/g,"\\").replace(/%3F/g,"?").replace(/%3A/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3D/g,"=").replace(/%2B/g,"+").replace(/%24/g,"$").replace(/%23/g,"#").replace(/%25/g,"%")}const h=(e,r)=>{const t=r instanceof URLSearchParams;return r&&!t&&(r=new URLSearchParams(r)),r?`${e}?${r}`:e},d=()=>`${o}/namespaces`,u=({namespace:e})=>`${o}/namespaces/${e}`,w=()=>`${o}/select-namespace`,F=e=>`${u(e)}/workflows`,S=e=>`${u(e)}/archival`,s=({workflow:e,run:r,...t})=>{const a=c(e);return`${F(t)}/${a}/${r}`},l=e=>`${u(e)}/schedules`,P=({namespace:e})=>`${l({namespace:e})}/create`,U=({scheduleId:e,namespace:r})=>{const t=c(e);return`${l({namespace:r})}/${t}`},k=({scheduleId:e,namespace:r})=>{const t=c(e);return`${l({namespace:r})}/${t}/edit`},v=({queryParams:e,...r})=>{const t=`${s(r)}/history`;return h(`${t}`,e)},R=e=>`${s(e)}/workers`,y=e=>{const r=c(e.queue);return`${u({namespace:e.namespace})}/task-queues/${r}`},L=e=>`${s(e)}/stack-trace`,b=e=>`${s(e)}/query`,B=e=>`${s(e)}/pending-activities`,W=e=>{const{settings:r,searchParams:t,originUrl:a}=e,n=new URL(`${o}/auth/sso`,r.baseUrl);let i=r.auth.options??[];return i=[...i,"returnUrl"],i.forEach(g=>{if(!t)return;const p=t.get(g);p&&n.searchParams.set(g,p)}),!n.searchParams.get("returnUrl")&&a&&n.searchParams.set("returnUrl",a),n.toString()},q=(e="",r=$)=>{if(r){const t=new URL(`${o}/login`,window.location.origin);return t.searchParams.set("returnUrl",window.location.href),e&&t.searchParams.set("error",e),t.toString()}return`${o}/login`},A=(e,r)=>e&&r?`${o}/import/events/${e}/workflow/run/history/${r}`:`${o}/import/events`,C=({namespace:e})=>`${o}/namespaces/${e}/batch-operations`,E=({namespace:e,jobId:r})=>`${o}/namespaces/${e}/batch-operations/${r}`;export{$ as B,S as a,d as b,l as c,C as d,A as e,q as f,v as g,R as h,B as i,L as j,b as k,m as l,w as m,y as n,u as o,E as p,U as q,F as r,P as s,h as t,k as u,W as v};
