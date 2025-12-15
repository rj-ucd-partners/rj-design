import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{C as i}from"./checkbox-vLtsGzeJ.js";import{L as d}from"./label-CFkpOeV6.js";import"./iframe-DPkNXRqw.js";import"./index-CVJC_e1g.js";import"./index-3PNdDA9F.js";import"./index-ZCJ3rLJN.js";import"./index-TAJg0BDn.js";import"./index-CGny4Gu2.js";import"./index-CdverDIJ.js";import"./index-tTCODTNv.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-CGrAONsN.js";import"./utils-D-KgF5mV.js";const y={title:"Components/Checkbox",tags:["autodocs"],component:i,argTypes:{variant:{control:{type:"select"},options:["default"]},checked:{control:{type:"select"},options:["indeterminate",!0,!1]},disabled:{control:"boolean"}}},t={args:{checked:"indeterminate",variant:"default"},render:e=>r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(i,{variant:e.variant,disabled:e.disabled,id:"check",defaultChecked:e.checked,checked:e.checked}),r.jsx(d,{htmlFor:"check",children:"Indeterminate checkbox"})]})};var a,c,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    checked: 'indeterminate',
    variant: 'default'
  },
  render: args => {
    return <div className="flex items-center gap-2">\r
            <Checkbox variant={args.variant} disabled={args.disabled} id={'check'} defaultChecked={args.checked} checked={args.checked} />\r
            <Label htmlFor={'check'}>Indeterminate checkbox</Label>\r
        </div>;
  }
}`,...(o=(c=t.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,y as default};
