// Change the state and update the indicator
function setStateCpu(state) {
    const indicator = document.querySelector('.indicatorCpu');
    indicator.classList.remove('greenCpu', 'amberCpu', 'redCpu');
  
    switch (state) {
      case 'greenCpu':
        indicator.classList.add('greenCpu');
        indicator.querySelector('.circleCpu').style.backgroundColor = 'green';
        document.querySelector('.leftBox').style.borderColor= 'green';
        indicator.querySelector('.textCpu').textContent = 'Green/Optimal';
        break;
      case 'amberCpu':
        indicator.classList.add('amberCpu');
        indicator.querySelector('.circleCpu').style.backgroundColor = 'orange';
        document.querySelector('.leftBox').style.borderColor= 'orange';
        indicator.querySelector('.textCpu').textContent = 'Amber/Warning';
        break;
      case 'redCpu':
        indicator.classList.add('redCpu');
        indicator.querySelector('.circleCpu').style.backgroundColor = 'red';
        document.querySelector('.leftBox').style.borderColor= 'red';
        indicator.querySelector('.textCpu').textContent = 'Red/Critical';
        break;
      default:
        // Handle invalid state
        break;
    }
  }


// Function to update the 'data' element with the percentage value
function updatePercentageValuecpu(percentage) {
    var dataElementcpu = document.querySelector('.gauge-data1 #percentmeter1');
    var cpuSummaryElement = document.querySelector('#cpuSummary #percent');
    dataElementcpu.textContent = percentage + '%';

    if (percentage <= 29) {
        cpuSummaryElement.textContent = 'Your CPU is running at ' + percentage + '%' + ' usage. The CPU is exhibiting OPTIMAL performance.'; 
        setStateCpu('greenCpu');
    }
    if (percentage > 29 && percentage <= 79) {
        cpuSummaryElement.textContent = 'Your CPU is running at ' + percentage + '%' + ' usage. Maintaining this state is fine, but power consumption may be increased.'; 
        setStateCpu('amberCpu');
    }
    if (percentage > 80) {
        cpuSummaryElement.textContent = 'Your CPU is running at ' + percentage + '%' + ' usage. The CPU is under extremely heavy load. It is recommended to kill high demanding processes.'; 
        setStateCppu('redCpu');
    }
}


// Function to convert a value between 0 and 100 to a rotation in turns
function valueToRotationTurnscpu(value) {
    
    // Calculate the rotation value in turns (0 to 0.5 turns)
    var rotationTurnscpu = value / 200;

    return rotationTurnscpu;
}

// Function to rotate the element based on the rotation in turns
function rotateElementcpu(rotationTurns) {
    var element = document.querySelector(".gauge-c1");

    // Apply the rotation to the element
    element.style.transform = "rotate(" + rotationTurns + "turn)";
}


function fetchDataAndRotatecpu() {
    // Make an AJAX request to main.php
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "cpuMeterFetch.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Parse the JSON response to get the rotation value
            var response = JSON.parse(xhr.responseText);
            var rotationValuecpu = response.rotationValuecpu;

            // Convert rotation value to rotation in turns
            var rotationTurnscpu = valueToRotationTurnscpu(rotationValuecpu);

            // Apply the rotation to the element
            rotateElementcpu(rotationTurnscpu);

            // Update the text element with the percentage value
            updatePercentageValuecpu(rotationValuecpu);
        }
    };
    xhr.send();

}


// Update the rotation every second
fetchDataAndRotatecpu();
setInterval(fetchDataAndRotatecpu, 1000);
