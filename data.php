<?php 

echo (json_decode(file_get_contents('https://data.gov.in/node/3647721/datastore/export/json'),JSON_PRETTY_PRINT));
?>