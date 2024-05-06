import{f as mt}from"../chunks/namespaces-service.nq47Sj_R.js";import{e as pt,g as ze}from"../chunks/workflows.R--foFiR.js";import{s as fe,c as ne,e as N,a as W,t as H,b as D,d as O,g as p,h as L,f as B,j as T,k as w,l as E,m as V,F as _t,a0 as ot,n as oe,G as $t,p as ht,u as dt,q as gt,r as wt,i as ae,v as K,z as Qe,A as Ue,B as Ge,L as nt,V as st,x as j,y as it}from"../chunks/scheduler.78ThUSKQ.js";import{S as ue,i as ce,c as S,a as I,m as P,t as b,b as k,d as F,f as ft,g as J,e as Y}from"../chunks/index.G2Max4V_.js";import{e as ie,u as bt,o as vt}from"../chunks/each.ycdfgOIg.js";import{p as Ie}from"../chunks/stores._uu45Ir7.js";import{P as kt}from"../chunks/page-title.-CDePwim.js";import{W as yt}from"../chunks/workflow-status.Ft4kmorv.js";import{t as Tt,F as Me,d as Et}from"../chunks/index.S4e5w-6v.js";import{L as Ne}from"../chunks/link.jjjiKyIa.js";import{T as Ct}from"../chunks/table-row.oKVJlRCM.js";import{t as v}from"../chunks/translate.HrioCK44.js";import{t as Ae,r as St,f as ee}from"../chunks/time-format.J7tIRzVM.js";import{j as It,k as Pt,l as Ft,m as Ve,n as Ke}from"../chunks/format-time.9b2gxOCN.js";import{m as At}from"../chunks/has.rY0Oe_rJ.js";import{b as qt}from"../chunks/route-for.8ujaopV0.js";import{u as ut}from"../chunks/update-query-parameters.qygi5ddX.js";import{T as Nt,a as Dt}from"../chunks/table-header-row.bKv2kWRn.js";import{C as De}from"../chunks/code-block.P3SIZiAx.js";import{E as Wt}from"../chunks/empty-state.09fvQf7X.js";import{P as Lt}from"../chunks/pagination.S8qVq7ib.js";import{g as Ht}from"../chunks/entry.B2JvGEmv.js";import{g as Bt}from"../chunks/_commonjsHelpers.4gQjN7DL.js";import{B as Ot}from"../chunks/button.DCAyoCX_.js";import{I as ct}from"../chunks/input.ybBzrMlN.js";import{F as Xe}from"../chunks/pagination.lEKEmyQ8.js";import{S as Rt,a as ve}from"../chunks/simple-select.tbgGfD5N.js";const jt=async function({params:o,url:e}){var f,m,C,y,A,U,R,X;const{searchParams:r}=e;r.has("time-range")||r.set("time-range","1 day");const t=r.get("workflow-id"),l=r.get("workflow-type"),i=r.get("time-range"),n=r.get("status"),a=await mt(o.namespace),s=(C=(m=(f=a.config)==null?void 0:f.historyArchivalUri)==null?void 0:m.toLowerCase())==null?void 0:C.startsWith("s3://"),c=(U=(A=(y=a.config)==null?void 0:y.historyArchivalUri)==null?void 0:A.toLowerCase())==null?void 0:U.startsWith("gs://"),u=s||c,_=u?{}:{workflowId:t,workflowType:l,closeTime:i,executionStatus:n},$=((R=a==null?void 0:a.config)==null?void 0:R.historyArchivalState)==="Enabled",d=((X=a==null?void 0:a.config)==null?void 0:X.visibilityArchivalState)==="Enabled",h=$&&d?await pt(o.namespace,_,fetch):null;return{workflows:h?h.workflows:[],namespace:a,archivalEnabled:$,visibilityArchivalEnabled:d,archivalQueryingNotSupported:u}},hr=Object.freeze(Object.defineProperty({__proto__:null,load:jt},Symbol.toStringTag,{value:"Module"})),Pe=o=>e=>e.toLowerCase()===o.toLowerCase(),Se=(o,e)=>o[e+2],zt=o=>{if(o){for(const e of Ft)if(o[e])return{[e]:o[e]}}},Qt=Pe("WorkflowType"),Ut=Pe("WorkflowId"),Gt=Pe("StartTime"),Mt=Pe("ExecutionStatus"),Vt=o=>{const e=Tt(o),r={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,l)=>{if(Ut(t)&&(r.workflowId=Se(e,l)),Qt(t)&&(r.workflowType=Se(e,l)),Mt(t)){const i=Se(e,l);At(i)&&(r.executionStatus=i)}if(Gt(t)){const i=Se(e,l);try{const n=It(i),a=zt(n);r.timeRange=Pt(a)}catch(n){console.error("Error parsing StartTime from query",n)}}}),r};function Kt(o){let e=o[0].id+"",r;return{c(){r=H(e)},l(t){r=B(t,e)},m(t,l){w(t,r,l)},p(t,l){l&1&&e!==(e=t[0].id+"")&&oe(r,e)},d(t){t&&p(r)}}}function Xt(o){var Le,He,Be;let e,r,t,l,i,n,a,s,c,u=ee(o[0].startTime,o[4],{relative:o[5]})+"",_,$,d,h,f=v("workflows.workflow-name")+"",m,C,y,A,U=o[0].name+"",R,X,te,z,me,x,pe=ee(o[0].endTime,o[4],{relative:o[5]})+"",ke,ye,le,_e,$e=ee(o[0].startTime,o[4],{relative:o[5]})+"",Te,Ee,re,he,de=ee(o[0].endTime,o[4],{relative:o[5]})+"",Ce,G,Fe,We;return r=new yt({props:{status:o[0].status,delay:Ve(o[0].startTime)}}),i=new Ne({props:{href:o[2],$$slots:{default:[Kt]},$$scope:{ctx:o}}}),a=new Me({props:{copyIconTitle:v("common.copy-icon-title"),copySuccessIconTitle:v("common.copy-success-icon-title"),filterIconTitle:v("common.filter-workflows"),show:o[1],content:o[0].id,filterable:!1}}),z=new Me({props:{copyIconTitle:v("common.copy-icon-title"),copySuccessIconTitle:v("common.copy-success-icon-title"),filterIconTitle:v("common.filter-workflows"),show:o[1],content:o[0].name,onFilter:o[13],filtered:(Be=(He=(Le=o[3].url)==null?void 0:Le.searchParams)==null?void 0:He.get("query"))==null?void 0:Be.includes(o[0].name)}}),{c(){e=N("td"),S(r.$$.fragment),t=W(),l=N("td"),S(i.$$.fragment),n=W(),S(a.$$.fragment),s=W(),c=N("p"),_=H(u),$=W(),d=N("td"),h=N("h3"),m=H(f),C=H(":"),y=W(),A=N("button"),R=H(U),te=W(),S(z.$$.fragment),me=W(),x=N("p"),ke=H(pe),ye=W(),le=N("td"),_e=N("p"),Te=H($e),Ee=W(),re=N("td"),he=N("p"),Ce=H(de),this.h()},l(g){e=D(g,"TD",{});var q=O(e);I(r.$$.fragment,q),q.forEach(p),t=L(g),l=D(g,"TD",{class:!0});var M=O(l);I(i.$$.fragment,M),n=L(M),I(a.$$.fragment,M),s=L(M),c=D(M,"P",{class:!0});var se=O(c);_=B(se,u),se.forEach(p),M.forEach(p),$=L(g),d=D(g,"TD",{class:!0});var Q=O(d);h=D(Q,"H3",{class:!0});var Z=O(h);m=B(Z,f),C=B(Z,":"),Z.forEach(p),y=L(Q),A=D(Q,"BUTTON",{class:!0,"aria-label":!0});var ge=O(A);R=B(ge,U),ge.forEach(p),te=L(Q),I(z.$$.fragment,Q),me=L(Q),x=D(Q,"P",{class:!0});var we=O(x);ke=B(we,pe),we.forEach(p),Q.forEach(p),ye=L(g),le=D(g,"TD",{class:!0});var be=O(le);_e=D(be,"P",{});var Oe=O(_e);Te=B(Oe,$e),Oe.forEach(p),be.forEach(p),Ee=L(g),re=D(g,"TD",{class:!0});var Re=O(re);he=D(Re,"P",{});var je=O(he);Ce=B(je,de),je.forEach(p),Re.forEach(p),this.h()},h(){T(c,"class","inline-time-cell svelte-1haww6m"),T(l,"class","relative break-words pr-4"),T(h,"class","md:hidden"),T(A,"class","table-link"),T(A,"aria-label",X=v("workflows.filter-by",{workflowName:o[0].name})),T(x,"class","inline-time-cell svelte-1haww6m"),T(d,"class","relative truncate"),T(le,"class","time-cell svelte-1haww6m"),T(re,"class","time-cell svelte-1haww6m")},m(g,q){w(g,e,q),P(r,e,null),w(g,t,q),w(g,l,q),P(i,l,null),E(l,n),P(a,l,null),E(l,s),E(l,c),E(c,_),w(g,$,q),w(g,d,q),E(d,h),E(h,m),E(h,C),E(d,y),E(d,A),E(A,R),E(d,te),P(z,d,null),E(d,me),E(d,x),E(x,ke),w(g,ye,q),w(g,le,q),E(le,_e),E(_e,Te),w(g,Ee,q),w(g,re,q),E(re,he),E(he,Ce),G=!0,Fe||(We=[V(l,"mouseover",o[8]),V(l,"focus",o[9]),V(l,"mouseleave",o[10]),V(l,"blur",o[11]),V(A,"click",_t(ot(o[12]))),V(d,"mouseover",o[14]),V(d,"focus",o[15]),V(d,"mouseleave",o[16]),V(d,"blur",o[17])],Fe=!0)},p(g,q){var ge,we,be;const M={};q&1&&(M.status=g[0].status),q&1&&(M.delay=Ve(g[0].startTime)),r.$set(M);const se={};q&4&&(se.href=g[2]),q&262145&&(se.$$scope={dirty:q,ctx:g}),i.$set(se);const Q={};q&2&&(Q.show=g[1]),q&1&&(Q.content=g[0].id),a.$set(Q),(!G||q&49)&&u!==(u=ee(g[0].startTime,g[4],{relative:g[5]})+"")&&oe(_,u),(!G||q&1)&&U!==(U=g[0].name+"")&&oe(R,U),(!G||q&1&&X!==(X=v("workflows.filter-by",{workflowName:g[0].name})))&&T(A,"aria-label",X);const Z={};q&2&&(Z.show=g[1]),q&1&&(Z.content=g[0].name),q&1&&(Z.onFilter=g[13]),q&9&&(Z.filtered=(be=(we=(ge=g[3].url)==null?void 0:ge.searchParams)==null?void 0:we.get("query"))==null?void 0:be.includes(g[0].name)),z.$set(Z),(!G||q&49)&&pe!==(pe=ee(g[0].endTime,g[4],{relative:g[5]})+"")&&oe(ke,pe),(!G||q&49)&&$e!==($e=ee(g[0].startTime,g[4],{relative:g[5]})+"")&&oe(Te,$e),(!G||q&49)&&de!==(de=ee(g[0].endTime,g[4],{relative:g[5]})+"")&&oe(Ce,de)},i(g){G||(b(r.$$.fragment,g),b(i.$$.fragment,g),b(a.$$.fragment,g),b(z.$$.fragment,g),G=!0)},o(g){k(r.$$.fragment,g),k(i.$$.fragment,g),k(a.$$.fragment,g),k(z.$$.fragment,g),G=!1},d(g){g&&(p(e),p(t),p(l),p($),p(d),p(ye),p(le),p(Ee),p(re)),F(r),F(i),F(a),F(z),Fe=!1,$t(We)}}}function Zt(o){let e,r;return e=new Ct({props:{class:"hover:surface-subtle",$$slots:{default:[Xt]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,[l]){const i={};l&262207&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function Jt(o,e,r){let t,l,i,n;ne(o,Ie,R=>r(3,l=R)),ne(o,Ae,R=>r(4,i=R)),ne(o,St,R=>r(5,n=R));let{namespace:a}=e,{workflow:s}=e,c=!1;const u=R=>{const X=ze({timeRange:"All"}),te=l.url.searchParams.get("query"),z=Vt(te??X),me=(z==null?void 0:z.workflowType)===R?"":R,x=ze({...z,workflowType:me});ut({url:l.url,parameter:"query",value:x,allowEmpty:!0})},_=()=>r(1,c=!0),$=()=>r(1,c=!0),d=()=>r(1,c=!1),h=()=>r(1,c=!1),f=()=>u(s.name),m=()=>u(s.name),C=()=>r(1,c=!0),y=()=>r(1,c=!0),A=()=>r(1,c=!1),U=()=>r(1,c=!1);return o.$$set=R=>{"namespace"in R&&r(7,a=R.namespace),"workflow"in R&&r(0,s=R.workflow)},o.$$.update=()=>{o.$$.dirty&129&&r(2,t=qt({namespace:a,workflow:s.id,run:s.runId}))},[s,c,t,l,i,n,u,a,_,$,d,h,f,m,C,y,A,U]}class Yt extends ue{constructor(e){super(),ce(this,e,Jt,Zt,fe,{namespace:7,workflow:0})}}function xt(o){let e;const r=o[1].default,t=ht(r,o,o[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&4)&&dt(t,r,l,l[2],e?wt(r,l[2],i,null):gt(l[2]),null)},i(l){e||(b(t,l),e=!0)},o(l){k(t,l),e=!1},d(l){t&&t.d(l)}}}function el(o){let e,r="Workflows";return{c(){e=N("caption"),e.textContent=r,this.h()},l(t){e=D(t,"CAPTION",{class:!0,slot:!0,"data-svelte-h":!0}),ae(e)!=="svelte-qflexs"&&(e.textContent=r),this.h()},h(){T(e,"class","sr-only"),T(e,"slot","caption")},m(t,l){w(t,e,l)},p:K,d(t){t&&p(e)}}}function tl(o){let e,r="Status",t,l,i="Workflow ID",n,a,s="Type",c,u,_="Start",$,d,h="End",f,m,C="Summary";return{c(){e=N("th"),e.textContent=r,t=W(),l=N("th"),l.textContent=i,n=W(),a=N("th"),a.textContent=s,c=W(),u=N("th"),u.textContent=_,$=W(),d=N("th"),d.textContent=h,f=W(),m=N("th"),m.textContent=C,this.h()},l(y){e=D(y,"TH",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-16bnp2i"&&(e.textContent=r),t=L(y),l=D(y,"TH",{class:!0,"data-svelte-h":!0}),ae(l)!=="svelte-115zk6j"&&(l.textContent=i),n=L(y),a=D(y,"TH",{class:!0,"data-svelte-h":!0}),ae(a)!=="svelte-lhnwb5"&&(a.textContent=s),c=L(y),u=D(y,"TH",{class:!0,"data-svelte-h":!0}),ae(u)!=="svelte-1xn3gxk"&&(u.textContent=_),$=L(y),d=D(y,"TH",{class:!0,"data-svelte-h":!0}),ae(d)!=="svelte-10ns7z5"&&(d.textContent=h),f=L(y),m=D(y,"TH",{class:!0,colspan:!0,"data-svelte-h":!0}),ae(m)!=="svelte-39g6qc"&&(m.textContent=C),this.h()},h(){T(e,"class","w-32 max-md:hidden"),T(l,"class","max-md:hidden md:w-auto"),T(a,"class","w-60 max-md:hidden"),T(u,"class","w-60 max-xl:hidden"),T(d,"class","w-60 max-xl:hidden"),T(m,"class","md:hidden"),T(m,"colspan","3")},m(y,A){w(y,e,A),w(y,t,A),w(y,l,A),w(y,n,A),w(y,a,A),w(y,c,A),w(y,u,A),w(y,$,A),w(y,d,A),w(y,f,A),w(y,m,A)},p:K,d(y){y&&(p(e),p(t),p(l),p(n),p(a),p(c),p(u),p($),p(d),p(f),p(m))}}}function ll(o){let e,r;return e=new Dt({props:{slot:"headers",$$slots:{default:[tl]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&4&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function rl(o){let e,r;return e=new Nt({props:{class:"w-full md:table-fixed",updating:o[0],"data-testid":"workflows-table",$$slots:{headers:[ll],caption:[el],default:[xt]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,[l]){const i={};l&1&&(i.updating=t[0]),l&4&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function al(o,e,r){let{$$slots:t={},$$scope:l}=e,{updating:i=!1}=e;return o.$$set=n=>{"updating"in n&&r(0,i=n.updating),"$$scope"in n&&r(2,l=n.$$scope)},[i,t,l]}class ol extends ue{constructor(e){super(),ce(this,e,al,rl,fe,{updating:0})}}var qe={exports:{}};(function(o,e){var r=/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,t=/-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;o.exports=e=function(i){return i.replace(r,function(n){return"-"+n.toLowerCase()})},e.reverse=function(l){return l.replace(t,function(i){return i.slice(1).toUpperCase()})}})(qe,qe.exports);var nl=qe.exports;const sl=Bt(nl);function il(o){let e;return{c(){e=H(o[1])},l(r){e=B(r,o[1])},m(r,t){w(r,e,t)},p(r,t){t&2&&oe(e,r[1])},d(r){r&&p(e)}}}function fl(o){let e,r;return e=new Ot({props:{slot:"after-input",type:"submit","data-testid":`${o[6]}-button`,$$slots:{default:[il]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&1026&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function ul(o){let e,r,t,l,i;return r=new ct({props:{class:"w-full",label:o[1],id:o[5],labelHidden:!0,icon:o[4]?"search":null,type:"search",name:o[3],value:o[2],placeholder:o[0],autocomplete:"off","data-testid":`${o[6]}-input`,$$slots:{"after-input":[fl]},$$scope:{ctx:o}}}),r.$on("input",o[8]),{c(){e=N("form"),S(r.$$.fragment),this.h()},l(n){e=D(n,"FORM",{role:!0,class:!0,"data-testid":!0});var a=O(e);I(r.$$.fragment,a),a.forEach(p),this.h()},h(){T(e,"role","search"),T(e,"class","flex items-center"),T(e,"data-testid",`${o[6]}-form`)},m(n,a){w(n,e,a),P(r,e,null),t=!0,l||(i=V(e,"submit",ot(o[7])),l=!0)},p(n,[a]){const s={};a&2&&(s.label=n[1]),a&32&&(s.id=n[5]),a&16&&(s.icon=n[4]?"search":null),a&8&&(s.name=n[3]),a&4&&(s.value=n[2]),a&1&&(s.placeholder=n[0]),a&1026&&(s.$$scope={dirty:a,ctx:n}),r.$set(s)},i(n){t||(b(r.$$.fragment,n),t=!0)},o(n){k(r.$$.fragment,n),t=!1},d(n){n&&p(e),F(r),l=!1,i()}}}function cl(o,e,r){let{placeholder:t=`${v("common.search")}…`}=e,{label:l=v("common.search")}=e,{value:i=""}=e,{name:n="query"}=e,{icon:a=!1}=e,{id:s=sl(`${l}-${n}`)}=e,c=e["data-testid"]||s;function u($){Ge.call(this,o,$)}function _($){Ge.call(this,o,$)}return o.$$set=$=>{r(9,e=Qe(Qe({},e),Ue($))),"placeholder"in $&&r(0,t=$.placeholder),"label"in $&&r(1,l=$.label),"value"in $&&r(2,i=$.value),"name"in $&&r(3,n=$.name),"icon"in $&&r(4,a=$.icon),"id"in $&&r(5,s=$.id)},e=Ue(e),[t,l,i,n,a,s,c,u,_]}class ml extends ue{constructor(e){super(),ce(this,e,cl,ul,fe,{placeholder:0,label:1,value:2,name:3,icon:4,id:5})}}function pl(o){let e,r,t;function l(n){o[6](n)}let i={type:"search",icon:"search",label:o[0],labelHidden:!0,placeholder:o[0],id:o[2]};return o[1]!==void 0&&(i.value=o[1]),e=new ct({props:i}),nt.push(()=>ft(e,"value",l)),{c(){S(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,a){P(e,n,a),t=!0},p(n,[a]){const s={};a&1&&(s.label=n[0]),a&1&&(s.placeholder=n[0]),!r&&a&2&&(r=!0,s.value=n[1],st(()=>r=!1)),e.$set(s)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function _l(o,e,r){let t;ne(o,Ie,_=>r(5,t=_));let{parameter:l}=e,{name:i}=e,{value:n}=e,a=l&&t.url.searchParams.get(l)||n;const s=`${l||i}-filter`,c=Et(ut,300);function u(_){a=_,r(1,a)}return o.$$set=_=>{"parameter"in _&&r(3,l=_.parameter),"name"in _&&r(0,i=_.name),"value"in _&&r(4,n=_.value)},o.$$.update=()=>{o.$$.dirty&42&&c({parameter:l,value:a,url:t.url})},[i,a,s,l,n,t,u]}class Ze extends ue{constructor(e){super(),ce(this,e,_l,pl,fe,{parameter:3,name:0,value:4})}}function Je(o,e,r){const t=o.slice();return t[6]=e[r].value,t[7]=e[r].label,t}function Ye(o,e,r){const t=o.slice();return t[6]=e[r],t}function $l(o){let e,r;return e=new Ne({props:{href:`${o[0].url.pathname}?query=`,$$slots:{default:[dl]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&1&&(i.href=`${t[0].url.pathname}?query=`),l&4096&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function hl(o){let e,r;return e=new Ne({props:{href:o[0].url.pathname,$$slots:{default:[gl]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&1&&(i.href=t[0].url.pathname),l&4096&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function dl(o){let e=v("workflows.advanced-search")+"",r;return{c(){r=H(e)},l(t){r=B(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&p(r)}}}function gl(o){let e=v("workflows.basic-search")+"",r;return{c(){r=H(e)},l(t){r=B(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&p(r)}}}function wl(o){let e,r,t,l,i,n,a,s,c,u,_,$;r=new Ze({props:{parameter:"workflow-id",name:v("common.workflow-id"),value:Fl}}),l=new Ze({props:{parameter:"workflow-type",name:v("common.workflow-type"),value:Al}}),n=new Xe({props:{label:v("workflows.time-range"),parameter:"time-range",value:"24 hours",$$slots:{default:[kl]},$$scope:{ctx:o}}}),s=new Xe({props:{label:v("common.status"),parameter:"status",value:null,$$slots:{default:[Tl]},$$scope:{ctx:o}}});function d(f){o[5](f)}let h={id:"filter-by-relative-time",$$slots:{default:[Il]},$$scope:{ctx:o}};return o[2]!==void 0&&(h.value=o[2]),u=new Rt({props:h}),nt.push(()=>ft(u,"value",d)),{c(){e=N("div"),S(r.$$.fragment),t=W(),S(l.$$.fragment),i=W(),S(n.$$.fragment),a=W(),S(s.$$.fragment),c=W(),S(u.$$.fragment),this.h()},l(f){e=D(f,"DIV",{class:!0,role:!0});var m=O(e);I(r.$$.fragment,m),t=L(m),I(l.$$.fragment,m),i=L(m),I(n.$$.fragment,m),a=L(m),I(s.$$.fragment,m),c=L(m),I(u.$$.fragment,m),m.forEach(p),this.h()},h(){T(e,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5"),T(e,"role","search")},m(f,m){w(f,e,m),P(r,e,null),E(e,t),P(l,e,null),E(e,i),P(n,e,null),E(e,a),P(s,e,null),E(e,c),P(u,e,null),$=!0},p(f,m){const C={};m&4096&&(C.$$scope={dirty:m,ctx:f}),n.$set(C);const y={};m&4096&&(y.$$scope={dirty:m,ctx:f}),s.$set(y);const A={};m&4096&&(A.$$scope={dirty:m,ctx:f}),!_&&m&4&&(_=!0,A.value=f[2],st(()=>_=!1)),u.$set(A)},i(f){$||(b(r.$$.fragment,f),b(l.$$.fragment,f),b(n.$$.fragment,f),b(s.$$.fragment,f),b(u.$$.fragment,f),$=!0)},o(f){k(r.$$.fragment,f),k(l.$$.fragment,f),k(n.$$.fragment,f),k(s.$$.fragment,f),k(u.$$.fragment,f),$=!1},d(f){f&&p(e),F(r),F(l),F(n),F(s),F(u)}}}function bl(o){let e,r;return e=new ml({props:{icon:!0,placeholder:v("common.search"),value:o[0].url.searchParams.get("query")}}),e.$on("submit",o[4]),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&1&&(i.value=t[0].url.searchParams.get("query")),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function vl(o){let e=o[6]+"",r;return{c(){r=H(e)},l(t){r=B(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&p(r)}}}function xe(o){let e,r;return e=new ve({props:{value:o[6],$$slots:{default:[vl]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&4096&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function kl(o){let e,r,t=ie(Ke),l=[];for(let n=0;n<t.length;n+=1)l[n]=xe(Ye(o,t,n));const i=n=>k(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=j()},l(n){for(let a=0;a<l.length;a+=1)l[a].l(n);e=j()},m(n,a){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(n,a);w(n,e,a),r=!0},p(n,a){if(a&0){t=ie(Ke);let s;for(s=0;s<t.length;s+=1){const c=Ye(n,t,s);l[s]?(l[s].p(c,a),b(l[s],1)):(l[s]=xe(c),l[s].c(),b(l[s],1),l[s].m(e.parentNode,e))}for(J(),s=t.length;s<l.length;s+=1)i(s);Y()}},i(n){if(!r){for(let a=0;a<t.length;a+=1)b(l[a]);r=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)k(l[a]);r=!1},d(n){n&&p(e),it(l,n)}}}function yl(o){let e=o[7]+"",r;return{c(){r=H(e)},l(t){r=B(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&p(r)}}}function et(o,e){let r,t,l;return t=new ve({props:{value:e[6],$$slots:{default:[yl]},$$scope:{ctx:e}}}),{key:o,first:null,c(){r=j(),S(t.$$.fragment),this.h()},l(i){r=j(),I(t.$$.fragment,i),this.h()},h(){this.first=r},m(i,n){w(i,r,n),P(t,i,n),l=!0},p(i,n){e=i;const a={};n&4096&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(i){l||(b(t.$$.fragment,i),l=!0)},o(i){k(t.$$.fragment,i),l=!1},d(i){i&&p(r),F(t,i)}}}function Tl(o){let e=[],r=new Map,t,l,i=ie(Object.values(o[3]));const n=a=>a[7];for(let a=0;a<i.length;a+=1){let s=Je(o,i,a),c=n(s);r.set(c,e[a]=et(c,s))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=j()},l(a){for(let s=0;s<e.length;s+=1)e[s].l(a);t=j()},m(a,s){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(a,s);w(a,t,s),l=!0},p(a,s){s&8&&(i=ie(Object.values(a[3])),J(),e=bt(e,s,n,1,a,i,r,t.parentNode,vt,et,t,Je),Y())},i(a){if(!l){for(let s=0;s<i.length;s+=1)b(e[s]);l=!0}},o(a){for(let s=0;s<e.length;s+=1)k(e[s]);l=!1},d(a){a&&p(t);for(let s=0;s<e.length;s+=1)e[s].d(a)}}}function El(o){let e=v("common.relative")+"",r;return{c(){r=H(e)},l(t){r=B(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&p(r)}}}function Cl(o){let e=v("common.utc")+"",r;return{c(){r=H(e)},l(t){r=B(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&p(r)}}}function Sl(o){let e=v("common.local")+"",r;return{c(){r=H(e)},l(t){r=B(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&p(r)}}}function Il(o){let e,r,t,l,i,n;return e=new ve({props:{value:"relative",$$slots:{default:[El]},$$scope:{ctx:o}}}),t=new ve({props:{value:"UTC",$$slots:{default:[Cl]},$$scope:{ctx:o}}}),i=new ve({props:{value:"local",$$slots:{default:[Sl]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment),r=W(),S(t.$$.fragment),l=W(),S(i.$$.fragment)},l(a){I(e.$$.fragment,a),r=L(a),I(t.$$.fragment,a),l=L(a),I(i.$$.fragment,a)},m(a,s){P(e,a,s),w(a,r,s),P(t,a,s),w(a,l,s),P(i,a,s),n=!0},p(a,s){const c={};s&4096&&(c.$$scope={dirty:s,ctx:a}),e.$set(c);const u={};s&4096&&(u.$$scope={dirty:s,ctx:a}),t.$set(u);const _={};s&4096&&(_.$$scope={dirty:s,ctx:a}),i.$set(_)},i(a){n||(b(e.$$.fragment,a),b(t.$$.fragment,a),b(i.$$.fragment,a),n=!0)},o(a){k(e.$$.fragment,a),k(t.$$.fragment,a),k(i.$$.fragment,a),n=!1},d(a){a&&(p(r),p(l)),F(e,a),F(t,a),F(i,a)}}}function Pl(o){let e,r,t,l,i,n,a,s;const c=[hl,$l],u=[];function _(f,m){return f[1]?0:1}t=_(o),l=u[t]=c[t](o);const $=[bl,wl],d=[];function h(f,m){return f[1]?0:1}return n=h(o),a=d[n]=$[n](o),{c(){e=N("section"),r=N("p"),l.c(),i=W(),a.c(),this.h()},l(f){e=D(f,"SECTION",{class:!0});var m=O(e);r=D(m,"P",{class:!0});var C=O(r);l.l(C),C.forEach(p),i=L(m),a.l(m),m.forEach(p),this.h()},h(){T(r,"class","text-right text-xs"),T(e,"class","flex flex-col gap-2")},m(f,m){w(f,e,m),E(e,r),u[t].m(r,null),E(e,i),d[n].m(e,null),s=!0},p(f,[m]){let C=t;t=_(f),t===C?u[t].p(f,m):(J(),k(u[C],1,1,()=>{u[C]=null}),Y(),l=u[t],l?l.p(f,m):(l=u[t]=c[t](f),l.c()),b(l,1),l.m(r,null));let y=n;n=h(f),n===y?d[n].p(f,m):(J(),k(d[y],1,1,()=>{d[y]=null}),Y(),a=d[n],a?a.p(f,m):(a=d[n]=$[n](f),a.c()),b(a,1),a.m(e,null))},i(f){s||(b(l),b(a),s=!0)},o(f){k(l),k(a),s=!1},d(f){f&&p(e),u[t].d(),d[n].d()}}}let Fl="",Al="";function ql(o,e,r){let t,l,i;ne(o,Ie,c=>r(0,l=c)),ne(o,Ae,c=>r(2,i=c));const n={All:{value:null,label:v("workflows.all-statuses")},"Timed Out":{value:"TimedOut",label:v("workflows.timed-out")},Completed:{value:"Completed",label:v("workflows.completed")},Failed:{value:"Failed",label:v("workflows.failed")},"Continued as New":{value:"ContinuedAsNew",label:v("workflows.continued-as-new")},Canceled:{value:"Canceled",label:v("workflows.canceled")},Terminated:{value:"Terminated",label:v("workflows.terminated")}},a=c=>{const _=new FormData(c.target).get("query");l.url.searchParams.set("query",String(_)),Ht(l.url.toString())};function s(c){i=c,Ae.set(i)}return o.$$.update=()=>{o.$$.dirty&1&&r(1,t=l.url.searchParams.has("query"))},[l,t,i,n,a,s]}class Nl extends ue{constructor(e){super(),ce(this,e,ql,Pl,fe,{})}}function tt(o,e,r){const t=o.slice();return t[8]=e[r],t}function Dl(o){let e,r=v("workflows.archival-disabled-title")+"",t,l,i,n=v("workflows.archival-disabled-details")+"",a,s,c,u,_,$,d;u=new De({props:{content:`temporal operator namespace update --history-archival-state enabled ${o[4]}`,language:"text",inline:!0,copyIconTitle:v("common.copy-icon-title"),copySuccessIconTitle:v("common.copy-success-icon-title")}});let h=!o[1]&&lt(o);return{c(){e=N("h1"),t=H(r),l=W(),i=N("p"),a=H(n),s=H(":"),c=W(),S(u.$$.fragment),_=W(),h&&h.c(),$=j(),this.h()},l(f){e=D(f,"H1",{class:!0,"data-testid":!0});var m=O(e);t=B(m,r),m.forEach(p),l=L(f),i=D(f,"P",{});var C=O(i);a=B(C,n),s=B(C,":"),C.forEach(p),c=L(f),I(u.$$.fragment,f),_=L(f),h&&h.l(f),$=j(),this.h()},h(){T(e,"class","text-2xl"),T(e,"data-testid","archived-disabled-title")},m(f,m){w(f,e,m),E(e,t),w(f,l,m),w(f,i,m),E(i,a),E(i,s),w(f,c,m),P(u,f,m),w(f,_,m),h&&h.m(f,m),w(f,$,m),d=!0},p(f,m){const C={};m&16&&(C.content=`temporal operator namespace update --history-archival-state enabled ${f[4]}`),u.$set(C),f[1]?h&&(J(),k(h,1,1,()=>{h=null}),Y()):h?(h.p(f,m),m&2&&b(h,1)):(h=lt(f),h.c(),b(h,1),h.m($.parentNode,$))},i(f){d||(b(u.$$.fragment,f),b(h),d=!0)},o(f){k(u.$$.fragment,f),k(h),d=!1},d(f){f&&(p(e),p(l),p(i),p(c),p(_),p($)),F(u,f),h&&h.d(f)}}}function Wl(o){let e,r=v("workflows.visibility-disabled-archival")+"",t,l,i,n=v("workflows.archival-link-preface")+"",a,s,c=v("workflows.archival-link")+"",u,_,$,d,h;return d=new De({props:{content:`temporal operator namespace update --visibility-archival-state enabled ${o[4]}`,language:"text",inline:!0,copyIconTitle:v("common.copy-icon-title"),copySuccessIconTitle:v("common.copy-success-icon-title")}}),{c(){e=N("h1"),t=H(r),l=W(),i=N("p"),a=H(n),s=N("a"),u=H(c),_=H(":"),$=W(),S(d.$$.fragment),this.h()},l(f){e=D(f,"H1",{class:!0,"data-testid":!0});var m=O(e);t=B(m,r),m.forEach(p),l=L(f),i=D(f,"P",{});var C=O(i);a=B(C,n),s=D(C,"A",{class:!0,href:!0,target:!0,rel:!0});var y=O(s);u=B(y,c),y.forEach(p),_=B(C,":"),C.forEach(p),$=L(f),I(d.$$.fragment,f),this.h()},h(){T(e,"class","text-2xl"),T(e,"data-testid","visibility-disabled-title"),T(s,"class","text-blue-700 underline"),T(s,"href","https://docs.temporal.io/clusters#archival"),T(s,"target","_blank"),T(s,"rel","noreferrer")},m(f,m){w(f,e,m),E(e,t),w(f,l,m),w(f,i,m),E(i,a),E(i,s),E(s,u),E(i,_),w(f,$,m),P(d,f,m),h=!0},p(f,m){const C={};m&16&&(C.content=`temporal operator namespace update --visibility-archival-state enabled ${f[4]}`),d.$set(C)},i(f){h||(b(d.$$.fragment,f),h=!0)},o(f){k(d.$$.fragment,f),h=!1},d(f){f&&(p(e),p(l),p(i),p($)),F(d,f)}}}function Ll(o){let e,r=v("workflows.archived-workflows")+"",t,l,i,n,a,s,c,u=!o[0]&&rt();const _=[Bl,Hl],$=[];function d(h,f){var m;return(m=h[3])!=null&&m.length?0:1}return n=d(o),a=$[n]=_[n](o),{c(){e=N("h1"),t=H(r),l=W(),u&&u.c(),i=W(),a.c(),s=j(),this.h()},l(h){e=D(h,"H1",{class:!0,"data-testid":!0});var f=O(e);t=B(f,r),f.forEach(p),l=L(h),u&&u.l(h),i=L(h),a.l(h),s=j(),this.h()},h(){T(e,"class","text-2xl"),T(e,"data-testid","archived-enabled-title")},m(h,f){w(h,e,f),E(e,t),w(h,l,f),u&&u.m(h,f),w(h,i,f),$[n].m(h,f),w(h,s,f),c=!0},p(h,f){h[0]?u&&(J(),k(u,1,1,()=>{u=null}),Y()):u?f&1&&b(u,1):(u=rt(),u.c(),b(u,1),u.m(i.parentNode,i));let m=n;n=d(h),n===m?$[n].p(h,f):(J(),k($[m],1,1,()=>{$[m]=null}),Y(),a=$[n],a?a.p(h,f):(a=$[n]=_[n](h),a.c()),b(a,1),a.m(s.parentNode,s))},i(h){c||(b(u),b(a),c=!0)},o(h){k(u),k(a),c=!1},d(h){h&&(p(e),p(l),p(i),p(s)),u&&u.d(h),$[n].d(h)}}}function lt(o){let e,r=v("workflows.archival-link-preface")+"",t,l,i=v("workflows.archival-link")+"",n,a,s,c,u;return c=new De({props:{content:`temporal operator namespace update --visibility-archival-state enabled ${o[4]}`,language:"text",inline:!0,copyIconTitle:v("common.copy-icon-title"),copySuccessIconTitle:v("common.copy-success-icon-title")}}),{c(){e=N("p"),t=H(r),l=N("a"),n=H(i),a=H(":"),s=W(),S(c.$$.fragment),this.h()},l(_){e=D(_,"P",{});var $=O(e);t=B($,r),l=D($,"A",{class:!0,href:!0,target:!0,rel:!0});var d=O(l);n=B(d,i),d.forEach(p),a=B($,":"),$.forEach(p),s=L(_),I(c.$$.fragment,_),this.h()},h(){T(l,"class","text-blue-700 underline"),T(l,"href","https://docs.temporal.io/clusters#archival"),T(l,"target","_blank"),T(l,"rel","noreferrer")},m(_,$){w(_,e,$),E(e,t),E(e,l),E(l,n),E(e,a),w(_,s,$),P(c,_,$),u=!0},p(_,$){const d={};$&16&&(d.content=`temporal operator namespace update --visibility-archival-state enabled ${_[4]}`),c.$set(d)},i(_){u||(b(c.$$.fragment,_),u=!0)},o(_){k(c.$$.fragment,_),u=!1},d(_){_&&(p(e),p(s)),F(c,_)}}}function rt(o){let e,r;return e=new Nl({}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function Hl(o){let e,r;return e=new Wt({props:{title:v("workflows.workflow-empty-state-title"),content:v("workflows.archival-empty-state-description")}}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p:K,i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function Bl(o){let e,r;return e=new Lt({props:{items:o[3],"aria-label":v("workflows.archived-workflows"),pageSizeSelectLabel:v("common.per-page"),previousButtonLabel:v("common.previous"),nextButtonLabel:v("common.next"),$$slots:{default:[Rl,({visibleItems:t})=>({7:t}),({visibleItems:t})=>t?128:0]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&8&&(i.items=t[3]),l&2192&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function at(o){let e,r;return e=new Yt({props:{workflow:o[8],namespace:o[4]}}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&128&&(i.workflow=t[8]),l&16&&(i.namespace=t[4]),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function Ol(o){let e,r,t=ie(o[7]),l=[];for(let n=0;n<t.length;n+=1)l[n]=at(tt(o,t,n));const i=n=>k(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=j()},l(n){for(let a=0;a<l.length;a+=1)l[a].l(n);e=j()},m(n,a){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(n,a);w(n,e,a),r=!0},p(n,a){if(a&144){t=ie(n[7]);let s;for(s=0;s<t.length;s+=1){const c=tt(n,t,s);l[s]?(l[s].p(c,a),b(l[s],1)):(l[s]=at(c),l[s].c(),b(l[s],1),l[s].m(e.parentNode,e))}for(J(),s=t.length;s<l.length;s+=1)i(s);Y()}},i(n){if(!r){for(let a=0;a<t.length;a+=1)b(l[a]);r=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)k(l[a]);r=!1},d(n){n&&p(e),it(l,n)}}}function Rl(o){let e,r;return e=new ol({props:{$$slots:{default:[Ol]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&2192&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function jl(o){let e,r,t,l,i,n;e=new kt({props:{title:`${v("workflows.archival")} | ${o[4]}`,url:o[5].url.href}});const a=[Ll,Wl,Dl],s=[];function c(u,_){return u[2]&&u[1]?0:u[2]?1:2}return t=c(o),l=s[t]=a[t](o),{c(){S(e.$$.fragment),r=W(),l.c(),i=j()},l(u){I(e.$$.fragment,u),r=L(u),l.l(u),i=j()},m(u,_){P(e,u,_),w(u,r,_),s[t].m(u,_),w(u,i,_),n=!0},p(u,[_]){const $={};_&16&&($.title=`${v("workflows.archival")} | ${u[4]}`),_&32&&($.url=u[5].url.href),e.$set($);let d=t;t=c(u),t===d?s[t].p(u,_):(J(),k(s[d],1,1,()=>{s[d]=null}),Y(),l=s[t],l?l.p(u,_):(l=s[t]=a[t](u),l.c()),b(l,1),l.m(i.parentNode,i))},i(u){n||(b(e.$$.fragment,u),b(l),n=!0)},o(u){k(e.$$.fragment,u),k(l),n=!1},d(u){u&&(p(r),p(i)),F(e,u),s[t].d(u)}}}function zl(o,e,r){let t,l,i,n,a,s;ne(o,Ie,u=>r(5,s=u));let{data:c}=e;return o.$$set=u=>{"data"in u&&r(6,c=u.data)},o.$$.update=()=>{o.$$.dirty&64&&r(4,{namespace:{namespaceInfo:{name:t}},workflows:l,archivalEnabled:i,visibilityArchivalEnabled:n,archivalQueryingNotSupported:a}=c,t,(r(3,l),r(6,c)),(r(2,i),r(6,c)),(r(1,n),r(6,c)),(r(0,a),r(6,c)))},[a,n,i,l,t,s,c]}class dr extends ue{constructor(e){super(),ce(this,e,zl,jl,fe,{data:6})}}export{dr as component,hr as universal};
