import{r as d,I as te,_ as ne,ab as ie,j as e,U as ae,e5 as se,br as le,dM as K,cr as oe,x as N,e6 as Ce,y as re,e7 as Ne,bu as Se,dL as Pe,a3 as ce,bm as q,bb as de,e8 as pe,e9 as he,N as h,k as u,dc as ue,ea as ze,eb as Le,ag as ge,e0 as z,P as o,aC as xe,dt as me,d0 as W,R as D,by as Ae,b2 as Oe,e1 as Re,cS as Te,dK as De,X as Be}from"./index-A1DjCJF_.js";import{u as j,d as Ve}from"./index-AUZd-qAd.js";import{R as Ee}from"./CopyOutlined-zSvssqZ0.js";var Fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"}}]},name:"paper-clip",theme:"outlined"},Ge=function(n,i){return d.createElement(te,ne({},n,{ref:i,icon:Fe}))},Me=d.forwardRef(Ge),Ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 00-12.6 0l-99.8 127.2a7.98 7.98 0 006.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 00-12.7 0zM360 442a40 40 0 1080 0 40 40 0 10-80 0zm494.6-153.4L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file-image",theme:"outlined"},_e=function(n,i){return d.createElement(te,ne({},n,{ref:i,icon:Ie}))},X=d.forwardRef(_e);function rt(){const[t,n]=ie(),i=t.get("state"),[a,r]=d.useState(i==="loading"),[c,x]=d.useState(i==="error");return d.useEffect(()=>{if(!a)return;const g=window.setTimeout(()=>r(!1),i==="loading"?1500:400);return()=>window.clearTimeout(g)},[a,i]),{loading:a,failed:c,retry:()=>{x(!1),r(!0);const g=new URLSearchParams(t);g.delete("state"),n(g,{replace:!0})}}}const fe=`
  font-family: ${W.ui};
  font-style: normal;
  font-weight: 600;
  color: ${o("color-action-text")};
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  border-radius: ${D.tag}px;
  &:focus-visible { outline: 2px solid ${o("color-focus")}; outline-offset: 2px; }
`,Ue=u(Be)`
  ${fe}
`,ct=u.button`
  ${fe}
  display: inline;
  padding: 0;
  border: 0;
  background: none;
  font-size: inherit;
  line-height: inherit;
  cursor: pointer;
`,He=u.section`
  display: grid;
  gap: ${h.inlineGap}px;
  & > .bl-head { display: flex; align-items: center; gap: ${h.inlineGap}px; min-height: 28px; white-space: nowrap; }
  & > .bl-head > .bl-sum { font-size: 13px; line-height: 18px; color: ${o("color-text-secondary")}; overflow: hidden; text-overflow: ellipsis; }
  & > .bl-head > .bl-sum[data-tone='danger'] { color: ${o("color-status-danger-text")}; font-weight: 600; }
  & > .bl-head > .bl-sum[data-tone='warning'] { color: ${o("color-status-warning-text")}; font-weight: 600; }
  & > .bl-head > .bl-act { margin-left: auto; flex: none; }
  & > .bl-body { display: grid; gap: ${h.textActionGap}px; }
`;function Ke({title:t,open:n,onToggle:i,summary:a,summaryTone:r,action:c,children:x,testId:$}){const g=d.useId();return e.jsxs(He,{"data-testid":$,"data-open":n||void 0,"data-panel-section":"",children:[e.jsxs("div",{className:"bl-head",children:[e.jsx(ue,{expanded:n,onToggle:i,controls:g,"data-testid":`${$}-toggle`,children:t}),a&&e.jsx("span",{className:"bl-sum","data-tone":r,children:a}),c&&e.jsx("span",{className:"bl-act",children:c})]}),n&&e.jsx("div",{className:"bl-body",id:g,children:x})]})}const qe=u.span`
  display: inline-flex;
  align-items: center;
  gap: ${h.textActionGap}px;
  white-space: nowrap;
  & > .cc-code { font-family: ${W.ui}; font-style: normal; font-size: 20px; line-height: 24px; font-weight: 600; font-variant-numeric: tabular-nums; letter-spacing: 0.04em; color: ${o("color-text-primary")}; }
`;function dt({code:t,testId:n="copy-code"}){const i=xe(),a=async()=>{var r;try{await((r=navigator.clipboard)==null?void 0:r.writeText(t))}catch{}i.done("Code copied.",{key:"code-copied"})};return e.jsxs(qe,{"data-testid":n,children:[e.jsx("span",{className:"cc-code",children:De(t)}),e.jsx(N,{size:"small",icon:e.jsx(Ee,{}),onClick:()=>void a(),"data-testid":`${n}-button`,children:"Copy Code"})]})}const J=48,We=u.button`
  display: inline-grid;
  place-items: center;
  width: ${J}px;
  height: ${J}px;
  padding: 0;
  border: 0;
  border-radius: ${D.field}px;
  background: ${o("color-status-info-bg")};
  color: ${o("color-action-text")};
  box-shadow: inset 0 0 0 1px ${o("color-border-subtle")};
  font-size: 20px;
  cursor: zoom-in;
  &:focus-visible { outline: 2px solid ${o("color-focus")}; outline-offset: 2px; }
`,Ye=u.div`
  display: grid;
  place-items: center;
  gap: ${h.inlineGap}px;
  height: 320px;
  border-radius: ${D.control}px;
  background: ${o("color-status-info-bg")};
  color: ${o("color-action-text")};
  font-size: 32px;
  & > p { margin: 0; font-size: 14px; line-height: 20px; color: ${o("color-text-secondary")}; }
`;function ve({title:t,testId:n}){const[i,a]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(We,{type:"button","aria-label":`Open ${t}`,onClick:()=>a(!0),"data-testid":n,children:e.jsx(X,{"aria-hidden":!0})}),e.jsx(Oe,{open:i,size:"lg",title:t,onRequestClose:()=>a(!1),dismiss:{label:"Close",onClick:()=>a(!1)},children:e.jsxs(Ye,{children:[e.jsx(X,{"aria-hidden":!0}),e.jsxs("p",{children:[t,", as sent in the Driver App."]})]})})]})}const Qe=u.span`
  display: inline-flex;
  gap: ${h.inlineGap}px;
`,Xe=u.div`
  display: grid;
  gap: ${h.inlineGap}px;
  & > .pr-line { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: ${h.inlineGap}px; min-height: 28px; }
  & .pr-name { font-size: 14px; line-height: 20px; font-weight: 600; color: ${o("color-text-primary")}; white-space: nowrap; }
  & .pr-words { font-size: 13px; line-height: 18px; color: ${o("color-text-secondary")}; white-space: nowrap; }
  & .pr-words[data-tone='danger'] { color: ${o("color-status-danger-text")}; font-weight: 600; }
  & .pr-words[data-tone='warning'] { color: ${o("color-status-warning-text")}; font-weight: 600; }
  & > .pr-more { padding: ${h.textActionGap}px; border-radius: ${D.control}px; background: ${o("color-bg-surface")}; }
`,Je=u.span`
  display: grid;
  gap: 0;
`,Ze={"licence-front":"Licence, front","licence-back":"Licence, back",rego:"Rego paper",insurance:"Insurance certificate"};function et(t){var i,a,r;const n=t.validUntil?Ae(t.validUntil):void 0;return t.kind==="licence"?[{label:"Type",value:(i=t.licence)==null?void 0:i.type},{label:"Number",value:t.number},{label:"Card number",value:(a=t.licence)==null?void 0:a.cardNumber},{label:"Class",value:(r=t.licence)==null?void 0:r.class},{label:"Valid until",value:n}]:t.kind==="rego"?[{label:"Plate",value:t.number},{label:"Valid until",value:n}]:[{label:"Policy number",value:t.number},{label:"Expiry date",value:n},{label:"Coverage",value:t.coverage}]}const pt=d.forwardRef(function({paper:n,open:i,onToggle:a,testId:r},c){const x=ze(n),$=!!n.validUntil;return e.jsxs(Xe,{"data-testid":r,"data-open":i||void 0,children:[e.jsxs("div",{className:"pr-line",children:[e.jsxs(Je,{children:[e.jsx("span",{className:"pr-name",children:Le[n.kind]}),e.jsx("span",{className:"pr-words","data-tone":x.tone,children:x.words})]}),$&&e.jsx(ue,{ref:c,expanded:i,onToggle:a,"data-testid":`${r}-toggle`,children:i?"Less":"Details"})]}),i&&$&&e.jsxs("div",{className:"pr-more",children:[e.jsx(ge,{columns:2,items:et(n)}),n.files&&n.files.length>0&&e.jsx(Qe,{children:n.files.map(g=>e.jsx(ve,{title:Ze[g]??"Picture",testId:`${r}-photo-${g}`},g))})]})]})}),tt=u.span`
  display: inline-flex;
  align-items: center;
  gap: ${h.inlineGap}px;
  min-width: 0;
  & > .fp-name { font-size: 13px; line-height: 18px; color: ${o("color-text-secondary")}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
`;function ht({label:t,value:n,onPick:i,testId:a}){const r=d.useRef(null);return e.jsx(q,{label:t,children:e.jsxs(tt,{children:[e.jsx("input",{ref:r,type:"file",hidden:!0,accept:"image/*,.pdf",onChange:c=>{var x;return((x=c.target.files)==null?void 0:x[0])&&i(c.target.files[0].name)},"data-testid":`${a}-input`}),e.jsx(N,{size:"small",icon:e.jsx(Me,{}),onClick:()=>{var c;return(c=r.current)==null?void 0:c.click()},"data-testid":a,children:"Choose File"}),e.jsx("span",{className:"fp-name",children:n??"No file yet"})]})})}const M={height:22,padInline:6,line:16,tracking:"0.06em"},nt=u.span`
  flex: none;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  height: ${M.height}px;
  padding: 0 ${M.padInline}px;
  border-radius: ${D.tag}px;
  border: 1px solid ${o("color-border-strong")};
  background: ${o("color-bg-surface")};
  color: ${o("color-text-primary")};
  font-family: ${W.ui};
  font-size: 12px;
  line-height: ${M.line}px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: ${M.tracking};
  text-transform: uppercase;
  white-space: nowrap;
  /* Dark: the plate sits on the selected or changed fill too; the stronger control edge keeps it visible there. */
  :root[data-theme='dark'] & { border-color: ${o("color-border-control")}; }
`;function it({plate:t,testId:n}){return e.jsx(nt,{role:"img","aria-label":`Plate ${t}`,"data-fleets-part":"plate-chip","data-testid":n,children:t})}const Z=Re.tableTwoLine-2*z.cell.padding[0]-1-Te.sm,I=u.span`
  display: grid;
  min-width: 0;
  /* The table's first column is 600 by the theme; here only the driver's name is (.tl-strong). */
  font-weight: 400;
  & > .tl-1 { display: flex; align-items: center; gap: ${h.inlineGap}px; min-width: 0; min-height: ${z.cell.line}px; font-size: ${z.cell.size}px; line-height: ${z.cell.line}px; color: ${o("color-text-primary")}; }
  & > .tl-2 { display: flex; align-items: center; gap: ${h.inlineGap}px; min-width: 0; height: ${z.secondLine.line}px; font-size: ${z.secondLine.size}px; line-height: ${z.secondLine.line}px; color: ${o("color-text-secondary")}; }
  & > .tl-2[data-tight] { height: ${Z}px; line-height: ${Z}px; }
  & .tl-cut { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  & .tl-quiet { color: ${o("color-text-secondary")}; }
  & .tl-strong { font-weight: 600; }
  & .tl-num { font-variant-numeric: tabular-nums; }
  & .tl-1 > button, & .tl-1 > span > button { flex: none; }
`;function ut({name:t,code:n}){return e.jsxs(I,{"aria-label":`${t}, ${n}`,title:t,children:[e.jsx("span",{className:"tl-1",children:e.jsx("span",{className:"tl-cut tl-strong",children:t})}),e.jsx("span",{className:"tl-2 tl-num",children:n})]})}function gt({words:t,action:n,line:i,testId:a}){return e.jsxs(I,{"data-testid":a,children:[e.jsxs("span",{className:"tl-1",children:[e.jsx("span",{className:"tl-quiet",children:t}),n]}),i&&e.jsx("span",{className:"tl-2","data-tight":n?"":void 0,children:e.jsx("span",{className:"tl-cut",children:i})})]})}function xt({van:t,colour:n,testId:i}){const a=Ce(t),r=t.status==="pending",c=[n==null?void 0:n.trim(),a.line2].filter(Boolean).join(" · ");return e.jsxs(I,{"aria-label":`${a.full}${r?", pending":""}`,title:a.full,"data-testid":i,children:[e.jsxs("span",{className:"tl-1",children:[a.plate&&e.jsx(it,{plate:a.plate}),e.jsxs("span",{className:"tl-cut",children:[a.lead&&e.jsxs("span",{className:"tl-quiet",children:[a.lead," "]}),a.line1,a.line1Quiet&&e.jsxs("span",{className:"tl-quiet",children:[a.line1?" ":"",a.line1Quiet]})]})]}),e.jsxs("span",{className:"tl-2",children:[e.jsx("span",{className:"tl-cut",children:c}),r&&e.jsx(re,{status:"Pending",tone:"warning",size:"sm"})]})]})}function mt({cell:t,testId:n}){if(!t.tone)return null;const i=t.names.join(" · ")+(t.more?` +${t.more}`:"");return e.jsxs(I,{"data-testid":n,"aria-label":[t.label,i].filter(Boolean).join(", "),children:[e.jsx("span",{className:"tl-1",children:e.jsx(re,{status:t.label,tone:t.tone,size:"sm"})}),i&&e.jsx("span",{className:"tl-2",children:e.jsx("span",{className:"tl-cut",children:i})})]})}const ft=u.div`
  display: flex;
  align-items: center;
  gap: ${h.buttonGap}px;
  white-space: nowrap;
  & > * { flex: none; }
`,at=u.p`
  margin: 0;
  font-size: 13px;
  line-height: 18px;
  color: ${o("color-text-secondary")};
`;function vt({van:t,testId:n}){const[i,a]=d.useState(!1);return e.jsxs(Ke,{title:"More vehicle details",open:i,onToggle:()=>a(r=>!r),testId:n,children:[e.jsx(ge,{columns:2,items:[{label:"Length (mm)",value:t.size.lengthMm.toLocaleString("en-AU")},{label:"Width (mm)",value:t.size.widthMm.toLocaleString("en-AU")},{label:"Height (mm)",value:t.size.heightMm.toLocaleString("en-AU")},{label:"Load (kg)",value:t.size.loadKg.toLocaleString("en-AU")},{label:"Engine size",value:`${t.size.engineCc.toLocaleString("en-AU")} cc`},{label:"VIN",value:t.size.vin},{label:"Tail lift",value:t.size.tailLift?"Yes":"No"},{label:"Temperature control",value:t.size.temperature?"Yes":"No"},{label:"Registered owner",value:t.registeredOwner}]}),t.photos&&t.photos.length>0?e.jsx(ve,{title:`${t.plate}, photo`,testId:`${n}-photo`}):e.jsx(at,{children:"No photo yet."})]})}const Y=392,be={popupMatchSelectWidth:Y-2*h.cardPadding,getPopupContainer:t=>t.parentElement??document.body},$e=u.div`
  display: grid;
  gap: ${h.textActionGap}px;
  & .ap-line { margin: 0; font-size: 13px; line-height: 18px; color: ${o("color-text-secondary")}; }
  & .ap-line[data-tone='warning'] { color: ${o("color-status-warning-text")}; font-weight: 600; }
  & .ap-none { margin: 0; font-size: 14px; line-height: 22px; color: ${o("color-text-primary")}; }
`,we=u.span`
  display: flex;
  align-items: center;
  gap: ${h.inlineGap}px;
  min-width: 0;
  & > .op-main { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  & > .op-side { flex: none; color: ${o("color-text-secondary")}; white-space: nowrap; }
`,je=u.span`
  display: flex;
  align-items: center;
  gap: ${h.inlineGap}px;
  font-size: 12px;
  line-height: 18px;
  color: ${o("color-text-secondary")};
  &::before, &::after { content: ''; flex: 1 1 auto; height: 1px; background: ${o("color-border-subtle")}; }
`;let ee=!1;function Q(){const[t]=ie(),n=t.get("other");return{clash:()=>n!=="assigned"||ee?!1:(ee=!0,!0),unverified:n==="unverified"}}const C=t=>t.stopPropagation();function ye(){const t=xe(),n=Q();return(i,a)=>n.unverified?t.warn("Assigned. The list didn’t refresh yet. Refresh to check.",{undo:a}):t.done(i,{undo:a})}function bt({driverUid:t,label:n="Assign Vehicle",testId:i="assign-vehicle"}){const{fleet:a,can:r}=Ve(),c=ae(l=>l.world),x=j(l=>l.drivers),$=j(l=>l.vans);j(l=>l.holds);const g=ye(),O=Q(),[B,S]=d.useState(!1),[R,P]=d.useState(),[k,V]=d.useState(),m=x.find(l=>l.uid===t);if(!m)return null;const L={drivers:x,vans:$},y=Ne(m,L,c),f=y.filter(l=>l.group==="free"),T=y.filter(l=>l.group==="taken"),_=Se(K(m,c)),E=m.vanId?$.find(l=>l.id===m.vanId):void 0,v=y.find(l=>l.vanId===R),U=l=>{S(l),V(void 0),P(l&&f.length===1?f[0].vanId:void 0)},H=()=>{if(!v)return;if(O.clash()){const w=se($.find(A=>A.id===v.vanId),L,c).find(A=>A.uid!==t);w&&j.getState().assignVehicle(w.uid,v.vanId),V(`Someone else just assigned ${v.plate} to ${(w==null?void 0:w.name)??"another driver"}. Pick again.`),P(void 0);return}const l=$.find(w=>w.id===v.vanId),b=j.getState().assignVehicle(t,v.vanId);S(!1),g(`${me(l)} is now ${le(K(m,c))}’s vehicle.`,b)},F=l=>({value:l.vanId,label:l.label,choice:l}),s=[...f.map(F),...T.length?[{label:e.jsx(je,{children:"Driven by someone now"}),title:"Driven by someone now",options:T.map(F)}]:[]],p=v!=null&&v.holder?`${v.holder.name} will have no vehicle.`:"One driver per vehicle.",G=n==="Change Vehicle"&&E&&Pe(t,c)?`Run Sheets already made keep ${E.plate}.`:void 0,ke=e.jsxs($e,{onClick:C,"data-testid":`${i}-popover`,children:[k&&e.jsx(ce,{sentence:k,testId:`${i}-clash`}),y.length===0?e.jsxs("p",{className:"ap-none",children:["Every company vehicle is listed under a driver. Add a company vehicle first.",r("flt_vhcl_add")&&e.jsxs(e.Fragment,{children:[" ",e.jsx(Ue,{to:`/fleets/${a.slug}/vehicles/new`,children:"Add Vehicle"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(q,{label:"Company vehicle",children:e.jsx(de,{"aria-label":"Company vehicle",placeholder:"Pick a company vehicle",value:R,onChange:l=>{P(l),V(void 0)},options:s,showSearch:he(y.length),filterOption:(l,b)=>!!(b!=null&&b.choice)&&pe(b.choice,l),optionRender:l=>{var A;const b=l.data.choice;if(!b)return l.label;const w=b.group==="taken"?(A=b.holder)==null?void 0:A.name:b.holder?`${b.holder.name} · not active`:b.pending?"Pending":void 0;return e.jsxs(we,{children:[e.jsx("span",{className:"op-main",children:b.label}),w&&e.jsx("span",{className:"op-side",children:w})]})},...be,style:{width:"100%"},"data-testid":`${i}-select`})}),e.jsx("p",{className:"ap-line","data-testid":`${i}-help`,children:p}),G&&e.jsx("p",{className:"ap-line","data-testid":`${i}-run-sheets`,children:G})]})]});return e.jsx(oe,{open:B,onOpenChange:U,trigger:"click",placement:"bottomLeft",width:Y,title:`Assign a vehicle to ${_}`,content:ke,footer:y.length?e.jsxs("span",{onClick:C,style:{display:"contents"},children:[e.jsx(N,{onClick:()=>S(!1),"data-testid":`${i}-cancel`,children:"Cancel"}),e.jsx(N,{kind:"primary",disabled:!v,onClick:H,"data-testid":`${i}-confirm`,children:"Assign"})]}):void 0,children:e.jsx(N,{size:"small",onClick:C,onKeyDown:C,"data-testid":i,children:n})})}function $t({vanId:t,testId:n="assign-driver",onAssigned:i}){const a=ae(s=>s.world),r=j(s=>s.drivers),c=j(s=>s.vans);j(s=>s.holds);const x=ye(),$=Q(),[g,O]=d.useState(!1),[B,S]=d.useState(),[R,P]=d.useState(),k=c.find(s=>s.id===t);if(!k)return null;const m=se(k,{drivers:r,vans:c},a),L=m.filter(s=>s.group==="none"),y=m.filter(s=>s.group==="other"),f=m.find(s=>s.uid===B),T=r.find(s=>s.vanId===t&&s.account==="not_active"),_=s=>{O(s),P(void 0),S(s&&L.length===1?L[0].uid:void 0)},E=()=>{if(!f)return;if($.clash()){const p=m.find(G=>G.uid!==f.uid);p&&j.getState().assignVehicle(p.uid,t),P(`Someone else just assigned ${k.plate} to ${(p==null?void 0:p.name)??"another driver"}. Pick again.`),S(void 0);return}const s=j.getState().assignVehicle(f.uid,t);O(!1),x(`${me(k)} is now ${f.name}’s vehicle.`,s),i==null||i(f.uid)},v=s=>({value:s.uid,label:s.name,choice:s}),U=[...L.map(v),...y.length?[{label:e.jsx(je,{children:"Drives another vehicle now"}),title:"Drives another vehicle now",options:y.map(v)}]:[]],H=[f!=null&&f.plate?`${f.plate} will have no driver.`:"",T?`${le(K(T,a))} will have no vehicle.`:""].filter(Boolean).join(" "),F=e.jsxs($e,{onClick:C,"data-testid":`${n}-popover`,children:[R&&e.jsx(ce,{sentence:R,testId:`${n}-clash`}),m.length===0?e.jsx("p",{className:"ap-none",children:"No active driver is waiting for a company vehicle. Register a driver first."}):e.jsxs(e.Fragment,{children:[e.jsx(q,{label:"Driver",children:e.jsx(de,{"aria-label":"Driver",placeholder:"Pick a driver",value:B,onChange:s=>{S(s),P(void 0)},options:U,showSearch:he(m.length),filterOption:(s,p)=>!!(p!=null&&p.choice)&&pe(p.choice,s),optionRender:s=>{const p=s.data.choice;return p?e.jsxs(we,{children:[e.jsx("span",{className:"op-main",children:p.name}),p.plate&&e.jsx("span",{className:"op-side",children:p.plate})]}):s.label},...be,style:{width:"100%"},"data-testid":`${n}-select`})}),e.jsx("p",{className:"ap-line","data-testid":`${n}-help`,children:H||"One driver per vehicle."})]})]});return e.jsx(oe,{open:g,onOpenChange:_,trigger:"click",placement:"bottomLeft",width:Y,title:`Assign ${k.plate} to a driver`,content:F,footer:m.length?e.jsxs("span",{onClick:C,style:{display:"contents"},children:[e.jsx(N,{onClick:()=>O(!1),"data-testid":`${n}-cancel`,children:"Cancel"}),e.jsx(N,{kind:"primary",disabled:!f,onClick:E,"data-testid":`${n}-confirm`,children:"Assign"})]}):void 0,children:e.jsx(N,{size:"small",onClick:C,onKeyDown:C,"data-testid":n,children:"Assign Driver"})})}export{bt as A,Ke as B,dt as C,ut as D,ht as F,Ue as I,ve as P,gt as S,xt as V,ft as a,vt as b,ct as c,pt as d,$t as e,mt as f,rt as u};
