const { createApp } = Vue;

createApp({
    data(){
        return {
            title: 'dscdsc',
            albums: [],
            mainUrlAlbums: "http://localhost:8888/php-dischi-json",
            urlAlbumsDetails: "/server.php",
        };
    },

    methods: {
        getAlbums(){
            axios.get(this.mainUrlAlbums + this.urlAlbumsDetails).then((response) => this.albums = response.data);
        },
    },

    created(){
        this.getAlbums();
    }
}).mount('#app');

