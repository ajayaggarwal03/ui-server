import{s as j,e as d,a as x,t as S,b as h,d as y,h as C,f as I,g as p,j as u,k as U,l as g,n as O,R as T,z as E,A,U as q,v,Q as R}from"./scheduler.C_j45nO4.js";import{S as D,i as H,g as M,b,e as V,t as k,c as z,a as K,m as P,d as Q}from"./index.BKHW76yc.js";import{L as B}from"./logo.dz4V64Jy.js";import{t as F}from"./translate.HrioCK44.js";const G=""+new URL("../assets/Temporal_Logo_Animation.tKj2M1-H.mp4",import.meta.url).href,J=""+new URL("../assets/Temporal_Logo_Animation.TclPAL91.webm",import.meta.url).href;function N(n){let e,t;return e=new B({props:{height:160,width:160}}),{c(){z(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,o){P(e,s,o),t=!0},p:v,i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){Q(e,s)}}}function W(n){let e,t,s,o,r;return{c(){e=d("video"),t=d("source"),o=d("source"),this.h()},l(i){e=h(i,"VIDEO",{preload:!0,height:!0,width:!0,class:!0});var a=y(e);t=h(a,"SOURCE",{src:!0,type:!0}),o=h(a,"SOURCE",{src:!0,type:!0}),a.forEach(p),this.h()},h(){R(t.src,s=G)||u(t,"src",s),u(t,"type","video/mp4;codecs=hvc1"),R(o.src,r=J)||u(o,"src",r),u(o,"type","video/webm"),e.autoplay=!0,e.loop=!0,e.muted=!0,e.playsInline=!0,u(e,"preload","auto"),u(e,"height","160"),u(e,"width","160"),u(e,"class","dark:invert")},m(i,a){U(i,e,a),g(e,t),g(e,o),n[4](e)},p:v,i:v,o:v,d(i){i&&p(e),n[4](null)}}}function X(n){let e,t,s,o,r,i,a,f;const L=[W,N],m=[];function w(l,c){return l[1]?0:1}return t=w(n),s=m[t]=L[t](n),{c(){e=d("div"),s.c(),o=x(),r=d("h2"),i=S(n[0]),this.h()},l(l){e=h(l,"DIV",{class:!0});var c=y(e);s.l(c),o=C(c),r=h(c,"H2",{class:!0});var _=y(r);i=I(_,n[0]),_.forEach(p),c.forEach(p),this.h()},h(){u(r,"class","text-xl font-medium"),u(e,"class",a="my-12 flex flex-col items-center justify-start gap-4 "+n[3].class)},m(l,c){U(l,e,c),m[t].m(e,null),g(e,o),g(e,r),g(r,i),f=!0},p(l,[c]){let _=t;t=w(l),t===_?m[t].p(l,c):(M(),b(m[_],1,1,()=>{m[_]=null}),V(),s=m[t],s?s.p(l,c):(s=m[t]=L[t](l),s.c()),k(s,1),s.m(e,o)),(!f||c&1)&&O(i,l[0]),(!f||c&8&&a!==(a="my-12 flex flex-col items-center justify-start gap-4 "+l[3].class))&&u(e,"class",a)},i(l){f||(k(s),f=!0)},o(l){b(s),f=!1},d(l){l&&p(e),m[t].d()}}}function Y(n,e,t){let{title:s=F("common.loading")}=e,o=!0,r;T(async()=>{const a=r==null?void 0:r.play();if(a!==void 0)try{await a}catch{r&&t(1,o=!1)}else t(1,o=!1)});function i(a){q[a?"unshift":"push"](()=>{r=a,t(2,r)})}return n.$$set=a=>{t(3,e=E(E({},e),A(a))),"title"in a&&t(0,s=a.title)},e=A(e),[s,o,r,e,i]}class se extends D{constructor(e){super(),H(this,e,Y,X,j,{title:0})}}export{se as L};
