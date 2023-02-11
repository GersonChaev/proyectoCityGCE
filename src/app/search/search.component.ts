import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Search } from './search.model';
import { SearchService } from './search.service';

interface BusRes {
  cities: Search[];
  criteria: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnDestroy{
  criteria: string ='';
  loading: boolean = false;
  criteriaSelected: BusRes = {cities: [],criteria: ''};
  private subResponse: Subscription;
  private loadingResponse: Subscription = Subscription.EMPTY;
  constructor(public busquedaService: SearchService){
    this.subResponse = Subscription.EMPTY;
  }

  onCriteriaSelectedFromChild(criteria: number){
    switch (criteria) {
      case 0:
        this.criteria='';
        this.criteriaSelected = {cities: [],criteria: this.criteria};
        break;
      case 1:
        this.criteria='Perú';
        this.busquedaService.getCityPeru();
        break;
      case 2:
        this.criteria='EE.UU';
        this.busquedaService.getCityEEUU();
        break;
      case 3:
        this.criteria='Venezuela';
        this.busquedaService.getCityVenezuela();
        break;
      case 4:
        this.criteria='Chile';
        this.busquedaService.getCityChile();
        break;
      case 5:
        this.criteria='Colombia';
        this.busquedaService.getCityColombia();
        break;
      case 6:
          this.criteria='Francia';
          this.busquedaService.getCityFrancia();
          break;
      default:
        break;
    }
    this.loadingResponse = this.busquedaService.getLoading().subscribe(r=>{
      this.loading=r;
    })
    this.subResponse = this.busquedaService.getBusquedaObservable().subscribe((r: Search[])=>{
      this.criteriaSelected = {cities: r, criteria: this.criteria};
    })
  }

  ngOnDestroy(): void {
    console.log('Dejando Componente')
    this.subResponse.unsubscribe();
    this.loadingResponse.unsubscribe();
  }
}


