<template>
  <div>
    <h3>{{ article.id }}</h3>
    <h4><router-link :to="{ name: 'detail', params:{ id: article.id } }">{{ article.title }}</router-link></h4>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: Object,
  }
}
</script>

<style>

</style>