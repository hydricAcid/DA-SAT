import time
import sqlite3

MAX_ROWS = 60 

def insert_line(content):
    timestamp = int(time.time())  # Get the current Unix timestamp
    cursor.execute("INSERT INTO lines (content, timestamp) VALUES (?, ?)", (content, timestamp))
    conn.commit()

def get_lines():
    cursor.execute("SELECT content FROM lines ORDER BY timestamp ASC")
    return cursor.fetchall()

def delete_oldest_entry():
    cursor.execute("SELECT id FROM lines ORDER BY timestamp ASC LIMIT 1")
    oldest_id = cursor.fetchone()[0]
    cursor.execute("DELETE FROM lines WHERE id = ?", (oldest_id,))
    conn.commit()

conn = sqlite3.connect('data1.db')
cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS lines (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    content TEXT NOT NULL,
                    timestamp INTEGER NOT NULL)''')

conn.commit()

filename = 'cpuFile.txt'
with open(filename, 'r') as file:
    line = file.readline().strip()
    insert_line(line)

# Check if the number of rows exceeds the maximum limit
cursor.execute("SELECT COUNT(*) FROM lines")
row_count = cursor.fetchone()[0]

if row_count > MAX_ROWS:
    delete_oldest_entry()

