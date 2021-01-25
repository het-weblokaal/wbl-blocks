/**
 * WordPress dependencies
 */
const {	InnerBlocks, useBlockProps } = wp.blockEditor;
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */


/**
 * Edit function
 */
function edit( { attributes, setAttributes, isSelected } ) {

	// Setup new variables
	const baseClassName      = "wbl-segment__content";
	const blockClassName     = baseClassName;

	// Innerblocks
	const innerBlocksTemplate = [
		[
			'core/paragraph',
			{ content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' }
		]
	];
	const renderAppender = (isSelected) ? InnerBlocks.ButtonBlockAppender : false;

	// Setup blockProps
	const blockProps = useBlockProps( {
		className: blockClassName
	} );


	return (
		<>
			<div {...blockProps }>
				<InnerBlocks
					template={ innerBlocksTemplate }
					renderAppender={ renderAppender }
				/>
			</div>
		</>
	);
}

export default edit;
