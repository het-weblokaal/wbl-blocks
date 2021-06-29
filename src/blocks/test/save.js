/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;
const { getBlockDefaultClassName } = wp.blocks;

/**
 * Save function
 */
export default function save( { attributes } ) {

	// Extract variables
	const { content } = attributes;

	// Get className (https://github.com/WordPress/gutenberg/issues/7308#issuecomment-439946166)
	const className = getBlockDefaultClassName( 'wbl-blocks/test' );

	return (
		<div className={ className }>
			<div className={ `${className}__inner` }>
				<RichText.Content className={ `${className}__content` } tagName="div" value={ content } />
			</div>
		</div>
	);
};
