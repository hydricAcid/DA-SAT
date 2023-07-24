import sqlite3

# Function to create a new SQLite database and table
def create_database():
    conn = sqlite3.connect('data3.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS top_applications
                 (PID INTEGER, Process TEXT, Usage REAL)''')
    conn.commit()
    conn.close()

# Function to delete existing data in the table
def delete_data():
    conn = sqlite3.connect('data3.db')
    c = conn.cursor()
    c.execute("DELETE FROM top_applications")
    conn.commit()
    conn.close()

# Function to read the text file and insert data into the SQLite table
def insert_data_from_text_file(filename):
    conn = sqlite3.connect('data3.db')
    c = conn.cursor()

    delete_data()  # Delete existing data before inserting new entries

    with open(filename, 'r') as file:
        lines = file.readlines()

    for line in lines:
        pid, process, usage = line.strip().split(',')
        c.execute("INSERT INTO top_applications VALUES (?, ?, ?)", (int(pid), process, float(usage)))

    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_database()
    text_file_name = "topCpuApps.txt" 
    insert_data_from_text_file(text_file_name)
