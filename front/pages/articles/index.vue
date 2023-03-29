<template>
  <div class="section">
    <div class="section__container">
      <h1>Liste des articles</h1>
      <ul>
        <li v-for="article in articles" :key="article.id">
          <NuxtLink :to="`/articles/${article.id}`">
            <div
              class="section__container-item"
              @contextmenu="openMenu('context-menu-' + article.id)"
            >
              <div v-bind:class="'context-menu context-menu-' + article.id">
                <ul>
                  <li v-if="role === 'admin'" @click="deleteArticle">Delete</li>
                  <li @click="addComment">Add comment</li>
                </ul>
              </div>
              <h2>{{ article.title }}</h2>
              <p>{{ article.author }}</p>
              <p>{{ article.content }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Articles',
  transition: 'fade',
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
  data() {
    return {
      articles: [],
    }
  },
  async asyncData(ctx) {
    const findAll = await ctx.app.$services.articles.findAll()

    return {
      articles: findAll.data.data,
    }
  },
  methods: {
    openMenu(id: string) {
      const contextMenu = document.querySelector(`.${id}`)

      if (contextMenu) contextMenu.classList.toggle('active')
    },

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
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5rem 0 0 0;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: min(96%, 1200px);
    margin-inline: auto;

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (min-width: 1280px) {
        gap: 4rem;
      }

      li {
        a {
          color: #000;
          text-decoration: none;

          .section__container-item {
            display: flex;
            position: relative;
            flex-direction: column;
            gap: 1rem;
            box-shadow: 0px 0px 50px -15px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            border-radius: 2rem;

            .context-menu {
              position: absolute;
              bottom: -1rem;
              right: -1rem;
              z-index: 1000;
              display: flex;
              justify-content: center;
              align-items: center;
              opacity: 0;
              pointer-events: none;

              &.active {
                opacity: 1;
                pointer-events: all;
              }

              ul {
                list-style: none;
                padding: 0;
                margin: 0;
                background-color: white;
                border-radius: 5px;
                box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                li {
                  cursor: pointer;
                }
              }
            }

            h2 {
              font-size: 1.5rem;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
