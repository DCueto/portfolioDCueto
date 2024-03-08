
document.addEventListener( 'DOMContentLoaded', app );

function app() {

  const toBeTyped = [
    'Desarrollador de Software',
    'Entusiasta por el código',
    'Desarrollador Frontend',
    'Estudiante de Ingeniería de Software'
  ];
  
  const delayTypingChar = 200;
  const delayErasingText = 150;
  const delayTypingText = 3000;
  
  const dinamicLabel = document.querySelector('.dinamicRoleText span');
  
  let toTypeIndex = 0;
  let charIndex = 0;
  
  function typeText(){
  
    if( charIndex < toBeTyped[ toTypeIndex ].length ) {
      dinamicLabel.textContent += toBeTyped[ toTypeIndex ].charAt( charIndex );
      charIndex++;
      setTimeout( typeText, delayTypingChar );
    } else {
      setTimeout( eraseText, delayTypingText );
    }
    
  }
  
  function eraseText(){
  
    if( charIndex > 0 ){
      dinamicLabel.textContent = toBeTyped[ toTypeIndex ].substring(0, charIndex-1);
      charIndex = charIndex-1;
      setTimeout( eraseText, delayErasingText );
    } else {
      toTypeIndex++;
      setTimeout( typeText, delayTypingText );

      if ( toTypeIndex >= toBeTyped.length ){
        toTypeIndex = 0;
        setTimeout( typeText, delayTypingText );
      }
    }
  
  }


  if ( toBeTyped[ toTypeIndex ].length ){
    setTimeout( typeText, delayTypingText );
  }


  const commandStart = document.querySelector('.commandInfo');
  const searchIcon = document.querySelector('.searchIcon');
  const modal = document.querySelector('.modal');

  const showsModal = () => {
    if( modal.classList.contains('hidden') ){
      modal.classList.remove('hidden');
    }
  }

  commandStart.addEventListener( 'click', showsModal );
  searchIcon.addEventListener( 'click', showsModal );

  modal.addEventListener('click', ( e ) => {
    e.stopPropagation();
    if( e.target.classList.contains('modal') ){
      modal.classList.add('hidden');
    }
  });


  window.addEventListener('keydown', ( e ) => {

    if(e.metaKey && e.code == 'KeyB'){
      showsModal();
    }
    
  });

}


