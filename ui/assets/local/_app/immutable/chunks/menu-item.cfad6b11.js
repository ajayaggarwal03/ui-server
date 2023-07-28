import{S as B,b as S,a as F,G as U,m as C,p as T,q as z,k as O,u as _,f as p,a9 as fe,T as N,V as te,H as q,I as D,J as K,j as v,g as I,r as se,K as P,ac as ue,N as E,O as M,_ as L,A as re,e as V,R as h,L as ie,ad as ae,z as j,h as A,ae as Q,C as G,D as H,E as J,F as R,$ as ce,aa as de,U as me,a6 as _e,M as he,c as be,d as ke}from"./index.c37b9eda.js";import{I as W}from"./icon.f2b50ec9.js";import{f as ge,T as ve}from"./tooltip.56f72e8c.js";import{w}from"./index.169c571c.js";import{c as Ie}from"./outside-click.0db702a6.js";const Oe=i=>({}),x=i=>({open:i[2]});function Ee(i){let e,a,t,n,r;const s=i[6].default,l=U(s,i,i[5],x);return{c(){e=C("div"),l&&l.c(),this.h()},l(o){e=T(o,"DIV",{class:!0});var f=z(e);l&&l.l(f),f.forEach(O),this.h()},h(){_(e,"class",a="relative inline-block "+i[4].class)},m(o,f){p(o,e,f),l&&l.m(e,null),i[7](e),t=!0,n||(r=[fe(Ie.call(null,e)),N(e,"click-outside",i[8]),N(e,"keydown",te(i[3]))],n=!0)},p(o,[f]){l&&l.p&&(!t||f&32)&&q(l,s,o,o[5],t?K(s,o[5],f,Oe):D(o[5]),x),(!t||f&16&&a!==(a="relative inline-block "+o[4].class))&&_(e,"class",a)},i(o){t||(v(l,o),t=!0)},o(o){I(l,o),t=!1},d(o){o&&O(e),l&&l.d(o),i[7](null),n=!1,se(r)}}}const X="menu-context";function Me(i,e,a){let t,{$$slots:n={},$$scope:r}=e,s;const l=w(!1);P(i,l,m=>a(1,t=m));const o=w(!1),f=m=>{m.key==="Escape"&&c()},c=()=>L(l,t=!1,t);ue(X,{open:l,keepOpen:o,toggleMenu:()=>L(l,t=!t,t),closeMenu:c});function b(m){re[m?"unshift":"push"](()=>{s=m,a(0,s)})}const u=()=>L(l,t=!1,t);return i.$$set=m=>{a(4,e=E(E({},e),M(m))),"$$scope"in m&&a(5,r=m.$$scope)},e=M(e),[s,t,l,f,e,r,n,b,u]}class Be extends B{constructor(e){super(),S(this,e,Me,Ee,F,{})}}function $(i){let e,a;return e=new W({props:{name:i[5]}}),{c(){G(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){J(e,t,n),a=!0},p(t,n){const r={};n&32&&(r.name=t[5]),e.$set(r)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){I(e.$$.fragment,t),a=!1},d(t){R(e,t)}}}function ee(i){let e,a;return e=new W({props:{class:"pointer-events-none",name:i[6]?"chevron-up":"chevron-down"}}),{c(){G(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){J(e,t,n),a=!0},p(t,n){const r={};n&64&&(r.name=t[6]?"chevron-up":"chevron-down"),e.$set(r)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){I(e.$$.fragment,t),a=!1},d(t){R(e,t)}}}function pe(i){let e,a,t,n,r,s,l,o,f=i[5]&&$(i);const c=i[11].default,d=U(c,i,i[10],null);let b=i[3]&&ee(i);return{c(){e=C("button"),f&&f.c(),a=V(),d&&d.c(),b&&b.c(),this.h()},l(u){e=T(u,"BUTTON",{type:!0,id:!0,"aria-haspopup":!0,"aria-controls":!0,"aria-expanded":!0,class:!0,"data-testid":!0});var m=z(e);f&&f.l(m),a=V(),d&&d.l(m),b&&b.l(m),m.forEach(O),this.h()},h(){_(e,"type","button"),_(e,"id",i[4]),_(e,"aria-haspopup",t=!i[2]),_(e,"aria-controls",i[0]),_(e,"aria-expanded",i[6]),_(e,"class",n="text-sm flex flex-row items-center "+i[9].class+" svelte-cqm0pi"),e.disabled=i[2],_(e,"data-testid",r=i[9].testId),h(e,"dark",i[1]),h(e,"show",i[6]),h(e,"has-indicator",i[3]),h(e,"has-icon",!!i[5])},m(u,m){p(u,e,m),f&&f.m(e,null),ie(e,a),d&&d.m(e,null),b&&b.m(e,null),s=!0,l||(o=N(e,"click",ae(i[8])),l=!0)},p(u,[m]){u[5]?f?(f.p(u,m),m&32&&v(f,1)):(f=$(u),f.c(),v(f,1),f.m(e,a)):f&&(j(),I(f,1,1,()=>{f=null}),A()),d&&d.p&&(!s||m&1024)&&q(d,c,u,u[10],s?K(c,u[10],m,null):D(u[10]),null),u[3]?b?(b.p(u,m),m&8&&v(b,1)):(b=ee(u),b.c(),v(b,1),b.m(e,null)):b&&(j(),I(b,1,1,()=>{b=null}),A()),(!s||m&16)&&_(e,"id",u[4]),(!s||m&4&&t!==(t=!u[2]))&&_(e,"aria-haspopup",t),(!s||m&1)&&_(e,"aria-controls",u[0]),(!s||m&64)&&_(e,"aria-expanded",u[6]),(!s||m&512&&n!==(n="text-sm flex flex-row items-center "+u[9].class+" svelte-cqm0pi"))&&_(e,"class",n),(!s||m&4)&&(e.disabled=u[2]),(!s||m&512&&r!==(r=u[9].testId))&&_(e,"data-testid",r),(!s||m&514)&&h(e,"dark",u[1]),(!s||m&576)&&h(e,"show",u[6]),(!s||m&520)&&h(e,"has-indicator",u[3]),(!s||m&544)&&h(e,"has-icon",!!u[5])},i(u){s||(v(f),v(d,u),v(b),s=!0)},o(u){I(f),I(d,u),I(b),s=!1},d(u){u&&O(e),f&&f.d(),d&&d.d(u),b&&b.d(),l=!1,o()}}}function Ce(i,e,a){let t,{$$slots:n={},$$scope:r}=e,{controls:s}=e,{dark:l=!1}=e,{disabled:o=!1}=e,{hasIndicator:f=!1}=e,{id:c=null}=e,{icon:d=null}=e;const{toggleMenu:b,open:u}=Q(X);P(i,u,g=>a(6,t=g));const m=()=>{o||b()};return i.$$set=g=>{a(9,e=E(E({},e),M(g))),"controls"in g&&a(0,s=g.controls),"dark"in g&&a(1,l=g.dark),"disabled"in g&&a(2,o=g.disabled),"hasIndicator"in g&&a(3,f=g.hasIndicator),"id"in g&&a(4,c=g.id),"icon"in g&&a(5,d=g.icon),"$$scope"in g&&a(10,r=g.$$scope)},e=M(e),[s,l,o,f,c,d,t,u,m,e,r,n]}class Se extends B{constructor(e){super(),S(this,e,Ce,pe,F,{controls:0,dark:1,disabled:2,hasIndicator:3,id:4,icon:5})}}function Te(i){let e,a,t,n;const r=i[9].default,s=U(r,i,i[8],null);return{c(){e=C("ul"),s&&s.c(),this.h()},l(l){e=T(l,"UL",{role:!0,tabindex:!0,class:!0,"aria-labelledby":!0,id:!0});var o=z(e);s&&s.l(o),o.forEach(O),this.h()},h(){_(e,"role","menu"),_(e,"tabindex","0"),_(e,"class",a="absolute z-50 mt-1 p-2 w-full list-none rounded border border-gray-900 bg-white text-primary shadow focus:outline-none focus-visible:outline focus-visible:outline-blue-700 focus-visible:-outline-offset-2 "+i[2]+" "+i[6].class+" svelte-zt7cn"),_(e,"aria-labelledby",i[0]),_(e,"id",i[0]),h(e,"dark",i[1]),h(e,"sr-only",!i[3])},m(l,o){p(l,e,o),s&&s.m(e,null),n=!0},p(l,[o]){s&&s.p&&(!n||o&256)&&q(s,r,l,l[8],n?K(r,l[8],o,null):D(l[8]),null),(!n||o&68&&a!==(a="absolute z-50 mt-1 p-2 w-full list-none rounded border border-gray-900 bg-white text-primary shadow focus:outline-none focus-visible:outline focus-visible:outline-blue-700 focus-visible:-outline-offset-2 "+l[2]+" "+l[6].class+" svelte-zt7cn"))&&_(e,"class",a),(!n||o&1)&&_(e,"aria-labelledby",l[0]),(!n||o&1)&&_(e,"id",l[0]),(!n||o&70)&&h(e,"dark",l[1]),(!n||o&76)&&h(e,"sr-only",!l[3])},i(l){n||(v(s,l),t||ce(()=>{t=de(e,ge,{duration:100}),t.start()}),n=!0)},o(l){I(s,l),n=!1},d(l){l&&O(e),s&&s.d(l)}}}function ze(i,e,a){let t,n,{$$slots:r={},$$scope:s}=e,{id:l}=e,{dark:o=!1}=e,{keepOpen:f=!1}=e,{position:c="left"}=e;const{keepOpen:d,open:b}=Q(X);return P(i,d,u=>a(10,t=u)),P(i,b,u=>a(3,n=u)),i.$$set=u=>{a(6,e=E(E({},e),M(u))),"id"in u&&a(0,l=u.id),"dark"in u&&a(1,o=u.dark),"keepOpen"in u&&a(7,f=u.keepOpen),"position"in u&&a(2,c=u.position),"$$scope"in u&&a(8,s=u.$$scope)},i.$$.update=()=>{i.$$.dirty&128&&L(d,t=f,t)},e=M(e),[l,o,c,n,d,b,e,f,s,r]}class Fe extends B{constructor(e){super(),S(this,e,ze,Te,F,{id:0,dark:1,keepOpen:7,position:2})}}function Ne(i){let e,a,t,n,r,s,l=i[1]&&le();const o=i[14].default,f=U(o,i,i[15],null);return{c(){e=C("li"),l&&l.c(),a=be(),f&&f.c(),this.h()},l(c){e=T(c,"LI",{role:!0,tabindex:!0,"data-testid":!0,class:!0});var d=z(e);l&&l.l(d),a=ke(d),f&&f.l(d),d.forEach(O),this.h()},h(){_(e,"role","menuitem"),_(e,"tabindex","0"),_(e,"data-testid",i[6]),_(e,"class",t="menu-item "+i[12].class+" svelte-dmnvce"),h(e,"dark",i[0]),h(e,"destructive",i[2]),h(e,"selected",i[1]),h(e,"active",i[3]),h(e,"disabled",i[4])},m(c,d){p(c,e,d),l&&l.m(e,null),ie(e,a),f&&f.m(e,null),n=!0,r||(s=[N(e,"click",te(ae(i[11]))),N(e,"keyup",i[10])],r=!0)},p(c,d){c[1]?l?d&2&&v(l,1):(l=le(),l.c(),v(l,1),l.m(e,a)):l&&(j(),I(l,1,1,()=>{l=null}),A()),f&&f.p&&(!n||d&32768)&&q(f,o,c,c[15],n?K(o,c[15],d,null):D(c[15]),null),(!n||d&64)&&_(e,"data-testid",c[6]),(!n||d&4096&&t!==(t="menu-item "+c[12].class+" svelte-dmnvce"))&&_(e,"class",t),(!n||d&4097)&&h(e,"dark",c[0]),(!n||d&4100)&&h(e,"destructive",c[2]),(!n||d&4098)&&h(e,"selected",c[1]),(!n||d&4104)&&h(e,"active",c[3]),(!n||d&4112)&&h(e,"disabled",c[4])},i(c){n||(v(l),v(f,c),n=!0)},o(c){I(l),I(f,c),n=!1},d(c){c&&O(e),l&&l.d(),f&&f.d(c),r=!1,se(s)}}}function Pe(i){let e,a,t;const n=i[14].default,r=U(n,i,i[15],null);return{c(){e=C("a"),r&&r.c(),this.h()},l(s){e=T(s,"A",{href:!0,role:!0,"data-testid":!0,class:!0});var l=z(e);r&&r.l(l),l.forEach(O),this.h()},h(){_(e,"href",i[5]),_(e,"role","menuitem"),_(e,"data-testid",i[6]),_(e,"class",a="menu-item inline-block "+i[12].class+" svelte-dmnvce"),h(e,"dark",i[0]),h(e,"destructive",i[2]),h(e,"selected",i[1]),h(e,"active",i[3]),h(e,"disabled",i[4])},m(s,l){p(s,e,l),r&&r.m(e,null),t=!0},p(s,l){r&&r.p&&(!t||l&32768)&&q(r,n,s,s[15],t?K(n,s[15],l,null):D(s[15]),null),(!t||l&32)&&_(e,"href",s[5]),(!t||l&64)&&_(e,"data-testid",s[6]),(!t||l&4096&&a!==(a="menu-item inline-block "+s[12].class+" svelte-dmnvce"))&&_(e,"class",a),(!t||l&4097)&&h(e,"dark",s[0]),(!t||l&4100)&&h(e,"destructive",s[2]),(!t||l&4098)&&h(e,"selected",s[1]),(!t||l&4104)&&h(e,"active",s[3]),(!t||l&4112)&&h(e,"disabled",s[4])},i(s){t||(v(r,s),t=!0)},o(s){I(r,s),t=!1},d(s){s&&O(e),r&&r.d(s)}}}function le(i){let e,a;return e=new W({props:{width:18,height:18,name:"checkmark"}}),{c(){G(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){J(e,t,n),a=!0},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){I(e.$$.fragment,t),a=!1},d(t){R(e,t)}}}function Ue(i){let e,a,t,n;const r=[Pe,Ne],s=[];function l(o,f){return o[5]?0:1}return e=l(i),a=s[e]=r[e](i),{c(){a.c(),t=V()},l(o){a.l(o),t=V()},m(o,f){s[e].m(o,f),p(o,t,f),n=!0},p(o,f){let c=e;e=l(o),e===c?s[e].p(o,f):(j(),I(s[c],1,1,()=>{s[c]=null}),A(),a=s[e],a?a.p(o,f):(a=s[e]=r[e](o),a.c()),v(a,1),a.m(t.parentNode,t))},i(o){n||(v(a),n=!0)},o(o){I(a),n=!1},d(o){s[e].d(o),o&&O(t)}}}function qe(i){let e,a,t;const n=[{class:"w-full"},{hide:!i[8]},{text:i[8]},i[7]];let r={$$slots:{default:[Ue]},$$scope:{ctx:i}};for(let s=0;s<n.length;s+=1)r=E(r,n[s]);return a=new ve({props:r}),{c(){e=C("div"),G(a.$$.fragment),this.h()},l(s){e=T(s,"DIV",{class:!0});var l=z(e);H(a.$$.fragment,l),l.forEach(O),this.h()},h(){_(e,"class","menu-item-wrapper svelte-dmnvce"),h(e,"disabled",i[4])},m(s,l){p(s,e,l),J(a,e,null),t=!0},p(s,[l]){const o=l&384?me(n,[n[0],l&256&&{hide:!s[8]},l&256&&{text:s[8]},l&128&&_e(s[7])]):{};l&36991&&(o.$$scope={dirty:l,ctx:s}),a.$set(o),(!t||l&16)&&h(e,"disabled",s[4])},i(s){t||(v(a.$$.fragment,s),t=!0)},o(s){I(a.$$.fragment,s),t=!1},d(s){s&&O(e),R(a)}}}function De(i,e,a){let t,n,r,{$$slots:s={},$$scope:l}=e,{dark:o=!1}=e,{selected:f=!1}=e,{destructive:c=!1}=e,{active:d=!1}=e,{disabled:b=!1}=e,{href:u=""}=e,{testId:m=null}=e,{tooltipProps:g={}}=e;const{keepOpen:Y,closeMenu:Z}=Q(X);P(i,Y,k=>a(16,r=k));const y=he(),ne=k=>{(k.key===" "||k.key==="Enter")&&(r||Z(),y("click"))},oe=()=>{r||Z(),y("click")};return i.$$set=k=>{a(12,e=E(E({},e),M(k))),"dark"in k&&a(0,o=k.dark),"selected"in k&&a(1,f=k.selected),"destructive"in k&&a(2,c=k.destructive),"active"in k&&a(3,d=k.active),"disabled"in k&&a(4,b=k.disabled),"href"in k&&a(5,u=k.href),"testId"in k&&a(6,m=k.testId),"tooltipProps"in k&&a(13,g=k.tooltipProps),"$$scope"in k&&a(15,l=k.$$scope)},i.$$.update=()=>{i.$$.dirty&8192&&a(8,{text:t,...n}=g,t,(a(7,n),a(13,g)))},e=M(e),[o,f,c,d,b,u,m,n,t,Y,ne,oe,e,g,s,l]}class Ge extends B{constructor(e){super(),S(this,e,De,qe,F,{dark:0,selected:1,destructive:2,active:3,disabled:4,href:5,testId:6,tooltipProps:13})}}export{Be as M,Se as a,Fe as b,Ge as c};
