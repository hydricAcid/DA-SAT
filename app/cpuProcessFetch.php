<?php
// Connect to the database
$db = new SQLite3('../Scripts/data3.db');

// Fetch all data from the database
$results = $db->query('SELECT * FROM top_applications ORDER BY rowid ASC');

$data = array();
while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
    $data[] = $row;
}

// Close the database connection
$db->close();

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
