// parte di Vuejs
const app = new Vue ({
    el:'#app',

    data: {
     contatoreFoto : 0,
     fotografie :[
    'img/img1.jpg',
    'img/img2.png',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',],
},

// created(){
//      setInterval(this.seguente,3000)   
//     },

    methods: {
    precedente:function(){

        this.contatoreFoto--;
        if (this.contatoreFoto < 0) {
            this.contatoreFoto=(this.fotografie.length -1 );
        }
    },

    seguente:function(){

        this.contatoreFoto++;
        if (this.contatoreFoto > this.fotografie.length -1) {
            this.contatoreFoto= 0;
        }
    },

    clickCircle(index) {
     this.contatoreFoto = index;
    }


    }

   
}) 
//--------------------------------------------
