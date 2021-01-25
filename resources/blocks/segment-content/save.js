/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { RichText, InnerBlocks, useBlockProps } = wp.blockEditor;

/**
 * Save function
 */
function save( { attributes } ) {

	// Setup new variables
	const baseClassName      = "wbl-segment__content";
	const blockClassName     = baseClassName;

	// Setup blockProps
	const blockProps = useBlockProps.save( {
        className: blockClassName
    } );

	return (
		<div {...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}

export default save;
