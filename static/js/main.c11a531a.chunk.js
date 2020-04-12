(this.webpackJsonpleagueofatches=this.webpackJsonpleagueofatches||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),c=t(7),s=t.n(c),n=(t(16),t(5)),m=t(8),o=t(9),i=t(10),u=t(1),p=t(3),d=t.n(p),v=(t(17),function(){var e=Object(l.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],s=Object(l.useState)([[],[]]),p=Object(u.a)(s,2),v=p[0],g=p[1],E=Object(l.useState)([]),b=Object(u.a)(E,2),f=b[0],N=b[1],k=Object(l.useState)([]),h=Object(u.a)(k,2),L=h[0],j=h[1];Object(l.useEffect)((function(){d.a.ajax({method:"GET",url:"https://ddragon.leagueoflegends.com/api/versions.json"}).then((function(e){Promise.all(Object(i.a)(Array(6).keys()).map((function(a){return d.a.ajax({method:"GET",url:"https://ddragon.leagueoflegends.com/cdn/"+e[a]+"/data/en_US/championFull.json"})}))).then((function(e){var a=e.map((function(e){return Object.values(e.data)}));g(a),c(a[0])}))}))}),[]),Object(l.useEffect)((function(){return w()}),[v]),Object(l.useEffect)((function(){j(f.filter((function(e){return Object.values(e[1]).some((function(e){return e}))})))}),[f]);var w=function(){var e={};v[0].forEach((function(a){e[a.name]||(e[a.name]=a.stats)}));var a={};v[1].forEach((function(e){a[e.name]||(a[e.name]=e.stats)}));var t={},l=["hp","hpperlevel","mp","mpperlevel","movespeed","armor","armorperlevel","spellblock","spellblockperlevel","attackrange","hpregen","hpregenperlevel","mpregen","mpregenperlevel","crit","critperlevel","attackdamage","attackdamageperlevel","attackspeedperlevel","attackspeed"];if(e!==a)for(var r=0,c=Object.entries(e);r<c.length;r++)for(var s=Object(u.a)(c[r],2),i=s[0],p=s[1],d=0,g=Object.entries(a);d<g.length;d++){var E,b=Object(u.a)(g[d],2),f=b[0],k=b[1],h=Object(o.a)(l);try{for(h.s();!(E=h.n()).done;){var L=E.value;i===f&&p[L]!==k[L]&&(t[i]=Object(m.a)({},t[i],Object(n.a)({},L,p[L]-k[L])))}}catch(j){h.e(j)}finally{h.f()}}N(Object.entries(t))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-dark mb-3 navNeu"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"League of Patches")),r.a.createElement("div",{className:"container m-auto"},r.a.createElement("div",{className:"input-group mb-3 neu"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search A Champion","aria-label":"Example text with button addon","aria-describedby":"button-addon1",onChange:function(e){var a=e.target.value;return c(v[0].filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})))}})),r.a.createElement("div",{className:"row m-auto"},t&&t.map((function(e){return r.a.createElement("div",{className:"card col-md-6 col-sm-12 background",key:e.key},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/"+e.key+".png",className:"card-img radius m-auto",alt:e.name})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"card-title"},e.name),r.a.createElement("h5",{className:"card-subtitle mb-2 text-muted"},e.title),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"",value:e.tags.join(" ")},e.tags.join(", "))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"progress mb-1 col-md-12"},r.a.createElement("div",{className:"progress-bar bg-danger",style:{width:10*e.info.attack+"%"},role:"progressbar","aria-valuenow":e.info.attack,"aria-valuemin":"0","aria-valuemax":"10"},"Attack")),r.a.createElement("div",{className:"progress mb-1 col-md-12"},r.a.createElement("div",{className:"progress-bar bg-success",style:{width:10*e.info.defense+"%"},role:"progressbar","aria-valuenow":e.info.attack,"aria-valuemin":"0","aria-valuemax":"10"},"Defense")),r.a.createElement("div",{className:"progress mb-1 col-md-12"},r.a.createElement("div",{className:"progress-bar bg-primary",style:{width:10*e.info.magic+"%"},role:"progressbar","aria-valuenow":e.info.attack,"aria-valuemin":"0","aria-valuemax":"10"},"Magic")),r.a.createElement("div",{className:"progress mb-1 col-md-12"},r.a.createElement("div",{className:"progress-bar bg-secondary",style:{width:10*e.info.difficulty+"%"},role:"progressbar","aria-valuenow":e.info.attack,"aria-valuemin":"0","aria-valuemax":"10"},"Difficulty")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("p",{className:"card-text"},e.blurb)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container col-md-5"}),r.a.createElement("div",{className:"col-md-5 mb-3"},r.a.createElement("button",{className:"btn btn-lg btn-block button-neu",onClick:function(){return d()("#"+e.key).hasClass("hidden")?d()("#"+e.key).removeClass("hidden"):d()("#"+e.key).addClass("hidden")}},"Stats")),r.a.createElement("div",{className:"col-md-12 hidden",id:e.key},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("ul",{className:"list-group "},r.a.createElement("li",{className:"list-group-item neuLess"},"HP: ".concat(e.stats.hp)),r.a.createElement("li",{className:"list-group-item neuLess"},"HP/Level: ".concat(e.stats.hpperlevel)),r.a.createElement("li",{className:"list-group-item neuLess"},"MP: ".concat(e.stats.mp)),r.a.createElement("li",{className:"list-group-item neuLess"},"MP/Level: ".concat(e.stats.mpperlevel)),r.a.createElement("li",{className:"list-group-item neuLess"},"MP Regen: ".concat(e.stats.mpregen)),r.a.createElement("li",{className:"list-group-item neuLess"},"MP Regen/Level: ".concat(e.stats.mpregenperlevel)),r.a.createElement("li",{className:"list-group-item neuLess"},"Armor: ".concat(e.stats.armor)),r.a.createElement("li",{className:"list-group-item neuLess"},"Armor/Level: ".concat(e.stats.armorperlevel)),r.a.createElement("li",{className:"list-group-item neuLess"},"MR: ".concat(e.stats.spellblock)))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("ul",{className:"list-group "},r.a.createElement("li",{className:"list-group-item neuLess"},"MR/Level: ".concat(e.stats.spellblockperlevel)),r.a.createElement("li",{className:"list-group-item neuLess"},"MS: ".concat(e.stats.movespeed)),r.a.createElement("li",{className:"list-group-item neuLess"},"Attack Range: ".concat(e.stats.attackrange)),r.a.createElement("li",{className:"list-group-item neuLess"},"Crit: ".concat(e.stats.crit)),r.a.createElement("li",{className:"list-group-item neuLess"},"Crit/Level: ".concat(e.stats.critperlevel)),r.a.createElement("li",{className:"list-group-item neuLess"},"AD: ".concat(e.stats.attackdamage)),r.a.createElement("li",{className:"list-group-item neuLess"},"AD/Level: ".concat(e.stats.attackdamageperlevel)),r.a.createElement("li",{className:"list-group-item neuLess"},"AS: ".concat(e.stats.attackspeed)),r.a.createElement("li",{className:"list-group-item neuLess"},"AS/Level: ".concat(e.stats.attackspeedperlevel)))))))),L&&L.map((function(a){return e.name===a[0]?r.a.createElement("div",{className:"row",key:a[0]},r.a.createElement("h3",null,"Changes from previous patch"),r.a.createElement("div",{className:"col-md-12 alert-success"},r.a.createElement("ul",null,a[1].hp&&r.a.createElement("li",null,"HP: ",a[1].hp),a[1].hpperlevel&&r.a.createElement("li",null,"HP Per Level: ",a[1].hpperlevel),a[1].mp&&r.a.createElement("li",null,"MP: ",a[1].mp),a[1].mpperlevel&&r.a.createElement("li",null,"MP Per Level: ",a[1].mpperlevel),a[1].mpregen&&r.a.createElement("li",null,"MP Regen: ",a[1].mpregen),a[1].mpregenperlevel&&r.a.createElement("li",null,"MP Regen Per Level: ",a[1].mpregenperlevel),a[1].armor&&r.a.createElement("li",null,"Armor: ",a[1].armor),a[1].armorperlevel&&r.a.createElement("li",null,"Armor Per Level: ",a[1].armorperlevel),a[1].spellblock&&r.a.createElement("li",null,"Spell Block: ",a[1].spellblock),a[1].spellblockperlevel&&r.a.createElement("li",null,"Spell Block Per Level: ",a[1].spellblockperlevel),a[1].movespeed&&r.a.createElement("li",null,"Move Speed: ",a[1].movespeed),a[1].attackrange&&r.a.createElement("li",null,"Attack Range ",a[1].attackrange),a[1].attackdamage&&r.a.createElement("li",null,"Attack Damage: ",a[1].attackdamage),a[1].attackdamageperlevel&&r.a.createElement("li",null,"Attack Damage Per Level: ",a[1].attackdamageperlevel),a[1].attackspeed&&r.a.createElement("li",null,"Attack Speed: ",a[1].attackspeed),a[1].attackspeedperlevel&&r.a.createElement("li",null,"Attack Speed Per Level: ",a[1].attackspeedperlevel)))):null})))))})))))});t(18);var g=function(){return r.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.c11a531a.chunk.js.map