import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{E as a}from"./empty-CtEqluxS.js";import{A as x,b as v}from"./alert-CHtn1P35.js";import{r as i}from"./iframe-DPkNXRqw.js";import"./utils-D-KgF5mV.js";import"./index-CGrAONsN.js";import"./button-7wqqdEkD.js";import"./index-CVJC_e1g.js";import"./closeIcon-6bXNgUOm.js";import"./infoCirecledIcon-Bh4TnBS0.js";import"./abnormalIcon-1XwIHm4S.js";const K={title:"Components/Empty",component:a,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:[]},size:{control:{type:"select"},options:["sm","md","lg"]}}},r={args:{size:"md"},render:t=>e.jsx("div",{className:"w-full h-100",children:e.jsx(a,{...t})})},s={args:{size:"md",desc:"描述文描述文",handlerDesc:"操作文案"},render:t=>{const[g,o]=i.useState(!1),[A,l]=i.useState(""),f=()=>{l("不知道干嘛"),o(!0)},h=()=>{l("Just do it!"),o(!0)};return e.jsxs("div",{className:"w-full h-100",children:[e.jsx(a,{...t,onOK:f,onDO:h}),g&&e.jsx(x,{variant:"primary",show:!0,children:e.jsx(v,{children:A})})]})}};var n,m,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    return <div className="w-full h-100">\r
                <Empty {...args} />\r
            </div>;
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'md',
    desc: '描述文描述文',
    handlerDesc: '操作文案'
  },
  render: args => {
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const onOK = () => {
      setAlertMessage('不知道干嘛');
      setAlertVisible(true);
    };
    const onDO = () => {
      setAlertMessage('Just do it!');
      setAlertVisible(true);
    };
    return <div className="w-full h-100">\r
                <Empty {...args} onOK={onOK} onDO={onDO} />\r
                {alertVisible && <Alert variant={'primary'} show={true}>\r
                        <AlertTitle>{alertMessage}</AlertTitle>\r
                    </Alert>}\r
            </div>;
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const N=["Default","Handler"];export{r as Default,s as Handler,N as __namedExportsOrder,K as default};
