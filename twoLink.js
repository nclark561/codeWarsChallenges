const linkOne = {
    value: 9,
    next: {
        value: 6,
        next:{
            value:8,
            next:{
                value:1,
                next: null
            }
        }
    }
}
const linkTwo = {
    value: 3,
    next: {
        value: 1,
        next:{
            value: 5,
            next: null
        }
    }
}

//takes in two linked lists and puts the digits of value in reverse order and adds the two numbers together.
const addLinks = (l1, l2) => {
    let num1 = [];
    let num2 = [];
    while(l1 !== null) {
        num1.unshift(String(l1.value));
        l1 = l1.next;
    }
    while(l2 !== null) {
        num2.unshift(String(l2.value));
        l2 = l2.next;
    }
    num1 = num1.join('');
    num2 = num2.join('');
    console.log(num1);
    console.log(num2);
    return +num1 + +num2;
}

console.log(addLinks(linkOne, linkTwo));