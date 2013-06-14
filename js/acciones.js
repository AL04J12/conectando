var ID_Usuario="";
function LoginConectar(U,P)
{
	datos="usuario="+U+"& Password="+P;
	$.ajax({type:POST,url:"http://192.168.1.175/Sitio6/Log_in_m.php",data:datos}).done(function(msg){
	alert(msg);
	if (msg==""||msg==null)
	    {
		alert("usuario incorecto");
		}
	else 
    	{
		var OUsuario=jQuery.parseJSON(msg);
		ID_Usuario=OUsuario.Usuario;
		alert("bienvenido "+ID_Usuario);
		location.href="#Busqueda";
		}
	
});//fuction
}
$(document).ready(function(e)
 {
	document.addEventListener("deviceready",function()
	{
		$('.Entrar').tap(function ()
		{
			var formulario = $(this).parents('form');
			var usuario = formulario.children('input:eq(0)').val();
			var password = formulario.children('input:eq(1)').val();
			Loginconectar(usuario,password);
		});
	});
 });
