import { Component } from '@angular/core';
import { setSmallGroupStorage } from 'src/app/helpers';
import { SmallGroup } from 'src/app/interfaces/smallGroup';
import { SmallGroupService } from 'src/app/services/small-group.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inputType: string = "password";
  inputValue: string = "";
  isLoading: boolean = false;
  logged: boolean = false;
  smallGroup: SmallGroup = {id:"", name:""};

  constructor(private smallGroupService: SmallGroupService) {}

  switchInputType() {
    if (this.inputType === "password")
      this.inputType = "text";
    else 
      this.inputType = "password";
  }

  async loginAttempt() {
    var result = await this.smallGroupService.checkSmallGroupLogin(this.inputValue);    

    if (result?.id && result?.name && setSmallGroupStorage(result))
    {
      this.smallGroup = result;      
      alert(`Logado com sucesso '${result.name}'`);
      this.isLoading = false;
      this.logged = true;
    } else {
      alert(`Célula não encontrada!`);
    }

    this.inputValue = "";
    this.inputType = "password";
  }

  enterPress(event: KeyboardEvent) {
    if (event.key == "Enter") {
      event.preventDefault();
      this.loginAttempt();
    }      
  }
}
