webpackJsonp([1],{"3qvO":function(e,n){},"F+el":function(e,n){},FVnT:function(e,n){},NHnr:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=i("7+uW"),a={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},a,!1,function(e){i("F+el")},null,null).exports,l=i("/ocq"),h=i("pFYg"),g=i.n(h),o={data:function(){return{jcsx:{smzsx:0,gjl:1,fyl:0,ysjt:0,add:{a:0,b:0,c:0}},jjsx:{bjl:.05,bjsh:.5,zljc:0,szljc:0,yscnxl:1,lqsj:0,hdqx:0},yssx:{hysshjc:0,hk:0,sysshjc:0,sk:0,cysshjc:0,ck:0,lysshjc:0,lk:0,fysshjc:0,fk:0,bysshjc:0,bk:0,yysshjc:0,yk:0,wlshjc:0,wk:0},fyq:5,jnbl:1,qt:0,gwkx:0,gwfy:.5,result:0,result2:0,jkxg:0}},computed:{ysjtCompute:function(){return this.jcsx.ysjt}},methods:{gett:function(){this.$axios.get("page/a").then(function(e){console.log(e.data.name)})},confirm:function(){var e=this.jcsx.gjl,n=this.jnbl,i=1*this.yssx.hysshjc+1*this.yssx.sysshjc+1*this.yssx.bysshjc+1*this.yssx.lysshjc+1*this.yssx.fysshjc+1*this.yssx.cysshjc+1*this.yssx.yysshjc+1*this.yssx.wlshjc+1*this.qt+1,t=1*this.jjsx.bjsh+1,a=this.jcsx.add.a/100,s=0,l=0;"1"==this.fyq||"3"==this.fyq?s=3:"2"==this.fyq||"4"==this.fyq?s=2.5:(s=1,a=0),console.log("攻击区："+e+"\n增伤区："+i+"\n倍率区："+n+"\n爆伤区："+t+"\n增伤反应区："+(s+a)+"\n"),l=1*this.gwkx>0?(1-1*this.gwfy)*(1-1*this.gwkx):(1-1*this.gwfy)*(1-.5*this.gwkx),this.result=(e*n*i*t*(s+a)*l).toFixed(0)}},watch:{ysjtCompute:{handler:function(){null!=this.ysjtCompute&&(console.log(g()(this.jcsx.ysjt)),this.jcsx.add.a=(.0019*this.jcsx.ysjt*100).toFixed(2),this.jcsx.add.b=(.0045*this.jcsx.ysjt*100).toFixed(2),this.jcsx.add.c=(.003*this.jcsx.ysjt*100).toFixed(2))}}}},c={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("table",{attrs:{id:"Table",border:"2"}},[e._m(0),e._v(" "),i("tr",[i("td",[e._v("基础属性")]),e._v(" "),i("td",[i("table",[i("tr",[i("td",[e._v("生命值上限")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jcsx.smzsx,callback:function(n){e.$set(e.jcsx,"smzsx",n)},expression:"jcsx.smzsx"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("攻击力")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jcsx.gjl,callback:function(n){e.$set(e.jcsx,"gjl",n)},expression:"jcsx.gjl"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("防御力")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jcsx.fyl,callback:function(n){e.$set(e.jcsx,"fyl",n)},expression:"jcsx.fyl"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("元素精通")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jcsx.ysjt,callback:function(n){e.$set(e.jcsx,"ysjt",n)},expression:"jcsx.ysjt"}})],1)]),e._v(" "),i("tr",[i("td",{staticStyle:{"font-size":"12px"}},[i("p",[e._v("蒸发、融化反应伤害提升  "),i("b",{staticStyle:{color:"red"}},[e._v(e._s(e.jcsx.add.a)+"%")])]),e._v(" "),i("br"),i("p",[e._v("超载、超导、感电、碎冰、扩散伤害提升  "),i("b",{staticStyle:{color:"red"}},[e._v(e._s(e.jcsx.add.b)+"%")])]),e._v(" "),i("br"),i("p",[e._v("结晶护盾的吸收量提升     "),i("b",{staticStyle:{color:"red"}},[e._v(e._s(e.jcsx.add.c)+"%")])])])])])])]),e._v(" "),i("tr",[i("td",[e._v("进阶属性")]),e._v(" "),i("td",[i("table",[i("tr",[i("td",[e._v("暴击率")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jjsx.bjl,callback:function(n){e.$set(e.jjsx,"bjl",e._n(n))},expression:"jjsx.bjl"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("暴击伤害")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jjsx.bjsh,callback:function(n){e.$set(e.jjsx,"bjsh",n)},expression:"jjsx.bjsh"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("治疗加成")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jjsx.zljc,callback:function(n){e.$set(e.jjsx,"zljc",n)},expression:"jjsx.zljc"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("受治疗加成")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jjsx.szljc,callback:function(n){e.$set(e.jjsx,"szljc",n)},expression:"jjsx.szljc"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("元素充能效率")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jjsx.yscnxl,callback:function(n){e.$set(e.jjsx,"yscnxl",n)},expression:"jjsx.yscnxl"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("冷却缩减")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jjsx.lqsj,callback:function(n){e.$set(e.jjsx,"lqsj",n)},expression:"jjsx.lqsj"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("护盾强效")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jjsx.hdqx,callback:function(n){e.$set(e.jjsx,"hdqx",n)},expression:"jjsx.hdqx"}})],1)])])])]),e._v(" "),i("tr",[i("td",[e._v("元素属性")]),e._v(" "),i("td",[i("table",{attrs:{id:"ysTable"}},[i("tr",[i("td",[i("table",[i("tr",[i("td",[e._v("火伤加成")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.hysshjc,callback:function(n){e.$set(e.yssx,"hysshjc",n)},expression:"yssx.hysshjc"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("火抗")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.hk,callback:function(n){e.$set(e.yssx,"hk",n)},expression:"yssx.hk"}})],1)])])]),e._v(" "),i("td",[i("table",[i("tr",[i("td",[e._v("水伤加成")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.sysshjc,callback:function(n){e.$set(e.yssx,"sysshjc",n)},expression:"yssx.sysshjc"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("水抗")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.sk,callback:function(n){e.$set(e.yssx,"sk",n)},expression:"yssx.sk"}})],1)])])])]),e._v(" "),i("tr",[i("td",[i("table",[i("tr",[i("td",[e._v("冰伤加成")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.bysshjc,callback:function(n){e.$set(e.yssx,"bysshjc",n)},expression:"yssx.bysshjc"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("冰抗")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.bk,callback:function(n){e.$set(e.yssx,"bk",n)},expression:"yssx.bk"}})],1)])])]),e._v(" "),i("td",[i("table",[i("tr",[i("td",[e._v("雷伤加成")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.lysshjc,callback:function(n){e.$set(e.yssx,"lysshjc",n)},expression:"yssx.lysshjc"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("雷抗")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.lk,callback:function(n){e.$set(e.yssx,"lk",n)},expression:"yssx.lk"}})],1)])])])]),e._v(" "),i("tr",[i("td",[i("table",[i("tr",[i("td",[e._v("风伤加成")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.fysshjc,callback:function(n){e.$set(e.yssx,"fysshjc",n)},expression:"yssx.fysshjc"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("风抗")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.fk,callback:function(n){e.$set(e.yssx,"fk",n)},expression:"yssx.fk"}})],1)])])]),e._v(" "),i("td",[i("table",[i("tr",[i("td",[e._v("草伤加成")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.cysshjc,callback:function(n){e.$set(e.yssx,"cysshjc",n)},expression:"yssx.cysshjc"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("草抗")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.ck,callback:function(n){e.$set(e.yssx,"ck",n)},expression:"yssx.ck"}})],1)])])])]),e._v(" "),i("tr",[i("td",[i("table",[i("tr",[i("td",[e._v("物伤加成")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.wlshjc,callback:function(n){e.$set(e.yssx,"wlshjc",n)},expression:"yssx.wlshjc"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("物抗")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.wk,callback:function(n){e.$set(e.yssx,"wk",n)},expression:"yssx.wk"}})],1)])])]),e._v(" "),i("td",[i("table",[i("tr",[i("td",[e._v("岩伤加成")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.yysshjc,callback:function(n){e.$set(e.yssx,"yysshjc",n)},expression:"yssx.yysshjc"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("岩抗")]),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.yssx.yk,callback:function(n){e.$set(e.yssx,"yk",n)},expression:"yssx.yk"}})],1)])])])])])])]),e._v(" "),i("tr",[i("td",[e._v("技能倍率")]),e._v(" "),i("td",[i("el-input",{attrs:{type:"number"},model:{value:e.jnbl,callback:function(n){e.jnbl=n},expression:"jnbl"}})],1)]),e._v(" "),e._m(1),e._v(" "),i("tr",[i("td",[i("el-radio-group",{model:{value:e.fyq,callback:function(n){e.fyq=n},expression:"fyq"}},[i("el-radio",{attrs:{label:1,border:"",size:"medium"}},[e._v("蒸发（水打火）")]),e._v(" "),i("br"),e._v(" "),i("el-radio",{attrs:{label:2,border:"",size:"medium"}},[e._v("蒸发（火打水）")]),e._v(" "),i("br"),e._v(" "),i("el-radio",{attrs:{label:3,border:"",size:"medium"}},[e._v("融化（火打冰）")]),e._v(" "),i("br"),e._v(" "),i("el-radio",{attrs:{label:4,border:"",size:"medium"}},[e._v("融化（冰打火）")]),e._v(" "),i("br"),e._v(" "),i("el-radio",{attrs:{label:5,border:"",size:"medium"}},[e._v("无")]),e._v(" "),i("br")],1)],1)]),e._v(" "),i("tr",[i("td",[e._v("其他增伤")]),e._v(" "),i("td",[e._v("\n        （比如逆飞4，角斗士4）"),i("el-input",{attrs:{type:"number"},model:{value:e.qt,callback:function(n){e.qt=n},expression:"qt"}})],1)]),e._v(" "),i("tr",[i("td",[e._v("怪物抗性、防御")]),e._v(" "),i("td",[e._v("\n        怪物抗性:"),i("el-input",{attrs:{type:"number"},model:{value:e.gwkx,callback:function(n){e.gwkx=n},expression:"gwkx"}}),i("br"),e._v("\n        怪物防御减伤（一般为50%）"),i("el-input",{attrs:{type:"number"},model:{value:e.gwfy,callback:function(n){e.gwfy=n},expression:"gwfy"}}),i("br")],1)]),e._v(" "),i("tr",[i("td",[i("el-button",{attrs:{type:"success"},on:{click:e.confirm}},[e._v("计算伤害")])],1),e._v(" "),i("td",[e._v("\n        暴击伤害"+e._s(e.result)+" \n      ")])]),e._v(" "),e._m(2)])])},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("caption",[n("p",[this._v("不支持%形式的小数，请自觉改成0.123形式。谢谢！")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("tr",[n("td",{attrs:{rowspan:"2"}},[this._v("反应区（增伤反应：融化、蒸发）")]),this._v(" "),n("td",[n("p",[this._v("科普下：蒸发(水打火)200%增伤；蒸发(火打水)150%增伤；融化(火打冰)200%增伤；融化(冰打火)150%增伤。"),n("br"),this._v("（因为水克火，火克冰）")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("tr",[n("td",{attrs:{colspan:"2"}},[this._v("\n        注意：\n        "),n("ul",[n("li",[this._v("抗性：10%抗性，则受到伤害降低10%。减抗40%，则为-30%，转为增伤15%(绝对值一半)")])])])])}]};var u=i("VU/8")(o,c,!1,function(e){i("c2En")},"data-v-5b208a70",null).exports,r={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("table",{attrs:{border:"2"}},[i("caption",[e._v("简易伤害估算器")]),e._v(" "),i("tr",[i("td",{staticStyle:{width:"20%"}},[e._v("攻击力（人物面板）")]),e._v(" "),i("td",{staticStyle:{width:"80%"}},[e._v("\n                总攻击力（白字+绿字）"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.zgj,expression:"zgj"}],domProps:{value:e.zgj},on:{input:function(n){n.target.composing||(e.zgj=n.target.value)}}})])]),e._v(" "),i("tr",[i("td",[e._v("元素/物理增伤(包括角色、武器、圣遗物、组队效果、圣遗物套装)")]),e._v(" "),i("td",[e._v("\n                元素/物理伤害增加"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.shzj,expression:"shzj"}],domProps:{value:e.shzj},on:{input:function(n){n.target.composing||(e.shzj=n.target.value)}}}),e._v("%\n                ")])]),e._v(" "),i("tr",[i("td",[e._v("技能倍率")]),e._v(" "),i("td",[e.warn2?i("p",{staticStyle:{color:"red"}},[e._v("技能倍率不能为0")]):e._e(),e._v("\n                倍率"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.bl,expression:"bl"}],domProps:{value:e.bl},on:{input:function(n){n.target.composing||(e.bl=n.target.value)}}}),e._v("%\n            ")])]),e._v(" "),i("tr",[i("td",[e._v("爆伤(面板的包尚志，默认50%)")]),e._v(" "),i("td",[e.warn3?i("p",{staticStyle:{color:"red"}},[e._v("爆伤最低为50%")]):e._e(),e._v("\n                爆伤"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.bs,expression:"bs"}],domProps:{value:e.bs},on:{input:function(n){n.target.composing||(e.bs=n.target.value)}}}),e._v("%\n            ")])]),e._v(" "),i("tr",[i("td",[e._v("其他加成")]),e._v(" "),i("td",[e._v("\n                总伤害提升"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.other_shts,expression:"other_shts"}],domProps:{value:e.other_shts},on:{input:function(n){n.target.composing||(e.other_shts=n.target.value)}}}),e._v("%\n            ")])]),e._v(" "),i("tr",[i("td",[e._v("结果")]),e._v(" "),i("td",[e._v("\n                伤害："+e._s(this.result2)+"\n            ")])]),e._v(" "),i("tr",[i("td",{attrs:{colspan:"2"}},[i("el-button",{attrs:{type:"success"},on:{click:e.confirm}},[e._v("确定")])],1)])]),e._v(" "),i("p",[e._v("邮箱：930217906@qq.com欢迎讨论。更便携、详细的计算器还在开发中。")]),e._v(" "),i("p",[e._v("数据提升比较暂无设计，请自行观察。")])])},staticRenderFns:[]};var j=i("VU/8")({data:function(){return{zgj:0,shzj:0,ysshzj:0,wlshzj:0,bl:0,bs:50,other_gjl:0,other_shts:0,result1:0,result2:0,result3:0,warn1:!1,warn2:!1,warn3:!1}},methods:{confirm:function(){0==this.zgj?this.warn1=!0:this.warn1=!1,0==this.bl?this.warn2=!0:this.warn2=!1,0==this.bs||this.bs<50?this.warn3=!0:this.warn3=!1,this.result2=(this.zgj*this.bl/100*(1+this.shzj/100)*(1+this.bs/100)*(1+this.other_shts/100)).toFixed(0)}},watch:{}},r,!1,function(e){i("FVnT")},"data-v-7f699f91",null).exports,v=[{name:"甘雨",shengmingzhi:9797,gongjili:358,fangyuli:630,city:"璃月",birth:"12月2日",yuansujiacheng:0,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:.884,yuansujingtongjiacheng:0}],y=[{name:"刻晴",shengmingzhi:13103,gongjili:346,fangyuli:799,city:"璃月",birth:"11月20日",yuansujiacheng:0,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:.884,yuansujingtongjiacheng:0},{name:"菲谢尔",shengmingzhi:9189,gongjili:268,fangyuli:594,city:"蒙德",birth:"5月27日",yuansujiacheng:0,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:.24,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0},{name:"雷泽",shengmingzhi:11962,gongjili:257,fangyuli:751,city:"蒙德",birth:"9月9日",yuansujiacheng:0,wulijiacheng:.3,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0},{name:"丽莎",shengmingzhi:9570,gongjili:255,fangyuli:573,city:"蒙德",birth:"6月9日",yuansujiacheng:0,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:96}],_=[{name:"达达利亚",shengmingzhi:13103,gongjili:325,fangyuli:815,city:"至冬",birth:"7月20日",yuansujiacheng:.288,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0},{name:"莫娜",shengmingzhi:10409,gongjili:310,fangyuli:653,city:"蒙德",birth:"8月31日",yuansujiacheng:0,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0},{name:"行秋",shengmingzhi:10222,gongjili:225,fangyuli:758,city:"璃月",birth:"10月9日",yuansujiacheng:0,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:.24,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0}],d=[{name:"迪卢克",shengmingzhi:12981,gongjili:358,fangyuli:784,city:"蒙德",birth:"4月30日",yuansujiacheng:0,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:.242,baoshangjiacheng:0,yuansujingtongjiacheng:0},{name:"可莉",shengmingzhi:10287,gongjili:615,fangyuli:334,city:"蒙德",birth:"7月27日",yuansujiacheng:.288,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0},{name:"胡桃",shengmingzhi:1,gongjili:5,fangyuli:8,city:"璃月",birth:"",yuansujiacheng:.288,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0}],b=[{name:"魈",shengmingzhi:12736,gongjili:372,fangyuli:799,city:"璃月",birth:"4月17日",yuansujiacheng:0,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:.242,baoshangjiacheng:0,yuansujingtongjiacheng:0}],m=[{name:"钟离",shengmingzhi:14695,gongjili:274,fangyuli:738,city:"璃月",birth:"12月31日",yuansujiacheng:.288,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0},{name:"阿贝多",shengmingzhi:13226,gongjili:274,fangyuli:876,city:"蒙德",birth:"9月13日",yuansujiacheng:.288,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0},{name:"凝光",shengmingzhi:9789,gongjili:236,fangyuli:573,city:"璃月",birth:"8月26日",yuansujiacheng:.24,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0},{name:"诺艾尔",shengmingzhi:12071,gongjili:214,fangyuli:799,city:"蒙德",birth:"3月21日",yuansujiacheng:0,wulijiacheng:0,fangyulijiacheng:.3,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0}],p=[],f=[{name:"斫峰之刃",gongjili:608,gongjilijiacheng:.496,baojilvjiacheng:0,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:0,yuansujingtongjiacheng:0},{name:"和璞鸢",gongjili:674,gongjilijiacheng:0,baojilvjiacheng:.221,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:0,yuansujingtongjiacheng:0},{name:"天空之脊",gongjili:674,gongjilijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:.368,yuansujingtongjiacheng:0}],x=[{name:"斫峰之刃",gongjili:608,gongjilijiacheng:.496,baojilvjiacheng:0,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:0,yuansujingtongjiacheng:0},{name:"磐岩结绿",gongjili:542,gongjilijiacheng:0,baojilvjiacheng:.441,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:0,yuansujingtongjiacheng:0}],w=[{name:"狼的末路",gongjili:608,gongjilijiacheng:.496,baojilvjiacheng:0,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:0,yuansujingtongjiacheng:0},{name:"天空之傲",gongjili:674,gongjilijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:.368,yuansujingtongjiacheng:0},{name:"无工之剑",gongjili:608,gongjilijiacheng:.496,baojilvjiacheng:0,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:0,yuansujingtongjiacheng:0}],k=[{name:"斫峰之刃",gongjili:608,gongjilijiacheng:.496,baojilvjiacheng:0,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:0,yuansujingtongjiacheng:0},{name:"斫峰之刃",gongjili:608,gongjilijiacheng:.496,baojilvjiacheng:0,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:0,yuansujingtongjiacheng:0}],z=[{name:"阿莫斯之弓",gongjili:608,gongjilijiacheng:.496,baojilvjiacheng:0,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:0,yuansujingtongjiacheng:0},{name:"天空之翼",gongjili:674,gongjilijiacheng:0,baojilvjiacheng:.221,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,wulijiacheng:0,texiao:"",yuansuchongnengxiaolv:0,yuansujingtongjiacheng:0}],$={name:"HelloWorld",data:function(){return{role:{typeList:["冰","雷","水","火","风","岩","草"],list:[],type:"",choose:"",myRole:{name:"",shengmingzhi:0,gongjili:0,fangyuli:0,city:"",birth:"",yuansujiacheng:0,wulijiacheng:0,fangyulijiacheng:0,gongjilijiacheng:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,yuansujingtongjiacheng:0}},weapon:{typeList:["长柄武器","单手剑","双手剑","法器","弓箭"],type:"",list:[],choose:"",myWeapon:{name:"",gongjili:0,gongjilijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0,fangyulijiacheng:0,shengmingzhijiacheng:0,yuansuchongnengxiaolv:0,yuansujingtongjiacheng:0,texiao:""}},shengyiwu:{c:"",d:"",e:""},shengyiwu1:{gongjili:311,shengmingzhi:4780,gongjilijiacheng:0,shengmingzhijiacheng:0,fangyulijiacheng:0,yuansujingtongjiacheng:0,yuansujiacheng:0,wulijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0},shengyiwu2:{gongjili:0,gongjilijiacheng:0,fangyuli:0,fangyulijiacheng:0,shengmingzhi:0,shengmingzhijiacheng:0,baojilvjiacheng:0,baoshangjiacheng:0},visibility:!1,result:{baojilv:0,bubaoji:0,baoji:0},beilv:100}},methods:{roleTypeChange:function(){switch(this.role.type){case"冰":for(var e in this.role.list=[],v)this.role.list.push(v[e].name);break;case"雷":for(var e in this.role.list=[],y)this.role.list.push(y[e].name);break;case"水":for(var e in this.role.list=[],_)this.role.list.push(_[e].name);break;case"火":for(var e in this.role.list=[],d)this.role.list.push(d[e].name);break;case"风":for(var e in this.role.list=[],b)this.role.list.push(b[e].name);break;case"岩":for(var e in this.role.list=[],m)this.role.list.push(m[e].name);break;case"草":for(var e in this.role.list=[],p)this.role.list.push(p[e].name)}console.log("人物列表发生改变："+this.role.list)},weaponTypeChange:function(){switch(this.weapon.type){case"长柄武器":for(var e in this.weapon.list=[],f)this.weapon.list.push(f[e].name);break;case"单手剑":for(var e in this.weapon.list=[],x)this.weapon.list.push(x[e].name);break;case"双手剑":for(var e in this.weapon.list=[],w)this.weapon.list.push(w[e].name);break;case"法器":for(var e in this.weapon.list=[],k)this.weapon.list.push(k[e].name);break;case"弓箭":for(var e in this.weapon.list=[],z)this.weapon.list.push(z[e].name)}console.log("武器列表发生改变："+this.weapon.list)},findRoleInfoByName:function(e){var n=[];switch(this.role.type){case"冰":n=v;break;case"雷":n=y;break;case"水":n=_;break;case"火":n=d;break;case"风":n=b;break;case"岩":n=m;break;case"草":n=p}for(var i in n)if(n[i].name==e)return n[i]},findWeaponInfoByName:function(e){var n=[];switch(this.weapon.type){case"长柄武器":n=f;break;case"单手剑":n=x;break;case"双手剑":n=w;break;case"法器":n=k;break;case"弓箭":n=z}for(var i in n)if(n[i].name==e)return n[i]},confirm:function(e){for(var n in this.shengyiwu1)"shengmingzhi"!=n&&"gongjili"!=n&&(this.shengyiwu1[n]=0);for(var i in this.shengyiwu)switch(this.shengyiwu[i]){case"1":this.shengyiwu1.gongjilijiacheng+=.466;break;case"2":this.shengyiwu1.fangyulijiacheng+=.583;break;case"3":this.shengyiwu1.shengmingzhijiacheng+=.466;break;case"4":this.shengyiwu1.yuansujingtongjiacheng+=187;break;case"5":this.shengyiwu1.yuansujiacheng+=.466;break;case"6":this.shengyiwu1.wulijiacheng+=.583;break;case"7":this.shengyiwu1.baojilvjiacheng+=.311;break;case"8":this.shengyiwu1.baoshangjiacheng+=.622}var t,a,s;t=(this.role.myRole.gongjili+this.weapon.myWeapon.gongjili)*(1+this.role.myRole.gongjilijiacheng+this.weapon.myWeapon.gongjilijiacheng+this.shengyiwu1.gongjilijiacheng+this.shengyiwu2.gongjilijiacheng)+this.shengyiwu1.gongjili+this.shengyiwu2.gongjili,a=this.role.myRole.yuansujiacheng+this.role.myRole.wulijiacheng+this.weapon.myWeapon.wulijiacheng+this.shengyiwu1.yuansujiacheng+this.shengyiwu1.wulijiacheng,s=.5+this.role.myRole.baoshangjiacheng+this.weapon.myWeapon.baoshangjiacheng+this.shengyiwu1.baoshangjiacheng+this.shengyiwu2.baoshangjiacheng,this.result.baojilv=100*(this.role.myRole.baojilvjiacheng+this.weapon.myWeapon.baojilvjiacheng+this.shengyiwu1.baojilvjiacheng+this.shengyiwu2.baojilvjiacheng).toFixed(4),this.result.baoji=t*(1+a)*(1+s)*(this.beilv/100),this.result.baoji=this.result.baoji.toFixed(2),this.result.bubaoji=t*(1+a)*1*(this.beilv/100),this.result.bubaoji=this.result.bubaoji.toFixed(2)},handleClose:function(e){this.$confirm("确认关闭？").then(function(n){e()}).catch(function(e){})}},computed:{roleName:function(){return this.role.choose},weaponName:function(){return this.weapon.choose}},watch:{roleName:{handler:function(){console.log("选中的角色:"+this.role.choose),this.role.myRole=this.findRoleInfoByName(this.roleName)}},weaponName:{handler:function(){console.log("选中的武器；"+this.weapon.choose),this.weapon.myWeapon=this.findWeaponInfoByName(this.weaponName)}}}},S={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("h1",[e._v("原神伤害计算器")]),e._v(" "),i("p",[e._v("有bug，请勿使用= =")]),e._v(" "),i("table",{staticStyle:{"background-color":"rgba(54, 181, 219, 0.295)","margin-left":"10%",width:"80%","text-align":"center"},attrs:{border:"2px"}},[e._m(0),e._v(" "),i("tr",[i("td",{staticStyle:{width:"10%"}},[e._v("角色区域")]),e._v(" "),i("td",{staticStyle:{width:"45%"}},[i("table",{staticStyle:{width:"80%",margin:"50px"},attrs:{border:"2"}},[i("caption",[e._v("\n            人物区\n          ")]),e._v(" "),i("tr",[i("td",{staticStyle:{width:"40%"}},[e._v("角色")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.name))])]),e._v(" "),i("tr",[i("td",[e._v("生命值")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.shengmingzhi))])]),e._v(" "),i("tr",[i("td",[e._v("攻击力")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.gongjili))])]),e._v(" "),i("tr",[i("td",[e._v("防御力")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.fangyuli))])]),e._v(" "),i("tr",[i("td",[e._v("城市")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.city))])]),e._v(" "),i("tr",[i("td",[e._v("生日")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.birth))])]),e._v(" "),0!=this.role.myRole.yuansujiacheng?i("tr",[i("td",[e._v("元素加成")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.yuansujiacheng))])]):e._e(),e._v(" "),0!=this.role.myRole.wulijiacheng?i("tr",[i("td",[e._v("物理加成")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.wulijiacheng))])]):e._e(),e._v(" "),0!=this.role.myRole.gongjilijiacheng?i("tr",[i("td",[e._v("攻击加成")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.gongjilijiacheng))])]):e._e(),e._v(" "),0!=this.role.myRole.shengmingzhijiacheng?i("tr",[i("td",[e._v("生命加成")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.shengmingzhijiacheng))])]):e._e(),e._v(" "),0!=this.role.myRole.fangyulijiacheng?i("tr",[i("td",[e._v("防御加成")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.fangyulijiacheng))])]):e._e(),e._v(" "),0!=this.role.myRole.baojilvjiacheng?i("tr",[i("td",[e._v("暴击率加成")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.baojilvjiacheng))])]):e._e(),e._v(" "),0!=this.role.myRole.baoshangjiacheng?i("tr",[i("td",[e._v("爆伤加成")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.baoshangjiacheng))])]):e._e(),e._v(" "),0!=this.role.myRole.yuansujingtongjiacheng?i("tr",[i("td",[e._v("元素精通加成")]),e._v(" "),i("td",[e._v(e._s(this.role.myRole.yuansujingtongjiacheng))])]):e._e()])]),e._v(" "),i("td",{staticStyle:{width:"45%"}},[e._v("\n        属性：\n        "),i("el-select",{attrs:{placeholder:"请选择人物属性"},on:{change:e.roleTypeChange},model:{value:e.role.type,callback:function(n){e.$set(e.role,"type",n)},expression:"role.type"}},e._l(e.role.typeList,function(e,n){return i("el-option",{key:n,attrs:{label:e,value:e}})}),1),i("br"),e._v(" "),0==e.role.list.length?i("p",[e._v("对不起，该属性暂无角色！")]):e._e(),e._v(" "),e._l(e.role.list,function(n,t){return i("el-radio",{key:t,staticStyle:{"margin-top":"20px"},attrs:{label:n},model:{value:e.role.choose,callback:function(n){e.$set(e.role,"choose",n)},expression:"role.choose"}},[e._v("\n          "+e._s(n)+"\n        ")])})],2)]),e._v(" "),i("tr",[i("td",{staticStyle:{width:"10%"}},[e._v("武器区域")]),e._v(" "),i("td",{staticStyle:{width:"45%"}},[i("table",{staticStyle:{width:"80%",margin:"50px"},attrs:{border:"2"}},[i("caption",[e._v("\n            武器区\n          ")]),e._v(" "),i("tr",[i("td",{staticStyle:{width:"40%"}},[e._v("武器")]),e._v(" "),i("td",{staticStyle:{width:"60%"}},[e._v(e._s(this.weapon.myWeapon.name))])]),e._v(" "),i("tr",[i("td",[e._v("攻击力")]),e._v(" "),i("td",[e._v(e._s(this.weapon.myWeapon.gongjili))])]),e._v(" "),0!=this.weapon.myWeapon.gongjilijiacheng?i("tr",[i("td",[e._v("攻击力加成")]),e._v(" "),i("td",[e._v(e._s(this.weapon.myWeapon.gongjilijiacheng))])]):e._e(),e._v(" "),0!=this.weapon.myWeapon.baojilvjiacheng?i("tr",[i("td",[e._v("暴击率加成")]),e._v(" "),i("td",[e._v(e._s(this.weapon.myWeapon.baojilvjiacheng))])]):e._e(),e._v(" "),0!=this.weapon.myWeapon.baoshangjiacheng?i("tr",[i("td",[e._v("爆伤加成")]),e._v(" "),i("td",[e._v(e._s(this.weapon.myWeapon.baoshangjiacheng))])]):e._e(),e._v(" "),0!=this.weapon.myWeapon.shengmingzhijiacheng?i("tr",[i("td",[e._v("生命值加成")]),e._v(" "),i("td",[e._v(e._s(this.weapon.myWeapon.shengmingzhijiacheng))])]):e._e(),e._v(" "),this.weapon.myWeapon.fangyulijiacheng?i("tr",[i("td",[e._v("防御力加成加成")]),e._v(" "),i("td",[e._v(e._s(this.weapon.myWeapon.fangyulijiacheng))])]):e._e(),e._v(" "),this.weapon.myWeapon.yuansuchongnengxiaolv?i("tr",[i("td",[e._v("元素充能效率")]),e._v(" "),i("td",[e._v(e._s(this.weapon.myWeapon.yuansuchongnengxiaolv))])]):e._e(),e._v(" "),this.weapon.myWeapon.yuansujingtongjiacheng?i("tr",[i("td",[e._v("元素精通")]),e._v(" "),i("td",[e._v(e._s(this.weapon.myWeapon.yuansujingtongjiacheng))])]):e._e(),e._v(" "),this.weapon.myWeapon.wulijiacheng?i("tr",[i("td",[e._v("物理加成")]),e._v(" "),i("td",[e._v(e._s(this.weapon.myWeapon.wulijiacheng))])]):e._e(),e._v(" "),i("tr",[i("td",[e._v("特效说明")]),e._v(" "),i("td",[e._v(e._s(this.weapon.myWeapon.texiao))])])])]),e._v(" "),i("td",{staticStyle:{width:"45%"}},[e._v("\n        类型：\n        "),i("el-select",{attrs:{placeholder:"请选择武器类型"},on:{change:e.weaponTypeChange},model:{value:e.weapon.type,callback:function(n){e.$set(e.weapon,"type",n)},expression:"weapon.type"}},e._l(this.weapon.typeList,function(e,n){return i("el-option",{key:n,attrs:{label:e,value:e}})}),1),i("br"),e._v(" "),e._l(e.weapon.list,function(n,t){return i("el-radio",{key:t,staticStyle:{"margin-top":"20px"},attrs:{label:n},model:{value:e.weapon.choose,callback:function(n){e.$set(e.weapon,"choose",n)},expression:"weapon.choose"}},[e._v("\n          "+e._s(n)+"\n        ")])})],2)]),e._v(" "),i("tr",[i("td",{staticStyle:{width:"10%"}},[e._v("圣遗物主")]),e._v(" "),i("td",{attrs:{colspan:"2"}},[i("table",{staticStyle:{width:"100%"},attrs:{border:"2"}},[i("tr",[i("td",[e._v("\n              沙漏\n              "),i("el-select",{model:{value:e.shengyiwu.c,callback:function(n){e.$set(e.shengyiwu,"c",n)},expression:"shengyiwu.c"}},[i("el-option",{attrs:{label:"攻击力46.6%",value:"1"}}),e._v(" "),i("el-option",{attrs:{label:"防御力58.3%",value:"2"}}),e._v(" "),i("el-option",{attrs:{label:"生命值46.6%",value:"3"}}),e._v(" "),i("el-option",{attrs:{label:"元素精通187",value:"4"}})],1)],1),e._v(" "),i("td",[e._v("\n              杯子\n              "),i("el-select",{model:{value:e.shengyiwu.d,callback:function(n){e.$set(e.shengyiwu,"d",n)},expression:"shengyiwu.d"}},[i("el-option",{attrs:{label:"攻击力46.6%",value:"1"}}),e._v(" "),i("el-option",{attrs:{label:"防御力58.3%",value:"2"}}),e._v(" "),i("el-option",{attrs:{label:"生命值46.6%",value:"3"}}),e._v(" "),i("el-option",{attrs:{label:"元素精通187",value:"4"}}),e._v(" "),i("el-option",{attrs:{label:"元素加成46.6%",value:"5"}}),e._v(" "),i("el-option",{attrs:{label:"物理加成58.3%",value:"6"}})],1)],1),e._v(" "),i("td",[e._v("\n              头冠\n              "),i("el-select",{model:{value:e.shengyiwu.e,callback:function(n){e.$set(e.shengyiwu,"e",n)},expression:"shengyiwu.e"}},[i("el-option",{attrs:{label:"攻击力46.6%",value:"1"}}),e._v(" "),i("el-option",{attrs:{label:"防御力58.3%",value:"2"}}),e._v(" "),i("el-option",{attrs:{label:"生命值46.6%",value:"3"}}),e._v(" "),i("el-option",{attrs:{label:"元素精通187",value:"4"}}),e._v(" "),i("el-option",{attrs:{label:"暴击率31.1%",value:"7"}}),e._v(" "),i("el-option",{attrs:{label:"爆伤62.2%",value:"8"}})],1)],1)])])])]),e._v(" "),i("tr",[i("td",{staticStyle:{width:"10%"}},[e._v("圣遗物副")]),e._v(" "),i("td",{attrs:{colspan:"2"}},[i("table",{staticStyle:{width:"100%"}},[i("tr",[i("td",{staticStyle:{width:"40%"}},[e._v("\n              固定攻击力"),i("el-input",{model:{value:e.shengyiwu2.gongjili,callback:function(n){e.$set(e.shengyiwu2,"gongjili",n)},expression:"shengyiwu2.gongjili"}})],1),e._v(" "),i("td",{staticStyle:{width:"60%"}},[e._v("\n              百分比攻击力"),i("el-input",{model:{value:e.shengyiwu2.gongjilijiacheng,callback:function(n){e.$set(e.shengyiwu2,"gongjilijiacheng",n)},expression:"shengyiwu2.gongjilijiacheng"}}),e._v("%\n            ")],1)]),e._v(" "),i("tr",[i("td",{staticStyle:{width:"50%"}},[e._v("\n              固定生命值"),i("el-input",{model:{value:e.shengyiwu2.shengmingzhi,callback:function(n){e.$set(e.shengyiwu2,"shengmingzhi",n)},expression:"shengyiwu2.shengmingzhi"}})],1),e._v(" "),i("td",{staticStyle:{width:"50%"}},[e._v("\n              百分比生命值"),i("el-input",{model:{value:e.shengyiwu2.shengmingzhijiacheng,callback:function(n){e.$set(e.shengyiwu2,"shengmingzhijiacheng",n)},expression:"shengyiwu2.shengmingzhijiacheng"}}),e._v("%\n            ")],1)]),e._v(" "),i("tr",[i("td",{staticStyle:{width:"50%"}},[e._v("\n              固定防御力"),i("el-input",{model:{value:e.shengyiwu2.fangyuli,callback:function(n){e.$set(e.shengyiwu2,"fangyuli",n)},expression:"shengyiwu2.fangyuli"}})],1),e._v(" "),i("td",{staticStyle:{width:"50%"}},[e._v("\n              百分比防御力"),i("el-input",{model:{value:e.shengyiwu2.fangyulijiacheng,callback:function(n){e.$set(e.shengyiwu2,"fangyulijiacheng",n)},expression:"shengyiwu2.fangyulijiacheng"}}),e._v("%\n            ")],1)]),e._v(" "),i("tr",[i("td",{staticStyle:{width:"50%"}},[e._v("\n              ———暴击率"),i("el-input",{model:{value:e.shengyiwu2.baojilvjiacheng,callback:function(n){e.$set(e.shengyiwu2,"baojilvjiacheng",n)},expression:"shengyiwu2.baojilvjiacheng"}}),e._v("%\n            ")],1),e._v(" "),i("td",{staticStyle:{width:"50%"}},[e._v("\n              ——爆伤加成"),i("el-input",{model:{value:e.shengyiwu2.baoshangjiacheng,callback:function(n){e.$set(e.shengyiwu2,"baoshangjiacheng",n)},expression:"shengyiwu2.baoshangjiacheng"}}),e._v("%\n            ")],1)])])])]),e._v(" "),e._m(1),e._v(" "),i("tr",[i("td",[e._v("技能倍率")]),e._v(" "),i("td",{attrs:{colspan:"2"}},[i("el-input",{model:{value:e.beilv,callback:function(n){e.beilv=n},expression:"beilv"}}),e._v("%\n      ")],1)]),e._v(" "),i("tr",[i("td",{attrs:{colspan:"3"}},[i("el-button",{attrs:{type:"success"},on:{click:e.confirm}},[e._v("确认")])],1)]),e._v(" "),i("tr",[i("td",[e._v("结果区域")]),e._v(" "),i("td",[i("p",[e._v("暴击率："+e._s(e.result.baojilv)+"%")])]),e._v(" "),i("td",[i("p",[e._v("暴击:"+e._s(e.result.baoji))]),e._v(" "),i("p",[e._v("不暴击:"+e._s(e.result.bubaoji))])])])]),e._v(" "),i("el-dialog",{attrs:{title:"提示",visible:e.visibility,width:"40%",modal:!0,"before-close":e.handleClose},on:{"update:visible":function(n){e.visibility=n}}},[i("table",{staticStyle:{width:"60%",height:"300px","margin-left":"20%"},attrs:{border:"2"}},[i("caption",[e._v("\n        暴击率:100%\n      ")]),e._v(" "),i("tr",[i("td",{staticStyle:{width:"40%"}},[e._v("不暴击")]),e._v(" "),i("td",{staticStyle:{width:"60%"}})]),e._v(" "),i("tr",[i("td",[e._v("暴击")]),e._v(" "),i("td")])])])],1)},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("tr",{staticStyle:{height:"10px"}},[n("td",{staticStyle:{width:"10%"}},[this._v("提醒")]),this._v(" "),n("td",{attrs:{colspan:"2"}},[this._v("\n        不计算怪物抗性。武器90、人物90、技能666、圣遗物20、武器(0精)\n      ")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("tr",[n("td",[this._v("特效区域")]),this._v(" "),n("td",{attrs:{colspan:"2"}})])}]};var R=i("VU/8")($,S,!1,function(e){i("3qvO")},"data-v-486d2a97",null).exports,W={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("table",{attrs:{border:"2"}},[t("caption",[e._v("公式介绍")]),e._v(" "),t("tr",[t("td",{staticStyle:{width:"20%"}},[e._v("攻击力区")]),e._v(" "),t("td",{staticStyle:{width:"80%"}},[e._v("(人物、武器的白字) x (其他的百分比 + 1) + (圣遗物固定值)\n            ")])]),e._v(" "),t("tr",[t("td",[e._v("生命值")]),e._v(" "),t("td",[e._v("(人物基础生命) x (其他的百分比 + 1) + (圣遗物固定值)")])]),e._v(" "),t("tr",[t("td",[e._v("防御力")]),e._v(" "),t("td",[e._v("(人物基础防御力) x (1 + 其他的百分比) + (圣遗物固定)")])]),e._v(" "),t("tr",[t("td",[e._v("增伤区")]),e._v(" "),t("td",[e._v("(1 + 其他的百分比)")])]),e._v(" "),t("tr",[t("td",[e._v("增伤反应增加区")]),e._v(" "),t("td",[e._v("(1 + 蒸发的200%、150%或融化的200%、152% + 元素精通加成)")])]),e._v(" "),t("tr",[t("td",[e._v("爆伤区")]),e._v(" "),t("td",[e._v("(1 + 人物面板)")])]),e._v(" "),t("tr",[t("td",[t("b",[e._v("总伤害（按攻击力）")]),t("p",[e._v("看总公式能看出每部分的后续提升都会有稀释")])]),e._v(" "),t("td",[t("b",[e._v("总攻击 x  总增伤 x 总爆伤 x  倍率 x  (1-怪物减伤)")])])]),e._v(" "),t("tr",[t("td",[t("b",[e._v("带反应总伤害（按攻击力）")])]),e._v(" "),t("td",[t("b",[e._v("总攻击 x  总增伤 x 总爆伤 x  倍率 x 增伤反应加成 x  (1-怪物减伤)")])])])]),e._v(" "),t("div",[t("p",[e._v("怪物抗性一览")]),e._v(" "),t("img",{attrs:{src:i("Z8/D")}})])])}]};var q=i("VU/8")(null,W,!1,function(e){i("nQ8N")},"data-v-2bd686e2",null).exports,F={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("el-container",[i("el-header",{staticStyle:{padding:"0px"}},[i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":"1",mode:"horizontal",router:"","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[i("el-menu-item",{attrs:{index:"a"}},[e._v("简易工具")]),e._v(" "),i("el-menu-item",{attrs:{index:"b"}},[e._v("详细面板工具")]),e._v(" "),i("el-menu-item",{attrs:{index:"c"}},[e._v("终极版")]),e._v(" "),i("el-menu-item",{attrs:{index:"d"}},[e._v("公式区")])],1)],1),e._v(" "),i("el-main",[i("router-view")],1)],1)},staticRenderFns:[]};var N=i("VU/8")({methods:{handleSelect:function(){}}},F,!1,function(e){i("gBi3")},"data-v-77d0ed69",null).exports;t.default.use(l.a);var E=new l.a({routes:[{path:"/",name:"",redirect:"/home"},{path:"/home",name:"Home",component:N,children:[{path:"/a",name:"A",component:j},{path:"/b",name:"B",component:u},{path:"/c",name:"C",component:R},{path:"/d",name:"D",component:q}]}]}),C=i("mtWM"),T=i.n(C),V=i("zL8q"),B=i.n(V);i("tvR6");t.default.prototype.$axios=T.a,T.a.defaults.baseURL="http://localhost:8085/",t.default.use(B.a),t.default.config.productionTip=!1,new t.default({el:"#app",router:E,components:{App:s},template:"<App/>"})},"Z8/D":function(e,n,i){e.exports=i.p+"static/img/a.fe8349c.jpg"},c2En:function(e,n){},gBi3:function(e,n){},nQ8N:function(e,n){},tvR6:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.5b390b634a370e72383f.js.map