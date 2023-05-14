# System States

The values of which define a system state can vary depending on the computer itself. For example, 3GB of RAM being used will be defined as "high"
on a system with only 4GB of RAM in total, but will be defined as "low" for a system with 32GB. Because of this, instead of using fixed values I will be using
percentages in order to define whether a hardware component is in a state of high or low utulisation. 
Here are the percentages I'm planning to use: 
- average cpu usage: 0% - 49%, high: 50% - 100%
- average ram usage: 0% - 59%, high: 60% - 100%

A "high" system state may suggest that you need to kill some tasks that are taking up too many resources in order for your computer to run faster.
<h3>UPDATE</h3>
Instead of using average and high, I may switch to these values instead. This decision was made as these terms are better associated with computer terminology.
- Green/Optimal: The system is running normally, >29% CPU, >39% RAM
- Amber/Warning: The computer is under heavy load. Maintaining this state is fine but power consumption may be increased, 30<CPU<79, 40<RAM<69
- Red/Critical: The computer is under extremely heavy load, it is recommended to kill high demanding processes, CPU>80, RAM>70


Another factor to consider is that different operating system use hardware on the computer differently. For example, a GNU/Linux system typically allocates 
less resources on tasks than a Windows system since it is more lightweight. Therefore average RAM usage between Linux and Windows system will differ.

Below is an image of RAM usage on a Linux system that is on idle. Only about 1GB of RAM is being used. Note that this system has 8GB RAM
![image](https://github.com/idontuseg1t/DA-SAT/assets/111327977/be52365a-8be6-426b-a9c6-9c6656982643)

Meanwhile, below shows another image of a Windows system also on idle, but using significantly more than the Linux system (4GB RAM). Note that this 
system has a total of 16GB RAM available.
![image](https://github.com/idontuseg1t/DA-SAT/assets/111327977/83b96f6f-75a3-4bbb-987a-41ec953b5a1c)

Note that the difference in RAM between both systems is also a factor on how much RAM is allocated to tasks.
