webpackJsonp([31],{719:function(l,n,u){"use strict";function t(l){return o._19(0,[(l()(),o.Z(0,0,null,null,9,"div",[["class","con_d"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.clickItem(l.context.$implicit)&&t}return t},null,null)),(l()(),o._18(-1,null,["\n          "])),(l()(),o.Z(2,0,null,null,3,"div",[["class","img"]],null,null,null,null,null)),(l()(),o._18(-1,null,["\n              "])),(l()(),o.Z(4,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),o._18(-1,null,["\n          "])),(l()(),o._18(-1,null,["\n          "])),(l()(),o.Z(7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o._18(8,null,["",""])),(l()(),o._18(-1,null,["\n      "]))],null,function(l,n){l(n,4,0,o._2(1,"",n.context.$implicit.pic,""));l(n,8,0,n.context.$implicit.title)})}function a(l){return o._19(0,[(l()(),o.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),o.Y(1,16384,null,0,m.a,[v.a,o.j,o.z,[2,j.a]],null,null),(l()(),o._18(-1,null,["\n\n  "])),(l()(),o.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Z.b,Z.a)),o.Y(4,49152,null,0,C.a,[Y.a,[2,j.a],[2,y.a],v.a,o.j,o.z],null,null),(l()(),o._18(-1,3,["\n      "])),(l()(),o.Z(6,0,null,3,2,"ion-title",[],null,null,null,L.b,L.a)),o.Y(7,49152,null,0,P.a,[v.a,o.j,o.z,[2,q.a],[2,C.a]],null,null),(l()(),o._18(-1,0,["手机分类"])),(l()(),o._18(-1,3,["\n  "])),(l()(),o._18(-1,null,["\n\n"])),(l()(),o._18(-1,null,["\n\n\n"])),(l()(),o.Z(12,0,null,null,8,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,x.b,x.a)),o.Y(13,4374528,null,0,A.a,[v.a,z.a,I.a,o.j,o.z,Y.a,S.a,o.u,[2,j.a],[2,y.a]],null,null),(l()(),o._18(-1,1,["\n  "])),(l()(),o.Z(15,0,null,1,4,"div",[["class","content"]],null,null,null,null,null)),(l()(),o._18(-1,null,["\n      "])),(l()(),o.U(16777216,null,null,1,null,t)),o.Y(18,802816,null,0,F.h,[o.I,o.F,o.p],{ngForOf:[0,"ngForOf"]},null),(l()(),o._18(-1,null,["\n  "])),(l()(),o._18(-1,1,["\n  \n"]))],function(l,n){l(n,18,0,n.component.typeList)},function(l,n){l(n,3,0,o._11(n,4)._hidden,o._11(n,4)._sbPadding);l(n,12,0,o._11(n,13).statusbarPadding,o._11(n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var o=u(1),s=(u(0),u(32),u(186)),i=(u(57),u(388)),c=function(){function l(l,n,u,t){this.dataService=l,this.alert=n,this.navCtrl=u,this.navParams=t,this.typeList=[]}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad ShoujiffPage"),this.getList()},l.prototype.getList=function(){var l=this;this.dataService.postRequest(i.a.BrandList_API,{},function(n){console.log(n),n.success&&(l.typeList=n.data)})},l.prototype.clickItem=function(l){this.navParams.get("action")(l).then(function(l){console.log("result",l)},function(l){console.log("error",l)}),this.navCtrl.pop()},l}(),e=function(){return function(){}}(),r=u(187),_=u(188),b=u(189),d=u(190),f=u(191),g=u(192),p=u(193),k=u(194),h=u(195),m=u(196),v=u(3),j=u(7),Z=u(734),C=u(56),Y=u(12),y=u(28),L=u(735),P=u(185),q=u(83),x=u(387),A=u(30),z=u(6),I=u(13),S=u(38),F=u(19),w=u(58),B=u(16),O=o.X({encapsulation:2,styles:[],data:{}}),V=o.V("page-shoujiff",c,function(l){return o._19(0,[(l()(),o.Z(0,0,null,null,1,"page-shoujiff",[],null,null,null,a,O)),o.Y(1,49152,null,0,c,[s.a,w.a,y.a,B.a],null,null)],null,null)},{},{},[]),X=u(20),$=u(84),D=u(47);u.d(n,"ShoujiffPageModuleNgFactory",function(){return M});var M=o.W(e,[],function(l){return o._7([o._8(512,o.i,o.S,[[8,[r.a,_.a,b.a,d.a,f.a,g.a,p.a,k.a,h.a,V]],[3,o.i],o.s]),o._8(4608,F.k,F.j,[o.r,[2,F.s]]),o._8(4608,X.n,X.n,[]),o._8(4608,X.c,X.c,[]),o._8(512,F.b,F.b,[]),o._8(512,X.l,X.l,[]),o._8(512,X.d,X.d,[]),o._8(512,X.k,X.k,[]),o._8(512,$.a,$.a,[]),o._8(512,$.b,$.b,[]),o._8(512,e,e,[]),o._8(256,D.a,c,[])])})},734:function(l,n,u){"use strict";function t(l){return a._19(0,[(l()(),a.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.backButtonClick(u)&&t}return t},s.b,s.a)),a.Y(3,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(4,1097728,null,0,i.a,[[8,"bar-button"],c.a,a.j,a.z],null,null),(l()(),a.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(6,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(7,147456,null,0,e.a,[c.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),a.Y(9,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._18(10,null,["",""])),a._10(null,0),a._10(null,1),a._10(null,2),(l()(),a.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a.Y(15,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._10(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode);l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb);l(n,5,0,a._11(n,7)._hidden);l(n,10,0,u._backText)})}u.d(n,"a",function(){return r}),n.b=t;var a=u(1),o=u(19),s=u(53),i=u(29),c=u(3),e=u(54),r=(u(7),u(28),a.X({encapsulation:2,styles:[],data:{}}))},735:function(l,n,u){"use strict";function t(l){return a._19(2,[(l()(),a.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._10(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}u.d(n,"a",function(){return s}),n.b=t;var a=u(1),o=u(19),s=(u(3),a.X({encapsulation:2,styles:[],data:{}}))}});