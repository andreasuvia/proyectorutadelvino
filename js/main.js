const { createApp } = Vue 

  createApp({
    data() {
      return {
        url:'https://api.sampleapis.com/wines/reds',
        wines:[],

      } 
    },   
    methods: {
      fetchData(url) {

          fetch(url)
              .then(response => response.json())
              .then(data => { 
                this.wines=data 
                
                 }
              )
       
      }
    },
    created(){

      this.fetchData(this.url) 
    }

    
  }).mount('#app')
