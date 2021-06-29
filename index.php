<?php
/**
 * Plugin Name:  WBL Blocks
 * Plugin URI:   https://github.com/het-weblokaal/wbl-blocks
 * Description:  Een pakket met WordPress blokken die we gebruiken voor onze thema's. Doe er je voordeel mee.
 * Version:      0.1
 * Author:       Author: Het Weblokaal <erik@hetweblokaal.nl>
 * Author URI:   https://www.hetweblokaal.nl/
 * Text Domain:  wbl-blocks
 * Domain Path:  /assets/languages
 * Requires PHP: 7
 * License:      GPLv3
 */

namespace WBL\Blocks;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

// Bootstrap
require_once( __DIR__ . '/app/bootstrap.php' );

