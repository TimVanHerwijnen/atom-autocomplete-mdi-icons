'use babel';

const majorVersions = {
	'5': {
		icons: require('../data/v5/icons'),
		modifiers: require('../data/v5/modifiers'),
		snippets: require('../data/v5/snippets'),
		label: 'v5.4.55',
		className: 'mdicons-v5',
		stylePrefixMap: {
			'': 'mdi'
		},
		iconMoreRoot: 'https://materialdesignicons.com/'
	},
};

class VersionHelper {
    getCurrentVersionInfo() {
        let version = atom.config.get('autocomplete-mdi-icons.version');
		let majorVersion = version.split('.', 1)[0];
        return majorVersions[majorVersion];
    }
}
export default new VersionHelper();
