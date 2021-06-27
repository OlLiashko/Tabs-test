import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IGithubrepositories} from '../interfaces/githubrepositories';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

class ErrorService {
}

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private env = environment;

  constructor(
    private http: HttpClient
  ) {
  }

  public getGitHubApi(searchParam: string): Observable<any> {
    return this.http.get(`${this.env.githubApi + searchParam}`);
  }
}
