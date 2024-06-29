import{s as d,o as n,c as i,d as r,u as p,w as u,F as m,Z as f,a as e,j as o,A as a,v as c,l as x}from"./app-Dwfu4F7T.js";import{_ as b}from"./AuthenticatedLayout-DcGfv-Ob.js";import"./AppLogoXeniaWebMB-DjESK-oQ.js";const y={class:"flex flex-col px-8 py-2"},v={class:"relative form__fieldset mb-16"},_=e("legend",{class:"font-montserrat text-xl font-bold"},"Billing info",-1),g=e("div",{class:"form__sub-legend mb-8 flex w-full justify-between"},[e("span",{class:"block"},"Please enter your billing info"),e("span",{class:"block"},"Step 1 of 5")],-1),h={class:"input-group mb-8 grid grid-cols-2 gap-8"},w={class:"relative"},A=e("label",{for:"first_name",class:"form__label absolute -top-2 left-0 font-montserrat font-semibold"}," First name: ",-1),V={class:"relative"},U=e("label",{for:"last_name",class:"absolute -top-2 left-0 font-montserrat font-semibold"}," Last name: ",-1),N={class:"relative"},k=e("label",{for:"email",class:"absolute -top-2 left-0 font-montserrat font-semibold"}," Email address: ",-1),z={class:"relative"},C=e("label",{for:"phone",class:"absolute -top-2 left-0 font-montserrat font-semibold"}," Phone number: ",-1),P={class:"relative"},B=e("label",{for:"address",class:"absolute -top-2 left-0 font-montserrat font-semibold"}," Address: ",-1),D={class:"relative"},M=e("label",{for:"city",class:"absolute -top-2 left-0 font-montserrat font-semibold"}," Town / City: ",-1),S={class:"relative"},j=e("label",{for:"country",class:"absolute -top-2 left-0 font-montserrat font-semibold"}," Country: ",-1),F={class:"relative"},T=e("label",{for:"zip",class:"absolute -top-2 left-0 font-montserrat font-semibold"}," ZIP / Postal code: ",-1),Z={class:"mt-3 inline-flex rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs"},E=e("label",{for:"zip",class:"ml-4 font-openSans text-[14px]"}," Ship to a different address? ",-1),I={class:"mt-8"},L=e("label",{for:"delivery_address",class:"absolute -top-2 left-0 font-montserrat font-semibold"}," Delivery address: ",-1),H={__name:"DraftApplicationCreate",props:{applications:{type:Object}},setup(O){const t=d({firstName:"",lastName:"",email:"",phone:"",address:"",city:"",country:"",zip:"",diffAddress:!1,deliveryAddress:"",comment:"",billMethod:null,paymentMethod:null,newsletter:!0,terms:!1});return(R,l)=>(n(),i(m,null,[r(p(f),{title:"Applications"}),r(b,null,{default:u(()=>[e("div",y,[e("form",null,[e("fieldset",v,[_,g,e("div",h,[e("div",w,[o(e("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>t.value.firstName=s),id:"first_name",name:"first_name",type:"text",class:"form__input relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400",placeholder:"Nina"},null,512),[[a,t.value.firstName]]),A]),e("div",V,[o(e("input",{"onUpdate:modelValue":l[1]||(l[1]=s=>t.value.lastName=s),id:"last_name",name:"last_name",type:"text",class:"relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400",placeholder:"Richi"},null,512),[[a,t.value.lastName]]),U]),e("div",N,[o(e("input",{"onUpdate:modelValue":l[2]||(l[2]=s=>t.value.email=s),id:"email",name:"email",type:"text",class:"relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400",placeholder:"nina@example.com"},null,512),[[a,t.value.email]]),k]),e("div",z,[o(e("input",{"onUpdate:modelValue":l[3]||(l[3]=s=>t.value.phone=s),id:"phone",name:"phone",type:"text",class:"relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400",placeholder:"+41 070 000 00 00"},null,512),[[a,t.value.phone]]),C]),e("div",P,[o(e("input",{"onUpdate:modelValue":l[4]||(l[4]=s=>t.value.address=s),id:"address",name:"address",type:"text",class:"relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400",placeholder:"Address"},null,512),[[a,t.value.address]]),B]),e("div",D,[o(e("input",{"onUpdate:modelValue":l[5]||(l[5]=s=>t.value.city=s),id:"city",name:"city",type:"text",class:"relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400",placeholder:"Town or city"},null,512),[[a,t.value.city]]),M]),e("div",S,[o(e("input",{"onUpdate:modelValue":l[6]||(l[6]=s=>t.value.country=s),id:"country",name:"country",type:"text",class:"relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400",placeholder:"Country"},null,512),[[a,t.value.country]]),j]),e("div",F,[o(e("input",{"onUpdate:modelValue":l[7]||(l[7]=s=>t.value.zip=s),id:"zip",name:"zip",type:"text",class:"relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400",placeholder:"Postal code or ZIP"},null,512),[[a,t.value.zip]]),T])]),e("div",Z,[o(e("input",{"onUpdate:modelValue":l[8]||(l[8]=s=>t.value.diffAddress=s),class:"relative border border-gray-300 bg-gray-50 checked:bg-amber-600 focus:text-amber-600",type:"checkbox",name:"diff_address"},null,512),[[c,t.value.diffAddress]]),E]),o(e("div",I,[o(e("input",{"onUpdate:modelValue":l[9]||(l[9]=s=>t.value.deliveryAddress=s),id:"delivery_address",name:"delivery_address",type:"text",class:"relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400",placeholder:"Different delivery address"},null,512),[[a,t.value.deliveryAddress]]),L],512),[[x,t.value.diffAddress===!0]])])])])]),_:1})],64))}};export{H as default};
