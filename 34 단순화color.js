			var Body = {
				setColor: function(color) {
					$('body').css('color' , color);
					// document.querySelector('body').style.color = color;
				},
				setBackgroundColor: function(color) {
					$('body').css('color' , color);
					// document.querySelector('body').style.backgroundcolor = color;
				}
			}
			function setColor (color) {
				var alist = document.querySelectorAll('a');
				      var i = 0;
				      while(i < alist.length){
				        alist[i].style.color = color;
				        i = i + 1;
						}
				}
			var Link = {
				setColor: function(color) {
					/*var alist = document.querySelectorAll('a');
				      var i = 0;
				      while(i < alist.length){
				        alist[i].style.color = color;
				        i = i + 1;
						},*/
					$('a').css('color' , color);
				}
			}
/*			function BodySetColor (color) {
						document.querySelector('body').style.color = color;
		    	}
		   function BodySetBackgroundColor (color) {
		   			document.querySelector('body').style.backgroundcolor = color;
			   }*/
			function 칼러사진Handler (self) {
				var target = document.querySelector('body');
				    if(self.value === '칼러'){
				      Body.setBackgroundColor('#F3FFC3');
				      Body.setColor('#0500FF');
				      self.value = '사진';
				    
						Link.setColor('#FF00AA');
	      				
				    } else {
				      Body.setBackgroundColor('#E2FFFF');
				      Body.setColor('#FF00AA');
				      self.value = '칼러';

				    	Link.setColor('#008F2E');
				   }
				}
