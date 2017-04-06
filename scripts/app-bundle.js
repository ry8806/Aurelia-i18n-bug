define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.map([
                { route: ["/", "", "home"], moduleId: "app/index/start", title: "Start", name: "start", settings: { roles: [], main_menu: true } },
            ]);
            config.mapUnknownRoutes(function (instruction) {
                return "home";
            });
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "i18next-xhr-backend", "./environment"], function (require, exports, Backend, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin("aurelia-validation")
            .plugin('aurelia-i18n', function (instance) {
            instance.i18next.use(Backend);
            return instance.setup({
                backend: {
                    loadPath: './locales/{{lng}}/{{ns}}.json',
                },
                lng: 'en',
                attributes: ['t', 'i18n'],
                fallbackLng: 'en',
                debug: true
            });
        });
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            "./elements/my-component.html"
        ]);
    }
    exports.configure = configure;
});

define('app/index/start',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Start = (function () {
        function Start() {
        }
        Start.prototype.activate = function () {
            var _this = this;
            setTimeout(function () {
                _this.MyObject = {
                    Firstname: "Ryan",
                    Lastname: "Southgate"
                };
            }, 3000);
        };
        return Start;
    }());
    exports.Start = Start;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"resources/elements/my-component.html\"></require><h1>${message}</h1><router-view></router-view></template>"; });
define('text!app/index/start.html', ['module'], function(module) { module.exports = "<template><require from=\"resources/elements/my-second-component.html\"></require><div class=\"container\"><div class=\"row\"><h3>Select an option from the navigation bar above</h3></div></div><div if.bind=\"MyObject\"><my-component obj.bind=\"MyObject\"></my-component><my-second-component obj.bind=\"MyObject\"></my-second-component></div></template>"; });
define('text!resources/elements/my-component.html', ['module'], function(module) { module.exports = "<template bindable=\"Obj\"><div class=\"table-responsive\"><table class=\"table\"><thead><tr><th t=\"key\"></th><th t=\"key\"></th><th i18n=\"key\"></th><th i18n=\"key\"></th></tr></thead><tbody><tr><td>${Obj.Firstname}</td><td>${Obj.Lastname}</td><td></td></tr></tbody></table></div></template>"; });
define('text!resources/elements/my-second-component.html', ['module'], function(module) { module.exports = "<template bindable=\"Obj\"><div class=\"table-responsive\"><table class=\"table\"><thead><tr><th t=\"key\"></th><th t=\"key\"></th><th i18n=\"key\"></th><th i18n=\"key\"></th></tr></thead><tbody><tr><td>${Obj.Firstname}</td><td>${Obj.Lastname}</td><td></td></tr></tbody></table></div></template>"; });
//# sourceMappingURL=app-bundle.js.map