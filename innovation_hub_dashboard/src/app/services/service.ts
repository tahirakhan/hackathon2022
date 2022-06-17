import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()


export class GenericService {

  baseUrl = 'http://devqa18-internal.vroozi.com:4000/api';

  constructor(private http: HttpClient) {}

  getReleases() {
    return this.http.get(`http://devqa18-internal.vroozi.com:7171/sheet-data/releases`)
  }

  getTeamDetails() {
    return this.http.get(`http://devqa18-internal.vroozi.com:7171/sheet-data/teams`);
  }

  getTeams() {
    return this.http.get(`http://devqa18-internal.vroozi.com:4000/api/issues`);
  }

  getBacklog(team) {
    return this.http.get(`http://devqa18-internal.vroozi.com:4000/api/issues/backlog?team=${team}`)
  }

}
