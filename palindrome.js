function isPalindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  };
  if (newStr.toLowerCase() === str.toLowerCase()) {
    return 'Is a Palindrome';
  } else {
    return 'Is not a Palindrome';
  }
};

console.log(isPalindrome('racecar'));

/* const isPalindrome = str => str.split('').reverse().join('') === str

