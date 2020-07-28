/**
 * Internal dependencies
 */
// import { classNames } from '../functions-helpers.js';
// const classnames = classnames;

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	AlignmentToolbar,
	BlockControls,
	RichText,
} = wp.blockEditor;

function ParagraphBlock( {
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
				className={ className }
				tagName={ "p" }
				value={ content }
				onChange={ ( newContent ) =>
					setAttributes( { content: newContent } )
				}
			/>
		</>
	);
};

export default ParagraphBlock;
