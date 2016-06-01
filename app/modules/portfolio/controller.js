class PortfolioController {
  constructor(){

    // this.myClass = ['description'];


    this.projects = [
      {

        name: "Weather Watcher",
        description: "My final project for The Iron Yard. A fully responsive web app where each user can save addresses for their friends and family and keep track of weather conditions and severe weather situations for all of their saved locations in one place.",
        screenshot: './assets/images/weather-watcher-full.png',
        site: "https://nmajors.github.io/final-project/",
        code: "https://github.com/nmajors/final-project.git",
        tech: "HTML, CSS/SASS, AngularJS, Firebase, Angular Google Maps, OpenWeatherMap API, and Bootstrap for form styles.",
        sliding: false
      },
      {
        name: "Powell Peralta Skateboards",
        description: "A fully responsive site layout created with @media queries.",
        screenshot: './assets/images/powell-peralta-full.png',
        site: "https://nmajors.github.io/powell-peralta-master/",
        code: "https://github.com/nmajors/powell-peralta-master/",
        tech: "HTML and CSS/SASS.",
        sliding: false
      },
      {
        name: "Image Gallery",
        description: "An exercise on moving business logic and data calls into a service, using simple authorization through github so each user has their own data.",
        screenshot: './assets/images/image-gallery.jpg',
        site: "https://nmajors.github.io/29-auth-services/dist/",
        code: "https://github.com/nmajors/29-auth-services.git",
        tech: "HTML, CSS/SASS, AngularJS, Firebase, and Bootstrap.",
        sliding: false
      },
      {
        name: "To Do List",
        description: "My first Firebase project, a simple to do list app where the user can create, read, update, and delete todos.",
        screenshot: './assets/images/to-do-list.jpg',
        site: "https://nmajors.github.io/28-firebase/dist/",
        code: "https://github.com/nmajors/28-firebase.git",
        tech: "HTML, CSS/SASS, AngularJS, and Firebase.",
        sliding: false
      },
      {
        name: "Weather API",
        description: "This was a vanilla JavaScript assignment on using Navigator.geolocation and GET to receive current weather and the seven day forecast for the user's current location from the OpenWeatherMap API. Almost all of the HTML elements and attributes in this project were created with JavaScript.",
        screenshot: './assets/images/weather-api.jpg',
        site: "https://nmajors.github.io/18-weather-api/dist/",
        code: "https://github.com/nmajors/18-weather-api.git",
        sliding: false,
        tech: "HTML, CSS/SASS, JavaScript, OpenWeatherMap API, and Geolocation."
      }
    ];
// this.isInview()
  }
// isInview(inview){
//   if(inview){
//   console.log(inview);
// }
// }

// showDescription(index, inview, inviewpart, event){
//   let thisIsInView = inview;
//   if (inview){
//     return true;
//     console.log("index" + index);
//     console.log("inview" + inview);
//     console.log("inviewpart" + inviewpart);
//     console.log("event" + event);
//
//   }
//   else {
//     return false;
//   }
// }

}

export default PortfolioController;
