function encodeAndDecodeMessages() {
    let encodeBtn = document.getElementsByTagName('button')[0];
    let decodeBtn = document.getElementsByTagName('button')[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);
    

    let textValue = text.value;
    
    function encode(e){
        let newText = '';
        let text = e.target.parentNode.children[1].value;

        for (let index = 0; index < text.length; index++) {
            let char = text.charCodeAt(index);
            char += 1;
            newText += String.fromCharCode(char);

            
        }
        let receiveArea = document.getElementsByTagName('textarea')[1];
        receiveArea.value = newText;
        let sendText = document.getElementsByTagName('textarea')[0];
        sendText.value = '';
        decodeBtn.disabled = false;
        
    }

    function decode(e){
        let newText = '';
        let text = e.target.parentNode.children[1].value;

        for (let index = 0; index < text.length; index++) {
            let char = text.charCodeAt(index);
            char -= 1;
            newText += String.fromCharCode(char);

            
        }
        let receiveArea = document.getElementsByTagName('textarea')[1];
        receiveArea.value = newText;
        decodeBtn.disabled = true;
      
    }
    
}