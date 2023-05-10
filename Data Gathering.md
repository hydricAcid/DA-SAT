CPU STATS

Command used:
```
cat /proc/stat | grep cpu

```
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

from https://www.baeldung.com/linux/get-cpu-usage
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