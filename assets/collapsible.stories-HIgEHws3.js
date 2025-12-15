import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as p}from"./iframe-DPkNXRqw.js";import{B as m}from"./button-7wqqdEkD.js";import{c as u}from"./utils-D-KgF5mV.js";import{R as B,C as R,a as S}from"./index-BF6uJWLq.js";import{c as f}from"./index-CGrAONsN.js";import{a as g}from"./react-icons.esm-_2Ujgxc8.js";import"./index-CVJC_e1g.js";import"./index-DW48STyt.js";import"./index-3PNdDA9F.js";import"./index-TAJg0BDn.js";import"./index-CGny4Gu2.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-CNmy0mc9.js";import"./index-CcTl1dMB.js";const H=f("",{variants:{variant:{primary:""},size:{sm:"",lg:""}},defaultVariants:{variant:"primary"}});function l({...e}){return a.jsx(B,{"data-slot":"collapsible",className:u(H({variant:e.variant,size:e.size}),e.className),...e})}const _=f("",{variants:{variant:{primary:"bg-card",tree:"bg-transparent"},size:{sm:"px-4 py-2",lg:"px-4 py-2",tree:""},layout:{forward:"inline-flex items-center flex-row gap-2 flex-1",back:"inline-flex items-center flex-row justify-between flex-1"},border:{none:"",bottom:"border-b border-border-split"}},defaultVariants:{variant:"primary"}});function i({...e}){return a.jsx("div",{"data-slot":"collapsible-header",className:u(e.disabled?"cursor-not-allowed text-disabled":"",_({variant:e.variant,size:e.size,layout:e.layout,border:e.border}),e.className),...e})}const V=f("",{variants:{variant:{primary:""},size:{sm:"",lg:""}},defaultVariants:{variant:"primary"}});function t({...e}){return a.jsx(R,{"data-slot":"collapsible-trigger",className:u(V({variant:e.variant,size:e.size}),e.className),...e})}const k=f("",{variants:{variant:{primary:"bg-fill text-center",tree:""},size:{sm:"pt-3 pr-4 pb-3 pl-10",lg:"pt-3 pr-4 pb-3 pl-10",tree:""}},defaultVariants:{variant:"primary"}});function o({...e}){return a.jsx(S,{"data-slot":"collapsible-content",className:u(e.disabled?"cursor-not-allowed text-disabled":"",k({variant:e.variant,size:e.size}),e.className),...e})}l.__docgenInfo={description:"",methods:[],displayName:"Collapsible"};t.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTrigger"};o.__docgenInfo={description:"",methods:[],displayName:"CollapsibleContent",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"CollapsibleHeader",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Z={title:"Components/Collapsible",tags:["autodocs"],component:l,argTypes:{variant:{control:{type:"select"},options:["primary"]},border:{control:{type:"select"},options:["none","bottom"]},disabled:{control:"boolean"}}},n={args:{variant:"primary",size:"sm",layout:"forward",border:"none",disabled:!1},render:e=>{const[r,s]=p.useState(!1);return a.jsxs(l,{open:r,onOpenChange:s,className:"flex w-full flex-col",disabled:e.disabled,children:[a.jsxs(i,{layout:e.layout,variant:e.variant,size:e.size,border:e.border,disabled:e.disabled,children:[a.jsx(t,{asChild:!0,children:a.jsx(m,{variant:"collapsible",children:a.jsx(g,{})})}),a.jsx("h4",{className:"text-sm font-semibold",children:"这是一个折叠面板标题"})]}),a.jsx(o,{variant:e.variant,size:e.size,disabled:e.disabled,children:"这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。 这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。 这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。 这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。"})]})}},d={args:{variant:"primary",size:"sm",layout:"forward",border:"bottom"},render:e=>{const[r,s]=p.useState(!1);return a.jsxs(l,{open:r,onOpenChange:s,className:"flex w-full flex-col",disabled:!1,children:[a.jsxs(i,{layout:e.layout,variant:e.variant,size:e.size,border:e.border,children:[a.jsx(t,{asChild:!0,children:a.jsx(m,{variant:"collapsible",children:a.jsx(g,{})})}),a.jsx("h4",{className:"text-sm font-semibold",children:"这是一个折叠面板标题"})]}),a.jsx(o,{variant:e.variant,size:e.size,disabled:e.disabled,children:"这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。"})]})}},b={args:{variant:"primary",size:"sm",layout:"back",border:"bottom"},render:e=>{const[r,s]=p.useState(!1);return a.jsxs(l,{open:r,onOpenChange:s,className:"flex w-full flex-col",disabled:!1,children:[a.jsxs(i,{layout:e.layout,variant:e.variant,size:e.size,border:e.border,children:[a.jsx("h4",{className:"text-sm font-semibold",children:"这是一个折叠面板标题"}),a.jsx(t,{asChild:!0,children:a.jsx(m,{variant:"collapsible",children:a.jsx(g,{})})})]}),a.jsx(o,{variant:e.variant,size:e.size,disabled:e.disabled,children:"这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。"})]})}},c={args:{variant:"primary",size:"sm",layout:"forward",border:"none",disabled:!0},render:e=>{const[r,s]=p.useState(!1);return a.jsxs(l,{open:r,onOpenChange:s,className:"flex w-full flex-col",disabled:e.disabled,children:[a.jsxs(i,{layout:e.layout,variant:e.variant,size:e.size,border:e.border,disabled:e.disabled,children:[a.jsx(t,{asChild:!0,children:a.jsx(m,{variant:"collapsible",children:a.jsx(g,{})})}),a.jsx("h4",{className:"text-sm font-semibold",children:"这是一个折叠面板标题"})]}),a.jsx(o,{variant:e.variant,size:e.size,disabled:e.disabled,children:"这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。"})]})}};var C,v,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    layout: 'forward',
    border: 'none',
    disabled: false
  },
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex w-full flex-col" disabled={args.disabled}>\r
                <CollapsibleHeader layout={args.layout} variant={args.variant} size={args.size} border={args.border} disabled={args.disabled}>\r
                    <CollapsibleTrigger asChild>\r
                        <Button variant={'collapsible'}>\r
                            <TriangleRightIcon />\r
                        </Button>\r
                    </CollapsibleTrigger>\r
                    <h4 className="text-sm font-semibold">\r
                        这是一个折叠面板标题\r
                    </h4>\r
                </CollapsibleHeader>\r
\r
                <CollapsibleContent variant={args.variant} size={args.size} disabled={args.disabled}>\r
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。\r
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。\r
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。\r
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。\r
                </CollapsibleContent>\r
            </Collapsible>;
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,y,z;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    layout: 'forward',
    border: 'bottom'
  },
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex w-full flex-col" disabled={false}>\r
                <CollapsibleHeader layout={args.layout} variant={args.variant} size={args.size} border={args.border}>\r
                    <CollapsibleTrigger asChild>\r
                        <Button variant={'collapsible'}>\r
                            <TriangleRightIcon />\r
                        </Button>\r
                    </CollapsibleTrigger>\r
                    <h4 className="text-sm font-semibold">\r
                        这是一个折叠面板标题\r
                    </h4>\r
                </CollapsibleHeader>\r
\r
                <CollapsibleContent variant={args.variant} size={args.size} disabled={args.disabled}>\r
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。\r
                </CollapsibleContent>\r
            </Collapsible>;
  }
}`,...(z=(y=d.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var j,O,N;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    layout: 'back',
    border: 'bottom'
  },
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex w-full flex-col" disabled={false}>\r
                <CollapsibleHeader layout={args.layout} variant={args.variant} size={args.size} border={args.border}>\r
                    <h4 className="text-sm font-semibold">\r
                        这是一个折叠面板标题\r
                    </h4>\r
                    <CollapsibleTrigger asChild>\r
                        <Button variant={'collapsible'}>\r
                            <TriangleRightIcon />\r
                        </Button>\r
                    </CollapsibleTrigger>\r
                </CollapsibleHeader>\r
                <CollapsibleContent variant={args.variant} size={args.size} disabled={args.disabled}>\r
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。\r
                </CollapsibleContent>\r
            </Collapsible>;
  }
}`,...(N=(O=b.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var I,w,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    layout: 'forward',
    border: 'none',
    disabled: true
  },
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex w-full flex-col" disabled={args.disabled}>\r
                <CollapsibleHeader layout={args.layout} variant={args.variant} size={args.size} border={args.border} disabled={args.disabled}>\r
                    <CollapsibleTrigger asChild>\r
                        <Button variant={'collapsible'}>\r
                            <TriangleRightIcon />\r
                        </Button>\r
                    </CollapsibleTrigger>\r
                    <h4 className="text-sm font-semibold">\r
                        这是一个折叠面板标题\r
                    </h4>\r
                </CollapsibleHeader>\r
\r
                <CollapsibleContent variant={args.variant} size={args.size} disabled={args.disabled}>\r
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。\r
                </CollapsibleContent>\r
            </Collapsible>;
  }
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const ee=["Primary","Border","Back","Disabled"];export{b as Back,d as Border,c as Disabled,n as Primary,ee as __namedExportsOrder,Z as default};
