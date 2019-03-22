<?php

/****************************************
	Enqueue theme stylesheet
	*****************************************/

function _s_enqueue_stylesheet() {

	$version = defined( 'THEME_VERSION' ) && THEME_VERSION ? THEME_VERSION : '1.0';
	$handle  = defined( 'THEME_NAME' ) && THEME_NAME ? sanitize_title_with_dashes( THEME_NAME ) : 'theme';

	//$stylesheet = SCRIPT_DEBUG === true ? 'style.css' : 'style.min.css';
	$stylesheet = 'style.css';

	wp_enqueue_style( $handle, trailingslashit( THEME_URL ) . $stylesheet, false, $version );
 }

add_action( 'wp_enqueue_scripts', '_s_enqueue_stylesheet', 15 );


/****************************************
	Image Sizes
	*****************************************/
// Background Images
add_image_size( 'hero', 1350, 1009 );
add_image_size( 'footer-cta-bg', 1440, 522 );
add_image_size( 'home-solution-link', 487, 288 );

// Retina Images
add_image_size( 'hero-display', 429, 9999 );
add_image_size( 'why-us-circle', 130, 130, true );
add_image_size( 'why-us-circle@2x', 260, 260, true );
add_image_size( 'multi-purpose-row', 554, 348 );
add_image_size( 'company-vision', 564, 367 );
add_image_size( 'company-collage', 500, 9999 );
add_image_size( 'leadership-card', 279, 187 );
add_image_size( 'flex-page-standard', 554, 9999 );



// Add Column Class to Footer Navigation li
function add_additional_class_on_li($classes, $item, $args) {
    if($args->add_li_class) {
        $classes[] = $args->add_li_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);