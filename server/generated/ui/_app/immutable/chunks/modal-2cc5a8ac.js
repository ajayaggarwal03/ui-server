import{S as ue,i as de,s as _e,e as $,b as M,R as U,U as z,f as h,g as O,t as T,d as P,h as m,L as me,F as x,k as E,a as K,w as Q,l as C,m as I,c as A,x as R,n as b,Q as ee,K as y,y as Z,B as J,G as te,H as le,I as ne,z as W,D as be,q as G,r as L,u as re,Z as he}from"./index-eadb3ae7.js";import{I as ge}from"./icon-4da365da.js";import{B as ce}from"./button-ff549de6.js";const ve=n=>({}),ae=n=>({}),pe=n=>({}),ie=n=>({});function se(n){let e,t,l,a,i,o,u,D,B,v,p,N,_,w,q,r=!n[7]&&oe(n);const F=n[12].title,S=x(F,n,n[15],ie),s=S||ke(),j=n[12].content,V=x(j,n,n[15],ae),g=V||ye();p=new ce({props:{thin:!0,variant:"secondary",disabled:n[7],$$slots:{default:[Te]},$$scope:{ctx:n}}}),p.$on("click",n[10]);let c=!n[1]&&fe(n);return{c(){e=E("div"),t=E("div"),l=K(),a=E("div"),r&&r.c(),i=K(),o=E("div"),s&&s.c(),u=K(),D=E("div"),g&&g.c(),B=K(),v=E("div"),Q(p.$$.fragment),N=K(),c&&c.c(),this.h()},l(f){e=C(f,"DIV",{class:!0});var d=I(e);t=C(d,"DIV",{class:!0}),I(t).forEach(m),l=A(d),a=C(d,"DIV",{class:!0,tabindex:!0,role:!0,"aria-labelledby":!0,"aria-describedby":!0});var k=I(a);r&&r.l(k),i=A(k),o=C(k,"DIV",{id:!0,class:!0});var X=I(o);s&&s.l(X),X.forEach(m),u=A(k),D=C(k,"DIV",{id:!0,class:!0});var Y=I(D);g&&g.l(Y),Y.forEach(m),B=A(k),v=C(k,"DIV",{class:!0});var H=I(v);R(p.$$.fragment,H),N=A(H),c&&c.l(H),H.forEach(m),k.forEach(m),d.forEach(m),this.h()},h(){b(t,"class","overlay svelte-1vnvb5j"),b(o,"id","modal-title"),b(o,"class","title svelte-1vnvb5j"),b(D,"id","modal-content"),b(D,"class","content svelte-1vnvb5j"),b(v,"class","flex items-center justify-end space-x-2 p-6"),b(a,"class","body svelte-1vnvb5j"),b(a,"tabindex","-1"),b(a,"role","alertdialog"),b(a,"aria-labelledby","modal-title"),b(a,"aria-describedby","modal-description"),ee(a,"large",n[6]),b(e,"class","modal svelte-1vnvb5j")},m(f,d){M(f,e,d),y(e,t),y(e,l),y(e,a),r&&r.m(a,null),y(a,i),y(a,o),s&&s.m(o,null),y(a,u),y(a,D),g&&g.m(D,null),y(a,B),y(a,v),Z(p,v,null),y(v,N),c&&c.m(v,null),n[14](a),_=!0,w||(q=[U(t,"keyup",z(J)),U(t,"click",z(n[10]))],w=!0)},p(f,d){f[7]?r&&(O(),T(r,1,1,()=>{r=null}),P()):r?(r.p(f,d),d&128&&h(r,1)):(r=oe(f),r.c(),h(r,1),r.m(a,i)),S&&S.p&&(!_||d&32768)&&te(S,F,f,f[15],_?ne(F,f[15],d,pe):le(f[15]),ie),V&&V.p&&(!_||d&32768)&&te(V,j,f,f[15],_?ne(j,f[15],d,ve):le(f[15]),ae);const k={};d&128&&(k.disabled=f[7]),d&32776&&(k.$$scope={dirty:d,ctx:f}),p.$set(k),f[1]?c&&(O(),T(c,1,1,()=>{c=null}),P()):c?(c.p(f,d),d&2&&h(c,1)):(c=fe(f),c.c(),h(c,1),c.m(v,null)),(!_||d&64)&&ee(a,"large",f[6])},i(f){_||(h(r),h(s,f),h(g,f),h(p.$$.fragment,f),h(c),_=!0)},o(f){T(r),T(s,f),T(g,f),T(p.$$.fragment,f),T(c),_=!1},d(f){f&&m(e),r&&r.d(),s&&s.d(f),g&&g.d(f),W(p),c&&c.d(),n[14](null),w=!1,be(q)}}}function oe(n){let e,t,l,a,i;return t=new ge({props:{name:"close",class:"cursor-pointer rounded-full hover:bg-gray-900 hover:text-white"}}),{c(){e=E("button"),Q(t.$$.fragment),this.h()},l(o){e=C(o,"BUTTON",{"aria-label":!0,class:!0});var u=I(e);R(t.$$.fragment,u),u.forEach(m),this.h()},h(){b(e,"aria-label",n[3]),b(e,"class","float-right m-4")},m(o,u){M(o,e,u),Z(t,e,null),l=!0,a||(i=U(e,"click",z(n[10])),a=!0)},p(o,u){(!l||u&8)&&b(e,"aria-label",o[3])},i(o){l||(h(t.$$.fragment,o),l=!0)},o(o){T(t.$$.fragment,o),l=!1},d(o){o&&m(e),W(t),a=!1,i()}}}function ke(n){let e,t;return{c(){e=E("h3"),t=G("Title")},l(l){e=C(l,"H3",{});var a=I(e);t=L(a,"Title"),a.forEach(m)},m(l,a){M(l,e,a),y(e,t)},p:J,d(l){l&&m(e)}}}function ye(n){let e,t;return{c(){e=E("span"),t=G("Content")},l(l){e=C(l,"SPAN",{});var a=I(e);t=L(a,"Content"),a.forEach(m)},m(l,a){M(l,e,a),y(e,t)},p:J,d(l){l&&m(e)}}}function Te(n){let e;return{c(){e=G(n[3])},l(t){e=L(t,n[3])},m(t,l){M(t,e,l)},p(t,l){l&8&&re(e,t[3])},d(t){t&&m(e)}}}function fe(n){let e,t;return e=new ce({props:{thin:!0,variant:n[4],loading:n[7],disabled:n[5]||n[7],dataCy:"confirm-modal-button",$$slots:{default:[De]},$$scope:{ctx:n}}}),e.$on("click",n[13]),{c(){Q(e.$$.fragment)},l(l){R(e.$$.fragment,l)},m(l,a){Z(e,l,a),t=!0},p(l,a){const i={};a&16&&(i.variant=l[4]),a&128&&(i.loading=l[7]),a&160&&(i.disabled=l[5]||l[7]),a&32772&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function De(n){let e;return{c(){e=G(n[2])},l(t){e=L(t,n[2])},m(t,l){M(t,e,l)},p(t,l){l&4&&re(e,t[2])},d(t){t&&m(e)}}}function Ee(n){let e,t,l,a,i=n[0]&&se(n);return{c(){i&&i.c(),e=$()},l(o){i&&i.l(o),e=$()},m(o,u){i&&i.m(o,u),M(o,e,u),t=!0,l||(a=U(window,"keydown",z(n[11])),l=!0)},p(o,[u]){o[0]?i?(i.p(o,u),u&1&&h(i,1)):(i=se(o),i.c(),h(i,1),i.m(e.parentNode,e)):i&&(O(),T(i,1,1,()=>{i=null}),P())},i(o){t||(h(i),t=!0)},o(o){T(i),t=!1},d(o){i&&i.d(o),o&&m(e),l=!1,a()}}}function Ce(n,e,t){let{$$slots:l={},$$scope:a}=e,{open:i=!1}=e,{hideConfirm:o=!1}=e,{confirmText:u="Confirm"}=e,{cancelText:D="Cancel"}=e,{confirmType:B="primary"}=e,{confirmDisabled:v=!1}=e,{large:p=!1}=e,{loading:N=!1}=e,_;const w=me(),q=()=>{w("cancelModal")},r=s=>{if(!i)return;if(s.key==="Escape"){q();return}const j=_.querySelectorAll("button"),V=j[0],g=j[j.length-1];s.key==="Tab"&&(s.shiftKey?document.activeElement===V&&(g.focus(),s.preventDefault()):document.activeElement===g&&(V.focus(),s.preventDefault()))},F=()=>w("confirmModal");function S(s){he[s?"unshift":"push"](()=>{_=s,t(8,_)})}return n.$$set=s=>{"open"in s&&t(0,i=s.open),"hideConfirm"in s&&t(1,o=s.hideConfirm),"confirmText"in s&&t(2,u=s.confirmText),"cancelText"in s&&t(3,D=s.cancelText),"confirmType"in s&&t(4,B=s.confirmType),"confirmDisabled"in s&&t(5,v=s.confirmDisabled),"large"in s&&t(6,p=s.large),"loading"in s&&t(7,N=s.loading),"$$scope"in s&&t(15,a=s.$$scope)},n.$$.update=()=>{n.$$.dirty&257&&i&&_&&_.focus()},[i,o,u,D,B,v,p,N,_,w,q,r,l,F,S,a]}class Ve extends ue{constructor(e){super(),de(this,e,Ce,Ee,_e,{open:0,hideConfirm:1,confirmText:2,cancelText:3,confirmType:4,confirmDisabled:5,large:6,loading:7})}}export{Ve as M};
