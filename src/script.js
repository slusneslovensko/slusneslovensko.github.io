var t_d=new Date(2018, 1, 25, 0); 
!function(w, d) {
	var o='open';
	var a='addEventListener'; 
	var q='querySelector';
	var r=function() {
		//dynamic__insert__markup
		
		var _s=d.getElementsByTagName('script');
		for(var i=0;i<_s.length;i++){
			if(_s[i].getAttribute('data-slusneslovensko-open')!==null){
				d[q]("#helpsvk").className='open';
			}
		}
		
		makeTimer();
		
		var _cl=d[q]('#helpsvk .hct');
		_cl[a] ? _cl[a]("click", expand) : _cl.attachEvent("onclick", expand);
	};
	
	function makeTimer(){
		setInterval( tck, 1000);
		
		function tck(){
			var t_n = new Date();
			var diff = new Date( (t_n.getTime()-t_d.getTime()) ); 
			var epoch = new Date(1970, 1, 1, 0,0,0);
			
			var years = diff.getYear() - epoch.getYear(); if(years<0) years=0;
			var month = diff.getMonth() - epoch.getMonth(); if(month<0) month=0;
			var days = diff.getDate() - epoch.getDate(); if(days<0) days=0;
			var hours = diff.getHours() - epoch.getHours(); if(hours<0) hours=0;
			
			if(d[q]('#helpsvk .yr').innerText){
				d[q]('#helpsvk .yr').innerText=("00"+years).slice(-2);
				d[q]('#helpsvk .mn').innerText=("00"+month).slice(-2);
				d[q]('#helpsvk .da').innerText=("00"+days).slice(-2);
				d[q]('#helpsvk .hr').innerText=("00"+hours).slice(-2);
			}else{                
				d[q]('#helpsvk .yr').textContent=("00"+years).slice(-2);
				d[q]('#helpsvk .mn').textContent=("00"+month).slice(-2);
				d[q]('#helpsvk .da').textContent=("00"+days).slice(-2);
				d[q]('#helpsvk .hr').textContent=("00"+hours).slice(-2);
			};
		};
		
		tck();
	};
	
	function expand(){
		var _e=d[q]('#helpsvk');
		var _i=d[q]('#helpsvk .insides');
		var _w=d[q]('#helpsvk .mct');
		
		if(_e.className.indexOf(o)>-1){
			_w.style.maxHeight=_i.offsetHeight+"px";
			setTimeout(function(){ _w.style.maxHeight="0"; },5);
		}else{                                  
			_w.style.maxHeight=_i.offsetHeight+"px";
		};
		toggleClass(_e, o);
		 
		setTimeout(function(){
			_w.style.maxHeight="";
		},250);                                             
		
		function toggleClass(el, c){
			if (el.classList) {
				el.classList.toggle(c);
			}else{
				var classes = el.className.split(' ');
				var eInd = -1;
				for (var i = classes.length; i--;) {
				  if (classes[i] === c) eInd = i;
				}; 
				
				if (eInd >= 0) classes.splice(eInd, 1);
				else classes.push(c);
				
				el.className = classes.join(' ');
			}; 
		}; 
	}; 
	
	
	if(d[q]('body')!==null){
		r(); return;
	};
	
	d[a] ? 
		d[a]("DOMContentLoaded",r) :
		d.attachEvent("onreadystatechange", function(){if (d.readyState === "complete"){r()}});
		
}(window, window.document);