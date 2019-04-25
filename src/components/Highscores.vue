<template>
  <div id="highscores">
    <p class="is-size-5">High Scores on This Machine</p>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th width="50%"></th>
          <th width="50%"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(highscore, index) in top5" :key="index">
          <td class="has-text-centered">{{ highscore.date }}</td>
          <td class="has-text-centered">{{ highscore.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Highscores',
    computed: {
      ...mapGetters(
        'highscores', [
          'top5'
          ]
      )
    }
  }
</script>

<style scoped lang="scss">
</style>
