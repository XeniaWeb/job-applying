import{_ as u}from"./AuthenticatedLayout-DKU-ptKr.js";import{o,c,a as t,F as h,r as m,b as _,n as b,u as p,i as d,g as x,E as f,d as s,w as n,Z as w,e as y,t as r}from"./app-CQFkeTTw.js";import"./AppLogoXeniaWebMB-Dpb2Tka7.js";const v={key:0,"aria-label":"Page navigation example"},k={class:"flex justify-end items-center space-x-0.5 h-8 text-sm mt-2"},A={__name:"PaginationMenu",props:{meta:{type:Array}},setup(l){return(i,g)=>l.meta.links.length>3?(o(),c("nav",v,[t("div",k,[(o(!0),c(h,null,m(l.meta.links,(a,e)=>(o(),_(p(d),{href:a.url,key:e,disabled:a.url===null,class:b(["rounded-lg flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border bg-white border-gray-300 hover:bg-gray-200 hover:text-primary hover:border-primary-hover dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",{"!bg-primary hover:bg-primary-hover text-white hover:!text-gray-200":a.active,"bg-gray-50 hover:!bg-gray-50 text-gray-300 hover:text-gray-300 cursor-not-allowed":a.url===null}]),innerHTML:a.label},null,8,["href","disabled","class","innerHTML"]))),128))])])):x("",!0)}},C={class:"flex justify-between items-center"},V=t("h2",{class:"heading-2 my-0"},"Applications",-1),j={class:"flex items-center space-x-2 justify-between"},B={class:""},E={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4 pb-4"},N={class:"bg-white dark:bg-gray-800 overflow-x-auto shadow-sm sm:rounded-lg"},T={class:"relative overflow-x-auto min-w-max shadow-md sm:rounded-lg p-4"},D={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},L=t("caption",{class:"px-2 py-2 heading-3 my-0 text-left bg-white dark:text-white dark:bg-gray-800 mb-2"},[t("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},"Applications List"),t("p",{class:"mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"},"Browse a list of Applications you made, stay organized, get answers, and keep in touch.")],-1),$=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"px-1 py-2"}," Title "),t("th",{scope:"col",class:"px-1 py-2"}," Company "),t("th",{scope:"col",class:"px-1 py-2"}," Status "),t("th",{scope:"col",class:"px-1 py-2"}," Date apply "),t("th",{scope:"col",class:"px-1 py-2"}," City "),t("th",{scope:"col",class:"px-1 py-2"}," Contact "),t("th",{scope:"col",class:"px-1 py-2"}," Comment "),t("th",{scope:"col",class:"px-2 py-2"},[t("span",{class:"sr-only"},"Edit")]),t("th",{scope:"col",class:"px-2 py-2"},[t("span",{class:"sr-only"},"Delete")])])],-1),M={scope:"row",class:"px-2 py-1 max-w-[11rem] text-wrap font-medium text-gray-900 whitespace-nowrap dark:text-white"},S={class:"px-1 py-1 max-w-[10rem] text-wrap"},z={class:"px-1 py-1"},F={class:"px-1 py-1"},H={class:"px-1 py-1"},I={class:"px-1 py-1 max-w-[12rem] text-wrap"},P={key:0},O={key:1},Z={class:"px-1 py-1 max-w-[10rem] text-wrap"},q=t("td",{class:"px-1 py-1 text-right"},[t("a",{href:"#",class:"btn btn-small btn-outlined btn-primary"},"Edit")],-1),G=t("td",{class:"px-1 py-1 text-right"},[t("a",{href:"#",class:"btn btn-small btn-danger"},"Del")],-1),R={__name:"ApplicationIndex",props:{applications:{type:Object}},setup(l){return(i,g)=>{const a=f("font-awesome-icon");return o(),c(h,null,[s(p(w),{title:"Applications"}),s(u,null,{header:n(()=>[t("div",C,[V,t("div",j,[s(p(d),{class:"block btn btn-secondary btn-outlined",href:i.route("customer.employers.create")},{default:n(()=>[s(a,{icon:"plus"}),y(" Add Employer ")]),_:1},8,["href"]),s(p(d),{class:"inline-block btn btn-secondary btn-outlined",href:i.route("customer.vacancies.create")},{default:n(()=>[s(a,{icon:"plus"}),y(" Add Vacancy ")]),_:1},8,["href"]),s(p(d),{class:"inline-block btn btn-primary",href:i.route("customer.applications.create")},{default:n(()=>[s(a,{icon:"plus"}),y(" Add Application ")]),_:1},8,["href"])])])]),default:n(()=>[t("div",B,[t("div",E,[t("div",N,[t("div",T,[t("table",D,[L,$,t("tbody",null,[(o(!0),c(h,null,m(l.applications.data,e=>(o(),c("tr",{key:e.applyId,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[t("th",M,r(e.vacancyTitle),1),t("td",S,r(e.employerName),1),t("td",z,r(e.statusValueShort),1),t("td",F,r(e.dateApply),1),t("td",H,r(e.vacancyCity),1),t("td",I,[e.contact?(o(),c("p",P,r(e.contact),1)):x("",!0),e.employerContact?(o(),c("p",O,r(e.employerContact),1)):x("",!0)]),t("td",Z,r(e.comment),1),q,G]))),128))])])])]),s(A,{meta:l.applications.meta},null,8,["meta"])])])]),_:1})],64)}}};export{R as default};
