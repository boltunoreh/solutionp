        <!-- Скрипты -->
        <?php $assets_dir = get_assets_dir(); ?>
        <script>
            <?php
            if (!$lat = get_field('index_map_lat')) {
                $lat = 55.750023;
            }
            ?>
            var gmlat = <?= $lat ?>;
            <?php
            if (!$lng = get_field('index_map_lng')) {
                $lng = 55.750023;
            }
            ?>
            var gmlng = <?= $lng ?>;

            var gmicon = '<?= $assets_dir; ?>/img/map-marker.svg';
            <?php
            if (!$title = get_field('index_map_title')) {
                $title = '';
            }
            ?>
            var gmtitle = '<?= $title; ?>';
            <?php
            if (!$content = get_field('index_map_text')) {
                $content = '';
            }
            ?>
            var gmcontent = '<span style="color:black;"><?= $content; ?></span>';
        </script>
        <?php wp_footer(); ?>
    </body>
</html>