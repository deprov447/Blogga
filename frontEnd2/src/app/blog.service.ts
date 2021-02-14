import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(public http: HttpClient) {}

  fetchBlog(): Observable<any> {
    return this.http.get('http://localhost:8080/blogs');
  }

  signUp(data): Observable<any> {
    return this.http.post('http://localhost:8080/register', data);
  }
  login(data): Observable<any> {
    return this.http.post('http://localhost:8080/login',data);
  }
  logOut(): Observable<any> {
    return this.http.get('http://localhost:8080/logout');
  }
  fetchDetails(id): Observable<any> {
    return this.http.get(`http://localhost:8080/blogsdetails/${id}`);
  }
  checkLogin():Observable<any>{
    return this.http.get("http://localhost:8080/checkLogin")
  }
 
}
