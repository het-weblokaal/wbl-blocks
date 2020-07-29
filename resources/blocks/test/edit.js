/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;

/**
 * Edit function
 */
export default function edit( { attributes, setAttributes, className } ) {

	const { content } = attributes;

    return (
        <div className={ className }>
        	<div className={ `{$className}__inner` }>
            	<RichText
					className={ `{$className}__content` }
					tagName="div"
                	multiline="p"
					value={ content }
					onChange={ ( content ) => { setAttributes( { content } ) } }
					placeholder={ __( 'Test', 'hwl-blokkendoos' ) }
					keepPlaceholderOnFocus={true}
				/>
            </div>
        </div>
    );
};

