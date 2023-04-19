function sortEmotions(arr, order){
if (order) return arr.sort((a, b) => {
        if (a === ':D') return -1
        else if (a === ':)' && b !== ':D') return -1
        else if (a === ':|' && (b !== ':D' && b !== ':)')) return -1
        else if (a === ':(' && (b !== ':|' && b !== ':)' && b !== ':D')) return -1
        else if (a === 'T_T') return 1
        else return 0
    })
    else return arr.sort((a, b) => {
        if (a === ':D') return -1
        else if (a === ':)' && b !== ':D') return -1
        else if (a === ':|' && (b !== ':D' && b !== ':)')) return -1
        else if (a === ':(' && (b !== ':|' && b !== ':)' && b !== ':D')) return -1
        else if (a === 'T_T') return 1
        else return 0
    }).reverse()
}

console.log(sortEmotions([':|', ':(', ':)', 'T_T', ':(', ':D', 'T_T', ':)', ':D'], true))