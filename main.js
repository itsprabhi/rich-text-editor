var showSourceCode = false;
var isInEditMode = true;

// To make iframe able to edit

const enableTextField = () => {
    editor.document.designMode = 'On';
}

//To make simple commands
const command = (cmd) => {
    editor.document.execCommand(cmd,false,null);
}

// To make commands with options and prompts
const commandWithArg = (cmd,arg) => {
    editor.document.execCommand(cmd,false,arg);
}

// To convert visual format to code or vice-versa
const toggleSrc = () => {
    if(showSourceCode){
        editor.document.getElementsByTagName('body')[0].innerHTML = editor.document.getElementsByTagName('body')[0].textContent;
        showSourceCode = false;
    }else{
        editor.document.getElementsByTagName('body')[0].textContent = editor.document.getElementsByTagName('body')[0].innerHTML;
        showSourceCode = true;
    }
}

// To turn on/off edit mode on iframe
const toggleEdit = () => {
    if(isInEditMode){
        editor.document.designMode = 'Off'
        isInEditMode = false;
    }else{
        isInEditMode = true;
        editor.document.designMode = 'On'
    }
}
