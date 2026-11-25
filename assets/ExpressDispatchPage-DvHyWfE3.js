import{aA as ae,cx as Ke,cF as ot,cG as Ue,a0 as at,ab as lt,aC as ct,U as A,r as I,cH as De,j as t,cI as Ee,bL as Ge,bT as Fe,aL as ht,cJ as M,ar as ge,cK as xe,bb as ut,x as ve,cL as pt,c9 as mt,bI as ft,aY as Pe,cM as J,cN as _e,N as g,P as $,k as D,R as Q,cO as Se,cP as Le,cQ as gt}from"./index-A1DjCJF_.js";const xt={S0170025:"scanned",S0170029:"held"},vt="It changed after you opened this page.",St=h=>h.replace(/^N\s*\d+\s+/,""),He=(h,d)=>d.map(p=>h.orders[p]).filter(p=>!!p&&!Ue(p));function qe(h,d,p,r){var v;if(d.isGhost)return"Import pending.";if(Ue(d))return"This Order is already closed.";if(d.statusId===16)return"Waiting to cancel.";if(d.runSheetId!==p.id||!r.orderIds.includes(d.id))return"The Order’s Run Sheet changed. Refresh before moving it.";if(p.isDeleted||Ke(p)==="completed")return"The Run Sheet is closed.";if(p.planStartTime||r.actualArrival||d.statusId===8)return"On the road.";if(d.statusId>=4&&d.statusId<=7)return"Already picked up.";if(d.items.some(i=>{var o;return i.exception||((o=i.exceptionReports)==null?void 0:o.length)}))return"An item has an exception.";if((v=d.captureMiss)!=null&&v.length)return"A scan issue needs checking.";const m=xt[d.id];return m==="scanned"?"Scanned at the Warehouse.":m==="held"?"On hold.":d.statusId!==3?"This Order is not awaiting pickup.":h.drivers.some(i=>i.uid===p.driverUid)?null:"The sending driver is unavailable."}function bt(h,d,p={}){return h.flatMap(r=>r.sheets.filter(m=>["in_progress","scheduled"].includes(Ke(m))).map(m=>{var x;const v=[],i=[],o=new Set;for(const a of m.stops)for(const c of He(d,a.orderIds)){if(p[c.id]||o.has(c.id))continue;o.add(c.id);const R=qe(d,c,m,a);R?i.push({order:c,why:`${R} Stays with ${St(r.name)}.`}):v.push(c)}return{uid:r.key,name:r.name,color:r.color,runSheetId:m.id,shiftName:(x=d.shifts.find(a=>a.id===m.shiftId))==null?void 0:x.name,onRoad:!!m.planStartTime,movable:v,kept:i}})).filter(r=>r.movable.length+r.kept.length>0)}function Be(h,d,p,r={},m=(v=>(v=h.flatMap(i=>i.sheets)[0])==null?void 0:v.operationDate)()??ae){const i=a=>Object.entries(r).filter(([,c])=>c===a).map(([c])=>d.orders[c]).filter(c=>!!c),o=h.filter(a=>!p.has(a.key)).map(a=>{const c=a.main&&(a.status==="in_transit"||a.status==="scheduled")?a.main:void 0,R=c?He(d,c.stops.flatMap(N=>N.orderIds)).filter(N=>!r[N.id]||r[N.id]===a.key):[],V=[...R,...i(a.key).filter(N=>!R.includes(N))];return{uid:a.key,name:a.name,color:a.color,runSheetId:c==null?void 0:c.id,shiftName:c?a.shiftName:void 0,existing:V,free:!c,unavailable:a.driver.active?ot(d.leaves,a.key,m)?m===ae?"On leave today":"On leave on this date":c!=null&&c.planStartTime?"Already on the road. Choose a driver who has not departed.":void 0:"Driver inactive"}}),x=a=>a.unavailable?2:a.free?1:0;return o.sort((a,c)=>x(a)-x(c)||a.name.localeCompare(c.name))}function jt(h,d,p,r){const m=[],v=[];for(const o of new Set(h)){const x=d[o];x&&p.has(x)&&!p.get(x).unavailable?m.push({orderId:o,to:x}):v.push(o)}const i=[...new Set(m.map(o=>o.to))].filter(o=>{var x;return((x=p.get(o))==null?void 0:x.free)&&!r[o]});return{moves:m,unmapped:v,needShift:i}}function $t(h,d){const p=new Map,r=i=>{const o=p.get(i);if(!o)return p.set(i,i),i;if(o===i)return i;const x=r(o);return p.set(i,x),x},m=i=>{const o=d.orders[i.orderId],x=o==null?void 0:o.runSheetId;return x!==void 0&&d.runSheets[x]?`source-run:${x}`:`missing-source:${i.orderId}`};for(const i of h)p.set(r(m(i)),r(`driver:${i.to}`));const v=new Map;for(const i of h){const o=r(`driver:${i.to}`);v.set(o,[...v.get(o)??[],i])}return[...v.values()]}const We=(h,d)=>`${h} ${d}${h===1?"":"s"}`;function ze(h,d,p,r){const m=new Map;for(const v of h)m.set(v.to,[...m.get(v.to)??[],v.orderId]);return[...m.entries()].map(([v,i])=>{var a;const o=d.get(v),x=o.free?(a=p.find(c=>c.id===r[v]))==null?void 0:a.name:`Run Sheet ${o.runSheetId}`;return{uid:v,orderIds:i,text:`${We(i.length,"Order")} to ${o.name}${x?` · ${x}`:""}`}})}const L=h=>We(h,"Order"),It=D.section`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  border-radius: ${Q.container}px;
  background: ${$("color-bg-surface")};
  box-shadow: ${$("shadow-card")};
  overflow: hidden;
`,wt=D.div`
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr) 280px;
  @media (max-width: 1180px) {
    grid-template-columns: 240px minmax(0, 1fr) 240px;
  }
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overscroll-behavior: contain;
    & > * { flex: none; }
    & > * + * { border-left: 0; border-top: 1px solid ${$("color-border-subtle")}; }
    & > * > .ed-body { overflow: visible; }
  }
`,be=D.div`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  & + & { border-left: 1px solid ${$("color-border-subtle")}; }
  & > .ed-h {
    flex: none;
    margin: 0;
    padding: ${g.textActionGap}px ${g.cardPadding}px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${$("color-text-secondary")};
    border-bottom: 1px solid ${$("color-border-subtle")};
  }
  & > .ed-body > span { font-size: 14px; line-height: 20px; }
  & > .ed-body {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
    padding: ${g.textActionGap}px ${g.cardPadding}px;
    display: grid;
    align-content: start;
    gap: ${g.inlineGap}px;
  }
`,je=D.div`
  display: grid;
  gap: ${g.stackTight}px;
  padding: ${g.textActionGap}px;
  border-radius: ${Q.control}px;
  box-shadow: inset 0 0 0 1px ${({$on:h})=>h?$("color-action"):$("color-border-subtle")};
  background: ${({$on:h})=>h?$("color-fill-selected"):"transparent"};
  & .ed-name { display: inline-flex; align-items: center; gap: ${g.inlineGap}px; min-width: 0; font-weight: 600; }
  & .ed-name > span:last-child { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  & .ed-line { font-size: 12px; line-height: 18px; color: ${({$off:h})=>h?$("color-text-disabled"):$("color-text-secondary")}; }
`,yt=D.div`
  display: grid;
  gap: ${g.stackTight}px;
  & + & { margin-top: ${g.textActionGap}px; }
  & > .ed-gh { display: flex; align-items: center; gap: ${g.inlineGap}px; min-width: 0; font-weight: 600; }
  & > .ed-gh > .ed-ghn { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
`,Ye=D.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 200px;
  align-items: center;
  gap: ${g.inlineGap}px;
  min-height: 40px;
  padding: ${g.stackTight}px 0;
  border-bottom: 1px solid ${$("color-border-subtle")};
  & .ed-id { font-weight: 600; font-variant-numeric: tabular-nums; }
  & .ed-n { color: ${$("color-text-secondary")}; }
  & .ed-why { grid-column: 1 / -1; padding-left: ${g.textActionGap*2}px; font-size: 12px; line-height: 18px; color: ${$("color-text-secondary")}; }
  @media (max-width: 1279px) {
    grid-template-columns: minmax(0, 1fr) 168px;
  }
`,kt=D.details`
  margin-top: ${g.textActionGap}px;
  border-radius: ${Q.control}px;
  box-shadow: inset 0 0 0 1px ${$("color-border-subtle")};
  & > summary {
    cursor: pointer;
    padding: ${g.inlineGap}px ${g.textActionGap}px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${$("color-text-secondary")};
  }
  & > summary:focus-visible { outline: 2px solid ${$("color-focus")}; outline-offset: 2px; border-radius: ${Q.control}px; }
  & > ul { margin: 0; padding: 0 ${g.textActionGap}px ${g.inlineGap}px; list-style: none; display: grid; gap: ${g.stackTight}px; }
  & > ul > li { color: ${$("color-text-secondary")}; font-variant-numeric: tabular-nums; }
`,Ot=D.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  padding: ${g.cardPadding}px;
  display: grid;
  align-content: start;
  gap: ${g.textActionGap}px;
  & > h2 { margin: 0; font-size: 16px; line-height: 24px; font-weight: 700; }
  & > ul { margin: 0; padding: 0; list-style: none; display: grid; gap: ${g.inlineGap}px; }
  & > ul > li { display: grid; gap: ${g.stackTight}px; padding: ${g.textActionGap}px; border-radius: ${Q.control}px; box-shadow: inset 0 0 0 1px ${$("color-border-subtle")}; }
  & > ul > li > b { font-weight: 600; }
`,Rt=D.div`
  flex: none;
  padding: 0 ${g.cardPadding}px ${g.textActionGap}px;
`,$e=h=>{const d=h.items.reduce((p,r)=>p+r.quantity,0);return`${d} item${d===1?"":"s"}`};function Ct(){const h=at(),[d]=lt(),p=ct(),r=A(e=>e.world),m=A(e=>e.fleetId),v=A(e=>e.can);A(e=>e.role);const[i,o]=I.useState([]),[x,a]=I.useState([]),[c,R]=I.useState([]),[V,N]=I.useState({}),[Je,le]=I.useState({}),[y,Qe]=I.useState(ae),B=I.useRef({}),Ve=I.useRef([]),G=A(e=>e.unconfirmed),[X,F]=I.useState("pick"),[ce,Ie]=I.useState(!1),[Y,K]=I.useState(null),[we,O]=I.useState(null),Z=I.useRef(!1),ye=I.useRef(d.get("edOutcome")==="fail"),ee=I.useMemo(()=>De({world:r,fleetId:m,today:y}),[r,m,y]),k=I.useMemo(()=>bt(ee,r),[ee,r]),he=I.useMemo(()=>Be(ee,r,new Set(k.filter(e=>i.includes(String(e.runSheetId))).map(e=>e.uid)),{},y),[ee,r,k,i,y]),te=I.useMemo(()=>new Map(he.map(e=>[e.uid,e])),[he]),ke=r.shifts.filter(e=>e.fleetId===m),P=x.map(e=>te.get(e)).filter(e=>!!e&&!e.unavailable),U=c.filter(e=>k.some(n=>i.includes(String(n.runSheetId))&&n.movable.some(s=>s.id===e))),Oe=e=>V[e],Xe=Object.fromEntries(U.map(e=>[e,Oe(e)])),ue=new Map(P.map(e=>[e.uid,e])),E=Je,w=jt(U,Xe,ue,E),ne=w.moves.length>0&&w.unmapped.length===0&&w.needShift.length===0,Re=ze(w.moves,te,ke,E),se=$t(w.moves,r),ie=(e,n=r)=>{var b;const s=n.orders[e.orderId],u=s!=null&&s.runSheetId?n.runSheets[s.runSheetId]:void 0,S=Be(De({world:n,fleetId:m,today:y}),n,new Set,{},y).find(C=>C.uid===e.to);return JSON.stringify([s,u==null?void 0:u.revision,S==null?void 0:S.runSheetId,S!=null&&S.runSheetId?(b=n.runSheets[S.runSheetId])==null?void 0:b.revision:E[e.to],S==null?void 0:S.unavailable,y,m])},re=X==="review"&&Object.entries(B.current).some(([e,n])=>n!==ie({orderId:e,to:V[e]??""})),Ze=()=>{B.current=Object.fromEntries(w.moves.map(e=>[e.orderId,ie(e)]))},et=()=>{o([]),a([]),R([]),N({}),le({}),B.current={},K(null),O(null),F("pick")};if(!v("drv_sched_chg"))return t.jsxs(Ee,{"data-testid":"page-express-dispatch",children:[t.jsx(Ge,{eyebrow:t.jsx(Fe,{to:"/run-management/run-sheets",children:"Run Sheets"}),title:"Express Dispatch"}),t.jsx("div",{"data-testid":"ed-no-access",children:t.jsx(ht,{art:"permission",title:"Express Dispatch isn’t open to your role",body:"Ask an admin for Change Driver."})})]});const tt=(e,n)=>{const s=k.find(b=>String(b.runSheetId)===e),u=s==null?void 0:s.uid;o(b=>n?[...b,e]:b.filter(C=>C!==e)),a(b=>b.filter(C=>C!==u));const S=(s==null?void 0:s.movable.map(b=>b.id))??[];R(b=>n?[...new Set([...b,...S])]:b.filter(C=>!S.includes(C)))},nt=(e,n)=>{a(s=>n?[...s,e]:s.filter(u=>u!==e)),n||N(s=>Object.fromEntries(Object.entries(s).filter(([,u])=>u!==e)))},pe=[w.unmapped.length?P.length?`${w.unmapped.length===1?"1 Order has":`${w.unmapped.length} Orders have`} no driver yet.`:"Tick a driver on the right to move Orders to.":null,...w.needShift.map(e=>{var n;return`Pick a Shift for ${(n=te.get(e))==null?void 0:n.name}.`})].filter(Boolean),Ne=async(e=w.moves)=>{var s;if(Z.current||!ne||re||G||!v("drv_sched_chg"))return;Z.current=!0,Ie(!0),K(null),O(null);const n=A.getState();try{const u=P.filter(l=>l.free&&e.some(f=>f.to===l.uid)),S=await Promise.all(u.map(async l=>({c:l,result:await Se.getAvailableShifts(l.uid,y)}))),b=A.getState();if(!b.can("drv_sched_chg")||b.fleetId!==m||b.world!==n.world){O("The Fleet, permissions or Run Sheets changed. Review your choices again. Nothing was moved."),F("pick");return}const C=S.filter(({c:l,result:f})=>!f.ok||!f.value.some(j=>j.shiftId===E[l.uid]&&j.available));if(C.length){le(l=>Object.fromEntries(Object.entries(l).filter(([f])=>!C.some(({c:j})=>j.uid===f)))),O(`Check the Shift for ${C.map(({c:l})=>l.name).join(", ")}. It could not be confirmed as available. Nothing was moved.`),F("pick");return}const de=ye.current?(s=e[0])==null?void 0:s.orderId:void 0;ye.current=!1;const z=e.filter(l=>l.orderId!==de),me=new Map;for(const l of z){const f=b.world.orders[l.orderId],j=ue.get(l.to);if(!(f!=null&&f.runSheetId))throw new Error("Source changed");const T=Le(f.runSheetId),q=j.runSheetId?Le(j.runSheetId):gt(j.uid),W=`${T}:${q}`,_=me.get(W)??{kind:"reassign",orderIds:[],fromKey:T,toKey:q,shiftId:E[l.to]};_.orderIds.push(l.orderId),me.set(W,_)}if(!z.length){K(de??null);return}Ve.current=z;const oe=await A.getState().confirmLinkedChanges([...me.values()],l=>{if(!A.getState().can("drv_sched_chg"))return"You no longer have permission to move these Orders.";for(const f of z){if(ie(f,l)!==B.current[f.orderId])return`${f.orderId} or its Run Sheet changed. Nothing in this set was moved. Review it again.`;const j=l.orders[f.orderId],T=j!=null&&j.runSheetId?l.runSheets[j.runSheetId]:void 0,q=T==null?void 0:T.stops.find(_=>_.orderIds.includes(f.orderId));if(!j||!T||!q||qe(l,j,T,q))return`${f.orderId} can no longer move safely. Review its latest status.`;const W=ue.get(f.to);if(W.free&&!Se.computeAvailableShifts(l,f.to,y).some(_=>_.shiftId===E[f.to]&&_.available))return`The receiving Shift for ${W.name} is no longer available.`}return null});if(A.getState().dismissSummary(),oe.status==="unknown"){O(oe.sentence);return}if(oe.status!=="confirmed"){O(oe.sentence);return}const fe=Se.getWorld(),H=z.filter(l=>{var j,T;const f=(j=fe.orders[l.orderId])==null?void 0:j.runSheetId;return f!=null&&((T=fe.runSheets[f])==null?void 0:T.driverUid)===l.to});if(H.length!==z.length){O("The latest Run Sheets do not match every requested move. Review each Order’s current location before making another change.");return}R(l=>l.filter(f=>!H.some(j=>j.orderId===f))),B.current=Object.fromEntries(w.moves.filter(l=>!H.some(f=>f.orderId===l.orderId)).map(l=>[l.orderId,ie(l,fe)])),H.length&&p.done(`${L(H.length)} moved`),de?K(de):(F("pick"),O(null))}catch{O("The move could not be confirmed. Check the current Run Sheets before trying again.")}finally{Ie(!1),Z.current=!1}},Ce=k.filter(e=>e.movable.length>0||i.includes(String(e.runSheetId))),Te=k.filter(e=>e.movable.length===0&&!i.includes(String(e.runSheetId))&&e.onRoad),Ae=k.filter(e=>e.movable.length===0&&!i.includes(String(e.runSheetId))&&!e.onRoad),st=t.jsxs(be,{"data-testid":"ed-from",children:[t.jsx("h2",{className:"ed-h",children:"From Drivers"}),t.jsxs("div",{className:"ed-body",children:[Ce.length===0&&t.jsx(M,{children:"No driver has Orders that can move right now."}),Ce.map(e=>{const n=i.includes(String(e.runSheetId));return t.jsxs(je,{$on:n,"data-testid":`ed-from-${k.filter(s=>s.uid===e.uid).length>1?e.runSheetId:e.uid}`,children:[t.jsx(ge,{checked:n,onChange:s=>tt(String(e.runSheetId),s),testId:`ed-from-check-${k.filter(s=>s.uid===e.uid).length>1?e.runSheetId:e.uid}`,children:t.jsxs("span",{className:"ed-name",children:[t.jsx(xe,{$color:e.color}),t.jsx("span",{children:e.name})]})}),t.jsxs("span",{className:"ed-line",children:["Run Sheet ",e.runSheetId,e.shiftName?` · ${e.shiftName}`:""]}),t.jsxs("span",{className:"ed-line","data-testid":`ed-from-count-${k.filter(s=>s.uid===e.uid).length>1?e.runSheetId:e.uid}`,children:[e.movable.length," can move",e.kept.length?` · ${e.kept.length} kept`:""]})]},e.runSheetId)}),Te.length>0&&t.jsxs(M,{"data-testid":"ed-from-staying",children:["On the road, so their Orders stay: ",Te.map(e=>e.name).join(", "),"."]}),Ae.length>0&&t.jsxs(M,{"data-testid":"ed-from-done",children:["Nothing left that can move: ",Ae.map(e=>e.name).join(", "),"."]})]})]}),Me=k.filter(e=>i.includes(String(e.runSheetId))),it=t.jsxs(be,{"data-testid":"ed-orders",children:[t.jsx("h2",{className:"ed-h",children:"Orders To Move"}),t.jsxs("div",{className:"ed-body",children:[Me.length===0&&t.jsx(M,{"data-testid":"ed-orders-empty",children:"Tick a driver on the left to see their Orders."}),Me.map(e=>t.jsxs(yt,{"data-testid":`ed-group-${e.uid}`,children:[t.jsxs("div",{className:"ed-gh",children:[t.jsx(xe,{$color:e.color}),t.jsxs("span",{className:"ed-ghn",children:[e.name," · Run Sheet ",e.runSheetId]})]}),e.movable.map(n=>t.jsxs(Ye,{"data-testid":`ed-order-${n.id}`,children:[t.jsx(ge,{checked:c.includes(n.id),onChange:s=>R(u=>s?[...u,n.id]:u.filter(S=>S!==n.id)),"aria-label":`Move ${n.id}`,testId:`ed-order-check-${n.id}`,children:t.jsxs("span",{children:[t.jsx("span",{className:"ed-id",children:n.id})," ",t.jsxs("span",{className:"ed-n",children:["· ",$e(n)]})]})}),t.jsx(ut,{inRow:!0,"aria-label":`Driver for ${n.id}`,"data-testid":`ed-pick-${n.id}`,placeholder:P.length?"Choose driver":"Tick a driver first",disabled:!P.length||!c.includes(n.id),value:c.includes(n.id)?Oe(n.id):void 0,onChange:s=>N(u=>({...u,[n.id]:s})),options:P.map(s=>({value:s.uid,label:s.name}))})]},n.id)),e.kept.map(({order:n,why:s})=>t.jsxs(Ye,{"data-testid":`ed-kept-${n.id}`,children:[t.jsxs("span",{children:[t.jsx("span",{className:"ed-id",children:n.id})," ",t.jsxs("span",{className:"ed-n",children:["· ",$e(n)]})]}),t.jsx("span",{}),t.jsx("span",{className:"ed-why",children:s})]},n.id))]},e.runSheetId)),P.filter(e=>e.existing.length>0).map(e=>t.jsxs(kt,{"data-testid":`ed-already-${e.uid}`,children:[t.jsxs("summary",{children:["Already with ",e.name," · ",L(e.existing.length)]}),t.jsx("ul",{children:e.existing.map(n=>t.jsxs("li",{children:[n.id," · ",$e(n)]},n.id))})]},e.uid))]})]}),rt=t.jsxs(be,{"data-testid":"ed-to",children:[t.jsx("h2",{className:"ed-h",children:"To Drivers"}),t.jsx("div",{className:"ed-body",children:he.map(e=>{const n=x.includes(e.uid),s=!!e.unavailable;return t.jsxs(je,{$on:n&&!s,$off:s,"data-testid":`ed-to-${e.uid}`,children:[t.jsx(ge,{checked:n&&!s,disabled:s,onChange:u=>nt(e.uid,u),testId:`ed-to-check-${e.uid}`,children:t.jsxs("span",{className:"ed-name",children:[t.jsx(xe,{$color:e.color}),t.jsx("span",{children:e.name})]})}),t.jsx("span",{className:"ed-line",children:s?`Can’t take Orders: ${e.unavailable}`:e.free?e.existing.length?`${L(e.existing.length)} moved here`:"Free today":t.jsxs(t.Fragment,{children:[t.jsxs("span",{style:{whiteSpace:"nowrap"},children:["Run Sheet ",e.runSheetId]}),e.shiftName&&t.jsxs(t.Fragment,{children:[" · ",t.jsx("span",{style:{whiteSpace:"nowrap"},children:e.shiftName})]})," · ",t.jsx("span",{style:{whiteSpace:"nowrap"},children:L(e.existing.length)})]})}),n&&!s&&t.jsx(ve,{size:"small","data-testid":`ed-map-${e.uid}`,disabled:!U.length,onClick:()=>N(u=>({...u,...Object.fromEntries(U.map(S=>[S,e.uid]))})),children:"Assign selected Orders"}),n&&e.free&&!s&&t.jsx("div",{"data-testid":`ed-shift-${e.uid}`,children:t.jsx(pt,{driverUid:e.uid,operationDate:y,value:E[e.uid]??null,onChange:u=>{le(S=>({...S,[e.uid]:u??void 0})),O(null)}})})]},e.uid)})})]}),dt=Y?r.orders[Y]:void 0;return t.jsxs(Ee,{"data-testid":"page-express-dispatch",children:[t.jsx(Ge,{eyebrow:t.jsx(Fe,{to:"/run-management/run-sheets",children:"Run Sheets"}),title:"Express Dispatch",description:`Move whole Orders from one driver to another. One driver per Order. Operation date: ${mt(y)} ${y.slice(0,4)}.`}),X==="pick"&&t.jsx(ft,{noChips:!0,noPast:!0,label:"Operation date",today:Pe(ae),value:Pe(y),onChange:e=>{e&&!Z.current&&(et(),Qe(e.format("YYYY-MM-DD")))},testId:"ed-operation-date"}),t.jsxs(It,{"data-testid":"ed-board","data-step":X,children:[G&&t.jsxs("div",{children:[t.jsx(J,{tone:"warning",what:"An earlier move has no confirmed result. Check its latest status before making another change.",testId:"ed-unknown"}),t.jsx(ve,{"data-testid":"ed-check-status",onClick:()=>{const e=[...new Set(G.changes.flatMap(s=>"orderIds"in s?s.orderIds:[]))],n=A.getState().checkLatestStatus();(n==null?void 0:n.status)==="confirmed"&&(R(s=>s.filter(u=>!e.includes(u))),p.done(`${L(e.length)} moved`),F("pick")),O((n==null?void 0:n.status)==="confirmed"?null:(n==null?void 0:n.sentence)??null),B.current={}},children:"Check Latest Status"})]}),we&&t.jsx(J,{tone:"warning",what:we,testId:"ed-review-error"}),X==="pick"?t.jsxs(t.Fragment,{children:[t.jsxs(wt,{children:[st,it,rt]}),pe.length>0&&U.length>0&&t.jsx(Rt,{children:t.jsx(J,{tone:"warning",what:pe.join(" "),testId:"ed-warn"})}),t.jsx(_e,{testId:"ed-footer",sticky:!1,start:t.jsx("span",{"data-testid":"ed-count",children:w.moves.length?`${L(w.moves.length)} to move`:"Nothing to move yet"}),actions:[{key:"cancel",label:"Back",onClick:()=>h("/run-management/run-sheets"),testId:"ed-cancel",collapse:"never"},{key:"review",label:"Review Moves",kind:"primary",disabled:!ne||!!G,tooltip:ne?void 0:pe.join(" ")||"Tick an Order and choose its driver first.",onClick:()=>{K(null),O(null),Ze(),F("review")},testId:"ed-review"}]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(Ot,{"data-testid":"ed-summary",children:[t.jsx("h2",{children:"Check the moves"}),t.jsx(M,{children:"Demo: these moves update the shared local Run Sheets and Order history. No live driver is notified."}),re&&!G&&t.jsx(J,{tone:"warning",what:"A selected Order or Run Sheet changed. Go back and review the current choices before moving.",testId:"ed-stale"}),Y&&t.jsx(J,{testId:"ed-failed",what:`${Y} was not moved`,why:vt,next:dt?`It is still with its driver. Move ${Y} again, or go back and leave it.`:void 0}),se.length<=1&&t.jsx("ul",{children:Re.map(e=>t.jsxs("li",{"data-testid":`ed-line-${e.uid}`,children:[t.jsx("b",{children:e.text}),t.jsxs(M,{children:["From ",k.filter(n=>e.orderIds.some(s=>{var u;return((u=r.orders[s])==null?void 0:u.runSheetId)===n.runSheetId})).map(n=>`${n.name} · Run Sheet ${n.runSheetId}`).join("; ")]}),t.jsx(M,{children:e.orderIds.join(" · ")})]},e.uid))}),se.length>1&&t.jsxs(t.Fragment,{children:[t.jsx(M,{children:"These moves affect separate sets of Run Sheets. Apply each set separately; one result does not confirm the others."}),se.map((e,n)=>t.jsxs(je,{"data-testid":`ed-scope-${n}`,children:[ze(e,te,ke,E).map(s=>t.jsxs("div",{children:[t.jsx("b",{children:s.text}),t.jsxs("div",{children:["From ",k.filter(u=>s.orderIds.some(S=>{var b;return((b=r.orders[S])==null?void 0:b.runSheetId)===u.runSheetId})).map(u=>`${u.name} · Run Sheet ${u.runSheetId}`).join("; ")]}),t.jsx(M,{children:s.orderIds.join(" · ")})]},s.uid)),t.jsx(ve,{disabled:ce||re||!!G,onClick:()=>void Ne(e),children:"Move These Orders"})]},e.map(s=>s.orderId).join()))]}),t.jsx(M,{children:"Whole Orders move. Each receiving driver keeps the Orders they already have."})]}),t.jsx(_e,{testId:"ed-footer",sticky:!1,start:Re.length>1?t.jsxs("span",{"data-testid":"ed-count",children:[L(w.moves.length)," to move"]}):void 0,actions:[{key:"back",label:"Back",onClick:()=>F("pick"),disabled:ce,testId:"ed-back",collapse:"never"},{key:"move",label:"Move Orders",kind:"primary",loading:ce,disabled:!ne||re||!!G||se.length>1,onClick:()=>void Ne(),testId:"ed-move"}]})]})]})]})}export{Ct as ExpressDispatchPage};
