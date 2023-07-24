#/bin/bash

while :; do
    # Get the first line with aggregate of all CPUs 
    cpu_now=($(head -n1 /proc/stat)) 
    # Get all columns but skip the first (which is the "cpu" string) 
    cpu_sum="${cpu_now[@]:1}" 
    # Replace the column seperator (space) with + 
    cpu_sum=$((${cpu_sum// /+})) 
    # Get the delta between two reads 
    cpu_delta=$((cpu_sum - cpu_last_sum)) 
    # Get the idle time Delta 
    cpu_idle=$((cpu_now[4]- cpu_last[4])) 
    # Calc time spent working 
    cpu_used=$((cpu_delta - cpu_idle)) 
    # Calc percentage 
    cpu_usage=$((100 * cpu_used / cpu_delta)) 
        
    # Keep this as last for our next read 
    cpu_last=("${cpu_now[@]}") 
    cpu_last_sum=$cpu_sum 
        
    echo "$cpu_usage" > cpuFile.txt

    top -b -n 1 -o %CPU | grep -E '^\s*[0-9]+' | head -n 10 | awk '{print $1 "," $12 "," $9}' > topCpuApps.txt
    top -b -n 1 -o %MEM | grep -E '^\s*[0-9]+' | head -n 10 | awk '{print $1 "," $12 "," $10}' > topRamApps.txt
    ./ramRead.sh
    python cpuInsert.py
    python ramInsert.py
    python processInsertCpu.py
    python processInsertRam.py
    sleep 1
    
done