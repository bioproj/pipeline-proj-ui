import{g as d}from"./business.110aea5d.js";import{M as n}from"./button.3c55f7a0.js";import{M as r}from"./index.5c77b14b.js";import{j as e,b as s,as as l,O as p,at as o}from"./vendor.13398e09.js";import"./index.3f552456.js";import"./index.e745471f.js";import"./index.fab6a047.js";import"./index.f1b593e0.js";import"./index.df92681f.js";import"./index.a9cf19b2.js";import"./index.03f3394d.js";const{Item:a}=r.MySearch,b=[{title:"Tab-1",key:1},{title:"Tab-2",key:2},{title:"Tab-3",key:3}],N=[{label:"Options-1",value:1},{label:"Options-2",value:2},{label:"Options-3",value:3}],f=[{label:"Tab-1",value:1},{label:"Tab-2",value:2}],y=[{title:"Name",children:[{title:"First Name",dataIndex:"firstName",key:"firstName"},{title:"Last Name",dataIndex:"lastName",key:"lastName"}]},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",dataIndex:"tags",key:"tags",render:(m,t)=>e(l,{children:t.tags.map(i=>e(p,{color:"blue",children:i},i))})},{title:"Action",key:"action",render:(m,t)=>s(o,{size:"middle",children:[s(n,{type:"text",children:["Invite ",t.lastName]}),e(n,{type:"text",children:"Delete"})]})}],v=()=>e(r,{pageApi:d,radioCardsData:N,asideData:b,tabsData:f,asideKey:"key",searchRender:s(l,{children:[e(a,{label:"FirstName",name:"firstName",type:"input"}),e(a,{label:"FirstName",name:"firstName1",type:"input"}),e(a,{label:"FirstName",name:"firstName2",type:"input"}),e(a,{label:"FirstName",name:"firstName3",type:"input"}),e(a,{label:"FirstName",name:"firstName4",type:"input"}),e(a,{label:"FirstName",name:"firstName5",type:"input"}),e(a,{label:"FirstName",name:"firstName6",type:"input"}),e(a,{label:"FirstName",name:"firstName7",type:"input"}),e(a,{label:"FirstName",name:"firstName8",type:"input"}),e(a,{label:"FirstName",name:"firstName9",type:"input"}),e(a,{label:"FirstName",name:"firstName10",type:"input"})]}),tableOptions:y});export{v as default};