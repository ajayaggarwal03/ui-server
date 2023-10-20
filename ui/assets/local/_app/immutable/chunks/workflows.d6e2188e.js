import{j as c,r as m,w as n}from"./singletons.4747bb15.js";import{p as u}from"./stores.0585e59f.js";import{t as d}from"./translate.742ecd1a.js";import{n as w,ad as k}from"./index.e6b134b1.js";import{r as f,a as p}from"./route-for-api.973597d3.js";import{a as h,b as E}from"./workflow-service.2cf2d57c.js";const b=async(o,r,s=fetch)=>{let t=0;try{const e=f("workflows.count",{namespace:o}),a=await p(e,{params:r?{query:r}:{},onError:w,handleError:w,request:s});t=parseInt(a==null?void 0:a.count)}catch{}return{count:t}},j=async({namespace:o,query:r})=>{const s="GROUP BY ExecutionStatus",t=f("workflows.count",{namespace:o}),{count:e,groups:a}=await p(t,{params:{query:r?`${r} ${s}`:`${s}`},notifyOnError:!1});return{count:e,groups:a}},g=300,C=async(o,r,s)=>{r.set(!0);try{await s()}catch(t){console.error(t)}o.set(!1),setTimeout(()=>{r.set(!1)},g)},W=c([u],([o])=>{var r,s,t;return Boolean((t=(s=(r=o.data)==null?void 0:r.systemInfo)==null?void 0:s.capabilities)==null?void 0:t.countGroupByExecutionStatus)}),A=n(0),B=c([u],([o])=>{var r,s;return(s=(r=o.data)==null?void 0:r.settings)==null?void 0:s.hideWorkflowQueryErrors}),q=c([u],([o])=>o.params.namespace),v=c([u],([o])=>o.url.searchParams.get("query")),Q=c([q,v,A,h,B],([o,r,s,t,e])=>({namespace:o,query:r,refresh:s,supportsAdvancedVisibility:t,hideWorkflowQueryErrors:e})),x=o=>{R.set({...o,newCount:0})},P=o=>Q.subscribe(({namespace:r,query:s,supportsAdvancedVisibility:t,hideWorkflowQueryErrors:e})=>{C(I,S,async()=>{const{workflows:a,error:l}=await E(r,{query:s});if(o(a),t&&!k(W)){const y=await b(r,s);x(y)}l?e?i.set(d("workflows.workflows-error-querying")):i.set(l):i.set("")})}),L=n(""),S=n(!0),I=n(!0),R=n({count:0,newCount:0}),i=n(""),T=m([],P),U=n("");export{U as a,R as b,i as c,T as d,j as f,W as g,I as l,A as r,S as u,L as w};
