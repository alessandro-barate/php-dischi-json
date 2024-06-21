<?php
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">
    <!--  FINE font -->

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!-- FINE Bootstrap -->

    <!-- Css -->
    <link rel="stylesheet" href="./css/style.css">
    <!-- FINE Css -->

    <!-- Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js">
    </script>
    <!-- FINE Axios -->

    <title>Vinili con Json</title>
</head>

<body>
    <div id="app" v-cloak>
        <div class="container">
            <div class="row">
                <div class="col d-flex flex-wrap text-center justify-content-center">
                    <div v-for="album in albums" class="col-3 m-4 card">
                        <div @click="">
                            <img class="cover p-2" :src="album.cover" alt="">
                            <h4>{{ album.name }}</h4>
                            <h5>{{ album.artist }}</h5>
                            <h5>{{ album.year }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Vue -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <!-- FINE Vue -->

    <!-- Javascript -->
    <script type="text/javascript" src="./javascript/main.js"></script>
    <!-- FINE Javascript -->
</body>

</html>