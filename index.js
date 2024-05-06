function minName(...arr) {
    let min = arr[0]
    for (let name of arr) {
        if (name.length <= min.length) {
            min = name
        }
    }
    return min
    
}

const min_Name = minName('Samir','Damir','Shokhruh','Farzod')
console.log(min_Name);