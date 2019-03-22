<?php
/**
 * Template Name: Contact
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */

get_header(); ?>

<div id="primary" class="content-area">

    <main id="main" class="site-main row columns" role="main">
	    
	    <a id="back-to-previous-link" href="javascript:history.back()"><img src="/wp-content/themes/portrait-displays/assets/svg/back-arrow.svg"/><span id="back-to-previous-text">Back to website</span></a>
	    
	    		<div class="row">

				<div class="row columns small-12 medium-12 large-5">
					<?php
					_s_get_template_part( 'template-parts/global', 'contact-form' );
					?>
				</div>
				
				<div class="google-map">
		
				</div>
   
	    		</div>
    
    </main>

</div>


<?php
get_footer();