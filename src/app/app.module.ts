import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

//import { AppComponent } from './app.component';
import { ProjectApp } from './project_app.component';

import { OverviewPage }  from './overview-page/overview-page.component';
import { OverviewPanel } from './overview-panel/overview-panel.component';

import { ExpensesList } from './expenses-list/expenses-list.component';
import { ExpenseEditor } from './expense-editor/expense-editor.component';

import { SearchFilters } from './search-filters/search-filters.component';
import { SearchIssues } from './search-filters/search-issues.component';

import { IssuesList } from './issues-list/issues-list.component';
import { IssueAdd } from './issue-add/issue-add.component';



import { HttpService } from './services/http.service';

import { EffortService } from './services/effort.service';
import { PriorityService } from './services/priority.service';
import { ProjectService } from './services/project.service';

import { UserService } from './services/user.service';


import { IssueStatusService } from './services/issueStatus.service';
import { IssueTypeService } from './services/issueType.service';
import { ReleaseService } from './services/release.service';
import { ComponentService } from './services/component.service';
import { IssueService } from './services/issue.service';



@NgModule({
  declarations: [

    PolymerElement('paper-checkbox'),
    PolymerElement('paper-dialog'),
    PolymerElement('paper-icon-button'),
    PolymerElement('vaadin-combo-box'),
    PolymerElement('vaadin-date-picker'),
    PolymerElement('paper-textarea'),
    PolymerElement('paper-input'),
    PolymerElement('paper-toast'),
    PolymerElement('vaadin-grid'),
    //PolymerElement('paper-fab'),

    //AppComponent,
    ExpenseEditor,
    ExpensesList,
    IssueAdd,
    IssuesList,
    OverviewPage,
    OverviewPanel,
    ProjectApp,
    
    SearchFilters,
    SearchIssues,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    HttpService,
    ComponentService,
    EffortService,
    IssueService,
    IssueStatusService,
    IssueTypeService,
    PriorityService,
    ProjectService,
    ReleaseService,
    UserService,
  ],
  //entryComponents: [AppComponent],
  entryComponents: [ProjectApp],
  //bootstrap: [AppComponent],
  bootstrap: [ProjectApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
