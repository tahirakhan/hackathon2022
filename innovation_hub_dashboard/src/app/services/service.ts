import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()


export class GenericService {

  baseUrl = 'http://3.128.28.79:4000/api';

  constructor(private http: HttpClient) {}

  getReleases() {
    return this.http.get(`http://18.222.220.150:7171/sheet-data/releases`)
  }

  getTeamDetails() {
    return this.http.get(`http://18.222.220.150:7171/sheet-data/teams`);
  }

  getTeams() {
    return this.http.get(`http://18.222.220.150:4000/api/issues`);
  }

  getBacklog(team) {
    return this.http.get(`http://18.222.220.150:4000/api/issues/backlog?team=${team}`)
  }

}
