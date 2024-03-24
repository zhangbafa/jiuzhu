function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{h as p,u as d,Y as _,c as r,m as a,a as i,t,F as u,G as m,o}from"./chunks/framework.NckHi4gG.js";const h={id:"params-pkg",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#params-pkg","aria-label":'Permalink to "{{$params.pkg}}"'},"​",-1),f=a("blockquote",null,[a("p",null,"前往救助站前，务必打电话确认")],-1),g={class:"custom-block-title"},x=JSON.parse('{"title":"救助站","description":"","frontmatter":{"title":"救助站"},"headers":[],"params":{"pkg":"安徽"},"relativePath":"area/安徽.md","filePath":"area/安徽.md"}'),v={name:"area/安徽.md"},B=Object.assign(v,{setup(b){const l=p([]),{params:n}=d();return n.value.pkg,_(()=>import("./chunks/北京.D9FskgwF.js"),__vite__mapDeps([])).then(e=>{console.log(e.default),l.value=e.default}).catch(e=>{}),(e,P)=>(o(),r("div",null,[a("h1",h,[i(t(e.$params.pkg)+" ",1),k]),f,(o(!0),r(u,null,m(l.value,(s,c)=>(o(),r("div",{class:"info custom-block",key:c},[a("p",g,t(s.name),1),a("p",null,t(s.phone),1),a("p",null,t(s.address),1)]))),128))]))}});export{x as __pageData,B as default};
