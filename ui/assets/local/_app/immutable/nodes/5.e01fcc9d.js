import{r as o,a}from"../chunks/route-for-api.34b3db05.js";import{a as c}from"../chunks/search-attributes.681f2be6.js";import{L as A}from"../chunks/layout.0300d560.js";const u=async(e,s=fetch)=>{try{const t=o("search-attributes",{namespace:e}),r=await a(t,{request:s});return{customAttributes:r.customAttributes,systemAttributes:r.systemAttributes}}catch(t){return console.error("Error fetching search attributes for namespace",e,t),{customAttributes:{},systemAttributes:{}}}},i=async({params:e,parent:s,fetch:t})=>{await s();const r=await u(e.namespace,t);c.set(r)},b=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));export{A as component,b as universal};
