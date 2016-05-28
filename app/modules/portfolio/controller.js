class PortfolioController {
  constructor(){


    this.descriptions = [ "User adds the addresses of their friends and family across the country. The app stores the user's list of locations and when the user logs on, the current weather is displayed for each saved location, along with the user's current position. Animations call attention to severe weather situations.",
    "Demonstrates the ability to create a responsive page layout from scratch using Sass variables and nesting, effectively using node-sass and @media queries.",
    "Moving business logic and data calls into a service, using simple authorization through github so each user has their own data. Using services to organize code.",
    "Using Firebase to act as a simple back end for a todo list app, saves todos, can mark todos as complete, can view all complete or all incomplete, and can delete completed todos.",
    "Using GET to receive data from the OpenWeatherMap API, hiding the API key through a proxy, effectively using Promise and fetch to get weather data for current position and creating an the app almost entirely in vanilla Javascript. Geolocation for current position."
      ]

    this.bouncing = false;

    }


  isInView(inview){
    this.bouncing = true;
    console.log(this.bouncing);
  }


}

export default PortfolioController;
