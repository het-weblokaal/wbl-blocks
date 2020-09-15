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

add_filter( 'allowed_block_types', __NAMESPACE__ . '\allowed_block_types', 10, 2 );

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


function allowed_block_types( $allowed_blocks, $post ) {

	$core_blocks = [
    	'core/archives',
		'core/audio',
		'core/block',
		'core/button',
		'core/buttons',
		'core/calendar',
		'core/categories',
		'core/classic',
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
		'core/latest-comments',
		'core/latest-posts',
		'core/legacy-widget',
		'core/list',
		'core/media-text',
		'core/missing',
		'core/more',
		'core/navigation-link',
		'core/navigation',
		'core/nextpage',
		'core/paragraph',
		'core/post-author',
		'core/post-comments-count',
		'core/post-comments-form',
		'core/post-comments',
		'core/post-content',
		'core/post-date',
		'core/post-excerpt',
		'core/post-featured-image',
		'core/post-tags',
		'core/post-title',
		'core/preformatted',
		'core/pullquote',
		'core/query-loop',
		'core/query-pagination',
		'core/query',
		'core/quote',
		'core/rss',
		'core/search',
		'core/separator',
		'core/shortcode',
		'core/site-logo',
		'core/site-tagline',
		'core/site-title',
		'core/social-link',
		'core/social-links',
		'core/spacer',
		'core/subhead',
		'core/table',
		'core/tag-cloud',
		'core/template-part',
		'core/text-columns',
		'core/verse',
		'core/video',
		'core/widget-area',
    ];

    $extra_blocks = \apply_filters( 'hwl-blokkendoos/extra_blocks', [
    	'hwl-blokkendoos/section',
		'hwl-blokkendoos/posts',
		'hwl-blokkendoos/test',
    ], $post);

    $allowed_blocks = array_merge($core_blocks, $extra_blocks);

    $disallowed_blocks = \apply_filters( 'hwl-blokkendoos/disallowed_blocks', [
		'core/archives',
		'core/calendar',
		'core/categories',
		'core/classic',
		'core/column',
		'core/columns',
		'core/cover',
		'core/embed',
		'core/group',
		'core/latest-comments',
		'core/latest-posts',
		'core/legacy-widget',
		'core/media-text',
		'core/navigation',
		'core/navigation-link',
		'core/nextpage',
		'core/post-author',
		'core/post-comments',
		'core/post-comments-count',
		'core/post-comments-form',
		'core/post-content',
		'core/post-date',
		'core/post-excerpt',
		'core/post-featured-image',
		'core/post-tags',
		'core/post-title',
		'core/pullquote',
		'core/query',
		'core/query-loop',
		'core/query-pagination',
		'core/rss',
		'core/shortcode',
		'core/site-logo',
		'core/site-tagline',
		'core/site-title',
		'core/spacer',
		'core/subhead',
		'core/tag-cloud',
		'core/template-part',
		'core/text-columns',
		'core/verse',
		'core/widget-area',
    ], $post );

    $allowed_blocks = array_diff($allowed_blocks, $disallowed_blocks);
    $allowed_blocks = array_values($allowed_blocks); // reindex

	return $allowed_blocks;
}

