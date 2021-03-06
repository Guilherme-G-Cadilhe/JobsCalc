<h1 align="center">
  <img alt="JobsCalc" title="JobsCalc" src="/public/images/favicon.png" width="50px" />
 JobsCalc
</h1>

<p align="center">
  <a href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Learned">License</a>
</p>

---

<p align="center">
  <img alt="JobsCalcMainGif" title="JobsCalc" src="/public/githubMedia/JobsCalc.gif" />
</p>



---
<br>
<details align = "left">
<summary> <b> Summary of the Contents </b> <i>(Click here to Expand it!)</i> </summary>
 <br>

<!--ts-->
   * About
   * Features
     * Create Jobs
     * Delete Jobs
     * Update Jobs
     * Configure and Update Profile data
     * Shows how many Jobs are in Progress
     * Shows how many Jobs are Done
     * Shows how many Jobs in total
     * Shows how much hours you have left in your day
     * Shows how many days left for the delivery of the job
   * Technologies
   * Installing and Contributing
   * What have i learned?
   * License
   * Contributors
   * Author
<!--te-->
 </details

<br>
<br>

<h1 align="center" >
<a href="https://bobnini-jobs-calc.herokuapp.com/">๐ Website Page With Deploy on HEROKU </a>
</h1>

<h2 id ="about" align="center">๐ About</h2>

**JobsCalc** is a calculation estimation application for **Freelance Projects**, where it is possible to register and exclude Jobs (Projects), obtaining a cost estimate for each job.<br>
In addition, it is possible to plot the **Time Value** of the person who will be using the system ๐ฐ

---
> **Track** all your **Freelance jobs** with **JobsCalc**, never miss the deadline again, and easily calculate your **value per hour** while working on those projects!.


<h2 id="Features" align="center">โ๏ธ Features</h2>

<h3> ๐งท Create Jobs</h3>

- In the yellow **"Adicionar novo Job"** button, on the FrontPage, you can create a **new Job** and fill the forms about it.
- The fields are: **Job's name**, **How much hours are you going to dedicate for the job**, **Estimate hours for doing this job**
- **Created jobs are added to the Database**
<details>
<summary> <b> Demonstration Gif </b> <i>(Click here to Expand it!)</i> </summary>
 <br>
  <img alt="JobsCalc 1 Feature" title="JobsCalc" src="/public/githubMedia/1FeatureJobsCalc.gif" width="800px" />
</details
<br>
 
 ---
 
<h3> ๐งท Delete Jobs</h3>

- On the right side of the chosen Job, the **Trash icon button** lets you **delete the Job**.
- **Deleted Jobs are removed from the Database**
<details>
<summary> <b> Demonstration Gif </b> <i>(Click here to Expand it!)</i> </summary>
 <br>
 <img alt="JobsCalc 2 Feature" title="JobsCalc" src="/public/githubMedia/2FeatureJobsCalc.gif" width="800px" />
</details
<br>
 
 ---

 <h3> ๐งทUpdate Jobs</h3>

- On the right side of the chosen Job, the **Pen icon button** lets you **Edit the Job**, and the **Save button** after editing lets you save it.
- Editing the job lets you change the same fields as in the **Job Creation**
- **Updated Jobs are saved and updated in the Database**
<details>
<summary> <b> Demonstration Gif </b> <i>(Click here to Expand it!)</i> </summary>
 <br>
 <img alt="JobsCalc 3 Feature" title="JobsCalc" src="/public/githubMedia/3FeatureJobsCalc.gif" width="800px" />
</details
<br>
 
 ---

 <h3> ๐งท Configure and Update Profile data</h3>

- On the top right side of the page, clicking in, and around the Profile Photo, you acess your Profile.
- The Profile fields are: **Name**,**Img link**, **How much you wanna earn per month**, **What are your working hours per day**, **How many working days per week**, **How many week vacations per year**.
- Your **Value per hour** will be calculated based on those numbers
- **Updated Profiles are Saved in the Database**
<details>
<summary> <b> Demonstration Gif </b> <i>(Click here to Expand it!)</i> </summary>
 <br>
 <img alt="JobsCalc 4 Feature" title="JobsCalc" src="/public/githubMedia/4FeatureJobsCalc.gif" width="800px" />
</details
<br>
 
 ---
  
 <h3> ๐งท Shows how many Jobs are in Progress / Done / in Total</h3>

- On the left top center you will find a number that tracks your **Jobs in Progress**, **Jobs that are done(The delivery period has ended)**, and the **Total Jobs that exist currently**
- Every New Job, Jobs that are in Progress and Jobs that the delivery period has passed. Changes the numbers

<details>
<summary> <b> Demonstration Images </b> <i>(Click here to Expand it!)</i> </summary>
 <br>
 <img alt="JobsCalc 5 Feature" title="JobsCalc" src="/public/githubMedia/5FeatureJobsCalc.png" width="800px" />
</details
<br>
 
 ---
  
 <h3> ๐งท Shows how much hours you have left in your day</h3>

- The top center shows the hours remaining in your day, based on your **Profile Preferences and the Projects Currently in Progress**
  
<details>
<summary> <b> Demonstration Image </b> <i>(Click here to Expand it!)</i> </summary>
 <br>
 <img alt="JobsCalc 6 Feature" title="JobsCalc" src="/public/githubMedia/6FeatureJobsCalc1.png" width="800px" />
 <img alt="JobsCalc 6 Feature" title="JobsCalc" src="/public/githubMedia/6FeatureJobsCalc2.png" width="800px" />
 <img alt="JobsCalc 6 Featurec" title="JobsCalc" src="/public/githubMedia/6FeatureJobsCalc3.png" width="800px" />
</details
<br>
 
 ---
  
 <h3> ๐งท  Shows how many days left for the delivery of the job</h3>

- Starting with the Creation Data, it changes based on the **How much hours are you going to dedicate for the job** and **Estimated hours for doing this job** in the Job Creation / Update.
  
<details>
<summary> <b> Demonstration Image </b> <i>(Click here to Expand it!)</i> </summary>
 <br>
 <img alt="JobsCalc 7 Feature" title="JobsCalc" src="/public/githubMedia/7FeatureJobsCalc.png" width="800px" />
</details
<br>
 
 ---
  
<h2 id="Technologies" align="center">๐ป Technologies</h2>

In this project it was utilized: <i>**HTML, CSS, JavaScript, NodeJS, EJS , Express, SQLite**</i><br><br>
 
- <i>**HTML**</i> - The **Skeleton** of the Page.<br>
- <i>**CSS**</i> - The **Page layout, responsiveness and style**.<br>
- <i>**JavaScript**</i> - The **Functions, Calculations, and the central pillar of the page**.<br>
- <i>**NodeJS**</i> - The **Runtime Environment where the Backend Magic happens**.<br>
- <i>**EJS**</i> - The **Template Engine that runs Javascript in the HTML in a Dynamic way**<br>
- <i>**Express**</i> - The one to set up our **Routes, Connections and host our Local Server**.<br>
- <i>**SQLite**</i> - The **Database where we store our Data**.<br>

  
<h2 align="center"> ๐ฆ Installing and Contributing</h2>
  
To get started, fork the repository and then run the following commands:

1. Install NPM packages
   ```sh
   npm install
   ```
2. Start the Local Server
   ```sh
   npm run start
   ```
If you want, you can delete the current SQL DB and create a new one.
   ```sh
   npm run init-db
   ```
  <br>
  
  Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
  </br></br>
โ๏ธ To contribute, do the following:
1. Fork the Project
2. Create your Feature Branch.
3. Commit your Changes.
4. Push to the Branch.
5. Open a Pull Request
  
  
<h2 id="Learned" align="center">โ What have i learned?</h2>

>This project was amazing for me, it was my first steps using **Node.js, Express, EJS and SQLite**, I learned a lot about **Backend, Data Normalization, Refactoring, Modularization and MVC Pattern**, everything in this project, I feel much more prepared for more complex challenges and projects, and I will continue to practice and learn more every day.<br>
I want to thank the teachers at **Rocketseat** who provided the **Marathon Discover 02 Event** where we built this project together, and who also taught and helped me throughout the process.
  
## ๐ License

Distributed under the **MIT** License.

## ๐ค Contributors


Thanks to the following people who contributed to this project in some way:
 <br><br>
 <b>Nobody yet, see something that you want to improve on this project? Share it with me!.<b/>

<!--<table>
  <tr>
    <td align="center">
      <a href="">
        <!--<img src="" alt=""/><br>
        <sub>
          <b></b>
        </sub>
      </a>
    </td>
  </tr>
</table>-->

  
<h2>Author</h2>

Made with ๐ and dedication by me **Guilherme G Cadilhe** Aka: **Bobnini**. <br>
