<template>
  <div>
    <h1>Create</h1>
    <form @submit.prevent="createArticle">
      <input type="text" v-model="title"><br>
      <textarea cols="20" rows="10" v-model="content"></textarea><br>
      <input type="submit">
    </form>
    <router-link :to="{ name: 'index' }">돌아가기</router-link>
  </div>
</template>

<script>
export default {
  name: 'CreateView',
  data(){
    return{
      title: null,
      content: null,
    }
  },
  methods: {
    createArticle(){
      const title = this.title;
      const content = this.content;
      const payload = { title, content };
      this.$store.dispatch('createArticle', payload);

      this.$router.push({ name: 'index' })
      this.title = null;
      this.content = null;
    }
  }
}
</script>

<style>

</style>