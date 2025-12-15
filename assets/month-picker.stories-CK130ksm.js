import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{M as t}from"./month-picker-CAtHi9fj.js";import{r as a}from"./iframe-DPkNXRqw.js";import"./utils-D-KgF5mV.js";import"./button-7wqqdEkD.js";import"./index-CVJC_e1g.js";import"./index-CGrAONsN.js";import"./select--o5F3QYD.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-BdQq_4o_.js";import"./index-ZCJ3rLJN.js";import"./index-xbPJJJA0.js";import"./index-3PNdDA9F.js";import"./index-BwCODQwj.js";import"./index-CED2zaSr.js";import"./index-BFJ-Qg5v.js";import"./index-CZ6tSH_D.js";import"./Combination-DlUI4tCQ.js";import"./index-CcTl1dMB.js";import"./index-CGny4Gu2.js";import"./index-Piay1Hl0.js";import"./index-tTCODTNv.js";import"./index-DUrgPtLc.js";import"./index-TAJg0BDn.js";import"./index-CdverDIJ.js";import"./index-BE4RcSlc.js";import"./closeIcon-6bXNgUOm.js";import"./empty-CtEqluxS.js";import"./input-group-CAYfQ-0y.js";import"./input-BNOkW-iY.js";import"./textarea-Dqt5OPUb.js";import"./chevron-down-BxteM__a.js";import"./createLucideIcon-BVkOKLvB.js";import"./check-DLJQi36D.js";const ie={title:"Components/MonthPicker",component:t,tags:["autodocs"]},o={render:()=>{const[e,n]=a.useState();return r.jsxs("div",{className:"p-8 space-y-4 w-100",children:[r.jsx(t,{value:e,onChange:n}),r.jsxs("div",{className:"text-sm text-secondary",children:["选中: ",e?`${e.year}年${e.month}月`:"未选择"]})]})}},m={render:()=>{const[e,n]=a.useState({year:2024,month:6});return r.jsxs("div",{className:"p-8 space-y-4 w-100",children:[r.jsx(t,{value:e,onChange:n}),r.jsxs("div",{className:"text-sm text-secondary",children:["选中: ",e.year,"年",e.month,"月"]})]})}},i={render:()=>{const[e,n]=a.useState({year:2024,month:3}),[s,b]=a.useState();return r.jsxs("div",{className:"p-8 space-y-4 w-100",children:[r.jsx(t,{value:e,onChange:n,showFooter:!0,onConfirm:()=>b(e),onCancel:()=>n(s||{year:2024,month:1})}),r.jsxs("div",{className:"space-y-2 text-sm text-secondary",children:[r.jsxs("div",{children:["当前选择: ",e.year,"年",e.month,"月"]}),r.jsxs("div",{children:["已确认: ",s?`${s.year}年${s.month}月`:"未确认"]})]})]})}},c={render:()=>{const[e,n]=a.useState();return r.jsx("div",{className:"p-8 w-100",children:r.jsx(t,{value:e,onChange:n,showHeader:!0,headerChildren:r.jsx("div",{className:"text-xs text-primary",children:"请选择月份"}),onConfirm:()=>console.log("确认"),onCancel:()=>console.log("取消")})})}},u={render:()=>{const[e,n]=a.useState();return r.jsxs("div",{className:"p-8 space-y-4 w-100",children:[r.jsx(t,{value:e,onChange:n,minYear:2020,maxYear:2030}),r.jsx("div",{className:"text-sm text-secondary",children:"年份范围: 2020-2030"})]})}};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    }>();
    return <div className="p-8 space-y-4 w-100">\r
                <MonthPicker value={value} onChange={setValue} />\r
                <div className="text-sm text-secondary">\r
                    选中: {value ? \`\${value.year}年\${value.month}月\` : "未选择"}\r
                </div>\r
            </div>;
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,v,x;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    }>({
      year: 2024,
      month: 6
    });
    return <div className="p-8 space-y-4 w-100">\r
                <MonthPicker value={value} onChange={setValue} />\r
                <div className="text-sm text-secondary">\r
                    选中: {value.year}年{value.month}月\r
                </div>\r
            </div>;
  }
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,C,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    }>({
      year: 2024,
      month: 3
    });
    const [confirmed, setConfirmed] = useState<{
      year: number;
      month: number;
    }>();
    return <div className="p-8 space-y-4 w-100">\r
                <MonthPicker value={value} onChange={setValue} showFooter onConfirm={() => setConfirmed(value)} onCancel={() => setValue(confirmed || {
        year: 2024,
        month: 1
      })} />\r
                <div className="space-y-2 text-sm text-secondary">\r
                    <div>当前选择: {value.year}年{value.month}月</div>\r
                    <div>已确认: {confirmed ? \`\${confirmed.year}年\${confirmed.month}月\` : "未确认"}</div>\r
                </div>\r
            </div>;
  }
}`,...(g=(C=i.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var N,f,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    }>();
    return <div className="p-8 w-100">\r
                <MonthPicker value={value} onChange={setValue} showHeader headerChildren={<div className="text-xs text-primary">\r
                            请选择月份\r
                        </div>} onConfirm={() => console.log("确认")} onCancel={() => console.log("取消")} />\r
            </div>;
  }
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var V,S,w;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      year: number;
      month: number;
    }>();
    return <div className="p-8 space-y-4 w-100">\r
                <MonthPicker value={value} onChange={setValue} minYear={2020} maxYear={2030} />\r
                <div className="text-sm text-secondary">\r
                    年份范围: 2020-2030\r
                </div>\r
            </div>;
  }
}`,...(w=(S=u.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const ce=["Basic","WithDefaultValue","WithFooter","WithHeader","WithCustomYearRange"];export{o as Basic,u as WithCustomYearRange,m as WithDefaultValue,i as WithFooter,c as WithHeader,ce as __namedExportsOrder,ie as default};
