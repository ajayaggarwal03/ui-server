import{S as F,b as G,a as H,G as J,O as C,m as K,c as P,p as M,q as N,d as q,k as I,P as D,Q as v,f as A,L as E,M as O,j as d,z as Q,g as T,h as R,H as U,I as B,J as V,R as W,T as S,U as X,C as Y,D as Z,E as y,F as p,w,x,y as $}from"./index.0942deb7.js";import{g as ee}from"./navigation.59055834.js";import{I as te}from"./icon.33308831.js";function j(s){let e,a;return e=new te({props:{width:20,height:20,class:"mt-0.5",name:s[4]}}),{c(){Y(e.$$.fragment)},l(n){Z(e.$$.fragment,n)},m(n,u){y(e,n,u),a=!0},p(n,u){const c={};u&16&&(c.name=n[4]),e.$set(c)},i(n){a||(d(e.$$.fragment,n),a=!0)},o(n){T(e.$$.fragment,n),a=!1},d(n){p(e,n)}}}function z(s){let e;return{c(){e=w(s[5])},l(a){e=x(a,s[5])},m(a,n){A(a,e,n)},p(a,n){n&32&&$(e,a[5])},d(a){a&&I(e)}}}function le(s){let e,a,n,u,c,_,m,o,h,g,i=s[4]&&j(s),r=s[5]&&z(s);const b=s[9].default,t=J(b,s,s[8],null);let L=[{href:s[1]},{target:u=s[3]?"_blank":null},{rel:c=s[3]?"noreferrer":null},{class:_="link "+(s[4]?"inline-flex":"inline")+" "+s[0]},{tabindex:m=s[1]?null:0},s[7]],k={};for(let l=0;l<L.length;l+=1)k=C(k,L[l]);return{c(){e=K("a"),i&&i.c(),a=P(),r&&r.c(),n=P(),t&&t.c(),this.h()},l(l){e=M(l,"A",{href:!0,target:!0,rel:!0,class:!0,tabindex:!0});var f=N(e);i&&i.l(f),a=q(f),r&&r.l(f),n=q(f),t&&t.l(f),f.forEach(I),this.h()},h(){D(e,k),v(e,"active",s[2]),v(e,"svelte-10xxh5w",!0)},m(l,f){A(l,e,f),i&&i.m(e,null),E(e,a),r&&r.m(e,null),E(e,n),t&&t.m(e,null),o=!0,h||(g=O(e,"click",s[6]),h=!0)},p(l,[f]){l[4]?i?(i.p(l,f),f&16&&d(i,1)):(i=j(l),i.c(),d(i,1),i.m(e,a)):i&&(Q(),T(i,1,1,()=>{i=null}),R()),l[5]?r?r.p(l,f):(r=z(l),r.c(),r.m(e,n)):r&&(r.d(1),r=null),t&&t.p&&(!o||f&256)&&U(t,b,l,l[8],o?V(b,l[8],f,null):B(l[8]),null),D(e,k=W(L,[(!o||f&2)&&{href:l[1]},(!o||f&8&&u!==(u=l[3]?"_blank":null))&&{target:u},(!o||f&8&&c!==(c=l[3]?"noreferrer":null))&&{rel:c},(!o||f&17&&_!==(_="link "+(l[4]?"inline-flex":"inline")+" "+l[0]))&&{class:_},(!o||f&2&&m!==(m=l[1]?null:0))&&{tabindex:m},f&128&&l[7]])),v(e,"active",l[2]),v(e,"svelte-10xxh5w",!0)},i(l){o||(d(i),d(t,l),o=!0)},o(l){T(i),T(t,l),o=!1},d(l){l&&I(e),i&&i.d(),r&&r.d(),t&&t.d(l),h=!1,g()}}}function ae(s,e,a){const n=["class","href","active","newTab","icon","text"];let u=S(e,n),{$$slots:c={},$$scope:_}=e,{class:m=""}=e,{href:o}=e,{active:h=!1}=e,{newTab:g=!1}=e,{icon:i=null}=e,{text:r=""}=e;const b=t=>{t.button===1||g||t.metaKey||(t.preventDefault(),t.stopPropagation(),ee(o))};return s.$$set=t=>{e=C(C({},e),X(t)),a(7,u=S(e,n)),"class"in t&&a(0,m=t.class),"href"in t&&a(1,o=t.href),"active"in t&&a(2,h=t.active),"newTab"in t&&a(3,g=t.newTab),"icon"in t&&a(4,i=t.icon),"text"in t&&a(5,r=t.text),"$$scope"in t&&a(8,_=t.$$scope)},[m,o,h,g,i,r,b,u,_,c]}class fe extends F{constructor(e){super(),G(this,e,ae,le,H,{class:0,href:1,active:2,newTab:3,icon:4,text:5})}}export{fe as L};