const { createApp } = Vue;

createApp({
    data(){
        return {
            title: 'dscdsc',
            albums: [],
            urlAlbums: "http://localhost:8888/php-dischi-json/server.php",
        };
    },

    methods: {
        getAlbums(){
            axios.get(this.urlAlbums).then((response) => this.albums = response.data);
        },
    },

    created(){
        this.getAlbums();
    }
}).mount('#app');

