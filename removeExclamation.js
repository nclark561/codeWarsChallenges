// function remove (string) {
//     const strArr = string.split(' ');
//     for(let i = 0; i < strArr.length; i++) {
//         if (strArr[i].indexOf('!', strArr[i].indexOf('!') + 1) < 0 && strArr[i].indexOf('!') >= 0) {
//             strArr.splice(i, 1)
//             i--
//         } 
//     }
//     return strArr.length > 0 ? strArr.join(' ') : '';
//   }

function remove(string) {
    return string.split(' ').filter(i => i.split('!').length != 2).join(' ');
}

  console.log(remove('hi! noah hi! hi hi! hi! hi!'))