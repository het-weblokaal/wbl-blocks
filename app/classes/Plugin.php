<?php

namespace HWL\Blokkendoos;

/**
 * Plugin Class
 *
 * Class to set App properties and load the bootstrap files.
 */
final class Plugin {

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
	public static function boot( $file ) {

		// Set properties
		static::set_dir( $file );
		static::set_uri( $file );
		static::set_version( $file );

		// Bootstrap
		require_once( static::get_file_path( 'app/bootstrap-autoload.php' ) );
	}


	/*=============================================================*/
	/**                        Getters                             */
	/*=============================================================*/

	/**
	 * Gets the theme directory path with trailing slash.
	 *
	 * @return string
	 */
	public static function get_dir() {
		return static::$dir;
	}

	/**
	 * Gets the theme uri path with trailing slash.
	 *
	 * @return string
	 */
	public static function get_uri() {
		return static::$uri;
	}

	/**
	 * Gets the theme version
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
	 * Sets the theme directory (with trailing slash)
	 *
	 * @return void
	 */
	private static function set_dir( $file ) {
		static::$dir = plugin_dir_path( $file );
	}

	/**
	 * Sets the theme URI (with trailing slash)
	 *
	 * @return void
	 */
	private static function set_uri( $file ) {
		static::$uri = plugin_dir_url( $file );
	}

	/**
	 * Sets the theme version
	 *
	 * @return void
	 */
	private static function set_version( $file ) {

		// Set the version property
		// Note: Can't use `get_plugin_data()` because it doesn't work on the frontend
        static::$version = get_file_data( dirname($file) . '/index.php', array('Version' => 'Version') ) ?? null;
	}


	/*=============================================================*/
	/**                       Utilities                            */
	/*=============================================================*/

	/**
	 * Get the file-path within this theme
	 *
	 * @param string $file relative to this theme root
	 * @return string filepath
	 */
	public static function get_file_uri( $file ) {
		return static::get_uri() . $file;
	}

	/**
	 * Get the file-path within this theme
	 *
	 * @param string $file relative to this theme root
	 * @return string filepath
	 */
	public static function get_file_path( $file ) {
		return static::get_dir() . $file;
	}
}
