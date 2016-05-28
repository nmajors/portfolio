class PortfolioController {
  constructor(){

    // //
    // this.descriptions = [ "User adds the addresses of their friends and family across the country. The app stores the user's list of locations and when the user logs on, the current weather is displayed for each saved location, along with the user's current position. Animations call attention to severe weather situations.",
    // "Demonstrates the ability to create a responsive page layout from scratch using Sass variables and nesting, effectively using node-sass and @media queries.",
    // "Moving business logic and data calls into a service, using simple authorization through github so each user has their own data. Using services to organize code.",
    // "Using Firebase to act as a simple back end for a todo list app, saves todos, can mark todos as complete, can view all complete or all incomplete, and can delete completed todos.",
    // "Using GET to receive data from the OpenWeatherMap API, hiding the API key through a proxy, effectively using Promise and fetch to get weather data for current position and creating an the app almost entirely in vanilla Javascript. Geolocation for current position."
    //   ]
    //
    // this.bouncing = false;


    this.projects = [
      {
        name: "Weather Watcher",
        description: "User adds the addresses of their friends and family across the country. The app stores the user's list of locations and when the user logs on, the current weather is displayed for each saved location, along with the user's current position. Animations call attention to severe weather situations.",
        screenshot: '../assets/images/weather-watcher-full.png',
        site: "https://nmajors.github.io/final-project/",
        code: "https://github.com/nmajors/final-project.git",
        sliding: false
      },
      {
        name: "Powell Peralta",
        description: "Demonstrates the ability to create a responsive page layout from scratch using Sass variables and nesting, effectively using node-sass and @media queries.",
        screenshot: '../assets/images/powell-peralta-full.png',
        site: "https://nmajors.github.io/powell-peralta-master/",
        code: "https://github.com/nmajors/powell-peralta-master/",
        sliding: false
      },
      {
        name: "Image Gallery",
        description: "Moving business logic and data calls into a service, using simple authorization through github so each user has their own data. Using services to organize code.",
        screenshot: '../assets/images/image-gallery.jpg',
        site: "https://nmajors.github.io/29-auth-services/dist/",
        code: "https://github.com/nmajors/29-auth-services.git",
        sliding: false
      },
      {
        name: "To Do List",
        description: "Using Firebase to act as a simple back end for a todo list app, saves todos, can mark todos as complete, can view all complete or all incomplete, and can delete completed todos.",
        screenshot: '../assets/images/to-do-list.jpg',
        site: "https://nmajors.github.io/28-firebase/dist/",
        code: "https://github.com/nmajors/28-firebase.git",
        sliding: false
      },
      {
        name: "Weather API",
        description: "Using GET to receive data from the OpenWeatherMap API, hiding the API key through a proxy, effectively using Promise and fetch to get weather data for current position and creating an the app almost entirely in vanilla Javascript. Geolocation for current position",
        screenshot: '../assets/images/weather-api.jpg',
        site: "https://nmajors.github.io/18-weather-api/dist/",
        code: "https://github.com/nmajors/18-weather-api.git",
        sliding: false
      }
    ];

    }


  isInView(inview){
    this.sliding = true;
    console.log(this.sliding);
  }


}

export default PortfolioController;
