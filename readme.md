# HTML Content Highlighter

This project contains a JavaScript function `highlightHTMLContent` that takes HTML content, plain text, and plain text positions as inputs and returns the HTML content with highlighted text. The highlighting is applied based on the provided plain text positions.

## Function Signature

```javascript
/**
 * Strips the prefix from the keys of the given key-value pairs
 * @param {string} htmlContent - HTML content which needs to be highlighted 
 * @param {string} plainText - This plain text is extracted from htmlContent
 * @param {array} plainTextPositions - Array of Objects with start and end positions of words in plainText (Not the positions in HTML)
 * @returns {string} Using the positions in plainText, find the appropriate positions in htmlContent, highlight the content and return it
 */
function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  // Implementation details go here
}


#Usage
The highlightHTMLContent function is designed to highlight specific text within the provided HTML content based on the positions provided in the plain text. It returns the modified HTML content with highlighted text.

To use the function, follow these steps:

Include the highlightHTMLContent function in your JavaScript project.
Call the function with the following parameters:
htmlContent: The HTML content that needs to be highlighted.
plainText: The plain text extracted from the HTML content.
plainTextPositions: An array of objects representing the start and end positions of words in the plain text.
The function will return the HTML content with highlighted text based on the specified positions.

#Example
const htmlContent = `<p><span>Hi there, this is an example.</span></p>`;
const plainText = 'Hi there, this is';
const plainTextPositions = [{ start: 0, end: 9 }];

const highlightedContent = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
console.log(highlightedContent); // Output will have highlighted text
