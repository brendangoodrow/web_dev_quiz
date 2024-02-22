// Function to attach event listener to the form
function attachSubmitEventListener() {
    var form = document.getElementById('contactForm');
    form.onsubmit = handleSubmit;
}

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Validate form
    if (validateForm()) {
        // Here you can add code to handle the form data, e.g., send it to a server
        handleFormData();
    }
}

// Function to validate the form
function validateForm() {
    var item_code = document.getElementById('item_code').value;
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var category = document.getElementById('category').value;
    var price = document.getElementById('price').value;
    
    if (!item_code || !title || !description || !category || !price) {
        alert('Please fill out all fields.');
        return false;
    }
    // Getting the first four word of the desciption
    var firstWords = [];
    var words = description.split(" ");
  
      for (var i = 0; i < description.length && i < 4; i++) {
        firstWords.push(words[i]);
      }

    let short_description = firstWords.join(' ');

    // Create new div
    const newDivElement = document.createElement('div');

    // Create new paragraph element to store the log
    const newParagraphElement = document.createElement('p');
    newParagraphElement.textContent = "Code: " + item_code + ", Title: " + title + ", Description: " + short_description + "..., Category: " + category + ", Price: " + price;

    // Adding the paragraph element to the div element
    newDivElement.appendChild(newParagraphElement);

    // Adding the div element to the body of the html document
    document.body.appendChild(newDivElement);

    // Setting all the input boxes to blank after the submit button is pressed
    document.getElementById('item_code').value = '';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
    document.getElementById('price').value = '';

    return true;
}

// Placeholder function for form data handling
function handleFormData() {
    // Placeholder for form submission logic, e.g., AJAX request to a server
    alert('Form submitted successfully!');
  return true;
}

// Attach the event listener to the form on page load
window.onload = attachSubmitEventListener;
