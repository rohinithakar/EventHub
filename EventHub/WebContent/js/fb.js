  
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=682447581775162";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


window.fbAsyncInit = function()
        {
            FB.init
            (
                {
                    appId   : "682447581775162",
                    status  : true,
                    cookie  : true,
                    oauth   : true
                }
            );
        };

        function login()
        {
            FB.login
            (
                function( response )
                {
                    if ( response.authResponse )
                    {
                        FB.api
                        (
                            "/me",
                            function( response )
                            {
                            	  document.getElementById("fblogin").style.visibility = "hidden";   	  
                            	  document.getElementById("fblogout").style.visibility = "visible";   	  

                            	  
                                  document.getElementById( "profile_name" ).style.visibility = "visible";
                                  document.getElementById( "profile_pic" ).style.visibility = "visible";

                            	
                                document.getElementById( "profile_name" ).innerHTML = response.name;
                                document.getElementById( "profile_pic" ).src = "http://graph.facebook.com/" + response.id + "/picture";
                            }
                        )
                    }
                }
            );
        }

        function logout()
        {
        	
      	  document.getElementById("fblogin").style.visibility = "visible";   	  
    	  document.getElementById("fblogout").style.visibility = "hidden";   	  

        	
            document.getElementById( "profile_name" ).style.visibility = "hidden";
            document.getElementById( "profile_pic" ).style.visibility = "hidden";

            
            FB.logout(function(response) {
            	  // user is now logged out
            	});
        }
        