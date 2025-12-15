import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-DPkNXRqw.js";import{c as i}from"./utils-D-KgF5mV.js";import{c as Fe}from"./index-CGrAONsN.js";import{C as L}from"./checkbox-vLtsGzeJ.js";import{T as He}from"./TriangleUpIcon-BE4kyGgp.js";import{T as De}from"./TriangleDownIcon-BxHtfvmJ.js";import{B as v}from"./button-7wqqdEkD.js";import{I as ze}from"./input-BNOkW-iY.js";import{S as Ae}from"./separator-7reEwx-p.js";import{P as Ge,a as Ee,b as qe}from"./popover-BlGqcMqN.js";import"./index-CVJC_e1g.js";import"./index-3PNdDA9F.js";import"./index-ZCJ3rLJN.js";import"./index-TAJg0BDn.js";import"./index-CGny4Gu2.js";import"./index-CdverDIJ.js";import"./index-tTCODTNv.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-BVl5ASR5.js";import"./index-DW48STyt.js";import"./index-D7KDVih1.js";import"./index-BFJ-Qg5v.js";import"./index-CZ6tSH_D.js";import"./index-nrtHsWe5.js";import"./Combination-DlUI4tCQ.js";import"./index-CcTl1dMB.js";import"./index-BXyZJ4ef.js";import"./index-Piay1Hl0.js";import"./index-DUrgPtLc.js";import"./index-CNmy0mc9.js";const Se=s=>e.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...s,children:[e.jsx("path",{d:"M2.78593 9.49023H7.21407V6.91129H2.78593V9.49023Z"}),e.jsx("path",{d:"M10 0.490234H0C0 0.490234 2.29038 5.5062 2.63244 6.06918H7.37028C7.92781 5.15158 9.42133 1.77492 10 0.490234Z"})]});Se.__docgenInfo={description:"",methods:[],displayName:"FilterIcon"};const Be=Fe("",{variants:{variant:{default:""},direction:{start:"[&_[data-slot=table-head]]:flex [&_[data-slot=table-head]]:flex-1  [&_[data-slot=table-head]]:justify-start [&_[data-slot=table-head]]:items-center [&_[data-slot=table-cell]]:flex [&_[data-slot=table-cell]]:flex-1 [&_[data-slot=table-cell]]:justify-start [&_[data-slot=table-cell]]:items-center",center:"[&_[data-slot=table-head]]:flex [&_[data-slot=table-head]]:flex-1  [&_[data-slot=table-head]]:justify-center [&_[data-slot=table-head]]:items-center [&_[data-slot=table-cell]]:flex [&_[data-slot=table-cell]]:flex-1 [&_[data-slot=table-cell]]:justify-center [&_[data-slot=table-cell]]:items-center",end:"[&_[data-slot=table-head]]:flex [&_[data-slot=table-head]]:flex-1  [&_[data-slot=table-head]]:justify-end [&_[data-slot=table-head]]:items-center [&_[data-slot=table-cell]]:flex [&_[data-slot=table-cell]]:flex-1 [&_[data-slot=table-cell]]:justify-end [&_[data-slot=table-cell]]:items-center"}},defaultVariants:{variant:"default"}});function Te({className:s,direction:a,...l}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:e.jsx("table",{"data-slot":"table",className:i("w-full caption-bottom text-sm",s,Be({direction:a})),...l})})}function ke({className:s,...a}){return e.jsx("thead",{"data-slot":"table-header",className:i("[&_tr]:border-b",s),...a})}function ve({className:s,...a}){return e.jsx("tbody",{"data-slot":"table-body",className:i("",s),...a})}function P({className:s,...a}){return e.jsx("tr",{"data-slot":"table-row",className:i("hover:bg-muted/50 data-[state=selected]:bg-white border-b transition-colors flex flex-row gap-px",s),...a})}function V({className:s,...a}){return e.jsx("th",{"data-slot":"table-head",className:i("bg-fill hover:bg-scroll","text-secondary-information h-10 px-2 align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]","first:rounded-tl-1 last:rounded-tr-1 only:rounded-t-1","flex flex-row items-center justify-center gap-2",s),...a})}function R({className:s,...a}){return e.jsx("td",{"data-slot":"table-cell",className:i("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",s),...a})}function je({className:s,...a}){return e.jsx("caption",{"data-slot":"table-caption",className:i("text-muted-foreground mt-4 text-sm",s),...a})}function m({caption:s,dataSource:a,columns:l,showSelected:d=!1,selectdType:c="checkbox",selectedKeys:u=[],onSelectedChange:j,...we}){const[M,D]=o.useState(a),[x,Ce]=o.useState({}),O=(t,n)=>{if(!d)return;let r=[];c==="checkbox"?(n&&(r=[...u,t]),n||(r=u.filter(f=>f!==t))):r=[t],j&&j(r)},_e=t=>{let n=[];t?n=b.map(r=>r.key):n=[],j&&j(n)},[Ne,k]=o.useState(!1),[z,Z]=o.useState(),[A,U]=o.useState(),$=(t,n)=>{if(t===z&&n===A){D(a),Z(void 0),U(void 0);return}Z(t),U(n);const r=l.find(p=>p.key===t);if(!r)return;const f=[...a].sort((p,J)=>{let g=0;if(r.sorter)g=r.sorter(p,J);else{const y=p[r.dataIndex],S=J[r.dataIndex];y==null||S==null?g=y==null?-1:1:typeof y=="number"&&typeof S=="number"?g=y-S:y instanceof Date&&S instanceof Date?g=y.getTime()-S.getTime():g=String(y).localeCompare(String(S),"zh-CN",{numeric:!0})}return n==="ascend"?g:-g});D(f)},[Ie,G]=o.useState(),Ke=t=>{Ie===t?(G(void 0),q(void 0)):G(t)},[E,q]=o.useState(),B=(t,n)=>{const r={...x};n&&n.trim()?r[t]=n.trim():delete r[t],Ce(r),G(void 0),q(void 0)},b=o.useMemo(()=>{let t=[...M];return Object.entries(x).forEach(([n,r])=>{const f=l.find(p=>p.key===n);!f||!f.onFilter||(t=t.filter(p=>f.onFilter(r,p)))}),t},[M,x,l]);return o.useEffect(()=>{if(b.length===0){k(!1);return}if(u.length===0){k(!1);return}const t=b.map(r=>r.key),n=u.filter(r=>t.includes(r));if(n.length===b.length){k(!0);return}if(n.length>0){k("indeterminate");return}k(!1)},[b,u]),o.useEffect(()=>{D(a)},[a]),e.jsxs(Te,{...we,children:[e.jsx(je,{children:s}),e.jsx(ke,{children:e.jsxs(P,{children:[d&&e.jsx(V,{children:c==="checkbox"?e.jsx(L,{variant:"default",checked:Ne,onCheckedChange:_e}):e.jsx("div",{})}),l.map(t=>{var n;return e.jsxs(V,{children:[e.jsx("span",{children:t.title}),t.sorter&&(!t.sortDirections||(((n=t.sortDirections)==null?void 0:n.length)??0)>0)&&e.jsxs("div",{className:"inline-flex flex-col gap-[2px]",children:[(!t.sortDirections||t.sortDirections.includes("ascend"))&&e.jsx(v,{variant:"transparent",size:"link",onClick:()=>$(t.key,"ascend"),children:e.jsx(He,{className:i("size-1.5",t.key===z&&A==="ascend"?"text-primary":"text-secondary-information")})}),(!t.sortDirections||t.sortDirections.includes("descend"))&&e.jsx(v,{variant:"transparent",size:"link",onClick:()=>$(t.key,"descend"),children:e.jsx(De,{width:6,height:5,className:i("size-1.5",t.key===z&&A==="descend"?"text-primary":"text-secondary-information")})})]}),t.onFilter&&e.jsxs(Ge,{variant:"primary",children:[e.jsx(Ee,{asChild:!0,children:e.jsx(v,{variant:"transparent",size:"link",onClick:()=>{Ke(t.key)},children:e.jsx(Se,{className:i("size-2.5",x[t.key]?"text-primary":"text-disabled")})})}),e.jsx(qe,{side:"right",className:"w-full",children:e.jsxs("div",{className:"flex flex-1 flex-col gap-2 ",children:[e.jsx(ze,{variant:"primary",format:"sm",placeholder:"请输入",value:E||x[t.key]||"",onChange:r=>{q(r.target.value)},onKeyDown:r=>{r.key==="Enter"&&B(t.key,E||"")}}),e.jsx(Ae,{orientation:"horizontal"}),e.jsx("div",{className:"flex justify-end gap-1 p-0.5",children:e.jsx(v,{variant:"primary",size:"sm",onClick:()=>{B(t.key,E||"")},children:"确认"})}),x[t.key]&&e.jsx(v,{variant:"ghost",size:"sm",onClick:()=>{B(t.key,"")},children:"清除过滤"})]})})]})]},t.key)})]})}),e.jsx(ve,{children:b.map((t,n)=>e.jsxs(P,{children:[d&&e.jsx(R,{children:c==="checkbox"?e.jsx(L,{variant:"default",checked:u.includes(t.key),onCheckedChange:r=>O(t.key,r)}):e.jsx("div",{className:i("size-4 rounded-full border border-border-hover hover:border-primary cursor-pointer flex items-center justify-center",u.includes(t.key)&&"border-primary"),onClick:()=>O(t.key,!0),children:u.includes(t.key)&&e.jsx("div",{className:"size-2 rounded-full bg-primary"})})}),l.map(r=>e.jsx(R,{children:t[r.dataIndex]},r.key))]},t.key||n))})]})}m.__docgenInfo={description:"",methods:[],displayName:"TableGroup",props:{caption:{required:!0,tsType:{name:"string"},description:""},dataSource:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:""},showSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectdType:{required:!1,tsType:{name:"union",raw:"'checkbox' | 'radio'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio'"}]},description:"",defaultValue:{value:"'checkbox'",computed:!1}},selectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onSelectedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedKeys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedKeys"}],return:{name:"void"}}},description:""},showPage:{required:!1,tsType:{name:"boolean"},description:""}}};Te.__docgenInfo={description:"",methods:[],displayName:"Table"};ke.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};ve.__docgenInfo={description:"",methods:[],displayName:"TableBody"};V.__docgenInfo={description:"",methods:[],displayName:"TableHead"};P.__docgenInfo={description:"",methods:[],displayName:"TableRow"};R.__docgenInfo={description:"",methods:[],displayName:"TableCell"};je.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const Tt={title:"Components/Table",tags:["autodocs"],component:m,argTypes:{direction:{control:"select",options:["start","center","end"]}}},h=[{key:"1",name:"普京",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"玉米晓夫",age:42,address:"西湖区湖底公园1号"},{key:"3",name:"安德罗波夫",age:42,address:"西湖区湖底公园1号"},{key:"4",name:"褚潇",age:43,address:"湖南省邵阳市野猪窝"},{key:"5",name:"李知潭",age:22,address:"湖南省邵阳市仙女洞"},{key:"6",name:"陈思伊",age:28,address:"湖南省邵阳市陈家岭"},{key:"7",name:"谢飞机",age:29,address:e.jsx("div",{children:"东北谢家屯"})}],T=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}],w={args:{direction:"start",caption:"这是一个表格",dataSource:h,columns:T,showSelected:!1,selectdType:"checkbox",selectedKeys:[]},render:s=>e.jsx("div",{className:"w-250",children:e.jsx(m,{...s})})},C={args:{direction:"start",caption:"这是一个表格",dataSource:h,columns:T,showSelected:!1,selectdType:"checkbox",selectedKeys:[]},render:s=>e.jsx("div",{className:"w-250",children:e.jsx(m,{...s})})},_={args:{direction:"center",caption:"这是一个表格",dataSource:h,columns:T,showSelected:!1,selectdType:"checkbox",selectedKeys:[]},render:s=>e.jsx("div",{className:"w-250",children:e.jsx(m,{...s})})},N={args:{direction:"end",caption:"这是一个表格",dataSource:h,columns:T,showSelected:!1,selectdType:"checkbox",selectedKeys:[]},render:s=>e.jsx("div",{className:"w-250",children:e.jsx(m,{...s})})},I={args:{caption:"这是一个表格",direction:"start",dataSource:h,columns:T,showSelected:!0,selectdType:"checkbox",selectedKeys:[]},render:s=>{const[a,l]=o.useState(s.selectedKeys),d=c=>{l(c)};return e.jsx("div",{className:"w-250",children:e.jsx(m,{...s,selectedKeys:a,onSelectedChange:d})})}},K={args:{caption:"这是一个表格",direction:"start",dataSource:h,columns:T,showSelected:!0,selectdType:"radio",selectedKeys:[]},render:s=>{const[a,l]=o.useState(s.selectedKeys),d=c=>{l(c)};return e.jsx("div",{className:"w-250",children:e.jsx(m,{...s,selectedKeys:a,onSelectedChange:d})})}},Pe=[{title:"姓名",dataIndex:"name",key:"name",sorter:(s,a)=>s.name.length-a.name.length,sortDirections:["descend"]},{title:"年龄",dataIndex:"age",key:"age",sorter:(s,a)=>s.age-a.age},{title:"住址",dataIndex:"address",key:"address"}],F={args:{caption:"这是一个排序表格",direction:"start",dataSource:h,columns:Pe,showSelected:!0,selectdType:"radio",selectedKeys:[]},render:s=>{const[a,l]=o.useState(s.selectedKeys),d=c=>{l(c)};return e.jsx("div",{className:"w-250",children:e.jsx(m,{...s,selectedKeys:a,onSelectedChange:d})})}},Ve=[{title:"姓名",dataIndex:"name",key:"name",sorter:(s,a)=>s.name.length-a.name.length,sortDirections:["descend"]},{title:"年龄",dataIndex:"age",key:"age",sorter:(s,a)=>s.age-a.age,onFilter:(s,a)=>{try{return a.age>parseFloat(s)}catch(l){return console.log("e",l),!1}}},{title:"住址",dataIndex:"address",key:"address",onFilter:(s,a)=>{try{return!a||!a.address?!1:a.address.indexOf(s)===0}catch(l){return console.log("e",l),!1}}}],H={args:{caption:"这是一个筛选表格",direction:"start",dataSource:h,columns:Ve,showSelected:!0,selectdType:"radio",selectedKeys:[]},render:s=>{const[a,l]=o.useState(s.selectedKeys),d=c=>{l(c)};return e.jsx("div",{className:"w-full",children:e.jsx(m,{...s,selectedKeys:a,onSelectedChange:d})})}};var Q,W,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    direction: 'start',
    caption: '这是一个表格',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: false,
    selectdType: 'checkbox',
    selectedKeys: []
  },
  render: args => {
    return <div className='w-250'><TableGroup {...args} /></div>;
  }
}`,...(X=(W=w.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,ee,te;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    direction: 'start',
    caption: '这是一个表格',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: false,
    selectdType: 'checkbox',
    selectedKeys: []
  },
  render: args => {
    return <div className='w-250'><TableGroup {...args} /></div>;
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,re;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    direction: 'center',
    caption: '这是一个表格',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: false,
    selectdType: 'checkbox',
    selectedKeys: []
  },
  render: args => {
    return <div className='w-250'><TableGroup {...args} /></div>;
  }
}`,...(re=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,le,oe;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    direction: 'end',
    caption: '这是一个表格',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: false,
    selectdType: 'checkbox',
    selectedKeys: []
  },
  render: args => {
    return <div className='w-250'><TableGroup {...args} /></div>;
  }
}`,...(oe=(le=N.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var de,ce,ie;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    caption: '这是一个表格',
    direction: 'start',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: true,
    selectdType: 'checkbox',
    selectedKeys: []
  },
  render: args => {
    const [selected, setSelected] = useState<string[]>(args.selectedKeys);
    const onSelectedChange = (keys: string[]) => {
      setSelected(keys);
    };
    return <div className='w-250'>\r
      <TableGroup {...args} selectedKeys={selected} onSelectedChange={onSelectedChange} />\r
    </div>;
  }
}`,...(ie=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var me,ue,pe;K.parameters={...K.parameters,docs:{...(me=K.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    caption: '这是一个表格',
    direction: 'start',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: true,
    selectdType: 'radio',
    selectedKeys: []
  },
  render: args => {
    const [selected, setSelected] = useState<string[]>(args.selectedKeys);
    const onSelectedChange = (keys: string[]) => {
      setSelected(keys);
    };
    return <div className='w-250'>\r
      <TableGroup {...args} selectedKeys={selected} onSelectedChange={onSelectedChange} />\r
    </div>;
  }
}`,...(pe=(ue=K.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var he,fe,ge;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    caption: '这是一个排序表格',
    direction: 'start',
    dataSource: dataSource,
    columns: columns1 as TableColumn<TableItem>[],
    showSelected: true,
    selectdType: 'radio',
    selectedKeys: []
  },
  render: args => {
    const [selected, setSelected] = useState<string[]>(args.selectedKeys);
    const onSelectedChange = (keys: string[]) => {
      setSelected(keys);
    };
    return <div className='w-250'>\r
      <TableGroup {...args} selectedKeys={selected} onSelectedChange={onSelectedChange} />\r
    </div>;
  }
}`,...(ge=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ye,xe,be;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    caption: '这是一个筛选表格',
    direction: 'start',
    dataSource: dataSource,
    columns: columns2 as TableColumn<TableItem>[],
    showSelected: true,
    selectdType: 'radio',
    selectedKeys: []
  },
  render: args => {
    const [selected, setSelected] = useState<string[]>(args.selectedKeys);
    const onSelectedChange = (keys: string[]) => {
      setSelected(keys);
    };
    return <div className='w-full'>\r
      <TableGroup {...args} selectedKeys={selected} onSelectedChange={onSelectedChange} />\r
    </div>;
  }
}`,...(be=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};const kt=["Table","StartTable","CenterTable","EndTable","HasCheckedBox","HasRadio","HasSort","HasFilter"];export{_ as CenterTable,N as EndTable,I as HasCheckedBox,H as HasFilter,K as HasRadio,F as HasSort,C as StartTable,w as Table,kt as __namedExportsOrder,Tt as default};
