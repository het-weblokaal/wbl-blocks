<?php

namespace HWL\Blokkendoos;

/**
 * App Class
 *
 * Class to set App properties and load the bootstrap files.
 */
final class App {

	/**
	 * The Type of app. i.e. theme or plugin
	 *
	 * @var string
	 */
	private static $type;

	/**
	 * Sets the app file. The file which holds the metadata of this app (plugin or theme)
	 *
	 * @var string
	 */
	private static $app_file;

	/**
	 * Directory path with trailing slash.
	 *
	 * @var string
	 */
	private static $dir;

	/**
	 * Directory URI with trailing slash.
	 *
	 * @var string
	 */
	private static $uri;

	/**
	 * Version
	 *
	 * @var string
	 */
	private static $version;

	/**
	 * Constructor method.
	 *
	 * @return void
	 */
	private function __construct() {}

	/**
	 * Statically boot
	 *
	 * @return void
	 */
	public static function boot( $file = null, $type = null ) {

		// Set properties
		static::set_type( $type );
		static::set_app_file( $file );
		static::set_dir();
		static::set_uri();
		static::set_version();

		// Bootstrap
		require_once( static::get_file_path( 'app/bootstrap-autoload.php' ) );
	}


	/*=============================================================*/
	/**                        Getters                             */
	/*=============================================================*/

	/**
	 * Gets the app type
	 *
	 * @return string $type (theme or plugin)
	 */
	public static function get_type() {
		return static::$type;
	}

	/**
	 * Gets the app directory path with trailing slash.
	 *
	 * @return string
	 */
	public static function get_app_file() {
		return static::$app_file;
	}

	/**
	 * Gets the app directory path with trailing slash.
	 *
	 * @return string
	 */
	public static function get_dir() {
		return static::$dir;
	}

	/**
	 * Gets the app uri path with trailing slash.
	 *
	 * @return string
	 */
	public static function get_uri() {
		return static::$uri;
	}

	/**
	 * Gets the app version
	 *
	 * @return string
	 */
	public static function get_version() {
		return static::$version;
	}


	/*=============================================================*/
	/**                        Setters                             */
	/*=============================================================*/


	/**
	 * Sets the app type
	 *
	 * @return void
	 */
	private static function set_type( $type ) {

		// if no type is given, automattically assign type based on file location
		if ( is_null($type) ) {

			// Check if app is in theme directory or plugin directory
			if ( strpos( __FILE__, '/themes/' ) !== false ) {
				$type = 'theme';
			}
			elseif ( strpos( __FILE__, WP_PLUGIN_DIR ) !== false ) {
				$type = 'plugin';
			}
			else {
				static::log( 'Problem assigning app type', true );
			}
		}

		static::$type = $type;
	}

	/**
	 * Sets the app file (root file)
	 *
	 * @return void
	 */
	private static function set_app_file( $app_file ) {

		// If no file: try to assign it based
		if (is_null($app_file) ) {

			if (static::get_type() == 'theme') {

				$app_file = get_theme_file_path('style.css');
			}
			elseif (static::get_type() == 'plugin') {

				/** Get plugin file by looking up plugin folder and checking for index.php or <plugin-slug>.php */

				// Get relative plugin path
				$relative_file_path = (strpos(__FILE__, WP_PLUGIN_DIR) !== false) ? str_replace(WP_PLUGIN_DIR, '', __FILE__) : false;

				// Get plugin slug
				$plugin_slug = explode('/', $relative_file_path)[1] ?? false; // record 1 because of leading slash and explode

				if ($plugin_slug) {
					if ( file_exists( trailingslashit(WP_PLUGIN_DIR) . "{$plugin_slug}/{$plugin_slug}.php" ) ) {
						$app_file = trailingslashit(WP_PLUGIN_DIR) . "{$plugin_slug}/{$plugin_slug}.php";
					}
					elseif ( file_exists( trailingslashit(WP_PLUGIN_DIR) . "{$plugin_slug}/index.php" ) ) {
						$app_file = trailingslashit(WP_PLUGIN_DIR) . "{$plugin_slug}/index.php";
					}
				}
			}
			else {
				static::log( 'Problem assigning app file', true );
			}
		}

		static::$app_file = $app_file;
	}

	/**
	 * Sets the app directory (with trailing slash)
	 *
	 * @return void
	 */
	private static function set_dir() {

		if (static::$type == 'theme') {
			static::$dir = trailingslashit( get_theme_file_path() );
		}
		elseif (static::$type == 'plugin') {
			static::$dir = plugin_dir_path( static::get_app_file() );
		}
		else {
			static::log( 'Problem assigning app directory', true );
		}
	}

	/**
	 * Sets the app URI (with trailing slash)
	 *
	 * @return void
	 */
	private static function set_uri() {

		if (static::$type == 'theme') {
			static::$uri = trailingslashit( get_theme_file_uri() );
		}
		elseif (static::$type == 'plugin') {
			static::$uri = plugin_dir_url( static::get_app_file() );
		}
		else {
			static::log( 'Problem assigning app uri', true );
		}
	}

	/**
	 * Sets the app version
	 *
	 * @return void
	 */
	private static function set_version() {

		if (static::$type == 'theme') {
			static::$version = wp_get_theme()->get('Version') ?? null;
		}
		elseif (static::$type == 'plugin') {
        	static::$version = get_file_data( dirname(static::get_app_file()) . '/' . basename(static::get_app_file()), array('Version' => 'Version') ) ?? null;
			// Note: Can't use `get_plugin_data()` because it doesn't work on the frontend
		}
		else {
			static::log( 'Problem assigning app version', true );
		}
	}


	/*=============================================================*/
	/**                       Utilities                            */
	/*=============================================================*/

	/**
	 * Get the file-path within this app
	 *
	 * @param string $file relative to this app root
	 * @return string filepath
	 */
	public static function get_file_uri( $file ) {
		return static::get_uri() . $file;
	}

	/**
	 * Get the file-path within this app
	 *
	 * @param string $file relative to this app root
	 * @return string filepath
	 */
	public static function get_file_path( $file ) {
		return static::get_dir() . $file;
	}

	/**
	 * Log data to wp-content/debug.log
	 *
	 * It doesn't matter if WP_DEBUG is true because I also want to be able
	 * to log on production environment (which has WP_DEBUG disabled)
	 */
	public static function log( $data, $show_namespace = false )  {

	    if ( is_array( $data ) || is_object( $data ) ) {

			if ($show_namespace) {
				error_log( '[' . __NAMESPACE__ . '] ...' );
			}

	        error_log( print_r( $data, true ) );
	    } else {

	    	if ($show_namespace) {
	    		$data = '[' . __NAMESPACE__ . '] ' . $data;
	    	}

	        error_log( $data );
	    }
	}

	/**
	 * Dump (print) data somewhere on the website
	 *
	 * This should never be on production so WP_DEBUG should be enabled
	 */
	public static function dump( $data, $show_namespace = false )  {
	    if ( true === WP_DEBUG ) {
	        if ( is_array( $data ) || is_object( $data ) ) {
	            print_r( $data, true );
	        } else {
	            echo $data;
	        }
	    }
	}
}
