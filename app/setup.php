<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 */

namespace WBL_Blocks;

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

/**
 * Setup at regular hook
 */
add_action( 'plugins_loaded', function() {

	// Load dynamic blocks
	// include( App::blocks_path( 'posts/index.php' ) );

	// Hook assets
	add_action( 'enqueue_block_assets',        __NAMESPACE__ . '\block_assets' );        // Hook: Frontend+backend assets.
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_editor_assets' ); // Hook: Backend assets.

}, 10);


/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 */
function block_assets() {

	// Styles.
	wp_enqueue_style(
		'wbl-blocks',
		App::asset( 'css/blocks.css' )
	);
}


/**
 * Enqueue Gutenberg block assets for backend editor.
 */
function block_editor_assets() {

	// Scripts.
	wp_enqueue_script(
		'wbl-blocks-editor',
		App::asset( 'js/blocks.js' ),
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

	// Styles
	// By depending on frontend-style the editor style is later in the cascade
	wp_enqueue_style(
		'wbl-blocks-editor',
		App::asset( 'css/blocks.editor.css' ),
		array( 'wp-edit-blocks', 'wbl-blocks' )
	);
}
