import{S as Y,b as G,a as J,C as g,c as S,m as N,w as C,e as E,D as d,d as x,p as T,q as P,x as F,k as m,u as v,E as b,f as h,L as y,g as $,h as j,j as u,F as w,K as A,z as B,n as K,a7 as M,y as O}from"../chunks/index.c37b9eda.js";import{n as D}from"../chunks/route-for.c0d635de.js";import{p as Q}from"../chunks/stores.4790ebc5.js";import{n as R}from"../chunks/namespaces.3676122a.js";import{E as U}from"../chunks/empty-state.3b731948.js";import{P as V}from"../chunks/page-title.f0713954.js";import{P as W}from"../chunks/pagination.146d28e3.js";import{T as X,a as Z}from"../chunks/table-header-row.9bc30066.js";import{T as ee}from"../chunks/table-row.0fbce3fa.js";import{t as te}from"../chunks/translate.d6afa57d.js";function H(f,t,r){const e=f.slice();return e[3]=t[r],e}function ae(f){let t,r;return t=new U({props:{title:"No Namespaces Found",content:"You do not have access to a Namespace. Contact your Administrator for assistance."}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p:K,i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function re(f){let t,r;return t=new W({props:{items:f[1],"aria-label":"namespaces",pageSizeSelectLabel:te("per-page"),$$slots:{default:[ce,({visibleItems:e})=>({2:e}),({visibleItems:e})=>e?4:0]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&2&&(c.items=e[1]),a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function se(f){let t,r,e=f[3].namespaceInfo.name+"",a,c,s;return{c(){t=N("td"),r=N("a"),a=C(e),s=S(),this.h()},l(n){t=T(n,"TD",{});var l=P(t);r=T(l,"A",{href:!0,class:!0});var p=P(r);a=F(p,e),p.forEach(m),l.forEach(m),s=x(n),this.h()},h(){v(r,"href",c=D({namespace:f[3].namespaceInfo.name})),v(r,"class","hover:text-blue-700 hover:underline hover:decoration-blue-700")},m(n,l){h(n,t,l),y(t,r),y(r,a),h(n,s,l)},p(n,l){l&4&&e!==(e=n[3].namespaceInfo.name+"")&&O(a,e),l&4&&c!==(c=D({namespace:n[3].namespaceInfo.name}))&&v(r,"href",c)},d(n){n&&m(t),n&&m(s)}}}function L(f){let t,r;return t=new ee({props:{$$slots:{default:[se]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function ne(f){let t,r,e=f[2],a=[];for(let s=0;s<e.length;s+=1)a[s]=L(H(f,e,s));const c=s=>$(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();t=E()},l(s){for(let n=0;n<a.length;n+=1)a[n].l(s);t=E()},m(s,n){for(let l=0;l<a.length;l+=1)a[l].m(s,n);h(s,t,n),r=!0},p(s,n){if(n&4){e=s[2];let l;for(l=0;l<e.length;l+=1){const p=H(s,e,l);a[l]?(a[l].p(p,n),u(a[l],1)):(a[l]=L(p),a[l].c(),u(a[l],1),a[l].m(t.parentNode,t))}for(B(),l=e.length;l<a.length;l+=1)c(l);j()}},i(s){if(!r){for(let n=0;n<e.length;n+=1)u(a[n]);r=!0}},o(s){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)$(a[n]);r=!1},d(s){M(a,s),s&&m(t)}}}function le(f){let t,r;return{c(){t=N("th"),r=C("Name")},l(e){t=T(e,"TH",{});var a=P(t);r=F(a,"Name"),a.forEach(m)},m(e,a){h(e,t,a),y(t,r)},p:K,d(e){e&&m(t)}}}function oe(f){let t,r;return t=new Z({props:{slot:"headers",$$slots:{default:[le]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&64&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function ce(f){let t,r;return t=new X({props:{variant:"fancy",class:"w-full",$$slots:{headers:[oe],default:[ne]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function fe(f){let t,r,e,a,c,s,n,l,p;t=new V({props:{title:"Namespaces",url:f[0].url.href}});const q=[re,ae],_=[];function z(o,i){var k;return((k=o[1])==null?void 0:k.length)>0?0:1}return s=z(f),n=_[s]=q[s](f),{c(){g(t.$$.fragment),r=S(),e=N("h1"),a=C("Namespaces"),c=S(),n.c(),l=E(),this.h()},l(o){d(t.$$.fragment,o),r=x(o),e=T(o,"H1",{"data-testid":!0,class:!0});var i=P(e);a=F(i,"Namespaces"),i.forEach(m),c=x(o),n.l(o),l=E(),this.h()},h(){v(e,"data-testid","namespace-selector-title"),v(e,"class","mb-8 text-2xl")},m(o,i){b(t,o,i),h(o,r,i),h(o,e,i),y(e,a),h(o,c,i),_[s].m(o,i),h(o,l,i),p=!0},p(o,[i]){const k={};i&1&&(k.url=o[0].url.href),t.$set(k);let I=s;s=z(o),s===I?_[s].p(o,i):(B(),$(_[I],1,1,()=>{_[I]=null}),j(),n=_[s],n?n.p(o,i):(n=_[s]=q[s](o),n.c()),u(n,1),n.m(l.parentNode,l))},i(o){p||(u(t.$$.fragment,o),u(n),p=!0)},o(o){$(t.$$.fragment,o),$(n),p=!1},d(o){w(t,o),o&&m(r),o&&m(e),o&&m(c),_[s].d(o),o&&m(l)}}}function ie(f,t,r){let e,a;return A(f,Q,c=>r(0,e=c)),A(f,R,c=>r(1,a=c)),[e,a]}class ke extends Y{constructor(t){super(),G(this,t,ie,fe,J,{})}}export{ke as default};
