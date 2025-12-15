import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-DPkNXRqw.js";import{c as le}from"./utils-D-KgF5mV.js";import{P as me,a as ue,b as de}from"./index-BVl5ASR5.js";import{C as ce}from"./closeIcon-6bXNgUOm.js";import{I as pe,a as ve,b as he,c as xe}from"./input-group-CAYfQ-0y.js";import{M as ge}from"./month-picker-CAtHi9fj.js";import{C as ye}from"./calendar-Xmv9Kbmq.js";import"./index-DW48STyt.js";import"./index-CVJC_e1g.js";import"./index-3PNdDA9F.js";import"./index-D7KDVih1.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-BFJ-Qg5v.js";import"./index-CZ6tSH_D.js";import"./index-nrtHsWe5.js";import"./Combination-DlUI4tCQ.js";import"./index-CcTl1dMB.js";import"./index-CGny4Gu2.js";import"./index-BXyZJ4ef.js";import"./index-Piay1Hl0.js";import"./index-tTCODTNv.js";import"./index-DUrgPtLc.js";import"./index-CNmy0mc9.js";import"./index-TAJg0BDn.js";import"./index-CGrAONsN.js";import"./button-7wqqdEkD.js";import"./input-BNOkW-iY.js";import"./textarea-Dqt5OPUb.js";import"./select--o5F3QYD.js";import"./index-BdQq_4o_.js";import"./index-ZCJ3rLJN.js";import"./index-xbPJJJA0.js";import"./index-BwCODQwj.js";import"./index-CdverDIJ.js";import"./index-BE4RcSlc.js";import"./empty-CtEqluxS.js";import"./chevron-down-BxteM__a.js";import"./createLucideIcon-BVkOKLvB.js";import"./check-DLJQi36D.js";function t({size:n="md",value:r,onChange:s,contentClassName:i,placeholder:l="选择月份",showFooter:m=!1,footChildren:K,onConfirm:C,onCancel:b,showHeader:Q,headerChildren:U,minYear:X,maxYear:Z}){const S=s!==void 0,[ee,j]=a.useState(!1),[ne,re]=a.useState(),u=S?r:ne,ae=u?`${u.year}年${u.month}月`:"",te=u!==void 0,w=o=>{S||re(o),s==null||s(o)},se=o=>{o.stopPropagation(),w(void 0)},oe=()=>{C==null||C(),j(!1)},ie=()=>{b==null||b(),j(!1)};return e.jsxs(me,{open:ee,onOpenChange:j,children:[e.jsx(ue,{asChild:!0,children:e.jsxs(pe,{variant:"primary",size:n,children:[e.jsx(ve,{placeholder:l,value:ae,readOnly:!0}),te?e.jsx(he,{variant:"transparent",size:"icon-xs",onClick:se,children:e.jsx(ce,{})}):e.jsx(xe,{align:"inline-end",children:e.jsx(ye,{})})]})}),e.jsx(de,{className:le("w-[var(--radix-popover-trigger-width)]","bg-secondary-background","rounded-md","border border-split","[box-shadow:0px_6px_16px_rgba(0,0,0,0.08)]",i),alignOffset:5,sideOffset:5,onInteractOutside:o=>{const d=o.target;(d.closest("[data-radix-select-content]")||d.closest("[data-radix-select-viewport]")||d.closest("[data-radix-popper-content-wrapper]")||d.closest("[data-radix-select-trigger]")||d.closest('[data-slot="select"]'))&&o.preventDefault()},children:e.jsx(ge,{value:u,onChange:w,showFooter:m,footChildren:K,onConfirm:oe,onCancel:ie,minYear:X,maxYear:Z,showHeader:Q,headerChildren:U})})]})}t.__docgenInfo={description:"",methods:[],displayName:"MonthPopover",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},value:{required:!1,tsType:{name:"signature",type:"object",raw:"{ year: number, month: number }",signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}}]}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: { year: number, month: number } | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"{ year: number, month: number } | undefined",elements:[{name:"signature",type:"object",raw:"{ year: number, month: number }",signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}}]}},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'选择月份'",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},footChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showHeader:{required:!1,tsType:{name:"boolean"},description:""},headerChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},minYear:{required:!1,tsType:{name:"number"},description:""},maxYear:{required:!1,tsType:{name:"number"},description:""}}};const ln={title:"Components/MonthPopover",component:t,tags:["autodocs"]},c={render:()=>{const[n,r]=a.useState();return e.jsxs("div",{className:"p-8 space-y-4 w-120",children:[e.jsx(t,{value:n,onChange:r}),e.jsxs("div",{className:"text-sm text-secondary",children:["选中: ",n?`${n.year}年${n.month}月`:"未选择"]})]})}},p={render:()=>{const[n,r]=a.useState(),[s,i]=a.useState(),[l,m]=a.useState();return e.jsxs("div",{className:"p-8 space-y-4 w-120",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-sm font-medium",children:"Small"}),e.jsx(t,{size:"sm",value:n,onChange:r})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-sm font-medium",children:"Medium (默认)"}),e.jsx(t,{size:"md",value:s,onChange:i})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-sm font-medium",children:"Large"}),e.jsx(t,{size:"lg",value:l,onChange:m})]})]})}},v={render:()=>{const[n,r]=a.useState({year:2024,month:6});return e.jsxs("div",{className:"p-8 space-y-4 w-120",children:[e.jsx(t,{value:n,onChange:r}),e.jsxs("div",{className:"text-sm text-secondary",children:["选中: ",n?`${n.year}年${n.month}月`:"未选择"]})]})}},h={render:()=>{const[n,r]=a.useState();return e.jsx("div",{className:"p-8 w-120",children:e.jsx(t,{value:n,onChange:r,placeholder:"请选择月份"})})}},x={render:()=>{const[n,r]=a.useState({year:2024,month:3}),[s,i]=a.useState(),l=()=>{i(n),console.log("确认选择:",n)},m=()=>{r(s||{year:new Date().getFullYear(),month:new Date().getMonth()+1}),console.log("取消选择")};return e.jsxs("div",{className:"p-8 space-y-4 w-120",children:[e.jsx(t,{value:n,onChange:r,showFooter:!0,onConfirm:l,onCancel:m}),e.jsxs("div",{className:"space-y-2 text-sm text-secondary",children:[e.jsxs("div",{children:["当前选择: ",n?`${n.year}年${n.month}月`:"未选择"]}),e.jsxs("div",{children:["已确认: ",s?`${s.year}年${s.month}月`:"未确认"]})]})]})}},g={render:()=>{const[n,r]=a.useState();return e.jsx("div",{className:"p-8 w-120",children:e.jsx(t,{value:n,onChange:r,showFooter:!0,footChildren:e.jsx("div",{className:"text-xs text-primary",children:"这个是可以自己传入的！"}),onConfirm:()=>console.log("确认"),onCancel:()=>console.log("取消")})})}},y={render:()=>{const[n,r]=a.useState();return e.jsx("div",{className:"p-8 w-120",children:e.jsx(t,{value:n,onChange:r,showHeader:!0,headerChildren:e.jsx("div",{className:"text-xs text-primary",children:"请选择月份"}),onConfirm:()=>console.log("确认"),onCancel:()=>console.log("取消")})})}},f={render:()=>{const[n,r]=a.useState();return e.jsx("div",{className:"p-8 w-120",children:e.jsx(t,{value:n,onChange:r,minYear:2020,maxYear:2030})})}};var N,V,M;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    }>();
    return <div className="p-8 space-y-4 w-120">\r
                <MonthPopover value={value} onChange={setValue} />\r
                <div className="text-sm text-secondary">\r
                    选中: {value ? \`\${value.year}年\${value.month}月\` : "未选择"}\r
                </div>\r
            </div>;
  }
}`,...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var P,$,q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [valueSm, setValueSm] = useState<{
      year: number;
      month: number;
    }>();
    const [valueMd, setValueMd] = useState<{
      year: number;
      month: number;
    }>();
    const [valueLg, setValueLg] = useState<{
      year: number;
      month: number;
    }>();
    return <div className="p-8 space-y-4 w-120">\r
                <div>\r
                    <div className="mb-2 text-sm font-medium">Small</div>\r
                    <MonthPopover size="sm" value={valueSm} onChange={setValueSm} />\r
                </div>\r
\r
                <div>\r
                    <div className="mb-2 text-sm font-medium">Medium (默认)</div>\r
                    <MonthPopover size="md" value={valueMd} onChange={setValueMd} />\r
                </div>\r
\r
                <div>\r
                    <div className="mb-2 text-sm font-medium">Large</div>\r
                    <MonthPopover size="lg" value={valueLg} onChange={setValueLg} />\r
                </div>\r
            </div>;
  }
}`,...(q=($=p.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var T,F,R;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    } | undefined>({
      year: 2024,
      month: 6
    });
    return <div className="p-8 space-y-4 w-120">\r
                <MonthPopover value={value} onChange={setValue} />\r
                <div className="text-sm text-secondary">\r
                    选中: {value ? \`\${value.year}年\${value.month}月\` : '未选择'}\r
                </div>\r
            </div>;
  }
}`,...(R=(F=v.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var z,I,W;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    }>();
    return <div className="p-8 w-120">\r
                <MonthPopover value={value} onChange={setValue} placeholder="请选择月份" />\r
            </div>;
  }
}`,...(W=(I=h.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var Y,L,k;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    } | undefined>({
      year: 2024,
      month: 3
    });
    const [confirmed, setConfirmed] = useState<{
      year: number;
      month: number;
    } | undefined>();
    const handleConfirm = () => {
      setConfirmed(value);
      console.log("确认选择:", value);
    };
    const handleCancel = () => {
      setValue(confirmed || {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1
      });
      console.log("取消选择");
    };
    return <div className="p-8 space-y-4 w-120">\r
                <MonthPopover value={value} onChange={setValue} showFooter onConfirm={handleConfirm} onCancel={handleCancel} />\r
                <div className="space-y-2 text-sm text-secondary">\r
                    <div>当前选择: {value ? \`\${value.year}年\${value.month}月\` : "未选择"}</div>\r
                    <div>已确认: {confirmed ? \`\${confirmed.year}年\${confirmed.month}月\` : "未确认"}</div>\r
                </div>\r
            </div>;
  }
}`,...(k=(L=x.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var D,O,_;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    }>();
    return <div className="p-8 w-120">\r
                <MonthPopover value={value} onChange={setValue} showFooter footChildren={<div className="text-xs text-primary">\r
                            这个是可以自己传入的！\r
                        </div>} onConfirm={() => console.log("确认")} onCancel={() => console.log("取消")} />\r
            </div>;
  }
}`,...(_=(O=g.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var H,G,B;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    }>();
    return <div className="p-8 w-120">\r
                <MonthPopover value={value} onChange={setValue} showHeader headerChildren={<div className="text-xs text-primary">\r
                            请选择月份\r
                        </div>} onConfirm={() => console.log("确认")} onCancel={() => console.log("取消")} />\r
            </div>;
  }
}`,...(B=(G=y.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var E,A,J;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    }>();
    return <div className="p-8 w-120">\r
                <MonthPopover value={value} onChange={setValue} minYear={2020} maxYear={2030} />\r
            </div>;
  }
}`,...(J=(A=f.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};const mn=["Basic","Sizes","WithDefaultValue","CustomPlaceholder","WithFooter","WithCustomFooter","WithCustomHeader","WithCustomYearRange"];export{c as Basic,h as CustomPlaceholder,p as Sizes,g as WithCustomFooter,y as WithCustomHeader,f as WithCustomYearRange,v as WithDefaultValue,x as WithFooter,mn as __namedExportsOrder,ln as default};
