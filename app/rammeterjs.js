// Change the state and update the indicator
function setStateRam(state) {
    const indicator = document.querySelector('.indicatorRam');
    indicator.classList.remove('greenRam', 'amberRam', 'redRam');
  
    switch (state) {
      case 'greenRam':
        indicator.classList.add('greenRam');
        indicator.querySelector('.circleRam').style.backgroundColor = 'green';
        document.querySelector('.rightBox').style.borderColor= 'green';
        indicator.querySelector('.textRam').textContent = 'Green/Optimal';
        break;
      case 'amberRam':
        indicator.classList.add('amberRam');
        indicator.querySelector('.circleRam').style.backgroundColor = 'orange';
        document.querySelector('.rightBox').style.borderColor= 'orange';
        indicator.querySelector('.textRam').textContent = 'Amber/Warning';
        break;
      case 'redRam':
        indicator.classList.add('redRam');
        indicator.querySelector('.circleRam').style.backgroundColor = 'red';
        document.querySelector('.rightBox').style.borderColor= 'red';
        indicator.querySelector('.textRam').textContent = 'Red/Critical';
        break;
      default:
        // Handle invalid state
        break;
    }
  }



// Function to update the 'data' element with the percentage value
function updatePercentageValue(percentage) {
    var dataElementcpu = document.querySelector('.gauge-data2 #percentmeter2');
    var ramSummaryElement = document.querySelector('#ramSummary #percent');
    dataElementcpu.textContent = percentage + '%';

    if (percentage <= 39) {
        ramSummaryElement.textContent = 'Your RAM is running at ' + percentage + '%' + ' usage. The RAM is exhibiting OPTIMAL performance.'; 
        setStateRam('greenRam');
    }
    if (percentage > 39 && percentage <= 69) {
        ramSummaryElement.textContent = 'Your RAM is running at ' + percentage + '%' + ' usage. Maintaining this state is fine, but power consumption may be increased.'; 
        setStateRam('amberRam');
    }
    if (percentage > 70) {
        ramSummaryElement.textContent = 'Your RAM is running at ' + percentage + '%' + ' usage. The RAM is under extremely heavy load. It is recommended to kill high demanding processes.'; 
        setStateRam('redRam');
    }
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
