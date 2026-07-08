function addNums(a,b){
    var c=a+b;
    console.log(c);

}
addNums(34,23);

const getAvg = function(m1,m2,m3){
    let avg=(m1,m2,m3)/3;
    return avg;
    console.log(avg);


}
const result=getAvg(4,45,56);
console.log(result);

const factorial=(n) =>{
    let f=1;
    for(let i=1; i<=n; i++){
        f=f*i;
    }
    return f;
}
let fact=factorial(6);
console.log(fact);