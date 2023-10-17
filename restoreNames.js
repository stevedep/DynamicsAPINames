function restoreNames() {
    // Select all elements with the specified class
    const elements = document.querySelectorAll('.ag-header-cell.pcf-grid-header.non-editable-cell.ag-focus-managed');
    
    // Iterate through each matching element
    elements.forEach(element => {
      try {
        // Get the value of the col-id attribute
        const colIdValue = element.getAttribute('col-id');
    
        // Find the label element with the 'originalValue' attribute
        const labelElement = element.querySelector('.ms-Label');
    
        // Check if 'originalValue' attribute exists and restore the original text
        const originalValue = labelElement.getAttribute('originalValue');
        if (originalValue) {
          labelElement.textContent = originalValue;
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });
    }
    restoreNames();