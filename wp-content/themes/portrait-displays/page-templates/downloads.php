<?php
/**
 * Template Name: Downloads
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

<?php
_s_get_template_part( 'template-parts/global', 'hero' );
?>

<div id="primary" class="content-area">

    <main id="main" class="site-main" role="main">

	<?php
	$args = array( 
	'post_type' => 'downloads',
	'posts_per_page' => -1 ,
	'order' => 'DESC'
	
	);
	
	$loop = new WP_Query( $args );
	
	while ( $loop->have_posts() ) : $loop->the_post();?>
	  
	  	<section class="single-product-download">
		  	
		  	<div class="row columns">
		  	
			  	<div class="spd-top">
				  				  	
					<h2><?php the_title();?></h2>
	
					<div class="row">
	
					  	<div class="columns small-12 medium-6">
					  	<?php if( have_rows('system_requirements') ):?>
					  		<h3>System Requirements</h3>
					  		<?php while ( have_rows('system_requirements') ) : the_row();?>	
					  		
					  		<?php the_sub_field('note');?>
					  		
						  		<?php if( have_rows('requirement_list') ):?>
						  			<ul class="fancy-bullets">
						  			<?php while ( have_rows('requirement_list') ) : the_row();?>	
						  				<li><?php the_sub_field('single_requirement');?></li>
						  			<?php endwhile;?>
						  			</ul>
						  		<?php endif;?>
					  	
					  		<?php endwhile;?>
					  	<?php endif;?>
					  	</div>
					  	
				  	</div>
					  	
				  	<div class="columns small-12 medium-6 download-form">
					  
				  	</div>
				  	
			  	</div>
				  	
			  	<div class="tab-nav">
				  	
				  	<button class="no-style-button tab-nav-button release-notes-button">
				  		<div class="plus-wrap">
				  			<span class="plus-line plus-line-h"></span>
				  			<span class="plus-line plus-line-v"></span>
				  		</div>
				  		Release Notes
				  	</button>
				  	
<!--
				  	<a class="tab-nav-button" href="#">
				  		<div class="plus-wrap">
				  			<span class="plus-line plus-line-h"></span>
				  			<span class="plus-line plus-line-v"></span>
				  		</div>					  	
				  		Product Page
					</a>
-->
				  	
				  	<button class="no-style-button tab-nav-button legacy-downloads-button">
				  		<div class="plus-wrap">
				  			<span class="plus-line plus-line-h"></span>
				  			<span class="plus-line plus-line-v"></span>
				  		</div>
				  		Legacy Downloads
				  	</button>
				  	
			  	</div>
			  	
			  	<div class="tab-content-wrap">
				  	
				  	<div class="release-notes tab-content">
					  	<?php the_field('release_notes');?>
				  	</div>
				  	
				  	<div class="legacy-versions tab-content">
						<?php if( have_rows('legacy_downloads') ):?>
							<?php while ( have_rows('legacy_downloads') ) : the_row();?>	
								
								<?php if( have_rows('single_legacy_version') ):?>
									<?php while ( have_rows('single_legacy_version') ) : the_row();?>	
								
										<div class="single-legacy-version">
											
											<h3>
												<div class="legacy-name-accent-wrap">
													<span class="dash"></span>
													<span class="ring">
														<svg height="17" width="17">
														  <circle cx="8.5" cy="8.5" r="8.5" />
														</svg>
													</span>
												</div>
												<?php the_sub_field('version_name');?>
											</h3>
											
											<h4 class="release-date"><?php the_sub_field('release_date');?></h4>
											
											<h4><?php the_sub_field('highlights_of_improvements');?></h4>
											
											
											<?php 
											$file = get_sub_field('download_file');
											if( $file ): ?>
												<h4 class="legacy-link"><a href="<?php echo $file['url']; ?>" download>Download <?php echo $file['title']; ?><span class="legacy-link-underline"></span></a></h4>
											<?php endif; ?>
											
											
										</div>
								
									<?php endwhile;?>
								<?php endif;?>
								
							<?php endwhile;?>
						<?php endif;?>
					</div>
				  	
			  	</div>
			  	
		  	</div>
		  	
		  	
	  	</section>
	  
	<?php endwhile; wp_reset_query();?>              
    
    </main>

</div>


<?php
get_footer();