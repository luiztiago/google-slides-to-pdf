# README

Screen generator from Google Slides to PDF file, using PhantomJS

## How to use

1. Install phantom-js

	```
brew install phantomjs
```

2. Clone this repository

	```
git clone https://github.com/luiztiago/google-slides-to-pdf && cd google-slides-to-pdf
```

3. Make your PDF files from each keynote using:

	```
phantomjs make.js [url]
eg.: phantomjs make.js http://luiztiago.github.io/talks/2013/2nd-open-meeting-pernambucojs/
```