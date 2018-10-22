import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions}  from '@angular/http';

import {HttpHeaders, HttpClient } from '@angular/common/http';


import {Player} from '../common/player.model';

import {PlayerService} from './player.service';

@Injectable()
export class DataStorageService {

  constructor( private http: Http, private httpClient: HttpClient, private playerService : PlayerService) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  });

  options = new RequestOptions({ headers: this.headers });

  getAllUsers(){
    let playersArray = [];

    let headers = new Headers();

    this.httpClient.get('http://192.168.1.13:8080/pool-site-rest/players/').subscribe((response: Response)=>{
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
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    });

    let options = new RequestOptions({ headers: this.headers });

    this.http.put('localhost:8080/pool-site-rest/players/', this.playerService.getAllPlayers());
  }
  storeSingleUser(player: Player){
    console.log("API call made");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    });

    let options = new RequestOptions({ headers: this.headers });
    let body = JSON.stringify(player);
    console.log({body});
    return this.httpClient.post<Player>('http://192.168.1.13:8080/pool-site-rest/players/', body, options).subscribe((response: Response)=>{
      console.log(response);
    }, (request: Request)=>{
      console.log(request);
      console.log(body);
    });
  }
  removeSingleUser(player : Player){
    //TODO: Resolve CORS issue with delete requests. need to update tomcat to allow delete requests
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    });

    let options = new RequestOptions({ headers: this.headers });

    this.httpClient.delete('http://192.168.1.13:8080/players/search/deleteByPlayerNumber?number='+player.playerNumber, options).subscribe();
    this.getAllUsers();
    this.playerService.removePlayer(player);
  }
}
