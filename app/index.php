
<?php
// Connect to the SQLite database
$pdo = new PDO('sqlite:/home/kyle/Projects/DA-SAT/Scripts/data1.db');

$query = $pdo->query('SELECT content FROM lines');
$data = $query->fetchAll(PDO::FETCH_COLUMN, 0);

// Create an array to hold the final data with x and y values
$finalData = [];
for ($i = 0; $i < count($data); $i++) {
    $finalData[] = ['x' => $i + 1, 'y' => $data[$i]];
}

$dataJson = json_encode($finalData);
?>





<!DOCTYPE html>
<html>
    <head>
        <title>Test title</title>
        <link rel="stylesheet" href="style.css">
        <script type="text/javascript" src="js.js"></script>
    </head>
    <body>
        <h1 id="test">Hello world</h1>


        <div class="meter1">
            <div class="container">
                <div class="gauge-a"></div>
                <div class="gauge-b"></div>
                <div class="gauge-c"></div>
                <div class="gauge-data">
                  <h1 id="percentgraph1">0%</h1>
                </div>
            </div>

        </div>

        <div class="meter2">
            <div class="container">
                <div class="gauge-a"></div>
                <div class="gauge-b"></div>
                <div class="gauge-c"></div>
                <div class="gauge-data">
                  <h1 id="percentgraph2">0%</h1>
                </div>
            </div>

        </div>



        <div id="chartContainer" class="graph1">

        </div>



        <p class="graph2">filler text</p>
        
        
        <script>
            window.addEventListener('load', function() {
            var data = <?php echo $dataJson; ?>;
            var multiplier = 3; // Define the multiplier value

            // Multiply the y-values by the multiplier
            data.forEach(function(point) {
                point.y = point.y * multiplier;
            });

            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            var chartContainer = document.getElementById('chartContainer');
            chartContainer.appendChild(canvas);

            // Set the canvas size
            canvas.width = chartContainer.clientWidth;
            canvas.height = chartContainer.clientHeight;

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
            ctx.fillStyle = 'rgba(0, 0, 255, 0.2)'; // Set the fill color with transparency
            ctx.fill();

            // Stroke the line graph
            ctx.strokeStyle = '#000';
            ctx.stroke();
            });


        </script>
    </body>
</html>
	
