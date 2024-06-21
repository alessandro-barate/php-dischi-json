const { createApp } = Vue;

createApp({
    data(){
        return {
            title: 'dscdsc',
            albums: [],
            loading: false,
            showDetails: false,
            endpoints: {
                mainUrlAlbums: "http://localhost:8888/php-dischi-json",
                urlAlbumsDetails: "/server.php",
            },     
        };
    },

    methods: {

        // Chiamata API
        getAlbums(){
            axios.get(this.endpoints.mainUrlAlbums + this.endpoints.urlAlbumsDetails).then(response => {this.albums = response.data;
            }).catch(err => {console.log(err);})
        },

        getAlbumsDetails(index){
            // if (this.albums.id === 1){
                
            // }
            console.log('ok');
            console.log(index);
        }
    },

    created(){
        this.getAlbums();
    }
}).mount('#app');

