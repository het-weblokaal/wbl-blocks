/**
 * External dependencies
 */


 /**
 * Internal dependencies
 */
// import { classNames } from '../functions-helpers.js';

/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;

export default function save( { attributes } ) {
	const { align, content } = attributes;

	return (
		<RichText.Content
			tagName="p"
			value={ content }
		/>
	);
}
