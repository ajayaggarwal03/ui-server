import{r as o,a}from"../chunks/route-for-api.e80b6624.js";import{a as c}from"../chunks/search-attributes.cd42a7bf.js";import{L as A}from"../chunks/layout.1eac425b.js";const u=async(e,r=fetch)=>{try{const t=o("search-attributes",{namespace:e}),s=await a(t,{request:r});return{customAttributes:s.customAttributes,systemAttributes:s.systemAttributes}}catch(t){return console.error("Error fetching search attributes for namespace",e,t),{customAttributes:{},systemAttributes:{}}}},i=async({params:e,fetch:r})=>{const t=await u(e.namespace,r);c.set(t)},b=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));export{A as component,b as universal};
