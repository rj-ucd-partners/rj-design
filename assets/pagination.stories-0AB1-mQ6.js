import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./iframe-DPkNXRqw.js";import{b as Ne,a as Se,T as v}from"./react-icons.esm-_2Ujgxc8.js";import{c as p}from"./utils-D-KgF5mV.js";import{b as ke,B as I}from"./button-7wqqdEkD.js";import{E as ye}from"./ellipsis-hvXKtXAV.js";import{D as N,a as S,b as k,k as y,c as D}from"./dropdown-menu-CZ8NzJrF.js";import{I as M}from"./input-BNOkW-iY.js";import"./index-CVJC_e1g.js";import"./index-CGrAONsN.js";import"./createLucideIcon-BVkOKLvB.js";import"./index-DW48STyt.js";import"./index-3PNdDA9F.js";import"./index-TAJg0BDn.js";import"./index-CGny4Gu2.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-xbPJJJA0.js";import"./index-BwCODQwj.js";import"./index-D7KDVih1.js";import"./index-BFJ-Qg5v.js";import"./index-CZ6tSH_D.js";import"./index-nrtHsWe5.js";import"./Combination-DlUI4tCQ.js";import"./index-CcTl1dMB.js";import"./index-BXyZJ4ef.js";import"./index-Piay1Hl0.js";import"./index-tTCODTNv.js";import"./index-DUrgPtLc.js";import"./index-CNmy0mc9.js";import"./index-BpVfPjWU.js";import"./check-DLJQi36D.js";import"./circle-DafUkavS.js";function h({className:n,...r}){return e.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:p("flex justify-center",n),...r})}function f({className:n,...r}){return e.jsx("ul",{"data-slot":"pagination-content",className:p("flex flex-row items-center gap-2.5",n),...r})}function i({...n}){return e.jsx("li",{"data-slot":"pagination-item",className:p("inline-flex items-center justify-center",n.className),...n})}function s({className:n,isActive:r,size:l="page-md",...d}){return e.jsx("a",{"aria-current":r?"page":void 0,"data-slot":"pagination-link","data-active":r,className:p(ke({variant:r?"page-active":"page",size:l}),n),...d})}function j({size:n="page-md",className:r,...l}){return e.jsx(s,{"aria-label":"Go to previous page",className:p(n==="page-sm"&&"rounded-sm size-6",n==="page-md"&&"rounded-md size-8",r),...l,children:e.jsx(Ne,{className:"text-disabled"})})}function P({size:n="page-md",className:r,...l}){return e.jsx(s,{"aria-label":"Go to next page",className:p(n==="page-sm"&&"size-6 rounded-sm",n==="page-md"&&"size-8 rounded-md",r),...l,children:e.jsx(Se,{className:"text-disabled"})})}function w({size:n="page-md",className:r,...l}){return e.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:p("flex items-center justify-center border border-border-split",n==="page-sm"&&"rounded-sm size-6",n==="page-md"&&"rounded-md size-8",r),...l,children:[e.jsx(ye,{className:"size-3 text-disabled"}),e.jsx("span",{className:"sr-only",children:"More pages"})]})}h.__docgenInfo={description:"",methods:[],displayName:"Pagination"};f.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};s.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"page-md"',computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};j.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious",props:{size:{required:!1,tsType:{name:"union",raw:'"page-sm" | "page-md"',elements:[{name:"literal",value:'"page-sm"'},{name:"literal",value:'"page-md"'}]},description:"",defaultValue:{value:'"page-md"',computed:!1}}}};P.__docgenInfo={description:"",methods:[],displayName:"PaginationNext",props:{size:{required:!1,tsType:{name:"union",raw:"'page-sm' | 'page-md'",elements:[{name:"literal",value:"'page-sm'"},{name:"literal",value:"'page-md'"}]},description:"",defaultValue:{value:"'page-md'",computed:!1}}}};w.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis",props:{size:{required:!1,tsType:{name:"union",raw:'"page-sm" | "page-md"',elements:[{name:"literal",value:'"page-sm"'},{name:"literal",value:'"page-md"'}]},description:"",defaultValue:{value:'"page-md"',computed:!1}}}};const dn={title:"Components/Pagination",tags:["autodocs"],component:h,argTypes:{size:{control:{type:"select",options:["page-sm","page-md"]}}}},C={args:{size:"page-md"},render:()=>e.jsx("div",{className:"inline-flex",children:e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(i,{children:e.jsx(j,{href:"#"})}),e.jsx(i,{children:e.jsx(s,{href:"#",children:"1"})}),e.jsx(i,{children:e.jsx(s,{href:"#",isActive:!0,children:"2"})}),e.jsx(i,{children:e.jsx(s,{href:"#",children:"3"})}),e.jsx(i,{children:e.jsx(w,{})}),e.jsx(i,{children:e.jsx(s,{href:"#",children:"6"})}),e.jsx(i,{children:e.jsx(P,{href:"#"})})]})})})},b={args:{size:"page-sm"},render:n=>e.jsx("div",{className:"inline-flex items-center justify-center",children:e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(i,{children:e.jsx(j,{size:n.size,href:"#"})}),e.jsx(i,{children:e.jsx(s,{size:n.size,href:"#",children:"1"})}),e.jsx(i,{children:e.jsx(s,{size:n.size,href:"#",isActive:!0,children:"2"})}),e.jsx(i,{children:e.jsx(s,{size:n.size,href:"#",children:"3"})}),e.jsx(i,{children:e.jsx(w,{size:n.size})}),e.jsx(i,{children:e.jsx(s,{size:n.size,href:"#",children:"6"})}),e.jsx(i,{children:e.jsx(P,{size:n.size,href:"#"})})]})})})},L={args:{size:"page-md"},render:n=>{const[d,m]=g.useState(10),o=[10,20,30,50,100],c=a=>{m(a)};return e.jsxs("div",{className:"inline-flex flex flex-row gap-4",children:[e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(i,{children:e.jsx(j,{href:"#"})}),e.jsx(i,{children:e.jsx(s,{href:"#",children:"1"})}),e.jsx(i,{children:e.jsx(s,{href:"#",isActive:!0,children:"2"})}),e.jsx(i,{children:e.jsx(s,{href:"#",children:"3"})}),e.jsx(i,{children:e.jsx(w,{})}),e.jsx(i,{children:e.jsx(s,{href:"#",children:"6"})}),e.jsx(i,{children:e.jsx(P,{href:"#"})})]})}),e.jsxs(N,{variant:"primary",children:[e.jsx(S,{asChild:!0,children:e.jsxs(I,{variant:"page",size:n.size==="page-md"?"md":"sm",children:[e.jsxs("span",{className:"w-min-10",children:[d,"/页"]}),e.jsx(v,{})]})}),e.jsx(k,{align:"start",children:e.jsx(y,{children:o.map((a,x)=>e.jsxs(D,{onClick:()=>{c(a)},children:[a,"页"]},x))})})]}),e.jsxs("div",{className:"flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary",children:[e.jsx("span",{children:"跳至"}),e.jsx(M,{variant:"page",format:n.size==="page-md"?"md":"sm",placeholder:"1/20",className:"shadow-none"}),e.jsx("span",{children:"页"})]})]})}},T={args:{size:"page-sm"},render:n=>{const[r,l]=g.useState(10),d=[10,20,30,50,100],m=o=>{l(o)};return e.jsxs("div",{className:"inline-flex flex-row gap-4 items-center justify-center",children:[e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(i,{children:e.jsx(j,{size:n.size,href:"#"})}),e.jsx(i,{children:e.jsx(s,{size:n.size,href:"#",children:"1"})}),e.jsx(i,{children:e.jsx(s,{size:n.size,href:"#",isActive:!0,children:"2"})}),e.jsx(i,{children:e.jsx(s,{size:n.size,href:"#",children:"3"})}),e.jsx(i,{children:e.jsx(w,{size:n.size})}),e.jsx(i,{children:e.jsx(s,{size:n.size,href:"#",children:"6"})}),e.jsx(i,{children:e.jsx(P,{size:n.size,href:"#"})})]})}),e.jsxs(N,{variant:"primary",children:[e.jsx(S,{asChild:!0,children:e.jsxs(I,{variant:"page",size:n.size==="page-md"?"md":"sm",children:[e.jsxs("span",{className:"w-min-10",children:[r,"/页"]}),e.jsx(v,{})]})}),e.jsx(k,{align:"start",children:e.jsx(y,{children:d.map((o,c)=>e.jsxs(D,{onClick:()=>{m(o)},children:[o,"页"]},c))})})]}),e.jsxs("div",{className:"flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary",children:[e.jsx("span",{children:"跳至"}),e.jsx(M,{variant:"page",placeholder:"1/20",className:p(n.size==="page-sm"&&"h-6",n.size==="page-md"&&"h-8","shadow-none")}),e.jsx("span",{children:"页"})]})]})}},$={args:{size:"page-md"},render:n=>{const[d,m]=g.useState(10),o=[10,20,30,50,100],c=a=>{m(a)};return e.jsx("div",{className:"w-200",children:e.jsxs("div",{className:"flex flex-row w-full justify-between items-center px-3 py-4",children:[e.jsxs("div",{className:p("font-normal not-italic text-disabled",n.size==="page-md"&&"text-[13px] leading-[20px]",n.size==="page-sm"&&"text-[13px] leading-[20px]"),children:["共 ",25," 条数据"]}),e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(i,{children:e.jsx(j,{href:"#"})}),e.jsx(i,{children:e.jsx(s,{href:"#",children:"1"})}),e.jsx(i,{children:e.jsx(s,{href:"#",isActive:!0,children:"2"})}),e.jsx(i,{children:e.jsx(s,{href:"#",children:"3"})}),e.jsx(i,{children:e.jsx(w,{})}),e.jsx(i,{children:e.jsx(s,{href:"#",children:"6"})}),e.jsx(i,{children:e.jsx(P,{href:"#"})})]})}),e.jsxs(N,{variant:"primary",children:[e.jsx(S,{asChild:!0,children:e.jsxs(I,{variant:"page",size:n.size==="page-md"?"md":"sm",className:"w-[96px] justify-between",children:[e.jsxs("span",{className:"w-min-10",children:[d,"/页"]}),e.jsx(v,{})]})}),e.jsx(k,{align:"start",children:e.jsx(y,{children:o.map((a,x)=>e.jsxs(D,{onClick:()=>{c(a)},children:[a,"页"]},x))})})]}),e.jsxs("div",{className:"flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary",children:[e.jsx("span",{children:"跳至"}),e.jsx(M,{variant:"page",placeholder:"8/25",className:p(n.size==="page-sm"&&"h-6",n.size==="page-md"&&"h-8")}),e.jsx("span",{children:"页"})]})]})]})})}},E={args:{size:"page-sm"},render:n=>{const[d,m]=g.useState([]),[o,c]=g.useState([]),[a,x]=g.useState([]),[A,fe]=g.useState([]),[q,je]=g.useState([]);g.useEffect(()=>{const t=[],z=[],V=[],F=[],H=[];for(let u=1;u<=25;u++){const R=u-8;R>2?(25-u<2?H.push(u):t.push(u),z.push(u)):R<-2?u<=2?F.push(u):t.push(u):V.push(u)}c(t),x(z),m(V),fe(F),je(H)},[8]);const[Pe,we]=g.useState(10),ve=[10,20,30,50,100],Ie=t=>{we(t)};return e.jsx("div",{className:"w-200",children:e.jsxs("div",{className:"flex flex-row w-full justify-between items-center px-3 py-4",children:[e.jsxs("div",{className:p("font-normal not-italic text-disabled",n.size==="page-md"&&"text-[13px] leading-[20px]",n.size==="page-sm"&&"text-[12px] leading-[20px]"),children:["共 ",25," 条数据"]}),e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(i,{children:e.jsx(j,{size:n.size,href:"#"})}),A.length>0&&A.map((t,z)=>e.jsx(i,{children:e.jsx(s,{isActive:t==8,size:n.size,href:"#",children:t})},z)),o.length>0&&e.jsx(i,{children:e.jsx(w,{size:n.size})}),d.map((t,z)=>e.jsx(i,{children:e.jsx(s,{isActive:t==8,size:n.size,href:"#",children:t})},z)),a.length>0&&e.jsx(i,{children:e.jsx(w,{size:n.size})}),q.length>0&&q.map((t,z)=>e.jsx(i,{children:e.jsx(s,{isActive:t==8,size:n.size,href:"#",children:t})},z)),e.jsx(i,{children:e.jsx(P,{size:n.size,href:"#"})})]})}),e.jsxs(N,{variant:"primary",children:[e.jsx(S,{asChild:!0,children:e.jsxs(I,{variant:"page",size:n.size==="page-md"?"md":"sm",children:[e.jsxs("span",{className:"w-min-10",children:[Pe,"/页"]}),e.jsx(v,{})]})}),e.jsx(k,{align:"start",children:e.jsx(y,{children:ve.map((t,z)=>e.jsxs(D,{onClick:()=>{Ie(t)},children:[t,"页"]},z))})})]}),e.jsxs("div",{className:"flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary",children:[e.jsx("span",{children:"跳至"}),e.jsx(M,{variant:"page",placeholder:"8/25",className:p(n.size==="page-sm"&&"h-6",n.size==="page-md"&&"h-8","shadow-none")}),e.jsx("span",{children:"页"})]})]})]})})}},G={args:{size:"page-md"},render:n=>{const[d,m]=g.useState(10),o=[10,20,30,50,100],c=a=>{m(a)};return e.jsx("div",{className:"flex flex-row w-full justify-center items-center px-3 py-4",children:e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsxs(N,{variant:"primary",children:[e.jsx(S,{asChild:!0,children:e.jsxs(I,{variant:"page",size:n.size==="page-md"?"md":"sm",children:[e.jsxs("span",{className:"w-min-10",children:[d,"/页"]}),e.jsx(v,{})]})}),e.jsx(k,{align:"start",children:e.jsx(y,{children:o.map((a,x)=>e.jsxs(D,{onClick:()=>{c(a)},children:[a,"页"]},x))})})]}),e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(i,{children:e.jsx(j,{size:n.size,href:"#"})}),e.jsx("div",{className:"flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary",children:e.jsx(M,{variant:"page",placeholder:"8/25",className:p(n.size==="page-sm"&&"h-6",n.size==="page-md"&&"h-8","shadow-none")})}),e.jsx(i,{children:e.jsx(P,{size:n.size,href:"#"})})]})})]})})}},B={args:{size:"page-sm"},render:n=>{const[d,m]=g.useState(10),o=[10,20,30,50,100],c=a=>{m(a)};return e.jsx("div",{className:"w-200",children:e.jsxs("div",{className:"flex flex-row w-full justify-between items-center px-3 py-4",children:[e.jsxs("div",{className:p("font-normal not-italic text-disabled",n.size==="page-md"&&"text-[13px] leading-[20px]",n.size==="page-sm"&&"text-[12px] leading-[20px]"),children:["共 ",25," 条数据"]}),e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(i,{children:e.jsx(j,{size:n.size,href:"#"})}),e.jsx("div",{className:"flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary",children:e.jsx(M,{variant:"page",placeholder:"8/25",className:p(n.size==="page-sm"&&"h-6",n.size==="page-md"&&"h-8")})}),e.jsx(i,{children:e.jsx(P,{size:n.size,href:"#"})})]})}),e.jsxs(N,{variant:"primary",children:[e.jsx(S,{asChild:!0,children:e.jsxs(I,{variant:"page",size:n.size==="page-md"?"md":"sm",children:[e.jsxs("span",{className:"w-min-10",children:[d,"/页"]}),e.jsx(v,{})]})}),e.jsx(k,{align:"start",children:e.jsx(y,{children:o.map((a,x)=>e.jsxs(D,{onClick:()=>{c(a)},children:[a,"页"]},x))})})]})]})]})})}},_={args:{size:"page-sm"},render:n=>{const[d,m]=g.useState(10),o=[10,20,30,50,100],c=a=>{m(a)};return e.jsx("div",{className:"flex flex-row w-full justify-center items-center px-3 py-4",children:e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(i,{children:e.jsx(j,{size:n.size,href:"#"})}),e.jsx("div",{className:"flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary",children:e.jsx(M,{variant:"page",format:n.size==="page-sm"?"sm":"md",placeholder:"8/25"})}),e.jsx(i,{children:e.jsx(P,{size:n.size,href:"#"})})]})}),e.jsxs(N,{variant:"primary",children:[e.jsx(S,{asChild:!0,children:e.jsxs(I,{variant:"page",size:n.size==="page-md"?"md":"sm",children:[e.jsxs("span",{className:"w-min-10",children:[d,"/页"]}),e.jsx(v,{})]})}),e.jsx(k,{align:"start",children:e.jsx(y,{children:o.map((a,x)=>e.jsxs(D,{onClick:()=>{c(a)},children:[a,"页"]},x))})})]})]})})}};var O,J,K;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: 'page-md'
  },
  render: () => <div className='inline-flex'>\r
            <Pagination>\r
                <PaginationContent>\r
                    <PaginationItem>\r
                        <PaginationPrevious href="#" />\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationLink href="#">1</PaginationLink>\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationLink href="#" isActive>\r
                            2\r
                        </PaginationLink>\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationLink href="#">3</PaginationLink>\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationEllipsis />\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationLink href="#">6</PaginationLink>\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationNext href="#" />\r
                    </PaginationItem>\r
                </PaginationContent>\r
            </Pagination>\r
        </div>
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: 'page-sm'
  },
  render: args => <div className='inline-flex items-center justify-center'>\r
            <Pagination>\r
                <PaginationContent>\r
                    <PaginationItem>\r
                        <PaginationPrevious size={args.size} href="#" />\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationLink size={args.size} href="#">1</PaginationLink>\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationLink size={args.size} href="#" isActive>\r
                            2\r
                        </PaginationLink>\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationLink size={args.size} href="#">3</PaginationLink>\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationEllipsis size={args.size} />\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationLink size={args.size} href="#">6</PaginationLink>\r
                    </PaginationItem>\r
                    <PaginationItem>\r
                        <PaginationNext size={args.size} href="#" />\r
                    </PaginationItem>\r
                </PaginationContent>\r
            </Pagination>\r
        </div>
}`,...(W=(U=b.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;L.parameters={...L.parameters,docs:{...(X=L.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: 'page-md'
  },
  render: args => {
    const page = 1;
    const total = 20;
    const [size, setSize] = useState<number>(10);
    const sizes: number[] = [10, 20, 30, 50, 100];
    const updateSize = (s: number) => {
      setSize(s);
    };
    return <div className="inline-flex flex flex-row gap-4">\r
\r
\r
                <Pagination>\r
                    <PaginationContent>\r
                        <PaginationItem>\r
                            <PaginationPrevious href="#" />\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationLink href="#">1</PaginationLink>\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationLink href="#" isActive>\r
                                2\r
                            </PaginationLink>\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationLink href="#">3</PaginationLink>\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationEllipsis />\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationLink href="#">6</PaginationLink>\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationNext href="#" />\r
                        </PaginationItem>\r
                    </PaginationContent>\r
                </Pagination>\r
                <DropdownMenu variant={"primary"}>\r
                    <DropdownMenuTrigger asChild>\r
                        <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>\r
                            <span className='w-min-10'>{size}/页</span>\r
                            <TriangleDownIcon />\r
                        </Button>\r
                    </DropdownMenuTrigger>\r
                    <DropdownMenuContent align="start">\r
                        <DropdownMenuGroup>\r
                            {sizes.map((s, index) => {
              return <DropdownMenuItem key={index} onClick={() => {
                updateSize(s);
              }}>\r
                                        {s}页\r
                                    </DropdownMenuItem>;
            })}\r
                        </DropdownMenuGroup>\r
                    </DropdownMenuContent>\r
                </DropdownMenu>\r
                <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>\r
                    <span>\r
                        跳至\r
                    </span>\r
                    <Input variant={'page'} format={args.size === 'page-md' ? 'md' : 'sm'} placeholder={\`\${page}/\${total}\`} className='shadow-none' />\r
                    <span>\r
                        页\r
                    </span>\r
                </div>\r
            </div>;
  }
}`,...(Z=(Y=L.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,ie;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    size: 'page-sm'
  },
  render: args => {
    const [size, setSize] = useState<number>(10);
    const sizes: number[] = [10, 20, 30, 50, 100];
    const updateSize = (s: number) => {
      setSize(s);
      //其他逻辑
    };
    return <div className="inline-flex flex-row gap-4 items-center justify-center">\r
\r
                <Pagination>\r
                    <PaginationContent>\r
                        <PaginationItem>\r
                            <PaginationPrevious size={args.size} href="#" />\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationLink size={args.size} href="#">1</PaginationLink>\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationLink size={args.size} href="#" isActive>\r
                                2\r
                            </PaginationLink>\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationLink size={args.size} href="#">3</PaginationLink>\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationEllipsis size={args.size} />\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationLink size={args.size} href="#">6</PaginationLink>\r
                        </PaginationItem>\r
                        <PaginationItem>\r
                            <PaginationNext size={args.size} href="#" />\r
                        </PaginationItem>\r
                    </PaginationContent>\r
                </Pagination>\r
                <DropdownMenu variant={"primary"}>\r
                    <DropdownMenuTrigger asChild>\r
                        <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>\r
                            <span className='w-min-10'>{size}/页</span>\r
                            <TriangleDownIcon />\r
                        </Button>\r
                    </DropdownMenuTrigger>\r
                    <DropdownMenuContent align="start">\r
                        <DropdownMenuGroup>\r
                            {sizes.map((s, index) => {
              return <DropdownMenuItem key={index} onClick={() => {
                updateSize(s);
              }}>\r
                                        {s}页\r
                                    </DropdownMenuItem>;
            })}\r
                        </DropdownMenuGroup>\r
                    </DropdownMenuContent>\r
                </DropdownMenu>\r
                <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>\r
                    <span>\r
                        跳至\r
                    </span>\r
                    <Input variant={'page'} placeholder={\`\${1}/\${20}\`} className={cn(args.size === 'page-sm' && 'h-6', args.size === 'page-md' && 'h-8', 'shadow-none')} />\r
                    <span>\r
                        页\r
                    </span>\r
                </div>\r
            </div>;
  }
}`,...(ie=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ae,se,re;$.parameters={...$.parameters,docs:{...(ae=$.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    size: 'page-md'
  },
  render: args => {
    const total = 25;
    const page = 8;
    const [size, setSize] = useState<number>(10);
    const sizes: number[] = [10, 20, 30, 50, 100];
    const updateSize = (s: number) => {
      setSize(s);
    };
    return <div className='w-200'>\r
                <div className="flex flex-row w-full justify-between items-center px-3 py-4">\r
                    <div className={cn("font-normal not-italic text-disabled", args.size === 'page-md' && 'text-[13px] leading-[20px]', args.size === 'page-sm' && 'text-[13px] leading-[20px]')}>\r
                        共 {total} 条数据\r
                    </div>\r
                    <div className="flex flex-row gap-4">\r
                        <Pagination>\r
                            <PaginationContent>\r
                                <PaginationItem>\r
                                    <PaginationPrevious href="#" />\r
                                </PaginationItem>\r
                                <PaginationItem>\r
                                    <PaginationLink href="#">1</PaginationLink>\r
                                </PaginationItem>\r
                                <PaginationItem>\r
                                    <PaginationLink href="#" isActive>\r
                                        2\r
                                    </PaginationLink>\r
                                </PaginationItem>\r
                                <PaginationItem>\r
                                    <PaginationLink href="#">3</PaginationLink>\r
                                </PaginationItem>\r
                                <PaginationItem>\r
                                    <PaginationEllipsis />\r
                                </PaginationItem>\r
                                <PaginationItem>\r
                                    <PaginationLink href="#">6</PaginationLink>\r
                                </PaginationItem>\r
                                <PaginationItem>\r
                                    <PaginationNext href="#" />\r
                                </PaginationItem>\r
                            </PaginationContent>\r
                        </Pagination>\r
                        <DropdownMenu variant='primary'>\r
                            <DropdownMenuTrigger asChild>\r
                                <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'} className='w-[96px] justify-between'>\r
                                    <span className='w-min-10'>{size}/页</span>\r
                                    <TriangleDownIcon />\r
                                </Button>\r
                            </DropdownMenuTrigger>\r
                            <DropdownMenuContent align="start">\r
                                <DropdownMenuGroup>\r
                                    {sizes.map((s, index) => {
                  return <DropdownMenuItem key={index} onClick={() => {
                    updateSize(s);
                  }}>\r
                                                {s}页\r
                                            </DropdownMenuItem>;
                })}\r
                                </DropdownMenuGroup>\r
                            </DropdownMenuContent>\r
                        </DropdownMenu>\r
                        <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>\r
                            <span>\r
                                跳至\r
                            </span>\r
                            <Input variant={'page'} placeholder={\`\${page}/\${total}\`} className={cn(args.size === 'page-sm' && 'h-6', args.size === 'page-md' && 'h-8')} />\r
                            <span>\r
                                页\r
                            </span>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>;
  }
}`,...(re=(se=$.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var te,oe,le;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    size: 'page-sm'
  },
  render: args => {
    const total = 25;
    const page = 8;
    const [shows, setShows] = useState<number[]>([]);
    const [preSkips, setPreSkips] = useState<number[]>([]);
    const [nextSkips, setNextSkips] = useState<number[]>([]);
    const [starts, setStarts] = useState<number[]>([]);
    const [ends, setEnds] = useState<number[]>([]);
    useEffect(() => {
      const pres: number[] = [];
      const nexts: number[] = [];
      const toShow: number[] = [];
      const toStart: number[] = [];
      const toEnd: number[] = [];
      for (let index = 1; index <= total; index++) {
        const value = index - page;
        if (value > 2) {
          if (total - index < 2) {
            toEnd.push(index);
          } else {
            pres.push(index);
          }
          nexts.push(index);
        } else if (value < -2) {
          if (index <= 2) {
            toStart.push(index);
          } else {
            pres.push(index);
          }
        } else {
          toShow.push(index);
        }
      }
      setPreSkips(pres);
      setNextSkips(nexts);
      setShows(toShow);
      setStarts(toStart);
      setEnds(toEnd);
    }, [page]);
    const [size, setSize] = useState<number>(10);
    const sizes: number[] = [10, 20, 30, 50, 100];
    const updateSize = (s: number) => {
      setSize(s);
      //其他逻辑
    };
    return <div className='w-200'>\r
                <div className="flex flex-row w-full justify-between items-center px-3 py-4">\r
                    <div className={cn("font-normal not-italic text-disabled", args.size === 'page-md' && 'text-[13px] leading-[20px]', args.size === 'page-sm' && 'text-[12px] leading-[20px]')}>\r
                        共 {total} 条数据\r
                    </div>\r
                    <div className="flex flex-row gap-4">\r
\r
\r
                        <Pagination>\r
                            <PaginationContent>\r
                                <PaginationItem>\r
                                    <PaginationPrevious size={args.size} href="#" />\r
                                </PaginationItem>\r
                                {starts.length > 0 && starts.map((item, index) => {
                return <PaginationItem key={index}>\r
                                            <PaginationLink isActive={item == page} size={args.size} href="#">{item}</PaginationLink>\r
                                        </PaginationItem>;
              })}\r
                                {preSkips.length > 0 && <PaginationItem>\r
                                        <PaginationEllipsis size={args.size} />\r
                                    </PaginationItem>}\r
                                {shows.map((item, index) => {
                return <PaginationItem key={index}>\r
                                            <PaginationLink isActive={item == page} size={args.size} href="#">{item}</PaginationLink>\r
                                        </PaginationItem>;
              })}\r
                                {nextSkips.length > 0 && <PaginationItem>\r
                                        <PaginationEllipsis size={args.size} />\r
                                    </PaginationItem>}\r
                                {ends.length > 0 && ends.map((item, index) => {
                return <PaginationItem key={index}>\r
                                            <PaginationLink isActive={item == page} size={args.size} href="#">{item}</PaginationLink>\r
                                        </PaginationItem>;
              })}\r
                                <PaginationItem>\r
                                    <PaginationNext size={args.size} href="#" />\r
                                </PaginationItem>\r
                            </PaginationContent>\r
                        </Pagination>\r
                        <DropdownMenu variant={"primary"}>\r
                            <DropdownMenuTrigger asChild>\r
                                <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>\r
                                    <span className='w-min-10'>{size}/页</span>\r
                                    <TriangleDownIcon />\r
                                </Button>\r
                            </DropdownMenuTrigger>\r
                            <DropdownMenuContent align="start">\r
                                <DropdownMenuGroup>\r
                                    {sizes.map((s, index) => {
                  return <DropdownMenuItem key={index} onClick={() => {
                    updateSize(s);
                  }}>\r
                                                {s}页\r
                                            </DropdownMenuItem>;
                })}\r
                                </DropdownMenuGroup>\r
                            </DropdownMenuContent>\r
                        </DropdownMenu>\r
                        <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>\r
                            <span>\r
                                跳至\r
                            </span>\r
                            <Input variant={'page'} placeholder={\`\${page}/\${total}\`} className={cn(args.size === 'page-sm' && 'h-6', args.size === 'page-md' && 'h-8', 'shadow-none')} />\r
                            <span>\r
                                页\r
                            </span>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>;
  }
}`,...(le=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var de,pe,me;G.parameters={...G.parameters,docs:{...(de=G.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    size: 'page-md'
  },
  render: args => {
    const total = 25;
    const page = 8;
    const [size, setSize] = useState<number>(10);
    const sizes: number[] = [10, 20, 30, 50, 100];
    const updateSize = (s: number) => {
      setSize(s);
      //其他逻辑
    };
    return <div className="flex flex-row w-full justify-center items-center px-3 py-4">\r
                <div className="flex flex-row gap-4">\r
                    <DropdownMenu variant={"primary"}>\r
                        <DropdownMenuTrigger asChild>\r
                            <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>\r
                                <span className='w-min-10'>{size}/页</span>\r
                                <TriangleDownIcon />\r
                            </Button>\r
                        </DropdownMenuTrigger>\r
                        <DropdownMenuContent align="start">\r
                            <DropdownMenuGroup>\r
                                {sizes.map((s, index) => {
                return <DropdownMenuItem key={index} onClick={() => {
                  updateSize(s);
                }}>\r
                                            {s}页\r
                                        </DropdownMenuItem>;
              })}\r
                            </DropdownMenuGroup>\r
                        </DropdownMenuContent>\r
                    </DropdownMenu>\r
\r
                    <Pagination>\r
                        <PaginationContent>\r
                            <PaginationItem>\r
                                <PaginationPrevious size={args.size} href="#" />\r
                            </PaginationItem>\r
                            <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>\r
                                <Input variant={'page'} placeholder={\`\${page}/\${total}\`} className={cn(args.size === 'page-sm' && 'h-6', args.size === 'page-md' && 'h-8', 'shadow-none')} />\r
                            </div>\r
                            <PaginationItem>\r
                                <PaginationNext size={args.size} href="#" />\r
                            </PaginationItem>\r
                        </PaginationContent>\r
                    </Pagination>\r
                </div>\r
            </div>;
  }
}`,...(me=(pe=G.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ce,ge,xe;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    size: 'page-sm'
  },
  render: args => {
    const total = 25;
    const page = 8;
    const [size, setSize] = useState<number>(10);
    const sizes: number[] = [10, 20, 30, 50, 100];
    const updateSize = (s: number) => {
      setSize(s);
      //其他逻辑
    };
    return <div className='w-200'>\r
                <div className="flex flex-row w-full justify-between items-center px-3 py-4">\r
                    <div className={cn("font-normal not-italic text-disabled", args.size === 'page-md' && 'text-[13px] leading-[20px]', args.size === 'page-sm' && 'text-[12px] leading-[20px]')}>\r
                        共 {total} 条数据\r
                    </div>\r
                    <div className="flex flex-row gap-4">\r
                        <Pagination>\r
                            <PaginationContent>\r
                                <PaginationItem>\r
                                    <PaginationPrevious size={args.size} href="#" />\r
                                </PaginationItem>\r
                                <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>\r
                                    <Input variant={'page'} placeholder={\`\${page}/\${total}\`} className={cn(args.size === 'page-sm' && 'h-6', args.size === 'page-md' && 'h-8')} />\r
                                </div>\r
                                <PaginationItem>\r
                                    <PaginationNext size={args.size} href="#" />\r
                                </PaginationItem>\r
                            </PaginationContent>\r
                        </Pagination>\r
                        <DropdownMenu variant={"primary"}>\r
                            <DropdownMenuTrigger asChild>\r
                                <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>\r
                                    <span className='w-min-10'>{size}/页</span>\r
                                    <TriangleDownIcon />\r
                                </Button>\r
                            </DropdownMenuTrigger>\r
                            <DropdownMenuContent align="start">\r
                                <DropdownMenuGroup>\r
                                    {sizes.map((s, index) => {
                  return <DropdownMenuItem key={index} onClick={() => {
                    updateSize(s);
                  }}>\r
                                                {s}页\r
                                            </DropdownMenuItem>;
                })}\r
                                </DropdownMenuGroup>\r
                            </DropdownMenuContent>\r
                        </DropdownMenu>\r
\r
                    </div>\r
                </div>\r
            </div>;
  }
}`,...(xe=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var ue,he,ze;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    size: 'page-sm'
  },
  render: args => {
    const total = 25;
    const page = 8;
    const [size, setSize] = useState<number>(10);
    const sizes: number[] = [10, 20, 30, 50, 100];
    const updateSize = (s: number) => {
      setSize(s);
    };
    return <div className="flex flex-row w-full justify-center items-center px-3 py-4">\r
                <div className="flex flex-row gap-4">\r
                    <Pagination>\r
                        <PaginationContent>\r
                            <PaginationItem>\r
                                <PaginationPrevious size={args.size} href="#" />\r
                            </PaginationItem>\r
                            <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>\r
                                <Input variant={'page'} format={args.size === 'page-sm' ? 'sm' : 'md'} placeholder={\`\${page}/\${total}\`} />\r
                            </div>\r
                            <PaginationItem>\r
                                <PaginationNext size={args.size} href="#" />\r
                            </PaginationItem>\r
                        </PaginationContent>\r
                    </Pagination>\r
                    <DropdownMenu variant={"primary"}>\r
                        <DropdownMenuTrigger asChild>\r
                            <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>\r
                                <span className='w-min-10'>{size}/页</span>\r
                                <TriangleDownIcon />\r
                            </Button>\r
                        </DropdownMenuTrigger>\r
                        <DropdownMenuContent align="start">\r
                            <DropdownMenuGroup>\r
                                {sizes.map((s, index) => {
                return <DropdownMenuItem key={index} onClick={() => {
                  updateSize(s);
                }}>\r
                                            {s}页\r
                                        </DropdownMenuItem>;
              })}\r
                            </DropdownMenuGroup>\r
                        </DropdownMenuContent>\r
                    </DropdownMenu>\r
                </div>\r
            </div>;
  }
}`,...(ze=(he=_.parameters)==null?void 0:he.docs)==null?void 0:ze.source}}};const pn=["Primary","PrimarySmall","Main","MainSmall","Full","FullSmall","Simple","SimpleHasTotal","SimpleSmall"];export{$ as Full,E as FullSmall,L as Main,T as MainSmall,C as Primary,b as PrimarySmall,G as Simple,B as SimpleHasTotal,_ as SimpleSmall,pn as __namedExportsOrder,dn as default};
