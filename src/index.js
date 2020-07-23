import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import './index.css'; // Editor styles
import './style.css'; // Editor and frontend styles

registerBlockType( 'hwl-blokkendoos/container', {
	title: __( 'Container' ),
	icon: 'universal-access-alt',
	category: 'layout',
	example: {},
	edit: ( { className } ) => {
		return (
			<div className={ className }>
				Hello World, step 1 (from the editor).
			</div>
		);
	},
	save: ( { className } ) => {
		return (
			<div className={ className }>
				Hello World, step 1 (from the frontend).
			</div>
		);
	},
} );
