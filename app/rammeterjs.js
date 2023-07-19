// Function to update the 'data' element with the percentage value
function updatePercentageValue(percentage) {
    var dataElement = document.querySelector('.gauge-data2 #percentmeter2');
    dataElement.textContent = percentage + '%';
}

// Function to convert a value between 0 and 100 to a rotation in turns
function valueToRotationTurns(value) {

    // Calculate the rotation value in turns (0 to 0.5 turns)
    var rotationTurns = value / 200; 

    return rotationTurns;
}

// Function to rotate the element based on the rotation in turns
function rotateElement(rotationTurns) {
    var element = document.querySelector(".gauge-c2");

    // Apply the rotation to the element
    element.style.transform = "rotate(" + rotationTurns + "turn)";
}


function fetchDataAndRotateram() {
    // Make an AJAX request to main.php
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "ramMeterFetch.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Parse the JSON response to get the rotation value
            var response = JSON.parse(xhr.responseText);
            var rotationValue = response.rotationValueram;

            // Convert rotation value to rotation in turns
            var rotationTurns = valueToRotationTurns(rotationValue);

            // Apply the rotation to the element
            rotateElement(rotationTurns);

            // Update the text element with the percentage value
            updatePercentageValue(rotationValue);
        }
    };
    xhr.send();
}

// Update the rotation every second
fetchDataAndRotateram();
setInterval(fetchDataAndRotateram, 1000);
