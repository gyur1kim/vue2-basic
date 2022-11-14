<template>
  <div>
    <h1>Detail</h1>
    <h3>{{ article.id }} : {{ article.title }}</h3>
    <p>{{ article.content }}</p>
    <p>{{ article.createdAt }}</p>
    <br>
    <router-link :to="{ name: 'index' }">[뒤로가기]</router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  data(){
    return{
      article: null,
    }
  },
  computed: {
    articles(){
      return this.$store.state.articles;
    }
  },  
  methods: {
    getArticleById(id){
      for(const article of this.articles){
        if (article.id === Number(id)){
          this.article = article;
          break;
        }
      }
    }
  },
  created(){
    this.getArticleById(this.$route.params.id);
  }
}
</script>

<style>

</style>