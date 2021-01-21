<?php

use function WBL_Blocks\render_posts_post;

$args = wp_parse_args( $args, [
	'post_type' => 'post',
	'posts_per_page' => 3,
]);

// Setup the query
$custom_query = new \WP_Query( $args );

?>
<div class="posts">

	<?php if ($custom_query->have_posts()) : ?>

		<?php while ( $custom_query->have_posts() ) : $custom_query->the_post(); ?>

			<?php echo render_posts_post(); ?>

			<?php wp_reset_postdata(); ?>

		<?php endwhile; ?>

	<?php else : ?>

		<p><?= __('No results', 'wbl-blocks') ?></p>

	<?php endif; ?>

</div>
