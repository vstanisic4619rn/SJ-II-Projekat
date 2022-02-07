import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    products: [],
    review:[],
    reviews:null,

  },

  mutations: {
    setToken(state, token) {
      state.token = token;
       localStorage.token = token;

    },

    setProducts(state, products){
      state.products = products;
      console.log("PROIZVODI")
      console.log(state.products)
    },
    setReviews(state, reviews) {
      state.reviews = reviews;
    },
    setReview(state, review){
      state.review = review;
      console.log("Review")
      console.log(state.review)
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

  },

  actions: {
    fetchProducts({ commit }){
      fetch('http://127.0.0.1:8000/api/products', {
        headers: {
           // 'Content-Type': 'application/json'
        }
    })
        .then( res => res.json() )
        .then( data => commit('setProducts',data));
    },
    fetchReview({ commit }){
      fetch('http://127.0.0.1:8000/api/messages', {
        headers: {
           // 'Content-Type': 'application/json'
        }
    })
        .then( res => res.json() )
        .then( data => commit('setReview',data));
    },
    
    register({ commit }, obj) {
      console.log(obj)
      fetch('http://localhost:9000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => { 
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              console.log(tkn.token)//todo skloni kasnije
              commit('setToken', tkn.token)
            }
          });
    },
    addReviews({ commit }, obj) {
      console.log(obj)
      fetch('http://localhost:8000/index', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => { 
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              console.log(tkn.token)//todo skloni kasnije
              commit('setToken', tkn.token)
            }
          });
    },


    login({ commit }, obj) {
      console.log("u log")
      console.log(obj)

      fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => { 
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              console.log(tkn.obj.token)//todo skloni kasnije
              commit('setToken', tkn.obj.token)

            }
          });

          
    },

    // fetchFacutlies({ commit }){
    //   fetch('http://127.0.0.1:8500/admin/faculty/all',{
    //     headers: {
    //         'authorization': `Bearer ${localStorage.token}`
    //     },
    //     method: 'GET'
    // })
    //     .then( obj => obj.json() )
    //     .then( res => commit('setFaculties', res));
    // },

    // fetchBooks({ commit }){
    //   fetch('http://127.0.0.1:8500/admin/book/all',{
    //     headers: {
    //         'authorization': `Bearer ${localStorage.token}`
    //     },
    //     method: 'GET'
    // })
    //     .then( obj => obj.json() )
    //     .then( res => commit('setBooks', res));
    // },
    // fetchLibraries({ commit }){
    //   fetch('http://127.0.0.1:8500/admin/library/all',{
    //     headers: {
    //       'authorization': `Bearer ${localStorage.token}`
    //     },
    //     method: 'GET'
    //   })
    //       .then( obj => obj.json() )
    //       .then( res => commit('setLibraries', res));
    // },

    // getBooksByLibId({ commit }, int){//todo nece iz prve da pokupi knjige nego mora dva puta da se kativira, saznaj zasto
    //   fetch('http://127.0.0.1:8500/admin/book/all',{
    //     headers: {
    //       'authorization': `Bearer ${localStorage.token}`
    //     },
    //     method: 'GET'
    //   })
    //       .then( obj => obj.json() )
    //       .then( res => commit('setBooks', res));

    //   console.log("napunjene knjige opet")
    //   commit('selectBooks',int)
    // },

    // fetchBookByID({ commit }, id){
    //   fetch(`http://127.0.0.1:8500/admin/book/${id}`,{
    //     headers: {
    //       'authorization': `Bearer ${localStorage.token}`
    //     },
    //     method: 'GET'
    //   })
    //       .then( obj => obj.json() )
    //       .then( res => commit('setBookById', res) );

    // }
    
  },

  modules: {
  }
})
