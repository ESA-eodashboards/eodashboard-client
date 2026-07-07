import"./main.-Ss7-DpR.js";import"./main.B922bHoL.js";import"./main.Bdac9cAa.js";import{_ as A,s as U,a as K,a2 as z,a3 as F,at as q,a5 as M,ak as G,bH as H,V as T,bI as Q,a6 as W,av as X,aw as Y,an as Z,ao as $}from"./eo-dash.BWyZulPR.js";import{c as ee,j as te,P as oe}from"./ProcessList-Cvc9pAq-.qiOzQtl-.js";import ae from"./EodashChart-Buf-uHHc.CYHQ8Uf2.js";import{i as J,u as se,h as ne}from"./handling-CYV_VXUJ.Cx8JCV0x.js";import{g as re,u as ie,m as le}from"./async-BaE_P8gt.Do5IGPo-.js";import{a4 as ce,q as O,o as g,c as I,j as pe,E as de,k as S,e as k,b as R,w as D,a as N,v as me,P as V,x as ue,p as w,h as B}from"./framework.BWF56XHM.js";import"./lit-element.CIht5NN8.js";import"./addCommonStyleSheet.BXNdjf7I.js";import"./sequential.BcvVcPN9.js";import"./orient2d.DArCjZZA.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.BMu_cjfm.js";import"./when.BR7zwNJC.js";import"./Object.DcVsVtBM.js";import"./getElement.COiK8z0h.js";import"./GeoJSON.DoKboHFD.js";import"./WKT.DsDt_o91.js";import"./purify.es.D1kQrx-r.js";import"./commonjsHelpers.BosuxZz1.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./utils.BJtOAKhC.js";import"./index.CxojoGlr.js";import"./index.BIJR-IiI.js";import"./item.Tx4UuQzI.js";import"./main.CY0i5uwm.js";import"./repeat.9Pq2frlr.js";import"./unsafe-html.RlppLW26.js";import"./map.DiiNQ3pp.js";import"./XYZ._S3Kc2FN.js";import"./index.BUIxO2d3.js";import"./index-CcQWmq6V.CGsEAfdt.js";import"./VTooltip-DGOqgu0j.kUJnXS1K.js";import"./forwardRefs-C8zWrFkj.DhivQ95H.js";import"./transition-DkiyODDS.D4cBivWH.js";const fe=({selectedStac:n,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o})=>{me(async()=>{var s;await J({enableCompare:((s=o.value)==null?void 0:s.id)==="compare",selectedStac:n,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o.value})}),W(async s=>{var E,h,f;const c=((E=o.value)==null?void 0:E.id)==="compare",u=c?"compareLayers:updated":"layers:updated";if((c?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(s)){const y=await se({jsonformSchema:a.value,newLayers:c?X():Y(),enableCompare:c,mapElement:o.value});y&&(Object.values(y.properties??{}).some(b=>{var L,C;return(C=(L=b==null?void 0:b.options)==null?void 0:L.drawtools)==null?void 0:C.layerId})&&!((f=(h=o.value)==null?void 0:h.selectInteractions)!=null&&f.SelectLayerClickInteraction)&&(a.value=null,await V()),a.value=y)}s===u&&await J({enableCompare:c,selectedStac:n,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o.value})})};function ve(n,a,i,l){const p=async o=>{await l()};O(i,o=>{var s;n.value=((s=o==null?void 0:o.options)==null?void 0:s.execute)||!1});const m=O([n,a],async([o,s],[c,u])=>{u&&u.removeEventListener("change",p),o&&s&&(s.removeEventListener("change",p),await V(),s.addEventListener("change",p))},{immediate:!0});ue(()=>{a.value&&a.value.removeEventListener("change",p),m()})}const he="eox-jsonform{padding:0 12px;min-height:0px;flex-shrink:0}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{height:100%;display:flex;flex-direction:column;overflow:hidden}.eodash-process-content{flex-grow:1;overflow-y:auto;display:flex;flex-direction:column}.eodash-process-actions{text-align:right;padding:4px 12px;flex-shrink:0;border-top:1px solid rgba(0,0,0,.1);background:inherit}",ye={ref:"container",class:"eodash-process-container"},xe={class:"eodash-process-content"},ge=[".schema"],we={key:0,class:"eodash-process-actions"},be={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(n){const a=w(!1),i=w(null),l=ce("jsonformEl");O(l,e=>{if(e&&e.shadowRoot){const t="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(t)){const r=document.createElement("style");r.id=t,r.textContent=`
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
      `,e.shadowRoot.appendChild(r)}const d=()=>{var v;const r=(v=e==null?void 0:e.shadowRoot)==null?void 0:v.querySelector("eox-drawtools");if(r&&r.shadowRoot&&!r.shadowRoot.getElementById("eodash-drawtools-indent-style")){const x=document.createElement("style");return x.id="eodash-drawtools-indent-style",x.textContent=`
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
          `,r.shadowRoot.appendChild(x),!0}return!1};if(!d()){const r=new MutationObserver(()=>{d()&&r.disconnect()});r.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const p=B(()=>{var e;return(e=P.value)==null?void 0:e.links.filter(t=>t.endpoint==="eoxhub_workspaces").length}),m=w(!1),o=w(!1),s=w(!1),c=w([]),u=B(()=>!o.value&&!!i.value&&!!l.value),{selectedStac:P,selectedCompareStac:E}=U(K()),h=n.enableCompare?E:P,f=n.enableCompare?z:F,y=n.enableCompare?q:M,j=n.enableCompare?ee:te,b=B(()=>{var e;return y.value+((e=f.value)==null?void 0:e.id)+JSON.stringify(i.value)});fe({selectedStac:h,mapElement:f,jsonformSchema:i,isProcessed:a,processResults:c,loading:m,isPolling:s});const L=()=>{c.value.forEach(e=>{var d;if(!e)return;let t="";typeof e=="string"?(t=e.includes("/")?e.split("/").pop()??"":e,t=t.includes("?")?t.split("?")[0]:t):t=((d=h.value)==null?void 0:d.id)+"_process_results.json",le(t,e)})},C=async()=>{var r;if(re(i.value).some(v=>{var x,_;return Array.isArray((x=l.value)==null?void 0:x.value[v])&&!((_=l.value)!=null&&_.value[v].length)})){a.value=!1;const v=n.enableCompare?Z:$;v.value=null;return}const d=(r=l.value)==null?void 0:r.editor.validate();if(d!=null&&d.length){console.warn("[eodash] Form validation failed",d);return}c.value=[],await ne({jobs:j,selectedStac:h,jsonformEl:l,jsonformSchema:i,loading:m,isPolling:s,processResults:c,mapElement:f.value}),a.value=!0,p.value&&ie(j,y.value)};return ve(o,l,i,C),(e,t)=>(g(),I("div",ye,[pe("div",xe,[de(oe,{"map-element":S(f),"enable-compare":n.enableCompare},null,8,["map-element","enable-compare"]),i.value?(g(),I("eox-jsonform",{key:b.value,ref_key:"jsonformEl",ref:l,".schema":i.value},null,40,ge)):k("v-if",!0),S(G)?k("v-if",!0):(g(),R(ae,{key:1,"vega-embed-options":n.vegaEmbedOptions,"enable-compare":n.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),u.value||c.value.length&&a.value&&!p.value?(g(),I("div",we,[u.value?(g(),R(T,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[S(H)],onClick:C,density:"comfortable",size:"small"},{default:D(()=>[...t[0]||(t[0]=[N(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):k("v-if",!0),c.value.length&&a.value&&!p.value?(g(),R(T,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[S(Q)],onClick:L,size:"small",density:"comfortable"},{default:D(()=>[...t[1]||(t[1]=[N(" Download ",-1)])]),_:1},8,["append-icon"])):k("v-if",!0)])):k("v-if",!0)],512))}},nt=A(be,[["styles",[he]]]);export{nt as default};
