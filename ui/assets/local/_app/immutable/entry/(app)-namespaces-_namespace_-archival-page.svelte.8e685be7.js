import{S as U,b as H,a as V,m as C,w as S,c as A,C as w,p as q,q as I,x as F,k as _,d as N,D as y,u as v,f as b,L as k,E,a8 as G,T as O,V as ce,y as me,j as d,g,F as T,r as pe,K as B,P as _e,z as j,h as D,ad as fe,A as $e,Y as he,Z as de,e as W,a7 as ue,a1 as ge,a2 as be,n as z}from"../chunks/index.c37b9eda.js";import{t as R}from"../chunks/time-format.48c703bd.js";import{p as K}from"../chunks/stores.4790ebc5.js";import{j as ve,S as ke,W as we,a as ye}from"../chunks/search.14b0d41e.js";import{g as J}from"../chunks/navigation.76b8e023.js";import{s as X}from"../chunks/format-time.c75e00a4.js";import{S as Ee,a as L}from"../chunks/simple-select.222a84ab.js";import{u as Te,F as x,P as Pe}from"../chunks/pagination.146d28e3.js";import{I as Se}from"../chunks/icon.f2b50ec9.js";import{E as Ae}from"../chunks/empty-state.3b731948.js";import{C as M}from"../chunks/code-block.d4eea562.js";import{P as Fe}from"../chunks/page-title.f0713954.js";import{t as Ne}from"../chunks/translate.d6afa57d.js";function Ce(i){let e,r,t,l,o,n,a,s,u,c,p;return n=new Se({props:{name:"search",class:"flex items-center text-gray-700"}}),{c(){e=C("div"),r=C("label"),t=S(i[0]),l=A(),o=C("span"),w(n.$$.fragment),a=A(),s=C("input"),this.h()},l(f){e=q(f,"DIV",{class:!0});var m=I(e);r=q(m,"LABEL",{for:!0,class:!0});var $=I(r);t=F($,i[0]),$.forEach(_),l=N(m),o=q(m,"SPAN",{class:!0});var h=I(o);y(n.$$.fragment,h),h.forEach(_),a=N(m),s=q(m,"INPUT",{type:!0,class:!0,placeholder:!0,id:!0}),m.forEach(_),this.h()},h(){v(r,"for",i[2]),v(r,"class","hidden"),v(o,"class","svelte-fxm0nn"),v(s,"type","search"),v(s,"class","block w-full focus:outline-none"),v(s,"placeholder",i[0]),v(s,"id",i[2]),v(e,"class","input-container focus-within:border-blue-700 svelte-fxm0nn")},m(f,m){b(f,e,m),k(e,r),k(r,t),k(e,l),k(e,o),E(n,o,null),k(e,a),k(e,s),G(s,i[1]),u=!0,c||(p=[O(s,"input",i[7]),O(s,"keydown",ce(i[6]))],c=!0)},p(f,[m]){(!u||m&1)&&me(t,f[0]),(!u||m&1)&&v(s,"placeholder",f[0]),m&2&&G(s,f[1])},i(f){u||(d(n.$$.fragment,f),u=!0)},o(f){g(n.$$.fragment,f),u=!1},d(f){f&&_(e),T(n),c=!1,pe(p)}}}function qe(i,e,r){let t;B(i,K,f=>r(5,t=f));let{parameter:l}=e,{name:o}=e,{value:n}=e,a=l&&t.url.searchParams.get(l)||n;const s=`${l||o}-filter`,u=ve(Te,300);function c(f){_e.call(this,i,f)}function p(){a=this.value,r(1,a)}return i.$$set=f=>{"parameter"in f&&r(3,l=f.parameter),"name"in f&&r(0,o=f.name),"value"in f&&r(4,n=f.value)},i.$$.update=()=>{i.$$.dirty&42&&u({parameter:l,value:a,url:t.url})},[o,a,s,l,n,t,c,p]}class ee extends U{constructor(e){super(),H(this,e,qe,Ce,V,{parameter:3,name:0,value:4})}}function te(i,e,r){const t=i.slice();return t[7]=e[r][0],t[8]=e[r][1],t}function le(i,e,r){const t=i.slice();return t[8]=e[r],t}function Ie(i){let e,r,t,l,o;return{c(){e=C("a"),r=S("Advanced Search"),this.h()},l(n){e=q(n,"A",{href:!0,class:!0});var a=I(e);r=F(a,"Advanced Search"),a.forEach(_),this.h()},h(){v(e,"href",t=i[1].url.pathname+"?query"),v(e,"class","text-blue-700")},m(n,a){b(n,e,a),k(e,r),l||(o=O(e,"click",fe(i[5]("advanced"))),l=!0)},p(n,a){a&2&&t!==(t=n[1].url.pathname+"?query")&&v(e,"href",t)},d(n){n&&_(e),l=!1,o()}}}function We(i){let e,r,t,l,o;return{c(){e=C("a"),r=S("Basic Search"),this.h()},l(n){e=q(n,"A",{href:!0,class:!0});var a=I(e);r=F(a,"Basic Search"),a.forEach(_),this.h()},h(){v(e,"href",t=i[1].url.pathname),v(e,"class","text-blue-700")},m(n,a){b(n,e,a),k(e,r),l||(o=O(e,"click",fe(i[5]("basic"))),l=!0)},p(n,a){a&2&&t!==(t=n[1].url.pathname)&&v(e,"href",t)},d(n){n&&_(e),l=!1,o()}}}function je(i){let e,r,t,l,o,n,a,s,u,c,p,f;r=new ee({props:{parameter:"workflow-id",name:"Workflow ID",value:Ke}}),l=new ee({props:{parameter:"workflow-type",name:"Workflow Type",value:Me}}),n=new x({props:{label:"Time Range",parameter:"time-range",value:"24 hours",$$slots:{default:[Be]},$$scope:{ctx:i}}}),s=new x({props:{label:"Workflow Status",parameter:"status",value:null,$$slots:{default:[Qe]},$$scope:{ctx:i}}});function m(h){i[6](h)}let $={id:"filter-by-relative-time",$$slots:{default:[Ve]},$$scope:{ctx:i}};return i[2]!==void 0&&($.value=i[2]),c=new Ee({props:$}),$e.push(()=>he(c,"value",m)),{c(){e=C("div"),w(r.$$.fragment),t=A(),w(l.$$.fragment),o=A(),w(n.$$.fragment),a=A(),w(s.$$.fragment),u=A(),w(c.$$.fragment),this.h()},l(h){e=q(h,"DIV",{class:!0,role:!0});var P=I(e);y(r.$$.fragment,P),t=N(P),y(l.$$.fragment,P),o=N(P),y(n.$$.fragment,P),a=N(P),y(s.$$.fragment,P),u=N(P),y(c.$$.fragment,P),P.forEach(_),this.h()},h(){v(e,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5"),v(e,"role","search")},m(h,P){b(h,e,P),E(r,e,null),k(e,t),E(l,e,null),k(e,o),E(n,e,null),k(e,a),E(s,e,null),k(e,u),E(c,e,null),f=!0},p(h,P){const Y={};P&8192&&(Y.$$scope={dirty:P,ctx:h}),n.$set(Y);const Z={};P&8192&&(Z.$$scope={dirty:P,ctx:h}),s.$set(Z);const Q={};P&8192&&(Q.$$scope={dirty:P,ctx:h}),!p&&P&4&&(p=!0,Q.value=h[2],de(()=>p=!1)),c.$set(Q)},i(h){f||(d(r.$$.fragment,h),d(l.$$.fragment,h),d(n.$$.fragment,h),d(s.$$.fragment,h),d(c.$$.fragment,h),f=!0)},o(h){g(r.$$.fragment,h),g(l.$$.fragment,h),g(n.$$.fragment,h),g(s.$$.fragment,h),g(c.$$.fragment,h),f=!1},d(h){h&&_(e),T(r),T(l),T(n),T(s),T(c)}}}function De(i){let e,r;return e=new ke({props:{icon:!0,placeholder:"Query…",value:i[1].url.searchParams.get("query")}}),e.$on("submit",i[4]),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),r=!0},p(t,l){const o={};l&2&&(o.value=t[1].url.searchParams.get("query")),e.$set(o)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Le(i){let e=i[8]+"",r;return{c(){r=S(e)},l(t){r=F(t,e)},m(t,l){b(t,r,l)},p:z,d(t){t&&_(r)}}}function re(i){let e,r;return e=new L({props:{value:i[8],$$slots:{default:[Le]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),r=!0},p(t,l){const o={};l&8192&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Be(i){let e,r,t=X,l=[];for(let n=0;n<t.length;n+=1)l[n]=re(le(i,t,n));const o=n=>g(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=W()},l(n){for(let a=0;a<l.length;a+=1)l[a].l(n);e=W()},m(n,a){for(let s=0;s<l.length;s+=1)l[s].m(n,a);b(n,e,a),r=!0},p(n,a){if(a&0){t=X;let s;for(s=0;s<t.length;s+=1){const u=le(n,t,s);l[s]?(l[s].p(u,a),d(l[s],1)):(l[s]=re(u),l[s].c(),d(l[s],1),l[s].m(e.parentNode,e))}for(j(),s=t.length;s<l.length;s+=1)o(s);D()}},i(n){if(!r){for(let a=0;a<t.length;a+=1)d(l[a]);r=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)g(l[a]);r=!1},d(n){ue(l,n),n&&_(e)}}}function Oe(i){let e=i[7]+"",r;return{c(){r=S(e)},l(t){r=F(t,e)},m(t,l){b(t,r,l)},p:z,d(t){t&&_(r)}}}function ae(i,e){let r,t,l;return t=new L({props:{value:e[8],$$slots:{default:[Oe]},$$scope:{ctx:e}}}),{key:i,first:null,c(){r=W(),w(t.$$.fragment),this.h()},l(o){r=W(),y(t.$$.fragment,o),this.h()},h(){this.first=r},m(o,n){b(o,r,n),E(t,o,n),l=!0},p(o,n){e=o;const a={};n&8192&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(o){l||(d(t.$$.fragment,o),l=!0)},o(o){g(t.$$.fragment,o),l=!1},d(o){o&&_(r),T(t,o)}}}function Qe(i){let e=[],r=new Map,t,l,o=Object.entries(i[3]);const n=a=>a[7];for(let a=0;a<o.length;a+=1){let s=te(i,o,a),u=n(s);r.set(u,e[a]=ae(u,s))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=W()},l(a){for(let s=0;s<e.length;s+=1)e[s].l(a);t=W()},m(a,s){for(let u=0;u<e.length;u+=1)e[u].m(a,s);b(a,t,s),l=!0},p(a,s){s&8&&(o=Object.entries(a[3]),j(),e=ge(e,s,n,1,a,o,r,t.parentNode,be,ae,t,te),D())},i(a){if(!l){for(let s=0;s<o.length;s+=1)d(e[s]);l=!0}},o(a){for(let s=0;s<e.length;s+=1)g(e[s]);l=!1},d(a){for(let s=0;s<e.length;s+=1)e[s].d(a);a&&_(t)}}}function Re(i){let e;return{c(){e=S("Relative")},l(r){e=F(r,"Relative")},m(r,t){b(r,e,t)},d(r){r&&_(e)}}}function Ue(i){let e;return{c(){e=S("UTC")},l(r){e=F(r,"UTC")},m(r,t){b(r,e,t)},d(r){r&&_(e)}}}function He(i){let e;return{c(){e=S("Local")},l(r){e=F(r,"Local")},m(r,t){b(r,e,t)},d(r){r&&_(e)}}}function Ve(i){let e,r,t,l,o,n;return e=new L({props:{value:"relative",$$slots:{default:[Re]},$$scope:{ctx:i}}}),t=new L({props:{value:"UTC",$$slots:{default:[Ue]},$$scope:{ctx:i}}}),o=new L({props:{value:"local",$$slots:{default:[He]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment),r=A(),w(t.$$.fragment),l=A(),w(o.$$.fragment)},l(a){y(e.$$.fragment,a),r=N(a),y(t.$$.fragment,a),l=N(a),y(o.$$.fragment,a)},m(a,s){E(e,a,s),b(a,r,s),E(t,a,s),b(a,l,s),E(o,a,s),n=!0},p(a,s){const u={};s&8192&&(u.$$scope={dirty:s,ctx:a}),e.$set(u);const c={};s&8192&&(c.$$scope={dirty:s,ctx:a}),t.$set(c);const p={};s&8192&&(p.$$scope={dirty:s,ctx:a}),o.$set(p)},i(a){n||(d(e.$$.fragment,a),d(t.$$.fragment,a),d(o.$$.fragment,a),n=!0)},o(a){g(e.$$.fragment,a),g(t.$$.fragment,a),g(o.$$.fragment,a),n=!1},d(a){T(e,a),a&&_(r),T(t,a),a&&_(l),T(o,a)}}}function ze(i){let e,r,t,l,o,n;function a(m,$){return m[0]?We:Ie}let s=a(i),u=s(i);const c=[De,je],p=[];function f(m,$){return m[0]?0:1}return l=f(i),o=p[l]=c[l](i),{c(){e=C("section"),r=C("p"),u.c(),t=A(),o.c(),this.h()},l(m){e=q(m,"SECTION",{class:!0});var $=I(e);r=q($,"P",{class:!0});var h=I(r);u.l(h),h.forEach(_),t=N($),o.l($),$.forEach(_),this.h()},h(){v(r,"class","text-right text-xs"),v(e,"class","flex flex-col gap-2")},m(m,$){b(m,e,$),k(e,r),u.m(r,null),k(e,t),p[l].m(e,null),n=!0},p(m,[$]){s===(s=a(m))&&u?u.p(m,$):(u.d(1),u=s(m),u&&(u.c(),u.m(r,null)));let h=l;l=f(m),l===h?p[l].p(m,$):(j(),g(p[h],1,1,()=>{p[h]=null}),D(),o=p[l],o?o.p(m,$):(o=p[l]=c[l](m),o.c()),d(o,1),o.m(e,null))},i(m){n||(d(o),n=!0)},o(m){g(o),n=!1},d(m){m&&_(e),u.d(),p[l].d()}}}let Ke="",Me="";function Ye(i,e,r){let t,l;B(i,K,c=>r(1,t=c)),B(i,R,c=>r(2,l=c));const o={All:null,"Timed Out":"TimedOut",Completed:"Completed",Failed:"Failed","Continued as New":"ContinuedAsNew",Canceled:"Canceled",Terminated:"Terminated"};let n=t.url.searchParams.has("query");const a=c=>{const f=new FormData(c.target).get("query");t.url.searchParams.set("query",String(f)),J(t.url.toString())},s=c=>p=>{const f=p.target;r(0,n=c==="advanced"),n||t.url.searchParams.delete("query"),J(f.href)};function u(c){l=c,R.set(l)}return[n,t,l,o,a,s,u]}class Ze extends U{constructor(e){super(),H(this,e,Ye,ze,V,{})}}function ne(i,e,r){const t=i.slice();return t[9]=e[r],t}function Ge(i){let e,r,t,l,o,n,a,s,u,c;a=new M({props:{content:`temporal operator namespace update --history-archival-state enabled ${i[4]}`,language:"text",inline:!0}});let p=!i[1]&&se(i);return{c(){e=C("h1"),r=S("This namespace is currently not enabled for archival."),t=A(),l=C("p"),o=S("Run this command to enable archival visibility for event histories:"),n=A(),w(a.$$.fragment),s=A(),p&&p.c(),u=W(),this.h()},l(f){e=q(f,"H1",{class:!0,"data-testid":!0});var m=I(e);r=F(m,"This namespace is currently not enabled for archival."),m.forEach(_),t=N(f),l=q(f,"P",{});var $=I(l);o=F($,"Run this command to enable archival visibility for event histories:"),$.forEach(_),n=N(f),y(a.$$.fragment,f),s=N(f),p&&p.l(f),u=W(),this.h()},h(){v(e,"class","text-2xl"),v(e,"data-testid","archived-disabled-title")},m(f,m){b(f,e,m),k(e,r),b(f,t,m),b(f,l,m),k(l,o),b(f,n,m),E(a,f,m),b(f,s,m),p&&p.m(f,m),b(f,u,m),c=!0},p(f,m){const $={};m&16&&($.content=`temporal operator namespace update --history-archival-state enabled ${f[4]}`),a.$set($),f[1]?p&&(j(),g(p,1,1,()=>{p=null}),D()):p?(p.p(f,m),m&2&&d(p,1)):(p=se(f),p.c(),d(p,1),p.m(u.parentNode,u))},i(f){c||(d(a.$$.fragment,f),d(p),c=!0)},o(f){g(a.$$.fragment,f),g(p),c=!1},d(f){f&&_(e),f&&_(t),f&&_(l),f&&_(n),T(a,f),f&&_(s),p&&p.d(f),f&&_(u)}}}function Je(i){let e,r,t,l,o,n,a,s,u,c,p;return c=new M({props:{content:`temporal operator namespace update --visibility-archival-state enabled ${i[4]}`,language:"text",inline:!0}}),{c(){e=C("h1"),r=S(`This namespace is currently enabled for archival but visibility is not
    enabled.`),t=A(),l=C("p"),o=S("To enable "),n=C("a"),a=S("archival visibility"),s=S(":"),u=A(),w(c.$$.fragment),this.h()},l(f){e=q(f,"H1",{class:!0,"data-testid":!0});var m=I(e);r=F(m,`This namespace is currently enabled for archival but visibility is not
    enabled.`),m.forEach(_),t=N(f),l=q(f,"P",{});var $=I(l);o=F($,"To enable "),n=q($,"A",{class:!0,href:!0,target:!0,rel:!0});var h=I(n);a=F(h,"archival visibility"),h.forEach(_),s=F($,":"),$.forEach(_),u=N(f),y(c.$$.fragment,f),this.h()},h(){v(e,"class","text-2xl"),v(e,"data-testid","visibility-disabled-title"),v(n,"class","text-blue-700 underline"),v(n,"href","https://docs.temporal.io/clusters#archival"),v(n,"target","_blank"),v(n,"rel","noreferrer")},m(f,m){b(f,e,m),k(e,r),b(f,t,m),b(f,l,m),k(l,o),k(l,n),k(n,a),k(l,s),b(f,u,m),E(c,f,m),p=!0},p(f,m){const $={};m&16&&($.content=`temporal operator namespace update --visibility-archival-state enabled ${f[4]}`),c.$set($)},i(f){p||(d(c.$$.fragment,f),p=!0)},o(f){g(c.$$.fragment,f),p=!1},d(f){f&&_(e),f&&_(t),f&&_(l),f&&_(u),T(c,f)}}}function Xe(i){let e,r,t,l,o,n,a,s,u=!i[0]&&oe();const c=[et,xe],p=[];function f(m,$){var h;return(h=m[3])!=null&&h.length?0:1}return o=f(i),n=p[o]=c[o](i),{c(){e=C("h1"),r=S("Archived Workflows"),t=A(),u&&u.c(),l=A(),n.c(),a=W(),this.h()},l(m){e=q(m,"H1",{class:!0,"data-testid":!0});var $=I(e);r=F($,"Archived Workflows"),$.forEach(_),t=N(m),u&&u.l(m),l=N(m),n.l(m),a=W(),this.h()},h(){v(e,"class","text-2xl"),v(e,"data-testid","archived-enabled-title")},m(m,$){b(m,e,$),k(e,r),b(m,t,$),u&&u.m(m,$),b(m,l,$),p[o].m(m,$),b(m,a,$),s=!0},p(m,$){m[0]?u&&(j(),g(u,1,1,()=>{u=null}),D()):u?$&1&&d(u,1):(u=oe(),u.c(),d(u,1),u.m(l.parentNode,l));let h=o;o=f(m),o===h?p[o].p(m,$):(j(),g(p[h],1,1,()=>{p[h]=null}),D(),n=p[o],n?n.p(m,$):(n=p[o]=c[o](m),n.c()),d(n,1),n.m(a.parentNode,a))},i(m){s||(d(u),d(n),s=!0)},o(m){g(u),g(n),s=!1},d(m){m&&_(e),m&&_(t),u&&u.d(m),m&&_(l),p[o].d(m),m&&_(a)}}}function se(i){let e,r,t,l,o,n,a,s;return a=new M({props:{content:`temporal operator namespace update --visibility-archival-state enabled ${i[4]}`,language:"text",inline:!0}}),{c(){e=C("p"),r=S("To enable "),t=C("a"),l=S("archival visibility"),o=S(":"),n=A(),w(a.$$.fragment),this.h()},l(u){e=q(u,"P",{});var c=I(e);r=F(c,"To enable "),t=q(c,"A",{class:!0,href:!0,target:!0,rel:!0});var p=I(t);l=F(p,"archival visibility"),p.forEach(_),o=F(c,":"),c.forEach(_),n=N(u),y(a.$$.fragment,u),this.h()},h(){v(t,"class","text-blue-700 underline"),v(t,"href","https://docs.temporal.io/clusters#archival"),v(t,"target","_blank"),v(t,"rel","noreferrer")},m(u,c){b(u,e,c),k(e,r),k(e,t),k(t,l),k(e,o),b(u,n,c),E(a,u,c),s=!0},p(u,c){const p={};c&16&&(p.content=`temporal operator namespace update --visibility-archival-state enabled ${u[4]}`),a.$set(p)},i(u){s||(d(a.$$.fragment,u),s=!0)},o(u){g(a.$$.fragment,u),s=!1},d(u){u&&_(e),u&&_(n),T(a,u)}}}function oe(i){let e,r;return e=new Ze({}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),r=!0},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function xe(i){let e,r;return e=new Ae({props:{title:"No Workflows Found",content:"If you have filters applied, try adjusting them."}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),r=!0},p:z,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function et(i){let e,r;return e=new Pe({props:{items:i[3],"aria-label":"archived workflows",pageSizeSelectLabel:Ne("per-page"),$$slots:{default:[lt,({visibleItems:t})=>({8:t}),({visibleItems:t})=>t?256:0]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),r=!0},p(t,l){const o={};l&8&&(o.items=t[3]),l&4432&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function ie(i){let e,r;return e=new ye({props:{workflow:i[9],namespace:i[4],timeFormat:i[6]}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),r=!0},p(t,l){const o={};l&256&&(o.workflow=t[9]),l&16&&(o.namespace=t[4]),l&64&&(o.timeFormat=t[6]),e.$set(o)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function tt(i){let e,r,t=i[8],l=[];for(let n=0;n<t.length;n+=1)l[n]=ie(ne(i,t,n));const o=n=>g(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=W()},l(n){for(let a=0;a<l.length;a+=1)l[a].l(n);e=W()},m(n,a){for(let s=0;s<l.length;s+=1)l[s].m(n,a);b(n,e,a),r=!0},p(n,a){if(a&336){t=n[8];let s;for(s=0;s<t.length;s+=1){const u=ne(n,t,s);l[s]?(l[s].p(u,a),d(l[s],1)):(l[s]=ie(u),l[s].c(),d(l[s],1),l[s].m(e.parentNode,e))}for(j(),s=t.length;s<l.length;s+=1)o(s);D()}},i(n){if(!r){for(let a=0;a<t.length;a+=1)d(l[a]);r=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)g(l[a]);r=!1},d(n){ue(l,n),n&&_(e)}}}function lt(i){let e,r;return e=new we({props:{$$slots:{default:[tt]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),r=!0},p(t,l){const o={};l&4432&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function rt(i){let e,r,t,l,o,n;e=new Fe({props:{title:`Archival | ${i[4]}`,url:i[5].url.href}});const a=[Xe,Je,Ge],s=[];function u(c,p){return c[2]&&c[1]?0:c[2]?1:2}return t=u(i),l=s[t]=a[t](i),{c(){w(e.$$.fragment),r=A(),l.c(),o=W()},l(c){y(e.$$.fragment,c),r=N(c),l.l(c),o=W()},m(c,p){E(e,c,p),b(c,r,p),s[t].m(c,p),b(c,o,p),n=!0},p(c,[p]){const f={};p&16&&(f.title=`Archival | ${c[4]}`),p&32&&(f.url=c[5].url.href),e.$set(f);let m=t;t=u(c),t===m?s[t].p(c,p):(j(),g(s[m],1,1,()=>{s[m]=null}),D(),l=s[t],l?l.p(c,p):(l=s[t]=a[t](c),l.c()),d(l,1),l.m(o.parentNode,o))},i(c){n||(d(e.$$.fragment,c),d(l),n=!0)},o(c){g(e.$$.fragment,c),g(l),n=!1},d(c){T(e,c),c&&_(r),s[t].d(c),c&&_(o)}}}function at(i,e,r){let t,l,o,n,a,s,u;B(i,K,p=>r(5,s=p)),B(i,R,p=>r(6,u=p));let{data:c}=e;return i.$$set=p=>{"data"in p&&r(7,c=p.data)},i.$$.update=()=>{i.$$.dirty&128&&r(4,{namespace:{namespaceInfo:{name:t}},workflows:l,archivalEnabled:o,visibilityArchivalEnabled:n,archivalQueryingNotSupported:a}=c,t,(r(3,l),r(7,c)),(r(2,o),r(7,c)),(r(1,n),r(7,c)),(r(0,a),r(7,c)))},[a,n,o,l,t,s,u,c]}class gt extends U{constructor(e){super(),H(this,e,at,rt,V,{data:7})}}export{gt as default};
