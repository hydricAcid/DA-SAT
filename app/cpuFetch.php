<?php
// Connect to the SQLite database
$pdo = new PDO('sqlite:../Scripts/data1.db'); # relative path: accesses the parent directory then goes into the Scripts folder to access the database

$query = $pdo->query('SELECT content FROM lines');
$data = $query->fetchAll(PDO::FETCH_COLUMN, 0);

// Create an array to hold the final data with x and y values for the graph
$finalData = [];
for ($i = 0; $i < count($data); $i++) {
    $finalData[] = ['x' => $i + 1, 'y' => $data[$i]];
}

echo json_encode($finalData);
?>
