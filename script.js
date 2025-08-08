Okay, I'll add the "List Of Placed Student" information to your website. This will create a new section that showcases the successful placements, making your site more authentic and trustworthy.

I'll create a new section with a table to display the student details, including their name, company, salary, and course. I'll also add this new section to the navigation bar.

-----

### **`index.html`**

First, I'll add the new section for the placed students and update the navigation menu.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shri Balaji Infotech - IT Training Specialists</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="logo-container">
                <img src="images/logo.png" alt="Shri Balaji Infotech Logo" class="logo">
                <div class="logo-text">
                    <h1>Shri Balaji Infotech</h1>
                </div>
            </div>
            <nav>
                <a href="#home" class="active"><i class="fas fa-home"></i> Home</a>
                <a href="#about"><i class="fas fa-info-circle"></i> About</a>
                <a href="#courses"><i class="fas fa-laptop-code"></i> Courses</a>
                <a href="#placements"><i class="fas fa-user-graduate"></i> Placements</a>
                <a href="#contact"><i class="fas fa-envelope"></i> Contact</a>
            </nav>
            <div class="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="hero-overlay">
            <div class="hero-content">
                <h2>IT Training & Specialization</h2>
                <p>From Web Development to Cybersecurity, we provide hands-on learning to kickstart your career.</p>
                <button class="cta-button" id="enroll-now">Enroll Now</button>
            </div>
        </div>
        <div class="popup-modal" id="popup">
            <div class="popup-content">
                <span class="close-btn">&times;</span>
                <h3>Limited Time Offer!</h3>
                <p>Get 15% off on all courses when you enroll this week.</p>
                <form class="popup-form">
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Email Address" required>
                    <input type="tel" placeholder="Phone Number" required>
                    <select required>
                        <option value="">Select Course</option>
                        <option>Web Development</option>
                        <option>Python Programming</option>
                        <option>MS Office & Basics</option>
                    </select>
                    <button type="submit">Apply Now</button>
                </form>
            </div>
        </div>
    </section>

    <section id="about" class="section">
        <div class="container">
            <h2>About Us</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Shri Balaji Infotech is committed to providing high-quality IT training programs designed to equip students with skills in demand in today's digital world.</p>
                    <ul class="features-list">
                        <li><i class="fas fa-check-circle"></i> Industry-experienced trainers</li>
                        <li><i class="fas fa-check-circle"></i> Hands-on practical sessions</li>
                        <li><i class="fas fa-check-circle"></i> Placement assistance</li>
                        <li><i class="fas fa-check-circle"></i> Affordable course fees</li>
                    </ul>
                </div>
                <div class="about-image">
                    <img src="images/about.jpg" alt="Our Training Center">
                </div>
            </div>
        </div>
    </section>

    <section id="courses" class="section">
        <div class="container">
            <h2>Our Specializations</h2>
            <div class="course-list">
                <div class="course-card">
                    <div class="course-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <div class="course-card-content">
                      <h3>Web Development</h3>
                      <p>Full stack development with MERN stack</p>
                      <div class="course-details">
                          <p><i class="fas fa-clock"></i> 3 Months</p>
                          <p><i class="fas fa-rupee-sign"></i> 10,000</p>
                      </div>
                      <button class="course-btn">View Details</button>
                    </div>
                </div>
                <div class="course-card">
                    <div class="course-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <div class="course-card-content">
                      <h3>Python Programming</h3>
                      <p>Data Science and Machine Learning</p>
                      <div class="course-details">
                          <p><i class="fas fa-clock"></i> 2 Months</p>
                          <p><i class="fas fa-rupee-sign"></i> 8,000</p>
                      </div>
                      <button class="course-btn">View Details</button>
                    </div>
                </div>
                <div class="course-card">
                    <div class="course-icon">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div class="course-card-content">
                      <h3>MS Office & Basics</h3>
                      <p>Beginner-friendly computer course</p>
                      <div class="course-details">
                          <p><i class="fas fa-clock"></i> 1 Month</p>
                          <p><i class="fas fa-rupee-sign"></i> 5,000</p>
                      </div>
                      <button class="course-btn">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="placements" class="section">
        <div class="container">
            <h2>Our Placed Students</h2>
            <div class="placement-table-container">
                <table class="placement-table">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Student Details</th>
                            <th>Company Details</th>
                            <th>Designation</th>
                            <th>Photograph</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <strong>S.No.</strong>: SBIT2023/4356<br>
                                <strong>Name</strong>: Priyanshi Singh<br>
                                <strong>College</strong>: BBDITM Lucknow
                            </td>
                            <td>
                                <strong>Company</strong>: Shiksha Forum, Noida (U.P)<br>
                                <strong>Salary</strong>: 4.5 Lac per annum<br>
                                <strong>Placement Date</strong>: 10-Nov-2023
                            </td>
                            <td>Technical Support</td>
                            <td>
                                <img src="images/priyanshi.jpg" alt="Priyanshi Singh">
                            </td>
                            <td>ADCA with Tally</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <strong>S.No.</strong>: SBIT2023/6322<br>
                                <strong>Name</strong>: Surbhi Singh<br>
                                <strong>College</strong>: SRCEM Lucknow
                            </td>
                            <td>
                                <strong>Company</strong>: Sony Ericson Pvt. Ltd.<br>
                                <strong>Salary</strong>: 6.5 Lac per annum<br>
                                <strong>Placement Date</strong>: 12-Mar-2024
                            </td>
                            <td>Project Manager</td>
                            <td>
                                <img src="images/surbhi.jpg" alt="Surbhi Singh">
                            </td>
                            <td>JAVA Full Stack Development</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <strong>S.No.</strong>: SBIT2017/1006<br>
                                <strong>Name</strong>: Sachin Yadav<br>
                                <strong>College</strong>: 
                            </td>
                            <td>
                                <strong>Company</strong>: IBM<br>
                                <strong>Salary</strong>: Current salary package is 5 Lac/Annam..
                                <strong>Placement Date</strong>: 01-Jan-1970
                            </td>
                            <td>Programmer</td>
                            <td>
                                <img src="images/sachin.jpg" alt="Sachin Yadav">
                            </td>
                            <td>Current salary package is 5 Lac/Annam..</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <section id="contact" class="section">
        <div class="container">
            <h2>Contact Us</h2>
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Get in Touch</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Shri Balaji Infotech, Your City, India</p>
                    <p><i class="fas fa-phone"></i> +91-9876543210</p>
                    <p><i class="fas fa-envelope"></i> info@shribalajiinfotech.com</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="contact-form">
                    <form>
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="tel" placeholder="Phone Number">
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="images/logo-white.png" alt="Shri Balaji Infotech Logo">
                    <p>Your gateway to IT excellence</p>
                </div>
                <div class="quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="newsletter">
                    <h4>Subscribe</h4>
                    <form>
                        <input type="email" placeholder="Your Email">
                        <button type="submit"><i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2025 Shri Balaji Infotech. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

-----

### **`style.css`**

Next, I'll add the necessary CSS to style the new placements section. The styles will make the table responsive and easy to read.

```css
/*
 * New design for Shri Balaji Infotech
 * A modern, clean, and professional UI
 */

/* ==================================== */
/* 1. Variables & Base         */
/* ==================================== */

:root {
  --primary-color: #003366; /* Deep blue from logo */
  --secondary-color: #0056b3; /* Lighter blue */
  --accent-color: #e67e22; /* Orange accent */
  --light-bg: #f4f7f6; /* Light gray background */
  --dark-text: #2c3e50; /* Dark gray text */
  --light-text: #ecf0f1; /* Light gray text */
  --card-bg: #ffffff; /* White card background */
  --box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  --border-radius: 10px;
  --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: var(--dark-text);
  background: var(--light-bg);
  overflow-x: hidden;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

h1, h2, h3 {
  font-weight: 700;
  line-height: 1.2;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.section {
  padding: 100px 0;
}

.section h2 {
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 60px;
  position: relative;
  color: var(--primary-color);
}

.section h2::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 4px;
  background: var(--accent-color);
  border-radius: 2px;
}

/* ==================================== */
/* 2. Header              */
/* ==================================== */

header {
  background: var(--primary-color);
  color: var(--light-text);
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px; 
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  height: 40px; 
  width: auto;
}

.logo-text h1 {
  font-size: 1.6rem;
  margin-bottom: 0;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
}

nav {
  display: flex;
  gap: 25px;
}

nav a {
  font-size: 0.95rem;
  font-weight: 500;
  padding: 5px 0;
  transition: var(--transition);
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
}

nav a i {
  font-size: 1rem;
}

nav a.active, nav a:hover {
  color: var(--accent-color);
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: var(--transition);
}

nav a:hover::after, nav a.active::after {
  width: 100%;
}

.mobile-menu {
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
}

/* ==================================== */
/* 3. Hero Section           */
/* ==================================== */

.hero {
  height: 100vh;
  min-height: 700px;
  background: linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url('images/banner.jpg') no-repeat center center/cover;
  color: var(--light-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  position: relative;
}

.hero-content {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.hero h2 {
  font-size: 4rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 40px;
  max-width: 700px;
  margin: 0 auto 40px;
}

.cta-button {
  display: inline-block;
  padding: 18px 40px;
  background: var(--accent-color);
  color: var(--card-bg);
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 8px 15px rgba(230, 126, 34, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-button:hover {
  background: #d36a11;
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(230, 126, 34, 0.4);
}

/* ==================================== */
/* 4. Popup Modal             */
/* ==================================== */

.popup-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.popup-modal.active {
  opacity: 1;
  visibility: visible;
}

.popup-content {
  background: var(--card-bg);
  padding: 40px;
  border-radius: var(--border-radius);
  max-width: 500px;
  width: 90%;
  position: relative;
  box-shadow: var(--box-shadow);
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.popup-modal.active .popup-content {
  transform: scale(1);
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  color: var(--dark-text);
  opacity: 0.6;
  transition: var(--transition);
}

.close-btn:hover {
  color: var(--accent-color);
  opacity: 1;
  transform: rotate(90deg);
}

.popup-content h3 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: var(--primary-color);
  text-align: center;
}

.popup-content p {
  margin-bottom: 25px;
  font-size: 1.1rem;
  text-align: center;
}

.popup-form input, .popup-form select {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
}

.popup-form input:focus, .popup-form select:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 5px rgba(230, 126, 34, 0.3);
}

.popup-form button {
  width: 100%;
  padding: 15px;
  background: var(--accent-color);
  color: var(--card-bg);
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.popup-form button:hover {
  background: #d36a11;
  transform: translateY(-2px);
}

/* ==================================== */
/* 5. About Section           */
/* ==================================== */

.about-content {
  display: flex;
  gap: 30px;
  align-items: center;
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: 500;
}

.features-list i {
  color: var(--accent-color);
  font-size: 1.2rem;
}

.about-image {
  flex: 1;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
}

.about-image img {
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
}

.about-image:hover img {
  transform: scale(1.05);
}

/* ==================================== */
/* 6. Courses Section         */
/* ==================================== */

.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.course-card {
  background: var(--card-bg);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.course-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.course-icon {
  background: var(--primary-color);
  color: var(--light-text);
  font-size: 3rem;
  padding: 30px;
  text-align: center;
}

.course-card-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.course-card h3 {
  font-size: 1.6rem;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.course-card p {
  font-size: 1rem;
  color: #7f8c8d;
  flex-grow: 1;
  margin-bottom: 20px;
}

.course-details {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #ecf0f1;
  margin-bottom: 20px;
}

.course-details p {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: var(--dark-text);
  font-size: 0.95rem;
}

.course-btn {
  display: block;
  width: 100%;
  padding: 12px;
  background: var(--accent-color);
  color: var(--card-bg);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  text-align: center;
}

.course-btn:hover {
  background: #d36a11;
  transform: translateY(-2px);
}

/* ==================================== */
/* 7. Placements Section      */
/* ==================================== */

.placement-table-container {
    overflow-x: auto;
    border: 1px solid #e0e0e0;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}

.placement-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 700px;
}

.placement-table thead tr {
    background: var(--primary-color);
    color: var(--light-text);
    text-align: left;
}

.placement-table th, .placement-table td {
    padding: 15px;
    vertical-align: top;
    border: 1px solid #e0e0e0;
}

.placement-table tbody tr:nth-child(even) {
    background: #f8f8f8;
}

.placement-table img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
}

.placement-table td strong {
    color: var(--primary-color);
}

/* ==================================== */
/* 8. Contact Section         */
/* ==================================== */

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  margin-top: 60px;
}

.contact-info h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.contact-info p {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
}

.contact-info i {
  color: var(--accent-color);
  font-size: 1.4rem;
  width: 30px;
  text-align: center;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: var(--primary-color);
  color: var(--light-text);
  border-radius: 50%;
  transition: var(--transition);
  font-size: 1.4rem;
}

.social-links a:hover {
  background: var(--accent-color);
  transform: translateY(-5px) scale(1.1);
}

.contact-form input, .contact-form select, .contact-form textarea {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
}

.contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 5px rgba(230, 126, 34, 0.3);
}

.contact-form textarea {
  height: 150px;
  resize: vertical;
}

.contact-form button {
  width: 100%;
  padding: 15px;
  background: var(--accent-color);
  color: var(--card-bg);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
}

.contact-form button:hover {
  background: #d36a11;
  transform: translateY(-3px);
}

/* ==================================== */
/* 9. Footer                */
/* ==================================== */

footer {
  background: var(--primary-color);
  color: var(--light-text);
  padding: 60px 0 20px;
  text-align: center;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
  text-align: left;
}

.footer-logo {
  text-align: center;
}

.footer-logo img {
  height: 50px;
  margin: 0 auto 15px;
}

.footer-logo p {
  opacity: 0.8;
  font-size: 1rem;
}

.quick-links h4, .newsletter h4 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  position: relative;
}

.quick-links h4::after, .newsletter h4::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--accent-color);
  border-radius: 2px;
}

.quick-links ul li {
  margin-bottom: 12px;
}

.quick-links ul li a {
  transition: var(--transition);
  opacity: 0.8;
  font-size: 1rem;
}

.quick-links ul li a:hover {
  color: var(--accent-color);
  opacity: 1;
  padding-left: 5px;
}

.newsletter form {
  display: flex;
  margin-top: 20px;
}

.newsletter input {
  flex-grow: 1;
  padding: 12px 15px;
  border: none;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  font-size: 1rem;
}

.newsletter button {
  background: var(--accent-color);
  color: var(--white);
  border: none;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  padding: 0 20px;
  cursor: pointer;
  transition: var(--transition);
}

.newsletter button:hover {
  background: #d36a11;
}

.copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.7;
}

/* ==================================== */
/* 10. Responsiveness          */
/* ==================================== */

@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
    gap: 30px;
  }
  .about-image {
    width: 100%;
  }
  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .logo-text h1 {
    font-size: 1.4rem;
  }
  .logo-text p {
    font-size: 0.8rem;
  }
  nav {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: var(--primary-color);
    flex-direction: column;
    gap: 0;
    padding: 20px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  nav.active {
    display: flex;
  }
  nav a {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  nav a:last-child {
    border-bottom: none;
  }
  .mobile-menu {
    display: block;
  }
  .hero {
    min-height: 600px;
    padding-top: 60px;
  }
  .hero h2 {
    font-size: 3rem;
  }
  .hero p {
    font-size: 1.1rem;
  }
  .section h2 {
    font-size: 2.2rem;
  }
  .course-list {
    grid-template-columns: 1fr;
  }
  .footer-content {
    text-align: center;
  }
  .quick-links h4::after, .newsletter h4::after {
    left: 50%;
    transform: translateX(-50%);
  }
  .about-content {
    flex-direction: column;
  }
  .about-image {
    width: 80%;
    margin: 20px auto;
  }
  .features-list {
    grid-template-columns: 1fr;
  }

  .placement-table-container {
    padding: 0;
    box-shadow: none;
    border: none;
  }

  .placement-table {
    display: block;
    width: 100%;
    border: none;
  }
  
  .placement-table thead {
    display: none;
  }
  
  .placement-table tbody, .placement-table tr, .placement-table td {
    display: block;
    width: 100%;
  }

  .placement-table tr {
    margin-bottom: 20px;
    border: 1px solid #e0e0e0;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }
  
  .placement-table td {
    text-align: right;
    padding-left: 50%;
    position: relative;
    border: none;
    font-size: 1rem;
  }
  
  .placement-table td::before {
    content: attr(data-label);
    position: absolute;
    left: 15px;
    width: calc(50% - 30px);
    padding-right: 10px;
    white-space: nowrap;
    text-align: left;
    font-weight: 600;
    color: var(--primary-color);
  }

  .placement-table img {
    display: none;
  }
}

@media (max-width: 500px) {
  .hero h2 {
    font-size: 2.5rem;
  }
  .cta-button {
    padding: 15px 30px;
    font-size: 1rem;
  }
  .section h2 {
    font-size: 1.8rem;
  }
  .contact-info p {
    font-size: 1rem;
  }
}
```

-----

### **`script.js`**

The JavaScript file needs a small update to handle the new "Placements" link in the navigation.

```javascript
// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Popup Modal
const enrollBtn = document.getElementById('enroll-now');
const popupModal = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

enrollBtn.addEventListener('click', () => {
    popupModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    popupModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === popupModal) {
        popupModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Offset for the fixed header
        const headerHeight = document.querySelector('header').offsetHeight;
        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const scrollPosition = window.scrollY + headerHeight; 
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Form submission handling
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your submission! We will contact you soon.');
        form.reset();
        
        // Close popup if it's the enrollment form
        if (form.classList.contains('popup-form')) {
            popupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
```
