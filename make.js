var page = require('webpage').create(),
	system = require('system'),
	url = system.args[1];

console.log('---');

if (url) {

	page.open(url, function (s) {

		var title = 'slide',
			posts,
			session,
			fileName;

		posts = page.evaluate(function() {
			var item,
				i,
				tb = document.querySelectorAll('.to-build');

			for(i in tb){
				item = tb[i];
				if(item.classList)
					item.classList.remove('to-build','');
			}

			return document.querySelectorAll("article").length;
		});

		page.viewportSize = { width: 1024, height: 768 };
		page.paperSize = {
			format: 'A4', orientation: 'landscape', margin: '0px',
		}

		for(var x = 1; x <= 3; x++) {
			console.log("- Generating page " + x);
			fileName = title + "-" +  x + ".pdf";
			// fileName = title + ".pdf";

			if(!session)
				session = page.render(fileName)
			else
				page.render(fileName, session);

			page.evaluate(function(){
				curSlide++;
				updateSlides();
			});
		}

		console.log('---');
		phantom.exit();

	});

} else {

	console.log('Try: phantomjs make.js [url]');
	console.log('---');

	phantom.exit();

}