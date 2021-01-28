
var isParent = document.querySelectorAll(".accordion_block");
document.querySelectorAll('.accordion_block').forEach(function(el){
  el.addEventListener('click', function(){
	 for (var j = 0; j < isParent.length; j++) {
		isParent[j].className = 'accordion_block';
	}
    el.className = 'accordion_block active';
  })
})