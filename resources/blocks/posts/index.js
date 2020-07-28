/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

// Imports
import edit from './edit';

// Exports
export const name = 'hwl-blokkendoos/posts';
export const settings = {
	title: __( 'Berichten', 'hwl-blokkendoos' ),
	icon: 'excerpt-view',
	category: 'common',
	keywords: [
		__( 'Berichten', 'hwl-blokkendoos' ),
		__( 'Posts', 'hwl-blokkendoos' ),
		__( 'Blog', 'hwl-blokkendoos' ),
	],

	supports: {
		multiple: false,
	},
	attributes: {},
	edit: edit,
	save: () => {
        return null;
    },
};



