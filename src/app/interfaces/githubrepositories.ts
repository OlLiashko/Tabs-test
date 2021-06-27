export interface IGithubrepositories {
  total_count: number;
  incomplete_results: boolean;
  items: IRepoItem[];
}

interface IRepoItem {
  login: string;
  id: number;
  avatar_url: string;
}
