var app = angular.module('plunker', []);

app.directive('mmenu', function() {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
            $(element).mmenu({slidingSubmenus: false});
		}
	};
});