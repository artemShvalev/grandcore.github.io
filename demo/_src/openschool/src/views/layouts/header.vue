<template>

<div>
  <div>
    <div>
  <button v-on:click="edata()">Рандомизировать</button>
  <p>Результат: «{{ counter }}»</p>
  <h1 v-if="awesome">Vue восхитителен!</h1>
  <h1 v-else>О, нет 😢</h1>
</div>
  </div>
  <div id="example1">
      <button v-on:click="addarr()">Добавить</button>
    <ul>
    <li v-for="(item, index) in items" :key="item.message">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
</ul>
  </div>
  <div>
    <input v-model="fdata" placeholder="отредактируй меня">
<input type="checkbox" id="john" value="Джон" v-model="fdata">
<label for="john">Джон</label>
<input type="checkbox" id="mike" value="Майк" v-model="fdata">
<label for="mike">Майк</label>
<br>
<span>Отмеченные имена: {{ fdata }}</span>
  </div>
</div>

</template>



<script>
export default {
  name: 'Header',
  data() {
    return {
      fdata: [],
      awesome: false,
      counter: 0,
      parentMessage: 'Родитель',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  methods: {
    edata: function () {
      this.counter = Math.random();
    },
    addarr: function (){
      if (!this.items[2]) {
        return this.items.push({ message: 'Baz' })
      }
      
    }  
  },
  computed: {

  }
}
</script>


<style scoped>

</style>
