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
export default function edit( { attributes, setAttributes, className } ) {

    return (
        <div className={ className }>
            <h2 className={ `${className}__block-title` }>{ __('Berichten', 'hwl-blokkendoos' ) }</h2>
        </div>
    );
};

