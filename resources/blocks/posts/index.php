<?php
/**
 * Posts
 */

namespace WBL\Blocks;

// Register blocks
add_action( 'init', __NAMESPACE__ . '\register_block_posts' );

/**
 * Registers the Posts block.
 */
function register_block_posts() {
	register_block_type(
		'wbl-blocks/posts',
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

	$template = 'posts-loop';

	ob_start();

	// Run template or fallback to default plugin template
	if ( false === get_template_part( get_posts_template_for_themes( $template ) ) ) {
		load_template( App::get_src_path( "blocks/posts/templates/{$template}.php" ), false );
	}

	return ob_get_clean();
}

/**
 * Render Posts
 *
 * @param array $args	WP_Query args
 * @return string
 */
function render_posts_custom( $args = null ) {

	$template = 'posts-loop-custom';

	ob_start();

	// Run template or fallback to default plugin template
	if ( false === get_template_part( get_posts_template_for_themes( $template ), null, $args ) ) {
		load_template( App::get_src_path( "blocks/posts/templates/{$template}.php" ), false );
	}

	return ob_get_clean();
}

function render_posts_post() {

	$template = 'posts-post';

	ob_start();

	// Run template or fallback to default plugin template
	if ( false === get_template_part( get_posts_template_for_themes( $template ) ) ) {
		load_template( App::get_src_path( "blocks/posts/templates/{$template}.php" ), false );
	}

	return ob_get_clean();
}

function render_posts_pagination() {

	$template = 'posts-pagination';

	ob_start();

	// Run template or fallback to default plugin template
	if ( false === get_template_part( get_posts_template_for_themes( $template ) ) ) {
		load_template( App::get_src_path( "blocks/posts/templates/{$template}.php" ), false );
	}

	return ob_get_clean();
}

/**
 * Get the posts template for themes to use
 *
 * @param 	string $template
 * @return 	string relative theme path
 */
function get_posts_template_for_themes( $template ) {

	$template_dir = apply_filters( 'wbl-blocks/templates/directory', '' );
	$template_dir = $template_dir ? trailingslashit($template_dir) : '';

	$template = apply_filters( "wbl-blocks/templates/{$template}", $template );

	return $template_dir . $template;
}
