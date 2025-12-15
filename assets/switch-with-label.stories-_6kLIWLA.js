import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-DPkNXRqw.js";import{R as Ne,T as je}from"./index-xabTWpDo.js";import{c as m}from"./utils-D-KgF5mV.js";import{c as be}from"./index-CGrAONsN.js";import{L as ze}from"./loading-circle-CbvMeV9v.js";import"./index-DW48STyt.js";import"./index-CVJC_e1g.js";import"./index-3PNdDA9F.js";import"./index-TAJg0BDn.js";import"./index-CGny4Gu2.js";import"./index-CdverDIJ.js";import"./index-tTCODTNv.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";const we=be("peer inline-flex shrink-0 items-center relative transition-colors duration-200",{variants:{variant:{primary:["data-[state=checked]:bg-primary data-[state=unchecked]:bg-fill-emphasize disabled:data-[state=checked]:bg-primary-disabled disabled:data-[state=unchecked]:bg-fill-dark-hover-active-disabled"]},size:{sm:"h-4 rounded-md",md:"h-5 rounded-lg",lg:"h-6 rounded-lg"}}}),We=be("pointer-events-none block transition-transform duration-200 ease-in-out",{variants:{variant:{primary:"data-[state=unchecked]:bg-card data-[state=checked]:bg-card"},size:{sm:"w-3 h-3 rounded-sm",md:"w-4 h-4 rounded-md",lg:"w-5 h-5 rounded-md"}}});function r({checked:a,defaultChecked:s=!1,onCheckedChange:t,isLoading:z=!1,variant:h="primary",size:n="md",checkedLabel:i="开启",uncheckedLabel:l="关闭",className:xe,disabled:w,...ge}){const W=a!==void 0,[fe,Le]=d.useState(s),p=W?a:fe,ve=d.useCallback(o=>{W||Le(o),t==null||t(o)},[W,t]),E=d.useRef(null),M=d.useRef(null),[u,ye]=d.useState(0);d.useEffect(()=>{var O,P;const o=((O=E.current)==null?void 0:O.offsetWidth)||0,Se=((P=M.current)==null?void 0:P.offsetWidth)||0;ye(Math.max(o,Se))},[i,l]);const c=(()=>{switch(n??"sm"){case"sm":return{thumbSize:12,gap:4,fontSize:"10px",padding:2,textPadding:2};case"md":return{thumbSize:16,gap:6,fontSize:"13px",padding:2,textPadding:2};case"lg":return{thumbSize:20,gap:8,fontSize:"14px",padding:2,textPadding:2}}})(),Ce=c.thumbSize+c.gap+u+c.textPadding*2+c.padding*2;return e.jsxs("div",{className:"inline-flex items-center",children:[e.jsxs("div",{className:"absolute opacity-0 pointer-events-none","aria-hidden":"true",children:[e.jsx("span",{ref:E,className:"whitespace-nowrap font-bold",style:{fontSize:c.fontSize},children:i}),e.jsx("span",{ref:M,className:"whitespace-nowrap font-bold",style:{fontSize:c.fontSize},children:l})]}),e.jsxs(Ne,{"data-slot":"switch-with-label",className:m(we({variant:h,size:n}),"group relative",xe),checked:p,onCheckedChange:ve,disabled:w,style:{width:Ce,padding:`0 ${c.padding}px`},...ge,children:[e.jsxs("div",{className:"absolute inset-0 flex items-center pointer-events-none",style:{padding:`0 ${c.padding}px`},children:[e.jsx("span",{className:m("whitespace-nowrap font-bold transition-opacity duration-200 absolute text-center",p?"opacity-0":"opacity-100",w?"text-disabled":"text-secondary"),style:{fontSize:c.fontSize,right:c.padding,width:u+c.textPadding*2,paddingLeft:c.textPadding,paddingRight:c.textPadding,lineHeight:n==="sm"?"16px":n==="md"?"20px":"24px",fontWeight:700},children:l}),e.jsx("span",{className:m("whitespace-nowrap font-bold transition-opacity duration-200 absolute text-center justify-center",p?"opacity-100 ":"opacity-0",w?"text-disabled":"text-text"),style:{fontSize:c.fontSize,left:c.padding,width:u+c.textPadding*2,paddingLeft:c.textPadding,paddingRight:c.textPadding,lineHeight:n==="sm"?"16px":n==="md"?"20px":"24px",fontWeight:700},children:i})]}),e.jsx(je,{"data-slot":"switch-thumb",className:m(We({variant:h,size:n}),"flex items-center justify-center relative z-10"),style:{transform:p?`translateX(${u+c.textPadding*2+c.gap}px)`:"translateX(0)"},children:z&&e.jsx(ze,{className:m("animate-spin",n==="sm"&&"size-3",n==="md"&&"size-4",n==="lg"&&"size-5")})})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"SwitchWithLabel",props:{isLoading:{required:!1,tsType:{name:"boolean"},description:"是否加载中",defaultValue:{value:"false",computed:!1}},checkedLabel:{required:!1,tsType:{name:"string"},description:"选中状态的文字",defaultValue:{value:"'开启'",computed:!1}},uncheckedLabel:{required:!1,tsType:{name:"string"},description:"未选中状态的文字",defaultValue:{value:"'关闭'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"受控：是否选中"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"默认是否选中（非受控）",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"选中状态改变回调"},variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["Omit","VariantProps"]};const Xe={title:"Components/SwitchWithLabel",tags:["autodocs"],component:r,argTypes:{variant:{control:{type:"select"},options:["primary"],description:"开关样式变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"开关尺寸"},disabled:{control:"boolean",description:"是否禁用"},isLoading:{control:"boolean",description:"是否加载中"},checkedLabel:{control:"text",description:"选中状态的文字"},uncheckedLabel:{control:"text",description:"未选中状态的文字"}}},k={args:{variant:"primary",size:"sm",checkedLabel:"开启",uncheckedLabel:"关闭"},render:a=>{const[s,t]=d.useState(!1);return e.jsxs("div",{className:"p-4",children:[e.jsx(r,{...a,checked:s,onCheckedChange:t}),e.jsxs("p",{className:"mt-4 text-sm text-secondary",children:["当前状态: ",s?"开启":"关闭"]})]})}},b={args:{variant:"primary",size:"md",checkedLabel:"开启",uncheckedLabel:"关闭"},render:a=>{const[s,t]=d.useState(!1);return e.jsxs("div",{className:"p-4",children:[e.jsx(r,{...a,checked:s,onCheckedChange:t}),e.jsxs("p",{className:"mt-4 text-sm text-secondary",children:["当前状态: ",s?"开启":"关闭"]})]})}},x={args:{variant:"primary",size:"lg",checkedLabel:"开启",uncheckedLabel:"关闭"},render:a=>{const[s,t]=d.useState(!1);return e.jsxs("div",{className:"p-4",children:[e.jsx(r,{...a,checked:s,onCheckedChange:t}),e.jsxs("p",{className:"mt-4 text-sm text-secondary",children:["当前状态: ",s?"开启":"关闭"]})]})}},g={args:{variant:"primary",size:"md",checkedLabel:"ON",uncheckedLabel:"OFF"},render:a=>{const[s,t]=d.useState(!1);return e.jsx("div",{className:"p-4",children:e.jsx(r,{...a,checked:s,onCheckedChange:t})})}},f={args:{variant:"primary",size:"lg",checkedLabel:"打开中",uncheckedLabel:"关闭"},render:a=>{const[s,t]=d.useState(!1);return e.jsxs("div",{className:"p-4",children:[e.jsx(r,{...a,checked:s,onCheckedChange:t}),e.jsx("p",{className:"mt-4 text-sm text-secondary",children:"注意：两侧文字长度不同时，会以较长的文字为基准"})]})}},L={args:{variant:"primary",size:"lg",checkedLabel:"已激活",uncheckedLabel:"未激活"},render:a=>{const[s,t]=d.useState(!0);return e.jsx("div",{className:"p-4",children:e.jsx(r,{...a,checked:s,onCheckedChange:t})})}},v={args:{variant:"primary",size:"md",checkedLabel:"开启",uncheckedLabel:"关闭",disabled:!0,defaultChecked:!0},render:a=>e.jsxs("div",{className:"p-4",children:[e.jsx(r,{...a}),e.jsx("p",{className:"mt-4 text-sm text-disabled",children:"禁用状态（开启）"})]})},y={args:{variant:"primary",size:"md",checkedLabel:"开启",uncheckedLabel:"关闭",disabled:!0,defaultChecked:!1},render:a=>e.jsxs("div",{className:"p-4",children:[e.jsx(r,{...a}),e.jsx("p",{className:"mt-4 text-sm text-disabled",children:"禁用状态（关闭）"})]})},C={args:{variant:"primary",size:"lg",checkedLabel:"开启",uncheckedLabel:"关闭",isLoading:!0},render:a=>{const[s,t]=d.useState(!1);return e.jsxs("div",{className:"p-4",children:[e.jsx(r,{...a,checked:s,onCheckedChange:t}),e.jsx("p",{className:"mt-4 text-sm text-secondary",children:"加载状态演示"})]})}},S={args:{variant:"primary",size:"md",checkedLabel:"开启",uncheckedLabel:"关闭",defaultChecked:!1},render:a=>e.jsxs("div",{className:"p-4",children:[e.jsx(r,{...a}),e.jsx("p",{className:"mt-4 text-sm text-secondary",children:"非受控模式 - 组件内部管理状态"})]})},N={render:()=>{const[a,s]=d.useState(!0),[t,z]=d.useState(!1),[h,n]=d.useState(!0),[i,l]=d.useState(!1);return e.jsx("div",{className:"p-4 space-y-6",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-secondary",children:"Wi-Fi"}),e.jsx(r,{size:"md",checkedLabel:"已连接",uncheckedLabel:"未连接",checked:a,onCheckedChange:s})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-secondary",children:"蓝牙"}),e.jsx(r,{size:"md",checkedLabel:"开启",uncheckedLabel:"关闭",checked:t,onCheckedChange:z})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-secondary",children:"位置服务"}),e.jsx(r,{size:"md",checkedLabel:"允许",uncheckedLabel:"禁止",checked:h,onCheckedChange:n})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-secondary",children:"深色模式"}),e.jsx(r,{size:"md",checkedLabel:"ON",uncheckedLabel:"OFF",checked:i,onCheckedChange:l})]})]})})}},j={render:()=>{const[a,s]=d.useState(!1);return e.jsxs("div",{className:"p-4 space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-secondary mb-2",children:"Small"}),e.jsx(r,{size:"sm",checkedLabel:"开启",uncheckedLabel:"关闭",checked:a,onCheckedChange:s})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-secondary mb-2",children:"Medium"}),e.jsx(r,{size:"md",checkedLabel:"开启",uncheckedLabel:"关闭",checked:a,onCheckedChange:s})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-secondary mb-2",children:"Large"}),e.jsx(r,{size:"lg",checkedLabel:"开启",uncheckedLabel:"关闭",checked:a,onCheckedChange:s})]})]})}};var F,R,T;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    checkedLabel: '开启',
    uncheckedLabel: '关闭'
  },
  render: args => {
    const [checked, setChecked] = useState(false);
    return <div className="p-4">\r
                <SwitchWithLabel {...args} checked={checked} onCheckedChange={setChecked} />\r
                <p className="mt-4 text-sm text-secondary">\r
                    当前状态: {checked ? '开启' : '关闭'}\r
                </p>\r
            </div>;
  }
}`,...(T=(R=k.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var V,q,D;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    checkedLabel: '开启',
    uncheckedLabel: '关闭'
  },
  render: args => {
    const [checked, setChecked] = useState(false);
    return <div className="p-4">\r
                <SwitchWithLabel {...args} checked={checked} onCheckedChange={setChecked} />\r
                <p className="mt-4 text-sm text-secondary">\r
                    当前状态: {checked ? '开启' : '关闭'}\r
                </p>\r
            </div>;
  }
}`,...(D=(q=b.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var _,B,$;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    checkedLabel: '开启',
    uncheckedLabel: '关闭'
  },
  render: args => {
    const [checked, setChecked] = useState(false);
    return <div className="p-4">\r
                <SwitchWithLabel {...args} checked={checked} onCheckedChange={setChecked} />\r
                <p className="mt-4 text-sm text-secondary">\r
                    当前状态: {checked ? '开启' : '关闭'}\r
                </p>\r
            </div>;
  }
}`,...($=(B=x.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var A,H,I;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    checkedLabel: 'ON',
    uncheckedLabel: 'OFF'
  },
  render: args => {
    const [checked, setChecked] = useState(false);
    return <div className="p-4">\r
                <SwitchWithLabel {...args} checked={checked} onCheckedChange={setChecked} />\r
            </div>;
  }
}`,...(I=(H=g.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var U,X,G;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    checkedLabel: '打开中',
    uncheckedLabel: '关闭'
  },
  render: args => {
    const [checked, setChecked] = useState(false);
    return <div className="p-4">\r
                <SwitchWithLabel {...args} checked={checked} onCheckedChange={setChecked} />\r
                <p className="mt-4 text-sm text-secondary">\r
                    注意：两侧文字长度不同时，会以较长的文字为基准\r
                </p>\r
            </div>;
  }
}`,...(G=(X=f.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,K,Q;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    checkedLabel: '已激活',
    uncheckedLabel: '未激活'
  },
  render: args => {
    const [checked, setChecked] = useState(true);
    return <div className="p-4">\r
                <SwitchWithLabel {...args} checked={checked} onCheckedChange={setChecked} />\r
            </div>;
  }
}`,...(Q=(K=L.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    checkedLabel: '开启',
    uncheckedLabel: '关闭',
    disabled: true,
    defaultChecked: true
  },
  render: args => {
    return <div className="p-4">\r
                <SwitchWithLabel {...args} />\r
                <p className="mt-4 text-sm text-disabled">\r
                    禁用状态（开启）\r
                </p>\r
            </div>;
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,se,te;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    checkedLabel: '开启',
    uncheckedLabel: '关闭',
    disabled: true,
    defaultChecked: false
  },
  render: args => {
    return <div className="p-4">\r
                <SwitchWithLabel {...args} />\r
                <p className="mt-4 text-sm text-disabled">\r
                    禁用状态（关闭）\r
                </p>\r
            </div>;
  }
}`,...(te=(se=y.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ce,re,de;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    checkedLabel: '开启',
    uncheckedLabel: '关闭',
    isLoading: true
  },
  render: args => {
    const [checked, setChecked] = useState(false);
    return <div className="p-4">\r
                <SwitchWithLabel {...args} checked={checked} onCheckedChange={setChecked} />\r
                <p className="mt-4 text-sm text-secondary">\r
                    加载状态演示\r
                </p>\r
            </div>;
  }
}`,...(de=(re=C.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ne,ie,le;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    checkedLabel: '开启',
    uncheckedLabel: '关闭',
    defaultChecked: false
  },
  render: args => {
    return <div className="p-4">\r
                <SwitchWithLabel {...args} />\r
                <p className="mt-4 text-sm text-secondary">\r
                    非受控模式 - 组件内部管理状态\r
                </p>\r
            </div>;
  }
}`,...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,me,he;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [wifiEnabled, setWifiEnabled] = useState(true);
    const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
    const [locationEnabled, setLocationEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    return <div className="p-4 space-y-6">\r
                <div className="space-y-3">\r
                    <div className="flex items-center justify-between">\r
                        <span className="text-sm font-medium text-secondary">Wi-Fi</span>\r
                        <SwitchWithLabel size="md" checkedLabel="已连接" uncheckedLabel="未连接" checked={wifiEnabled} onCheckedChange={setWifiEnabled} />\r
                    </div>\r
                    \r
                    <div className="flex items-center justify-between">\r
                        <span className="text-sm font-medium text-secondary">蓝牙</span>\r
                        <SwitchWithLabel size="md" checkedLabel="开启" uncheckedLabel="关闭" checked={bluetoothEnabled} onCheckedChange={setBluetoothEnabled} />\r
                    </div>\r
                    \r
                    <div className="flex items-center justify-between">\r
                        <span className="text-sm font-medium text-secondary">位置服务</span>\r
                        <SwitchWithLabel size="md" checkedLabel="允许" uncheckedLabel="禁止" checked={locationEnabled} onCheckedChange={setLocationEnabled} />\r
                    </div>\r
                    \r
                    <div className="flex items-center justify-between">\r
                        <span className="text-sm font-medium text-secondary">深色模式</span>\r
                        <SwitchWithLabel size="md" checkedLabel="ON" uncheckedLabel="OFF" checked={darkMode} onCheckedChange={setDarkMode} />\r
                    </div>\r
                </div>\r
            </div>;
  }
}`,...(he=(me=N.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var pe,ue,ke;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="p-4 space-y-6">\r
                <div>\r
                    <p className="text-sm font-medium text-secondary mb-2">Small</p>\r
                    <SwitchWithLabel size="sm" checkedLabel="开启" uncheckedLabel="关闭" checked={checked} onCheckedChange={setChecked} />\r
                </div>\r
                \r
                <div>\r
                    <p className="text-sm font-medium text-secondary mb-2">Medium</p>\r
                    <SwitchWithLabel size="md" checkedLabel="开启" uncheckedLabel="关闭" checked={checked} onCheckedChange={setChecked} />\r
                </div>\r
                \r
                <div>\r
                    <p className="text-sm font-medium text-secondary mb-2">Large</p>\r
                    <SwitchWithLabel size="lg" checkedLabel="开启" uncheckedLabel="关闭" checked={checked} onCheckedChange={setChecked} />\r
                </div>\r
            </div>;
  }
}`,...(ke=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:ke.source}}};const Ge=["Small","Medium","Large","CustomLabelsShort","CustomLabelsAsymmetric","CustomLabelsLong","DisabledOn","DisabledOff","Loading","Uncontrolled","MultipleStates","SizeComparison"];export{f as CustomLabelsAsymmetric,L as CustomLabelsLong,g as CustomLabelsShort,y as DisabledOff,v as DisabledOn,x as Large,C as Loading,b as Medium,N as MultipleStates,j as SizeComparison,k as Small,S as Uncontrolled,Ge as __namedExportsOrder,Xe as default};
