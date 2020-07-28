/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

// Imports
import edit from './edit';
import save from './save';
import metadata from './block.json';

// Get name from metadata
const { name } = metadata;

// Export metadata and name
export { metadata, name };

// Export settings
export const settings = {
	title: __( 'HWL Paragraaf', 'hwl-blokkendoos' ),
	icon: 'editor-paragraph',
	keywords: [
		__( 'Text', 'hwl-blokkendoos' ),
	],
	example: {
		attributes: {
			content: __(
				'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing.'
			)
		},
	},
	edit: edit,
	edit: save,
};



