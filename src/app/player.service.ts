import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Player } from './models/player';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

}
