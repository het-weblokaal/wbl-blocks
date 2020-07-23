<?php

/**
 * Plugin Name: HWL Blokkendoos
 * Plugin URI: https://github.com/erikjoling/hwl-blokkendoos
 * Description: Een pakket met WordPress blokken. Brengt ook verdere instellingen met zich mee.
 * Version: 0.1
 * Author: Het Weblokaal <erik@hetweblokaal.nl>
 */

namespace HWL\Blokkendoos;

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function register_blocks() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'hwl-blokkendoos',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		'hwl-blokkendoos-editor',
		plugins_url( 'build/index.css', __FILE__ ),
		[ 'wp-edit-blocks' ],
		$asset_file['version']
	);

	wp_register_style(
		'hwl-blokkendoos',
		plugins_url( 'build/style-index.css', __FILE__ ),
		[],
		$asset_file['version']
	);

	register_block_type( 'hwl-blokkendoos/container', array(
		'style' => 'hwl-blokkendoos',
		'editor_style' => 'hwl-blokkendoos-editor',
		'editor_script' => 'hwl-blokkendoos',
	) );
}

add_action( 'init', __NAMESPACE__ . '\register_blocks' );
