import{p as u}from"./persist-store.31052fba.js";import{d as t,w as s}from"./index.6fcbae08.js";import{p as i}from"./stores.6cdca6ca.js";import{W as o}from"./index.16e2925e.js";const l=t([i],([r])=>r.url.searchParams.get("query")),n=t([i],([r])=>r.url.searchParams.get("category")),a=t([l,n],([r,e])=>({query:r,category:e})),c=r=>a.subscribe(({query:e})=>{!e&&o(m).length&&r([])}),p=r=>a.subscribe(({query:e})=>{!e&&o(g).length&&r([])}),q=u("workflowDateTimeFilter",void 0,!0),m=s([],c),g=s([],p),f=r=>a.subscribe(({category:e})=>{!e&&o(y)&&r(null)}),y=s(null,f);export{m as a,y as e,q as p,g as w};