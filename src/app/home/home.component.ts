import { Component } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PlayerService]
})
export class HomeComponent {

  constructor(private playerService: PlayerService) {

  }

  submitForm(name: string, lunch: string, color: string) {
    let newPlayer: Player = new Player(name, lunch, color);
    this.playerService.addPlayer(newPlayer);
  }
}
