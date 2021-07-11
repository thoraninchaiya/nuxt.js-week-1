<template>
  <div :class="className + statusColor ">
    <h2><b class="uppercase">Course</b> : {{name}}</h2>
    <h2><b class="uppercase">Subject ID</b> : {{id}}</h2>
    <h3><b class="uppercase">Teacher</b> : {{teacher}}</h3>
    <h3><b>สถานะ</b>:
        <span v-if="status" class="text-green-500">ลงทะเบียนได้</span>
        <span v-else class="text-red-500">ไม่สามารถลงทะเบียนได้</span>
    </h3>
  </div>
</template>

<script>
export default {
    data: ()=>{
        return({
            className: 'rounded-lg shadow-md p-4 m-6 bg-white border-b-4 ',
        })
    },
    props:{
        name: {default: "Unknow name"},
        id: {default: "Unknow subject id"},
        teacher: {default: "Unknow teacher"},
        status: {default: true}
    },
    computed:{
        statusColor(){
            return (this.status)?'border-green-500':'border-red-500'
        }
    }
}
</script>

<style>

</style>