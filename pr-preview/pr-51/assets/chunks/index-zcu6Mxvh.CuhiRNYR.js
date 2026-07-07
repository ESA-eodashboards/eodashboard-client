import"./main.-Ss7-DpR.js";import"./main.B922bHoL.js";import"./main.Bdac9cAa.js";import{_ as V,s as A,a as U,a2 as K,a3 as z,at as F,a5 as q,ak as M,bH as G,V as I,bI as H,a6 as Q,av as W,aw as X,an as Y,ao as Z}from"./eo-dash.DV7Wj2U5.js";import{c as $,j as ee,P as oe}from"./ProcessList-Cx7rzUXp.C7HsqwTJ.js";import te from"./EodashChart-Kz97HeYB.C7N8ZgFH.js";import{i as O,u as ae,h as se}from"./handling-C2dvghCW.B2dMwpw4.js";import{g as ne,u as re,m as ie}from"./async-Da_9CKp4.jl2m5-r7.js";import{a4 as le,q as S,o as y,c as E,j as ce,E as pe,k as C,e as g,b as L,w as T,a as J,v as de,x as me,p as x,h as P,P as ue}from"./framework.BWF56XHM.js";import"./lit-element.CIht5NN8.js";import"./addCommonStyleSheet.BXNdjf7I.js";import"./sequential.BcvVcPN9.js";import"./orient2d.DArCjZZA.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.BMu_cjfm.js";import"./when.BR7zwNJC.js";import"./Object.DcVsVtBM.js";import"./getElement.COiK8z0h.js";import"./GeoJSON.DoKboHFD.js";import"./WKT.DsDt_o91.js";import"./purify.es.D1kQrx-r.js";import"./commonjsHelpers.BosuxZz1.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./utils.BJtOAKhC.js";import"./index.CxojoGlr.js";import"./index.BIJR-IiI.js";import"./item.Tx4UuQzI.js";import"./main.CY0i5uwm.js";import"./repeat.9Pq2frlr.js";import"./unsafe-html.RlppLW26.js";import"./map.DiiNQ3pp.js";import"./XYZ._S3Kc2FN.js";import"./index.BUIxO2d3.js";import"./index-DzRiQfuI.B65uo5Ae.js";import"./VTooltip-D_k-UNxI.t-hz9S6g.js";import"./forwardRefs-BSL7KEkm.Ch8c5fKm.js";import"./transition-D5eR6a9N.DwCNnoo5.js";const fe=({selectedStac:s,jsonformSchema:n,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:t})=>{de(async()=>{var a;await O({enableCompare:((a=t.value)==null?void 0:a.id)==="compare",selectedStac:s,jsonformSchema:n,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:t.value})}),Q(async a=>{var w;const c=((w=t.value)==null?void 0:w.id)==="compare",u=c?"compareLayers:updated":"layers:updated";if((c?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(a)){const h=await ae({jsonformSchema:n.value,newLayers:c?W():X(),enableCompare:c,mapElement:t.value});h&&(n.value=h)}a===u&&await O({enableCompare:c,selectedStac:s,jsonformSchema:n,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:t.value})})};function he(s,n,i,l){const p=async t=>{await l()};S(i,t=>{var a;s.value=((a=t==null?void 0:t.options)==null?void 0:a.execute)||!1});const m=S([s,n],async([t,a],[c,u])=>{u&&u.removeEventListener("change",p),t&&a&&(a.removeEventListener("change",p),await ue(),a.addEventListener("change",p))},{immediate:!0});me(()=>{n.value&&n.value.removeEventListener("change",p),m()})}const ve="eox-jsonform{padding:0 12px;min-height:0px;flex-shrink:0}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{height:100%;display:flex;flex-direction:column;overflow:hidden}.eodash-process-content{flex-grow:1;overflow-y:auto;display:flex;flex-direction:column}.eodash-process-actions{text-align:right;padding:4px 12px;flex-shrink:0;border-top:1px solid rgba(0,0,0,.1);background:inherit}",ye={ref:"container",class:"eodash-process-container"},xe={class:"eodash-process-content"},ge=[".schema"],we={key:0,class:"eodash-process-actions"},be={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(s){const n=x(!1),i=x(null),l=le("jsonformEl");S(l,e=>{if(e&&e.shadowRoot){const o="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(o)){const r=document.createElement("style");r.id=o,r.textContent=`
        /* Compact standard form elements */
        .form-control, .form-group {
          margin-bottom: 8px !important;
        }
        .form-control > label, .form-group > label {
          margin-bottom: 2px !important;
          font-size: 0.9em;
        }
        
        /* Specific layout for drawtools */
        .form-control:has(eox-drawtools) {
          position: relative;
          padding: 8px 12px !important;
          border: none !important;
          background: transparent !important;
          margin-bottom: 8px !important;
        }
        .form-control:has(eox-drawtools) > label {
          position: absolute;
          left: 12px;
          top: 8px;
          margin: 0 !important;
          width: calc(100% - 180px); /* Give label maximum available width */
          line-height: 1.2;
          display: flex;
          align-items: flex-start;
          padding-top: 8px;
          pointer-events: none; /* Let clicks pass through to buttons if they overlap slightly */
        }
        .form-control:has(eox-drawtools) > eox-drawtools {
          display: block;
          width: 100%;
        }
      `,e.shadowRoot.appendChild(r)}const d=()=>{var f;const r=(f=e==null?void 0:e.shadowRoot)==null?void 0:f.querySelector("eox-drawtools");if(r&&r.shadowRoot&&!r.shadowRoot.getElementById("eodash-drawtools-indent-style")){const v=document.createElement("style");return v.id="eodash-drawtools-indent-style",v.textContent=`
            eox-drawtools-controller {
              display: flex;
              justify-content: flex-end; /* Push buttons to the right */
              min-height: 40px;
              width: 100%;
            }
            eox-drawtools-list {
              display: block;
              margin-top: 10px;
              width: 100%;
            }
          `,r.shadowRoot.appendChild(v),!0}return!1};if(!d()){const r=new MutationObserver(()=>{d()&&r.disconnect()});r.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const p=P(()=>{var e;return(e=k.value)==null?void 0:e.links.filter(o=>o.endpoint==="eoxhub_workspaces").length}),m=x(!1),t=x(!1),a=x(!1),c=x([]),u=P(()=>!t.value&&!!i.value&&!!l.value),{selectedStac:k,selectedCompareStac:w}=A(U()),h=s.enableCompare?w:k,b=s.enableCompare?K:z,j=s.enableCompare?F:q,R=s.enableCompare?$:ee,D=P(()=>{var e;return j.value+((e=b.value)==null?void 0:e.id)+JSON.stringify(i.value)});fe({selectedStac:h,mapElement:b,jsonformSchema:i,isProcessed:n,processResults:c,loading:m,isPolling:a});const N=()=>{c.value.forEach(e=>{var d;if(!e)return;let o="";typeof e=="string"?(o=e.includes("/")?e.split("/").pop()??"":e,o=o.includes("?")?o.split("?")[0]:o):o=((d=h.value)==null?void 0:d.id)+"_process_results.json",ie(o,e)})},B=async()=>{var r;if(ne(i.value).some(f=>{var v,_;return Array.isArray((v=l.value)==null?void 0:v.value[f])&&!((_=l.value)!=null&&_.value[f].length)})){n.value=!1;const f=s.enableCompare?Y:Z;f.value=null;return}const d=(r=l.value)==null?void 0:r.editor.validate();if(d!=null&&d.length){console.warn("[eodash] Form validation failed",d);return}c.value=[],await se({jobs:R,selectedStac:h,jsonformEl:l,jsonformSchema:i,loading:m,isPolling:a,processResults:c,mapElement:b.value}),n.value=!0,p.value&&re(R,j.value)};return he(t,l,i,B),(e,o)=>(y(),E("div",ye,[ce("div",xe,[pe(oe,{"map-element":C(b),"enable-compare":s.enableCompare},null,8,["map-element","enable-compare"]),i.value?(y(),E("eox-jsonform",{key:D.value,ref_key:"jsonformEl",ref:l,".schema":i.value},null,40,ge)):g("v-if",!0),C(M)?g("v-if",!0):(y(),L(te,{key:1,"vega-embed-options":s.vegaEmbedOptions,"enable-compare":s.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),u.value||c.value.length&&n.value&&!p.value?(y(),E("div",we,[u.value?(y(),L(I,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[C(G)],onClick:B,density:"comfortable",size:"small"},{default:T(()=>[...o[0]||(o[0]=[J(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):g("v-if",!0),c.value.length&&n.value&&!p.value?(y(),L(I,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[C(H)],onClick:N,size:"small",density:"comfortable"},{default:T(()=>[...o[1]||(o[1]=[J(" Download ",-1)])]),_:1},8,["append-icon"])):g("v-if",!0)])):g("v-if",!0)],512))}},no=V(be,[["styles",[ve]]]);export{no as default};
