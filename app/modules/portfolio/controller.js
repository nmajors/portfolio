class PortfolioController {
  constructor(){
    this.projects=[
      {
        name: "Weather Watcher",
        image: "./assets/images/weather-watcher-full.png",
        description: "My final project",
        site: "https://nmajors.github.io/final-project/",
        repository: "https://github.com/nmajors/final-project.git"
      },
      {
        name: "Powell Peralta Skateboards",
        image: "./assets/images/powell-peralta-full.png",
        description:  "A fully responsive layout assignment",
        site: "http://nmajors.github.io/08-powell-peralta-master/",
        repository: "https://github.com/nmajors/08-powell-peralta-master.git"
      },
      {
        name: "Image Gallery",
        image: "./assets/images/image-gallery.jpg",
        description: "A gallery app using services and Github authentication",
        site: "http://nmajors.github.io/29-auth-services/dist/",
        repository: "https://github.com/nmajors/29-auth-services.git"
      },
      {
        name: "To Do List",
        image: "./assets/images/to-do-list.jpg",
        description: "A simple to do list app",
        site: "http://nmajors.github.io/28-firebase/dist/",
        repository: "https://github.com/nmajors/28-firebase.git"
      }

    ];

  }
}



export default PortfolioController;
