import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions}  from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Player} from '../common/player.model';

import {PlayerService} from './player.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private playerService : PlayerService) { }

  storeAllUsers(){
    this.http.put('localhost:8080/pool-site-rest/players/', this.playerService.getAllPlayers());
  }
  storeSingleUser(player: Player){
    console.log("API call made");
    let body = JSON.stringify({ player });
      let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*', });
      let options = new RequestOptions({ headers: headers });
    return this.http.post('http://192.168.1.13:8080/pool-site-rest/players/', body,options).subscribe((response: Response)=>{
      console.log(response);
    });
  }
}
