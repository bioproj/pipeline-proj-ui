var g=Object.defineProperty,j=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var c=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&c(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&c(e,t,r[t]);return e},x=(e,r)=>j(e,v(r));var h=(e,r)=>{var t={};for(var s in e)d.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&a)for(var s of a(e))r.indexOf(s)<0&&l.call(e,s)&&(t[s]=e[s]);return t};import{b as i,j as n,aw as m,ax as y}from"./vendor.13398e09.js";const w=e=>{const o=e,{options:r,header:t,footer:s}=o,f=h(o,["options","header","footer"]);return i("div",{css:b,className:"bg-2",children:[t&&i("div",{className:"header",children:[t,n(m,{})]}),n(y,x(p({},f),{treeData:r,blockNode:!0})),s&&i("div",{className:"footer",children:[n(m,{}),s]})]})},b={name:"qbrjnk",styles:"padding:8px;margin-right:8px;width:200px;height:100%;display:flex;flex-direction:column;.header,.footer{display:flex;flex-direction:column;align-items:center;}.ant-tree{margin-top:12px;flex:1;.ant-tree-node-content-wrapper{line-height:28px;}}"};export{w as M};
