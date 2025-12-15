import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-DPkNXRqw.js";import{c as le}from"./utils-D-KgF5mV.js";import{P as ue,a as pe,b as ve}from"./index-BVl5ASR5.js";import{C as he}from"./closeIcon-6bXNgUOm.js";import{I as xe,a as ye,b as ge,c as fe}from"./input-group-CAYfQ-0y.js";import{Y as Ye}from"./year-picker-C-Mx0Oiu.js";import{C as Ce}from"./calendar-Xmv9Kbmq.js";import"./index-DW48STyt.js";import"./index-CVJC_e1g.js";import"./index-3PNdDA9F.js";import"./index-D7KDVih1.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-BFJ-Qg5v.js";import"./index-CZ6tSH_D.js";import"./index-nrtHsWe5.js";import"./Combination-DlUI4tCQ.js";import"./index-CcTl1dMB.js";import"./index-CGny4Gu2.js";import"./index-BXyZJ4ef.js";import"./index-Piay1Hl0.js";import"./index-tTCODTNv.js";import"./index-DUrgPtLc.js";import"./index-CNmy0mc9.js";import"./index-TAJg0BDn.js";import"./index-CGrAONsN.js";import"./button-7wqqdEkD.js";import"./input-BNOkW-iY.js";import"./textarea-Dqt5OPUb.js";import"./select--o5F3QYD.js";import"./index-BdQq_4o_.js";import"./index-ZCJ3rLJN.js";import"./index-xbPJJJA0.js";import"./index-BwCODQwj.js";import"./index-CdverDIJ.js";import"./index-BE4RcSlc.js";import"./empty-CtEqluxS.js";import"./chevron-down-BxteM__a.js";import"./createLucideIcon-BVkOKLvB.js";import"./check-DLJQi36D.js";function n({size:r="md",value:a,onChange:t,contentClassName:o,placeholder:i="选择年份",showFooter:d=!1,footChildren:Z,onConfirm:Y,onCancel:C,showHeader:$,headerChildren:ee,minYear:re,maxYear:ae}){const N=t!==void 0,[se,j]=s.useState(!1),[ne,te]=s.useState(),c=N?a:ne,oe=c?c.toString():"",ie=c!==void 0,S=m=>{N||te(m),t==null||t(m)},de=m=>{m.stopPropagation(),S(void 0)},ce=()=>{Y==null||Y(),j(!1)},me=()=>{C==null||C(),j(!1)};return e.jsxs(ue,{open:se,onOpenChange:j,children:[e.jsx(pe,{asChild:!0,children:e.jsxs(xe,{variant:"primary",size:r,children:[e.jsx(ye,{placeholder:i,value:oe,readOnly:!0}),ie?e.jsx(ge,{variant:"transparent",size:"icon-xs",onClick:de,children:e.jsx(he,{})}):e.jsx(fe,{align:"inline-end",children:e.jsx(Ce,{})})]})}),e.jsx(ve,{className:le("w-[var(--radix-popover-trigger-width)]","bg-secondary-background","rounded-md",o),alignOffset:5,sideOffset:5,children:e.jsx(Ye,{value:c,onChange:S,showFooter:d,footChildren:Z,onConfirm:ce,onCancel:me,minYear:re,maxYear:ae,showHeader:$,headerChildren:ee})})]})}n.__docgenInfo={description:"",methods:[],displayName:"YearPopover",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(year: number | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},name:"year"}],return:{name:"void"}}},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'选择年份'",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},footChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showHeader:{required:!1,tsType:{name:"boolean"},description:""},headerChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},minYear:{required:!1,tsType:{name:"number"},description:""},maxYear:{required:!1,tsType:{name:"number"},description:""}}};const mr={title:"Components/YearPopover",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"输入框尺寸"},value:{control:"number",description:"选中的年份"},placeholder:{control:"text",description:"占位文本"},showFooter:{control:"boolean",description:"是否显示底部操作栏"}}},l={render:()=>{const[r,a]=s.useState();return e.jsxs("div",{className:"p-8 space-y-4 w-120",children:[e.jsx(n,{value:r,onChange:a}),e.jsxs("div",{className:"text-sm text-secondary",children:["选中的年份: ",r||"未选择"]})]})}},u={render:()=>{const[r,a]=s.useState(),[t,o]=s.useState(),[i,d]=s.useState();return e.jsxs("div",{className:"p-8 space-y-4 w-120",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-sm font-medium",children:"Small"}),e.jsx(n,{size:"sm",value:r,onChange:a})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-sm font-medium",children:"Medium (默认)"}),e.jsx(n,{size:"md",value:t,onChange:o})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-sm font-medium",children:"Large"}),e.jsx(n,{size:"lg",value:i,onChange:d})]})]})}},p={render:()=>{const[r,a]=s.useState(2022);return e.jsxs("div",{className:"p-8 space-y-4 w-120",children:[e.jsx(n,{value:r,onChange:a}),e.jsxs("div",{className:"text-sm text-secondary",children:["选中的年份: ",r]})]})}},v={render:()=>{const[r,a]=s.useState();return e.jsx("div",{className:"p-8 w-120",children:e.jsx(n,{value:r,onChange:a,placeholder:"请选择年份"})})}},h={render:()=>{const[r,a]=s.useState(2022),[t,o]=s.useState(),i=()=>{o(r),console.log("确认选择:",r)},d=()=>{a(t||new Date().getFullYear()),console.log("取消选择")};return e.jsxs("div",{className:"p-8 space-y-4 w-120",children:[e.jsx(n,{value:r,onChange:a,showFooter:!0,onConfirm:i,onCancel:d}),e.jsxs("div",{className:"space-y-2 text-sm text-secondary",children:[e.jsxs("div",{children:["当前选择: ",r]}),e.jsxs("div",{children:["已确认: ",t||"未确认"]})]})]})}},x={render:()=>{const[r,a]=s.useState(2022);return e.jsx("div",{className:"p-8 w-120",children:e.jsx(n,{value:r,onChange:a,showFooter:!0,footChildren:e.jsx("div",{className:"text-xs text-primary",children:"这个是可以自己传入的！"}),onConfirm:()=>console.log("确认"),onCancel:()=>console.log("取消")})})}},y={render:()=>{const[r,a]=s.useState(2022);return e.jsx("div",{className:"p-8 w-120",children:e.jsx(n,{value:r,onChange:a,showHeader:!0,headerChildren:e.jsx("div",{className:"text-xs text-primary",children:"这个是可以自己传入的！"}),onConfirm:()=>console.log("确认"),onCancel:()=>console.log("取消")})})}},g={render:()=>{const[r,a]=s.useState(2022);return e.jsxs("div",{className:"p-8 space-y-4",children:[e.jsx(n,{value:r,onChange:a,minYear:2e3,maxYear:2050}),e.jsxs("div",{className:"text-sm text-secondary",children:["可选范围: 2000-2050",e.jsx("br",{}),"选中的年份: ",r]})]})}},f={render:()=>e.jsxs("div",{className:"p-8 w-120",children:[e.jsx(n,{placeholder:"非受控模式"}),e.jsx("div",{className:"mt-4 text-sm text-secondary",children:"查看控制台查看选择结果"})]})};var w,b,P;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [year, setYear] = useState<number>();
    return <div className="p-8 space-y-4 w-120">\r
                <YearPopover value={year} onChange={setYear} />\r
                <div className="text-sm text-secondary">\r
                    选中的年份: {year || "未选择"}\r
                </div>\r
            </div>;
  }
}`,...(P=(b=l.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var T,q,F;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [yearSm, setYearSm] = useState<number>();
    const [yearMd, setYearMd] = useState<number>();
    const [yearLg, setYearLg] = useState<number>();
    return <div className="p-8 space-y-4 w-120">\r
                <div>\r
                    <div className="mb-2 text-sm font-medium">Small</div>\r
                    <YearPopover size="sm" value={yearSm} onChange={setYearSm} />\r
                </div>\r
\r
                <div>\r
                    <div className="mb-2 text-sm font-medium">Medium (默认)</div>\r
                    <YearPopover size="md" value={yearMd} onChange={setYearMd} />\r
                </div>\r
\r
                <div>\r
                    <div className="mb-2 text-sm font-medium">Large</div>\r
                    <YearPopover size="lg" value={yearLg} onChange={setYearLg} />\r
                </div>\r
            </div>;
  }
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var z,R,W;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [year, setYear] = useState<number | undefined>(2022);
    return <div className="p-8 space-y-4 w-120">\r
                <YearPopover value={year} onChange={setYear} />\r
                <div className="text-sm text-secondary">\r
                    选中的年份: {year}\r
                </div>\r
            </div>;
  }
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var I,L,M;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [year, setYear] = useState<number>();
    return <div className="p-8 w-120">\r
                <YearPopover value={year} onChange={setYear} placeholder="请选择年份" />\r
            </div>;
  }
}`,...(M=(L=v.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,O,H;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [year, setYear] = useState<number | undefined>(2022);
    const [confirmedYear, setConfirmedYear] = useState<number>();
    const handleConfirm = () => {
      setConfirmedYear(year);
      console.log("确认选择:", year);
    };
    const handleCancel = () => {
      setYear(confirmedYear || new Date().getFullYear());
      console.log("取消选择");
    };
    return <div className="p-8 space-y-4 w-120">\r
                <YearPopover value={year} onChange={setYear} showFooter onConfirm={handleConfirm} onCancel={handleCancel} />\r
                <div className="space-y-2 text-sm text-secondary">\r
                    <div>当前选择: {year}</div>\r
                    <div>已确认: {confirmedYear || "未确认"}</div>\r
                </div>\r
            </div>;
  }
}`,...(H=(O=h.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var D,G,_;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [year, setYear] = useState<number | undefined>(2022);
    return <div className="p-8 w-120">\r
                <YearPopover value={year} onChange={setYear} showFooter footChildren={<div className="text-xs text-primary">\r
                            这个是可以自己传入的！\r
                        </div>} onConfirm={() => console.log("确认")} onCancel={() => console.log("取消")} />\r
            </div>;
  }
}`,...(_=(G=x.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var k,B,E;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [year, setYear] = useState<number | undefined>(2022);
    return <div className="p-8 w-120">\r
                <YearPopover value={year} onChange={setYear} showHeader headerChildren={<div className="text-xs text-primary">\r
                            这个是可以自己传入的！\r
                        </div>} onConfirm={() => console.log("确认")} onCancel={() => console.log("取消")} />\r
            </div>;
  }
}`,...(E=(B=y.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var U,A,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [year, setYear] = useState<number | undefined>(2022);
    return <div className="p-8 space-y-4">\r
                <YearPopover value={year} onChange={setYear} minYear={2000} maxYear={2050} />\r
                <div className="text-sm text-secondary">\r
                    可选范围: 2000-2050\r
                    <br />\r
                    选中的年份: {year}\r
                </div>\r
            </div>;
  }
}`,...(J=(A=g.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var K,Q,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-8 w-120">\r
                <YearPopover placeholder="非受控模式" />\r
                <div className="mt-4 text-sm text-secondary">\r
                    查看控制台查看选择结果\r
                </div>\r
            </div>;
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const lr=["Basic","Sizes","WithDefaultValue","CustomPlaceholder","WithFooter","WithCustomFooter","WithCustomHeader","WithYearRange","Uncontrolled"];export{l as Basic,v as CustomPlaceholder,u as Sizes,f as Uncontrolled,x as WithCustomFooter,y as WithCustomHeader,p as WithDefaultValue,h as WithFooter,g as WithYearRange,lr as __namedExportsOrder,mr as default};
