import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Effort }       from '../models/effort.model';
import { Priority }     from '../models/priority.model';
import { Project }      from '../models/project.model';
import { User }         from '../models/user.model';
import { IssueStatus }  from '../models/issueStatus.model';
import { IssueType }    from '../models/issueType.model';
import { Release }      from '../models/release.model';
import { MyComponent }  from '../models/component.model';
import { Issue }        from '../models/issue.model';
import { ViewIssue }    from '../models/viewIssue.model';

import { EffortService }        from '../services/effort.service';
import { PriorityService }      from '../services/priority.service';
import { ProjectService }       from '../services/project.service';
import { UserService }          from '../services/user.service';
import { IssueStatusService }   from '../services/issueStatus.service';
import { IssueTypeService }     from '../services/issueType.service';
import { ReleaseService }       from '../services/release.service';
import { ComponentService }     from '../services/component.service';
import { IssueService }         from '../services/issue.service';

@Component({
  selector: 'issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.css']

})

export class IssueAdd implements OnInit {

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

  effortSelectedItem: Object = {};
  prioritySelectedItem: Object = {};
  projectSelectedItem: Object = {};
  userSelectedItem: Object = {};
  issueStatusSelectedItem: Object = {};
  issueTypeSelectedItem: Object = {};
  releaseSelectedItem: Object = {};
  myComponent1SelectedItem: Object = {};
  myComponent2SelectedItem: Object = {};
  myComponent3SelectedItem: Object = {};
  myComponent4SelectedItem: Object = {};
  myComponent5SelectedItem: Object = {};
  issueSelectedItem: Object = {};

  efforts: Effort[];
  priorities: Priority[];
  projects: Project[];
  users: User[];
  issueStatuses: IssueStatus[];
  issueTypes: IssueType[];
  releases: Release[];
  myComponent1s: MyComponent[];
  myComponent2s: MyComponent[];
  myComponent3s: MyComponent[];
  myComponent4s: MyComponent[];
  myComponent5s: MyComponent[];
  issues: Issue[];
  viewIssues: ViewIssue[];

  private executeTheLookups(): void {
      console.log('AppComponent:ExecuteLookups:')

      let effort = new Effort();
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

      let myComponent1 = new MyComponent();
      this.componentService.lookupComponents(myComponent1)
                  .subscribe(
                  response => this.getMyComponent1sOnSuccess(response),
                  response => this.getOnError(response));
      let myComponent2 = new MyComponent();
      this.componentService.lookupComponents(myComponent2)
                  .subscribe(
                  response => this.getMyComponent2sOnSuccess(response),
                  response => this.getOnError(response));
      let myComponent3 = new MyComponent();
      this.componentService.lookupComponents(myComponent3)
                  .subscribe(
                  response => this.getMyComponent3sOnSuccess(response),
                  response => this.getOnError(response));
      let myComponent4 = new MyComponent();
      this.componentService.lookupComponents(myComponent4)
                  .subscribe(
                  response => this.getMyComponent4sOnSuccess(response),
                  response => this.getOnError(response));
      let myComponent5 = new MyComponent();
      this.componentService.lookupComponents(myComponent5)
                  .subscribe(
                  response => this.getMyComponent5sOnSuccess(response),
                  response => this.getOnError(response));
}

 private getEffortsOnSuccess(response: Effort[]): void {
//          console.log('effortSuccess:')
          this.efforts = response;
 }
 private getPrioritiesOnSuccess(response: Priority[]): void {
//          console.log('prioritySuccess:')
          this.priorities = response;
 }

 private getProjectsOnSuccess(response: Project[]): void {
//          console.log('projectySuccess:')
          this.projects = response;
 }

 private getUsersOnSuccess(response: User[]): void {
//          console.log('userSuccess:')
          this.users = response;
 }

 private getIssueStatusesOnSuccess(response: IssueStatus[]): void {
//          console.log('issueStatusSuccess:')
          this.issueStatuses = response; 
 }
 private getIssueTypesOnSuccess(response: IssueType[]): void {
//          console.log('issueTypeSuccess:')
          this.issueTypes = response;
 }
 private getReleasesOnSuccess(response: Release[]): void {
//           console.log('releaseSuccess:')
         this.releases = response;
 }
 private getMyComponent1sOnSuccess(response: MyComponent[]): void {
//         console.log('myComponentSuccess:');
         this.myComponent1s = response;
 }
 private getMyComponent2sOnSuccess(response: MyComponent[]): void {
//         console.log('myComponent2Success:');
         this.myComponent2s = response;
 }
 private getMyComponent3sOnSuccess(response: MyComponent[]): void {
//         console.log('myComponent3Success:');
         this.myComponent3s = response;
 }
 private getMyComponent4sOnSuccess(response: MyComponent[]): void {
//         console.log('myComponent4Success:');
         this.myComponent4s = response;
 }
 private getMyComponent5sOnSuccess(response: MyComponent[]): void {
//         console.log('myComponent3Success:');
         this.myComponent5s = response;
 }

  private getOnError(response): void {
      console.log('getOnError:');
  }

 public ngOnInit()  {
    this.executeTheLookups();
    this.issue = new Issue();
    this.issue.recordDate =  "2016-11-30";
    this.issue.k_ProjectId = 1;
    this.issue.k_IssueStatusId = 1
    this.issue.k_IssueTypeId = 1
  }

  private close() {
    this.closeEditor.emit(false);
  }

  private onSubmit(updated: Issue) {
      //console.log('save:updated',updated)
      console.log('save:issue',this.issue)

/*
      let issue = new Issue();

      issue.url = 'this is a new URL';
      console.log('save:issue',issue)

      issue.issueName = updated.issueName;
      issue.description = updated.description;
      issue.recordDate = updated.recordDate;
      issue.assignDate = updated.assignDate;
      issue.targetDate = updated.targetDate;
      issue.doneDate = updated.doneDate;
      issue.CompleteDate = updated.CompleteDate;
      issue.level1Name = updated.level1Name;
      issue.level2Name = updated.level2Name;
      issue.level3Name = updated.level3Name;
      issue.level4Name = updated.level4Name;
      issue.level5Name = updated.level5Name;
      issue.gotoLink = updated.gotoLink;
      issue.k_EffortId = updated.k_EffortId;
      issue.k_IssueStatusId = updated.k_IssueStatusId;
      issue.k_IssueTypeId = updated.k_IssueTypeId;
      issue.k_PriorityId = updated.k_PriorityId;
      issue.k_ProjectId = updated.k_ProjectId;
      issue.k_ReleaseId = updated.k_ReleaseId;
      issue.k_UserId = updated.k_UserId;
*/

        // Should save changes to some backend API probably
        // but we'll just update the object in this demo instead
        this.issueService.updateIssue(this.issue)
          .subscribe(
            response => this.updateIssueOnSuccess(response),
            response => this.updateIssueOnError(response));
        this.close();
  }

  private updateIssueOnSuccess(response: Issue){
    if (this.issue.k_IssueId == 0) {
      this.issue.k_IssueId = response.k_IssueId;
    }
  }

  private updateIssueOnError(response: Issue) {
    console.log('Update Error Occured')
  }

}
