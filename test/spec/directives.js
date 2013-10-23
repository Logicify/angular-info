'use strict';

describe('Testing directives', function () {

	var compile, rootScope;

	beforeEach(function(){
		module('common.directives');
		inject(function ($compile, $rootScope) {
			compile = $compile;
			rootScope = $rootScope;
		});
	});

	describe('testing cmTitle', function () {

		it('Should set default title', function(){
			var elem = compile('<title cm-title>{{title}}</title>')(rootScope);

			//fire all the watches, so the expression  {{title}} will be evaluated
			rootScope.$digest();
			expect(elem.html()).toEqual('Logicify. Test Angular app');
		});
	});

	describe('Testing draggable', function(){

		it('Should create draggable element', function(){
			var elem = compile('<div draggable>I am draggable</div>')(rootScope);

			expect(elem.css('cursor')).toEqual('pointer');
		});
	});
});