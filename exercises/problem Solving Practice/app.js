functionOfFour(arr) {
    const arr = [1, 2, 3, 4]
    for ( let i = 0; i < arr.length; i++ ){
        for (let i2 = 0; i2 < arr[i].length; i2++){
            if(arr[i][i2] > arr[i]){
                arr[i] = arr[i][i2]
            }
        }
    }
    return arr
}