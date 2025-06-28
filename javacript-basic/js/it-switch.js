//変数の宣言
let weight = 66;


let height = 1.6;

let bmi = weight/(height*height);

console.log(bmi);



console.log(45 + 18) ;

console.log(45 > 18) ;

console.log('5' ==  5 );

console.log('5' ===  5) ;

let num = Math.floor(Math.random()*5) ;

console.log(num) ;

if (num === 4) {
    console.log('大当たりです') ;
}

else if (num === 3) {
    console.log('当たりです') ;
}
else {
    console.log('はずれです') ; 
}

num =10;

if (num > 10 &&  num <30 ) {
    console.log('変数numは１０より大きく、３０より小さいです') ;
} else {
    console.log('条件が成り立ちませんでした');
}

if (num === 10 || num === 30) {
    console.log('変数numは１０または３０です');
}  else {
    console.log('条件が成り立ちませんでした');
}