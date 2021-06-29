/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

/**
 * Save function
 */
export default function save( { attributes } ) {
	const { tagName: Tag } = attributes;

	return (
		<Tag>
			<div className="wp-block-wbl-section__inner">
				<InnerBlocks.Content />
			</div>
		</Tag>
	);
}

