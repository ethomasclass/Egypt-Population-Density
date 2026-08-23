const B = require('./build.js');
const {Document,Packer,Paragraph,AlignmentType,BorderStyle,ShadingType,PageBreak,
       W,INK,MUT,SEAL,RULE,SOFT,t,p,txt,table,gap,fs} = B;
const {Table,TableRow,TableCell,WidthType} = B;
const body=[]; const add=(...x)=>x.forEach(e=>body.push(e));

const H1=(s)=>p(t(s,{b:true,sz:30}),{before:260,after:90,
  border:{bottom:{style:BorderStyle.SINGLE,size:10,color:SEAL,space:3}}});
const H2=(s)=>p(t(s,{b:true,sz:22,c:SEAL}),{before:200,after:80});
const P =(s,o={})=>p(t(s,o),{after:o.after??90});
const LI=(s)=>p([t("•  ",{c:SEAL,b:true}),t(s)],{after:50});
const box=(title,lines,fill)=>new Table({width:{size:W,type:WidthType.DXA},columnWidths:[W],
  rows:[new TableRow({children:[new TableCell({width:{size:W,type:WidthType.DXA},
    shading:{type:ShadingType.CLEAR,fill:fill||SOFT},borders:B.BOX(),
    margins:{top:100,bottom:100,left:140,right:140},children:[
      ...(title?[p(t(title,{b:true,sz:17,c:SEAL}),{after:70})]:[]),
      ...lines.map((l,i)=>p(t(l,{sz:19}),{after:i===lines.length-1?0:60}))
    ]})]})]});
// slide block
const slide=(n,title,layout,copy)=>{
  const out=[];
  out.push(new Table({width:{size:W,type:WidthType.DXA},columnWidths:[900,W-900],
    rows:[new TableRow({children:[
      new TableCell({width:{size:900,type:WidthType.DXA},shading:{type:ShadingType.CLEAR,fill:SEAL},
        borders:B.BOX(SEAL),margins:{top:70,bottom:70,left:80,right:80},
        children:[p(t(String(n),{b:true,c:"FFFFFF",sz:24}),{al:AlignmentType.CENTER,after:0})]}),
      new TableCell({width:{size:W-900,type:WidthType.DXA},borders:B.BOX(),
        margins:{top:70,bottom:70,left:130,right:130},
        children:[p(t(title,{b:true,sz:21}),{after:30}),
                  p(t(layout,{sz:17,c:MUT,i:true}),{after:0})]})]})]}));
  out.push(gap(80));
  copy.forEach(c=>{
    if(c[0]==="h") out.push(p(t(c[1],{b:true,sz:19}),{before:60,after:50}));
    else if(c[0]==="b") out.push(LI(c[1]));
    else if(c[0]==="q") out.push(p(t(c[1],{sz:19}),{after:70,
      border:{left:{style:BorderStyle.SINGLE,size:12,color:SEAL,space:8}}}));
    else out.push(P(c[1],{sz:19}));
  });
  out.push(gap(180));
  return out;
};

/* ── cover ── */
add(p([t("YOU LEAD EGYPT",{b:true,sz:44})],{after:40}));
add(p(t("Build spec for an interactive slideshow lab — hand this to Claude Design",{sz:24,c:MUT}),
  {after:60,border:{bottom:{style:BorderStyle.SINGLE,size:12,color:SEAL,space:4}}}));
add(gap(200));
add(box("WHAT THIS IS",[
  "A 35-minute interactive lab for middle school geography. Students play four real Egyptian presidents and make four real decisions, learning arithmetic, physiological and agricultural density as they go.",
  "Companion to “The Allocation” (the AP-level five-country lab). This one is single-country, narrative, and written for students with no prior knowledge of Egypt, the Cold War, or anything else.",
  "Every number and event in here has been checked against real sources. Sources are listed at the end."]));
add(gap(160));
add(table(["Audience","Runtime","Format","Group size"],
  [["Middle school (gr. 6–8)","~35 minutes","19-slide interactive HTML","Pairs, 1 device"]],
  {w:[2900,1900,2900,2380],h:400}));

/* ── design direction ── */
add(H1("1 · Design direction"));
add(P("The single most important call: this is a lab about MODERN Egypt and real people alive today. Do not use ancient-Egypt visual clichés — no hieroglyphs, no pyramids-and-camels, no gold-and-papyrus tomb styling. That would undercut the entire point of the culture content. Aim instead for a contemporary editorial feature — the look of a good magazine story about Egypt now."));
add(H2("Palette"));
add(table(["Role","Hex","Where it goes"],[
  ["Ground","#F2EDE1","Slide background — pale limestone, warm but not yellow-cream"],
  ["Paper","#FBF8F0","Cards and panels sitting on the ground"],
  ["Ink","#23201B","All body text"],
  ["Muted","#6E675B","Secondary text, captions"],
  ["Nile teal","#0F5C63","Primary accent — nav bar, headings, the density dashboard"],
  ["Ochre","#B8842B","Secondary accent — progress bar, numbered markers"],
  ["Terracotta","#A4442A","Decision moments only — makes choices feel different from reading"],
  ["Line","#C2B69A","Borders and rules"],
],{w:[2000,1600,6480]}));
add(H2("Type"));
add(LI("Display / headings: Instrument Serif (Google Fonts). Editorial character, not overused."));
add(LI("Body: Public Sans (Google Fonts). Clean and highly readable — deliberately NOT Inter, Roboto or Arial."));
add(LI("Body text at 17px minimum; slide headlines around 44px. These are 12-year-olds reading at desk distance."));
add(H2("Canvas"));
add(LI("Slide size 1280 × 720 (16:9). Fits a classroom Chromebook."));
add(LI("One artboard runs the whole lab as an interactive state machine — not 19 separate artboards. Students click through it."));
add(LI("A second artboard holds the printable advisor cards at 816 × 1056 (US Letter portrait)."));

/* ── interaction ── */
add(H1("2 · How it behaves"));
add(P("A fixed nav bar sits at the bottom of every slide: a Back button, a progress bar, a step counter (“7 / 19”), and a Next button."));
add(box("THE ONE RULE THAT MATTERS",[
  "On the four DECISION slides, Next is disabled until the pair picks an option. Choosing an option jumps straight to that decision's consequence slide.",
  "That gate is what forces the conversation. Without it, one student clicks through and the partner watches."]));
add(gap(140));
add(P("Each consequence slide opens by echoing the pair's choice back to them — “You chose: B — seize the Suez Canal” — then tells them what the real president actually did. Choosing differently from history is not a failure state; it's the most interesting version, because the reveal becomes a genuine surprise."));

/* ── dashboard ── */
add(H1("3 · The density dashboard"));
add(P("This is the structural guarantee that all three densities stay visible instead of being mentioned once and forgotten. A dark teal panel appears at the bottom of each consequence slide showing Egypt's numbers at that moment in history."));
add(table(["Year","People","Farmland (sq mi)","Arithmetic density","Physiological density"],[
  ["1950 (before the dam)","21.1 million","10,800","55","1,950"],
  ["1970 (after the dam)","34.5 million","13,100","89","2,629"],
  ["2000 (under Mubarak)","68.8 million","12,700","178","5,402"],
  ["Today","116.5 million","10,800","301","10,780"],
],{w:[2900,2000,1900,1600,1680]}));
add(gap(120));
add(box("THE STORY THESE NUMBERS TELL — say it out loud on the last slide",[
  "The Aswan dam genuinely added farmland. Physiological density went UP anyway, because population grew faster than farmland ever could.",
  "And today Egypt's farmland is roughly the same size it was before the dam was built — new desert farms gained, Delta farmland lost to spreading cities — while the population grew more than five times over.",
  "Agricultural density is taught in words rather than as a running figure (see slides 8–9). Reliable national farmer counts for 1950s–70s Egypt are not something I could verify, and I would rather teach it qualitatively than print numbers I can't stand behind."],"F0E7D4"));

add(new Paragraph({children:[new PageBreak()]}));

/* ── SLIDES ── */
add(H1("4 · The 19 slides"));
add(P("Copy below is written to be used as-is. It is deliberately plain: every place, institution and idea gets defined the first time it appears, because the brief is students with zero context.",{i:true,c:MUT}));

add(...slide(1,"You Lead Egypt","COVER. Dark teal full bleed. Huge display headline left, Egypt dot-density map right.",[
 ["h","Eyebrow"],["","A 35-minute decision lab"],
 ["h","Headline"],["","You Lead Egypt"],
 ["h","Subhead"],["","Four real presidents. Four real choices. One country where almost everybody lives on the same thin strip of land."],
 ["h","Caption under the map"],["","Every dot is 500,000 people. Every choice in this lab actually happened."],
 ["h","Art note"],["","A map of Egypt with roughly 170 dots concentrated along the Nile and fanned across the Delta, near-empty desert either side. This image IS the lesson — make it the hero."]]));

add(...slide(2,"First, where are we?","Two columns. Text left, a card headed THE NILE right.",[
 ["","Egypt is a country in the northeast corner of Africa, on the Mediterranean Sea. About 116 million people live there — roughly a third as many as the United States."],
 ["","It is also almost entirely desert. Sand, rock, and almost no rain."],
 ["q","Only about 3 out of every 100 acres of Egypt can grow food."],
 ["","So why does anyone live there at all? Because of one river."],
 ["h","Card: THE NILE"],
 ["","The Nile is the longest river in Africa. It flows south to north and empties into the Mediterranean Sea."],
 ["","Everywhere the Nile touches, the land is green and farmable. Everywhere it does not, the land is desert."],
 ["","That is why the map on the last slide looked like a green ribbon with a fan at the top. People live on the river, because there is nowhere else to live."]]));

add(...slide(3,"Meet Egypt today","Four tiles across, each numbered. NO decision here — this slide exists purely so students meet real people before judging their country.",[
 ["","Lede: Before you make any decisions about this country, you should know who actually lives there."],
 ["h","1 · Home is crowded — and full of family"],
 ["","In Cairo, Egypt's capital, it is normal for grandparents, parents, and children to share one apartment. Cairo is one of the most crowded cities on Earth. Around 20 million people live in and around it."],
 ["h","2 · Koshari"],
 ["","Egypt's most popular everyday meal: rice, lentils, pasta, chickpeas, fried onions, and tomato sauce, all in one bowl. It is cheap, filling, and sold on street corners everywhere. A dish built to feed a lot of people for very little money."],
 ["h","3 · Farming families"],
 ["","In the Nile Delta, families farm small plots of land that have been passed down for generations. Some plots are smaller than a soccer field. Egyptian farmers are called fellahin."],
 ["h","4 · Mohamed Salah"],
 ["","One of the most famous soccer players in the world is Egyptian. He grew up in a small village in the Nile Delta called Nagrig, and is probably the most recognized Egyptian alive today."]]));

add(...slide(4,"The three numbers you will use","Three cards across, each with a big numeral and a formula in a monospace chip. Teal banner along the bottom.",[
 ["","Lede: Geographers measure crowding in three different ways. Each one answers a different question — and they often disagree."],
 ["h","1 · Arithmetic density — formula chip: all people ÷ all land"],
 ["","How crowded a country is overall. Simple, but it counts empty desert as if people could live there."],
 ["h","2 · Physiological density — formula chip: all people ÷ farmland"],
 ["","How many people depend on each piece of land that can actually grow food. For a desert country, this is the number that matters."],
 ["h","3 · Agricultural density — formula chip: farmers ÷ farmland"],
 ["","How many farmers work each piece of farmland. It tells you how a country farms — by hand, or with machines."],
 ["h","Teal banner"],
 ["","Watch what happens: every decision you make will move these three numbers differently. Sometimes one goes up while another does not move at all."]]));

add(...slide(5,"Your problem: the river floods, and then it doesn't","Era header strip: “1952–1970 · PRESIDENT GAMAL ABDEL NASSER”. Two columns; right card headed THE CATCH with a terracotta top border.",[
 ["","You have just taken power after a revolution removed Egypt's king. You are 34 years old."],
 ["","Every year the Nile floods. Some years it floods too much and destroys villages. Some years it barely floods at all and crops fail. Farmers can only grow one crop a year, when the water comes."],
 ["","Engineers tell you there is a solution: build an enormous dam at Aswan, in the south. A dam would hold the flood water back in a huge lake and release it all year round. That would mean:"],
 ["b","More farmland, watered year-round"],["b","Two or three crops a year instead of one"],["b","Electricity for the whole country"],
 ["h","Card: THE CATCH"],
 ["","The dam costs more money than Egypt has."],
 ["","The United States and the World Bank — a group of countries that lends money for big projects — offered to pay for it."],
 ["","Then, in July 1956, they took the offer back. They were angry that you had bought weapons from the Soviet Union's side."],
 ["q","This is the Cold War. The United States and the Soviet Union are enemies, and both want countries like Egypt on their side."]]));

add(...slide(6,"Why this river is different","CULTURE BEAT. Two columns; right side a simple bar figure showing river level across one year.",[
 ["","People have farmed this exact strip of land for five thousand years."],
 ["","The ancient Egyptians who built the pyramids farmed the Nile's banks the same way: wait for the flood, plant in the fresh mud it leaves behind, harvest before the next one."],
 ["","A Greek writer named Herodotus visited about 2,500 years ago and called Egypt “the gift of the Nile” — meaning the country only exists because the river does."],
 ["","So when you decide whether to dam the Nile, you are changing something that has worked the same way since before the pyramids."],
 ["h","Figure: THE FLOOD, BEFORE THE DAM"],
 ["","Five horizontal bars — June 12%, Aug 86%, Oct 58%, Jan 20%, Apr 9%. Caption: Water in the river across one year. Farmers got one soaking, then months of very little. A dam would flatten this line out."]]));

add(...slide(7,"How will you pay for the dam?","DECISION 1 OF 4. Terracotta tag. Three option buttons across. Next stays disabled until one is picked.",[
 ["","Lede: Talk it through with your partner. Read both advisor cards before you choose."],
 ["h","Option A — Take the Soviet Union's money"],
 ["","They have offered to pay and send engineers. Egypt gets its dam — but is now tied to one side of the Cold War."],
 ["h","Option B — Take control of the Suez Canal"],
 ["","The Suez Canal runs through Egypt but is run by Britain and France, who collect the fees. Seize it, and Egypt collects that money instead. They will not accept this quietly."],
 ["h","Option C — Give up on the dam"],
 ["","Do not risk a war or a foreign alliance. Egypt keeps farming the way it has for 5,000 years."]]));

add(...slide(8,"Nasser did both A and B","WHAT ACTUALLY HAPPENED. Teal tag. Two columns, then the 1970 density dashboard across the bottom.",[
 ["","Echo line: You chose: [their choice]"],
 ["","One week after the United States pulled out, Nasser seized the Suez Canal. Britain, France, and Israel responded by invading Egypt in what became known as the Suez Crisis."],
 ["","Both the United States and the Soviet Union pressured the invaders to leave, and they did. Nasser became a hero across the Arab world for standing up to them."],
 ["","Then he accepted Soviet money and Soviet engineers. The Aswan High Dam was finished in 1970."],
 ["h","Card: WHAT THE DAM DID"],
 ["b","Floods controlled for the first time in history"],["b","Farmland could be watered all year"],
 ["b","Two or three harvests a year instead of one"],["b","Electricity for cities and villages"],
 ["b","Egypt's farmland grew by roughly a third"],
 ["","It also trapped the rich mud the flood used to spread on the fields. Farmers had to start buying fertilizer instead."],
 ["h","Dashboard note (1970)"],
 ["","Egypt added farmland — but added people faster. In 1950 physiological density was about 1,950. Even WITH the dam, it went up."]]));

add(...slide(9,"Who gets to farm the land?","DECISION 2 OF 4. This is the agricultural density decision. Two options, stacked.",[
 ["","Before your revolution, a small number of extremely rich families owned most of Egypt's farmland. Most Egyptians who farmed did not own the land they worked — they rented it and handed over much of what they grew."],
 ["","You can change that. But how far do you go?"],
 ["q","This choice does not change how much farmland Egypt has. It changes how many farmers work it — which is agricultural density."],
 ["h","Option A — Break up the big estates"],
 ["","Set a legal limit on how much land one family can own. Take the rest and hand it to thousands of small farming families in little plots."],
 ["h","Option B — Leave the big farms alone"],
 ["","Large farms can buy machines and grow more per acre. Breaking them up might mean less food, not more."]]));

add(...slide(10,"Nasser broke up the estates","WHAT ACTUALLY HAPPENED. Right-hand card carries the agricultural density teaching.",[
 ["","Echo line: You chose: [their choice]"],
 ["","Starting in 1952, a new law said no one family could own more than about 200 feddans — a feddan is a little bigger than an acre. Later the limit was tightened further."],
 ["","Land taken from around 1,700 wealthy landowners, including members of the royal family, was handed out in small plots to farming families. By 1970 about 15% of Egypt's farmland had changed hands."],
 ["","Thousands of families owned land for the first time. But each plot was small — and every time a farmer died, the plot was split again among his children."],
 ["h","Card: WHAT THIS DID TO THE THIRD NUMBER"],
 ["","Formula chip: farmers ÷ farmland"],
 ["","Egypt's farmland stayed the same size. The number of people farming it went up."],
 ["","So agricultural density rose — lots of farmers, each working a very small piece of land, mostly by hand."],
 ["","A country with a LOW agricultural density, like the Netherlands, has few farmers with big machines. Egypt went the other direction."]]));

add(...slide(11,"Fast forward","SADAT — deliberately a single slide with no decision. Signal the skip on screen so it reads as a choice, not an omission.",[
 ["","Era header: 1970–1981 · PRESIDENT ANWAR SADAT"],
 ["","Nasser died in 1970. The next president, Anwar Sadat, spent his years in office on something this lab is not about: Egypt made peace with its neighbor Israel after decades of conflict, and Sadat was killed in 1981 by Egyptians who opposed that peace."],
 ["","That is an enormous story, and it deserves its own lesson rather than a footnote in this one."],
 ["","What matters here is what he left behind: Egypt's population kept climbing, and its farmland did not."],
 ["h","Figure: three bars"],
 ["","1950 — 21 million · 1970 — 35 million · 1981 — 44 million"]]));

add(...slide(12,"Your problem: bread","Era header: 1981–2011 · PRESIDENT HOSNI MUBARAK. Right card headed A SECOND IDEA ON YOUR DESK.",[
 ["","Egypt cannot grow enough wheat to feed itself. It has not been able to for a long time. So Egypt buys wheat from other countries — more of it than any other country on Earth."],
 ["","To keep bread cheap for poor families, the government pays part of the cost itself. This is called a subsidy. A loaf that costs the government more is sold to Egyptians for a few cents."],
 ["","Bread subsidies are enormously expensive. They are also the reason millions of families can eat."],
 ["q","You have 68 million people now — three times what Nasser had."],
 ["h","Card: A SECOND IDEA ON YOUR DESK"],
 ["","Engineers propose pumping water from Lake Nasser — the lake behind the Aswan dam — out into the empty Western Desert to create brand new farmland from nothing."],
 ["","It is called the Toshka Project. The plan is to reclaim about a million acres of desert and move a big share of Egypt's population out there."],
 ["","It would be the largest and most expensive engineering project in the Arab world."]]));

add(...slide(13,"The word for bread","CULTURE BEAT. Right side: the Arabic set large and centered, with transliteration and gloss beneath.",[
 ["","In Egypt, the flatbread people eat every day is called aish baladi."],
 ["","Baladi means “of the country” — local, homegrown, ordinary."],
 ["","And aish, the word for bread itself, comes from the Arabic root that means “life.”"],
 ["","In most of the Arab world the word for bread is khubz. In Egypt, bread is called life."],
 ["","Keep that in mind while you decide what to do about the price of it."],
 ["h","Card art"],
 ["","عيش بلدي  /  aish baladi  /  “bread of the country” — literally: life of the country"]]));

add(...slide(14,"Bread is eating your budget. What do you do?","DECISION 3 OF 4. Three options across.",[
 ["h","Option A — Keep bread cheap, whatever it costs"],
 ["","Keep paying the subsidy. Families can eat. The government goes deeper into debt every year."],
 ["h","Option B — Raise the price of bread"],
 ["","Stop spending money Egypt does not have. Poor families will pay more for the food they depend on most."],
 ["h","Option C — Build Toshka and grow your own wheat"],
 ["","Spend the money on making new farmland in the desert instead of on cheap bread. If it works, Egypt stops buying wheat from anyone."]]));

add(...slide(15,"Mubarak did A and C. Both went badly.","WHAT ACTUALLY HAPPENED. Two columns, then the year-2000 dashboard.",[
 ["","Echo line: You chose: [their choice]"],
 ["","Toshka began in 1997. It never came close to its goal. The desert soil turned out to be full of salt, the machines bogged down in clay, and very few people wanted to move there. After billions of dollars, only a small fraction of the promised farmland exists."],
 ["","The subsidies stayed. Then in 2008 wheat prices spiked worldwide. Bread prices in Egypt rose about 37%. There were fights in bread lines and people died."],
 ["","In 2011, huge protests removed Mubarak from power after 30 years. Their chant was “bread, freedom, social justice” — and bread came first."],
 ["h","Card: THE LESSON IN TOSHKA"],
 ["","“Make more farmland” sounds like the obvious fix for a high physiological density."],
 ["","But desert is desert for a reason. Water has to be pumped uphill for miles, the soil is salty, and people do not want to leave the river."],
 ["","Egypt's farmland today is roughly the same size as it was before the Aswan dam — new desert farms gained, Delta farmland lost to spreading cities."],
 ["h","Dashboard note (2000)"],
 ["","Physiological density has more than doubled since the dam was finished. The number of people grew. The farmland did not."]]));

add(...slide(16,"Your problem: everyone, and not enough room","Era header: 2014–NOW · PRESIDENT ABDEL FATTAH EL-SISI. Right card headed AND SOMETHING UPSTREAM.",[
 ["","Egypt now has about 116 million people. That is more than five times what Nasser governed, on the same amount of farmland."],
 ["","Cairo is jammed. Around 20 million people live in and around it, and the city keeps spreading — outward, onto the Delta farmland that feeds the country."],
 ["","Every acre Cairo grows is an acre that stops growing food."],
 ["h","Card: AND SOMETHING UPSTREAM"],
 ["","Ethiopia, a country further up the Nile, has built an enormous dam of its own: the Grand Ethiopian Renaissance Dam, finished in 2024."],
 ["","Ethiopia says it needs the electricity, and that the river runs through its country too."],
 ["","Egypt says that whoever controls the water upstream controls whether Egypt eats."],
 ["","The two countries have argued about it for more than ten years without agreeing."]]));

add(...slide(17,"Where do the next ten million people go?","DECISION 4 OF 4. Three options across.",[
 ["h","Option A — Build a new city in the desert"],
 ["","Construct an entirely new capital east of Cairo, on land that grows nothing anyway. Move the government there and let people follow."],
 ["h","Option B — Build upward in Cairo"],
 ["","Keep everyone where they already are and build taller. Cheaper, but Cairo is already one of the most crowded cities on Earth."],
 ["h","Option C — Protect the Delta farmland by law"],
 ["","Make it illegal to build on farmland. Saves the fields, but does not give the extra millions of people anywhere to live."]]));

add(...slide(18,"Sisi chose A. Nobody knows if it worked.","Ochre tag reading THIS ONE HAS NO ANSWER YET. Ends on the present-day dashboard.",[
 ["","Echo line: You chose: [their choice]"],
 ["","Construction on a New Administrative Capital began in 2016 in the desert east of Cairo. The government began moving into it in 2022, and the president opened it officially in December 2024."],
 ["","It is designed to eventually hold about 6.5 million people."],
 ["","Whether Egyptians actually move there — and whether it takes real pressure off Cairo and the Delta — is still being decided right now, while you sit in this classroom."],
 ["q","Notice something: moving people to a new city does not change Egypt's arithmetic density at all. The same number of people, the same country. Only WHERE they are changes. That is distribution, not density."],
 ["h","Dashboard note (today)"],
 ["","Since 1950, Egypt's people grew more than five times over. Its farmland is about the same size it was. That is the whole story of this lab in two numbers."]]));

add(...slide(19,"Seventy years, four presidents, one strip of land","CLOSING. A four-bar column chart of physiological density across time, then two cards.",[
 ["h","Chart"],
 ["","1950 — 1,950 · 1970 — 2,629 · 2000 — 5,402 · Today — 10,780. Caption: Egypt's physiological density — people per square mile of farmland."],
 ["h","Card: WHAT EVERY PRESIDENT TRIED"],
 ["b","Nasser built a dam and made more farmland"],
 ["b","Nasser gave land to thousands of small farmers"],
 ["b","Mubarak tried to farm the open desert"],
 ["b","Mubarak paid to keep bread cheap"],
 ["b","Sisi is building a city on land nobody farms"],
 ["","Every one of those was a real attempt to solve the same problem. The line above still went up."],
 ["h","Card: TALK ABOUT IT"],
 ["b","Egypt's arithmetic density is about 301. Its physiological density is about 10,780. Which number tells you more about life in Egypt, and why?"],
 ["b","The Aswan dam gave Egypt more farmland. Physiological density went UP anyway. How is that possible?"],
 ["b","Moving people to a new desert city changes distribution but not density. Explain the difference to someone who missed today."]]));

/* ── advisor cards ── */
add(new Paragraph({children:[new PageBreak()]}));
add(H1("5 · Advisor cards (second artboard, printed)"));
add(P("Print, cut, and give each student one role for the whole lab. This is what makes pairs talk: neither advisor can decide alone. Eight cards, 816 × 1056 portrait, two columns."));
const CARDS=[
 ["Decision 1 · Dam financing","Finance Advisor",[
  "The United States and the World Bank offered to pay for the dam, then withdrew the offer in July 1956.",
  "The Soviet Union has offered money AND engineers. Accepting ties Egypt to one side of the Cold War.",
  "The Suez Canal cuts through Egypt, but Britain and France run it and collect the fees.",
  "If we seize the canal, we collect that money — and they may respond with force."]],
 ["Decision 1 · Dam financing","Land Advisor",[
  "Egypt has about 10,800 square miles of farmland. That is roughly 3% of the country.",
  "Population is 21 million and climbing fast.",
  "Physiological density today: about 1,950 people per square mile of farmland.",
  "Engineers estimate the dam would grow our farmland by roughly a third, and let us harvest two or three times a year instead of once."]],
 ["Decision 2 · Who farms the land","Finance Advisor",[
  "About 1,700 families own most of Egypt's farmland. Many are related to the king we removed.",
  "Most Egyptians who farm do not own their land. They rent it and hand over much of the harvest.",
  "Breaking up estates would be popular with millions of people — and would make powerful enemies.",
  "Large farms can afford machines. Small farms cannot."]],
 ["Decision 2 · Who farms the land","Land Advisor",[
  "This choice does not add a single acre of farmland. Egypt's total stays the same.",
  "What changes is how many farmers work it — that is agricultural density.",
  "Split estates into small plots and the number of farmers goes up sharply.",
  "Note: each time a farmer dies, his plot is divided among his children. Plots shrink every generation."]],
 ["Decision 3 · Bread and the desert","Finance Advisor",[
  "Egypt buys more wheat from other countries than any nation on Earth.",
  "Bread subsidies cost an enormous share of the budget every year. We are borrowing to pay for them.",
  "World wheat prices are rising. If they spike, our costs spike with them.",
  "The Toshka desert project would cost more than any project in the Arab world's history."]],
 ["Decision 3 · Bread and the desert","Land Advisor",[
  "Population is now 68 million — three times what Nasser governed.",
  "Physiological density has climbed to about 5,400 people per square mile of farmland.",
  "Toshka would pump water from Lake Nasser into the Western Desert to make about a million acres of new farmland.",
  "Warning: that desert soil is salty, and the water must be pumped a long way uphill. Nobody has farmed it before."]],
 ["Decision 4 · Where the next millions go","Finance Advisor",[
  "Building an entire new capital city from nothing is extraordinarily expensive.",
  "People only move if there are jobs, schools and hospitals waiting. Those cost more.",
  "Cairo already exists and already has all of that.",
  "Ethiopia has finished a huge dam upstream on the Nile. Talks with them have gone nowhere for over ten years."]],
 ["Decision 4 · Where the next millions go","Land Advisor",[
  "Population is about 116 million — more than five times 1950.",
  "Farmland is roughly the SAME SIZE it was before the Aswan dam was built.",
  "Physiological density is about 10,780 and still rising.",
  "Cairo is spreading outward onto Delta farmland. Every acre the city takes is an acre that stops growing food."]],
];
CARDS.forEach(([d,role,bul])=>{
  add(p([t(d+"  —  ",{sz:16,c:MUT,b:true}),t(role,{b:true,sz:20,c:SEAL})],{before:130,after:50}));
  bul.forEach(x=>add(LI(x)));
});
add(gap(120));
add(box("FOOTER LINE ON EVERY CARD",["Do not show this card to your partner until you have both read your own."]));

/* ── sources ── */
add(H1("6 · Sources and data notes"));
add(P("Everything above was checked. Where I could not verify something, I said so rather than inventing it."));
add(LI("Aswan dam financing, the US/World Bank withdrawal of 19 July 1956, and the Suez Crisis — US State Department historical records and contemporary reporting."));
add(LI("Land reform: the Agrarian Reform Law of 9 September 1952; the 200-feddan cap; ~1,700 landowners affected; ~15% of arable land redistributed by 1970."));
add(LI("Toshka / New Valley Project: launched 1997 under Mubarak; target ~1 million acres; documented failure — saline soil, clay, low uptake."));
add(LI("Bread: 2007–08 wheat spike raised Egyptian bread prices ~37%; deadly incidents in bread lines; the 2011 chant “bread, freedom, social justice.”"));
add(LI("New Administrative Capital: announced 2015, construction from 2016, government relocation began 2022, officially inaugurated December 2024, designed for ~6.5 million."));
add(LI("GERD: construction from 2011, reservoir filling completed September 2024."));
add(LI("Population: 21.1M (1950), 34.5M (1970), 68.8M (2000), 116.5M (2024)."));
add(LI("Farmland: ~2.8M hectares cultivated before the dam, rising roughly a third after it; Egypt is under 5% arable today. Density figures in section 3 are computed from these and rounded — treat them as “about,” not exact."));
add(gap(140));
add(box("TWO THINGS TO CHECK BEFORE YOU TEACH IT",[
  "Egypt's population and the GERD situation both move. Re-check them against a current source close to the day you run this.",
  "Agricultural density is taught in words, not as a running number, because I could not verify historical Egyptian farmer counts. If you find a reliable series, it would strengthen slides 9–10."],"F0E7D4"));

const doc=new Document({creator:"Egypt Population Density",title:"You Lead Egypt — Build Spec",
  sections:[{properties:{page:{size:{width:12240,height:15840},
    margin:{top:1080,right:1080,bottom:1080,left:1080}}},children:body}]});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync("You-Lead-Egypt-Build-Spec.docx",b);
  console.log("wrote You-Lead-Egypt-Build-Spec.docx",b.length,"bytes");});
