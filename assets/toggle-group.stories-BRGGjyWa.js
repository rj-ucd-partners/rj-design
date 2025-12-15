import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as C,R as p}from"./iframe-DPkNXRqw.js";import{c as ye}from"./index-3PNdDA9F.js";import{P as _}from"./index-CED2zaSr.js";import{c as te,I as xe,R as fe}from"./index-BpVfPjWU.js";import{c as he}from"./index-DW48STyt.js";import{u as N}from"./index-TAJg0BDn.js";import{u as ze}from"./index-BwCODQwj.js";import{c as ie}from"./index-CGrAONsN.js";import{c as m}from"./utils-D-KgF5mV.js";import{M as w}from"./man-icon-CVV_XicK.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-CVJC_e1g.js";import"./index-xbPJJJA0.js";import"./index-CcTl1dMB.js";import"./index-CGny4Gu2.js";import"./index-BFJ-Qg5v.js";var oe="Toggle",ne=C.forwardRef((r,e)=>{const{pressed:a,defaultPressed:t,onPressedChange:i,...o}=r,[l,n]=N({prop:a,onChange:i,defaultProp:t??!1,caller:oe});return s.jsx(_.button,{type:"button","aria-pressed":l,"data-state":l?"on":"off","data-disabled":r.disabled?"":void 0,...o,ref:e,onClick:he(r.onClick,()=>{r.disabled||n(!l)})})});ne.displayName=oe;var u="ToggleGroup",[le,Je]=ye(u,[te]),pe=te(),M=p.forwardRef((r,e)=>{const{type:a,...t}=r;if(a==="single"){const i=t;return s.jsx(Ge,{...i,ref:e})}if(a==="multiple"){const i=t;return s.jsx(be,{...i,ref:e})}throw new Error(`Missing prop \`type\` expected on \`${u}\``)});M.displayName=u;var[me,ce]=le(u),Ge=p.forwardRef((r,e)=>{const{value:a,defaultValue:t,onValueChange:i=()=>{},...o}=r,[l,n]=N({prop:a,defaultProp:t??"",onChange:i,caller:u});return s.jsx(me,{scope:r.__scopeToggleGroup,type:"single",value:p.useMemo(()=>l?[l]:[],[l]),onItemActivate:n,onItemDeactivate:p.useCallback(()=>n(""),[n]),children:s.jsx(ge,{...o,ref:e})})}),be=p.forwardRef((r,e)=>{const{value:a,defaultValue:t,onValueChange:i=()=>{},...o}=r,[l,n]=N({prop:a,defaultProp:t??[],onChange:i,caller:u}),v=p.useCallback(y=>n((x=[])=>[...x,y]),[n]),P=p.useCallback(y=>n((x=[])=>x.filter(ve=>ve!==y)),[n]);return s.jsx(me,{scope:r.__scopeToggleGroup,type:"multiple",value:l,onItemActivate:v,onItemDeactivate:P,children:s.jsx(ge,{...o,ref:e})})});M.displayName=u;var[je,Te]=le(u),ge=p.forwardRef((r,e)=>{const{__scopeToggleGroup:a,disabled:t=!1,rovingFocus:i=!0,orientation:o,dir:l,loop:n=!0,...v}=r,P=pe(a),y=ze(l),x={role:"group",dir:y,...v};return s.jsx(je,{scope:a,rovingFocus:i,disabled:t,children:i?s.jsx(fe,{asChild:!0,...P,orientation:o,dir:y,loop:n,children:s.jsx(_.div,{...x,ref:e})}):s.jsx(_.div,{...x,ref:e})})}),I="ToggleGroupItem",ue=p.forwardRef((r,e)=>{const a=ce(I,r.__scopeToggleGroup),t=Te(I,r.__scopeToggleGroup),i=pe(r.__scopeToggleGroup),o=a.value.includes(r.value),l=t.disabled||r.disabled,n={...r,pressed:o,disabled:l},v=p.useRef(null);return t.rovingFocus?s.jsx(xe,{asChild:!0,...i,focusable:!l,active:o,ref:v,children:s.jsx(S,{...n,ref:e})}):s.jsx(S,{...n,ref:e})});ue.displayName=I;var S=p.forwardRef((r,e)=>{const{__scopeToggleGroup:a,value:t,...i}=r,o=ce(I,a),l={role:"radio","aria-checked":r.pressed,"aria-pressed":void 0},n=o.type==="single"?l:void 0;return s.jsx(ne,{...n,...i,ref:e,onPressedChange:v=>{v?o.onItemActivate(t):o.onItemDeactivate(t)}})}),ke=M,Ie=ue;const Pe=ie("inline-flex items-center justify-center gap-2 text-sm font-medium hover:bg-muted hover:text-text disabled:pointer-events-none disabled:text-disabled data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",primary:"text-secondary data-[state=on]:text-text data-[state=on]:bg-primary disabled:data-[state=on]:bg-primary-disabled hover:text-secondary hover:bg-fill-light-hover-bg rounded-md"},size:{sm:"[&:not(:has(svg))]:text-[12px] [&:not(:has(svg))]:leading-[20px] [&:not(:has(svg))]:px-2 [&_svg:not([class*='size-'])]:size-3 [&:has(svg)]:p-[6px] [&:has(svg)]:w-6 [&:has(svg)]:h-5",md:"[&:not(:has(svg))]:text-[13px] [&:not(:has(svg))]:leading-[22px] [&:not(:has(svg))]:px-4 [&:not(:has(svg))]:py-[1px] [&_svg:not([class*='size-'])]:size-4 [&:has(svg)]:p-2 [&:has(svg)]:w-8 [&:has(svg)]:h-6",lg:"[&:not(:has(svg))]:text-[15px] [&:not(:has(svg))]:leading-[26px] [&:not(:has(svg))]:px-4 [&:not(:has(svg))]:py-[1px] [&_svg:not([class*='size-'])]:size-5 [&:has(svg)]:p-2.5 [&:has(svg)]:w-10 [&:has(svg)]:h-7"}},defaultVariants:{variant:"default",size:"sm"}}),de=C.createContext({size:"sm",variant:"primary"}),_e=ie("group/toggle-group flex w-fit items-center data-[variant=outline]:shadow-xs",{variants:{variant:{default:"",outline:"",primary:["bg-fill"]},size:{sm:"rounded-md",md:"rounded-lg",lg:"rounded-lg"}},defaultVariants:{variant:"primary",size:"sm"}});function c({className:r,variant:e,size:a,children:t,...i}){return s.jsx(ke,{"data-slot":"toggle-group","data-variant":e,"data-size":a,className:m(_e({variant:e,size:a}),r),...i,children:s.jsx(de.Provider,{value:{variant:e,size:a},children:t})})}function g({className:r,children:e,variant:a,size:t,...i}){const o=C.useContext(de);return s.jsx(Ie,{"data-slot":"toggle-group-item","data-variant":o.variant||a,"data-size":o.size||t,className:m(Pe({variant:o.variant||a,size:o.size||t}),"min-w-0 flex-1 shrink-0 shadow-none  focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",r),...i,children:e})}c.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup"};g.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupItem"};const Ke={title:"Components/ToggleGroup",tags:["autodocs"],component:c,argTypes:{}},d=[{key:"1",label:"选项左",disabled:!0},{key:"2",label:"选项中"},{key:"3",label:"选项中"},{key:"4",label:"选项中"},{key:"5",label:"选项中"},{key:"6",label:"选项右"}],f={args:{size:"sm"},render:r=>s.jsx(c,{variant:"primary",type:"single",size:r.size??"sm",children:d.map(e=>s.jsx("div",{className:m("inline-flex item-center justify-center",r.size==="sm"?"p-0.5":"p-1"),children:s.jsx(g,{value:e.key,children:e.label},e.key)}))})},h={args:{size:"md"},render:r=>s.jsx(c,{variant:"primary",type:"single",size:r.size??"sm",children:d.map(e=>s.jsx("div",{className:m("inline-flex item-center justify-center",r.size==="sm"?"p-0.5":"p-1"),children:s.jsx(g,{value:e.key,children:e.label},e.key)}))})},z={args:{size:"lg"},render:r=>s.jsx(c,{variant:"primary",type:"single",size:r.size??"sm",children:d.map(e=>s.jsx("div",{className:m("inline-flex item-center justify-center",r.size==="sm"?"p-0.5":"p-1"),children:s.jsx(g,{value:e.key,children:e.label},e.key)}))})},G={args:{size:"md"},render:r=>s.jsx(c,{variant:"primary",type:"single",size:r.size??"sm",children:d.map(e=>s.jsx("div",{className:m("inline-flex item-center justify-center",r.size==="sm"?"p-0.5":"p-1"),children:s.jsx(g,{value:e.key,disabled:e.disabled,children:e.label},e.key)}))})},b={args:{size:"md"},render:r=>s.jsx(c,{variant:"primary",type:"single",size:r.size??"sm",value:"1",children:d.map(e=>s.jsx("div",{className:m("inline-flex item-center justify-center",r.size==="sm"?"p-0.5":"p-1"),children:s.jsx(g,{value:e.key,disabled:e.disabled,children:e.label},e.key)}))})},j={args:{size:"sm"},render:r=>s.jsx(c,{variant:"primary",type:"single",size:"sm",children:d.map(e=>s.jsx("div",{className:m("inline-flex item-center justify-center",r.size==="sm"?"p-0.5":"p-1"),children:s.jsx(g,{value:e.key,children:s.jsx(w,{})},e.key)}))})},T={args:{size:"md"},render:r=>s.jsx(c,{variant:"primary",type:"single",size:r.size??"sm",children:d.map(e=>s.jsx("div",{className:m("inline-flex item-center justify-center",r.size==="sm"?"p-0.5":"p-1"),children:s.jsx(g,{value:e.key,children:s.jsx(w,{})},e.key)}))})},k={args:{size:"lg"},render:r=>s.jsx(c,{variant:"primary",type:"single",size:"lg",children:d.map(e=>s.jsx("div",{className:m("inline-flex item-center justify-center",r.size==="sm"?"p-0.5":"p-1"),children:s.jsx(g,{value:e.key,children:s.jsx(w,{})},e.key)}))})};var R,D,V;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => {
    return <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'}>\r
                {items.map(item => {
        return <div className={cn("inline-flex item-center justify-center", args.size === 'sm' ? 'p-0.5' : 'p-1')}>\r
                            <ToggleGroupItem key={item.key} value={item.key}>\r
                                {item.label}\r
                            </ToggleGroupItem>\r
                        </div>;
      })}\r
\r
            </ToggleGroup>;
  }
}`,...(V=(D=f.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var E,A,F;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    return <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'}>\r
                {items.map(item => {
        return <div className={cn("inline-flex item-center justify-center", args.size === 'sm' ? 'p-0.5' : 'p-1')}>\r
                            <ToggleGroupItem key={item.key} value={item.key}>\r
                                {item.label}\r
                            </ToggleGroupItem>\r
                        </div>;
      })}\r
\r
            </ToggleGroup>;
  }
}`,...(F=(A=h.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var L,$,O;z.parameters={...z.parameters,docs:{...(L=z.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  render: args => {
    return <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'}>\r
                {items.map(item => {
        return <div className={cn("inline-flex item-center justify-center", args.size === 'sm' ? 'p-0.5' : 'p-1')}>\r
                            <ToggleGroupItem key={item.key} value={item.key}>\r
                                {item.label}\r
                            </ToggleGroupItem>\r
                        </div>;
      })}\r
\r
            </ToggleGroup>;
  }
}`,...(O=($=z.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var B,H,U;G.parameters={...G.parameters,docs:{...(B=G.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    return <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'}>\r
                {items.map(item => {
        return <div className={cn("inline-flex item-center justify-center", args.size === 'sm' ? 'p-0.5' : 'p-1')}>\r
                            <ToggleGroupItem key={item.key} value={item.key} disabled={item.disabled}>\r
                                {item.label}\r
                            </ToggleGroupItem>\r
                        </div>;
      })}\r
\r
            </ToggleGroup>;
  }
}`,...(U=(H=G.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var q,J,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    return <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'} value="1">\r
                {items.map(item => {
        return <div className={cn("inline-flex item-center justify-center", args.size === 'sm' ? 'p-0.5' : 'p-1')}>\r
                            <ToggleGroupItem key={item.key} value={item.key} disabled={item.disabled}>\r
                                {item.label}\r
                            </ToggleGroupItem>\r
                        </div>;
      })}\r
\r
            </ToggleGroup>;
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => {
    return <ToggleGroup variant="primary" type="single" size={'sm'}>\r
                {items.map(item => {
        return <div className={cn("inline-flex item-center justify-center", args.size === 'sm' ? 'p-0.5' : 'p-1')}>\r
                            <ToggleGroupItem key={item.key} value={item.key}>\r
                                <ManIcon />\r
                            </ToggleGroupItem>\r
                        </div>;
      })}\r
            </ToggleGroup>;
  }
}`,...(X=(W=j.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    return <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'}>\r
                {items.map(item => {
        return <div className={cn("inline-flex item-center justify-center", args.size === 'sm' ? 'p-0.5' : 'p-1')}>\r
                            <ToggleGroupItem key={item.key} value={item.key}>\r
                                <ManIcon />\r
                            </ToggleGroupItem>\r
                        </div>;
      })}\r
            </ToggleGroup>;
  }
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,se,ae;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  render: args => {
    return <ToggleGroup variant="primary" type="single" size={'lg'}>\r
                {items.map(item => {
        return <div className={cn("inline-flex item-center justify-center", args.size === 'sm' ? 'p-0.5' : 'p-1')}>\r
                            <ToggleGroupItem key={item.key} value={item.key}>\r
                                <ManIcon />\r
                            </ToggleGroupItem>\r
                        </div>;
      })}\r
            </ToggleGroup>;
  }
}`,...(ae=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const Qe=["Primary","PrimaryMD","PrimaryLG","PrimaryDisabled","PrimaryDisabledChecked","PrimaryIcon","PrimaryIconMD","PrimaryIconLG"];export{f as Primary,G as PrimaryDisabled,b as PrimaryDisabledChecked,j as PrimaryIcon,k as PrimaryIconLG,T as PrimaryIconMD,z as PrimaryLG,h as PrimaryMD,Qe as __namedExportsOrder,Ke as default};
