import{h as l,j as n,v as d,o as p,f as i}from"./app-sUdRIRSg.js";const m=["value"],k={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(e,{emit:a}){const c=a,s=e,t=l({get(){return s.checked},set(o){c("update:checked",o)}});return(o,r)=>n((p(),i("input",{type:"checkbox",value:e.value,"onUpdate:modelValue":r[0]||(r[0]=u=>t.value=u),class:"rounded border-gray-300 text-primary shadow-sm focus:ring-primary"},null,8,m)),[[d,t.value]])}};export{k as _};
