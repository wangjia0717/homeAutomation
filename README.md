<h1>Web Root</h1>

<h2>Folder Structure</h2>
<ul>
<li>css: CSS styles</li>
<li>images: home-logo.png image and house.svg in this project</li>
<li>js: JavaScript source</li>
<li>libs: 3rd party libraries, such as bootstrap in this project. We can add more later when we need more libs for project extension.</li>
<li>json: home feature configuration is sitting in json folder.</li>
</ul>

<h2>Usage Instructions</h2>
<ul>
<li>Click the "Instructions" menu item to display a modal that describes how to use the features of the page</li>
</ul>

<h2>Improvement</h2>
<ol>
<li>In Chrome, it is not possible to access an external SVG's contents via JavaScript when the page is opened through the file system (i.e. the URL has the file:// protocol).
To get around this, you can open it through a local server. Alternately, you can disable the Same-Origin Policy web security feature for testing using --disable-web-security command line argument. Firefox also does not have this limitation, so there is that optional as well.
</li>
<li>Improve UI and support more features</li>
</ol>

<h2>Reference</h2>
<ol>
<li>https://github.com/jayproulx/aem-example</li>
<li>I use the similar UI and animation, however the way that used for approach is different. My solution is using AJAX for the communication with server side. And mine doesn't need to require angularJS</li>
</ol>