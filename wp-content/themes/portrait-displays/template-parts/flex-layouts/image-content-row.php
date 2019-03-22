<?php
// Multipurpose - Image and Content Row

if( get_row_layout() == 'image_and_content_row' ):
		        
	$row_bg_color = get_sub_field('row_background_color'); 			    
	$image_style = get_sub_field('image_style');
	$image_alignment = get_sub_field('image_alignment');
	$content_type = get_sub_field('content_type');
	$image = get_sub_field('image');
	$size = 'flex-page-standard';
	?>

	<section class="image-content-row row-bg-<?php echo $row_bg_color ?> row-img-align-<?php echo $image_alignment ?>">
								
		<?php if( $image ):?>
		<div class="ic-row-img-wrap ic-row-half">
		<?php echo wp_get_attachment_image( $image, $size );?>
		</div>
		<?php endif;
			
			
		if( $content_type == 'copy'):
		if( have_rows('copy_woptional_link') ):
			while ( have_rows('copy_woptional_link') ) : the_row();
			
			$link = get_sub_field('link');?>
			<div class="ic-copy-wrap ic-row-half">
				
				<?php if ( get_sub_field('heading')):?>
				<h2><?php the_sub_field('heading');?></h2>
				<?php endif;

				if ( get_sub_field('copy')):?>
				<p><?php the_sub_field('copy');?></p>
				<?php endif;
				
				if( $link ): 
				$link_url = $link['url'];
				$link_title = $link['title'];
				$link_target = $link['target'] ? $link['target'] : '_self';?>
				<a class="button" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
				<?php endif;?>
				
			</div>
			<?php endwhile;
				
		endif;
		endif;
		
		
		if( $content_type == 'list'):
		if( have_rows('bulleted_list_woptional_link') ):
			while ( have_rows('bulleted_list_woptional_link') ) : the_row();
			
			$link = get_sub_field('link');?>
			<div class="ic-copy-wrap ic-row-half">
				
				<?php if ( get_sub_field('heading')):?>
				<h2><?php the_sub_field('heading');?></h2>
				<?php endif;

				
				if( have_rows('list') ):?>
					<ul class="ic-list">
					<?php while ( have_rows('list') ) : the_row();?>	
						<li><?php the_sub_field('single_row');?></li>
					<?php endwhile;?>
					</ul>
				<?php endif;


				if( $link ): 
				$link_url = $link['url'];
				$link_title = $link['title'];
				$link_target = $link['target'] ? $link['target'] : '_self';?>
				<a class="button" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
				<?php endif;?>
				
			</div>
			<?php endwhile;
				
		endif;
		endif; ?>
			
	</section>





<?php endif;?>
