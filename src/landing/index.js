var yo = require('yo-yo');

module.exports = function landing(box) {
	return yo `<div class="container landing">
	<div class="row">
		<div class="col s10 push-s1">
			<div class="row">
				<div class="col m5 hide-on-small-only">
					<img class="iphone" src="http://www.hipernova.cl/LibrosResumidos/Historia/Mapuches/Images/machi.jpg">
				</div>
				${box}
			</div>
		</div>
	</div>
</div>`
}
 

