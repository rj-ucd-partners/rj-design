import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as i}from"./button-7wqqdEkD.js";import{r as R}from"./iframe-DPkNXRqw.js";import{R as A,T as Z,O as X,C as $,a as H,b as G,D as J,P as K}from"./index-CgSC_qO_.js";import{c as o}from"./utils-D-KgF5mV.js";import{c as l}from"./index-CGrAONsN.js";import{I as S}from"./infoCirecledIcon-Bh4TnBS0.js";import{S as O,A as q}from"./abnormalIcon-1XwIHm4S.js";import{C as Q}from"./closeIcon-6bXNgUOm.js";import{X as U}from"./x-BxTVZDQx.js";import"./index-CVJC_e1g.js";import"./index-DW48STyt.js";import"./index-3PNdDA9F.js";import"./index-CcTl1dMB.js";import"./index-CGny4Gu2.js";import"./index-TAJg0BDn.js";import"./index-D7KDVih1.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-BFJ-Qg5v.js";import"./index-CZ6tSH_D.js";import"./Combination-DlUI4tCQ.js";import"./index-DUrgPtLc.js";import"./index-CNmy0mc9.js";import"./index-nrtHsWe5.js";import"./createLucideIcon-BVkOKLvB.js";const v=a=>e.jsx("svg",{...a,viewBox:"0 0 22 22",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18ZM14.046 8.71554L11.7615 11L14.046 13.2845L13.2845 14.046L11 11.7615L8.7155 14.046L7.954 13.2845L10.2385 11L7.954 8.71554L8.7155 7.95405L11 10.2385L13.2845 7.95405L14.046 8.71554Z",fill:"#D02600"})});v.__docgenInfo={description:"",methods:[],displayName:"DestructiveIcon"};function n({...a}){return e.jsx(A,{"data-slot":"dialog",...a})}function d({...a}){return e.jsx(Z,{"data-slot":"dialog-trigger",...a})}function P({...a}){return e.jsx(K,{"data-slot":"dialog-portal",...a})}function c({...a}){return e.jsx(H,{"data-slot":"dialog-close",...a})}function b({className:a,...r}){return e.jsx(X,{"data-slot":"dialog-overlay",className:o("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",a),...r})}const W=l("",{variants:{variant:{primary:"p-0 bg-card border-none gap-0"},size:{default:"",sm:"sm:max-w-[500px]",md:"sm:max-w-[600px]",lg:"sm:max-w-[1000px]"}},defaultVariants:{variant:"primary",size:"sm"}});function m({className:a,children:r,variant:t,size:s="sm",showCloseButton:y=!0,...M}){return e.jsxs(P,{"data-slot":"dialog-portal",children:[e.jsx(b,{}),e.jsxs($,{"data-slot":"dialog-content",className:o("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border  shadow-lg duration-200 sm:max-w-lg p-6",a,W({variant:t,size:s})),...M,children:[r,y&&e.jsxs(H,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs transition-opacity focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[e.jsx(U,{}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}const Y=l("border-solid border-border-split p-4",{variants:{variant:{primary:""}},defaultVariants:{}});function g({hasBorder:a=!0,className:r,variant:t,...s}){return e.jsx("div",{"data-slot":"dialog-header",className:o("flex flex-col text-center sm:text-left",a?"border-b":"border-none",Y({variant:t}),r),...s,children:s.children})}const ee=l("inline-flex py-2.5 px-4 h-14",{variants:{variant:{primary:""}},defaultVariants:{}});function u({className:a,variant:r,...t}){return e.jsx("div",{"data-slot":"dialog-footer",className:o("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",a,ee({variant:r})),...t})}const ae=l("gap-1 flex flex-row items-center justify-start",{variants:{variant:{default:"",primary:"",success:"",abnormal:"",danger:""},size:{default:"font-medium font-[17px] leading-[24px] not-italic"}},defaultVariants:{variant:"default",size:"default"}});function p({className:a,variant:r,size:t,...s}){return e.jsxs(G,{"data-slot":"dialog-title",className:o("text-lg leading-none font-semibold",a,ae({variant:r,size:t})),...s,children:[r==="primary"&&e.jsx(S,{className:"text-primary"}),r==="success"&&e.jsx(O,{className:"text-success"}),r==="abnormal"&&e.jsx(q,{className:"text-abnormal"}),r==="danger"&&e.jsx(v,{className:"size-6 text-danger"}),s.children]})}const re=l("min-h-20 text-secondary-information",{variants:{variant:{default:"",icon:"pl-10"}},defaultVariants:{variant:"default"}});function f({variant:a,hasBorder:r=!0,className:t,...s}){return e.jsx("div",{"data-slot":"dialog-details",className:o("p-4 min-h-40  border-border-split inline-flex items-center justify-center",t,r?"border-b":"border-none",re({variant:a})),...s})}const te=l("px-4 py-2 flex items-center justify-between",{variants:{variant:{default:"",primary:"bg-primary-light",success:"bg-success/20",abnormal:"bg-abnormal/10",danger:"bg-danger-hover/20"}},defaultVariants:{variant:"primary"}});function E({className:a,variant:r,...t}){const[s,y]=R.useState(!0);return s&&e.jsxs(J,{"data-slot":"dialog-description",className:o("text-muted-foreground text-sm",a,te({variant:r})),...t,children:[e.jsxs("div",{className:"flex flex-row items-center justify-center gap-0.5",children:[r==="primary"&&e.jsx("span",{className:"size-[22px] flex items-center justify-center",children:e.jsx(S,{className:"text-primary"})}),r==="success"&&e.jsx("span",{className:"size-[22px] flex items-center justify-center",children:e.jsx(O,{className:"text-success"})}),r==="abnormal"&&e.jsx("span",{className:"size-[22px] flex items-center justify-center",children:e.jsx(q,{className:"text-abnormal"})}),r==="danger"&&e.jsx("span",{className:"size-[22px] flex items-center justify-center",children:e.jsx(v,{className:"text-danger"})}),t.children]}),e.jsx(i,{variant:"transparent",size:"link",onClick:()=>y(!1),children:e.jsx(Q,{})})]})}n.__docgenInfo={description:"",methods:[],displayName:"Dialog"};c.__docgenInfo={description:"",methods:[],displayName:"DialogClose"};m.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};E.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};u.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};g.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{hasDescription:{required:!1,tsType:{name:"boolean"},description:""},hasBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};b.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};P.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"};p.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};d.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};f.__docgenInfo={description:"",methods:[],displayName:"DialogDetails",props:{hasBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Ie={title:"Components/Dialog",component:n,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","success","abnormal"]},titleVariant:{control:{type:"select"},options:["default","primary","success","abnormal","danger"]}}},x={args:{},render:()=>e.jsx(n,{children:e.jsxs("form",{children:[e.jsx(d,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"开盖有惊喜"})}),e.jsx(b,{className:"backdrop-blur-sm"}),e.jsxs(m,{children:[e.jsx(g,{children:e.jsx(p,{children:"标题"})}),e.jsx(f,{children:e.jsx("div",{className:"w-112 h-40 bg-primary-light flex items-center justify-center",children:"这是一个无害的编辑区"})}),e.jsxs(u,{children:[e.jsx(c,{asChild:!0,children:e.jsx(i,{variant:"default",size:"md",children:"取消"})}),e.jsx(i,{variant:"primary",size:"md",type:"submit",children:"确认"})]})]})]})})},h={args:{variant:"primary",titleVariant:"default"},render:a=>e.jsx(n,{children:e.jsxs("form",{children:[e.jsx(d,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"开盖有惊喜"})}),e.jsxs(m,{children:[e.jsx(g,{children:e.jsx(p,{children:"标题"})}),e.jsx(E,{variant:a.titleVariant,children:"这是一条普通的消息提示"}),e.jsx(f,{children:e.jsx("div",{className:"w-112 h-40 bg-primary-light flex items-center justify-center",children:"这是一个无害的编辑区"})}),e.jsxs(u,{children:[e.jsx(c,{asChild:!0,children:e.jsx(i,{variant:"default",size:"md",children:"取消"})}),e.jsx(i,{variant:"primary",size:"md",type:"submit",children:"确认"})]})]})]})})},D={args:{variant:"primary",titleVariant:"primary"},render:a=>e.jsx(n,{children:e.jsxs("form",{children:[e.jsx(d,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"开盖有惊喜"})}),e.jsxs(m,{showCloseButton:!1,children:[e.jsx(g,{hasBorder:!1,children:e.jsx(p,{variant:a.titleVariant,children:"标题"})}),e.jsx(f,{variant:a.titleVariant==="default"?"default":"icon",hasBorder:!1,children:e.jsx("div",{children:"我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度"})}),e.jsx(u,{children:e.jsx(c,{asChild:!0,children:e.jsx(i,{variant:"primary",size:"md",type:"submit",children:"知道了"})})})]})]})})},j={args:{variant:"primary",titleVariant:"primary"},render:a=>e.jsx(n,{children:e.jsxs("form",{children:[e.jsx(d,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"开盖有惊喜"})}),e.jsxs(m,{showCloseButton:!1,children:[e.jsx(g,{hasBorder:!1,children:e.jsx(p,{variant:a.titleVariant,children:"标题"})}),e.jsx(f,{variant:a.titleVariant==="default"?"default":"icon",hasBorder:!1,children:e.jsx("div",{children:"我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度"})}),e.jsxs(u,{children:[e.jsx(c,{asChild:!0,children:e.jsx(i,{variant:"default",size:"md",children:"取消"})}),e.jsx(i,{variant:"primary",size:"md",type:"submit",children:"确认"})]})]})]})})};var C,N,B;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <Dialog>\r
                <form>\r
                    <DialogTrigger asChild>\r
                        <Button variant="outline">开盖有惊喜</Button>\r
                    </DialogTrigger>\r
                    <DialogOverlay className="backdrop-blur-sm" />\r
                    <DialogContent>\r
                        <DialogHeader>\r
                            <DialogTitle>标题</DialogTitle>\r
                            {/* <DialogDescription>\r
                                Make changes to your profile here. Click save when you&apos;re\r
                                done.\r
                             </DialogDescription> */}\r
                        </DialogHeader>\r
                        <DialogDetails>\r
                            <div className="w-112 h-40 bg-primary-light flex items-center justify-center">这是一个无害的编辑区</div>\r
                        </DialogDetails>\r
                        <DialogFooter>\r
                            <DialogClose asChild>\r
                                <Button variant="default" size={'md'}>取消</Button>\r
                            </DialogClose>\r
                            <Button variant='primary' size={'md'} type="submit">确认</Button>\r
                        </DialogFooter>\r
                    </DialogContent>\r
                </form>\r
            </Dialog>;
  }
}`,...(B=(N=x.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var V,z,T;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    titleVariant: 'default'
  },
  render: args => {
    return <Dialog>\r
                <form>\r
                    <DialogTrigger asChild>\r
                        <Button variant="outline">开盖有惊喜</Button>\r
                    </DialogTrigger>\r
                    {/* <DialogOverlay className="bg-black/60 backdrop-blur-sm" /> */}\r
                    <DialogContent>\r
                        <DialogHeader>\r
                            <DialogTitle>标题</DialogTitle>\r
\r
                        </DialogHeader>\r
                        <DialogDescription variant={args.titleVariant}>\r
                            这是一条普通的消息提示\r
                        </DialogDescription>\r
                        <DialogDetails>\r
                            <div className="w-112 h-40 bg-primary-light flex items-center justify-center">这是一个无害的编辑区</div>\r
                        </DialogDetails>\r
                        <DialogFooter>\r
                            <DialogClose asChild>\r
                                <Button variant="default" size={'md'}>取消</Button>\r
                            </DialogClose>\r
                            <Button variant='primary' size={'md'} type="submit">确认</Button>\r
                        </DialogFooter>\r
                    </DialogContent>\r
                </form>\r
            </Dialog>;
  }
}`,...(T=(z=h.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var _,w,I;D.parameters={...D.parameters,docs:{...(_=D.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    titleVariant: 'primary'
  },
  render: args => {
    return <Dialog>\r
                <form>\r
                    <DialogTrigger asChild>\r
                        <Button variant="outline">开盖有惊喜</Button>\r
                    </DialogTrigger>\r
                    <DialogContent showCloseButton={false}>\r
                        <DialogHeader hasBorder={false}>\r
                            <DialogTitle variant={args.titleVariant}>标题</DialogTitle>\r
                        </DialogHeader>\r
                        <DialogDetails variant={args.titleVariant === 'default' ? 'default' : 'icon'} hasBorder={false}>\r
                            <div>\r
                                我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度\r
                            </div>\r
                        </DialogDetails>\r
                        <DialogFooter>\r
                            <DialogClose asChild>\r
                                <Button variant='primary' size={'md'} type="submit">知道了</Button>\r
                            </DialogClose>\r
                        </DialogFooter>\r
                    </DialogContent>\r
                </form>\r
            </Dialog>;
  }
}`,...(I=(w=D.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var k,F,L;j.parameters={...j.parameters,docs:{...(k=j.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    titleVariant: 'primary'
  },
  render: args => {
    return <Dialog>\r
                <form>\r
                    <DialogTrigger asChild>\r
                        <Button variant="outline">开盖有惊喜</Button>\r
                    </DialogTrigger>\r
                    <DialogContent showCloseButton={false}>\r
                        <DialogHeader hasBorder={false}>\r
                            <DialogTitle variant={args.titleVariant}>标题</DialogTitle>\r
                        </DialogHeader>\r
                        <DialogDetails variant={args.titleVariant === 'default' ? 'default' : 'icon'} hasBorder={false}>\r
                            <div>\r
                                我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度\r
                            </div>\r
                        </DialogDetails>\r
                        <DialogFooter>\r
                            <DialogClose asChild>\r
                                <Button variant="default" size={'md'}>取消</Button>\r
                            </DialogClose>\r
                            <Button variant='primary' size={'md'} type="submit">确认</Button>\r
                        </DialogFooter>\r
                    </DialogContent>\r
                </form>\r
            </Dialog>;
  }
}`,...(L=(F=j.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const ke=["Default","Description","Feedback","Feedback2"];export{x as Default,h as Description,D as Feedback,j as Feedback2,ke as __namedExportsOrder,Ie as default};
