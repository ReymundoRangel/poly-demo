import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'search-issues',
  templateUrl: './search-issues.component.html',
  styleUrls: ['./search-issues.component.css']
})
export class SearchIssues{
  filters: any = {};

  @Output() filtersChange = new EventEmitter();

  @Input() projects: string[];

  activeFilterCount = 0;

  private updateType(e: any) {
    const type = e.target.name;
    const toggle = e.target.checked;

    if (!this.filters.types) {
      this.filters.types = [];
    }

    if (toggle) {
      this.filters.types.push(type)
    } else {
      this.filters.types.splice(this.filters.types.indexOf(type), 1);
    }
  }

  private filtersChanged() {
    this.filtersChange.emit(this.filters);

    // Count active filters.
    this.activeFilterCount = ['after', 'before', 'project', 'min', 'max', 'types'].filter((field) => {
      return this.filters[field] && this.filters[field].length > 0;
    }).length;
  }
}
