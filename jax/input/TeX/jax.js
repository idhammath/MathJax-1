/*
 *  /MathJax/jax/input/TeX/jax.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Unpack([
  ['(','function','(d){var c=true,f=false,i,h=String.fromCharCode(160);var e','=MathJax.Object.Subclass({','Init',':function(k){','this.global','={};','this.data','=[b.','start','().With({global:',6,'})];if(k){',8,'[0].env','=k}','this.env','=',8,15,'},','Push',':function(){','var l,k,n,o;for(','l=0,k=arguments.length;l<k;l++){','n=','arguments[l','];if(n',' instanceof ','i.mbase){n=b.mml(n)}n.global=',6,';o=(',8,'.length','?this.Top().','checkItem','(n):c);if(o',29,'Array','){this.Pop();this.Push','.apply(this',',','o)}else{if(o',29,'b',40,'(',43,'){',8,'.push','(n);if(n.env){','for(var ','p',' in this.env){if(this.env.hasOwnProperty(','p)){n.env[p]=',17,'[p]}}',17,'=n.env}else{n.env=',17,'}}}}}},Pop',23,'var k=',8,'.pop();if(!k.isOpen){delete k.env}',17,'=(',8,34,35,'env:{});','return ','k},Top',5,'if(k==null){k=','1}if(',8,34,'<k){',73,'null}',73,8,'[',8,34,'-k]},Prev',5,'var l=this.Top();if(k){',73,'l.data[l.data',34,'-1]}else{',73,'l.Pop()}},toString',23,'return"stack[\\n  "+',8,'.join("\\n  ")+"\\n]"}});var b=e.Item',3,'type:"base",closeError:"Extra',' close brace',' or missing',' open brace','",rightError:"Missing \\\\left or extra',' \\\\right",',4,23,'if(','this.isOpen){',17,'={}}',8,'=[];this.',22,41,',arguments)},',22,23,8,51,'.apply(',8,118,'Pop',23,73,8,'.pop()},mmlData:',1,'(k,l){',76,'c}if(',8,34,'===1&&!l){',73,8,'[0]}',73,'i.mrow',123,'i,',8,').With((k?{inferred:c}:{}))},','checkItem:function(','k){if(k.type==="','over"&&',111,'k.num=','this.mmlData','(f);',8,'=[]}if(k','.type==="','cell"&&',111,'d.Error("Misplaced "+k.name)}if(k.isClose&&','this[k.type+"Error','"]){d.Error(',160,'"])}if(!k','.isNotStack){',73,'c}this.',22,'(k.data[0]);',73,'f},With',5,53,'l in k){if(k.hasOwnProperty(l)){this[l]=k[l]}}',73,'this},toString',23,73,'this.type+"["+',8,'.join("; ")+"]"}});b.',10,'=b.Subclass({type:"',10,'",isOpen:c,',147,148,'stop"){','return b.mml(',152,'())}','return this.SUPER(arguments).checkItem.call(this,','k)}});b.','stop',182,193,'",isClose:c});b.','open',182,'open',184,'stopError:"Extra',105,104,103,'",',147,'l){','if(l.type==="','close"){',64,152,'();',188,'i.TeXAtom(','k))}',191,'l)}});b.','close',182,218,196,'subsup',182,222,'",stopError:"Missing superscript or subscript argument",',147,'l){var k=["","subscript","superscript"][this.','position','];',208,'open"||l',156,'left"){',73,'c}',208,'mml"){',8,'[0].SetData(this.',228,',l.data[0]);',188,8,'[0])}if(','this.SUPER(arguments).',36,'.call(this,l)){','d.Error("Missing',105,' for "+k)}},Pop:',1,'(){}});b.over',182,'over",isClose:c,name:"\\\\over",',147,'m,k){if(m',156,'over"){d.Error("Ambiguous use of "+m.name)}if(m.isClose){var l=i.mfrac(this.num,',152,'(f));if(this.thickness!=null){l.linethickness=this.thickness}','if(this.open||this.close){','l.texClass=i.TEXCLASS.INNER;l.texWithDelims=c;l=i.mfenced(l',').With({open:this.open,close:this.close})}','return[b.mml(','l),m]}',191,'m)},toString',23,'return"over["+this.num+" / "+',8,180,'left',182,'left',184,'delim:"(",',201,' \\\\left',104,107,147,'l){',208,'right"){var ','k=i.mfenced(',8,34,'===1?',8,'[0]:i.mrow',123,'i,',8,'));',188,'k.With({open:this.delim,',218,':l.delim}))}',191,217,'right',182,'right",isClose:c,delim:")"});b.begin',182,'begin',184,147,148,'end"){if(k.name!==this.name){d.Error("\\\\begin{"+this.name+"} ended with \\\\end{"+k.name+"}")}if(!this.end){',188,152,'())}',73,'this.parse[this.end].call(this.parse,this,',8,')}if(k',156,187,248,' \\\\end{"+this.name+"}")}',191,192,'end',182,'end',196,'style',182,'style",',147,'l){if(!l.isClose){',191,'l)}',64,'i.mstyle',123,'i,',8,').With(this.','styles);',264,'k),l]}});b.',228,182,228,'",',147,'l){if(l.isClose){',248,' box for "+this.name)}if(l',164,64,'l.mmlData();switch(this.move){case"vertical":k=i.mpadded(k).With({height:this.dh,depth:this.dd,voffset:this.dh});',264,'k)];case"horizontal":',264,'this.left),l,b.mml(this.right)]}}',191,217,'array',182,'array',184,'arraydef:{},',4,23,'this.table','=[];','this.row','=[];',17,7,245,4,41,118,147,348,'if(l.isEntry','){this.EndEntry();this.','clearEnv();return f}','if(l.isCR',380,'EndRow();this.',381,'this.EndTable();this.clearEnv();',64,'i.mtable',123,'i,',367,339,'arraydef);',261,285,'k',263,'k=b.mml(k);if(this.requireClose){',208,209,73,'k}',248,103,'")}return[k,l]}',191,'l)},EndEntry',23,369,51,'(i.mtd',123,'i,',8,'));',8,'=[]},EndRow',23,367,51,'(i.mtr',123,'i,',369,'));',369,'=[]},EndTable',23,'if(',8,34,'||',369,34,380,'EndRow()}this.checkLines()},checkLines',23,'if(','this.arraydef.rowlines','){',64,439,'.split(/ /);if(k',34,'===',367,34,'){this.arraydef.frame=k.pop();',439,'=k.join(" ")}else{if(k',34,'<',367,34,'-1){',439,'+=" none"}}}},clearEnv',23,53,'k',55,'k)){delete ',17,'[k]}}}});b.cell',182,'cell',196,'mml',182,'mml",isNotStack:c,',22,23,53,25,'if(',27,'].type!=="mo"&&',27,'].isEmbellished()){',27,']=',214,27,']).With({isEmbellishedWrapper:c})}}',8,51,123,8,118,'Add',23,8,51,123,8,',arguments);',73,'this}});var g',7,'var j=',1,'(){i=MathJax.ElementJax.mml;MathJax.Hub.Insert(g,{letter:/[a-z]/i,digit:/[0-9.]/,number:/^(?:[0-9]+(?:\\{,\\}[0-9]{3})*(?:\\.[0-9]*)*|\\.[0-9]+)/,special:{"\\\\":"ControlSequence","{":"Open","}":"Close","~":"Tilde","^":"Superscript",_:"Subscript"," ":"Space","\\t":"Space","\\r":"Space","\\n":"Space","\'":"Prime","%":"Comment","&":"Entry","#":"Hash","\\u2019":"Prime"},remap:{"-":"2212","*":"2217"},mathchar0mi:{alpha:"03B1",beta:"03B2",gamma:"03B3",delta:"03B4",epsilon:"03F5",zeta:"03B6",eta:"03B7",theta:"03B8",iota:"03B9",kappa:"03BA",lambda:"03BB",mu:"03BC",nu:"03BD",xi:"03BE",omicron:"03BF",pi:"03C0",rho:"03C1",sigma:"03C3",tau:"03C4",upsilon:"03C5",phi:"03D5",chi:"03C7",psi:"03C8",omega:"03C9",varepsilon:"03B5",vartheta:"03D1",varpi:"03D6",varrho:"03F1",varsigma:"03C2",varphi:"03C6",S:"00A7",aleph:["2135','",{mathvariant:i.VARIANT.NORMAL}],','hbar:"210F",imath:"0131",jmath:"0237",ell:"2113",wp:["2118',503,'Re:["211C',503,'Im:["2111',503,'partial:["2202',503,'infty:["221E',503,'prime:["2032',503,'emptyset:["2205',503,'nabla:["2207',503,'top:["22A4',503,'bot:["22A5',503,'angle:["2220',503,'triangle:["25B3',503,'backslash:["2216',503,'forall:["2200',503,'exists:["2203',503,'neg:["00AC',503,'lnot:["00AC',503,'flat:["266D',503,'natural:["266E',503,'sharp:["266F',503,'clubsuit:["2663',503,'diamondsuit:["2662',503,'heartsuit:["2661',503,'spadesuit:["2660",{mathvariant:i.VARIANT.NORMAL}]},mathchar0mo:{surd:"221A",coprod:["2210','",{texClass:i.TEXCLASS.OP,movesupsub:c','}],bigvee:["22C1',551,'}],bigwedge:["22C0',551,'}],biguplus:["2A04',551,'}],bigcap:["22C2',551,'}],bigcup:["22C3',551,'}],"int":["222B",{','texClass:i.TEXCLASS.','OP}],intop:["222B',551,',movablelimits:c}],iint:["222C",{',563,'OP}],iiint:["222D",{',563,'OP}],prod:["220F',551,'}],sum:["2211',551,'}],bigotimes:["2A02',551,'}],bigoplus:["2A01',551,'}],bigodot:["2A00',551,'}],oint:["222E",{',563,'OP}],bigsqcup:["2A06',551,'}],smallint:["222B','",{largeop:f}],','triangleleft:"25C3",triangleright:"25B9",bigtriangleup:"25B3",bigtriangledown:"25BD",wedge:"2227",land:"2227",vee:"2228",lor:"2228",cap:"2229",cup:"222A",ddagger:"2021",dagger:"2020",sqcap:"2293",sqcup:"2294",uplus:"228E",amalg:"2A3F",diamond:"22C4",bullet:"2219",wr:"2240",div:"00F7",odot:["2299',585,'oslash:["2298',585,'otimes:["2297',585,'ominus:["2296',585,'oplus:["2295',585,'mp:"2213",pm:"00B1",circ:"2218",bigcirc:"25EF",setminus:"2216",cdot:"22C5",ast:"2217",times:"00D7",star:"22C6",propto:"221D",sqsubseteq:"2291",sqsupseteq:"2292",parallel:"2225",mid:"2223",dashv:"22A3",vdash:"22A2",leq:"2264",le:"2264",geq:"2265",ge:"2265",lt:"003C",gt:"003E",succ:"227B",prec:"227A",approx:"2248",succeq:"2AB0",preceq:"2AAF",supset:"2283",subset:"2282",supseteq:"2287",subseteq:"2286","in":"2208",ni:"220B",notin:"2209",owns:"220B",gg:"226B",ll:"226A",sim:"223C",simeq:"2243",perp:"22A5",equiv:"2261",asymp:"224D",smile:"2323",frown:"2322",ne:"2260",neq:"2260",cong:"2245",doteq:"2250",bowtie:"22C8",models:"22A8",notChar:"0338",Leftrightarrow:"21D4",Leftarrow:"21D0",Rightarrow:"21D2",leftrightarrow:"2194",leftarrow:"2190",gets:"2190",rightarrow:"2192",to:"2192",mapsto:"21A6",leftharpoonup:"21BC",leftharpoondown:"21BD",rightharpoonup:"21C0",rightharpoondown:"21C1",nearrow:"2197",searrow:"2198",nwarrow:"2196",swarrow:"2199",rightleftharpoons:"21CC",hookrightarrow:"21AA",hookleftarrow:"21A9",longleftarrow:"27F5",Longleftarrow:"27F8",longrightarrow:"27F6",Longrightarrow:"27F9",','Longleftrightarrow',':"27FA",longleftrightarrow:"27F7",longmapsto:"27FC",ldots:"2026",cdots:"22EF",vdots:"22EE",ddots:"22F1",dots:"2026",dotsc:"2026",dotsb:"22EF",dotsm:"22EF",dotsi:"22EF",dotso:"2026",ldotp:["002E",{',563,'PUNCT}],cdotp:["22C5",{',563,'PUNCT}],colon:["003A",{',563,'PUNCT}]},mathchar7:{Gamma:"0393",Delta:"0394",Theta:"0398",Lambda:"039B",Xi:"039E",Pi:"03A0",Sigma:"03A3",Upsilon:"03A5",Phi:"03A6",Psi:"03A8",Omega:"03A9",_:"005F","#":"0023","$":"0024","%":"0025","&":"0026",And:"0026"},delimiter:{"(":"(",")":")","[":"[","]":"]","<":"27E8",">":"27E9","\\\\lt":"27E8","\\\\gt":"27E9","/":"/","|":["|",{',563,'ORD}],".":"","\\\\\\\\":"\\\\","\\\\lmoustache":"23B0","\\\\rmoustache":"23B1","\\\\lgroup":"27EE","\\\\rgroup":"27EF","\\\\arrowvert":"23D0","\\\\Arrowvert":"2016","\\\\bracevert":"23AA","\\\\Vert":["2225",{',563,'ORD}],"\\\\|":["2225",{',563,'ORD}],"\\\\','vert":["|",{',563,610,'uparrow":"2191","\\\\downarrow":"2193","\\\\updownarrow":"2195","\\\\Uparrow":"21D1","\\\\Downarrow":"21D3","\\\\Updownarrow":"21D5","\\\\backslash":"\\\\","\\\\rangle":"27E9","\\\\langle":"27E8","\\\\rbrace":"}","\\\\lbrace":"{","\\\\}":"}","\\\\{":"{","\\\\rceil":"2309","\\\\lceil":"2308","\\\\rfloor":"230B","\\\\lfloor":"230A","\\\\lbrack":"[","\\\\rbrack":"]"},macros:{displaystyle',':["SetStyle","','D",c,0],textstyle',615,'T",f,0],scriptstyle',615,'S",f,1],scriptscriptstyle',615,'SS",f,2],rm',':["SetFont",i.VARIANT.','NORMAL],mit',623,'ITALIC],oldstyle',623,'OLDSTYLE],cal',623,'CALIGRAPHIC],it',623,'ITALIC],bf',623,'BOLD],bbFont',623,'DOUBLESTRUCK],scr',623,'SCRIPT],frak',623,'FRAKTUR],sf',623,'SANSSERIF],tt',623,'MONOSPACE],tiny',':["SetSize",','0.5],Tiny',645,'0.6],scriptsize',645,'0.7],small',645,'0.85],normalsize',645,'1],large',645,'1.2],Large',645,'1.44],LARGE',645,'1.73],huge',645,'2.07],Huge',645,'2.49],arcsin',':["NamedOp",0],','arccos',665,'arctan',665,'arg',665,'cos',665,'cosh',665,'cot',665,'coth',665,'csc',665,'deg',665,'det',':"NamedOp",','dim',665,'exp',665,'gcd',685,'hom',665,'inf',685,'ker',665,'lg',665,'lim',685,'liminf',':["NamedOp",null,"lim&thinsp;','inf"],limsup',703,'sup"],ln',665,'log',665,'max',685,'min',685,'Pr',685,'sec',665,'sin',665,'sinh',665,'sup',685,'tan',665,'tanh',665,'limits:["Limits",1],nolimits:["Limits",0],overline',':["UnderOver","','203E"],underline',729,'005F"],overbrace',729,'23DE",1],underbrace',729,'23DF",1],overrightarrow',729,'2192"],underrightarrow',729,'2192"],overleftarrow',729,'2190"],underleftarrow',729,'2190"],overleftrightarrow',729,'2194"],underleftrightarrow',729,'2194"],overset:"Overset",underset:"Underset",stackrel',':["Macro","\\\\','mathrel{\\\\','mathop{#2}\\\\limits^{#1}}",2],over:"Over",overwithdelims:"Over",atop:"Over",atopwithdelims:"Over",above:"Over",abovewithdelims:"Over",brace:["Over","{","}"],brack:["Over","[","]"],choose:["Over","(",")"],frac:"Frac",sqrt:"Sqrt",root:"Root",uproot:["MoveRoot","upRoot"],leftroot:["MoveRoot","leftRoot"],left:"LeftRight",right:"LeftRight",llap:"Lap",rlap:"Lap",raise:"RaiseLower",lower:"RaiseLower",moveleft',':"MoveLeftRight','",moveright',752,'",",":["','Spacer",i.LENGTH.','THINMATHSPACE','],":":["',756,757,'],">":["',756,'MEDIUMMATHSPACE],";":["',756,'THICKMATHSPACE','],"!":["',756,'NEGATIVETHINMATHSPACE],','enspace:["Spacer",".5em"],quad:["Spacer","1em"],qquad:["Spacer","2em"],thinspace:["',756,757,'],negthinspace:["',756,768,'hskip:"Hskip",hspace:"Hskip",kern:"Hskip",mskip:"Hskip",mspace:"Hskip",mkern:"Hskip",Rule:["Rule"],Space:["Rule","blank"],big',':["MakeBig",i.TEXCLASS.','ORD,0.85],Big',776,'ORD,1.15],bigg',776,'ORD,1.45],Bigg',776,'ORD,1.75],bigl',776,'OPEN,0.85],Bigl',776,'OPEN,1.','15],biggl',776,787,'45],Biggl',776,787,'75],bigr',776,'CLOSE,0.85],Bigr',776,'CLOSE,1.','15],biggr',776,798,'45],Biggr',776,798,'75],bigm',776,'REL,0.85],Bigm',776,'REL,1.15],biggm',776,'REL,1.45],Biggm',776,'REL,1.75],mathord',':["TeXAtom",i.TEXCLASS.','ORD],mathop',814,'OP],mathopen',814,'OPEN],mathclose',814,'CLOSE],mathbin',814,'BIN],mathrel',814,'REL],mathpunct',814,'PUNCT],mathinner',814,'INNER],vcenter',814,'VCENTER],','mathchoice',':["Extension","',832,'"],buildrel:"BuildRel",hbox:["HBox",0],text:"HBox",mbox:["HBox",0],fbox:"FBox",strut:"Strut",mathstrut',749,'vphantom{(}"],phantom:"Phantom",vphantom:["Phantom",1,0],hphantom:["Phantom",0,1],smash:"Smash",acute',':["Accent","','02CA"],grave',838,'02CB"],ddot',838,'00A8"],tilde',838,'02DC"],bar',838,'02C9"],breve',838,'02D8"],check',838,'02C7"],hat',838,'02C6"],vec',838,'20D7"],dot',838,'02D9"],widetilde',838,'02DC",1],widehat',838,'02C6",1],matrix:"Matrix",array:"Matrix",pmatrix:["Matrix","(",")"],cases:["Matrix","{","","left left",null,".1em"],eqalign',':["Matrix",null,null,"','right left",i.LENGTH.',765,',".5em","D"],','displaylines',862,'center",null',865,'cr:"Cr","\\\\":"Cr",newline:"Cr",hline:["HLine","solid"],hdashline:["HLine","dashed"],eqalignno',':["Matrix",null,null,"right left right",i.LENGTH.THICKMATHSPACE+" 3em",".5em","D"],','leqalignno',871,'bmod',749,'mathbin{\\\\rm mod}"],pmod',749,'pod{{\\\\rm mod}\\\\kern 6mu',' #1}",1],','mod',749,'mathchoice{\\\\kern18mu}{\\\\','kern12mu}{\\\\',883,883,'rm mod}\\\\,\\\\,#1",1],pod',749,882,'kern8mu}{\\\\kern8mu}{\\\\kern8mu}(#1)",1],iff:["Macro","\\\\;\\\\',597,'\\\\;"],skew:["Macro","{{#2{#3\\\\mkern#1mu}\\\\mkern-#1mu}{}}",3],mathcal',':["Macro","{\\\\','cal',879,'mathscr',892,'scr',879,'mathrm',892,'rm',879,'mathbf',892,'bf',879,'mathbb',892,'bbFont #1}",1],','Bbb',892,909,'mathit',892,'it',879,'mathfrak',892,'frak',879,'mathsf',892,'sf',879,'mathtt',892,'tt',879,'textrm',749,'mathord{\\\\','rm\\\\text{#1}}",1],textit',749,931,'it','{\\\\text{#1}}}",1],','textbf',749,931,'bf',936,'pmb',749,'rlap{#1}\\\\kern1px{#1}",1],TeX:["Macro","T\\\\kern-.14em\\\\lower.5ex{E}\\\\kern-.115em X"],LaTeX:["Macro","L\\\\kern-.325em\\\\raise.21em{\\\\scriptstyle{A}}\\\\kern-.17em\\\\TeX"],not',749,750,'rlap{\\\\kern.5em\\\\notChar}}"]," ":["Macro","\\\\text{ }"],space:"Tilde",begin:"Begin",end:"End",newcommand',833,'newcommand"],','renewcommand',833,949,'newenvironment',833,949,'def',833,949,'verb',833,'verb"],','boldsymbol',833,962,'"],tag',833,'AMSmath"],','notag',833,967,'label:["Macro","",1],nonumber:["Macro",""],unicode',833,'unicode"],color:"Color",href',833,'HTML"],"class":["Extension","HTML"],style',833,'HTML"],cssId',833,'HTML"],require:"Require"},environment:{array:["Array"],matrix',':["Array",null',',null,null,"c"],pmatrix',980,',"(",")","c"],bmatrix',980,',"[","]","c"],Bmatrix',980,',"\\\\{","\\\\}","c"],vmatrix',980,',"\\\\vert","\\\\vert","c"],Vmatrix',980,',"\\\\Vert","\\\\Vert","c"],cases:["Array",nul'],
  ['l,"\\\\{",".","ll",null,".1em"],','eqnarray',':["','Array",null,null,null,"rcl",i.LENGTH.THICKMATHSPACE,".5em","D','"],"',1,'*":["',3,'"],equation:[','null,"Equation',4,'equation*":[',9,'"],align:["','ExtensionEnv",null,"AMSmath',4,'align',6,14,'"],aligned:["',14,'"],','multline',':["',14,4,22,6,14,'"],split:["',14,'"],gather:["',14,4,'gather',6,14,'"],gathered:["',14,'"],alignat:["',14,4,'alignat',6,14,'"],alignedat:["',14,'"]},p_height:1.2/0.85});if(','this.config.Macros','){','var k=',48,';for(var l in k){if(k','.hasOwnProperty(','l)){if(typeof(k[l])==="','string"){','g.macros[l]=["Macro','",k[l]]}else{',56,'"].concat(k[l])}}}}};var a=MathJax.Object.Subclass({Init',':function(','l,m){','this.string=','l;this.i=0;var k;if(m){k={};for(var n in m){if(m',53,'n)){k[n]=m[n]}}}this.stack=d.Stack(k);this.Parse();','this.Push(','b.stop())},Parse',':function(){','var k;','while(this.i<this.string.length','){k=','this.string.charAt(this.i','++);if(g.special[k]){this[g.special[k]](k)}','else{if(','g.letter','.test(k)){this.','Variable','(k)}',74,'g.digit',76,'Number(k)}','else{this.','Other(k)}}}}},Push',68,'this.stack.','Push.apply(this','.stack,arguments)},mml',68,'if(',86,'Top().type!=="mml"){','return ','null}',93,86,'Top().data[0]},mmlToken',60,'k','){return ','k},ControlSequence',60,'q){',50,'this.GetCS','(),p,n;if(','g.macros[k',']){','var m=',107,'];if(!(m',' instanceof Array',')){m=[m]}','var l=','m[0];if(!(l instanceof Function)){l=this[l]}l.apply(this,["\\\\"+k].concat(m.slice(1)))}',74,'g.mathchar0mi[k',']){p=',117,'];n={','mathvariant:i.VARIANT.','ITALIC};if(p',112,'){n=p[1];p=p[0]}',66,'this.mmlToken(','i.mi','(i.entity("#x"+p)).With(n)))}else{if(g.','mathchar0mo[k',']){p=g.',129,120,'stretchy:','f};if(p',112,'){n=p[1];n.stretchy=f;p=p[0]}',66,126,'i.mo',128,'mathchar7[k',130,141,120,121,'NORMAL','};if(p',112,124,'if(','this.stack.env','.font){','n.','mathvariant','=',151,'.font}',66,126,'i.mi',128,'delimiter["\\\\"+k',']!=null){var o=g.',162,'];n={};if(o',112,'){n=o[1];o=o[0]}if(o.length===4){o=i.entity("#x"+o)}else{o=i.chars(o)}',66,126,'i.mo(o).With({','fence:f,',133,'f}).With(n)))}',83,'csUndefined','("\\\\"+k)}}}}}},',175,60,'k){','d.Error("','Undefined control sequence "+k)},',77,60,'l){var ','k={};if(',151,152,'k.',154,'=',151,157,66,126,'i.mi(i.chars(','l)).With','(k)))},Number',60,'m){var k,l=','this.string.slice(','this.i-1).match(g.number);if(l){k=i.mn(l[0].replace(/[{}]/g,""));this.i+=l[0].length-1}else{k=','i.mo(i.chars(','m))}if(',151,152,'k.',154,'=',151,157,66,126,'k))},Open',60,'k){',66,'b.open())},Close',60,'k){',66,'b.close())},Tilde',60,'k){',66,'i.mtext(i.chars(','h)))},Space',60,'k){},Superscript',60,'m){var k,l=this.stack.Prev();if(!l){l=i.mi("")}if(l.isEmbellishedWrapper){l=l.data[0].data[0]}if(l.type==="msubsup"){if(l.data[l.','sup]){if(!l.data[l.sup].isPrime){',180,'Double exponent',': use braces to clarify")}','l=i.msubsup(l,null,null',')}k=l.sup','}else{if(l.movesupsub){if(l.type!=="munderover"||l.data[l.','over',']){l=i.munderover(l,null,null).With({movesupsub:c})}k=l.','over}else{',235,');k=l.sup}}',66,'b.subsup(l).With({position:k}))},','Subscript',60,230,'sub]){',180,'Double subscripts',234,'k=l.sub',237,'under',239,'under}else{',235,');k=l.sub}}',66,244,'PRIME:','String.fromCharCode(','8242),SMARTQUOTE:',262,'8217),Prime',60,'m){',114,86,'Prev();if(!l){l=i.mi()}if(l.type==="msubsup"&&l.data[l.sup]){',180,'Prime causes double exponent',234,'var k="";this.i--;do{k+=this.PRIME;this.i++,m=','this.GetNext','()}while(m==="\'"||m===this.SMARTQUOTE);k=',126,202,'k)).With({','isPrime:c,variantForm:d.isSTIX}));',66,'i.msubsup(l,null,k))},Comment',60,'k){',70,'&&',72,')!="\\n"){this.i++}},Hash',60,'k){',180,'You can\'t use \'','macro parameter ','character #\' in math mode")},Other',60,'m){var l={',133,'false},k;if(',151,152,'l.',154,'=',151,157,'if(g.remap[m]){m=g.remap[m];if(m',112,'){l=m[1];m=m[0]}k=','i.mo(i.entity("#x"+','m))}else{k=i.mo(m)}if(k.autoDefault("texClass",true)==""){k=','i.TeXAtom(','k)}',66,126,'k.With(l)))},SetFont',60,'l,k){',151,'.font=k},SetStyle',60,'l,k,m,n){',151,'.style=k;',151,'.level=n;',66,'b.style().With({styles:{','displaystyle',':m,','scriptlevel',':n}}))},SetSize',60,'k,l){',151,'.size=l;',66,327,'mathsize:l+"em"}}))},Color',60,'m){',114,'this.GetArgument(','m);',50,151,'.color;',151,'.color=l;var n=','this.ParseArg(','m);if(k){',151,'.color}','else{delete ',151,352,66,'i.mstyle(n).With({mathcolor:l}))},Spacer',60,333,66,'i.mspace().With({width:','l,','mathsize:i.SIZE.NORMAL,scriptlevel:','1}))},LeftRight',60,'k){',66,'b[k.substr(1)]().With({delim:','this.GetDelimiter(','k)}))},NamedOp',60,'m,l,o){var n=(l!=null&&l===0?f:c);if(!o){o=m.substr(1)}l=((l||l==null)?c:f);o=o.replace(/&thinsp;/,',262,'8198));',50,170,'movablelimits',':l,','movesupsub',':n',',form:i.FORM.PREFIX,texClass:i.TEXCLASS.OP','});k','.useMMLspacing&=~','k','.SPACE_ATTR.form',';',66,126,'k))},Limits',60,317,109,86,'Prev("nopop");if(m.texClass!==','i.TEXCLASS.OP){','d.Error(l+" is allowed only on operators")}m.',379,'=(k?c:f);m.',377,'=f},Over',60,'m,l,n){',50,'b.over','().With({name:','m});if(l||n){k.open=l;k.close=n}',74,'m.match(/withdelims$/)){k.open=',369,'m);k.close=',369,'m)}}if(','m.match(/^\\\\','above/)){','k.thickness=','this.GetDimen(','m)}',74,413,'atop/)||l||n){',415,'0}}',66,'k)},Frac',60,184,'k=',349,'l);',109,349,'l);',66,'i.mfrac(k,m))},Sqrt',60,184,'m=','this.GetBrackets(','l),k=',349,'l);if(m==""){k=i.msqrt.apply(i,k.array())}else{k=','i.mroot(k,this.parseRoot(m','))}',66,'k)},Root',60,184,'m=','this.GetUpTo(','l,"\\\\of");',50,349,'l);',66,442,')))},parseRoot',60,'p){',114,151,',k=l.inRoot;l.inRoot=true;var o=','d.Parse(','p,l);p=o.mml();',109,'o.stack.global;if(m.leftRoot||m.upRoot){p','=i.mpadded(','p);if(m.leftRoot){p.width=m.leftRoot}if(m.upRoot){p.voffset=m.upRoot;p.height=m.upRoot}}l.inRoot=k;',93,'p},MoveRoot',60,'k,m){if(!',151,'.inRoot){d.Error(k+" can appear only within a root")}if(',86,'global[m]){',180,'Multiple use of "+k)}',114,342,'k);if(!l.match(/-?[0-9]+/)){',180,'The',' argument to "+','k+" must be an integer")}l=(l/15)+"em";if(l.substr(0,1)!=="-"){l="+"+l}',86,'global[m]=l},Accent',60,'m,k,o){var n=',349,'m);',114,126,309,279,'accent:c}));l.stretchy=(o?c:f);',66,'i.munderover(','n,null,l).With({accent:c}))},UnderOver',60,'m,p,k){var o={o:"over",u:"under"}[m.charAt(1)];var n=',349,'m);if(n.Get("',377,'")){n.',377,'=false}',114,497,'n,null,null);if(k){l.',379,'=c}l.data[l[o]]=',126,309,'p)).With({',133,'c,accent:(o=="under")}));',66,'l)},Overset',60,'k){',109,349,'k),l=',349,'k);',66,497,'l,null,m))},Underset',60,'k){',109,349,'k),l=',349,'k);',66,497,'l,m,null))},TeXAtom',60,'n,p){var o={texClass:p},m;if(p==',395,'o.',379,'=o.',377,'=c;',50,342,'n);',114,'k.match(/^\\s*\\\\rm\\s+([a-zA-Z0-9 ]+)$/);if(l){m=',126,'i.mo(l[1]).With({',377,':c,',379,':c,',121,146,381,'}));m',383,'m',385,'}','else{m=',311,462,'k,',151,').mml()).With(o)}}',566,311,349,'n)).With(o)}',66,'m)},Strut',60,'k){',66,'i.mpadded(i.mrow()).With','({height:"8.6pt",depth:"3pt",width:0}))},Phantom',60,'l,k,m){var n=i.mphantom(',349,'l));if(k||m){n',466,'n);if(m){n.height=n.depth=0}if(k){n.width=0}}',66,'n)},Smash',60,'m){',114,'this.trimSpaces(',438,'m));var k',466,349,'m));','switch(','l){case"b":k.depth=0;','break;case','"t":k.height=0;break;default:k.height=k.depth=0}',66,'k)},Lap',60,184,'k',466,349,196,'({width:0});if(l==="\\\\llap"){k.lspace="-1 width"}',66,'k)},RaiseLower',60,'k){',114,416,'k);',109,'b.position().With({name:k,move:"','vertical"});if(l.charAt(0)==="-"){l=l.slice(1);k={raise:"\\\\lower",lower:"\\\\raise"}[k.substr(1)]}if(k==="\\\\lower"){m.dh="-"+l;m.dd=l}else{m.dh=l;m.dd="-"+l}',66,'m)},MoveLeftRight',60,'k){var n=',416,'k);var m=(n.charAt(0)==="-"?n.slice(1):"-"+n);if(k==="\\\\moveleft"){',114,'n;n=m;m=l}',66,621,'horizontal",left:',361,'n,',363,'1}),right:',361,'m,',363,'1})}))},Hskip',60,'k){',66,361,416,'k),',363,'0}))},Rule',60,'m,o){',50,416,'m),n=',416,'m),q=',416,'m);var l,p={width:k,height:n,depth:q};if(o!=="blank"){l=',581,'(p);if(parseFloat(k)&&parseFloat(n)+parseFloat(q)){l=i.mstyle(l).With({mathbackground:(',151,'.color||"black")})}}else{l=i.mspace().With(p)}',66,'l)},MakeBig',60,'k,n,l){l*=g.p_height;l=String(l).replace(/(\\.\\d\\d\\d).+/,"$1")+"em";',109,369,'k);',66,311,'i.mo(m).With({minsize:l,maxsize:l,',330,':0,fence:c,',133,'c,symmetric:c})).With({texClass:n}))},BuildRel',60,'k){',114,'this.','ParseUpTo','(k,"\\\\over");',109,349,'k);',66,311,497,'m,null,',196,'({mclass:i.TEXCLASS.REL}))},HBox',60,333,'this.',87,',this.','InternalMath','(',342,'k),l))},FBox',60,'k){',66,'i.menclose.apply(i,this.',697,'(',342,'k))).With({notation:"box"}))},Require',60,'k){',114,342,'k);','this.Extension(','null,l)},Extension',60,'k,l,m){','if(k&&!typeof(k)==="',55,'k=k.name}l=d.extensionDir+"/"+l;if(!l.match(/\\.js$/)){l+=".js"}if(!','MathJax.Ajax.','loaded[',721,'fileURL(l)]){if(k!=null){delete g[m||"macros"][k.replace(/^\\\\/,"")]}','MathJax.Hub.','RestartAfter(',721,'Require(l))}},Macro',60,'l,o,n){if(n){var k=[];for(',109,'0;m<n;m++){k.push(',342,'l))}o=this.','SubstituteArgs','(k,o)}',62,'this.AddArgs(','o,',200,'this.i));this.i=0},Matrix',60,'l,n,s,p,q,m,k){var r=',275,'();if(r===""){','d.Error("Missing ','argument for "+l)}','if(r==="{"){this.i++}else{',62,'r+"}"+',200,'this.i+1);this.i=0}var o','=b.array().With({','requireClose:c,arraydef:{rowspacing:(m||"4pt"),','columnspacing:(','q||"1em")}});if(n||s){o.open=n;o.close=s}if(k==="D"){o','.arraydef.',328,'=c}if(p!=null){o',757,'columnalign=p}',66,'o)},Entry',60,'k){',66,'b.cell().With({','isEntry:c,name:k}))},Cr',60,'k){',66,767,'isCR:c,name:k}))},HLine',60,61,'if(m==null){m="solid"}var n=',86,'Top();if(n.type!=="array"||n.data','.length){',180,'Misplaced "+l)}if(n.table.length==0){n',757,'frame=m}else{var k=(n',757,'rowlines','?n',757,785,'.split(/ /):[]);while(k.length<n.table',779,'k.push("none")}k[n.table.length-1]=m;n',757,785,'=k.join(" ")}},Begin',60,184,'m=',342,'l);if(m.match','(/[^a-z*]/i)){d.Error(\'Invalid ','environment',' name "\'+m+\'"\')}if(!g.',801,'[m]){d.Error(\'Unknown ',801,' "\'+m+\'"\')}var n=g.',801,'[m];if(!(n',112,')){n=[n]}',50,'b.begin',405,'m,end:n[1],parse:this});if(n[0]&&this[n[0]]){k=this[n[0]].apply(this,[k].concat(n.slice(2)))}',66,'k)},End',60,'k){',66,'b.end',405,342,'k)}))},Equation',60,'k,l',100,'l},ExtensionEnv',60,317,714,'l.name,k,"',801,'")},Array',60,'m,o,t,r,s,n,k,p){if(!r){r=this.GetArgument("\\\\begin{"+m.name+"}")}var u=("c"+r).replace(/[^clr|:]/g,"").replace(/[^|:]([|:])+/g,"$1");r=r.replace(/[^clr]/g,"").split("").join(" ");r=r.replace(/l/g,"left").replace(/r/g,"right").replace(/c/g,"center");var q',753,'arraydef:{columnalign:r,',755,'s||"1em"),rowspacing:(n||"4pt")}});if(u.match(/[|:]/)){var l=(u.charAt(0)+u.charAt(u.length-1)).replace(/[^|:]/g,"");if(l!==""){q',757,'frame={"|":"solid",":":"dashed"}[l.charAt(0)];q',757,'framespacing=".5em .5ex"}u=u.substr(1,u.length-2);q',757,'columnlines=u.split("").join(" ").replace(/[^|: ]/g,"none").replace(/\\|/g,"solid").replace(/:/g,"dashed")}if(o){q.open=','this.convertDelimiter(','o)}if(t){q.close=',846,'t)}if(k==="D"){q',757,328,'=c}if(k==="S"){q',757,330,'=1}if(p){q',757,'useHeight=f}',66,'m);',93,'q},convertDelimiter',60,'k){if(k){k=g.delimiter[k]}if(k==null',100,94,'if(k',112,'){k=k[0]}if(k.length===4){k=',262,'parseInt(k,16))}',93,'k},trimSpaces',60,'k){if(typeof(k)!="',55,93,'k}',93,'k','.replace(/^\\s','+|\\s+$/g,"")},nextIsSpace',68,93,72,').match(/[ \\n\\r\\t]/)},GetNext',68,'while','(this.nextIsSpace()){this.i++}',93,72,')},GetCS',68,50,200,'this.i).match(/^([a-z]+|.) ?/i);','if(k){this.i+=k[','1].length;',93,'k[1]}',83,'i++;return" "}},GetArgument',60,61,600,275,'()){case"":if(!m){',746,747,93,'null;case"}":if(!m','){d.Error("Extra close brace',' or missing open brace")}',93,'null;','case"\\\\":this.i++;','return"\\\\"+',105,'();case"{":','var k=++this.i,','n=1;',70,'){',600,72,'++)){',915,602,'"{":n','++;break;case"}":if(','n==0',911,'")}if(--n==0',100,200,'k,this.i-1)}break}}',746,'close brace");break}',93,72,'++)},GetBrackets',60,'l){if(',275,'()!="["){return""}',919,'m=0;',70,'){',600,72,'++)){case"{":m++;',602,'"\\\\":this.i',929,'m--<=0',911,' while looking for',' \']\'")}',602,'"]":if(m==0',100,200,'k,this.i-1)}break}}',180,'Couldn\'t find',' closing \']\' for',483,'l)},GetDelimiter',60,'k){while',888,114,72,');if(this.i<this.string',779,'this.i++;if(l=="\\\\"){l+=',105,'(k)}if(g.delimiter[l]!=null',100,846,'l)}}',746,'or unrecognized delimiter for "+k)},GetDimen',60,184,'m;if',888,'if(',72,')=="{"){m=',342,799,'(/^\\s*([-+]?(\\.\\','d+|\\d+(\\.\\d*)?))\\s*(pt|em|ex|mu|px|mm|cm|in|pc',')\\s*$/)){',93,'m.','replace(/ /g,"")}}',566,200,'this.i);',50,'m.match(/^\\s*(([-+]?(\\.\\',994,')) ?/);',896,'0].length;',93,'k[1].',998,746,'dimension or its units for "+l)},GetUpTo',60,'n,o){while',888,109,'this.i,l,q,p=0;',70,'){l=this.i;q=',72,'++);',600,'q){case"\\\\":q+=',105,'();',602,'"{":p',929,'p==0',911,957,' "+o)}p--;break}if(p==0&&q==o',100,200,'m,l)}}',180,965,' "+o+" for "+n)},ParseArg',60,'k',100,462,342,'k),',151,').mml()},',681,60,'k,l',100,462,449,'k,l),',151,1046,697,60,'q,s){var p={',328,':f};if(s!=null){p.',330,'=s}if(',151,152,'p.',154,'=',151,157,'if(!q.match(/\\$|\\\\\\(/)){return[this.','InternalText','(q,p)]}var o=0,l=0,r,n="";var m=[];while(o<q',779,'r=q.charAt(o++);if(r','==="$"){if(n==="$"){','m.push(i.TeXAtom(d.Parse(q.slice(l,o-','1',')).mml().With(p)));n="";l=o','}',74,'n===""){if(l<o-','1','){m.push(this.InternalText(q.slice(l',',o-1),p))}n="$";l=o}}}',74,'r','==="\\\\"){',1074,'==="("&&',1081,'2',1083,',o-2),p))}n=")";l=o}',74,'r===")"&&n===")"){',1076,'2',1078,'}}}}}if(n!==""){',180,'Math not terminated in text box")}if(l<q.length',1083,'),p))}',93,'m},',1071,60,317,'l=l',880,'+/,h).replace(/\\s+$/,h);',93,225,196,'(k)},',735,60,317,'var o="";var n="";var p;',109,'0;while(m<k',779,'p=k.charAt(m++);if(p',1087,'o+=p+k.charAt(m++)}',74,'p==="#"){',1123,'==="#"){o+=p}else{if(!p.match(/[1-9]/)||p>l',779,180,'Illegal ',293,'reference")}n=',738,738,'n,o),l[p-1]);o=""}}else{o+=p}}}',93,738,'n,o)},AddArgs',60,317,'if(k.match(/^[a-z]/i)&&l.match(/(^|[^\\\\])(\\\\\\\\)*\\\\[a-z]+$/i)){l+=" "}',93,'l+k}});d.Augment({Stack:e,Parse:a,Definitions:g,Startup:j,Translate',60,'k){var l,n=k.innerHTML',880,'+/,"").replace(/\\s+$/,"");if(',725,'Browser.isKonqueror){n=n.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}var o=(k.type.replace(/\\n/g," ").match(/(;|\\s|\\n)mode\\s*=\\s*display(;|\\s|\\n|$)/)!=null);n=d.','prefilterMath','(n,o,k);try{l=',462,'n).mml()}catch(m){if(!m.texError){throw m}l=this.formatError(m,n,o,k)}if(l.inferred){l=i.apply(MathJax.ElementJax,l.data)}else{l=i(l)}if(o){l.root.display="block"}',93,'this.','postfilterMath','(l,o,k)},',1152,60,'l,m,k',100,'l.replace(/([_^]\\s*\\d)([0-9.,])/g,"$1 $2")},',1158,60,'l,m,k){this.','combineRelations','(l.root);',93,'l},formatError',60,'m,l,n,k',100,'i.merror(m.message.replace(/\\n.*/,""))},Error',60,'k){throw ',725,'Insert(Error(k),{texError:c})},Macro',60,717,107,']=["Macro"].concat([].slice.call(arguments,1))},',1168,60,'l){for(var n=0,k=l.data.length;n<k;n++){if(l.data[n]){if(l.isa(i.mrow)){while(n+1<k','&&l.data[n+1',']&&l.data[n','].isa(i.mo)&&l.data[n','+1',1189,'].Get("texClass")===i.TEXCLASS.REL',1187,1192,'){l.data[n].Append.apply(l.data[n],l.data[n+1].data);l.data.splice(n+1,1);k--}}if(!l.data[n].isToken){this.',1168,'(l.data[n])}}}}});d.loadComplete("jax.js")})(MathJax.InputJax.TeX);']
]);

