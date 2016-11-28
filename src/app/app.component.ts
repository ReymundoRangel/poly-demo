import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Effort }       from './models/effort.model';
import { Priority }     from './models/priority.model';
import { Project }      from './models/project.model';
import { User }         from './models/user.model';
import { IssueStatus }  from './models/issueStatus.model';
import { IssueType }    from './models/issueType.model';
import { Release }      from './models/release.model';
import { MyComponent }  from './models/component.model';
import { Issue }        from './models/issue.model';
import { ViewIssue }    from './models/viewIssue.model';

import { EffortService }        from './services/effort.service';
import { PriorityService }      from './services/priority.service';
import { ProjectService }       from './services/project.service';
import { UserService }          from './services/user.service';
import { IssueStatusService }   from './services/issueStatus.service';
import { IssueTypeService }     from './services/issueType.service';
import { ReleaseService }       from './services/release.service';
import { ComponentService }     from './services/component.service';
import { IssueService }         from './services/issue.service';


class Element {
    constructor(
        public name: string
    ) { }
}

/*

class Effort {
    constructor(
        public k_EffortId: number,
        public effortCode: string,
        public effortName: string
    ) { }
}


class Project {
    constructor(
        public k_ProjectId: number,
        public projectCode: string,
        public projectName: string
    ) { }
}

class Issue {
    constructor(
        public k_IssueId: number,
        public issueName: string,
        public description: string,
        public recordDate: Date,
        public recordDateStr: string,
        public assignDate: Date,
        public assignDateStr: string,
        public level1Name: string,
        public level2Name: string,
        public level3Name: string,
        public k_PriorityId: number,
        public k_EffortId: number,
        public k_Component1Id: number,
        public k_Component2Id: number,
        public k_Component3Id: number,
        public k_ProjectId: number
    ) { }
}
*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {

    issue: any = {}

    @Output() closeEditor = new EventEmitter();
    isLoading = false;
    
    constructor(
        private effortService: EffortService,
        private priorityService: PriorityService,
        private projectService: ProjectService, 
        private userService: UserService,
        private issueStatusService: IssueStatusService,
        private issueTypeService: IssueTypeService,
        private releaseService: ReleaseService,
        private componentService: ComponentService,
        private issueService: IssueService
        ) {
    }    


  title = 'vaadin element examples';
  //myLabel = 'Select a number';
  //myValue = '4';
  //myItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  birthday = "2000-01-01";


  selectedLanguage = '';
  selectedSkillLevel = 'Beginner';

    languages = [
    'Afrikaans', 'Albanian', 'Amharic', 'Arabic', 'Armenian', 'Basque', 'Bengali',
    'Byelorussian', 'Burmese', 'Bulgarian', 'Catalan', 'Czech', 'Chinese', 'Croatian',
    'Tibetan', 'Tigrinya', 'Tongan', 'Turkish', 'Turkmen', 'Ucrainian', 'Urdu', 'Uzbek',
    'Vietnamese', 'Welsh'];

    skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Professional', 'Native'];


 zmodel = new Element('Carbon');

    elements = ['Actinium', 'Aluminium', 'Americium', 'Antimony', 'Argon',
        'Arsenic', 'Astatine', 'Barium', 'Berkelium', 'Beryllium', 'Bismuth',
        'Bohrium', 'Boron', 'Bromine', 'Cadmium', 'Caesium', 'Calcium',
        'Californium', 'Carbon', 'Cerium', 'Chlorine', 'Chromium', 'Cobalt',
        'Copernicium', 'Copper', 'Curium', 'Darmstadtium', 'Dubnium',
        'Ununoctium', 'Ununpentium', 'Ununseptium', 'Ununtrium', 'Uranium',
        'Vanadium', 'Xenon', 'Ytterbium', 'Yttrium', 'Zinc', 'Zirconium'];
/*
onSubmit() {
        alert('submitted with element: ' + JSON.stringify(this.model));
    }
*/
  //value = 'C';
  //value = 4;
  selectedItem: Object = {};
/*
 priorities = [
    {priorityName: '1-High', priorityCode: 'High', k_PriorityId: 1},
    {priorityName: '2-Med', priorityCode: 'Medium', k_PriorityId: 2},
    {priorityName: '3-Low', priorityCode: 'Low', k_PriorityId: 3},
    {priorityName: '4-None', priorityCode: 'None', k_PriorityId: 4}
  ]

  //effortValue = 3;
  effortSelectedItem: Object = {};
  efforts = [
    new Effort(1,'1-Easy','Easy'),
    new Effort(2,'2-Moderate','Moderate'),
    new Effort(3,'3-Difficult','Difficult'),
    new Effort(4,'4-InYourDreams','InYourDreams'),
 ];

//  projectValue = 1;
  projectSelectedItem: Object = {};
  projects = [
    new Project(1,'CDLink','CDLink'),
    new Project(2,'Bazinga','Bazinga'),
    new Project(3,'CDConnect','CDConnect'),
    new Project(4,'PROFIT','PROFIT'),
    new Project(4,'CDIntegration','CDIntegration'),
 ];
*/

  //issue: Issue;

  effortSelectedItem: Object = {};
  prioritySelectedItem: Object = {};
  projectSelectedItem: Object = {};
  userSelectedItem: Object = {};
  issueStatusSelectedItem: Object = {};
  issueTypeSelectedItem: Object = {};
  releaseSelectedItem: Object = {};
  myComponentSelectedItem: Object = {};
  issueSelectedItem: Object = {};

  efforts: Effort[];
  priorities: Priority[];
  projects: Project[];
  users: User[];
  issueStatuses: IssueStatus[];
  issueTypes: IssueType[];
  releases: Release[];
  myComponents: MyComponent[];
  issues: Issue[];
  viewIssues: ViewIssue[];

//  userValue = 6
  users2: User[] ;
  

  private executeTheLookups(): void {
      console.log('AppComponent:ExecuteLookups:')

      let effort = new Effort();
      //this.effortService.lookup(effort)
      this.effortService.lookupEfforts(effort)
                  .subscribe(
                  response => this.getEffortsOnSuccess(response),
                  response => this.getOnError(response));

      let priority = new Priority();
      this.priorityService.lookupPriorities(priority)
                  .subscribe(
                  response => this.getPrioritiesOnSuccess(response),
                  response => this.getOnError(response));

      let project = new Project();
      this.projectService.lookupProjects(project)
                  .subscribe(
                  response => this.getProjectsOnSuccess(response),
                  response => this.getOnError(response));

      let user = new User();
      this.userService.lookupUsers(user)
                  .subscribe(
                  response => this.getUsersOnSuccess(response),
                  response => this.getOnError(response));

      let issueStatus = new IssueStatus();
      this.issueStatusService.lookupIssueStatuses(issueStatus)
                  .subscribe(
                  response => this.getIssueStatusesOnSuccess(response),
                  response => this.getOnError(response));

      let issueType = new IssueType();
      this.issueTypeService.lookupIssueTypes(issueType)
                  .subscribe(
                  response => this.getIssueTypesOnSuccess(response),
                  response => this.getOnError(response));

      let release = new Release();
      this.releaseService.lookupReleases(release)
                  .subscribe(
                  response => this.getReleasesOnSuccess(response),
                  response => this.getOnError(response));

      let myComponent = new MyComponent();
      this.componentService.lookupComponents(myComponent)
                  .subscribe(
                  response => this.getMyComponentsOnSuccess(response),
                  response => this.getOnError(response));

      // Temporary Method calls for testing 


      let viewIssue = new ViewIssue();
      this.issueService.viewIssues(viewIssue)
                  .subscribe(
                  response => this.getViewIssuesOnSuccess(response),
                  response => this.getOnError(response));


}

 private getEffortsOnSuccess(response: Effort[]): void {
          console.log('effortSuccess:')
          this.efforts = response;
 }
 private getPrioritiesOnSuccess(response: Priority[]): void {
          console.log('prioritySuccess:')
          this.priorities = response;
 }

 private getProjectsOnSuccess(response: Project[]): void {
          console.log('projectySuccess:')
          this.projects = response;
 }

 private getUsersOnSuccess(response: User[]): void {
          console.log('userSuccess:')
          this.users = response;
 }

 private getIssueStatusesOnSuccess(response: IssueStatus[]): void {
          console.log('issueStatusSuccess:')
          this.issueStatuses = response; 
 }
 private getIssueTypesOnSuccess(response: IssueType[]): void {
          console.log('issueTypeSuccess:')
          this.issueTypes = response;
 }
 private getReleasesOnSuccess(response: Release[]): void {
           console.log('releaseSuccess:')
         this.releases = response;
 }
 private getMyComponentsOnSuccess(response: MyComponent[]): void {
         console.log('myComponentSuccess:');
         this.myComponents = response;
 }

 private getIssuesOnSuccess(response: Issue[]): void {
         //console.log('issueSuccess:',response);
         this.issues = response;
         let issue = this.issues[0];
         console.log('this.issue[0]Success:',issue);
 }

 private getViewIssuesOnSuccess(response: ViewIssue[]): void {
         this.viewIssues = response;
 }

  private getOnError(response): void {
      console.log('getOnError:');
  }

 public ngOnInit()  {
    this.users2 = [
        {"k_UserId": 1 , "logInName": "login", "firstName": "first" , "lastName": "last","position": "pres","sysCreateDateTime":new Date ('2016.03.22 3:00 PM'),"sysCreateUser":"sysadmin","sysCreateMethod": "setup", "sysRecordStatus": "A", "sysUpdateDateTime": new Date ('2016.03.22 3:00 PM'),"sysUpdateUser": "sysadmin", "sysUpdateMethod": "setup"},
        {"k_UserId": 2 , "logInName": "2login", "firstName": "2first" , "lastName": "2last","position": "2pres","sysCreateDateTime":new Date ('2016.03.22 3:00 PM'),"sysCreateUser":"sysadmin","sysCreateMethod": "setup", "sysRecordStatus": "A", "sysUpdateDateTime": new Date ('2016.03.22 3:00 PM'),"sysUpdateUser": "sysadmin", "sysUpdateMethod": "setup"}
        ];


    this.executeTheLookups();
/*
      let issue = new Issue();
      this.issueService.lookupIssues(issue)
                  .subscribe(
                  response => this.getIssuesOnSuccess(response),
                  response => this.getOnError(response));
    console.log('AferIssueService.issue',this.issue);
*/
    this.issue = new Issue();
    this.issue.description = 'Test';
    //this.issue = new Issue(7,'Add New Contractor Box','Use a contains search filter.  Use a contains search filter.  You should be very explicit when using all the information inside of this text area screen so that we get a very accurate picture of all the requirements.  Doing so will expedite this request and allow us to provide expedient and high quality response.',new Date('2016-11-17 00:00:00'),'2016-11-17',new Date('2016-11-17 00:00:00'),'2016-11-17','Recent Orders','OrderSearch','L3',1,2,5,12,0,7);
    //this.issue = new Issue()
    //console.log('IssueName',this.issue.issueName);
    //console.log('IssueRecordDate',this.issue.recordDate);


  }

  private close() {
    this.closeEditor.emit(false);
  }

  private onSubmit(updated:any) {
        // Should save changes to some backend API probably
        // but we'll just update the object in this demo instead
        this.close();
  }

}
