<template lang="pug">
  .wrapper
    .page-to-edit-inner
      .page-to-edit-left-side
        .page-to-edit-left-side-inner.mb-15(@click="goToHome")
          eva-icon(name='arrow-ios-back-outline' animation="pulse" width="100%" height="100%" fill="black")
      .page-to-edit-right-side
        .page-to-edit-right-side-inner
          .block-input
            input(v-model="title" type="text" placeholder="title")
          .block-input
            input(v-model="description" type="text" placeholder="description")
          .block-input
            input(v-model="image" type="text" placeholder="image")
          .block-input
            input(v-model.number="price" type="number" placeholder="price")
          .block-input
            input(v-model.number="count" type="number" placeholder="count" value="0")
          .button
            .button-inner(@click="add(idTodo,count,price,title,description,image)") Add

</template>

<script>
export default {
  name: 'todoedit',
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
      isModalVisible: false,
      proId: this.$route.params.Pid,
      title: '',
      description: '',
      image: '',
      price: '',
      count: ''
    }
  },
  computed: {
    idTodo () {
      return this.$store.getters.idTodo
    }
  },
  methods: {
    goToHome: function () {
      this.$router.push('/')
    },
    add: function (id, count, price, title, description, image) {
      if (!count) {
        count = 1
      }
      if (!price) {
        price = 20
      }
      const bascketProduct = {
        id,
        description,
        image,
        title,
        count,
        price
      }
      this.$store.dispatch('newTodo', bascketProduct)
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .wrapper
    height 100vh
    width 100vw
    background-image url("../assets/triangles-download.svg")
    background-size cover
    padding-top 5vh
  .page-to-edit-inner
    width 1024px
    margin auto
    margin-top 10vh
    border-radius 7px
    display flex
    justify-content space-between
  .page-to-edit-left-side
    padding 10px
    flex 1 1 7%
  .page-to-edit-right-side
    flex 1 1 93%
    padding 10px
  .page-to-edit-left-side-inner
    padding 10px
    box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
    border-radius 7px
    display flex
    flex-wrap wrap
    justify-content space-between
    align-items center
    flex-direction row
    background-color white
  .page-to-edit-right-side-inner
    padding 50px
    box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
    border-radius 7px
    display flex
    flex-direction column
    background-color white
  .mb-15
    margin-bottom 15px
    &:hover
      cursor pointer
  .eva-hover
    cursor pointer
  .ggg
    transform rotateY(180deg)
  .block-input
    display flex
    flex-direction column
    span
      font-size 20px
    input
      font-size 18px
      margin-bottom 30px
  input
    border: none
    border-bottom: 2px solid grey
    padding 10px
    padding-bottom 5px
    padding-left 0px
  input
    outline:none
    transition 0.7s all
    &:focus
      border-bottom 2px solid black
  .button
    font-size 20px
    div
      box-shadow: 0 6px 18px rgba(14,21,47,.1), 0 -2px 6px rgba(14,21,47,.02)
      float right
      padding 20px
      &:hover
        cursor pointer
</style>
