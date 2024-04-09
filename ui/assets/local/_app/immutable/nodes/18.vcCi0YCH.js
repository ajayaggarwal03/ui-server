import{f as it}from"../chunks/namespaces-service.suZeuHju.js";import{d as ft,e as je}from"../chunks/workflow-service.2AwlD9b4.js";import{s as fe,c as ne,e as C,a as P,t as H,b as I,d as B,g as $,h as q,f as z,j as y,k as w,l as E,m as R,G as rt,$ as at,n as te,H as ot,p as ut,u as ct,q as mt,r as pt,i as oe,v as K,D as Ne,Y as Qe,S as _t,T as $t,x as U,y as nt}from"../chunks/scheduler.fjKs9yxd.js";import{S as ue,i as ce,c as N,a as A,m as F,t as b,b as v,d as W,g as X,e as Z,f as ht}from"../chunks/index.ZY3lhhrE.js";import{e as ie,u as dt,o as wt}from"../chunks/each.alF3Xjfy.js";import{p as Ie}from"../chunks/stores.KzVzZTVD.js";import{P as gt}from"../chunks/page-title.LKzdhMqo.js";import{W as bt}from"../chunks/workflow-status.X-K_EKoT.js";import{t as vt,F as Re,d as kt}from"../chunks/index.KkfqB2DW.js";import{L as Fe}from"../chunks/link.PKx0uHkX.js";import{T as yt}from"../chunks/table-row.-nYEDYHk.js";import{t as k}from"../chunks/translate.Itygs_Qz.js";import{t as Ae,r as Tt,f as ee}from"../chunks/time-format.nIZMsISQ.js";import{e as Et,h as St,j as Ct,k as Me,l as Ge}from"../chunks/format-time.9mIRALNp.js";import{l as It}from"../chunks/has.iatLMeUG.js";import{b as Pt}from"../chunks/route-for.VEyJA8lb.js";import{u as st}from"../chunks/update-query-parameters.GX8xF7DU.js";import{T as qt,a as Nt}from"../chunks/table-header-row.xBHgQxmX.js";import{C as We}from"../chunks/code-block.WqjLCaqP.js";import{E as At}from"../chunks/empty-state.fwGOTqLK.js";import{P as Ft}from"../chunks/pagination.mwJUlq2P.js";import{g as Wt}from"../chunks/entry.O_87qjfK.js";import{B as Dt}from"../chunks/button.wa6c9gPX.js";import{I as Lt}from"../chunks/input._o6fnvle.js";import{F as Ve}from"../chunks/pagination.zuV6nX1G.js";import{S as Ht,a as ve}from"../chunks/simple-select.nvTv2ALo.js";import{I as zt}from"../chunks/icon.xQlvD1Wx.js";const Bt=async function({params:a,url:e}){var u,p,S,T,D,M,O,Y;const{searchParams:r}=e;r.has("time-range")||r.set("time-range","1 day");const t=r.get("workflow-id"),l=r.get("workflow-type"),s=r.get("time-range"),i=r.get("status"),o=await it(a.namespace),n=(S=(p=(u=o.config)==null?void 0:u.historyArchivalUri)==null?void 0:p.toLowerCase())==null?void 0:S.startsWith("s3://"),c=(M=(D=(T=o.config)==null?void 0:T.historyArchivalUri)==null?void 0:D.toLowerCase())==null?void 0:M.startsWith("gs://"),f=n||c,m=f?{}:{workflowId:t,workflowType:l,closeTime:s,executionStatus:i},_=((O=o==null?void 0:o.config)==null?void 0:O.historyArchivalState)==="Enabled",h=((Y=o==null?void 0:o.config)==null?void 0:Y.visibilityArchivalState)==="Enabled",d=_&&h?await ft(a.namespace,m,fetch):null;return{workflows:d?d.workflows:[],namespace:o,archivalEnabled:_,visibilityArchivalEnabled:h,archivalQueryingNotSupported:f}},cr=Object.freeze(Object.defineProperty({__proto__:null,load:Bt},Symbol.toStringTag,{value:"Module"})),Pe=a=>e=>e.toLowerCase()===a.toLowerCase(),Ce=(a,e)=>a[e+2],Ot=a=>{if(a){for(const e of Ct)if(a[e])return{[e]:a[e]}}},Ut=Pe("WorkflowType"),jt=Pe("WorkflowId"),Qt=Pe("StartTime"),Rt=Pe("ExecutionStatus"),Mt=a=>{const e=vt(a),r={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,l)=>{if(jt(t)&&(r.workflowId=Ce(e,l)),Ut(t)&&(r.workflowType=Ce(e,l)),Rt(t)){const s=Ce(e,l);It(s)&&(r.executionStatus=s)}if(Qt(t)){const s=Ce(e,l);try{const i=Et(s),o=Ot(i);r.timeRange=St(o)}catch(i){console.error("Error parsing StartTime from query",i)}}}),r};function Gt(a){let e=a[0].id+"",r;return{c(){r=H(e)},l(t){r=z(t,e)},m(t,l){w(t,r,l)},p(t,l){l&1&&e!==(e=t[0].id+"")&&te(r,e)},d(t){t&&$(r)}}}function Vt(a){var Le,He,ze;let e,r,t,l,s,i,o,n,c,f=ee(a[0].startTime,a[4],{relative:a[5]})+"",m,_,h,d,u=k("workflows.workflow-name")+"",p,S,T,D,M=a[0].name+"",O,Y,le,j,me,x,pe=ee(a[0].endTime,a[4],{relative:a[5]})+"",ke,ye,re,_e,$e=ee(a[0].startTime,a[4],{relative:a[5]})+"",Te,Ee,ae,he,de=ee(a[0].endTime,a[4],{relative:a[5]})+"",Se,G,qe,De;return r=new bt({props:{status:a[0].status,delay:Me(a[0].startTime)}}),s=new Fe({props:{href:a[2],$$slots:{default:[Gt]},$$scope:{ctx:a}}}),o=new Re({props:{copyIconTitle:k("common.copy-icon-title"),copySuccessIconTitle:k("common.copy-success-icon-title"),filterIconTitle:k("common.filter-workflows"),show:a[1],content:a[0].id,filterable:!1}}),j=new Re({props:{copyIconTitle:k("common.copy-icon-title"),copySuccessIconTitle:k("common.copy-success-icon-title"),filterIconTitle:k("common.filter-workflows"),show:a[1],content:a[0].name,onFilter:a[13],filtered:(ze=(He=(Le=a[3].url)==null?void 0:Le.searchParams)==null?void 0:He.get("query"))==null?void 0:ze.includes(a[0].name)}}),{c(){e=C("td"),N(r.$$.fragment),t=P(),l=C("td"),N(s.$$.fragment),i=P(),N(o.$$.fragment),n=P(),c=C("p"),m=H(f),_=P(),h=C("td"),d=C("h3"),p=H(u),S=H(":"),T=P(),D=C("button"),O=H(M),le=P(),N(j.$$.fragment),me=P(),x=C("p"),ke=H(pe),ye=P(),re=C("td"),_e=C("p"),Te=H($e),Ee=P(),ae=C("td"),he=C("p"),Se=H(de),this.h()},l(g){e=I(g,"TD",{});var L=B(e);A(r.$$.fragment,L),L.forEach($),t=q(g),l=I(g,"TD",{class:!0});var V=B(l);A(s.$$.fragment,V),i=q(V),A(o.$$.fragment,V),n=q(V),c=I(V,"P",{class:!0});var se=B(c);m=z(se,f),se.forEach($),V.forEach($),_=q(g),h=I(g,"TD",{class:!0});var Q=B(h);d=I(Q,"H3",{class:!0});var J=B(d);p=z(J,u),S=z(J,":"),J.forEach($),T=q(Q),D=I(Q,"BUTTON",{class:!0,"aria-label":!0});var we=B(D);O=z(we,M),we.forEach($),le=q(Q),A(j.$$.fragment,Q),me=q(Q),x=I(Q,"P",{class:!0});var ge=B(x);ke=z(ge,pe),ge.forEach($),Q.forEach($),ye=q(g),re=I(g,"TD",{class:!0});var be=B(re);_e=I(be,"P",{});var Be=B(_e);Te=z(Be,$e),Be.forEach($),be.forEach($),Ee=q(g),ae=I(g,"TD",{class:!0});var Oe=B(ae);he=I(Oe,"P",{});var Ue=B(he);Se=z(Ue,de),Ue.forEach($),Oe.forEach($),this.h()},h(){y(c,"class","inline-time-cell svelte-pmmzuv"),y(l,"class","relative break-words pr-4"),y(d,"class","md:hidden"),y(D,"class","table-link svelte-pmmzuv"),y(D,"aria-label",Y=k("workflows.filter-by",{workflowName:a[0].name})),y(x,"class","inline-time-cell svelte-pmmzuv"),y(h,"class","relative truncate"),y(re,"class","time-cell svelte-pmmzuv"),y(ae,"class","time-cell svelte-pmmzuv")},m(g,L){w(g,e,L),F(r,e,null),w(g,t,L),w(g,l,L),F(s,l,null),E(l,i),F(o,l,null),E(l,n),E(l,c),E(c,m),w(g,_,L),w(g,h,L),E(h,d),E(d,p),E(d,S),E(h,T),E(h,D),E(D,O),E(h,le),F(j,h,null),E(h,me),E(h,x),E(x,ke),w(g,ye,L),w(g,re,L),E(re,_e),E(_e,Te),w(g,Ee,L),w(g,ae,L),E(ae,he),E(he,Se),G=!0,qe||(De=[R(l,"mouseover",a[8]),R(l,"focus",a[9]),R(l,"mouseleave",a[10]),R(l,"blur",a[11]),R(D,"click",rt(at(a[12]))),R(h,"mouseover",a[14]),R(h,"focus",a[15]),R(h,"mouseleave",a[16]),R(h,"blur",a[17])],qe=!0)},p(g,L){var we,ge,be;const V={};L&1&&(V.status=g[0].status),L&1&&(V.delay=Me(g[0].startTime)),r.$set(V);const se={};L&4&&(se.href=g[2]),L&262145&&(se.$$scope={dirty:L,ctx:g}),s.$set(se);const Q={};L&2&&(Q.show=g[1]),L&1&&(Q.content=g[0].id),o.$set(Q),(!G||L&49)&&f!==(f=ee(g[0].startTime,g[4],{relative:g[5]})+"")&&te(m,f),(!G||L&1)&&M!==(M=g[0].name+"")&&te(O,M),(!G||L&1&&Y!==(Y=k("workflows.filter-by",{workflowName:g[0].name})))&&y(D,"aria-label",Y);const J={};L&2&&(J.show=g[1]),L&1&&(J.content=g[0].name),L&1&&(J.onFilter=g[13]),L&9&&(J.filtered=(be=(ge=(we=g[3].url)==null?void 0:we.searchParams)==null?void 0:ge.get("query"))==null?void 0:be.includes(g[0].name)),j.$set(J),(!G||L&49)&&pe!==(pe=ee(g[0].endTime,g[4],{relative:g[5]})+"")&&te(ke,pe),(!G||L&49)&&$e!==($e=ee(g[0].startTime,g[4],{relative:g[5]})+"")&&te(Te,$e),(!G||L&49)&&de!==(de=ee(g[0].endTime,g[4],{relative:g[5]})+"")&&te(Se,de)},i(g){G||(b(r.$$.fragment,g),b(s.$$.fragment,g),b(o.$$.fragment,g),b(j.$$.fragment,g),G=!0)},o(g){v(r.$$.fragment,g),v(s.$$.fragment,g),v(o.$$.fragment,g),v(j.$$.fragment,g),G=!1},d(g){g&&($(e),$(t),$(l),$(_),$(h),$(ye),$(re),$(Ee),$(ae)),W(r),W(s),W(o),W(j),qe=!1,ot(De)}}}function Kt(a){let e,r;return e=new yt({props:{class:"workflow-summary-row",$$slots:{default:[Vt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},p(t,[l]){const s={};l&262207&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function Yt(a,e,r){let t,l,s,i;ne(a,Ie,O=>r(3,l=O)),ne(a,Ae,O=>r(4,s=O)),ne(a,Tt,O=>r(5,i=O));let{namespace:o}=e,{workflow:n}=e,c=!1;const f=O=>{const Y=je({timeRange:"All"}),le=l.url.searchParams.get("query"),j=Mt(le??Y),me=(j==null?void 0:j.workflowType)===O?"":O,x=je({...j,workflowType:me});st({url:l.url,parameter:"query",value:x,allowEmpty:!0})},m=()=>r(1,c=!0),_=()=>r(1,c=!0),h=()=>r(1,c=!1),d=()=>r(1,c=!1),u=()=>f(n.name),p=()=>f(n.name),S=()=>r(1,c=!0),T=()=>r(1,c=!0),D=()=>r(1,c=!1),M=()=>r(1,c=!1);return a.$$set=O=>{"namespace"in O&&r(7,o=O.namespace),"workflow"in O&&r(0,n=O.workflow)},a.$$.update=()=>{a.$$.dirty&129&&r(2,t=Pt({namespace:o,workflow:n.id,run:n.runId}))},[n,c,t,l,s,i,f,o,m,_,h,d,u,p,S,T,D,M]}class Jt extends ue{constructor(e){super(),ce(this,e,Yt,Kt,fe,{namespace:7,workflow:0})}}function Xt(a){let e;const r=a[1].default,t=ut(r,a,a[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,s){t&&t.m(l,s),e=!0},p(l,s){t&&t.p&&(!e||s&4)&&ct(t,r,l,l[2],e?pt(r,l[2],s,null):mt(l[2]),null)},i(l){e||(b(t,l),e=!0)},o(l){v(t,l),e=!1},d(l){t&&t.d(l)}}}function Zt(a){let e,r="Workflows";return{c(){e=C("caption"),e.textContent=r,this.h()},l(t){e=I(t,"CAPTION",{class:!0,slot:!0,"data-svelte-h":!0}),oe(e)!=="svelte-qflexs"&&(e.textContent=r),this.h()},h(){y(e,"class","sr-only"),y(e,"slot","caption")},m(t,l){w(t,e,l)},p:K,d(t){t&&$(e)}}}function xt(a){let e,r="Status",t,l,s="Workflow ID",i,o,n="Type",c,f,m="Start",_,h,d="End",u,p,S="Summary";return{c(){e=C("th"),e.textContent=r,t=P(),l=C("th"),l.textContent=s,i=P(),o=C("th"),o.textContent=n,c=P(),f=C("th"),f.textContent=m,_=P(),h=C("th"),h.textContent=d,u=P(),p=C("th"),p.textContent=S,this.h()},l(T){e=I(T,"TH",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-16bnp2i"&&(e.textContent=r),t=q(T),l=I(T,"TH",{class:!0,"data-svelte-h":!0}),oe(l)!=="svelte-115zk6j"&&(l.textContent=s),i=q(T),o=I(T,"TH",{class:!0,"data-svelte-h":!0}),oe(o)!=="svelte-lhnwb5"&&(o.textContent=n),c=q(T),f=I(T,"TH",{class:!0,"data-svelte-h":!0}),oe(f)!=="svelte-1xn3gxk"&&(f.textContent=m),_=q(T),h=I(T,"TH",{class:!0,"data-svelte-h":!0}),oe(h)!=="svelte-10ns7z5"&&(h.textContent=d),u=q(T),p=I(T,"TH",{class:!0,colspan:!0,"data-svelte-h":!0}),oe(p)!=="svelte-39g6qc"&&(p.textContent=S),this.h()},h(){y(e,"class","w-32 max-md:hidden"),y(l,"class","max-md:hidden md:w-auto"),y(o,"class","w-60 max-md:hidden"),y(f,"class","w-60 max-xl:hidden"),y(h,"class","w-60 max-xl:hidden"),y(p,"class","md:hidden"),y(p,"colspan","3")},m(T,D){w(T,e,D),w(T,t,D),w(T,l,D),w(T,i,D),w(T,o,D),w(T,c,D),w(T,f,D),w(T,_,D),w(T,h,D),w(T,u,D),w(T,p,D)},p:K,d(T){T&&($(e),$(t),$(l),$(i),$(o),$(c),$(f),$(_),$(h),$(u),$(p))}}}function el(a){let e,r;return e=new Nt({props:{slot:"headers",$$slots:{default:[xt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},p(t,l){const s={};l&4&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function tl(a){let e,r;return e=new qt({props:{class:"w-full md:table-fixed",updating:a[0],"data-testid":"workflows-table",$$slots:{headers:[el],caption:[Zt],default:[Xt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},p(t,[l]){const s={};l&1&&(s.updating=t[0]),l&4&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function ll(a,e,r){let{$$slots:t={},$$scope:l}=e,{updating:s=!1}=e;return a.$$set=i=>{"updating"in i&&r(0,s=i.updating),"$$scope"in i&&r(2,l=i.$$scope)},[s,t,l]}class rl extends ue{constructor(e){super(),ce(this,e,ll,tl,fe,{updating:0})}}function al(a){let e;return{c(){e=H(a[2])},l(r){e=z(r,a[2])},m(r,t){w(r,e,t)},p(r,t){t&4&&te(e,r[2])},d(r){r&&$(e)}}}function ol(a){let e,r,t,l,s,i,o;return r=new Lt({props:{class:"w-full",unroundRight:!0,label:a[2],id:a[5],labelHidden:!0,icon:a[4]?"search":null,type:"search",name:a[3],value:a[1],placeholder:a[0],autocomplete:"off"}}),r.$on("input",a[7]),l=new Dt({props:{borderRadiusModifier:"square-left",type:"submit",$$slots:{default:[al]},$$scope:{ctx:a}}}),{c(){e=C("form"),N(r.$$.fragment),t=P(),N(l.$$.fragment),this.h()},l(n){e=I(n,"FORM",{role:!0,class:!0});var c=B(e);A(r.$$.fragment,c),t=q(c),A(l.$$.fragment,c),c.forEach($),this.h()},h(){y(e,"role","search"),y(e,"class","flex items-center")},m(n,c){w(n,e,c),F(r,e,null),E(e,t),F(l,e,null),s=!0,i||(o=R(e,"submit",at(a[6])),i=!0)},p(n,[c]){const f={};c&4&&(f.label=n[2]),c&32&&(f.id=n[5]),c&16&&(f.icon=n[4]?"search":null),c&8&&(f.name=n[3]),c&2&&(f.value=n[1]),c&1&&(f.placeholder=n[0]),r.$set(f);const m={};c&260&&(m.$$scope={dirty:c,ctx:n}),l.$set(m)},i(n){s||(b(r.$$.fragment,n),b(l.$$.fragment,n),s=!0)},o(n){v(r.$$.fragment,n),v(l.$$.fragment,n),s=!1},d(n){n&&$(e),W(r),W(l),i=!1,o()}}}function nl(a,e,r){let{placeholder:t=""}=e,{value:l=""}=e,{label:s=k("common.search")}=e,{name:i="query"}=e,{icon:o=!1}=e,{id:n=`${s.toLocaleUpperCase()}-input`}=e;function c(m){Ne.call(this,a,m)}function f(m){Ne.call(this,a,m)}return a.$$set=m=>{"placeholder"in m&&r(0,t=m.placeholder),"value"in m&&r(1,l=m.value),"label"in m&&r(2,s=m.label),"name"in m&&r(3,i=m.name),"icon"in m&&r(4,o=m.icon),"id"in m&&r(5,n=m.id)},[t,l,s,i,o,n,c,f]}class sl extends ue{constructor(e){super(),ce(this,e,nl,ol,fe,{placeholder:0,value:1,label:2,name:3,icon:4,id:5})}}function il(a){let e,r,t,l,s,i,o,n,c,f,m;return i=new zt({props:{name:"search",class:"flex items-center text-slate-700"}}),{c(){e=C("div"),r=C("label"),t=H(a[0]),l=P(),s=C("span"),N(i.$$.fragment),o=P(),n=C("input"),this.h()},l(_){e=I(_,"DIV",{class:!0});var h=B(e);r=I(h,"LABEL",{for:!0,class:!0});var d=B(r);t=z(d,a[0]),d.forEach($),l=q(h),s=I(h,"SPAN",{class:!0});var u=B(s);A(i.$$.fragment,u),u.forEach($),o=q(h),n=I(h,"INPUT",{type:!0,class:!0,placeholder:!0,id:!0}),h.forEach($),this.h()},h(){y(r,"for",a[2]),y(r,"class","hidden"),y(s,"class","svelte-fxm0nn"),y(n,"type","search"),y(n,"class","block w-full focus:outline-none"),y(n,"placeholder",a[0]),y(n,"id",a[2]),y(e,"class","input-container surface-primary focus-within:border-blue-700 svelte-fxm0nn")},m(_,h){w(_,e,h),E(e,r),E(r,t),E(e,l),E(e,s),F(i,s,null),E(e,o),E(e,n),Qe(n,a[1]),c=!0,f||(m=[R(n,"input",a[7]),R(n,"keydown",rt(a[6]))],f=!0)},p(_,[h]){(!c||h&1)&&te(t,_[0]),(!c||h&1)&&y(n,"placeholder",_[0]),h&2&&n.value!==_[1]&&Qe(n,_[1])},i(_){c||(b(i.$$.fragment,_),c=!0)},o(_){v(i.$$.fragment,_),c=!1},d(_){_&&$(e),W(i),f=!1,ot(m)}}}function fl(a,e,r){let t;ne(a,Ie,_=>r(5,t=_));let{parameter:l}=e,{name:s}=e,{value:i}=e,o=l&&t.url.searchParams.get(l)||i;const n=`${l||s}-filter`,c=kt(st,300);function f(_){Ne.call(this,a,_)}function m(){o=this.value,r(1,o)}return a.$$set=_=>{"parameter"in _&&r(3,l=_.parameter),"name"in _&&r(0,s=_.name),"value"in _&&r(4,i=_.value)},a.$$.update=()=>{a.$$.dirty&42&&c({parameter:l,value:o,url:t.url})},[s,o,n,l,i,t,f,m]}class Ke extends ue{constructor(e){super(),ce(this,e,fl,il,fe,{parameter:3,name:0,value:4})}}function Ye(a,e,r){const t=a.slice();return t[6]=e[r].value,t[7]=e[r].label,t}function Je(a,e,r){const t=a.slice();return t[6]=e[r],t}function ul(a){let e,r;return e=new Fe({props:{href:`${a[0].url.pathname}?query=`,$$slots:{default:[ml]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},p(t,l){const s={};l&1&&(s.href=`${t[0].url.pathname}?query=`),l&4096&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function cl(a){let e,r;return e=new Fe({props:{href:a[0].url.pathname,$$slots:{default:[pl]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},p(t,l){const s={};l&1&&(s.href=t[0].url.pathname),l&4096&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function ml(a){let e=k("workflows.advanced-search")+"",r;return{c(){r=H(e)},l(t){r=z(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&$(r)}}}function pl(a){let e=k("workflows.basic-search")+"",r;return{c(){r=H(e)},l(t){r=z(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&$(r)}}}function _l(a){let e,r,t,l,s,i,o,n,c,f,m,_;r=new Ke({props:{parameter:"workflow-id",name:k("common.workflow-id"),value:El}}),l=new Ke({props:{parameter:"workflow-type",name:k("common.workflow-type"),value:Sl}}),i=new Ve({props:{label:k("workflows.time-range"),parameter:"time-range",value:"24 hours",$$slots:{default:[dl]},$$scope:{ctx:a}}}),n=new Ve({props:{label:k("common.status"),parameter:"status",value:null,$$slots:{default:[gl]},$$scope:{ctx:a}}});function h(u){a[5](u)}let d={id:"filter-by-relative-time",$$slots:{default:[yl]},$$scope:{ctx:a}};return a[2]!==void 0&&(d.value=a[2]),f=new Ht({props:d}),_t.push(()=>ht(f,"value",h)),{c(){e=C("div"),N(r.$$.fragment),t=P(),N(l.$$.fragment),s=P(),N(i.$$.fragment),o=P(),N(n.$$.fragment),c=P(),N(f.$$.fragment),this.h()},l(u){e=I(u,"DIV",{class:!0,role:!0});var p=B(e);A(r.$$.fragment,p),t=q(p),A(l.$$.fragment,p),s=q(p),A(i.$$.fragment,p),o=q(p),A(n.$$.fragment,p),c=q(p),A(f.$$.fragment,p),p.forEach($),this.h()},h(){y(e,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5"),y(e,"role","search")},m(u,p){w(u,e,p),F(r,e,null),E(e,t),F(l,e,null),E(e,s),F(i,e,null),E(e,o),F(n,e,null),E(e,c),F(f,e,null),_=!0},p(u,p){const S={};p&4096&&(S.$$scope={dirty:p,ctx:u}),i.$set(S);const T={};p&4096&&(T.$$scope={dirty:p,ctx:u}),n.$set(T);const D={};p&4096&&(D.$$scope={dirty:p,ctx:u}),!m&&p&4&&(m=!0,D.value=u[2],$t(()=>m=!1)),f.$set(D)},i(u){_||(b(r.$$.fragment,u),b(l.$$.fragment,u),b(i.$$.fragment,u),b(n.$$.fragment,u),b(f.$$.fragment,u),_=!0)},o(u){v(r.$$.fragment,u),v(l.$$.fragment,u),v(i.$$.fragment,u),v(n.$$.fragment,u),v(f.$$.fragment,u),_=!1},d(u){u&&$(e),W(r),W(l),W(i),W(n),W(f)}}}function $l(a){let e,r;return e=new sl({props:{icon:!0,placeholder:k("common.search"),value:a[0].url.searchParams.get("query")}}),e.$on("submit",a[4]),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},p(t,l){const s={};l&1&&(s.value=t[0].url.searchParams.get("query")),e.$set(s)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function hl(a){let e=a[6]+"",r;return{c(){r=H(e)},l(t){r=z(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&$(r)}}}function Xe(a){let e,r;return e=new ve({props:{value:a[6],$$slots:{default:[hl]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},p(t,l){const s={};l&4096&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function dl(a){let e,r,t=ie(Ge),l=[];for(let i=0;i<t.length;i+=1)l[i]=Xe(Je(a,t,i));const s=i=>v(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=U()},l(i){for(let o=0;o<l.length;o+=1)l[o].l(i);e=U()},m(i,o){for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(i,o);w(i,e,o),r=!0},p(i,o){if(o&0){t=ie(Ge);let n;for(n=0;n<t.length;n+=1){const c=Je(i,t,n);l[n]?(l[n].p(c,o),b(l[n],1)):(l[n]=Xe(c),l[n].c(),b(l[n],1),l[n].m(e.parentNode,e))}for(X(),n=t.length;n<l.length;n+=1)s(n);Z()}},i(i){if(!r){for(let o=0;o<t.length;o+=1)b(l[o]);r=!0}},o(i){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)v(l[o]);r=!1},d(i){i&&$(e),nt(l,i)}}}function wl(a){let e=a[7]+"",r;return{c(){r=H(e)},l(t){r=z(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&$(r)}}}function Ze(a,e){let r,t,l;return t=new ve({props:{value:e[6],$$slots:{default:[wl]},$$scope:{ctx:e}}}),{key:a,first:null,c(){r=U(),N(t.$$.fragment),this.h()},l(s){r=U(),A(t.$$.fragment,s),this.h()},h(){this.first=r},m(s,i){w(s,r,i),F(t,s,i),l=!0},p(s,i){e=s;const o={};i&4096&&(o.$$scope={dirty:i,ctx:e}),t.$set(o)},i(s){l||(b(t.$$.fragment,s),l=!0)},o(s){v(t.$$.fragment,s),l=!1},d(s){s&&$(r),W(t,s)}}}function gl(a){let e=[],r=new Map,t,l,s=ie(Object.values(a[3]));const i=o=>o[7];for(let o=0;o<s.length;o+=1){let n=Ye(a,s,o),c=i(n);r.set(c,e[o]=Ze(c,n))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=U()},l(o){for(let n=0;n<e.length;n+=1)e[n].l(o);t=U()},m(o,n){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,n);w(o,t,n),l=!0},p(o,n){n&8&&(s=ie(Object.values(o[3])),X(),e=dt(e,n,i,1,o,s,r,t.parentNode,wt,Ze,t,Ye),Z())},i(o){if(!l){for(let n=0;n<s.length;n+=1)b(e[n]);l=!0}},o(o){for(let n=0;n<e.length;n+=1)v(e[n]);l=!1},d(o){o&&$(t);for(let n=0;n<e.length;n+=1)e[n].d(o)}}}function bl(a){let e=k("common.relative")+"",r;return{c(){r=H(e)},l(t){r=z(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&$(r)}}}function vl(a){let e=k("common.utc")+"",r;return{c(){r=H(e)},l(t){r=z(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&$(r)}}}function kl(a){let e=k("common.local")+"",r;return{c(){r=H(e)},l(t){r=z(t,e)},m(t,l){w(t,r,l)},p:K,d(t){t&&$(r)}}}function yl(a){let e,r,t,l,s,i;return e=new ve({props:{value:"relative",$$slots:{default:[bl]},$$scope:{ctx:a}}}),t=new ve({props:{value:"UTC",$$slots:{default:[vl]},$$scope:{ctx:a}}}),s=new ve({props:{value:"local",$$slots:{default:[kl]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),r=P(),N(t.$$.fragment),l=P(),N(s.$$.fragment)},l(o){A(e.$$.fragment,o),r=q(o),A(t.$$.fragment,o),l=q(o),A(s.$$.fragment,o)},m(o,n){F(e,o,n),w(o,r,n),F(t,o,n),w(o,l,n),F(s,o,n),i=!0},p(o,n){const c={};n&4096&&(c.$$scope={dirty:n,ctx:o}),e.$set(c);const f={};n&4096&&(f.$$scope={dirty:n,ctx:o}),t.$set(f);const m={};n&4096&&(m.$$scope={dirty:n,ctx:o}),s.$set(m)},i(o){i||(b(e.$$.fragment,o),b(t.$$.fragment,o),b(s.$$.fragment,o),i=!0)},o(o){v(e.$$.fragment,o),v(t.$$.fragment,o),v(s.$$.fragment,o),i=!1},d(o){o&&($(r),$(l)),W(e,o),W(t,o),W(s,o)}}}function Tl(a){let e,r,t,l,s,i,o,n;const c=[cl,ul],f=[];function m(u,p){return u[1]?0:1}t=m(a),l=f[t]=c[t](a);const _=[$l,_l],h=[];function d(u,p){return u[1]?0:1}return i=d(a),o=h[i]=_[i](a),{c(){e=C("section"),r=C("p"),l.c(),s=P(),o.c(),this.h()},l(u){e=I(u,"SECTION",{class:!0});var p=B(e);r=I(p,"P",{class:!0});var S=B(r);l.l(S),S.forEach($),s=q(p),o.l(p),p.forEach($),this.h()},h(){y(r,"class","text-right text-xs"),y(e,"class","flex flex-col gap-2")},m(u,p){w(u,e,p),E(e,r),f[t].m(r,null),E(e,s),h[i].m(e,null),n=!0},p(u,[p]){let S=t;t=m(u),t===S?f[t].p(u,p):(X(),v(f[S],1,1,()=>{f[S]=null}),Z(),l=f[t],l?l.p(u,p):(l=f[t]=c[t](u),l.c()),b(l,1),l.m(r,null));let T=i;i=d(u),i===T?h[i].p(u,p):(X(),v(h[T],1,1,()=>{h[T]=null}),Z(),o=h[i],o?o.p(u,p):(o=h[i]=_[i](u),o.c()),b(o,1),o.m(e,null))},i(u){n||(b(l),b(o),n=!0)},o(u){v(l),v(o),n=!1},d(u){u&&$(e),f[t].d(),h[i].d()}}}let El="",Sl="";function Cl(a,e,r){let t,l,s;ne(a,Ie,c=>r(0,l=c)),ne(a,Ae,c=>r(2,s=c));const i={All:{value:null,label:k("workflows.all-statuses")},"Timed Out":{value:"TimedOut",label:k("workflows.timed-out")},Completed:{value:"Completed",label:k("workflows.completed")},Failed:{value:"Failed",label:k("workflows.failed")},"Continued as New":{value:"ContinuedAsNew",label:k("workflows.continued-as-new")},Canceled:{value:"Canceled",label:k("workflows.canceled")},Terminated:{value:"Terminated",label:k("workflows.terminated")}},o=c=>{const m=new FormData(c.target).get("query");l.url.searchParams.set("query",String(m)),Wt(l.url.toString())};function n(c){s=c,Ae.set(s)}return a.$$.update=()=>{a.$$.dirty&1&&r(1,t=l.url.searchParams.has("query"))},[l,t,s,i,o,n]}class Il extends ue{constructor(e){super(),ce(this,e,Cl,Tl,fe,{})}}function xe(a,e,r){const t=a.slice();return t[8]=e[r],t}function Pl(a){let e,r=k("workflows.archival-disabled-title")+"",t,l,s,i=k("workflows.archival-disabled-details")+"",o,n,c,f,m,_,h;f=new We({props:{content:`temporal operator namespace update --history-archival-state enabled ${a[4]}`,language:"text",inline:!0,copyIconTitle:k("common.copy-icon-title"),copySuccessIconTitle:k("common.copy-success-icon-title")}});let d=!a[1]&&et(a);return{c(){e=C("h1"),t=H(r),l=P(),s=C("p"),o=H(i),n=H(":"),c=P(),N(f.$$.fragment),m=P(),d&&d.c(),_=U(),this.h()},l(u){e=I(u,"H1",{class:!0,"data-testid":!0});var p=B(e);t=z(p,r),p.forEach($),l=q(u),s=I(u,"P",{});var S=B(s);o=z(S,i),n=z(S,":"),S.forEach($),c=q(u),A(f.$$.fragment,u),m=q(u),d&&d.l(u),_=U(),this.h()},h(){y(e,"class","text-2xl"),y(e,"data-testid","archived-disabled-title")},m(u,p){w(u,e,p),E(e,t),w(u,l,p),w(u,s,p),E(s,o),E(s,n),w(u,c,p),F(f,u,p),w(u,m,p),d&&d.m(u,p),w(u,_,p),h=!0},p(u,p){const S={};p&16&&(S.content=`temporal operator namespace update --history-archival-state enabled ${u[4]}`),f.$set(S),u[1]?d&&(X(),v(d,1,1,()=>{d=null}),Z()):d?(d.p(u,p),p&2&&b(d,1)):(d=et(u),d.c(),b(d,1),d.m(_.parentNode,_))},i(u){h||(b(f.$$.fragment,u),b(d),h=!0)},o(u){v(f.$$.fragment,u),v(d),h=!1},d(u){u&&($(e),$(l),$(s),$(c),$(m),$(_)),W(f,u),d&&d.d(u)}}}function ql(a){let e,r=k("workflows.visibility-disabled-archival")+"",t,l,s,i=k("workflows.archival-link-preface")+"",o,n,c=k("workflows.archival-link")+"",f,m,_,h,d;return h=new We({props:{content:`temporal operator namespace update --visibility-archival-state enabled ${a[4]}`,language:"text",inline:!0,copyIconTitle:k("common.copy-icon-title"),copySuccessIconTitle:k("common.copy-success-icon-title")}}),{c(){e=C("h1"),t=H(r),l=P(),s=C("p"),o=H(i),n=C("a"),f=H(c),m=H(":"),_=P(),N(h.$$.fragment),this.h()},l(u){e=I(u,"H1",{class:!0,"data-testid":!0});var p=B(e);t=z(p,r),p.forEach($),l=q(u),s=I(u,"P",{});var S=B(s);o=z(S,i),n=I(S,"A",{class:!0,href:!0,target:!0,rel:!0});var T=B(n);f=z(T,c),T.forEach($),m=z(S,":"),S.forEach($),_=q(u),A(h.$$.fragment,u),this.h()},h(){y(e,"class","text-2xl"),y(e,"data-testid","visibility-disabled-title"),y(n,"class","text-blue-700 underline"),y(n,"href","https://docs.temporal.io/clusters#archival"),y(n,"target","_blank"),y(n,"rel","noreferrer")},m(u,p){w(u,e,p),E(e,t),w(u,l,p),w(u,s,p),E(s,o),E(s,n),E(n,f),E(s,m),w(u,_,p),F(h,u,p),d=!0},p(u,p){const S={};p&16&&(S.content=`temporal operator namespace update --visibility-archival-state enabled ${u[4]}`),h.$set(S)},i(u){d||(b(h.$$.fragment,u),d=!0)},o(u){v(h.$$.fragment,u),d=!1},d(u){u&&($(e),$(l),$(s),$(_)),W(h,u)}}}function Nl(a){let e,r=k("workflows.archived-workflows")+"",t,l,s,i,o,n,c,f=!a[0]&&tt();const m=[Fl,Al],_=[];function h(d,u){var p;return(p=d[3])!=null&&p.length?0:1}return i=h(a),o=_[i]=m[i](a),{c(){e=C("h1"),t=H(r),l=P(),f&&f.c(),s=P(),o.c(),n=U(),this.h()},l(d){e=I(d,"H1",{class:!0,"data-testid":!0});var u=B(e);t=z(u,r),u.forEach($),l=q(d),f&&f.l(d),s=q(d),o.l(d),n=U(),this.h()},h(){y(e,"class","text-2xl"),y(e,"data-testid","archived-enabled-title")},m(d,u){w(d,e,u),E(e,t),w(d,l,u),f&&f.m(d,u),w(d,s,u),_[i].m(d,u),w(d,n,u),c=!0},p(d,u){d[0]?f&&(X(),v(f,1,1,()=>{f=null}),Z()):f?u&1&&b(f,1):(f=tt(),f.c(),b(f,1),f.m(s.parentNode,s));let p=i;i=h(d),i===p?_[i].p(d,u):(X(),v(_[p],1,1,()=>{_[p]=null}),Z(),o=_[i],o?o.p(d,u):(o=_[i]=m[i](d),o.c()),b(o,1),o.m(n.parentNode,n))},i(d){c||(b(f),b(o),c=!0)},o(d){v(f),v(o),c=!1},d(d){d&&($(e),$(l),$(s),$(n)),f&&f.d(d),_[i].d(d)}}}function et(a){let e,r=k("workflows.archival-link-preface")+"",t,l,s=k("workflows.archival-link")+"",i,o,n,c,f;return c=new We({props:{content:`temporal operator namespace update --visibility-archival-state enabled ${a[4]}`,language:"text",inline:!0,copyIconTitle:k("common.copy-icon-title"),copySuccessIconTitle:k("common.copy-success-icon-title")}}),{c(){e=C("p"),t=H(r),l=C("a"),i=H(s),o=H(":"),n=P(),N(c.$$.fragment),this.h()},l(m){e=I(m,"P",{});var _=B(e);t=z(_,r),l=I(_,"A",{class:!0,href:!0,target:!0,rel:!0});var h=B(l);i=z(h,s),h.forEach($),o=z(_,":"),_.forEach($),n=q(m),A(c.$$.fragment,m),this.h()},h(){y(l,"class","text-blue-700 underline"),y(l,"href","https://docs.temporal.io/clusters#archival"),y(l,"target","_blank"),y(l,"rel","noreferrer")},m(m,_){w(m,e,_),E(e,t),E(e,l),E(l,i),E(e,o),w(m,n,_),F(c,m,_),f=!0},p(m,_){const h={};_&16&&(h.content=`temporal operator namespace update --visibility-archival-state enabled ${m[4]}`),c.$set(h)},i(m){f||(b(c.$$.fragment,m),f=!0)},o(m){v(c.$$.fragment,m),f=!1},d(m){m&&($(e),$(n)),W(c,m)}}}function tt(a){let e,r;return e=new Il({}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function Al(a){let e,r;return e=new At({props:{title:k("workflows.workflow-empty-state-title"),content:k("workflows.archival-empty-state-description")}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},p:K,i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function Fl(a){let e,r;return e=new Ft({props:{items:a[3],"aria-label":k("workflows.archived-workflows"),pageSizeSelectLabel:k("common.per-page"),previousButtonLabel:k("common.previous"),nextButtonLabel:k("common.next"),$$slots:{default:[Dl,({visibleItems:t})=>({7:t}),({visibleItems:t})=>t?128:0]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},p(t,l){const s={};l&8&&(s.items=t[3]),l&2192&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function lt(a){let e,r;return e=new Jt({props:{workflow:a[8],namespace:a[4]}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},p(t,l){const s={};l&128&&(s.workflow=t[8]),l&16&&(s.namespace=t[4]),e.$set(s)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function Wl(a){let e,r,t=ie(a[7]),l=[];for(let i=0;i<t.length;i+=1)l[i]=lt(xe(a,t,i));const s=i=>v(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=U()},l(i){for(let o=0;o<l.length;o+=1)l[o].l(i);e=U()},m(i,o){for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(i,o);w(i,e,o),r=!0},p(i,o){if(o&144){t=ie(i[7]);let n;for(n=0;n<t.length;n+=1){const c=xe(i,t,n);l[n]?(l[n].p(c,o),b(l[n],1)):(l[n]=lt(c),l[n].c(),b(l[n],1),l[n].m(e.parentNode,e))}for(X(),n=t.length;n<l.length;n+=1)s(n);Z()}},i(i){if(!r){for(let o=0;o<t.length;o+=1)b(l[o]);r=!0}},o(i){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)v(l[o]);r=!1},d(i){i&&$(e),nt(l,i)}}}function Dl(a){let e,r;return e=new rl({props:{$$slots:{default:[Wl]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){F(e,t,l),r=!0},p(t,l){const s={};l&2192&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}function Ll(a){let e,r,t,l,s,i;e=new gt({props:{title:`${k("workflows.archival")} | ${a[4]}`,url:a[5].url.href}});const o=[Nl,ql,Pl],n=[];function c(f,m){return f[2]&&f[1]?0:f[2]?1:2}return t=c(a),l=n[t]=o[t](a),{c(){N(e.$$.fragment),r=P(),l.c(),s=U()},l(f){A(e.$$.fragment,f),r=q(f),l.l(f),s=U()},m(f,m){F(e,f,m),w(f,r,m),n[t].m(f,m),w(f,s,m),i=!0},p(f,[m]){const _={};m&16&&(_.title=`${k("workflows.archival")} | ${f[4]}`),m&32&&(_.url=f[5].url.href),e.$set(_);let h=t;t=c(f),t===h?n[t].p(f,m):(X(),v(n[h],1,1,()=>{n[h]=null}),Z(),l=n[t],l?l.p(f,m):(l=n[t]=o[t](f),l.c()),b(l,1),l.m(s.parentNode,s))},i(f){i||(b(e.$$.fragment,f),b(l),i=!0)},o(f){v(e.$$.fragment,f),v(l),i=!1},d(f){f&&($(r),$(s)),W(e,f),n[t].d(f)}}}function Hl(a,e,r){let t,l,s,i,o,n;ne(a,Ie,f=>r(5,n=f));let{data:c}=e;return a.$$set=f=>{"data"in f&&r(6,c=f.data)},a.$$.update=()=>{a.$$.dirty&64&&r(4,{namespace:{namespaceInfo:{name:t}},workflows:l,archivalEnabled:s,visibilityArchivalEnabled:i,archivalQueryingNotSupported:o}=c,t,(r(3,l),r(6,c)),(r(2,s),r(6,c)),(r(1,i),r(6,c)),(r(0,o),r(6,c)))},[o,i,s,l,t,n,c]}class mr extends ue{constructor(e){super(),ce(this,e,Hl,Ll,fe,{data:6})}}export{mr as component,cr as universal};
