<?php
// Multipurpose - Centered 1/2 Width Copy w/Optional Link

if( get_row_layout() == 'centered_12_width_copy_woptional_link' ):?>
	<section class="flex-centered-half-width-copy">
		
		<?php if ( get_sub_field('heading')):?>
		<h2><?php the_sub_field('heading');?></h2>
		<?php endif;

		if ( get_sub_field('copy')):?>
		<p><?php the_sub_field('copy');?></p>
		<?php endif;
		
		$link = get_sub_field('link');
		if( $link ): 
		$link_url = $link['url'];
		$link_title = $link['title'];
		$link_target = $link['target'] ? $link['target'] : '_self';?>
		<a class="button" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
		<?php endif;?>
		
	</section>
<?php endif;?>
