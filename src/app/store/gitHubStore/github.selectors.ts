import {Selector} from '@ngxs/store';
import {GithubState} from './github.state';
import {GithubStateModel} from './github.state-model';

export class GithubSelectors {

  @Selector([GithubState])
  static getRepos(state: GithubStateModel): any {
    return state.repos.items;
  }

  @Selector([GithubState])
  static getAmountOfSearchRepos(state: GithubStateModel): number {
    return state.repos.total_count;
  }
}
