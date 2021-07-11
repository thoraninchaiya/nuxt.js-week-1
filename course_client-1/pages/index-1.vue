<template>
  <div class="p-6">
    <div class="ml-6 text-xl">{{text}}</div>
    <input type="text" v-model="form.name" placeholder="name">
    <input type="text" v-model="form.surname" placeholder="surname">
    <button @click="showname">Test</button>
    <!-- <pre>{{form}}</pre> -->
  </div>
</template>

<script>
export default {
  data: () =>{
    return ({
      text:"hello",
      form:{}
    })
  },
  methods:{
    async setText(){
      this.text = "Hello world"
    },
    async showname(){
      alert(this.form.name + " " + this.form.surname)
    }
  },
  async created(){
    await this.setText();
  }
}
</script>

<style>

</style>