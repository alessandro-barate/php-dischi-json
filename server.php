<?php

$albums = file_get_contents(__DIR__ . '/albums.json');

header('Content-Type: application/json');
echo ($albums);
