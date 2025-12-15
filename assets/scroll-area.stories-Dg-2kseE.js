import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-DPkNXRqw.js";import{S as s,a as g}from"./scroll-area-Dgmq87Rd.js";import{S as f}from"./separator-7reEwx-p.js";import"./index-CED2zaSr.js";import"./index-GGmavLq4.js";import"./index-D7jKx_fa.js";import"./index-CVJC_e1g.js";import"./index-CNmy0mc9.js";import"./index-CGny4Gu2.js";import"./index-3PNdDA9F.js";import"./index-BFJ-Qg5v.js";import"./index-BwCODQwj.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./utils-D-KgF5mV.js";import"./index-CGrAONsN.js";const V={title:"Components/ScrollArea",tags:["autodocs"],component:s,argTypes:{variant:{control:{type:"select"},options:["default"]},horizontal:{control:{type:"select"},options:["top","bottom"]},vertical:{control:{type:"select"},options:["left","right"]}}},x=Array.from({length:50}).map((t,a,p)=>`v1.2.0-beta.${p.length-a}`),e={args:{},render:t=>r.jsx(s,{variant:t.variant,horizontal:t.horizontal,vertical:t.vertical,className:"h-72 w-48 rounded-md border",children:r.jsxs("div",{className:"p-4",children:[r.jsx("h4",{className:"mb-4 text-sm leading-none font-medium",children:"Tags"}),x.map(a=>r.jsxs(h.Fragment,{children:[r.jsx("div",{className:"text-sm",children:a}),r.jsx(f,{className:"my-2"})]},a))]})})},v=[{artist:"Ornella Binni",art:"https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"},{artist:"Tom Byrom",art:"https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"},{artist:"Vladimir Malyavko",art:"https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"}],o={render:t=>r.jsxs(s,{variant:t.variant,horizontal:t.horizontal,vertical:t.vertical,className:"w-96 rounded-md border whitespace-nowrap",children:[r.jsx("div",{className:"flex w-max space-x-4 p-4",children:v.map(a=>r.jsxs("figure",{className:"shrink-0",children:[r.jsx("div",{className:"overflow-hidden rounded-md",children:r.jsx("img",{src:a.art,alt:`Photo by ${a.artist}`,className:"aspect-[3/4] h-fit w-fit object-cover",width:300,height:400})}),r.jsxs("figcaption",{className:"text-muted-foreground pt-2 text-xs",children:["Photo by"," ",r.jsx("span",{className:"text-foreground font-semibold",children:a.artist})]})]},a.artist))}),r.jsx(g,{orientation:"horizontal"})]})};var i,n,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: args => <ScrollArea variant={args.variant} horizontal={args.horizontal} vertical={args.vertical} className="h-72 w-48 rounded-md border">\r
            <div className="p-4">\r
                <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>\r
                {tags.map(tag => <React.Fragment key={tag}>\r
                        <div className="text-sm">{tag}</div>\r
                        <Separator className="my-2" />\r
                    </React.Fragment>)}\r
            </div>\r
        </ScrollArea>
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <ScrollArea variant={args.variant} horizontal={args.horizontal} vertical={args.vertical} className="w-96 rounded-md border whitespace-nowrap">\r
            <div className="flex w-max space-x-4 p-4">\r
                {works.map(artwork => <figure key={artwork.artist} className="shrink-0">\r
                        <div className="overflow-hidden rounded-md">\r
                            <img src={artwork.art} alt={\`Photo by \${artwork.artist}\`} className="aspect-[3/4] h-fit w-fit object-cover" width={300} height={400} />\r
                        </div>\r
                        <figcaption className="text-muted-foreground pt-2 text-xs">\r
                            Photo by{" "}\r
                            <span className="text-foreground font-semibold">\r
                                {artwork.artist}\r
                            </span>\r
                        </figcaption>\r
                    </figure>)}\r
            </div>\r
            <ScrollBar orientation="horizontal" />\r
        </ScrollArea>
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const _=["Vertical","Horizontal"];export{o as Horizontal,e as Vertical,_ as __namedExportsOrder,V as default};
