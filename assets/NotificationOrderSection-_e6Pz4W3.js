import{aC as w,aU as a,j as t,bm as x,bb as g,N as r,k as l,P as u}from"./index-BPH5wPqt.js";import{O as v,m as y,o as O}from"./OrderList-DkbEm_ud.js";import{S as N}from"./SettingsSection-CZGzsxp8.js";const n={driver:{title:"Driver",line:"Registrations, profile changes, papers"},delivery:{title:"Delivery",line:"New Orders, status changes, delivery news"},roster:{title:"Roster",line:"Shift and schedule changes"},system:{title:"System",line:"App updates and maintenance"}},d=[0,1,3,7,14,30],f=e=>e===0?"Off: always newest first":e===1?"Last 24 hours":`Last ${e} days`,S=l.p`
  margin: 0;
  font-size: 13px;
  line-height: 18px;
  color: ${u("color-text-primary")};
`,j=l.div`
  display: grid;
  gap: ${r.stackTight}px;
  max-width: 320px;
`,$=l.div`
  display: grid;
  gap: ${r.formRowGap}px;
  @media (min-width: 1280px) {
    grid-template-columns: minmax(0, 720px) 320px;
    column-gap: ${r.sectionGap*2}px;
    align-items: start;
  }
  & > .no-list { display: grid; gap: ${r.formRowGap}px; min-width: 0; }
`;function C(){const e=w(),c=a(i=>i.profile.notificationOrder),s=a(i=>i.profile.priorityWindowDays),p=a(i=>i.patchProfile),m=(d.includes(s)?d:[...d,s].sort((i,o)=>i-o)).map(i=>({value:i,label:f(i)}));return t.jsx(N,{id:"notification-order",review:{id:"st:notification-order",n:1},title:"Notification order",lead:"Drag a row or use its arrows. Each move saves at once.",children:t.jsxs($,{children:[t.jsxs("div",{className:"no-list",children:[t.jsx(v,{label:"Notification order",items:c.map(i=>({key:i,title:n[i].title,line:n[i].line})),onMove:(i,o)=>{const h=p({notificationOrder:y(c,i,o)});e.done(`${n[i].title} moved to ${O(o+1)} · Notification order`,{undo:h})},testId:"notification-order"}),s===0&&t.jsx(S,{"data-testid":"notification-order-off",children:"Pick a time to turn this order on."})]}),t.jsx(j,{children:t.jsx(x,{label:"Use this order for",helper:"Notifications uses this order within this time. Older messages show newest first.",children:t.jsx(g,{"aria-label":"Use this order for",value:s,options:m,onChange:i=>{if(i===s)return;const o=p({priorityWindowDays:i});e.done(`${i===0?"Order is off. Newest first":`Order used for the ${f(i).toLowerCase()}`} · Notifications`,{undo:o})},"data-testid":"notification-window"})})})]})})}export{C as N,f as w};
