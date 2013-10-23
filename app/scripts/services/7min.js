'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('7min.services', []).
	value('stages', [
		{
			title: 'Stage 1',
			count: 5,
			description: 'Jumping Jacks'
		},
		{
			title: 'Reset',
			count: 2,
			description: 'Be ready'
		},
		{
			title: 'Stage 2',
			count: 5,
			description: 'Wall Sit'
		},
		{
			title: 'Reset',
			count: 2,
			description: 'Be ready'
		},
		{
			title: 'Stage 3',
			count: 5,
			description: 'Push-Up'
		},
		{
			title: 'Reset',
			count: 2,
			description: 'Be ready'
		},
		{
			title: 'Stage 4',
			count: 5,
			description: 'Abdominal Crunch'
		},
		{
			title: 'Reset',
			count: 2,
			description: 'Be ready'
		},
		{
			title: 'Stage 5',
			count: 5,
			description: 'Step-up Onto Chair'
		},
		{
			title: 'FINISH',
			count: 0,
			description: 'Have a nice day!'
		}
	]);