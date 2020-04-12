import Vue from 'vue'
import Router from 'vue-router';
import routes from './config/routes'
// import DB from './plugins/nedb'
import App from './App'

Vue.config.productionTip = false

Vue.use(Router);

const router = new Router(routes);

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.state.isLogin) {
//       next();
//     } else if (sessionStorage.getItem('isLogin')) {
//       store.dispatch('switchLogStatus', true);
//       next();
//     } else {
//       next('/login');
//     }
//   } else {
//     next();
//   }
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// const db = new DB()
// db.insert([
//   { _id: 'id1', planet: 'Mars', system: 'solar', inhabited: false, satellites: ['Phobos', 'Deimos'] },
//   { _id: 'id2', planet: 'Earth', system: 'solar', inhabited: true, humans: { genders: 2, eyes: true } },
//   { _id: 'id3', planet: 'Jupiter', system: 'solar', inhabited: false },
//   { _id: 'id4', planet: 'Omicron Persei 8', system: 'futurama', inhabited: true, humans: { genders: 7 } },
//   { _id: 'id5', completeData: { planets: [{ name: 'Earth', number: 3 }, { name: 'Mars', number: 2 }, { name: 'Pluton', number: 9 }] } },
// ])
//   .then(newDocs => console.log(newDocs))

// db.find({ humans: { genders: 2 } })
//   .then(docs => console.log(docs))