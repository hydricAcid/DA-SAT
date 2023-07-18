import sqlite3

MAX_ROWS = 60  # 60 seconds for 1 minute

def insert_line(content):
    cursor.execute("INSERT INTO lines (content) VALUES (?)", (content,))
    conn.commit()

def get_lines():
    cursor.execute("SELECT content FROM lines ORDER BY id ASC")
    return cursor.fetchall()

def delete_oldest_entry():
    cursor.execute("SELECT id FROM lines ORDER BY id ASC LIMIT 1")
    oldest_id = cursor.fetchone()[0]
    cursor.execute("DELETE FROM lines WHERE id = ?", (oldest_id,))
    conn.commit()

conn = sqlite3.connect('data1.db')
cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS lines (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    content TEXT NOT NULL)''')

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

lines = get_lines()
for line in lines:
    print(line[0])
