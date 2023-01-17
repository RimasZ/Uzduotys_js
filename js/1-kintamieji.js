// Kintamieji skaiciai
const k1 = 1;
console.log(k1);
const k2 = 2;
console.log(k2);
const k3 = 3;
console.log(k3);

//Tekstiniai kintamieji
const t1 = 'vienas';
console.log(t1);
const t2 = 'du';
console.log(t2);
const t3 = 'trys';
console.log(t3);

//Skaiciu tipo sarasas
const a1 = [1, 2, 3, 4, 5];
console.log(a1);
const a2 = [6, 7, 8, 9, 10];
console.log(a2);
const a3 = [11, 12, 13, 14, 15];
console.log(a3);

//Teksto tipo sarasas
const ta1 = ['vienas', 'du', 'trys', 'keturi', 'penki'];
console.log(ta1);
const ta2 = ['sesi', 'septyni', 'astuoni', 'devyni', 'desimt'];
console.log(ta2);
const ta3 = ['vienuolika', 'dvylika', 'trylika', 'keturiolika', 'penkiolika'];
console.log(ta3);

console.clear();

//Skaiciu kintamuju suma
const sum = k1+k2+k3;
console.log(sum);

//Teksto tipo kintamuju sujungimas
const tsum = t1 + ' ' + t2 + ' ' + t3;
console.log(tsum);

//Skaiciaus tipo sarasu reiksmiu vertes apskaiciavimas
const arrays = a1.concat(a2, a3);
console.log(arrays);

let val = arrays[0];
console.log(val);

for(let i = 1; i < arrays.length;){
    val -= arrays[i];
    console.log(val);
    i += 2;
}
for(let i = 2; i < arrays.length;){
    val += arrays[i];
    console.log(val);
    i += 2;
}

console.log(val);

//Teksto tipo sarasu sujungimas ir isvedimas su skiriamaisiais zenklais
const tasum = ta1.concat(ta2, ta3);
console.log(tasum.join(', '));

console.clear();
//Skaiciaus tipo kintamuju palyginimas

//Kuris didesnis
if(k1 > k2 && k1 > k3){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}

if(k2 > k1 && k2 > k3){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}
if(k3 > k1 && k3 > k2){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}
//Kuris mazesnis
if(k1 < k2 && k1 < k3){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}

if(k2 < k1 && k2 < k3){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}
if(k3 < k1 && k3 < k2){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}
//Ar skaicia lygus
if(k1 == k2 && k1 == k3){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}

//Ar skaiciai nelygus
if(k1 != k2 && k2 != k3){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}
//kuris didesnis arba lygus
if(k1 >= k2 && k1 >= k3){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}

if(k2 >= k1 && k2 >= k3){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}
if(k3 >= k1 && k3 >=k2){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}

//kuris mazesnis arba lygus
if(k1 <= k2 && k1 <= k3){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}

if(k2 <= k1 && k2 <= k3){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}
if(k3 <= k1 && k3 <=k2){
    console.log('Pomidoras');
}
else{
    console.log('bandykite kita karta');
}

//Teksto tipo kintamuju ilgiai
console.log(t1.length);
console.log(t2.length);
console.log(t3.length);

//Teksto ilgiu palyginimas

//Mazesnis
if(t1.length > t2.length)
{
    console.log('pomidoas');
}
else{
    console.log('bandykite kita karta');
}

//didesnis
if(t1.length < t2.length)
{
    console.log('pomidoas');
}
else{
    console.log('bandykite kita karta');
}

//Ar lygu

if(t1.length === t2.length)
{
    console.log('pomidoas');
}
else{
    console.log('bandykite kita karta');
}

//Ar nelygu

if(t1.length != t2.length)
{
    console.log('pomidoas');
}
else{
    console.log('bandykite kita karta');
}

// Daugiau lygu.....

if(t1.length >= t2.length)
{
    console.log('pomidoas');
}
else{
    console.log('bandykite kita karta');
}

//Maziau lygu...................

if(t1.length <= t2.length)
{
    console.log('pomidoas');
}
else{
    console.log('bandykite kita karta');
}

//Saraso tipo kintamuju ilgiai

console.log(a1.length);
console.log(a2.length);
console.log(a3.length);

//Saraso tipo kintamuju ilgiu lyginimas

// Tas pats principas kaip ir ankstesniu palyginimu...