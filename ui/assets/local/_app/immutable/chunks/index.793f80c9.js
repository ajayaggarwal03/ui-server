import"./index.4e2fcbc7.js";import"./paths.889fb1f1.js";import"./i18next.1cfb3cb9.js";import"./data-encoder-config.22068e2c.js";import"./parse-with-big-int.0036a80a.js";import"./auth-user.3fb69e72.js";import{b as c}from"./time-format.d653b45d.js";import{F as m}from"./is-event-type.7aa6d0ba.js";import{g as d}from"./get-event-categorization.75c83097.js";import{s as l}from"./simplify-attributes.ebce8e3a.js";const f=["Unspecified","Scheduled","Open","New","Started","Initiated","Running","Completed","Fired","CancelRequested","TimedOut","Signaled","Canceled","Failed","Terminated"],p=e=>{if(e.includes("RequestCancel"))return"CancelRequested";for(const t of f)if(e.includes(t))return t},u=async e=>{const t=String(e.eventId),i=e.eventType,n=c(String(e.eventTime)),s=p(i),a=d(i),{key:o,attributes:r}=m(e);return{...e,name:i,id:t,eventType:i,timestamp:n,classification:s,category:a,attributes:l({type:o,...r})}},A=async e=>await Promise.all(e.map(u)),E=e=>{const t={...e};return delete t.name,delete t.id,delete t.timestamp,delete t.classification,delete t.category,delete t.attributes,t};export{E as f,A as t};