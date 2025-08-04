import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper'; // Asegúrate de tener Swiper instalado: npm install swiper
import { Navigation, Pagination } from 'swiper/modules'; // Importa los módulos necesarios
import 'swiper/swiper-bundle.css'; // Importa el CSS de Swiper globalmente si no lo tienes ya

// Interfaz para definir la estructura de un curso
interface Course {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  logoAlt: string;
  logoClass: string;
  courseType: string;
  university: string;
  subInfoDetail: string;
  modalBgClass: string;
  modalImage: string;
  modalTitle: string;
  modalSubtitle: string;
  modalType: string;
  description: string;
  hours: string;
  months?: string; // Opcional, ya que no todos lo tienen
  projects: string;
  projectDuration: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
    tiktok?: string;
    globe?: string;
  };
}

@Component({
  selector: 'app-education-section', 
  standalone: true, // ¡Confirma que sea standalone!
  imports: [CommonModule],  
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'] 
})
export class EducationSectionComponent implements OnInit, AfterViewInit {
  courses: Course[] = [
    {
      id: 'java',
      title: 'Java',
      subtitle: 'Universidad de La Punta',
      image: 'assets/image/logo.java.png',
      logoAlt: 'logo java',
      logoClass: 'java-img',
      courseType: 'Java',
      university: 'Universidad de La Punta',
      subInfoDetail: 'FullStack',
      modalBgClass: 'java-bg',
      modalImage: 'assets/image/logo.java.png',
      modalTitle: 'Java',
      modalSubtitle: 'Universidad de La Punta',
      modalType: 'Workshop',
      description: `
        Section 1: Introduction to Programming<br>
        Imperative Programming: Introduction to the basic concepts of imperative programming, including functions, data types, variables, procedures, boolean logic, and arrays.
        Functional Programming: Teaching functional programming to facilitate understanding and prediction of program behavior. Concepts covered include values, functions, composition, data types, applications, higher-order functions, pattern matching, lists, and recursion.
        Section 2: Java Programming<br>
        Introduction to JAVA and Development Environment: Fundamentals of Java, language structure, data types, operators, control structures, and setting up the development environment with Netbeans.
        Object-Oriented Programming: Object-oriented programming concepts such as classes, objects, messages, methods, identity, references, attributes, encapsulation, and permissions.
        Relationships Between Classes: Use of UML diagrams and relationships such as association, composition, and aggregation.
        Inheritance: Code reuse, polymorphism, use of this and super, method overloading, and method overriding.
        Data Structures and Collections API: Use of arrays, lists, sets, maps, and their implementations in Java.
        Section 3: Learning to Develop a Java Application<br>
        Working with Views and Version Control: Implementation of the Model-View-Controller architecture, creating graphical user interfaces with Swing, and version control with Git and GitHub.
        Exceptions: Exception handling in Java, types of exceptions, declaration, construction, throwing, catching, and handling exceptions.
        Database Handling: Connecting to MySQL databases from a Java application using JDBC, table relationships, SQL queries, data insertion, modification, and deletion, data migration, and handling of primary and foreign keys.
        Integration and Project Completion: Development of a complete project integrating all the concepts learned.
      `,
      hours: '498 hs.',
      months: '11 months.',
      projects: '6',
      projectDuration: '20/30 days',
      socialMedia: {
        facebook: 'https://www.facebook.com/UniversidaddeLaPunta',
        twitter: 'https://twitter.com/ULPSanLuis',
        instagram: 'https://www.instagram.com/ulpsanluis',
        globe: 'https://ulp.edu.ar/index.php#contacto'
      }
    },
    {
      id: 'html-css-js',
      title: 'HTML',
      subtitle: 'Udemy',
      image: 'assets/image/htmlpro.png',
      logoAlt: 'logo html-css-js',
      logoClass: 'html-css-js-img',
      courseType: 'HTML',
      university: 'Udemy',
      subInfoDetail: 'Frontend',
      modalBgClass: 'html-css-js-bg',
      modalImage: 'assets/image/htmlpro.png',
      modalTitle: 'HTLM, CSS, JS',
      modalSubtitle: 'Udemy',
      modalType: 'Workshop',
      description: `
        HTML Workshop<br />In this comprehensive course, we cover a wide range of programming topics, starting with the basics such as input/output handling, variable declaration, and sequential programming. As we progress, we dive into more advanced concepts like conditional statements, loops, and modular programming techniques. Students will learn about arrays, including one-dimensional and multidimensional arrays, as well as dynamic arrays and their applications.<br>
        Moving forward, we explore the world of functions and procedures, understanding their role in creating modular and reusable code. We delve into parameter passing mechanisms, including pass by value and pass by reference, and discuss the nuances of scope and variable lifetime.<br>
        The course also covers essential data structures like linked lists and binary search trees, along with algorithms for searching and sorting. Students will gain practical experience in file manipulation, database concepts, and software design principles.<br>
        As we venture into object-oriented programming (OOP), students will learn about classes, objects, inheritance, polymorphism, and encapsulation. Through hands-on projects and exercises, they'll develop a solid understanding of OOP principles and design patterns.<br>
        In the graphical user interface (GUI) section, students will explore HTML, JavaScript, and CSS, learning to create interactive and visually appealing web interfaces. Topics include event handling, form validation, dynamic content generation, and responsive design techniques.<br>
        Furthermore, the course covers advanced topics such as the Document Object Model (DOM), Browser Object Model (BOM), and XML parsing. Students will gain insights into manipulating web page elements dynamically and working with XML data structures for configuration and data exchange.<br>
        By the end of this course, students will have acquired a comprehensive skill set in programming, encompassing both fundamental concepts and advanced techniques essential for tackling real-world software development challenges.
      `,
      hours: '81.5 hs.',
      projects: '6',
      projectDuration: '10 days',
      socialMedia: {
        facebook: 'https://www.facebook.com/udemy/',
        twitter: 'https://twitter.com/udemy',
        instagram: 'https://www.instagram.com/udemy/',
        linkedin: 'https://www.linkedin.com/company/udemy/'
      }
    },
    {
      id: 'reactjs',
      title: 'ReactJS',
      subtitle: 'UTN',
      image: 'assets/image/react.png',
      logoAlt: 'logo reactjs',
      logoClass: 'reactjs-img',
      courseType: 'ReactJS',
      university: 'UTN',
      subInfoDetail: 'Frontend',
      modalBgClass: 'reactjs-bg',
      modalImage: 'assets/image/react.png',
      modalTitle: 'ReactJS',
      modalSubtitle: 'UTN',
      modalType: 'Workshop',
      description: `
        Review of HTML, CSS, JavaScript, and Bootstrap<br>
        HTML: Basic structure of web pages, elements, attributes, semantic HTML.<br>
        CSS: Styling web pages, selectors, properties, cascading, specificity, responsive design.<br>
        JavaScript: Fundamentals of JavaScript, variables, data types, operators, control structures, functions, arrays, objects, DOM manipulation, events.<br>
        Bootstrap: Introduction to Bootstrap framework for building responsive and mobile-first websites, grid system, components, utilities.<br>
        ReactJS Concepts<br>
        Components: Building blocks of React applications, reusable UI elements encapsulating HTML and JavaScript logic.<br>
        Events: Handling user interactions and events within React components.<br>
        Functional Components: Stateless components defined as JavaScript functions, props for passing data between components.<br>
        Class Components: Stateful components defined as ES6 classes, managing local state using setState.<br>
        Hooks: Introduction to React Hooks for functional components, including useState for managing component state and useEffect for handling side effects.<br>
        Routing: Navigation within React applications using React Router, defining routes, nested routes, and dynamic routing.<br>
        Additional Topics<br>
        State Management: Advanced state management techniques using context API, Redux, or other state management libraries.<br>
        Lifecycle Methods: Understanding component lifecycle methods for class components, including mounting, updating, and unmounting phases.<br>
        Error Handling: Strategies for handling errors in React applications, error boundaries.
      `,
      hours: '20 hs.',
      projects: '3',
      projectDuration: '10 days',
      socialMedia: {
        tiktok: 'https://www.tiktok.com/@utn.rec.ar',
        whatsapp: 'https://www.whatsapp.com/channel/0029VaG5OAkKQuJHZ0eP8B45',
        instagram: 'https://www.instagram.com/utnba.ok/',
        globe: 'https://www.utn.edu.ar/es/'
      }
    },
    {
      id: 'angular',
      title: 'Angular',
      subtitle: 'Udemy',
      image: 'assets/image/angular-icon.png',
      logoAlt: 'logo angular',
      logoClass: 'angular-img',
      courseType: 'Angular',
      university: 'Udemy',
      subInfoDetail: 'Framework',
      modalBgClass: 'angular-bg',
      modalImage: 'assets/image/angular-icon.png',
      modalTitle: 'Angular',
      modalSubtitle: 'Udemy',
      modalType: 'Workshop',
      description: `
        Angular Architecture<br>
        Understanding the architecture of Angular framework.<br>
        Leveraging TypeScript for building Angular applications.<br>
        Directives and Components<br>
        Working with directives and components in Angular for building dynamic and reusable UI elements.<br>
        Data Binding<br>
        Exploring data binding mechanisms in Angular for connecting data between the component class and its template.<br>
        Routing and Navigation<br>
        Implementing routing and navigation in Angular applications for creating single-page applications (SPAs) with multiple views.<br>
        Pipes<br>
        Understanding pipes in Angular for transforming data within templates.<br>
        Accessing Web Services<br>
        Accessing web services, such as RESTful servers, in Angular applications for fetching and manipulating data.<br>
        Dependency Injection<br>
        Implementing dependency injection in Angular for providing dependencies to components and services.<br>
        Modules<br>
        Creating and using modules in Angular for organizing and managing the application's features and functionality.<br>
        Production Optimization<br>
        Optimizing Angular applications for production, including bundling, minification, and lazy loading techniques.<br>
        Firebase and Firestore Integration<br>
        Connecting Angular applications to Firebase and Firestore for real-time data storage and retrieval.<br>
        Deployment<br>
        Deploying Angular applications to the internet for public access.<br>
        Real-World Project<br>
        Working on a real-world project to apply the concepts and techniques learned throughout the course.<br>
        Bonus Courses<br>
        TypeScript: Essential concepts of TypeScript language for applying it with Angular.<br>
        HTML, CSS, and JavaScript: Fundamentals of HTML, CSS, and JavaScript for those new to these technologies used in Angular.<br>
        JavaScript Fundamentals: Basic concepts of JavaScript programming for those unfamiliar with JavaScript.
      `,
      hours: '43 hs.',
      projects: '6',
      projectDuration: '10 days',
      socialMedia: {
        facebook: 'https://www.facebook.com/udemy/',
        twitter: 'https://twitter.com/udemy',
        instagram: 'https://www.instagram.com/udemy/',
        linkedin: 'https://www.linkedin.com/company/udemy/'
      }
    },
    {
      id: 'python',
      title: 'Python',
      subtitle: 'CodoACodo4.0',
      image: 'assets/image/python.png',
      logoAlt: 'logo python',
      logoClass: 'python-img',
      courseType: 'Python',
      university: 'CodoACodo4.0',
      subInfoDetail: 'FullStack',
      modalBgClass: 'python-bg',
      modalImage: 'assets/image/python.png',
      modalTitle: 'Python',
      modalSubtitle: 'CodoACodo4.0',
      modalType: 'Workshop',
      description: `
        In this Python course, I am currently delving into the world of web development, mastering various essential skills and tools necessary for creating dynamic and interactive websites. Here's a glimpse of what I've learned so far:<br>
        Building Blocks: I started by creating the foundational elements of web pages using HTML and then proceeded to style them using CSS. This enabled me to craft visually appealing and structured layouts for my projects.<br>
        Responsive Design: With Bootstrap, I learned how to design responsive websites that adapt seamlessly to different devices and screen sizes. This framework empowered me to create modern and mobile-friendly web interfaces.<br>
        Interactivity: Using JavaScript, I unlocked the potential for interactivity on my websites. From handling user input to creating animations and dynamic content, JavaScript became my go-to tool for enhancing user experiences.<br>
        Data Management: Understanding databases and SQL syntax was crucial for managing data in web applications. I learned how to work with databases, store and retrieve information, and ensure data integrity within my projects.<br>
        Python Power: Python, being one of the most versatile and powerful programming languages, became my primary tool for backend development. With Python, I could build robust and scalable web applications, incorporating complex functionalities and logic.<br>
        Framework Magic: Leveraging high-level Python frameworks like Flask, I streamlined the development process, accelerating project delivery and ensuring code maintainability. These frameworks provided a structured approach to building web applications, from handling URL routing to managing database interactions.<br>
        Overall, this course is equipping me with the essential skills and knowledge needed to embark on a journey as a proficient web developer, capable of bringing ideas to life through innovative and functional web solutions.
      `,
      hours: '60 hs.',
      projects: '3',
      projectDuration: '20 days',
      socialMedia: {
        facebook: 'https://www.facebook.com/GCBA/',
        twitter: 'https://twitter.com/gcba',
        instagram: 'https://www.instagram.com/buenosaires/',
        globe: 'https://buenosaires.gob.ar/educacion/codo-codo-40'
      }
    },
    {
      id: 'spring',
      title: 'Spring',
      subtitle: 'Alura',
      image: 'assets/image/spring copy.png',
      logoAlt: 'logo spring',
      logoClass: 'spring-img',
      courseType: 'Spring',
      university: 'Alura',
      subInfoDetail: 'Framework',
      modalBgClass: 'spring-bg',
      modalImage: 'assets/image/spring copy.png',
      modalTitle: 'Full-Stack Development',
      modalSubtitle: 'Alura-Oracle Full-Stack Development',
      modalType: 'Training',
      description: `
        In the Alura-Oracle Full-Stack Development course, I gained expertise in building modern backend systems using **Java 21**, **Spring Boot**, and related technologies. I developed several robust applications, including a **Clinic Management System** and a **Forum Hub**, where I applied advanced techniques in **JWT** authentication, **JPA** for data persistence, and security best practices.
        <br>Throughout the course, I learned to integrate and manage both **MySQL** and **Postgres** databases, designing schemas and performing efficient data operations. Additionally, I became proficient in implementing **Spring Security** to secure applications and ensure the confidentiality of sensitive user data.
        <br>The hands-on projects were a key focus, allowing me to apply my knowledge in real-world scenarios, including testing and building scalable, production-ready systems with tools like **Workbench** for database management.
        <br>In summary, this course equipped me with the skills to develop full-stack Java applications, manage databases effectively, and ensure secure and optimized backend solutions.
      `,
      hours: '450 hs.',
      projects: '2 (Clinic System, Forum Hub)',
      projectDuration: '20/30 days',
      socialMedia: {
        instagram: 'https://www.instagram.com/alura/',
        linkedin: 'https://www.linkedin.com/school/alura-edu/',
        globe: 'https://www.oracle.com/education/'
      }
    }
  ];

  selectedCourse: Course | null = null;
   isModalActive: boolean = false;
   swiperInstance: Swiper | undefined;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
  this.swiperInstance = new Swiper('.cardSwiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
      }
    });
  }

openModal(course: Course): void {
    this.selectedCourse = course;
    // Pequeño retardo para permitir que *ngIf añada el elemento al DOM
    setTimeout(() => {
      this.isModalActive = true;
      document.body.classList.add('modal-open');
    }, 50); // Puedes ajustar este tiempo si es necesario
  }

  closeModal(): void {
    this.isModalActive = false; // Quita la clase 'active' para iniciar la transición de salida
    document.body.classList.remove('modal-open');
    // Pequeño retardo para permitir que la transición de salida termine antes de quitar el elemento del DOM
    setTimeout(() => {
      this.selectedCourse = null;
    }, 400); // Coincide con la duración de la transición en tu CSS (0.4s)
  }
}