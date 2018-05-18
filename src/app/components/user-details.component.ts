import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubService } from '../services/github.service';

import 'rxjs/add/operator/map';

@Component({
      selector: 'app-userdetails',
      templateUrl: './user-details.component.html',
      styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
      userName: string;
      userDetails: any;
      constructor(private _githubService: GithubService, private route: ActivatedRoute) {
      }

      ngOnInit() {
            this.userName = this.route.snapshot.paramMap.get('username');
            this.userDetails = {};
            this.getUserInformation();
            console.log(this.userName);
      }
      getUserInformation() {
            if (this.userName) {
                  this._githubService.getUser(this.userName).subscribe(user => {
                        this.userDetails.user = user;
                  },
                        (err) => {
                              console.log('err:' + err);
                        },
                        () => console.log('Done')
                  );

                  this._githubService.getRepos(this.userName).subscribe(repos => {
                        console.log(repos);
                        this.userDetails.repos = repos;
                  },
                        (err) => {
                              console.log('err:' + err);
                        },
                        () => console.log('Done')
                  );
            }
      }
}
