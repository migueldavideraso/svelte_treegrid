(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function M(){}function Be(t){return t()}function me(){return Object.create(null)}function G(t){t.forEach(Be)}function Me(t){return typeof t=="function"}function L(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ue(t){return Object.keys(t).length===0}function C(t,e){t.appendChild(e)}function P(t,e,n){t.insertBefore(e,n||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function We(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function B(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function he(t){return document.createTextNode(t)}function q(){return he(" ")}function Q(){return he("")}function K(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function je(t){return Array.from(t.childNodes)}function Ke(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _e(t,e){t.value=e??""}function ie(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}let te;function ee(t){te=t}function Fe(){if(!te)throw new Error("Function called outside component initialization");return te}function Ie(t){Fe().$$.on_mount.push(t)}const Z=[],U=[];let x=[];const ae=[],Ve=Promise.resolve();let ce=!1;function Ge(){ce||(ce=!0,Ve.then(Oe))}function de(t){x.push(t)}function oe(t){ae.push(t)}const fe=new Set;let X=0;function Oe(){if(X!==0)return;const t=te;do{try{for(;X<Z.length;){const e=Z[X];X++,ee(e),Je(e.$$)}}catch(e){throw Z.length=0,X=0,e}for(ee(null),Z.length=0,X=0;U.length;)U.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];fe.has(n)||(fe.add(n),n())}x.length=0}while(Z.length);for(;ae.length;)ae.pop()();ce=!1,fe.clear(),ee(t)}function Je(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(de)}}function Qe(t){const e=[],n=[];x.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),x=e}const le=new Set;let J;function F(){J={r:0,c:[],p:J}}function V(){J.r||G(J.c),J=J.p}function E(t,e){t&&t.i&&(le.delete(t),t.i(e))}function D(t,e,n,l){if(t&&t.o){if(le.has(t))return;le.add(t),J.c.push(()=>{le.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function re(t,e){D(t,1,1,()=>{e.delete(t.key)})}function se(t,e,n,l,o,i,u,a,r,s,_,d){let c=t.length,h=i.length,y=c;const g={};for(;y--;)g[t[y].key]=y;const m=[],S=new Map,w=new Map,b=[];for(y=h;y--;){const z=d(o,i,y),W=n(z);let j=u.get(W);j?l&&b.push(()=>j.p(z,e)):(j=s(W,z),j.c()),S.set(W,m[y]=j),W in g&&w.set(W,Math.abs(y-g[W]))}const k=new Set,p=new Set;function A(z){E(z,1),z.m(a,_),u.set(z.key,z),_=z.first,h--}for(;c&&h;){const z=m[h-1],W=t[c-1],j=z.key,ne=W.key;z===W?(_=z.first,c--,h--):S.has(ne)?!u.has(j)||k.has(j)?A(z):p.has(ne)?c--:w.get(j)>w.get(ne)?(p.add(j),A(z)):(k.add(ne),c--):(r(W,u),c--)}for(;c--;){const z=t[c];S.has(z.key)||r(z,u)}for(;h;)A(m[h-1]);return G(b),m}function ue(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function N(t){t&&t.c()}function I(t,e,n,l){const{fragment:o,after_update:i}=t.$$;o&&o.m(e,n),l||de(()=>{const u=t.$$.on_mount.map(Be).filter(Me);t.$$.on_destroy?t.$$.on_destroy.push(...u):G(u),t.$$.on_mount=[]}),i.forEach(de)}function O(t,e){const n=t.$$;n.fragment!==null&&(Qe(n.after_update),G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xe(t,e){t.$$.dirty[0]===-1&&(Z.push(t),Ge(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,n,l,o,i,u,a=[-1]){const r=te;ee(t);const s=t.$$={fragment:null,ctx:[],props:i,update:M,not_equal:o,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:me(),dirty:a,skip_bound:!1,root:e.target||r.$$.root};u&&u(s.root);let _=!1;if(s.ctx=n?n(t,e.props||{},(d,c,...h)=>{const y=h.length?h[0]:c;return s.ctx&&o(s.ctx[d],s.ctx[d]=y)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](y),_&&Xe(t,d)),c}):[],s.update(),_=!0,G(s.before_update),s.fragment=l?l(s.ctx):!1,e.target){if(e.hydrate){const d=je(e.target);s.fragment&&s.fragment.l(d),d.forEach(R)}else s.fragment&&s.fragment.c();e.intro&&E(t.$$.fragment),I(t,e.target,e.anchor,e.customElement),Oe()}ee(r)}class T{$destroy(){O(this,1),this.$destroy=M}$on(e,n){if(!Me(n))return M;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!Ue(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ye=[{id:"product_01",name:"Product 01",createdAt:new Date,price:1e3},{id:"product_02",name:"Product 02",createdAt:new Date,price:1e3},{id:"product_03",name:"Product 03",createdAt:new Date,price:1e3},{id:"category_01",name:"Category 01",category:"category"},{id:"product_01.01",name:"Product 01.01",createdAt:new Date,parent:"category_01",price:1e3},{id:"product_01.02",name:"Product 01.02",createdAt:new Date,parent:"category_01",price:1e3},{id:"product_01.03",name:"Product 01.03",createdAt:new Date,parent:"category_01",price:1e3},{id:"product_01.04",name:"Product 01.04",createdAt:new Date,parent:"category_01",price:1e3},{id:"category_02",name:"Category 02",category:"category"},{id:"product_02.01",name:"Product 02.01",createdAt:new Date,parent:"category_02",price:1e3},{id:"product_02.02",name:"Product 02.02",createdAt:new Date,parent:"category_02",price:1e3},{id:"product_02.03",name:"Product 02.03",createdAt:new Date,parent:"category_02",price:1e3},{id:"product_02.04",name:"Product 02.04",createdAt:new Date,parent:"category_02",price:1e3}];function Ze(t){let e,n,l,o;return{c(){e=B("svg"),n=B("path"),l=B("line"),o=B("line"),f(n,"stroke","none"),f(n,"d","M0 0h24v24H0z"),f(n,"fill","none"),f(l,"x1","18"),f(l,"y1","6"),f(l,"x2","6"),f(l,"y2","18"),f(o,"x1","6"),f(o,"y1","6"),f(o,"x2","18"),f(o,"y2","18"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width",t[0]),f(e,"height",t[0]),f(e,"viewBox","0 0 24 24"),f(e,"stroke-width",t[1]),f(e,"stroke","#2c3e50"),f(e,"fill","none"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(i,u){P(i,e,u),C(e,n),C(e,l),C(e,o)},p(i,[u]){u&1&&f(e,"width",i[0]),u&1&&f(e,"height",i[0]),u&2&&f(e,"stroke-width",i[1])},i:M,o:M,d(i){i&&R(e)}}}function xe(t,e,n){let{size:l=15}=e,{strokeSize:o=3}=e;return t.$$set=i=>{"size"in i&&n(0,l=i.size),"strokeSize"in i&&n(1,o=i.strokeSize)},[l,o]}class qe extends T{constructor(e){super(),H(this,e,xe,Ze,L,{size:0,strokeSize:1})}}function $e(t){let e,n,l,o;return{c(){e=B("svg"),n=B("path"),l=B("circle"),o=B("line"),f(n,"stroke","none"),f(n,"d","M0 0h24v24H0z"),f(n,"fill","none"),f(l,"cx","10"),f(l,"cy","10"),f(l,"r","7"),f(o,"x1","21"),f(o,"y1","21"),f(o,"x2","15"),f(o,"y2","15"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width",t[0]),f(e,"height",t[0]),f(e,"viewBox","0 0 24 24"),f(e,"stroke-width",t[1]),f(e,"stroke","#2c3e50"),f(e,"fill","none"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(i,u){P(i,e,u),C(e,n),C(e,l),C(e,o)},p(i,[u]){u&1&&f(e,"width",i[0]),u&1&&f(e,"height",i[0]),u&2&&f(e,"stroke-width",i[1])},i:M,o:M,d(i){i&&R(e)}}}function et(t,e,n){let{size:l=15}=e,{strokeSize:o=3}=e;return t.$$set=i=>{"size"in i&&n(0,l=i.size),"strokeSize"in i&&n(1,o=i.strokeSize)},[l,o]}class tt extends T{constructor(e){super(),H(this,e,et,$e,L,{size:0,strokeSize:1})}}function nt(t){let e,n,l,o,i,u,a,r,s,_,d,c,h,y,g,m,S,w;return c=new tt({}),g=new qe({}),{c(){e=v("section"),n=v("button"),n.textContent="Collapse All",l=q(),o=v("button"),o.textContent="Expand All",i=q(),u=v("span"),a=q(),r=v("div"),s=v("input"),_=q(),d=v("button"),N(c.$$.fragment),h=q(),y=v("button"),N(g.$$.fragment),f(u,"class","flex svelte-vt53t"),f(s,"type","text"),f(r,"class","search_container svelte-vt53t"),f(e,"class","grid-header svelte-vt53t")},m(b,k){P(b,e,k),C(e,n),C(e,l),C(e,o),C(e,i),C(e,u),C(e,a),C(e,r),C(r,s),_e(s,t[1]),C(r,_),C(r,d),I(c,d,null),C(r,h),C(r,y),I(g,y,null),m=!0,S||(w=[K(n,"click",t[5]),K(o,"click",t[6]),K(s,"input",t[7]),K(d,"click",t[2]),K(y,"click",t[3])],S=!0)},p(b,[k]){k&2&&s.value!==b[1]&&_e(s,b[1])},i(b){m||(E(c.$$.fragment,b),E(g.$$.fragment,b),m=!0)},o(b){D(c.$$.fragment,b),D(g.$$.fragment,b),m=!1},d(b){b&&R(e),O(c),O(g),S=!1,G(w)}}}function lt(t,e,n){let{component:l={}}=e,{searchString:o=""}=e,i="";const u=()=>{n(4,o=i)},a=()=>{n(1,i=""),n(4,o="")},r=()=>l.collapseAll(),s=()=>l.expandAll();function _(){i=this.value,n(1,i)}return t.$$set=d=>{"component"in d&&n(0,l=d.component),"searchString"in d&&n(4,o=d.searchString)},[l,i,u,a,o,r,s,_]}let it=class extends T{constructor(e){super(),H(this,e,lt,nt,L,{component:0,searchString:4})}};const $=t=>new Promise(e=>{setTimeout(()=>e(),t||1e3)}),ot=(t,e)=>{const n={};return t.forEach(l=>{const o=l[e]||null;n[o]?n[o].push(l):n[o]=[l]}),n},Ne=(t,e)=>{const n={};return t.forEach(l=>{n[l[e]||null]=l}),n},rt=(t,e)=>(t==null?void 0:t.constructor)!==Number?"":t.toLocaleString(void 0,e||{}),st=(t,e)=>(t==null?void 0:t.constructor)!==Date?"":t.toLocaleString(void 0,e||{day:"numeric",month:"numeric",year:"numeric"}),Le=(t,e)=>e.type==="number"?rt(t,e.format):e.type==="date"?st(t,e.format):t,ut=(t,e)=>t.map(l=>{const o={...l};return o.__searchString="",e.forEach(i=>{o.__searchString+=Le(o[i.field]||"",i)}),o.__searchString=o.__searchString.toLowerCase(),o}),ft=(t,e)=>{if(e=e.toLowerCase(),!e)return t;const n=Ne(t,"id"),l={},o=i=>{!i.parent||!n[i.parent]||(l[i.parent]=n[i.parent],o(n[i.parent]))};return t.forEach(i=>{l[i.id]||i.__searchString.indexOf(e)===-1||(l[i.id]=i,o(i))}),Object.values(l)};function at(t){let e,n,l;return{c(){e=B("svg"),n=B("path"),l=B("path"),f(n,"stroke","none"),f(n,"d","M0 0h24v24H0z"),f(n,"fill","none"),f(l,"d","M18 15l-6 -6l-6 6h12"),f(l,"transform","rotate(90 12 12)"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width",t[0]),f(e,"height",t[0]),f(e,"viewBox","0 0 24 24"),f(e,"stroke-width",t[1]),f(e,"stroke","#2c3e50"),f(e,"fill","#2c3e50"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(o,i){P(o,e,i),C(e,n),C(e,l)},p(o,[i]){i&1&&f(e,"width",o[0]),i&1&&f(e,"height",o[0]),i&2&&f(e,"stroke-width",o[1])},i:M,o:M,d(o){o&&R(e)}}}function ct(t,e,n){let{size:l=15}=e,{strokeSize:o=3}=e;return t.$$set=i=>{"size"in i&&n(0,l=i.size),"strokeSize"in i&&n(1,o=i.strokeSize)},[l,o]}class dt extends T{constructor(e){super(),H(this,e,ct,at,L,{size:0,strokeSize:1})}}function ge(t){let e;return{c(){e=v("span"),f(e,"class","cell_space svelte-11xfhrd"),ie(e,"width",t[1]+"px")},m(n,l){P(n,e,l)},p(n,l){l&2&&ie(e,"width",n[1]+"px")},d(n){n&&R(e)}}}function we(t){let e,n,l,o,i,u;return n=new dt({}),{c(){e=v("button"),N(n.$$.fragment),f(e,"class",l="collapse "+(t[0]?"collapsed":"expanded")+" svelte-11xfhrd")},m(a,r){P(a,e,r),I(n,e,null),o=!0,i||(u=K(e,"click",t[7]),i=!0)},p(a,r){(!o||r&1&&l!==(l="collapse "+(a[0]?"collapsed":"expanded")+" svelte-11xfhrd"))&&f(e,"class",l)},i(a){o||(E(n.$$.fragment,a),o=!0)},o(a){D(n.$$.fragment,a),o=!1},d(a){a&&R(e),O(n),i=!1,u()}}}function ht(t){let e,n,l,o,i,u=t[2]&&ge(t),a=t[3]&&we(t);return{c(){e=v("div"),u&&u.c(),n=q(),a&&a.c(),l=q(),o=he(t[6]),f(e,"class","cell svelte-11xfhrd"),ie(e,"justify-content",t[5])},m(r,s){P(r,e,s),u&&u.m(e,null),C(e,n),a&&a.m(e,null),C(e,l),C(e,o),t[13](e),i=!0},p(r,[s]){r[2]?u?u.p(r,s):(u=ge(r),u.c(),u.m(e,n)):u&&(u.d(1),u=null),r[3]?a?(a.p(r,s),s&8&&E(a,1)):(a=we(r),a.c(),E(a,1),a.m(e,l)):a&&(F(),D(a,1,1,()=>{a=null}),V()),(!i||s&64)&&Ke(o,r[6]),(!i||s&32)&&ie(e,"justify-content",r[5])},i(r){i||(E(a),i=!0)},o(r){D(a),i=!1},d(r){r&&R(e),u&&u.d(),a&&a.d(),t[13](null)}}}function mt(t,e,n){let l,o,{onEvent:i=w=>{}}=e,{rowData:u={}}=e,{column:a={}}=e,{value:r=""}=e,{isCollapsed:s=!1}=e,{isHeaderCell:_=!1}=e,{moveCollapseCell:d=0}=e,{isCollapseCell:c=!1}=e,{hasCollapseButton:h=!1}=e,y=null;const g=async()=>{await $(100),i({type:"cell_created",cellElement:y,rowData:u,column:a})},m=()=>{n(0,s=!s)};function S(w){U[w?"unshift":"push"](()=>{y=w,n(4,y)})}return t.$$set=w=>{"onEvent"in w&&n(8,i=w.onEvent),"rowData"in w&&n(9,u=w.rowData),"column"in w&&n(10,a=w.column),"value"in w&&n(11,r=w.value),"isCollapsed"in w&&n(0,s=w.isCollapsed),"isHeaderCell"in w&&n(12,_=w.isHeaderCell),"moveCollapseCell"in w&&n(1,d=w.moveCollapseCell),"isCollapseCell"in w&&n(2,c=w.isCollapseCell),"hasCollapseButton"in w&&n(3,h=w.hasCollapseButton)},t.$$.update=()=>{t.$$.dirty&7168&&n(6,l=_?r:Le(r,a)),t.$$.dirty&1024&&n(5,o=a.align==="center"?"center":a.align==="right"?"flex-end":"flex-start"),t.$$.dirty&528&&y&&u.id&&g()},[s,d,c,h,y,o,l,m,i,u,a,r,_,S]}class He extends T{constructor(e){super(),H(this,e,mt,ht,L,{onEvent:8,rowData:9,column:10,value:11,isCollapsed:0,isHeaderCell:12,moveCollapseCell:1,isCollapseCell:2,hasCollapseButton:3})}}function pe(t,e,n){const l=t.slice();return l[8]=e[n],l}function ye(t,e,n){const l=t.slice();return l[20]=e[n],l[22]=n,l}function Se(t,e){let n,l,o,i;function u(r){e[15](r)}let a={onEvent:e[0],rowData:e[8],column:e[20],moveCollapseCell:e[6],value:e[8][e[20].field]||"",isCollapseCell:e[5]===e[22],hasCollapseButton:e[11].length&&e[5]===e[22]};return e[10]!==void 0&&(a.isCollapsed=e[10]),l=new He({props:a}),U.push(()=>ue(l,"isCollapsed",u)),{key:t,first:null,c(){n=Q(),N(l.$$.fragment),this.first=n},m(r,s){P(r,n,s),I(l,r,s),i=!0},p(r,s){e=r;const _={};s&1&&(_.onEvent=e[0]),s&256&&(_.rowData=e[8]),s&8&&(_.column=e[20]),s&64&&(_.moveCollapseCell=e[6]),s&264&&(_.value=e[8][e[20].field]||""),s&40&&(_.isCollapseCell=e[5]===e[22]),s&2088&&(_.hasCollapseButton=e[11].length&&e[5]===e[22]),!o&&s&1024&&(o=!0,_.isCollapsed=e[10],oe(()=>o=!1)),l.$set(_)},i(r){i||(E(l.$$.fragment,r),i=!0)},o(r){D(l.$$.fragment,r),i=!1},d(r){r&&R(n),O(l,r)}}}function Ce(t){let e=[],n=new Map,l,o,i=t[11];const u=a=>a[8].id;for(let a=0;a<i.length;a+=1){let r=pe(t,i,a),s=u(r);n.set(s,e[a]=ke(s,r))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=Q()},m(a,r){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(a,r);P(a,l,r),o=!0},p(a,r){r&2303&&(i=a[11],F(),e=se(e,r,u,1,a,i,n,l.parentNode,re,ke,l,pe),V())},i(a){if(!o){for(let r=0;r<i.length;r+=1)E(e[r]);o=!0}},o(a){for(let r=0;r<e.length;r+=1)D(e[r]);o=!1},d(a){for(let r=0;r<e.length;r+=1)e[r].d(a);a&&R(l)}}}function ke(t,e){let n,l,o;return l=new Te({props:{onEvent:e[0],rowData:e[8],columns:e[3],rowStyle:e[4],editSettings:e[2],updateRowState:e[1],treeColumnIndex:e[5],elementsByParent:e[7],moveCollapseCell:e[6]+5}}),{key:t,first:null,c(){n=Q(),N(l.$$.fragment),this.first=n},m(i,u){P(i,n,u),I(l,i,u),o=!0},p(i,u){e=i;const a={};u&1&&(a.onEvent=e[0]),u&2048&&(a.rowData=e[8]),u&8&&(a.columns=e[3]),u&16&&(a.rowStyle=e[4]),u&4&&(a.editSettings=e[2]),u&2&&(a.updateRowState=e[1]),u&32&&(a.treeColumnIndex=e[5]),u&128&&(a.elementsByParent=e[7]),u&64&&(a.moveCollapseCell=e[6]+5),l.$set(a)},i(i){o||(E(l.$$.fragment,i),o=!0)},o(i){D(l.$$.fragment,i),o=!1},d(i){i&&R(n),O(l,i)}}}function _t(t){let e,n=[],l=new Map,o,i,u,a,r,s=t[3];const _=c=>c[20].field;for(let c=0;c<s.length;c+=1){let h=ye(t,s,c),y=_(h);l.set(y,n[c]=Se(y,h))}let d=t[11].length&&!t[10]&&Ce(t);return{c(){e=v("div");for(let c=0;c<n.length;c+=1)n[c].c();o=q(),d&&d.c(),i=Q(),f(e,"class","row svelte-1pu5aab"),f(e,"style",t[4])},m(c,h){P(c,e,h);for(let y=0;y<n.length;y+=1)n[y]&&n[y].m(e,null);t[16](e),P(c,o,h),d&&d.m(c,h),P(c,i,h),u=!0,a||(r=K(e,"dblclick",t[12]),a=!0)},p(c,[h]){h&3433&&(s=c[3],F(),n=se(n,h,_,1,c,s,l,e,re,Se,null,ye),V()),(!u||h&16)&&f(e,"style",c[4]),c[11].length&&!c[10]?d?(d.p(c,h),h&3072&&E(d,1)):(d=Ce(c),d.c(),E(d,1),d.m(i.parentNode,i)):d&&(F(),D(d,1,1,()=>{d=null}),V())},i(c){if(!u){for(let h=0;h<s.length;h+=1)E(n[h]);E(d),u=!0}},o(c){for(let h=0;h<n.length;h+=1)D(n[h]);D(d),u=!1},d(c){c&&R(e);for(let h=0;h<n.length;h+=1)n[h].d();t[16](null),c&&R(o),d&&d.d(c),c&&R(i),a=!1,r()}}}function gt(t,e,n){let l,{onEvent:o=p=>{}}=e,{updateRowState:i={}}=e,{editSettings:u={}}=e,{rowData:a={}}=e,{columns:r=[]}=e,{rowStyle:s=""}=e,{treeColumnIndex:_=0}=e,{moveCollapseCell:d=0}=e,{elementsByParent:c={}}=e,{isAllCollapsed:h=!1}=e,{isAllExpanded:y=!1}=e,g=!1,m=null;const S=async()=>{await $(100),o({type:"row_created",rowElement:m,rowData:a})},w=()=>{u.allowEdit&&i.open({rowData:a,rowElement:m})};function b(p){g=p,n(10,g),n(14,y),n(13,h)}function k(p){U[p?"unshift":"push"](()=>{m=p,n(9,m)})}return t.$$set=p=>{"onEvent"in p&&n(0,o=p.onEvent),"updateRowState"in p&&n(1,i=p.updateRowState),"editSettings"in p&&n(2,u=p.editSettings),"rowData"in p&&n(8,a=p.rowData),"columns"in p&&n(3,r=p.columns),"rowStyle"in p&&n(4,s=p.rowStyle),"treeColumnIndex"in p&&n(5,_=p.treeColumnIndex),"moveCollapseCell"in p&&n(6,d=p.moveCollapseCell),"elementsByParent"in p&&n(7,c=p.elementsByParent),"isAllCollapsed"in p&&n(13,h=p.isAllCollapsed),"isAllExpanded"in p&&n(14,y=p.isAllExpanded)},t.$$.update=()=>{t.$$.dirty&384&&n(11,l=c[a.id]||[]),t.$$.dirty&768&&m&&a.id&&S(),t.$$.dirty&16384&&y&&n(10,g=!1),t.$$.dirty&8192&&h&&n(10,g=!0)},[o,i,u,r,s,_,d,c,a,m,g,l,w,h,y,b,k]}class Te extends T{constructor(e){super(),H(this,e,gt,_t,L,{onEvent:0,updateRowState:1,editSettings:2,rowData:8,columns:3,rowStyle:4,treeColumnIndex:5,moveCollapseCell:6,elementsByParent:7,isAllCollapsed:13,isAllExpanded:14})}}function wt(t){let e;return{c(){e=v("input"),e.value=t[2],f(e,"type","text"),f(e,"class","svelte-15uyt2h")},m(n,l){P(n,e,l)},p:M,d(n){n&&R(e)}}}function pt(t){let e;return{c(){var n;e=v("input"),f(e,"type","date"),e.value=(n=t[2])!=null&&n.toISOString?t[2].toISOString().slice(0,10):t[2],f(e,"class","svelte-15uyt2h")},m(n,l){P(n,e,l)},p:M,d(n){n&&R(e)}}}function yt(t){let e;return{c(){e=v("input"),f(e,"type","number"),e.value=t[2],f(e,"class","svelte-15uyt2h")},m(n,l){P(n,e,l)},p:M,d(n){n&&R(e)}}}function St(t){let e;function n(i,u){return i[0].type==="number"?yt:i[0].type==="date"?pt:wt}let l=n(t),o=l(t);return{c(){e=v("div"),o.c(),f(e,"class","cell svelte-15uyt2h")},m(i,u){P(i,e,u),o.m(e,null),t[5](e)},p(i,[u]){l===(l=n(i))&&o?o.p(i,u):(o.d(1),o=l(i),o&&(o.c(),o.m(e,null)))},i:M,o:M,d(i){i&&R(e),o.d(),t[5](null)}}}function Ct(t,e,n){var d;let{onEvent:l=c=>{}}=e,{rowData:o={}}=e,{column:i={}}=e,u=null,a=o[i.field]||null,r=((d=i.editSettings)==null?void 0:d.allowEdit)!==!1;const s=c=>{n(3,o[i.field]=c.target.value,o)};Ie(()=>{const c=u.querySelector("input");c.style.textAlign=i.align||"left",r?c.oninput=s:(c.style.opacity=".7",c.setAttribute("readonly","")),l({type:"update_cell_created",cellElement:u,rowData:o,column:i})});function _(c){U[c?"unshift":"push"](()=>{u=c,n(1,u)})}return t.$$set=c=>{"onEvent"in c&&n(4,l=c.onEvent),"rowData"in c&&n(3,o=c.rowData),"column"in c&&n(0,i=c.column)},[i,u,a,o,l,_]}class kt extends T{constructor(e){super(),H(this,e,Ct,St,L,{onEvent:4,rowData:3,column:0})}}function Et(t){let e,n,l;return{c(){e=B("svg"),n=B("path"),l=B("path"),f(n,"stroke","none"),f(n,"d","M0 0h24v24H0z"),f(n,"fill","none"),f(l,"d","M5 12l5 5l10 -10"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width",t[0]),f(e,"height",t[0]),f(e,"viewBox","0 0 24 24"),f(e,"stroke-width",t[1]),f(e,"stroke","#2c3e50"),f(e,"fill","none"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(o,i){P(o,e,i),C(e,n),C(e,l)},p(o,[i]){i&1&&f(e,"width",o[0]),i&1&&f(e,"height",o[0]),i&2&&f(e,"stroke-width",o[1])},i:M,o:M,d(o){o&&R(e)}}}function bt(t,e,n){let{size:l=15}=e,{strokeSize:o=3}=e;return t.$$set=i=>{"size"in i&&n(0,l=i.size),"strokeSize"in i&&n(1,o=i.strokeSize)},[l,o]}class vt extends T{constructor(e){super(),H(this,e,bt,Et,L,{size:0,strokeSize:1})}}function Dt(t){let e,n,l,o,i,u,a;return{c(){e=B("svg"),n=B("path"),l=B("line"),o=B("line"),i=B("line"),u=B("path"),a=B("path"),f(n,"stroke","none"),f(n,"d","M0 0h24v24H0z"),f(n,"fill","none"),f(l,"x1","4"),f(l,"y1","7"),f(l,"x2","20"),f(l,"y2","7"),f(o,"x1","10"),f(o,"y1","11"),f(o,"x2","10"),f(o,"y2","17"),f(i,"x1","14"),f(i,"y1","11"),f(i,"x2","14"),f(i,"y2","17"),f(u,"d","M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"),f(a,"d","M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width",t[0]),f(e,"height",t[0]),f(e,"viewBox","0 0 24 24"),f(e,"stroke-width",t[1]),f(e,"stroke","#2c3e50"),f(e,"fill","none"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(r,s){P(r,e,s),C(e,n),C(e,l),C(e,o),C(e,i),C(e,u),C(e,a)},p(r,[s]){s&1&&f(e,"width",r[0]),s&1&&f(e,"height",r[0]),s&2&&f(e,"stroke-width",r[1])},i:M,o:M,d(r){r&&R(e)}}}function At(t,e,n){let{size:l=15}=e,{strokeSize:o=3}=e;return t.$$set=i=>{"size"in i&&n(0,l=i.size),"strokeSize"in i&&n(1,o=i.strokeSize)},[l,o]}class Rt extends T{constructor(e){super(),H(this,e,At,Dt,L,{size:0,strokeSize:1})}}function Ee(t,e,n){const l=t.slice();return l[15]=e[n],l}function be(t){let e,n=[],l=new Map,o,i,u,a,r,s,_,d,c,h,y,g,m,S,w,b=t[1];const k=p=>p[15].field;for(let p=0;p<b.length;p+=1){let A=Ee(t,b,p),z=k(A);l.set(z,n[p]=ve(z,A))}return r=new qe({props:{size:15}}),d=new vt({props:{size:15}}),y=new Rt({props:{size:15}}),{c(){e=v("div");for(let p=0;p<n.length;p+=1)n[p].c();o=q(),i=v("div"),u=v("div"),a=v("button"),N(r.$$.fragment),s=q(),_=v("button"),N(d.$$.fragment),c=q(),h=v("button"),N(y.$$.fragment),f(u,"class","buttons_container svelte-1degg2x"),f(i,"class","options svelte-1degg2x"),f(e,"class","row svelte-1degg2x"),f(e,"style",g=t[2]+t[4])},m(p,A){P(p,e,A);for(let z=0;z<n.length;z+=1)n[z]&&n[z].m(e,null);C(e,o),C(e,i),C(i,u),C(u,a),I(r,a,null),C(u,s),C(u,_),I(d,_,null),C(u,c),C(u,h),I(y,h,null),t[14](e),m=!0,S||(w=[K(a,"click",t[7]),K(_,"click",t[8]),K(h,"click",t[9])],S=!0)},p(p,A){A&11&&(b=p[1],F(),n=se(n,A,k,1,p,b,l,e,re,ve,o,Ee),V()),(!m||A&20&&g!==(g=p[2]+p[4]))&&f(e,"style",g)},i(p){if(!m){for(let A=0;A<b.length;A+=1)E(n[A]);E(r.$$.fragment,p),E(d.$$.fragment,p),E(y.$$.fragment,p),m=!0}},o(p){for(let A=0;A<n.length;A+=1)D(n[A]);D(r.$$.fragment,p),D(d.$$.fragment,p),D(y.$$.fragment,p),m=!1},d(p){p&&R(e);for(let A=0;A<n.length;A+=1)n[A].d();O(r),O(d),O(y),t[14](null),S=!1,G(w)}}}function ve(t,e){let n,l,o,i;function u(r){e[13](r)}let a={onEvent:e[0],column:e[15]};return e[3]!==void 0&&(a.rowData=e[3]),l=new kt({props:a}),U.push(()=>ue(l,"rowData",u)),{key:t,first:null,c(){n=Q(),N(l.$$.fragment),this.first=n},m(r,s){P(r,n,s),I(l,r,s),i=!0},p(r,s){e=r;const _={};s&1&&(_.onEvent=e[0]),s&2&&(_.column=e[15]),!o&&s&8&&(o=!0,_.rowData=e[3],oe(()=>o=!1)),l.$set(_)},i(r){i||(E(l.$$.fragment,r),i=!0)},o(r){D(l.$$.fragment,r),i=!1},d(r){r&&R(n),O(l,r)}}}function zt(t){let e,n,l=t[5]&&be(t);return{c(){l&&l.c(),e=Q()},m(o,i){l&&l.m(o,i),P(o,e,i),n=!0},p(o,[i]){o[5]?l?(l.p(o,i),i&32&&E(l,1)):(l=be(o),l.c(),E(l,1),l.m(e.parentNode,e)):l&&(F(),D(l,1,1,()=>{l=null}),V())},i(o){n||(E(l),n=!0)},o(o){D(l),n=!1},d(o){l&&l.d(o),o&&R(e)}}}let Pt=null;function Bt(t,e,n){let{updateRowData:l=(w,b)=>{}}=e,{deleteRow:o=w=>{}}=e,{onEvent:i=w=>{}}=e,{columns:u=[]}=e,{rowStyle:a=""}=e,{updateRowState:r={}}=e,s={},_="",d=!1,c=null;r.subscribe(async w=>{if(n(5,d=!1),n(3,s={}),!w.open)return;await $(100),n(6,c=w.rowElement),n(3,s=w.rowData),n(5,d=w.open);const b=c.offsetTop<44?c.offsetTop:c.offsetTop-10;n(4,_=`top: ${b}px;`),i({type:"update_row_created",updateRowElement:Pt,rowData:s})});const h=()=>{r.close()},y=()=>{l(s.id,s),h()},g=()=>{o(s.id),h()};function m(w){s=w,n(3,s)}function S(w){U[w?"unshift":"push"](()=>{c=w,n(6,c)})}return t.$$set=w=>{"updateRowData"in w&&n(10,l=w.updateRowData),"deleteRow"in w&&n(11,o=w.deleteRow),"onEvent"in w&&n(0,i=w.onEvent),"columns"in w&&n(1,u=w.columns),"rowStyle"in w&&n(2,a=w.rowStyle),"updateRowState"in w&&n(12,r=w.updateRowState)},[i,u,a,s,_,d,c,h,y,g,l,o,r,m,S]}class Mt extends T{constructor(e){super(),H(this,e,Bt,zt,L,{updateRowData:10,deleteRow:11,onEvent:0,columns:1,rowStyle:2,updateRowState:12})}}function De(t,e,n){const l=t.slice();return l[13]=e[n],l}function Ae(t,e,n){const l=t.slice();return l[16]=e[n],l}function Re(t,e){let n,l,o;return l=new He({props:{column:e[16],isHeaderCell:!0,value:e[16].name||e[16].field||""}}),{key:t,first:null,c(){n=Q(),N(l.$$.fragment),this.first=n},m(i,u){P(i,n,u),I(l,i,u),o=!0},p(i,u){e=i;const a={};u&8&&(a.column=e[16]),u&8&&(a.value=e[16].name||e[16].field||""),l.$set(a)},i(i){o||(E(l.$$.fragment,i),o=!0)},o(i){D(l.$$.fragment,i),o=!1},d(i){i&&R(n),O(l,i)}}}function ze(t){let e,n;return e=new Mt({props:{updateRowData:t[7],deleteRow:t[6],onEvent:t[5],columns:t[3],rowStyle:t[11],updateRowState:t[1]}}),{c(){N(e.$$.fragment)},m(l,o){I(e,l,o),n=!0},p(l,o){const i={};o&128&&(i.updateRowData=l[7]),o&64&&(i.deleteRow=l[6]),o&32&&(i.onEvent=l[5]),o&8&&(i.columns=l[3]),o&2048&&(i.rowStyle=l[11]),o&2&&(i.updateRowState=l[1]),e.$set(i)},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){D(e.$$.fragment,l),n=!1},d(l){O(e,l)}}}function Pe(t){let e,n;return e=new Te({props:{isAllExpanded:t[8],isAllCollapsed:t[9],onEvent:t[5],rowData:t[13],columns:t[3],rowStyle:t[11],editSettings:t[2],updateRowState:t[1],treeColumnIndex:t[4],elementsByParent:t[0],moveCollapseCell:0}}),{c(){N(e.$$.fragment)},m(l,o){I(e,l,o),n=!0},p(l,o){const i={};o&256&&(i.isAllExpanded=l[8]),o&512&&(i.isAllCollapsed=l[9]),o&32&&(i.onEvent=l[5]),o&1&&(i.rowData=l[13]),o&8&&(i.columns=l[3]),o&2048&&(i.rowStyle=l[11]),o&4&&(i.editSettings=l[2]),o&2&&(i.updateRowState=l[1]),o&16&&(i.treeColumnIndex=l[4]),o&1&&(i.elementsByParent=l[0]),e.$set(i)},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){D(e.$$.fragment,l),n=!1},d(l){O(e,l)}}}function It(t){let e,n,l,o=[],i=new Map,u,a,r,s=t[3];const _=g=>g[16].field;for(let g=0;g<s.length;g+=1){let m=Ae(t,s,g),S=_(m);i.set(S,o[g]=Re(S,m))}let d=t[2].allowEdit&&ze(t),c=t[0][null]||[],h=[];for(let g=0;g<c.length;g+=1)h[g]=Pe(De(t,c,g));const y=g=>D(h[g],1,1,()=>{h[g]=null});return{c(){e=v("section"),n=v("header"),l=v("div");for(let g=0;g<o.length;g+=1)o[g].c();u=q(),d&&d.c(),a=q();for(let g=0;g<h.length;g+=1)h[g].c();f(l,"class","row"),f(l,"style",t[11]),f(n,"style",t[11]),f(n,"class","svelte-10lws0q"),f(e,"class","grid-container svelte-10lws0q")},m(g,m){P(g,e,m),C(e,n),C(n,l);for(let S=0;S<o.length;S+=1)o[S]&&o[S].m(l,null);t[12](l),C(e,u),d&&d.m(e,null),C(e,a);for(let S=0;S<h.length;S+=1)h[S]&&h[S].m(e,null);r=!0},p(g,[m]){if(m&8&&(s=g[3],F(),o=se(o,m,_,1,g,s,i,l,re,Re,null,Ae),V()),(!r||m&2048)&&f(l,"style",g[11]),(!r||m&2048)&&f(n,"style",g[11]),g[2].allowEdit?d?(d.p(g,m),m&4&&E(d,1)):(d=ze(g),d.c(),E(d,1),d.m(e,a)):d&&(F(),D(d,1,1,()=>{d=null}),V()),m&2879){c=g[0][null]||[];let S;for(S=0;S<c.length;S+=1){const w=De(g,c,S);h[S]?(h[S].p(w,m),E(h[S],1)):(h[S]=Pe(w),h[S].c(),E(h[S],1),h[S].m(e,null))}for(F(),S=c.length;S<h.length;S+=1)y(S);V()}},i(g){if(!r){for(let m=0;m<s.length;m+=1)E(o[m]);E(d);for(let m=0;m<c.length;m+=1)E(h[m]);r=!0}},o(g){for(let m=0;m<o.length;m+=1)D(o[m]);D(d),h=h.filter(Boolean);for(let m=0;m<h.length;m+=1)D(h[m]);r=!1},d(g){g&&R(e);for(let m=0;m<o.length;m+=1)o[m].d();t[12](null),d&&d.d(),We(h,g)}}}function Ot(t,e,n){let{elementsByParent:l={}}=e,{updateRowState:o={}}=e,{editSettings:i={}}=e,{columns:u=[]}=e,{treeColumnIndex:a=0}=e,{onEvent:r=()=>{}}=e,{deleteRow:s=()=>{}}=e,{updateRowData:_=()=>{}}=e,{isAllExpanded:d=!1}=e,{isAllCollapsed:c=!1}=e,h=null,y="";function g(m){U[m?"unshift":"push"](()=>{h=m,n(10,h)})}return t.$$set=m=>{"elementsByParent"in m&&n(0,l=m.elementsByParent),"updateRowState"in m&&n(1,o=m.updateRowState),"editSettings"in m&&n(2,i=m.editSettings),"columns"in m&&n(3,u=m.columns),"treeColumnIndex"in m&&n(4,a=m.treeColumnIndex),"onEvent"in m&&n(5,r=m.onEvent),"deleteRow"in m&&n(6,s=m.deleteRow),"updateRowData"in m&&n(7,_=m.updateRowData),"isAllExpanded"in m&&n(8,d=m.isAllExpanded),"isAllCollapsed"in m&&n(9,c=m.isAllCollapsed)},t.$$.update=()=>{if(t.$$.dirty&1032&&h){let m="",S=0;u.forEach(w=>S+=w.width||100),u.forEach(w=>{const b=w.width||100,k=b/S*100;m+=`minmax(${b}px, ${k}%) `}),n(11,y=`grid-template-columns: ${m};`),setTimeout(()=>{let w=h.scrollWidth-1;n(11,y=`grid-template-columns: ${m}; min-width: ${w}px;`)},50)}},[l,o,i,u,a,r,s,_,d,c,h,y,g]}let qt=class extends T{constructor(e){super(),H(this,e,Ot,It,L,{elementsByParent:0,updateRowState:1,editSettings:2,columns:3,treeColumnIndex:4,onEvent:5,deleteRow:6,updateRowData:7,isAllExpanded:8,isAllCollapsed:9})}};const Y=[];function Nt(t,e=M){let n;const l=new Set;function o(a){if(L(t,a)&&(t=a,n)){const r=!Y.length;for(const s of l)s[1](),Y.push(s,t);if(r){for(let s=0;s<Y.length;s+=2)Y[s][0](Y[s+1]);Y.length=0}}}function i(a){o(a(t))}function u(a,r=M){const s=[a,r];return l.add(s),l.size===1&&(n=e(o)||M),a(t),()=>{l.delete(s),l.size===0&&n&&(n(),n=null)}}return{set:o,update:i,subscribe:u}}const Lt=function(){const{subscribe:t,set:e}=Nt({open:!1,rowData:{},rowElement:null});return{subscribe:t,open({rowData:n,rowElement:l}){e({open:!0,rowData:n,rowElement:l})},close(){e({open:!1,rowData:{},rowElement:null})}}};function Ht(t){let e,n,l,o,i,u;function a(s){t[16](s)}let r={component:t[0]};return t[5]!==void 0&&(r.searchString=t[5]),n=new it({props:r}),U.push(()=>ue(n,"searchString",a)),i=new qt({props:{updateRowData:t[10],deleteRow:t[11],onEvent:t[3],columns:t[2],isAllCollapsed:t[7],isAllExpanded:t[6],editSettings:t[1],updateRowState:t[9],treeColumnIndex:t[4],elementsByParent:t[8]}}),{c(){e=v("div"),N(n.$$.fragment),o=q(),N(i.$$.fragment),f(e,"class","grid svelte-18kv1jn")},m(s,_){P(s,e,_),I(n,e,null),C(e,o),I(i,e,null),u=!0},p(s,[_]){const d={};_&1&&(d.component=s[0]),!l&&_&32&&(l=!0,d.searchString=s[5],oe(()=>l=!1)),n.$set(d);const c={};_&8&&(c.onEvent=s[3]),_&4&&(c.columns=s[2]),_&128&&(c.isAllCollapsed=s[7]),_&64&&(c.isAllExpanded=s[6]),_&2&&(c.editSettings=s[1]),_&16&&(c.treeColumnIndex=s[4]),_&256&&(c.elementsByParent=s[8]),i.$set(c)},i(s){u||(E(n.$$.fragment,s),E(i.$$.fragment,s),u=!0)},o(s){D(n.$$.fragment,s),D(i.$$.fragment,s),u=!1},d(s){s&&R(e),O(n),O(i)}}}function Tt(t,e,n){let l,o,i,u,{editSettings:a={}}=e,{component:r={}}=e,{columns:s=[]}=e,{dataSource:_=[]}=e,{onEvent:d=()=>{}}=e,{treeColumnIndex:c=0}=e,h="",y=!1,g=!1;const m=Lt(),S=(k,p)=>{const A=l[k];A&&n(13,l[k]={...A,...p,id:k},l)},w=k=>{n(13,l[k]=null,l)};Ie(async()=>{await $(100),n(0,r={async expandAll(){n(6,y=!0),await $(100),n(6,y=!1)},async collapseAll(){n(7,g=!0),await $(100),n(7,g=!1)}})});function b(k){h=k,n(5,h)}return t.$$set=k=>{"editSettings"in k&&n(1,a=k.editSettings),"component"in k&&n(0,r=k.component),"columns"in k&&n(2,s=k.columns),"dataSource"in k&&n(12,_=k.dataSource),"onEvent"in k&&n(3,d=k.onEvent),"treeColumnIndex"in k&&n(4,c=k.treeColumnIndex)},t.$$.update=()=>{t.$$.dirty&4096&&n(13,l=Ne(_,"id")),t.$$.dirty&8196&&n(15,o=ut(Object.values(l).filter(k=>k),s)),t.$$.dirty&32800&&n(14,i=ft(o,h)),t.$$.dirty&16384&&n(8,u=ot(i,"parent"))},[r,a,s,d,c,h,y,g,u,m,S,w,_,l,i,o,b]}class Ut extends T{constructor(e){super(),H(this,e,Tt,Ht,L,{editSettings:1,component:0,columns:2,dataSource:12,onEvent:3,treeColumnIndex:4})}}function Wt(t){let e,n,l,o,i,u,a,r;function s(d){t[4](d)}let _={onEvent:t[3],columns:t[2],dataSource:Ye,editSettings:t[1]};return t[0]!==void 0&&(_.component=t[0]),u=new Ut({props:_}),U.push(()=>ue(u,"component",s)),{c(){e=v("main"),n=v("div"),l=v("section"),l.textContent="Default Settings",o=q(),i=v("section"),N(u.$$.fragment),f(l,"class","header_container svelte-1qqdgdi"),f(i,"class","treegrid_container svelte-1qqdgdi"),f(n,"class","card svelte-1qqdgdi"),f(e,"class","svelte-1qqdgdi")},m(d,c){P(d,e,c),C(e,n),C(n,l),C(n,o),C(n,i),I(u,i,null),r=!0},p(d,[c]){const h={};!a&&c&1&&(a=!0,h.component=d[0],oe(()=>a=!1)),u.$set(h)},i(d){r||(E(u.$$.fragment,d),r=!0)},o(d){D(u.$$.fragment,d),r=!1},d(d){d&&R(e),O(u)}}}function jt(t,e,n){let l={};const o={allowEdit:!0},i=[{field:"name",name:"Name",width:200},{name:"Created At",field:"createdAt",align:"center",type:"date",width:100,editSettings:{allowEdit:!1},format:{weekday:"long",day:"numeric",month:"short",year:"numeric"}},{field:"price",align:"right",type:"number",name:"Price",width:100}],u=r=>{if(r.type==="row_created"&&r.rowData.category==="category"){r.rowElement.style.backgroundColor="#eee";return}if(r.type==="cell_created"&&r.rowData.category==="category"){r.cellElement.style.fontWeight="600";return}if(r.type==="update_cell_created"&&r.rowData.category==="category"&&r.column.field==="price"){const s=r.cellElement.querySelector("input");s.style.opacity=".7",s.setAttribute("readonly","");return}};function a(r){l=r,n(0,l)}return[l,o,i,u,a]}class Kt extends T{constructor(e){super(),H(this,e,jt,Wt,L,{})}}new Kt({target:document.getElementById("app")});
