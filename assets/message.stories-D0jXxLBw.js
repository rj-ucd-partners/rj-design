import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as k}from"./utils-D-KgF5mV.js";import{B as q}from"./button-7wqqdEkD.js";import{C as d}from"./closeIcon-6bXNgUOm.js";import{r as u}from"./iframe-DPkNXRqw.js";import"./index-CVJC_e1g.js";import"./index-CGrAONsN.js";const F=e=>s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:s.jsx("path",{d:"M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 5C8.5 5 9 4.5 9 4C9 3.5 8.5 3 8 3C7.5 3 7 3.5 7 4C7 4.5 7.5 5 8 5ZM9 6H6.5V7.5H7.5V10.5H6V12H10V10.5H9V6Z",fill:"#00CFF4"})});F.__docgenInfo={description:"",methods:[],displayName:"InfoFillIcon"};const H=e=>s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:s.jsx("path",{d:"M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM11.5313 6.23225L10.8242 5.52515L7.28871 9.06059L5.53593 7.30781L4.8288 8.01489L7.28862 10.4749L11.5313 6.23225Z",fill:"#00FFA8"})});H.__docgenInfo={description:"",methods:[],displayName:"SuccessFillIcon"};const Z=e=>s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:s.jsx("path",{d:"M7.99992 2C8.35719 2 8.68731 2.1906 8.86595 2.5L14.9281 13C15.1068 13.3094 15.1068 13.6906 14.9281 14C14.7495 14.3094 14.4194 14.5 14.0621 14.5H1.93774C1.58048 14.5 1.25035 14.3094 1.07172 14C0.893086 13.6906 0.893086 13.3094 1.07172 13L7.1339 2.5C7.31253 2.1906 7.64266 2 7.99992 2ZM8.49995 10.0095V6.00952H7.49995L7.49995 10.0095H8.49995ZM7.34991 11.5001C7.34991 11.8591 7.64093 12.1501 7.99991 12.1501C8.3589 12.1501 8.64991 11.8591 8.64991 11.5001C8.64991 11.1412 8.3589 10.8501 7.99991 10.8501C7.64093 10.8501 7.34991 11.1412 7.34991 11.5001Z",fill:"#E69800"})});Z.__docgenInfo={description:"",methods:[],displayName:"AbnormalFillIcon"};function r({message:e,showClose:V=!1,className:B,...a}){u.useEffect(()=>{},[]);const[E,z]=u.useState(!0),T=()=>{z(!1)};return s.jsxs("div",{className:k("absolute top-5 left-1/2 transform -translate-x-1/2","bg-text","inline-flex flex-row items-center justify-center gap-2","px-4 py-3 rounded-md","border border-border-disabled shadow-[0px_5px_20px] shadow-background",!E&&"hidden",B),...a,children:[a.status==="info"&&s.jsx(F,{className:"w-4 h-4"}),a.status==="destructive"&&s.jsx(d,{className:"w-4 h-4 text-danger"}),a.status==="loading"&&s.jsx("div",{className:"w-4 h-4 rounded-full border-1 border-t-transparent animate-spin"}),a.status==="success"&&s.jsx(H,{className:"size-4"}),a.status==="warning"&&s.jsx(Z,{className:"size-4"}),s.jsx("span",{className:"w-min-[380px] text-[13px] leading-[20px] text-text-deep font-normal not-italic",children:e}),V&&s.jsx(q,{variant:"transparent",size:"link",onClick:T,children:s.jsx(d,{className:"size-4 text-secondary-information"})})]})}r.__docgenInfo={description:"",methods:[],displayName:"Message",props:{message:{required:!0,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"union",raw:"'success' | 'fail' | 'warning' | 'info' | 'destructive' | 'loading'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'fail'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'loading'"}]},description:""},showClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const K={title:"Components/Message",tags:["autodocs"],component:r,argTypes:{}},n={args:{status:"info",message:"用于表示普通操作信息提示，3s后自动消失"},render:e=>s.jsx(r,{...e})},t={args:{status:"destructive",message:"用于表示普通操作信息提示，3s后自动消失"},render:e=>s.jsx(r,{...e})},o={args:{status:"loading",message:"用于表示普通操作信息提示，3s后自动消失"},render:e=>s.jsx(r,{...e})},i={args:{status:"success",message:"用于表示普通操作信息提示，3s后自动消失"},render:e=>s.jsx(r,{...e})},c={args:{status:"warning",message:"用于表示普通操作信息提示，3s后自动消失"},render:e=>s.jsx(r,{...e})},l={args:{status:"warning",message:"用于表示普通操作信息提示，3s后自动消失",showClose:!0},render:e=>s.jsx(r,{...e})};var m,g,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: 'info',
    message: '用于表示普通操作信息提示，3s后自动消失'
  },
  render: args => {
    return <Message {...args} />;
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var x,f,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: 'destructive',
    message: '用于表示普通操作信息提示，3s后自动消失'
  },
  render: args => {
    return <Message {...args} />;
  }
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var h,C,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    status: 'loading',
    message: '用于表示普通操作信息提示，3s后自动消失'
  },
  render: args => {
    return <Message {...args} />;
  }
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var j,M,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: 'success',
    message: '用于表示普通操作信息提示，3s后自动消失'
  },
  render: args => {
    return <Message {...args} />;
  }
}`,...(I=(M=i.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var b,N,S;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    message: '用于表示普通操作信息提示，3s后自动消失'
  },
  render: args => {
    return <Message {...args} />;
  }
}`,...(S=(N=c.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var _,y,L;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    message: '用于表示普通操作信息提示，3s后自动消失',
    showClose: true
  },
  render: args => {
    return <Message {...args} />;
  }
}`,...(L=(y=l.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const P=["Info","Destructive","Loading","Success","Warning","Close"];export{l as Close,t as Destructive,n as Info,o as Loading,i as Success,c as Warning,P as __namedExportsOrder,K as default};
