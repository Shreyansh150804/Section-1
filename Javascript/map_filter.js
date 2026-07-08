const nums=[4,7,8,4,46,9];
const even=nums.filter((n) =>{
    return n%2==0;
})

console.log(even);

const nums2=nums.filter((n) => {return n>5;});
console.log(nums2);

const srq=nums.map((n) => {
    return n**2;
})
console.log(srq);

const prices=[230,530,670,800,310,1200];
const gst=prices.map((n) => {
    return n*1.18;

});
console.log(gst);
