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
            this.showDetails = true;
        },

        hideAlbumsDetails(){
            this.showDetails = false;
        },
    },

    created(){
        this.getAlbums();
    }
}).mount('#app');

