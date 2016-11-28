import { Component } from '@angular/core';

@Component({
  selector: 'project-app',
  template: '<overview-page></overview-page>',
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class ProjectApp { }
