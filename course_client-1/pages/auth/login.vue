<template>
  <div>
      <v-dialog v-model="dialog" scrollable fullscreen persistent :overlay="false">
          <v-card>
              <v-card-text>
                  <div class="flex flex-col justify-center items-center h-full">
                    <form action="" @submit.prevent="login()">
                        <v-text-field v-model="form.username" required type="text" outlined label="username"></v-text-field>
                        <v-text-field v-model="form.password" required type="password" outlined label="password"></v-text-field>
                        <v-btn type="submit" block color="success">Login</v-btn>
                    </form>
                  </div>
              </v-card-text>
          </v-card>
      </v-dialog>
  </div>
</template>

<script>
import {User} from '@/vuexes/user'
export default {
    data:()=>{
        return ({
            dialog: true,
            form:{}
        })
    },
    methods:{
        async login(){
            let logined = await User.login(this.form)
            if(logined != false){
                await User.setUser(logined)
                this.$router.push('/')
                location.reload
            }else{
                alert("can't login")
                // Swal.fire('error login')
            }
            console.log(logined)
        }
    }
}
</script>

<style>

</style>