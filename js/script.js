"use strict";

const obje = {
    name: 'jon',
    age: 18,
    jen: false,
    1: 'b',
    obfr2: {
        obfrto:'tytyty'
    }
}

const b = 'bb';

obje[b] = '12234';
console.log(obje['obfr2']['obfrto']);
console.log(obje.obfr2.obfrto);