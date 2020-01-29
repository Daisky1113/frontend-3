var firebaseConfig = {
  apiKey: "AIzaSyBcoe2OAcxUPNFEN-bxyWuqp2AMBh8-EF0",
  authDomain: "vote-sys-66703.firebaseapp.com",
  databaseURL: "https://vote-sys-66703.firebaseio.com",
  projectId: "vote-sys-66703",
  storageBucket: "vote-sys-66703.appspot.com",
  messagingSenderId: "280230253333",
  appId: "1:280230253333:web:5a822613645eb1a00ccf1c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const vm = new Vue({
  el: '#app',
  data: {
    projectName: 'Frontend#3',
    icons: [
      {
        className: 'fa-vote-yea',
        text: 'vote'
      },
      {
        className: 'fa-list-ol',
        text: 'list'
      },
      {
        className: 'fa-id-card',
        text: 'detail'
      },
      {
        className: 'fa-user-edit',
        text: 'edit'
      },
      {
        className: 'fa-door-open',
        text: 'logout'
      },
    ],
  },

  created(){
    
  },

  computed: {
    
  },

  filters: {

  },

  methods: {
    
  }
})