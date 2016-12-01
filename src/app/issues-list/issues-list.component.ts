import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { ViewIssue }    from '../models/viewIssue.model';
import { Project }    from '../models/project.model';

import { IssueService } from '../services/issue.service';
import { ProjectService } from '../services/project.service';


declare var HTMLImports: any;
declare var Polymer: any;
declare var moment: any;
declare var accounting: any;

@Component({
    selector: 'issues-list',
    templateUrl: './issues-list.component.html',
    styleUrls:  ['./issues-list.component.css']
})

export class IssuesList {
  @Output() editIssueEvt = new EventEmitter();
  @Output() addIssueEvt = new EventEmitter();

  @ViewChild('grid') grid: any;
  @ViewChild('toast') toast: any;

  constructor(
     private issueService: IssueService,
     private projectService: ProjectService
    ){
  }

  viewIssues: ViewIssue[] = [];
  private projects: Project[];

  filters: Object;
  sortOrder: Object;


  ngAfterViewInit() {
    console.log('ngAfterViewInit:')
    this.refreshItems();

    this.grid.nativeElement.then(() => {
      this.gridReady(this.grid.nativeElement);
    });

  }

  gridReady(grid: any) {
    grid.cellClassGenerator = (cell: any) => {
      if (cell.index == 3) {
        return cell.data.toUpperCase();
      }
    };

    grid.addEventListener('sort-order-changed', (e: any) => {
      var sortBy = grid.columns[e.detail.value[0].column].name;
      this.sortOrder = { sortBy: sortBy, direction: e.detail.value[0].direction };

      // sort order is fired for the first time before grid has been initialized properly,
      // so scrolling will crash.
      try {
        grid.scrollToStart(0);
        grid.refreshItems();
      } catch (err) {

      }
    });

  };

  //ngOnInit() {
  //  console.log("NgOnInit Called!");
    //this.getIssues();
  //}

  getIssues()   {
      let viewIssue =  new ViewIssue();
      this.issueService.viewIssues(viewIssue)
                  .subscribe(
                  response =>  this.getViewIssuesOnSuccess(response) ,
                  response => this.getOnError(response));
  }
  
  getViewIssuesOnSuccess(response: ViewIssue[]): void {
    this.viewIssues = response;
  }

  getProjects()   {
      let project =  new Project();
      this.projectService.lookupProjects(project)
                  .subscribe(
                  response =>  this.getProjectsOnSuccess(response) ,
                  response => this.getOnError(response));
  }
  
  getProjectsOnSuccess(response: Project[]): void {
    this.projects = response;
  }


  private getOnError(response): void {
      console.log('getOnError:');
  }

 private addSelected(grid: any) {
    console.log("addSelected");
    var selection = grid.selection.selected();
    grid.selection.clear();
    grid.getItem(1, (err: any, item: any) => {
      this.addIssueEvt.emit();
    });
  }

  private selected(grid: any) {
    var selection = grid.selection.selected();
    if (selection.length === 1) {
      grid.selection.clear();
      console.log("selectedGrid",selection[0]);
      grid.getItem(selection[0], (err: any, item: any) => {
        //this.editExpense.emit(item);
        this.editIssueEvt.emit(item);
      });
    }
  }

  private onFiltersChanged(grid: any) {
    if (Polymer && Polymer.isInstance(grid)) {
      grid.scrollToStart(0);
      grid.refreshItems();
    }
  }

 refreshItems() {

    this.getIssues();
    this.getProjects();

    // This will make grid update it's items (since the datasource changes)
    //this.expenses = this.expenses.bind(this);
    //this.viewIssues = this.viewIssues.bind(this);
    // Update merchant list
    /*
    (<any>window).getJSON('./api/merchants', (data: any) => {
      this.merchants = data.sort();
    });
    */

  }

}
