<?php
// Connect to the SQLite database
$db = new SQLite3('../Scripts/data2.db');

// Fetch the data from the bottom row of the "values" column
$query = 'SELECT percentage FROM ramValues ORDER BY rowid DESC LIMIT 1;';
$result = $db->querySingle($query);

// Close the database connection
$db->close();

// Return the value as JSON
header('Content-Type: application/json');
echo json_encode(array('rotationValueram' => $result));
?>
