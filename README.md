sensoryOverload
===============

Rapidly shuffle through elements on the page when page is scrolling.

<h3>HTML</h3>
```html
<section data-sensory-overload>
	<div data-sensory-item class="activated" style="background-image: url('your-image-path');"></div>
	<div data-sensory-item data-background="your-image-path"></div>
	<div data-sensory-item="pattern" data-background="your-image-path"></div>
	<div data-sensory-item data-background="your-image-path"></div>
	<div data-sensory-item="pattern" data-background="your-image-path"></div>
</section>
```

<h3>SCSS</h3>
```scss
// You will need to change this based on your 'container' selector
[data-sensory-overload]{
	display: block;
	height: 100%;
	position: relative;
	width: 100%;
	> *{
		background-size: cover;
		background-repeat: none;
		display: none;
		height: 100%;
		position: absolute;
		width: 100%;
		&.activated{
			display: block;
		}
	}
	// You will need to change this based on your 'items' selector
	> [data-sensory-item="pattern"]{
		background-size: auto;
		background-repeat: repeat;
	}
}
```


<h3>Usage</h3>
```javascript
	$('[data-sensory-overload]').sensoryOverload({
		'delay': 200,
	});
```

<h3>Defaults/Settings</h3>
```javascript
	'delay': 100,				// Delay between sensory items
	'container': '[data-sensory-overload]', // Container of your items,
	'items': '[data-sensory-item]', // Items  to flash
	'active': 'activated'		// Active class for items
```
