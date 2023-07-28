import{S as he,b as be,a as ve,G as te,N as W,m as B,c as R,C as X,p as G,q as H,d as z,k as E,D as Y,u as D,Q as le,R as j,f as Q,L as T,E as Z,T as U,V as Te,ad as Ee,j as v,z as ae,g as p,h as ie,H as se,I as ne,J as oe,U as ke,F as w,r as De,a5 as fe,M as pe,O as re,w as x,x as $,y as ee,A as Ce}from"./index.c37b9eda.js";import{B as _e}from"./button.eb68e3f0.js";import{I as Ne}from"./tooltip.56f72e8c.js";const ye=l=>({}),ce=l=>({}),Me=l=>({}),de=l=>({});function ue(l){let t,i;return t=new Ne({props:{"aria-label":l[2],icon:"close",class:"float-right m-4"}}),t.$on("click",l[12]),{c(){X(t.$$.fragment)},l(a){Y(t.$$.fragment,a)},m(a,n){Z(t,a,n),i=!0},p(a,n){const m={};n&4&&(m["aria-label"]=a[2]),t.$set(m)},i(a){i||(v(t.$$.fragment,a),i=!0)},o(a){p(t.$$.fragment,a),i=!1},d(a){w(t,a)}}}function me(l){let t,i;return{c(){t=B("p"),i=x(l[11]),this.h()},l(a){t=G(a,"P",{class:!0});var n=H(t);i=$(n,l[11]),n.forEach(E),this.h()},h(){D(t,"class","mt-2 text-sm font-normal text-danger")},m(a,n){Q(a,t,n),T(t,i)},p(a,n){n&2048&&ee(i,a[11])},d(a){a&&E(t)}}}function Ie(l){let t;return{c(){t=x(l[2])},l(i){t=$(i,l[2])},m(i,a){Q(i,t,a)},p(i,a){a&4&&ee(t,i[2])},d(i){i&&E(t)}}}function ge(l){let t,i;return t=new _e({props:{thin:!0,variant:l[3],loading:l[6],disabled:l[4]||l[6],testId:"confirm-modal-button",type:"submit",$$slots:{default:[Ae]},$$scope:{ctx:l}}}),{c(){X(t.$$.fragment)},l(a){Y(t.$$.fragment,a)},m(a,n){Z(t,a,n),i=!0},p(a,n){const m={};n&8&&(m.variant=a[3]),n&64&&(m.loading=a[6]),n&80&&(m.disabled=a[4]||a[6]),n&8388610&&(m.$$scope={dirty:n,ctx:a}),t.$set(m)},i(a){i||(v(t.$$.fragment,a),i=!0)},o(a){p(t.$$.fragment,a),i=!1},d(a){w(t,a)}}}function Ae(l){let t;return{c(){t=x(l[1])},l(i){t=$(i,l[1])},m(i,a){Q(i,t,a)},p(i,a){a&2&&ee(t,i[1])},d(i){i&&E(t)}}}function Fe(l){let t,i,a,n,m,_,g,F,N,V,h,b,q,y,M,c,I,K,f=!l[6]&&ue(l);const L=l[21].title,o=te(L,l,l[23],de),O=l[21].content,u=te(O,l,l[23],ce);let d=l[11]&&me(l);b=new _e({props:{thin:!0,variant:"secondary",disabled:l[6],$$slots:{default:[Ie]},$$scope:{ctx:l}}}),b.$on("click",l[12]);let r=!l[0]&&ge(l),P=[{id:l[8]},{class:y="body "+l[9]},{"aria-modal":"true"},{"aria-labelledby":"modal-title"},{"data-testid":M=l[16]["data-testid"]},l[17]],S={};for(let e=0;e<P.length;e+=1)S=W(S,P[e]);return{c(){t=B("dialog"),f&&f.c(),i=R(),a=B("div"),o&&o.c(),m=R(),_=B("form"),g=B("div"),u&&u.c(),F=R(),d&&d.c(),V=R(),h=B("div"),X(b.$$.fragment),q=R(),r&&r.c(),this.h()},l(e){t=G(e,"DIALOG",{id:!0,class:!0,"aria-modal":!0,"aria-labelledby":!0,"data-testid":!0});var s=H(t);f&&f.l(s),i=z(s),a=G(s,"DIV",{id:!0,class:!0});var k=H(a);o&&o.l(k),k.forEach(E),m=z(s),_=G(s,"FORM",{method:!0});var A=H(_);g=G(A,"DIV",{id:!0,class:!0});var C=H(g);u&&u.l(C),F=z(C),d&&d.l(C),C.forEach(E),V=z(A),h=G(A,"DIV",{class:!0});var J=H(h);Y(b.$$.fragment,J),q=z(J),r&&r.l(J),J.forEach(E),A.forEach(E),s.forEach(E),this.h()},h(){D(a,"id",n="modal-title-"+l[8]),D(a,"class","title svelte-9mpp9v"),D(g,"id",N="modal-content-"+l[8]),D(g,"class","content svelte-9mpp9v"),D(h,"class","flex items-center justify-end space-x-2 p-6"),D(_,"method","dialog"),le(t,S),j(t,"large",l[5]),j(t,"hightlightNav",l[7]),j(t,"svelte-9mpp9v",!0)},m(e,s){Q(e,t,s),f&&f.m(t,null),T(t,i),T(t,a),o&&o.m(a,null),T(t,m),T(t,_),T(_,g),u&&u.m(g,null),T(g,F),d&&d.m(g,null),T(_,V),T(_,h),Z(b,h,null),T(h,q),r&&r.m(h,null),l[22](t),c=!0,I||(K=[U(window,"click",l[15]),U(window,"keydown",Te(l[14])),U(_,"submit",Ee(l[13]))],I=!0)},p(e,[s]){e[6]?f&&(ae(),p(f,1,1,()=>{f=null}),ie()):f?(f.p(e,s),s&64&&v(f,1)):(f=ue(e),f.c(),v(f,1),f.m(t,i)),o&&o.p&&(!c||s&8388608)&&se(o,L,e,e[23],c?oe(L,e[23],s,Me):ne(e[23]),de),(!c||s&256&&n!==(n="modal-title-"+e[8]))&&D(a,"id",n),u&&u.p&&(!c||s&8388608)&&se(u,O,e,e[23],c?oe(O,e[23],s,ye):ne(e[23]),ce),e[11]?d?d.p(e,s):(d=me(e),d.c(),d.m(g,null)):d&&(d.d(1),d=null),(!c||s&256&&N!==(N="modal-content-"+e[8]))&&D(g,"id",N);const k={};s&64&&(k.disabled=e[6]),s&8388612&&(k.$$scope={dirty:s,ctx:e}),b.$set(k),e[0]?r&&(ae(),p(r,1,1,()=>{r=null}),ie()):r?(r.p(e,s),s&1&&v(r,1)):(r=ge(e),r.c(),v(r,1),r.m(h,null)),le(t,S=ke(P,[(!c||s&256)&&{id:e[8]},(!c||s&512&&y!==(y="body "+e[9]))&&{class:y},{"aria-modal":"true"},{"aria-labelledby":"modal-title"},(!c||s&65536&&M!==(M=e[16]["data-testid"]))&&{"data-testid":M},s&131072&&e[17]])),j(t,"large",e[5]),j(t,"hightlightNav",e[7]),j(t,"svelte-9mpp9v",!0)},i(e){c||(v(f),v(o,e),v(u,e),v(b.$$.fragment,e),v(r),c=!0)},o(e){p(f),p(o,e),p(u,e),p(b.$$.fragment,e),p(r),c=!1},d(e){e&&E(t),f&&f.d(),o&&o.d(e),u&&u.d(e),d&&d.d(),w(b),r&&r.d(),l[22](null),I=!1,De(K)}}}function Ve(l,t,i){const a=["hideConfirm","confirmText","cancelText","confirmType","confirmDisabled","large","loading","hightlightNav","id","open","close","setError","class"];let n=fe(t,a),{$$slots:m={},$$scope:_}=t,{hideConfirm:g=!1}=t,{confirmText:F="Confirm"}=t,{cancelText:N="Cancel"}=t,{confirmType:V="primary"}=t,{confirmDisabled:h=!1}=t,{large:b=!1}=t,{loading:q=!1}=t,{hightlightNav:y=!1}=t,{id:M}=t,c;const I=()=>o.showModal(),K=()=>{i(11,c=""),o.close()},f=e=>{i(11,c=e)};let{class:L=""}=t,o;const O=pe(),u=()=>{K(),O("cancelModal")},d=()=>{i(11,c=""),O("confirmModal")},r=e=>{if(!I)return;const s=Array.from(o.querySelectorAll('button, input, div[contenteditable="true"]')).filter(C=>C instanceof HTMLDivElement?C.isContentEditable:!C.disabled),k=s[0],A=s[s.length-1];e.key==="Tab"&&(e.shiftKey?document.activeElement===k&&(A.focus(),e.preventDefault()):document.activeElement===A&&(k.focus(),e.preventDefault()))},P=e=>{e.target===o&&u()};function S(e){Ce[e?"unshift":"push"](()=>{o=e,i(10,o)})}return l.$$set=e=>{i(16,t=W(W({},t),re(e))),i(17,n=fe(t,a)),"hideConfirm"in e&&i(0,g=e.hideConfirm),"confirmText"in e&&i(1,F=e.confirmText),"cancelText"in e&&i(2,N=e.cancelText),"confirmType"in e&&i(3,V=e.confirmType),"confirmDisabled"in e&&i(4,h=e.confirmDisabled),"large"in e&&i(5,b=e.large),"loading"in e&&i(6,q=e.loading),"hightlightNav"in e&&i(7,y=e.hightlightNav),"id"in e&&i(8,M=e.id),"class"in e&&i(9,L=e.class),"$$scope"in e&&i(23,_=e.$$scope)},l.$$.update=()=>{l.$$.dirty&1024&&I&&o&&o.focus()},t=re(t),[g,F,N,V,h,b,q,y,M,L,o,c,u,d,r,P,t,n,I,K,f,m,S,_]}class Se extends he{constructor(t){super(),be(this,t,Ve,Fe,ve,{hideConfirm:0,confirmText:1,cancelText:2,confirmType:3,confirmDisabled:4,large:5,loading:6,hightlightNav:7,id:8,open:18,close:19,setError:20,class:9})}get open(){return this.$$.ctx[18]}get close(){return this.$$.ctx[19]}get setError(){return this.$$.ctx[20]}}export{Se as M};
