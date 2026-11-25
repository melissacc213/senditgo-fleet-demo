import{r as c,e2 as x,j as s,aL as m,bf as g,y as u,bN as f,N as t,P as a,k as n,e3 as j}from"./index-A1DjCJF_.js";import{d as $,b as y,u as v}from"./index-AUZd-qAd.js";import{I as o}from"./parts-DVQm8jhA.js";import"./CopyOutlined-zSvssqZ0.js";const G=n.div`
  display: grid;
  gap: ${t.sectionGap}px;
  align-content: start;
  & > .wh-line { margin: 0; font-size: 14px; line-height: 20px; color: ${a("color-text-secondary")}; }
`,N=n.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${t.sectionGap}px;
  @media (max-width: 1279px) { grid-template-columns: minmax(0, 1fr); }
`,z=n(j)`
  display: grid;
  gap: ${t.textActionGap}px;
  align-content: start;
  & > h3 { margin: 0; font-size: 16px; line-height: 24px; font-weight: 700; color: ${a("color-text-primary")}; }
  & > .wh-facts { display: grid; gap: ${t.stackTight}px; font-size: 14px; line-height: 20px; color: ${a("color-text-primary")}; }
  & > .wh-facts > .wh-meta { display: flex; align-items: center; gap: ${t.inlineGap}px; color: ${a("color-text-secondary")}; white-space: nowrap; }
  & > dl { display: grid; grid-template-columns: 168px minmax(0, 1fr); gap: ${t.inlineGap}px ${t.sectionGap}px; margin: 0; }
  & > dl > dt { font-size: 13px; line-height: 20px; color: ${a("color-text-secondary")}; }
  & > dl > dd { margin: 0; font-size: 14px; line-height: 20px; color: ${a("color-text-primary")}; }
  & > .wh-foot { justify-self: end; font-size: 14px; line-height: 20px; }
`;function E(){const{fleet:r}=$(),d=y(),l=v(e=>e.drivers),p=c.useMemo(()=>x(r,d,l),[r,d,l]);return p.length===0?s.jsx(m,{art:"search",title:`No Warehouse is set for ${r.name}.`,body:"Drivers need a Warehouse to start from. Ask SenditGo support to add one."}):s.jsxs(G,{"data-testid":"warehouses-page",children:[s.jsx(g,{id:"fleets:warehouses",n:2,at:"left",children:s.jsx("p",{className:"wh-line",children:"Warehouses this Fleet uses are set up by SenditGo support."})}),s.jsx(N,{children:p.map(e=>s.jsxs(z,{"data-testid":`warehouse-card-${e.id}`,children:[s.jsx("h3",{children:e.name}),s.jsxs("div",{className:"wh-facts",children:[s.jsx("span",{children:e.address}),s.jsxs("span",{className:"wh-meta",children:[e.phone," · ",e.zone,s.jsx(u,{status:e.open?"Open":"Closed",tone:e.open?"info":"off",size:"sm"})]})]}),s.jsxs("dl",{children:[s.jsx("dt",{children:"Drivers who start here"}),s.jsx("dd",{children:e.drivers>0?s.jsx(o,{to:`/fleets/${r.slug}/drivers?from=${e.id}`,"data-testid":`warehouse-drivers-${e.id}`,children:e.drivers}):"None yet"}),s.jsx("dt",{children:"Also used by"}),s.jsx("dd",{"data-testid":`warehouse-also-${e.id}`,children:e.alsoUsedBy.length===0?"No other Fleet":e.alsoUsedBy.map((i,h)=>s.jsxs("span",{children:[i.slug?s.jsx(o,{to:`/fleets/${i.slug}/warehouses`,children:i.name}):i.name,h<e.alsoUsedBy.length-1?", ":""]},i.name))})]}),f(`/settings/warehouses/${e.id}`)&&s.jsx(o,{className:"wh-foot",to:`/settings/warehouses/${e.id}`,"data-testid":`warehouse-settings-${e.id}`,children:"Open in Settings"})]},e.id))})]})}export{E as WarehousesPage};
