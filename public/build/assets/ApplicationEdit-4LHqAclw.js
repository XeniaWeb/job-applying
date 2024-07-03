import{T as g,E as b,o as h,c as w,d as o,u as e,w as d,F as k,Z as V,a as t,t as i,i as C,e as r,f as A,j as u,A as _,n as E,I,G as T,H as j}from"./app-BtOgwIGa.js";import{_ as p,a as y,b as m}from"./TextInput-CXlNUAt0.js";import{_ as N}from"./AuthenticatedLayout-CC6gd8l2.js";import{_ as S}from"./PrimaryButton-DnbjvY7N.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AppLogoXeniaWebMB-3oVHTBda.js";import"./AppButton-CRhWbm7A.js";const B=n=>(T("data-v-0767a485"),n=n(),j(),n),D={class:"flex items-center justify-between"},U={class:"heading-2 my-0"},F={class:"flex items-center justify-between space-x-2"},M={class:""},q={class:"mx-auto mt-4 max-w-7xl pb-4 sm:px-6 lg:px-8"},z={class:"overflow-x-auto bg-white shadow-sm sm:rounded-lg dark:bg-gray-800"},G={class:"relative min-w-max overflow-x-auto p-4 shadow-md sm:rounded-lg"},H={class:"flex flex-col px-8 py-2"},L={class:"border-b pb-4"},O={class:"heading-3 text-primary-focus"},Z={class:"mb-2 mb-4 flex w-full justify-between border-b pb-1 text-gray-700 dark:text-gray-200"},J={class:"block"},K={class:"accent"},P={class:"accent"},Q=B(()=>t("span",{class:"block"},null,-1)),R={class:"grid grid-cols-1 gap-4 md:grid-cols-2"},W={class:"accent ml-2"},X={class:"col-span-2"},Y={class:"mt-4"},tt={__name:"ApplicationEdit",props:{application:{type:Object,required:!0}},setup(n){const s=n,a=g({id:s.application.data.id,contact:s.application.data.contact,text:s.application.data.text,comment:s.application.data.comment,status:s.application.data.status,date_apply:s.application.data.dateApply,created_at:s.application.data.createdAt,vacancyTitle:s.application.data.vacancyTitle,vacancyId:s.application.data.vacancyId,vacancyCity:s.application.data.vacancyCity,employerName:s.application.data.employerName}),f=()=>{I.put(route("customer.applications.update",a.id),a)};return(v,l)=>{const x=b("font-awesome-icon");return h(),w(k,null,[o(e(V),{title:"Edit Application"}),o(N,null,{header:d(()=>[t("div",D,[t("h2",U,"Edit Application #"+i(e(a).vacancyId),1),t("div",F,[o(e(C),{class:"btn btn-secondary btn-outlined block",href:v.route("customer.applications.index")},{default:d(()=>[o(x,{icon:"arrow-left-long",enctype:"multipart/form-data"}),r(" Back to List ")]),_:1},8,["href"])])])]),default:d(()=>[t("div",M,[t("div",q,[t("div",z,[t("div",G,[t("div",H,[t("form",{onSubmit:A(f,["prevent"]),class:"min-h-screen"},[t("fieldset",L,[t("legend",O,"Application for "+i(e(a).vacancyTitle),1),t("div",Z,[t("span",J,[r("Company: "),t("span",K,i(e(a).employerName),1),r(", City: "),t("span",P,i(e(a).vacancyCity),1)]),Q]),t("div",R,[t("div",null,[o(p,{for:"contact",value:"Contact"}),o(y,{id:"contact",type:"text",class:"block w-full",modelValue:e(a).contact,"onUpdate:modelValue":l[0]||(l[0]=c=>e(a).contact=c),autocomplete:"on"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(a).errors.contact},null,8,["message"])]),t("div",null,[o(p,{for:"date_apply"},{default:d(()=>[r("Date of applying: "),t("span",W,i(e(a).date_apply),1)]),_:1}),u(t("input",{id:"date_apply",type:"date",class:"block w-full","onUpdate:modelValue":l[1]||(l[1]=c=>e(a).date_apply=c)},null,512),[[_,e(a).date_apply]]),o(m,{class:"mt-2",message:e(a).errors.date_apply},null,8,["message"])]),t("div",null,[o(p,{for:"comment",value:"Comment"}),o(y,{id:"comment",type:"text",class:"mt-1 block w-full",modelValue:e(a).comment,"onUpdate:modelValue":l[2]||(l[2]=c=>e(a).comment=c),autocomplete:"on",placeholder:"Enter your comment text..."},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(a).errors.comment},null,8,["message"])]),t("div",X,[o(p,{for:"apply-text",value:"Text of cover letter"}),u(t("textarea",{rows:"5",id:"apply-text",type:"text",class:"block w-full rounded-md border-gray-300 placeholder-gray-300 shadow-sm transition duration-150 ease-in-out hover:border-gray-400 focus:border-primary focus:ring-primary dark:border-gray-800 dark:bg-gray-500 dark:text-gray-100 dark:placeholder-gray-400 dark:hover:border-gray-200","onUpdate:modelValue":l[3]||(l[3]=c=>e(a).text=c),autocomplete:"on",placeholder:"Enter your cover letter text..."},null,512),[[_,e(a).text]]),o(m,{class:"mt-2",message:e(a).errors.text},null,8,["message"])])])]),t("div",Y,[o(S,{class:E(["flex w-full justify-center md:w-auto",{"opacity-25":e(a).processing}]),disabled:e(a).processing,label:"Save"},null,8,["class","disabled"])])],32)])])])])])]),_:1})],64)}}},it=$(tt,[["__scopeId","data-v-0767a485"]]);export{it as default};
