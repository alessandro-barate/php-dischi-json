<?php

// Leggo il file albums
$albums = file_get_contents(__DIR__ . '/albums.json');

// Dico al browser cosa sto passando
header('Content-Type: application/json');
echo ($albums);
