<template>
  <div id="title-howto-about">
    <i class="fas fa-dice fancy-title-dice has-text-info"></i>
    <div class="fancy-title has-text-info">Vuezee</div>
    <br>
    <a class="button is-text" @click="show_howto_modal = true">How To</a>
    <a class="button is-text" @click="show_about_modal = true">About</a>
    <div class="modal" :class="[{ 'is-active': show_howto_modal }]">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <div class="content has-text-left">
            <p>How To Play Vuezee</p>
              <p>
                <ol>
                  <li>Click the roll button (spinning dice) to begin your first roll.</li>
                  <li>Click any dice you want to keep.</li>
                  <li>You have 3 rolls to try and make scoreable combos.</li>
                  <li>Click the line in the scorecard you wish to score your dice.</li>
                  <li>Repeat until you've completed the scorecard.</li>
                </ol>
              </p>
          </div>
          <button class="button is-info" @click="show_howto_modal = false">Close</button>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="show_howto_modal = false"></button>
    </div>
    <div class="modal" :class="[{ 'is-active': show_about_modal }]">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <div class="content">
            <p>Vuezee is a Yahtzee clone created with Vue.js, Bulma, and FontAwesome.</p>
            <hr>
            <p>Created by Josh Burks</p>
            <a href="https://github.com/dotnofoolin/vuezee" target="_blank">
              https://github.com/dotnofoolin/vuezee
            </a>
          </div>
          <button class="button is-info" @click="show_about_modal = false">Close</button>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="show_about_modal = false"></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TitleHowtoAbout',
    data () {
      return {
        show_about_modal: false,
        show_howto_modal: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .fancy-title-dice {
    font-size: 5em;
  }

  .fancy-title {
    font-family: 'Pacifico', cursive;
    font-size: 6em;
    transform-origin: center;
    transform: rotate(-15deg);
  }
</style>
