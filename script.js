
let arrayOfSales=[];
let arrayOfAchivements=[];
let salesNum = document.getElementById('live-sales-num')
let salesOutput = document.getElementById('sales-output')
let achivementNum = document.getElementById('live-achievement-num')

// Product A info
let productA = {
    emoji: "⭐",
    revenue: 200,
    commision: 50,
    sellA:function(){
        arrayOfSales.push(this.emoji)
        render()
    }
}

// Product B info
let productB = {
    emoji: "🔥",
    revenue: 300,
    commision: 75,
    sellB:function(){
        arrayOfSales.push(this.emoji)
        render()
      

    }
}


function render(){
    let salesHolder=""
    for(let i=0;i<arrayOfSales.length;i++){
        salesHolder+=arrayOfSales[i]
    }
    salesNum.innerHTML=arrayOfSales.length
    salesOutput.innerHTML=salesHolder


    
}