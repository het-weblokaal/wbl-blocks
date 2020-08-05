<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 */

namespace HWL\Blokkendoos;

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

// Load dynamic blocks
include( App::get_src_path( 'blocks/index.php' ) );

// Hook assets
add_action( 'enqueue_block_assets',        __NAMESPACE__ . '\block_assets' );        // Hook: Frontend+backend assets.
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_editor_assets' ); // Hook: Backend assets.

add_filter( 'allowed_block_types', __NAMESPACE__ . '\allowed_block_types' );

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 */
function block_assets() {

	// Styles.
	wp_enqueue_style(
		'hwl-blokkendoos',
		Utils::asset( 'blocks/blocks.css' )
	);
}


/**
 * Enqueue Gutenberg block assets for backend editor.
 */
function block_editor_assets() {

	// Scripts.
	wp_enqueue_script(
		'hwl-blokkendoos-editor',
		Utils::asset( 'blocks/blocks.js' ),
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
		'hwl-blokkendoos-editor',
		Utils::asset( 'blocks/blocks.editor.css' ),
		array( 'wp-edit-blocks', 'hwl-blokkendoos' )
	);
}


function allowed_block_types( $allowed_blocks ) {

	return \apply_filters( 'hwl-blokkendoos/allowed_blocks', [
		'core/audio',
		'core/block',
		'core/button',
		'core/buttons',
		'core/code',
		'core/column',
		'core/columns',
		'core/cover',
		'core/embed',
		'core/file',
		'core/gallery',
		'core/group',
		'core/heading',
		'core/html',
		'core/image',
		'core/list',
		'core/media-text',
		'core/missing',
		'core/more',
		'core/paragraph',
		'core/preformatted',
		'core/pullquote',
		'core/quote',
		'core/search',
		'core/separator',
		'core/social-link',
		'core/social-links',
		'core/table',
		'core/video',
    ] );

	// $disallowed_blocks = \apply_filters( 'hwl-blokkendoos/disallowed_blocks', [
	// 	'core/archives',
	// 	// 'core/audio',
	// 	// 'core/block',
	// 	// 'core/button',
	// 	// 'core/buttons',
	// 	'core/calendar',
	// 	'core/categories',
	// 	'core/classic',
	// 	// 'core/code',
	// 	// 'core/column',
	// 	// 'core/columns',
	// 	// 'core/cover',
	// 	// 'core/embed',
	// 	// 'core/file',
	// 	// 'core/gallery',
	// 	// 'core/group',
	// 	// 'core/heading',
	// 	// 'core/html',
	// 	// 'core/image',
	// 	'core/latest-comments',
	// 	'core/latest-posts',
	// 	'core/legacy-widget',
	// 	// 'core/list',
	// 	// 'core/media-text',
	// 	// 'core/missing',
	// 	// 'core/more',
	// 	'core/navigation-link',
	// 	'core/navigation',
	// 	'core/nextpage',
	// 	// 'core/paragraph',
	// 	'core/post-author',
	// 	'core/post-comments-count',
	// 	'core/post-comments-form',
	// 	'core/post-comments',
	// 	'core/post-content',
	// 	'core/post-date',
	// 	'core/post-excerpt',
	// 	'core/post-featured-image',
	// 	'core/post-tags',
	// 	'core/post-title',
	// 	// 'core/preformatted',
	// 	// 'core/pullquote',
	// 	'core/query-loop',
	// 	'core/query-pagination',
	// 	'core/query',
	// 	// 'core/quote',
	// 	'core/rss',
	// 	// 'core/search',
	// 	// 'core/separator',
	// 	'core/shortcode',
	// 	'core/site-logo',
	// 	'core/site-tagline',
	// 	'core/site-title',
	// 	// 'core/social-link',
	// 	// 'core/social-links',
	// 	'core/spacer',
	// 	'core/subhead',
	// 	// 'core/table',
	// 	'core/tag-cloud',
	// 	'core/template-part',
	// 	'core/text-columns',
	// 	'core/verse',
	// 	// 'core/video',
	// 	'core/widget-area',
 //    ] );



 //    App::log($allowed_blocks);

 //    $allowed_blocks = array_diff($allowed_blocks, $disallowed_blocks);

 //    App::log($allowed_blocks);

 //    return \apply_filters( 'hwl-blokkendoos/allowed_blocks', $allowed_blocks );
}

