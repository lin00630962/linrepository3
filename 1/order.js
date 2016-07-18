$(document).ready(function() {
	$("form :input").blur(function(){
		$(this).parent().find(".a2").remove();
		if($(this).is("#username")){		
			if(this.value=="真实姓名" || this.value.length < 2 ){			
				var hdw1 = $("<span class='a2 error red'>请如实填写</span>");
				$(this).parent().append(hdw1);			
			}else{			
				var hdw1 = $("<span class='a2 righta green'></span>");
				$(this).parent().append(hdw1);				
				}
			}
		if($(this).is("#address")){	
			if(this.value=="xx省xx市xx地区xx路x楼x门x号"){			
				var hdw1 = $("<span class='a2 error red'>不得为空</span>");
				$(this).parent().append(hdw1);			
			}else{			
				var hdw1 = $("<span class='a2 righta green'></span>");
				$(this).parent().append(hdw1);				
				}
			}
		if($(this).is("#postcode")){	
			if(this.value.length != 6){			
				var hdw1 = $("<span class='a2 error red'>不对哦</span>");
				$(this).parent().append(hdw1);			
			}else{			
				var hdw1 = $("<span class='a2 righta green'></span>");
				$(this).parent().append(hdw1);				
				}
			}
		if($(this).is("#phone")){	
			if(this.value.length != 11){			
				var hdw1 = $("<span class='a2 error red'>不对哦</span>");
				$(this).parent().append(hdw1);			
			}else{			
				var hdw1 = $("<span class='a2 righta green'></span>");
				$(this).parent().append(hdw1);				
				}
			}

	});

		$("#send").click(function(){
			
			$("form :input").trigger("blur");
			var hdw3 = $(".error").length;
			
			if(hdw3){
				return false;				
			}
			 alert("提交成功");
		});
	   

	
				
});