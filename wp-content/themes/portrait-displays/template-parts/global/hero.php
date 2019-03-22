<!-- Global Hero -->

<div id="page-top">	
	<?php if(is_front_page()):?>
	<img id="header-left-fins" src="wp-content/themes/portrait-displays/assets/svg/hero-left-fins.svg"/>
	<?php endif;?>
	
	<?php
	$img_id = get_field('page_top_background_image');
	$img_size = "hero";
	$imgarr = wp_get_attachment_image_src( $img_id, $img_size );?>
		<div id="page-top-image" style="background-image: url(<?php echo $imgarr[0]; ?> );background-repeat:no-repeat;background-size: cover;background-position: center center;">
			<?php if( get_field('page_top_image_mask_color') == 'blue' ): ?>
				<div id="page-top-blue-mask" class="page-top-mask"></div>
			<?php endif; ?>
			<?php if( get_field('page_top_image_mask_color') == 'black' ): ?>
				<div id="page-top-black-mask" class="page-top-mask"></div>
			<?php endif; ?>	

<!-- 				<div id="home-hero-curve" style="background: url('/wp-content/themes/portrait-displays/assets/svg/Home Hero Mask.svg');background-repeat: no-repeat;"></div>  -->
				
			<?php if(is_front_page()):?>
			<img id="home-hero-curve" class="hero-curve" src="/wp-content/themes/portrait-displays/assets/svg/home-hero-mask.svg"/>
			<?php endif;?>
			
			<?php if(!is_front_page()):?>
			<img id="interior-hero-curve" class="hero-curve" src="/wp-content/themes/portrait-displays/assets/svg/interior-hero-mask.svg"/>
			<?php endif;?>
	
		</div>
		
					
	<div class="row align-middle">
		
		<div class="hero-content-half top-heading columns small-12 medium-6 large-6">
		
			<h1><?php the_field('page_top_heading');?></h1>
			<h4><?php the_field('page_top_subtext');?></h4>
			
			<?php 
			$link = get_field('page_top_blue_button');
			if( $link ): 
				$link_url = $link['url'];
				$link_title = $link['title'];
				$link_target = $link['target'] ? $link['target'] : '_self';
				?>
				<a class="button blue-button" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
			<?php endif; ?>
			
			<?php 
			$link = get_field('page_top_white_button');
			if( $link ): 
				$link_url = $link['url'];
				$link_title = $link['title'];
				$link_target = $link['target'] ? $link['target'] : '_self';
				?>
				<a class="button white-button" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
			<?php endif; ?>
			
		</div>
		
		<div class="hero-content-half text-right columns small-12 medium-6 large-6">				
			<?php 
			$image = get_field('display_image_for_page_top');
			$size = 'full'; // (thumbnail, medium, large, full or custom size)
			if( $image ) {
				echo wp_get_attachment_image( $image, $size );
			}
			?>	
		</div>
		
	</div>
	
		<img id="header-right-fins" src="/wp-content/themes/portrait-displays/assets/svg/hero-right-fins.svg"/>
			
</div>
