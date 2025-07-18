import{j as w}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-BqZCuoWB.js";import{S as j}from"./index-BJnlQpDH.js";import{c as k}from"./index-CGrAONsN.js";import{c as D}from"./utils-D-KgF5mV.js";const _=k("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function f({className:b,variant:h,asChild:y=!1,...x}){const S=y?j:"span";return w.jsx(S,{"data-slot":"badge",className:D(_({variant:h}),b),...x})}f.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const N={title:"Components/Badge",component:f,argTypes:{variant:{control:{type:"select"},options:["default","secondary","destructive","outline"]}}},e={args:{children:"默认",variant:"default"}},r={args:{children:"次要",variant:"secondary"}},a={args:{children:"危险",variant:"destructive"}},t={args:{children:"描边",variant:"outline"}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: '默认',
    variant: 'default'
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: '次要',
    variant: 'secondary'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: '危险',
    variant: 'destructive'
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var v,m,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: '描边',
    variant: 'outline'
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const T=["Default","Secondary","Destructive","Outline"];export{e as Default,a as Destructive,t as Outline,r as Secondary,T as __namedExportsOrder,N as default};
