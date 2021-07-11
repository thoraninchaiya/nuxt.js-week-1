<template>
  <div>
    <v-app>
      <v-main>
        <Core-NavBar />
        <Nuxt />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import {User} from '@/vuexes/user'
export default {
  data:()=>{
    return ({

    })
  },
  async created(){
    await User.loadUserLogined();
  }
}
</script>

<style>

</style>