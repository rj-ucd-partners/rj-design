import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as z}from"./utils-D-KgF5mV.js";import{c as va}from"./index-CGrAONsN.js";import{r as i,R as V}from"./iframe-DPkNXRqw.js";import{E as ha}from"./empty-CtEqluxS.js";import{I as he,c as fe,a as T}from"./input-group-CAYfQ-0y.js";import{P as fa,a as ba,b as ya}from"./index-BVl5ASR5.js";import{C as Na}from"./checkbox-vLtsGzeJ.js";import{B as H}from"./button-7wqqdEkD.js";import{C as Sa}from"./closeIcon-6bXNgUOm.js";import{X as be}from"./x-BxTVZDQx.js";import{C as ja}from"./check-DLJQi36D.js";import{F as re}from"./FavoriteIcon-CrJ0VcNh.js";import{M as sa}from"./magnifier-icon-Bhn8U7MK.js";import"./input-BNOkW-iY.js";import"./textarea-Dqt5OPUb.js";import"./index-DW48STyt.js";import"./index-CVJC_e1g.js";import"./index-3PNdDA9F.js";import"./index-D7KDVih1.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-BFJ-Qg5v.js";import"./index-CZ6tSH_D.js";import"./index-nrtHsWe5.js";import"./Combination-DlUI4tCQ.js";import"./index-CcTl1dMB.js";import"./index-CGny4Gu2.js";import"./index-BXyZJ4ef.js";import"./index-Piay1Hl0.js";import"./index-tTCODTNv.js";import"./index-DUrgPtLc.js";import"./index-CNmy0mc9.js";import"./index-TAJg0BDn.js";import"./index-ZCJ3rLJN.js";import"./index-CdverDIJ.js";import"./createLucideIcon-BVkOKLvB.js";const ta=V.createContext(void 0);function la(){const l=V.useContext(ta);if(l===void 0)throw new Error("useSelectContext must be used within a Select");return l}const R=({label:l,onRemove:t,className:s,size:r})=>e.jsxs("div",{className:z("inline-flex items-center gap-1","bg-fill-emphasize text-text-deep","border border-border rounded-sm",[r==="sm"&&"px-1 py-[1px] text-[12px] leading-[20px]",r==="md"&&"px-2 py-[1px] text-[13px] leading-[20px]",r==="lg"&&"px-2 py-[1px] text-[15px] leading-[22px]"],"max-w-[76px] truncate",s),children:[e.jsx("span",{className:"truncate flex-1",children:l}),t&&e.jsx(H,{variant:"transparent",size:"link",className:"text-secondary",onClick:m=>{m.stopPropagation(),t()},children:e.jsx(Sa,{})})]});function d({variant:l="primary",size:t="md",mode:s="single",canSearch:r=!1,placeholder:m="请选择",disabled:p=!1,datasource:v=[],value:g,defaultValue:h,onValueChange:u,editable:ca,editCallback:ie,frontIcon:ce,postIcon:ne,clearable:na,onClear:J,className:da,contentClassname:oa}){const[de,K]=i.useState(()=>g!==void 0?Array.isArray(g)?g:g?[g]:[]:h!==void 0?Array.isArray(h)?h:h?[h]:[]:[]),w=g!==void 0,f=i.useMemo(()=>w?Array.isArray(g)?g:g?[g]:[]:de,[w,g,de]),[I,F]=i.useState(""),[Q,oe]=i.useState(!1),Y=i.useRef(null),M=i.useRef(null),_=i.useRef(null),[Z,ma]=i.useState(2),[ee,ua]=i.useState(2),me=r&&I?v.filter(a=>a.label.toLowerCase().includes(I.toLowerCase())):v,n=f.map(a=>v.find(c=>c.key===a)).filter(Boolean),ue=s==="single"&&n.length>0?n[0].label:"";i.useLayoutEffect(()=>{if(!M.current||s!=="multiple"||n.length===0||r)return;const a=()=>{const x=M.current;if(!x)return;const C=x.offsetWidth,S=4,te=60+S;let j=0,k=0;const y=x.querySelectorAll("[data-tag-item]");for(let b=0;b<y.length;b++){const N=y[b].offsetWidth+S;if(b<y.length-1)if(j+N+te<=C)j+=N,k++;else break;else j+N<=C&&k++}ma(Math.max(1,Math.min(k,n.length)))};a();const c=new ResizeObserver(()=>{a()});return c.observe(M.current),()=>{c.disconnect()}},[s,r,f,v,n.length]),i.useLayoutEffect(()=>{if(!_.current||s!=="multiple"||n.length===0||!r)return;const a=()=>{const x=_.current;if(!x)return;const C=x.offsetWidth,S=4,ve=60,te=Math.max(C*.2,80),j=C-te-S,k=ve+S;let y=0,b=0;const N=x.querySelectorAll("[data-tag-item-search]");for(let W=0;W<N.length;W++){const le=N[W].offsetWidth+S;if(W<N.length-1)if(y+le+k<=j)y+=le,b++;else break;else y+le<=j&&b++}ua(Math.max(1,Math.min(b,n.length)))};a();const c=new ResizeObserver(()=>{a()});return c.observe(_.current),()=>{c.disconnect()}},[s,r,f,v,n.length]);const pa=a=>{let c;s==="single"?(c=[a],oe(!1),F("")):f.includes(a)?c=f.filter(x=>x!==a):c=[...f,a],w||K(c),u&&u(s==="single"?c[0]||"":c)},pe=a=>{const c=f.filter(x=>x!==a);w||K(c),s==="single"?u==null||u(c[0]||""):u==null||u(c)},ga=a=>{oe(a),a||F("")},[xa,ae]=V.useState(!1),[ge,se]=V.useState(""),xe=i.useRef(null);return e.jsx(ta.Provider,{value:{size:t,variant:l,mode:s,selectedValues:f,onSelect:pa},children:e.jsxs(fa,{open:Q,onOpenChange:ga,children:[e.jsx(ba,{asChild:!0,disabled:p,children:e.jsxs(he,{size:t,variant:"primary",disabled:p,clearable:na,onClear:()=>{w||K([]),u&&u(s==="single"?"":[]),J==null||J()},className:z("bg-third-background",!Q&&"hover:bg-fill-dark-hover-active-disabled dark:hover:bg-fill-light-hover-bg",Q&&"bg-fill-light-hover-bg dark:bg-fill-dark-hover-active-disabled",da),children:[ce&&e.jsx(fe,{children:ce}),!r&&s==="single"&&e.jsx(T,{disabled:p,readOnly:!0,value:ue,placeholder:m,className:"cursor-pointer"}),r&&s==="single"&&e.jsx(T,{ref:Y,disabled:p,type:"text",value:I||ue,onChange:a=>F(a.target.value),placeholder:m}),!r&&s==="multiple"&&e.jsx("div",{ref:M,className:"flex-1 flex items-center gap-1 overflow-hidden min-h-[20px] relative",children:n.length===0?e.jsx("span",{className:"text-secondary-information text-sm",children:m}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute opacity-0 pointer-events-none flex gap-1",children:n.map(a=>e.jsxs("div",{"data-tag-item":!0,className:"inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary-light text-primary text-xs max-w-[76px] truncate",children:[e.jsx("span",{className:"truncate flex-1",children:a.label}),e.jsx(be,{className:"size-3 flex-shrink-0"})]},a.key))}),n.slice(0,Z).map(a=>e.jsx(R,{size:t,label:a.label,onRemove:()=>pe(a.key),className:"flex-shrink-0"},a.key)),n.length>Z&&e.jsx(R,{size:t,label:`+${n.length-Z}...`,className:"flex-shrink-0"})]})}),r&&s==="multiple"&&e.jsxs("div",{ref:_,className:"flex-1 flex items-center gap-1 overflow-hidden ml-1",children:[e.jsx("div",{className:"absolute opacity-0 pointer-events-none flex gap-1",children:n.map(a=>e.jsxs("div",{"data-tag-item-search":!0,className:"inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary-light text-primary text-xs max-w-[76px] truncate",children:[e.jsx("span",{className:"truncate flex-1",children:a.label}),e.jsx(be,{className:"size-3 flex-shrink-0"})]},a.key))}),n.length>0&&e.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[n.slice(0,ee).map(a=>e.jsx(R,{size:t,label:a.label,onRemove:()=>pe(a.key),className:"flex-shrink-0"},a.key)),n.length>ee&&e.jsx(R,{size:t,label:`+${n.length-ee}...`,className:"flex-shrink-0"})]}),e.jsx(T,{ref:Y,disabled:p,type:"text",value:I,onChange:a=>F(a.target.value),placeholder:n.length===0?m:"",className:"flex-1 min-w-0",style:{minWidth:n.length>0?"20%":"100%"}})]}),ne&&e.jsx(fe,{align:"inline-end",children:ne})]})}),e.jsxs(ya,{className:z("w-[var(--radix-popover-trigger-width)]","bg-secondary-background shadow-[0px_6px_16px_rgba(0,0,0,0.08)]","rounded-md",oa),alignOffset:5,sideOffset:5,onOpenAutoFocus:a=>{var c;a.preventDefault(),r&&((c=Y.current)==null||c.focus())},children:[e.jsx(ra,{children:me.length===0?e.jsx(ha,{size:"md",desc:"暂无相关内容"}):me.map(a=>e.jsx(ia,{value:a.key,disabled:a.disabled,children:a.label},a.key))}),ca&&e.jsx("div",{className:"flex border-t border-border-foreground  items-center justify-center ",children:xa?e.jsxs("div",{className:"flex flex-col flex-1 items-center justify-center p-2 gap-2 ",children:[e.jsx(he,{className:"flex flex-1",size:t,variant:"primary",children:e.jsx(T,{ref:xe,value:ge,onChange:a=>{se(a.target.value)}})}),e.jsxs("div",{className:"flex w-full gap-2 items-center justify-end",children:[e.jsx(H,{variant:"primary",size:t,onClick:()=>{ie&&ie(ge),ae(!1),se("")},children:"确认"}),e.jsx(H,{variant:"default",size:t,onClick:()=>{ae(!1),se("")},children:"取消"})]})]}):e.jsxs("div",{className:"flex items-center justify-center h-[50px]",children:[e.jsx("span",{children:"+"}),e.jsx(H,{variant:"link",size:t,onClick:()=>{ae(!0),setTimeout(()=>{var a;(a=xe.current)==null||a.focus()},0)},children:"新增选项"})]})})]})]})})}const Va=va("p-2 overflow-y-auto rounded-md",{variants:{variant:{primary:["flex flex-col","[&_[data-slot=select-item]]:text-text-deep","[&_[data-slot=select-item]]:hover:bg-fill-dark-hover-active-disabled dark:[&_[data-slot=select-item]]:hover:bg-fill-light-hover-bg","[&_[data-slot=select-item]]:active:bg-fill-light-hover-bg dark:[&_[data-slot=select-item]]:active:bg-fill-dark-hover-active-disabled","[&_[data-slot=select-item][data-checked=true]]:text-primary","[&_[data-slot=select-item][data-checked=true]]:bg-primary-light"]},size:{sm:["gap-0.5","[&_[data-slot=select-item]]:rounded-md","[&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[1px]","[&_[data-slot=select-item]]:text-[12px] [&_[data-slot=select-item]]:leading-[20px]","gap-[2px]"],md:["gap-0.5","[&_[data-slot=select-item]]:rounded-md","[&_[data-slot=select-item]]:text-[13px] [&_[data-slot=select-item]]:leading-[20px]","[&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[3px]","gap-[2px]"],lg:["gap-0.5","[&_[data-slot=select-item]]:rounded-md","[&_[data-slot=select-item]]:text-[15px] [&_[data-slot=select-item]]:leading-[22px]","[&_[data-slot=select-item]]:px-3 [&_[data-slot=select-item]]:py-[6px]","gap-[2px]"]}}}),ra=V.forwardRef(({className:l,children:t,...s},r)=>{const{size:m,variant:p}=la();return e.jsx("div",{ref:r,className:z(Va({size:m,variant:p}),l),...s,children:t})});ra.displayName="SelectContent";const ia=V.forwardRef(({className:l,children:t,value:s,disabled:r,...m},p)=>{const{mode:v,selectedValues:g,onSelect:h}=la(),u=g.includes(s);return e.jsxs("div",{ref:p,"data-slot":"select-item","data-checked":u,className:z("flex w-full cursor-pointer select-none items-center gap-2 outline-none transition-colors rounded-md",r&&"pointer-events-none opacity-50 cursor-not-allowed",l),onClick:()=>{r||h(s)},...m,children:[v==="multiple"&&e.jsx(Na,{checked:u,disabled:r,onCheckedChange:()=>{r||h(s)}}),e.jsx("span",{className:"flex-1",children:t}),v==="single"&&u&&e.jsx(ja,{className:"size-4 text-primary"})]})});ia.displayName="SelectItem";d.__docgenInfo={description:"",methods:[],displayName:"Select",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},mode:{defaultValue:{value:"'single'",computed:!1},required:!1},canSearch:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:"'请选择'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},datasource:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ds={title:"Components/FunctionalitySelect",component:d,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:"boolean"},mode:{control:{type:"select"},options:["single","multiple"]}}},o=[{key:"apple",label:"Apple"},{key:"banana",label:"Banana"},{key:"orange",label:"Orange"},{key:"grape",label:"Grape"},{key:"bayberry",label:"Bayberry"},{key:"cherry",label:"Cherry"},{key:"strawberry",label:"Strawberry"},{key:"blueberry",label:"Blueberry",disabled:!0}],L={args:{disabled:!1},render:l=>{const[t,s]=i.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{datasource:o,size:"md",mode:"single",placeholder:"请选择水果",clearable:!1,canSearch:!1,value:t,onValueChange:s,className:"w-[300px]",disabled:l.disabled}),e.jsxs("div",{className:"text-sm text-gray-600",children:["当前选中: ",t||"无"]})]})}},D={args:{disabled:!1},render:l=>{const[t,s]=i.useState(""),[r,m]=i.useState(o),p=v=>{m([...r,{key:new Date().getTime().toString(),label:v}])};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{datasource:r,size:"md",mode:"single",placeholder:"请选择水果",clearable:!1,canSearch:!1,value:t,onValueChange:s,className:"w-[300px]",editable:!0,editCallback:p,disabled:l.disabled}),e.jsxs("div",{className:"text-sm text-gray-600",children:["当前选中: ",t||"无"]})]})}},A={args:{disabled:!1},render:l=>{const[t,s]=i.useState("apple");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{datasource:o,size:"md",mode:"single",placeholder:"搜索水果",clearable:!0,canSearch:!0,value:t,onValueChange:s,className:"w-[300px]",disabled:l.disabled}),e.jsxs("div",{className:"text-sm text-gray-600",children:["当前选中: ",t||"无"]})]})}},O={args:{disabled:!1},render:l=>{const[t,s]=i.useState("");return e.jsx(d,{datasource:o,size:"lg",mode:"single",placeholder:"请选择",frontIcon:e.jsx(re,{}),postIcon:e.jsx(sa,{className:"size-4"}),clearable:!0,canSearch:!1,value:t,onValueChange:s,className:"w-[300px]",disabled:l.disabled})}},B={args:{disabled:!1},render:l=>{const[t,s]=i.useState(["apple","banana","orange","grape"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{datasource:o,size:"md",mode:"multiple",placeholder:"请选择多个水果",clearable:!1,canSearch:!1,value:t,onValueChange:s,className:"w-[500px]",disabled:l.disabled}),e.jsxs("div",{className:"text-sm text-gray-600",children:["当前选中 ",t.length," 项: ",t.join(", ")]}),e.jsx("div",{className:"text-xs text-gray-500",children:"💡 Tag会根据输入框宽度动态收起,调整窗口大小试试!"})]})}},E={args:{disabled:!1},render:l=>{const[t,s]=i.useState(["apple","banana"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{datasource:o,size:"md",mode:"multiple",placeholder:"搜索并选择",clearable:!0,canSearch:!0,value:t,onValueChange:s,className:"w-[600px]",disabled:l.disabled}),e.jsxs("div",{className:"text-sm text-gray-600",children:["已选中 ",t.length," 项: ",t.join(", ")]})]})}},q={args:{disabled:!1},render:l=>{const[t,s]=i.useState(["apple","orange","grape"]);return e.jsx(d,{datasource:o,size:"md",mode:"multiple",placeholder:"请选择",frontIcon:e.jsx(re,{}),clearable:!0,canSearch:!0,value:t,onValueChange:s,disabled:l.disabled})}},P={args:{disabled:!1},render:l=>{const[t,s]=i.useState("apple"),[r,m]=i.useState("banana"),[p,v]=i.useState("orange");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Small"}),e.jsx(d,{datasource:o,size:"sm",mode:"single",value:t,onValueChange:s,placeholder:"Small size",className:"w-[300px]",disabled:l.disabled})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Medium"}),e.jsx(d,{datasource:o,size:"md",mode:"single",value:r,onValueChange:m,placeholder:"Medium size",className:"w-[300px]",disabled:l.disabled})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Large"}),e.jsx(d,{datasource:o,size:"lg",mode:"single",value:p,onValueChange:v,placeholder:"Large size",className:"w-[300px]",disabled:l.disabled})]})]})}},G={args:{disabled:!0},render:l=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"单选 - 禁用"}),e.jsx(d,{datasource:o,size:"md",mode:"single",value:"apple",disabled:l.disabled,placeholder:"已禁用",className:"w-[300px]"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"多选 - 禁用"}),e.jsx(d,{datasource:o,size:"md",mode:"multiple",value:["apple","banana"],disabled:!0,placeholder:"已禁用",className:"w-[300px]"})]})]})},U={render:()=>{const[l,t]=i.useState("apple"),[s,r]=i.useState(["apple","banana"]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"单选 - 可清除"}),e.jsx(d,{datasource:o,size:"md",mode:"single",value:l,onValueChange:t,clearable:!0,placeholder:"可清除选择",className:"w-[300px]"}),e.jsxs("div",{className:"text-sm text-gray-600",children:["值: ",l||"空"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"多选 - 可清除"}),e.jsx(d,{datasource:o,size:"md",mode:"multiple",value:s,onValueChange:r,clearable:!0,placeholder:"可清除选择",className:"w-[300px]"}),e.jsxs("div",{className:"text-sm text-gray-600",children:["值: ",s.length>0?s.join(", "):"空"]})]})]})}},$={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"单选 - 非受控(默认值: apple)"}),e.jsx(d,{datasource:o,size:"md",mode:"single",defaultValue:"apple",onValueChange:l=>console.log("单选变化:",l),placeholder:"非受控组件",className:"w-[300px]"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"多选 - 非受控(默认值: apple, banana)"}),e.jsx(d,{datasource:o,size:"md",mode:"multiple",defaultValue:["apple","banana"],onValueChange:l=>console.log("多选变化:",l),placeholder:"非受控组件",className:"w-[300px]"})]})]})},X={render:()=>{const[l,t]=i.useState(["apple","banana","orange"]),[s,r]=i.useState(o),m=p=>{r([...s,{key:new Date().getTime().toString(),label:p}])};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-lg font-semibold",children:"多选 + 搜索 + 图标 + 可清除"}),e.jsx(d,{datasource:s,size:"lg",mode:"multiple",value:l,onValueChange:t,canSearch:!0,clearable:!0,frontIcon:e.jsx(re,{}),postIcon:e.jsx(sa,{className:"size-4"}),placeholder:"搜索并选择水果",onClear:()=>console.log("清除了!"),editable:!0,editCallback:m,className:"w-[400px]"})]})}};var ye,Ne,Se;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => {
    const [value, setValue] = useState<string>('');
    return <div className="space-y-4">\r
                <FunctionalitySelect datasource={items} size="md" mode="single" placeholder="请选择水果" clearable={false} canSearch={false} value={value} onValueChange={setValue} className="w-[300px]" disabled={args.disabled} />\r
                <div className="text-sm text-gray-600">\r
                    当前选中: {value || '无'}\r
                </div>\r
            </div>;
  }
}`,...(Se=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};var je,Ve,we;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => {
    const [value, setValue] = useState<string>('');
    const [data, setData] = useState(items);
    const addItem = (label: string) => {
      setData([...data, {
        key: new Date().getTime().toString(),
        label: label
      }]);
    };
    return <div className="space-y-4">\r
                <FunctionalitySelect datasource={data} size="md" mode="single" placeholder="请选择水果" clearable={false} canSearch={false} value={value} onValueChange={setValue} className="w-[300px]" editable={true} editCallback={addItem} disabled={args.disabled} />\r
                <div className="text-sm text-gray-600">\r
                    当前选中: {value || '无'}\r
                </div>\r
            </div>;
  }
}`,...(we=(Ve=D.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};var Ce,ke,ze;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => {
    const [value, setValue] = useState<string>('apple');
    return <div className="space-y-4">\r
                <FunctionalitySelect datasource={items} size="md" mode="single" placeholder="搜索水果" clearable={true} canSearch={true} value={value} onValueChange={setValue} className="w-[300px]" disabled={args.disabled} />\r
                <div className="text-sm text-gray-600">\r
                    当前选中: {value || '无'}\r
                </div>\r
            </div>;
  }
}`,...(ze=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:ze.source}}};var Ie,Fe,Me;O.parameters={...O.parameters,docs:{...(Ie=O.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => {
    const [value, setValue] = useState<string>('');
    return <FunctionalitySelect datasource={items} size="lg" mode="single" placeholder="请选择" frontIcon={<FavoriteIcon />} postIcon={<MagnifierIcon className='size-4' />} clearable={true} canSearch={false} value={value} onValueChange={setValue} className="w-[300px]" disabled={args.disabled} />;
  }
}`,...(Me=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var _e,We,Te;B.parameters={...B.parameters,docs:{...(_e=B.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => {
    const [value, setValue] = useState<string[]>(['apple', 'banana', 'orange', 'grape']);
    return <div className="space-y-4">\r
                <FunctionalitySelect datasource={items} size="md" mode="multiple" placeholder="请选择多个水果" clearable={false} canSearch={false} value={value} onValueChange={setValue} className="w-[500px]" disabled={args.disabled} />\r
                <div className="text-sm text-gray-600">\r
                    当前选中 {value.length} 项: {value.join(', ')}\r
                </div>\r
                <div className="text-xs text-gray-500">\r
                    💡 Tag会根据输入框宽度动态收起,调整窗口大小试试!\r
                </div>\r
            </div>;
  }
}`,...(Te=(We=B.parameters)==null?void 0:We.docs)==null?void 0:Te.source}}};var Re,Le,De;E.parameters={...E.parameters,docs:{...(Re=E.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => {
    const [value, setValue] = useState<string[]>(['apple', 'banana']);
    return <div className="space-y-4">\r
                <FunctionalitySelect datasource={items} size="md" mode="multiple" placeholder="搜索并选择" clearable={true} canSearch={true} value={value} onValueChange={setValue} className="w-[600px]" disabled={args.disabled} />\r
                <div className="text-sm text-gray-600">\r
                    已选中 {value.length} 项: {value.join(', ')}\r
                </div>\r
            </div>;
  }
}`,...(De=(Le=E.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Ae,Oe,Be;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => {
    const [value, setValue] = useState<string[]>(['apple', 'orange', 'grape']);
    return <FunctionalitySelect datasource={items} size="md" mode="multiple" placeholder="请选择" frontIcon={<FavoriteIcon />} clearable={true} canSearch={true} value={value} onValueChange={setValue} disabled={args.disabled} />;
  }
}`,...(Be=(Oe=q.parameters)==null?void 0:Oe.docs)==null?void 0:Be.source}}};var Ee,qe,Pe;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  render: args => {
    const [valueSm, setValueSm] = useState<string>('apple');
    const [valueMd, setValueMd] = useState<string>('banana');
    const [valueLg, setValueLg] = useState<string>('orange');
    return <div className="space-y-6">\r
                <div className="space-y-2">\r
                    <div className="text-sm font-medium">Small</div>\r
                    <FunctionalitySelect datasource={items} size="sm" mode="single" value={valueSm} onValueChange={setValueSm} placeholder="Small size" className="w-[300px]" disabled={args.disabled} />\r
                </div>\r
                <div className="space-y-2">\r
                    <div className="text-sm font-medium">Medium</div>\r
                    <FunctionalitySelect datasource={items} size="md" mode="single" value={valueMd} onValueChange={setValueMd} placeholder="Medium size" className="w-[300px]" disabled={args.disabled} />\r
                </div>\r
                <div className="space-y-2">\r
                    <div className="text-sm font-medium">Large</div>\r
                    <FunctionalitySelect datasource={items} size="lg" mode="single" value={valueLg} onValueChange={setValueLg} placeholder="Large size" className="w-[300px]" disabled={args.disabled} />\r
                </div>\r
            </div>;
  }
}`,...(Pe=(qe=P.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source}}};var Ge,Ue,$e;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    return <div className="space-y-6">\r
                <div className="space-y-2">\r
                    <div className="text-sm font-medium">单选 - 禁用</div>\r
                    <FunctionalitySelect datasource={items} size="md" mode="single" value="apple" disabled={args.disabled} placeholder="已禁用" className="w-[300px]" />\r
                </div>\r
                <div className="space-y-2">\r
                    <div className="text-sm font-medium">多选 - 禁用</div>\r
                    <FunctionalitySelect datasource={items} size="md" mode="multiple" value={['apple', 'banana']} disabled placeholder="已禁用" className="w-[300px]" />\r
                </div>\r
            </div>;
  }
}`,...($e=(Ue=G.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};var Xe,He,Je;U.parameters={...U.parameters,docs:{...(Xe=U.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => {
    const [singleValue, setSingleValue] = useState<string>('apple');
    const [multipleValue, setMultipleValue] = useState<string[]>(['apple', 'banana']);
    return <div className="space-y-6">\r
                <div className="space-y-2">\r
                    <div className="text-sm font-medium">单选 - 可清除</div>\r
                    <FunctionalitySelect datasource={items} size="md" mode="single" value={singleValue} onValueChange={setSingleValue} clearable placeholder="可清除选择" className="w-[300px]" />\r
                    <div className="text-sm text-gray-600">值: {singleValue || '空'}</div>\r
                </div>\r
                <div className="space-y-2">\r
                    <div className="text-sm font-medium">多选 - 可清除</div>\r
                    <FunctionalitySelect datasource={items} size="md" mode="multiple" value={multipleValue} onValueChange={setMultipleValue} clearable placeholder="可清除选择" className="w-[300px]" />\r
                    <div className="text-sm text-gray-600">\r
                        值: {multipleValue.length > 0 ? multipleValue.join(', ') : '空'}\r
                    </div>\r
                </div>\r
            </div>;
  }
}`,...(Je=(He=U.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var Ke,Qe,Ye;$.parameters={...$.parameters,docs:{...(Ke=$.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    return <div className="space-y-6">\r
                <div className="space-y-2">\r
                    <div className="text-sm font-medium">单选 - 非受控(默认值: apple)</div>\r
                    <FunctionalitySelect datasource={items} size="md" mode="single" defaultValue="apple" onValueChange={value => console.log('单选变化:', value)} placeholder="非受控组件" className="w-[300px]" />\r
                </div>\r
                <div className="space-y-2">\r
                    <div className="text-sm font-medium">多选 - 非受控(默认值: apple, banana)</div>\r
                    <FunctionalitySelect datasource={items} size="md" mode="multiple" defaultValue={['apple', 'banana']} onValueChange={value => console.log('多选变化:', value)} placeholder="非受控组件" className="w-[300px]" />\r
                </div>\r
            </div>;
  }
}`,...(Ye=(Qe=$.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var Ze,ea,aa;X.parameters={...X.parameters,docs:{...(Ze=X.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['apple', 'banana', 'orange']);
    const [data, setData] = useState(items);
    const addItem = (label: string) => {
      setData([...data, {
        key: new Date().getTime().toString(),
        label: label
      }]);
    };
    return <div className="space-y-4">\r
                <div className="text-lg font-semibold">多选 + 搜索 + 图标 + 可清除</div>\r
                <FunctionalitySelect datasource={data} size="lg" mode="multiple" value={value} onValueChange={setValue} canSearch clearable frontIcon={<FavoriteIcon />} postIcon={<MagnifierIcon className='size-4' />} placeholder="搜索并选择水果" onClear={() => console.log('清除了!')} editable={true} editCallback={addItem} className="w-[400px]" />\r
            </div>;
  }
}`,...(aa=(ea=X.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};const os=["SingleBasic","SingleBasicCanAdd","SingleWithSearch","SingleWithIcons","MultipleBasic","MultipleWithSearch","MultipleWithIcons","Sizes","Disabled","Clearable","Uncontrolled","FullFeatures"];export{U as Clearable,G as Disabled,X as FullFeatures,B as MultipleBasic,q as MultipleWithIcons,E as MultipleWithSearch,L as SingleBasic,D as SingleBasicCanAdd,O as SingleWithIcons,A as SingleWithSearch,P as Sizes,$ as Uncontrolled,os as __namedExportsOrder,ds as default};
