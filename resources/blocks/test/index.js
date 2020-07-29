/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

// Imports
import edit from './edit';
import save from './save';

// Exports
export const name = 'hwl-blokkendoos/test';
export const settings = {
	title: __( 'Test', 'hwl-blokkendoos' ),
	icon: 'megaphone',
	category: 'common',
	keywords: [
		__( 'Test', 'hwl-blokkendoos' ),
	],
	supports: {
		multiple: false,
	},
	attributes: {
		content: {
			source: 'children',
			selector: `.wp-block-hwl-blokkendoos-test__content`,
			default: false
		},
	},
	edit: edit,
	save: save
};
