import{r as u,j as n,d8 as w,cp as f,cs as D,ct as N,a_ as S,N as p,k as y,R as z,P as r}from"./index-BPH5wPqt.js";const G=(s,a,t)=>{const i=s.filter(x=>x!==a);return[...i.slice(0,t),a,...i.slice(t)]},R=s=>{const a=["th","st","nd","rd"],t=s%100;return`${s}${a[(t-20)%10]??a[t]??a[0]}`},O=y.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${p.inlineGap}px;
`,m={two:64,three:100},C=y.li`
  display: grid;
  grid-template-columns: 16px 24px minmax(0, 1fr) ${({$three:s})=>s?m.three:m.two}px;
  align-items: center;
  gap: ${p.inlineGap}px;
  min-height: 44px;
  padding: ${p.stackTight}px ${p.inlineGap}px;
  border-radius: ${z.container}px;
  background: ${({$over:s})=>s?r("color-fill-hover"):r("color-bg-canvas")};
  & .ol-grip { color: ${r("color-icon")}; cursor: grab; font-size: 14px; }
  & .ol-n { font-size: 14px; font-weight: 600; font-variant-numeric: tabular-nums; color: ${r("color-text-secondary")}; }
  & .ol-text { display: grid; min-width: 0; }
  & .ol-title { font-size: 14px; line-height: 20px; font-weight: 600; color: ${r("color-text-primary")}; }
  & .ol-line { font-size: 13px; line-height: 18px; color: ${r("color-text-secondary")}; }
  & .ol-btns { display: flex; justify-content: flex-end; gap: ${p.inlineGap}px; }
`;function T({items:s,onMove:a,onRemove:t,removeLabel:i,label:x,testId:c}){const[d,g]=u.useState(null),[j,$]=u.useState(null),[k,v]=u.useState(""),h=(e,l)=>{const o=s.find(b=>b.key===e);a(e,l),o&&v(`${o.title}, ${R(l+1)}`)};return n.jsxs(n.Fragment,{children:[n.jsx(O,{"aria-label":x,"data-testid":c,children:s.map((e,l)=>n.jsxs(C,{$over:j===l&&d!==null&&d!==e.key,$three:!!t,draggable:!0,onDragStart:o=>{g(e.key),o.dataTransfer.effectAllowed="move"},onDragOver:o=>{o.preventDefault(),$(l)},onDragEnd:()=>{g(null),$(null)},onDrop:o=>{o.preventDefault(),d&&d!==e.key&&h(d,l),g(null),$(null)},"data-testid":`${c}-${e.key}`,children:[n.jsx(w,{className:"ol-grip","aria-hidden":!0}),n.jsx("span",{className:"ol-n",children:l+1}),n.jsxs("span",{className:"ol-text",children:[n.jsx("span",{className:"ol-title",children:e.title}),e.line&&n.jsx("span",{className:"ol-line",children:e.line})]}),n.jsxs("span",{className:"ol-btns",children:[l>0&&n.jsx(f,{size:"sm",label:`Move ${e.title} up`,icon:n.jsx(D,{}),onClick:()=>h(e.key,l-1),"data-testid":`${c}-${e.key}-up`}),l<s.length-1&&n.jsx(f,{size:"sm",label:`Move ${e.title} down`,icon:n.jsx(N,{}),onClick:()=>h(e.key,l+1),"data-testid":`${c}-${e.key}-down`}),t&&n.jsx(f,{size:"sm",label:i?i(e.title):`Remove ${e.title}`,icon:n.jsx(S,{}),onClick:()=>t(e.key),"data-testid":`${c}-${e.key}-remove`})]})]},e.key))}),n.jsx("span",{"aria-live":"polite",style:{position:"absolute",width:1,height:1,overflow:"hidden",clipPath:"inset(50%)"},children:k})]})}export{T as O,G as m,R as o};
