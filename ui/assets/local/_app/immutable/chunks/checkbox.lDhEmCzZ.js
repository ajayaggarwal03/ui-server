import{s as fe,A as J,p as oe,e as D,a as U,b as T,d as j,h as W,g as C,C as Q,B as _,j as z,V as R,k as K,l as y,m as N,D as p,u as de,q as he,r as _e,E as be,F as X,o as me,G as ke,t as $,f as ee,n as le,H as V,_ as ge}from"./scheduler.1-F21fJx.js";import{S as ve,i as qe,g as Ee,b as F,e as ze,t as G,c as ae,a as te,m as se,d as ie}from"./index.biMfyfPX.js";import{t as Y,g as ye}from"./tw-merge.k1eX69SP.js";import{I as ne}from"./icon.V_dxC4Sf.js";import{o as Z}from"./translate.u3aqOlwm.js";const Ce=t=>({}),w=t=>({});function He(t){let e,l;return e=new ne({props:{class:"absolute left-0 top-0 h-4 w-4",name:"checkmark",strokeWidth:3}}),{c(){ae(e.$$.fragment)},l(a){te(e.$$.fragment,a)},m(a,r){se(e,a,r),l=!0},i(a){l||(G(e.$$.fragment,a),l=!0)},o(a){F(e.$$.fragment,a),l=!1},d(a){ie(e,a)}}}function Ae(t){let e,l;return e=new ne({props:{class:"absolute left-0 top-0 h-4 w-4",name:"hyphen"}}),{c(){ae(e.$$.fragment)},l(a){te(e.$$.fragment,a)},m(a,r){se(e,a,r),l=!0},i(a){l||(G(e.$$.fragment,a),l=!0)},o(a){F(e.$$.fragment,a),l=!1},d(a){ie(e,a)}}}function Ne(t){let e,l;return{c(){e=D("span"),l=$(t[2]),this.h()},l(a){e=T(a,"SPAN",{class:!0});var r=j(e);l=ee(r,t[2]),r.forEach(C),this.h()},h(){z(e,"class","label svelte-6zrn7c"),_(e,"sr-only",t[3])},m(a,r){K(a,e,r),y(e,l)},p(a,r){r&4&&le(l,a[2]),r&8&&_(e,"sr-only",a[3])},d(a){a&&C(e)}}}function x(t){let e,l;return{c(){e=D("span"),l=$(t[9]),this.h()},l(a){e=T(a,"SPAN",{class:!0});var r=j(e);l=ee(r,t[9]),r.forEach(C),this.h()},h(){z(e,"class","error svelte-6zrn7c")},m(a,r){K(a,e,r),y(e,l)},p(a,r){r&512&&le(l,a[9])},d(a){a&&C(e)}}}function Pe(t){let e,l,a,r,b,o,u,k,H,P,E,c,S,g,h=[{id:t[1]},{__value:t[7]},{type:"checkbox"},{disabled:t[5]},{required:t[10]},Z(t[14],"data-testid")],A={};for(let s=0;s<h.length;s+=1)A=J(A,h[s]);const B=[Ae,He],v=[];function L(s,n){return s[4]?0:s[0]?1:-1}~(o=L(t))&&(u=v[o]=B[o](t));const q=t[17].label,I=oe(q,t,t[16],w),d=I||Ne(t);let f=!t[8]&&t[9]&&x(t);return{c(){e=D("div"),l=D("label"),a=D("input"),r=U(),b=D("span"),u&&u.c(),k=U(),d&&d.c(),P=U(),f&&f.c(),this.h()},l(s){e=T(s,"DIV",{"data-testid":!0,class:!0});var n=j(e);l=T(n,"LABEL",{class:!0});var m=j(l);a=T(m,"INPUT",{id:!0,type:!0}),r=W(m),b=T(m,"SPAN",{class:!0});var M=j(b);u&&u.l(M),M.forEach(C),k=W(m),d&&d.l(m),m.forEach(C),P=W(n),f&&f.l(n),n.forEach(C),this.h()},h(){Q(a,A),_(a,"indeterminate",t[4]),_(a,"svelte-6zrn7c",!0),z(b,"class","checkmark svelte-6zrn7c"),_(b,"disabled",t[5]),_(b,"invalid",!t[8]),z(l,"class",H=R(Y("checkbox","text-primary",t[11]))+" svelte-6zrn7c"),_(l,"hoverable",t[6]&&!t[5]),_(l,"disabled",t[5]),z(e,"data-testid",E=t[14]["data-testid"]??null),z(e,"class","svelte-6zrn7c")},m(s,n){K(s,e,n),y(e,l),y(l,a),a.autofocus&&a.focus(),a.checked=t[0],t[24](a),y(l,r),y(l,b),~o&&v[o].m(b,null),y(l,k),d&&d.m(l,null),y(e,P),f&&f.m(e,null),c=!0,S||(g=[N(a,"click",p(t[22])),N(a,"change",t[13]),N(a,"change",t[23]),N(l,"click",t[20]),N(l,"keypress",t[21]),N(e,"click",p(t[18])),N(e,"keypress",p(t[19]))],S=!0)},p(s,[n]){Q(a,A=ye(h,[(!c||n&2)&&{id:s[1]},(!c||n&128)&&{__value:s[7]},{type:"checkbox"},(!c||n&32)&&{disabled:s[5]},(!c||n&1024)&&{required:s[10]},n&16384&&Z(s[14],"data-testid")])),n&1&&(a.checked=s[0]),_(a,"indeterminate",s[4]),_(a,"svelte-6zrn7c",!0);let m=o;o=L(s),o!==m&&(u&&(Ee(),F(v[m],1,1,()=>{v[m]=null}),ze()),~o?(u=v[o],u||(u=v[o]=B[o](s),u.c()),G(u,1),u.m(b,null)):u=null),(!c||n&32)&&_(b,"disabled",s[5]),(!c||n&256)&&_(b,"invalid",!s[8]),I?I.p&&(!c||n&65536)&&de(I,q,s,s[16],c?_e(q,s[16],n,Ce):he(s[16]),w):d&&d.p&&(!c||n&12)&&d.p(s,c?n:-1),(!c||n&2048&&H!==(H=R(Y("checkbox","text-primary",s[11]))+" svelte-6zrn7c"))&&z(l,"class",H),(!c||n&2144)&&_(l,"hoverable",s[6]&&!s[5]),(!c||n&2080)&&_(l,"disabled",s[5]),!s[8]&&s[9]?f?f.p(s,n):(f=x(s),f.c(),f.m(e,null)):f&&(f.d(1),f=null),(!c||n&16384&&E!==(E=s[14]["data-testid"]??null))&&z(e,"data-testid",E)},i(s){c||(G(u),G(d,s),c=!0)},o(s){F(u),F(d,s),c=!1},d(s){s&&C(e),t[24](null),~o&&v[o].d(),d&&d.d(s),f&&f.d(),S=!1,be(g)}}}function Se(t,e,l){const a=["id","checked","label","labelHidden","indeterminate","disabled","hoverable","value","group","valid","error","required","class"];let r=X(e,a),{$$slots:b={},$$scope:o}=e,{id:u=""}=e,{checked:k=!1}=e,{label:H=""}=e,{labelHidden:P=!1}=e,{indeterminate:E=!1}=e,{disabled:c=!1}=e,{hoverable:S=!1}=e,{value:g=void 0}=e,{group:h=void 0}=e,{valid:A=!0}=e,{error:B=""}=e,{required:v=!1}=e,{class:L=""}=e,q;const I=me(),d=i=>{const{checked:O}=i.currentTarget;h!==void 0&&(O?l(15,h=[...h,g]):l(15,h=h.filter(ue=>ue!==g))),l(0,k=O),I("change",{checked:i.currentTarget.checked,value:g})};function f(i){V.call(this,t,i)}function s(i){V.call(this,t,i)}function n(i){V.call(this,t,i)}function m(i){V.call(this,t,i)}function M(i){V.call(this,t,i)}function re(){k=this.checked,l(0,k),l(15,h),l(7,g)}function ce(i){ge[i?"unshift":"push"](()=>{q=i,l(12,q),l(4,E)})}return t.$$set=i=>{e=J(J({},e),ke(i)),l(14,r=X(e,a)),"id"in i&&l(1,u=i.id),"checked"in i&&l(0,k=i.checked),"label"in i&&l(2,H=i.label),"labelHidden"in i&&l(3,P=i.labelHidden),"indeterminate"in i&&l(4,E=i.indeterminate),"disabled"in i&&l(5,c=i.disabled),"hoverable"in i&&l(6,S=i.hoverable),"value"in i&&l(7,g=i.value),"group"in i&&l(15,h=i.group),"valid"in i&&l(8,A=i.valid),"error"in i&&l(9,B=i.error),"required"in i&&l(10,v=i.required),"class"in i&&l(11,L=i.class),"$$scope"in i&&l(16,o=i.$$scope)},t.$$.update=()=>{t.$$.dirty&4112&&q!==void 0&&l(12,q.indeterminate=E,q),t.$$.dirty&32897&&l(0,k=h!==void 0?h.includes(g):k)},[k,u,H,P,E,c,S,g,A,B,v,L,q,d,r,h,o,b,f,s,n,m,M,re,ce]}class Ve extends ve{constructor(e){super(),qe(this,e,Se,Pe,fe,{id:1,checked:0,label:2,labelHidden:3,indeterminate:4,disabled:5,hoverable:6,value:7,group:15,valid:8,error:9,required:10,class:11})}}export{Ve as C};
