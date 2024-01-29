import{S as M,b as X,a as Y,m as A,c as F,w as R,p as E,q as P,d as O,x as N,k as w,u as h,Q as U,f as q,L as k,z as D,g as y,h as H,j as g,y as T,O as W,U as j,C as B,D as G,E as J,F as K,a3 as Z,a4 as $,n as x}from"./index.0942deb7.js";import{a as ee}from"./index.2fa3ca4d.js";import{c as te}from"./button.379dca84.js";import{S as ne}from"./icon.33308831.js";import{t as u}from"./translate.135d909a.js";import{H as ae}from"./heart-beat-indicator.df4ee8c0.js";function ie(l){let e=l[2].toLocaleString()+"",n;return{c(){n=R(e)},l(t){n=N(t,e)},m(t,a){q(t,n,a)},p(t,a){a&4&&e!==(e=t[2].toLocaleString()+"")&&T(n,e)},i:x,o:x,d(t){t&&w(n)}}}function le(l){let e,n;return e=new ne({props:{class:"h-4 w-4 animate-spin"}}),{c(){B(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,a){J(e,t,a),n=!0},p:x,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function z(l){let e,n;return e=new ae({props:{delay:l[0]}}),{c(){B(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,a){J(e,t,a),n=!0},p(t,a){const s={};a&1&&(s.delay=t[0]),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Q(l){let e,n,t,a=l[4]>0&&V();return{c(){e=A("span"),a&&a.c(),n=R(l[4]),this.h()},l(s){e=E(s,"SPAN",{class:!0});var c=P(e);a&&a.l(c),n=N(c,l[4]),c.forEach(w),this.h()},h(){h(e,"class","font-base rounded-r bg-white px-1 py-0.5 text-xs text-gray-900")},m(s,c){q(s,e,c),a&&a.m(e,null),k(e,n)},p(s,c){s[4]>0?a||(a=V(),a.c(),a.m(e,n)):a&&(a.d(1),a=null),c&16&&T(n,s[4])},i(s){t||Z(()=>{t=$(e,ee,{}),t.start()})},o:x,d(s){s&&w(e),a&&a.d()}}}function V(l){let e;return{c(){e=R("+")},l(n){e=N(n,"+")},m(n,t){q(n,e,t)},d(n){n&&w(e)}}}function se(l){let e,n,t,a,s,c=l[5][l[1]]+"",p,S,v,d,C,_;const I=[le,ie],b=[];function L(i,f){return i[3]?0:i[2]>=0?1:-1}~(t=L(l))&&(a=b[t]=I[t](l));let o=l[1]==="Running"&&z(l),r=l[4]&&Q(l);return{c(){e=A("div"),n=A("span"),a&&a.c(),s=F(),p=R(c),S=F(),o&&o.c(),d=F(),r&&r.c(),this.h()},l(i){e=E(i,"DIV",{class:!0,"data-testid":!0});var f=P(e);n=E(f,"SPAN",{class:!0});var m=P(n);a&&a.l(m),s=O(m),p=N(m,c),S=O(m),o&&o.l(m),m.forEach(w),d=O(f),r&&r.l(f),f.forEach(w),this.h()},h(){h(n,"class",v="flex items-center gap-1 font-medium "+l[6]({status:l[1]})),U(n,"rounded-r-none",l[4]),h(e,"class","relative flex items-center gap-0 text-center text-sm leading-4"),h(e,"data-testid",C=l[7]["test-id"])},m(i,f){q(i,e,f),k(e,n),~t&&b[t].m(n,null),k(n,s),k(n,p),k(n,S),o&&o.m(n,null),k(e,d),r&&r.m(e,null),_=!0},p(i,[f]){let m=t;t=L(i),t===m?~t&&b[t].p(i,f):(a&&(D(),y(b[m],1,1,()=>{b[m]=null}),H()),~t?(a=b[t],a?a.p(i,f):(a=b[t]=I[t](i),a.c()),g(a,1),a.m(n,s)):a=null),(!_||f&2)&&c!==(c=i[5][i[1]]+"")&&T(p,c),i[1]==="Running"?o?(o.p(i,f),f&2&&g(o,1)):(o=z(i),o.c(),g(o,1),o.m(n,null)):o&&(D(),y(o,1,1,()=>{o=null}),H()),(!_||f&2&&v!==(v="flex items-center gap-1 font-medium "+i[6]({status:i[1]})))&&h(n,"class",v),(!_||f&18)&&U(n,"rounded-r-none",i[4]),i[4]?r?(r.p(i,f),f&16&&g(r,1)):(r=Q(i),r.c(),g(r,1),r.m(e,null)):r&&(r.d(1),r=null),(!_||f&128&&C!==(C=i[7]["test-id"]))&&h(e,"data-testid",C)},i(i){_||(g(a),g(o),g(r),_=!0)},o(i){y(a),y(o),_=!1},d(i){i&&w(e),~t&&b[t].d(),o&&o.d(),r&&r.d()}}}function oe(l,e,n){let{delay:t=0}=e,{status:a="Running"}=e,{count:s=void 0}=e,{loading:c=!1}=e,{newCount:p=void 0}=e;const S={Running:u("workflows.running"),TimedOut:u("workflows.timed-out"),Completed:u("workflows.completed"),Failed:u("workflows.failed"),ContinuedAsNew:u("workflows.continued-as-new"),Canceled:u("workflows.canceled"),Terminated:u("workflows.terminated"),Paused:u("workflows.paused"),Scheduled:u("events.event-classification.started"),Started:u("events.event-classification.started"),Unspecified:u("events.event-classification.unspecified"),Open:u("events.event-classification.open"),New:u("events.event-classification.new"),Initiated:u("events.event-classification.initiated"),Fired:u("events.event-classification.fired"),CancelRequested:u("events.event-classification.cancelrequested"),Signaled:u("events.event-classification.signaled")},v=te(["flex items-center rounded-sm px-1 py-0.5 font-secondary whitespace-nowrap"],{variants:{status:{Running:"bg-blue-100 text-blue-700",TimedOut:"bg-orange-100 text-orange-700",Completed:"bg-green-100 text-green-700",Failed:"bg-red-100 text-red-700",ContinuedAsNew:"bg-gray-200 text-gray-900",Canceled:"bg-yellow-100 text-yellow-900",Terminated:"bg-red-100 text-red-700",Paused:"bg-yellow-100 text-yellow-700",Unspecified:"bg-gray-200 text-gray-900",Scheduled:"bg-blue-100 text-blue-700",Started:"bg-blue-100 text-blue-700",Open:"bg-green-100 text-green-700",New:"bg-indigo-100 text-indigo-700",Initiated:"bg-blue-100 text-blue-700",Fired:"bg-blue-100 text-blue-700",CancelRequested:"bg-yellow-100 text-yellow-900",Signaled:"bg-purple-100 text-purple-700"}}});return l.$$set=d=>{n(7,e=W(W({},e),j(d))),"delay"in d&&n(0,t=d.delay),"status"in d&&n(1,a=d.status),"count"in d&&n(2,s=d.count),"loading"in d&&n(3,c=d.loading),"newCount"in d&&n(4,p=d.newCount)},e=j(e),[t,a,s,c,p,S,v,e]}class ge extends M{constructor(e){super(),X(this,e,oe,se,Y,{delay:0,status:1,count:2,loading:3,newCount:4})}}export{ge as W};