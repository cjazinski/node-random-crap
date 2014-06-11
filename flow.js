var flow = require('nimble');

var data = [];
var cools;

flow.series([
	function(cb) {
		console.log('First Step....');
		setTimeout(function() {
			console.log('.... SEQ?');
			cb();
		},2300);
	},
	function(cb) {
		console.log('Second Step');
		setTimeout(function() {
			console.log('.... SEQ?');
			cb();
		},750);
	},
	function(cb) {
		flow.parallel([
			function(cb) {
				
				console.log('Function Fired... A');
				var a = Math.floor(Math.random() * 13) * 666;
				setTimeout(function() {
					console.log('Function A....');
					data.push('Function A');
					cb();
				},a);
				
			},
			function(cb) {
				console.log('Function Fired... B');
				var a = Math.floor(Math.random() * 13) * 666;
				setTimeout(function() {
					console.log('Function B....');
					data.push('Function B');
					cb();
				},a);
			},
			function(cb) {
				
				console.log('Function Fired... C');
				var a = Math.floor(Math.random() * 13) * 666;
				setTimeout(function() {
					console.log('Function C....');
					data.push('Function C');
					cb();
				},a);
				
			},
			function(cb) {
				console.log('Function Fired... D');
				var a = Math.floor(Math.random() * 13) * 666;
				setTimeout(function() {
					console.log('Function D....');
					data.push('Function D');
					cb();
				},a);
			},
			function(cb) {
				
				console.log('Function Fired... E');
				var a = Math.floor(Math.random() * 13) * 666;
				setTimeout(function() {
					console.log('Function E....');
					data.push('Function E');
					cb();
				},a);
				
			},
			function(cb) {
				console.log('New Function Fired...');
				var a = Math.floor(Math.random() * 13) * 666;
				console.log('Waiting... ' + a);
				setTimeout(function() {
					console.log('Function New... Done..');
					data.push('Function New');
					cb();
				},a);
			},
			function(cb) {
				console.log('Function Fired... F');
				var a = Math.floor(Math.random() * 13) * 666;
				setTimeout(function() {
					console.log('Function F....');
					data.push('Function F');
					cb();
				},a);
			}
		], cb);
	},
	function(cb) {
		console.log('next step....');
		setTimeout(function() {
			console.log('.... SEQ?');
			cb();
		},3000);
	},
	function(cb) {
		console.log('Another STep');
		setTimeout(function() {
			console.log('.... SEQ?');
			cb();
		},3000);
	},
	function(cb) {
		console.log('LAST STEP!!!!');
		console.log(data);
	}

]); //end series