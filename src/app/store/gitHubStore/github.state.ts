import {Action, State, StateContext, Store} from '@ngxs/store';
import {GithubStateModel} from './github.state-model';
import {Injectable} from '@angular/core';
import {GetAmountOFSearchRepos, SearchRepos} from './github.actions';
import {Observable} from 'rxjs';
import {GithubApiService} from '../../services/github-api.service';
import {map, tap} from 'rxjs/operators';

@State<GithubStateModel>({
  name: 'githubState',
  defaults: {
    searchParam: '',
    repos: null,
    totalCount: 0
  }
})
@Injectable()
export class GithubState {

  constructor(
    private store: Store,
    private githubService: GithubApiService
  ) {
  }

  @Action(SearchRepos)
  searchRepos(ctx: StateContext<GithubStateModel>, {searchParam}: SearchRepos): Observable<any> {
    const state = ctx.getState();
    ctx.setState({...state, searchParam});

    return this.githubService.getGitHubApi(searchParam)
      .pipe(
        map((repos) => ctx.setState({...state, repos}))
      );
  }

  @Action(GetAmountOFSearchRepos)
  getAmountOFSearchRepos(ctx: StateContext<GithubStateModel>): void {
    const state = ctx.getState();
    ctx.patchState({...state, totalCount: state.repos.total_count});
  }
}
