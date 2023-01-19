console.clear();

function tusciaFunkcija(){
    return false;
}

console.log(tusciaFunkcija());

function daugyba(a, b){
    if(isNaN(a) || isNaN(b)){
        return 'Pateikti neteisingi kintamieji';
    }
    else{
    const c = a * b;
    return c;
    }
}

console.log(daugyba(15, 'a'));

function skaitmenuKiekisSkaiciuje(num){
    if(isNaN(num)){
        return 'Pateikta netinkamo tipo reiksme';
    }
    else{
        let a = 0;
        for(let i = num; i > 1; i /=10){
            a++;
        }
        return a;
    }
}

console.log(skaitmenuKiekisSkaiciuje(123456789));


function didziausiasSkaiciusSarase(arr){
    if(Array.isArray(arr) && arr.length > 0){
        let num = 0;
        for(let i = 0; i < arr.length; i++){
            if(typeof arr[i] != 'number'){
                return 'Pateikta netinkamo tipo reiksme';
            }
            else{
                if(arr[i] > num){
                    num = arr[i];
                }
            }
        }
        return num;
    }
    else{
        return 'Pateikta netinkamo tipo reiksme';
    }
}

console.log(didziausiasSkaiciusSarase([2, 5, 15, 23, 58, 0, 90]));
console.log(didziausiasSkaiciusSarase([2, 5, 15, 23, '1', 0, '90']));
console.log(didziausiasSkaiciusSarase([]));

function isrinktiRaides(txt, num){
    if(typeof txt != 'string'){
        return "Pirmasis kintamasis yra netinkamo tipo.";
    }else if(txt.length < 1 || txt.length > 100){
        return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
    }else if(typeof num != 'number'){
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }else if(num < 1){
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    }else if(num > txt.length){
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }else{
        let r = '';
        for(let i = num - 1; i < txt.length; i += num){
            r += txt[i];
        }
        return r;
    }
}

console.log(isrinktiRaides('abcdefg', 2 ));
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );

function dalyba(n1, n2){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        return 'Pateikta netinkamo tipo reiksme';
    }else if(n2 == 0){
        return 'dalyba is nulio yra negalima';
    }else{
        return n1 / n2;
    }
}

console.log(dalyba(2, 0));
console.log(dalyba(2, 'a'));
console.log(dalyba(2, '1'));
console.log(dalyba(2, 3));
console.log(dalyba([], 3));