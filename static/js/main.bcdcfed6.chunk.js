(this.webpackJsonpleagueofatches=this.webpackJsonpleagueofatches||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),c=t(7),n=t.n(c),s=(t(13),t(1)),m=t(5),p=t(2),o=t(3),i=t.n(o),v=function(){var e=Object(l.useState)([]),a=Object(p.a)(e,2),t=a[0],c=a[1],n=Object(l.useState)([]),o=Object(p.a)(n,2),v=o[0],d=o[1],g=Object(l.useState)([]),u=Object(p.a)(g,2),b=(u[0],u[1]),h=Object(l.useState)([]),k=Object(p.a)(h,2),E=(k[0],k[1]),f=Object(l.useState)([]),j=Object(p.a)(f,2),N=(j[0],j[1]),O=Object(l.useState)([]),w=Object(p.a)(O,2),S=(w[0],w[1]),y=Object(l.useState)([]),P=Object(p.a)(y,2),x=P[0],L=P[1],A=Object(l.useState)([]),M=Object(p.a)(A,2),R=M[0],G=M[1];Object(l.useEffect)((function(){i.a.ajax({method:"GET",url:"https://ddragon.leagueoflegends.com/api/versions.json"}).then((function(e){i.a.ajax({method:"GET",url:"https://ddragon.leagueoflegends.com/cdn/"+e[0]+"/data/en_US/champion.json"}).then((function(e){var a=e.data,t=[];for(var l in a)t.push(a[l]);c(t)})),i.a.ajax({method:"GET",url:"https://ddragon.leagueoflegends.com/cdn/"+e[1]+"/data/en_US/champion.json"}).then((function(e){var a=e.data,t=[];for(var l in a)t.push(a[l]);d(t)})),i.a.ajax({method:"GET",url:"https://ddragon.leagueoflegends.com/cdn/"+e[2]+"/data/en_US/champion.json"}).then((function(e){var a=e.data,t=[];for(var l in a)t.push(a[l]);b(t)})),i.a.ajax({method:"GET",url:"https://ddragon.leagueoflegends.com/cdn/"+e[3]+"/data/en_US/champion.json"}).then((function(e){var a=e.data,t=[];for(var l in a)t.push(a[l]);E(t)})),i.a.ajax({method:"GET",url:"https://ddragon.leagueoflegends.com/cdn/"+e[4]+"/data/en_US/champion.json"}).then((function(e){var a=e.data,t=[];for(var l in a)t.push(a[l]);N(t)})),i.a.ajax({method:"GET",url:"https://ddragon.leagueoflegends.com/cdn/"+e[5]+"/data/en_US/champion.json"}).then((function(e){var a=e.data,t=[];for(var l in a)t.push(a[l]);S(t)}))}))}),[]),Object(l.useEffect)((function(){return T()}),[v]),Object(l.useEffect)((function(){G(x.filter((function(e){return e[1].hp>0||e[1].hp<0||e[1].hpperlevel>0||e[1].hpperlevel<0||e[1].mp>0||e[1].mp<0||e[1].mpperlevel>0||e[1].mpperlevel<0||e[1].movespeed>0||e[1].movespeed<0||e[1].armor>0||e[1].armor<0||e[1].armorperlevel>0||e[1].armorperlevel<0||e[1].spellblock>0||e[1].spellblock<0||e[1].spellblockperlevel>0||e[1].spellblockperlevel<0||e[1].attackrange>0||e[1].attackrange<0||e[1].hpregen>0||e[1].hpregen<0||e[1].hpregenperlevel>0||e[1].hpregenperlevel<0||e[1].mpregen>0||e[1].mpregen<0||e[1].mpregenperlevel>0||e[1].mpregenperlevel<0||e[1].crit>0||e[1].crit<0||e[1].critperlevel>0||e[1].critperlevel<0||e[1].attackdamage>0||e[1].attackdamage<0||e[1].attackdamageperlevel>0||e[1].attackdamageperlevel<0||e[1].attackspeedperlevel>0||e[1].attackspeedperlevel<0||e[1].attackspeed>0||e[1].attackspeed<0})))}),[x]);var T=function(){var e={};t.map((function(a){e[a.name]||(e[a.name]=a.stats)}));var a={};v.map((function(e){a[e.name]||(a[e.name]=e.stats)}));var l=Object.entries(e),r=Object.entries(a),c={};if(e!==a){var n,o=Object(m.a)(l);try{for(o.s();!(n=o.n()).done;){var i,d=Object(p.a)(n.value,2),g=d[0],u=d[1],b=Object(m.a)(r);try{for(b.s();!(i=b.n()).done;){var h=Object(p.a)(i.value,2),k=h[0],E=h[1];g===k&&(c[g]||(c[g]={}),u.hp!==E.hp&&(c[g]=Object(s.a)({},c[g],{hp:u.hp-E.hp})),u.hpperlevel!==E.hpperlevel&&(c[g]=Object(s.a)({},c[g],{hpperlevel:u.hpperlevel-E.hpperlevel})),u.mp!==E.mp&&(c[g]=Object(s.a)({},c[g],{mp:u.mp-E.mp})),u.mpperlevel!==E.mpperlevel&&(c[g]=Object(s.a)({},c[g],{mpperlevel:u.mpperlevel-E.mpperlevel})),u.movespeed!==E.movespeed&&(c[g]=Object(s.a)({},c[g],{movespeed:u.movespeed-E.movespeed})),u.armor!==E.armor&&(c[g]=Object(s.a)({},c[g],{armor:u.armor-E.armor})),u.armorperlevel!==E.armorperlevel&&(c[g]=Object(s.a)({},c[g],{armorperlevel:u.armorperlevel-E.armorperlevel})),u.spellblock!==E.spellblock&&(c[g]=Object(s.a)({},c[g],{spellblock:u.spellblock-E.spellblock})),u.spellblockperlevel!==E.spellblockperlevel&&(c[g]=Object(s.a)({},c[g],{spellblockperlevel:u.spellblockperlevel-E.spellblockperlevel})),u.attackrange!==E.attackrange&&(c[g]=Object(s.a)({},c[g],{attackrange:u.attackrange-E.attackrange})),u.hpregen!==E.hpregen&&(c[g]=Object(s.a)({},c[g],{hpregen:u.hpregen-E.hpregen})),u.hpregenperlevel!==E.hpregenperlevel&&(c[g]=Object(s.a)({},c[g],{hpregenperlevel:u.hpregenperlevel-E.hpregenperlevel})),u.mpregen!==E.mpregen&&(c[g]=Object(s.a)({},c[g],{mpregen:u.mpregen-E.mpregen})),u.mpregenperlevel!==E.mpregenperlevel&&(c[g]=Object(s.a)({},c[g],{mpregenperlevel:u.mpregenperlevel-E.mpregenperlevel})),u.crit!==E.crit&&(c[g]=Object(s.a)({},c[g],{crit:u.crit-E.crit})),u.critperlevel!==E.critperlevel&&(c[g]=Object(s.a)({},c[g],{critperlevel:u.critperlevel-E.critperlevel})),u.attackdamage!==E.attackdamage&&(c[g]=Object(s.a)({},c[g],{attackdamage:u.attackdamage-E.attackdamage})),u.attackdamageperlevel!==E.attackdamageperlevel&&(c[g]=Object(s.a)({},c[g],{attackdamageperlevel:u.attackdamageperlevel-E.attackdamageperlevel})),u.attackspeedperlevel!==E.attackspeedperlevel&&(c[g]=Object(s.a)({},c[g],{attackspeedperlevel:u.attackspeedperlevel-E.attackspeedperlevel})),u.attackspeed!==E.attackspeed&&(c[g]=Object(s.a)({},c[g],{attackspeed:u.attackspeed-E.attackspeed})))}}catch(j){b.e(j)}finally{b.f()}}}catch(j){o.e(j)}finally{o.f()}}var f=Object.entries(c);L(f)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-dark bg-primary mb-3"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"League of Patches")),t&&t.map((function(e){return r.a.createElement("div",{className:"row",key:e.key},r.a.createElement("div",{className:"col-md-1"}),r.a.createElement("div",{className:"card mb-3 col-md-10"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("img",{src:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/"+e.key+".png",className:"card-img",alt:e.name})),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},e.name),r.a.createElement("h5",{className:"card-subtitle mb-2 text-muted"},e.title),r.a.createElement("p",{className:"card-text"},e.blurb),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"progress mb-1 col-md-12"},r.a.createElement("div",{className:"progress-bar bg-danger",style:{width:10*e.info.attack+"%"},role:"progressbar","aria-valuenow":e.info.attack,"aria-valuemin":"0","aria-valuemax":"10"},"Attack")),r.a.createElement("div",{className:"progress mb-1 col-md-12"},r.a.createElement("div",{className:"progress-bar bg-success",style:{width:10*e.info.defense+"%"},role:"progressbar","aria-valuenow":e.info.attack,"aria-valuemin":"0","aria-valuemax":"10"},"Defense")),r.a.createElement("div",{className:"progress mb-1 col-md-12"},r.a.createElement("div",{className:"progress-bar bg-primary",style:{width:10*e.info.magic+"%"},role:"progressbar","aria-valuenow":e.info.attack,"aria-valuemin":"0","aria-valuemax":"10"},"Magic")),r.a.createElement("div",{className:"progress mb-1 col-md-12"},r.a.createElement("div",{className:"progress-bar bg-secondary",style:{width:10*e.info.difficulty+"%"},role:"progressbar","aria-valuenow":e.info.attack,"aria-valuemin":"0","aria-valuemax":"10"},"Difficulty"))),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted",value:e.tags.join(" ")},e.tags.join(", ")))),r.a.createElement("div",{className:"col-md-7"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"HP: ".concat(e.stats.hp)),r.a.createElement("li",{className:"list-group-item"},"HP/Level: ".concat(e.stats.hpperlevel)),r.a.createElement("li",{className:"list-group-item"},"MP: ".concat(e.stats.mp)),r.a.createElement("li",{className:"list-group-item"},"MP/Level: ".concat(e.stats.mpperlevel)),r.a.createElement("li",{className:"list-group-item"},"MP Regen: ".concat(e.stats.mpregen)),r.a.createElement("li",{className:"list-group-item"},"MP Regen/Level: ".concat(e.stats.mpregenperlevel)),r.a.createElement("li",{className:"list-group-item"},"Armor: ".concat(e.stats.armor)),r.a.createElement("li",{className:"list-group-item"},"Armor/Level: ".concat(e.stats.armorperlevel)),r.a.createElement("li",{className:"list-group-item"},"MR: ".concat(e.stats.spellblock)))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"MR/Level: ".concat(e.stats.spellblockperlevel)),r.a.createElement("li",{className:"list-group-item"},"MS: ".concat(e.stats.movespeed)),r.a.createElement("li",{className:"list-group-item"},"Attack Range: ".concat(e.stats.attackrange)),r.a.createElement("li",{className:"list-group-item"},"Crit: ".concat(e.stats.crit)),r.a.createElement("li",{className:"list-group-item"},"Crit/Level: ".concat(e.stats.critperlevel)),r.a.createElement("li",{className:"list-group-item"},"AD: ".concat(e.stats.attackdamage)),r.a.createElement("li",{className:"list-group-item"},"AD/Level: ".concat(e.stats.attackdamageperlevel)),r.a.createElement("li",{className:"list-group-item"},"AS: ".concat(e.stats.attackspeed)),r.a.createElement("li",{className:"list-group-item"},"AS/Level: ".concat(e.stats.attackspeedperlevel)))))))),R.map((function(a){return e.name===a[0]?r.a.createElement("div",{className:"row"},r.a.createElement("h3",null,"Changes from previous patch"),r.a.createElement("div",{className:"col-md-12 alert-success"},r.a.createElement("ul",null,a[1].hp&&r.a.createElement("li",null,"HP: ",a[1].hp),a[1].hpperlevel&&r.a.createElement("li",null,"HP Per Level: ",a[1].hpperlevel),a[1].mp&&r.a.createElement("li",null,"MP: ",a[1].mp),a[1].mpperlevel&&r.a.createElement("li",null,"MP Per Level: ",a[1].mpperlevel),a[1].mpregen&&r.a.createElement("li",null,"MP Regen: ",a[1].mpregen),a[1].mpregenperlevel&&r.a.createElement("li",null,"MP Regen Per Level: ",a[1].mpregenperlevel),a[1].armor&&r.a.createElement("li",null,"Armor: ",a[1].armor),a[1].armorperlevel&&r.a.createElement("li",null,"Armor Per Level: ",a[1].armorperlevel),a[1].spellblock&&r.a.createElement("li",null,"Spell Block: ",a[1].spellblock),a[1].spellblockperlevel&&r.a.createElement("li",null,"Spell Block Per Level: ",a[1].spellblockperlevel),a[1].movespeed&&r.a.createElement("li",null,"Move Speed: ",a[1].movespeed),a[1].attackrange&&r.a.createElement("li",null,"Attack Range ",a[1].attackrange),a[1].attackdamage&&r.a.createElement("li",null,"Attack Damage: ",a[1].attackdamage),a[1].attackdamageperlevel&&r.a.createElement("li",null,"Attack Damage Per Level: ",a[1].attackdamageperlevel),a[1].attackspeed&&r.a.createElement("li",null,"Attack Speed: ",a[1].attackspeed),a[1].attackspeedperlevel&&r.a.createElement("li",null,"Attack Speed Per Level: ",a[1].attackspeedperlevel)))):null}))))))})))};t(14);var d=function(){return r.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.bcdcfed6.chunk.js.map