import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

 

 skills = [
  { title: 'Java', image: './assets/images/java.png' },
  { title: 'HTML', image: './assets/images/html.png' },
  { title: 'CSS', image: './assets/images/css.png' },
  { title: 'JS', image: './assets/images/js.png' },
  { title: 'REACTJS', image: './assets/images/react.png' },
  { title: 'NODEJS', image: './assets/images/node.png' },
  { title: 'EXPRESSJS', image: './assets/images/Expressjs.png' },
  { title: 'MONGODB', image: './assets/images/mongodb-png--400.png' },
  { title: 'REST API', image: './assets/images/api.png' }
];

}
