# Storing and Manipulating Data

As mentioned before, the purpose of my project is to visualise the hardware usage statistics of my computer.
My project takes the form of a web application, where animations created using a combination of CSS and JavaScript display the data visualisations. 
So far, I've been running it locall on my computer using Apache Webserver. In terms of the 'data' aspect of this project, I am using Python, BASH, SQLite Database and PHP on the server-side and HTML, CSS and JavaScript on the client-side.

<h2>How data is retrieved.</h2>

1. Using the BASH scripts ramRead.sh and cpuUsageRead.sh, raw data is collected from the system and some cleaning is applied (more information in Data Gathering.md). The BASH scripts write data into text files which will be read later.


2. Now, Python scripts utilising the sqlite python libraries read the text files created before and write that data to a database (in the Scripts folder, see cpuInsert.py and ramInsert.py), where we can use PHP later to fetch values from that database. By using the sqlite python library, we can write SQL queries in the python script and have them excecuted automatically.

Below is a piece of sample code from cpuInsert.py:
  
```python
    def insert_line(content):
    timestamp = int(time.time())  # Get the current Unix timestamp
    cursor.execute("INSERT INTO lines (content, timestamp) VALUES (?, ?)", (content, timestamp))
    conn.commit()
```

