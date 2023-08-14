// First Unique Character in a String (Easy):
// Given a string, find the first non-repeating character and return its index. If no unique character exists, return -1.

function firstUniqueChar(s) {
    const charFrequency = new Map();
  
    // Count the frequency of each character
    for (const char of s) {
      charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
  
    // Find the first unique character
    for (let i = 0; i < s.length; i++) {
      if (charFrequency.get(s[i]) === 1) {
        return s[i];
      }
    }
  
    return null; // No unique character found
  }
  
  // Example usage:
  const inputString = "leetcode";
  console.log(firstUniqueChar(inputString)); // Output: "l"
  