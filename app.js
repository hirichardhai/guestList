let vm1 = new Vue({
  el: '#app',
  data: {
    event: {
      eventDate: 'August 14th - 16th',
      eventTitle: "Richard's Summer Event",
      eventDescription: "Greetings! Glad to see you're interested in stopping by.  I would love to invite you over, please submit your name if you're interested in attending!",
      signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:'
    },
    newNameText: '',
    guestName: [],
    eventCapacity: 25,
    eventCapacityPercentage: 0
  },
  methods: {
    formSubmitted: function() {
      if (this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
        this.guestName.push(this.newNameText)
        this.newNameText = ''
        this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)
      }
    },
    keyPressed: function() {
      console.log('key pressed');
    }
  },
  computed: {
    sortNames: function() {
      return this.guestName.sort();
    }
  },
  watch: {
    guestName: function(data) {
      console.log('Watch triggered');
    }
  },
  filters: {
    formatName: function(value) {
      return value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase();
    }
  },
  beforeCreate: function() {
    console.log('beforeCreate');
  },
  created: function() {
    console.log('created');
  },
  beforeMount: function() {
    console.log('beforeMount');
  },
  mounted: function() {
    console.log('mounted');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate');
  },
  updated: function() {
    console.log('updated');
  },
  beforeDestroy: function() {
    console.log('beforeDestroyed');
  },
  destroy: function() {
    console.log('destroyed');
  }
});

let vm2 = new Vue({
  el: '#navigation',
  data: {
    appName: 'Guest List',
    navLinks: [
      {name: "Home", id: 1, url: "https://richard-hai.github.io/"},
      {name: "Upcoming events", id: 2, url: "https://richard-hai.github.io/"},
      {name: "Guest Benefits", id: 3, url: "https://richard-hai.github.io/"},
      {name: "Latest News", id: 4, url: "https://richard-hai.github.io/"},
    ]
  },
  methods: {
    changeTitle: function() {
      this.$refs.namez.innerText = 'Title changed!';
      console.log(this.$refs);
    }
  }
})
