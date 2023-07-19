import sqlite3
import time

# Establish a connection to the database
conn = sqlite3.connect('data2.db')
cursor = conn.cursor()

# Create a table if it doesn't exist
cursor.execute('''CREATE TABLE IF NOT EXISTS ramValues
                (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp INTEGER, percentage REAL, total REAL, used REAL, free REAL, shared REAL, cache REAL, available REAL)''')

# Read the values from the text file
with open('ramFile.txt', 'r') as file:
    line = file.readline().strip()
    values = line.split(' ')

    # Assign values to variables
    total, used, free, shared, cache, available = map(int, values)

    # Calculate percentage
    percentage = round((float(used) / float(total)) * 100)

    # Get the current timestamp
    timestamp = int(time.time())

    # Insert the values into the table
    cursor.execute("INSERT INTO ramValues (timestamp, percentage, total, used, free, shared, cache, available) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                   (timestamp, percentage, total, used, free, shared, cache, available))

    # Commit the changes to the database
    conn.commit()

    max_row_count = 60 

    # Check the current row count
    cursor.execute("SELECT COUNT(*) FROM ramValues")
    current_row_count = cursor.fetchone()[0]

    # If the maximum row count is exceeded, delete the oldest entry
    if current_row_count > max_row_count:
        cursor.execute("DELETE FROM ramValues WHERE id IN (SELECT id FROM ramValues ORDER BY timestamp ASC LIMIT 1)")

    # Commit the deletion
    conn.commit()

# Close the database connection
conn.close()
