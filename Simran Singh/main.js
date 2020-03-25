/* ========================WRITE YOUR JS FROM HERE======================== */
function validation(format)
{
	var a=document.login.pass1.value;
	var b=document.login.pass2.value;
	var c=document.login.phoneno.value;
	var num = c.replace(/[^\d]/g,'');
	if(a.length<8)
	{
		alert("min 8 characters");
		return false;
	}

	if(a==b){
		return true;
	}
	else{
		alert("password must be same in both the boxes!!");
		return false;
	}

	

                if(num.length != 10) {

                    //Alert the user that the phone number entered was invalid.

                    alert('Please enter a valid phone number including area code');                   

                } else {

                    //Email was valid.  If format type is set, format the Phone to the desired style.

                   switch(format) {

                        case '0': //Format (xxx)-xxx-xxxx

                            c = "(" + num.substring(0,3) + ")-" + num.substring(3, 6) + "-" + num.substring(6);

                            break;

                        case '1': //Format xxx-xxx-xxxx

                            c = num.substring(0,3) + "-" + num.substring(3, 6) + "-" + num.substring(6);

                            break;

                        default: //Format xxxxxxxxxx

                            c = num;

                            break;

                    }

                }

           
}
