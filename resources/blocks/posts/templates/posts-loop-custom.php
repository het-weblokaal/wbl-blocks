<?php
$args = [
	'post_type' => 'post',
	'posts_per_page' => 3,
];

if ( ! $args ) {
	return;
}

// Setup the query
$custom_query = new \WP_Query( $args );

?>
<div class="posts">

	<?php if ($custom_query->have_posts()) : ?>

		<?php while ( $custom_query->have_posts() ) : $custom_query->the_post(); ?>

			<?php echo \HWL\Blokkendoos\render_posts_post(); ?>

			<?php wp_reset_postdata(); ?>

		<?php endwhile; ?>

	<?php else : ?>

		<p><?= __('No results', 'hwl-wbl') ?></p>

	<?php endif; ?>

</div>
