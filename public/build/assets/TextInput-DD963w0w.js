import{j as u,q as c,o as t,f as s,b as i,t as l,r as m,B as p,p as _,l as f,C as g}from"./app-sUdRIRSg.js";const y={class:"text-sm text-danger-focus dark:text-danger-hover"},S={__name:"InputError",props:{message:{type:String}},setup(e){return(a,r)=>u((t(),s("div",null,[i("p",y,l(e.message),1)],512)),[[c,e.message]])}},v={class:"block font-medium text-sm text-gray-700 dark:text-gray-300"},x={key:0},b={key:1},V={__name:"InputLabel",props:{value:{type:String}},setup(e){return(a,r)=>(t(),s("label",v,[e.value?(t(),s("span",x,l(e.value),1)):(t(),s("span",b,[m(a.$slots,"default")]))]))}},B={__name:"TextInput",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:a}){const r=p(e,"modelValue"),o=_(null);return f(()=>{o.value.hasAttribute("autofocus")&&o.value.focus()}),a({focus:()=>o.value.focus()}),(h,n)=>u((t(),s("input",{class:"border-gray-300 dark:border-gray-800 dark:bg-gray-600 hover:border-gray-400 focus:border-primary focus:ring-primary rounded-md shadow-sm","onUpdate:modelValue":n[0]||(n[0]=d=>r.value=d),ref_key:"input",ref:o},null,512)),[[g,r.value]])}};export{V as _,B as a,S as b};
