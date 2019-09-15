var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    "people":{

       "name": {
         "first": "",
         "last": ""
       },
       "location": {
         "street": "",
         "city": "",
         "state": "",
         "postcode": ""

         },

       "email": "",

       "dob": {
         "date": "",
         "age": ""
       },

       "picture": {
         "large": "",
         "medium": "",
        "thumbnail": ""

       },
       "nat": ""

   }
  },
  methods: {
    fetchPeople() {
      fetch('https://randomuser.me/api/?nat=us')
      .then(response=>response.json())
      .then(json=>{waitingApp.people=json.results[0]});
      //.then(function(response){ console.log(response.json())});
      //.then(function(response) {return response.json()})
      //.then(function(json) {waitingApp.people = json});

    }
  },
  created: function() {
    this.fetchPeople();
  }

});
