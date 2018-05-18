import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubService {
    private clientId = '60b9f23dedffbdfc476c';
    private clientSecret = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';
    private searchText: string;
    private searchResults: any;
    constructor(private _http: Http) {
        console.log('Github sservice is ready');
        this.searchText = '';
    }

    getAllUsers() {
      if (this.searchText) {
            return this._http.get('https://api.github.com/search/users?q=' + this.searchText
            + '&client_id=' + this.clientId
            + '&client_secret=' + this.clientSecret)
            .map(res => res.json())
            .catch(this.handleError);
      }
    }

    updateSearchText(searchText: string) {
        this.searchText  = searchText;
    }

    getUser(userName) {
        if (userName) {
            return this._http.get('https://api.github.com/users/' + userName
            + '?client_id=' + this.clientId
            + '&client_secret=' + this.clientSecret)
            .map(res => res.json())
            .catch(this.handleError);
        }
    }

    getRepos(userName) {
        if (userName) {
            return this._http.get('https://api.github.com/users/' + userName
                + '/repos?client_id=' + this.clientId
                + '&client_secret=' + this.clientSecret)
                .map(res => res.json())
                .catch(this.handleError);
        }
    }

    private handleError(error: any) {
        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }


}
