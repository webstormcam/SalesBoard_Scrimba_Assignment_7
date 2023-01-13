
let arrayOfSales=[]
let arrayOfAchivements=[]
let salesNum = document.getElementById('live-sales-num')
let salesOutput = document.getElementById('sales-output')
let achivementNum = document.getElementById('live-achievement-num')
let achievementOutput = document.getElementById('achievement-output')
let revenueOutput= document.getElementById('revenue')
let commisionOutput = document.getElementById('commision')
let revenueTotal = 0
let commisionTotal = 0 



// Product A 
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

// Product B 
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
    let achievementHolder=""

    if(arrayOfSales.length===1){
        arrayOfAchivements.push('🔔')
    }

    if(revenueTotal>2500 && arrayOfAchivements.includes('💰')===false){
        arrayOfAchivements.push('💰')
    }


    if(arrayOfSales.length===15){
        arrayOfAchivements.push('🏆')
    }



    for(let i=0; i<arrayOfSales.length; i++){
         salesHolder+=arrayOfSales[i]
    }

    for(let i=0;i<arrayOfAchivements.length;i++){
        achievementHolder+=arrayOfAchivements[i]
    }

   
  

    salesNum.innerHTML = arrayOfSales.length
    salesOutput.innerHTML = salesHolder
    achivementNum.innerHTML= arrayOfAchivements.length
    achievementOutput.innerHTML = achievementHolder
    revenueOutput.innerHTML = `$${revenueTotal}`
    commisionOutput.innerHTML = `$${commisionTotal}`
 
}