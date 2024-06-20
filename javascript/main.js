const { createApp } = Vue;

createApp({
    data(){
        return {
            title: 'dscdsc',
            albums: [
                {
                    name: 'The Dark Side Of The Moon',
                    artist: 'Pink Floyd',
                    year: '1973',
                },
                {
                    name: 'Hybrid Theory',
                    artist: 'Linkin Park',
                    year: '2000',
                },
                {
                    name: 'Thinking In Textures',
                    artist: 'Chet Faker',
                    year: '2012',
                },
                {
                    name: 'Californication',
                    artist: 'Red Hot Chili Peppers',
                    year: '1999',
                },
                {
                    name: 'Dookie',
                    artist: 'Green Day',
                    year: '1994',
                },
                {
                    name: 'Fink',
                    artist: 'Perfect Darkness',
                    year: '2011',
                },
            ],
        }
    }
}).mount('#app');

