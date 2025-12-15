import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-DPkNXRqw.js";import{R as I,T as R}from"./index-xabTWpDo.js";import{c as u}from"./utils-D-KgF5mV.js";import{c as T}from"./index-CGrAONsN.js";import{L as _}from"./loading-circle-CbvMeV9v.js";import"./index-DW48STyt.js";import"./index-CVJC_e1g.js";import"./index-3PNdDA9F.js";import"./index-TAJg0BDn.js";import"./index-CGny4Gu2.js";import"./index-CdverDIJ.js";import"./index-tTCODTNv.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";const V=T("",{variants:{variant:{primary:"data-[state=checked]:bg-primary data-[state=unchecked]:bg-fill-emphasize disabled:data-[state=checked]:bg-primary-disabled disabled:data-[state=unchecked]:bg-fill-dark-hover-active-disabled"},size:{sm:"min-w-[28px] h-4 rounded-md",md:"min-w-9 h-5 rounded-lg",lg:"min-w-11 h-6 rounded-lg"}}}),D=T("",{variants:{variant:{primary:"data-[state=unchecked]:bg-card data-[state=checked]:bg-card"},size:{sm:"w-3 h-3 rounded-sm",md:"w-4 h-4 rounded-md",lg:"w-5 h-5 rounded-md"}}});function s({checked:e,onCheckedChange:m,isLoading:p=!1,variant:t,size:a,className:N,...E}){return r.jsx(I,{"data-slot":"switch",className:u("peer inline-flex shrink-0 items-center","relative",V({variant:t,size:a}),N),checked:e,onCheckedChange:m,...E,children:r.jsx(R,{"data-slot":"switch-thumb",className:u("pointer-events-none block transition-transform data-[state=checked]:translate-x-[calc(100%+2px)] data-[state=unchecked]:translate-x-[2px]",D({variant:t,size:a})),children:p&&r.jsx(_,{className:u("animate-spin",[a==="sm"&&"size-3",a==="md"&&"size-4",a==="lg"&&"size-5"])})})})}s.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const $={title:"Components/Switch",tags:["autodocs"],component:s,argTypes:{variant:{control:{type:"select"},options:["primary"]},size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:"boolean"}}},n={args:{variant:"primary",size:"sm"},render:e=>r.jsx(s,{...e})},i={args:{variant:"primary",size:"md"},render:e=>r.jsx(s,{...e})},o={args:{variant:"primary",size:"lg"},render:e=>r.jsx(s,{...e})},c={args:{variant:"primary",size:"lg",disabled:!0},render:e=>r.jsx(s,{...e})},d={args:{variant:"primary",size:"lg"},render:e=>{const[m,p]=l.useState(!1),[t,a]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{a(!1)},5e3)},[]),r.jsx("div",{className:"inline-flex items-center justify-center h-5",children:r.jsx(s,{...e,checked:m,onCheckedChange:p,isLoading:t})})}};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm'
  },
  render: args => {
    return <Switch {...args} />;
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,b,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: args => {
    return <Switch {...args} />;
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,k,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg'
  },
  render: args => {
    return <Switch {...args} />;
  }
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var w,j,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    disabled: true
  },
  render: args => {
    return <Switch {...args} />;
  }
}`,...(z=(j=c.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var L,P,C;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg'
  },
  render: args => {
    const [checked, setChecked] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }, []);
    return <div className='inline-flex items-center justify-center h-5'>\r
            <Switch {...args} checked={checked} onCheckedChange={setChecked} isLoading={isLoading} />\r
        </div>;
  }
}`,...(C=(P=d.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const ee=["Primary","PrimaryMd","PrimaryLg","PrimaryDisabled","PrimaryStatus"];export{n as Primary,c as PrimaryDisabled,o as PrimaryLg,i as PrimaryMd,d as PrimaryStatus,ee as __namedExportsOrder,$ as default};
