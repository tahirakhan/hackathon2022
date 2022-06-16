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
public teams: any = [];
public teamData: any;
public selectedTab = 'tab-1';
public currentBacklog;

modalRef: BsModalRef;
public constructor(private modalService: BsModalService, public genericService: GenericService) {
  // this.releases = [
  //   {
  //     name: 'RC-2022-3',
  //     earlyAccess: '22 April',
  //     productionRelease: '22 April'
  //   },
  //   {
  //     name: 'RC-2022-4',
  //     earlyAccess: '22 April',
  //     productionRelease: '22 April'
  //   },
  //   {
  //     name: 'RC-2022-5',
  //     earlyAccess: '22 April',
  //     productionRelease: '22 April'
  //   },
  //   {
  //     name: 'RC-2022-6',
  //     earlyAccess: '22 April',
  //     productionRelease: '22 April'
  //   },
  //   {
  //     name: 'RC-2022-7',
  //     earlyAccess: '22 April',
  //     productionRelease: '22 April'
  //   },
  // ]
  // this.teams = [
  //   {
  //     name: 'team 1',
  //     items: [
  //       {
  //         name: 'Item1',
  //         labels: ['Rc-2020-1', 'Rc-2020-2']
  //       },
  //       {
  //         name: 'Item2',
  //         labels: ['Rc-2020-1']
  //       },
  //       {
  //         name: 'Item3',
  //         labels: ['Rc-2020-3']
  //       },
  //       {
  //         name: 'Item4',
  //         labels: ['Rc-2020-2']
  //       },
  //     ]
  //   },
  //   {
  //     name: 'team 2',
  //     items: [
  //       {
  //         name: 'Item1',
  //         labels: ['Rc-2020-1', 'Rc-2020-2']
  //       },
  //       {
  //         name: 'Item2',
  //         labels: ['Rc-2020-1']
  //       },
  //     ]
  //   },
  //   {
  //     name: 'team 3',
  //     items: [
  //       {
  //         name: 'Item1',
  //         labels: ['Rc-2020-1', 'Rc-2020-2']
  //       },
  //       {
  //         name: 'Item2',
  //         labels: ['Rc-2020-1']
  //       },
  //     ]
  //   },
  //   {
  //     name: 'team 4',
  //     items: [
  //       {
  //         name: 'Item1',
  //         labels: ['Rc-2020-1']
  //       },
  //       {
  //         name: 'Item2',
  //         labels: ['Rc-2020-2']
  //       },
  //       {
  //         name: 'Item3',
  //         labels: ['Rc-2020-3']
  //       },
  //       {
  //         name: 'Item4',
  //         labels: ['Rc-2020-4']
  //       },
  //     ]
  //   },
  // ];
  // this.nav = document.querySelector('nav.navbar');
}

openModal(template: TemplateRef<any>, teamName: string) {
  this.genericService.getTeamDetails().subscribe((res: any) => {
    this.teamData = res.find(teamData => teamData.teamName === teamName);
    this.modalRef = this.modalService.show(template);
    this.getBacklog();
  })
}

closeModal() {
  this.modalRef.hide();
}

getInitials(nameString , i){
  const fullName = nameString.split(' ');
  console.log('fullName', fullName);

  const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  return initials.toUpperCase();
}

public ngOnInit():any {
  this.getTeamsData();
  this.getReleases();
  // this.nav.className += " white-bg";
}

tabClicked(tabId) {
  this.selectedTab = tabId;
  // if (this.selectedTab === 'tab-2') {
  //   this.getBacklog();
  // }
}

getBacklog() {
  this.genericService.getBacklog(this.teamData.teamName).subscribe((res: any) => {
    this.currentBacklog = res.result[0];
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log('currentBacklog', this.currentBacklog);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  })
}

getReleases() {
  this.genericService.getReleases().subscribe((res: any) => {
    this.releases = res;
  })
}

getTeamsData() {
  this.genericService.getTeams().subscribe((res: any) => {
    this.teams = res.result;
    this.modifyItems();
  })
}


public ngOnDestroy():any {
  // this.nav.classList.remove("white-bg");
}

getTeamDetails(team: string) {

}


modifyItems() {
  const releases = this.releases.map(release => release.name);
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
}

}
