import{a6 as i}from"./index-8e660855.js";import{p as n}from"./persist-store-4b4c2e6c.js";const a=n("user",{}),p=()=>i(a),U=c=>{const{accessToken:s}=c;let{idToken:e,name:r,email:t,picture:o}=c;if(!s||s=="{{.AccessToken}}")throw new Error("No access token");(!e||e==="{{.IDToken}}")&&(e=""),r==="{{.UserName}}"&&(r=""),t==="{{.UserEmail}}"&&(t=""),o==="{{.UserPicture}}"&&(o=""),a.set({accessToken:s,idToken:e,name:r,email:t,picture:o})},k=()=>{a.set({})};export{k as c,p as g,U as s,a as u};