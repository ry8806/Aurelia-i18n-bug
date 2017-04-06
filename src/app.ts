import { inject } from "aurelia-framework";
import { NavigationInstruction, Next, PipelineStep, Redirect, Router, RouterConfiguration } from "aurelia-router";

export class App {
	public router: Router
	message = 'Hello World!';

	public configureRouter(config: RouterConfiguration, router: Router) {
		this.router = router;
		//config.options.pushState = true;
		//config.options.root = "./";
		config.map([
			{ route: ["/", "", "home"], moduleId: "app/index/start", title: "Start", name: "start", settings: { roles: [], main_menu: true } },
		]);

		config.mapUnknownRoutes((instruction) => {
			return "home";
		});
	}
}
