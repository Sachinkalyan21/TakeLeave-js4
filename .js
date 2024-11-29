function reverseString(input) {
    // Convert the string to an array
    let charArray = input.split('');

    // Reverse the array
    charArray.reverse();

    // Join the array back into a string
    let reversedString = charArray.join('');

    return reversedString;
}

// Example usage
const originalString = "Hello, World!";
const reversed = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversed);
