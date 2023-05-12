#!/bin/bash

while :; do
	free -m | grep 'Mem:' > ramFile.txt
	ram_now=($(head -n2 ramFile.txt)) 
       	ram_sum="${ram_now[@]:1}" 	
	echo $ram_sum
	sleep 1
done	
