<?php /* Template Name: Главная страница */ ?>
<?php get_header(); ?>
    <div class="wrapper">
        <div class="loader"></div>
        <!-- Хедер -->
        <header class="header">
            <div class="header_gradient"></div>
            <div class="header__inner">
                <!-- Логотип -->
                <a href="#intro" class="logo_header">
                    <img src="<?php echo tmpl_dir ?>/assets/img/logo_small.png"
                         srcset="<?php echo tmpl_dir ?>/assets/img/logo_small_x2.png 2x" alt="Solution-P logotype"
                         class="logo__img_header">
                </a>
                <!-- Меню -->
                <div class="header__menu">
                    <ul id="menu" class="menu">
                        <li class="menu__item active" data-menuanchor="services">
                            <a href="#services" class="menu__link">Услуги</a>
                        </li>
                        <li class="menu__item" data-menuanchor="projects">
                            <a href="#projects" class="menu__link">Проекты</a>
                        </li>
                        <li class="menu__item" data-menuanchor="clients">
                            <a href="#clients" class="menu__link">Клиенты</a>
                        </li>
                        <li class="menu__item" data-menuanchor="partners">
                            <a href="#partners" class="menu__link">Партнеры</a>
                        </li>
                        <li class="menu__item" data-menuanchor="contacts">
                            <a href="#contacts" class="menu__link">Контакты</a>
                        </li>
                    </ul>
                </div>
                <div class="menu__btn popup_open" data-popup-id='1'>
                    <i class="i_top"></i>
                    <i class="i_center"></i>
                    <i class="i_bottom"></i>
                </div>
                <div class="btn btn_header btn_blue popup_open" data-popup-id='2'>Связаться с нами</div>
            </div>
        </header>
        <!-- Секции -->
        <div class="middle">
            <div id="fullpage">
                <!-- Интро -->
                <?php
                if (!$image = get_field('index_fs_background')) {
                    $image['url'] = null;
                }
                ?>
                <div id="section1" class="section section_intro fp-auto-height-responsive" style="background-image: url('<?php echo $image['url']; ?>')">
                    <div class="section__inner">
                        <img src="<?php echo tmpl_dir ?>/assets/img/logo.png"
                             srcset="<?php echo tmpl_dir ?>/assets/img/logo_x2.png 2x"
                             alt="Solution-P logotype" class="logo__img">
                        <p class="section__desc">
                            <?php the_field('index_fs_text'); ?>
                        </p>
                        <a href="#services" class="next-page-link">Наши услуги</a>
                    </div>
                </div>
                <!-- Услуги -->
                <?php
                $first_service_slide_id = 2;
                if (!$image = get_field('index_service_background')) {
                    $image['url'] = null;
                }
                ?>
                <div id="section2" class="section section_services fp-auto-height-responsive" style="background-image: url('<?php echo $image['url']; ?>')">
                    <!-- Услуги — слайд Intro -->
                    <div id="slide1" class="slide slide_intro" data-anchor="services">
                        <div class="section__inner">
                            <h2 class="section__header"><? the_field('index_service_title'); ?></h2>
                            <p class="section__desc">
                                <? the_field('index_service_text'); ?>
                            </p>
                            <div class="services clearfix">
                                <?php
                                $slide_id = $first_service_slide_id;
                                $slide_title = get_field('index_service_title');
                                $slide_slug = strtolower($slide_title);
                                $sub_slides = array();
                                while (have_rows('index_service_slide')) {
                                    the_row();
                                    $sub_slide_title = get_sub_field('index_service_slide_title');
                                    $sub_slide_slug = strtolower($sub_slide_title);
                                    $sub_slides[$slide_id] = $sub_slide_slug;
                                    ?>
                                    <div class="service__block">
                                        <a href="#services/<?= $sub_slide_slug; ?>" class="service service_link">
                                            <div class="service__img">
                                                <?php
                                                if ($svg = get_sub_field('index_service_slide_svg')) {
                                                    echo $svg;
                                                }
                                                ?>
                                            </div>
                                            <h3 class="service__title"><?= $sub_slide_title; ?></h3>
                                        </a>
                                    </div>
                                    <?php $slide_id++; ?>
                                <?php } ?>
                            </div>
                            <a href="#services/<?= $sub_slides[$first_service_slide_id]; ?>" class="btn btn_white">Подробнее о <?= $sub_slides[$first_service_slide_id]; ?></a>
                        </div>
                    </div>
                    <!-- Слайды услуги -->
                    <?php
                    if ($rows = get_field('index_service_slide')) {
                        $slide_id = $first_service_slide_id;
                        $row_count = count($rows);
                        while (have_rows('index_service_slide')) {
                            the_row();
                            $slide_title = get_sub_field('index_service_slide_title');
                            $slide_slug = strtolower($slide_title);
                            $slide_bg_url = '';
                            if ($slide_bg = get_sub_field('index_service_slide_background')) {
                                $slide_bg_url = $slide_bg['url'];
                            }
                            ?>
                            <div id="slide<?= $slide_id; ?>" class="slide slide_<?= $slide_id; ?>" data-anchor="<?= $slide_slug; ?>" style="background-image: url(<?= $slide_bg_url; ?>);">
                                <div class="section__inner">
                                    <h2 class="section__header"><?= $slide_title ?></h2>
                                    <div class="features">
                                        <?php
                                        while (have_rows('index_service_slide_block')) {
                                            the_row();
                                            ?>
                                            <div class="feature">
                                                <div class="feature__img">
                                                    <?php
                                                    if ($svg = get_sub_field('index_service_slide_block_svg')) {
                                                        echo $svg;
                                                    }
                                                    ?>
                                                </div>
                                                <h3 class="feature__title"><?php the_sub_field('index_service_slide_block_text'); ?></h3>
                                            </div>
                                        <?php } ?>
                                    </div>
                                    <div class="btns">
                                        <span class="btn btn_blue popup_open" data-popup-id='2'>Оставить заявку на услугу</span>
                                        <?php
                                        if ($slide_id > $first_service_slide_id) {
                                            $previous_slide_id = $slide_id - 1;
                                            $previous_slide_title = $rows[$previous_slide_id - $first_service_slide_id]['index_service_slide_title'];
                                            $previous_slide_slug = strtolower($previous_slide_title);
                                            ?>
                                            <a href="#services/<?= $previous_slide_slug; ?>"
                                               class="btn btn_prev"><?= $previous_slide_title; ?></a>
                                        <?php } else { ?>
                                            <a href="#services/services" class="btn btn_prev">Услуги</a>
                                        <?php
                                        }
                                        if ($slide_id < $first_service_slide_id - 1 + $row_count) {
                                            $next_slide_id = $slide_id + 1;
                                            $next_slide_title = $rows[$next_slide_id - $first_service_slide_id]['index_service_slide_title'];
                                            $next_slide_slug = strtolower($next_slide_title);
                                            ?>
                                            <a href="#services/<?= $next_slide_slug; ?>"
                                               class="btn btn_next"><?= $next_slide_title; ?></a>
                                        <?php } else { ?>
                                            <a href="#services/services" class="btn btn_next">Услуги</a>
                                        <?php } ?>
                                    </div>
                                </div>
                            </div>
                            <?php $slide_id++; ?>
                        <?php } ?>
                    <?php } ?>
                </div>
                <!-- Проекты -->
                <?php if ($image = get_field('index_promo_bg')) { ?>
                <div id="section3" class="section section_projects fp-auto-height-responsive" style="background-image: url('<?php echo $image['url']; ?>')">
                <?php } ?>
                    <div class="section__inner">
                        <div class="projects_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.02 54.76" class="projects_img icon">
                                <path
                                    d="M22.94,48.11a4.83,4.83,0,0,0-2.64-2.26,6,6,0,0,0,.46,3.8A5.34,5.34,0,0,0,22.17,51a24.29,24.29,0,0,1-2.84-1,6.81,6.81,0,0,0,0-3.19,4.74,4.74,0,0,0-2.17-2.64A5.92,5.92,0,0,0,17,47.88a5.17,5.17,0,0,0,1.15,1.55c-0.56-.27-1.13-0.57-1.72-0.92-0.32-.18-0.64-0.36-1-0.57a6.67,6.67,0,0,0,.6-3.11,4.64,4.64,0,0,0-1.64-2.91,5.79,5.79,0,0,0-.83,3.58,5.37,5.37,0,0,0,.93,1.81,22,22,0,0,1-2.47-2.07,6.57,6.57,0,0,0,1.12-2.91,4.54,4.54,0,0,0-1.09-3.09,5.67,5.67,0,0,0-1.41,3.31,5.19,5.19,0,0,0,.57,1.87,25.52,25.52,0,0,1-2-2.47,6.44,6.44,0,0,0,1.55-2.59,4.48,4.48,0,0,0-.52-3.17,5.56,5.56,0,0,0-1.93,3A4.85,4.85,0,0,0,8.5,41a26.67,26.67,0,0,1-1.55-2.67A6.23,6.23,0,0,0,8.89,36a4.36,4.36,0,0,0,0-3.15,5.44,5.44,0,0,0-2.36,2.52,5,5,0,0,0-.1,1.88,23.89,23.89,0,0,1-1.12-3,6.17,6.17,0,0,0,2.3-1.86,4.28,4.28,0,0,0,.57-3,5.34,5.34,0,0,0-2.71,2,5.1,5.1,0,0,0-.42,1.91,22.45,22.45,0,0,1-.59-3.27,6.06,6.06,0,0,0,2.56-1.4,4.21,4.21,0,0,0,1.07-2.83,5.23,5.23,0,0,0-3,1.5,5.09,5.09,0,0,0-.74,1.79,21.67,21.67,0,0,1,0-3.45,5.9,5.9,0,0,0,2.74-.92,4.11,4.11,0,0,0,1.51-2.55,5.15,5.15,0,0,0-3.11.94,5.18,5.18,0,0,0-1.07,1.74,23.81,23.81,0,0,1,.64-3.59,5.75,5.75,0,0,0,2.8-.43,4,4,0,0,0,1.89-2.21A5,5,0,0,0,6.61,19a5,5,0,0,0-1.3,1.44,26.24,26.24,0,0,1,1.25-3.37,5.68,5.68,0,0,0,2.77.07,4,4,0,0,0,2.2-1.81,4.93,4.93,0,0,0-3.12-.17,5,5,0,0,0-1.5,1.18,26.4,26.4,0,0,1,1.81-3.12,5.55,5.55,0,0,0,2.71.56,3.88,3.88,0,0,0,2.43-1.37,4.81,4.81,0,0,0-3-.7,5.14,5.14,0,0,0-1.8,1,23.11,23.11,0,0,1,2.41-2.88,5.39,5.39,0,0,0,2.56,1A3.8,3.8,0,0,0,16.63,10a4.71,4.71,0,0,0-2.76-1.18,5.3,5.3,0,0,0-2,.73,18.43,18.43,0,0,1,1.42-1.23c0.54-.45,1.07-0.85,1.59-1.23A5.26,5.26,0,0,0,17.13,8.5a3.73,3.73,0,0,0,2.64-.44,4.65,4.65,0,0,0-2.47-1.61,5.2,5.2,0,0,0-2.08.35A25.45,25.45,0,0,1,18.52,4.9a5.13,5.13,0,0,0,2,1.8,3.63,3.63,0,0,0,2.63,0,4.53,4.53,0,0,0-2.1-2,5.62,5.62,0,0,0-2.25,0,24.19,24.19,0,0,1,2.3-.93,2.79,2.79,0,0,0,2,.24,4,4,0,0,0,1.81-1.23,5.09,5.09,0,0,0-2-.35A3.49,3.49,0,0,0,21,3.76c-0.52.16-1.13,0.38-1.83,0.66A5.44,5.44,0,0,0,20.8,2.9,4.54,4.54,0,0,0,20.94,0a3.65,3.65,0,0,0-1.87,1.84,5.11,5.11,0,0,0-.18,2.7,24.71,24.71,0,0,0-3.4,1.8,5.26,5.26,0,0,0,1.24-1.73,4.61,4.61,0,0,0-.36-2.92A3.73,3.73,0,0,0,14.81,3.9a5.23,5.23,0,0,0,.29,2.72c-0.66.44-1.34,0.93-2,1.49-0.31.23-.61,0.48-0.91,0.74A5,5,0,0,0,13,7.08a4.72,4.72,0,0,0-.88-2.87,3.8,3.8,0,0,0-1.18,2.47,5.38,5.38,0,0,0,.74,2.62A22.33,22.33,0,0,0,9.19,12a4.78,4.78,0,0,0,.46-1.83A4.81,4.81,0,0,0,8.26,7.45a3.87,3.87,0,0,0-.74,2.69,5.52,5.52,0,0,0,1.2,2.5,26.68,26.68,0,0,0-2,3.16,5.07,5.07,0,0,0,.15-2A4.93,4.93,0,0,0,5,11.34a4,4,0,0,0-.27,2.84,5.59,5.59,0,0,0,1.66,2.31A26.34,26.34,0,0,0,5.06,19.8a4.82,4.82,0,0,0-.2-1.86,5,5,0,0,0-2.34-2.17,4,4,0,0,0,.23,2.89,5.69,5.69,0,0,0,2,2A24.85,24.85,0,0,0,4.07,24a4.51,4.51,0,0,0-.5-1.62A5.12,5.12,0,0,0,.84,20.59a4.13,4.13,0,0,0,.75,2.87,5.84,5.84,0,0,0,2.35,1.63,22.6,22.6,0,0,0-.09,3.31,4.69,4.69,0,0,0-.78-1.51A5.25,5.25,0,0,0,0,25.6a4.21,4.21,0,0,0,1.26,2.75,6,6,0,0,0,2.66,1.23,22.68,22.68,0,0,0,.42,3.11,4.6,4.6,0,0,0-1-1.33A5.36,5.36,0,0,0,0,30.61a4.29,4.29,0,0,0,1.75,2.54,6.19,6.19,0,0,0,2.87.76,24.46,24.46,0,0,0,1,3,4.76,4.76,0,0,0-1.29-1.18,5.44,5.44,0,0,0-3.45-.17A4.37,4.37,0,0,0,3.1,37.78a6.34,6.34,0,0,0,3,.26,25.87,25.87,0,0,0,1.5,2.78,4.81,4.81,0,0,0-1.52-1,5.55,5.55,0,0,0-3.5.44,4.48,4.48,0,0,0,2.62,1.86,6.43,6.43,0,0,0,3.09-.28,26,26,0,0,0,1.85,2.4,4.65,4.65,0,0,0-1.56-.62A5.69,5.69,0,0,0,5.16,44.7a4.55,4.55,0,0,0,3,1.41,6.57,6.57,0,0,0,3-.8,24.16,24.16,0,0,0,2.13,2,4.51,4.51,0,0,0-1.53-.3,5.78,5.78,0,0,0-3.27,1.67,4.63,4.63,0,0,0,3.23.89,6.67,6.67,0,0,0,2.85-1.31q0.77,0.53,1.55,1l1,0.55a4.8,4.8,0,0,0-1.66,0,5.92,5.92,0,0,0-3,2.26,4.74,4.74,0,0,0,3.4.33,6.81,6.81,0,0,0,2.64-1.85A24,24,0,0,0,21.1,51.5a4.88,4.88,0,0,0-1.65.25,6,6,0,0,0-2.6,2.8,4.84,4.84,0,0,0,3.48-.28A7,7,0,0,0,22.64,52a21.69,21.69,0,0,0,3.8.72l0.09-.84a22.15,22.15,0,0,1-3-.51A7.53,7.53,0,0,0,22.94,48.11Z"/>
                                <path
                                    d="M56.25,33.13A4.29,4.29,0,0,0,58,30.59a5.33,5.33,0,0,0-3.31.76,4.57,4.57,0,0,0-1,1.33,22.23,22.23,0,0,0,.42-3.11,6,6,0,0,0,2.66-1.23A4.21,4.21,0,0,0,58,25.59,5.23,5.23,0,0,0,55,26.88a4.51,4.51,0,0,0-.78,1.51,22.89,22.89,0,0,0-.09-3.31,6,6,0,0,0,2.35-1.63,4.12,4.12,0,0,0,.75-2.87,5.13,5.13,0,0,0-2.73,1.77,4.51,4.51,0,0,0-.5,1.62,25.19,25.19,0,0,0-.73-3.3,5.75,5.75,0,0,0,2-2,4,4,0,0,0,.23-2.9,5,5,0,0,0-2.34,2.17,4.84,4.84,0,0,0-.2,1.86,26.44,26.44,0,0,0-1.36-3.31,5.57,5.57,0,0,0,1.66-2.31A4,4,0,0,0,53,11.32a4.92,4.92,0,0,0-1.89,2.49,5,5,0,0,0,.15,2,26.57,26.57,0,0,0-2-3.16,5.54,5.54,0,0,0,1.2-2.5,3.87,3.87,0,0,0-.74-2.69,4.83,4.83,0,0,0-1.4,2.73A4.9,4.9,0,0,0,48.82,12a22.5,22.5,0,0,0-2.45-2.7,5.41,5.41,0,0,0,.73-2.62,3.77,3.77,0,0,0-1.17-2.47A4.72,4.72,0,0,0,45,7.06a4.89,4.89,0,0,0,.81,1.76c-0.3-.26-0.61-0.51-0.91-0.74-0.69-.55-1.37-1-2-1.48a5.26,5.26,0,0,0,.29-2.72,3.73,3.73,0,0,0-1.55-2.18,4.63,4.63,0,0,0-.37,2.92,5.33,5.33,0,0,0,1.25,1.73,24.34,24.34,0,0,0-3.4-1.81,5.1,5.1,0,0,0-.18-2.69A3.65,3.65,0,0,0,37.07,0a4.54,4.54,0,0,0,.15,2.88A5.36,5.36,0,0,0,38.8,4.4C38.1,4.11,37.48,3.9,37,3.74a3.52,3.52,0,0,0-1.84-1.26,5.09,5.09,0,0,0-2,.35,4,4,0,0,0,1.81,1.23,2.8,2.8,0,0,0,2-.24,22.89,22.89,0,0,1,2.3.93,5.5,5.5,0,0,0-2.25,0,4.57,4.57,0,0,0-2.11,2,3.63,3.63,0,0,0,2.63,0,5.12,5.12,0,0,0,2-1.81,24.71,24.71,0,0,1,3.29,1.91,5.27,5.27,0,0,0-2.08-.35A4.63,4.63,0,0,0,38.23,8a3.73,3.73,0,0,0,2.65.44,5.3,5.3,0,0,0,2.29-1.42c0.52,0.37,1.06.78,1.59,1.23a18,18,0,0,1,1.42,1.24,5.45,5.45,0,0,0-2.05-.73A4.73,4.73,0,0,0,41.37,10a3.8,3.8,0,0,0,2.58.91,5.38,5.38,0,0,0,2.56-1,23.13,23.13,0,0,1,2.41,2.88,5.15,5.15,0,0,0-1.8-1,4.81,4.81,0,0,0-3,.69,3.88,3.88,0,0,0,2.43,1.37,5.45,5.45,0,0,0,2.71-.56,26.38,26.38,0,0,1,1.81,3.13,5,5,0,0,0-1.5-1.18,4.93,4.93,0,0,0-3.12.17,4,4,0,0,0,2.2,1.8,5.63,5.63,0,0,0,2.77-.07,26.25,26.25,0,0,1,1.25,3.37A5.06,5.06,0,0,0,51.39,19a5,5,0,0,0-3.16-.38,4,4,0,0,0,1.89,2.21,5.8,5.8,0,0,0,2.8.43,23.82,23.82,0,0,1,.64,3.59,5.21,5.21,0,0,0-1.07-1.73,5.1,5.1,0,0,0-3.11-.94,4.12,4.12,0,0,0,1.51,2.55,5.83,5.83,0,0,0,2.74.92,21.8,21.8,0,0,1,0,3.45,5.1,5.1,0,0,0-.73-1.79,5.24,5.24,0,0,0-3-1.5,4.2,4.2,0,0,0,1.07,2.83,6,6,0,0,0,2.55,1.4,22.11,22.11,0,0,1-.59,3.27,5.11,5.11,0,0,0-.42-1.91,5.31,5.31,0,0,0-2.71-2,4.3,4.3,0,0,0,.57,3,6.15,6.15,0,0,0,2.3,1.86,23.89,23.89,0,0,1-1.12,3,5.05,5.05,0,0,0-.1-1.87,5.46,5.46,0,0,0-2.36-2.52,4.37,4.37,0,0,0,0,3.15,6.29,6.29,0,0,0,2,2.25,26.22,26.22,0,0,1-1.56,2.67,4.85,4.85,0,0,0,.21-1.81,5.54,5.54,0,0,0-1.93-3,4.46,4.46,0,0,0-.53,3.17,6.35,6.35,0,0,0,1.55,2.59,25.07,25.07,0,0,1-2.05,2.47,5.27,5.27,0,0,0,.57-1.87,5.67,5.67,0,0,0-1.41-3.31,4.56,4.56,0,0,0-1.09,3.09,6.59,6.59,0,0,0,1.11,2.91,22.48,22.48,0,0,1-2.47,2.07,5.42,5.42,0,0,0,.93-1.81,5.81,5.81,0,0,0-.84-3.58,4.63,4.63,0,0,0-1.64,2.91,6.69,6.69,0,0,0,.6,3.11c-0.32.2-.65,0.39-1,0.57-0.59.34-1.16,0.65-1.72,0.92A5.17,5.17,0,0,0,41,47.86a5.92,5.92,0,0,0-.21-3.74,4.75,4.75,0,0,0-2.17,2.64,6.87,6.87,0,0,0,0,3.19,23.93,23.93,0,0,1-2.84,1,5.33,5.33,0,0,0,1.41-1.34,6,6,0,0,0,.46-3.8A4.83,4.83,0,0,0,35,48.09a7,7,0,0,0-.52,3.2,22.17,22.17,0,0,1-3,.51l0.09,0.84a21.67,21.67,0,0,0,3.8-.72,7,7,0,0,0,2.33,2.31,4.83,4.83,0,0,0,3.47.28,6,6,0,0,0-2.61-2.8,4.76,4.76,0,0,0-1.65-.25,26.41,26.41,0,0,0,2.66-1.07,6.82,6.82,0,0,0,2.65,1.85,4.74,4.74,0,0,0,3.4-.32,5.93,5.93,0,0,0-3-2.26,4.77,4.77,0,0,0-1.67,0c0.32-.17.64-0.35,1-0.55,0.51-.29,1-0.61,1.55-1a6.75,6.75,0,0,0,2.85,1.31,4.63,4.63,0,0,0,3.23-.89,5.79,5.79,0,0,0-3.27-1.67,4.53,4.53,0,0,0-1.53.3,24.13,24.13,0,0,0,2.13-2,6.53,6.53,0,0,0,3,.8,4.56,4.56,0,0,0,3-1.41,5.66,5.66,0,0,0-3.44-1.06,4.67,4.67,0,0,0-1.56.63,27.32,27.32,0,0,0,1.85-2.4,6.41,6.41,0,0,0,3.09.28,4.45,4.45,0,0,0,2.62-1.86,5.54,5.54,0,0,0-3.5-.44,4.91,4.91,0,0,0-1.52,1A25.87,25.87,0,0,0,51.88,38a6.29,6.29,0,0,0,3-.26,4.37,4.37,0,0,0,2.21-2.24,5.47,5.47,0,0,0-3.45.17,4.7,4.7,0,0,0-1.28,1.18,24.64,24.64,0,0,0,1-3A5.9,5.9,0,0,0,56.25,33.13Z"/>
                                <path
                                    d="M29,41.36a14,14,0,1,1,14-14A14,14,0,0,1,29,41.36Zm16.25-14A16.25,16.25,0,1,0,29,43.63,16.25,16.25,0,0,0,45.24,27.38Z"/>
                                <polygon
                                    points="31.76 24.48 29 18.88 26.23 24.48 20.05 25.38 24.52 29.73 23.47 35.89 29 32.98 34.52 35.89 33.47 29.73 37.94 25.38 31.76 24.48"/>
                            </svg>
                        </div>
                        <h2 class="section__header"><?php the_field('index_promo_title'); ?></h2>
                        <p class="section__desc">
                            <?php the_field('index_promo_text'); ?>
                        </p>
                        <span class="btn btn_blue popup_open" data-popup-id='2'>Оставить заявку на участие</span>
                    </div>
                </div>
                <!-- Клиенты -->
                <div id="section4" class="section section_clients fp-auto-height-responsive">
                    <div class="section__inner">
                        <h2 class="section__header">Наши клиенты</h2>
                        <div class="clients">
                            <?php
                            while (have_rows('index_clients_slide')) {
                                the_row();
                                while (have_rows('index_clients_slide_client')) {
                                    the_row();
                                    ?>
                                    <div class="client">
                                        <div class="client__img">
                                            <?php if ($image = get_sub_field('index_clients_slide_client_img')) { ?>
                                                <img class="img_white" src="<?php echo $image['url']; ?>">
                                            <?php } ?>
                                            <span class="client__img_hover">
                                        <?php if ($image = get_sub_field('index_clients_slide_client_img_h')) { ?>
                                            <img class="img_color" src="<?php echo $image['url']; ?>">
                                        <?php } ?>
                                    </span>
                                        </div>
                                    </div>
                                <?php } ?>
                            <?php } ?>
                        </div>
                    </div>
                </div>
                <!-- Партнеры -->
                <div id="section5" class="section section_partners fp-auto-height-responsive">
                    <div class="section__inner">
                        <h2 class="section__header">Наши партнеры</h2>
                        <div class="partners">
                            <?php
                            while (have_rows('index_partners_slide')) {
                                the_row();
                                while (have_rows('index_partners_slide_client')) {
                                    the_row();
                                    ?>
                                    <div class="partner">
                                        <div class="partner__img">
                                            <?php if ($image = get_sub_field('index_partners_slide_client_img')) { ?>
                                                <img class="img_white" src="<?php echo $image['url']; ?>">
                                            <?php } ?>
                                            <span class="partner__img_hover">
                                        <?php if ($image = get_sub_field('index_partners_slide_client_img_h')) { ?>
                                            <img class="img_color" src="<?php echo $image['url']; ?>">
                                        <?php } ?>
                                    </span>
                                        </div>
                                    </div>
                                <?php } ?>
                            <?php } ?>
                        </div>
                    </div>
                </div>
                <!-- Контакты -->
                <div id="section6" class="section section_contacts">
                    <div class="section__inner">
                        <div class="contacts__block">
                            <h2 class="section__header">Контакты</h2>
                            <span class="contact address">
                                <? the_field('address', 'option'); ?>
                            </span>
                            <span class="contact telephone">
                                <? the_field('phone', 'option'); ?>
                            </span>
                            <span class="contact email">
                                <a href="mailto:<? the_field('mail', 'option'); ?>"><? the_field('mail', 'option'); ?></a>
                            </span>
                            <div class="popup__social social">
                                <a href="<? the_field('facebook', 'option'); ?>" target="_blank" class="social__item social__item_fb-p"></a>
                                <a href="<? the_field('instagram', 'option'); ?>" target="_blank" class="social__item social__item_insta-p"></a>
                                <a href="<? the_field('twitter', 'option'); ?>" target="_blank" class="social__item social__item_tw-p"></a>
                            </div>
                        </div>
                    </div>
                    <div id="map" class="map"></div>
                </div>
            </div>
        </div>
        <!-- Попап меню -->
        <div data-id="1" class="popup popup1 popup_menu">
            <div class="popup__inner">
                <div class="popup__menu-item">
                    <a href="#intro" class="logo_header">
                        <img src="<?= tmpl_img; ?>logo.png" alt="Solution-P logotype" class="logo__img_header"></a>
                </div>
                <div class="popup__menu-item">
                    <a href="#services" class="menu__link popup_close">Наши услуги</a>
                </div>
                <div class="popup__menu-item popup_close">
                    <a href="#projects" class="menu__link popup_close">Проекты</a>
                </div>
                <div class="popup__menu-item popup_close">
                    <a href="#clients" class="menu__link popup_close">Клиенты</a>
                </div>
                <div class="popup__menu-item popup_close">
                    <a href="#partners" class="menu__link popup_close">Партнеры</a>
                </div>
                <div class="popup__menu-item popup_close">
                    <a href="#contacts" class="menu__link popup_close">Контакты</a>
                </div>
                <div class="btn btn_blue popup_open" data-popup-id='2'>
                    Заказать звонок
                </div>
                <div class="btn btn_white popup_open" data-popup-id='2'>
                    Оставить сообщение
                </div>
                <span class="btn btn_close popup_close"></span>
            </div>
        </div>
        <!-- Попап Связаться / Заказать звонок -->
        <div data-id="2" class="popup popup2 popup_contacts">
            <div class="popup__inner">
                <span class="btn btn_close popup_close"></span>
                <h3 class="popup_header">
                    <div class="switch-title switch-title_left">
                        Заказать звонок
                    </div>
                    <div class="popup__switcher switch">
                        <span class="switch__item"></span>
                    </div>
                    <div class="switch-title switch-title_right switch-title_disable">
                        Оставить сообщение
                    </div>
                </h3>
                <div class="blocks">
                    <div class="popup-block ">
                        <?php echo do_shortcode( '[contact-form-7 id="123" title="Заказать звонок"]' ); ?>
                    </div>
                    <div class="popup-block popup-block_hidden">
                        <?php echo do_shortcode( '[contact-form-7 id="124" title="Оставить сообщение"]' ); ?>
                    </div>
                </div>
                <div class="popup__contacts contacts">
                    <div class="contacts__item contacts__item_phone contacts__item_phone-popup">
                        <? the_field('phone', 'option'); ?>
                    </div>
                    <a href="mailto:info@solutionp.ru" class="contacts__item contacts__item_mail contacts__item_mail-popup">
                        <? the_field('mail', 'option'); ?>
                    </a>
                </div>
                <div class="popup__social social">
                    <a href="<? the_field('facebook', 'option'); ?>" target="_blank" class="social__item social__item_fb-p"></a>
                    <a href="<? the_field('instagram', 'option'); ?>" target="_blank" class="social__item social__item_insta-p"></a>
                    <a href="<? the_field('twitter', 'option'); ?>" target="_blank" class="social__item social__item_tw-p"></a>
                </div>
            </div>
        </div>
    </div>
<? get_footer(); ?>