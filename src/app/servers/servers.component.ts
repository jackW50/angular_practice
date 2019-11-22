import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  allowUsernameClick = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  username = '';
  usernameStatus = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created: ' + this.serverName;
  }

  onUsernameInsert() {
    console.log('onUsernameInsert was called.')
    if(this.username !== '') {
      this.allowUsernameClick = true;
    } else {
      this.allowUsernameClick = false;
    }
  }

  onUsernameClick() {
    this.usernameStatus = `Hi, ${this.username} ;-)`;
    this.username = '';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
