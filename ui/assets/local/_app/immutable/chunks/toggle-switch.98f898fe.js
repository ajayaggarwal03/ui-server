import{S as R,i as U,s as Z,k as E,a as N,l as S,m as A,c as L,h as _,n as o,D as c,b as T,F as r,H as P,R as q,J as j,Z as B,a1 as F,q as D,r as I,u as J,O as z}from"./index.bac36631.js";function M(s){let e,a;return{c(){e=E("span"),a=D(s[3]),this.h()},l(l){e=S(l,"SPAN",{class:!0});var n=A(e);a=I(n,s[3]),n.forEach(_),this.h()},h(){o(e,"class","label left svelte-1v2tp6b"),c(e,"sr-only",s[5])},m(l,n){T(l,e,n),r(e,a)},p(l,n){n&8&&J(a,l[3]),n&32&&c(e,"sr-only",l[5])},d(l){l&&_(e)}}}function C(s){let e,a;return{c(){e=E("span"),a=D(s[3]),this.h()},l(l){e=S(l,"SPAN",{class:!0});var n=A(e);a=I(n,s[3]),n.forEach(_),this.h()},h(){o(e,"class","label right svelte-1v2tp6b"),c(e,"sr-only",s[5])},m(l,n){T(l,e,n),r(e,a)},p(l,n){n&8&&J(a,l[3]),n&32&&c(e,"sr-only",l[5])},d(l){l&&_(e)}}}function G(s){let e,a,l,n,f,b,g,m,k,v,d=s[4]==="left"&&M(s),h=s[4]==="right"&&C(s);return{c(){e=E("label"),d&&d.c(),a=N(),l=E("input"),n=N(),f=E("span"),b=E("span"),g=N(),h&&h.c(),this.h()},l(i){e=S(i,"LABEL",{class:!0,"data-testid":!0});var t=A(e);d&&d.l(t),a=L(t),l=S(t,"INPUT",{id:!0,type:!0,class:!0,role:!0}),n=L(t),f=S(t,"SPAN",{class:!0});var H=A(f);b=S(H,"SPAN",{class:!0}),A(b).forEach(_),H.forEach(_),g=L(t),h&&h.l(t),t.forEach(_),this.h()},h(){o(l,"id",s[1]),l.disabled=s[2],o(l,"type","checkbox"),o(l,"class","checkbox svelte-1v2tp6b"),o(l,"role","switch"),o(b,"class","thumb svelte-1v2tp6b"),c(b,"checked",s[0]),o(f,"class","slider svelte-1v2tp6b"),c(f,"disabled",s[2]),c(f,"checked",s[0]),c(f,"focused",s[6]),c(f,"hovered",s[7]),o(e,"class","switch svelte-1v2tp6b"),o(e,"data-testid",m=s[12]["data-testid"]),c(e,"disabled",s[2])},m(i,t){T(i,e,t),d&&d.m(e,null),r(e,a),r(e,l),l.checked=s[0],r(e,n),r(e,f),r(f,b),r(e,g),h&&h.m(e,null),k||(v=[P(l,"change",s[13]),P(l,"change",s[14]),P(l,"focus",s[8]),P(l,"blur",s[9]),P(f,"mouseenter",s[10]),P(f,"mouseleave",s[11])],k=!0)},p(i,[t]){i[4]==="left"?d?d.p(i,t):(d=M(i),d.c(),d.m(e,a)):d&&(d.d(1),d=null),t&2&&o(l,"id",i[1]),t&4&&(l.disabled=i[2]),t&1&&(l.checked=i[0]),t&1&&c(b,"checked",i[0]),t&4&&c(f,"disabled",i[2]),t&1&&c(f,"checked",i[0]),t&64&&c(f,"focused",i[6]),t&128&&c(f,"hovered",i[7]),i[4]==="right"?h?h.p(i,t):(h=C(i),h.c(),h.m(e,null)):h&&(h.d(1),h=null),t&4096&&m!==(m=i[12]["data-testid"])&&o(e,"data-testid",m),t&4&&c(e,"disabled",i[2])},i:q,o:q,d(i){i&&_(e),d&&d.d(),h&&h.d(),k=!1,j(v)}}}function K(s,e,a){let{checked:l=!1}=e,{id:n}=e,{disabled:f=!1}=e,{label:b}=e,{labelPosition:g="right"}=e,{labelHidden:m=!1}=e,k=!1,v=!1;const d=()=>{a(6,k=!0)},h=()=>{a(6,k=!1)},i=()=>{a(7,v=!0)},t=()=>{a(7,v=!1)};function H(u){z.call(this,s,u)}function O(){l=this.checked,a(0,l)}return s.$$set=u=>{a(12,e=B(B({},e),F(u))),"checked"in u&&a(0,l=u.checked),"id"in u&&a(1,n=u.id),"disabled"in u&&a(2,f=u.disabled),"label"in u&&a(3,b=u.label),"labelPosition"in u&&a(4,g=u.labelPosition),"labelHidden"in u&&a(5,m=u.labelHidden)},e=F(e),[l,n,f,b,g,m,k,v,d,h,i,t,e,H,O]}class V extends R{constructor(e){super(),U(this,e,K,G,Z,{checked:0,id:1,disabled:2,label:3,labelPosition:4,labelHidden:5})}}export{V as T};
