import { Injectable } from '@angular/core';

import {HttpHeaders, HttpClient } from '@angular/common/http';


import {Player} from '../common/player.model';

import {PlayerService} from './player.service';

@Injectable()
export class DataStorageService {

  constructor( private httpClient: HttpClient, private playerService : PlayerService) { }

  getAllUsers(){
    let playersArray = [];

    let headers = new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin':'*'
     });

    this.httpClient.get('http://192.168.1.13:8080/pool-site-rest/players/', {headers}).subscribe((response)=>{
      let players = response['_embedded']['players'];
      for(let item of players){
        let iPlayer = new Player(item.firstName, item.lastName, item.playerNumber, item.skillLevels,0);
       playersArray.push(iPlayer);
      }
      console.log(response);
      this.playerService.setAllPlayers(playersArray);
    });

  }
  storeAllUsers(){
    this.httpClient.put('localhost:8080/pool-site-rest/players/', this.playerService.getAllPlayers()).subscribe();
  }
  storeSingleUser(player: Player){
    console.log("API call made");
    let headers = new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin':'*'
     });
    let body = JSON.stringify(player);

    return this.httpClient.post<Player>('http://192.168.1.13:8080/pool-site-rest/players/', body, { headers}).subscribe(
      (response)=>{
      console.log(response);
    }, (request: Request)=>{
      console.log(request);
      console.log(body);
    });
  }
  removeSingleUser(player : Player){
    this.httpClient.delete('http://192.168.1.13:8080/players/search/deleteByPlayerNumber?number='+player.playerNumber).subscribe();
    this.playerService.removePlayer(player);
  }
}
