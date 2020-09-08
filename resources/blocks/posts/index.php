<?php
/**
 * Posts
 */

namespace HWL\Blokkendoos;

// Register blocks
add_action( 'init', __NAMESPACE__ . '\register_block_posts' );

/**
 * Registers the Posts block.
 */
function register_block_posts() {
	register_block_type(
		'hwl-blokkendoos/posts',
		[
			'attributes'      => [],
			'render_callback' => __NAMESPACE__ . '\render_block_posts',
		]
	);
}

/**
 * Renders the Posts block.
 *
 * @param array $attributes The block attributes.
 * @return string
 */
function render_block_posts( $attributes = [] ) {

	// return '<h2>HWL Blokkendoos - Posts</h2>';
	return render_posts();
}

/**
 * Render Posts
 *
 * @return string
 */
function render_posts() {
	$output = '';

	if (is_search()) {
		$output = render_posts_archive();
	}
	elseif (is_home() || is_archive()) {
		$output = render_posts_archive();
	}
	else {
		$output = render_posts_custom();
	}

	return $output;
}


/**
 * Render Posts
 *
 * @return string
 */
function render_posts_archive() {

	ob_start();

	?>
	<section class="posts">

		<?php if ( have_posts() ) : ?>

			<?php while ( have_posts() ) : the_post(); ?>

				<?php echo render_posts_post(); ?>

			<?php endwhile; ?>

			<?php echo render_posts_pagination(); ?>

		<?php else : ?>

			<p><?= __('No results', 'hwl-wbl') ?></p>

		<?php endif; ?>

	</section>
	<?php

	/**
	 * I encounter a ghost paragraph weirdly...
	 *
	 * Haven't found a good solution. Just hide it through css.
	 * Edit: probably due to wp_autop
	 *
	 * @link https://stackoverflow.com/questions/34371275/php-output-buffering-with-template-file-results-in-line-breaks-and-empty-paragra
	 * @link https://github.com/WordPress/gutenberg/issues/12646
	 */
	return ob_get_clean();
}

/**
 * Render Posts
 *
 * @param array $args	WP_Query args
 * @return string
 */
function render_posts_custom( $args = null ) {

	$args = [
		'post_type' => 'post',
		'posts_per_page' => 3,
	];

	if ( ! $args ) {
		return '';
	}

	// Setup the query
	$custom_query = new \WP_Query( $args );

	// Keep track of date
	$date = '';

	ob_start();
	?>
	<section class="posts">
		<?php
		if ($custom_query->have_posts()) {
			while ( $custom_query->have_posts() ) {
				$custom_query->the_post();

				echo render_posts_post();

				wp_reset_postdata();
			}
		} else {
			echo '<p>' . __('No results', 'hwl-wbl') . '</p>';
		}

		?>
	</section>
	<?php

	return ob_get_clean();
}

function render_posts_post() {

	ob_start();

	$template = apply_filters( 'hwl-blokkendoos/posts/post-template', 'posts-post' );

	$run_template = get_template_part( $template );

	/**
	 * If template is not found in theme, fallback to default plugin template
	 */
	if ( ! $run_template ) {
		load_template( App::get_src_path( 'blocks/posts/posts-post.php' ), false );
	}

	return ob_get_clean();
}

function render_posts_pagination() {

	return get_the_posts_pagination([
	    'mid_size'           => 1,
	    'prev_text'          => _x( 'Previous', 'previous set of posts' ),
	    'next_text'          => _x( 'Next', 'next set of posts' ),
	    'screen_reader_text' => sprintf( __( '%s navigation', 'hwl-wbl' ), __( 'Posts' ) ),
	    'aria_label'         => __( 'Posts' ),
	]);
}
