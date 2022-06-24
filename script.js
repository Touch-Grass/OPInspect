javascript: (function() {
  
  /* importing jquery, do not touch */
  var script_jQuery = document.createElement('script');
  script_jQuery.src = 'https://code.jquery.com/jquery-latest.min.js';
  script_jQuery.onload = () => {
    var script_jQueryUI = document.createElement('script');
    script_jQueryUI.src = 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js';
    script_jQueryUI.onload = loadScript();
    document.body.appendChild(script_jQueryUI);
  };
  document.body.appendChild(script_jQuery);
  
  
  /* All css goes here */
  var style = document.createElement('style');
  style.innerHTML = `  
  
  `;
  document.head.appendChild(style);
  
  /*All javascript goes in here */
  
  function loadScript() {
    $(document).ready(() => {
      /* Put variables here */
      
      let addedElements = 0;
      
      let editBarHTML = `
      <div class="mainframe_content_edited" id="mainframe_content_edited"> 
      
      </div>
      `;
      document.body.insertAdjacentHTML("beforeend", editBarHTML);
      
      $("#add_elem").click(() => {
        let elementID = `added_element_hacked_${addedElements}`;
        let newElement = `
        <div>
            <style>
            #${elementID}{
                color: blue;
                background-color: purple;
                width: 500px;
                height: 50px;
            }
            </style>
                <div id="${elementID}">
                Hello World!
                </div>
        </div>
        `;
        document.getElementById("mainframe_content_edited").insertAdjacentHTML("beforeend", newElement);
        $(`#${elementID}`).draggable({
            cursor: "move",
            containment: "window"
        });
        document.getElementById(`#${elementID}`).contentEditable = true;
        
        addedElements++;
      });
    });    
  }
})()