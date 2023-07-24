function updateData() {
    fetch('ramProcessFetch.php')
        .then(response => response.json())
        .then(data => {
            let cpuDataList = document.getElementById('ramListData');
            cpuDataList.innerHTML = ''; // Clear previous data

            data.forEach(function (item, index) {
                cpuDataList.innerHTML += `<li style="list-style-type: none;">${index + 1}. PID: ${item.PID}, Process: ${item.Process}, Usage: ${item.Usage}</li>`;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the updateData function initially
updateData();

// Set up infinite execution with a 1-second delay
setInterval(updateData, 1000);
