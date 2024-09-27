<template>
    <div data-bs-spy="scroll" data-bs-target="#navmenu" data-bs-offset="70">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
          <a href="#" class="navbar-brand text">My Portfolio</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            aria-controls="navmenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a href="#home" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="#education" class="nav-link">Education</a>
              </li>
              <li class="nav-item">
                <a href="#career" class="nav-link">Career</a>
              </li>
              <li class="nav-item">
                <a href="#hobby" class="nav-link">Hobby</a>
              </li>
              <li class="nav-item">
                <a href="#thanks" class="nav-link">Thanks</a>
              </li>
              <li class="nav-item">
                <a href="#map" class="nav-link">Map</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <section class="lazy-section">
        <div id="home" class="container" style="padding-top: 200px; height: 650px">
          <h1>Hi,<br />I am Poorvika</h1>
          <div>
            <p class="typewriter">
              A front-end developer is responsible for creating the user interface and
              experience of a website or web application.
            </p>
          </div>
        </div>
      </section>
  
      <section class="lazy-section">
        <div id="about" class="container" style="padding-top: 80px; height: 650px">
          <h1>About</h1>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th>Name</th>
                <td>Poorvika</td>
              </tr>
              <tr>
                <th>Father's Name</th>
                <td>Ramesh H.K</td>
              </tr>
              <tr>
                <th>Mother's Name</th>
                <td>Chandana H S</td>
              </tr>
              <tr>
                <th>Date of Birth</th>
                <td>28/04/2003</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>Mudigere, Chikkamagalur</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
  
      <section>
        <div id="education" class="container" style="padding-top: 80px; height: 650px">
          <h1>Education</h1>
          <div class="education-details" style="display: flex; flex-direction: column; gap: 20px">
            <div class="education-item" style="display: flex; justify-content: space-between; align-items: start;">
              <div><strong>Degree:</strong> Bachelor of Engineering</div>
              <div><strong>Institution:</strong> Navkis College of Engineering</div>
              <div><strong>Year of Passing:</strong> 2025</div>
            </div>
  
            <div class="education-item" style="display: flex; justify-content: space-between; align-items: start;">
              <div><strong>Secondary Education:</strong> 12th Completion</div>
              <div><strong>College:</strong> Vokkaligara Sangha PU</div>
              <div><strong>Year of Passing:</strong> 2021</div>
            </div>
  
            <div class="education-item" style="display: flex; justify-content: space-between; align-items: start;">
              <div><strong>Primary Education:</strong> 10th Completion</div>
              <div><strong>School:</strong> Vokkaligara Sangha</div>
              <div><strong>Year of Passing:</strong> 2019</div>
            </div>
          </div>
        </div>
      </section>
  
      <section>
        <div id="career" class="container" style="padding-top: 200px; height: 650px">
          <h1>Career</h1>
          <p>
            I am currently working as a Front-End Developer with a focus on building
            responsive and interactive web applications. My career journey began
            after completing my Bachelor of Engineering in Computer Science. I have
            gained experience in HTML, CSS, JavaScript, and frameworks like Vue.js
            and Bootstrap. Over the past few years, I have worked on a variety of
            projects, developing user-friendly interfaces, implementing dynamic
            features, and collaborating with teams to build efficient and scalable
            web solutions.
          </p>
        </div>
      </section>
  
      <section>
        <div id="hobby" class="container" style="padding-top: 200px; height: 650px">
          <h1>Hobby</h1>
          <div class="row" style="margin-top: 20px">
            <div class="col-md-4">
              <h3>Reading</h3>
              <p>
                I enjoy reading a wide range of books, including fiction,
                non-fiction, and technical literature. It helps me relax and expand
                my knowledge.
              </p>
            </div>
  
            <div class="col-md-4">
              <h3>Dancing</h3>
              <p>
                Dancing is one of my favorite hobbies, allowing me to express myself
                through movement and rhythm.
              </p>
            </div>
  
            <div class="col-md-4">
              <h3>Photography</h3>
              <p>
                I love capturing moments through photography, whether it's nature,
                architecture, or candid shots. It’s a way to express creativity and
                document life.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <section>
        <div id="thanks" class="container" style="padding-top: 200px; height: 650px">
          <h1>Thanks</h1>
          <p>
            I would like to express my heartfelt thanks to everyone who has
            supported me throughout my journey. Your encouragement and guidance have
            been invaluable, and I am truly grateful for your presence in my life. A
            special thanks to my family and friends for believing in me and
            motivating me to pursue my dreams.
          </p>
  
          <div class="row text-center">
            <div class="col-md-3">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.nowHE9NLbnIok1b4Qu5apQHaHg&pid=Api&P=0&h=180"
                alt="Thank You"
                style="max-width: 100%; height: auto"
              />
              <p>Co-founder of Microsoft</p>
            </div>
            <div class="col-md-3">
              <img
                src="http://www.thefamouspeople.com/profiles/images/elon-musk-1.jpg"
                alt="Thank You"
                style="max-width: 80%; height: auto"
              />
              <p>Elon Musk is the CEO and lead designer of SpaceX</p>
            </div>
            <div class="col-md-3">
              <img
                src="https://wallpapers.com/images/hd/virat-kohli-in-sunglasses-yc8dfpcjssp3s4se.jpg"
                alt="Thank You"
                style="max-width: 100%; height: auto"
              />
              <p>Cricketer</p>
            </div>
            <div class="col-md-3">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.kY5OGGK5C5KYeAqG3oW8AAHaHa&pid=Api&P=0&h=180"
                alt="Thank You"
                style="max-width: 100%; height: auto"
              />
              <p>Sundar Pichai is the CEO of Google</p>
            </div>
          </div>
        </div>
      </section>
  
      <section>
        <div id="map" class="container" style="padding-top: 200px; height: 650px">
          <h1>Map</h1>
          <div style="height: 400px; width: 100%">
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116600.37161802403!2d75.75196866291814!3d13.21303416961183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad0467bbf4cfeb%3A0x80b3c75de3cb192b!2sMudigere%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1695808940513!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyPortfolio',
  };
  </script>
  
  <style scoped>
  .lazy-section {
    padding-top: 80px;
    height: 650px;
  }
  .text{
    color: red;
  }
  </style>
  