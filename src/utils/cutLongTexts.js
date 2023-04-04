const cutLongText = ({ strText , maxChar = 50, end = '...', errorMessage = 'ERROR: disabled text' }) => {
  try {
    if (strText.length <= maxChar) {
      return strText
    }
    return strText.slice(0, maxChar) + end
  } catch (error) {
    return errorMessage
  }
}

export  { cutLongText }