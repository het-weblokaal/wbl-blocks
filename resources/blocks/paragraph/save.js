/**
 * Internal dependencies
 */
import { classNames } from '../functions-helpers.js';

/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;

export default function save( { attributes } ) {
	const { align, content } = attributes;

	const className = classNames( {
		[ `has-text-align-${ align }` ]: align,
	} );

	return (
		<RichText.Content
			tagName="p"
			className={ className ? className : undefined }
			value={ content }
		/>
	);
}
