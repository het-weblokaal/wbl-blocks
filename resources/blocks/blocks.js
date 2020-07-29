/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

/**
 * External dependancies
 */
const { merge } = lodash;

/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

/**
 * Import blocks
 */
import * as postsBlock from './posts/index';
import * as paragraphBlock from './paragraph/index';

// console.log(paragraphBlock);

/**
 * Register Blocks
 */
registerBlockType( postsBlock.name, postsBlock.settings );
registerBlockType( paragraphBlock.name, paragraphBlock.settings );
