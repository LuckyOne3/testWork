<template lang="pug">
  .list-complete-item
    .todo-wrapper
      .todo-inner(:class="{activeInner: !todoData.select}")
        .todo-title
          .todo-title-text {{todoData.title}}
          eva-icon(name='plus-circle-outline' animation="pulse"  fill="green" v-if="!todoData.select" @click="select(todoIndex)")
          eva-icon(name='minus-circle-outline' animation="pulse"  fill="red" v-else @click="select(todoIndex)")
        .todo-body
          .todo-image
            img(:src="todoData.image")
          .todo-title-description {{todoData.description}}
          .tood-price-count
            .todo-title-count
              div Количество:
              input( type="number" v-model.number="todoData.count" :disabled="!todoData.select" :class="{activeInput: todoData.select}"  @change="changeCount(todoIndex, todoData.count)")
            .todo-title-price {{todoData.price | currency}}
</template>

<script>
import modal from './modal.vue'

export default {
  name: 'todo',
  components: {
    modal
  },
  props: {
    arrayLenght: {
      type: Number,
      default () {
        return 0
      }
    },
    todoIndex: {
      type: Number,
      default () {
        return 0
      }
    },
    todoData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      disabled: false
    }
  },
  methods: {
    changeCount: function (index, count) {
      this.$store.dispatch('changeCount', {index, count})
    },
    select: function (index) {
      this.$store.dispatch('select', index)
    },
    unDisable: function () {
      this.disabled = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .activeInner
    box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
    color grey!important
  .activeInput
    color: brown!important
  .todo-title-description
    font-size 18px
    margin-top 10px
  .todo-title-count
    display flex
    flex-direction row
    flex 0 0 50%
    align-items center
    transition 0.7s all
  input
    font-size 18px
    text-align center
    border none
    flex 0 0 50%
    width 100%
    outline:none
    padding 3px
    transition 0.7s all
    &:focus
      text-decoration underline
  .tood-price-count
    display flex
    flex-direction row
    justify-content space-between
    margin-top 20px
  .todo-title-price
    display flex
    flex-direction row
    justify-content space-between
    font-size 20px
  .todo-image
    img
      width 100%
      border-radius 7px
      box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
  .todos
    flex: 0 0 33.333333%
    max-width: 33.333333%
  .todo-wrapper
    padding 15px
  .todo-inner
    padding 10px
    background-color white
    border-radius 7px
    transition: all 0.7s
    &:hover
      .todo-title-buttons
        opacity 1
  .todo-title
    font-size 20px
    padding-bottom 20px
    flex-direction row
    display flex
    justify-content space-between
  .todo-title-buttons
    display: flex
    flex-direction: row
    opacity 0
    transition: all 0.5s
  .todo-body
    flex-direction column
    display flex
    flex-wrap: wrap
  .whatTodo
    flex 1 1 auto
    padding-top 10px
    padding-bottom 5px
    margin-bottom 5px
    padding-left 5px
    border-left: 3px solid #fbd135
    font-size 18px
  .eva-hover
    padding-right  5px
    padding-left   5px
    &:hover
      cursor pointer
  .grey-back
    background-color: rgb(206, 202, 202)
    opacity 0.5
    transition 0.5s
    &:hover
      background-color: white
      opacity 1
      cursor pointer
  .display-center
    text-align center
  .list-complete-item
    transition: all 0.7s
    position relative
    border-radius 7px
    flex: 0 0 33.333333%
    max-width: 33.333333%
  .list-complete-enter, .list-complete-leave-to
    opacity: 0
  .list-complete-leave-active
    position: absolute
    flex: 0 0 33.333333%
    min-width: 33.333333%
  .modal-header,
  .modal-footer
    padding 15px
    display flex

  .modal-header
    border-bottom 1px solid #eeeeee
    font-size 20px
    justify-content space-between

  .modal-footer
    border-top 1px solid #eeeeee
    justify-content flex-end

  .modal-body
    position relative
    display flex
    justify-content space-between
    height 100%

  .modal-body-yes, .modal-body-no
    flex: 0 0 50%
    color white
    text-align center
    font-size 25px
    display flex
    justify-content: center
    align-items center
    transition 0.5s
    box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
    &:hover
      cursor pointer
  .modal-body-yes
    background-color limegreen
    &:hover
      background-color lightness(limegreen, 40%)
  .modal-body-no
    background-color red
    &:hover
      background-color lightness(red, 40%)
  .modal-title-name
    font-weight bold
  .modal-fade-enter, .modal-fade-leave-active
    opacity 0
  .modal-fade-enter-active, .modal-fade-leave-active
    transition opacity 0.5s ease
</style>
