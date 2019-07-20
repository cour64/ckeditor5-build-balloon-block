/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

// Generals Plugins
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';

// Basic Text Styles PLugin
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';

// Alignment Plugin
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

// Indent plugin2
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';

// Font Plugin
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgrounColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';

// Highlight Plugin
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

// Remove Format Plugin
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';

// Link Plugin
import Link from '@ckeditor/ckeditor5-link/src/link';

// Transform Plugins
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import List from '@ckeditor/ckeditor5-list/src/list';

// Insert Plugins
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';

// Image Plugins
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';

import '../theme/theme.css';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	// Generals Plugins
	Essentials,
	Heading,
	Paragraph,
	Autoformat,
	BlockToolbar,
	PasteFromOffice,

	// Basic Text Styles Plugin
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Code,
	Subscript,
	Superscript,

	// Alignment Plugin
	Alignment,
	Indent,
	IndentBlock,

	// Font Plugin
	FontFamily,
	FontSize,
	FontColor,
	FontBackgrounColor,

	// Higlight Plugin
	Highlight,

	// Remove Format Plugin
	RemoveFormat,

	// Link Plugin
	Link,

	// Transform Plugins
	BlockQuote,
	List,

	// Insert Plugins
	Table,
	TableToolbar,
	MediaEmbed,

	// Image Plugins
	UploadAdapter,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	blockToolbar: [
		'heading',
		'|',
		'alignment',
		'|',
		'outdent',
		'indent',
		'|',
		'blockQuote',
		'bulletedList',
		'numberedList',
		'|',
		'insertTable',
		'imageUpload',
		'mediaEmbed',
		'|',
		'undo',
		'redo'
	],
	toolbar: {
		items: [
			// Text styles
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'code',
			'subscript',
			'superscript',
			'|',
			'fontFamily',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'highlight',
			'removeFormat',
			'|',
			'link'
		]
	},
	image: {
		toolbar: [
			'imageTextAlternative',
			'|',
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight'
		],
		styles: [ 'full', 'alignLeft', 'alignRight' ]
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
