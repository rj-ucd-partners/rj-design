import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as m,a as n,b as p,c as l,d as c,e as d}from"./item--q494X8l.js";import{B as s}from"./button-7wqqdEkD.js";import{I}from"./infoCirecledIcon-Bh4TnBS0.js";import"./iframe-DPkNXRqw.js";import"./index-CVJC_e1g.js";import"./index-CGrAONsN.js";import"./utils-D-KgF5mV.js";import"./separator-7reEwx-p.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";const b={title:"Components/Item",tags:["autodocs"],component:m,argTypes:{variant:{control:{type:"select"},options:["default","popover"]},size:{control:{type:"select"},options:["flex","sm","default"]}}},r={args:{variant:"popover",size:"flex"},render:t=>e.jsx("div",{className:"w-100 bg-fill-light-hover-bg",children:e.jsxs(m,{variant:t.variant,size:t.size,children:[e.jsx(n,{children:e.jsxs(p,{children:[e.jsx(I,{className:"text-primary"})," 标题"]})}),e.jsx(l,{children:e.jsx(c,{children:"描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容"})}),e.jsxs(d,{className:"mt-2",children:[e.jsx(s,{variant:"default",size:"md",children:"取消"}),e.jsx(s,{variant:"primary",size:"md",children:"确认"})]})]})})};var o,a,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "popover",
    size: "flex"
  },
  render: args => {
    return <div className='w-100 bg-fill-light-hover-bg'>\r
                <Item variant={args.variant} size={args.size}>\r
                    <ItemHeader>\r
                        <ItemTitle><InfoCirecledIcon className='text-primary' /> 标题</ItemTitle>\r
                    </ItemHeader>\r
                    <ItemContent>\r
                        <ItemDescription>\r
                            描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容\r
                        </ItemDescription>\r
                    </ItemContent>\r
                    <ItemFooter className='mt-2'>\r
                        <Button variant="default" size="md">\r
                            取消\r
                        </Button>\r
                        <Button variant="primary" size="md">\r
                            确认\r
                        </Button>\r
                    </ItemFooter>\r
                </Item>\r
            </div>;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const T=["PopoverItem"];export{r as PopoverItem,T as __namedExportsOrder,b as default};
