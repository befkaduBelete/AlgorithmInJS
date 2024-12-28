const number = [1,3,4,5,6,77,3,4,5,6,7,7,7,3,3,32,2,2,2,2]

const listNumber  = number.reduce((a,c)=>{
 

    //if(a[c]) 
        
    a[c] = (a[c]|| 0) +1
    console.log(a[c])
   //a[c] = a[c] + 1
   // a[c] = (a[c]|| 0) +1
    return a
 
},{})

console.log(listNumber)


