import{r as j,I as ke,_ as be,j as e,b2 as We,cf as $e,bg as re,C as Se,k as y,u as Ne,N as w,P as m,cn as Ie,bf as ie,x as b,bh as Re,cD as Ce,cr as Ae,b1 as K,ar as Oe,aC as Fe,aU as C,bc as ze,aW as J,aZ as O,bp as q,dg as Te,cC as H,a0 as X,cw as de,R as Ee,bH as Me,U as Q,ck as De,b5 as ee,c3 as Pe,bi as Le,y as _e}from"./index-A1DjCJF_.js";import{u as le,c as Ge,O as Ue,k as Be,d as se,a as Ve}from"./SettingsSection-Dsq2dTqv.js";import{j as Ze,k as Y,l as He,n as Ke,t as ce,o as te,O as L,q as qe,u as Xe,h as Ye,s as Je,v as Qe,w as es}from"./settingsModel-zqfuR01u.js";import{a as ss}from"./PictureField-BO0zhn2R.js";import{O as ts,m as os}from"./OrderList-bOP_iRaT.js";import"./room-DtrkANo2.js";var as={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M843.5 737.4c-12.4-75.2-79.2-129.1-155.3-125.4S550.9 676 546 752c-153.5-4.8-208-40.7-199.1-113.7 3.3-27.3 19.8-41.9 50.1-49 18.4-4.3 38.8-4.9 57.3-3.2 1.7.2 3.5.3 5.2.5 11.3 2.7 22.8 5 34.3 6.8 34.1 5.6 68.8 8.4 101.8 6.6 92.8-5 156-45.9 159.2-132.7 3.1-84.1-54.7-143.7-147.9-183.6-29.9-12.8-61.6-22.7-93.3-30.2-14.3-3.4-26.3-5.7-35.2-7.2-7.9-75.9-71.5-133.8-147.8-134.4-76.3-.6-140.9 56.1-150.1 131.9s40 146.3 114.2 163.9c74.2 17.6 149.9-23.3 175.7-95.1 9.4 1.7 18.7 3.6 28 5.8 28.2 6.6 56.4 15.4 82.4 26.6 70.7 30.2 109.3 70.1 107.5 119.9-1.6 44.6-33.6 65.2-96.2 68.6-27.5 1.5-57.6-.9-87.3-5.8-8.3-1.4-15.9-2.8-22.6-4.3-3.9-.8-6.6-1.5-7.8-1.8l-3.1-.6c-2.2-.3-5.9-.8-10.7-1.3-25-2.3-52.1-1.5-78.5 4.6-55.2 12.9-93.9 47.2-101.1 105.8-15.7 126.2 78.6 184.7 276 188.9 29.1 70.4 106.4 107.9 179.6 87 73.3-20.9 119.3-93.4 106.9-168.6zM329.1 345.2a83.3 83.3 0 11.01-166.61 83.3 83.3 0 01-.01 166.61zM695.6 845a83.3 83.3 0 11.01-166.61A83.3 83.3 0 01695.6 845z"}}]},name:"node-index",theme:"outlined"},ns=function(c,d){return j.createElement(ke,be({},c,{ref:d,icon:as}))},rs=j.forwardRef(ns);const is=420,P={top:.2,bottom:.2,left:.15,right:.6};function ds(s){if(s.length<2)return s;const c=s.map(x=>x[0]),d=s.map(x=>x[1]),[h,o,a,t]=[Math.min(...c),Math.max(...c),Math.min(...d),Math.max(...d)],n=Math.max(o-h,.02),i=Math.max(t-a,.02);return[...s,[h-n*P.left,a-i*P.bottom],[o+n*P.right,t+i*P.top]]}const oe=3,A=9,ls=y.span`
  display: flex;
  align-items: center;
  gap: ${w.inlineGap}px;
  width: 100%;
  & > .fw-close { margin-left: auto; }
`,cs=y.div`
  position: relative;
  height: ${is}px;
  border-radius: 8px;
  overflow: hidden;
  & > [role='region'] { position: absolute; inset: 0; }
`,ae=y.p`
  margin: ${w.textActionGap}px 0 0;
  font-size: 14px;
  line-height: 20px;
  color: ${m("color-text-secondary")};
`,hs=y.svg`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
  & .fw-line { stroke: ${m("color-action-text")}; stroke-width: 2; stroke-linecap: round; fill: none; }
  & .fw-n circle { fill: ${m("color-bg-raised")}; stroke: ${m("color-action-text")}; stroke-width: 1.5; }
  & .fw-n text { fill: ${m("color-action-text")}; font-size: 12px; font-weight: 700; font-variant-numeric: tabular-nums; text-anchor: middle; dominant-baseline: central; }
  & .fw-mark { fill: ${m("color-accent-orange")}; stroke: ${m("color-bg-raised")}; stroke-width: 1.5; }
  & .fw-name { fill: ${m("color-text-primary")}; font-size: 13px; font-weight: 600; paint-order: stroke; stroke: ${m("color-bg-canvas")}; stroke-width: 3px; stroke-linejoin: round; }
`;function us({warehouses:s,lines:c}){const{current:d}=Ne(),[,h]=j.useState(0);if(j.useEffect(()=>{if(!d)return;const t=()=>h(n=>n+1);return d.on("move",t),d.on("resize",t),()=>{d.off("move",t),d.off("resize",t)}},[d]),!d)return null;const o=new Map(s.filter(t=>t.at).map(t=>[t.id,d.project(t.at)])),a=c.flatMap(t=>{const n=o.get(t.from),i=o.get(t.to);if(!n||!i)return[];const x=i.x-n.x,u=i.y-n.y,v=Math.hypot(x,u);if(v<A*2+2)return[];const l=x/v,g=u/v,I=-g*oe,p=l*oe,W=n.x+l*A+I,f=n.y+g*A+p,$=i.x-l*A+I,S=i.y-g*A+p,N=Math.max(.5,Math.min(.7,1-28/v));return[{key:`${t.from}-${t.to}`,n:t.n,x1:W,y1:f,x2:$,y2:S,nx:W+($-W)*N-g*8,ny:f+(S-f)*N+l*8}]});return e.jsxs(hs,{"aria-hidden":!0,"data-testid":"fleet-warehouses-overlay",children:[a.map(t=>e.jsx("line",{className:"fw-line","data-line":t.key,"data-n":t.n,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2},t.key)),s.map(t=>{const n=o.get(t.id);return n?e.jsxs("g",{"data-warehouse":t.id,children:[e.jsx("rect",{className:"fw-mark",x:n.x-5,y:n.y-5,width:10,height:10}),e.jsx("text",{className:"fw-name",x:n.x+10,y:n.y+4,children:Y(t)})]},t.id):null}),a.map(t=>e.jsxs("g",{className:"fw-n",children:[e.jsx("circle",{cx:t.nx,cy:t.ny,r:9}),e.jsx("text",{x:t.nx,y:t.ny,children:t.n})]},t.key))]})}function ps({open:s,onClose:c,warehouses:d}){const h=j.useRef(null),o=d.filter(u=>u.at),a=Ze(o),t=new Set(a.flatMap(u=>[u.from,u.to])),n=a.length?o.filter(u=>t.has(u.id)):o,i=a.length?o.filter(u=>!t.has(u.id)):[],x=()=>{var u;return(u=h.current)==null?void 0:u.fitTo(ds(n.map(v=>v.at)),{padding:16,maxZoom:12,duration:0})};return e.jsxs(We,{open:s,footer:!1,size:"xl",title:e.jsxs(ls,{children:["Fleet Warehouses ",e.jsx(re,{}),e.jsx(Se,{className:"fw-close",onClick:c,"data-testid":"fleet-warehouses-close"})]}),lead:"Each line runs from a Warehouse to the Warehouses on its route.",onRequestClose:c,"data-testid":"fleet-warehouses-dialog",children:[e.jsx(cs,{children:e.jsx($e,{ref:h,ariaLabel:"Fleet Warehouses map",testId:"fleet-warehouses-map",onLoad:x,onResetView:x,children:e.jsx(us,{warehouses:o,lines:a})})}),!a.length&&e.jsx(ae,{"data-testid":"fleet-warehouses-none",children:"No Warehouse has a route yet."}),i.length>0&&e.jsxs(ae,{"data-testid":"fleet-warehouses-off-route",children:["Not on any route: ",i.map(u=>u.name).join(", "),"."]})]})}const _=y(Ie)`
  display: grid;
  gap: ${w.textActionGap}px;
  & > h4 { margin: 0; font-size: 14px; line-height: 20px; font-weight: 700; color: ${m("color-text-primary")}; }
  & [data-read-only-field] { align-content: start; }
`,V="warehouse-route",xs=y(_)`
  /* The heading row (as the Roster panel's Shifts): the heading at the left, EDIT WAREHOUSE ROUTE at the right. */
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  & > * { grid-column: 1 / -1; }
  & > h4 { grid-column: 1; grid-row: 1; min-height: 28px; display: flex; align-items: center; }
  scroll-margin-top: ${w.cardPadding}px;
  & > .wr-act { grid-column: 2; grid-row: 1; }
  & .wr-lead { margin: 0; font-size: 13px; line-height: 22px; color: ${m("color-text-secondary")}; }
  & .wr-lead [data-brand-part='demo-chip'] { margin-left: ${w.stackTight}px; vertical-align: middle; }
  & .wr-rows { list-style: none; margin: 0; padding: 0; display: grid; gap: ${w.stackTight}px; }
  & .wr-rows li { display: grid; grid-template-columns: 24px minmax(0, 1fr); font-size: 14px; line-height: 20px; color: ${m("color-text-primary")}; }
  & .wr-n { font-variant-numeric: tabular-nums; color: ${m("color-text-secondary")}; }
  & .wr-none { margin: 0; font-size: 14px; line-height: 20px; color: ${m("color-text-secondary")}; }
  & .wr-add { justify-self: start; }
  & .wr-fail { display: flex; align-items: center; gap: ${w.textActionGap}px; margin: 0; font-size: 14px; line-height: 20px; color: ${m("color-text-primary")}; }
  & .wr-fail > button { flex: none; }
`,ms=y.div`
  display: grid;
  gap: ${w.inlineGap}px;
  max-height: 240px;
  overflow: auto;
`;function fs({candidates:s,onAdd:c}){const[d,h]=j.useState(!1),[o,a]=j.useState([]),t=()=>{h(!1),a([])};return e.jsx(Ae,{open:d,onOpenChange:n=>n?h(!0):t(),trigger:"click",placement:"bottomLeft",width:320,title:"Add to the route",content:e.jsx(ms,{"data-testid":"route-add-popover",children:s.map(n=>e.jsx(Oe,{checked:o.includes(n.id),testId:`route-add-${n.id}`,onChange:i=>a(x=>i?[...x,n.id]:x.filter(u=>u!==n.id)),children:Y(n)},n.id))}),footer:e.jsx(b,{kind:"primary",disabled:!o.length,"data-testid":"route-add-confirm",onClick:()=>{c(s.filter(n=>o.includes(n.id)).map(n=>n.id)),t()},children:"Add"}),children:e.jsx(b,{size:"small",icon:e.jsx(K,{}),className:"wr-add","data-testid":"route-add",children:"Add Warehouses"})})}function gs({w:s,warehouses:c,draft:d,onDraftChange:h,onEdit:o}){const a=le(),t=a.loading||a.retrying(V),n=a.failed(V),i=d!==null,x=He(i?d:s.route,c),u=i?Ke(s.id,d,c):[],v=j.useRef(null);return j.useEffect(()=>{var l;i&&((l=v.current)==null||l.scrollIntoView({block:"start",behavior:"smooth"}))},[i]),e.jsxs(xs,{ref:v,"aria-label":"Warehouse route","data-testid":"warehouse-route",children:[e.jsx("h4",{children:e.jsx(ie,{id:"st:warehouse-route",n:2,at:"right",children:"Warehouse route"})}),o&&!i&&!t&&!n&&e.jsx("span",{className:"wr-act",children:e.jsx(b,{size:"small",onClick:o,"data-testid":"warehouse-route-edit",children:"Edit Warehouse Route"})}),t?e.jsx(Re,{rows:2,testId:"warehouse-route-loading"}):n?e.jsxs("p",{className:"wr-fail",role:"alert","data-testid":"warehouse-route-failed",children:[e.jsx("span",{children:"This section didn't load. Everything else on the page still works."}),e.jsx(b,{size:"small",icon:e.jsx(Ce,{}),onClick:()=>a.retry(V),"data-testid":"warehouse-route-retry",children:"Try Again"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"wr-lead","data-testid":"warehouse-route-lead",children:["The Warehouses on this Warehouse's route, in order. ",e.jsx(re,{})]}),i?e.jsxs(e.Fragment,{children:[x.length>0?e.jsx(ts,{label:`${s.name} route`,items:x.map(l=>({key:l.id,title:l.name,line:l.blocked?"Closed":void 0})),onMove:(l,g)=>h(os(d,l,g)),onRemove:l=>h(d.filter(g=>g!==l)),removeLabel:l=>`Take ${l} off the route`,testId:"warehouse-route-list"}):e.jsx("p",{className:"wr-none","data-testid":"warehouse-route-none",children:"No route yet."}),u.length>0&&e.jsx(fs,{candidates:u,onAdd:l=>h([...d,...l])})]}):x.length>0?e.jsx("ol",{className:"wr-rows","data-testid":"warehouse-route-rows",children:x.map((l,g)=>e.jsxs("li",{"data-testid":`warehouse-route-row-${l.id}`,children:[e.jsx("span",{className:"wr-n",children:g+1}),e.jsx("span",{children:Y(l)})]},l.id))}):e.jsx("p",{className:"wr-none","data-testid":"warehouse-route-none",children:"No route yet."})]})]})}const js=y.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${w.textActionGap}px;
`,ws=y.li`
  display: grid;
  gap: ${w.inlineGap}px;
  align-content: start;
  padding: ${w.textActionGap}px;
  border-radius: ${Ee.container}px;
  background: ${m("color-bg-canvas")};
  & .fc-name { font-size: 14px; line-height: 20px; font-weight: 700; color: ${m("color-text-primary")}; }
  & dl { margin: 0; display: grid; gap: ${w.stackTight}px; }
  & dl > div { display: grid; gap: ${w.stackTight}px; font-size: 13px; line-height: 18px; }
  & dt { color: ${m("color-text-secondary")}; }
  & dd { margin: 0; font-size: 14px; line-height: 20px; color: ${m("color-text-primary")}; font-weight: 600; }
  & .fc-act { justify-self: start; }
`,he=s=>`${Te(s)} (${s})`;function ys(s){return s.blocked?"Closed":"Open"}function vs({w:s,onRoad:c,readOnly:d=!1}){const h=ce(s.address.state);return e.jsxs(_,{"aria-label":"Details",children:[e.jsx("h4",{children:"Details"}),d&&e.jsx(H,{testId:"warehouse-admin-note",children:"Set by your company admin."}),e.jsx(O,{label:"Phone",value:s.phone,testId:"warehouse-phone"}),e.jsx(O,{label:"Address",value:q(s.address),note:c?e.jsxs(e.Fragment,{children:[L[0],e.jsx("br",{}),L[1]]}):void 0,testId:"warehouse-address"}),e.jsx(O,{label:"Time zone",value:he(h),note:"Worked out from the address.",testId:"warehouse-zone"})]})}function ks({w:s,data:c,creating:d=!1}){const h=X(),o=d?[]:de(s.id,c);return e.jsxs(_,{"aria-label":"Fleets using this Warehouse","data-testid":"warehouse-fleets",children:[e.jsx("h4",{children:"Fleets using this Warehouse"}),o.length===0?e.jsx(H,{children:"No Fleets use this Warehouse yet. SenditGo support links Fleets to Warehouses."}):e.jsxs(e.Fragment,{children:[e.jsx(H,{children:"Set up by SenditGo support."}),e.jsx(js,{children:o.map(({fleet:a,driversStarting:t})=>e.jsxs(ws,{"data-testid":`warehouse-fleet-${a.id}`,children:[e.jsx("span",{className:"fc-name",children:a.name}),e.jsxs("dl",{children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Drivers starting here"}),e.jsx("dd",{children:t})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Work shared as"}),e.jsx("dd",{children:qe(a.routeShare)})]})]}),e.jsx(b,{size:"small",className:"fc-act",onClick:()=>h(`/settings/fleets/${a.id}`),"data-testid":`open-fleet-setup-${a.id}`,children:"Open In Fleet Setup"})]},a.id))})]})]})}const bs=y.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: 13px;
  line-height: 18px;
  color: ${m("color-text-secondary")};
  white-space: normal;
`,ne={name:"",phone:"",address:{street:"",city:"",state:"NSW",postcode:"",country:"Australia"}};function Ws({w:s,data:c,onRoad:d,closeState:h,creating:o=!1,editing:a,canEdit:t,canClose:n,canEditRoute:i=!1,onEditingChange:x,onClose:u,onCreated:v}){const l=Fe(),g=C(r=>r.saveWarehouse),I=C(r=>r.addWarehouse),p=C(r=>r.setWarehouseBlocked),W=C(r=>r.saveWarehouseRoute),[f,$]=j.useState(()=>s?{name:s.name,phone:s.phone,address:{...s.address}}:{...ne,address:{...ne.address}}),[S,N]=j.useState(null),F=S!==null,[G,z]=j.useState({}),[U,T]=j.useState(!1),E=s?(r=>({name:r.name,phone:r.phone,address:{...r.address}}))(s):void 0,R=Ge({editing:a&&!o,stored:E,write:()=>{const r=s&&C.getState().warehouses.find(k=>k.id===s.id);r&&C.getState().saveWarehouse({...r,phone:r.phone.replace(/\d{2}$/,"99")})}}),ue=()=>{s&&$({name:s.name,phone:s.phone,address:{...s.address}}),z({}),x(!0)},pe=()=>{z({}),o?u():x(!1)},xe=()=>{const r={},k=te(f.name,c.warehouses,s==null?void 0:s.id),M=Xe(f.phone);if(k&&(r.name=k),M&&(r.phone=M),!d||o){const D=Ye(f.address);Object.keys(D).length&&(r.address=D)}return r},me=()=>{U||(T(!0),window.setTimeout(()=>{if(T(!1),!o&&R.blocked())return;const r=xe();if(z(r),Object.keys(r).length)return;const k={name:f.name.trim(),phone:f.phone.trim(),address:{...f.address,street:f.address.street.trim(),city:f.address.city.trim(),postcode:f.address.postcode.trim()}};if(o||!s){const{id:D,undo:ve}=I(k);l.done(`${k.name} added · Warehouses`,{undo:ve}),v(D);return}const M=g({...s,name:k.name,phone:k.phone,address:d?s.address:k.address});l.done(`${k.name} saved · Warehouses`,{undo:M}),x(!1)},se))},fe=()=>{U||!s||!S||(T(!0),window.setTimeout(()=>{T(!1);const r=W(s.id,S);l.done(`Warehouse route saved · ${s.name}`,{undo:r}),N(null)},se))},ge=()=>{if(!s)return;const r=p(s.id,!0);l.done(`${s.name} closed. No runs start here now · Warehouses`,{undo:r})},je=()=>{if(!s)return;const r=p(s.id,!1);l.done(`${s.name} reopened · Warehouses`,{undo:r})},we=!n||!h||o?void 0:h.kind==="can_close"?e.jsx(b,{danger:!0,onClick:ge,"data-testid":"warehouse-close",children:"Close Warehouse"}):h.kind==="closed"?e.jsx(b,{onClick:je,"data-testid":"warehouse-reopen",children:"Reopen Warehouse"}):e.jsx(bs,{"data-testid":"warehouse-close-line",children:h.line}),ye=ce((a?f:s??f).address.state),B=r=>$(k=>({...k,...r}));return e.jsxs(ze,{over:!0,open:!0,onClose:u,eyebrow:"Warehouse",title:o?"New Warehouse":s.name,facts:o||!s?void 0:ys(s),onEdit:t&&!o&&!F?ue:void 0,editing:a||F,onCancel:F?()=>N(null):pe,onSave:F?fe:me,saving:U,saveLabel:o?"Add Warehouse":"Save",footer:we,testId:"warehouse-panel",children:[a?e.jsxs(_,{"aria-label":"Details",children:[e.jsx("h4",{children:"Details"}),R.flag&&s&&E&&e.jsx(Ue,{record:s.name,who:R.flag,testId:"warehouse-other",onAdjust:()=>{$(r=>Be(r,R.base(),E)),R.settle()},onRefresh:()=>{$(E),z({}),R.settle()}}),e.jsx(J,{label:"Warehouse name",helper:"Drivers see this name in the app.",value:f.name,autoFocus:o,onChange:r=>B({name:r}),error:G.name,validate:r=>te(r,c.warehouses,s==null?void 0:s.id)??void 0,testId:"warehouse-name"}),e.jsx(J,{label:"Phone",helper:"The number drivers call. Up to 20 characters.",value:f.phone,type:"tel",maxLength:20,onChange:r=>B({phone:r}),error:G.phone,testId:"warehouse-phone-input"}),d&&!o&&s?e.jsx(O,{label:"Address",value:q(s.address),note:e.jsxs(e.Fragment,{children:[L[0],e.jsx("br",{}),L[1]]}),testId:"warehouse-address"}):e.jsx(ss,{value:f.address,onChange:r=>B({address:r}),errors:G.address,stateHelper:"The time zone follows the state.",testId:"warehouse-address"}),e.jsx(O,{label:"Time zone",value:he(ye),note:"Worked out from the address.",testId:"warehouse-zone"})]}):s&&e.jsx(vs,{w:s,onRoad:d,readOnly:!t}),s&&!o&&e.jsx(gs,{w:s,warehouses:c.warehouses,draft:S,onDraftChange:N,onEdit:i&&!a?()=>N([...s.route]):void 0}),e.jsx(ks,{w:s??{id:""},data:c,creating:o})]})}const $s=1440,Ss=y.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  gap: ${w.sectionGap}px;
  & > .wa-list { flex: 1 1 auto; min-width: 0; min-height: 0; display: flex; flex-direction: column; }
`,Ns=y.div`
  flex: none;
  display: flex;
  min-height: 0;
  @media (max-width: ${$s-1}px) {
    position: absolute;
    z-index: ${Le.sticky+2};
    top: 0;
    right: 0;
    bottom: 0;
    width: 480px;
    & > aside { box-shadow: ${m("shadow-panel")}; }
  }
  @media (max-width: 1279px) { width: 440px; }
`,Z=y.span`
  display: block;
  white-space: normal;
  overflow-wrap: break-word;
`,Is=y.span`
  display: block;
  white-space: nowrap;
`,Rs=[{key:"name",title:"Warehouse",width:200,render:s=>e.jsx(Z,{children:s.name})},{key:"phone",title:"Phone",width:140,render:s=>e.jsx(Is,{children:s.phone})},{key:"address",title:"Address",render:s=>e.jsx(Z,{children:s.address})},{key:"fleets",title:"Fleets using it",width:200,render:s=>e.jsx(Z,{children:s.fleets})},{key:"status",title:"Status",kind:"status",width:100,render:s=>e.jsx(_e,{status:s.status,tone:s.status==="Open"?"info":"off"})}];function Cs({rows:s,openedId:c,onOpen:d,canAdd:h}){const o=le(),a=X();return e.jsx(Pe,{testId:"warehouses-table",rowKey:"id",rows:s,columns:Rs,flexKey:"address",noun:"Warehouses",endLine:!0,loading:o.loading,onRowClick:t=>d(t.id),openedKey:c,rowTestId:t=>`warehouse-row-${t.id}`,empty:{message:"No Warehouses yet.",line:h?void 0:"Your company admin adds them.",action:h?e.jsx(b,{kind:"primary",icon:e.jsx(K,{}),onClick:()=>a("/settings/warehouses/new"),children:"Add Warehouse"}):void 0,art:"search"}})}function Ds(){const{warehouseId:s}=Me(),c=X(),d=Q(p=>p.role),h=Q(p=>p.world),o=De(),a=Je(d),t=j.useMemo(()=>o.warehouses.map(p=>{const W=de(p.id,o).map(f=>f.fleet.name);return{id:p.id,name:p.name,phone:p.phone,address:q(p.address),fleets:W.length?W.join(", "):"None",status:p.blocked?"Closed":"Open",w:p}}),[o]),n=s==="new",i=s&&!n?o.warehouses.find(p=>p.id===s):void 0,[x,u]=j.useState(null),[v,l]=j.useState(!1),g=n||!!i&&x===i.id;if(n&&!a.addWarehouse)return e.jsx(ee,{to:"/settings/warehouses",replace:!0});if(s&&!n&&!i)return e.jsx(ee,{to:"/settings/warehouses",replace:!0});const I=()=>{u(null),c("/settings/warehouses")};return e.jsxs(Ve,{eyebrow:"Settings",title:"Warehouses",line:"Where drivers start their runs, and which Fleets use each one.",wide:!0,testId:"settings-warehouses",action:a.viewRoutes||a.addWarehouse&&!g?e.jsxs(e.Fragment,{children:[a.viewRoutes&&e.jsx(ie,{id:"st:fleet-warehouses",n:1,children:e.jsx(b,{icon:e.jsx(rs,{}),onClick:()=>l(!0),"data-testid":"view-fleet-warehouses",children:"View Fleet Warehouses"})}),a.addWarehouse&&!g&&e.jsx(b,{kind:"primary",icon:e.jsx(K,{}),onClick:()=>c("/settings/warehouses/new"),"data-testid":"add-warehouse",children:"Add Warehouse"})]}):void 0,children:[e.jsxs(Ss,{children:[e.jsx("div",{className:"wa-list",children:e.jsx(Cs,{rows:t,openedId:i==null?void 0:i.id,onOpen:p=>{u(null),c(`/settings/warehouses/${p}`)},canAdd:a.addWarehouse&&!g})}),(i||n)&&e.jsx(Ns,{"data-testid":"warehouse-panel-spot",children:e.jsx(Ws,{w:i,data:o,creating:n,onRoad:!!i&&es(i.id,h),closeState:i?Qe(i,o,h):void 0,editing:g,canEdit:a.editWarehouse,canClose:a.closeWarehouse,canEditRoute:a.editRoute,onEditingChange:p=>u(p&&i?i.id:null),onClose:I,onCreated:p=>{u(null),c(`/settings/warehouses/${p}`)}},(i==null?void 0:i.id)??"new")})]}),a.viewRoutes&&e.jsx(ps,{open:v,onClose:()=>l(!1),warehouses:o.warehouses})]})}export{Ds as WarehousesPage};
