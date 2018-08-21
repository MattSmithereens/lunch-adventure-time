import { Component } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  submitForm(name: string, lunch: string, color: string) {
    let newPlayer: Player = new Player(name, lunch, color);
    console.log(newPlayer);
  }
}
