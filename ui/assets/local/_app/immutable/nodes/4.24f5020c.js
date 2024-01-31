import{S as G,i as J,s as P,K as Q,k as j,q as F,a as q,y,l as N,m as I,r as H,h as c,c as D,z as T,n as _,b as S,F as g,A as V,L as W,M as X,N as Y,g as d,d as h,B as A,C as Z,R as B}from"../chunks/index.bac36631.js";import{E as x}from"../chunks/event-history-file-import.bd2a7af3.js";import{T as ee,a as z}from"../chunks/toggle-buttons.54b31dfd.js";import{t as C}from"../chunks/translate.d045ded2.js";import{l as te}from"../chunks/namespaces.8df2fed5.js";import{f as k}from"../chunks/route-for.e9234cea.js";function se(a){let t=C("workflows.history")+"",s;return{c(){s=F(t)},l(e){s=H(e,t)},m(e,o){S(e,s,o)},p:B,d(e){e&&c(s)}}}function ne(a){let t=C("workflows.compact")+"",s;return{c(){s=F(t)},l(e){s=H(e,t)},m(e,o){S(e,s,o)},p:B,d(e){e&&c(s)}}}function oe(a){let t=C("workflows.json")+"",s;return{c(){s=F(t)},l(e){s=H(e,t)},m(e,o){S(e,s,o)},p:B,d(e){e&&c(s)}}}function ae(a){let t,s,e,o,r,i;return t=new z({props:{icon:"feed",href:k(a[0],"feed"),$$slots:{default:[se]},$$scope:{ctx:a}}}),e=new z({props:{icon:"compact",href:k(a[0],"compact"),$$slots:{default:[ne]},$$scope:{ctx:a}}}),r=new z({props:{icon:"json",href:k(a[0],"json"),$$slots:{default:[oe]},$$scope:{ctx:a}}}),{c(){y(t.$$.fragment),s=q(),y(e.$$.fragment),o=q(),y(r.$$.fragment)},l(n){T(t.$$.fragment,n),s=D(n),T(e.$$.fragment,n),o=D(n),T(r.$$.fragment,n)},m(n,l){V(t,n,l),S(n,s,l),V(e,n,l),S(n,o,l),V(r,n,l),i=!0},p(n,l){const b={};l&1&&(b.href=k(n[0],"feed")),l&4&&(b.$$scope={dirty:l,ctx:n}),t.$set(b);const m={};l&1&&(m.href=k(n[0],"compact")),l&4&&(m.$$scope={dirty:l,ctx:n}),e.$set(m);const p={};l&1&&(p.href=k(n[0],"json")),l&4&&(p.$$scope={dirty:l,ctx:n}),r.$set(p)},i(n){i||(d(t.$$.fragment,n),d(e.$$.fragment,n),d(r.$$.fragment,n),i=!0)},o(n){h(t.$$.fragment,n),h(e.$$.fragment,n),h(r.$$.fragment,n),i=!1},d(n){A(t,n),n&&c(s),A(e,n),n&&c(o),A(r,n)}}}function re(a){let t,s,e,o=C("events.import-event-history")+"",r,i,n,l,b,m,p,v,L,E;l=new x({}),v=new ee({props:{$$slots:{default:[ae]},$$scope:{ctx:a}}});const U=a[1].default,$=Q(U,a,a[2],null);return{c(){t=j("section"),s=j("nav"),e=j("h3"),r=F(o),i=q(),n=j("div"),y(l.$$.fragment),b=q(),m=j("nav"),p=j("div"),y(v.$$.fragment),L=q(),$&&$.c(),this.h()},l(f){t=N(f,"SECTION",{id:!0});var u=I(t);s=N(u,"NAV",{class:!0,"aria-label":!0});var w=I(s);e=N(w,"H3",{class:!0});var K=I(e);r=H(K,o),K.forEach(c),i=D(w),n=N(w,"DIV",{class:!0});var M=I(n);T(l.$$.fragment,M),M.forEach(c),w.forEach(c),b=D(u),m=N(u,"NAV",{class:!0,"aria-label":!0});var O=I(m);p=N(O,"DIV",{id:!0,class:!0});var R=I(p);T(v.$$.fragment,R),R.forEach(c),O.forEach(c),L=D(u),$&&$.l(u),u.forEach(c),this.h()},h(){_(e,"class","text-lg font-medium"),_(n,"class","flex gap-4"),_(s,"class","flex items-end justify-between gap-4 pb-4"),_(s,"aria-label",C("events.import-event-history")),_(p,"id","event-view-toggle"),_(p,"class","surface-primary flex gap-4"),_(m,"class","flex items-end justify-end gap-4"),_(m,"aria-label",C("events.event-history-view")),_(t,"id","event-history")},m(f,u){S(f,t,u),g(t,s),g(s,e),g(e,r),g(s,i),g(s,n),V(l,n,null),g(t,b),g(t,m),g(m,p),V(v,p,null),g(t,L),$&&$.m(t,null),E=!0},p(f,[u]){const w={};u&5&&(w.$$scope={dirty:u,ctx:f}),v.$set(w),$&&$.p&&(!E||u&4)&&W($,U,f,f[2],E?Y(U,f[2],u,null):X(f[2]),null)},i(f){E||(d(l.$$.fragment,f),d(v.$$.fragment,f),d($,f),E=!0)},o(f){h(l.$$.fragment,f),h(v.$$.fragment,f),h($,f),E=!1},d(f){f&&c(t),A(l),A(v),$&&$.d(f)}}}function le(a,t,s){let e;Z(a,te,i=>s(0,e=i));let{$$slots:o={},$$scope:r}=t;return a.$$set=i=>{"$$scope"in i&&s(2,r=i.$$scope)},[e,o,r]}class fe extends G{constructor(t){super(),J(this,t,le,re,P,{})}}function ie(a){let t;const s=a[0].default,e=Q(s,a,a[1],null);return{c(){e&&e.c()},l(o){e&&e.l(o)},m(o,r){e&&e.m(o,r),t=!0},p(o,r){e&&e.p&&(!t||r&2)&&W(e,s,o,o[1],t?Y(s,o[1],r,null):X(o[1]),null)},i(o){t||(d(e,o),t=!0)},o(o){h(e,o),t=!1},d(o){e&&e.d(o)}}}function $e(a){let t,s;return t=new fe({props:{$$slots:{default:[ie]},$$scope:{ctx:a}}}),{c(){y(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,o){V(t,e,o),s=!0},p(e,[o]){const r={};o&2&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function ue(a,t,s){let{$$slots:e={},$$scope:o}=t;return a.$$set=r=>{"$$scope"in r&&s(1,o=r.$$scope)},[e,o]}class de extends G{constructor(t){super(),J(this,t,ue,$e,P,{})}}export{de as component};
