#!/usr/bin/env node
// Conservative textbook prose count. Excludes standalone case/example sections,
// bibliography, quiz/exam content, markup, headings, and separate case-study data.
// Usage: node tools/count-textbook-words.mjs
import {readFileSync} from 'node:fs';

const source=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const jsonArray=(pattern)=>{
  const match=source.match(pattern);
  if(!match)throw new Error('Could not locate expected curriculum array: '+pattern);
  return JSON.parse(match[1]);
};
const lessons=jsonArray(/const lessons=(\[[\s\S]*?\]);\n/);
const collections=[
  jsonArray(/const textbookDeepDives=(\[[\s\S]*?\]);\n/),
  jsonArray(/textbookDeepDives\.push\(\.\.\.(\[[\s\S]*?\])\);/),
  jsonArray(/const researchDepthBatch3=(\[[\s\S]*?\]);\n/),
  jsonArray(/const researchDepthBatch4=(\[[\s\S]*?\]);\n/),
  jsonArray(/const researchDepthBatch5=(\[[\s\S]*?\]);\n/),
  jsonArray(/const textbookDepthBatch8=(\[[\s\S]*?\]);\n/),
  jsonArray(/const textbookDepthBatch8B=(\[[\s\S]*?\]);\n/),
  jsonArray(/const textbookDepthBatch9=(\[[\s\S]*?\]);\n/),
  jsonArray(/const narcissismSpecializationBatch11=(\[[\s\S]*?\]);\n/),
  jsonArray(/const openTextbookSynthesisBatch12=(\[[\s\S]*?\]);\n/),
  jsonArray(/const narcissismResearchBatch13=(\[[\s\S]*?\]);\n/),
  jsonArray(/const narcissismTextbookBatch14=(\[[\s\S]*?\]);\n/),
  jsonArray(/const narcissismTextbookBatch14B=(\[[\s\S]*?\]);\n/)
].flat();
const edits=[
  ...jsonArray(/const auditedSectionExpansions=(\[[\s\S]*?\]);\n/),
  ...jsonArray(/const deepEditorialBatch7=(\[[\s\S]*?\]);\n/)
];
const caseHeading=/(case|worked|fictional|scenario|dialogue|conversation breakdown|practical script|example|illustrative|comparative|applied)/i;
const wordCount=(text)=>{
 const plain=String(text).replace(/\[[^\]]+\]/g,' ');
 return (plain.match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu)||[]).length;
};
let reading=0,excluded=0;
const measure=(heading,text)=>{
 const words=wordCount(text);
 if(caseHeading.test(heading))excluded+=words;else reading+=words;
};
for(const lesson of lessons){
 for(const introduction of lesson.introduction||[])reading+=wordCount(introduction);
 for(const [heading,body] of lesson.sections){
   const paras=Array.isArray(body)?body.slice(1):[body];
   measure(heading,paras.join(' '));
 }
}
for(const entry of collections){
 for(const [heading,...paras] of entry.blocks)measure(heading,paras.join(' '));
}
for(const edit of edits){
 const heading=lessons[edit.chapter]?.sections[edit.index]?.[0]||'';
 measure(heading,edit.paragraph);
}
console.log(JSON.stringify({
 target:250000,
 textbookReadingWords:reading,
 remaining:Math.max(0,250000-reading),
 separatelyExcludedCaseAndExampleWords:excluded,
 chapters:lessons.length,
 methodology:'Conservative title-based exclusion of standalone case/example sections; all lesson and extension headings, references, navigation, independent case-study data, exams and assignments excluded; inline illustrative sentences inside otherwise expository sections cannot be automatically isolated.'
},null,2));
