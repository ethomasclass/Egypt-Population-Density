const B = require('./build.js');
const {Document,Packer,Paragraph,AlignmentType,BorderStyle,ShadingType,PageBreak,
       W,INK,MUT,SEAL,RULE,SOFT,t,p,txt,head,lines,q,boxes,work,table,gap,fs} = B;

const body = [];
const add = (...x)=>x.forEach(e=>body.push(e));

/* ── masthead ───────────────────────────────────────────── */
add(new Paragraph({spacing:{after:0},border:{bottom:{style:BorderStyle.SINGLE,size:12,color:SEAL,space:4}},
  children:[t("THE ALLOCATION",{b:true,sz:38}),t("   Lab Guide",{sz:28,c:MUT})]}));
add(txt("Global Food Security Unit  ·  Case 2.1-EGY  ·  Emergency Cereal Fund",
  {sz:18,c:SEAL,before:60,after:160}));
add(table(["Analyst 1","Analyst 2","Date","Period"],[["","","",""]],
  {w:[3200,3200,2040,1640],h:420}));
add(gap(140));

add(table(["How this works"],[[""]],{w:[W]}));
body.pop();
add(new B.Table({width:{size:W,type:B.WidthType.DXA},columnWidths:[W],
  rows:[new B.TableRow({children:[new B.TableCell({width:{size:W,type:B.WidthType.DXA},
    shading:{type:ShadingType.CLEAR,fill:SOFT},borders:B.BOX(),
    margins:{top:100,bottom:100,left:140,right:140},children:[
    p([t("You and your partner are analysts. ",{b:true}),
       t("Five countries have asked for help buying food. You have $100 million to split between them. Evidence arrives in four rounds, and each round can change your mind.")],{after:70}),
    p(t("Work in the app. Record here. The app checks your answers — this sheet shows your thinking.",{i:true,c:MUT}),{after:0})
  ]})]})]}));
add(gap(150));

/* ── vocabulary ─────────────────────────────────────────── */
add(txt("BEFORE YOU START — fill in the four terms",{b:true,sz:20,c:SEAL,after:90}));
add(table(["Term","Complete the formula"],[
  ["Arable land","means land you can ______________________________"],
  ["Arithmetic density","people  ÷  ______________________________"],
  ["Physiological density","people  ÷  ______________________________"],
  ["Agricultural density","______________________  ÷  farmland"],
],{w:[3000,7080],h:400}));

/* ── ROUND 1 ────────────────────────────────────────────── */
add(gap(200), head("ROUND 1","Who looks worst?","about 6 minutes"), gap(120));
add(q("1","Open Briefing 01. Use the Calculation Bench to work out arithmetic density for Egypt and Sudan, then fill in the table."));
add(table(["Country","Population","Total area (sq mi)","Arithmetic density"],[
  ["Egypt","87,450,000","386,662",""],
  ["Sudan","47,958,856","718,723",""],
],{w:[2400,2800,2600,2280],h:400}));
add(gap(90), work("Show your work:",760));
add(q("2","Rank all five countries from MOST crowded (1) to LEAST crowded (5) using arithmetic density."));
add(table(["1 — most crowded","2","3","4","5 — least"],[["","","","",""]],
  {w:[2400,1920,1920,1920,1920],h:420}));
add(q("3","Open the Settlement Distribution Survey. Write the pattern each country shows: linear, clustered, or dispersed."));
add(table(["Egypt","Niger","Bangladesh"],[["","",""]],{w:[3360,3360,3360],h:420}));
add(q("4","Two countries have almost the same arithmetic density but very different patterns. Which two, and how are they different?"));
add(...lines(2));
add(q("5","Before you lock: name one thing this evidence CANNOT tell you."));
add(...lines(1));

add(new Paragraph({children:[new PageBreak()]}));

/* ── prediction 1 ───────────────────────────────────────── */
add(new B.Table({width:{size:W,type:B.WidthType.DXA},columnWidths:[W],
  rows:[new B.TableRow({children:[new B.TableCell({width:{size:W,type:B.WidthType.DXA},
    borders:B.BOX(SEAL),margins:{top:110,bottom:110,left:140,right:140},children:[
    p([t("PREDICTION 1",{b:true,c:SEAL,sz:19}),t("   — commit before you see Round 2",{c:MUT,sz:18})],{after:70}),
    p(t("Which country do you think has the LEAST farmland per person?",{b:true}),{after:80}),
    boxes(["Egypt","Yemen","Bangladesh","Sudan","Niger"]),
    p(t("Why?",{sz:19,c:MUT}),{after:40}),
    new Paragraph({spacing:{after:0},border:{bottom:{style:BorderStyle.SINGLE,size:4,color:RULE,space:2}},children:[t("")]})
  ]})]})]}));

/* ── ROUND 2 ────────────────────────────────────────────── */
add(gap(200), head("ROUND 2","Measure the farmland instead","about 10 minutes"), gap(120));
add(q("6","Open the Arable Land Survey. Work these on the Calculation Bench, then fill in the table."));
add(table(["Country","Population","Farmland (sq mi)","Physiological density"],[
  ["Egypt","87,450,000","10,827",""],
  ["Yemen","30,984,689","4,485",""],
  ["Niger","27,322,555","60,171",""],
],{w:[2400,2800,2600,2280],h:380}));
add(gap(90), work("Show your work:",900));
add(q("7","Egypt's arithmetic density was 226 — fourth of five. Its physiological density is __________ — first of five. Nothing about Egypt changed. What DID change?"));
add(...lines(2));
add(q("8","Flip the number over: farmland per person = 640 ÷ physiological density. Fill in the acres."));
add(table(["Egypt — acres per person","Sudan — acres per person","Which has more room to grow food?"],
  [["","",""]],{w:[3200,3200,3680],h:420}));
add(q("9","Japan's physiological density is 8,218 — HIGHER than Egypt's 8,077 — and Japan is not on your list of countries needing help. Why not?"));
add(...lines(2));
add(q("10","Did your allocation change this round? Which country went up, and which went down?"));
add(...lines(2));
add(q("11","Before you lock: name one thing this evidence CANNOT tell you."));
add(...lines(1));

add(new Paragraph({children:[new PageBreak()]}));

/* ── ROUND 3 ────────────────────────────────────────────── */
add(head("ROUND 3","The Sudan correction","about 6 minutes"), gap(120));
add(q("12","Open the Data Revision Notice. Fill in what changed and what did not."));
add(table(["","Before the revision","After the revision"],[
  ["Sudan's population","",""],
  ["Sudan's arithmetic density","",""],
  ["Sudan's physiological density","",""],
  ["People driven from home","",""],
],{w:[3680,3200,3200],h:360}));
add(q("13","Eleven million people moved. Why did none of Sudan's density numbers change?"));
add(...lines(3));
add(q("14","Circle the word that describes what actually changed in Sudan:"));
add(p([t("        DISTRIBUTION            ",{b:true,sz:24}),t("or",{c:MUT}),
       t("            DENSITY",{b:true,sz:24})],{after:120}));
add(q("15","Density did not find Sudan's crisis. What kind of information WOULD show it?"));
add(...lines(2));

/* ── prediction 2 ───────────────────────────────────────── */
add(gap(170));
add(new B.Table({width:{size:W,type:B.WidthType.DXA},columnWidths:[W],
  rows:[new B.TableRow({children:[new B.TableCell({width:{size:W,type:B.WidthType.DXA},
    borders:B.BOX(SEAL),margins:{top:110,bottom:110,left:140,right:140},children:[
    p([t("PREDICTION 2",{b:true,c:SEAL,sz:19}),t("   — commit before you open the Food Balance",{c:MUT,sz:18})],{after:70}),
    p(t("Egypt and Yemen have almost the same physiological density and almost the same farmland per person. Who grows more food per person?",{b:true}),{after:80}),
    boxes(["About the same","Egypt, a little more","Egypt, several times more","Yemen grows more"]),
    p(t("Why?",{sz:19,c:MUT}),{after:40}),
    new Paragraph({spacing:{after:0},border:{bottom:{style:BorderStyle.SINGLE,size:4,color:RULE,space:2}},children:[t("")]})
  ]})]})]}));

add(new Paragraph({children:[new PageBreak()]}));

/* ── ROUND 4 ────────────────────────────────────────────── */
add(head("ROUND 4","What the land actually grows","about 10 minutes"), gap(120));
add(q("16","Open the Farm Report and the Food Balance. Work these two on the Calculation Bench."));
add(table(["What to find","The numbers you need","Your answer"],[
  ["Niger — agricultural density","5,100,000 farmers  ÷  60,171 sq mi farmland",""],
  ["Yemen — food grown per person","0.09 acres per person  ×  405 kg per acre",""],
],{w:[3200,4880,2000],h:400}));
add(gap(90), work("Show your work:",760));
add(q("17","Fill in the two countries side by side from the Food Balance."));
add(table(["","Physiological density","Acres per person","Kg grown per acre","Food per person (kg)"],[
  ["Egypt","","","",""],
  ["Yemen","","","",""],
],{w:[1800,2320,2000,1960,2000],h:380}));
add(q("18","Almost the same density. Very different results. In one sentence, what makes the difference?"));
add(...lines(2));
add(q("19","A person needs about 150 kg of grain a year. Which country here grows less than that?"));
add(...lines(1));
add(q("20","THE TRAP. Niger's agricultural density is 85. Bangladesh's is 431. Low agricultural density usually means a country has machines doing the farming. Does Niger have more machines than Bangladesh? Use the kg-per-acre column to explain."));
add(...lines(3));
add(q("21","FINAL RECOMMENDATION. You now have $45 million, not $100 million."));
add(table(["Egypt","Yemen","Bangladesh","Sudan","Niger","Total"],
  [["","","","","","$45M"]],{w:[1780,1780,1780,1780,1780,1180],h:440}));
add(gap(90));
add(q("22","Name the step of the chain that decided it, name one density measure you used, and say what you gave up."));
add(...lines(4));

add(new Paragraph({children:[new PageBreak()]}));

/* ── debrief ────────────────────────────────────────────── */
add(head("AFTER","What your answer followed","about 3 minutes"), gap(120));
add(q("23","Your printed recommendation shows which measure your money followed each round. Copy it here."));
add(table(["Round 1","Round 2","Round 3","Round 4"],[["","","",""]],
  {w:[2520,2520,2520,2520],h:440}));
add(q("24","Did your row change across the four rounds? Nothing about the five countries changed. So what did?"));
add(...lines(3));
add(gap(120));
add(txt("EXIT QUESTIONS",{b:true,sz:20,c:SEAL,after:100}));
add(q("25","Which density measure was MOST useful for deciding who needed food? Why?"));
add(...lines(3));
add(q("26","Which one was MOST misleading? Why?"));
add(...lines(3));
add(q("27","Finish this sentence: Density tells you ______________________________, but it does not tell you ______________________________."));
add(...lines(2));

const doc = new Document({
  creator:"Global Food Security Unit",title:"The Allocation — Lab Guide",
  sections:[{properties:{page:{size:{width:12240,height:15840},
    margin:{top:1080,right:1080,bottom:1080,left:1080}}},children:body}]});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync("The-Allocation-Lab-Guide.docx",b);
  console.log("wrote The-Allocation-Lab-Guide.docx",b.length,"bytes");});
