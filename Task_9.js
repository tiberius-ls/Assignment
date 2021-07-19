isPalindrome = (string) => {
    if (string === string.split('').reverse().join('')) {
        console.log('is palindrome');
    }
    else {
        console.log('is not palindrome');
    }
}

isPalindrome('noon')