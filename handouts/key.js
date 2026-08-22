const B = require('./build.js');
const {Document,Packer,Paragraph,AlignmentType,BorderStyle,ShadingType,PageBreak,
       W,INK,MUT,SEAL,RULE,SOFT,t,p,txt,head,q,table,gap,fs} = B;
const body=[]; const add=(...x)=>x.forEach(e=>body.push(e));

const ans=(num,answer)=>p([t(num+".  ",{b:true,c:SEAL}),t(answer)],{after:70,before:40});
const listen=(s)=>new B.Table({width:{size:W,type:B.WidthType.DXA},columnWidths:[W],
  rows:[new B.TableRow({children:[new B.TableCell({width:{size:W,type:B.WidthType.DXA},
    shading:{type:ShadingType.CLEAR,fill:SOFT},borders:B.BOX(),
    margins:{top:90,bottom:90,left:140,right:140},
    children:[p([t("Listen for:  ",{b:true,sz:18,c:SEAL}),t(s,{sz:19})],{after:0})]})]})]});

add(new Paragraph({spacing:{after:0},border:{bottom:{style:BorderStyle.SINGLE,size:12,color:SEAL,space:4}},
  children:[t("ANSWER KEY",{b:true,sz:38}),t("   The Allocation Lab Guide",{sz:26,c:MUT})]}));
add(txt("Teacher copy — do not distribute  ·  AMSCO Topic 2.1, Population Distribution",
  {sz:18,c:SEAL,before:60,after:170}));

add(txt("THE FOUR TERMS",{b:true,sz:21,c:SEAL,after:90}));
add(table(["Term","Answer"],[
  ["Arable land","land you can grow crops on"],
  ["Arithmetic density","people ÷ total land area"],
  ["Physiological density","people ÷ farmland (arable land)"],
  ["Agricultural density","farmers ÷ farmland"],
],{w:[3000,7080]}));

/* ROUND 1 */
add(gap(200), head("ROUND 1","Who looks worst?",""), gap(120));
add(ans("1","Egypt 87,450,000 ÷ 386,662 = 226.  Sudan 47,958,856 ÷ 718,723 = 67. (App accepts ±3%.)"));
add(ans("2","Bangladesh 2,914 · Egypt 226 · Yemen 152 · Sudan 67 · Niger 56."));
add(ans("3","Egypt = linear.  Niger = clustered.  Bangladesh = dispersed."));
add(ans("4","Sudan (67) and Niger (56). Sudan's people run in a line along the Nile; Niger's are packed into a southern strip with two-thirds of the country empty. Same density, different shape — the point of the AMSCO A/B/C diagram."));
add(ans("5","Accept anything real: how good the farmland is, how much food they grow, whether they have money, how much of the land is desert."));
add(listen("Most pairs fund Bangladesh heavily and give Egypt almost nothing. That is the intended trap — let it happen."));

/* ROUND 2 */
add(gap(180), head("ROUND 2","Measure the farmland instead",""), gap(120));
add(ans("6","Egypt 87,450,000 ÷ 10,827 = 8,077.  Yemen 30,984,689 ÷ 4,485 = 6,909.  Niger 27,322,555 ÷ 60,171 = 454."));
add(ans("7","8,077. The bottom of the fraction changed — we divided by farmland instead of total land. Egypt is 97% desert, so almost all its land drops out."));
add(ans("8","Egypt 640 ÷ 8,077 = 0.08 acres.  Sudan 640 ÷ 425 = 1.51 acres.  Sudan has far more room."));
add(ans("9","Japan is rich and buys food from other countries. Crowded farmland tells you a country cannot feed itself from its own land — not that its people go hungry. This is stated in the reading."));
add(ans("10","Expect Egypt and Yemen up, Bangladesh down. Bangladesh has the highest arithmetic density but 59% of it is farmland."));
add(ans("11","The strongest answer is 'we don't know how much food that land actually grows.' A pair who writes that has predicted Round 4."));
add(listen("The sentence you want: “nothing about Egypt changed — we changed what we divided by.”"));

/* ROUND 3 */
add(gap(180), head("ROUND 3","The Sudan correction",""), gap(120));
add(ans("12","Population 47,958,856 both columns. Arithmetic density 67 both. Physiological density 425 both. Driven from home: — before, about 11,000,000 after."));
add(ans("13","Nobody entered or left Sudan. Eleven million people moved inside the same country, so the national totals — and every density built from them — stayed exactly the same."));
add(ans("14","DISTRIBUTION."));
add(ans("15","Accept: where inside the country people are now, refugee or displacement counts, food prices by region, whether farmers can reach their fields, satellite images of unharvested crops."));
add(listen("This is the AMSCO p.58 A/B/C diagram happening in real life: the pattern changed, the density did not."));

/* ROUND 4 */
add(new Paragraph({children:[new PageBreak()]}));
add(head("ROUND 4","What the land actually grows",""), gap(120));
add(ans("16","Niger: 5,100,000 ÷ 60,171 = 85.  Yemen: 0.09 × 405 = 36, and the app's exact figure is 37 — anything from 36 to 39 passes."));
add(ans("17","Egypt: 8,077 · 0.08 acres · 2,630 kg per acre · 208 kg per person.  Yemen: 6,909 · 0.09 acres · 405 kg per acre · 37 kg per person."));
add(ans("18","Yield. Egypt grows about six times more on each acre, because the Nile valley is irrigated and cropped twice a year. Yemen farms dry mountain terraces."));
add(ans("19","Yemen — 37 kg against a 150 kg line, about a quarter of a year's ration. Everyone else is above the line."));
add(ans("20","No. Niger has almost no machines. Its agricultural density is low because it has a lot of poor land and few farmers on it. The kg-per-acre column settles it: the Netherlands grows 3,602 kg per acre, Niger grows 202. Same low density, opposite reason."));
add(ans("21","There is no single correct split. A strong answer funds Yemen heavily (production collapse) and Sudan meaningfully (people cut off from food they grew), and funds Egypt little or nothing."));
add(ans("22","Look for a named step (yield, or ability to pay), a named density, and an honest statement of what was cut."));
add(listen("Question 20 is usually the argument of the period. Let it run — the yield column is the evidence that settles it."));

/* the big one */
add(gap(180));
add(new B.Table({width:{size:W,type:B.WidthType.DXA},columnWidths:[W],
  rows:[new B.TableRow({children:[new B.TableCell({width:{size:W,type:B.WidthType.DXA},
    borders:B.BOX(SEAL),margins:{top:120,bottom:120,left:150,right:150},children:[
    p(t("THE POINT OF THE WHOLE LAB",{b:true,c:SEAL,sz:21}),{after:90}),
    p(t("Egypt and Yemen have almost the same physiological density (8,077 and 6,909) and almost the same farmland per person (0.08 and 0.09 acres). Egypt grows 208 kg of food per person. Yemen grows 37.",{}),{after:80}),
    p(t("Density found where the pressure on the land is. It could not tell you who was hungry. That took yield, and then income.",{b:true}),{after:0})
  ]})]})]}));

/* DEBRIEF */
add(gap(180), head("AFTER","Debrief",""), gap(120));
add(ans("23","Copied from the printed recommendation. A learning pair usually reads: Arithmetic → Physiological → Physiological → Cereal shortfall."));
add(ans("24","Only the evidence changed — and what they chose to measure. A row that never moves means a pair either reasoned unusually well in Round 1 or stopped reading after it; their written answers will tell you which."));
add(ans("25","Best answers do not name a single one. Physiological density found Egypt and Yemen; it missed Sudan and Niger. Accept any measure defended with an example."));
add(ans("26","Arithmetic density is the usual answer — Egypt looked safe at 226. Agricultural density is the sharper answer, because a low number can mean tractors or poverty."));
add(ans("27","Model: “Density tells you how crowded the farmland is, but it does not tell you how much food that land grows, or whether people can reach it.”"));

add(gap(200));
add(txt("Data note",{b:true,sz:20,c:SEAL,after:70}));
add(txt("Figures are CIA World Factbook-era (2018–2022), chosen so Egypt (226 / 8,078) and Bangladesh (2,914 / 4,938) reproduce the AMSCO Topic 2.1 table on p.59. Farmer counts are estimates from agricultural share of employment, so agricultural densities are approximate — worth saying aloud. Sudan, Yemen and Niger are active humanitarian emergencies and the numbers move; check them before you teach this.",
  {sz:19,c:MUT}));

const doc=new Document({creator:"Global Food Security Unit",title:"The Allocation — Answer Key",
  sections:[{properties:{page:{size:{width:12240,height:15840},
    margin:{top:1080,right:1080,bottom:1080,left:1080}}},children:body}]});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync("The-Allocation-Answer-Key.docx",b);
  console.log("wrote The-Allocation-Answer-Key.docx",b.length,"bytes");});
