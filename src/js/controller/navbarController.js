angular.module('registApp', ['ui.router'])
  .controller('navbarController', function () {
  	var navbar = this;
  	navbar.getTime = function() {
  		return $.now();
  	}
  });