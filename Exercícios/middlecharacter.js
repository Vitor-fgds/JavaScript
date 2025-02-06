function getMiddle(s){
    if (s.length % 2 === 0){
        let middle = s[(s.length / 2) - 1]+s[s.length / 2]
        return middle
    }
    else{
        let middle = s[Math.floor(s.length/2)]
        return middle
    }
}

console.log(getMiddle("middle"))