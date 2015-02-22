
//returns a random number:
function _random(min, max){
	if(min==undefined || max==undefined || (min==max && max==0))return 0
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//returns a float random number:;6
function _random_float(min, max){
    return (Math.random() * (max - min)) + min;
}

//returns a random color:
function _random_color(min, max){
   if(min==undefined){min=0}
   if(max==undefined){max=255}    
   var retu="";var R="";var G="";var B=""
   R=_random (min, max).toString(16)
   G=_random (min, max).toString(16)
   B=_random (min, max).toString(16)
   if (R.length==1)R="0"+R;if (G.length==1)G="0"+G;if (B.length==1)B="0"+B;
   retu+="#"+R+G+B
   return retu	    
}

//returns random color with opacity:
//_random_color_rgba(100,250,100,250,100,250,0.5,0.7)
function _random_color_rgba(Rmin, Rmax,Gmin,Gmax,Bmin,Bmax,Amin,Amax){
	if(Rmin==undefined){min=0}; if(Rmax==undefined){max=255};
	if(Gmin==undefined){min=0}; if(Gmax==undefined){max=255};
	if(Bmin==undefined){min=0}; if(Bmax==undefined){max=255};
	if(Amin==undefined){min=0}; if(Amax==undefined){max=1}
	var retu="";
	R=_random (Rmin, Rmax).toString()	
   G=_random (Gmin, Gmax).toString()
   B=_random (Bmin, Bmax).toString()
	A=_random_float(Amin, Amax).toString()
	retu+='rgba('+R+','+G+','+B+','+A+')'
   return retu	    
}

//other functions:
function _l(c){console.log(c)}


//create elements
var page_wrapper=document.getElementById('elements_wrapper')
var page_wrapper_width=page_wrapper.offsetWidth
var page_wrapper_height=page_wrapper.offsetWidth
for(var c=0;c<70;c++){	
	var elem=document.createElement('DIV')
	elem.className='element'
	elem.style.background=_random_color_rgba(40,200,45,200,45,200,0.9,0.7)
	elem.style.width=page_wrapper_width/10+'px'
	elem.style.height=page_wrapper_height/10+'px'
	elem.onmouseover=function(){
		event.target.style.background=_random_color_rgba(40,200,45,200,45,200,0.9,0.7)
	}
	page_wrapper.appendChild(elem)	
}

//append clearBoth element
var _br=document.createElement('BR')
_br.className='clearBoth'
page_wrapper.appendChild(_br)


