import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
 projects = [
  {
    title: 'Hostel ChatBot',
    description: 'This ChatBot smoothens the process of registering complaints to the NITRR hostel helpdesk. You just need to interact with the bot to register your complaint.',
    image: './assets/images/chatbot.png',
    link: 'https://hostelchatbotnitrr.netlify.app/'
  },
  {
    title: 'Attendance Marker',
    description: 'The website utilizes the Geolocation API, ensuring students can mark attendance only if they are physically present within a 10-meter radius of the class center.',
    image: './assets/images/attendance.png',
    link: 'https://attendancenitrr.netlify.app/'
  },
  {
    title: 'Covid-19 Tracker',
    description: 'This web app provides real-time data of Covid-19, including deaths and active cases worldwide. You can search by country to get the latest statistics based on data from a public API.',
    image: './assets/images/coronavirus.png',
    link: 'https://covid19trakcer.netlify.app/'
  },
  {
    title: 'Coding Duniya',
    description: 'This website helps students learn tech skills. It lists the best YouTube channels and websites for learning various technical skills.',
    image: './assets/images/programming.png',
    link: 'https://codingduniya.netlify.app/'
  },
  {
    title: 'CricketersInfo',
    description: 'This website provides detailed statistics about cricketers, including their runs, wickets, and rankings in ODI, T20, and Test cricket.',
    image: './assets/images/cricketlogo.jpg',
    link: 'https://cricketerinfo.netlify.app/index.html'
  },
  {
    title: 'SuperHeroInfo',
    description: 'This website provides information about your favorite superheroes.',
    image: './assets/images/images.png',
    link: 'https://superheroinfo.netlify.app/'
  }
];

}
