<?php
/**
 * Bootstrap
 */

namespace WBL\Blocks;


# ------------------------------------------------------------------------------
# Load Dependencies
# ------------------------------------------------------------------------------

/**
 * App Class
 */
require_once( __DIR__ . '/../vendor/wbl-app.php' );

App::boot();

/**
 * Composer Dependancies
 */
if ( file_exists( App::vendor_path( 'autoload.php' ) ) ) {
    require_once( App::vendor_path( 'autoload.php' ) );
}

# ------------------------------------------------------------------------------
# Autoload functions files.
# ------------------------------------------------------------------------------

array_map( function( $file ) {
    require_once( App::app_path( "{$file}.php" ) );
}, [

] );

# ------------------------------------------------------------------------------
# Autoload block files.
# ------------------------------------------------------------------------------

array_map( function( $file ) {
    require_once( App::blocks_path( "{$file}.php" ) );
}, [
    'archive-loop/index',
    'posts/index',
] );