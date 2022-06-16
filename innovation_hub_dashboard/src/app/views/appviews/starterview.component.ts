import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { GenericService } from 'app/services/service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'starter',
  templateUrl: 'starter.template.html'
})
export class StarterViewComponent implements OnDestroy, OnInit  {

public nav:any;
public releases : any;
public teams: any;
public teamData: any;

modalRef: BsModalRef;
public constructor(private modalService: BsModalService, public genericService: GenericService) {
  this.releases = [
    {
      name: 'Rc-2020-1',
      earlyAccess: '22 April',
      productionRelease: '22 April'
    },
    {
      name: 'Rc-2020-2',
      earlyAccess: '22 April',
      productionRelease: '22 April'
    },
    {
      name: 'Rc-2020-3',
      earlyAccess: '22 April',
      productionRelease: '22 April'
    },
    {
      name: 'Rc-2020-4',
      earlyAccess: '22 April',
      productionRelease: '22 April'
    },
    {
      name: 'Rc-2020-5',
      earlyAccess: '22 April',
      productionRelease: '22 April'
    },
  ]
  this.teams = [
    {
      name: 'team 1',
      items: [
        {
          name: 'Item1',
          labels: ['Rc-2020-1', 'Rc-2020-2']
        },
        {
          name: 'Item2',
          labels: ['Rc-2020-1']
        },
        {
          name: 'Item3',
          labels: ['Rc-2020-3']
        },
        {
          name: 'Item4',
          labels: ['Rc-2020-2']
        },
      ]
    },
    {
      name: 'team 2',
      items: [
        {
          name: 'Item1',
          labels: ['Rc-2020-1', 'Rc-2020-2']
        },
        {
          name: 'Item2',
          labels: ['Rc-2020-1']
        },
      ]
    },
    {
      name: 'team 3',
      items: [
        {
          name: 'Item1',
          labels: ['Rc-2020-1', 'Rc-2020-2']
        },
        {
          name: 'Item2',
          labels: ['Rc-2020-1']
        },
      ]
    },
    {
      name: 'team 4',
      items: [
        {
          name: 'Item1',
          labels: ['Rc-2020-1']
        },
        {
          name: 'Item2',
          labels: ['Rc-2020-2']
        },
        {
          name: 'Item3',
          labels: ['Rc-2020-3']
        },
        {
          name: 'Item4',
          labels: ['Rc-2020-4']
        },
      ]
    },
  ];
  // this.nav = document.querySelector('nav.navbar');
}

openModal(template: TemplateRef<any>, team: string) {
  this.teamData = this.genericService.getTeamDetails(team);
  if (this.teamData) {
    this.modalRef = this.modalService.show(template);
  }
}

public ngOnInit():any {
  // this.getTeamsData();
  this.modifyItems();
  // this.nav.className += " white-bg";
}

getReleases() {
  // this.genericService.getReleases().
};

getTeamsData() {
  this.genericService.getTeams().subscribe((res: any) => {
    this.teams = res.result;
  })
}


public ngOnDestroy():any {
  // this.nav.classList.remove("white-bg");
}

getTeamDetails(team: string) {

}


modifyItems() {
  const releases = this.releases.map(release => release.name);
  const items = [
    {
      name: 'Item1',
      labels: ['Rc-2020-1', 'Rc-2020-2']
    },
    {
      name: 'Item2',
      labels: ['Rc-2020-1']
    },
    {
      name: 'Item3',
      labels: ['Rc-2020-3']
    },
  ]

  this.teams.forEach(team => {
    team.items.map((item: any) => {
      item.margin = releases.indexOf(item.labels[0]) * 20;
      item.width = item ? item.labels.length * 20 : releases.length * 20;
    })
    if (!team.items.length) {
      team.items.push({
        hide: true,
        name: '.'
      },
      {
        hide: true,
        name: '.'
      })
    }
  });

  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  console.log('this.teams', this.teams);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
}

}
