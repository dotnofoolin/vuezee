<template>
  <div id="game" class="has-background-info">
    <div class="container">
      <br>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-4 is-vertical">
          <div class="tile is-child box">
            <i class="fas fa-dice fancy-title-dice"></i>
            <div class="fancy-title">Vuezee</div>
            <br>
            <a class="button is-text" @click="show_howto_modal = true">How To</a>
            <a class="button is-text" @click="show_about_modal = true">About</a>
          </div>
          <div class="tile is-child box">
            <p class="is-size-5">{{ rollText() }}</p>
            <div class="is-marginless">
              <span v-for="dice in all_dice" :key="dice.dice_id">
                <span class="dice-size is-size-1-mobile">
                  <i class="fas pointed-cursor" :class="[{ 'has-text-primary': dice.selected }, diceClass(dice.value)]" @click="toggleSelected(dice)"></i>
                </span>
              </span>
            </div>
            <p>
              <button class="button is-primary is-large" @click="rollAll()" :disabled="rollLimitReached() || gameComplete()">
                <i class="fas fa-dice" :class="[{ 'fa-spin': !rollLimitReached() && !gameComplete() }]"></i>
              </button>
            </p>
          </div>
          <div class="tile is-child box">
            <p class="is-size-5">High Scores on This Machine</p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <td class="section-title" width="20%">Upper Section</td>
                  <td class="section-title" width="60%">How To Score</td>
                  <td class="section-title" width="20%">Score</td>
                </tr>
              </thead>
              <tbody>
                <tr class="pointed-cursor" v-for="line in scorecard.upper_section" :key="line.label" @click="scoreRoll(line)">
                  <td>{{ line.label }}</td>
                  <td>{{ line.howto }}</td>
                  <td>{{ line.score }} <i class="fas fa-check" v-if="line.scored"></i></td>
                </tr>
              </tbody>
            </table>
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <td class="section-title" width="20%">Lower Section</td>
                  <td class="section-title" width="60%">How To Score</td>
                  <td class="section-title" width="20%">Score</td>
                </tr>
              </thead>
              <tbody>
                <tr class="pointed-cursor" v-for="line in scorecard.lower_section" :key="line.label" @click="scoreRoll(line)">
                  <td>{{ line.label }}</td>
                  <td>{{ line.howto }}</td>
                  <td>{{ line.score }} <i class="fas fa-check" v-if="line.scored"></i></td>
                </tr>
              </tbody>
            </table>
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <td class="section-title" width="20%">Totals</td>
                  <td class="section-title" width="60%"></td>
                  <td class="section-title" width="20%">Score</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">Upper Section Total</td>
                  <td>{{ scorecard.upper_total }}</td>
                </tr>
                <tr>
                  <td colspan="2">Lower Section Total</td>
                  <td>{{ scorecard.lower_total }}</td>
                </tr>
                <tr>
                  <td colspan="2">Grand Total</td>
                  <td>{{ scorecard.grand_total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" :class="[{ 'is-active': show_howto_modal }]">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <div class="content has-text-left">
             <p>Howto</p>
          </div>
          <button class="button" @click="show_howto_modal = false">Close</button>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="show_howto_modal = false"></button>
    </div>
    <div class="modal" :class="[{ 'is-active': show_about_modal }]">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <div class="content has-text-left">
             <p>About</p>
          </div>
          <button class="button" @click="show_about_modal = false">Close</button>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="show_about_modal = false"></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'game',
    data () {
      return {
        show_about_modal: false,
        show_howto_modal: false,
        roll_count: 0,
        all_dice: [
          {
            dice_id: 1,
            value: null,
            selected: false
          },
          {
            dice_id: 2,
            value: null,
            selected: false
          },
          {
            dice_id: 3,
            value: null,
            selected: false
          },
          {
            dice_id: 4,
            value: null,
            selected: false
          },
          {
            dice_id: 5,
            value: null,
            selected: false
          }
        ],
        scorecard: {
          upper_section: [
            {
              id: 'aces',
              label: 'Aces',
              howto: 'Count and Score Only Aces',
              score: 0,
              scored: false
            },
            {
              id: 'twos',
              label: 'Twos',
              howto: 'Count and Score Only Twos',
              score: 0,
              scored: false
            },
            {
              id: 'threes',
              label: 'Threes',
              howto: 'Count and Score Only Threes',
              score: 0,
              scored: false
            },
            {
              id: 'fours',
              label: 'Fours',
              howto: 'Count and Score Only Fours',
              score: 0,
              scored: false
            },
            {
              id: 'fives',
              label: 'Fives',
              howto: 'Count and Score Only Fives',
              score: 0,
              scored: false
            },
            {
              id: 'sixes',
              label: 'Sixes',
              howto: 'Count and Score Only Sixes',
              score: 0,
              scored: false
            },
            {
              id: 'bonus',
              label: 'Bonus',
              howto: 'If Aces thru Sixes Summed >= 63 (35)',
              score: 0,
              scored: false
            }
          ],
          lower_section: [
            {
              id: 'three_of_a_kind',
              label: '3 of a Kind',
              howto: 'Add Total of All Dice',
              score: 0,
              scored: false
            },
            {
              id: 'four_of_a_kind',
              label: '4 of a Kind',
              howto: 'Add Total of All Dice',
              score: 0,
              scored: false
            },
            {
              id: 'full_house',
              label: 'Full House',
              howto: 'One Triple and One Double (25)',
              score: 0,
              scored: false
            },
            {
              id: 'small_straight',
              label: 'Small Straight',
              howto: 'Sequence of 4 (30)',
              score: 0,
              scored: false
            },
            {
              id: 'large_straight',
              label: 'Large Straight',
              howto: 'Sequence of 5 (40)',
              score: 0,
              scored: false
            },
            {
              id: 'vuezee',
              label: 'Vuezee',
              howto: '5 of a Kind (50)',
              score: 0,
              scored: false
            },
            {
              id: 'chance',
              label: 'Chance',
              howto: 'Add All 5 Dice',
              score: 0,
              scored: false
            }
          ],
          upper_total: 0,
          lower_total: 0,
          grand_total: 0
        }
      }
    },
    methods: {
      roll (dice) {
        dice.value = Math.floor(Math.random() * 6) + 1
      },
      rollAll () {
        for (var dice of this.all_dice.filter(d => d.selected === false)) {
          this.roll(dice)
        }

        this.roll_count++
      },
      toggleSelected (dice) {
        if (this.roll_count === 0) {
          return
        }

        dice.selected = !dice.selected
      },
      rollLimitReached () {
        return this.roll_count >= 3
      },
      diceClass (value) {
        switch (value) {
          case 1: return 'fa-dice-one'
          case 2: return 'fa-dice-two'
          case 3: return 'fa-dice-three'
          case 4: return 'fa-dice-four'
          case 5: return 'fa-dice-five'
          case 6: return 'fa-dice-six'
          default: return 'fa-square'
        }
      },
      rollText () {
        if (this.gameComplete()) {
          return 'Game Complete! Thanks for Playing!'
        }

        switch (this.roll_count) {
          case 1: return 'First Roll'
          case 2: return 'Second Roll'
          case 3: return 'Final Roll. Please Score.'
          default: return 'Click Roll to Get Started!'
        }
      },
      resetDice () {
        this.roll_count = 0

        for (var dice of this.all_dice) {
          dice.value = null
          dice.selected = false
        }
      },
      addGrandTotal () {
        this.scorecard.grand_total = this.scorecard.upper_total + this.scorecard.lower_total
      },
      scoreRoll (line) {
        if (this.roll_count === 0) {
          return
        }

        if ((line.scored || line.id === 'bonus') && line.id !== 'vuezee') {
          return
        }

        switch (line.id) {
          case 'aces':
            this.scoreIndividualUpper(line, 1)
            break
          case 'twos':
            this.scoreIndividualUpper(line, 2)
            break
          case 'threes':
            this.scoreIndividualUpper(line, 3)
            break
          case 'fours':
            this.scoreIndividualUpper(line, 4)
            break
          case 'fives':
            this.scoreIndividualUpper(line, 5)
            break
          case 'sixes':
            this.scoreIndividualUpper(line, 6)
            break
          case 'three_of_a_kind':
            this.scoreXOfAKind(line, 3)
            break
          case 'four_of_a_kind':
            this.scoreXOfAKind(line, 4)
            break
          case 'full_house':
            this.scoreFullHouse(line)
            break
          case 'small_straight':
            this.scoreSmallStraight(line)
            break
          case 'large_straight':
            this.scoreLargeStraight(line)
            break
          case 'vuezee':
            this.scoreVuezee(line)
            break
          case 'chance':
            this.scoreChance(line)
            break
          default: console.log(line.id)
        }

        // Check for bonus and score it.
        var bonus_line = this.scorecard.upper_section.filter(l => l.id === 'bonus')[0]
        if (!bonus_line.scored) {
          if (this.scorecard.upper_total >= 63) {
            bonus_line.score = 35
            this.scorecard.upper_total += bonus_line.score
            bonus_line.scored = true
          }
        }

        line.scored = true
        this.addGrandTotal()
        this.resetDice()
      },
      scoreIndividualUpper (line, dice_num) {
        for (var dice of this.all_dice) {
          if (dice.value === dice_num) {
            line.score += dice_num
          }
        }

        this.scorecard.upper_total += line.score
      },
      scoreXOfAKind (line, limit) {
        var dice_check = this.buildDiceCheckMap()

        for (var value of dice_check.dice_map_values) {
          if (value >= limit) {
            line.score = dice_check.dice_total
            this.scorecard.lower_total += dice_check.dice_total
          }
        }
      },
      scoreFullHouse (line) {
        var dice_check = this.buildDiceCheckMap()

        var has_2 = false
        var has_3 = false
        for (var value of dice_check.dice_map_values) {
          if (value === 2) { has_2 = true }
          if (value === 3) { has_3 = true }
        }

        if (has_2 && has_3) {
          line.score = 25
          this.scorecard.lower_total += 25
        }
      },
      scoreSmallStraight (line) {
        var dice_check = this.buildDiceCheckArray()

        if (dice_check.length >= 4) {
          dice_check = dice_check.slice(0, 4) // Small straight only needs 4 dice
          if (
            this.$_.isEqual(dice_check, [1, 2, 3, 4]) ||
            this.$_.isEqual(dice_check, [2, 3, 4, 5]) ||
            this.$_.isEqual(dice_check, [3, 4, 5, 6])) {
              line.score = 30
              this.scorecard.lower_total += 30
          }
        }
      },
      scoreLargeStraight (line) {
        var dice_check = this.buildDiceCheckArray()

        if (dice_check.length === 5) {
          if (
            this.$_.isEqual(dice_check, [1, 2, 3, 4, 5]) ||
            this.$_.isEqual(dice_check, [2, 3, 4, 5, 6])) {
              line.score = 40
              this.scorecard.lower_total += 40
          }
        }
      },
      scoreVuezee (line) {
        var dice_check = this.buildDiceCheckArray()

        if (dice_check.length === 1) {
          // It's possible to score another vuezee for a bonus of 100.
          if (line.scored) {
            line.score += 100
            this.scorecard.lower_total += 100
          } else {
            line.score = 50
            this.scorecard.lower_total += 50
          }
        }
      },
      scoreChance (line) {
        for (var dice of this.all_dice) {
          line.score += dice.value
        }

        this.scorecard.lower_total += line.score
      },
      buildDiceCheckArray () {
        var dice_check = []
        for (var dice of this.all_dice) {
          if (!dice_check.includes(dice.value)) {
            dice_check.push(dice.value)
          }
        }

        return dice_check.sort()
      },
      buildDiceCheckMap () {
        // Use some ES6 hotness to key by a number value
        var dice_map = new Map()
        dice_map.set(1, 0)
        dice_map.set(2, 0)
        dice_map.set(3, 0)
        dice_map.set(4, 0)
        dice_map.set(5, 0)
        dice_map.set(6, 0)

        var dice_total = 0

        for (var dice of this.all_dice) {
          dice_total += dice.value
          dice_map.set(dice.value, dice_map.get(dice.value) + 1)
        }

        return { dice_total: dice_total, dice_map_values: dice_map.values() }
      },
      gameComplete () {
        var upper_complete = false
        if (this.scorecard.upper_section.filter(l => l.id !== 'bonus').filter(l => l.scored === false).length === 0) {
          upper_complete = true
        }

        var lower_complete = false
        if (this.scorecard.lower_section.filter(l => l.scored === false).length === 0) {
          lower_complete = true
        }

        if (upper_complete && lower_complete) {
          return true
        }

        return false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Pacifico');

  #game {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .fancy-title-dice {
    font-size: 5em;
  }

  .dice-size {
    font-size: 4em;
    padding-left: .10em;
    padding-right: .10em;
  }

  .pointed-cursor {
    cursor: pointer;
  }

  .fancy-title {
    font-family: 'Pacifico', cursive;
    font-size: 6em;
    transform-origin: center;
    transform: rotate(-15deg);
  }

  .section-title {
    font-family: 'Pacifico', cursive;
    font-size: 1.25em;
  }
</style>
