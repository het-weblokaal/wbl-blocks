/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { InspectorControls } = wp.blockEditor;
const {	PanelBody, SelectControl, RangeControl } = wp.components;
const { __ } = wp.i18n;

/**
 * Edit function
 */
function edit( { attributes, setAttributes } ) {

	// Setup variables
	const postsToShow    = attributes.postsToShow;
	const blockClassName = "wbl-block-posts";

    return (
    	<>
    		<InspectorControls>
				<PanelBody title={ __( 'Settings', 'wbl-blocks' ) }>
		    		<RangeControl
						label={ __( 'Aantal posts', 'wbl-blocks' ) }
						help={ __( 'Op de archiefpagina wordt het gekozen aantal overschreven door de algemene instellingen.', 'wbl-blocks' ) }
						value={ postsToShow }
						onChange={ ( value ) =>	setAttributes( { postsToShow: value } )	}
						min={ 1 }
						max={ 10 }
						required
					/>
				</PanelBody>
			</InspectorControls>
	        <div className={ blockClassName }>
	            <h2 className={ `${blockClassName}__title` }>{ __('Berichten', 'wbl-blocks' ) }</h2>
	            <p className={ `${blockClassName}__text` }>{ __('This block will dynamically generate a number of posts. Check the frontend of your website.', 'wbl-blocks' ) }</p>
	        </div>
	    </>
    );
};

export default edit;
