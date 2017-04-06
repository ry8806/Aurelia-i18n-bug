import { Aurelia } from 'aurelia-framework';

//import Backend from 'i18next-xhr-backend'; // <-- your previously installed backend plugin
import * as Backend from 'i18next-xhr-backend';

import environment from './environment';

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.feature('resources')
		.plugin("aurelia-validation")
		.plugin('aurelia-i18n', (instance) => {
			// register backend plugin
			instance.i18next.use(Backend);

			// adapt options to your needs (see http://i18next.com/docs/options/)
			// make sure to return the promise of the setup method, in order to guarantee proper loading
			return instance.setup({
				backend: {                                  // <-- configure backend settings
					loadPath: './locales/{{lng}}/{{ns}}.json', // <-- XHR settings for where to get the files from
				},
				lng: 'en',
				attributes: ['t', 'i18n'],
				fallbackLng: 'en',
				debug: true
			});
		});

	if (environment.debug) {
		aurelia.use.developmentLogging();
	}

	if (environment.testing) {
		aurelia.use.plugin('aurelia-testing');
	}

	aurelia.start().then(() => aurelia.setRoot());
}
