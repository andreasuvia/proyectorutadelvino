const { createApp } = Vue  //creo un objeto VUE llamdo createApp

  createApp({
    data() {
      return {
        url:'https://api.sampleapis.com/wines/reds',
        wines:[],
 //       error:false,
 //       nroerror:0,
 //       cargando:true
      } 
    },   
    methods: {
      fetchData(url) {

          fetch(url)
              .then(response => response.json())
              .then(data => { 
                this.wines=data // volca los datos del Json
                //this.cargando=false
                 }
              )
         //     .catch(error=>{
        //        console.log("error"+error)
         //       this.error=true
         //       this.nroerror=error
         //     }
        //      )
      }
    },
    created(){

      this.fetchData(this.url) 
    }

    
  }).mount('#app')
