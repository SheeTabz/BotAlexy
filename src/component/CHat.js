import React, { Component } from 'react'

export class CHat extends Component {
    componentDidMount(){
  
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"823ac9d52b9ef23cd9fac12e30597602","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    
      }
  render() {
    return (
      <div>Working example of a chatbot

<p>you can say hello or ask about itself etc</p>
      </div>
      
    )
  }
}

export default CHat
