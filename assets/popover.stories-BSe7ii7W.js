import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as h}from"./button-7wqqdEkD.js";import{P as g,a as u,b as v,c as O}from"./popover-BlGqcMqN.js";import{I as ue,a as ve,b as Oe,c as we,d as xe,e as Pe}from"./item--q494X8l.js";import{I as je}from"./infoCirecledIcon-Bh4TnBS0.js";import{C as ye}from"./closeIcon-6bXNgUOm.js";import{r as w}from"./iframe-DPkNXRqw.js";import"./index-CVJC_e1g.js";import"./index-CGrAONsN.js";import"./utils-D-KgF5mV.js";import"./index-BVl5ASR5.js";import"./index-DW48STyt.js";import"./index-3PNdDA9F.js";import"./index-D7KDVih1.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-BFJ-Qg5v.js";import"./index-CZ6tSH_D.js";import"./index-nrtHsWe5.js";import"./Combination-DlUI4tCQ.js";import"./index-CcTl1dMB.js";import"./index-CGny4Gu2.js";import"./index-BXyZJ4ef.js";import"./index-Piay1Hl0.js";import"./index-tTCODTNv.js";import"./index-DUrgPtLc.js";import"./index-CNmy0mc9.js";import"./index-TAJg0BDn.js";import"./separator-7reEwx-p.js";function C({title:r,description:i,showIcon:a=!1,icon:l,showClose:n=!1,onClose:c,showFoot:p=!1,onConfirm:d,onCancel:f,className:m}){const t=r||n;return e.jsxs(ue,{variant:"popover",size:"flex",className:m,children:[t&&e.jsxs(ve,{children:[e.jsxs(Oe,{children:[a&&(l??e.jsx(je,{className:"text-primary"})),r&&` ${r}`]}),n&&e.jsx(h,{variant:"transparent",size:"link",onClick:c,children:e.jsx(ye,{className:"text-secondary-information"})})]}),e.jsx(we,{children:e.jsx(xe,{children:i})}),p&&e.jsxs(Pe,{className:"mt-2",children:[e.jsx(h,{variant:"default",size:"md",onClick:f,children:"取消"}),e.jsx(h,{variant:"primary",size:"md",onClick:d,children:"确认"})]})]})}C.__docgenInfo={description:"",methods:[],displayName:"PopoverItem",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode | JSX.Element",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"},{name:"JSX.Element"}]},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | JSX.Element",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"JSX.Element"}]},description:""},showClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showFoot:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const os={title:"Components/Popover",tags:["autodocs"],component:g,argTypes:{side:{control:{type:"select"},options:["top","right","bottom","left"]},align:{control:{type:"select"},options:["start","center","end"]}}},P={args:{variant:"primary",side:"top",align:"center",sideOffset:0,alignOffset:0,title:"标题",description:"描述内容",showIcon:!0,showClose:!0},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,title:p,description:d,showIcon:f,showClose:m}=r,[t,s]=w.useState(!1),o=()=>{s(!1)};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:t,onOpenChange:s,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>s(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{title:p,description:d,showIcon:f,showClose:m,onCancel:o,onConfirm:o,onClose:o})]})]})})}},j={args:{variant:"primary",side:"bottom",align:"center",sideOffset:0,alignOffset:0,title:"标题",description:"描述内容",showIcon:!0,showClose:!0},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,title:p,description:d,showIcon:f,showClose:m}=r,[t,s]=w.useState(!1),o=()=>{s(!1)};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:t,onOpenChange:s,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>s(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{title:p,description:d,showIcon:f,showClose:m,onCancel:o,onConfirm:o,onClose:o})]})]})})}},y={args:{variant:"primary",side:"left",align:"center",sideOffset:0,alignOffset:0,title:"标题",description:"描述内容",showIcon:!0,showClose:!0},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,title:p,description:d,showIcon:f,showClose:m}=r,[t,s]=w.useState(!1),o=()=>{s(!1)};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:t,onOpenChange:s,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>s(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{title:p,description:d,showIcon:f,showClose:m,onCancel:o,onConfirm:o,onClose:o})]})]})})}},I={args:{variant:"primary",side:"right",align:"center",sideOffset:0,alignOffset:0,title:"标题",description:"描述内容",showIcon:!0,showClose:!0},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,title:p,description:d,showIcon:f,showClose:m}=r,[t,s]=w.useState(!1),o=()=>{s(!1)};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:t,onOpenChange:s,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>s(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{title:p,description:d,showIcon:f,showClose:m,onCancel:o,onConfirm:o,onClose:o})]})]})})}},S={args:{variant:"primary",side:"right",align:"start",sideOffset:0,alignOffset:0,title:"标题",description:"描述内容",showIcon:!0,showClose:!0},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,title:p,description:d,showIcon:f,showClose:m}=r,[t,s]=w.useState(!1),o=()=>{s(!1)};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:t,onOpenChange:s,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>s(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{title:p,description:d,showIcon:f,showClose:m,onCancel:o,onConfirm:o,onClose:o})]})]})})}},T={args:{variant:"primary",side:"right",align:"end",sideOffset:0,alignOffset:0,title:"标题",description:"描述内容",showIcon:!0,showClose:!0},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,title:p,description:d,showIcon:f,showClose:m}=r,[t,s]=w.useState(!1),o=()=>{s(!1)};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:t,onOpenChange:s,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>s(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{title:p,description:d,showIcon:f,showClose:m,onCancel:o,onConfirm:o,onClose:o})]})]})})}},N={args:{variant:"primary",side:"right",align:"center",sideOffset:0,alignOffset:0,description:"较多的内容描述，否则用tooltip",showIcon:!1,showClose:!1},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,description:p,showIcon:d,showClose:f}=r,[m,t]=w.useState(!1),s=()=>{t(!1)};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:m,onOpenChange:t,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>t(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{description:p,showIcon:d,showClose:f,onCancel:s,onConfirm:s,onClose:s})]})]})})}},B={args:{variant:"primary",side:"right",align:"center",sideOffset:0,alignOffset:0,title:"标题",description:"较多的内容描述，否则用tooltip",showIcon:!1,showClose:!1},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,title:p,description:d,showIcon:f,showClose:m}=r,[t,s]=w.useState(!1),o=()=>{s(!1)};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:t,onOpenChange:s,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>s(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{title:p,description:d,showIcon:f,showClose:m,onCancel:o,onConfirm:o,onClose:o})]})]})})}},k={args:{variant:"primary",side:"right",align:"center",sideOffset:0,alignOffset:0,title:"标题",description:"较多的内容描述，否则用tooltip",showIcon:!1,showClose:!0},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,title:p,description:d,showIcon:f,showClose:m}=r,[t,s]=w.useState(!1),o=()=>{s(!1)};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:t,onOpenChange:s,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>s(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{title:p,description:d,showIcon:f,showClose:m,onCancel:o,onConfirm:o,onClose:o})]})]})})}},z={args:{variant:"primary",side:"right",align:"center",sideOffset:0,alignOffset:0,title:"标题",description:"较多的内容描述，否则用tooltip",showIcon:!0,showClose:!0},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,title:p,description:d,showIcon:f,showClose:m}=r,[t,s]=w.useState(!1),o=()=>{s(!1)};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:t,onOpenChange:s,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>s(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{title:p,description:d,showIcon:f,showClose:m,onCancel:o,onConfirm:o,onClose:o})]})]})})}},b={args:{variant:"primary",side:"right",align:"center",sideOffset:0,alignOffset:0,title:"标题",description:"较多的内容描述，否则用tooltip",showIcon:!0,showClose:!0,showFoot:!0},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,title:p,description:d,showIcon:f,showClose:m,showFoot:t}=r,[s,o]=w.useState(!1),x=()=>{o(!1)},F=()=>{alert("confirm")};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:s,onOpenChange:o,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>o(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{title:p,description:d,showIcon:f,showClose:m,onCancel:x,onConfirm:F,onClose:x,showFoot:t})]})]})})}},Ie=()=>e.jsx("div",{className:"bg-primary-light w-full h-[52px] flex items-center justify-center",children:"自定义区域"}),A={args:{variant:"primary",side:"right",align:"center",sideOffset:0,alignOffset:0,title:"标题",description:Ie(),showIcon:!0,showClose:!0,showFoot:!1},render:r=>{const{variant:i,side:a,align:l,sideOffset:n,alignOffset:c,title:p,description:d,showIcon:f,showClose:m,showFoot:t}=r,[s,o]=w.useState(!1),x=()=>{o(!1)},F=()=>{alert("confirm")};return e.jsx("div",{className:"flex items-center justify-center h-[200px]",children:e.jsxs(g,{variant:i,open:s,onOpenChange:o,children:[e.jsx(u,{asChild:!0,children:e.jsx(h,{variant:"primary",size:"md",onClick:()=>o(!0),children:"没有锚点"})}),e.jsxs(v,{side:a,align:l,sideOffset:n,alignOffset:c,children:[e.jsx(O,{}),e.jsx(C,{title:p,description:d,showIcon:f,showClose:m,onCancel:x,onConfirm:F,onClose:x,showFoot:t})]})]})})}};var R,q,E;P.parameters={...P.parameters,docs:{...(R=P.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "top",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    title: "标题",
    description: "描述内容",
    showIcon: true,
    showClose: true
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      title,
      description,
      showIcon,
      showClose
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem title={title} description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onClose} onClose={onClose} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(E=(q=P.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var J,X,_;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "bottom",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    title: "标题",
    description: "描述内容",
    showIcon: true,
    showClose: true
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      title,
      description,
      showIcon,
      showClose
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem title={title} description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onClose} onClose={onClose} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(_=(X=j.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var V,H,L;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "left",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    title: "标题",
    description: "描述内容",
    showIcon: true,
    showClose: true
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      title,
      description,
      showIcon,
      showClose
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem title={title} description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onClose} onClose={onClose} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(L=(H=y.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var D,$,G;I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "right",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    title: "标题",
    description: "描述内容",
    showIcon: true,
    showClose: true
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      title,
      description,
      showIcon,
      showClose
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem title={title} description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onClose} onClose={onClose} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(G=($=I.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var K,M,Q;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "right",
    align: "start",
    sideOffset: 0,
    alignOffset: 0,
    title: "标题",
    description: "描述内容",
    showIcon: true,
    showClose: true
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      title,
      description,
      showIcon,
      showClose
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem title={title} description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onClose} onClose={onClose} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(Q=(M=S.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,W,Y;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "right",
    align: "end",
    sideOffset: 0,
    alignOffset: 0,
    title: "标题",
    description: "描述内容",
    showIcon: true,
    showClose: true
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      title,
      description,
      showIcon,
      showClose
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem title={title} description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onClose} onClose={onClose} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(Y=(W=T.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,se;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "right",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    description: "较多的内容描述，否则用tooltip",
    showIcon: false,
    showClose: false
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      description,
      showIcon,
      showClose
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onClose} onClose={onClose} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(se=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var oe,re,te;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "right",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    title: "标题",
    description: "较多的内容描述，否则用tooltip",
    showIcon: false,
    showClose: false
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      title,
      description,
      showIcon,
      showClose
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem title={title} description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onClose} onClose={onClose} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(te=(re=B.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,ie,ae;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "right",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    title: "标题",
    description: "较多的内容描述，否则用tooltip",
    showIcon: false,
    showClose: true
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      title,
      description,
      showIcon,
      showClose
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem title={title} description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onClose} onClose={onClose} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(ae=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var le,ce,pe;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "right",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    title: "标题",
    description: "较多的内容描述，否则用tooltip",
    showIcon: true,
    showClose: true
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      title,
      description,
      showIcon,
      showClose
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem title={title} description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onClose} onClose={onClose} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(pe=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,fe,me;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "right",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    title: "标题",
    description: "较多的内容描述，否则用tooltip",
    showIcon: true,
    showClose: true,
    showFoot: true
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      title,
      description,
      showIcon,
      showClose,
      showFoot
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    const onConfirm = () => {
      alert("confirm");
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem title={title} description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onConfirm} onClose={onClose} showFoot={showFoot} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(me=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var he,ge,Ce;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    side: "right",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    title: "标题",
    description: getCustomArea(),
    showIcon: true,
    showClose: true,
    showFoot: false
  },
  render: args => {
    const {
      variant,
      side,
      align,
      sideOffset,
      alignOffset,
      title,
      description,
      showIcon,
      showClose,
      showFoot
    } = args;
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => {
      setOpen(false);
    };
    const onConfirm = () => {
      alert("confirm");
    };
    return <div className="flex items-center justify-center h-[200px]">\r
                <Popover variant={variant} open={open} onOpenChange={setOpen}>\r
                    <PopoverTrigger asChild>\r
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>\r
                            没有锚点\r
                        </Button>\r
                    </PopoverTrigger>\r
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>\r
                        <PopoverArrow />\r
                        <PopoverItem title={title} description={description} showIcon={showIcon} showClose={showClose} onCancel={onClose} onConfirm={onConfirm} onClose={onClose} showFoot={showFoot} />\r
                    </PopoverContent>\r
                </Popover>\r
            </div>;
  }
}`,...(Ce=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};const rs=["TopPrimary","BottomPrimary","LeftPrimary","RightPrimary","StartPrimary","EndPrimary","BasicPrimary","TitlePrimary","ClosePrimary","IconPrimary","ShowFootPrimary","CustomAreaPrimary"];export{N as BasicPrimary,j as BottomPrimary,k as ClosePrimary,A as CustomAreaPrimary,T as EndPrimary,z as IconPrimary,y as LeftPrimary,I as RightPrimary,b as ShowFootPrimary,S as StartPrimary,B as TitlePrimary,P as TopPrimary,rs as __namedExportsOrder,os as default};
