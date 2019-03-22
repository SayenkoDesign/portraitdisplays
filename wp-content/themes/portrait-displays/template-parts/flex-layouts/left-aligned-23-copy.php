<?php
// Multipurpose - Left Aligned 2/3 Width Copy

if( get_row_layout() == 'left_aligned_23_width_copy' ):?>
	
	<section>
		<?php if ( get_sub_field('heading')):?>
		<h2><?php the_sub_field('heading');?></h2>
		<?php endif;

		if ( get_sub_field('copy')):?>
		<p><?php the_sub_field('copy');?></p>
		<?php endif;?>
	</section>

<?php endif;?>
