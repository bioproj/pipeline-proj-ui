var D=Object.defineProperty,w=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var H=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&H(e,n,t[n]);if(u)for(var n of u(t))M.call(t,n)&&H(e,n,t[n]);return e},f=(e,t)=>w(e,I(t));var m=(e,t)=>{var n={};for(var a in e)b.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&u)for(var a of u(e))t.indexOf(a)<0&&M.call(e,a)&&(n[a]=e[a]);return n};import{au as E,av as y,d as g,j as C}from"./vendor.13398e09.js";var c={};Object.defineProperty(c,"__esModule",{value:!0});c.getColumnsKey=A;var K=c.getPathValue=z;c.validateValue=T;var k="RC_TABLE_KEY";function P(e){return e==null?[]:Array.isArray(e)?e:[e]}function z(e,t){if(!t&&typeof t!="number")return e;for(var n=P(t),a=e,o=0;o<n.length;o+=1){if(!a)return null;var i=n[o];a=a[i]}return a}function A(e){var t=[],n={};return e.forEach(function(a){for(var o=a||{},i=o.key,l=o.dataIndex,r=i||P(l).join("-")||k;n[r];)r="".concat(r,"_next");n[r]=!0,t.push(r)}),t}function T(e){return e!=null}const V={hour:"YYYY-MM-DD HH",minute:"YYYY-MM-DD HH:mm",second:"YYYY-MM-DD HH:mm:ss"},F={year:"YYYY",month:"YYYY-MM",day:"YYYY-MM-DD"},S={hour:"HH",minute:"HH:mm",second:"HH:mm:ss"},L=e=>{var p;const h=e,{options:t,date:n,time:a,datetime:o,render:i}=h,l=m(h,["options","date","time","datetime","render"]),r=(s,_)=>{if(!s)return"-";if("datetime"in e)return g(s,V[typeof o=="string"?o:"second"]);if("date"in e)return g(s,F[typeof n=="string"?n:"day"]);if("time"in e)return g(s,S[typeof a=="string"?a:"second"]);const x=e.dataIndex;if(x&&t){const v=t.find(j=>j.value===K(_,x));if(v)return v.label||"-"}};return E(y.Column,f(d({},l),{key:(p=e.dataIndex)==null?void 0:p.toString(),render:i||r}))},Y=e=>{const l=e,{height:t,pagination:n}=l,a=m(l,["height","pagination"]),i=typeof n=="object"?d(d({},{size:"default",showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100","200"],defaultPageSize:20}),n):{};return C("div",{style:{height:t},css:R,children:C(y,f(d({},a),{scroll:{x:"max-content",y:"100%"},pagination:i}))})};Y.defaultProps={size:"small",height:"auto"};Y.Column=L;Y.ColumnGroup=y.ColumnGroup;const R={name:"rgdpp",styles:"display:flex;flex-direction:column;overflow:hidden;.ant-table-wrapper,.ant-spin-nested-loading,.ant-spin-container,.ant-table-container{height:100%;}.ant-spin-container{overflow:hidden;display:flex;flex-direction:column;.ant-table{flex:1;overflow:hidden;border-bottom:1px solid #eee;.ant-table-container{display:flex;flex-direction:column;.ant-table-body{flex:1;table{height:100%;}}}}.ant-pagination{padding:0 10px;}}"};export{Y as M};
