const videoExtensions: String[] = ['mp4', 'mov', 'avi', 'wmv', 'avchd', 'webm', 'flv']

export const isVideoFormat = (fileName: String): boolean => {
    const extension = getFileExtension(fileName).toLowerCase()
    return videoExtensions.includes(extension);
};


const getFileExtension = (filename: String): String => {
    // Check if filename is defined and not empty
    if (!filename || typeof filename !== 'string') {
      return '';
    }
  
    // Split the filename by dot and get the last part
    const parts = filename.split('.');
    
    // If there's no dot or it's the first character, we assume there's no extension
    if (parts.length < 2 || !parts[0]) {
      return '';
    }
  
    const extension = parts.pop();
    return extension ? extension : ""; // Return the last part, which should be the extension
  }