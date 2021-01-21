/**
 * WordPress dependencies
 */
const { InnerBlocks, useBlockProps } = wp.blockEditor;

/**
 * Save function
 */
function save( { attributes } ) {

	// Get and setup attributes
	const orientation    = attributes.orientation;
	const templateLock   = attributes.templateLock ? 'insert' : false;

	// Setup new variables
	const baseClassName = "wbl-container";

	// Setup blockProps
	const blockProps = useBlockProps.save( {
        className: baseClassName
    } );

	return (
		<div {...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}

export default save;
