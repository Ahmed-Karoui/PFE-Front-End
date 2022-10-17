import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private baseURL = `http://localhost:3000/trainings`
  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<any> {
    return this.http.get(`${this.baseURL}/get-trainings`)
  }

  addProject(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/add-training`, data)
  }

  updateProject(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/update-training/${id}`, data)
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/delete-training/${id}`)
  }
}
