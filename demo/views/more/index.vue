<template>
  <div class="more-content">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <a :href="calcPath(item.path)" target="_blank">
          <h4>{{ item.title }}</h4>
          <img :src="item.img" :alt="item.title" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import examplesList from './config'
export default {
  data () {
    return {
      list: examplesList
    }
  },
  methods: {
    calcPath (path) {
      return `./#/examples/${path}`
    }
  }
}
</script>

<style lang="scss" scoped>
.more-content {
  padding: 20px;
  background-color: #f8fafe;
  height: 100%;
  ul {
    overflow: hidden;
    padding-bottom: 10px;
  }
  li {
    float: left;
    background-color: #fff;
    margin: 10px 5px;
    a {
      display: block;
      text-align: center;
      h4 {
        color: #293c55;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 10px;
        margin: 0;
        font-weight: normal;
        font-size: 16px;
        border-bottom: 1px solid #eee;
      }
      img {
        height: 280px;
        display: block;
      }
    }
  }
}
</style>
