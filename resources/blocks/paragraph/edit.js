/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	AlignmentToolbar,
	BlockControls,
	RichText,
} = wp.blockEditor;

export default function edit( {
	attributes,
	className,
	setAttributes
} ) {

	const {	align, content,	placeholder } = attributes;

    return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ align }
					onChange={ ( newAlign ) =>
						setAttributes( { align: newAlign } )
					}
				/>
			</BlockControls>
			<RichText
				identifier="content"
				tagName={ 'p' }
				value={ content }
				onChange={ ( newContent ) =>
					setAttributes( { content: newContent } )
				}
				className={ className }
				placeholder={
					placeholder ||
					__( 'Start writing or type / to choose a block', 'wbl-blocks' )
				}
			/>
		</>
	);
};
