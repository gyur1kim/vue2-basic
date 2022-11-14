<template>
  <div>
    <h1>Articles</h1>
    <router-link :to="{ name: 'create' }">글 작성하기</router-link>
    <ArticleItem 
      v-for="article in articles" 
      :key=article.id
      :article="article"
    />
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'

export default {
  name: 'IndexView',
  components: {
    ArticleItem,
  },
  computed: {
    articles(){
      return this.$store.state.articles;
    }
  }
}
</script>

<style>

</style>