/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;

/**
 * Edit function
 */
function SectionEdit( { attributes, setAttributes, className, clientId } ) {

	console.log(className);

	return (
		<div className={ `${className}` }>
        	<div className={ `${className}__inner` }>
				<InnerBlocks />
			</div>
		</div>
	);
}

export default SectionEdit;
