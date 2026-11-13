import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const sw=readFileSync(new URL('../sw.js',import.meta.url),'utf8');
const scripts=[...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
assert.equal(scripts.length,2,'Expected both inline scripts');
for(const [i,script] of scripts.entries())new vm.Script(script[1],{filename:'inline-script-'+(i+1)+'.js'});
new vm.Script(sw,{filename:'sw.js'});
const get=(name)=>{
  const escaped=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const match=html.match(new RegExp('const '+escaped+'=(\\[[\\s\\S]*?\\]);\\n'));
  assert(match,'Missing '+name);
  return JSON.parse(match[1]);
};
const lessons=get('lessons');
assert.equal(lessons.length,36,'Chapter count changed');
const expected=['Narcissistic traits: the full behavioral picture','Blame-shifting: mechanisms and counter-moves','Gaslighting, memory, and reality testing','Truth-seeking and evidence-based questioning','Boundaries, power, and conflict strategy','Persuasion versus psychological exploitation','DARVO: denying, attacking, and reversing roles'];
for(const title of expected)assert(lessons.some(x=>x.title===title),'Missing baseline chapter '+title);
assert.equal(new Set(lessons.map(x=>x.title)).size,36,'Duplicate chapters');
const nav=get('nav');
assert.deepEqual(nav.slice(2,10).map(x=>x[0]),['personality','manipulation','hostility','accountability','hierarchy','emotion','cognition','recovery'],'Eight approved navigation categories changed');
const expansion=get('completionPass22');
assert.equal(expansion.length,8,'Expected eight expanded chapters');
for(const item of expansion){
 assert(lessons.some(x=>x.title===item.title),'Unknown expanded chapter: '+item.title);
 assert(item.blocks.length>0,'Missing reading block');
 for(const block of item.blocks)assert(block.length>=5,'Expected connected, multi-paragraph depth');
}
assert(html.includes('for(const entry of completionPass22)'),'Expansion not wired to renderer');
assert(html.includes('const textbookDeepDiveByTitle=new Map('),'Reading index missing');
const recoveryModules=get('recoveryModules');
const recoveryDepthGuide=get('recoveryDepthGuide');
assert.equal(recoveryModules.length,10,'Original trauma coping modules changed');
assert.equal(recoveryDepthGuide.length,10,'Ten trauma research additions required');
for(const [i,m] of recoveryDepthGuide.entries()){
 assert(m.title && m.foundation.length>180 && m.research.length>180 && m.practice.length>50 && m.caution.length>30,'Incomplete trauma research module '+(i+1));
}
assert(html.includes('const detail=recoveryDepthGuide[recoveryModule]'),'Deep reading disconnected');
assert(html.includes('depth+quick+principles+'),'Recovery depth panels disconnected');
assert(html.includes('clearRecoveryPrivateState()'),'Private state reset missing');
assert(!/saveLocal\(.*recoveryNotes/.test(html),'Recovery reflection unexpectedly persisted');
assert(html.includes('localStorage'),'Progress persistence missing');
assert(html.includes('bia-cache-revalidation'),'Cache revalidation missing');
assert(sw.includes('cache: "no-store"'),'Network-first navigation missing');
console.log('PASS: two inline scripts and service worker syntax; 36 unique chapters; 8 categories; 8 integrated expansion blocks; reading hook, storage, and cache presence');
