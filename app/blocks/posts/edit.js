/**
 * WordPress dependencies
 */
const {	useBlockProps } = wp.blockEditor;
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import EditSettings from './edit-settings';


/**
 * Edit function
 */
function edit( { attributes, setAttributes, isSelected } ) {

	// Get and setup attributes
	const postsToShow    = attributes.postsToShow;

	// Setup new variables
	const blockClassName  = 'wbl-block-posts';

	// Setup blockProps
	const blockProps = useBlockProps( {
		className: blockClassName
	} );

	return (
		<>
			<div {...blockProps }>
	        	<div className={ `${blockClassName}__inner` }>
		            <h2 className={ `${blockClassName}__title` }>{ __('Posts', 'wbl-blocks' ) }</h2>
		            <p className={ `${blockClassName}__text` }>{ __('This block will dynamically generate a number of posts. Check the frontend of your website.', 'wbl-blocks' ) }</p>
				</div>
			</div>
			<EditSettings
				setAttributes={ setAttributes }
				postsToShow={ postsToShow }
			/>
		</>
	);
}

export default edit;
