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

	// return render_posts();
	return '<h2>HWL Blokkendoos - Posts</h2>';
}

