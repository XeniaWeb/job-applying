import{_}from"./AuthenticatedLayout-EQpA4-79.js";import{m as h,o as r,c as m,d as c,u as n,w as i,F as u,Z as f,a as t,t as s,i as d,e,q as v,s as g}from"./app-D1au_eOq.js";import{_ as x}from"./PrimaryButton---SDqx5i.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AppLogoXeniaWebMB-BTYz9EqG.js";import"./AppButton-BI0VfTSm.js";const o=a=>(v("data-v-63d5e873"),a=a(),g(),a),b={class:"flex items-center justify-between"},w={class:"heading-2 my-0"},k={class:"flex items-center justify-between space-x-2"},C={class:""},A={class:"mx-auto mt-4 max-w-7xl pb-4 sm:px-6 lg:px-8"},S={class:"overflow-x-auto bg-white shadow-sm sm:rounded-lg dark:bg-gray-800"},I={class:"relative overflow-x-auto p-4 shadow-md sm:rounded-lg"},V={class:"flex flex-col px-8 py-2"},j={class:"border-b pb-4"},B=o(()=>t("h3",{class:"heading-3"},"This Application",-1)),N={class:"mb-2 mb-4 border-b pb-1 text-gray-700 dark:text-gray-200"},D={class:"block"},T={class:"accent"},q={class:"block"},E={class:"accent"},F={class:"grid grid-cols-1 gap-4 md:grid-cols-2"},$={class:""},L=o(()=>t("span",{class:"heading-6"},"Vacancy: ",-1)),O={class:""},P=o(()=>t("span",{class:"heading-6"},"Contact: ",-1)),Z={class:""},z=o(()=>t("span",{class:"heading-6"},"Date Apply: ",-1)),G={class:""},H=o(()=>t("span",{class:"heading-6"},"Status: ",-1)),J={class:""},K=o(()=>t("span",{class:"heading-6"},"Comment: ",-1)),M={class:"col-span-2"},Q=o(()=>t("div",{class:"heading-6"},"Cover letter text:",-1)),R=o(()=>t("div",null,[t("p",null,"Documents & Photos")],-1)),U={class:"mt-4"},W={__name:"ApplicationShow",props:{application:{type:Object,required:!0}},setup(a){return(l,X)=>{const p=h("font-awesome-icon");return r(),m(u,null,[c(n(f),{title:"Application"}),c(_,null,{header:i(()=>[t("div",b,[t("h2",w,"Application #"+s(a.application.data.id),1),t("div",k,[c(n(d),{class:"btn btn-secondary btn-outlined block",href:l.route("customer.applications.index")},{default:i(()=>[c(p,{icon:"arrow-left-long",enctype:"multipart/form-data"}),e(" Back to List ")]),_:1},8,["href"])])])]),default:i(()=>[t("div",C,[t("div",A,[t("div",S,[t("div",I,[t("div",V,[t("div",j,[B,t("div",N,[t("span",D,[e("Company: "),t("span",T,s(a.application.data.employerName),1)]),t("span",q,[e("City: "),t("span",E,s(a.application.data.vacancyCity),1)])]),t("div",F,[t("div",$,[t("p",null,[L,e(" #"+s(a.application.data.vacancyId)+" "+s(a.application.data.vacancyTitle),1)])]),t("div",O,[t("p",null,[P,e(" "+s(a.application.data.contact),1)])]),t("div",Z,[t("p",null,[z,e(" "+s(a.application.data.dateApply),1)])]),t("div",G,[t("p",null,[H,e(" "+s(a.application.data.statusValue),1)])]),t("div",J,[t("p",null,[K,e(" "+s(a.application.data.comment),1)])]),t("div",M,[Q,t("p",null,s(a.application.data.text),1)]),R])]),t("div",U,[c(n(d),{href:l.route("customer.applications.edit",a.application.data.id)},{default:i(()=>[c(x,{class:"flex w-full justify-center md:w-auto",label:"Edit"})]),_:1},8,["href"])])])])])])])]),_:1})],64)}}},ct=y(W,[["__scopeId","data-v-63d5e873"]]);export{ct as default};
