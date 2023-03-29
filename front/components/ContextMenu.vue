<template>
  <div class="context-menu" v-if="show">
    <ul>
      <li v-if="role === 'admin'" @click="deleteArticle">Delete</li>
      <li @click="addComment">Add comment</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContextMenu',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: '',
    },
  },
  methods: {
    deleteArticle() {
    //   this.$emit('deleteArticle')
    },
    addComment() {
    //   this.$emit('addComment')
    },
  },
})
</script>

<style lang="scss" scoped>
.context-menu {
  position: absolute;
  bottom: 0;
  right: 0;
//   width: 100%;
//   height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      cursor: pointer;
    }
  }
}
</style>
