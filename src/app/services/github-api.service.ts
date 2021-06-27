import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {createHttpParams} from '../shared/function';
import {IGithubrepositories} from '../interfaces/githubrepositories';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private env = environment;

  constructor(
    private http: HttpClient
  ) {
  }

  public getGitHubApi({searchParam, per_page = 30, page = 1}:
                        { searchParam: string, per_page?: number, page?: number }
  ): Observable<IGithubrepositories> {

    const params = createHttpParams({
      searchParam,
      per_page,
      page
    });

    return this.http.get<IGithubrepositories>(`${this.env.githubApi + searchParam}`, {params});
  }
}
