import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as i,a as u,b as p,h as l,i as M,c as y,j as Q,d as U,e as V,f as X,g as Y}from"./dropdown-menu-CZ8NzJrF.js";import{B as m}from"./button-7wqqdEkD.js";import{T as g}from"./react-icons.esm-_2Ujgxc8.js";import{r as D}from"./iframe-DPkNXRqw.js";import{F as w}from"./FavoriteIcon-CrJ0VcNh.js";import"./index-DW48STyt.js";import"./index-CVJC_e1g.js";import"./index-3PNdDA9F.js";import"./index-TAJg0BDn.js";import"./index-CGny4Gu2.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-xbPJJJA0.js";import"./index-BwCODQwj.js";import"./index-D7KDVih1.js";import"./index-BFJ-Qg5v.js";import"./index-CZ6tSH_D.js";import"./index-nrtHsWe5.js";import"./Combination-DlUI4tCQ.js";import"./index-CcTl1dMB.js";import"./index-BXyZJ4ef.js";import"./index-Piay1Hl0.js";import"./index-tTCODTNv.js";import"./index-DUrgPtLc.js";import"./index-CNmy0mc9.js";import"./index-BpVfPjWU.js";import"./utils-D-KgF5mV.js";import"./index-CGrAONsN.js";import"./check-DLJQi36D.js";import"./createLucideIcon-BVkOKLvB.js";import"./circle-DafUkavS.js";const ze={title:"Components/DropdownMenu",tags:["autodocs"],component:i,argTypes:{disabled:{control:"boolean"},variant:{control:{type:"select"},options:["primary"]}}},c=[{key:"1",label:"下拉选项1",children:[{key:"1-1",label:"下拉选项1-1",children:[{key:"1-1-1",label:"下拉选项1-1-1"},{key:"1-1-2",label:"下拉选项1-1-2"}]},{key:"1-2",label:"下拉选项1-2"},{key:"1-3",label:"下拉选项1-3"}]},{key:"2",label:"下拉选项2",disabled:!0},{key:"3",label:"下拉选项3"},{key:"4",label:"下拉选项4"},{key:"5",label:"下拉选项5"}],h=(n,t,s,r)=>n.children&&n.children.length>0?e.jsxs(U,{children:[e.jsxs(V,{disabled:n.disabled,children:[r,n.label]}),e.jsx(X,{children:e.jsx(Y,{sideOffset:10,children:n.children.map(a=>h(a,t,s,r))})})]},n.key):e.jsxs(y,{disabled:n.disabled,onClick:()=>{s&&s(n.key)},children:[r,n.label]},n.key),x={args:{disabled:!1,variant:"primary"},render:n=>{const{variant:t}=n,[s,r]=D.useState([]),a=o=>{if(s.includes(o)){const d=s.filter(k=>k!==o);r(d)}else{const d=[...s,o];r(d)}};return e.jsxs(i,{variant:t,children:[e.jsx(u,{asChild:!0,children:e.jsxs(m,{disabled:n.disabled,variant:"default",size:"md",children:[e.jsx("span",{children:"更多"}),e.jsx(g,{"data-slot":"tran-icon"})]})}),e.jsxs(p,{className:"w-56",align:"start",children:[e.jsx(l,{children:"分组文字"}),c.map(o=>h(o,s,a))]})]})}},b={args:{disabled:!1,variant:"primary"},render:n=>{const[t,s]=D.useState([]),r=a=>{if(t.includes(a)){const o=t.filter(d=>d!==a);s(o)}else{const o=[...t,a];s(o)}};return e.jsxs(i,{...n,children:[e.jsx(u,{asChild:!0,children:e.jsxs(m,{disabled:n.disabled,variant:"secondary-text",size:"md",children:[e.jsx("span",{children:"更多"}),e.jsx(g,{"data-slot":"tran-icon"})]})}),e.jsx(p,{className:"w-56",align:"start",children:c.map(a=>h(a,t,r))})]})}},j={args:{disabled:!1,variant:"primary"},render:n=>{const[t,s]=D.useState([]),r=a=>{if(t.includes(a)){const o=t.filter(d=>d!==a);s(o)}else{const o=[...t,a];s(o)}};return e.jsxs(i,{...n,children:[e.jsx(u,{asChild:!0,children:e.jsxs(m,{disabled:n.disabled,variant:"primary",size:"md",children:[e.jsx("span",{children:"更多"}),e.jsx(g,{"data-slot":"tran-icon"})]})}),e.jsx(p,{className:"w-56",align:"start",children:c.map(a=>h(a,t,r))})]})}},f={args:{disabled:!1,variant:"primary"},render:n=>{const[t,s]=D.useState([]),r=a=>{if(t.includes(a)){const o=t.filter(d=>d!==a);s(o)}else{const o=[...t,a];s(o)}};return e.jsxs(i,{...n,children:[e.jsx(u,{asChild:!0,children:e.jsx(m,{disabled:n.disabled,variant:"hover-icon",size:"md",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M3 9C2.44775 9 2 8.55228 2 8C2 7.44772 2.44775 7 3 7C3.55225 7 4 7.44772 4 8C4 8.55228 3.55225 9 3 9Z",fill:"white"}),e.jsx("path",{d:"M7 8C7 8.55228 7.44775 9 8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8Z",fill:"white"}),e.jsx("path",{d:"M12 8C12 8.55228 12.4478 9 13 9C13.5522 9 14 8.55228 14 8C14 7.44772 13.5522 7 13 7C12.4478 7 12 7.44772 12 8Z",fill:"white"})]})})}),e.jsx(p,{className:"w-56",align:"start",children:c.map(a=>h(a,t,r))})]})}},C={args:{disabled:!1,variant:"primary"},render:n=>{const{variant:t}=n,[s,r]=D.useState([]),a=o=>{if(s.includes(o)){const d=s.filter(k=>k!==o);r(d)}else{const d=[...s,o];r(d)}};return e.jsxs(i,{open:!0,variant:t,children:[e.jsx(u,{asChild:!0,children:e.jsxs(m,{disabled:n.disabled,variant:"default",size:"md",children:[e.jsx("span",{children:"更多"}),e.jsx(g,{"data-slot":"tran-icon"})]})}),e.jsxs(p,{className:"w-56",align:"start",children:[e.jsx(l,{children:"分组文字"}),c.map(o=>h(o,s,a,e.jsx(w,{})))]})]})}},v={args:{disabled:!1,variant:"primary"},render:n=>{const{variant:t}=n;return e.jsxs(i,{open:!0,variant:t,children:[e.jsx(u,{asChild:!0,children:e.jsxs(m,{disabled:n.disabled,variant:"default",size:"md",children:[e.jsx("span",{children:"更多"}),e.jsx(g,{"data-slot":"tran-icon"})]})}),e.jsx(p,{className:"w-56",align:"start",children:e.jsxs(M,{children:[e.jsx(l,{children:"分组文字"}),c.map((s,r)=>e.jsxs("div",{children:[e.jsxs(y,{disabled:s.disabled,children:[e.jsx(w,{}),s.label]}),r<c.length-1&&e.jsx(Q,{})]},s.key))]})})]})}},S={args:{disabled:!1,variant:"primary"},render:n=>{const{variant:t}=n;return e.jsxs(i,{open:!0,variant:t,children:[e.jsx(u,{asChild:!0,children:e.jsxs(m,{disabled:n.disabled,variant:"default",size:"md",children:[e.jsx("span",{children:"更多"}),e.jsx(g,{"data-slot":"tran-icon"})]})}),e.jsxs(p,{className:"w-56",align:"start",children:[e.jsxs(M,{children:[e.jsx(l,{children:"主题色"}),Array.from({length:5}).map((s,r)=>e.jsxs(y,{disabled:r===2,status:"primary",children:[e.jsx(w,{}),`选项${r}`]},r))]}),e.jsxs(M,{children:[e.jsx(l,{children:"成功色"}),Array.from({length:5}).map((s,r)=>e.jsxs(y,{disabled:r===2,status:"success",children:[e.jsx(w,{}),`选项${r}`]},r+10))]}),e.jsxs(M,{children:[e.jsx(l,{children:"破坏性"}),Array.from({length:5}).map((s,r)=>e.jsxs(y,{disabled:r===2,status:"destructive",children:[e.jsx(w,{}),`选项${r}`]},r+10))]}),e.jsxs(M,{children:[e.jsx(l,{children:"警告色"}),Array.from({length:5}).map((s,r)=>e.jsxs(y,{disabled:r===2,status:"warning",children:[e.jsx(w,{}),`选项${r}`]},r+10))]})]})]})}};var K,I,T;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'primary'
  },
  render: args => {
    const {
      variant
    } = args;
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const onSelectedChanged = (key: string) => {
      if (selectedKeys.includes(key)) {
        const keys = selectedKeys.filter(item => item !== key);
        setSelectedKeys(keys);
      } else {
        const keys = [...selectedKeys, key];
        setSelectedKeys(keys);
      }
    };
    return <DropdownMenu variant={variant}>\r
                <DropdownMenuTrigger asChild>\r
                    <Button disabled={args.disabled} variant={'default'} size={"md"}>\r
                        <span>更多</span>\r
                        <TriangleDownIcon data-slot="tran-icon" />\r
                    </Button>\r
                </DropdownMenuTrigger>\r
                <DropdownMenuContent className="w-56" align="start">\r
                    <DropdownMenuLabel>分组文字</DropdownMenuLabel>\r
                    {menus.map(menu => {
          return renderMenuItem(menu, selectedKeys, onSelectedChanged);
        })}\r
                </DropdownMenuContent>\r
            </DropdownMenu>;
  }
}`,...(T=(I=x.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var B,L,z;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'primary'
  },
  render: args => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const onSelectedChanged = (key: string) => {
      if (selectedKeys.includes(key)) {
        const keys = selectedKeys.filter(item => item !== key);
        setSelectedKeys(keys);
      } else {
        const keys = [...selectedKeys, key];
        setSelectedKeys(keys);
      }
    };
    return <DropdownMenu {...args}>\r
                <DropdownMenuTrigger asChild>\r
                    <Button disabled={args.disabled} variant={'secondary-text'} size={"md"}>\r
                        <span>更多</span>\r
                        <TriangleDownIcon data-slot="tran-icon" />\r
                    </Button>\r
                </DropdownMenuTrigger>\r
                <DropdownMenuContent className="w-56" align="start">\r
                    {menus.map(menu => {
          return renderMenuItem(menu, selectedKeys, onSelectedChanged);
        })}\r
                </DropdownMenuContent>\r
            </DropdownMenu>;
  }
}`,...(z=(L=b.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var N,G,_;j.parameters={...j.parameters,docs:{...(N=j.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'primary'
  },
  render: args => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const onSelectedChanged = (key: string) => {
      if (selectedKeys.includes(key)) {
        const keys = selectedKeys.filter(item => item !== key);
        setSelectedKeys(keys);
      } else {
        const keys = [...selectedKeys, key];
        setSelectedKeys(keys);
      }
    };
    return <DropdownMenu {...args}>\r
                <DropdownMenuTrigger asChild>\r
                    <Button disabled={args.disabled} variant={'primary'} size={"md"}>\r
                        <span>更多</span>\r
                        <TriangleDownIcon data-slot="tran-icon" />\r
                    </Button>\r
                </DropdownMenuTrigger>\r
                <DropdownMenuContent className="w-56" align="start">\r
                    {menus.map(menu => {
          return renderMenuItem(menu, selectedKeys, onSelectedChanged);
        })}\r
                </DropdownMenuContent>\r
            </DropdownMenu>;
  }
}`,...(_=(G=j.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var A,F,$;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'primary'
  },
  render: args => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const onSelectedChanged = (key: string) => {
      if (selectedKeys.includes(key)) {
        const keys = selectedKeys.filter(item => item !== key);
        setSelectedKeys(keys);
      } else {
        const keys = [...selectedKeys, key];
        setSelectedKeys(keys);
      }
    };
    return <DropdownMenu {...args}>\r
                <DropdownMenuTrigger asChild>\r
                    <Button disabled={args.disabled} variant={'hover-icon'} size={"md"}>\r
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                            <path d="M3 9C2.44775 9 2 8.55228 2 8C2 7.44772 2.44775 7 3 7C3.55225 7 4 7.44772 4 8C4 8.55228 3.55225 9 3 9Z" fill="white" />\r
                            <path d="M7 8C7 8.55228 7.44775 9 8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8Z" fill="white" />\r
                            <path d="M12 8C12 8.55228 12.4478 9 13 9C13.5522 9 14 8.55228 14 8C14 7.44772 13.5522 7 13 7C12.4478 7 12 7.44772 12 8Z" fill="white" />\r
                        </svg>\r
                    </Button>\r
                </DropdownMenuTrigger>\r
                <DropdownMenuContent className="w-56" align="start">\r
                    {menus.map(menu => {
          return renderMenuItem(menu, selectedKeys, onSelectedChanged);
        })}\r
                </DropdownMenuContent>\r
            </DropdownMenu>;
  }
}`,...($=(F=f.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var H,Z,E;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'primary'
  },
  render: args => {
    const {
      variant
    } = args;
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const onSelectedChanged = (key: string) => {
      if (selectedKeys.includes(key)) {
        const keys = selectedKeys.filter(item => item !== key);
        setSelectedKeys(keys);
      } else {
        const keys = [...selectedKeys, key];
        setSelectedKeys(keys);
      }
    };
    return <DropdownMenu open={true} variant={variant}>\r
                <DropdownMenuTrigger asChild>\r
                    <Button disabled={args.disabled} variant={'default'} size={"md"}>\r
                        <span>更多</span>\r
                        <TriangleDownIcon data-slot="tran-icon" />\r
                    </Button>\r
                </DropdownMenuTrigger>\r
                <DropdownMenuContent className="w-56" align="start">\r
                    <DropdownMenuLabel>分组文字</DropdownMenuLabel>\r
                    {menus.map(menu => {
          return renderMenuItem(menu, selectedKeys, onSelectedChanged, <FavoriteIcon />);
        })}\r
                </DropdownMenuContent>\r
            </DropdownMenu>;
  }
}`,...(E=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:E.source}}};var P,O,W;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'primary'
  },
  render: args => {
    const {
      variant
    } = args;
    return <DropdownMenu open={true} variant={variant}>\r
                <DropdownMenuTrigger asChild>\r
                    <Button disabled={args.disabled} variant={'default'} size={"md"}>\r
                        <span>更多</span>\r
                        <TriangleDownIcon data-slot="tran-icon" />\r
                    </Button>\r
                </DropdownMenuTrigger>\r
                <DropdownMenuContent className="w-56" align="start">\r
                    <DropdownMenuGroup>\r
                        <DropdownMenuLabel>分组文字</DropdownMenuLabel>\r
                        {menus.map((menu, index) => {
            return <div key={menu.key}>\r
                                <DropdownMenuItem disabled={menu.disabled}>\r
                                    {<FavoriteIcon />}\r
                                    {menu.label}\r
                                </DropdownMenuItem>\r
                                {index < menus.length - 1 && <DropdownMenuSeparator />}\r
                            </div>;
          })}\r
                    </DropdownMenuGroup>\r
                </DropdownMenuContent>\r
            </DropdownMenu>;
  }
}`,...(W=(O=v.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var R,q,J;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: false,
    variant: 'primary'
  },
  render: args => {
    const {
      variant
    } = args;
    return <DropdownMenu open={true} variant={variant}>\r
                <DropdownMenuTrigger asChild>\r
                    <Button disabled={args.disabled} variant={'default'} size={"md"}>\r
                        <span>更多</span>\r
                        <TriangleDownIcon data-slot="tran-icon" />\r
                    </Button>\r
                </DropdownMenuTrigger>\r
                <DropdownMenuContent className="w-56" align="start">\r
                    <DropdownMenuGroup>\r
                        <DropdownMenuLabel>主题色</DropdownMenuLabel>\r
                        {Array.from({
            length: 5
          }).map((_, index) => {
            return <DropdownMenuItem key={index} disabled={index === 2} status={'primary'}>\r
                                    {<FavoriteIcon />}\r
                                    {\`选项\${index}\`}\r
                                </DropdownMenuItem>;
          })}\r
                    </DropdownMenuGroup>\r
                    <DropdownMenuGroup>\r
                        <DropdownMenuLabel>成功色</DropdownMenuLabel>\r
                        {Array.from({
            length: 5
          }).map((_, index) => {
            return <DropdownMenuItem key={index + 10} disabled={index === 2} status={'success'}>\r
                                    {<FavoriteIcon />}\r
                                    {\`选项\${index}\`}\r
                                </DropdownMenuItem>;
          })}\r
                    </DropdownMenuGroup>\r
                    <DropdownMenuGroup>\r
                        <DropdownMenuLabel>破坏性</DropdownMenuLabel>\r
                        {Array.from({
            length: 5
          }).map((_, index) => {
            return <DropdownMenuItem key={index + 10} disabled={index === 2} status={'destructive'}>\r
                                    {<FavoriteIcon />}\r
                                    {\`选项\${index}\`}\r
                                </DropdownMenuItem>;
          })}\r
                    </DropdownMenuGroup>\r
                    <DropdownMenuGroup>\r
                        <DropdownMenuLabel>警告色</DropdownMenuLabel>\r
                        {Array.from({
            length: 5
          }).map((_, index) => {
            return <DropdownMenuItem key={index + 10} disabled={index === 2} status={'warning'}>\r
                                    {<FavoriteIcon />}\r
                                    {\`选项\${index}\`}\r
                                </DropdownMenuItem>;
          })}\r
                    </DropdownMenuGroup>\r
                </DropdownMenuContent>\r
            </DropdownMenu>;
  }
}`,...(J=(q=S.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const Ne=["DefaultDropdownMenu","SecondaryTextDropdownMenu","PrimaryDropdownMenu","IconDropdownMenu","DropdownMenuItemHasIcon","DropdownMenuItemHasIconSeparator","DropdownMenuItemHasIconWithStatus"];export{x as DefaultDropdownMenu,C as DropdownMenuItemHasIcon,v as DropdownMenuItemHasIconSeparator,S as DropdownMenuItemHasIconWithStatus,f as IconDropdownMenu,j as PrimaryDropdownMenu,b as SecondaryTextDropdownMenu,Ne as __namedExportsOrder,ze as default};
