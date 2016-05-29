class PortfolioController {
  constructor(){

    // this.myClass = [];

    this.projects = [
      {
        // TODO: update description
        name: "Weather Watcher",
        description: "User adds the addresses of their friends and family across the country. The app stores the user's list of locations and when the user logs on, the current weather is displayed for each saved location, along with the user's current position. Animations call attention to severe weather situations.",
        screenshot: '../assets/images/weather-watcher-full.png',
        site: "https://nmajors.github.io/final-project/",
        code: "https://github.com/nmajors/final-project.git",
        tech: "HTML, CSS/SASS, AngularJS, Firebase, Angular Google Maps, OpenWeatherMap API, and Bootstrap for form styles.",
        sliding: false
      },
      {
        // TODO: update description
        name: "Powell Peralta",
        description: "Demonstrates the ability to create a responsive page layout from scratch using Sass variables and nesting, effectively using node-sass and @media queries.",
        screenshot: '../assets/images/powell-peralta-full.png',
        site: "https://nmajors.github.io/powell-peralta-master/",
        code: "https://github.com/nmajors/powell-peralta-master/",
        tech: "HTML and CSS/SASS.",
        sliding: false
      },
      {

        // TODO: update description
        name: "Image Gallery",
        description: "Moving business logic and data calls into a service, using simple authorization through github so each user has their own data. Using services to organize code.",
        screenshot: '../assets/images/image-gallery.jpg',
        site: "https://nmajors.github.io/29-auth-services/dist/",
        code: "https://github.com/nmajors/29-auth-services.git",
        tech: "HTML, CSS/SASS, AngularJS, Firebase, and Bootstrap.",
        sliding: false
      },
      {
        name: "To Do List",
        description: "My first Firebase project, a simple to do list app where the user can create, read, update, and delete todos.",
        screenshot: '../assets/images/to-do-list.jpg',
        site: "https://nmajors.github.io/28-firebase/dist/",
        code: "https://github.com/nmajors/28-firebase.git",
        tech: "HTML, CSS/SASS, AngularJS, and Firebase.",
        sliding: false
      },
      {
        name: "Weather API",
        description: "This was a vanilla JavaScript assignment on using Navigator.geolocation and GET to receive current weather and the seven day forecast for the user's current location from the OpenWeatherMap API. Almost all of the HTML elements and attributes in this project were created with JavaScript.",
        screenshot: '../assets/images/weather-api.jpg',
        site: "https://nmajors.github.io/18-weather-api/dist/",
        code: "https://github.com/nmajors/18-weather-api.git",
        sliding: false,
        tech: "HTML, CSS/SASS, JavaScript, OpenWeatherMap API, and Geolocation."
      }
    ];

  }

  // isInView(inview){
  //  if (inview){
  //    this.myClass.push('animated slideInRight');
  //  }
  //     console.log(inview);
  //
  //   // this.myClass.push('animated slideInRight');
  // }


}

export default PortfolioController;
