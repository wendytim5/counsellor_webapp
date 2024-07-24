<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<div align="center">
  <h3 align="center">Care Nest</h3>
  <p align="center">
    An intelligent Web Application for Mental Health Assessment
    <br />
    <br />
    <a href="https://github.com/wendytim5/counsellor_webapp.git">Explore Docs</a>
    .
<!--     <a href="https://www.youtube.com/channel/UCRWhX1g2ADZKLWMflBtVNxQ">View Demo</a>
    · -->
    <a href="https://github.com/wendytim5/counsellor_webapp.git/issues">Report Bug</a>
    ·
    <a href="https://github.com/wendytim5/counsellor_webapp.git/issues">Request Feature</a>
  </p>  
</div>


<!-- TABLE OF CONTENT -->
<details>
  <summary>Table of Content</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ul>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

### Overview

[![Product Name Screen Shot][product-screenshot]](https://chinwe-ibegbu-portfolio.onrender.com/)

#### Idea
A web application is used to store student information and help to assess students' mental health.



Discoveries and Observations:
* The counselor in Ashesi does not have an app where the counselor can store student information and history.
* Often, the counselor would have to write down student information in the notebook and sometimes misplace the notes.
* Most allow the counselor to register and login
* Most allow the addition of student information

#### UI Design
Figma file:  https://www.figma.com/design/rl3RKTUTxP0GNYaIRwGu33/Untitled?node-id=0-1&m=dev

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With


* [![JavaScript][JavaScript]][JavaScript-url]
* [![Node][Node]][Node-url]
* [![React][React.js]][React-url]
* [![Express][Express.js]][Express-url]
* [![Mongo DB][Mongo DB]][Mongo DB]
* [![OPEN AI][OPEN AI]][OPEN AI]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps. The code was built using GitHub codespace as the virtual environment. Make sure to make the ports public.

### Prerequisites

* Node.js
* Node Package Manager (NPM)

### Installation

1. Clone the repo
   ```sh
   https://github.com/wendytim5/counsellor_webapp.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start local environment
   ```sh
   npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

Alternatively, you can open an [Issue](https://github.com/wendytim5/counsellor_webapp.git).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- FEATURES -->
## Features

#### Landing Page
- [x] Sign in
- [x] register

#### Homepage
- [x] Create a student profile
  - [x] First Name
  - [x] Last Name
  - [x] Email
  - [x] Country 
- [x] Sidebar
  - [x] View Students
  - [x] Dashboard


#### View Student
- [x] List of students:
  - [x] StudentID
  - [X] First Name
  - [x] Last Name
  - [x] Email
  - [x] Country
     
### Student Profile (Click on student ID)    
- [x] Notes about student
  - [x] Notes List (contains notes placed by the counselor)
  - [x] Note input (Connecting to ChatGPT 3.5 to assess the notes placed by the counselor)
  
      
\* - optional fields

See the [open issues](https://github.com/wendytim5/counsellor_webapp.git/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Wendy Gamvah - wendy.gamvah@gmail.com

Project Link: [https://github.com/wendytim5/counsellor_webapp.git/](https://github.com/wendytim5/counsellor_webapp.git/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [README.md template by Drew Othneil](https://github.com/othneildrew/Best-README-Template)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-url]: https://github.com/wendytim5/counsellor_webapp.git/issues
[linkedin-url]: https://www.linkedin.com/in/wendy-pasiah/
[product-screenshot]: images/screenshot.png


[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript
[Node]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
