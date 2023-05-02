function secondSymbol(s, symbol) {
    const first = s.indexOf(symbol)
    
    if (first < 0) return -1
    
    const restOfWrd = s.slice(first + 1)
    const second = restOfWrd.indexOf(symbol)
    
    if (second >= 0) return first + second + 1
    return -1
  }

  console.log(secondSymbol('hello world!!', 'l'))