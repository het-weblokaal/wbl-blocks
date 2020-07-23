<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 */

namespace HWL\Blokkendoos;

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

// // Dynamic Blocks
// include( Plugin::get_file_path( 'blocks/latest-posts/index.php' ) );
// include( Plugin::get_file_path( 'blocks/contact-form/index.php' ) );
// include( Plugin::get_file_path( 'blocks/social-media/index.php' ) );

// Hook assets
add_action( 'enqueue_block_assets',        __NAMESPACE__ . '\block_assets' );        // Hook: Frontend+backend assets.
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_editor_assets' ); // Hook: Backend assets.


/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 */
function block_assets() {

	// // Styles.
	// wp_enqueue_style(
	// 	'ejo-base-blocks',
	// 	Plugin::get_file_uri( '/blocks/blocks.css' ),
	// 	array( 'wp-editor' ),
	// 	filemtime( Plugin::get_dir() . '/assets/css/blocks.css' ) // Version: File modification time.
	// );
}


/**
 * Enqueue Gutenberg block assets for backend editor.
 */
function block_editor_assets() {

	// Scripts.
	wp_enqueue_script(
		'hwl-blokkendoos-editor',
		Plugin::get_file_uri( '/blocks/blocks.js' ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-data', 'wp-components', 'lodash' ),
		filemtime( Plugin::get_dir() . '/assets/js/blocks.js' ),
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'hwl-blokkendoos-editor',
		Plugin::get_file_uri( '/blocks/blocks.editor.css' ),
		array( 'wp-edit-blocks' ),
		filemtime( Plugin::get_dir() . '/assets/css/blocks.editor.css' )
	);
}
