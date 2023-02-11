import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent {

  @Output() criteriaSelected = new EventEmitter();

  onCriteriaSelect(criteria: number) {
    this.criteriaSelected.emit(criteria);
  }

}
