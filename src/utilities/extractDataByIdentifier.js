/**
 * Extracts data from a string based on an identifier
 * @param {string} str - The string containing data in format "identifier1 data1 identifier2 data2 ..."
 * @param {string} identifier - The identifier to search for (e.g., "location", "stars")
 * @returns {string|null} - The data associated with the identifier, or null if not found
 * 
 * @example
 * const data = "location New York stars 5 rating 4.5";
 * extractDataByIdentifier(data, "location"); // Returns "New York"
 * extractDataByIdentifier(data, "stars"); // Returns "5"
 * extractDataByIdentifier(data, "rating"); // Returns "4.5"
 */
export const extractDataByIdentifier = (str, identifier) => {
  if (!str || typeof str !== 'string') {
    return null;
  }

  if (!identifier || typeof identifier !== 'string') {
    return null;
  }

  // Create a regex pattern to find the identifier followed by its data
  // The pattern matches: identifier followed by whitespace, then captures everything
  // until the next word that could be an identifier (word boundary) or end of string
  const pattern = new RegExp(`${identifier}\\s+(.+?)(?=\\s+[a-zA-Z]+\\s+|$)`, 'i');
  
  const match = str.match(pattern);
  
  if (match && match[1]) {
    // Return the captured group (the data), trimmed of extra whitespace
    return match[1].trim();
  }

  return null;
};

export default extractDataByIdentifier;

