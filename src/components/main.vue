<template lang="pug">
  .wrapper
    .container
      transition-group.gag(name='list-complete' tag="div")
        todo(v-for='(item, index) in todos'
          :key='item.id'
          :todoData='item'
          :todoIndex='index'
          :arrayLenght='todos.length')
      .button
        .button-inner(@click="sendData") Оплатить
</template>

<script>
import todo from './todo.vue'
import axios from 'axios'

export default {
  data () {
    return {
      responseUrl: ''
    }
  },
  components: {
    todo
  },
  computed: {
    todos () {
      return this.$store.getters.todos
    },
    receipt: function () {
      var totalPrice = 0
      var totalCount = 0
      this.todos.forEach(function (item, i, arr) {
        if (item.select) {
          if (item.count < 0) {
            item.count = -item.count
          }
          if (item.price < 0) {
            item.price = -item.price
          }
          if (item.count && item.price) {
            totalPrice += item.count * item.price * 100
          }
          if (item.count) {
            totalCount += item.count * 1
          }
        }
      })
      return {totalPrice, totalCount}
    }
  },
  methods: {
    sendData: function () {
      const Post = {
        'TerminalKey': '1',
        'Amount': this.receipt.totalCount,
        'OrderId': '23',
        'Description': 'test post',
        'Receipt': this.receipt.totalPrice
      }
      const data = JSON.stringify(Post)
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      axios.post('https://securepay.tinkoff.ru/v2/Init', data, config)
        .then((response) => {
          console.log('работает')
          console.log(response)
          // this.responseUrl = response.data.PaymentURL
          this.responseUrl = 'https://securepay.tinkoff.ru/rest/Authorize/1B63Y1'
          console.log(response.data.PaymentURL)
          document.location.href = this.responseUrl
        })
        .catch((error) => {
          console.log('не работает')
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .button
    font-size 20px
    margin-top 40px
    div
      box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
      float right
      padding 20px
      background-color #fbd135
      &:hover
        cursor pointer
  .wrapper
    height 100vh
    width 100vw
    background-image url("../assets/triangles-download.svg")
    background-size cover
    padding-top 5vh
  .container
    width 1024px
    position: relative
    margin auto
    padding-top  20px
    padding-left 0px
    .gag
      display flex
      flex-wrap wrap
      align-items end

  .todos
    flex: 0 0 33.333333%
    max-width: 33.333333%
  .todo-wrapper
    padding 15px
  .todo-inner
    padding 10px
    box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
    background-color white
    border-radius 7px
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
