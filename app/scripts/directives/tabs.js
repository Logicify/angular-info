'use strict';

/**
 * this directive is used for creating tabs
 * usage <div lg-tab title='Tab 1'>Content 1</div>
 */
angular.module('Logicify.directives', [])
	.directive('lgTab', function () {
		var identity = 0;

		return function (scope, elem, attr) {
			elem.addClass('hide');
			var id = 'tab' + (++identity),
				title = attr.title || 'Not defined',
				li = "<li><a href='#" + id + "' data-toggle='tab'>" +
					title + "</a></li>",
				div = "<div class='tab-pane' id='" + id + "'><p>" +
					elem.html() + "</p></div>";

			var holder = elem.parent().find('div.tabbable');
			if (holder.length === 0) {
				//create holder
				var templ = "<div class='tabbable'><ul class='nav nav-tabs'>" + li + "</ul>" +
					"<div class='tab-content'>" + div + "</div></div>";
				elem.before(templ);
				elem.parent().find('ul.nav li').first().addClass('active');
				elem.parent().find('div.tab-pane').first().addClass('active');
			} else {
				//append tab
				holder.find('ul.nav').append(li);
				holder.find('div.tab-content').append(div);
			}
			elem.remove();
		};
	});