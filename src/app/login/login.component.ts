import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  formData: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.formData = new FormGroup({
      username: new FormControl('admin'),
      password: new FormControl('admin'),
    });
  }

  onClickSubmit(data: any) {
    console.log('onSubmit login fired');
    this.username = data.username;
    this.password = data.password;

    console.log('Login page:' + this.username);
    console.log('Login page:' + this.password);

    this.authService.login(this.username, this.password).subscribe((data) => {
      console.log('Is login success: ' + data);
      if (data) this.router.navigate(['/expenses']);
    });
  }
}
