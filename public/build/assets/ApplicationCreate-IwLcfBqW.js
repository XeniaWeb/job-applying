import{T as v,m,o as g,c as x,d as o,u as t,w as d,F as b,Z as w,a as e,i as h,e as V,t as k,f as C,j as S,p as A,n as j,q as N,s as U}from"./app-D1au_eOq.js";import{_ as r,b as c,a as p}from"./TextInput-D2Nf_JIk.js";import{_ as $}from"./AuthenticatedLayout-EQpA4-79.js";import{_ as B}from"./PrimaryButton---SDqx5i.js";import{C as D}from"./index.es-p8IYtbx6.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AppLogoXeniaWebMB-BTYz9EqG.js";import"./AppButton-BI0VfTSm.js";const i=n=>(N("data-v-44d658cf"),n=n(),U(),n),T={class:"flex items-center justify-between"},E=i(()=>e("h2",{class:"heading-2 my-0"},"New Application",-1)),P={class:"flex items-center justify-between space-x-2"},q={class:""},F={class:"mx-auto mt-4 max-w-7xl pb-4 sm:px-6 lg:px-8"},M={class:"overflow-x-auto bg-white shadow-sm sm:rounded-lg dark:bg-gray-800"},z={class:"relative min-w-max overflow-x-auto p-4 shadow-md sm:rounded-lg"},L={class:"flex flex-col px-8 py-2"},O={class:"border-b pb-4"},Z=i(()=>e("legend",{class:"heading-3"},"Add new Application",-1)),G=i(()=>e("div",{class:"mb-2 mb-4 flex w-full justify-between border-b pb-1 text-gray-700 dark:text-gray-200"},[e("span",{class:"block"},"Please enter info"),e("span",{class:"block"},"Step 1 of 1")],-1)),H={class:"grid grid-cols-1 gap-4 md:grid-cols-2"},J={class:""},K={class:"col-span-2"},Q={class:"mt-4"},R={__name:"ApplicationCreate",props:{vacancies:{type:Object,required:!0},locale:{type:String}},setup(n){const a=v({vacancy_id:null,contact:"",text:"",comment:"",status:"draft",date_apply:""}),u=()=>{a.post(route("customer.applications.store"))};return(_,s)=>{const f=m("font-awesome-icon"),y=m("VueDatePicker");return g(),x(b,null,[o(t(w),{title:"New Application"}),o($,null,{header:d(()=>[e("div",T,[E,e("div",P,[o(t(h),{class:"btn btn-secondary btn-outlined block",href:_.route("customer.applications.index")},{default:d(()=>[o(f,{icon:"arrow-left-long",enctype:"multipart/form-data"}),V(" Back to List ")]),_:1},8,["href"])])])]),default:d(()=>[e("div",q,[e("pre",null,k(t(a)),1),e("div",F,[e("div",M,[e("div",z,[e("div",L,[e("form",{onSubmit:C(u,["prevent"]),class:"min-h-screen"},[e("fieldset",O,[Z,G,e("div",H,[e("div",J,[o(r,{for:"vacancy_id",value:"Vacancies"}),o(t(D),{id:"vacancy_id",modelValue:t(a).vacancy_id,"onUpdate:modelValue":s[0]||(s[0]=l=>t(a).vacancy_id=l),options:n.vacancies.data},null,8,["modelValue","options"]),o(c,{class:"mt-2",message:t(a).errors.vacancy_id},null,8,["message"])]),e("div",null,[o(r,{for:"contact",value:"Contact"}),o(p,{id:"contact",type:"text",class:"block w-full",modelValue:t(a).contact,"onUpdate:modelValue":s[1]||(s[1]=l=>t(a).contact=l),autocomplete:"on"},null,8,["modelValue"]),o(c,{class:"mt-2",message:t(a).errors.contact},null,8,["message"])]),o(y,{modelValue:t(a).date_apply,"onUpdate:modelValue":s[2]||(s[2]=l=>t(a).date_apply=l)},null,8,["modelValue"]),e("div",null,[o(r,{for:"comment",value:"Comment"}),o(p,{id:"comment",type:"text",class:"mt-1 block w-full",modelValue:t(a).comment,"onUpdate:modelValue":s[3]||(s[3]=l=>t(a).comment=l),autocomplete:"on",placeholder:"Enter your comment text..."},null,8,["modelValue"]),o(c,{class:"mt-2",message:t(a).errors.comment},null,8,["message"])]),e("div",K,[o(r,{for:"apply-text",value:"Text of cover letter"}),S(e("textarea",{rows:"5",id:"apply-text",type:"text",class:"block w-full rounded-md border-gray-300 placeholder-gray-300 shadow-sm transition duration-150 ease-in-out hover:border-gray-400 focus:border-primary focus:ring-primary dark:border-gray-800 dark:bg-gray-500 dark:text-gray-100 dark:placeholder-gray-400 dark:hover:border-gray-200","onUpdate:modelValue":s[4]||(s[4]=l=>t(a).text=l),autocomplete:"on",placeholder:"Enter your cover letter text..."},null,512),[[A,t(a).text]]),o(c,{class:"mt-2",message:t(a).errors.text},null,8,["message"])])])]),e("div",Q,[o(B,{class:j(["flex w-full justify-center md:w-auto",{"opacity-25":t(a).processing}]),disabled:t(a).processing,label:"Save"},null,8,["class","disabled"])])],32)])])])])])]),_:1})],64)}}},le=I(R,[["__scopeId","data-v-44d658cf"]]);export{le as default};
