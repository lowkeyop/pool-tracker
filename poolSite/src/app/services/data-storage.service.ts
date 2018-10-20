import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions}  from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Player} from '../common/player.model';

import {PlayerService} from './player.service';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private http: Http, private playerService : PlayerService) { }

  storeAllUsers(){
    this.http.put('localhost:8080/pool-site-rest/players/', this.playerService.getAllPlayers());
  }
  storeSingleUser(player: Player){
    console.log("API call made");
    console.log(player);
    let body = JSON.stringify({ player });
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin','192.168.1.13:8080');
      let options = new RequestOptions({ headers: headers });
    return this.http.post('/pool-site-rest/players/', body,options).subscribe((response: Response)=>{
      console.log(response);
    });
  }
}
