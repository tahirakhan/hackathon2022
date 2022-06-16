import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()


export class GenericService {

  constructor(private http: HttpClient) {}

  getReleases() {
    return this.http.get('')
  }

  getTeamDetails(team: string) {
     return {
      name: 'Team 1',
      roles: [
        {
          name: 'Backend',
          resources: [
            {
              name: 'Asad',
              isLead: true
            },
            {
              name: 'Rujal',
              isLead: false
            }
          ]
        },
        {
          name: 'Frontend',
          resources: [
            {
              name: 'Afaaq',
              isLead: false
            },
            {
              name: 'Gaurav',
              isLead: false
            }
          ]
        },
        {
          name: 'QA',
          resources: [
            {
              name: 'Biru',
              isLead: false
            },
            {
              name: 'Ghulam',
              isLead: false
            },
            {
              name: 'Sahar',
              isLead: false
            }
          ]
        },
        {
          name: 'Product Owner',
          resources: [
            {
              name: 'Muhammad Sajjid',
              isLead: false
            },
          ]
        },
        {
          name: 'Ops',
          resources: [
            {
              name: 'Ahmad khan',
              isLead: false
            },
          ]
        },
      ]
    }
  }


  getTeams() {
    return this.http.get('http://3.128.28.79:4000/api/issues');
  }

}
