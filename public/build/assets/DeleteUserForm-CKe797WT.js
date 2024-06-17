import{o as w,b as v,w as o,k as g,x as $,l as C,m as B,h as D,d as a,j as f,q as y,a as e,s as p,n as k,g as V,y as E,p as h,T as U,c as A,z as S,e as _,u as d,A as T}from"./app-CJi3UZS8.js";import{_ as N}from"./AppButton-jCH3g22R.js";import{_ as z,a as M,b as O}from"./TextInput-ChT7T-DE.js";import{_ as P}from"./SecondaryButton-DdP7Yphd.js";const x={__name:"DangerButton",setup(l){return(n,s)=>(w(),v(N,{color:"danger"},{default:o(()=>[g(n.$slots,"default")]),_:3}))}},W={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},j=e("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),F=[j],I={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(l,{emit:n}){const s=l,t=n;$(()=>s.show,()=>{s.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const i=()=>{s.closeable&&t("close")},r=u=>{u.key==="Escape"&&s.show&&i()};C(()=>document.addEventListener("keydown",r)),B(()=>{document.removeEventListener("keydown",r),document.body.style.overflow=null});const c=D(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(u,m)=>(w(),v(E,{to:"body"},[a(p,{"leave-active-class":"duration-200"},{default:o(()=>[f(e("div",W,[a(p,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:o(()=>[f(e("div",{class:"fixed inset-0 transform transition-all",onClick:i},F,512),[[y,l.show]])]),_:1}),a(p,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:o(()=>[f(e("div",{class:k(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",c.value])},[l.show?g(u.$slots,"default",{key:0}):V("",!0)],2),[[y,l.show]])]),_:3})],512),[[y,l.show]])]),_:3})]))}},K={class:"space-y-6"},L=e("header",null,[e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Delete Account"),e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),q={class:"p-6"},G=e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Are you sure you want to delete your account? ",-1),H=e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),J={class:"mt-6"},Q={class:"mt-6 flex justify-end"},ee={__name:"DeleteUserForm",setup(l){const n=h(!1),s=h(null),t=U({password:""}),i=()=>{n.value=!0,S(()=>s.value.focus())},r=()=>{t.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>s.value.focus(),onFinish:()=>t.reset()})},c=()=>{n.value=!1,t.reset()};return(u,m)=>(w(),A("section",K,[L,a(x,{onClick:i},{default:o(()=>[_("Delete Account")]),_:1}),a(I,{show:n.value,onClose:c},{default:o(()=>[e("div",q,[G,H,e("div",J,[a(z,{for:"password",value:"Password",class:"sr-only"}),a(M,{id:"password",ref_key:"passwordInput",ref:s,modelValue:d(t).password,"onUpdate:modelValue":m[0]||(m[0]=b=>d(t).password=b),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:T(r,["enter"])},null,8,["modelValue"]),a(O,{message:d(t).errors.password,class:"mt-2"},null,8,["message"])]),e("div",Q,[a(P,{onClick:c},{default:o(()=>[_(" Cancel ")]),_:1}),a(x,{class:k(["ms-3",{"opacity-25":d(t).processing}]),disabled:d(t).processing,onClick:r},{default:o(()=>[_(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{ee as default};
