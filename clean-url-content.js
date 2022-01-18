exports.cleanUrlContent = string => {
    // Remove all numbers
    // Remove all special characters apart from apostrophe that's with a word
    // Return the string
    // Changed the return string to have all lowercase letters
    const alphabet = string.replace(/[^A-Za-z']+/g, " ").trim();
    const lowerCase = alphabet.toLowerCase()
    return lowerCase
  }