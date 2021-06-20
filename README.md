
<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Student Management System</h3>

  <p align="center">
  A simple website deployment with Docker and Kubernetes
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
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
    <li><a href="#usage">Usage</a></li>
    <ul>
        <li><a href="#how-to-run">How to Run</a></li>
      </ul>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About the Project

Cloud Computing course project built to demonstrate a scalable kubernetes deployment. The website is a simple student management system.

Students and Courses CRUD operations have been implemented. The frontend is built in React, the backend is built in NodeJS with a MySQL database for storage.


### Built With

* [React.js](https://reactjs.org/)
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

## Prerequisites:

* [Docker CLI](https://www.docker.com/)
* [docker-compose](https://docs.docker.com/compose/)
* [kubectl](https://kubernetes.io/docs/tasks/tools/)
* [minikube](https://minikube.sigs.k8s.io/docs/)

### Installation

Clone the repo
   ```sh
   git clone https://github.com/eishatheahmad/student-management-system.git
   ```

<!-- USAGE EXAMPLES -->
## Usage

### How to run 
There are two ways to run our application. Please ensure that you have the prerequisites installed and ready to use. Then copy the repository from the link given above.
#### Cloud Deployment on Amazon EC2 instance
* `SSH` into your cloud instance.
* Install `minikub` and `kubectl` if you haven't already.
* Clone this repository `git clone https://github.com/eishatheahmad/student-management-system.git`.
* Go to `student-management-system/deployment`. 
* Run `deployment.sh` in bash terminal. 
* Go to your AWS portal and get the EC2 public IP/DNS.
* Access application on `port 3000` using the DNS or IP. For example, `<IP>:3000` from anywhere in the world.
    
#### Local Deployment
* Install `docker cli`.
* Install `docker-compose`.
*  Clone this repository `git clone https://github.com/eishatheahmad/student-management-system.git`.
*  Execute `docker-compose up` in terminal.
*  Access application on `http://localhost:80`.



<!-- LICENSE -->
## License

Distributed under the MIT License.




