(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[20],{6163:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(32),l=a(172),c=a(6020),o=a(40),i=a(5960),m=a(18),s=a(57),u=a(5993),h=a(5995),b=a(87),p=a(6183),E=a(6172),f=a(90),w=a(6056),d=a(6166),g=a(6168),k=a(6018),v=a(6170),S=a(6171),N=a(6184),j=a(6167),O=a(35),z=a(0),y=a.n(z),_=a(5990),A=a(6169),C=a(36),P=Object(l.a)((function(e){return{alert:{margin:e.spacing(2,0)},"contact-link":{margin:e.spacing(0,.5)},"game-news-title":{paddingTop:e.spacing(2)}}}));function B(e){switch(e.webp+e.webpLossless+e.webpAlpha){case-3:return"info";case 0:return"error";case 3:return"success";default:return"warning"}}function W(e,t){switch(t){case-1:return e("common:detect.checking");case 0:return e("common:detect.unsupported");case 1:return e("common:detect.supported");default:return""}}var x=Object(l.a)((function(e){var t;return{iframe:(t={},Object(r.a)(t,e.breakpoints.down("sm"),{width:"300px",height:"480px"}),Object(r.a)(t,e.breakpoints.up("md"),{width:"600px",height:"480px"}),t)}}));function L(e){var t=x();return y.a.createElement(c.a,{open:e.open,onClose:e.onClose},y.a.createElement(o.a,null,e.title),y.a.createElement("iframe",{className:t.iframe,title:e.title,src:e.url}))}function M(e){return y.a.createElement(i.a,{color:"primary",onClick:e.onClick},y.a.createElement(d.a,null))}t.default=function(){var e=Object(m.a)(),t=P(),a=Object(f.a)(),r=Object(_.a)().t,l=Object(C.c)("userInformations"),c=Object(n.a)(l,1)[0],x=Object(z.useState)("information"),D=Object(n.a)(x,2),V=D[0],F=D[1],I=Object(z.useState)(!1),J=Object(n.a)(I,2),K=J[0],R=J[1],T=Object(z.useState)(),G=Object(n.a)(T,2),U=G[0],q=G[1];Object(z.useEffect)((function(){document.title=r("common:home")+" | Sekai Viewer"}),[r]);var H=Object(z.useState)({webp:-1,webpLossless:-1,webpAlpha:-1}),Q=Object(n.a)(H,2),X=Q[0],Y=Q[1];Object(z.useEffect)((function(){Y({webp:Number(Modernizr.webp),webpLossless:Number(Modernizr.webplossless),webpAlpha:Number(Modernizr.webpalpha)})}),[]);var Z=Object(s.a)(e.breakpoints.up("md")),$=[{field:"action",headerName:r("home:game-news.action"),width:80,renderCell:function(e){var t=e.data;return"internal"===t.browseType?y.a.createElement(M,{onClick:function(){q(t),R(!0)}}):y.a.createElement(u.a,{target:"_blank",href:t.path},y.a.createElement(i.a,{color:"primary"},y.a.createElement(d.a,null)))},sortable:!1},{field:"startAt",headerName:r("home:game-news.show-from"),width:180,valueFormatter:function(e){return new Date(e.getValue("startAt")).toLocaleString()},sortDirection:"desc"},{field:"title",headerName:r("home:game-news.title-column"),width:Z?400:150,sortable:!1},{field:"endAt",headerName:r("home:game-news.show-until"),width:180,valueFormatter:function(e){return new Date(e.getValue("startAt")).toLocaleString()}}];return y.a.createElement(z.Fragment,null,y.a.createElement(o.a,{variant:"h6",className:a.header},r("common:home")),y.a.createElement(h.a,{className:a.content,maxWidth:"md"},y.a.createElement(N.a,{className:t.alert,severity:"info"},r("home:alert0")),y.a.createElement(N.a,{className:t.alert,severity:"info"},y.a.createElement(j.a,null,r("home:alert_contributor.title")),y.a.createElement("ul",null,y.a.createElement("li",null,y.a.createElement(u.a,{href:"https://github.com/NonSpicyBurrito",target:"_blank",rel:"noopener noreferrer"},y.a.createElement(g.a,{fontSize:"inherit"}),"Burrito")),y.a.createElement("li",null,y.a.createElement(u.a,{href:"https://github.com/iSwanGit",target:"_blank",rel:"noopener noreferrer"},y.a.createElement(g.a,{fontSize:"inherit"}),"iSwanGit (EleMas*)")),y.a.createElement("li",null,y.a.createElement(u.a,{href:"https://github.com/Build774",target:"_blank",rel:"noopener noreferrer"},y.a.createElement(g.a,{fontSize:"inherit"}),"Build774")))),y.a.createElement(N.a,{className:t.alert,severity:"info"},y.a.createElement(j.a,null,r("home:alert_translate.title")),y.a.createElement("ul",null,y.a.createElement("li",null,"\u7b80\uff1aStargazing Koishi"),y.a.createElement("li",null,"\u7e41\uff1aNatsuzawa, ch ko"),y.a.createElement("li",null,"\u65e5\uff1aPassion, Cee, k0tayan, Natsuzawa, Build774"),y.a.createElement("li",null,"\ud55c\uff1ahodubidu3095, omitooshi, EleMas39, PJSEKAI"),y.a.createElement("li",null,"Pt-BR: mid"),y.a.createElement("li",null,"\u0440\u0443\u0441\u0441\u043a\u0438\u0439: Spyrohat")),y.a.createElement(A.a,{i18nKey:"home:alert_settings",components:{s:y.a.createElement(k.a,{fontSize:"inherit"})}})),y.a.createElement(N.a,{className:t.alert,severity:"warning"},y.a.createElement(j.a,null,r("home:alert1.title")),y.a.createElement(u.a,{href:"https://www.transifex.com/dnaroma/sekai-viewer",target:"_blank"},y.a.createElement(v.a,{fontSize:"inherit"}),r("home:alert1.translation")),"\uff08English\uff0c\u7b80\u4e2d\uff0c\u7e41\u4e2d\uff0c\u65e5\u672c\u8a9e\uff0c\ud55c\uad6d\uc5b4\uff0cDeutsch, Espa\xf1ol, others upon request\uff09",y.a.createElement("br",null),y.a.createElement(u.a,{href:"https://github.com/Sekai-World/sekai-viewer",target:"_blank"},y.a.createElement(g.a,{fontSize:"inherit"}),r("home:alert1.development")),"\uff08Sekai-World/sekai-viewer\uff09",y.a.createElement("br",null),r("home:alert1.contact"),":",y.a.createElement(u.a,{href:"https://www.twitter.com/miku_zura",target:"_blank",className:t["contact-link"]},y.a.createElement(S.a,{fontSize:"inherit"}),"@miku_zura"),y.a.createElement(u.a,{href:"#",className:t["contact-link"]},y.a.createElement(O.e,{fontSize:"inherit"}),"DNARoma#0646"),y.a.createElement("br",null),r("home:alert1.join-discord"),y.a.createElement(u.a,{href:"https://discord.gg/xcDBRMd",target:"_blank",className:t["contact-link"]},y.a.createElement(O.e,{fontSize:"inherit"}),"Sekai Viewer")),y.a.createElement(N.a,{className:t.alert,severity:B(X)},y.a.createElement(j.a,null,"WebP ",r("common:support")),y.a.createElement("ul",null,y.a.createElement("li",null,"WebP: ",W(r,X.webp)),y.a.createElement("li",null,"WebP Lossless: ",W(r,X.webpLossless)),y.a.createElement("li",null,"WebP Alpha: ",W(r,X.webpAlpha))),"success"===B(X)?y.a.createElement(o.a,null,r("home:detect.success")):y.a.createElement(o.a,null,"Unfortunately you will not able to load images normally. Please consider update your browser version or use a modern browser. More info:",y.a.createElement(u.a,{href:"https://caniuse.com/webp"},"Can I Use - WebP image format"))),y.a.createElement(b.a,null,y.a.createElement(o.a,{variant:"h6",align:"center",className:t["game-news-title"]},r("home:game-news.title")),y.a.createElement(p.a,{value:V,onChange:function(e,t){return F(t)},variant:"scrollable",scrollButtons:"desktop"},y.a.createElement(E.a,{label:r("common:information"),value:"information"}),y.a.createElement(E.a,{label:r("common:event"),value:"event"}),y.a.createElement(E.a,{label:r("common:gacha"),value:"gacha"}),y.a.createElement(E.a,{label:r("common:music"),value:"music"}),y.a.createElement(E.a,{label:r("common:campaign"),value:"campaign"}),y.a.createElement(E.a,{label:r("common:bug"),value:"bug"}),y.a.createElement(E.a,{label:r("common:update"),value:"update"})),y.a.createElement("div",{style:{height:650}},y.a.createElement(w.a,{pagination:!0,autoPageSize:!0,rows:c.filter((function(e){return e.informationTag===V})),columns:$})))),U?y.a.createElement(L,{url:"https://production-web.sekai.colorfulpalette.org/".concat(U.path),open:K,onClose:function(){return R(!1)},title:U.title}):null)}}}]);
//# sourceMappingURL=20.35c977df.chunk.js.map