
let arrayOfSales=[]
let arrayOfAchivements=[]
let salesNum = document.getElementById('live-sales-num')
let salesOutput = document.getElementById('sales-output')
let achivementNum = document.getElementById('live-achievement-num')
let revenueOutput= document.getElementById('revenue')
let commisionOutput = document.getElementById('commision')
let revenueTotal = 0
let commisionTotal = 0 

// Product A info
let productA = {
    emoji: "⭐",
    revenue: 200,
    commision: 50,
    sellA:function(){
        arrayOfSales.push(this.emoji)
        revenueTotal+=this.revenue
        commisionTotal+=this.commision
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
        revenueTotal+=this.revenue
        commisionTotal+=this.commision
        render()
      

    }
}


function render(){
    let salesHolder=""
    for(let i=0; i<arrayOfSales.length; i++){

        salesHolder+=arrayOfSales[i]
    }

    salesNum.innerHTML = arrayOfSales.length
    salesOutput.innerHTML = salesHolder
    revenueOutput.innerHTML = `$${revenueTotal}`
    commisionOutput.innerHTML = `$${commisionTotal}`
 
}