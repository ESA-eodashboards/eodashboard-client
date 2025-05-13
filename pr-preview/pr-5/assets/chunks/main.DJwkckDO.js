var mo=Object.defineProperty;var lr=t=>{throw TypeError(t)};var bo=(t,e,n)=>e in t?mo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Vt=(t,e,n)=>bo(t,typeof e!="symbol"?e+"":e,n),sn=(t,e,n)=>e.has(t)||lr("Cannot "+n);var G=(t,e,n)=>(sn(t,e,"read from private field"),n?n.call(t):e.get(t)),q=(t,e,n)=>e.has(t)?lr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),be=(t,e,n,r)=>(sn(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),L=(t,e,n)=>(sn(t,e,"access private method"),n);import{r as it,E as xt,x as _}from"./lit-element.Deg-YTNa.js";import{a as we,o as Ne}from"./unsafe-html.DNVjkAgx.js";import{n as N}from"./when.BR7zwNJC.js";import{s as wo}from"./all.style.T4I2W3dO.js";import{d as Yt,c as vo}from"./repeat.D5GkOD5F.js";import{_ as Ie,s as xo,a as Ao}from"./index.H62imwlA.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as _o}from"./orient2d.DArCjZZA.js";import{f as Me,a as un,b as Co,m as Mo,l as Eo}from"./index.BSpBAx16.js";import{g as Mr,c as bt}from"./commonjsHelpers.BosuxZz1.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.oNa9w_hR.js";const Lo=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  overflow-y: auto;
}
details {
  width: 100%;
}
`,te=`
:host, :root {
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--secondary-color) 30%,
    transparent
  );
  --item-select-color: var(--primary-color);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --background-color: var(--eox-background-color, transparent);
  --padding: 0.5rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
  background-color: var(--background-color);
}
* {
  font-family: Roboto, sans-serif;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
}
eox-itemfilter-container {
  min-width: 200px;
  display: var(--filter-display);
}
eox-itemfilter-results {
  flex-grow: 1;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
.cards li span {
  display: block;
  flex-basis: 100%;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem var(--padding);
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: 13px;
  align-items: center;
  text-transform: var(--text-transform);
}
.cards .title {
  font-size: 16px;
  font-weight: 600;
  text-wrap: auto;
  line-height: 19px;
}
.subtitle {
  font-size: 11px;
  opacity: .7;
  margin-top: 6px;
}
.cards .subtitle {
  font-size: 14px;
  color: #757575;
  text-wrap: auto;
  line-height: 19px;
}
.image {
  width: 24px;
  height: 24px;
  object-fit: cover;
  overflow: hidden;
  margin-right: 8px;
}
.cards .image {
  width: 100%;
  height: 190px;
  margin-bottom: 8px;
}
.cards .result-action {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px 12px;
  padding: 6px;
  background: white;
  border-radius: 50%;
}
.title-container {
  display: flex;
  flex-direction: column;
}
h6.main-heading {
  font-size: 1rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-top: var(--padding);
  padding: 0 var(--padding);
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  margin-left: auto;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 var(--padding);
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul:not(#filters) > li {
  padding: 5px 0;
}
ul#results li {
  padding: 5px var(--padding);
  display: flex;
  justify-content: space-between;
}
ul#results li .result-action {
  display: flex;
  align-items: center;
  height: fit-content;
  line-height: 1;
  opacity: .5;
  transition: opacity .3s ease-in-out;
}
ul#results li .result-action:hover {
  opacity: 1;
}
ul#results li.highlighted .result-action > * {
  filter: invert(1);
}
ul#results ul.cards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  margin: 20px 0;
  cursor: initial;
}
ul#results ul.cards li {
  flex-basis: calc(33.3% - 77px);
  min-width: 0;
  align-self: flex-start;
  position: relative;
}
@media screen and (max-width: 768px) {
  ul#results ul.cards li {
    flex-basis: calc(50% - 70px);
  }
}
@media screen and (max-width: 480px) {
  ul#results ul.cards li {
    flex-basis: 100%;
  }
}
section {
  position: relative;
  background-color: var(--background-color);
}
button#filter-reset {
  position: absolute;
  top: 0;
  right: var(--padding);
  padding: 2px 10px;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  color: var(--primary-color);
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 16px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: -5px;
  height: 14px;
  width: 14px;
}
eox-itemfilter-expandcontainer button.reset-icon:before {
  height: 14px;
  width: 14px;
}
.inline-content {
  border: 1.5px solid var(--secondary-color);
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  background: var(--inline-bg-color);
  margin-top: 4px;
  padding: 8px;
}
.inline-container {
  position: relative;
  align-items: center;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
}
.inline-container {
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  height: 24px;
  padding: 8px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
}
.inline-container:hover {
  border: 1px solid var(--primary-color);
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
.inline-container::-webkit-scrollbar {
  height: 2px;
}
.inline-container::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 2px;
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.chip-title {
  pointer-events: none;
  text-transform: var(--text-transform);
}
.chip {
  display: flex;
  align-items: center;
  background: var(--item-color);
  border-radius: 30px;
  margin-right: 4px;
  padding: 5px 10px;
  font-size: small;
  cursor: default;
  white-space: nowrap;
}
.chip.highlighted {
  background: var(--primary-color);
  color: white;
}
.chip-close {
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  right: -25px;
  background: white;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 24px;
  width: 24px;
}
.chip-close:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
  height: 24px;
  width: 24px;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
.chip-container {
  position: relative;
  max-width: 75%;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:hover,
.autocomplete-input:hover {
  border: 1px solid var(--primary-color);
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  color: var(--background-color);
  background: var(--item-select-color);
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
}
.select-overflow {
  max-height: 185px;
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: red;
  font-size: x-small;
  top: -8px;
}
input {
  background-color: var(--background-color);
}
`;var ke,Er;class $o extends it{constructor(){super();q(this,ke);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return _`
      <style>
        ${!this.unstyled&&te}
      </style>

      ${N(this.filterObject.featured,()=>_`<slot name="filter"></slot>`,()=>_`<details
            @toggle="${L(this,ke,Er)}"
            class="details-filter"
            ?open=${this.filterObject.expanded||xt}
          >
            <summary>
              <span
                class="title"
                style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
              >
                ${this.filterObject.title||this.filterObject.key||"Filter"}
                <slot name="reset-button"></slot>
              </span>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}ke=new WeakSet,Er=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",$o);function dt(t){return Array.isArray?Array.isArray(t):Sr(t)==="[object Array]"}function So(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Ro(t){return t==null?"":So(t)}function et(t){return typeof t=="string"}function Lr(t){return typeof t=="number"}function Po(t){return t===!0||t===!1||Do(t)&&Sr(t)=="[object Boolean]"}function $r(t){return typeof t=="object"}function Do(t){return $r(t)&&t!==null}function K(t){return t!=null}function on(t){return!t.trim().length}function Sr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Bo="Incorrect 'index' type",ko=t=>`Invalid value for key ${t}`,To=t=>`Pattern length exceeds max of ${t}.`,Oo=t=>`Missing ${t} property in key`,jo=t=>`Property 'weight' in key '${t}' must be a positive integer`,cr=Object.prototype.hasOwnProperty;class No{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Rr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Rr(t){let e=null,n=null,r=null,i=1,o=null;if(et(t)||dt(t))r=t,e=ur(t),n=fn(t);else{if(!cr.call(t,"name"))throw new Error(Oo("name"));const a=t.name;if(r=a,cr.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(jo(a));e=ur(a),n=fn(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function ur(t){return dt(t)?t:t.split(".")}function fn(t){return dt(t)?t.join("."):t}function Io(t,e){let n=[],r=!1;const i=(o,a,l)=>{if(K(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!K(f))return;if(l===a.length-1&&(et(f)||Lr(f)||Po(f)))n.push(Ro(f));else if(dt(f)){r=!0;for(let h=0,g=f.length;h<g;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(t,et(e)?e.split("."):e,0),r?n:n[0]}const Ho={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Fo={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},qo={location:0,threshold:.6,distance:100},Uo={useExtendedSearch:!1,getFn:Io,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var A={...Fo,...Ho,...qo,...Uo};const Wo=/[^ ]+/g;function Go(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(Wo).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Rn{constructor({getFn:e=A.getFn,fieldNormWeight:n=A.fieldNormWeight}={}){this.norm=Go(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,et(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();et(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!K(e)||on(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(K(a)){if(dt(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(K(h))if(et(h)&&!on(h)){let g={v:h,i:f,n:this.norm.get(h)};l.push(g)}else dt(h)&&h.forEach((g,y)=>{u.push({nestedArrIndex:y,value:g})})}r.$[o]=l}else if(et(a)&&!on(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Pr(t,e,{getFn:n=A.getFn,fieldNormWeight:r=A.fieldNormWeight}={}){const i=new Rn({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Rr)),i.setSources(e),i.create(),i}function Ko(t,{getFn:e=A.getFn,fieldNormWeight:n=A.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Rn({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function ve(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=A.distance,ignoreLocation:o=A.ignoreLocation}={}){const a=e/t.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function zo(t=[],e=A.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Lt=32;function Vo(t,e,n,{location:r=A.location,distance:i=A.distance,threshold:o=A.threshold,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,includeMatches:u=A.includeMatches,ignoreLocation:f=A.ignoreLocation}={}){if(e.length>Lt)throw new Error(To(Lt));const h=e.length,g=t.length,y=Math.max(0,Math.min(r,g));let p=o,b=y;const v=l>1||u,E=v?Array(g):[];let M;for(;(M=t.indexOf(e,b))>-1;){let O=ve(e,{currentLocation:M,expectedLocation:y,distance:i,ignoreLocation:f});if(p=Math.min(O,p),b=M+h,v){let Z=0;for(;Z<h;)E[M+Z]=1,Z+=1}}b=-1;let S=[],$=1,R=h+g;const k=1<<h-1;for(let O=0;O<h;O+=1){let Z=0,U=R;for(;Z<U;)ve(e,{errors:O,currentLocation:y+U,expectedLocation:y,distance:i,ignoreLocation:f})<=p?Z=U:R=U,U=Math.floor((R-Z)/2+Z);R=U;let ne=Math.max(1,y-U+1),Gt=a?g:Math.min(y+U,g)+h,pt=Array(Gt+2);pt[Gt+1]=(1<<O)-1;for(let W=Gt;W>=ne;W-=1){let Bt=W-1,re=n[t.charAt(Bt)];if(v&&(E[Bt]=+!!re),pt[W]=(pt[W+1]<<1|1)&re,O&&(pt[W]|=(S[W+1]|S[W])<<1|1|S[W+1]),pt[W]&k&&($=ve(e,{errors:O,currentLocation:Bt,expectedLocation:y,distance:i,ignoreLocation:f}),$<=p)){if(p=$,b=Bt,b<=y)break;ne=Math.max(1,2*y-b)}}if(ve(e,{errors:O+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>p)break;S=pt}const ot={isMatch:b>=0,score:Math.max(.001,$)};if(v){const O=zo(E,l);O.length?u&&(ot.indices=O):ot.isMatch=!1}return ot}function Yo(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}const Ee=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):t=>t;class Dr{constructor(e,{location:n=A.location,threshold:r=A.threshold,distance:i=A.distance,includeMatches:o=A.includeMatches,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:u=A.isCaseSensitive,ignoreDiacritics:f=A.ignoreDiacritics,ignoreLocation:h=A.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h},e=u?e:e.toLowerCase(),e=f?Ee(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const g=(p,b)=>{this.chunks.push({pattern:p,alphabet:Yo(p),startIndex:b})},y=this.pattern.length;if(y>Lt){let p=0;const b=y%Lt,v=y-b;for(;p<v;)g(this.pattern.substr(p,Lt),p),p+=Lt;if(b){const E=y-Lt;g(this.pattern.substr(E),E)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(e=n?e:e.toLowerCase(),e=r?Ee(e):e,this.pattern===e){let v={isMatch:!0,score:0};return i&&(v.indices=[[0,e.length-1]]),v}const{location:o,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:f,ignoreLocation:h}=this.options;let g=[],y=0,p=!1;this.chunks.forEach(({pattern:v,alphabet:E,startIndex:M})=>{const{isMatch:S,score:$,indices:R}=Vo(e,v,E,{location:o+M,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:f,includeMatches:i,ignoreLocation:h});S&&(p=!0),y+=$,S&&R&&(g=[...g,...R])});let b={isMatch:p,score:p?y/this.chunks.length:1};return p&&i&&(b.indices=g),b}}class At{constructor(e){this.pattern=e}static isMultiMatch(e){return fr(e,this.multiRegex)}static isSingleMatch(e){return fr(e,this.singleRegex)}search(){}}function fr(t,e){const n=t.match(e);return n?n[1]:null}class Xo extends At{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Jo extends At{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Zo extends At{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Qo extends At{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ta extends At{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ea extends At{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Br extends At{constructor(e,{location:n=A.location,threshold:r=A.threshold,distance:i=A.distance,includeMatches:o=A.includeMatches,findAllMatches:a=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:u=A.isCaseSensitive,ignoreDiacritics:f=A.ignoreDiacritics,ignoreLocation:h=A.ignoreLocation}={}){super(e),this._bitapSearch=new Dr(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class kr extends At{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const hn=[Xo,kr,Zo,Qo,ea,ta,Jo,Br],hr=hn.length,na=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ra="|";function ia(t,e={}){return t.split(ra).map(n=>{let r=n.trim().split(na).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<hr;){const h=hn[f];let g=h.isMultiMatch(l);g&&(i.push(new h(g,e)),u=!0)}if(!u)for(f=-1;++f<hr;){const h=hn[f];let g=h.isSingleMatch(l);if(g){i.push(new h(g,e));break}}}return i})}const sa=new Set([Br.type,kr.type]);class oa{constructor(e,{isCaseSensitive:n=A.isCaseSensitive,ignoreDiacritics:r=A.ignoreDiacritics,includeMatches:i=A.includeMatches,minMatchCharLength:o=A.minMatchCharLength,ignoreLocation:a=A.ignoreLocation,findAllMatches:l=A.findAllMatches,location:u=A.location,threshold:f=A.threshold,distance:h=A.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:o,findAllMatches:l,ignoreLocation:a,location:u,threshold:f,distance:h},e=n?e:e.toLowerCase(),e=r?Ee(e):e,this.pattern=e,this.query=ia(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:o}=this.options;e=i?e:e.toLowerCase(),e=o?Ee(e):e;let a=0,l=[],u=0;for(let f=0,h=n.length;f<h;f+=1){const g=n[f];l.length=0,a=0;for(let y=0,p=g.length;y<p;y+=1){const b=g[y],{isMatch:v,indices:E,score:M}=b.search(e);if(v){if(a+=1,u+=M,r){const S=b.constructor.type;sa.has(S)?l=[...l,...E]:l.push(E)}}else{u=0,a=0,l.length=0;break}}if(a){let y={isMatch:!0,score:u/a};return r&&(y.indices=l),y}}return{isMatch:!1,score:1}}}const dn=[];function aa(...t){dn.push(...t)}function pn(t,e){for(let n=0,r=dn.length;n<r;n+=1){let i=dn[n];if(i.condition(t,e))return new i(t,e)}return new Dr(t,e)}const Le={AND:"$and",OR:"$or"},gn={PATH:"$path",PATTERN:"$val"},yn=t=>!!(t[Le.AND]||t[Le.OR]),la=t=>!!t[gn.PATH],ca=t=>!dt(t)&&$r(t)&&!yn(t),dr=t=>({[Le.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Tr(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=la(i);if(!a&&o.length>1&&!yn(i))return r(dr(i));if(ca(i)){const u=a?i[gn.PATH]:o[0],f=a?i[gn.PATTERN]:i[u];if(!et(f))throw new Error(ko(u));const h={keyId:fn(u),pattern:f};return n&&(h.searcher=pn(f,e)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];dt(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return yn(t)||(t=dr(t)),r(t)}function ua(t,{ignoreFieldNorm:e=A.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:o))}),n.score=r})}function fa(t,e){const n=t.matches;e.matches=[],K(n)&&n.forEach(r=>{if(!K(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function ha(t,e){e.score=t.score}function da(t,e,{includeMatches:n=A.includeMatches,includeScore:r=A.includeScore}={}){const i=[];return n&&i.push(fa),r&&i.push(ha),t.map(o=>{const{idx:a}=o,l={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class _t{constructor(e,n={},r){this.options={...A,...n},this.options.useExtendedSearch,this._keyStore=new No(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Rn))throw new Error(Bo);this._myIndex=n||Pr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){K(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=et(e)?et(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return ua(u,{ignoreFieldNorm:l}),o&&u.sort(a),Lr(n)&&n>-1&&(u=u.slice(0,n)),da(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=pn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!K(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(e){const n=Tr(e,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:g,searcher:y}=l,p=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:y});return p&&p.length?[{idx:f,item:u,matches:p}]:[]}const h=[];for(let g=0,y=l.children.length;g<y;g+=1){const p=l.children[g],b=r(p,u,f);if(b.length)h.push(...b);else if(l.operator===Le.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(K(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(e){const n=pn(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!K(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!K(n))return[];let i=[];if(dt(n))n.forEach(({v:o,i:a,n:l})=>{if(!K(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:e,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:a,indices:f})}return i}}_t.version="7.1.0";_t.createIndex=Pr;_t.parseIndex=Ko;_t.config=A;_t.parseQuery=Tr;aa(oa);function Or(t,e){const n=new _t(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function pa(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const mn=Math.min,Ot=Math.max,$e=Math.round,xe=Math.floor,nt=t=>({x:t,y:t});function jr(t){return t.split("-")[0]}function ga(t){return t.split("-")[1]}function ya(t){return t==="x"?"y":"x"}function ma(t){return t==="y"?"height":"width"}function Nr(t){return["top","bottom"].includes(jr(t))?"y":"x"}function ba(t){return ya(Nr(t))}function Ir(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function pr(t,e,n){let{reference:r,floating:i}=t;const o=Nr(e),a=ba(e),l=ma(a),u=jr(e),f=o==="y",h=r.x+r.width/2-i.width/2,g=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let p;switch(u){case"top":p={x:h,y:r.y-i.height};break;case"bottom":p={x:h,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:g};break;case"left":p={x:r.x-i.width,y:g};break;default:p={x:r.x,y:r.y}}switch(ga(e)){case"start":p[a]-=y*(n&&f?-1:1);break;case"end":p[a]+=y*(n&&f?-1:1);break}return p}const wa=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:g}=pr(f,r,u),y=r,p={},b=0;for(let v=0;v<l.length;v++){const{name:E,fn:M}=l[v],{x:S,y:$,data:R,reset:k}=await M({x:h,y:g,initialPlacement:r,placement:y,strategy:i,middlewareData:p,rects:f,platform:a,elements:{reference:t,floating:e}});h=S??h,g=$??g,p={...p,[E]:{...p[E],...R}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(y=k.placement),k.rects&&(f=k.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):k.rects),{x:h,y:g}=pr(f,y,u)),v=-1)}return{x:h,y:g,placement:y,strategy:i,middlewareData:p}};function He(){return typeof window<"u"}function qt(t){return Hr(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function st(t){var e;return(e=(Hr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Hr(t){return He()?t instanceof Node||t instanceof z(t).Node:!1}function Q(t){return He()?t instanceof Element||t instanceof z(t).Element:!1}function rt(t){return He()?t instanceof HTMLElement||t instanceof z(t).HTMLElement:!1}function gr(t){return!He()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function ee(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=tt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function va(t){return["table","td","th"].includes(qt(t))}function Fe(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Pn(t){const e=Dn(),n=Q(t)?tt(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function xa(t){let e=wt(t);for(;rt(e)&&!It(e);){if(Pn(e))return e;if(Fe(e))return null;e=wt(e)}return null}function Dn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function It(t){return["html","body","#document"].includes(qt(t))}function tt(t){return z(t).getComputedStyle(t)}function qe(t){return Q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function wt(t){if(qt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||gr(t)&&t.host||st(t);return gr(e)?e.host:e}function Fr(t){const e=wt(t);return It(e)?t.ownerDocument?t.ownerDocument.body:t.body:rt(e)&&ee(e)?e:Fr(e)}function Xt(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Fr(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),a=z(i);if(o){const l=bn(a);return e.concat(a,a.visualViewport||[],ee(i)?i:[],l&&n?Xt(l):[])}return e.concat(i,Xt(i,[],n))}function bn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function qr(t){const e=tt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=rt(t),o=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=$e(n)!==o||$e(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Bn(t){return Q(t)?t:t.contextElement}function jt(t){const e=Bn(t);if(!rt(e))return nt(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=qr(e);let a=(o?$e(n.width):n.width)/r,l=(o?$e(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Aa=nt(0);function Ur(t){const e=z(t);return!Dn()||!e.visualViewport?Aa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function _a(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==z(t)?!1:e}function $t(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=Bn(t);let a=nt(1);e&&(r?Q(r)&&(a=jt(r)):a=jt(t));const l=_a(o,n,r)?Ur(o):nt(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,g=i.height/a.y;if(o){const y=z(o),p=r&&Q(r)?z(r):r;let b=y,v=bn(b);for(;v&&r&&p!==b;){const E=jt(v),M=v.getBoundingClientRect(),S=tt(v),$=M.left+(v.clientLeft+parseFloat(S.paddingLeft))*E.x,R=M.top+(v.clientTop+parseFloat(S.paddingTop))*E.y;u*=E.x,f*=E.y,h*=E.x,g*=E.y,u+=$,f+=R,b=z(v),v=bn(b)}}return Ir({width:h,height:g,x:u,y:f})}function kn(t,e){const n=qe(t).scrollLeft;return e?e.left+n:$t(st(t)).left+n}function Wr(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:kn(t,r)),o=r.top+e.scrollTop;return{x:i,y:o}}function Ca(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",a=st(r),l=e?Fe(e.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=nt(1);const h=nt(0),g=rt(r);if((g||!g&&!o)&&((qt(r)!=="body"||ee(a))&&(u=qe(r)),rt(r))){const p=$t(r);f=jt(r),h.x=p.x+r.clientLeft,h.y=p.y+r.clientTop}const y=a&&!g&&!o?Wr(a,u,!0):nt(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function Ma(t){return Array.from(t.getClientRects())}function Ea(t){const e=st(t),n=qe(t),r=t.ownerDocument.body,i=Ot(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=Ot(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+kn(t);const l=-n.scrollTop;return tt(r).direction==="rtl"&&(a+=Ot(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function La(t,e){const n=z(t),r=st(t),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=Dn();(!f||f&&e==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}function $a(t,e){const n=$t(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=rt(t)?jt(t):nt(1),a=t.clientWidth*o.x,l=t.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function yr(t,e,n){let r;if(e==="viewport")r=La(t,n);else if(e==="document")r=Ea(st(t));else if(Q(e))r=$a(e,n);else{const i=Ur(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Ir(r)}function Gr(t,e){const n=wt(t);return n===e||!Q(n)||It(n)?!1:tt(n).position==="fixed"||Gr(n,e)}function Sa(t,e){const n=e.get(t);if(n)return n;let r=Xt(t,[],!1).filter(l=>Q(l)&&qt(l)!=="body"),i=null;const o=tt(t).position==="fixed";let a=o?wt(t):t;for(;Q(a)&&!It(a);){const l=tt(a),u=Pn(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ee(a)&&!u&&Gr(t,a))?r=r.filter(h=>h!==a):i=l,a=wt(a)}return e.set(t,r),r}function Ra(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?Fe(e)?[]:Sa(e,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const g=yr(e,h,i);return f.top=Ot(g.top,f.top),f.right=mn(g.right,f.right),f.bottom=mn(g.bottom,f.bottom),f.left=Ot(g.left,f.left),f},yr(e,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Pa(t){const{width:e,height:n}=qr(t);return{width:e,height:n}}function Da(t,e,n){const r=rt(e),i=st(e),o=n==="fixed",a=$t(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const u=nt(0);if(r||!r&&!o)if((qt(e)!=="body"||ee(i))&&(l=qe(e)),r){const y=$t(e,!0,o,e);u.x=y.x+e.clientLeft,u.y=y.y+e.clientTop}else i&&(u.x=kn(i));const f=i&&!r&&!o?Wr(i,l):nt(0),h=a.left+l.scrollLeft-u.x-f.x,g=a.top+l.scrollTop-u.y-f.y;return{x:h,y:g,width:a.width,height:a.height}}function an(t){return tt(t).position==="static"}function mr(t,e){if(!rt(t)||tt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return st(t)===n&&(n=n.ownerDocument.body),n}function Kr(t,e){const n=z(t);if(Fe(t))return n;if(!rt(t)){let i=wt(t);for(;i&&!It(i);){if(Q(i)&&!an(i))return i;i=wt(i)}return n}let r=mr(t,e);for(;r&&va(r)&&an(r);)r=mr(r,e);return r&&It(r)&&an(r)&&!Pn(r)?n:r||xa(t)||n}const Ba=async function(t){const e=this.getOffsetParent||Kr,n=this.getDimensions,r=await n(t.floating);return{reference:Da(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ka(t){return tt(t).direction==="rtl"}const Ta={convertOffsetParentRelativeRectToViewportRelativeRect:Ca,getDocumentElement:st,getClippingRect:Ra,getOffsetParent:Kr,getElementRects:Ba,getClientRects:Ma,getDimensions:Pa,getScale:jt,isElement:Q,isRTL:ka};function zr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Oa(t,e){let n=null,r;const i=st(t);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const f=t.getBoundingClientRect(),{left:h,top:g,width:y,height:p}=f;if(l||e(),!y||!p)return;const b=xe(g),v=xe(i.clientWidth-(h+y)),E=xe(i.clientHeight-(g+p)),M=xe(h),$={rootMargin:-b+"px "+-v+"px "+-E+"px "+-M+"px",threshold:Ot(0,mn(1,u))||1};let R=!0;function k(ot){const O=ot[0].intersectionRatio;if(O!==u){if(!R)return a();O?a(!1,O):r=setTimeout(()=>{a(!1,1e-7)},1e3)}O===1&&!zr(f,t.getBoundingClientRect())&&a(),R=!1}try{n=new IntersectionObserver(k,{...$,root:i.ownerDocument})}catch{n=new IntersectionObserver(k,$)}n.observe(t)}return a(!0),o}function ja(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=Bn(t),h=i||o?[...f?Xt(f):[],...Xt(e)]:[];h.forEach(M=>{i&&M.addEventListener("scroll",n,{passive:!0}),o&&M.addEventListener("resize",n)});const g=f&&l?Oa(f,n):null;let y=-1,p=null;a&&(p=new ResizeObserver(M=>{let[S]=M;S&&S.target===f&&p&&(p.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var $;($=p)==null||$.observe(e)})),n()}),f&&!u&&p.observe(f),p.observe(e));let b,v=u?$t(t):null;u&&E();function E(){const M=$t(t);v&&!zr(v,M)&&n(),v=M,b=requestAnimationFrame(E)}return n(),()=>{var M;h.forEach(S=>{i&&S.removeEventListener("scroll",n),o&&S.removeEventListener("resize",n)}),g==null||g(),(M=p)==null||M.disconnect(),p=null,u&&cancelAnimationFrame(b)}}const Na=(t,e,n)=>{const r=new Map,i={platform:Ta,...n},o={...i.platform,_c:r};return wa(t,e,{...i,platform:o})};function Ia(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return ja(e,n,()=>{n.matches(":popover-open")&&Na(e,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Vr(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Or({target:{value:""}},t)}function Ha(t,e){e.inlineMode&&t.stopPropagation()}function Fa(t){t.inlineMode&&(t.showDropdown=!0)}function qa(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function Ua(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Vr(e),e.showDropdown=!1)}function Wa(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Vr(e),e.showDropdown=!1)}function Ga(t,e){var n,r,i=0,o,a,l,u,f,h,g,y=t[0],p=t[1],b=e.length;for(n=0;n<b;n++){r=0;var v=e[n],E=v.length-1;if(h=v[0],h[0]!==v[E][0]&&h[1]!==v[E][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-p,r;r<E;r++){if(g=v[r+1],u=g[0]-y,f=g[1]-p,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<=0||f<=0&&l>=0){if(o=_o(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=g,l=f,a=u}}return i%2!==0}function Yr(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Ka(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Ht(t){return t.type==="Feature"?t.geometry:t}function J(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Yr(t),i=Ht(e),o=i.type,a=e.bbox;let l=i.coordinates;if(a&&za(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=Ga(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function za(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Xr{constructor(e=[],n=Va){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const o=e-1>>1,a=n[o];if(r(i,a)>=0)break;n[e]=a,e=o}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,o=n[e];for(;e<i;){let a=(e<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[e]=l,e=a}n[e]=o}}function Va(t,e){return t<e?-1:t>e?1:0}function Jr(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function Ya(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class br{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function Xa(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)wr(n[r],e)}else wr(t,e)}let Ae=0,_e=0,Ce=0;function wr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;_e=_e+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new br(a,Ae,_e,Ce),h=new br(l,Ae,_e,Ce+1);f.otherEvent=h,h.otherEvent=f,Jr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(f),e.push(h),a=l,Ce=Ce+1}}Ae=Ae+1}class Ja{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function Za(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,u=e.rightSweepEvent.p.x,f=e.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),g=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const p=g/h,b=y/h;if(p>=0&&p<=1&&b>=0&&b<=1){const v=n+p*(i-n),E=r+p*(o-r);return[v,E]}return!1}function Qa(t,e){e=e||!1;const n=[],r=new Xr([],Ya);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const o=new Ja(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const u=Za(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function tl(t,e){const n=new Xr([],Jr);return Xa(t,n),Qa(n,e)}var el=tl;function Tn(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Me(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Me(e));const a=el(un(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return un(l.map(u=>Co(u)))}function Zr(t,e,n){if(t!==null)for(var r,i,o,a,l,u,f,h=0,g=0,y,p=t.type,b=p==="FeatureCollection",v=p==="Feature",E=b?t.features.length:1,M=0;M<E;M++){f=b?t.features[M].geometry:v?t.geometry:t,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var S=0;S<l;S++){var $=0,R=0;if(a=y?f.geometries[S]:f,a!==null){u=a.coordinates;var k=a.type;switch(h=0,k){case null:break;case"Point":if(e(u,g,M,$,R)===!1)return!1;g++,$++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],g,M,$,R)===!1)return!1;g++,k==="MultiPoint"&&$++}k==="LineString"&&$++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(e(u[r][i],g,M,$,R)===!1)return!1;g++}k==="MultiLineString"&&$++,k==="Polygon"&&R++}k==="Polygon"&&$++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(R=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(e(u[r][i][o],g,M,$,R)===!1)return!1;g++}R++}$++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(Zr(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function nl(t,e){var n,r,i,o,a,l,u,f,h,g,y=0,p=t.type==="FeatureCollection",b=t.type==="Feature",v=p?t.features.length:1;for(n=0;n<v;n++){for(l=p?t.features[n].geometry:b?t.geometry:t,f=p?t.features[n].properties:b?t.properties:{},h=p?t.features[n].bbox:b?t.bbox:void 0,g=p?t.features[n].id:b?t.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(e(null,y,f,h,g)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,y,f,h,g)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],y,f,h,g)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Se(t,e){nl(t,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Me(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],g={type:u,coordinates:h};if(e(Me(g,i),r,f)===!1)return!1}})}function wn(t,e={}){const n=Ht(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return rl(n,e);case"MultiPolygon":return il(n,e);default:throw new Error("invalid poly")}}function rl(t,e={}){const r=Ht(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Qr(r,i)}function il(t,e={}){const r=Ht(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},o=[];return r.forEach(a=>{o.push(Qr(a,i))}),un(o)}function Qr(t,e){return t.length>1?Mo(t,e):Eo(t[0],e)}function sl(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Se(t,i=>{Se(e,o=>{if(r===!1)return!1;r=ol(i.geometry,o.geometry,n)})}),r}function ol(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!ul(t.coordinates,e.coordinates);case"LineString":return!vr(e,t);case"Polygon":return!J(t,e)}break;case"LineString":switch(e.type){case"Point":return!vr(t,e);case"LineString":return!al(t,e,n);case"Polygon":return!xr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!J(e,t);case"LineString":return!xr(t,e,n);case"Polygon":return!ll(e,t,n)}}return!1}function vr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(cl(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function al(t,e,n){return Tn(t,e,{ignoreSelfIntersections:n}).features.length>0}function xr(t,e,n){for(const i of e.coordinates)if(J(i,t))return!0;return Tn(e,wn(t),{ignoreSelfIntersections:n}).features.length>0}function ll(t,e,n){for(const i of t.coordinates[0])if(J(i,e))return!0;for(const i of e.coordinates[0])if(J(i,t))return!0;return Tn(wn(t),wn(e),{ignoreSelfIntersections:n}).features.length>0}function cl(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],o=e[0]-t[0],a=e[1]-t[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function ul(t,e){return t[0]===e[0]&&t[1]===e[1]}function fl(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Se(t,i=>{Se(e,o=>{if(r===!0)return!0;r=!sl(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var hl=fl;function Re(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return Zr(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Pe(t,e,n={}){const r=Yr(t),i=Ka(e);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),dl(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function dl(t,e,n,r,i){const o=n[0],a=n[1],l=t[0],u=t[1],f=e[0],h=e[1],g=n[0]-l,y=n[1]-u,p=f-l,b=h-u,v=g*b-y*p;if(i!==null){if(Math.abs(v)>i)return!1}else if(v!==0)return!1;if(Math.abs(p)===Math.abs(b)&&Math.abs(p)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(p)>=Math.abs(b)?p>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(p)>=Math.abs(b)?p>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(p)>=Math.abs(b)?p>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(p)>=Math.abs(b)?p>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function pl(t,e){var n=Ht(t),r=Ht(e),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return gl(n,r);case"LineString":return Pe(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return J(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return yl(n,r);case"LineString":return ml(n,r);case"Polygon":case"MultiPolygon":return bl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return wl(n,r);case"Polygon":case"MultiPolygon":return vl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return xl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function gl(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(ei(e.coordinates[n],t.coordinates)){r=!0;break}return r}function yl(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)ei(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function ml(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Pe(t.coordinates[r],e))return!1;n||(n=Pe(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function bl(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=J(t.coordinates[i],e),!r){n=!1;break}r=J(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function wl(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Pe(t.coordinates[n],e))return!1;return!0}function vl(t,e){var n=Re(e),r=Re(t);if(!ti(n,r))return!1;for(var i=!1,o=0;o<t.coordinates.length;o++){if(!J(t.coordinates[o],e))return!1;if(i||(i=J(t.coordinates[o],e,{ignoreBoundary:!0})),!i&&o<t.coordinates.length-1){var a=Al(t.coordinates[o],t.coordinates[o+1]);i=J(a,e,{ignoreBoundary:!0})}}return i}function xl(t,e){var n=Re(t),r=Re(e);if(!ti(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!J(t.coordinates[0][i],e))return!1;return!0}function ti(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function ei(t,e){return t[0]===e[0]&&t[1]===e[1]}function Al(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var _l=pl;const Cl=(t,e)=>e?hl(t,e):!0,Ml=(t,e)=>e?_l(t,e):!0;function El(t,e="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${e}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return t.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let ni;const Ll=(t,e)=>{ni=new _t(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},$l=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",g=[],y=(p,b)=>{const v={};f.type==="text"?v[p]=`${b}`:v[u]=`="${p}"`,g.push(v)};return Object.entries(f.state).filter(([,p])=>p).forEach(([p,b])=>y(p,b)),g.length>0&&l.push({[h]:g}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},u=ni.search(l);i=n.enableHighlighting?El(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,g]of Object.entries(o)){const y=b=>g.format==="date"?Yt(b).unix():b,p=Jt(h,i[u]);p?Array.isArray(p)?f[h]=o[h].min<=y(p[1])&&y(p[0])<=o[h].max:y(p)>=o[h].min&&y(p)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const g=Jt(h,i[u]),y=a[h].mode||"within";g&&(y==="within"?Ml(g,a[h].geometry):Cl(g,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function Sl(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function Ue(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function Ar(t,e){return t*2+e}function Rl(t){return Object.keys(t).map(e=>({title:_`${t[e].title||t[e].key}:
        <strong>${t[e].stringifiedState}</strong>`,key:e})).filter(e=>t[e.key].dirty)}function vn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Pl(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function ri(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Jt(t,e){return t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}var P,ii,xn,An,si,_n,Cn,oi,Mn,ai,li;class Dl extends it{constructor(){super();q(this,P);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=L(this,P,si).bind(this),this._handleKeyDown=L(this,P,_n).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&L(this,P,xn).call(this)}disconnectedCallback(){this.inlineMode&&L(this,P,An).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?L(this,P,xn).call(this):L(this,P,An).call(this))}render(){return _`
      <style>
        ${!this.unstyled&&te}
      </style>
      ${this.inlineMode?_`
            <div
              class="inline-container-wrapper"
              @click="${L(this,P,Cn)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Rl(this.filters)}
                      .controller=${{remove:n=>L(this,P,ai).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${N(vn(this.filters),()=>_`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${vn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${L(this,P,Cn)}"
                    @focus="${L(this,P,oi)}"
                    @input="${L(this,P,li)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div popover="manual">
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${L(this,P,_n)}"
                  @click="${L(this,P,Mn)}"
                  @focus="${L(this,P,Mn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:_`<slot name="section"></slot>`}
    `}}P=new WeakSet,ii=function(){setTimeout(()=>this._overlayCleanup=Ia(this))},xn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),L(this,P,ii).call(this)},An=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},si=function(n){Wa(n,this)},_n=function(n){Ua(n,this)},Cn=function(n){qa(n,this)},oi=function(){Fa(this)},Mn=function(n){Ha(n,this)},ai=function(n){pa(n,this)},li=function(n){Or(n,this)};customElements.define("eox-itemfilter-container",Dl);function Bl(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",Ue(t.filterObject),t.requestUpdate()}function kl(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const En="ddd, D MMM YYYY HH:mm:ss";function Tl(t){if(t.filterObject=Ue(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function Ol(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Yt.unix(n).format(En)} - ${Yt.unix(r).format(En)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function jl(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],o=r?Yt.unix(i).format(En):i;return _`<div class="range-${e}">${o}</div>`}function Nl(t){Il(-1,t),Ue(t.filterObject),t.requestUpdate()}function Il(t,e){e.selectedItems=[],On(e),ui(e)}function ci(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),On(e),ui(e)}function Hl(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function Fl(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&ci(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function ql(t,e){(t.has("suggestions")||t.has("query"))&&On(e)}function Ul(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,o)=>i.localeCompare(o));return e.sort(n).map(i=>i)}function On(t){var n,r,i;let e;t.query&&(e=new _t(t.suggestions,{threshold:.4}).search(t.query).map(a=>a.item)),t.filteredSuggestions=Ul(t,e||t.suggestions),(n=t.filterObject)!=null&&n.filterKeys&&(t.filteredSuggestions=(r=t.filterObject)==null?void 0:r.filterKeys.map(o=>`${o}`),t.filterObject.state=(i=t.filterObject)==null?void 0:i.filterKeys.map(o=>`${o}`).reduce((o,a)=>(a in o||(o[a]=void 0),o),t.filterObject.state)),t.highlightedIndex=-1}function ui(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function Wl(t){Ue(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function Gl(t){t.renderRoot.querySelector("#eox-map").innerHTML="",fi(t)}function Kl(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function fi(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&zl(t.geometry),r=Sl(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function zl(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var Te;class Vl extends it{constructor(){super();q(this,Te,()=>{kl(this)});Vt(this,"debouncedInputHandler",Ie(G(this,Te),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Bl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return _`
        <style></style>
        <div class="text-container">
          <div class="text-container-wrapper">
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((n=this.filterObject.validation)==null?void 0:n.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${r=>r.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}Te=new WeakMap;customElements.define("eox-itemfilter-text",Vl);function Yl(t,e,n){return t.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}function Xl(t,e){return _`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||xt}
    >
      <summary>
        <span class="title">
          ${t}
          <span class="count"
            >${e.aggregateResults(e.results,t).length}</span
          >
        </span>
      </summary>
      <div>
        ${hi(e,t)}
      </div>
    </details>
  `}function hi(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,o=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":xt};return _`
    <ul class=${t.resultType}>
      ${vo(r,a=>a.id,a=>_`
          <li
            class=${o(a)}
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <span id="${a.id}">
              ${N(i.subTitleProperty||i.imageProperty,()=>_`
                  ${Jt(i.imageProperty,a)?_`
                        <img
                          class="image"
                          src="${Jt(i.imageProperty,a)}"
                        />
                      `:_`
                        <svg
                          class="image"
                          width="800"
                          height="600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="800"
                            height="600"
                            fill="var(--primary-color)"
                          />
                        </svg>
                      `}
                  <div class="title-container">
                    <span class="title"
                      >${we(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${we(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>_`
                  <span class="title"
                    >${we(a[i.titleProperty])}</span
                  >
                `)}
            </span>
            ${N(t.enableResultAction,()=>_`
                <span
                  class="result-action"
                  @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >${we(t.resultActionIcon)}</span
                >
              `)}
          </li>
        `)}
    </ul>
  `}var Rt,Ln,di;class Jl extends it{constructor(){super();q(this,Rt);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return Yl(n,r,this)}createRenderRoot(){return this}handleAccordion(n){ri(n,this.config,this)}render(){return _`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${N(this.results.length<1,()=>_`<small class="no-results">No matching items</small>`,()=>xt)}
          <ul id="results" part="results">
            ${N(this.config.aggregateResults,()=>Ne(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>_`${N(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>_`<div style="margin-left: -8px">
                          ${L(this,Rt,Ln).call(this,n)}
                        </div>`,()=>L(this,Rt,di).call(this,n))}`),()=>L(this,Rt,Ln).call(this))}
          </ul>
        </div>
      </section>
    `}}Rt=new WeakSet,Ln=function(n){return hi(this,n)},di=function(n){return Xl(n,this)};customElements.define("eox-itemfilter-results",Jl);var vt,gi,yi,mi;class pi extends it{constructor(){super();q(this,vt);Vt(this,"debouncedInputHandler",Ie(L(this,vt,mi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){ql(n,this)}reset(){Nl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":xt;return _`
      <style>
        ${!this.unstyled&&te}
        ${!this.unstyled&&xo}
        ${!this.unstyled&&Ao}
      </style>
      ${N(this.suggestions.length>10,()=>_`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${L(this,vt,gi)}
                @keydown=${L(this,vt,yi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(i=>_`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label>
                  <input
                    type="${n}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${o=>{o.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}vt=new WeakSet,gi=function(n){Hl(n,this)},yi=function(n){Fl(n,this)},mi=function(n){ci(n,this)},Vt(pi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",pi);var Pt,wi,$n;class bi extends it{constructor(){super();q(this,Pt);this.filterObject={},this.tabIndex=0,this.inputHandler=L(this,Pt,wi).bind(this),this.debouncedInputHandler=Ie(this.inputHandler,500,{leading:!1})}reset(){Tl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>_`
        ${L(this,Pt,$n).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${L(this,Pt,$n).call(this,"max","after")}
      `)}}Pt=new WeakSet,wi=function(n){Ol(n,this)},$n=function(n,r){return jl(n,r,this)},Vt(bi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",bi);var Oe,vi;class Zl extends it{constructor(){super();q(this,Oe);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Wl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return _`
        <form style="display: inline">
          ${Ne(["intersects","within"],r=>_`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||xt}"
                  value="${r}"
                  @click=${()=>L(this,Oe,vi).call(this,r)}
                />
                <small>${r} filter geometry</small>
              </label>
            `)}
        </form>
        <eox-itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
          @filter="${r=>{this.filterObject.state.geometry=r.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
        ></eox-itemfilter-spatial>
      `})}}Oe=new WeakSet,vi=function(n){Kl(n,this)};customElements.define("eox-itemfilter-spatial",Zl);var je,xi;class Ql extends it{constructor(){super();q(this,je);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){L(this,je,xi).call(this)}reset(){Gl(this)}render(){return _`<div id="eox-map"></div>`}}je=new WeakSet,xi=function(){fi(this)};customElements.define("eox-itemfilter-spatial-filter",Ql);function tc(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function ec(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&nc(n,t.target.value??"",e))}function nc(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Dt,Sn,Ai;class rc extends it{constructor(){super();q(this,Dt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",L(this,Dt,Sn).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",L(this,Dt,Sn).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return _`
      <style>
        ${te}
      </style>
      <span class="chip-container">
        ${Ne(this.items,n=>_`
            <span class="chip" @click=${L(this,Dt,Ai).bind(this)}>
              <span class="chip-title">${n.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${n.key}
                  @click=${r=>{r.stopPropagation(),this.controller.remove(r),this.requestUpdate()}}
                ></span>
            </span>
            </span>
          `)}
      </span>
    `}}Dt=new WeakSet,Sn=function(n){ec(n,this)},Ai=function(n){tc(n,this)};customElements.define("eox-itemfilter-chips",rc);const ic=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),_r=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var sc=200,jn="__lodash_hash_undefined__",oc=1/0,ac="[object Function]",lc="[object GeneratorFunction]",cc=/[\\^$.*+?()[\]{}|]/g,uc=/^\[object .+?Constructor\]$/,fc=typeof bt=="object"&&bt&&bt.Object===Object&&bt,hc=typeof self=="object"&&self&&self.Object===Object&&self,Nn=fc||hc||Function("return this")();function dc(t,e){var n=t?t.length:0;return!!n&&gc(t,e,0)>-1}function pc(t,e,n,r){for(var i=t.length,o=n+-1;++o<i;)if(e(t[o],o,t))return o;return-1}function gc(t,e,n){if(e!==e)return pc(t,yc,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function yc(t){return t!==t}function mc(t,e){return t.has(e)}function bc(t,e){return t==null?void 0:t[e]}function wc(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function _i(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var vc=Array.prototype,xc=Function.prototype,Ci=Object.prototype,ln=Nn["__core-js_shared__"],Cr=function(){var t=/[^.]+$/.exec(ln&&ln.keys&&ln.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Mi=xc.toString,In=Ci.hasOwnProperty,Ac=Ci.toString,_c=RegExp("^"+Mi.call(In).replace(cc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Cc=vc.splice,Mc=Hn(Nn,"Map"),cn=Hn(Nn,"Set"),Zt=Hn(Object,"create");function St(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ec(){this.__data__=Zt?Zt(null):{}}function Lc(t){return this.has(t)&&delete this.__data__[t]}function $c(t){var e=this.__data__;if(Zt){var n=e[t];return n===jn?void 0:n}return In.call(e,t)?e[t]:void 0}function Sc(t){var e=this.__data__;return Zt?e[t]!==void 0:In.call(e,t)}function Rc(t,e){var n=this.__data__;return n[t]=Zt&&e===void 0?jn:e,this}St.prototype.clear=Ec;St.prototype.delete=Lc;St.prototype.get=$c;St.prototype.has=Sc;St.prototype.set=Rc;function Ut(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Pc(){this.__data__=[]}function Dc(t){var e=this.__data__,n=We(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Cc.call(e,n,1),!0}function Bc(t){var e=this.__data__,n=We(e,t);return n<0?void 0:e[n][1]}function kc(t){return We(this.__data__,t)>-1}function Tc(t,e){var n=this.__data__,r=We(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}Ut.prototype.clear=Pc;Ut.prototype.delete=Dc;Ut.prototype.get=Bc;Ut.prototype.has=kc;Ut.prototype.set=Tc;function Wt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Oc(){this.__data__={hash:new St,map:new(Mc||Ut),string:new St}}function jc(t){return Ge(this,t).delete(t)}function Nc(t){return Ge(this,t).get(t)}function Ic(t){return Ge(this,t).has(t)}function Hc(t,e){return Ge(this,t).set(t,e),this}Wt.prototype.clear=Oc;Wt.prototype.delete=jc;Wt.prototype.get=Nc;Wt.prototype.has=Ic;Wt.prototype.set=Hc;function De(t){var e=-1,n=t?t.length:0;for(this.__data__=new Wt;++e<n;)this.add(t[e])}function Fc(t){return this.__data__.set(t,jn),this}function qc(t){return this.__data__.has(t)}De.prototype.add=De.prototype.push=Fc;De.prototype.has=qc;function We(t,e){for(var n=t.length;n--;)if(Xc(t[n][0],e))return n;return-1}function Uc(t){if(!Ei(t)||zc(t))return!1;var e=Jc(t)||wc(t)?_c:uc;return e.test(Vc(t))}function Wc(t,e,n){var r=-1,i=dc,o=t.length,a=!0,l=[],u=l;if(o>=sc){var f=Gc(t);if(f)return _i(f);a=!1,i=mc,u=new De}else u=l;t:for(;++r<o;){var h=t[r],g=h;if(h=h!==0?h:0,a&&g===g){for(var y=u.length;y--;)if(u[y]===g)continue t;l.push(h)}else i(u,g,n)||(u!==l&&u.push(g),l.push(h))}return l}var Gc=cn&&1/_i(new cn([,-0]))[1]==oc?function(t){return new cn(t)}:Zc;function Ge(t,e){var n=t.__data__;return Kc(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Hn(t,e){var n=bc(t,e);return Uc(n)?n:void 0}function Kc(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function zc(t){return!!Cr&&Cr in t}function Vc(t){if(t!=null){try{return Mi.call(t)}catch{}try{return t+""}catch{}}return""}function Yc(t){return t&&t.length?Wc(t):[]}function Xc(t,e){return t===e||t!==t&&e!==e}function Jc(t){var e=Ei(t)?Ac.call(t):"";return e==ac||e==lc}function Ei(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Zc(){}var Qc=Yc;const Li=Mr(Qc);var Be={exports:{}};Be.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",g="[object Date]",y="[object Error]",p="[object Function]",b="[object GeneratorFunction]",v="[object Map]",E="[object Number]",M="[object Object]",S="[object Promise]",$="[object RegExp]",R="[object Set]",k="[object String]",ot="[object Symbol]",O="[object WeakMap]",Z="[object ArrayBuffer]",U="[object DataView]",ne="[object Float32Array]",Gt="[object Float64Array]",pt="[object Int8Array]",Fn="[object Int16Array]",W="[object Int32Array]",Bt="[object Uint8Array]",re="[object Uint8ClampedArray]",Pi="[object Uint16Array]",Di="[object Uint32Array]",Bi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ki=/^\w*$/,Ti=/^\./,Oi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ji=/[\\^$.*+?()[\]{}|]/g,Ni=/\\(\\)?/g,Ii=/^\[object .+?Constructor\]$/,Hi=/^(?:0|[1-9]\d*)$/,D={};D[ne]=D[Gt]=D[pt]=D[Fn]=D[W]=D[Bt]=D[re]=D[Pi]=D[Di]=!0,D[u]=D[f]=D[Z]=D[h]=D[U]=D[g]=D[y]=D[p]=D[v]=D[E]=D[M]=D[$]=D[R]=D[k]=D[O]=!1;var qn=typeof bt=="object"&&bt&&bt.Object===Object&&bt,Fi=typeof self=="object"&&self&&self.Object===Object&&self,gt=qn||Fi||Function("return this")(),Un=e&&!e.nodeType&&e,Wn=Un&&!0&&t&&!t.nodeType&&t,qi=Wn&&Wn.exports===Un,Gn=qi&&qn.process,Kn=function(){try{return Gn&&Gn.binding("util")}catch{}}(),zn=Kn&&Kn.isTypedArray;function Ui(s,c){for(var d=-1,m=s?s.length:0,x=Array(m);++d<m;)x[d]=c(s[d],d,s);return x}function Wi(s,c){for(var d=-1,m=c.length,x=s.length;++d<m;)s[x+d]=c[d];return s}function Gi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Ki(s){return function(c){return c==null?void 0:c[s]}}function zi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Vi(s){return function(c){return s(c)}}function Yi(s,c){return s==null?void 0:s[c]}function Ke(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Xi(s){var c=-1,d=Array(s.size);return s.forEach(function(m,x){d[++c]=[x,m]}),d}function Ji(s,c){return function(d){return s(c(d))}}function Zi(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var Qi=Array.prototype,ts=Function.prototype,ie=Object.prototype,ze=gt["__core-js_shared__"],Vn=function(){var s=/[^.]+$/.exec(ze&&ze.keys&&ze.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Yn=ts.toString,at=ie.hasOwnProperty,kt=ie.toString,es=RegExp("^"+Yn.call(at).replace(ji,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),se=gt.Symbol,Xn=gt.Uint8Array,ns=ie.propertyIsEnumerable,rs=Qi.splice,Jn=se?se.isConcatSpreadable:void 0,is=Ji(Object.keys,Object),Ve=Tt(gt,"DataView"),Kt=Tt(gt,"Map"),Ye=Tt(gt,"Promise"),Xe=Tt(gt,"Set"),Je=Tt(gt,"WeakMap"),zt=Tt(Object,"create"),ss=Mt(Ve),os=Mt(Kt),as=Mt(Ye),ls=Mt(Xe),cs=Mt(Je),oe=se?se.prototype:void 0,Ze=oe?oe.valueOf:void 0,Zn=oe?oe.toString:void 0;function Ct(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function us(){this.__data__=zt?zt(null):{}}function fs(s){return this.has(s)&&delete this.__data__[s]}function hs(s){var c=this.__data__;if(zt){var d=c[s];return d===i?void 0:d}return at.call(c,s)?c[s]:void 0}function ds(s){var c=this.__data__;return zt?c[s]!==void 0:at.call(c,s)}function ps(s,c){var d=this.__data__;return d[s]=zt&&c===void 0?i:c,this}Ct.prototype.clear=us,Ct.prototype.delete=fs,Ct.prototype.get=hs,Ct.prototype.has=ds,Ct.prototype.set=ps;function lt(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function gs(){this.__data__=[]}function ys(s){var c=this.__data__,d=le(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():rs.call(c,d,1),!0}function ms(s){var c=this.__data__,d=le(c,s);return d<0?void 0:c[d][1]}function bs(s){return le(this.__data__,s)>-1}function ws(s,c){var d=this.__data__,m=le(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}lt.prototype.clear=gs,lt.prototype.delete=ys,lt.prototype.get=ms,lt.prototype.has=bs,lt.prototype.set=ws;function ct(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function vs(){this.__data__={hash:new Ct,map:new(Kt||lt),string:new Ct}}function xs(s){return ce(this,s).delete(s)}function As(s){return ce(this,s).get(s)}function _s(s){return ce(this,s).has(s)}function Cs(s,c){return ce(this,s).set(s,c),this}ct.prototype.clear=vs,ct.prototype.delete=xs,ct.prototype.get=As,ct.prototype.has=_s,ct.prototype.set=Cs;function ae(s){var c=-1,d=s?s.length:0;for(this.__data__=new ct;++c<d;)this.add(s[c])}function Ms(s){return this.__data__.set(s,i),this}function Es(s){return this.__data__.has(s)}ae.prototype.add=ae.prototype.push=Ms,ae.prototype.has=Es;function ut(s){this.__data__=new lt(s)}function Ls(){this.__data__=new lt}function $s(s){return this.__data__.delete(s)}function Ss(s){return this.__data__.get(s)}function Rs(s){return this.__data__.has(s)}function Ps(s,c){var d=this.__data__;if(d instanceof lt){var m=d.__data__;if(!Kt||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ct(m)}return d.set(s,c),this}ut.prototype.clear=Ls,ut.prototype.delete=$s,ut.prototype.get=Ss,ut.prototype.has=Rs,ut.prototype.set=Ps;function Ds(s,c){var d=ft(s)||en(s)?zi(s.length,String):[],m=d.length,x=!!m;for(var w in s)at.call(s,w)&&!(x&&(w=="length"||nr(w,m)))&&d.push(w);return d}function le(s,c){for(var d=s.length;d--;)if(sr(s[d][0],c))return d;return-1}var Bs=Xs(Os);function ks(s,c,d,m,x){var w=-1,C=s.length;for(d||(d=no),x||(x=[]);++w<C;){var B=s[w];d(B)?Wi(x,B):x[x.length]=B}return x}var Ts=Js();function Os(s,c){return s&&Ts(s,c,ge)}function Qn(s,c){c=ue(c,s)?[c]:tr(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[fe(c[d++])];return d&&d==m?s:void 0}function js(s){return kt.call(s)}function Ns(s,c){return s!=null&&c in Object(s)}function Qe(s,c,d,m,x){return s===c?!0:s==null||c==null||!de(s)&&!pe(c)?s!==s&&c!==c:Is(s,c,Qe,d,m,x)}function Is(s,c,d,m,x,w){var C=ft(s),B=ft(c),T=f,j=f;C||(T=yt(s),T=T==u?M:T),B||(j=yt(c),j=j==u?M:j);var H=T==M&&!Ke(s),F=j==M&&!Ke(c),I=T==j;if(I&&!H)return w||(w=new ut),C||uo(s)?er(s,c,d,m,x,w):Zs(s,c,T,d,m,x,w);if(!(x&a)){var V=H&&at.call(s,"__wrapped__"),Y=F&&at.call(c,"__wrapped__");if(V||Y){var mt=V?s.value():s,ht=Y?c.value():c;return w||(w=new ut),d(mt,ht,m,x,w)}}return I?(w||(w=new ut),Qs(s,c,d,m,x,w)):!1}function Hs(s,c,d,m){var x=d.length,w=x;if(s==null)return!w;for(s=Object(s);x--;){var C=d[x];if(C[2]?C[1]!==s[C[0]]:!(C[0]in s))return!1}for(;++x<w;){C=d[x];var B=C[0],T=s[B],j=C[1];if(C[2]){if(T===void 0&&!(B in s))return!1}else{var H=new ut,F;if(!(F===void 0?Qe(j,T,m,o|a,H):F))return!1}}return!0}function Fs(s){if(!de(s)||io(s))return!1;var c=or(s)||Ke(s)?es:Ii;return c.test(Mt(s))}function qs(s){return pe(s)&&nn(s.length)&&!!D[kt.call(s)]}function Us(s){return typeof s=="function"?s:s==null?go:typeof s=="object"?ft(s)?zs(s[0],s[1]):Ks(s):yo(s)}function Ws(s){if(!so(s))return is(s);var c=[];for(var d in Object(s))at.call(s,d)&&d!="constructor"&&c.push(d);return c}function Gs(s,c){var d=-1,m=he(s)?Array(s.length):[];return Bs(s,function(x,w,C){m[++d]=c(x,w,C)}),m}function Ks(s){var c=to(s);return c.length==1&&c[0][2]?ir(c[0][0],c[0][1]):function(d){return d===s||Hs(d,s,c)}}function zs(s,c){return ue(s)&&rr(c)?ir(fe(s),c):function(d){var m=ho(d,s);return m===void 0&&m===c?po(d,s):Qe(c,m,void 0,o|a)}}function Vs(s){return function(c){return Qn(c,s)}}function Ys(s){if(typeof s=="string")return s;if(rn(s))return Zn?Zn.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function tr(s){return ft(s)?s:oo(s)}function Xs(s,c){return function(d,m){if(d==null)return d;if(!he(d))return s(d,m);for(var x=d.length,w=-1,C=Object(d);++w<x&&m(C[w],w,C)!==!1;);return d}}function Js(s){return function(c,d,m){for(var x=-1,w=Object(c),C=m(c),B=C.length;B--;){var T=C[++x];if(d(w[T],T,w)===!1)break}return c}}function er(s,c,d,m,x,w){var C=x&a,B=s.length,T=c.length;if(B!=T&&!(C&&T>B))return!1;var j=w.get(s);if(j&&w.get(c))return j==c;var H=-1,F=!0,I=x&o?new ae:void 0;for(w.set(s,c),w.set(c,s);++H<B;){var V=s[H],Y=c[H];if(m)var mt=C?m(Y,V,H,c,s,w):m(V,Y,H,s,c,w);if(mt!==void 0){if(mt)continue;F=!1;break}if(I){if(!Gi(c,function(ht,Et){if(!I.has(Et)&&(V===ht||d(V,ht,m,x,w)))return I.add(Et)})){F=!1;break}}else if(!(V===Y||d(V,Y,m,x,w))){F=!1;break}}return w.delete(s),w.delete(c),F}function Zs(s,c,d,m,x,w,C){switch(d){case U:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Z:return!(s.byteLength!=c.byteLength||!m(new Xn(s),new Xn(c)));case h:case g:case E:return sr(+s,+c);case y:return s.name==c.name&&s.message==c.message;case $:case k:return s==c+"";case v:var B=Xi;case R:var T=w&a;if(B||(B=Zi),s.size!=c.size&&!T)return!1;var j=C.get(s);if(j)return j==c;w|=o,C.set(s,c);var H=er(B(s),B(c),m,x,w,C);return C.delete(s),H;case ot:if(Ze)return Ze.call(s)==Ze.call(c)}return!1}function Qs(s,c,d,m,x,w){var C=x&a,B=ge(s),T=B.length,j=ge(c),H=j.length;if(T!=H&&!C)return!1;for(var F=T;F--;){var I=B[F];if(!(C?I in c:at.call(c,I)))return!1}var V=w.get(s);if(V&&w.get(c))return V==c;var Y=!0;w.set(s,c),w.set(c,s);for(var mt=C;++F<T;){I=B[F];var ht=s[I],Et=c[I];if(m)var ar=C?m(Et,ht,I,c,s,w):m(ht,Et,I,s,c,w);if(!(ar===void 0?ht===Et||d(ht,Et,m,x,w):ar)){Y=!1;break}mt||(mt=I=="constructor")}if(Y&&!mt){var ye=s.constructor,me=c.constructor;ye!=me&&"constructor"in s&&"constructor"in c&&!(typeof ye=="function"&&ye instanceof ye&&typeof me=="function"&&me instanceof me)&&(Y=!1)}return w.delete(s),w.delete(c),Y}function ce(s,c){var d=s.__data__;return ro(c)?d[typeof c=="string"?"string":"hash"]:d.map}function to(s){for(var c=ge(s),d=c.length;d--;){var m=c[d],x=s[m];c[d]=[m,x,rr(x)]}return c}function Tt(s,c){var d=Yi(s,c);return Fs(d)?d:void 0}var yt=js;(Ve&&yt(new Ve(new ArrayBuffer(1)))!=U||Kt&&yt(new Kt)!=v||Ye&&yt(Ye.resolve())!=S||Xe&&yt(new Xe)!=R||Je&&yt(new Je)!=O)&&(yt=function(s){var c=kt.call(s),d=c==M?s.constructor:void 0,m=d?Mt(d):void 0;if(m)switch(m){case ss:return U;case os:return v;case as:return S;case ls:return R;case cs:return O}return c});function eo(s,c,d){c=ue(c,s)?[c]:tr(c);for(var m,x=-1,C=c.length;++x<C;){var w=fe(c[x]);if(!(m=s!=null&&d(s,w)))break;s=s[w]}if(m)return m;var C=s?s.length:0;return!!C&&nn(C)&&nr(w,C)&&(ft(s)||en(s))}function no(s){return ft(s)||en(s)||!!(Jn&&s&&s[Jn])}function nr(s,c){return c=c??l,!!c&&(typeof s=="number"||Hi.test(s))&&s>-1&&s%1==0&&s<c}function ue(s,c){if(ft(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||rn(s)?!0:ki.test(s)||!Bi.test(s)||c!=null&&s in Object(c)}function ro(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function io(s){return!!Vn&&Vn in s}function so(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||ie;return s===d}function rr(s){return s===s&&!de(s)}function ir(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var oo=tn(function(s){s=fo(s);var c=[];return Ti.test(s)&&c.push(""),s.replace(Oi,function(d,m,x,w){c.push(x?w.replace(Ni,"$1"):m||d)}),c});function fe(s){if(typeof s=="string"||rn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Mt(s){if(s!=null){try{return Yn.call(s)}catch{}try{return s+""}catch{}}return""}function ao(s,c){return ks(lo(s,c))}function lo(s,c){var d=ft(s)?Ui:Gs;return d(s,Us(c))}function tn(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,x=c?c.apply(this,m):m[0],w=d.cache;if(w.has(x))return w.get(x);var C=s.apply(this,m);return d.cache=w.set(x,C),C};return d.cache=new(tn.Cache||ct),d}tn.Cache=ct;function sr(s,c){return s===c||s!==s&&c!==c}function en(s){return co(s)&&at.call(s,"callee")&&(!ns.call(s,"callee")||kt.call(s)==u)}var ft=Array.isArray;function he(s){return s!=null&&nn(s.length)&&!or(s)}function co(s){return pe(s)&&he(s)}function or(s){var c=de(s)?kt.call(s):"";return c==p||c==b}function nn(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function de(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function pe(s){return!!s&&typeof s=="object"}function rn(s){return typeof s=="symbol"||pe(s)&&kt.call(s)==ot}var uo=zn?Vi(zn):qs;function fo(s){return s==null?"":Ys(s)}function ho(s,c,d){var m=s==null?void 0:Qn(s,c);return m===void 0?d:m}function po(s,c){return s!=null&&eo(s,c,Ns)}function ge(s){return he(s)?Ds(s):Ws(s)}function go(s){return s}function yo(s){return ue(s)?Ki(fe(s)):Vs(s)}t.exports=ao})(Be,Be.exports);var tu=Be.exports;const $i=Mr(tu);function eu(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Yt(f).unix():parseFloat(f);e.forEach(f=>{var h,g;if(o.type==="range"){const y=Jt(o.key,f);if(Array.isArray(y)){const p=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,p[0]):p[0],a.max=a.max!==void 0?Math.max(a.max,p[1]):p[1]}else{const p=l(y);a.min=a.min!==void 0?Math.min(a.min,p):p,a.max=a.max!==void 0?Math.max(a.max,p):p}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(g=o.key)!=null&&g.includes(".")?Li($i(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((o,a)=>o.concat(a[t.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),Ll(e,Object.assign({keys:i},t.fuseConfig)),r}async function nu(t,e,n){let r;n.externalFilter?r=await Pl(e,n.filters,t):r=await $l(e,n.filters,t),n.results=n.sortResults(r)}function ru(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return _`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return _`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${Li($i(n.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return _`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return _`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return _``}}function iu(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function su(t,e,n){return _`
    ${N(t.dirty,()=>_`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":xt}
        </button>
      `)}
  `}function ou(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var Qt,Nt,X,Ft,Si,Ri;class au extends it{constructor(){super();q(this,Ft);q(this,Qt,[]);q(this,Nt,[]);q(this,X,ic);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Ie(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="#004170" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){be(this,Qt,eu(G(this,X),G(this,Nt),this)),this.search()}async searchHandler(){await nu(G(this,X),G(this,Nt),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return iu(n,G(this,X))}resetFilters(){ou(this)}firstUpdated(n){var i;let r={};_r.map(o=>{r={...r,[o]:this[o]}}),be(this,X,r),be(this,Nt,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){_r.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return _`
      <style>
        ${Lo}
        ${!this.unstyled&&te}
        ${!this.unstyled&&wo}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":xt}
        @submit="${r=>r.preventDefault()}"
      >
        ${N(this.filterProperties,()=>_`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${N(!this.inlineMode,()=>_`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${Ne(Object.values(this.filters),(r,i)=>_` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${o=>ri(o,G(this,X),this)}
                          data-details="${r.key}"
                        >
                          ${L(this,Ft,Ri).call(this,r,Ar(i,1))}
                          ${L(this,Ft,Si).call(this,r,Ar(i,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${N(!this.inlineMode&&G(this,X).filterProperties&&!this.inlineMode&&G(this,X).filterProperties&&vn(this.filters),()=>_`
                    <button
                      type="button"
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${()=>this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `)}
              </section>
            </eox-itemfilter-container>
          `)}
        ${N(((n=G(this,X))==null?void 0:n.showResults)&&this.results,()=>_`
            <eox-itemfilter-results
              .config=${G(this,X)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${G(this,Qt)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @click:result-action=${this.emitResultAction}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}Qt=new WeakMap,Nt=new WeakMap,X=new WeakMap,Ft=new WeakSet,Si=function(n,r){return ru(n,r,this)},Ri=function(n,r){return su(n,r,this)};customElements.define("eox-itemfilter",au);export{au as EOxItemFilter};
