import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from './../../../interface/user.interface';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService) { }

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });

  }

  submitForm(): void {
    for (const i in this.userForm.controls) {
      this.userForm.controls[i].markAsDirty();
      this.userForm.controls[i].updateValueAndValidity();
    }
    if (this.userForm.valid) {
      let user: IUser = {
        'name': this.userForm.value.fullName,
        'password': this.userForm.value.password,
        'email': this.userForm.value.email
      };


      this.userService.createUser(user)
        .subscribe(res => {
          this.message.success(`User : ${res.body.name} successfully created`)
        }, err => {
          this.message.error(`Error: ${err.message} `)
        })
    }

  }

}
