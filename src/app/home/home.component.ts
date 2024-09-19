import { Component } from '@angular/core';
import { homecarddetails } from '../homecardetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  details: homecarddetails[] = [{
    image:"https://media1.giphy.com/media/VTtANKl0beDFQRLDTh/giphy.gif",
    para:`Each day starts with diving into coding with focus and passion. This routine
    reflects my commitment to programming, balancing development with solving
    problems and creating new things. It's a way of life that keeps me learning
    and growing every day.`
  },
  {
    image:"https://media0.giphy.com/media/S3KhNnHajzZ4voJKYP/giphy.gif",
    para:`I love to write poems in Hindi and have won 2nd place in Poem Writing
    (Kavita Lekhan) at my college, NIT Raipur. Writing poetry allows me to
    express my creativity and emotions through words, capturing the beauty and
    depth of the language.`
  },
  {
    image:"https://media0.giphy.com/media/IejVI3NqwKEG78skNG/giphy.gif",
    para:`  Cricket is a major passion of mine, and I particularly admire Virat Kohli's
    play. I enjoy immersing myself in the sport, whether it's watching matches
    or keeping up with the latest news and performances. Cricket holds a special
    place in my life.`
  }
]
}
