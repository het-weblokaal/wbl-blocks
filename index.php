<?php
/**
 * Plugin Name:  HWL Blokkendoos
 * Plugin URI:   https://github.com/erikjoling/hwl-blokkendoos
 * Description:  Een pakket met WordPress blokken. Brengt ook verdere instellingen met zich mee.
 * Version:      0.1
 * Author:       Author: Het Weblokaal <erik@hetweblokaal.nl>
 * Author URI:   https://www.hetweblokaal.nl/
 * Text Domain:  hwl-blokkendoos
 * Domain Path:  /resources/languages
 * Requires PHP: 7
 * License:      GPLv3
 *
 * GitHub Plugin URI:  https://github.com/erikjoling/hwl-blokkendoos
 * GitHub Branch:      master
 */

namespace HWL\Blokkendoos;

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

// Load the Plugin class
require_once( __DIR__ . '/app/classes/Plugin.php' );

// Boot the app
Plugin::boot( __FILE__ );
