import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IGithubrepositories } from '../interfaces/githubrepositories';
import {environment} from '../../environments/environment';

class ErrorService {
}

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private env = environment;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  // public getGitHubApi(): Observable<IGithubrepositories> {
  //   return this.http.get<IGithubrepositories>()
  // }
}
