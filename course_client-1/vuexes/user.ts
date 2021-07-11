import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module({generateMutationSetters:true})

class UserModule extends VuexModule {

    public token:any = localStorage.getItem('token')
    public user:object = {}
    public profile:any = {
        "username":"admin",
        "first_name":"fname",
        "last_name":"lname",
        "admin":true
    }

    public async setUser(user:any){
        this.user = user
    }

    public async login(form:any){
        if(form.username == 'admin' && form.password == '1234'){
            localStorage.setItem('token','1234567890')
            return this.profile;
        }else{
            return false;
        }
    }

    public async loadUserLogined(){
        console.log(this.token)
        if(this.token){
            this.user = this.profile
        }
    }
    
}



import store from '@/vuexes'
export const User = new UserModule({store,name:"User"})