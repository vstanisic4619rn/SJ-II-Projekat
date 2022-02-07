<template>
 <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="review.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <b-table
      id="image-table"
      hover
      fixed
      :items="review"
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
      :total-rows="review.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <router-link to="/editreview" class="btn btn-primary">addReview</router-link>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: "Review",

    data() {
      return {
       fields: ['id', 'user_id', 'product_id', 'body'],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },

    mounted() {
      this.fetchReview()
    },

    computed: {
      ...mapState([
        'review'
      ])
    },

    methods: {
      ...mapActions([
        'fetchReview'
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