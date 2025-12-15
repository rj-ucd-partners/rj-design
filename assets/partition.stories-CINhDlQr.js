import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as u}from"./utils-D-KgF5mV.js";import{c as R}from"./index-CGrAONsN.js";import{T as k}from"./TriangleDownIcon-BxHtfvmJ.js";const A=R("font-medium not-italic text-text-deep",{variants:{size:{xs:"text-[15px] leading-[22px]",sm:"text-[17px] leading-[24px]",md:"text-[19px] leading-[28px]",lg:"text-[23px] leading-[32px]"}},defaultVariants:{}});function s({className:e,variant:c,size:p="md",...g}){return r.jsxs("div",{className:u("flex flex-row gap-2 items-center justify-start","w-full",A({size:p}),e),children:[c==="solid"&&r.jsx("div",{className:u("bg-primary rounded-full",p==="xs"?"size-1":"size-2")}),c==="outline"&&r.jsx("div",{className:u("box-border border-[2px] border-primary rounded-full",p==="xs"?"size-1":"size-2")}),r.jsx("span",{children:g.title}),c==="dashed"&&r.jsxs("div",{className:"inline-flex flex-row gap-2 items-center justify-start",children:[r.jsx("div",{className:"size-4 flex items-center justify-center text-secondary",children:r.jsx(k,{})}),r.jsx("div",{className:"w-16 h-[1px] box-border border-t border-dashed border-border-split"})]}),g.children]})}s.__docgenInfo={description:"",methods:[],displayName:"Partition",props:{variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'dashed' | undefined",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'dashed'"},{name:"undefined"}]},description:""},title:{required:!0,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const J={title:"Components/Partition",tags:["autodocs"],component:s,argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},title:{control:"text"},variant:{control:{type:"select"},options:["solid","outline","dashed"]}}},a={args:{size:"xs",variant:"solid",title:"这是一个标题"},render:e=>r.jsx(s,{...e})},t={args:{size:"xs",variant:"solid",title:"这是一个标题"},render:e=>r.jsx(s,{...e})},i={args:{size:"sm",variant:"solid",title:"这是一个标题"},render:e=>r.jsx(s,{...e})},n={args:{size:"md",variant:"solid",title:"这是一个标题"},render:e=>r.jsx(s,{...e})},o={args:{size:"lg",variant:"solid",title:"这是一个标题"},render:e=>r.jsx(s,{...e})},d={args:{size:"md",variant:"outline",title:"这是一个标题"},render:e=>r.jsx(s,{...e})},l={args:{size:"md",variant:"dashed",title:"这是一个标题"},render:e=>r.jsx(s,{...e})},m={args:{size:"md",title:"这是一个标题"},render:e=>r.jsx(s,{...e})};var x,f,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    variant: 'solid',
    title: '这是一个标题'
  },
  render: args => <Partition {...args} />
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,z,j;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    variant: 'solid',
    title: '这是一个标题'
  },
  render: args => <Partition {...args} />
}`,...(j=(z=t.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var P,h,S;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'solid',
    title: '这是一个标题'
  },
  render: args => <Partition {...args} />
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,N,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'solid',
    title: '这是一个标题'
  },
  render: args => <Partition {...args} />
}`,...(w=(N=n.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var M,D,T;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'solid',
    title: '这是一个标题'
  },
  render: args => <Partition {...args} />
}`,...(T=(D=o.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var _,q,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'outline',
    title: '这是一个标题'
  },
  render: args => <Partition {...args} />
}`,...(O=(q=d.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var V,E,I;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'dashed',
    title: '这是一个标题'
  },
  render: args => <Partition {...args} />
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,X,C;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'md',
    title: '这是一个标题'
  },
  render: args => <Partition {...args} />
}`,...(C=(X=m.parameters)==null?void 0:X.docs)==null?void 0:C.source}}};const K=["Primary","PrimaryXSmall","PrimarySamll","PrimaryMedium","PrimaryLarge","OutlineMedium","DashedMedium","Default"];export{l as DashedMedium,m as Default,d as OutlineMedium,a as Primary,o as PrimaryLarge,n as PrimaryMedium,i as PrimarySamll,t as PrimaryXSmall,K as __namedExportsOrder,J as default};
