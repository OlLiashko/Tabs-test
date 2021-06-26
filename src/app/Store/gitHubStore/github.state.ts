import {State} from '@ngxs/store';
import {GithubStateModel} from './github.state-model';
import {Injectable} from '@angular/core';

@State<GithubStateModel>({
  name: 'githubState',
  defaults: {}
})
@Injectable()
export class GithubState {
}
