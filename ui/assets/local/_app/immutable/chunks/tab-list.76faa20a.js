import{S as E,b as S,a as N,G as j,N as h,m as q,p as A,q as L,k as g,Q as T,f as P,H as U,I as V,J as B,U as G,j as z,g as O,a5 as k,ac as Z,ai as J,O as I,e as K,ae as y,K as p,w,c as x,x as $,d as ee,aj as Q,R as v,L as R,T as te,y as le,n as se}from"./index.c37b9eda.js";import{c as ae}from"./is.b521dabf.js";import{w as F}from"./index.169c571c.js";function ie(s){let e,a;const o=s[2].default,t=j(o,s,s[1],null);let i=[{class:"tabs"},s[0]],f={};for(let n=0;n<i.length;n+=1)f=h(f,i[n]);return{c(){e=q("div"),t&&t.c(),this.h()},l(n){e=A(n,"DIV",{class:!0});var l=L(e);t&&t.l(l),l.forEach(g),this.h()},h(){T(e,f)},m(n,l){P(n,e,l),t&&t.m(e,null),a=!0},p(n,[l]){t&&t.p&&(!a||l&2)&&U(t,o,n,n[1],a?B(o,n[1],l,null):V(n[1]),null),T(e,f=G(i,[{class:"tabs"},l&1&&n[0]]))},i(n){a||(z(t,n),a=!0)},o(n){O(t,n),a=!1},d(n){n&&g(e),t&&t.d(n)}}}const M={};function ne(s,e,a){const o=[];let t=k(e,o),{$$slots:i={},$$scope:f}=e;const n=[],l=[],r=F(null),d=F(null);return Z(M,{registerTab:c=>{n.push(c),r.update(_=>_||c),J(()=>{const _=n.indexOf(c);n.splice(_,1),r.update(u=>u===c?n[_]||n[n.length-1]:u)})},registerPanel:c=>{l.push(c),d.update(_=>_||c),J(()=>{const _=l.indexOf(c);l.splice(_,1),d.update(u=>u===c?l[_]||l[l.length-1]:u)})},selectTab:c=>{const _=n.indexOf(c);r.set(c),d.set(l[_])},activeTab:r,activePanel:d}),s.$$set=c=>{e=h(h({},e),I(c)),a(0,t=k(e,o)),"$$scope"in c&&a(1,f=c.$$scope)},[t,f,i]}class be extends E{constructor(e){super(),S(this,e,ne,ie,N,{})}}function D(s){let e,a,o,t,i,f,n,l;const r=s[14].default,d=j(r,s,s[13],null);let c=[{role:"tab"},{class:"tab"},{"aria-selected":s[5]},{"aria-controls":s[3]},{tabindex:t=s[5]?0:-1},{id:s[1]},{href:s[2]},{"data-testid":i=s[1]??s[8]["data-testid"]},s[9]],_={};for(let u=0;u<c.length;u+=1)_=h(_,c[u]);return{c(){e=q(s[2]?"a":"button"),a=w(s[0]),o=x(),d&&d.c(),this.h()},l(u){e=A(u,((s[2]?"a":"button")||"null").toUpperCase(),{role:!0,class:!0,"aria-selected":!0,"aria-controls":!0,tabindex:!0,id:!0,href:!0,"data-testid":!0});var b=L(e);a=$(b,s[0]),o=ee(b),d&&d.l(b),b.forEach(g),this.h()},h(){/-/.test(s[2]?"a":"button")?Q(e,_):T(e,_),v(e,"active",s[5]),v(e,"disabled",s[4]),v(e,"svelte-ksdfzl",!0)},m(u,b){P(u,e,b),R(e,a),R(e,o),d&&d.m(e,null),f=!0,n||(l=te(e,"click",s[7]),n=!0)},p(u,b){(!f||b&1)&&le(a,u[0]),d&&d.p&&(!f||b&8192)&&U(d,r,u,u[13],f?B(r,u[13],b,null):V(u[13]),null),_=G(c,[{role:"tab"},{class:"tab"},(!f||b&32)&&{"aria-selected":u[5]},(!f||b&8)&&{"aria-controls":u[3]},(!f||b&32&&t!==(t=u[5]?0:-1))&&{tabindex:t},(!f||b&2)&&{id:u[1]},(!f||b&4)&&{href:u[2]},(!f||b&258&&i!==(i=u[1]??u[8]["data-testid"]))&&{"data-testid":i},b&512&&u[9]]),/-/.test(u[2]?"a":"button")?Q(e,_):T(e,_),v(e,"active",u[5]),v(e,"disabled",u[4]),v(e,"svelte-ksdfzl",!0)},i(u){f||(z(d,u),f=!0)},o(u){O(d,u),f=!1},d(u){u&&g(e),d&&d.d(u),n=!1,l()}}}function ue(s){let e=s[2]?"a":"button",a,o,t=(s[2]?"a":"button")&&D(s);return{c(){t&&t.c(),a=K()},l(i){t&&t.l(i),a=K()},m(i,f){t&&t.m(i,f),P(i,a,f),o=!0},p(i,[f]){i[2],e?N(e,i[2]?"a":"button")?(t.d(1),t=D(i),t.c(),t.m(a.parentNode,a)):t.p(i,f):(t=D(i),t.c(),t.m(a.parentNode,a)),e=i[2]?"a":"button"},i(i){o||(z(t),o=!0)},o(i){O(t),o=!1},d(i){i&&g(a),t&&t.d(i)}}}function fe(s,e,a){let o;const t=["label","id","href","panelId","disabled","active","onClick"];let i=k(e,t),f,{$$slots:n={},$$scope:l}=e,{label:r}=e,{id:d}=e,{href:c=null}=e,{panelId:_=null}=e,{disabled:u=!1}=e,{active:b=null}=e,{onClick:C=se}=e;const{registerTab:W,selectTab:X,activeTab:H}=y(M);p(s,H,m=>a(12,f=m)),W(d);const Y=()=>{X(d),C&&C()};return s.$$set=m=>{a(8,e=h(h({},e),I(m))),a(9,i=k(e,t)),"label"in m&&a(0,r=m.label),"id"in m&&a(1,d=m.id),"href"in m&&a(2,c=m.href),"panelId"in m&&a(3,_=m.panelId),"disabled"in m&&a(4,u=m.disabled),"active"in m&&a(10,b=m.active),"onClick"in m&&a(11,C=m.onClick),"$$scope"in m&&a(13,l=m.$$scope)},s.$$.update=()=>{s.$$.dirty&5122&&a(5,o=ae(b)?f===d:b)},e=I(e),[r,d,c,_,u,o,H,Y,e,i,b,C,f,l,n]}class me extends E{constructor(e){super(),S(this,e,fe,ue,N,{label:0,id:1,href:2,panelId:3,disabled:4,active:10,onClick:11})}}function oe(s){let e,a,o;const t=s[4].default,i=j(t,s,s[3],null);let f=[{class:a="tab-list "+s[1]},{role:"tablist"},{"aria-label":s[0]},s[2]],n={};for(let l=0;l<f.length;l+=1)n=h(n,f[l]);return{c(){e=q("div"),i&&i.c(),this.h()},l(l){e=A(l,"DIV",{class:!0,role:!0,"aria-label":!0});var r=L(e);i&&i.l(r),r.forEach(g),this.h()},h(){T(e,n),v(e,"svelte-zg0616",!0)},m(l,r){P(l,e,r),i&&i.m(e,null),o=!0},p(l,[r]){i&&i.p&&(!o||r&8)&&U(i,t,l,l[3],o?B(t,l[3],r,null):V(l[3]),null),T(e,n=G(f,[(!o||r&2&&a!==(a="tab-list "+l[1]))&&{class:a},{role:"tablist"},(!o||r&1)&&{"aria-label":l[0]},r&4&&l[2]])),v(e,"svelte-zg0616",!0)},i(l){o||(z(i,l),o=!0)},o(l){O(i,l),o=!1},d(l){l&&g(e),i&&i.d(l)}}}function re(s,e,a){const o=["label","class"];let t=k(e,o),{$$slots:i={},$$scope:f}=e,{label:n}=e,{class:l=""}=e;return s.$$set=r=>{e=h(h({},e),I(r)),a(2,t=k(e,o)),"label"in r&&a(0,n=r.label),"class"in r&&a(1,l=r.class),"$$scope"in r&&a(3,f=r.$$scope)},[n,l,t,f,i]}class he extends E{constructor(e){super(),S(this,e,re,oe,N,{label:0,class:1})}}export{be as T,he as a,me as b,M as c};
