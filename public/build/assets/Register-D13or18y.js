import{T as f,o as p,b as _,w as d,d as o,u as a,Z as g,a as e,f as w,e as m,n as h,i as x}from"./app-Dwfu4F7T.js";import{_ as v}from"./Checkbox-Di8YZqVw.js";import{_ as b}from"./AppGuestLayout-CNnkQjDJ.js";import{_ as r,a as i,b as n}from"./TextInput-B3jAYXKF.js";import{_ as y}from"./PrimaryButton-DnpiL3Ku.js";import"./AppLogoXeniaWebMB-DjESK-oQ.js";import"./AppButton-C0Spxifx.js";const k={class:"flex items-center p-6 bg-gray-50 dark:bg-gray-900"},V={class:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"},j={class:"flex flex-col overflow-y-auto md:flex-row"},$=e("div",{class:"h-32 md:h-auto md:w-1/2"},[e("img",{"aria-hidden":"true",class:"object-cover w-full h-full dark:hidden",src:"/images/auth-img/create-account-office.jpeg",alt:"Office"}),e("img",{"aria-hidden":"true",class:"hidden object-cover w-full h-full dark:block",src:"/images/auth-img/create-account-office-dark.jpeg",alt:"Office"})],-1),C={class:"flex items-center justify-center p-6 sm:p-12 md:w-1/2"},U={class:"w-full"},q=e("h1",{class:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"}," Create account ",-1),N={class:"mt-4"},B={class:"mt-4"},I={class:"mt-4"},O={class:"block mt-4"},P={class:"flex items-center"},R=e("span",{class:"ms-2 text-sm text-primary hover:text-lime-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:text-lime-500"},[m(" I agree to the "),e("span",{class:"underline cursor-pointer"},"privacy policy")],-1),T={class:"mt-4"},z=e("hr",{class:"mt-8"},null,-1),A={class:"mt-4"},H={__name:"Register",setup(E){const s=f({name:"",email:"",password:"",password_confirmation:"",agree:!1}),c=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(u,t)=>(p(),_(b,null,{default:d(()=>[o(a(g),{title:"Register"}),e("div",k,[e("div",V,[e("div",j,[$,e("div",C,[e("div",U,[q,e("form",{onSubmit:w(c,["prevent"])},[e("div",null,[o(r,{for:"name",value:"Name"}),o(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:a(s).name,"onUpdate:modelValue":t[0]||(t[0]=l=>a(s).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(n,{class:"mt-2",message:a(s).errors.name},null,8,["message"])]),e("div",N,[o(r,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(s).email,"onUpdate:modelValue":t[1]||(t[1]=l=>a(s).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),o(n,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),e("div",B,[o(r,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":t[2]||(t[2]=l=>a(s).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(n,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",I,[o(r,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:a(s).password_confirmation,"onUpdate:modelValue":t[3]||(t[3]=l=>a(s).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(n,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),e("div",O,[e("label",P,[o(v,{name:"remember",checked:a(s).agree,"onUpdate:checked":t[4]||(t[4]=l=>a(s).agree=l)},null,8,["checked"]),R])]),e("div",T,[o(y,{class:h(["flex justify-center w-full",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:d(()=>[m(" Create account ")]),_:1},8,["class","disabled"])]),z,e("p",A,[o(a(x),{href:u.route("login"),class:"text-base text-primary hover:text-lime-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:text-lime-500 hover:underline"},{default:d(()=>[m(" Already have an account? LogIn ")]),_:1},8,["href"])])],32)])])])])])]),_:1}))}};export{H as default};