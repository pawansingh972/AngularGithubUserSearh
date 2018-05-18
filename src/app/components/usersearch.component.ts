import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GithubService } from '../services/github.service';

import 'rxjs/add/operator/map';

@Component({
      selector: 'app-usersearch',
      templateUrl: './usersearch.component.html',
      styleUrls: ['./usersearch.component.scss']
})
export class UserSearchComponent implements OnInit {
      searchText: string;
      searchResults: any;
      usersNotFound: boolean;
      constructor(private _githubService: GithubService) {
            this.usersNotFound = false;
      }

      ngOnInit() {

      }

      searchUsers() {
            if (this.searchText) {
                  this._githubService.updateSearchText(this.searchText);
                  this.getAllUsers();
            }
      }

      getAllUsers() {
            if (this.searchText) {
                  this._githubService.getAllUsers().subscribe(users => {
                        this.searchResults = users;
                        this.usersNotFound = false;
                        console.log(users);
                  },
                        (err) => {
                              console.log('err:' + err);
                              this.usersNotFound = true;
                        },
                        () => console.log('Done')
                  );
            }
      }
}
