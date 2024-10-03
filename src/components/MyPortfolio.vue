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

            <li class="nav-item">
              <router-link to="/shopping"  class="nav-link">Shopping</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="lazy-section">
      <div
        id="home"
        class="container"
        style="padding-top: 200px; height: 650px"
      >
        <h1>Hi,<br />I am Poorvika</h1>
        <div>
          <p class="typewriter">
            A front-end developer is responsible for creating the user interface
            and experience of a website or web application.
          </p>
        </div>
      </div>
    </section>

    <section class="lazy-section">
      <div
        id="about"
        class="container"
        style="padding-top: 80px; height: 650px"
      >
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
      <div
        id="education"
        class="container"
        style="padding-top: 80px; height: 650px"
      >
        <h1>Education</h1>
        <div
          class="education-details"
          style="display: flex; flex-direction: column; gap: 20px"
        >
          <div
            class="education-item"
            style="
              display: flex;
              justify-content: space-between;
              align-items: start;
            "
          >
            <div><strong>Degree:</strong> Bachelor of Engineering</div>
            <div>
              <strong>Institution:</strong> Navkis College of Engineering
            </div>
            <div><strong>Year of Passing:</strong> 2025</div>
          </div>

          <div
            class="education-item"
            style="
              display: flex;
              justify-content: space-between;
              align-items: start;
            "
          >
            <div><strong>Secondary Education:</strong> 12th Completion</div>
            <div><strong>College:</strong> Vokkaligara Sangha PU</div>
            <div><strong>Year of Passing:</strong> 2021</div>
          </div>

          <div
            class="education-item"
            style="
              display: flex;
              justify-content: space-between;
              align-items: start;
            "
          >
            <div><strong>Primary Education:</strong> 10th Completion</div>
            <div><strong>School:</strong> Vokkaligara Sangha</div>
            <div><strong>Year of Passing:</strong> 2019</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        id="career"
        class="container"
        style="padding-top: 200px; height: 650px"
      >
        <h1>Career</h1>
        <p>
          I am currently pursuing my Bachelor of Engineering (B.E.) in Computer
          Science and Engineering, and I am in my 7th semester. Alongside my
          studies, I am gaining practical experience through my internship at
          Ontrack Company, where I am focused on front-end development. This
          opportunity is allowing me to apply theoretical knowledge from my
          coursework to real-world projects, honing my skills in technologies
          like HTML, CSS, JavaScript, and Vue.js. My academic background
          combined with my internship experience is preparing me for a
          successful career in web development and user interface design.
        </p>
      </div>
    </section>

    <section>
      <div
        id="hobby"
        class="container"
        style="padding-top: 200px; height: 650px"
      >
        <h1>Hobby</h1>
        <div class="row" style="margin-top: 20px">
          <div class="col-md-4">
            <h3>Dancing</h3>
            <p>
              Dancing is one of my favorite hobbies, allowing me to express
              myself through movement and rhythm. It helps me relieve stress,
              boosts my confidence, and connects me with others who share the
              same passion.
            </p>
          </div>

          <div class="col-md-4">
            <h3>Watching movies and series</h3>
            <p>
              Watching movies and series is one of my favorite hobbies. It
              allows me to immerse myself in diverse stories and cultures,
              providing a great way to relax and unwind.
            </p>
          </div>

          <div class="col-md-4">
            <h3>Modeling and fashion</h3>
            <p>
              Modeling and exploring fashion trends is one of my favorite
              hobbies. I enjoy experimenting with different styles, makeup
              looks, and photography.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        id="thanks"
        class="container"
        style="padding-top: 200px; height: 650px"
      >
        <h1>Thanks</h1>
        <p>
          I would like to extend my heartfelt thanks to my technical manager,
          for providing invaluable guidance and support throughout my internship
          at Ontrack Company. Your mentorship has greatly enhanced my
          understanding of front-end development and web technologies. I am also
          incredibly grateful to my fellow interns, for their constant
          encouragement, collaboration, and for sharing their expertise with me.
          Together, you have made this experience both enriching and enjoyable,
          helping me grow personally and professionally.A special thanks to my
          family and friends for believing in me and motivating me to pursue my
          dreams.
        </p>

        <div class="row text-center">
          <div class="col-md-3">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGyb2v3K0sLTw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705995220752?e=1732752000&v=beta&t=sPTMRxMFiNsdVqrm94iW-Cl4KB4SxptMh5D6ioF-C3Q"
              alt="Thank You"
              style="max-width: 100%; height: auto"
            />
            <p>Technical manager</p>
          </div>
          <div class="col-md-3">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGTA6zhKq8uSA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727696827510?e=1733356800&v=beta&t=gYFAq8dWGWIG1myeNGdGpcuvn91MkGCm7pMeJufaljA"
              alt="Thank You"
              style="max-width: 100%; height: auto"
            />
            <p>Guide</p>
          </div>
          <div class="col-md-3">
            <img
              src="https://media.licdn.com/dms/image/v2/C5603AQG89Rwlb6MiCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1658983866670?e=1732752000&v=beta&t=BWtMLZw-wWGa7nN7bNvHshQq-896nmNJy-y-JO_jqg0"
              alt="Thank You"
              style="max-width: 100%; height: auto"
            />
            <p>Frontend Developer</p>
          </div>
          <div class="col-md-3">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQFX_8WluBwkGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712950005824?e=1732752000&v=beta&t=pfc2PlsJMAniV_bV-Gml6aNKeHcW9Fmnnyf0a9B_QMA"
              alt="Thank You"
              style="max-width: 100%; height: auto"
            />
            <p>Backend developer</p>
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
  name: "MyPortfolio",
};
</script>

<style scoped>
.lazy-section {
  padding-top: 80px;
  height: 650px;
}
.text {
  color: red;
}
</style>
