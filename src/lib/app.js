
document.addEventListener( 'DOMContentLoaded', app );

function app() {

  // DINAMIC TEXT ROLE

  const toBeTyped = [
    'Desarrollador de Software',
    'Entusiasta por el código',
    'Desarrollador Frontend',
    'Estudiante de Ingeniería de Software'
  ];
  
  const delayTypingChar = 200;
  const delayErasingText = 150;
  const delayTypingText = 3000;
  
  const dinamicLabel = document.querySelector('.dinamic-role-text span');
  
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


  // TOGGLE MODAL NAV

  const commandStart = document.querySelector('.command-info');
  const searchIcon = document.querySelector('.search-icon');
  const modal = document.querySelector('.modal');
  const closeModalIcon = document.querySelector('.modal .close-icon');

  const showsModal = () => {
    if( modal.classList.contains('hidden') ){
      modal.classList.remove('hidden');
    }
  }

  const hideModal = () => {
    if( !modal.classList.contains('hidden') ){
      modal.classList.add('hidden');
    }
  }

  commandStart.addEventListener( 'click', showsModal );
  searchIcon.addEventListener( 'click', showsModal );
  closeModalIcon.addEventListener( 'click', hideModal );

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




