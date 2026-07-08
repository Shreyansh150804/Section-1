console.log('------forloop ------')
const nums=[5,6,5,8,8];
for(let i=0; i<nums.length;i++){
    console.log(nums[i]);
}

console.log('------for of loop------')


for (let n of nums){
    console.log(n);
}
console.log('------forEach loop------')

nums.forEach( (a,i,k) => {console.log(a,i,k);

});

for (let n of nums){
    if(n%2==0){
        
        console.log(n);
    }
    
}

const price=[120,458,587,644,700];
price.forEach((p) =>{
    if(p>500){
        console.log(p);
        
    }
});
// apply 5% discount on all prices
