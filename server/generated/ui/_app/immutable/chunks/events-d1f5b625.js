import{d as c,r as A,w as f}from"./index-8c6be68a.js";import{p as d}from"./stores-5674b937.js";import{p as I}from"./paginated-2ccc4012.js";import{r as P,a as h}from"./route-for-api-a6afbdc8.js";import{t as W,g as G,h as R,j as _,k as q,l as S}from"./index-283d3fa1.js";import{b as F}from"./is-b4c8f655.js";import{a as w,d as p}from"./event-view-049f8eb1.js";import{i as m}from"./route-for-8f480fc8.js";import{w as T,d as C}from"./with-loading-f07bedaf.js";import{f as H}from"./workflow-service-4046df16.js";import{g as j}from"./pollers-service-cc36469c.js";import{c as J}from"./is-http-4617a131.js";import{a as E}from"./auth-user-07f174b2.js";import{l as k,p as O}from"./previous-events-a7f0213c.js";import{a7 as x}from"./index-0b369c75.js";const D=e=>!F(e)||e==="descending"?"events.descending":e==="ascending"?"events.ascending":"events.descending",L=async({namespace:e,workflowId:t,runId:s,sort:n,onStart:r,onUpdate:o,onComplete:a})=>{const u=D(n),i=await P(u,{namespace:e,workflowId:t,runId:s});return(await I(async l=>h(i,{token:l,request:fetch}),{onStart:r,onUpdate:o,onComplete:a})).history.events},N=async e=>{const{settings:t,namespace:s,accessToken:n}=e;return L(e).then(r=>W({response:r,namespace:s,settings:t,accessToken:n}))};async function Q({activity:e,namespace:t,settings:s,accessToken:n},{convertWithCodec:r=R,convertWithWebsocket:o=_,decodeAttributes:a=q,encoderEndpoint:u=J}={}){const i=G(s,u),y={...s,codec:{...s==null?void 0:s.codec,endpoint:i}},l=i?await r({attributes:e,namespace:t,settings:y,accessToken:n}):await o(e);return a(l)}const z=async({activity:e,namespace:t,settings:s,accessToken:n})=>await Q({activity:e,namespace:t,settings:s,accessToken:n}),B=async(e,t,s,n)=>{var a;const r=(a=e==null?void 0:e.pendingActivities)!=null?a:[],o=[];for(const u of r){const i=await z({activity:u,namespace:t,settings:s,accessToken:n});o.push(i)}return o},g=f(0),K=c([d],([e])=>e.params.namespace),M=c([d],([e])=>e.params.workflow),V=c([d],([e])=>e.params.run),X=c([d],([e])=>e.stuff.settings),Y=c([E],([e])=>e==null?void 0:e.accessToken),Z=c([K,M,V,X,Y,g],([e,t,s,n,r,o])=>({namespace:e,workflowId:m(t!=null?t:""),runId:s,settings:n,accessToken:r,refresh:o})),U={workflow:null,workers:null},$=e=>Z.subscribe(({namespace:t,workflowId:s,runId:n,settings:r,accessToken:o})=>{t&&s&&n?T(k,b,async()=>{const a=await H({namespace:t,workflowId:s,runId:n}),{taskQueue:u}=a,i=await j({queue:u,namespace:t});a.pendingActivities=await B(a,t,r,o),e({workflow:a,workers:i})}):(k.set(!0),b.set(!1))}),b=f(!0),Re=A(U,$),ee={events:[],eventGroups:[]},te=c([d],([e])=>e.params.namespace?m(e.params.namespace):""),se=c([d],([e])=>e.params.workflow?m(e.params.workflow):""),ne=c([d],([e])=>e.params.run?m(e.params.run):""),re=c([d],([e])=>e.stuff.settings),oe=c([E],([e])=>e==null?void 0:e.accessToken),ce=(e,t)=>{for(const r of["namespace","workflowId","runId"])if(!e[r])return!1;let s=!0;const n=x(t);for(const r of Object.keys(n))if(n[r]!==e[r]){s=!1;break}return s?!1:(t.set(e),!0)},ae=c([te,se,ne,w],([e,t,s,n])=>({namespace:e,workflowId:t,runId:s,sort:n})),ie=c([ae,re,oe,g],([e,t,s,n])=>({...e,settings:t,accessToken:s,refresh:g,$refresh:n})),de=e=>ie.subscribe(async t=>{const{settings:s,...n}=t;ce(n,O)&&T(pe,fe,async()=>{var o;const r=await N(t);(o=r==null?void 0:r.events)!=null&&o.length?e(r):setTimeout(()=>{e(r)},C)})}),v=A(ee,de),ue=f(null),_e=c([v,p,ue],([e,t,s])=>{if(s)return s;const{events:n}=e;return t?n.filter(r=>r.category===t):n}),qe=c([v,p],([e,t])=>{const{eventGroups:s}=e;return t?s.filter(n=>n.category===t):s}),Se=c([v,w,p],([e,t,s])=>{const{events:n}=e,r=t==="descending"?n.slice().reverse():n,o=S(r);return s?o.filter(a=>a.category===s):o});c([v,w,p],([e,t,s])=>{const{events:n}=e,r=t==="descending"?n.slice().reverse():n;return s?r.filter(o=>o.category===s):r});const fe=f(!0),pe=f(!0);export{_e as a,v as b,Se as c,qe as e,L as f,pe as l,g as r,ue as t,fe as u,Re as w};