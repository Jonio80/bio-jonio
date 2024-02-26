var lastCommand='';
var gotoInProgress=false;

function checkCommand(event){
  if(event.key==='Enter'){
    executeCommand();
  }
}

function executeCommand(){
  var inputElement=document.getElementById('input');
  var command=inputElement.value.trim().toLowerCase();
  var terminal=document.getElementById('terminal');
  var output=document.createElement('div');
  output.className='line';
  output.innerHTML='<span class="bold">&gt;</span> '+command;
  terminal.appendChild(output);
  inputElement.value='';

  if(gotoInProgress){
    gotoInProgress=false;
    var telegramChannel = '';
    switch(command) {
      case 'keys':
        telegramChannel = '+51s5ysbccuc5MzEy';
        break;
      case 'bases':
        telegramChannel = '+CsTZtZK6-Zo0ODc6';
        break;
      case 'atk':
        telegramChannel = '+vt_jA9bpbiJiNmZi';
        break;
      default:
        telegramChannel = command;
        break;
    }
    window.location.href="https://t.me/"+telegramChannel;
  } else {
    switch(command){
      case 'clear':
        clearTerminal();
        break;
      case 'hack':
        hackSystem();
        break;
      case 'rainbow':
        rainbowText();
        break;
      case 'goto':
        gotoInProgress=true;
        printOutput('Enter Telegram channel:');
        break;
      case 'help':
        printOutput('Available commands: clear, hack, rainbow, goto, keys, bases, atk');
        break;
      default:
        printOutput('Command not found. Type "help" for available commands.');
    }
  }
}

function printOutput(message){
  var terminal=document.getElementById('terminal');
  var output=document.createElement('div');
  output.className='line';
  output.textContent=message;
  terminal.appendChild(output);
}

function clearTerminal(){
  var terminal=document.getElementById('terminal');
  terminal.innerHTML='';
}

function hackSystem(){
  printOutput('Analyzing security protocols...');
  setTimeout(function(){
    printOutput('Attempting to breach firewall...');
  }, 1500);
  setTimeout(function(){
    printOutput('Injecting malicious code...');
  }, 3000);
  setTimeout(function(){
    clearTerminal();
    printOutput('System compromised. Access granted.');
    rainbowText();
  }, 4500);
}

function rainbowText(){
  var terminal=document.getElementById('terminal');
  terminal.classList.add('rainbow');
}
