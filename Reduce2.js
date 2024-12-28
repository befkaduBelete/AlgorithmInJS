const sales = [
    {date:'Monday',total:2000},
    {date:'Tuesday',total:1000},
    {date:'Wednesday',total:3000},
    {date:'Thursday',total:5000},
]

const totalSales = sales.reduce((p,price)=>{
    return p + price.total;
},0)


console.log(totalSales);