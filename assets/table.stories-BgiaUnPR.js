import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-BqZCuoWB.js";import{c as d}from"./utils-D-KgF5mV.js";function b({className:n,...s}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:e.jsx("table",{"data-slot":"table",className:d("w-full caption-bottom text-sm",n),...s})})}function c({className:n,...s}){return e.jsx("thead",{"data-slot":"table-header",className:d("[&_tr]:border-b",n),...s})}function T({className:n,...s}){return e.jsx("tbody",{"data-slot":"table-body",className:d("[&_tr:last-child]:border-0",n),...s})}function I({className:n,...s}){return e.jsx("tfoot",{"data-slot":"table-footer",className:d("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",n),...s})}function r({className:n,...s}){return e.jsx("tr",{"data-slot":"table-row",className:d("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",n),...s})}function a({className:n,...s}){return e.jsx("th",{"data-slot":"table-head",className:d("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",n),...s})}function l({className:n,...s}){return e.jsx("td",{"data-slot":"table-cell",className:d("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",n),...s})}function o({className:n,...s}){return e.jsx("caption",{"data-slot":"table-caption",className:d("text-muted-foreground mt-4 text-sm",n),...s})}b.__docgenInfo={description:"",methods:[],displayName:"Table"};c.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};T.__docgenInfo={description:"",methods:[],displayName:"TableBody"};I.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};a.__docgenInfo={description:"",methods:[],displayName:"TableHead"};r.__docgenInfo={description:"",methods:[],displayName:"TableRow"};l.__docgenInfo={description:"",methods:[],displayName:"TableCell"};o.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const v={title:"Components/Table",component:b,argTypes:{}},t={render:()=>e.jsxs(b,{children:[e.jsx(o,{children:"基础表格示例"}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(a,{children:"姓名"}),e.jsx(a,{children:"邮箱"}),e.jsx(a,{children:"角色"}),e.jsx(a,{children:"状态"})]})}),e.jsxs(T,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"张三"}),e.jsx(l,{children:"zhangsan@example.com"}),e.jsx(l,{children:"管理员"}),e.jsx(l,{children:"活跃"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"李四"}),e.jsx(l,{children:"lisi@example.com"}),e.jsx(l,{children:"用户"}),e.jsx(l,{children:"活跃"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"王五"}),e.jsx(l,{children:"wangwu@example.com"}),e.jsx(l,{children:"编辑"}),e.jsx(l,{children:"非活跃"})]})]})]})},i={render:()=>e.jsxs(b,{children:[e.jsx(o,{children:"带页脚的表格示例"}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(a,{children:"产品"}),e.jsx(a,{children:"价格"}),e.jsx(a,{children:"库存"}),e.jsx(a,{children:"总价值"})]})}),e.jsxs(T,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"笔记本电脑"}),e.jsx(l,{children:"¥8,999"}),e.jsx(l,{children:"15"}),e.jsx(l,{children:"¥134,985"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"智能手机"}),e.jsx(l,{children:"¥3,299"}),e.jsx(l,{children:"32"}),e.jsx(l,{children:"¥105,568"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"无线耳机"}),e.jsx(l,{children:"¥899"}),e.jsx(l,{children:"45"}),e.jsx(l,{children:"¥40,455"})]})]}),e.jsx(I,{children:e.jsxs(r,{children:[e.jsx(l,{colSpan:2,children:"总计"}),e.jsx(l,{children:"92"}),e.jsx(l,{children:"¥281,008"})]})})]})},x={render:()=>e.jsxs(b,{className:"text-xs",children:[e.jsx(o,{children:"紧凑型表格示例"}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(a,{className:"w-[100px]",children:"ID"}),e.jsx(a,{children:"任务"}),e.jsx(a,{children:"负责人"}),e.jsx(a,{children:"截止日期"}),e.jsx(a,{children:"状态"})]})}),e.jsxs(T,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"#001"}),e.jsx(l,{children:"设计系统更新"}),e.jsx(l,{children:"张三"}),e.jsx(l,{children:"2024-01-15"}),e.jsx(l,{children:"进行中"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"#002"}),e.jsx(l,{children:"用户界面优化"}),e.jsx(l,{children:"李四"}),e.jsx(l,{children:"2024-01-20"}),e.jsx(l,{children:"待开始"})]}),e.jsxs(r,{children:[e.jsx(l,{children:"#003"}),e.jsx(l,{children:"性能测试"}),e.jsx(l,{children:"王五"}),e.jsx(l,{children:"2024-01-18"}),e.jsx(l,{children:"已完成"})]})]})]})},h={render:()=>e.jsxs(b,{children:[e.jsx(o,{children:"可选择行的表格示例"}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(a,{className:"w-[50px]",children:e.jsx("input",{type:"checkbox"})}),e.jsx(a,{children:"文件名"}),e.jsx(a,{children:"大小"}),e.jsx(a,{children:"修改日期"}),e.jsx(a,{children:"类型"})]})}),e.jsxs(T,{children:[e.jsxs(r,{"data-state":"selected",children:[e.jsx(l,{children:e.jsx("input",{type:"checkbox",defaultChecked:!0})}),e.jsx(l,{children:"document.pdf"}),e.jsx(l,{children:"2.5 MB"}),e.jsx(l,{children:"2024-01-10"}),e.jsx(l,{children:"PDF"})]}),e.jsxs(r,{children:[e.jsx(l,{children:e.jsx("input",{type:"checkbox"})}),e.jsx(l,{children:"image.jpg"}),e.jsx(l,{children:"1.8 MB"}),e.jsx(l,{children:"2024-01-12"}),e.jsx(l,{children:"图片"})]}),e.jsxs(r,{children:[e.jsx(l,{children:e.jsx("input",{type:"checkbox"})}),e.jsx(l,{children:"data.xlsx"}),e.jsx(l,{children:"856 KB"}),e.jsx(l,{children:"2024-01-14"}),e.jsx(l,{children:"Excel"})]})]})]})},j={render:()=>e.jsxs(b,{children:[e.jsx(o,{children:"空状态表格示例"}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(a,{children:"订单号"}),e.jsx(a,{children:"客户"}),e.jsx(a,{children:"金额"}),e.jsx(a,{children:"状态"})]})}),e.jsx(T,{children:e.jsx(r,{children:e.jsx(l,{colSpan:4,className:"text-center py-8 text-muted-foreground",children:"暂无数据"})})})]})};var C,p,m;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Table>\r
      <TableCaption>基础表格示例</TableCaption>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead>姓名</TableHead>\r
          <TableHead>邮箱</TableHead>\r
          <TableHead>角色</TableHead>\r
          <TableHead>状态</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        <TableRow>\r
          <TableCell>张三</TableCell>\r
          <TableCell>zhangsan@example.com</TableCell>\r
          <TableCell>管理员</TableCell>\r
          <TableCell>活跃</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>李四</TableCell>\r
          <TableCell>lisi@example.com</TableCell>\r
          <TableCell>用户</TableCell>\r
          <TableCell>活跃</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>王五</TableCell>\r
          <TableCell>wangwu@example.com</TableCell>\r
          <TableCell>编辑</TableCell>\r
          <TableCell>非活跃</TableCell>\r
        </TableRow>\r
      </TableBody>\r
    </Table>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,H,w;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Table>\r
      <TableCaption>带页脚的表格示例</TableCaption>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead>产品</TableHead>\r
          <TableHead>价格</TableHead>\r
          <TableHead>库存</TableHead>\r
          <TableHead>总价值</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        <TableRow>\r
          <TableCell>笔记本电脑</TableCell>\r
          <TableCell>¥8,999</TableCell>\r
          <TableCell>15</TableCell>\r
          <TableCell>¥134,985</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>智能手机</TableCell>\r
          <TableCell>¥3,299</TableCell>\r
          <TableCell>32</TableCell>\r
          <TableCell>¥105,568</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>无线耳机</TableCell>\r
          <TableCell>¥899</TableCell>\r
          <TableCell>45</TableCell>\r
          <TableCell>¥40,455</TableCell>\r
        </TableRow>\r
      </TableBody>\r
      <TableFooter>\r
        <TableRow>\r
          <TableCell colSpan={2}>总计</TableCell>\r
          <TableCell>92</TableCell>\r
          <TableCell>¥281,008</TableCell>\r
        </TableRow>\r
      </TableFooter>\r
    </Table>
}`,...(w=(H=i.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var R,f,y;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Table className="text-xs">\r
      <TableCaption>紧凑型表格示例</TableCaption>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead className="w-[100px]">ID</TableHead>\r
          <TableHead>任务</TableHead>\r
          <TableHead>负责人</TableHead>\r
          <TableHead>截止日期</TableHead>\r
          <TableHead>状态</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        <TableRow>\r
          <TableCell>#001</TableCell>\r
          <TableCell>设计系统更新</TableCell>\r
          <TableCell>张三</TableCell>\r
          <TableCell>2024-01-15</TableCell>\r
          <TableCell>进行中</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>#002</TableCell>\r
          <TableCell>用户界面优化</TableCell>\r
          <TableCell>李四</TableCell>\r
          <TableCell>2024-01-20</TableCell>\r
          <TableCell>待开始</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>#003</TableCell>\r
          <TableCell>性能测试</TableCell>\r
          <TableCell>王五</TableCell>\r
          <TableCell>2024-01-18</TableCell>\r
          <TableCell>已完成</TableCell>\r
        </TableRow>\r
      </TableBody>\r
    </Table>
}`,...(y=(f=x.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,N,_;h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Table>\r
      <TableCaption>可选择行的表格示例</TableCaption>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead className="w-[50px]">\r
            <input type="checkbox" />\r
          </TableHead>\r
          <TableHead>文件名</TableHead>\r
          <TableHead>大小</TableHead>\r
          <TableHead>修改日期</TableHead>\r
          <TableHead>类型</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        <TableRow data-state="selected">\r
          <TableCell>\r
            <input type="checkbox" defaultChecked />\r
          </TableCell>\r
          <TableCell>document.pdf</TableCell>\r
          <TableCell>2.5 MB</TableCell>\r
          <TableCell>2024-01-10</TableCell>\r
          <TableCell>PDF</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>\r
            <input type="checkbox" />\r
          </TableCell>\r
          <TableCell>image.jpg</TableCell>\r
          <TableCell>1.8 MB</TableCell>\r
          <TableCell>2024-01-12</TableCell>\r
          <TableCell>图片</TableCell>\r
        </TableRow>\r
        <TableRow>\r
          <TableCell>\r
            <input type="checkbox" />\r
          </TableCell>\r
          <TableCell>data.xlsx</TableCell>\r
          <TableCell>856 KB</TableCell>\r
          <TableCell>2024-01-14</TableCell>\r
          <TableCell>Excel</TableCell>\r
        </TableRow>\r
      </TableBody>\r
    </Table>
}`,...(_=(N=h.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var B,k,S;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Table>\r
      <TableCaption>空状态表格示例</TableCaption>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead>订单号</TableHead>\r
          <TableHead>客户</TableHead>\r
          <TableHead>金额</TableHead>\r
          <TableHead>状态</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        <TableRow>\r
          <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">\r
            暂无数据\r
          </TableCell>\r
        </TableRow>\r
      </TableBody>\r
    </Table>
}`,...(S=(k=j.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const M=["Default","WithFooter","Compact","Selectable","Empty"];export{x as Compact,t as Default,j as Empty,h as Selectable,i as WithFooter,M as __namedExportsOrder,v as default};
