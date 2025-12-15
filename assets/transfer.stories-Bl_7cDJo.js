import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as T}from"./utils-D-KgF5mV.js";import{r as p,R as K}from"./iframe-DPkNXRqw.js";import{C as ae}from"./checkbox-vLtsGzeJ.js";import{E as ue}from"./empty-CtEqluxS.js";import{S as G,a as $}from"./scroll-area-Dgmq87Rd.js";import{B as R}from"./button-7wqqdEkD.js";import{D as he,a as fe,b as pe,k as ye,c as xe,T as Te}from"./dropdown-menu-CZ8NzJrF.js";import{T as ke}from"./TriangleDownIcon-BxHtfvmJ.js";import{M as be}from"./magnifier-icon-Bhn8U7MK.js";import{I as ve,a as Ce,c as je}from"./input-group-CAYfQ-0y.js";import{T as we}from"./tree-CiS9_m1Z.js";import"./index-CVJC_e1g.js";import"./index-3PNdDA9F.js";import"./index-ZCJ3rLJN.js";import"./index-TAJg0BDn.js";import"./index-CGny4Gu2.js";import"./index-CdverDIJ.js";import"./index-tTCODTNv.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-CGrAONsN.js";import"./index-CNmy0mc9.js";import"./index-BFJ-Qg5v.js";import"./index-BwCODQwj.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-xbPJJJA0.js";import"./index-D7KDVih1.js";import"./index-CZ6tSH_D.js";import"./index-nrtHsWe5.js";import"./Combination-DlUI4tCQ.js";import"./index-CcTl1dMB.js";import"./index-BXyZJ4ef.js";import"./index-Piay1Hl0.js";import"./index-DUrgPtLc.js";import"./index-BpVfPjWU.js";import"./check-DLJQi36D.js";import"./createLucideIcon-BVkOKLvB.js";import"./circle-DafUkavS.js";import"./input-BNOkW-iY.js";import"./textarea-Dqt5OPUb.js";import"./closeIcon-6bXNgUOm.js";import"./react-icons.esm-_2Ujgxc8.js";import"./delete-icon-dnov0-XL.js";const le=t=>e.jsx("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.76517 3.23484C7.91161 3.38129 7.91161 3.61873 7.76516 3.76517L5.2955 6.23472C5.14905 6.38117 5.14905 6.6186 5.29549 6.76505L7.76517 9.23484C7.91161 9.38129 7.91161 9.61873 7.76516 9.76517C7.61871 9.91161 7.38127 9.91161 7.23483 9.76516L4.76515 7.29537C4.32582 6.85602 4.32583 6.14371 4.76518 5.70438L7.23484 3.23483C7.38129 3.08839 7.61873 3.08839 7.76517 3.23484Z"})});le.__docgenInfo={description:"",methods:[],displayName:"AArrowLeft"};const ie=t=>e.jsx("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.23483 3.23484C4.08839 3.38129 4.08839 3.61873 4.23484 3.76517L6.7045 6.23472C6.85095 6.38117 6.85095 6.6186 6.70451 6.76505L4.23483 9.23484C4.08839 9.38129 4.08839 9.61873 4.23484 9.76517C4.38129 9.91161 4.61873 9.91161 4.76517 9.76516L7.23485 7.29537C7.67418 6.85602 7.67417 6.14371 7.23482 5.70438L4.76516 3.23483C4.61871 3.08839 4.38127 3.08839 4.23483 3.23484Z"})});ie.__docgenInfo={description:"",methods:[],displayName:"AArrowRight"};const oe=t=>e.jsx("svg",{width:"7",height:"8",viewBox:"0 0 7 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M1.31208 4.84171C0.698677 4.44821 0.698676 3.55181 1.31208 3.15831L5.21005 0.657763C5.87561 0.230808 6.75 0.708727 6.75 1.49946L6.75 6.50056C6.75 7.2913 5.87561 7.76922 5.21005 7.34226L1.31208 4.84171Z",fill:"#61707D"})});oe.__docgenInfo={description:"",methods:[],displayName:"TriangleLeftIcon"};function A({dataSource:t=[],selectKeys:n=[],targetKeys:l=[],showPagination:a=!1,showSearch:d=!1,className:g,...s}){const o=()=>t.filter(i=>!l.includes(i.key)),k=()=>t.filter(i=>l.includes(i.key)),b=p.useCallback(()=>{const i=t.filter(f=>!l.includes(f.key)).map(f=>f.key);let m=!1;return n.some(f=>i.includes(f))&&(m="indeterminate",i.some(f=>!n.includes(f))||(m=!0)),m},[t,n,l]),D=p.useCallback(()=>{let i=!1;return n.some(m=>l.includes(m))&&(i="indeterminate",l.some(m=>!n.includes(m))||(i=!0)),i},[n,l]),c=(i,m)=>{var f,h;if(m){const y=[...new Set([...n,...i])];(h=s.onSelectChange)==null||h.call(s,y)}else{const y=n.filter(S=>!i.includes(S));(f=s.onSelectChange)==null||f.call(s,y)}},C=p.useCallback(()=>{const i=t.filter(m=>!l.includes(m.key)).map(m=>m.key);return!n.some(m=>i.includes(m))},[n,t,l]),x=p.useCallback(()=>!n.some(i=>l.includes(i)),[n,l]),w=i=>{var m,f;if(i==="right"){const h=t.filter(j=>!l.includes(j.key)).map(j=>j.key),y=n.filter(j=>h.includes(j)),S=[...new Set([...l,...y])];(m=s.onTargetChange)==null||m.call(s,S,i,y)}else{const h=n.filter(S=>l.includes(S)),y=l.filter(S=>!h.includes(S));(f=s.onTargetChange)==null||f.call(s,y,i,h)}};return e.jsxs("div",{className:T("flex flex-row gap-2 h-full w-full",g),...s,children:[e.jsx(E,{dataSource:o(),selectKeys:n,onSelectChange:c,checkedState:b(),showPagination:a,showSearch:d,children:s.children}),e.jsx(Se,{canMoveToLeft:x(),canMoveToRight:C(),onMove:w}),e.jsx(E,{dataSource:k(),selectKeys:n,onSelectChange:c,checkedState:D(),showPagination:a,showSearch:d})]})}function E({dataSource:t,selectKeys:n,checkedState:l,onSelectChange:a,showPagination:d=!1,showSearch:g=!1,pageSize:s=10,children:o,className:k,...b}){const D=r=>{if(g&&c){const u=x.map(v=>v.key);a==null||a(u,r)}else{const u=t.map(v=>v.key);a==null||a(u,r)}},[c,C]=p.useState(void 0),[x,w]=p.useState([]),[i,m]=p.useState(!1),f=p.useCallback((r,u)=>{u=u??!1,C(r),r||w([]);const v=t.filter(N=>N.label.includes(r));if(w(v),u){let N=!1;const O=v.map(I=>I.key);n.some(I=>O.includes(I))&&(N="indeterminate",O.some(I=>!n.includes(I))||(N=!0)),m(N)}},[t,n]),[h,y]=p.useState(1),[S,j]=p.useState([]),[L,Z]=p.useState(0),[M,ce]=p.useState(0);p.useEffect(()=>{if(!d)return;y(1);const r=t.slice(0,s);j(r);const u=Math.ceil(t.length/s);Z(u)},[t,s,d]);const de=()=>{const r=h-1;if(r<1)return;const u=t.slice((r-1)*s,r*s);j(u),y(h-1)},me=()=>{if(h>=L)return;const r=t.slice(h*s,(h+1)*s);j(r),y(h+1)},ge=p.useCallback(r=>{const u=t.slice((r-1)*s,r*s);j(u),y(r)},[t,s]);return p.useEffect(()=>{const r=t.filter(u=>n.includes(u.key)).length;if(ce(r),d){const u=Math.ceil(t.length/s);Z(u);let v=h==0?1:h;v>u&&(v=u),y(v);const N=t.slice((v-1)*s,v*s);j(N)}g&&c&&f(c,!0)},[t,f,h,s,n,d,g,c]),o?e.jsxs("div",{className:T("flex flex-col flex-1 gap-2 h-full","bg-card border border-border","py-2 rounded-md","min-w-[200px]",k),...b,children:[e.jsx("div",{className:T("px-4 py-[5px]","border-b border-border-split"),children:e.jsxs("span",{children:[" ",M>0&&e.jsxs("span",{children:[M,"/"]}),t.length,"项"]})}),e.jsx(G,{variant:"default",vertical:"left",className:"w-full whitespace-nowrap",style:{height:"calc(100% - 52px)"},children:o})]}):e.jsxs("div",{className:T("flex flex-col flex-1 gap-2","bg-card border border-border","py-2 rounded-md","min-w-[200px]",k),...b,children:[(!d||g)&&e.jsxs("div",{className:T("flex flex-row items-center gap-2","px-4 py-[5px]","border-b border-border-split","flex-shrink-0"),children:[e.jsx(ae,{checked:c?i:l,variant:"default",onCheckedChange:D}),e.jsxs("span",{children:[c?x.length:t.length,"项"]})]}),d&&!g&&e.jsx("div",{className:T("flex flex-row items-center gap-2","px-4 py-[5px]","border-b border-border-split","flex-shrink-0"),children:e.jsxs("span",{children:[" ",M>0&&e.jsxs("span",{children:[M,"/"]}),t.length,"项"]})}),g&&e.jsx("div",{className:"px-2",children:e.jsxs(ve,{className:"w-full",size:"md",variant:"primary",clearable:!0,onClear:()=>f(""),children:[e.jsx(Ce,{type:"text",value:c,onChange:r=>f(r.target.value),placeholder:"请输入"}),e.jsx(je,{align:"inline-end",children:e.jsx(be,{})})]})}),e.jsxs("div",{className:T("flex flex-col flex-1 h-full","px-2","min-h-0"),children:[t.length===0&&x.length===0&&e.jsx("div",{className:"flex items-center justify-center h-full",children:e.jsx(ue,{size:"md"})}),(!d||g)&&(c&&x.length>0||!c&&t.length>0)&&e.jsxs(G,{variant:"default",horizontal:"top",vertical:"right",className:"w-full h-full whitespace-nowrap",children:[c?e.jsx("div",{className:"flex flex-col gap-1 mt-1",children:x.map(r=>e.jsx(V,{data:r,checked:n.includes(r.key),onSelectChange:a},r.key))}):e.jsx("div",{className:"flex flex-col gap-1 mt-1",children:t.map(r=>e.jsx(V,{data:r,checked:n.includes(r.key),onSelectChange:a},r.key))}),e.jsx($,{orientation:"horizontal"})]}),!g&&d&&S.length>0&&e.jsxs(G,{variant:"default",horizontal:"top",vertical:"right",className:"w-full h-full whitespace-nowrap",children:[e.jsx("div",{className:"flex flex-col gap-1 mt-1",children:S.map(r=>e.jsx(V,{data:r,checked:n.includes(r.key),onSelectChange:a},r.key))}),e.jsx($,{orientation:"horizontal"})]})]}),!g&&t.length>0&&d&&e.jsx("div",{className:T("flex flex-row items-center justify-end","px-2 py-[5px]"),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{variant:"page",size:"sm-icon",className:"size-6",disabled:h==1,onClick:de,children:e.jsx(oe,{className:"size-2 text-disabled"})}),e.jsxs(he,{variant:"primary",children:[e.jsx(fe,{asChild:!0,children:e.jsx(R,{variant:"page",className:"h-6 px-[6px] bg-third-background rounded-md",children:e.jsxs("div",{className:"inline-flex justify-between items-center gap-4 text-[12px] leading-[20px] text-secondary-information",children:[e.jsxs("span",{children:[h,"/",L]}),e.jsx(ke,{className:"size-2 "})]})})}),e.jsx(pe,{align:"start",children:e.jsx(ye,{children:Array.from({length:L},(r,u)=>u+1).map(r=>e.jsxs(xe,{onSelect:()=>{ge(r)},children:[" ",r," "]},r))})})]}),e.jsx(R,{variant:"page",size:"sm-icon",className:"size-6",disabled:!(h<L),onClick:me,children:e.jsx(Te,{className:"size-2 text-disabled"})})]})})]})}function V({data:t,checked:n,className:l,...a}){const d=g=>{var s;(s=a.onSelectChange)==null||s.call(a,[t.key],g)};return e.jsxs("div",{className:T("flex flex-row items-center justify-start gap-2","px-2 py-[5px] rounded-sm","hover:bg-third-background",l),...a,children:[e.jsx(ae,{checked:n,variant:"default",disabled:t.disabled??!1,onCheckedChange:d}),e.jsx("span",{className:T("text-[13px] leading-[20px]",t.disabled?"text-disabled":"text-text-deep",n&&!t.disabled&&"text-primary"),children:t.label})]})}function Se({canMoveToLeft:t,canMoveToRight:n,className:l,...a}){return e.jsxs("div",{className:T("inline-flex flex-col items-center justify-center gap-2",l),...a,children:[e.jsx(R,{variant:"default",size:"sm-icon",className:"size-6",disabled:n,onClick:()=>a.onMove("right"),children:e.jsx(ie,{className:T(n?"text-disabled":"text-text-deep")})}),e.jsx(R,{variant:"default",size:"sm-icon",className:"size-6",disabled:t,onClick:()=>a.onMove("left"),children:e.jsx(le,{className:T(t?"text-disabled":"text-text-deep")})})]})}A.__docgenInfo={description:"",methods:[],displayName:"Transfer",props:{dataSource:{required:!1,tsType:{name:"Array",elements:[{name:"BaseNode"}],raw:"BaseNode[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},targetKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},showPagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:""},showSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keys"}],return:{name:"void"}}},description:""},onTargetChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextTargetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"nextTargetKeys"},{type:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},name:"direction"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"moveKeys"}],return:{name:"void"}}},description:""}}};E.__docgenInfo={description:"",methods:[],displayName:"TransferPage",props:{dataSource:{required:!0,tsType:{name:"Array",elements:[{name:"BaseNode"}],raw:"BaseNode[]"},description:""},selectKeys:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},checkedState:{required:!0,tsType:{name:"CheckedState"},description:""},showPagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},showSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelectChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(keys: string[], selected: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"keys"},{type:{name:"boolean"},name:"selected"}],return:{name:"void"}}},description:""}}};const Tt={title:"Components/Transfer",tags:["autodocs"],component:A,argTypes:{}},z=Array.from({length:50}).map((t,n)=>({key:n.toString(),label:`content${n+1}`})),q={args:{},render:t=>{const[n,l]=K.useState([]),[a,d]=K.useState([]),g=o=>{console.log(o),l(o)},s=(o,k,b)=>{console.log(o,k,b),d(o)};return e.jsx("div",{style:{width:"450px",height:200},children:e.jsx(A,{...t,selectKeys:n,targetKeys:a,dataSource:z,onSelectChange:g,onTargetChange:s})})}},P={args:{},render:t=>{const[n,l]=K.useState([]),[a,d]=K.useState([]),g=o=>{console.log(o),l(o)},s=(o,k,b)=>{console.log(o,k,b),d(o)};return e.jsx("div",{style:{width:"450px",height:250},children:e.jsx(A,{...t,selectKeys:n,targetKeys:a,dataSource:z,onSelectChange:g,onTargetChange:s,showPagination:!0})})}},B={args:{},render:t=>{const[n,l]=K.useState([]),[a,d]=K.useState([]),g=o=>{console.log(o),l(o)},s=(o,k,b)=>{console.log(o,k,b),d(o)};return e.jsx("div",{style:{width:"450px",height:250},children:e.jsx(A,{...t,selectKeys:n,targetKeys:a,dataSource:z,onSelectChange:g,onTargetChange:s,showSearch:!0,showPagination:!0})})}},F=[{key:"1",label:"这是一个折叠面板1",disabled:!1,children:[{key:"1-1",label:"这是一个子面板1",disabled:!1,children:[{key:"1-1-1",label:"这是一个孙面板1"}]},{key:"1-2",label:"这是一个子折叠面板2",disabled:!1},{key:"1-3",label:"这是一个子折叠面板3",disabled:!1}]},{key:"2",label:"这是一个折叠面板2",disabled:!1,children:[{key:"2-1",label:"这是一个子面板1",disabled:!1},{key:"2-2",label:"这是一个子折叠面板2",disabled:!1},{key:"2-3",label:"这是一个子折叠面板3",disabled:!1}]},{key:"3-1",label:"这是一个折叠面板3",disabled:!1},{key:"3-3",label:"这是一个折叠面板4",disabled:!1}],_={args:{},render:t=>{const[n,l]=K.useState([]),[a,d]=K.useState([]),[g,s]=K.useState([]),o=(c=[],C=[])=>c.map(({children:x,...w})=>({...w,disabled:C.includes(w.key),children:o(x,C)}));p.useEffect(()=>{const c=[],C=(x,w)=>{x.map(i=>{const m={key:i.key,label:i.label,disabled:i.disabled};w.push(m),i.children&&C(i.children,w)})};C(F,c),s(c)},[]);const k=c=>{console.log(c),l(c)},b=(c,C,x)=>{console.log(c,C,x),d(c)},D=()=>e.jsx(we,{treeData:o(F,a),multiple:!0,checkable:!0,checkedKeys:n,onCheck:k});return e.jsx("div",{style:{width:"500px",height:250},children:e.jsx(A,{...t,selectKeys:n,targetKeys:a,dataSource:g,onTargetChange:b,children:D()})})}};var H,J,Q;q.parameters={...q.parameters,docs:{...(H=q.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [selectKeys, setSelectKeys] = React.useState<string[]>([]);
    const [targetKeys, setTargetKeys] = React.useState<string[]>([]);
    const onSelectChange = (keys: string[]) => {
      console.log(keys);
      setSelectKeys(keys);
    };
    const onTargetChange = (nextTargetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => {
      console.log(nextTargetKeys, direction, moveKeys);
      setTargetKeys(nextTargetKeys);
    };
    return <div style={{
      width: '450px',
      height: 200
    }}>\r
                <Transfer {...args} selectKeys={selectKeys} targetKeys={targetKeys} dataSource={mockData} onSelectChange={onSelectChange} onTargetChange={onTargetChange} />\r
            </div>;
  }
}`,...(Q=(J=q.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,W,X;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [selectKeys, setSelectKeys] = React.useState<string[]>([]);
    const [targetKeys, setTargetKeys] = React.useState<string[]>([]);
    const onSelectChange = (keys: string[]) => {
      console.log(keys);
      setSelectKeys(keys);
    };
    const onTargetChange = (nextTargetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => {
      console.log(nextTargetKeys, direction, moveKeys);
      setTargetKeys(nextTargetKeys);
    };
    return <div style={{
      width: '450px',
      height: 250
    }}>\r
                <Transfer {...args} selectKeys={selectKeys} targetKeys={targetKeys} dataSource={mockData} onSelectChange={onSelectChange} onTargetChange={onTargetChange} showPagination={true} />\r
            </div>;
  }
}`,...(X=(W=P.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,ee,te;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [selectKeys, setSelectKeys] = React.useState<string[]>([]);
    const [targetKeys, setTargetKeys] = React.useState<string[]>([]);
    const onSelectChange = (keys: string[]) => {
      console.log(keys);
      setSelectKeys(keys);
    };
    const onTargetChange = (nextTargetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => {
      console.log(nextTargetKeys, direction, moveKeys);
      setTargetKeys(nextTargetKeys);
    };
    return <div style={{
      width: '450px',
      height: 250
    }}>\r
                <Transfer {...args} selectKeys={selectKeys} targetKeys={targetKeys} dataSource={mockData} onSelectChange={onSelectChange} onTargetChange={onTargetChange} showSearch={true} showPagination={true} />\r
            </div>;
  }
}`,...(te=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,se,re;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [selectKeys, setSelectKeys] = React.useState<string[]>([]);
    const [targetKeys, setTargetKeys] = React.useState<string[]>([]);
    const [dataSource, setDataSource] = React.useState<BaseNode[]>([]);
    const generateTree = (treeNodes: TreeSelectableNode[] = [], checkedKeys: string[] = []): TreeSelectableNode[] => treeNodes.map(({
      children,
      ...props
    }) => ({
      ...props,
      disabled: checkedKeys.includes(props.key as string),
      children: generateTree(children, checkedKeys)
    }));
    useEffect(() => {
      const data: BaseNode[] = [];
      const treeToItem = (treedata: TreeSelectableNode[], data: BaseNode[]) => {
        treedata.map(tree => {
          const item: BaseNode = {
            key: tree.key,
            label: tree.label,
            disabled: tree.disabled
          };
          data.push(item);
          if (tree.children) {
            treeToItem(tree.children, data);
          }
        });
      };
      treeToItem(items, data);
      setDataSource(data);
    }, []);
    const onSelectChange = (keys: string[]) => {
      console.log(keys);
      setSelectKeys(keys);
    };
    const onTargetChange = (nextTargetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => {
      console.log(nextTargetKeys, direction, moveKeys);
      setTargetKeys(nextTargetKeys);
    };
    const renderTree = (): ReactNode => {
      return <Tree treeData={generateTree(items, targetKeys)} multiple={true} checkable={true} checkedKeys={selectKeys} onCheck={onSelectChange} />;
    };
    return <div style={{
      width: '500px',
      height: 250
    }}>\r
                <Transfer {...args} selectKeys={selectKeys} targetKeys={targetKeys} dataSource={dataSource} onTargetChange={onTargetChange}>\r
                    {renderTree()}\r
                </Transfer>\r
            </div>;
  }
}`,...(re=(se=_.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const kt=["Primary","PrimaryshowPagination","PrimaryCanSearch","TreeTransfer"];export{q as Primary,B as PrimaryCanSearch,P as PrimaryshowPagination,_ as TreeTransfer,kt as __namedExportsOrder,Tt as default};
