	var oImglws=document.getElementById('lwsimg')
	var	aImglws=['img/lwsimg1.jpg','img/lwsimg2.jpg','img/lwsimg3.jpg','img/lwsimg4.jpg','img/lwsimg5.jpg','img/lwsimg6.jpg'];
	var aLilws=document.getElementsByTagName('li');
	// setInterval(function(){
	for (var i = 0; i < aLilws.length; i++) {
		aLilws[i].index=i;
		aLilws[i].onmouseover=function(){
			aLilws[0].className='liimg lwstite';
			this.className='lwsred lwstite';
			oImglws.src=aImglws[this.index];
		}
		aLilws[i].onmouseout=function(){
			aLilws[0].className='liimg lwstite';
			this.className='lwstite';
		}
	}
// },500)