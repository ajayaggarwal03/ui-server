import{S as ae,i as oe,s as se,J as Ee,l as y,m as T,n as A,h,b as P,K as Ie,L as ye,M as Te,f as p,ag as Ye,ah as et,t as g,ai as tt,x as b,a as M,e as He,y as v,c as R,z as E,g as _e,d as we,C as I,O as q,r as U,u as O,p as w,N as _,F as ie,a0 as nt,a8 as rt,a9 as at,a4 as K,E as ot,W as Le,H as st,T as lt,I as ft,v as it,o as Ge,aq as We,ak as Ve}from"../../../../../../chunks/index-0a89fd56.js";import{p as Xe}from"../../../../../../chunks/stores-cc75c44f.js";import{r as re,w as Ze,l as ct}from"../../../../../../chunks/workflow-run-003d9f43.js";import{e as ut,t as Be,c as mt}from"../../../../../../chunks/events-ec544b69.js";import{f as $e}from"../../../../../../chunks/index-f35a5be1.js";import{I as pt}from"../../../../../../chunks/icon-547f7300.js";import{a as ge,e as ht,b as Ne}from"../../../../../../chunks/event-view-393ad965.js";import{t as dt,w as gt}from"../../../../../../chunks/terminate-service-932fcdd3.js";import{g as ue,h as me,i as pe,j as he,k as de,l as je}from"../../../../../../chunks/route-for-369a155d.js";import{w as _t,c as wt,t as $t}from"../../../../../../chunks/workflow-service-97d19ce2.js";import{c as kt,W as bt}from"../../../../../../chunks/core-user-bf063500.js";import{s as vt}from"../../../../../../chunks/settings-b2c21ef9.js";import{M as Qe}from"../../../../../../chunks/modal-71d77350.js";import{T as xe}from"../../../../../../chunks/tooltip-3d438461.js";import{S as Et}from"../../../../../../chunks/split-button-c0f86599.js";import{M as It}from"../../../../../../chunks/menu-item-77ab93d1.js";import{t as ve}from"../../../../../../chunks/toaster-e2f6943e.js";import{I as yt}from"../../../../../../chunks/input-25d2def7.js";import{F as Tt}from"../../../../../../chunks/feature-guard-eb4f9485.js";import{B as Wt}from"../../../../../../chunks/button-68ea4e9d.js";import{T as ce}from"../../../../../../chunks/tab-d8def6a3.js";import{A as At}from"../../../../../../chunks/alert-d9741adf.js";import{L as Ct}from"../../../../../../chunks/loading-8c11a580.js";import"../../../../../../chunks/index-ecd41ae6.js";import"../../../../../../chunks/with-loading-f07bedaf.js";import"../../../../../../chunks/pollers-service-66684067.js";import"../../../../../../chunks/route-for-api-d725efb6.js";import"../../../../../../chunks/auth-user-b924a14a.js";import"../../../../../../chunks/persist-store-07cc3f48.js";import"../../../../../../chunks/parse-with-big-int-561ccb8b.js";import"../../../../../../chunks/notifications-72686422.js";import"../../../../../../chunks/is-network-error-5f9e2367.js";import"../../../../../../chunks/is-http-fad8c7a8.js";import"../../../../../../chunks/get-codec-2ae1f1d2.js";import"../../../../../../chunks/data-converter-config-141aa000.js";import"../../../../../../chunks/atob-ffa71835.js";import"../../../../../../chunks/events-service-e3a1e60f.js";import"../../../../../../chunks/paginated-f114a424.js";import"../../../../../../chunks/index-296b4109.js";import"../../../../../../chunks/format-date-c1755997.js";import"../../../../../../chunks/format-time-d031c2bc.js";import"../../../../../../chunks/is-44021919.js";import"../../../../../../chunks/index-7ac5c549.js";import"../../../../../../chunks/has-c7a26a56.js";import"../../../../../../chunks/get-event-categorization-2cfb578f.js";import"../../../../../../chunks/simplify-attributes-055c76f2.js";import"../../../../../../chunks/version-check-ac887ec2.js";import"../../../../../../chunks/v4-f2cd1a04.js";import"../../../../../../chunks/copy-to-clipboard-c13b766f.js";import"../../../../../../chunks/menu-efd189a5.js";import"../../../../../../chunks/icon-button-c9f64fdf.js";import"../../../../../../chunks/badge-111dc3a0.js";function Pt(a){let e,n,t,o;const r=a[1].default,s=Ee(r,a,a[0],null);return{c(){e=y("div"),s&&s.c()},l(l){e=T(l,"DIV",{});var f=A(e);s&&s.l(f),f.forEach(h)},m(l,f){P(l,e,f),s&&s.m(e,null),o=!0},p(l,[f]){s&&s.p&&(!o||f&1)&&Ie(s,r,l,l[0],o?Te(r,l[0],f,null):ye(l[0]),null)},i(l){o||(p(s,l),Ye(()=>{t&&t.end(1),n=et(e,$e,{y:-50,duration:150,delay:50}),n.start()}),o=!0)},o(l){g(s,l),n&&n.invalidate(),t=tt(e,$e,{y:-50,duration:150}),o=!1},d(l){l&&h(e),s&&s.d(l),l&&t&&t.end()}}}function St(a,e,n){let{$$slots:t={},$$scope:o}=e;return a.$$set=r=>{"$$scope"in r&&n(0,o=r.$$scope)},[o,t]}class Dt extends ae{constructor(e){super(),oe(this,e,St,Pt,se,{})}}function Mt(a){let e;return{c(){e=U("Terminate")},l(n){e=O(n,"Terminate")},m(n,t){P(n,e,t)},d(n){n&&h(e)}}}function Rt(a){let e,n;return e=new It({props:{destructive:!0,disabled:a[6],dataCy:"terminate-button",$$slots:{default:[Mt]},$$scope:{ctx:a}}}),e.$on("click",a[7]),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,o){E(e,t,o),n=!0},p(t,o){const r={};o&64&&(r.disabled=t[6]),o&2097152&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function qt(a){let e,n;return e=new Et({props:{primaryActionDisabled:a[0],disabled:a[6],label:"Request Cancellation",id:"workflow-actions",$$slots:{default:[Rt]},$$scope:{ctx:a}}}),e.$on("click",a[9]),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,o){E(e,t,o),n=!0},p(t,o){const r={};o&1&&(r.primaryActionDisabled=t[0]),o&64&&(r.disabled=t[6]),o&2097216&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Ft(a){let e;return{c(){e=U("Terminate")},l(n){e=O(n,"Terminate")},m(n,t){P(n,e,t)},d(n){n&&h(e)}}}function Ht(a){let e,n;return e=new Wt({props:{slot:"fallback",variant:"destructive",disabled:a[6],dataCy:"terminate-button",$$slots:{default:[Ft]},$$scope:{ctx:a}}}),e.$on("click",a[7]),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,o){E(e,t,o),n=!0},p(t,o){const r={};o&64&&(r.disabled=t[6]),o&2097152&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Lt(a){let e,n;return e=new Tt({props:{enabled:a[1],$$slots:{fallback:[Ht],default:[qt]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,o){E(e,t,o),n=!0},p(t,o){const r={};o&2&&(r.enabled=t[1]),o&2097217&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Ue(a){let e,n,t,o;return e=new Qe({props:{open:a[4],loading:a[5],confirmType:"destructive",$$slots:{content:[Bt],title:[Vt]},$$scope:{ctx:a}}}),e.$on("cancelModal",a[10]),e.$on("confirmModal",a[12]),t=new Qe({props:{open:a[3],confirmText:"Terminate",confirmType:"destructive",$$slots:{content:[jt],title:[Nt]},$$scope:{ctx:a}}}),t.$on("cancelModal",a[8]),t.$on("confirmModal",a[11]),{c(){b(e.$$.fragment),n=M(),b(t.$$.fragment)},l(r){v(e.$$.fragment,r),n=R(r),v(t.$$.fragment,r)},m(r,s){E(e,r,s),P(r,n,s),E(t,r,s),o=!0},p(r,s){const l={};s&16&&(l.open=r[4]),s&32&&(l.loading=r[5]),s&2097152&&(l.$$scope={dirty:s,ctx:r}),e.$set(l);const f={};s&8&&(f.open=r[3]),s&2097156&&(f.$$scope={dirty:s,ctx:r}),t.$set(f)},i(r){o||(p(e.$$.fragment,r),p(t.$$.fragment,r),o=!0)},o(r){g(e.$$.fragment,r),g(t.$$.fragment,r),o=!1},d(r){I(e,r),r&&h(n),I(t,r)}}}function Vt(a){let e,n;return{c(){e=y("h3"),n=U("Cancel Workflow"),this.h()},l(t){e=T(t,"H3",{slot:!0});var o=A(e);n=O(o,"Cancel Workflow"),o.forEach(h),this.h()},h(){w(e,"slot","title")},m(t,o){P(t,e,o),_(e,n)},p:ie,d(t){t&&h(e)}}}function Bt(a){let e,n;return{c(){e=y("p"),n=U(`Are you sure you want to cancel this workflow? This action cannot be
        undone.`)},l(t){e=T(t,"P",{});var o=A(e);n=O(o,`Are you sure you want to cancel this workflow? This action cannot be
        undone.`),o.forEach(h)},m(t,o){P(t,e,o),_(e,n)},p:ie,d(t){t&&h(e)}}}function Nt(a){let e,n;return{c(){e=y("h3"),n=U("Terminate Workflow"),this.h()},l(t){e=T(t,"H3",{slot:!0});var o=A(e);n=O(o,"Terminate Workflow"),o.forEach(h),this.h()},h(){w(e,"slot","title")},m(t,o){P(t,e,o),_(e,n)},p:ie,d(t){t&&h(e)}}}function jt(a){let e,n,t,o,r,s,l;function f(m){a[17](m)}let d={id:"workflow-termination-reason",class:"mt-4",placeholder:"Enter a reason"};return a[2]!==void 0&&(d.value=a[2]),r=new yt({props:d}),nt.push(()=>rt(r,"value",f)),{c(){e=y("div"),n=y("p"),t=U(`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),o=M(),b(r.$$.fragment),this.h()},l(m){e=T(m,"DIV",{slot:!0});var u=A(e);n=T(u,"P",{});var S=A(n);t=O(S,`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),S.forEach(h),o=R(u),v(r.$$.fragment,u),u.forEach(h),this.h()},h(){w(e,"slot","content")},m(m,u){P(m,e,u),_(e,n),_(n,t),_(e,o),E(r,e,null),l=!0},p(m,u){const S={};!s&&u&4&&(s=!0,S.value=m[2],at(()=>s=!1)),r.$set(S)},i(m){l||(p(r.$$.fragment,m),l=!0)},o(m){g(r.$$.fragment,m),l=!1},d(m){m&&h(e),I(r)}}}function Qt(a){let e,n,t,o;e=new xe({props:{bottomLeft:!0,hide:!a[6],width:200,text:"You do not have permission to edit this workflow. Contact your admin for assistance.",$$slots:{default:[Lt]},$$scope:{ctx:a}}});let r=!a[6]&&Ue(a);return{c(){b(e.$$.fragment),n=M(),r&&r.c(),t=He()},l(s){v(e.$$.fragment,s),n=R(s),r&&r.l(s),t=He()},m(s,l){E(e,s,l),P(s,n,l),r&&r.m(s,l),P(s,t,l),o=!0},p(s,[l]){const f={};l&64&&(f.hide=!s[6]),l&2097219&&(f.$$scope={dirty:l,ctx:s}),e.$set(f),s[6]?r&&(_e(),g(r,1,1,()=>{r=null}),we()):r?(r.p(s,l),l&64&&p(r,1)):(r=Ue(s),r.c(),p(r,1),r.m(t.parentNode,t))},i(s){o||(p(e.$$.fragment,s),p(r),o=!0)},o(s){g(e.$$.fragment,s),g(r),o=!1},d(s){I(e,s),s&&h(n),r&&r.d(s),s&&h(t)}}}function Ut(a,e,n){let t,o,r;q(a,re,c=>n(18,r=c));let{workflow:s}=e,{namespace:l}=e,{cancelInProgress:f}=e,{cancelEnabled:d}=e,m="",u=!1,S=!1,D=!1;const V=()=>n(3,u=!0),j=()=>n(3,u=!1),F=()=>n(4,S=!0),Y=()=>n(4,S=!1),z=async()=>{n(3,u=!1),n(2,m=""),K(re,r=Date.now(),r),await ot(),ve.push({id:"workflow-termination-success-toast",message:"Workflow terminated.",variant:"success",yPosition:"top"})},$=()=>{n(3,u=!1),n(2,m=""),ve.push({message:"Cannot terminate workflow.",variant:"error"})},B=()=>{!s.canBeTerminated||dt({workflow:s,namespace:l,reason:m}).then(z).catch($)},ee=async()=>{n(5,D=!0);try{await wt({namespace:l,workflowId:s.id,runId:s.runId}),n(5,D=!1),n(4,S=!1),K(re,r=Date.now(),r)}catch{ve.push({yPosition:"top",variant:"error",message:"Unable to cancel workflow."})}};let H=kt();q(a,H,c=>n(16,o=c));function te(c){m=c,n(2,m)}return a.$$set=c=>{"workflow"in c&&n(14,s=c.workflow),"namespace"in c&&n(15,l=c.namespace),"cancelInProgress"in c&&n(0,f=c.cancelInProgress),"cancelEnabled"in c&&n(1,d=c.cancelEnabled)},a.$$.update=()=>{a.$$.dirty&98304&&n(6,t=o.namespaceWriteDisabled(l)||!_t(vt))},[f,d,m,u,S,D,t,V,j,F,Y,B,ee,H,s,l,o,te]}class Ot extends ae{constructor(e){super(),oe(this,e,Ut,Qt,se,{workflow:14,namespace:15,cancelInProgress:0,cancelEnabled:1})}}const Oe=a=>{const e=a==null?void 0:a.indexOf("?");return e>-1?a.slice(0,e):a},Q=(a,e,n=!1)=>{const t=Oe(a).split("/"),o=Oe(e).split("/");if(n&&t.length!==o.length)return!1;for(let r=0;r<t.length;r++){const s=t[r],l=o[r];if(s!==l)return!1}return!0};function zt(a){let e,n,t,o,r,s;return{c(){e=y("label"),n=y("input"),t=M(),o=y("span"),this.h()},l(l){e=T(l,"LABEL",{for:!0,class:!0});var f=A(e);n=T(f,"INPUT",{id:!0,type:!0,class:!0}),t=R(f),o=T(f,"SPAN",{class:!0}),A(o).forEach(h),f.forEach(h),this.h()},h(){w(n,"id",a[1]),w(n,"type","checkbox"),w(n,"class","hidden svelte-1s95c4s"),w(o,"class","slider svelte-1s95c4s"),w(e,"for",a[1]),w(e,"class","switch svelte-1s95c4s")},m(l,f){P(l,e,f),_(e,n),n.checked=a[0],_(e,t),_(e,o),r||(s=[Le(n,"change",a[2]),Le(n,"change",a[3])],r=!0)},p(l,[f]){f&2&&w(n,"id",l[1]),f&1&&(n.checked=l[0]),f&2&&w(e,"for",l[1])},i:ie,o:ie,d(l){l&&h(e),r=!1,st(s)}}}function Jt(a,e,n){let{checked:t=!1}=e,{id:o}=e;function r(l){lt.call(this,a,l)}function s(){t=this.checked,n(0,t)}return a.$$set=l=>{"checked"in l&&n(0,t=l.checked),"id"in l&&n(1,o=l.id)},[t,o,r,s]}class Kt extends ae{constructor(e){super(),oe(this,e,Jt,zt,se,{checked:0,id:1})}}function Yt(a){let e,n;return e=new Kt({props:{id:"autorefresh",checked:a[1]}}),e.$on("change",function(){ft(a[0])&&a[0].apply(this,arguments)}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,o){E(e,t,o),n=!0},p(t,o){a=t;const r={};o&2&&(r.checked=a[1]),e.$set(r)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Gt(a){let e,n,t,o;return t=new xe({props:{bottomLeft:!0,text:"15 second page refresh",$$slots:{default:[Yt]},$$scope:{ctx:a}}}),{c(){e=y("label"),n=U(`Auto refresh
  `),b(t.$$.fragment),this.h()},l(r){e=T(r,"LABEL",{for:!0,class:!0});var s=A(e);n=O(s,`Auto refresh
  `),v(t.$$.fragment,s),s.forEach(h),this.h()},h(){w(e,"for","autorefresh"),w(e,"class","flex items-center gap-4 font-secondary text-sm")},m(r,s){P(r,e,s),_(e,n),E(t,e,null),o=!0},p(r,[s]){const l={};s&11&&(l.$$scope={dirty:s,ctx:r}),t.$set(l)},i(r){o||(p(t.$$.fragment,r),o=!0)},o(r){g(t.$$.fragment,r),o=!1},d(r){r&&h(e),I(t)}}}function Xt(a,e,n){let t,o;q(a,ge,s=>n(2,o=s));let{onChange:r}=e;return a.$$set=s=>{"onChange"in s&&n(0,r=s.onChange)},a.$$.update=()=>{a.$$.dirty&4&&n(1,t=o==="on")},[r,t,o]}class Zt extends ae{constructor(e){super(),oe(this,e,Xt,Gt,se,{onChange:0})}}function ze(a){let e,n,t,o,r;return n=new Zt({props:{onChange:a[11]}}),o=new Ot({props:{cancelEnabled:a[3],cancelInProgress:a[5],workflow:a[1],namespace:a[0]}}),{c(){e=y("div"),b(n.$$.fragment),t=M(),b(o.$$.fragment),this.h()},l(s){e=T(s,"DIV",{class:!0});var l=A(e);v(n.$$.fragment,l),t=R(l),v(o.$$.fragment,l),l.forEach(h),this.h()},h(){w(e,"class","flex flex-col items-center justify-center gap-4 whitespace-nowrap sm:flex-row lg:justify-end")},m(s,l){P(s,e,l),E(n,e,null),_(e,t),E(o,e,null),r=!0},p(s,l){const f={};l&8&&(f.cancelEnabled=s[3]),l&32&&(f.cancelInProgress=s[5]),l&2&&(f.workflow=s[1]),l&1&&(f.namespace=s[0]),o.$set(f)},i(s){r||(p(n.$$.fragment,s),p(o.$$.fragment,s),r=!0)},o(s){g(n.$$.fragment,s),g(o.$$.fragment,s),r=!1},d(s){s&&h(e),I(n),I(o)}}}function Je(a){let e,n,t,o;return n=new At({props:{icon:"info",intent:"info",title:"Cancel Request Sent",$$slots:{default:[xt]},$$scope:{ctx:a}}}),{c(){e=y("div"),b(n.$$.fragment),this.h()},l(r){e=T(r,"DIV",{class:!0});var s=A(e);v(n.$$.fragment,s),s.forEach(h),this.h()},h(){w(e,"class","-mt-4 mb-4")},m(r,s){P(r,e,s),E(n,e,null),o=!0},i(r){o||(p(n.$$.fragment,r),Ye(()=>{t||(t=Ve(e,$e,{duration:200,delay:100},!0)),t.run(1)}),o=!0)},o(r){g(n.$$.fragment,r),t||(t=Ve(e,$e,{duration:200,delay:100},!1)),t.run(0),o=!1},d(r){r&&h(e),I(n),r&&t&&t.end()}}}function xt(a){let e;return{c(){e=U(`The request to cancel this Workflow Execution has been sent. If the
          Workflow uses the cancellation API, it'll cancel at the next available
          opportunity.`)},l(n){e=O(n,`The request to cancel this Workflow Execution has been sent. If the
          Workflow uses the cancellation API, it'll cancel at the next available
          opportunity.`)},m(n,t){P(n,e,t)},d(n){n&&h(e)}}}function en(a){var Ae,Ce,Pe,Se,De;let e,n,t,o,r,s,l,f,d,m,u,S,D,V=a[1].id+"",j,F,Y,z,$,B,ee,H,te,c,ke,G,be,X,le;r=new pt({props:{name:"chevron-left",class:"inline"}}),u=new bt({props:{status:(Ae=a[1])==null?void 0:Ae.status}});let W=a[4]&&ze(a),C=a[5]&&Je(a);return B=new ce({props:{label:"History",href:ue({view:a[7],...a[6]}),amount:(Ce=a[1])==null?void 0:Ce.historyEvents,dataCy:"history-tab",active:Q(a[8].url.pathname,ue({view:a[7],...a[6]}))}}),H=new ce({props:{label:"Workers",href:me(a[6]),amount:(Se=(Pe=a[2])==null?void 0:Pe.pollers)==null?void 0:Se.length,dataCy:"workers-tab",active:Q(a[8].url.pathname,me(a[6]))}}),c=new ce({props:{label:"Pending Activities",href:pe(a[6]),amount:(De=a[1].pendingActivities)==null?void 0:De.length,dataCy:"pending-activities-tab",active:Q(a[8].url.pathname,pe(a[6]))}}),G=new ce({props:{label:"Stack Trace",href:he(a[6]),dataCy:"stack-trace-tab",active:Q(a[8].url.pathname,he(a[6]))}}),X=new ce({props:{label:"Queries",href:de(a[6]),dataCy:"queries-tab",active:Q(a[8].url.pathname,de(a[6]))}}),{c(){e=y("header"),n=y("main"),t=y("div"),o=y("a"),b(r.$$.fragment),s=U("Back to Workflows"),f=M(),d=y("div"),m=y("div"),b(u.$$.fragment),S=M(),D=y("h1"),j=U(V),F=M(),W&&W.c(),Y=M(),C&&C.c(),z=M(),$=y("nav"),b(B.$$.fragment),ee=M(),b(H.$$.fragment),te=M(),b(c.$$.fragment),ke=M(),b(G.$$.fragment),be=M(),b(X.$$.fragment),this.h()},l(i){e=T(i,"HEADER",{class:!0});var k=A(e);n=T(k,"MAIN",{class:!0});var N=A(n);t=T(N,"DIV",{class:!0});var ne=A(t);o=T(ne,"A",{href:!0,"data-cy":!0,class:!0});var Z=A(o);v(r.$$.fragment,Z),s=O(Z,"Back to Workflows"),Z.forEach(h),ne.forEach(h),f=R(N),d=T(N,"DIV",{class:!0});var J=A(d);m=T(J,"DIV",{class:!0});var x=A(m);v(u.$$.fragment,x),S=R(x),D=T(x,"H1",{"data-cy":!0,class:!0});var fe=A(D);j=O(fe,V),fe.forEach(h),x.forEach(h),F=R(J),W&&W.l(J),J.forEach(h),Y=R(N),C&&C.l(N),z=R(N),$=T(N,"NAV",{class:!0});var L=A($);v(B.$$.fragment,L),ee=R(L),v(H.$$.fragment,L),te=R(L),v(c.$$.fragment,L),ke=R(L),v(G.$$.fragment,L),be=R(L),v(X.$$.fragment,L),L.forEach(h),N.forEach(h),k.forEach(h),this.h()},h(){w(o,"href",l=je({namespace:a[0],query:a[10],search:a[9]})),w(o,"data-cy","back-to-workflows"),w(o,"class","back-to-workflows svelte-st9g8m"),w(t,"class","-mt-3 -ml-2 mb-4 block"),w(D,"data-cy","workflow-id-heading"),w(D,"class","select-all overflow-hidden text-ellipsis text-2xl font-medium"),w(m,"class","flex w-full items-center justify-start gap-4 overflow-hidden whitespace-nowrap lg:w-auto"),w(d,"class","mb-8 flex w-full flex-col items-center justify-between gap-4 lg:flex-row"),w($,"class","flex flex-wrap gap-6"),w(n,"class","relative flex flex-col gap-1"),w(e,"class","mb-4 flex flex-col gap-4")},m(i,k){P(i,e,k),_(e,n),_(n,t),_(t,o),E(r,o,null),_(o,s),_(n,f),_(n,d),_(d,m),E(u,m,null),_(m,S),_(m,D),_(D,j),_(d,F),W&&W.m(d,null),_(n,Y),C&&C.m(n,null),_(n,z),_(n,$),E(B,$,null),_($,ee),E(H,$,null),_($,te),E(c,$,null),_($,ke),E(G,$,null),_($,be),E(X,$,null),le=!0},p(i,[k]){var L,Me,Re,qe,Fe;(!le||k&1&&l!==(l=je({namespace:i[0],query:i[10],search:i[9]})))&&w(o,"href",l);const N={};k&2&&(N.status=(L=i[1])==null?void 0:L.status),u.$set(N),(!le||k&2)&&V!==(V=i[1].id+"")&&it(j,V),i[4]?W?(W.p(i,k),k&16&&p(W,1)):(W=ze(i),W.c(),p(W,1),W.m(d,null)):W&&(_e(),g(W,1,1,()=>{W=null}),we()),i[5]?C?k&32&&p(C,1):(C=Je(i),C.c(),p(C,1),C.m(n,z)):C&&(_e(),g(C,1,1,()=>{C=null}),we());const ne={};k&192&&(ne.href=ue({view:i[7],...i[6]})),k&2&&(ne.amount=(Me=i[1])==null?void 0:Me.historyEvents),k&448&&(ne.active=Q(i[8].url.pathname,ue({view:i[7],...i[6]}))),B.$set(ne);const Z={};k&64&&(Z.href=me(i[6])),k&4&&(Z.amount=(qe=(Re=i[2])==null?void 0:Re.pollers)==null?void 0:qe.length),k&320&&(Z.active=Q(i[8].url.pathname,me(i[6]))),H.$set(Z);const J={};k&64&&(J.href=pe(i[6])),k&2&&(J.amount=(Fe=i[1].pendingActivities)==null?void 0:Fe.length),k&320&&(J.active=Q(i[8].url.pathname,pe(i[6]))),c.$set(J);const x={};k&64&&(x.href=he(i[6])),k&320&&(x.active=Q(i[8].url.pathname,he(i[6]))),G.$set(x);const fe={};k&64&&(fe.href=de(i[6])),k&320&&(fe.active=Q(i[8].url.pathname,de(i[6]))),X.$set(fe)},i(i){le||(p(r.$$.fragment,i),p(u.$$.fragment,i),p(W),p(C),p(B.$$.fragment,i),p(H.$$.fragment,i),p(c.$$.fragment,i),p(G.$$.fragment,i),p(X.$$.fragment,i),le=!0)},o(i){g(r.$$.fragment,i),g(u.$$.fragment,i),g(W),g(C),g(B.$$.fragment,i),g(H.$$.fragment,i),g(c.$$.fragment,i),g(G.$$.fragment,i),g(X.$$.fragment,i),le=!1},d(i){i&&h(e),I(r),I(u),W&&W.d(),C&&C.d(),I(B),I(H),I(c),I(G),I(X)}}}const Ke=15e3;function tn(a,e,n){let t,o,r,s,l,f,d,m,u,S;q(a,ut,c=>n(15,s=c)),q(a,Ze,c=>n(16,l=c)),q(a,re,c=>n(17,f=c)),q(a,ge,c=>n(18,d=c)),q(a,gt,c=>n(19,m=c)),q(a,ht,c=>n(7,u=c)),q(a,Xe,c=>n(8,S=c));var D,V;let{namespace:j}=e,{workflow:F}=e,{workers:Y}=e,{cancelEnabled:z=!0}=e,$;const{parameters:B,searchType:ee}=m,H=$t(B);Ge(()=>{o&&d==="on"&&(clearInterval($),n(14,$=setInterval(()=>K(re,f=Date.now(),f),Ke)))});const te=()=>{d==="on"?(K(ge,d="off",d),clearInterval($)):(K(re,f=Date.now(),f),K(ge,d="on",d),clearInterval($),n(14,$=setInterval(()=>K(re,f=Date.now(),f),Ke)))};return We(()=>{clearInterval($)}),a.$$set=c=>{"namespace"in c&&n(0,j=c.namespace),"workflow"in c&&n(1,F=c.workflow),"workers"in c&&n(2,Y=c.workers),"cancelEnabled"in c&&n(3,z=c.cancelEnabled)},a.$$.update=()=>{a.$$.dirty&3&&n(6,t={namespace:j,workflow:F==null?void 0:F.id,run:F==null?void 0:F.runId}),a.$$.dirty&69632&&n(4,o=n(12,D=l==null?void 0:l.workflow)===null||D===void 0?void 0:D.isRunning),a.$$.dirty&16400&&(o||clearInterval($)),a.$$.dirty&106496&&n(5,r=(n(13,V=l==null?void 0:l.workflow)===null||V===void 0?void 0:V.status)==="Running"&&s.events.some(c=>(c==null?void 0:c.eventType)==="WorkflowExecutionCancelRequested"))},[j,F,Y,z,o,r,t,u,S,ee,H,te,D,V,$,s,l]}class nn extends ae{constructor(e){super(),oe(this,e,tn,en,se,{namespace:0,workflow:1,workers:2,cancelEnabled:3})}}function rn(a){let e,n;return e=new Dt({props:{$$slots:{default:[on]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,o){E(e,t,o),n=!0},p(t,o){const r={};o&43&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function an(a){let e,n;return e=new Ct({}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,o){E(e,t,o),n=!0},p:ie,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function on(a){let e,n,t;e=new nn({props:{namespace:a[1].params.namespace,workflow:a[3].workflow,workers:a[3].workers,cancelEnabled:a[0]}});const o=a[4].default,r=Ee(o,a,a[5],null);return{c(){b(e.$$.fragment),n=M(),r&&r.c()},l(s){v(e.$$.fragment,s),n=R(s),r&&r.l(s)},m(s,l){E(e,s,l),P(s,n,l),r&&r.m(s,l),t=!0},p(s,l){const f={};l&2&&(f.namespace=s[1].params.namespace),l&8&&(f.workflow=s[3].workflow),l&8&&(f.workers=s[3].workers),l&1&&(f.cancelEnabled=s[0]),e.$set(f),r&&r.p&&(!t||l&32)&&Ie(r,o,s,s[5],t?Te(o,s[5],l,null):ye(s[5]),null)},i(s){t||(p(e.$$.fragment,s),p(r,s),t=!0)},o(s){g(e.$$.fragment,s),g(r,s),t=!1},d(s){I(e,s),s&&h(n),r&&r.d(s)}}}function sn(a){let e,n,t,o;const r=[an,rn],s=[];function l(f,d){return f[2]?0:1}return n=l(a),t=s[n]=r[n](a),{c(){e=y("main"),t.c(),this.h()},l(f){e=T(f,"MAIN",{class:!0});var d=A(e);t.l(d),d.forEach(h),this.h()},h(){w(e,"class","flex h-full flex-col gap-6")},m(f,d){P(f,e,d),s[n].m(e,null),o=!0},p(f,[d]){let m=n;n=l(f),n===m?s[n].p(f,d):(_e(),g(s[m],1,1,()=>{s[m]=null}),we(),t=s[n],t?t.p(f,d):(t=s[n]=r[n](f),t.c()),p(t,1),t.m(e,null))},i(f){o||(p(t),o=!0)},o(f){g(t),o=!1},d(f){f&&h(e),s[n].d()}}}function ln(a,e,n){let t,o,r,s,l;q(a,Be,u=>n(6,t=u)),q(a,Ne,u=>n(7,o=u)),q(a,Xe,u=>n(1,r=u)),q(a,ct,u=>n(2,s=u)),q(a,Ze,u=>n(3,l=u));let{$$slots:f={},$$scope:d}=e,{cancelEnabled:m=!0}=e;return Ge(()=>{const u=r.url.searchParams.get("sort");u&&K(Ne,o=u,o)}),We(()=>{K(Be,t=null,t)}),a.$$set=u=>{"cancelEnabled"in u&&n(0,m=u.cancelEnabled),"$$scope"in u&&n(5,d=u.$$scope)},[m,r,s,l,f,d]}class fn extends ae{constructor(e){super(),oe(this,e,ln,sn,se,{cancelEnabled:0})}}function cn(a){let e;const n=a[0].default,t=Ee(n,a,a[1],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,r){t&&t.m(o,r),e=!0},p(o,r){t&&t.p&&(!e||r&2)&&Ie(t,n,o,o[1],e?Te(n,o[1],r,null):ye(o[1]),null)},i(o){e||(p(t,o),e=!0)},o(o){g(t,o),e=!1},d(o){t&&t.d(o)}}}function un(a){let e,n;return e=new fn({props:{$$slots:{default:[cn]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,o){E(e,t,o),n=!0},p(t,[o]){const r={};o&2&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function mn(a,e,n){let{$$slots:t={},$$scope:o}=e;return We(()=>{mt()}),a.$$set=r=>{"$$scope"in r&&n(1,o=r.$$scope)},[t,o]}class ur extends ae{constructor(e){super(),oe(this,e,mn,un,se,{})}}export{ur as default};
