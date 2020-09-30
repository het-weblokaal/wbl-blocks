/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Edit function
 */
function edit( { attributes, setAttributes } ) {

	// Setup variables
	const blockClassName = "wbl-block-posts";

    return (
        <div className={ blockClassName }>
            <h2 className={ `${blockClassName}__title` }>{ __('Berichten', 'wbl-blocks' ) }</h2>
            <p className={ `${blockClassName}__text` }>{ __('This block will dynamically generate a number of posts. Check the frontend of your website.', 'wbl-blocks' ) }</p>
        </div>
    );
};

export default edit;
