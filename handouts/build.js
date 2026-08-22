const d = require('docx');
const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,
       AlignmentType,BorderStyle,ShadingType,HeadingLevel,PageBreak,VerticalAlign} = d;
const fs = require('fs');

const W = 10080;                    // content width, US Letter @ 0.75in margins
const INK="1A1D20", MUT="5A6167", SEAL="1F4E5F", RULE="B9C0BA", SOFT="EAEFEA";
const NO = {top:{style:BorderStyle.NONE},bottom:{style:BorderStyle.NONE},
            left:{style:BorderStyle.NONE},right:{style:BorderStyle.NONE}};
const BOX = c=>({top:{style:BorderStyle.SINGLE,size:6,color:c||RULE},
                 bottom:{style:BorderStyle.SINGLE,size:6,color:c||RULE},
                 left:{style:BorderStyle.SINGLE,size:6,color:c||RULE},
                 right:{style:BorderStyle.SINGLE,size:6,color:c||RULE}});

const t=(s,o={})=>new TextRun({text:s,font:"Calibri",size:o.sz||20,bold:o.b,italics:o.i,
                               color:o.c||INK,...(o.u?{underline:{}}:{})});
const p=(runs,o={})=>new Paragraph({children:Array.isArray(runs)?runs:[runs],
  alignment:o.al,spacing:{before:o.before??0,after:o.after??80},
  ...(o.border?{border:o.border}:{})});
const txt=(s,o={})=>p(t(s,o),o);

// section header bar
const head=(n,title,mins)=>new Table({width:{size:W,type:WidthType.DXA},columnWidths:[W],
  borders:NO, rows:[new TableRow({children:[new TableCell({width:{size:W,type:WidthType.DXA},
    shading:{type:ShadingType.CLEAR,fill:SEAL},margins:{top:70,bottom:70,left:130,right:130},
    borders:NO,children:[new Paragraph({spacing:{after:0},children:[
      t(n+"  ",{b:true,c:"FFFFFF",sz:22}), t(title,{b:true,c:"FFFFFF",sz:22}),
      t("      "+mins,{c:"C9D8DC",sz:17})]})]})]})]});

// ruled answer line(s)
const lines=(n,label)=>{
  const out=[];
  if(label) out.push(txt(label,{sz:19,c:MUT,after:40}));
  for(let i=0;i<n;i++) out.push(new Paragraph({spacing:{after:i===n-1?140:170},
    border:{bottom:{style:BorderStyle.SINGLE,size:4,color:RULE,space:2}},children:[t("")]}));
  return out;
};
// question
const q=(num,text,o={})=>p([t(num+".  ",{b:true,c:SEAL}),t(text,o)],{after:o.after??60,before:o.before??70});
// checkbox row
const boxes=(opts)=>p(opts.map(o=>t("▢  "+o+"        ",{sz:20})),{after:120});

// work box: table cell with height, optional pre-filled prompt
const work=(prompt,h)=>new Table({width:{size:W,type:WidthType.DXA},columnWidths:[W],
  rows:[new TableRow({height:{value:h||900,rule:"atLeast"},children:[new TableCell({
    width:{size:W,type:WidthType.DXA},borders:BOX(),margins:{top:80,bottom:80,left:130,right:130},
    children:[p(t(prompt||"Show your work:",{sz:18,c:MUT,i:true}),{after:0})]})]})]});

// generic data table
function table(cols,rows,opts={}){
  const widths=opts.w;
  const mk=(cells,hdr)=>new TableRow({children:cells.map((c,i)=>new TableCell({
    width:{size:widths[i],type:WidthType.DXA},borders:BOX(),
    shading:hdr?{type:ShadingType.CLEAR,fill:SOFT}:undefined,
    margins:{top:60,bottom:60,left:90,right:90},verticalAlign:VerticalAlign.CENTER,
    children:[p(t(c,{b:hdr,sz:hdr?17:19,c:hdr?MUT:INK}),
      {al:(i===0?AlignmentType.LEFT:AlignmentType.CENTER),after:0})]})),
    ...(hdr?{tableHeader:true}:{}),
    ...(opts.h?{height:{value:opts.h,rule:"atLeast"}}:{})});
  return new Table({width:{size:W,type:WidthType.DXA},columnWidths:widths,
    rows:[mk(cols,true),...rows.map(r=>mk(r,false))]});
}
const gap=(n)=>new Paragraph({spacing:{after:n||120},children:[t("")]});

module.exports={d,Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,
  AlignmentType,BorderStyle,ShadingType,PageBreak,VerticalAlign,
  W,INK,MUT,SEAL,RULE,SOFT,NO,BOX,t,p,txt,head,lines,q,boxes,work,table,gap,fs};
