# Welcome To My Personal Website ❤

[Click Here](https://mayyasobeidat.github.io/mayyas/mayyas)


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!--===== UNICONS ======-->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    <!--===== BOXICONS =====-->
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css">

    <!--===== SWIPER CSS ======-->
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css">

     <!--===== MAIN CSS ======-->
     <link rel="stylesheet" href="assets/css/style.css">

     <link href="assets/img/logo.png" rel="icon">

     <!-- تضمين ملفات مكتبة SweetAlert -->
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.18/dist/sweetalert2.min.css">
     <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.18/dist/sweetalert2.min.js"></script>

    <title>Mayyas Obeidat</title>

    <meta name="description" content="Web developer, with extensive knowledge, working in web technologies and Ui / Ux design, delivering quality work.In addition to coding, I have design, picture processing, and photography skills.">

</head>
<body>
 
    <div class="preloader">
        <div class="spinner"></div>
      </div>
      <div class="MyContent">
        <!-- Your portfolio MyContent goes here -->
    <!--========== SIDEBAR ==========-->
    <div class="nav_toggle" id="nav-toggle">
        <i class="uil uil-bars"></i>
    </div>
    <aside class="sidebar" id="sidebar">
        <nav class="nav">
            <div class="nav_logo">
                <a href="Mayyas.html" class="nav_logo-text"><i class="uil uil-desktop"></i></a>
            </div>

            <div class="nav_menu">
                <div class="menu">
                    <ul class="nav_list">
                        <li class="nav_item">
                            <a href="#home" class="nav_link active-link">Home</a>
                        </li>
                        <li class="nav_item">
                            <a href="#about" class="nav_link">About</a>
                        </li>
                        <li class="nav_item">
                            <a href="#skills" class="nav_link">Skills</a>
                        </li>
                        <li class="nav_item">
                            <a href="#work" class="nav_link">Work</a>
                        </li>
                        <li class="nav_item">
                            <a href="#services" class="nav_link">Services</a>
                        </li>
                        <li class="nav_item">
                            <a href="#contact" class="nav_link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="btn_share">
                <i class="uil uil-share-alt social_share" onclick="copyTextToClipboard()"></i>
                <div id="textToCopy" style="display: none;">/Mayyas/Mayyas.html</div>
            </div>
            
            <div class="nav_close" id="nav-close">
                <i class="uil uil-times"></i>
            </div>
        </nav>
    </aside>
    
    <!--========== MAIN ==========-->
    <main class="main">
        <!--===== Home =====-->
        <section class="home" id="home">
            <div class="home_container container grid">
                <div class="home_social">
                    <span class="home_social-follow">Follow Me</span>
                    <div class="home_social-links">
                        <a href="https://www.facebook.com/mayyasobeidat" target="_blank" class="home_social-link">
                            <i class="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/mayyasobeidatt" target="_blank" class="home_social-link">
                            <i class="uil uil-instagram" ></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mayyasobeidat/" target="_blank" class="home_social-link">
                            <i class="uil uil-linkedin"></i>
                        </a>
                        <a href="https://www.behance.net/mayyasobeidat" target="_blank" class="home_social-link">
                            <i class="uil uil-behance-alt"></i>
                        </a>
                    </div>
                </div>

                <img src="assets/img/home-img.png" alt="" class="home_img">
                
                <div class="home_data">
                    <h1 class="home_title">Hi, I'am Mayyas</h1>
                    <h3 class="home_subtitle">Full Stack Web Developer</h3>
                    <p class="home_description">Experience in web design and development, producing quality work.
                       <br> <a href="#about" style="color:#ffc107;">More About Me</a>
                    </p>
                    
                 <a class="button" href="https://drive.google.com/file/d/1OLtaCiIG9AorT1QZ5jD2ZL36oIFINWIc/view?usp=sharing" target="_blank"><i class="uil uil-document-info button_icon"></i> Download CV </a>

                </div>

                <div class="my_info">
                    <div class="info_item">
                        <i class="uil uil-facebook-messenger info_icon"></i>
                        <div>
                            <h3 class="info_title">Messenger</h3>
                            <span class="info_subtitle"><a href="https://www.messenger.com/t/100002135537536" class="contactme" target="_blank">mayyasobeidat</a>
                            </span>
                        </div>
                    </div>

                    <div class="info_item">
                        <i class="uil uil-whatsapp info_icon"></i>
                        <div>
                            <h3 class="info_title">Whatsapp</h3>
                            <span class="info_subtitle"><a href="https://wa.me/+962797383346" class="contactme" target="_blank">+962797383346</a></span>
                        </div>
                    </div>

                    <div class="info_item">
                        <i class="uil uil-envelope-edit info_icon"></i>
                        <div>
                            <h3 class="info_title">Email</h3>
                            <span class="info_subtitle"><a href="mailto:mayyasobeidat@gmail.com" class="contactme" target="_blank">mayyasobeidat@gmail.com</a></span>
                        </div>
                    </div>


                </div>


            </div>
        </section>
        <!--===== About =====-->
        <section class="about section" id="about">
            <h2 data-heading="My Intro" class="section_title">About Me</h2>

            <div class="about_container container grid">
                <img src="assets/img/about-img.jpg" alt="" class="about_img">
                <div class="about_data">
                <h3 class="about_heading">Hi, I'm Mayyas Obeidat, Based in Canada</h3>
                <p class="about_description">Web developer, with extensive knowledge, working in web technologies and Ui / Ux design,
                     delivering quality work.In addition to coding, I have design, picture processing, and photography skills.</p>
                <div class="about_info grid">
                <div class="about_box">
                <i class="uil uil-award about_icon"></i>
                <h3 class="about_title">Experience</h3>
                <span class="about_subtitle">1 + Years</span>
                </div>

                <div class="about_box">
                    <i class="uil uil-suitcase-alt about_icon"></i>
                    <h3 class="about_title">Completed</h3>
                    <span class="about_subtitle">11 + Projects</span>
                    </div>

                    <div class="about_box">
                        <i class="uil uil-headphones-alt about_icon"></i>
                        <h3 class="about_title">Support</h3>
                        <span class="about_subtitle">Online 24/7</span>
                        </div>
                </div>

                <a href="#contact" class="button"> <i class="uil uil-navigator button_icon"></i>
                Contact Me
                </a>

                </div>
            </div>
        </section>
        
        <!--===== Qualification =====-->
        <section class="qualification section">
            <h2 data-heading="My Journey" class="section_title">Qualification</h2>

            <div class="qualification_container container grid">

                <div class="education">
                    <h3 class="qualification_title">
                        <i class="uil uil-graduation-cap"></i> Education
                    </h3>

                    
                   <div class="timeline">
                    <div class="timeline_item">
                    <div class="circle_dot"></div>
                    <h3 class="timeline_title">Coding Academy by Orange</h3>
                    <p class="timeline_text">7 Months Full-stack Bootcamp</p>
                    <span class="timeline_date"><i class="uil uil-calendar-alt"></i>
                    Oct 2022 – May 2023
                    </span>
                </div>
               </div>

                    <div class="timeline">
                        <div class="timeline_item">
                        <div class="circle_dot"></div>
                        <h3 class="timeline_title">Al-Balqa' Applied University</h3>
                        <p class="timeline_text">Bachelor's degree in Mechanical Engineering</p>
                        <span class="timeline_date"><i class="uil uil-calendar-alt"></i>
                        Sep 2016 - Feb 2022
                        </span>
                    </div>
                   </div>



                </div>

                <div class="experience">
                    <h3 class="qualification_title">
                        <i class="uil uil-suitcase"></i> Experience
                    </h3>

                    <div class="timeline">
                        <div class="timeline_item">
                        <div class="circle_dot"></div>
                        <h3 class="timeline_title">Coding Academy by Orange</h3>
                        <p class="timeline_text">Full Stack Web Development Trainee</p>
                        <span class="timeline_date"><i class="uil uil-calendar-alt"></i>
                            Oct 2022 – May 2023
                        </span>
                    </div>
                   </div>

                   <div class="timeline">
                    <div class="timeline_item">
                    <div class="circle_dot"></div>
                    <h3 class="timeline_title">Freelance Photographer and Designer</h3>
                    <p class="timeline_text"></p>
                    <span class="timeline_date"><i class="uil uil-calendar-alt"></i>
                        May 2017 – Oct 2022
                    </span>
                </div>
               </div>
               


                </div>

            </div>

        </section>

        <!--===== Skills =====-->
        <section class="skills section" id="skills">
            <h2 data-heading="My Abilities" class="section_title">My Experience</h2>

            <div class="skills_container container grid">
                <div class="skills_tabs">
                    <div class="skills_header skills_active" data-target="#frontend">
                        <i class="uil uil-brackets-curly skills_icon"></i>

                        <div>
                            <h1 class="skills_title">Frontend Developer</h1>
                            <span class="skills_subtitle">More than 1 year</span>
                        </div>
                        <i class="uil uil-angle-down skills_arrow"></i>

                    </div>

                    <div class="skills_header" data-target="#design">
                        <i class="uil uil-swatchbook skills_icon"></i>

                        <div>
                            <h1 class="skills_title">Web Design</h1>
                            <span class="skills_subtitle">More than 2 years</span>
                        </div>
                        <i class="uil uil-angle-down skills_arrow"></i>

                    </div>

                    <div class="skills_header" data-target="#backend">
                        <i class="uil uil-server-network skills_icon"></i>

                        <div>
                            <h1 class="skills_title">Backend Developer</h1>
                            <span class="skills_subtitle">More than 1 year</span>
                        </div>
                        <i class="uil uil-angle-down skills_arrow"></i>

                    </div>

                </div>

                <div class="skills_content">
                    <div class="skills_group skills_active"  data-content id="frontend">
                        <div class="skills_list grid">


                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">HTML</h3>
                                    <span class="skills_number">90%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 90%;"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">CSS</h3>
                                    <span class="skills_number">85%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 85%;"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">JS</h3>
                                    <span class="skills_number">70%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 70%;"></span>
                                </div>
                            </div>


                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Bootstrap</h3>
                                    <span class="skills_number">75%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 75%;"></span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="skills_group"  data-content id="design">
                        <div class="skills_list grid">
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Miro</h3>
                                    <span class="skills_number">100%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 100%;"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Photoshop</h3>
                                    <span class="skills_number">80%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 80%;"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Illustrator </h3>
                                    <span class="skills_number">70%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 70%;"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Figma</h3>
                                    <span class="skills_number">50%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 50%;"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="skills_group"  data-content id="backend">
                        <div class="skills_list grid">
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">ASP.Net webform C#</h3>
                                    <span class="skills_number">80%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 80%;"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">ASP.Net MVC C#</h3>
                                    <span class="skills_number">85%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 85%;"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">SQL Server using Entity Framework</h3>
                                    <span class="skills_number">90%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 90%;"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">SQL Server using ADO.Net</h3>
                                    <span class="skills_number">70%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage" style="width: 70%;"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
        <!--===== Work =====-->
        <section class="work section" id="work">
            <h2 data-heading="My Portfolio" class="section_title">Recent Work</h2>

            <div class="work_filters">
                <span class="work_item active-work" data-filter="all">All</span>
                <span class="work_item" data-filter=".web">Web</span>
                <span class="work_item" data-filter=".app">App</span>
                <span class="work_item" data-filter=".design">Design</span>
            </div>



                <div class="work_container container grid">


                    <div class="work_card mix web">
                        <img src="assets/img/work-1.png" alt="" class="work_img">
                        <h3 class="work_title">Photography services Website</h3>
                        <span class="work_button">Demo
                            <i class="uil uil-arrow-right work_button-icon"></i>
                        </span>
                        <div class="portfolio_item-details">
                            <h3 class="details_title">The Services provide for Web Development and UX/UI</h3>
                            <p class="details_description">Sight is a fully designed platform, with a complete front-end, back-end, and UX/UI integration. It simplifies finding and booking professional photographers, offering various services, user-friendly interface, and search options based on location and photography style. It also serves as a community for photographers to showcase their work and connect with clients..</p>
                                <ul class="details_info">
                                    <li>Created - <span>May 2023</span></li>
                                    <li>Technologies - <span>Miro, Photoshop, html, CSS, Bootstrap, javascript, c#, asp.net mvc, sql server and EntityframeWork.</span></li>
                                    <li>Role - <span>Full stack with UX/UI</span></li>
                                    <li>View - <span><a href="https://github.com/mayyasobeidat/Masterpiece-Sight" target="_blank">www.github.com</a></span></li>
                                </ul>
                        </div>
                    </div>

                    <div class="work_card mix web">
                        <img src="assets/img/work-2.png" alt="" class="work_img">
                        <h3 class="work_title">Portrait Website</h3>
                        <span class="work_button">Demo
                            <i class="uil uil-arrow-right work_button-icon"></i>
                        </span>
                        <div class="portfolio_item-details">
                            <h3 class="details_title">The Services provide for Frontend</h3>
                            <p class="details_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Earum impedit voluptatibus minima.</p>
                                <ul class="details_info">
                                    <li>Created - <span>4 dec 2020</span></li>
                                    <li>Technologies - <span>html css</span></li>
                                    <li>Role - <span>frontend</span></li>
                                    <li>View - <span><a href="#">www.domain.com</a></span></li>
                                </ul>
                        </div>
                    </div>

                    
                    <div class="work_card mix design">
                        <img src="assets/img/work-3.png" alt="" class="work_img">
                        <h3 class="work_title">Business Card With Logo</h3>
                        <span class="work_button">Demo
                            <i class="uil uil-arrow-right work_button-icon"></i>
                        </span>
                        <div class="portfolio_item-details">
                            <h3 class="details_title">The Services provide for design</h3>
                            <p class="details_description">I designed the entire business, designed the logo and business card.</p>
                                <ul class="details_info">
                                    <li>Created - <span>Aug 2022</span></li>
                                    <li>Using - <span>Adobe Illustrator</span></li>
                                    <li>Role - <span>Design</span></li>
                                    <li>View - <span><a href="https://www.behance.net/gallery/173323717/Business-Card-For-Speech-Pathologist" target="_blank">www.behance.com</a></span></li>
                                </ul>
                        </div>
                    </div>

                    <div class="work_card mix design">
                        <img src="assets/img/work-4.png" alt="" class="work_img">
                        <h3 class="work_title">Visual Identity For Barber</h3>
                        <span class="work_button">Demo
                            <i class="uil uil-arrow-right work_button-icon"></i>
                        </span>
                        <div class="portfolio_item-details">
                            <h3 class="details_title">The Services provide for design</h3>
                            <p class="details_description">I designed a complete visual identity for the men's barbershop, flyer, business card and logo.</p>
                                <ul class="details_info">
                                    <li>Created - <span>Sep 2020</span></li>
                                    <li>Using - <span>Adobe Illustrator</span></li>
                                    <li>Role - <span>Visual Identity</span></li>
                                    <li>View - <span><a href="https://www.behance.net/gallery/176509153/Visual-Identity-For-Barber?" target="_blank">www.behance.com</a></span></li>
                                </ul>
                        </div>
                    </div>

                    <div class="work_card mix design">
                        <img src="assets/img/work-5.png" alt="" class="work_img">
                        <h3 class="work_title">Logo For Language App</h3>
                        <span class="work_button">Demo
                            <i class="uil uil-arrow-right work_button-icon"></i>
                        </span>
                        <div class="portfolio_item-details">
                            <h3 class="details_title">The Services provide for design</h3>
                            <p class="details_description">I designed a logo for a language learning app.</p>
                                <ul class="details_info">
                                    <li>Created - <span>Feb 2021</span></li>
                                    <li>Using - <span>Adobe Illustrator</span></li>
                                    <li>Role - <span>Logo</span></li>
                                    <li>View - <span><a href="https://www.behance.net/gallery/176512085/Logo-For-Language-App" target="_blank">www.behance.com</a></span></li>
                                </ul>
                        </div>
                    </div>



                        


                </div>

        </section>
        <!-- Portfolio Popup -->
        <div class="portfolio_popup">
            <div class="portfolio_popup-inner">
                <div class="portfolio_popup-content grid">
                    <span class="portfolio_popup-close"><i class="uil uil-times"></i></span>
                    <div class="pp_thumbnail">
                        <img src="assets/img/work-2.webp" alt="" class="portfolio_popup-img">
                    </div>
                    <div class="portfolio_popup-info">
                        <div class="portfolio_popup-subtitle">
                            Featured - <span>Design</span>
                        </div>

                        <div class="portfolio_popup-body">
                            <h3 class="details_title">The Services provide for design</h3>
                <p class="details_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Earum impedit voluptatibus minima.</p>
                <ul class="details_info">
                <li>Created - <span>4 dec 2020</span></li>
                <li>Technologies - <span>html css</span></li>
                <li>Role - <span>frontend</span></li>
                <li>View - <span><a href="#">www.domain.com</a></span></li>
                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--===== Services =====-->
        <section class="services section" id="services">
            <h2 data-heading="Services" class="section_title">What I Offer</h2>

            <div class="services_container container grid">

                
                <div class="services_content">
                    <div>
                        <i class="uil uil-web-grid services_icon"></i>
                        <h3 class="services_title">Web <br> Developer</h3>
                    </div>
                <span class="services_button">
                    View More <i class="uil uil-arrow-right services_button-icon"></i>
                </span>
                <div class="services_modal">
                    <div class="services_modal-content">
                        <i class="uil uil-times services_modal-close"></i>

                        <h3 class="services_modal-title">Web Developer</h3>
                        <p class="services_modal-description">Services with more than 1 year of experience. 
                            Providing quality work to clients and companies.</p>

                            <ul class="services_modal-services grid">
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p class="services_modal-info">Front-end Development.</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p class="services_modal-info">Back-end Development.</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p class="services_modal-info">Database Design and Implementation.</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p class="services_modal-info">I offer creative ideas to elevate your project.</p>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>

            <div class="services_content">
                <div>
                    <i class="uil uil-arrow services_icon"></i>
                    <h3 class="services_title">UI/UX <br> Designer</h3>
                </div>
            <span class="services_button">
                View More <i class="uil uil-arrow-right services_button-icon"></i>
            </span>
            <div class="services_modal">
                <div class="services_modal-content">
                    <i class="uil uil-times services_modal-close"></i>

                    <h3 class="services_modal-title">UI/UX Designer</h3>
                    <p class="services_modal-description">Services with more than 2 years of experience. 
                        Providing quality work to clients and companies.</p>

                        <ul class="services_modal-services grid">
                            <li class="services_modal-service">
                                <i class="uil uil-check-circle services_modal-icon"></i>
                                <p class="services_modal-info">I develop the user interface.</p>
                            </li>
                            <li class="services_modal-service">
                                <i class="uil uil-check-circle services_modal-icon"></i>
                                <p class="services_modal-info">Web page design and development.</p>
                            </li>
                            <li class="services_modal-service">
                                <i class="uil uil-check-circle services_modal-icon"></i>
                                <p class="services_modal-info">I create ux element interactions.</p>
                            </li>
                            <li class="services_modal-service">
                                <i class="uil uil-check-circle services_modal-icon"></i>
                                <p class="services_modal-info">I position your company brand.</p>
                            </li>
                            <li class="services_modal-service">
                                <i class="uil uil-check-circle services_modal-icon"></i>
                                <p class="services_modal-info">Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                </div>
            </div>
        </div>

        <div class="services_content">
            <div>
                <i class="uil uil-camera-plus services_icon"></i>
                <h3 class="services_title">Photo <br> Maker</h3>
            </div>
        <span class="services_button">
            View More <i class="uil uil-arrow-right services_button-icon"></i>
        </span>
        <div class="services_modal">
            <div class="services_modal-content">
                <i class="uil uil-times services_modal-close"></i>

                <h3 class="services_modal-title">Photographer</h3>
                <p class="services_modal-description">Services with more than 5 years of experience. 
                    Providing quality work to clients and companies.</p>

                    <ul class="services_modal-services grid">
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p class="services_modal-info">Product photography for your project.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p class="services_modal-info">Portrait photography services.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p class="services_modal-info">Image editing and presentation in cohesive designs.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p class="services_modal-info">Creative video shooting.</p>
                        </li>
                        <li class="services_modal-service">
                            <i class="uil uil-check-circle services_modal-icon"></i>
                            <p class="services_modal-info">Creating visually appealing video advertisements.</p>
                        </li>
                    </ul>
            </div>
        </div>
    </div>

            </div>
        </section>
        <!--===== Contact =====-->
        <section class="contact section" id="contact">
            <h2 data-heading="Get in touch" class="section_title">Contact Me</h2>

            <div class="contact_container container grid">
                <div class="contact content">
                    <div class="contact_info">
                        <div class="contact_card">
                            <i class="uil uil-envelope-edit contact_card-icon"></i>
                            <h3 class="contact_card-title">Email</h3>
                            <span class="contact_card-data">mayyasobeidat@gmail.com</span>
                            <span class="contact_button">
                                Write me <i class="uil uil-arrow-right contact_button-icon"></i>
                            </span>
                        </div>

                        <div class="contact_card">
                            <i class="uil uil-whatsapp contact_card-icon"></i>
                            <h3 class="contact_card-title">Whatsapp</h3>
                            <span class="contact_card-data">+962797383346</span>
                            <span class="contact_button">
                                Write me <i class="uil uil-arrow-right contact_button-icon"></i>
                            </span>
                        </div>

                        <div class="contact_card">
                            <i class="uil uil-facebook-messenger contact_card-icon"></i>
                            <h3 class="contact_card-title">Messenger</h3>
                            <span class="contact_card-data">mayyasobeidat</span>
                            <span class="contact_button">
                                Write me <i class="uil uil-arrow-right contact_button-icon"></i>
                            </span>
                        </div>


                    </div>
                </div>

                <div class="contact content">
                    <form id="my-form" action="https://formspree.io/f/moqovpdn" method="POST" class="contact_form">
                        <div class="input_container">
                            <input type="text" class="input" name="name" required>
                            <label for="">Your Name</label>
                            <span>Your Name</span>
                        </div>

                        <div class="input_container">
                            <input type="email" class="input" name="email" required>
                            <label for="">Email</label>
                            <span>Email</span>
                        </div>

                        <div class="input_container">
                            <input type="tel" class="input" name="phone" required>
                            <label for="">Phone</label>
                            <span>Phone</span>
                        </div>

                        <div class="input_container textarea">
                            <textarea class="input" name="message" required></textarea>
                            <label for="">Message</label>
                            <span>Message</span>
                        </div>

                        <p id="my-form-status" style="color: green;"></p>

                        <button type="submit" class="button" id="my-form-button"> <i class="uil uil-navigator button_icon"></i>
                           Send Message
                            </button>

                    </form>
                </div>
            </div>
        </section>
        <!--===== FOOTER =====-->
        <footer class="footer">
            <div class="footer_bg">
                <div class="footer_container container grid">
                    <div>
                        <h1 class="footer_title">Mayyas</h1>
                        <span class="footer_subtitle">Web developer</span>
                    </div>

                    <ul class="footer_links">
                        <li>
                            <a href="#services" class="footer_link">Services</a>
                        </li>

                        <li>
                            <a href="#work" class="footer_link">Work</a>
                        </li>

                        <li>
                            <a href="#contact" class="footer_link">Contact</a>
                        </li>
                    </ul>


                    <div class="footer_socials">
                        <a href="https://www.facebook.com/mayyasobeidat" target="_blank" class="footer_social">
                            <i class="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/mayyasobeidatt" target="_blank" class="footer_social">
                            <i class="uil uil-instagram" ></i>
                        </a>

                        <a href="https://www.linkedin.com/in/mayyasobeidat/" target="_blank" class="footer_social">
                            <i class="uil uil-linkedin"></i>
                        </a>
                        <a href="https://www.behance.net/mayyasobeidat" target="_blank" class="footer_social">
                            <i class="uil uil-behance-alt"></i>
                        </a>
                    </div>
                </div>

                <p class="footer_copy">&#169; crypticalcoder. All right reserved</p>
            </div>
        </footer>
        
    </main>

    <!--========== SCROLL UP ==========-->


    <!--===== MIXITUP FILTER ======-->
    <script src="assets/js/mixitup.min.js"></script>

    <!--===== SWIPER JS ======-->
    <script src="assets/js/swiper-bundle.min.js"></script>

    <!--===== MAIN JS ======-->
    <script src="assets/js/main.js"></script>
</div>
</body>
</html>
