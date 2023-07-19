<?php
// Connect to the SQLite database
$pdo = new PDO('sqlite:../Scripts/data2.db');

$query = $pdo->query('SELECT percentage FROM ramValues');
$data = $query->fetchAll(PDO::FETCH_COLUMN, 0);

// Create an array to hold the final data with x and y values
$finalData = [];
for ($i = 0; $i < count($data); $i++) {
    $finalData[] = ['x' => $i + 1, 'y' => $data[$i]];
}

echo json_encode($finalData);
?>
