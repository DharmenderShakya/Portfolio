import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  skills = [
    { name: 'HTML', image: '../../assets/images/html.2ba4fabc69a89a8f71e6.png'},
    { name: 'CSS', image: '../../assets/images/css.69a82c2d9e45c933a9cb.png' },
    { name: 'JavaScript', image: '../../assets/images/javascript.1ccd6ef9bb1f9c84ef00.png' },
    { name: 'React', image: '../../assets/images/react.0cf951a69d8e58f83f9d.png' },
    { name: 'GitHub', image: '../../assets/images/github.3b9e32903aa89111875d.png' },
    { name: 'Bootstrap', image: '../../assets/images/github.3b9e32903aa89111875d.png' },
    { name: 'Tailwind', image: '../../assets/images/github.3b9e32903aa89111875d.png' },
    { name: 'Material UI', image: '../../assets/images/github.3b9e32903aa89111875d.png' },
    // Add more skills as needed
  ];

}
