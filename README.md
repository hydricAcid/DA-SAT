# DA-SAT
This is a project for creating a dynamic data visualisation of a computer's hardware usage data

<h2>Criteria 1 - https://docs.google.com/document/d/1xwq8xkToBnItn6wKMwRNMdQ8dhq2bD8muqSZrKyoHOI/edit</h2>

We can’t just look at a computer and see how much of the CPU and RAM is being used. We need the help of applications like “Task Manager” in Windows that put data into a graphical format to help visualise how much CPU and RAM is being used. What I plan to do is make a task manager application that transforms data from CPU and RAM usage into graphs that are updated frequently to show accurate information. Therefore, this task manager application is a way of dynamically displaying data to the user to inform them about their computer’s CPU, RAM and other hardware utilisation. This application may also allow the tracking of the temperature of hardware components, so users may test how much their computer heats up when they use certain applications. In order to collect data regarding this research question, there are a variety of tools, both GUI and CLI that can assist with this. 

Depending on the operating system, the computer also assigns variables to hardware values that are able to be accessed by programs with sufficient permissions. These variables will most likely be the way my program is able to access data about the computer’s hardware, and therefore displaying that data in graphical format. Regarding operating system support, my program will most likely only support GNU/Linux systems as that will be the main environment I will be developing in.

Gathering hardware utulisation information using BASH commands will be the primary way I gather data. I can use a BASH script to clean up the raw command outputs too so that they are prepared for presentation in graphical format. Comparisons of system states from different machines will also be another way I collect data so that my dynamic data visualisation can inform the user of the current state of their machine’s operation.


<h2>Criteria 3 - https://docs.google.com/document/d/1Cm8-zP7yiYxYu7MXAEzfITjUooZBon-Or1YcG0wRYik/edit</h2>

<h2>Criteria 4 - Data Gathering.md</h2>

<h2>Criteria 5 - https://docs.google.com/document/d/1ra_t3Y7Oiiq3kTmTkmSXogkdgQoBQOc-uWIgdDH0X-c/edit</h2>

<h2>Criteria 6 - Data Manipulation.md</h2>
In summary:

'Scripts' folder: mostly server-side stuff

'app' folder: mostly client-side stuff

<h2>Criteria 7 - https://drive.google.com/file/d/10YjACciQnFL7sPT0jr2U4VYZOtNlUUOh/view?usp=sharing</h2>

here's some images too:
![image](https://github.com/hydricAcid/DA-SAT/assets/126314765/48eb0c80-0b4e-447b-8768-0249af6ba4fc)
![image](https://github.com/hydricAcid/DA-SAT/assets/126314765/31a3a695-ac81-4ba7-a8f9-5109df75cbf2)
![image](https://github.com/hydricAcid/DA-SAT/assets/126314765/b3d3d3ef-2233-4672-a09b-f63967754fd0)

<h2>Criteria 8 - https://docs.google.com/document/d/1mQTiOXjhpKghWsN8gBJfYjCW3xHe2lAgi-iijeSmTgg/edit</h2>

File manage skills.

<h2>Criteria 9 - Evaluation</h2>

In order to evaluate the dynamic data presentation, I would need to run a bunch of theoretical scenarios where a user may need to use this solution. For example, say a user's RAM usage is extremely high and they want to find out the name of the process that is responsible for this, so they can end the process. I would have a tester (if I had one) to test if they are able to quickly find the process. Another example is if a user just wants to know what to do if their CPU usage is high, but they need all of their apps running. I would have my fake tester test the solution to fin the System State description at the bottom which recommends the user some actions depending on the system state.


Here is the evaluation of the dynamic data presentation in terms of the evaluation criteria:
<ol>
  <li>Usability - The dynamic data presentation is easy to navigate, only requiring the user to scroll up and down the page to access the entire presentation. All the elements of the presentation are also straightforward, and the values are updated frequently to ensure data is up to date..</li>
  <li>Flexibility - The dynamic data presentation has multiple ways for a user to read the hardware statistics.  This ensures that the dynamic data presentation can meet various needs of the user, like if they wanted to find out the names of processes using up the most resources, or if they just wanted the current state of their computer.</li>
  <li>Space - The various elements of the dynamic data presentation are spaced out evenly to ensure that the user can quickly find the specific graph or element they need. Since the dynamic data presentation is also on a web page, a user can also zoom in and out as they please.</li>
</ol>

During Criteria 5, my final design of the solutionh showed pie charts spanning the middle of the page, however they were not incorporated in the final product. This is because I later found out that pie charts were taking up too much space, and they would need labels and descriptors for each 'slice' too, taking up even more space, and it just made the presentation look bad. So I decided to not add the pie charts completely.

<h2>Criteria 10 - Assessing Project Plan</h2>

I'd say that the most adjusted part of the project plan was Criteria 7. Because of the nature of the dynamic data presentation compared to just a regular static data presentation, significantly more work had to be done to get it working. Because information was also coming from a local source, I had to figure out how to extract that information then clean it too. Because of the security features of modern web browsers, the don't allow most files on a local person's computer to be read, therefore I had to put the information in a database using a database software then had the browser access that informationm using JavaScript and PHP. This solution also required a significant amount of coding, mostly in Python and Javascript, as the process of gathering the necessary data was complicated. Therefore, this project took way more time because much more effort was needed compared to just simply making a poster or infographic. There was also the process of fixing bugs and other problems that come with software development but don't come with data analytics.

Regarding the effectiveness of the project plan, I'd say it was only effective in the beginning. Then after that, I just worked whenever I felt like it. I guess it was due to the unique nature of the project, as mentioned before and that I just felt like working on this whenever I felt like it. The fact that I also had software development running alongside this subject, ahd having to do work for my project there too is also a factor that has impacted the project plan.



