import { Component, ViewContainerRef } from '@angular/core';
import { User } from './account.user';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  templateUrl: './account.login.html',
  styleUrls: ['./account.style.css'],
})
export class AccountLogin {
  private loginSub: any;

  public title: string = 'Account Login';
  public login: string;

  public user: User = {
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    token: ""
  };

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastsManager,
    private viewContainer: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(viewContainer);
  }

  ngOnInit() {
    if (localStorage.getItem("username") == null) {
      this.login = "Login";
    } else {
      this.router.navigate(['/menu']);
    }
  }

  ngOnDestroy() {
    if (this.loginSub != null) this.loginSub.unsubscribe();
  }

  public btnLoginClick(): void {
    let btnLogin: Element = document.getElementById("btnLogin");

    btnLogin.setAttribute("disabled", "true");
    btnLogin.innerHTML = "<i class='fa fa-sign-in'></i> Logging in...";

    let inpUsername: Element = document.getElementById("username");
    let inpPassword: Element = document.getElementById("password");

    inpUsername.setAttribute("disabled", "true");
    inpPassword.setAttribute("disabled", "true");

    this.accountService.login(this.user.username, this.user.password);
    this.loginSub = this.accountService.loginObservable.subscribe(
      data => {
        if (data == 1) {
          this.toastr.success("Login successful.");
          setTimeout(() => {
            this.router.navigate(['/menu']);
          }, 1000);
        } else if (data == 0) {
          this.toastr.error("Login failed.");

          btnLogin.removeAttribute("disabled");
          btnLogin.innerHTML = "<i class='fa fa-sign-in'></i> Login";

          inpUsername.removeAttribute("disabled");
          inpPassword.removeAttribute("disabled");
        }

        if (this.loginSub != null) this.loginSub.unsubscribe();
      }
    );
  }

  public loginClick(): void {
    if (localStorage.getItem("username") == null) {
      this.router.navigate(['/account/login']);
    } else {
      localStorage.removeItem('access_token');
      localStorage.removeItem('expires_in');
      localStorage.removeItem('token_type');
      localStorage.removeItem('username');

      this.login = "Login";
    }
  }

}