
/**
 * WordPress dependencies
 */
const {	InspectorAdvancedControls, InspectorControls } = wp.blockEditor;
const {	ExternalLink, PanelBody, PanelRow, SelectControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */

/**
 * Edit Settings function
 */
const EditSettings = ( { setAttributes, showHeading, headingLevel, tagName } ) => (
	<InspectorControls>
		<PanelBody>
			<ToggleControl
				label={ __( "Show Heading", 'wbl-blocks' ) }
				checked={ showHeading }
				onChange={ ( newValue ) => {
					setAttributes( { showHeading: newValue } )
				} }
			/>
			{
				(showHeading) &&
					<SelectControl
						label={ __( 'Heading level', 'theme-pnv' ) }
						help={ __( 'Choose the level of the heading (H1, H2, H3)', 'wbl-blocks' ) }
						value={ headingLevel }
						onChange={ ( newValue ) => { setAttributes( { headingLevel: newValue } ) } }
						options={ [
							{ label: 'H1', value: 1 },
							{ label: 'H2', value: 2 },
							{ label: 'H3', value: 3 }
						] }
					/>
			}
			<SelectControl
				label={ __( 'Tag name', 'wbl-blocks' ) }
				help={
					<>
						{ __( 'Choosing the right semantic tag improves SEO and Accessibilty.', 'wbl-blocks' ) }

						<ExternalLink href={ 'http://html5doctor.com/you-can-still-use-div/' }>
							{ __( 'Learn more about semantic HTML5', 'wbl-blocks' ) }
						</ExternalLink>
					</>
				}
				value={ tagName }
				onChange={ ( newValue ) => {
					setAttributes( { tagName: newValue } )
				} }
				options={ [
					{ label: 'div', 	value: 'div' },
					{ label: 'section', value: 'section' },
					{ label: 'aside', 	value: 'aside' },
					{ label: 'article', value: 'article' }
				] }
			/>
		</PanelBody>
	</InspectorControls>
);

export default EditSettings;


