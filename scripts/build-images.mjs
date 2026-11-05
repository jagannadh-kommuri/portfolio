import sharp from 'sharp';
import {mkdirSync} from 'node:fs';
mkdirSync('public/assets',{recursive:true});
for (const width of [420,720,1100]) await sharp('portrait.png').resize({width}).webp({quality:86}).toFile(`public/assets/portrait-${width}.webp`);
await sharp('portrait.png').resize(1200,630,{fit:'contain',background:'#07070a'}).jpeg({quality:85}).toFile('public/assets/og-image.jpg');
