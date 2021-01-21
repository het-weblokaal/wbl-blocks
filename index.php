<?php
/**
 * Plugin Name:  WBL Blocks
 * Plugin URI:   https://github.com/erikjoling/wbl-blocks
 * Description:  Een pakket met WordPress blokken. Brengt ook verdere instellingen met zich mee.
 * Version:      0.1
 * Author:       Author: Het Weblokaal <erik.info@hetweblokaal.nl>
 * Author URI:   https://www.hetweblokaal.nl/
 * Text Domain:  wbl-blocks
 * Domain Path:  /resources/languages
 * Requires PHP: 7
 * License:      GPLv3
 *
 * GitHub Plugin URI:  https://github.com/erikjoling/wbl-blocks
 * GitHub Branch:      master
 */

namespace WBL\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

# ------------------------------------------------------------------------------
# Load Dependencies
# ------------------------------------------------------------------------------

/**
 * App Class
 */
if ( file_exists( __DIR__ . '/vendor/wbl-app.php' ) ) {
	require_once( __DIR__ . '/vendor/wbl-app.php' );
}
else {
	exit;
}

