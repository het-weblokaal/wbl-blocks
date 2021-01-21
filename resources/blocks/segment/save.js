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

	// Get and setup attributes
	const TagName        = attributes.tagName;
	const variation      = attributes.variation;
	const heading        = attributes.heading;
	const headingLevel   = attributes.headingLevel;
	const showHeading    = attributes.showHeading;
	const allowedBlocks  = attributes.allowedBlocks;
	const orientation    = attributes.orientation;
	const templateLock   = attributes.templateLock;

	// Setup new variables
	const baseClassName      = "wbl-segment";
	const variationClassName = variation ? baseClassName + '--' + variation : '';
	const blockClassName     = variationClassName ? baseClassName + ' ' + variationClassName : baseClassName;
	const HeadingTagName     = 'h' + headingLevel;

	// Setup blockProps
	const blockProps = useBlockProps.save( {
        className: blockClassName
    } );

	return (
		<TagName {...blockProps }>
			<div className={ `${baseClassName}__inner` }>
				{
					(showHeading) &&
						<HeadingTagName className={ `${baseClassName}__title` }>
							<RichText.Content value={ heading } />
						</HeadingTagName>
				}
				<div className={ `${baseClassName}__content` }>
					<InnerBlocks.Content />
				</div>
			</div>
		</TagName>
	);
}

export default save;
