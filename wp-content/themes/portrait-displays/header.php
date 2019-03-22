<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo THEME_FAVICONS;?>/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo THEME_FAVICONS;?>/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo THEME_FAVICONS;?>/favicon-16x16.png">
<link rel="manifest" href="<?php echo THEME_FAVICONS;?>/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2B70AA">
<meta name="msapplication-TileColor" content="#2B70AA">
<meta name="theme-color" content="#ffffff">
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <ul class="skip-link screen-reader-text">
        <li><a href="#content" class="screen-reader-shortcut"><?php esc_html_e( 'Skip to content', '_s' ); ?></a></li>
        <li><a href="#footer" class="screen-reader-shortcut"><?php esc_html_e( 'Skip to footer', '_s' ); ?></a></li>
    </ul>

	<?php if (!is_page_template('page-templates/contact.php')):?>
    <header id="masthead" class="site-header" role="banner" itemscope itemtype="https://schema.org/WPHeader">
	    
	    <?php if( have_rows('top_bar_message', 'option') ):?>
	   	    <div id="top-bar-message-wrap">
	    	<?php while ( have_rows('top_bar_message', 'option') ) : the_row();?>
	    	
			    <div id="top-bar-message" class="row align-center text-center">
				    <p class="text-center"><span><?php the_sub_field('text', 'option');?></span>
					    <?php 
						$link = get_sub_field('link', 'option');
						if( $link ): 
							$link_url = $link['url'];
							$link_title = $link['title'];
							$link_target = $link['target'] ? $link['target'] : '_self';
							?>
							<a href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?>
							
								<span class="arrow-wrap">
									<img src="/wp-content/themes/portrait-displays/assets/svg/top-alert-blue-link-arrow.svg"/>
									<img class="top-arrow" src="/wp-content/themes/portrait-displays/assets/svg/gray-link-arrow.svg"/>
								</span>
								
							</a>
						<?php endif; ?>
					</p>
			    </div>
				    
	    	<?php endwhile;?>
	    	        <img class="header-alert-close" src="/wp-content/themes/portrait-displays/assets/svg/gray-close.svg"/>

			</div>
	    <?php endif; ?>

	    
        <div class="wrap row align-bottom">
            <div class="columns small-12 medium-6">

                <div class="site-branding">
                    <div class="site-title">
                    <?php
                    $site_url = home_url();
                    $logo = sprintf('<img src="%slogo.svg" alt="site logo" class="" />', trailingslashit( THEME_IMG ) );    
                    printf('<a href="%s" title="%s">%s</a>',
                            $site_url, 
                            get_bloginfo( 'name' ), 
                            $logo );
                    ?>
                    </div>
                </div><!-- .site-branding -->
                
            </div>


            <div id="site-nav-wrap" class="columns small-12 medium-6">	                    
                <nav id="site-navigation" class="nav-primary columns" role="navigation" aria-label="Main" itemscope itemtype="https://schema.org/SiteNavigationElement">  
	                          
					<div id="upper-nav">
							<a id="contact-modal-button" href="#"><span class="upper-nav-skew-correct"><span class="upper-link-text"><?php the_field('lets_talk_label', 'option');?></span></span></a>
							<?php 
							$link = get_field('store_link', 'option');
							if( $link ): 
								$link_url = $link['url'];
								$link_title = $link['title'];
								$link_target = $link['target'] ? $link['target'] : '_self';
								?>
							<a id="upper-nav-store-link" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><span class="upper-nav-skew-correct"><img src="/wp-content/themes/portrait-displays/assets/svg/shopping-cart.svg"/><span class="upper-link-text"><?php echo esc_html($link_title); ?></span></span></a>
						<?php endif; ?>	                	
					</div>  
                	      
                <?php
                                            
                    // Desktop Menu
                    $args = array(
                        'theme_location' => 'primary',
                        'menu' => 'Primary Menu',
                        'container' => '',
                        'container_class' => '',
                        'container_id' => '',
                        'menu_id'        => 'js-superfish',
                        'menu_class'     => 'primary-menu menu',
                        'before' => '',
                        'after' => '',
                        'link_before' => '',
                        'link_after' => '',
                        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                     );
                    wp_nav_menu($args);
                ?>
                
                </nav>
            </div>
        </div><!-- wrap -->
                 
    </header><!-- #masthead -->
    <?php endif;?>
    
    <div id="page" class="site-container">
        
        <div id="content" class="site-content">