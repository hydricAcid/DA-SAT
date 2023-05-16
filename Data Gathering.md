# Gathering Data

Since I will be collecting hardware info from the computer itself, my data set will mostly consist of primary data collected from observations. This will mean that my data will be as accurate as possible. Since my graphical presentation of the data will also be dynamic, the data will be frequently changing and the graphs will need to reflect this. Also, mainly collecting data using observations of hardware data from the computer greatly limits my data sources, meaning that I will have a lack of secondary data. To rectify this, I will collect different system states from 2 different systems and compare them.

<h1>Data Collection</h1>
Data collection is conducted through the excecution of commands via a bash script and cleaning the raw output so that the values are suitable for graphing. Hardware utulisation data is collected directly from the operating system itself, meaning that this data is extremely reliable.

<h2>CPU STATS</h2>
We use a command to collect the CPU stats of the machine.
Command used:

```bash
cat /proc/stat | grep cpu
```

The 'cat' command outputs the contents of a file to the command line. In this case, we are outputting the contents of a file named 'stat' on the 'proc' directory. /proc/stat contains information about the machine's system, including CPU statistics.

More information about the /proc filesystem can be found in the official Linux kernel documentation: 

The linux kernel. The Linux Kernel documentation - The Linux Kernel documentation. (n.d.). https://www.kernel.org/doc/html/latest/index.html 




OUTPUT
```
cpu  109042 5 38646 3622213 3005 6651 3651 0 0 0
cpu0 14479 0 5581 451074 374 845 461 0 0 0
cpu1 14189 0 5093 452041 447 778 406 0 0 0
cpu2 14627 0 4541 452318 380 679 428 0 0 0
cpu3 14339 0 4756 452370 453 675 371 0 0 0
cpu4 13260 0 4126 453987 267 882 543 0 0 0
cpu5 13322 1 4604 453647 371 735 437 0 0 0
cpu6 11565 0 5031 453455 371 1377 642 0 0 0
cpu7 13258 1 4910 453317 338 677 359 0 0 0
```

from:

baeldung, W. by: (2021, September 1). Get overall CPU usage on linux. Baeldung on Linux. https://www.baeldung.com/linux/get-cpu-usage 

```
The columns in the ‘_cpu_‘ row represent times spent processing different tasks:

-   _user_ – time spent in user mode
-   _nice_ – time spent processing nice processes in user mode
-   _system_ – time spent executing kernel code
-   _idle_ – time spent idle
-   _iowait_ – time spent waiting for I/O
-   _irq_ – time spent servicing interrupts
-   _softirq_ – time spent servicing software interrupts
-   _steal_ – time stolen from a virtual machine
-   _guest_ – time spent running a virtual CPU for a guest operating system
-   _guest_nice_ – time spent running a virtual CPU for a “niced” guest operating system
```

Created file to sort this data -> cpuUsageRead, located in U3-1 SAT folder which only reads the first row

```
cpu  109042 5 38646 3622213 3005 6651 3651 0 0 0
```

and calculates usage from that data

<h2>RAM Statistics</h2>
Similarly, a command is used to collect the RAM statistics of the machine.
Command used:
```
free -m
```
The command 'free' parses information from /proc/meminfo (again from /proc) meaning that it is easier for me to work with the output of the command instead of directly getting the contents directly from /proc/meminfo. This data is still accurate as no information has changed, it is just organised. The '-m' option just changes the format to mebibytes.

The 'free' man page can be found here: 

Free(1) - linux manual page. (n.d.). https://www.man7.org/linux/man-pages/man1/free.1.html 



Sample output:
```
               total        used        free      shared  buff/cache   available
Mem:            7615        2235        2800         224        2580        4855
Swap:              0           0           0
```
This output is easier to read than cpu stats, since there are labels for the columns. The 'free' command has cleaned up data from /proc/meminfo for us, but even though this data has already been cleaned, we will need to clean it up further for our use.
We will only need to read the first line, since swap is irrelevant in our case.
```
Mem:            7615        2235        2800         224        2580        4855
```
In the scripts folder, there is a bash script used to clean this output -> ramRead.sh
