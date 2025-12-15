import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as i}from"./utils-D-KgF5mV.js";import{B as xt}from"./button-7wqqdEkD.js";import{C as ft}from"./closeIcon-6bXNgUOm.js";import{c as d}from"./index-CGrAONsN.js";import{r as wt}from"./iframe-DPkNXRqw.js";import{M as a}from"./man-icon-CVV_XicK.js";import"./index-CVJC_e1g.js";const jt=r=>e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",...r,children:[e.jsx("path",{d:"M12 0V10C12 11.1046 11.1046 12 10 12H0L12 0Z"}),e.jsx("path",{d:"M11.6569 6.70711L10.9498 6L8.12132 8.82843L6.70711 7.41422L6 8.12132L8.12132 10.2426L11.6569 6.70711Z",fill:"#08121A"})]});jt.__docgenInfo={description:"",methods:[],displayName:"CheckIcon"};const yt=d("data-[state=disabled]:pointer-events-none",{variants:{color:{default:["bg-fill","data-[state=disabled]:bg-fill-dark-hover-active-disabled","data-[state=disabled]:text-disabled","border-border","data-[state=disabled]:border-border-disabled"],primary:["bg-primary/10","text-primary","data-[state=disabled]:text-primary-disabled","border-primary","data-[state=disabled]:border-primary-disabled"],destructive:["bg-danger/10","text-danger","data-[state=disabled]:text-danger-disabled","border-danger","data-[state=disabled]:border-danger-disabled"],abnormal:["bg-[#FFA800]/10","text-abnormal","data-[state=disabled]:text-abnormal-disabled","border-abnormal","data-[state=disabled]:border-abnormal-disabled"],success:["bg-[#00FFA8]/10","text-success","data-[state=disabled]:text-success-disabled","border-success","data-[state=disabled]:border-success-disabled"],warning:["bg-[#FFE500]/10","text-warning","data-[state=disabled]:text-warning-disabled","border-warning","data-[state=disabled]:border-warning-disabled"],offline:["bg-fill-emphasize","text-secondary","data-[state=disabled]:text-disabled","data-[state=disabled]:bg-fill-dark-hover-active-disabled","border-border","data-[state=disabled]:border-disabled"],blue:["bg-[#007AFF]/10","text-data-blue","data-[state=disabled]:text-[#315882]","border-data-blue","data-[state=disabled]:border-[#315882]"]},variant:{light:[],"light-line":["border"],line:["border","bg-transparent","data-[state=disabled]:bg-transparent"]},size:{md:["text-[13px] leading-[20px]","px-2 py-[1px]","rounded-sm"],sm:["text-[11px] leading-[16px]","px-1 py-[1px]","rounded-sm"],text:["text-[10px] leading-[11px]","px-1 py-[2px]","rounded-sm"]}}}),Ct=d("",{variants:{color:{default:["[&_svg]:text-secondary","data-[state=disabled]:[&_svg]:text-disabled"],primary:[],destructive:[],abnormal:[],success:[],warning:[],offline:[],blue:[]},size:{md:["[&_svg]:size-3"],sm:["[&_svg]:size-3"],text:["[&_svg]:size-2"]}}}),Dt=d("",{variants:{color:{default:["[&_svg]:text-secondary-information","data-[state=disabled]:[&_svg]:text-disabled"],primary:[],destructive:[],abnormal:[],success:[],warning:[],offline:[],blue:[]},size:{md:["[&_svg]:size-4"],sm:["[&_svg]:size-3"],text:["[&_svg]:size-2"]}}}),Lt=d("",{variants:{color:{default:[],primary:["text-primary","data-[state=disabled]:text-primary-disabled"],destructive:["text-danger","data-[state=disabled]:text-danger-disabled"],abnormal:["text-abnormal","data-[state=disabled]:text-abnormal-disabled"],success:["text-success","data-[state=disabled]:text-success-disabled"],warning:["text-warning","data-[state=disabled]:text-warning-disabled"],offline:[],blue:["text-data-blue","data-[state=disabled]:text-[#315882]"]}}});function s({variant:r="light",color:t="default",size:l="md",frontIcon:u,showClose:g=!1,closeIcon:n,disabled:c=!1,children:Re,className:We,checkabled:qe=!1,checked:Fe=!1}){const[It,Nt]=wt.useState(!1);return e.jsxs("div",{"data-state":c?"disabled":"enable",className:i("inline-flex flex-row items-center justify-start gap-2","cursor-pointer","relative",yt({variant:r,color:t,size:l}),We,It&&"hidden"),children:[u&&e.jsx("div",{"data-state":c?"disabled":"enable",className:i(Ct({color:t,size:l})),children:u}),e.jsx("div",{className:"line-clamp-1",children:Re}),g&&e.jsx(xt,{"data-state":c?"disabled":"enable",className:i(Dt({color:t,size:l})),variant:"transparent",size:"link",disabled:c,onClick:Tt=>{Tt.stopPropagation(),Nt(!0)},children:n||e.jsx(ft,{className:"size-4"})}),qe&&Fe&&e.jsx(jt,{"data-state":c?"disabled":"enable",className:i("absolute bottom-[-1px] right-[-1px]",Lt({color:t}))})]})}const St=d("data-[state=disabled]:pointer-events-none",{variants:{color:{default:["bg-fill","data-[state=disabled]:bg-fill-dark-hover-active-disabled","data-[state=disabled]:text-disabled"],primary:["bg-primary","text-text","data-[state=disabled]:bg-primary/10","data-[state=disabled]:text-primary-disabled"],destructive:["bg-danger","text-text-deep","data-[state=disabled]:bg-danger/10","data-[state=disabled]:text-danger-disabled"],abnormal:["bg-abnormal","text-text","data-[state=disabled]:bg-abnormal-light","data-[state=disabled]:text-abnormal-disabled"],success:["bg-success","text-text","data-[state=disabled]:bg-success-active","data-[state=disabled]:text-success-disabled"],warning:["bg-warning","text-text","data-[state=disabled]:bg-[#493e23]","data-[state=disabled]:text-warning-disabled"],offline:["bg-fill-emphasize","text-text-deep","data-[state=disabled]:text-disabled","data-[state=disabled]:bg-fill-dark-hover-active-disabled"],blue:["bg-data-blue","text-text","data-[state=disabled]:text-[#00264F]","data-[state=disabled]:bg-[#1D4A7B]"]},size:{md:["text-[13px] leading-[20px]","px-2 py-[1px]","rounded-sm"],sm:["text-[11px] leading-[16px]","px-1 py-[1px]","rounded-sm"],text:["text-[10px] leading-[11px]","px-1 py-[2px]","rounded-sm"]}}}),kt=d("",{variants:{color:{default:["[&_svg]:text-secondary-information","data-[state=disabled]:[&_svg]:text-disabled"],primary:[],destructive:[],abnormal:[],success:[],warning:[],offline:[],blue:[]},size:{md:["[&_svg]:size-3"],sm:["[&_svg]:size-3"],text:["[&_svg]:size-2"]}}}),Ht=d("",{variants:{color:{default:["[&_svg]:text-secondary-information","data-[state=disabled]:[&_svg]:text-disabled"],primary:[],destructive:[],abnormal:[],success:[],warning:[],offline:[],blue:[]},size:{md:["[&_svg]:size-4"],sm:["[&_svg]:size-3"],text:["[&_svg]:size-2"]}}});function o({color:r="default",size:t="md",frontIcon:l,showClose:u=!1,closeIcon:g,disabled:n=!1,children:c,className:Re}){const[We,qe]=wt.useState(!1);return e.jsxs("div",{"data-state":n?"disabled":"enable",className:i("inline-flex flex-row items-center justify-start gap-2","cursor-pointer",St({color:r,size:t}),Re,We&&"hidden"),children:[l&&e.jsx("div",{"data-state":n?"disabled":"enable",className:i(kt({color:r,size:t})),children:l}),e.jsx("div",{className:"line-clamp-1",children:c}),u&&e.jsx(xt,{"data-state":n?"disabled":"enable",className:i(Ht({color:r,size:t})),variant:"transparent",size:"link",disabled:n,onClick:Fe=>{Fe.stopPropagation(),qe(!0)},children:g||e.jsx(ft,{className:"size-4"})})]})}s.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{frontIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},showClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},closeIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checkabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:"'light'",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"HeavyTag",props:{frontIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},showClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},closeIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const Rt={title:"Components/Tag",tags:["autodocs"],component:s,argTypes:{}},m={args:{},render:()=>e.jsx("div",{className:"w-30",children:e.jsx(s,{children:"默认标签"})})},v={args:{showClose:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{showClose:r.showClose,children:"默认标签"})})},h={args:{showClose:!0,frontIcon:e.jsx(a,{className:"size-3"})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},p={args:{showClose:!0,frontIcon:e.jsx(a,{className:"size-3"}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},b={args:{showClose:!0,frontIcon:e.jsx(a,{className:"size-3"})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签,但是我要测试超长"})})},x={args:{variant:"light",color:"primary"},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},f={args:{variant:"light",color:"primary",showClose:!0,frontIcon:e.jsx(a,{className:"size-3"})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},w={args:{variant:"light",color:"primary",showClose:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},j={args:{variant:"light",color:"primary",showClose:!0,disabled:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},I={args:{variant:"light",color:"primary",showClose:!0,frontIcon:e.jsx(a,{}),size:"sm"},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},N={args:{variant:"light",color:"primary",showClose:!0,frontIcon:e.jsx(a,{}),size:"text"},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"onlyEnglish"})})},T={args:{variant:"light",color:"destructive",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},y={args:{variant:"light",color:"destructive",showClose:!0,disabled:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},C={args:{variant:"light",color:"abnormal",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},D={args:{variant:"light",color:"abnormal",showClose:!0,disabled:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},L={args:{variant:"light",color:"success",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},S={args:{variant:"light",color:"success",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},k={args:{variant:"light",color:"warning",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},H={args:{variant:"light",color:"warning",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},M={args:{variant:"light",color:"offline",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},z={args:{variant:"light",color:"offline",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},P={args:{variant:"light",color:"blue",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},B={args:{variant:"light",color:"blue",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},_={args:{variant:"light-line",color:"default",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},A={args:{variant:"light-line",color:"default",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},O={args:{variant:"light-line",color:"primary",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},V={args:{variant:"light-line",color:"primary",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},R={args:{variant:"light-line",color:"destructive",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},W={args:{variant:"light-line",color:"destructive",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},q={args:{variant:"light-line",color:"abnormal",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},F={args:{variant:"light-line",color:"abnormal",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},E={args:{variant:"light-line",color:"offline",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},Z={args:{variant:"light-line",color:"offline",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},G={args:{variant:"light-line",color:"blue",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},J={args:{variant:"light-line",color:"blue",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},K={args:{variant:"line",color:"default",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},Q={args:{variant:"line",color:"default",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},U={args:{variant:"line",color:"primary",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},X={args:{variant:"line",color:"primary",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},Y={args:{variant:"line",color:"destructive",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},$={args:{variant:"line",color:"destructive",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},ee={args:{variant:"line",color:"success",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},re={args:{variant:"line",color:"success",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},ae={args:{variant:"line",color:"abnormal",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},se={args:{variant:"line",color:"abnormal",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},oe={args:{variant:"line",color:"warning",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},te={args:{variant:"line",color:"warning",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},ne={args:{variant:"line",color:"offline",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},ce={args:{variant:"line",color:"offline",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},ie={args:{variant:"line",color:"blue",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},de={args:{variant:"line",color:"blue",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},le={args:{color:"default",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},ue={args:{color:"default",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},ge={args:{color:"primary",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},me={args:{color:"primary",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},ve={args:{color:"destructive",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},he={args:{color:"destructive",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},pe={args:{color:"success",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},be={args:{color:"success",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},xe={args:{color:"abnormal",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},fe={args:{color:"abnormal",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},we={args:{color:"warning",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},je={args:{color:"warning",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},Ie={args:{color:"offline",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},Ne={args:{color:"offline",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},Te={args:{color:"blue",showClose:!0,frontIcon:e.jsx(a,{})},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},ye={args:{color:"blue",showClose:!0,frontIcon:e.jsx(a,{}),disabled:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},Ce={args:{color:"blue",showClose:!0,frontIcon:e.jsx(a,{}),size:"sm"},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"默认标签"})})},De={args:{color:"blue",showClose:!0,frontIcon:e.jsx(a,{}),size:"text"},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(o,{...r,children:"onlyEnglish"})})},Le={args:{variant:"line",color:"primary",frontIcon:e.jsx(a,{}),checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},Se={args:{variant:"line",color:"primary",frontIcon:e.jsx(a,{}),disabled:!0,checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},ke={args:{variant:"line",color:"destructive",frontIcon:e.jsx(a,{}),checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},He={args:{variant:"line",color:"destructive",frontIcon:e.jsx(a,{}),disabled:!0,checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},Me={args:{variant:"line",color:"success",frontIcon:e.jsx(a,{}),checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},ze={args:{variant:"line",color:"success",frontIcon:e.jsx(a,{}),disabled:!0,checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},Pe={args:{variant:"line",color:"abnormal",frontIcon:e.jsx(a,{}),checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},Be={args:{variant:"line",color:"abnormal",frontIcon:e.jsx(a,{}),disabled:!0,checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},_e={args:{variant:"line",color:"warning",frontIcon:e.jsx(a,{}),checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},Ae={args:{variant:"line",color:"warning",frontIcon:e.jsx(a,{}),disabled:!0,checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},Oe={args:{variant:"line",color:"blue",frontIcon:e.jsx(a,{}),checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})},Ve={args:{variant:"line",color:"blue",frontIcon:e.jsx(a,{}),disabled:!0,checkabled:!0,checked:!0},render:r=>e.jsx("div",{className:"w-30",children:e.jsx(s,{...r,children:"默认标签"})})};var Ee,Ze,Ge;m.parameters={...m.parameters,docs:{...(Ee=m.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div className="w-30">\r
                <Tag>默认标签</Tag>\r
            </div>;
  }
}`,...(Ge=(Ze=m.parameters)==null?void 0:Ze.docs)==null?void 0:Ge.source}}};var Je,Ke,Qe;v.parameters={...v.parameters,docs:{...(Je=v.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    showClose: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag showClose={args.showClose}>默认标签</Tag>\r
            </div>;
  }
}`,...(Qe=(Ke=v.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;h.parameters={...h.parameters,docs:{...(Ue=h.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    showClose: true,
    frontIcon: <ManIcon className="size-3" />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Ye=(Xe=h.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var $e,er,rr;p.parameters={...p.parameters,docs:{...($e=p.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    showClose: true,
    frontIcon: <ManIcon className="size-3" />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(rr=(er=p.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var ar,sr,or;b.parameters={...b.parameters,docs:{...(ar=b.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    showClose: true,
    frontIcon: <ManIcon className="size-3" />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签,但是我要测试超长</Tag>\r
            </div>;
  }
}`,...(or=(sr=b.parameters)==null?void 0:sr.docs)==null?void 0:or.source}}};var tr,nr,cr;x.parameters={...x.parameters,docs:{...(tr=x.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'primary'
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(cr=(nr=x.parameters)==null?void 0:nr.docs)==null?void 0:cr.source}}};var ir,dr,lr;f.parameters={...f.parameters,docs:{...(ir=f.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'primary',
    showClose: true,
    frontIcon: <ManIcon className="size-3" />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(lr=(dr=f.parameters)==null?void 0:dr.docs)==null?void 0:lr.source}}};var ur,gr,mr;w.parameters={...w.parameters,docs:{...(ur=w.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'primary',
    showClose: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(mr=(gr=w.parameters)==null?void 0:gr.docs)==null?void 0:mr.source}}};var vr,hr,pr;j.parameters={...j.parameters,docs:{...(vr=j.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'primary',
    showClose: true,
    disabled: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(pr=(hr=j.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};var br,xr,fr;I.parameters={...I.parameters,docs:{...(br=I.parameters)==null?void 0:br.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'primary',
    showClose: true,
    frontIcon: <ManIcon />,
    size: 'sm'
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(fr=(xr=I.parameters)==null?void 0:xr.docs)==null?void 0:fr.source}}};var wr,jr,Ir;N.parameters={...N.parameters,docs:{...(wr=N.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'primary',
    showClose: true,
    frontIcon: <ManIcon />,
    size: 'text'
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>onlyEnglish</Tag>\r
            </div>;
  }
}`,...(Ir=(jr=N.parameters)==null?void 0:jr.docs)==null?void 0:Ir.source}}};var Nr,Tr,yr;T.parameters={...T.parameters,docs:{...(Nr=T.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'destructive',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(yr=(Tr=T.parameters)==null?void 0:Tr.docs)==null?void 0:yr.source}}};var Cr,Dr,Lr;y.parameters={...y.parameters,docs:{...(Cr=y.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'destructive',
    showClose: true,
    disabled: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Lr=(Dr=y.parameters)==null?void 0:Dr.docs)==null?void 0:Lr.source}}};var Sr,kr,Hr;C.parameters={...C.parameters,docs:{...(Sr=C.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'abnormal',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Hr=(kr=C.parameters)==null?void 0:kr.docs)==null?void 0:Hr.source}}};var Mr,zr,Pr;D.parameters={...D.parameters,docs:{...(Mr=D.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'abnormal',
    showClose: true,
    disabled: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Pr=(zr=D.parameters)==null?void 0:zr.docs)==null?void 0:Pr.source}}};var Br,_r,Ar;L.parameters={...L.parameters,docs:{...(Br=L.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'success',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Ar=(_r=L.parameters)==null?void 0:_r.docs)==null?void 0:Ar.source}}};var Or,Vr,Rr;S.parameters={...S.parameters,docs:{...(Or=S.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'success',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Rr=(Vr=S.parameters)==null?void 0:Vr.docs)==null?void 0:Rr.source}}};var Wr,qr,Fr;k.parameters={...k.parameters,docs:{...(Wr=k.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'warning',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Fr=(qr=k.parameters)==null?void 0:qr.docs)==null?void 0:Fr.source}}};var Er,Zr,Gr;H.parameters={...H.parameters,docs:{...(Er=H.parameters)==null?void 0:Er.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'warning',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Gr=(Zr=H.parameters)==null?void 0:Zr.docs)==null?void 0:Gr.source}}};var Jr,Kr,Qr;M.parameters={...M.parameters,docs:{...(Jr=M.parameters)==null?void 0:Jr.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'offline',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Qr=(Kr=M.parameters)==null?void 0:Kr.docs)==null?void 0:Qr.source}}};var Ur,Xr,Yr;z.parameters={...z.parameters,docs:{...(Ur=z.parameters)==null?void 0:Ur.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'offline',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Yr=(Xr=z.parameters)==null?void 0:Xr.docs)==null?void 0:Yr.source}}};var $r,ea,ra;P.parameters={...P.parameters,docs:{...($r=P.parameters)==null?void 0:$r.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'blue',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(ra=(ea=P.parameters)==null?void 0:ea.docs)==null?void 0:ra.source}}};var aa,sa,oa;B.parameters={...B.parameters,docs:{...(aa=B.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'blue',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(oa=(sa=B.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ta,na,ca;_.parameters={..._.parameters,docs:{...(ta=_.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'default',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(ca=(na=_.parameters)==null?void 0:na.docs)==null?void 0:ca.source}}};var ia,da,la;A.parameters={...A.parameters,docs:{...(ia=A.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'default',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(la=(da=A.parameters)==null?void 0:da.docs)==null?void 0:la.source}}};var ua,ga,ma;O.parameters={...O.parameters,docs:{...(ua=O.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'primary',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(ma=(ga=O.parameters)==null?void 0:ga.docs)==null?void 0:ma.source}}};var va,ha,pa;V.parameters={...V.parameters,docs:{...(va=V.parameters)==null?void 0:va.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'primary',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(pa=(ha=V.parameters)==null?void 0:ha.docs)==null?void 0:pa.source}}};var ba,xa,fa;R.parameters={...R.parameters,docs:{...(ba=R.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'destructive',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(fa=(xa=R.parameters)==null?void 0:xa.docs)==null?void 0:fa.source}}};var wa,ja,Ia;W.parameters={...W.parameters,docs:{...(wa=W.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'destructive',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Ia=(ja=W.parameters)==null?void 0:ja.docs)==null?void 0:Ia.source}}};var Na,Ta,ya;q.parameters={...q.parameters,docs:{...(Na=q.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'abnormal',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(ya=(Ta=q.parameters)==null?void 0:Ta.docs)==null?void 0:ya.source}}};var Ca,Da,La;F.parameters={...F.parameters,docs:{...(Ca=F.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'abnormal',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(La=(Da=F.parameters)==null?void 0:Da.docs)==null?void 0:La.source}}};var Sa,ka,Ha;E.parameters={...E.parameters,docs:{...(Sa=E.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'offline',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Ha=(ka=E.parameters)==null?void 0:ka.docs)==null?void 0:Ha.source}}};var Ma,za,Pa;Z.parameters={...Z.parameters,docs:{...(Ma=Z.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'offline',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Pa=(za=Z.parameters)==null?void 0:za.docs)==null?void 0:Pa.source}}};var Ba,_a,Aa;G.parameters={...G.parameters,docs:{...(Ba=G.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'blue',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Aa=(_a=G.parameters)==null?void 0:_a.docs)==null?void 0:Aa.source}}};var Oa,Va,Ra;J.parameters={...J.parameters,docs:{...(Oa=J.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  args: {
    variant: 'light-line',
    color: 'blue',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Ra=(Va=J.parameters)==null?void 0:Va.docs)==null?void 0:Ra.source}}};var Wa,qa,Fa;K.parameters={...K.parameters,docs:{...(Wa=K.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'default',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Fa=(qa=K.parameters)==null?void 0:qa.docs)==null?void 0:Fa.source}}};var Ea,Za,Ga;Q.parameters={...Q.parameters,docs:{...(Ea=Q.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'default',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Ga=(Za=Q.parameters)==null?void 0:Za.docs)==null?void 0:Ga.source}}};var Ja,Ka,Qa;U.parameters={...U.parameters,docs:{...(Ja=U.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'primary',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Qa=(Ka=U.parameters)==null?void 0:Ka.docs)==null?void 0:Qa.source}}};var Ua,Xa,Ya;X.parameters={...X.parameters,docs:{...(Ua=X.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'primary',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Ya=(Xa=X.parameters)==null?void 0:Xa.docs)==null?void 0:Ya.source}}};var $a,es,rs;Y.parameters={...Y.parameters,docs:{...($a=Y.parameters)==null?void 0:$a.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'destructive',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(rs=(es=Y.parameters)==null?void 0:es.docs)==null?void 0:rs.source}}};var as,ss,os;$.parameters={...$.parameters,docs:{...(as=$.parameters)==null?void 0:as.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'destructive',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(os=(ss=$.parameters)==null?void 0:ss.docs)==null?void 0:os.source}}};var ts,ns,cs;ee.parameters={...ee.parameters,docs:{...(ts=ee.parameters)==null?void 0:ts.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'success',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(cs=(ns=ee.parameters)==null?void 0:ns.docs)==null?void 0:cs.source}}};var is,ds,ls;re.parameters={...re.parameters,docs:{...(is=re.parameters)==null?void 0:is.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'success',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(ls=(ds=re.parameters)==null?void 0:ds.docs)==null?void 0:ls.source}}};var us,gs,ms;ae.parameters={...ae.parameters,docs:{...(us=ae.parameters)==null?void 0:us.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'abnormal',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(ms=(gs=ae.parameters)==null?void 0:gs.docs)==null?void 0:ms.source}}};var vs,hs,ps;se.parameters={...se.parameters,docs:{...(vs=se.parameters)==null?void 0:vs.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'abnormal',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(ps=(hs=se.parameters)==null?void 0:hs.docs)==null?void 0:ps.source}}};var bs,xs,fs;oe.parameters={...oe.parameters,docs:{...(bs=oe.parameters)==null?void 0:bs.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'warning',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(fs=(xs=oe.parameters)==null?void 0:xs.docs)==null?void 0:fs.source}}};var ws,js,Is;te.parameters={...te.parameters,docs:{...(ws=te.parameters)==null?void 0:ws.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'warning',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Is=(js=te.parameters)==null?void 0:js.docs)==null?void 0:Is.source}}};var Ns,Ts,ys;ne.parameters={...ne.parameters,docs:{...(Ns=ne.parameters)==null?void 0:Ns.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'offline',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(ys=(Ts=ne.parameters)==null?void 0:Ts.docs)==null?void 0:ys.source}}};var Cs,Ds,Ls;ce.parameters={...ce.parameters,docs:{...(Cs=ce.parameters)==null?void 0:Cs.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'offline',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Ls=(Ds=ce.parameters)==null?void 0:Ds.docs)==null?void 0:Ls.source}}};var Ss,ks,Hs;ie.parameters={...ie.parameters,docs:{...(Ss=ie.parameters)==null?void 0:Ss.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'blue',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Hs=(ks=ie.parameters)==null?void 0:ks.docs)==null?void 0:Hs.source}}};var Ms,zs,Ps;de.parameters={...de.parameters,docs:{...(Ms=de.parameters)==null?void 0:Ms.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'blue',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Ps=(zs=de.parameters)==null?void 0:zs.docs)==null?void 0:Ps.source}}};var Bs,_s,As;le.parameters={...le.parameters,docs:{...(Bs=le.parameters)==null?void 0:Bs.docs,source:{originalSource:`{
  args: {
    color: 'default',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(As=(_s=le.parameters)==null?void 0:_s.docs)==null?void 0:As.source}}};var Os,Vs,Rs;ue.parameters={...ue.parameters,docs:{...(Os=ue.parameters)==null?void 0:Os.docs,source:{originalSource:`{
  args: {
    color: 'default',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(Rs=(Vs=ue.parameters)==null?void 0:Vs.docs)==null?void 0:Rs.source}}};var Ws,qs,Fs;ge.parameters={...ge.parameters,docs:{...(Ws=ge.parameters)==null?void 0:Ws.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(Fs=(qs=ge.parameters)==null?void 0:qs.docs)==null?void 0:Fs.source}}};var Es,Zs,Gs;me.parameters={...me.parameters,docs:{...(Es=me.parameters)==null?void 0:Es.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(Gs=(Zs=me.parameters)==null?void 0:Zs.docs)==null?void 0:Gs.source}}};var Js,Ks,Qs;ve.parameters={...ve.parameters,docs:{...(Js=ve.parameters)==null?void 0:Js.docs,source:{originalSource:`{
  args: {
    color: 'destructive',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(Qs=(Ks=ve.parameters)==null?void 0:Ks.docs)==null?void 0:Qs.source}}};var Us,Xs,Ys;he.parameters={...he.parameters,docs:{...(Us=he.parameters)==null?void 0:Us.docs,source:{originalSource:`{
  args: {
    color: 'destructive',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(Ys=(Xs=he.parameters)==null?void 0:Xs.docs)==null?void 0:Ys.source}}};var $s,eo,ro;pe.parameters={...pe.parameters,docs:{...($s=pe.parameters)==null?void 0:$s.docs,source:{originalSource:`{
  args: {
    color: 'success',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(ro=(eo=pe.parameters)==null?void 0:eo.docs)==null?void 0:ro.source}}};var ao,so,oo;be.parameters={...be.parameters,docs:{...(ao=be.parameters)==null?void 0:ao.docs,source:{originalSource:`{
  args: {
    color: 'success',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(oo=(so=be.parameters)==null?void 0:so.docs)==null?void 0:oo.source}}};var to,no,co;xe.parameters={...xe.parameters,docs:{...(to=xe.parameters)==null?void 0:to.docs,source:{originalSource:`{
  args: {
    color: 'abnormal',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(co=(no=xe.parameters)==null?void 0:no.docs)==null?void 0:co.source}}};var io,lo,uo;fe.parameters={...fe.parameters,docs:{...(io=fe.parameters)==null?void 0:io.docs,source:{originalSource:`{
  args: {
    color: 'abnormal',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(uo=(lo=fe.parameters)==null?void 0:lo.docs)==null?void 0:uo.source}}};var go,mo,vo;we.parameters={...we.parameters,docs:{...(go=we.parameters)==null?void 0:go.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(vo=(mo=we.parameters)==null?void 0:mo.docs)==null?void 0:vo.source}}};var ho,po,bo;je.parameters={...je.parameters,docs:{...(ho=je.parameters)==null?void 0:ho.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(bo=(po=je.parameters)==null?void 0:po.docs)==null?void 0:bo.source}}};var xo,fo,wo;Ie.parameters={...Ie.parameters,docs:{...(xo=Ie.parameters)==null?void 0:xo.docs,source:{originalSource:`{
  args: {
    color: 'offline',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(wo=(fo=Ie.parameters)==null?void 0:fo.docs)==null?void 0:wo.source}}};var jo,Io,No;Ne.parameters={...Ne.parameters,docs:{...(jo=Ne.parameters)==null?void 0:jo.docs,source:{originalSource:`{
  args: {
    color: 'offline',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(No=(Io=Ne.parameters)==null?void 0:Io.docs)==null?void 0:No.source}}};var To,yo,Co;Te.parameters={...Te.parameters,docs:{...(To=Te.parameters)==null?void 0:To.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    showClose: true,
    frontIcon: <ManIcon />
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(Co=(yo=Te.parameters)==null?void 0:yo.docs)==null?void 0:Co.source}}};var Do,Lo,So;ye.parameters={...ye.parameters,docs:{...(Do=ye.parameters)==null?void 0:Do.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    showClose: true,
    frontIcon: <ManIcon />,
    disabled: true
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(So=(Lo=ye.parameters)==null?void 0:Lo.docs)==null?void 0:So.source}}};var ko,Ho,Mo;Ce.parameters={...Ce.parameters,docs:{...(ko=Ce.parameters)==null?void 0:ko.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    showClose: true,
    frontIcon: <ManIcon />,
    size: 'sm'
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>默认标签</HeavyTag>\r
            </div>;
  }
}`,...(Mo=(Ho=Ce.parameters)==null?void 0:Ho.docs)==null?void 0:Mo.source}}};var zo,Po,Bo;De.parameters={...De.parameters,docs:{...(zo=De.parameters)==null?void 0:zo.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    showClose: true,
    frontIcon: <ManIcon />,
    size: 'text'
  },
  render: args => {
    return <div className="w-30">\r
                <HeavyTag {...args}>onlyEnglish</HeavyTag>\r
            </div>;
  }
}`,...(Bo=(Po=De.parameters)==null?void 0:Po.docs)==null?void 0:Bo.source}}};var _o,Ao,Oo;Le.parameters={...Le.parameters,docs:{...(_o=Le.parameters)==null?void 0:_o.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'primary',
    frontIcon: <ManIcon />,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Oo=(Ao=Le.parameters)==null?void 0:Ao.docs)==null?void 0:Oo.source}}};var Vo,Ro,Wo;Se.parameters={...Se.parameters,docs:{...(Vo=Se.parameters)==null?void 0:Vo.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'primary',
    frontIcon: <ManIcon />,
    disabled: true,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Wo=(Ro=Se.parameters)==null?void 0:Ro.docs)==null?void 0:Wo.source}}};var qo,Fo,Eo;ke.parameters={...ke.parameters,docs:{...(qo=ke.parameters)==null?void 0:qo.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'destructive',
    frontIcon: <ManIcon />,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Eo=(Fo=ke.parameters)==null?void 0:Fo.docs)==null?void 0:Eo.source}}};var Zo,Go,Jo;He.parameters={...He.parameters,docs:{...(Zo=He.parameters)==null?void 0:Zo.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'destructive',
    frontIcon: <ManIcon />,
    disabled: true,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Jo=(Go=He.parameters)==null?void 0:Go.docs)==null?void 0:Jo.source}}};var Ko,Qo,Uo;Me.parameters={...Me.parameters,docs:{...(Ko=Me.parameters)==null?void 0:Ko.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'success',
    frontIcon: <ManIcon />,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(Uo=(Qo=Me.parameters)==null?void 0:Qo.docs)==null?void 0:Uo.source}}};var Xo,Yo,$o;ze.parameters={...ze.parameters,docs:{...(Xo=ze.parameters)==null?void 0:Xo.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'success',
    frontIcon: <ManIcon />,
    disabled: true,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...($o=(Yo=ze.parameters)==null?void 0:Yo.docs)==null?void 0:$o.source}}};var et,rt,at;Pe.parameters={...Pe.parameters,docs:{...(et=Pe.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'abnormal',
    frontIcon: <ManIcon />,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(at=(rt=Pe.parameters)==null?void 0:rt.docs)==null?void 0:at.source}}};var st,ot,tt;Be.parameters={...Be.parameters,docs:{...(st=Be.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'abnormal',
    frontIcon: <ManIcon />,
    disabled: true,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(tt=(ot=Be.parameters)==null?void 0:ot.docs)==null?void 0:tt.source}}};var nt,ct,it;_e.parameters={..._e.parameters,docs:{...(nt=_e.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'warning',
    frontIcon: <ManIcon />,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(it=(ct=_e.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var dt,lt,ut;Ae.parameters={...Ae.parameters,docs:{...(dt=Ae.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'warning',
    frontIcon: <ManIcon />,
    disabled: true,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(ut=(lt=Ae.parameters)==null?void 0:lt.docs)==null?void 0:ut.source}}};var gt,mt,vt;Oe.parameters={...Oe.parameters,docs:{...(gt=Oe.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'blue',
    frontIcon: <ManIcon />,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(vt=(mt=Oe.parameters)==null?void 0:mt.docs)==null?void 0:vt.source}}};var ht,pt,bt;Ve.parameters={...Ve.parameters,docs:{...(ht=Ve.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    color: 'blue',
    frontIcon: <ManIcon />,
    disabled: true,
    checkabled: true,
    checked: true
  },
  render: args => {
    return <div className="w-30">\r
                <Tag {...args}>默认标签</Tag>\r
            </div>;
  }
}`,...(bt=(pt=Ve.parameters)==null?void 0:pt.docs)==null?void 0:bt.source}}};const Wt=["Default","DefaultShowClose","DefaultHasIcon","DefaultDisabled","DefaultLong","Primary","PrimaryHasIcon","PrimaryShowClose","PrimaryDisabled","PrimarySmall","PrimaryOnlyText","Destructive","DestructiveDisabled","Abnormal","AbnormalDisabled","Success","SuccessDisabled","Warning","WarningDisabled","Offline","OfflineDisabled","Blue","BlueDisabled","DefaultLightLine","DefaultLightLineDisabled","PrimaryLightLine","PrimaryLightLineDisabled","DestructiveLightLine","DestructiveLightLineDisabled","AbnormalLightLine","AbnormalLightLineDisabled","OfflineLightLine","OfflineLightLineDisabled","BlueLightLine","BlueLightLineDisabled","DefaultLine","DefaultLineDisabled","PrimaryLine","PrimaryLineDisabled","DestructiveLine","DestructiveLineDisabled","SuccessLine","SuccessLineDisabled","AbnormalLine","AbnormalLineDisabled","WarningLine","WarningLineDisabled","OfflineLine","OfflineLineDisabled","BlueLine","BlueLineDisabled","DefaultHeavy","DefaultHeavyDisabled","PrimaryHeavy","PrimaryHeavyDisabled","DestructiveHeavy","DestructiveHeavyDisabled","SuccessHeavy","SuccessHeavyDisabled","AbnormalHeavy","AbnormalHeavyDisabled","WarningHeavy","WarningHeavyDisabled","OfflineHeavy","OfflineHeavyDisabled","BlueHeavy","BlueHeavyDisabled","BlueHeavySmall","BlueHeavyText","PrimaryLineCheckedable","PrimaryLineDisabledCheckedable","DestructiveLineCheckedable","DestructiveLineDisabledCheckedable","SuccessLineCheckedable","SuccessLineDisabledCheckedable","AbnormalLineCheckedable","AbnormalLineDisabledCheckedable","WarningLineCheckedable","WarningLineDisabledCheckedable","BlueLineCheckedable","BlueLineDisabledCheckedable"];export{C as Abnormal,D as AbnormalDisabled,xe as AbnormalHeavy,fe as AbnormalHeavyDisabled,q as AbnormalLightLine,F as AbnormalLightLineDisabled,ae as AbnormalLine,Pe as AbnormalLineCheckedable,se as AbnormalLineDisabled,Be as AbnormalLineDisabledCheckedable,P as Blue,B as BlueDisabled,Te as BlueHeavy,ye as BlueHeavyDisabled,Ce as BlueHeavySmall,De as BlueHeavyText,G as BlueLightLine,J as BlueLightLineDisabled,ie as BlueLine,Oe as BlueLineCheckedable,de as BlueLineDisabled,Ve as BlueLineDisabledCheckedable,m as Default,p as DefaultDisabled,h as DefaultHasIcon,le as DefaultHeavy,ue as DefaultHeavyDisabled,_ as DefaultLightLine,A as DefaultLightLineDisabled,K as DefaultLine,Q as DefaultLineDisabled,b as DefaultLong,v as DefaultShowClose,T as Destructive,y as DestructiveDisabled,ve as DestructiveHeavy,he as DestructiveHeavyDisabled,R as DestructiveLightLine,W as DestructiveLightLineDisabled,Y as DestructiveLine,ke as DestructiveLineCheckedable,$ as DestructiveLineDisabled,He as DestructiveLineDisabledCheckedable,M as Offline,z as OfflineDisabled,Ie as OfflineHeavy,Ne as OfflineHeavyDisabled,E as OfflineLightLine,Z as OfflineLightLineDisabled,ne as OfflineLine,ce as OfflineLineDisabled,x as Primary,j as PrimaryDisabled,f as PrimaryHasIcon,ge as PrimaryHeavy,me as PrimaryHeavyDisabled,O as PrimaryLightLine,V as PrimaryLightLineDisabled,U as PrimaryLine,Le as PrimaryLineCheckedable,X as PrimaryLineDisabled,Se as PrimaryLineDisabledCheckedable,N as PrimaryOnlyText,w as PrimaryShowClose,I as PrimarySmall,L as Success,S as SuccessDisabled,pe as SuccessHeavy,be as SuccessHeavyDisabled,ee as SuccessLine,Me as SuccessLineCheckedable,re as SuccessLineDisabled,ze as SuccessLineDisabledCheckedable,k as Warning,H as WarningDisabled,we as WarningHeavy,je as WarningHeavyDisabled,oe as WarningLine,_e as WarningLineCheckedable,te as WarningLineDisabled,Ae as WarningLineDisabledCheckedable,Wt as __namedExportsOrder,Rt as default};
