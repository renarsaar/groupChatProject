import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-set-up-profile',
  templateUrl: './set-up-profile.component.html',
  styleUrls: ['./set-up-profile.component.css']
})
export class SetUpProfileComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router) { }

  ngOnInit(): void {
    try {
      //@ts-ignore
      let user = JSON.parse(localStorage.getItem('user'));

      if (!user || user.userName !== null) {
        this.router.navigate(['group-chat', user.userName]);
      }
    } catch (error) { }
  }

  private validateUser(): boolean {
    if (
      this.user.chatColor === null ||
      this.user.location == null ||
      this.user.userName == null
    ) {
      return false;
    }

    return true;
  }

  processUserInfo(): void {
    if (!this.validateUser()) {
      alert("Please provide all info");
      return;
    };

    localStorage.setItem("user", JSON.stringify(this.user));

    this.router.navigate(['group-chat', this.user.userName]);
  }
}
