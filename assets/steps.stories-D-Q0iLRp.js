import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c}from"./utils-D-KgF5mV.js";import{c as X}from"./index-CGrAONsN.js";import{r as d}from"./iframe-DPkNXRqw.js";import{B as l}from"./button-7wqqdEkD.js";import{c as K}from"./createLucideIcon-BVkOKLvB.js";import{D as Y}from"./dog-CmOcVbbJ.js";import"./index-CVJC_e1g.js";/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]],P=K("cat",ee);/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],re=K("house",te),b=n=>e.jsx("svg",{...n,viewBox:"0 0 28 32",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 0.57735C13.6188 0.220085 14.3812 0.220085 15 0.57735L26.8564 7.42265C27.4752 7.77992 27.8564 8.44017 27.8564 9.1547V22.8453C27.8564 23.5598 27.4752 24.2201 26.8564 24.5774L15 31.4226C14.3812 31.7799 13.6188 31.7799 13 31.4226L1.14359 24.5774C0.524791 24.2201 0.143594 23.5598 0.143594 22.8453V9.1547C0.143594 8.44017 0.524792 7.77992 1.14359 7.42265L13 0.57735Z"})});b.__docgenInfo={description:"",methods:[],displayName:"HexagonIcon"};const Q=n=>e.jsx("svg",{...n,viewBox:"0 0 32 32",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M28.25 16C28.25 22.7655 22.7655 28.25 16 28.25C9.23451 28.25 3.75 22.7655 3.75 16C3.75 9.23451 9.23451 3.75 16 3.75C22.7655 3.75 28.25 9.23451 28.25 16ZM22.1797 12.9064L20.9423 11.669L14.7552 17.856L11.6879 14.7887L10.4504 16.0261L14.7551 20.3311L22.1797 12.9064Z",fill:"#00FFA8"})});Q.__docgenInfo={description:"",methods:[],displayName:"SuccessIconStep"};const r={Wait:"wait",Process:"process",Finish:"finish",Error:"error"},se=X("flex",{variants:{direction:{horizontal:c("flex-row","w-full"),vertical:c("flex-col","h-full")}},defaultVariants:{direction:"horizontal"}});function m({className:n,progressDot:t=!1,direction:s="horizontal",current:o=0,status:i=r.Process,...a}){var L;const p=h=>h<o?r.Finish:h===o?i:r.Wait;return e.jsx("div",{"data-slot":"steps",className:c(se({direction:s}),(!t||s==="vertical")&&"gap-2",n),...a,children:(L=a.items)==null?void 0:L.map((h,w)=>{var S;return e.jsx(U,{item:h,progressDot:t,status:p(w),direction:s,index:w,totalCount:(S=a.items)==null?void 0:S.length},w)})})}function U({direction:n="horizontal",item:t,index:s,totalCount:o,...i}){const a=s===(o||0)-1;return n==="horizontal"?i.progressDot?e.jsx(ne,{item:t,status:i.status,index:s,isLast:a}):e.jsx(ie,{item:t,status:i.status,index:s,isLast:a}):e.jsx(ae,{item:t,status:i.status,index:s,isLast:a,progressDot:i.progressDot})}function ne({className:n,item:t,...s}){const o=d.useRef(null),[i,a]=d.useState(0);return d.useLayoutEffect(()=>{if(o.current){const p=o.current.offsetWidth;a(p/2)}},[t.title,t.description]),e.jsxs("div",{"data-slot":"step-dot",className:c("relative","flex flex-col items-start justify-center",!s.isLast&&"flex-1",n),...s,children:[!s.isLast&&e.jsx("div",{className:c("absolute top-[7px] w-full h-[1px] z-0",s.status===r.Finish&&"bg-success",s.status===r.Process&&"bg-primary",s.status===r.Wait&&"bg-border",s.status===r.Error&&"bg-danger"),style:{left:`${i}px`}}),e.jsxs("div",{ref:o,className:c("flex flex-col items-center justify-center"),children:[e.jsx("div",{className:c("size-4 bg-background z-10","flex flex-col items-center justify-center"),children:e.jsx("div",{className:c("relative z-10","h-2 w-2","rounded-full","border-[2px]",s.status===r.Finish&&"border-success",s.status===r.Process&&"bg-primary border-primary",s.status===r.Wait&&"border-border",s.status===r.Error&&"border-danger")})}),e.jsx("div",{className:c("text-[15px]/5.5","line-clamp-1",s.status===r.Finish&&"text-text-deep",s.status===r.Process&&"text-primary",s.status===r.Wait&&"text-secondary-information",s.status===r.Error&&"text-danger"),children:t.title}),e.jsx("div",{className:c("text-[12px]/5 text-secondary-information","line-clamp-1"),children:t.description})]})]})}function ie({className:n,item:t,index:s,isLast:o,...i}){const a=s+1;return e.jsxs("div",{"data-slot":"step-icon",className:c("flex flex-col",!o&&"flex-1"),children:[e.jsxs("div",{className:c("flex flex-row items-center","gap-4","h-min-10",n),...i,children:[t.icon?e.jsx("div",{className:c("size-8 flex items-center justify-center",i.status===r.Finish&&"text-success",i.status===r.Process&&"text-primary",i.status===r.Wait&&"text-secondary",i.status===r.Error&&"text-danger"),children:t.icon}):e.jsxs(e.Fragment,{children:[i.status===r.Finish&&e.jsx(Q,{className:"size-8",fill:"text-"}),i.status===r.Process&&e.jsxs("div",{className:"size-8 relative",children:[e.jsx(b,{className:"size-8 fill-primary"}),e.jsx("div",{className:c("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","text-text text-[13px] font-normal leading-[20px]"),children:a})]}),i.status===r.Wait&&e.jsx("div",{className:c("size-8","rounded-full","bg-primary-light","border border-primary","relative"),children:e.jsx("div",{className:c("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","text-primary text-[13px] font-normal leading-[20px]"),children:a})}),i.status===r.Error&&e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M16 28.25C22.7655 28.25 28.25 22.7655 28.25 16C28.25 9.23451 22.7655 3.75 16 3.75C9.23451 3.75 3.75 9.23451 3.75 16C3.75 22.7655 9.23451 28.25 16 28.25ZM21.3305 12.0022L17.3326 16.0001L21.3305 19.9979L19.9979 21.3306L16 17.3327L12.0021 21.3306L10.6695 19.9979L14.6674 16.0001L10.6695 12.0022L12.0021 10.6696L16 14.6675L19.9979 10.6696L21.3305 12.0022Z",fill:"#D02600"})})]}),e.jsx("div",{className:c("text-[15px] font-normal leading-[22px]","line-clamp-1",i.status===r.Finish&&"text-text-deep",i.status===r.Process&&"text-primary",i.status===r.Wait&&"text-secondary-information",i.status===r.Error&&"text-danger"),children:t.title}),!o&&e.jsx("div",{className:c("z-0","flex-1","h-[2px]",i.status===r.Finish&&"bg-success",i.status===r.Process&&"bg-primary",i.status===r.Wait&&"bg-border",i.status===r.Error&&"bg-danger"),style:{minWidth:"80px"}})]}),e.jsx("div",{className:c("w-full","text-secondary-information text-[12px] font-normal leading-[20px] line-clamp-1"),style:{paddingLeft:"48px"},children:t.description})]})}function ae({className:n,item:t,index:s,isLast:o,progressDot:i=!1,...a}){const p=s+1;return e.jsxs("div",{"data-slot":"step-dot",className:c("relative","flex flex-row flex-1 gap-2",n),children:[e.jsxs("div",{className:c("flex flex-col items-center gap-1"),children:[i?e.jsx("div",{className:c("relative z-10","h-2 w-2","rounded-full","border-[2px]",a.status===r.Finish&&"border-success",a.status===r.Process&&"bg-primary border-primary",a.status===r.Wait&&"border-border",a.status===r.Error&&"border-danger")}):t.icon?e.jsx("div",{className:c("size-8 flex items-center justify-center",a.status===r.Finish&&"text-success",a.status===r.Process&&"text-primary",a.status===r.Wait&&"text-secondary",a.status===r.Error&&"text-danger"),children:t.icon}):e.jsxs("div",{className:c("size-8"),children:[a.status===r.Finish&&e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M28.25 16C28.25 22.7655 22.7655 28.25 16 28.25C9.23451 28.25 3.75 22.7655 3.75 16C3.75 9.23451 9.23451 3.75 16 3.75C22.7655 3.75 28.25 9.23451 28.25 16ZM22.1797 12.9064L20.9423 11.669L14.7552 17.856L11.6879 14.7887L10.4504 16.0261L14.7551 20.3311L22.1797 12.9064Z",fill:"#00FFA8"})}),a.status===r.Process&&e.jsxs("div",{className:"size-8 relative",children:[e.jsx(b,{className:"size-8 fill-primary"}),e.jsx("div",{className:c("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","text-text text-[13px] font-normal leading-[20px]"),children:p})]}),a.status===r.Wait&&e.jsx("div",{className:c("size-8","rounded-full","bg-primary-light","border border-primary","relative"),children:e.jsx("div",{className:c("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","text-primary text-[13px] font-normal leading-[20px]"),children:p})}),a.status===r.Error&&e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M16 28.25C22.7655 28.25 28.25 22.7655 28.25 16C28.25 9.23451 22.7655 3.75 16 3.75C9.23451 3.75 3.75 9.23451 3.75 16C3.75 22.7655 9.23451 28.25 16 28.25ZM21.3305 12.0022L17.3326 16.0001L21.3305 19.9979L19.9979 21.3306L16 17.3327L12.0021 21.3306L10.6695 19.9979L14.6674 16.0001L10.6695 12.0022L12.0021 10.6696L16 14.6675L19.9979 10.6696L21.3305 12.0022Z",fill:"#D02600"})})]}),!o&&e.jsx("div",{className:c("flex","h-full w-[2px]",a.status===r.Finish&&"bg-success",a.status===r.Process&&"bg-primary",a.status===r.Wait&&"bg-border",a.status===r.Error&&"bg-danger")})]}),e.jsxs("div",{className:c("flex flex-col gap-2","font-normal not-italic"),children:[e.jsx("div",{className:c("text-[15px]/5.5 ",a.status===r.Finish&&"text-text-deep",a.status===r.Process&&"text-primary",a.status===r.Wait&&"text-secondary-information",a.status===r.Error&&"text-danger"),children:t.title}),e.jsx("div",{className:c("flex flex-1","text-[12px]/5"),children:t.description})]})]})}m.__docgenInfo={description:"",methods:[],displayName:"Steps",props:{items:{required:!1,tsType:{name:"union",raw:"StepItem[] | undefined",elements:[{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},{name:"undefined"}]},description:""},current:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:"",defaultValue:{value:"0",computed:!1}},progressDot:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"Status"},description:"",defaultValue:{value:"'process'",computed:!1}},direction:{defaultValue:{value:"'horizontal'",computed:!1},required:!1}}};U.__docgenInfo={description:"",methods:[],displayName:"Step",props:{item:{required:!0,tsType:{name:"StepItem"},description:""},progressDot:{required:!0,tsType:{name:"boolean"},description:""},status:{required:!0,tsType:{name:"Status"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical' | null",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"},{name:"null"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},index:{required:!0,tsType:{name:"number"},description:""},totalCount:{required:!1,tsType:{name:"number"},description:""}}};const he={title:"Components/Steps",tags:["autodocs"],component:m,argTypes:{}},x=[{title:"Finished",description:"This is a description."},{title:"In Progress",description:"This is a description."},{title:"Waiting",description:"This is a description."}],u=[{title:"Finished",description:"This is a description.",icon:e.jsx(re,{})},{title:"In Progress",description:"This is a description.",icon:e.jsx(Y,{})},{title:"Waiting",description:"This is a description.",icon:e.jsx(P,{})},{title:"Waiting",description:"This is a description.",icon:e.jsx(P,{})},{title:"Waiting",description:"This is a description.",icon:e.jsx(P,{})}],g={args:{},render:()=>e.jsx(m,{items:x,current:1,status:"error"})},v={args:{},render:()=>{const[n,t]=d.useState(0),s=()=>{t(n+1)},o=()=>{t(n-1)};return e.jsxs("div",{children:[e.jsx(m,{items:x,current:n}),n<x.length-1&&e.jsx(l,{variant:"primary",onClick:()=>s(),children:"Next"}),n===x.length-1&&e.jsx(l,{variant:"primary",onClick:()=>alert("Processing complete!"),children:"Done"}),n>0&&e.jsx(l,{style:{margin:"0 8px"},onClick:()=>o(),children:"Previous"})]})}},f={args:{},render:()=>{const[n,t]=d.useState(0),s=()=>{t(n+1)},o=()=>{t(n-1)};return e.jsxs("div",{children:[e.jsx(m,{items:u,current:n}),n<u.length-1&&e.jsx(l,{variant:"primary",onClick:()=>s(),children:"Next"}),n===u.length-1&&e.jsx(l,{variant:"primary",onClick:()=>alert("Processing complete!"),children:"Done"}),n>0&&e.jsx(l,{style:{margin:"0 8px"},onClick:()=>o(),children:"Previous"})]})}},y={args:{},render:()=>{const[n,t]=d.useState(0),s=()=>{t(n+1)},o=()=>{t(n-1)};return e.jsxs("div",{children:[e.jsx(m,{items:u,current:n,progressDot:!0}),n<u.length&&e.jsx(l,{variant:"primary",onClick:()=>s(),children:"Next"}),n===u.length&&e.jsx(l,{variant:"primary",onClick:()=>alert("Processing complete!"),children:"Done"}),n>0&&e.jsx(l,{style:{margin:"0 8px"},onClick:()=>o(),children:"Previous"})]})}},j={args:{direction:"vertical"},render:n=>{const[t,s]=d.useState(0),o=()=>{s(t+1)},i=()=>{s(t-1)};return e.jsxs("div",{className:" flex flex-row gap-4 h-[550px]",children:[e.jsx("div",{children:e.jsx(m,{items:x,current:t,...n})}),t<x.length&&e.jsx(l,{variant:"primary",onClick:()=>o(),children:"Next"}),t===x.length&&e.jsx(l,{variant:"primary",onClick:()=>alert("Processing complete!"),children:"Done"}),t>0&&e.jsx(l,{style:{margin:"0 8px"},onClick:()=>i(),children:"Previous"})]})}},C={args:{direction:"vertical"},render:n=>{const[t,s]=d.useState(0),o=()=>{s(t+1)},i=()=>{s(t-1)};return e.jsxs("div",{className:" flex flex-row gap-4 h-[550px]",children:[e.jsx("div",{children:e.jsx(m,{items:u,current:t,...n})}),t<u.length&&e.jsx(l,{variant:"primary",onClick:()=>o(),children:"Next"}),t===u.length&&e.jsx(l,{variant:"primary",onClick:()=>alert("Processing complete!"),children:"Done"}),t>0&&e.jsx(l,{style:{margin:"0 8px"},onClick:()=>i(),children:"Previous"})]})}},N={args:{direction:"vertical"},render:n=>{const[t,s]=d.useState(0),o=()=>{s(t+1)},i=()=>{s(t-1)};return e.jsxs("div",{className:" flex flex-row gap-4 h-[550px]",children:[e.jsx("div",{children:e.jsx(m,{items:u,current:t,progressDot:!0,...n})}),t<u.length&&e.jsx(l,{variant:"primary",onClick:()=>o(),children:"Next"}),t===u.length&&e.jsx(l,{variant:"primary",onClick:()=>alert("Processing complete!"),children:"Done"}),t>0&&e.jsx(l,{style:{margin:"0 8px"},onClick:()=>i(),children:"Previous"})]})}};var k,B,W;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <Steps items={items} current={1} status='error' />;
  }
}`,...(W=(B=g.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var I,z,D;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    return <div>\r
                <Steps items={items} current={current} />\r
                {current < items.length - 1 && <Button variant="primary" onClick={() => next()}>\r
                        Next\r
                    </Button>}\r
                {current === items.length - 1 && <Button variant="primary" onClick={() => alert('Processing complete!')}>\r
                        Done\r
                    </Button>}\r
                {current > 0 && <Button style={{
        margin: '0 8px'
      }} onClick={() => prev()}>\r
                        Previous\r
                    </Button>}\r
            </div>;
  }
}`,...(D=(z=v.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,E,T;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    return <div>\r
                <Steps items={itemsWithIcon} current={current} />\r
                {current < itemsWithIcon.length - 1 && <Button variant="primary" onClick={() => next()}>\r
                        Next\r
                    </Button>}\r
                {current === itemsWithIcon.length - 1 && <Button variant="primary" onClick={() => alert('Processing complete!')}>\r
                        Done\r
                    </Button>}\r
                {current > 0 && <Button style={{
        margin: '0 8px'
      }} onClick={() => prev()}>\r
                        Previous\r
                    </Button>}\r
            </div>;
  }
}`,...(T=(E=f.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var V,M,_;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    return <div>\r
                <Steps items={itemsWithIcon} current={current} progressDot={true} />\r
                {current < itemsWithIcon.length && <Button variant="primary" onClick={() => next()}>\r
                        Next\r
                    </Button>}\r
                {current === itemsWithIcon.length && <Button variant="primary" onClick={() => alert('Processing complete!')}>\r
                        Done\r
                    </Button>}\r
                {current > 0 && <Button style={{
        margin: '0 8px'
      }} onClick={() => prev()}>\r
                        Previous\r
                    </Button>}\r
            </div>;
  }
}`,...(_=(M=y.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var q,Z,H;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    direction: 'vertical'
  },
  render: args => {
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    return <div className=" flex flex-row gap-4 h-[550px]">\r
                <div>\r
                    <Steps items={items} current={current} {...args} />\r
                </div>\r
                {current < items.length && <Button variant="primary" onClick={() => next()}>\r
                        Next\r
                    </Button>}\r
                {current === items.length && <Button variant="primary" onClick={() => alert('Processing complete!')}>\r
                        Done\r
                    </Button>}\r
                {current > 0 && <Button style={{
        margin: '0 8px'
      }} onClick={() => prev()}>\r
                        Previous\r
                    </Button>}\r
            </div>;
  }
}`,...(H=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var A,O,R;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    direction: 'vertical'
  },
  render: args => {
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    return <div className=" flex flex-row gap-4 h-[550px]">\r
                <div>\r
                    <Steps items={itemsWithIcon} current={current} {...args} />\r
                </div>\r
                {current < itemsWithIcon.length && <Button variant="primary" onClick={() => next()}>\r
                        Next\r
                    </Button>}\r
                {current === itemsWithIcon.length && <Button variant="primary" onClick={() => alert('Processing complete!')}>\r
                        Done\r
                    </Button>}\r
                {current > 0 && <Button style={{
        margin: '0 8px'
      }} onClick={() => prev()}>\r
                        Previous\r
                    </Button>}\r
            </div>;
  }
}`,...(R=(O=C.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var $,G,J;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    direction: 'vertical'
  },
  render: args => {
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    return <div className=" flex flex-row gap-4 h-[550px]">\r
                <div>\r
                    <Steps items={itemsWithIcon} current={current} progressDot={true} {...args} />\r
                </div>\r
                {current < itemsWithIcon.length && <Button variant="primary" onClick={() => next()}>\r
                        Next\r
                    </Button>}\r
                {current === itemsWithIcon.length && <Button variant="primary" onClick={() => alert('Processing complete!')}>\r
                        Done\r
                    </Button>}\r
                {current > 0 && <Button style={{
        margin: '0 8px'
      }} onClick={() => prev()}>\r
                        Previous\r
                    </Button>}\r
            </div>;
  }
}`,...(J=(G=N.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ge=["HasError","Primary","PrimaryWithIcon","Dot","PrimaryVertical","PrimaryVerticalIcon","PrimaryVerticalDot"];export{y as Dot,g as HasError,v as Primary,j as PrimaryVertical,N as PrimaryVerticalDot,C as PrimaryVerticalIcon,f as PrimaryWithIcon,ge as __namedExportsOrder,he as default};
