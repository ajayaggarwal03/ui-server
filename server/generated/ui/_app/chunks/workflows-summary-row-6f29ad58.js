var Ge=Object.defineProperty,Je=Object.defineProperties;var Ve=Object.getOwnPropertyDescriptors;var He=Object.getOwnPropertySymbols;var Xe=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var Ne=(o,e,s)=>e in o?Ge(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,Ce=(o,e)=>{for(var s in e||(e={}))Xe.call(e,s)&&Ne(o,s,e[s]);if(He)for(var s of He(e))Ye.call(e,s)&&Ne(o,s,e[s]);return o},Le=(o,e)=>Je(o,Ve(e));import{S as Te,i as ge,s as we,w as G,x as J,y as V,q as g,o as $,B as X,I as Ze,J as xe,K as et,L as tt,e as k,t as H,k as I,c as v,a as y,h as N,d as u,m as P,b as S,g as b,M as d,E as he,T as C,U as be,ar as ke,H as lt,n as pe,p as de,l as Be,N as Ke,j as ee,G as st}from"./index-68c8bf39.js";import{T as ot,a as rt,b as at}from"./table-row-85e79595.js";import{p as nt}from"./stores-5114c64c.js";import{c as ft,f as j,d as Ue}from"./format-date-ecf4453c.js";import{n as it}from"./route-for-0fcfcb54.js";import{u as ut}from"./update-query-parameters-94043e37.js";import{c as ct,d as mt,e as _t,f as pt}from"./is-419a79e8.js";import{l as dt,m as wt}from"./to-duration-6d22e6d2.js";import{t as Ae}from"./workflow-service-7a54001c.js";import{W as ht}from"./workflow-status-79c92dd4.js";import{I as je}from"./index-e75fc38f.js";import{c as bt}from"./copy-to-clipboard-d03df54a.js";function kt(o){let e;const s=o[0].default,t=Ze(s,o,o[1],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&2)&&xe(t,s,l,l[1],e?tt(s,l[1],a,null):et(l[1]),null)},i(l){e||(g(t,l),e=!0)},o(l){$(t,l),e=!1},d(l){t&&t.d(l)}}}function vt(o){let e,s,t,l,a,r,n,i,m,W,D,q,_,B,w,E,O;return{c(){e=k("th"),s=H("Status"),t=I(),l=k("th"),a=H("Workflow ID"),r=I(),n=k("th"),i=H("Type"),m=I(),W=k("th"),D=H("Start"),q=I(),_=k("th"),B=H("End"),w=I(),E=k("th"),O=H("Summary"),this.h()},l(c){e=v(c,"TH",{class:!0});var h=y(e);s=N(h,"Status"),h.forEach(u),t=P(c),l=v(c,"TH",{class:!0});var T=y(l);a=N(T,"Workflow ID"),T.forEach(u),r=P(c),n=v(c,"TH",{class:!0});var Q=y(n);i=N(Q,"Type"),Q.forEach(u),m=P(c),W=v(c,"TH",{class:!0});var U=y(W);D=N(U,"Start"),U.forEach(u),q=P(c),_=v(c,"TH",{class:!0});var F=y(_);B=N(F,"End"),F.forEach(u),w=P(c),E=v(c,"TH",{class:!0,colspan:!0});var R=y(E);O=N(R,"Summary"),R.forEach(u),this.h()},h(){S(e,"class","hidden w-48 md:table-cell"),S(l,"class","hidden md:table-cell md:w-60 xl:w-auto"),S(n,"class","hidden md:table-cell md:w-60 xl:w-80"),S(W,"class","hidden xl:table-cell xl:w-60"),S(_,"class","hidden xl:table-cell xl:w-60"),S(E,"class","table-cell md:hidden"),S(E,"colspan","3")},m(c,h){b(c,e,h),d(e,s),b(c,t,h),b(c,l,h),d(l,a),b(c,r,h),b(c,n,h),d(n,i),b(c,m,h),b(c,W,h),d(W,D),b(c,q,h),b(c,_,h),d(_,B),b(c,w,h),b(c,E,h),d(E,O)},p:he,d(c){c&&u(e),c&&u(t),c&&u(l),c&&u(r),c&&u(n),c&&u(m),c&&u(W),c&&u(q),c&&u(_),c&&u(w),c&&u(E)}}}function yt(o){let e,s;return e=new rt({props:{slot:"headers",$$slots:{default:[vt]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,l){const a={};l&2&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function Tt(o){let e,s;return e=new ot({props:{class:"w-full md:table-fixed",$$slots:{headers:[yt],default:[kt]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,[l]){const a={};l&2&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function gt(o,e,s){let{$$slots:t={},$$scope:l}=e;return o.$$set=a=>{"$$scope"in a&&s(1,l=a.$$scope)},[t,l]}class Vt extends Te{constructor(e){super(),ge(this,e,gt,Tt,we,{})}}const Et=o=>{const e=[],s=()=>{t&&(e.push(t),t="")};let t="",l=0;for(;l<o.length;){const a=o[l];if(ct(a)){s(),t+=a,l++;continue}if(mt(a)||_t(a)){s(),l++;continue}t+=a,l++}return s(),e},ve=o=>e=>e.toLowerCase()===o.toLowerCase(),_e=(o,e)=>o[e+2],St=o=>{if(!!o){for(const e of wt)if(o[e])return{[e]:o[e]}}},$t=ve("WorkflowType"),Wt=ve("WorkflowId"),Ft=ve("StartTime"),Dt=ve("ExecutionStatus"),It=o=>{const e=Et(o),s={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,l)=>{if(Wt(t)&&(s.workflowId=_e(e,l)),$t(t)&&(s.workflowType=_e(e,l)),Dt(t)){const a=_e(e,l);pt(a)&&(s.executionStatus=a)}if(Ft(t)){const a=_e(e,l);try{const r=dt(a),n=St(r);s.timeRange=ft(n)}catch(r){console.error("Error parsing StartTime from query",r)}}}),s};function Me(o){let e,s,t,l,a,r=o[1]&&Oe(o),n=o[2]&&Re(o);return{c(){e=k("div"),r&&r.c(),s=I(),n&&n.c(),this.h()},l(i){e=v(i,"DIV",{class:!0});var m=y(e);r&&r.l(m),s=P(m),n&&n.l(m),m.forEach(u),this.h()},h(){S(e,"class","copy-or-filter svelte-1llgntb")},m(i,m){b(i,e,m),r&&r.m(e,null),d(e,s),n&&n.m(e,null),t=!0,l||(a=C(e,"click",be(ke(he))),l=!0)},p(i,m){i[1]?r?(r.p(i,m),m&2&&g(r,1)):(r=Oe(i),r.c(),g(r,1),r.m(e,s)):r&&(pe(),$(r,1,1,()=>{r=null}),de()),i[2]?n?(n.p(i,m),m&4&&g(n,1)):(n=Re(i),n.c(),g(n,1),n.m(e,null)):n&&(pe(),$(n,1,1,()=>{n=null}),de())},i(i){t||(g(r),g(n),t=!0)},o(i){$(r),$(n),t=!1},d(i){i&&u(e),r&&r.d(),n&&n.d(),l=!1,a()}}}function Oe(o){let e,s=o[5],t,l,a,r=Qe(o);return{c(){e=k("button"),r.c()},l(n){e=v(n,"BUTTON",{});var i=y(e);r.l(i),i.forEach(u)},m(n,i){b(n,e,i),r.m(e,null),t=!0,l||(a=C(e,"click",be(ke(function(){lt(o[4])&&o[4].apply(this,arguments)}))),l=!0)},p(n,i){o=n,i&32&&we(s,s=o[5])?(pe(),$(r,1,1,he),de(),r=Qe(o),r.c(),g(r,1),r.m(e,null)):r.p(o,i)},i(n){t||(g(r),t=!0)},o(n){$(r),t=!1},d(n){n&&u(e),r.d(n),l=!1,a()}}}function Qe(o){let e,s;return e=new je({props:{name:"filter",stroke:"#000",fill:o[5]?"#000":"",class:"h-4 w-4"}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,l){const a={};l&32&&(a.fill=t[5]?"#000":""),e.$set(a)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function Re(o){let e,s,t,l,a;return s=new je({props:{name:o[6]?"checkMark":"copy",stroke:"#000",class:"h-4 w-4"}}),{c(){e=k("button"),G(s.$$.fragment)},l(r){e=v(r,"BUTTON",{});var n=y(e);J(s.$$.fragment,n),n.forEach(u)},m(r,n){b(r,e,n),V(s,e,null),t=!0,l||(a=C(e,"click",be(ke(o[9]))),l=!0)},p(r,n){const i={};n&64&&(i.name=r[6]?"checkMark":"copy"),s.$set(i)},i(r){t||(g(s.$$.fragment,r),t=!0)},o(r){$(s.$$.fragment,r),t=!1},d(r){r&&u(e),X(s),l=!1,a()}}}function Pt(o){let e,s,t=o[0]&&Me(o);return{c(){t&&t.c(),e=Be()},l(l){t&&t.l(l),e=Be()},m(l,a){t&&t.m(l,a),b(l,e,a),s=!0},p(l,[a]){l[0]?t?(t.p(l,a),a&1&&g(t,1)):(t=Me(l),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(pe(),$(t,1,1,()=>{t=null}),de())},i(l){s||(g(t),s=!0)},o(l){$(t),s=!1},d(l){t&&t.d(l),l&&u(e)}}}function qt(o,e,s){let t,{show:l=!1}=e,{filterable:a=!0}=e,{copyable:r=!0}=e,{content:n}=e,{onFilter:i=he}=e,{filtered:m=!1}=e;const{copy:W,copied:D}=bt(700);Ke(o,D,_=>s(6,t=_));const q=_=>W(_,n);return o.$$set=_=>{"show"in _&&s(0,l=_.show),"filterable"in _&&s(1,a=_.filterable),"copyable"in _&&s(2,r=_.copyable),"content"in _&&s(3,n=_.content),"onFilter"in _&&s(4,i=_.onFilter),"filtered"in _&&s(5,m=_.filtered)},[l,a,r,n,i,m,t,W,D,q]}class ze extends Te{constructor(e){super(),ge(this,e,qt,Pt,we,{show:0,filterable:1,copyable:2,content:3,onFilter:4,filtered:5})}}function Ht(o){var Se,$e,We;let e,s,t,l,a,r=o[0].id+"",n,i,m,W,D,q=j(o[0].startTime,o[1])+"",_,B,w,E,O,c,h,T=o[0].name+"",Q,U,F,R,z,te=j(o[0].endTime,o[1])+"",fe,ie,Y,le,se=j(o[0].startTime,o[1])+"",ue,ce,Z,oe,re=j(o[0].endTime,o[1])+"",me,A,ye,Ee;return s=new ht({props:{status:o[0].status,delay:Ue(o[0].startTime)}}),m=new ze({props:{show:o[2],content:o[0].id,filterable:!1}}),F=new ze({props:{show:o[2],content:o[0].name,onFilter:o[12],filtered:(We=($e=(Se=o[4].url)==null?void 0:Se.searchParams)==null?void 0:$e.get("query"))==null?void 0:We.includes(o[0].name)}}),{c(){e=k("td"),G(s.$$.fragment),t=I(),l=k("td"),a=k("span"),n=H(r),i=I(),G(m.$$.fragment),W=I(),D=k("p"),_=H(q),B=I(),w=k("td"),E=k("h3"),O=H("Workflow Name:"),c=I(),h=k("span"),Q=H(T),U=I(),G(F.$$.fragment),R=I(),z=k("p"),fe=H(te),ie=I(),Y=k("td"),le=k("p"),ue=H(se),ce=I(),Z=k("td"),oe=k("p"),me=H(re),this.h()},l(f){e=v(f,"TD",{});var p=y(e);J(s.$$.fragment,p),p.forEach(u),t=P(f),l=v(f,"TD",{class:!0});var M=y(l);a=v(M,"SPAN",{class:!0});var x=y(a);n=N(x,r),x.forEach(u),i=P(M),J(m.$$.fragment,M),W=P(M),D=v(M,"P",{class:!0});var K=y(D);_=N(K,q),K.forEach(u),M.forEach(u),B=P(f),w=v(f,"TD",{class:!0});var L=y(w);E=v(L,"H3",{class:!0});var ae=y(E);O=N(ae,"Workflow Name:"),ae.forEach(u),c=P(L),h=v(L,"SPAN",{class:!0});var ne=y(h);Q=N(ne,T),ne.forEach(u),U=P(L),J(F.$$.fragment,L),R=P(L),z=v(L,"P",{class:!0});var Fe=y(z);fe=N(Fe,te),Fe.forEach(u),L.forEach(u),ie=P(f),Y=v(f,"TD",{class:!0});var De=y(Y);le=v(De,"P",{});var Ie=y(le);ue=N(Ie,se),Ie.forEach(u),De.forEach(u),ce=P(f),Z=v(f,"TD",{class:!0});var Pe=y(Z);oe=v(Pe,"P",{});var qe=y(oe);me=N(qe,re),qe.forEach(u),Pe.forEach(u),this.h()},h(){S(a,"class","table-link svelte-si1lto"),S(D,"class","inline-time-cell svelte-si1lto"),S(l,"class","relative truncate"),S(E,"class","md:hidden"),S(h,"class","table-link svelte-si1lto"),S(z,"class","inline-time-cell svelte-si1lto"),S(w,"class","relative truncate"),S(Y,"class","time-cell svelte-si1lto"),S(Z,"class","time-cell svelte-si1lto")},m(f,p){b(f,e,p),V(s,e,null),b(f,t,p),b(f,l,p),d(l,a),d(a,n),d(l,i),V(m,l,null),d(l,W),d(l,D),d(D,_),b(f,B,p),b(f,w,p),d(w,E),d(E,O),d(w,c),d(w,h),d(h,Q),d(w,U),V(F,w,null),d(w,R),d(w,z),d(z,fe),b(f,ie,p),b(f,Y,p),d(Y,le),d(le,ue),b(f,ce,p),b(f,Z,p),d(Z,oe),d(oe,me),A=!0,ye||(Ee=[C(l,"mouseover",o[7]),C(l,"focus",o[8]),C(l,"mouseleave",o[9]),C(l,"blur",o[10]),C(h,"click",be(ke(o[11]))),C(w,"mouseover",o[13]),C(w,"focus",o[14]),C(w,"mouseleave",o[15]),C(w,"blur",o[16])],ye=!0)},p(f,p){var L,ae,ne;const M={};p&1&&(M.status=f[0].status),p&1&&(M.delay=Ue(f[0].startTime)),s.$set(M),(!A||p&1)&&r!==(r=f[0].id+"")&&ee(n,r);const x={};p&4&&(x.show=f[2]),p&1&&(x.content=f[0].id),m.$set(x),(!A||p&3)&&q!==(q=j(f[0].startTime,f[1])+"")&&ee(_,q),(!A||p&1)&&T!==(T=f[0].name+"")&&ee(Q,T);const K={};p&4&&(K.show=f[2]),p&1&&(K.content=f[0].name),p&1&&(K.onFilter=f[12]),p&17&&(K.filtered=(ne=(ae=(L=f[4].url)==null?void 0:L.searchParams)==null?void 0:ae.get("query"))==null?void 0:ne.includes(f[0].name)),F.$set(K),(!A||p&3)&&te!==(te=j(f[0].endTime,f[1])+"")&&ee(fe,te),(!A||p&3)&&se!==(se=j(f[0].startTime,f[1])+"")&&ee(ue,se),(!A||p&3)&&re!==(re=j(f[0].endTime,f[1])+"")&&ee(me,re)},i(f){A||(g(s.$$.fragment,f),g(m.$$.fragment,f),g(F.$$.fragment,f),A=!0)},o(f){$(s.$$.fragment,f),$(m.$$.fragment,f),$(F.$$.fragment,f),A=!1},d(f){f&&u(e),X(s),f&&u(t),f&&u(l),X(m),f&&u(B),f&&u(w),X(F),f&&u(ie),f&&u(Y),f&&u(ce),f&&u(Z),ye=!1,st(Ee)}}}function Nt(o){let e,s;return e=new at({props:{href:o[3],class:"workflow-summary-row",$$slots:{default:[Ht]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,[l]){const a={};l&8&&(a.href=t[3]),l&131095&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function Ct(o,e,s){let t,l;Ke(o,nt,T=>s(4,l=T));let{namespace:a}=e,{workflow:r}=e,{timeFormat:n}=e,i=!1;const m=T=>{const Q=Ae({timeRange:"All"}),U=l.url.searchParams.get("query"),F=It(U!=null?U:Q),R=(F==null?void 0:F.workflowType)===T?"":T,z=Ae(Le(Ce({},F),{workflowType:R}));ut({url:l.url,parameter:"query",value:z,allowEmpty:!0})},W=()=>s(2,i=!0),D=()=>s(2,i=!0),q=()=>s(2,i=!1),_=()=>s(2,i=!1),B=()=>m(r.name),w=()=>m(r.name),E=()=>s(2,i=!0),O=()=>s(2,i=!0),c=()=>s(2,i=!1),h=()=>s(2,i=!1);return o.$$set=T=>{"namespace"in T&&s(6,a=T.namespace),"workflow"in T&&s(0,r=T.workflow),"timeFormat"in T&&s(1,n=T.timeFormat)},o.$$.update=()=>{o.$$.dirty&65&&s(3,t=it({namespace:a,workflow:r.id,run:r.runId}))},[r,n,i,t,l,m,a,W,D,q,_,B,w,E,O,c,h]}class Xt extends Te{constructor(e){super(),ge(this,e,Ct,Nt,we,{namespace:6,workflow:0,timeFormat:1})}}export{Vt as W,Xt as a,It as t};