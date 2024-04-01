import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aranzman } from '../models/aranzman';
import { ARANZMAN_AGENCIJA_URL, ARANZMAN_URL } from '../../assets/constants';



@Injectable({
  providedIn: 'root'
})
export class AranzmanService {

  constructor(private httpClient: HttpClient) { }

  public getAranzmanByTuristickaAgencija(idAgencije: number): Observable<any> {
    return this.httpClient.get(`${ARANZMAN_AGENCIJA_URL}/${idAgencije}`)
  }

  public getAllAranzmans(): Observable<any> {
    return this.httpClient.get(`${ARANZMAN_URL}`);
  }

  public addAranzman(aranzman: Aranzman): Observable<any> {
    return this.httpClient.post(`${ARANZMAN_URL}`, aranzman);
  }

  public updateAranzman(aranzman: Aranzman): Observable<any> {
    return this.httpClient.put(`${ARANZMAN_URL}/${aranzman.id}`, aranzman);
  }

  public deleteAranzman(id: number): Observable<any> {
    return this.httpClient.delete(`${ARANZMAN_URL}/${id}`);
  }
}
