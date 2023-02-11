import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Search } from './search.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiKey:string = environment.apiKey;
  headers = new HttpHeaders();
  header = this.headers.set('X-Api-Key', this.apiKey);

  constructor(private http:HttpClient) {}
  private busqueda: Search[] = [];
  private busquedaResults = new Subject<Search[]>();
  public loading = new BehaviorSubject<boolean>(true);

  getCityPeru(){
    this.loading.next(true)
    this.http.get<Search[]>("https://api.api-ninjas.com/v1/city?country=PE", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }

  getCityEEUU(){
    this.loading.next(true)
    this.http.get<Search[]>("https://api.api-ninjas.com/v1/city?country=US", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }

  getCityVenezuela(){
    this.loading.next(true)
    this.http.get<Search[]>("https://api.api-ninjas.com/v1/city?country=VE", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }

  getCityChile(){
    this.loading.next(true)
    this.http.get<Search[]>("https://api.api-ninjas.com/v1/city?country=CL", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }

  getCityColombia(){
    this.loading.next(true)
    this.http.get<Search[]>("https://api.api-ninjas.com/v1/city?country=CO", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }

  getCityFrancia(){
    this.loading.next(true)
    this.http.get<Search[]>("https://api.api-ninjas.com/v1/city?country=FR", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }

  getBusquedaObservable(){
    return this.busquedaResults.asObservable();
  }

  getLoading(){
    return this.loading;
  }

}
