//For ciklo panaudojimas

//a
let s1 = 0
for(let i = 0; i <= 0; i++){
    s1 += i;
}
console.log(s1);
//b
let s2 = 0
for(let i = 0; i <= 4; i++){
    s2 += i;
}
console.log(s2);
//c
let s3 = 0
for(let i = 0; i <= 100; i++){
    s3 += i;
}
console.log(s3);
//d
let s4 = 0
for(let i = 574; i <= 815; i++){
    s4 += i;
}
console.log(s4);
//e
let s5 = 0
for(let i = -50; i <= 50; i++){
    s5 += i;
}
console.log(s5);
//f
let s6 = 0
for(let i = -70; i <= 30; i++){
    s6 += i;
}
console.log(s6);

//Teksto perrasymas is kito galo
const t1 = 'Tekstas';
let t2 = '';
for(let i = t1.length-1; i >= 0; i--)
{
    t2 += t1[i];
}
console.log(t2);

//Skaiciai be liekanos 

//a

let tr = 0, pe = 0, se = 0;
for(let i =0; i <= 11; i++)
{
    if(i % 3 == 0){
        tr++;
    }
    if(i % 5 == 0){
        pe++;
    }
    if(i % 7 == 0){
        se++;
    }
}

console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ', tr, ' vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ', pe, ' vienetai.');
console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ', se, ' vienetai.');
tr = 0;
pe = 0;
se = 0;
//b

for(let i =8; i <= 31; i++)
{
    if(i % 3 == 0){
        tr++;
    }
    if(i % 5 == 0){
        pe++;
    }
    if(i % 7 == 0){
        se++;
    }
}

console.log('Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 3 yra ', tr, ' vienetai.');
console.log('Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 5 yra ', pe, ' vienetai.');
console.log('Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 7 yra ', se, ' vienetai.');

tr = 0;
pe = 0;
se = 0;
//c

for(let i = -18; i <= 18; i++)
{
    if(i % 3 == 0){
        tr++;
    }
    if(i % 5 == 0){
        pe++;
    }
    if(i % 7 == 0){
        se++;
    }
}

console.log('Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 3 yra ', tr, ' vienetai.');
console.log('Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 5 yra ', pe, ' vienetai.');
console.log('Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 7 yra ', se, ' vienetai.');
tr = 0;
pe = 0;
se = 0;
