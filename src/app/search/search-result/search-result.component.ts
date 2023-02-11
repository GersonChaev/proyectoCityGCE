import { Component, Input } from '@angular/core';
import { Search } from '../search.model';

interface BusRes {
  cities: Search[];
  criteria: string;
}

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  @Input() criteriaListenedFromExternalComponent: BusRes = {cities: [],criteria: ''};
  @Input() loading: boolean = false;



}
