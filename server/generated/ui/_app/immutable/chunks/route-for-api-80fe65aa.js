import{d as h,e as l,t as O}from"./route-for-62d7d3b1.js";import{g as $}from"./user-b3ac4393.js";import{E as z}from"./index-8e660855.js";import{w as W}from"./index-71be9f1c.js";import{n as L}from"./notifications-faca15d4.js";import{i as N}from"./is-network-error-5f9e2367.js";import{i as S}from"./persist-store-4b4c2e6c.js";import{p as _}from"./get-public-path-6c4a8950.js";const G=W(null),H=(c,n=L,s=G,i=l)=>{if(v(c)&&i){window.location.assign(h(c==null?void 0:c.message));return}if(U(c)&&i){window.location.assign(h(c==null?void 0:c.message));return}if(N(c))throw n.add("error",`${c.statusCode} ${c.statusText}`),s.set(c),c;typeof c=="string"&&n.add("error",c),c instanceof Error&&n.add("error",c.message)},nn=(c,n=l)=>{var i;const s=`${c==null?void 0:c.status} ${(i=c==null?void 0:c.body)==null?void 0:i.message}`;if(v(c)&&n){window.location.assign(h(s));return}if(U(c)&&n){window.location.assign(h(s));return}},v=c=>(c==null?void 0:c.statusCode)===401||(c==null?void 0:c.status)===401,U=c=>(c==null?void 0:c.statusCode)===403||(c==null?void 0:c.status)===403,cn=c=>(c==null?void 0:c.message)!==void 0&&typeof(c==null?void 0:c.message)=="string",K=async(c,n={},s=10)=>{var T;const{params:i={},request:d=fetch,token:o,shouldRetry:k=!1,notifyOnError:b=!0,handleError:q=H,onRetry:x=z,onError:g,retryInterval:A=5e3,isBrowser:I=l}=n;let{options:f}=n;const R=o?{next_page_token:o}:{},C=new URLSearchParams({...i,...R}),F=O(c,C);try{f=X(f,I),f=await B(f,I);const u=await d(F,f),w=await u.json(),{status:t,statusText:P}=u;if(!u.ok)if(g&&S(g))g({status:t,statusText:P,body:w});else throw{statusCode:u.status,statusText:u.statusText,response:u,message:(T=w==null?void 0:w.message)!=null?T:u.statusText};return w}catch(u){if(b){if(q(u),k&&s>0)return new Promise(w=>{const t=s-1;x(t),setTimeout(()=>{w(K(c,n,t))},A)})}else throw u}},X=(c,n=l)=>{const s={credentials:"include",...c};return s.headers=J(c==null?void 0:c.headers,n),s},B=async(c,n=l)=>($().accessToken?(c.headers=await y(c==null?void 0:c.headers,async()=>$().accessToken,n),c.headers=D(c==null?void 0:c.headers,$().idToken,n)):globalThis!=null&&globalThis.AccessToken&&(c.headers=await y(c==null?void 0:c.headers,globalThis.AccessToken,n)),c),y=async(c,n,s=l)=>{if(c||(c={}),!s)return c;try{const i=await n();i&&(c.Authorization=`Bearer ${i}`)}catch(i){console.error(i)}return c},D=(c={},n,s=l)=>(s&&n&&(c["Authorization-Extras"]=n),c),J=(c,n=l)=>{if(c||(c={}),!n)return c;const s="_csrf=",i="X-CSRF-TOKEN";try{let o=document.cookie.split(";").find(k=>k.includes(s));o&&!c[i]&&(o=o.trim().slice(s.length),c[i]=o)}catch(d){console.error(d)}return c};function E(c=l){const n="",s=!n.startsWith("http");let i="";return s?i=c?window.location.origin+n:"":i=n,i.endsWith("/")&&(i=i.slice(0,-1)),i}const M=async c=>{var s;let n="";if((globalThis==null?void 0:globalThis.GetNamespaces)&&c){const i=await globalThis.GetNamespaces(),d=i==null?void 0:i.find(o=>o.namespace===c);n=(s=d==null?void 0:d.webUri)!=null?s:E()}else n=E();return n.endsWith("/")&&(n=n.slice(0,-1)),n=`${n}${_}`,n},Q=async(c,n)=>(c.startsWith("/")&&(c=c.slice(1)),`${await M(n)}/api/v1/${c}`),V=c=>Object.keys(c!=null?c:{}).reduce((n,s)=>(n[s]=encodeURIComponent(encodeURIComponent(c[s])),n),{namespace:"",workflowId:"",scheduleId:"",runId:"",queue:""});function sn(c,n,s=!0){s&&(n=V(n));const i={cluster:"/cluster","events.ascending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events`,"events.descending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events/reverse`,namespaces:"/namespaces",query:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/query`,"schedule.delete":`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}`,schedule:`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}`,schedules:`/namespaces/${n==null?void 0:n.namespace}/schedules`,"search-attributes":"/search-attributes",settings:"/settings","task-queue":`/namespaces/${n==null?void 0:n.namespace}/task-queues/${n==null?void 0:n.queue}`,user:"/me","workflow.terminate":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/terminate`,workflow:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}`,"workflows.archived":`/namespaces/${n==null?void 0:n.namespace}/workflows/archived`,workflows:`/namespaces/${n==null?void 0:n.namespace}/workflows`};return Q(i[c],n==null?void 0:n.namespace)}export{K as a,nn as b,E as g,H as h,cn as i,G as n,sn as r};
