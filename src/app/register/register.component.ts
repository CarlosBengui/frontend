import {Component} from '@angular/core'
import {authenticationService, TokenPayload} from '../authentication.service'
import {Router} from '@angular/router'
import { last } from 'rxjs/operators'

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent{
    credentials: TokenPayload = {
        id:0,
        first_name: '',
        last_name: '',
        email:'',
        password: ''
    }
    constructor(private auth: authenticationService, private router: Router){}
    register(){
        this.auth.register(this.credentials).subscribe(
            ()=>{
                this.router.navigateByUrl('/login')
            },
            err => {
                console.error(err)
            }
        )
    }
}