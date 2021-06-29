<?php
/**
 * Archive Loop
 */

namespace WBL\Blocks;

// Register blocks
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\register_archive_loop_block_script' );

// Register dynamic blocks
add_action( 'init', 					   __NAMESPACE__ . '\register_archive_loop_block' );

/**
 * Add the blocks script to the editor
 */
function register_archive_loop_block_script() {

	// Scripts.
	wp_enqueue_script(
		'wbl-block-archive-loop',
		App::asset( 'js/archive-loop.js' ),
		[
			'lodash',
			'wp-blocks',
			'wp-components',
			'wp-data',
			'wp-editor',
			'wp-element',
			'wp-i18n',
		],
		null,
		true // Enqueue the script in the footer.
	);
}


/**
 * Registers the Archive Loop block.
 */
function register_archive_loop_block() {

	register_block_type_from_metadata( App::blocks_path( 'archive-loop' ), [
		'render_callback' => __NAMESPACE__ . '\render_archive_loop_block',
	] );
}

/**
 * Renders the Archive Loop block.
 *
 * @param array $attributes The block attributes.
 * @return string
 */
function render_archive_loop_block( $attributes ) {

	$render = apply_filters( 'wbl/blocks/archive-loop/render', false, $attributes );

	return $render;
}
