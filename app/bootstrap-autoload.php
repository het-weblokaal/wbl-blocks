<?php
/**
 * Autoload bootstrap file.
 *
 * This file is used to autoload classes and functions necessary for the theme
 * to run. Classes utilize the PSR-4 autoloader in Composer which is defined in
 * `composer.json`.
 *
 * @package   WBL\Blocks
 * @author    Erik Joling <erik.info@hetweblokaal.nl>
 * @copyright 2020 Het Weblokaal
 * @link      https://www.hetweblokaal.nl/
 */

namespace WBL\Blocks;


# ------------------------------------------------------------------------------
# Autoload Composer Dependancies
# ------------------------------------------------------------------------------

if ( file_exists( App::get_file_path( 'vendor/autoload.php' ) ) ) {
	require_once( App::get_file_path( 'vendor/autoload.php' ) );
}

# ------------------------------------------------------------------------------
# Autoload classes files.
# ------------------------------------------------------------------------------

array_map( function( $file ) {
	require_once( App::get_file_path( "app/classes/{$file}.php" ) );
}, [
	// 'Compatibility',
	// 'Config',
	// 'Page',
	// 'View',
	'Utils',
] );

# ------------------------------------------------------------------------------
# Autoload functions files.
# ------------------------------------------------------------------------------

array_map( function( $file ) {
	require_once( App::get_file_path( "app/{$file}.php" ) );
}, [
	// 'functions-setup',
	'functions-blocks',
] );
