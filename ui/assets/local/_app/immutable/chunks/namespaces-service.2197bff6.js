import{n as c}from"./namespaces.2d966c62.js";import{t as p}from"./toaster.fd2b66a2.js";import{p as u}from"./paginated.f4a2cb07.js";import{r as f,a as i}from"./route-for-api.99813725.js";const h={namespaces:[]};async function N(n,e=fetch){const{showTemporalSystemNamespace:o,runtimeEnvironment:a}=n;if(a.isCloud){c.set([]);return}try{const s=f("namespaces"),r=await u(async m=>i(s,{request:e,token:m,onError:()=>p.push({variant:"error",message:"Unable to fetch namespaces"})})),t=((r==null?void 0:r.namespaces)??[]).filter(m=>o||m.namespaceInfo.name!=="temporal-system");c.set(t)}catch{c.set([])}}async function d(n,e,o=fetch){var t;const[a]=h.namespaces;if((t=e==null?void 0:e.runtimeEnvironment)!=null&&t.isCloud)return a;const s=f("namespace",{namespace:n});return await i(s,{request:o,onError:()=>p.push({variant:"error",message:"Unable to fetch namespaces"})})??a}export{d as a,N as f};