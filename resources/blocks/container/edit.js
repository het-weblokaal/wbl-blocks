/**
 * WordPress dependencies
 */
const {	InnerBlocks, useBlockProps } = wp.blockEditor;
const { __ } = wp.i18n;

/**
 * Edit function
 */
function edit( { attributes, isSelected } ) {

	// Get and setup attributes
	const orientation    = attributes.orientation;
	const templateLock   = attributes.templateLock ? 'insert' : false;

	// Setup new variables
	const baseClassName = "wbl-container";

	// Innerblocks
	const renderAppender = (isSelected) ? InnerBlocks.ButtonBlockAppender : false;

	// Setup blockProps
	const blockProps = useBlockProps( {
		className: baseClassName
	} );

	return (
		<div {...blockProps }>
			<InnerBlocks
				templateLock={ templateLock }
				orientation={ orientation }
				renderAppender={ renderAppender }
			/>
		</div>
	);
}

export default edit;
