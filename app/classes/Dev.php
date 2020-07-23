<?php

namespace HWL\Blokkendoos;

/**
 * Development Class
 *
 * Class to set App properties and load the bootstrap files.
 */
final class Dev {

	/**
	 * Log data to wp-content/debug.log
	 *
	 * It doesn't matter if WP_DEBUG is true because I also want to be able
	 * to log on production environment (which has WP_DEBUG disabled)
	 */
	public static function log( $data )  {
	    if ( is_array( $data ) || is_object( $data ) ) {
	        error_log( print_r( $data, true ) );
	    } else {
	        error_log( $data );
	    }
	}

	/**
	 * Dump (print) data somewhere on the website
	 *
	 * This should never be on production so WP_DEBUG should be enabled
	 */
	public static function dump( $data )  {
	    if ( true === WP_DEBUG ) {
	        if ( is_array( $data ) || is_object( $data ) ) {
	            print_r( $data, true );
	        } else {
	            echo $data;
	        }
	    }
	}
}
