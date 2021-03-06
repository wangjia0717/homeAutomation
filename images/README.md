Images
======

home-logo.png
=============
Find on the internet, just regard it as a placeholder there for logo. We can place a real logo instead of that according to the requirement. 

house.svg
=========

```house.svg``` in this case is treated much more as a View than a simple image.

I removed the any fields that is related to angularJs and add the my own styles and modify the svg file according to my needs.

Reference from: https://github.com/jayproulx/aem-example

Here's an example implemented in this SVG file, these are examples only, and may not precisely represent whats in house.svg.

A Zone:

```xml
<g id="east-wing" class="zone">
		<linearGradient class="temperatureGrad" id="SVGID_100_" gradientUnits="userSpaceOnUse" x1="164.2842" y1="1282.4757" x2="561.8547" y2="1282.4757" gradientTransform="matrix(3.9046 0 0 -3.9046 132.0589 6305.1602)">
			<stop  offset="0" style="stop-color:#E91300;stop-opacity:0"/>
			<stop  offset="1" style="stop-color:#E91300;stop-opacity:0.5"/>
		</linearGradient>
		<path fill="url(#SVGID_100_)" class="zoneBounds" d="M2325.9,1750c0,0-452.6,0-869.1,0c-43.7,86.2-108.7,113-160.1,113c-58.3,0-116.3-26.8-165.3-113c-207.3,0-357.8,0-357.8,0V732.3h1552.2V1750H2325.9z"/>
</g>
```

A Room:

```xml
<g id="queens-bedroom" class="house-room">
		<g class="lights">
			<g class="off">
				<circle fill="none" stroke="#715725" stroke-width="20" cx="2082.4" cy="131.6" r="16.8"/>
			</g>
			<g class="on">
				<radialGradient id="SVGID_12_" cx="482.3994" cy="1406.4301" r="89.3951" gradientTransform="matrix(3.9046 0 0 -3.9046 199.9999 5622.5601)" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFCF01;stop-opacity:0.5"/>
					<stop  offset="1" style="stop-color:#FFCF01;stop-opacity:0"/>
				</radialGradient>
				<polygon fill="url(#SVGID_12_)" points="2111.7,385.4 1847.3,387.3 1847.7,99.2 2112.5,99.2 				"/>
				<circle fill="none" stroke="#D7A648" stroke-width="20" cx="2082.4" cy="131.6" r="16.8"/>
			</g>
		</g>
	</g>
```

For extension of a room, we would expect to have "house-room" class for all rooms in order to detect in the js files.

SVG can be used in exactly the same way as HTML in many cases, looks beautiful on high resolution and retina displays, and for simple line drawings is much lighter to transfer across the network than comparable resolution raster images.

