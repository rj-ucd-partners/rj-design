import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as i,a as n,b as d,c as o,e as m}from"./select--o5F3QYD.js";import{F as K}from"./FavoriteIcon-CrJ0VcNh.js";import{R as W,r as c}from"./iframe-DPkNXRqw.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-BdQq_4o_.js";import"./index-ZCJ3rLJN.js";import"./index-xbPJJJA0.js";import"./index-3PNdDA9F.js";import"./index-CVJC_e1g.js";import"./index-BwCODQwj.js";import"./index-CED2zaSr.js";import"./index-BFJ-Qg5v.js";import"./index-CZ6tSH_D.js";import"./Combination-DlUI4tCQ.js";import"./index-CcTl1dMB.js";import"./index-CGny4Gu2.js";import"./index-Piay1Hl0.js";import"./index-tTCODTNv.js";import"./index-DUrgPtLc.js";import"./index-TAJg0BDn.js";import"./index-CdverDIJ.js";import"./index-BE4RcSlc.js";import"./utils-D-KgF5mV.js";import"./index-CGrAONsN.js";import"./closeIcon-6bXNgUOm.js";import"./empty-CtEqluxS.js";import"./button-7wqqdEkD.js";import"./input-group-CAYfQ-0y.js";import"./input-BNOkW-iY.js";import"./textarea-Dqt5OPUb.js";import"./chevron-down-BxteM__a.js";import"./createLucideIcon-BVkOKLvB.js";import"./check-DLJQi36D.js";const ze={title:"Components/Select",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary"]},size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:"boolean"}}},u=[{key:"apple",label:"Apple"},{key:"banana",label:"Banana"},{key:"orange",label:"Orange"},{key:"grape",label:"Grape"},{key:"bayberry",label:"Bayberry"},{key:"cherry",label:"Cherry"},{key:"strawberry",label:"Strawberry"},{key:"blueberry",label:"Blueberry",disabled:!0}],p={args:{variant:"primary",size:"sm"},render:l=>{const[r,t]=W.useState("");return e.jsxs(i,{value:r,onValueChange:t,...l,children:[e.jsx(n,{className:"w-80",children:e.jsx(d,{placeholder:"请选择"})}),e.jsx(o,{children:u.map(a=>e.jsx(m,{value:a.key,disabled:a.disabled,children:a.label},a.key))})]})}},S={args:{variant:"primary",size:"md"},render:l=>{const[r,t]=c.useState("");return e.jsxs(i,{value:r,onValueChange:t,...l,children:[e.jsx(n,{className:"w-80",children:e.jsx(d,{placeholder:"请选择"})}),e.jsx(o,{children:u.map(a=>e.jsx(m,{value:a.key,disabled:a.disabled,children:a.label},a.key))})]})}},g={args:{variant:"primary",size:"lg"},render:l=>{const[r,t]=c.useState("");return e.jsxs(i,{value:r,onValueChange:t,...l,children:[e.jsx(n,{className:"w-80",children:e.jsx(d,{placeholder:"请选择"})}),e.jsx(o,{children:u.map(a=>e.jsx(m,{value:a.key,disabled:a.disabled,children:a.label},a.key))})]})}},y={args:{variant:"primary",size:"md"},render:l=>{const[r,t]=c.useState("");return e.jsxs(i,{value:r,onValueChange:t,...l,children:[e.jsx(n,{value:r,closeCallback:()=>t(""),className:"w-80",children:e.jsx(d,{placeholder:"请选择"})}),e.jsx(o,{children:u.map(a=>e.jsx(m,{value:a.key,disabled:a.disabled,children:a.label},a.key))})]})}},b={args:{variant:"primary",size:"md",disabled:!0},render:l=>{const[r,t]=c.useState("");return e.jsxs(i,{value:r,onValueChange:t,...l,children:[e.jsx(n,{value:r,closeCallback:()=>t(""),className:"w-80",children:e.jsx(d,{placeholder:"请选择"})}),e.jsx(o,{children:u.map(a=>e.jsx(m,{value:a.key,disabled:a.disabled,children:a.label},a.key))})]})}},h={args:{variant:"primary",size:"md",disabled:!0},render:l=>{const[r,t]=c.useState("");return e.jsxs(i,{value:r,onValueChange:t,...l,children:[e.jsx(n,{value:r,closeCallback:()=>t(""),className:"w-80",children:e.jsx(d,{placeholder:"请选择"})}),e.jsx(o,{})]})}},v={args:{variant:"primary",size:"md"},render:l=>{const[r,t]=c.useState("");return e.jsxs(i,{value:r,onValueChange:t,...l,children:[e.jsx(n,{value:r,closeCallback:()=>t(""),className:"w-80",children:e.jsxs("div",{className:"flex items-center justify-start gap-2",children:[e.jsx(K,{}),e.jsx(d,{placeholder:"请选择"})]})}),e.jsx(o,{children:u.map(a=>e.jsx(m,{value:a.key,disabled:a.disabled,children:a.label},a.key))})]})}},C={args:{variant:"primary",size:"md"},render:l=>{const[r,t]=c.useState([]),[a,k]=c.useState(""),Q=s=>{s&&(r.find(U=>U.key===s)||t([...r,{key:s,label:s}]))};return e.jsxs(i,{value:a,onValueChange:k,...l,children:[e.jsx(n,{value:a,closeCallback:()=>k(""),className:"w-80",children:e.jsxs("div",{className:"flex items-center justify-start gap-2",children:[e.jsx(K,{}),e.jsx(d,{placeholder:"请选择"})]})}),e.jsx(o,{editable:!0,editCallback:Q,children:r.length>0&&r.map(s=>e.jsx(m,{value:s.key,disabled:s.disabled,children:s.label},s.key))})]})}};var x,j,D;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm'
  },
  render: args => {
    const [data, setDate] = React.useState<string>('');
    return <Select value={data} onValueChange={setDate} {...args}>\r
        <SelectTrigger className='w-80'>\r
          <SelectValue placeholder="请选择" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          {items.map(item => {
          return <SelectItem key={item.key} value={item.key} disabled={item.disabled}>\r
              {item.label}\r
            </SelectItem>;
        })}\r
        </SelectContent>\r
      </Select>;
  }
}`,...(D=(j=p.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var V,I,N;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: args => {
    const [data, setDate] = useState<string>('');
    return <Select value={data} onValueChange={setDate} {...args}>\r
        <SelectTrigger className='w-80'>\r
          <SelectValue placeholder="请选择" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          {items.map(item => {
          return <SelectItem key={item.key} value={item.key} disabled={item.disabled}>\r
              {item.label}\r
            </SelectItem>;
        })}\r
        </SelectContent>\r
      </Select>;
  }
}`,...(N=(I=S.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var f,w,T;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg'
  },
  render: args => {
    const [data, setDate] = useState<string>('');
    return <Select value={data} onValueChange={setDate} {...args}>\r
        <SelectTrigger className='w-80'>\r
          <SelectValue placeholder="请选择" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          {items.map(item => {
          return <SelectItem key={item.key} value={item.key} disabled={item.disabled}>\r
              {item.label}\r
            </SelectItem>;
        })}\r
        </SelectContent>\r
      </Select>;
  }
}`,...(T=(w=g.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var z,P,M;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: args => {
    const [data, setDate] = useState<string>('');
    return <Select value={data} onValueChange={setDate} {...args}>\r
        <SelectTrigger value={data} closeCallback={() => setDate('')} className='w-80'>\r
          <SelectValue placeholder="请选择" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          {items.map(item => {
          return <SelectItem key={item.key} value={item.key} disabled={item.disabled}>\r
              {item.label}\r
            </SelectItem>;
        })}\r
        </SelectContent>\r
      </Select>;
  }
}`,...(M=(P=y.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var O,A,E;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true
  },
  render: args => {
    const [data, setDate] = useState<string>('');
    return <Select value={data} onValueChange={setDate} {...args}>\r
        <SelectTrigger value={data} closeCallback={() => setDate('')} className='w-80'>\r
          <SelectValue placeholder="请选择" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          {items.map(item => {
          return <SelectItem key={item.key} value={item.key} disabled={item.disabled}>\r
              {item.label}\r
            </SelectItem>;
        })}\r
        </SelectContent>\r
      </Select>;
  }
}`,...(E=(A=b.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var F,H,R;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true
  },
  render: args => {
    const [data, setDate] = useState<string>('');
    return <Select value={data} onValueChange={setDate} {...args}>\r
        <SelectTrigger value={data} closeCallback={() => setDate('')} className='w-80'>\r
          <SelectValue placeholder="请选择" />\r
        </SelectTrigger>\r
        <SelectContent>\r
\r
        </SelectContent>\r
      </Select>;
  }
}`,...(R=(H=h.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var B,L,_;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: args => {
    const [data, setDate] = useState<string>('');
    return <Select value={data} onValueChange={setDate} {...args}>\r
        <SelectTrigger value={data} closeCallback={() => setDate('')} className='w-80'>\r
          <div className='flex items-center justify-start gap-2'>\r
            <FavoriteIcon />\r
            <SelectValue placeholder="请选择" />\r
          </div>\r
        </SelectTrigger>\r
        <SelectContent>\r
          {items.map(item => {
          return <SelectItem key={item.key} value={item.key} disabled={item.disabled}>\r
              {item.label}\r
            </SelectItem>;
        })}\r
        </SelectContent>\r
      </Select>;
  }
}`,...(_=(L=v.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var G,q,J;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: args => {
    const [options, setOptions] = useState<{
      key: string;
      label: string;
      disabled?: boolean;
    }[]>([]);
    const [data, setDate] = useState<string>('');
    const AddOption = (value: string) => {
      if (!value) return;
      if (options.find(item => item.key === value)) return;
      setOptions([...options, {
        key: value,
        label: value
      }]);
    };
    return <Select value={data} onValueChange={setDate} {...args}>\r
        <SelectTrigger value={data} closeCallback={() => setDate('')} className='w-80'>\r
          <div className='flex items-center justify-start gap-2'>\r
            <FavoriteIcon />\r
            <SelectValue placeholder="请选择" />\r
          </div>\r
        </SelectTrigger>\r
        <SelectContent editable={true} editCallback={AddOption}>\r
          {options.length > 0 && options.map(item => {
          return <SelectItem key={item.key} value={item.key} disabled={item.disabled}>\r
              {item.label}\r
            </SelectItem>;
        })}\r
        </SelectContent>\r
      </Select>;
  }
}`,...(J=(q=C.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const Pe=["PrimarySmallSelect","PrimaryMiddleSelect","PrimaryLargeSelect","PrimaryMiddleCanCloseSelect","PrimaryMiddleSelectDisabled","PrimaryMiddleEmptySelect","PrimaryHasIconMiddleCanCloseSelect","PrimaryHasIconMiddleCanCloseCanAddSelect"];export{C as PrimaryHasIconMiddleCanCloseCanAddSelect,v as PrimaryHasIconMiddleCanCloseSelect,g as PrimaryLargeSelect,y as PrimaryMiddleCanCloseSelect,h as PrimaryMiddleEmptySelect,S as PrimaryMiddleSelect,b as PrimaryMiddleSelectDisabled,p as PrimarySmallSelect,Pe as __namedExportsOrder,ze as default};
