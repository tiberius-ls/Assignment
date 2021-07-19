isPalindrome = (string) => {
    if (string === string.split('').reverse().join('')) {
        console.log('it is a palindrome');
    }
    else {
        console.log('it is not a palindrome');
    }
}
//input a string to check
isPalindrome()
