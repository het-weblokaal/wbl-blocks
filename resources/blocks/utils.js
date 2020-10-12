/**
 * WordPress dependencies
 */
const { has } = lodash;

/**
 * Get the source url of an image
 *
 * @return string
 */
export function getImage( media, size ) {

	return {
		id: getImageId(media),
		src: getImageSrc(media,size),
		size: size
	};
}

/**
 * Get the source url of an image
 *
 * @return string
 */
export function getImageId( media ) {
	return media.id ?? undefined;
}

/**
 * Get the source url of an image
 *
 * @return string
 */
export function getImageSrc( media, size ) {
	let src = '';

	size = size || 'thumbnail';

	if ( media ) {

		// The media object can be different I guess...
		// - Media with media_details and source_url
		// - Media with direct properties and url
		if ( has( media, [ 'media_details' ] ) ) {
			if ( has( media, [ 'media_details', 'sizes', size ] ) ) {
				src = media.media_details.sizes[ size ].source_url;
			} else {
				src = media.source_url;
			}
		}
		else {
			if ( has( media, [ 'sizes', size ] ) ) {
				src = media.sizes[ size ].url;
			} else {
				src = media.url;
			}
		}
	}

	return src;
}

// export function buildClassNames() {

// }

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

// var hasOwn = {}.hasOwnProperty;

// export function classNames() {
// 	var classes = [];

// 	for (var i = 0; i < arguments.length; i++) {
// 		var arg = arguments[i];
// 		if (!arg) continue;

// 		var argType = typeof arg;

// 		if (argType === 'string' || argType === 'number') {
// 			classes.push(arg);
// 		} else if (Array.isArray(arg)) {
// 			if(arg.length) {
// 				var inner = classNames.apply(null, arg);
// 				if (inner) {
// 					classes.push(inner);
// 				}
// 			}
// 		} else if (argType === 'object') {
// 			if (arg.toString !== Object.prototype.toString) {
// 				classes.push(arg.toString());
// 			} else {
// 				for (var key in arg) {
// 					if (hasOwn.call(arg, key) && arg[key]) {
// 						classes.push(key);
// 					}
// 				}
// 			}
// 		}
// 	}

// 	return classes.join(' ');
// }
