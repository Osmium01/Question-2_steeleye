/**
 * Strips the prefix from the keys of the given key-value pairs
 * @param {string} htmlContent - HTML content which needs to be highlighted 
 * @param {string} plainText - This plain text is extracted from htmlContent
 * @param {array} plainTextPositions - Array of Objects with start and end positions of words in plainText (Not the positions in HTML)
 * @returns {string} Using the positions in plainText, find the appropriate positions in htmlContent, highlight the content and return it
 */
function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    // Create an array of characters from the HTML content
    const htmlChars = htmlContent.split('');
  
    // Create an array of characters from the plainText
    const plainChars = plainText.split('');
  
    // Initialize a pointer for the plainTextPositions array
    let plainPointer = 0;
  
    // Iterate through each character in the htmlChars array
    for (let i = 0; i < htmlChars.length; i++) {
      // Check if the current character in the HTML content matches the current character in the plainText
      if (htmlChars[i] === plainChars[plainPointer]) {
        // Check if the current position in plainText is within a highlighted range
        if (
          plainTextPositions[plainPointer] &&
          i === plainTextPositions[plainPointer].start
        ) {
          // Insert an opening <mark> tag
          htmlChars.splice(i, 0, '<mark>');
          i += 6; // Move the pointer to skip the <mark> tag
          plainPointer++; // Move to the next character in plainText
        } else if (
          plainTextPositions[plainPointer] &&
          i === plainTextPositions[plainPointer].end
        ) {
          // Insert a closing </mark> tag
          htmlChars.splice(i + 1, 0, '</mark>');
          i += 7; // Move the pointer to skip the </mark> tag
          plainPointer++; // Move to the next character in plainText
        } else {
          // Move to the next character in plainText
          plainPointer++;
        }
      }
    }
  
    // Join the modified HTML characters back into a string
    const highlightedHTML = htmlChars.join('');
  
    return highlightedHTML;
  }
  