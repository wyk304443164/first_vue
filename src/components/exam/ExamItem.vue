<template>
  <li class="item_list" @click="selectMethods(index)">
    <!--has_choosed-->
    <span class="option_style" v-bind:class="{has_choosed :isSelect}">{{leftText}}</span>
    <span class="option_detail">{{rightText}}</span>
  </li>
</template>

<script>

  //  试题的单条

  export default {
    name: 'ExamItem',
    props: ['index', 'leftText', 'rightText', 'isSelect'],
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      selectMethods(index) {
        this.$emit('item-select', index);
      }
    }
  }
</script>

<style lang="less" scoped>

  .item_list {
    font-size: 0;
    margin-top: 0.4rem;
    width: 10rem;

    .has_choosed {
      background-color: #ffd400;
      color: #575757;
      border-color: #ffd400;
    }

    .option_style {
      height: 0.725rem;
      width: 0.725rem;
      border: 1px solid #fff;
      border-radius: 50%;
      line-height: 0.725rem;
      text-align: center;
      margin-right: 0.3rem;
      font-size: 0.5rem;
      font-family: 'Arial';
    }

    .option_detail {
      width: 7.5rem;
      /*padding-top: 0.11rem;*/
    }

    span {
      display: inline-block;
      font-size: .6rem;
      line-height: .6rem;
      /*color: #fff;*/
      vertical-align: middle;
    }

  }

</style>
