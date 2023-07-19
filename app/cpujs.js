window.addEventListener('load', function() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var chartContainer = document.getElementById('chartContainer1');
    chartContainer.appendChild(canvas);

    // Set the canvas size
    canvas.width = chartContainer.clientWidth;
    canvas.height = chartContainer.clientHeight;

    function fetchDataAndRedrawGraph() {
        // Fetch updated data from the server
        fetch('cpuFetch.php')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var multiplier = 3; // Define the multiplier value

            // Multiply the y-values by the multiplier
            data.forEach(function(point) {
            point.y = point.y * multiplier;
            });

            // Clear the canvas before redrawing the graph
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the line graph
            ctx.beginPath();
            ctx.moveTo(0, canvas.height - data[0].y);
            for (var i = 1; i < data.length; i++) {
            var point = data[i];
            var x = point.x * (canvas.width / (data.length - 1));
            ctx.lineTo(x, canvas.height - point.y);
            }

            // Fill the area under the line graph
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            ctx.fillStyle = 'rgba(16, 255, 20, 1)'; // Set the fill color with transparency
            ctx.fill();

            // Stroke the line graph
            ctx.strokeStyle = '#ffffff';
            ctx.stroke();
        });
    }

    // Fetch and redraw the graph initially
    fetchDataAndRedrawGraph();

    // Update the graph every second
    setInterval(fetchDataAndRedrawGraph, 1000);
    });
