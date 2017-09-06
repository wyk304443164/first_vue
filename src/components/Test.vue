<template>
  <section>
    <header>

      <div class="top-test">
        <router-link to="/item">ffff</router-link>
        <item v-for="obj in lists" :key="obj.id">
          <span slot="xx">{{obj.name}}</span>
          <span slot="ff">slot2</span>
        </item>
      </div>

      <ul>
        <li
          is="exam-item"
          v-for="(obj,index) in lists"
          :left-text="obj.id"
          :right-text="obj.name"
          :is-select="obj.isSelect"
          :index="index"

          @item-select="itemSelect"

          :key="obj.id"></li>
      </ul>

    </header>
  </section>
</template>

<script>

  import item from './Item.vue'
  import ExamItem from './exam/ExamItem.vue'

  export default {
    name: 'Test',
    components: {
      item: item,
      ExamItem: ExamItem,
    },
    data() {
      return {
        lists: [{
          id: 1,
          name: 'xx',
          isSelect: false,
        }, {
          id: 2,
          name: 'xx1',
          isSelect: true,
        }]
      }
    },
    methods: {
      itemSelect(i) {
        this.lists.forEach((item, index) => {
          item.isSelect = i === index;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

  @bg: #999;

  .top-test {
    background: @bg;
  }

</style>
