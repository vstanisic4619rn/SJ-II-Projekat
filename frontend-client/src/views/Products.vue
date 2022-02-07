<template>
 <div>
    <p>    {{products[0]}} </p>

    <b-pagination
      v-model="currentPage"
      :total-rows="products[0].length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <b-table
      id="image-table"
      hover
      fixed
      :items="products[0]"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
      <!-- <template #cell(isHighlight)="data">
        <b-icon v-if="data.value" icon="check-square" variant="success" scale="2"></b-icon>
        <b-icon v-else icon="x-circle" variant="danger" scale="2"></b-icon>
      </template> -->
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="products[0].length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: "Products",

    data() {
      return {
       fields: ['id', 'price', 'product_description', 'product_name'],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },

    mounted() {
      this.fetchProducts()
    },

    computed: {
      ...mapState([
        'products'
      ])
    },

    methods: {
      ...mapActions([
        'fetchProducts'
      ]),

      rowClicked() {
        // this.$router.push({ name: 'BookList' });//todo fix
        console.log("click")
      }
    }


  }
</script>


<style scoped>


</style>