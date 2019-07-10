const window ={
     color: false,
     width: 12,
     hieght: 30
}
const chair = {
    hight:55,
    width: 66,
    color: 'black'
}
const tabel = {
    hight: 20,
    width: 55,
    color: 'white' 

}
const labtop = {
    size: 'small', 
    color: 'gray', 
    useful: function(){
        console.log("this laptop is " + this.color)
    },
    moniter: {
        color:{ white: "ttt", black :"kkk", red: "uuu"},
        size: { small:"red",
             large : "black" ,
              med : "pink"
            }

    }

}
console.log(labtop.moniter.color.black)

