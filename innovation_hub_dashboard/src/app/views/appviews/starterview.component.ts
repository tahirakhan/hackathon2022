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
public teamsDataForModal: any;
public selectedTab = 'tab-1';
public currentBacklog;

modalRef: BsModalRef;
public constructor(private modalService: BsModalService, public genericService: GenericService) {}

openModal(template: TemplateRef<any>, teamName: string) {
  this.genericService.getTeamDetails().subscribe((res: any) => {
    this.teamsDataForModal = res;
    this.teamData = res.find(teamData => teamData.teamName === teamName);
    this.modalRef = this.modalService.show(template);
    this.getBacklog();
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log('teamsDataForModal', this.teamData)
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  })
}

closeModal() {
  this.modalRef.hide();
  this.selectedTab = 'tab-1';
}

getInitials(nameString , i){
  const fullName = nameString.split(' ');
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
}

getBacklog() {
  this.genericService.getBacklog(this.teamData.teamName).subscribe((res: any) => {
    this.currentBacklog = res.result[0];
  })
}

getReleases() {
  this.genericService.getReleases().subscribe((res: any) => {
    this.releases = res;
  })
}

getTeamsDataForModal() {
  this.genericService.getTeams().subscribe((res: any) => {
    this.teamsDataForModal = res.result;
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log('teamsDataForModal', this.teamsDataForModal)
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
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
