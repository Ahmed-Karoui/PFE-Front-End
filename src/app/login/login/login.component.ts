import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../register/user.service';
import {WebStorage} from '../../core/storage/web.storage';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public CustomControler;
  public subscription: Subscription;
  public Toggledata=true;
  form = new FormGroup({
    email: new FormControl('admin@dreamguys.in', [Validators.required]),
    password: new FormControl('123456', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private storage: WebStorage) {
    this.subscription = this.storage.Loginvalue.subscribe((data) => {
      if(data != 0){
        this.CustomControler = data;
      }
    });
  }

  ngOnInit() {
    this.storage.Checkuser();
  }

  submit() {
    this.storage.Login(this.form.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  iconLogle(){
    this.Toggledata = !this.Toggledata
  }

  //
  // constructor(private _router:Router, private _userService:UserService) {
  // }
  //
  // ngOnInit() {
  // }
  //
  // submit() {
  // }
  //
  // ngOnDestroy() {
  // }
  //
  // iconLogle(){
  //   this.Toggledata = !this.Toggledata
  // }
  //
  // // login(){
  // //   // console.log(JSON.stringify(this.loginForm.value));
  // //   this._userService.login(JSON.stringify(this.form.value))
  // //   .subscribe(
  // //     data=>{console.log(data);this._router.navigate(['/login/forgot']);} ,
  // //     error=>console.error(error)
  // //   )
  // }

}
