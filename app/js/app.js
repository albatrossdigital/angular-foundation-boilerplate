'use strict';

//***************************************

// Main Application

//***************************************

angular.module('healthLiteracy', [
  'ui.router',
  'ngAnimate',
])

.run(
	[					 '$sce', '$timeout', '$rootScope', '$state', '$stateParams', 
		function ($sce,   $timeout,   $rootScope,   $state,   $stateParams) {

			// It's very handy to add references to $state and $stateParams to the $rootScope
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		
		}
	]
)

.config(
  [          '$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider,   $stateProvider,   $urlRouterProvider) {

    	/////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////

      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
      $urlRouterProvider
      	.when('/c?id', '/contacts/:id')
      	.otherwise('/');

      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      $stateProvider

        //////////
        // Home //
        //////////

        .state("home", {

          // Use a url of "/" to set a state as the "index".
          url: "/",

          // Example of an inline template string. By default, templates
          // will populate the ui-view within the parent state's template.
          // For top level states, like this one, the parent template is
          // the index.html file. So this template will be inserted into the
          // ui-view within index.html.
          templateUrl: 'views/home.html'
        });

    }
  ]
);


//***************************************

// How to use workflow

//***************************************

// angular.module('healthLiteracy.use', [
//   'ui.router',
// ])

// .config(
//   [          '$stateProvider', '$urlRouterProvider',
//     function ($stateProvider,   $urlRouterProvider) {

//     	/////////////////////////////
//       // Redirects and Otherwise //
//       /////////////////////////////

//       // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
//       $urlRouterProvider
//       	.when('/use', '/contacts/:id');

//       //////////////////////////
//       // State Configurations //
//       //////////////////////////

//       // Use $stateProvider to configure your states.
//       $stateProvider

//         //////////
//         // Home //
//         //////////

//         .state("home", {

//           // Use a url of "/" to set a state as the "index".
//           url: "/",

//           // Example of an inline template string. By default, templates
//           // will populate the ui-view within the parent state's template.
//           // For top level states, like this one, the parent template is
//           // the index.html file. So this template will be inserted into the
//           // ui-view within index.html.
//           templateUrl: 'views/home.html'
//         });

//     }
//   ]
// );


//***************************************

// How to use shop workflow

//***************************************


//***************************************

// Init Jquery / Foundation

//***************************************

var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();