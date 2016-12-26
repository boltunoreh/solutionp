        <!-- Скрипты -->
        <?php $assets_dir = get_assets_dir(); ?>
        <script>
            function initialize() {
                var myLatLng = {
                    <?php
                    if (!$lat = get_field('index_map_lat')) {
                        $lat = 55.750023;
                    }
                    ?>
                    lat: <?= $lat; ?>,

                    <?php
                    if (!$lng = get_field('index_map_lng')) {
                        $lng = 55.750023;
                    }
                    ?>
                    lng: <?= $lng; ?>
                };
                // Create a map object and specify the DOM element for display
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: myLatLng,
                    scrollwheel: false,
                    zoom: 15
                });
                // Create a bubble for marker
                var infowindow = new google.maps.InfoWindow({
                    <?php
                    if (!$content = get_field('index_map_text')) {
                        $content = '';
                    }
                    ?>
                    content: '<span style="color:black;"><?= $content; ?></span>'
                });
                // Create a marker and set its position
                var marker = new google.maps.Marker({
                    map: map,
                    position: myLatLng,
                    icon: '<?= $assets_dir; ?>/img/map-marker.svg',
                    <?php
                    if (!$title = get_field('index_map_title')) {
                        $title = '';
                    }
                    ?>
                    title: '<?= $title; ?>'
                });
                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            }
            google.maps.event.addDomListener(window, 'load', initialize);
        </script>
        <?php wp_footer(); ?>
    </body>
</html>