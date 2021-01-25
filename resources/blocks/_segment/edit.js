/**
 * WordPress dependencies
 */
const {	InnerBlocks, RichText, useBlockProps } = wp.blockEditor;
const { __ } = wp.i18n;
// const { withSelect } = wp.data;

/**
 * Internal dependencies
 */
// import { name } from './';
import EditSettings from './edit-settings';


/**
 * Edit function
 */
function edit( { attributes, setAttributes, isSelected } ) {

	// Get and setup attributes
	const tagName        = attributes.tagName;
	const variation      = attributes.variation;
	const heading        = attributes.heading;
	const headingLevel   = attributes.headingLevel;
	const showHeading    = attributes.showHeading;
	const allowedBlocks  = attributes.allowedBlocks;
	const orientation    = attributes.orientation;
	const templateLock   = attributes.templateLock ? 'insert' : false;

	// Setup new variables
	const baseClassName      = "wbl-segment";
	const variationClassName = (variation) ? baseClassName + '--' + variation : '';
	const blockClassName     = (variationClassName) ? baseClassName + ' ' + variationClassName : baseClassName;
	const TagName            = tagName;
	const headingTagName     = 'h' + headingLevel;

	// Innerblocks
	// const renderAppender = InnerBlocks.ButtonBlockAppender;
	const renderAppender = (isSelected) ? InnerBlocks.ButtonBlockAppender : false;

	// Setup blockProps
	const blockProps = useBlockProps( {
		className: blockClassName
	} );


	return (
		<>
			<TagName {...blockProps }>
	        	<div className={ `${baseClassName}__inner` }>
					{
						(showHeading) &&
							<RichText
								className={ `${baseClassName}__title` }
								tagName={ headingTagName }
								value={ heading }
								onChange={ ( newHeading ) => { setAttributes( { heading: newHeading } ) } }
								placeholder={ __( 'Heading', 'wbl-blocks' ) }
								keepPlaceholderOnFocus={true}
								allowedFormats={ [] }
							/>
					}
					<div className={ `${baseClassName}__content` }>
						<InnerBlocks
							allowedBlocks={ allowedBlocks }
							templateLock={ templateLock }
							orientation={ orientation }
							renderAppender={ renderAppender }
						/>
					</div>
				</div>
			</TagName>
			<EditSettings
				setAttributes={ setAttributes }
				showHeading={ showHeading }
				headingLevel={ headingLevel }
				tagName={ TagName }
			/>
		</>
	);
}

export default edit;
