<template>
  <div class="p-4 bg-gray-100">
  
    <v-toolbar flat color="transparent">
      <h2 class="text-xl">Course List</h2>
      <v-spacer></v-spacer>
      <v-btn @click="dialog = true" dark small color="blue">เพิ่มคอร์ส</v-btn>
    </v-toolbar>

    <!-- <v-autocomplete :items="courses" item-text="name" item-value="id"></v-autocomplete> -->

    <div v-for="(course,index) in courses" :key="index">
      <course-card :name="course.name" :id="course.id" :teacher="course.teacher" :status="course.status" />
    </div>

    <v-dialog v-model="dialog" v-if="dialog" persistent>
      <v-card>
        <v-card-title class="bg-green-500 text-white">
          Addd Course
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" text><i class="em em-x" aria-role="presentation" aria-label="CROSS MARK"></i></v-btn>
        </v-card-title>
        <v-card-text>
          <form @submit.prevent="saveData()">
            <v-text-field required v-model="form.name" label="Name Course"></v-text-field>
            <v-text-field required v-model="form.teacher" label="Teacher"></v-text-field>
            <v-text-field required v-model="form.id" label="Course ID"></v-text-field>
            <v-select :items="status" item-text="name" item-value="value" v-model="form.status" label="Status"></v-select>
            <v-btn type="submit" color="success" block>save</v-btn>
          </form>
          <pre>{{form}}</pre>
        </v-card-text>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
  data: () =>{
    return ({
      dialog: false,
      form:{},
      status:[
        {name: "เต็ม", value: false},
        {name: "ว่าง", value: true},
      ],
      courses:[
        {name: "PHP Basic", id: "111", teacher:"A", status: true},
        {name: "PHP Laravel", id: "112", teacher:"B", status: true},
        {name: "Vue JS", id: "113", teacher:"C", status: false},
      ]
    })
  },
  methods:{
    async saveData(){
      // this.form.status = true
      this.courses.push(this.form)
      this.form = {}
      this.dialog = false
    }
  }
}
</script>

<style>

</style>