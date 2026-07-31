import"./main.C8RWKuAU.js";import"./main.Czo491NC.js";import"./main.DBLmRIU6.js";import{_ as A,s as U,a as K,a3 as q,a4 as z,av as F,a2 as M,am as G,bO as H,V as T,bP as Q,a6 as W,ax as X,ay as Y,ap as Z,aq as $}from"./eo-dash.2nmtceeS.js";import{c as ee,j as te,P as oe}from"./ProcessList-Cw-HQcBB.BLD_lwJ5.js";import ae from"./EodashChart-XN0sbfJo.DtxjyZv_.js";import{i as J,u as se,h as re}from"./handling-B4s45_Zu.hW5pmyHQ.js";import{g as ne,u as ie,m as le}from"./async-FQLx9Sig.BrekAJB6.js";import{a4 as ce,q as B,o as g,c as R,j as pe,E as de,k as P,e as k,b as I,w as D,a as N,v as me,P as V,x as ue,p as w,h as O}from"./framework.BnhGnzLG.js";import"./lit-element.CIht5NN8.js";import"./addCommonStyleSheet.B0XXRREc.js";import"./sequential.BcvVcPN9.js";import"./orient2d.DArCjZZA.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.BMu_cjfm.js";import"./when.BR7zwNJC.js";import"./Object.DcVsVtBM.js";import"./getElement.COiK8z0h.js";import"./GeoJSON.DoKboHFD.js";import"./WKT.DsDt_o91.js";import"./browser.DZQx3rJ6.js";import"./commonjsHelpers.BosuxZz1.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./utils.BJtOAKhC.js";import"./index.CxojoGlr.js";import"./index.BIJR-IiI.js";import"./migrate.DkSLOl0d.js";import"./main.sj1zV-U7.js";import"./repeat.9Pq2frlr.js";import"./unsafe-html.RlppLW26.js";import"./map.DiiNQ3pp.js";import"./XYZ._S3Kc2FN.js";import"./index.BUIxO2d3.js";import"./index-CUMRgV2V.CAaTkDKz.js";import"./VTooltip-CN2hWikL.B-Cq9wXU.js";import"./forwardRefs-J0L8VwKK.TinGqboT.js";import"./transition-Bt7KRCNn.slrP7s6e.js";const fe=({selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o})=>{me(async()=>{var s;await J({enableCompare:((s=o.value)==null?void 0:s.id)==="compare",selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o.value})}),W(async s=>{var E,h,f;const c=((E=o.value)==null?void 0:E.id)==="compare",u=c?"compareLayers:updated":"layers:updated";if((c?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(s)){const y=await se({jsonformSchema:a.value,newLayers:c?X():Y(),enableCompare:c,mapElement:o.value});y&&(Object.values(y.properties??{}).some(b=>{var L,C;return(C=(L=b==null?void 0:b.options)==null?void 0:L.drawtools)==null?void 0:C.layerId})&&!((f=(h=o.value)==null?void 0:h.selectInteractions)!=null&&f.SelectLayerClickInteraction)&&(a.value=null,await V()),a.value=y)}s===u&&await J({enableCompare:c,selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o.value})})};function ve(r,a,i,l){const p=async o=>{await l()};B(i,o=>{var s;r.value=((s=o==null?void 0:o.options)==null?void 0:s.execute)||!1});const m=B([r,a],async([o,s],[c,u])=>{u&&u.removeEventListener("change",p),o&&s&&(s.removeEventListener("change",p),await V(),s.addEventListener("change",p))},{immediate:!0});ue(()=>{a.value&&a.value.removeEventListener("change",p),m()})}const he="eox-jsonform{padding:0 12px;min-height:0px;flex-shrink:0}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{height:100%;display:flex;flex-direction:column;overflow:hidden}.eodash-process-content{flex-grow:1;overflow-y:auto;display:flex;flex-direction:column}.eodash-process-actions{text-align:right;padding:4px 12px;flex-shrink:0;border-top:1px solid rgba(0,0,0,.1);background:inherit}",ye={ref:"container",class:"eodash-process-container"},xe={class:"eodash-process-content"},ge=[".schema"],we={key:0,class:"eodash-process-actions"},be={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(r){const a=w(!1),i=w(null),l=ce("jsonformEl");B(l,e=>{if(e&&e.shadowRoot){const t="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(t)){const n=document.createElement("style");n.id=t,n.textContent=`
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
      `,e.shadowRoot.appendChild(n)}const d=()=>{var v;const n=(v=e==null?void 0:e.shadowRoot)==null?void 0:v.querySelector("eox-drawtools");if(n&&n.shadowRoot&&!n.shadowRoot.getElementById("eodash-drawtools-indent-style")){const x=document.createElement("style");return x.id="eodash-drawtools-indent-style",x.textContent=`
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
          `,n.shadowRoot.appendChild(x),!0}return!1};if(!d()){const n=new MutationObserver(()=>{d()&&n.disconnect()});n.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const p=O(()=>{var e;return(e=S.value)==null?void 0:e.links.filter(t=>t.endpoint==="eoxhub_workspaces").length}),m=w(!1),o=w(!1),s=w(!1),c=w([]),u=O(()=>!o.value&&!!i.value&&!!l.value),{selectedStac:S,selectedCompareStac:E}=U(K()),h=r.enableCompare?E:S,f=r.enableCompare?q:z,y=r.enableCompare?F:M,j=r.enableCompare?ee:te,b=O(()=>{var e;return y.value+((e=f.value)==null?void 0:e.id)+JSON.stringify(i.value)});fe({selectedStac:h,mapElement:f,jsonformSchema:i,isProcessed:a,processResults:c,loading:m,isPolling:s});const L=()=>{c.value.forEach(e=>{var d;if(!e)return;let t="";typeof e=="string"?(t=e.includes("/")?e.split("/").pop()??"":e,t=t.includes("?")?t.split("?")[0]:t):t=((d=h.value)==null?void 0:d.id)+"_process_results.json",le(t,e)})},C=async()=>{var n;if(ne(i.value).some(v=>{var x,_;return Array.isArray((x=l.value)==null?void 0:x.value[v])&&!((_=l.value)!=null&&_.value[v].length)})){a.value=!1;const v=r.enableCompare?Z:$;v.value=null;return}const d=(n=l.value)==null?void 0:n.editor.validate();if(d!=null&&d.length){console.warn("[eodash] Form validation failed",d);return}c.value=[],await re({jobs:j,selectedStac:h,jsonformEl:l,jsonformSchema:i,loading:m,isPolling:s,processResults:c,mapElement:f.value}),a.value=!0,p.value&&ie(j,y.value)};return ve(o,l,i,C),(e,t)=>(g(),R("div",ye,[pe("div",xe,[de(oe,{"map-element":P(f),"enable-compare":r.enableCompare},null,8,["map-element","enable-compare"]),i.value?(g(),R("eox-jsonform",{key:b.value,ref_key:"jsonformEl",ref:l,".schema":i.value},null,40,ge)):k("v-if",!0),P(G)?k("v-if",!0):(g(),I(ae,{key:1,"vega-embed-options":r.vegaEmbedOptions,"enable-compare":r.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),u.value||c.value.length&&a.value&&!p.value?(g(),R("div",we,[u.value?(g(),I(T,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[P(H)],density:"comfortable",size:"small",onClick:C},{default:D(()=>[...t[0]||(t[0]=[N(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):k("v-if",!0),c.value.length&&a.value&&!p.value?(g(),I(T,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[P(Q)],size:"small",density:"comfortable",onClick:L},{default:D(()=>[...t[1]||(t[1]=[N(" Download ",-1)])]),_:1},8,["append-icon"])):k("v-if",!0)])):k("v-if",!0)],512))}},rt=A(be,[["styles",[he]]]);export{rt as default};
