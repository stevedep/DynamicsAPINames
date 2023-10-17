function setAPINames() {
  console.log('setAPINames called')
  // Select all elements with the specified class
  const elements = document.querySelectorAll('.ag-header-cell.pcf-grid-header.non-editable-cell.ag-focus-managed');
  
  // Iterate through each matching element
  elements.forEach(element => {
      try {  
  // Get the value of the col-id attribute
    
    const colIdValue = element.getAttribute('col-id');
  
    // Find the label element with the text "Attendee" and append the colIdValue
    const labelElement = element.querySelector('.ms-Label');
    const labelText = labelElement.textContent;
    labelElement.setAttribute('originalValue', labelText)      
  
    // Append the colIdValue to the label text
    labelElement.textContent = `${colIdValue}`;
      }
      catch (error) {
           console.error('An error occurred:', error);
      }
  });
  }
  

setAPINames()
  