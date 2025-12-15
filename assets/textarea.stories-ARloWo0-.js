import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{T as g}from"./textarea-Dqt5OPUb.js";import{r as u}from"./iframe-DPkNXRqw.js";import"./utils-D-KgF5mV.js";import"./index-CGrAONsN.js";const X={title:"Components/Textarea",tags:["autodocs"],component:g,argTypes:{variant:{control:"select",options:["primary","success","destructive","warning"]}}},l={args:{maxLength:100,placeholder:"在这里输入的",variant:"primary"},render:e=>{const[r,a]=u.useState(),s=n=>{const t=n.target.value;e.maxLength&&t.length>e.maxLength?a(t.substring(0,e.maxLength)):a(t)};return o.jsx(g,{...e,value:r,onChange:s})}},c={args:{maxLength:100,placeholder:"在这里输入的",variant:"success"},render:e=>{const[r,a]=u.useState(),s=n=>{const t=n.target.value;e.maxLength&&t.length>e.maxLength?a(t.substring(0,e.maxLength)):a(t)};return o.jsx(g,{...e,value:r,onChange:s})}},i={args:{maxLength:100,placeholder:"在这里输入的",variant:"destructive"},render:e=>{const[r,a]=u.useState(),s=n=>{const t=n.target.value;e.maxLength&&t.length>e.maxLength?a(t.substring(0,e.maxLength)):a(t)};return o.jsx(g,{...e,value:r,onChange:s})}},h={args:{maxLength:100,placeholder:"在这里输入的",variant:"warning"},render:e=>{const[r,a]=u.useState(),s=n=>{const t=n.target.value;e.maxLength&&t.length>e.maxLength?a(t.substring(0,e.maxLength)):a(t)};return o.jsx(g,{...e,value:r,onChange:s})}},m={args:{maxLength:100,placeholder:"在这里输入的",variant:"destructive",description:"额外提示语，文字过多时输入框宽度折行"},render:e=>{const[r,a]=u.useState(),s=n=>{const t=n.target.value;e.maxLength&&t.length>e.maxLength?a(t.substring(0,e.maxLength)):a(t)};return o.jsx(g,{...e,value:r,onChange:s})}},d={args:{maxLength:100,placeholder:"在这里输入的",variant:"destructive",description:"额外提示语，文字过多时输入框宽度折行",resize:"both"},render:e=>{const[r,a]=u.useState(),s=n=>{const t=n.target.value;e.maxLength&&t.length>e.maxLength?a(t.substring(0,e.maxLength)):a(t)};return o.jsx(g,{...e,value:r,onChange:s})}},x={args:{maxLength:100,placeholder:"在这里输入的",variant:"destructive",description:"额外提示语，文字过多时输入框宽度折行",resize:"horizontal"},render:e=>{const[r,a]=u.useState(),s=n=>{const t=n.target.value;e.maxLength&&t.length>e.maxLength?a(t.substring(0,e.maxLength)):a(t)};return o.jsx(g,{...e,value:r,onChange:s})}},v={args:{maxLength:100,placeholder:"在这里输入的",variant:"destructive",description:"额外提示语，文字过多时输入框宽度折行",resize:"vertical"},render:e=>{const[r,a]=u.useState(),s=n=>{const t=n.target.value;e.maxLength&&t.length>e.maxLength?a(t.substring(0,e.maxLength)):a(t)};return o.jsx(g,{...e,value:r,onChange:s})}},p={args:{maxLength:100,placeholder:"在这里输入的",variant:"destructive",description:"额外提示语，文字过多时输入框宽度折行",resize:"none"},render:e=>{const[r,a]=u.useState(),s=n=>{const t=n.target.value;e.maxLength&&t.length>e.maxLength?a(t.substring(0,e.maxLength)):a(t)};return o.jsx(g,{...e,value:r,onChange:s})}};var L,V,C;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    maxLength: 100,
    placeholder: "在这里输入的",
    variant: 'primary'
  },
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const str = e.target.value;
      if (args.maxLength && str.length > args.maxLength) {
        setValue(str.substring(0, args.maxLength));
      } else {
        setValue(str);
      }
    };
    return <Textarea {...args} value={value} onChange={onValueChange} />;
  }
}`,...(C=(V=l.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var f,T,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    maxLength: 100,
    placeholder: "在这里输入的",
    variant: 'success'
  },
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const str = e.target.value;
      if (args.maxLength && str.length > args.maxLength) {
        setValue(str.substring(0, args.maxLength));
      } else {
        setValue(str);
      }
    };
    return <Textarea {...args} value={value} onChange={onValueChange} />;
  }
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,b,z;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    maxLength: 100,
    placeholder: "在这里输入的",
    variant: 'destructive'
  },
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const str = e.target.value;
      if (args.maxLength && str.length > args.maxLength) {
        setValue(str.substring(0, args.maxLength));
      } else {
        setValue(str);
      }
    };
    return <Textarea {...args} value={value} onChange={onValueChange} />;
  }
}`,...(z=(b=i.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var R,j,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    maxLength: 100,
    placeholder: "在这里输入的",
    variant: 'warning'
  },
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const str = e.target.value;
      if (args.maxLength && str.length > args.maxLength) {
        setValue(str.substring(0, args.maxLength));
      } else {
        setValue(str);
      }
    };
    return <Textarea {...args} value={value} onChange={onValueChange} />;
  }
}`,...(H=(j=h.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var A,M,y;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    maxLength: 100,
    placeholder: "在这里输入的",
    variant: 'destructive',
    description: '额外提示语，文字过多时输入框宽度折行'
  },
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const str = e.target.value;
      if (args.maxLength && str.length > args.maxLength) {
        setValue(str.substring(0, args.maxLength));
      } else {
        setValue(str);
      }
    };
    return <Textarea {...args} value={value} onChange={onValueChange} />;
  }
}`,...(y=(M=m.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var D,W,w;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    maxLength: 100,
    placeholder: "在这里输入的",
    variant: 'destructive',
    description: '额外提示语，文字过多时输入框宽度折行',
    resize: 'both'
  },
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const str = e.target.value;
      if (args.maxLength && str.length > args.maxLength) {
        setValue(str.substring(0, args.maxLength));
      } else {
        setValue(str);
      }
    };
    return <Textarea {...args} value={value} onChange={onValueChange} />;
  }
}`,...(w=(W=d.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var B,N,P;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    maxLength: 100,
    placeholder: "在这里输入的",
    variant: 'destructive',
    description: '额外提示语，文字过多时输入框宽度折行',
    resize: 'horizontal'
  },
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const str = e.target.value;
      if (args.maxLength && str.length > args.maxLength) {
        setValue(str.substring(0, args.maxLength));
      } else {
        setValue(str);
      }
    };
    return <Textarea {...args} value={value} onChange={onValueChange} />;
  }
}`,...(P=(N=x.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var _,O,k;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    maxLength: 100,
    placeholder: "在这里输入的",
    variant: 'destructive',
    description: '额外提示语，文字过多时输入框宽度折行',
    resize: 'vertical'
  },
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const str = e.target.value;
      if (args.maxLength && str.length > args.maxLength) {
        setValue(str.substring(0, args.maxLength));
      } else {
        setValue(str);
      }
    };
    return <Textarea {...args} value={value} onChange={onValueChange} />;
  }
}`,...(k=(O=v.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var q,F,G;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    maxLength: 100,
    placeholder: "在这里输入的",
    variant: 'destructive',
    description: '额外提示语，文字过多时输入框宽度折行',
    resize: 'none'
  },
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const str = e.target.value;
      if (args.maxLength && str.length > args.maxLength) {
        setValue(str.substring(0, args.maxLength));
      } else {
        setValue(str);
      }
    };
    return <Textarea {...args} value={value} onChange={onValueChange} />;
  }
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const Y=["Primary","Success","Destructive","Warning","DestructiveWithDescription","ResizeBoth","ResizeHorizontal","ResizeVertical","ResizeNone"];export{i as Destructive,m as DestructiveWithDescription,l as Primary,d as ResizeBoth,x as ResizeHorizontal,p as ResizeNone,v as ResizeVertical,c as Success,h as Warning,Y as __namedExportsOrder,X as default};
