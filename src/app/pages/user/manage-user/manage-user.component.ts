import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user.interface';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})

export class ManageUserComponent implements OnInit {

  users: IUser[] = [];
  selectedUser: IUser;
  isModalVisible = false;
  constructor(private message: NzMessageService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUserList()
      .subscribe(res => {
        this.users = res.body;
        this.message.success(`Data loaded successfully`)
      }, err => {
        this.message.error(`Error: ${err.message} `)
      })
  }
  cancel(): void {

  }
  view(data: IUser): void {
    this.selectedUser = data;
    this.isModalVisible = true;
  }


  confirm(data): void {
    this.userService.deleteUser(data.id)
      .subscribe(res => {
        this.message.success(`User deleted successfully`)
        this.getUsers();
      }, err => {
        this.message.error(`Error: ${err.message} `)
      })
  }


  handleOk(): void {
    this.isModalVisible = false;
  }

  handleCancel(): void {
    this.isModalVisible = false;
  }

}
