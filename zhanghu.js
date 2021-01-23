function IsNull(obj)
{    
    if(obj.length==0)
    {    
        return false;
    }    
    else
    {
        return true;
    }
} 

function chkPhone(obj) 
{    
		var regex = /^1[3|4|5|8][0-9]\d{8}$/gi;
        var result = regex.test(obj);
        if(result==true)
        {
			return true;
        } 
        else 
        {
			return false;
		}
}

function checkPwd(obj) 
{
    var reg =/^(?![0-9]+$)(?![a-zA-Z]+$)(?![#&*?@]+$)(?![0-9A-Za-z]+$)(?![0-9#&*?@]+$)(?![A-Za-z#&*?@]+$)[A-Za-z0-9#&*?@]{5,}$/;
    var result=reg.test(obj);
    if(result==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function checkall()
{
    var name = document.getElementById('昵称').value.trim();  
    var phone = document.getElementById('手机号').value.trim(); 
    var password = document.getElementById('密码').value.trim();   
    if((IsNull(name)==true)&&(IsNull(phone)==true)&&(IsNull(password)==true)&&(chkPhone(phone)==true)&&(checkPwd(password)==true))
    {
        alert("修改成功");
    }
    else
    {
        alert('修改失败');   
    }
    
}
