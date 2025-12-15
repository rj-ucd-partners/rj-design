import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{Y as s}from"./year-picker-C-Mx0Oiu.js";import{r as n}from"./iframe-DPkNXRqw.js";import"./utils-D-KgF5mV.js";import"./button-7wqqdEkD.js";import"./index-CVJC_e1g.js";import"./index-CGrAONsN.js";import"./select--o5F3QYD.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-BdQq_4o_.js";import"./index-ZCJ3rLJN.js";import"./index-xbPJJJA0.js";import"./index-3PNdDA9F.js";import"./index-BwCODQwj.js";import"./index-CED2zaSr.js";import"./index-BFJ-Qg5v.js";import"./index-CZ6tSH_D.js";import"./Combination-DlUI4tCQ.js";import"./index-CcTl1dMB.js";import"./index-CGny4Gu2.js";import"./index-Piay1Hl0.js";import"./index-tTCODTNv.js";import"./index-DUrgPtLc.js";import"./index-TAJg0BDn.js";import"./index-CdverDIJ.js";import"./index-BE4RcSlc.js";import"./closeIcon-6bXNgUOm.js";import"./empty-CtEqluxS.js";import"./input-group-CAYfQ-0y.js";import"./input-BNOkW-iY.js";import"./textarea-Dqt5OPUb.js";import"./chevron-down-BxteM__a.js";import"./createLucideIcon-BVkOKLvB.js";import"./check-DLJQi36D.js";const xe={title:"Components/YearPicker",component:s,tags:["autodocs"],argTypes:{value:{control:"number",description:"选中的年份"},minYear:{control:"number",description:"最小可选年份"},maxYear:{control:"number",description:"最大可选年份"},showFooter:{control:"boolean",description:"是否显示底部操作栏"}}},E=()=>e.jsx("div",{className:"flex items-center bg-primary-disabled flex-1 h-[32px] text-[13px] leading-[32px] items-center justify-center text-primary",children:"自定义工作区"}),o={render:()=>{const[r,t]=n.useState();return e.jsxs("div",{className:"w-120",children:[e.jsx(s,{value:r,onChange:t}),e.jsxs("div",{className:"mt-4 text-sm text-secondary",children:["选中的年份: ",r||"未选择"]})]})}},c={render:()=>{const[r,t]=n.useState(2022);return e.jsxs("div",{className:"p-8 w-120",children:[e.jsx(s,{value:r,onChange:t}),e.jsxs("div",{className:"mt-4 text-sm text-secondary",children:["选中的年份: ",r]})]})}},d={render:()=>{const[r,t]=n.useState(2022),[a,p]=n.useState(),u=()=>{p(r),console.log("确认选择:",r)},Y=()=>{t(a||new Date().getFullYear()),console.log("取消选择")};return e.jsxs("div",{className:"p-8 w-120",children:[e.jsx(s,{value:r,onChange:t,showFooter:!0,footChildren:E(),onConfirm:u,onCancel:Y}),e.jsxs("div",{className:"mt-4 space-y-2 text-sm text-secondary",children:[e.jsxs("div",{children:["当前选择: ",r]}),e.jsxs("div",{children:["已确认: ",a||"未确认"]})]})]})}},i={render:()=>{const[r,t]=n.useState(2022),[a,p]=n.useState(),u=()=>{p(r),console.log("确认选择:",r)},Y=()=>{t(a||new Date().getFullYear()),console.log("取消选择")};return e.jsxs("div",{className:"p-8 w-120",children:[e.jsx(s,{value:r,onChange:t,showHeader:!0,headerChildren:E(),onConfirm:u,onCancel:Y}),e.jsxs("div",{className:"mt-4 space-y-2 text-sm text-secondary",children:[e.jsxs("div",{children:["当前选择: ",r]}),e.jsxs("div",{children:["已确认: ",a||"未确认"]})]})]})}},l={render:()=>{const[r,t]=n.useState(2022);return e.jsxs("div",{className:"p-8 w-120",children:[e.jsx(s,{value:r,onChange:t,minYear:1900,maxYear:2080}),e.jsxs("div",{className:"mt-4 text-sm text-secondary",children:["年份范围: 2000-2050",e.jsx("br",{}),"选中的年份: ",r]})]})}},m={render:()=>e.jsxs("div",{className:"p-8 w-120",children:[e.jsx(s,{onChange:r=>console.log("选择年份:",r)}),e.jsx("div",{className:"mt-4 text-sm text-secondary",children:"查看控制台查看选择结果"})]})};var x,h,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [selectedYear, setSelectedYear] = useState<number>();
    return <div className="w-120">\r
                <YearPicker value={selectedYear} onChange={setSelectedYear} />\r
                <div className="mt-4 text-sm text-secondary">\r
                    选中的年份: {selectedYear || "未选择"}\r
                </div>\r
            </div>;
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var C,g,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [selectedYear, setSelectedYear] = useState<number>(2022);
    return <div className="p-8 w-120">\r
                <YearPicker value={selectedYear} onChange={setSelectedYear} />\r
                <div className="mt-4 text-sm text-secondary">\r
                    选中的年份: {selectedYear}\r
                </div>\r
            </div>;
  }
}`,...(S=(g=c.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,j,N;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [selectedYear, setSelectedYear] = useState<number>(2022);
    const [confirmedYear, setConfirmedYear] = useState<number>();
    const handleConfirm = () => {
      setConfirmedYear(selectedYear);
      console.log("确认选择:", selectedYear);
    };
    const handleCancel = () => {
      setSelectedYear(confirmedYear || new Date().getFullYear());
      console.log("取消选择");
    };
    return <div className="p-8 w-120">\r
                <YearPicker value={selectedYear} onChange={setSelectedYear} showFooter footChildren={getWorkSpace()} onConfirm={handleConfirm} onCancel={handleCancel} />\r
                <div className="mt-4 space-y-2 text-sm text-secondary">\r
                    <div>当前选择: {selectedYear}</div>\r
                    <div>已确认: {confirmedYear || "未确认"}</div>\r
                </div>\r
            </div>;
  }
}`,...(N=(j=d.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var y,w,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [selectedYear, setSelectedYear] = useState<number>(2022);
    const [confirmedYear, setConfirmedYear] = useState<number>();
    const handleConfirm = () => {
      setConfirmedYear(selectedYear);
      console.log("确认选择:", selectedYear);
    };
    const handleCancel = () => {
      setSelectedYear(confirmedYear || new Date().getFullYear());
      console.log("取消选择");
    };
    return <div className="p-8 w-120">\r
                <YearPicker value={selectedYear} onChange={setSelectedYear} showHeader headerChildren={getWorkSpace()} onConfirm={handleConfirm} onCancel={handleCancel} />\r
                <div className="mt-4 space-y-2 text-sm text-secondary">\r
                    <div>当前选择: {selectedYear}</div>\r
                    <div>已确认: {confirmedYear || "未确认"}</div>\r
                </div>\r
            </div>;
  }
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var k,W,F;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [selectedYear, setSelectedYear] = useState<number>(2022);
    return <div className="p-8 w-120">\r
                <YearPicker value={selectedYear} onChange={setSelectedYear} minYear={1900} maxYear={2080} />\r
                <div className="mt-4 text-sm text-secondary">\r
                    年份范围: 2000-2050\r
                    <br />\r
                    选中的年份: {selectedYear}\r
                </div>\r
            </div>;
  }
}`,...(F=(W=l.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var P,D,H;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-8 w-120">\r
                <YearPicker onChange={year => console.log("选择年份:", year)} />\r
                <div className="mt-4 text-sm text-secondary">\r
                    查看控制台查看选择结果\r
                </div>\r
            </div>;
  }
}`,...(H=(D=m.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const he=["Basic","WithDefaultValue","WithFooter","WithHeader","WithYearRange","Uncontrolled"];export{o as Basic,m as Uncontrolled,c as WithDefaultValue,d as WithFooter,i as WithHeader,l as WithYearRange,he as __namedExportsOrder,xe as default};
