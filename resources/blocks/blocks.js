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
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

/**
 * Import blocks
 */
// import * as postsBlock from './posts/index';
// import * as testBlock from './test/index';
import * as segmentBlock from './segment/index';
import * as containerBlock from './container/index';

/**
 * Register Blocks
 */
// registerBlockType( postsBlock.name, postsBlock.settings );
// registerBlockType( testBlock.name, testBlock.settings );
registerBlockType( segmentBlock.name, segmentBlock.settings );
registerBlockType( containerBlock.name, containerBlock.settings );
