// 1 Masala
let kubBoyi = +prompt ('1-Masala Qiymatni kiriting!');
let kubBaland = +prompt ('1-Masala Qiymatni kiriting!');
let kubEni = +prompt ('1-Masala Qiymatni kiriting!');
let result_1 = kubBoyi*kubBaland*kubEni;
console.log('Kubning hajmi' + result_1);

// 2 Masala
let sonKub = +prompt('2-Masala Qiymatni kiriting!');
let result_2 = sonKub*sonKub*sonKub;
console.log('Soning kubi' + result_2);

// 3 Masala
let sonYigindisi_1 = +prompt('3-Masala Qiymatni kiritng!')
let sonYigindisi_2 = +prompt ('3-Masala Qiymatni kiriting!');
let result_3 = sonYigindisi_1+sonYigindisi_2
console.log('Ikki soning kvadrati' + result_3**2);

// 4 Masala
let ikkionSon = +prompt('4-Masala Qiymatni kiriting!')
let result_4 = Math.floor((ikkionSon % 100)/10);
console.log('Soning Onlik xonasidagi son' + result_4);

// 5 Masala 
let ikkixonaSon = +prompt('5-Masala Qiymatni kiritng!')
let result_5 = ikkixonaSon % 10
let result_6 = Math.floor(ikkixonaSon / 10)
let result_7 = result_5 + result_6
console.log ('Ikki xonali sonni yigindisi' + result_7);

// 6 Masala
let yuzxonaSon = +prompt('6-Masala Qiymatni kiriting!')
let result_8 = yuzxonaSon % 10
let result_9 = Math.floor(yuzxonaSon / 100)
console.log('Uch xonali soni yuzliklar xonasidagi son' + result_9);

// 7 Masala
let paraBaland = +prompt('7-Masala Qiymatni kiriting!')
let paraBoyi = +prompt('7-Masala Qiymatni kiriting!')
let paraEni = +prompt('7-Masala Qiymatni kiriting!')
let result_10 = paraBaland + paraBoyi + paraEni
console.log('Paralapepidning tola sirti' + result_10);

// 8 Masala
let sonOn = +prompt("8-Masala Qiymatni kiriting!");
let result_11 = Math.floor(son - 10, 3);
console.log('10 ta oldingi son' + result_11);


