javascript: (function () {
  /* importing jquery, do not touch */
  var script_jQuery = document.createElement("script");
  script_jQuery.src = "https://code.jquery.com/jquery-latest.min.js";
  script_jQuery.onload = () => {
    var script_jQueryUI = document.createElement("script");
    script_jQueryUI.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js";
    script_jQueryUI.onload = loadScript();
    document.body.appendChild(script_jQueryUI);
  };
  document.body.appendChild(script_jQuery);

  /* All css goes here */
  var style = document.createElement("style");
  style.innerHTML = `  
    .ui-resizable-helper { border: 1px dotted #00F;
    }
    
    .ui-resizable-handle {
        background-color: rgba(0,0,0,.75);
        width: 8px;
        height: 8px;
    }
    
    .ui-resizable-se {
        bottom: -5px;
        right: -5px;
    }
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
          outline: none;
          border-none;
          box-shadow: 0px 0px 23px 3px rgba(0,0,0,0.22);
          border-radius: 0pc;
          background-color: white;
          width: 300px;
          height: 200px;
        }
        #${elementID}_text_content{
          color: red;
          background-color: green;
          z-index: 100;
        }
        </style>
            <div id="${elementID}">
                <div class="ui-resizable-handle ui-resizable-n" id="${elementID}_resizable_handle_n"></div>
                <div class="ui-resizable-handle ui-resizable-e" id="${elementID}_resizable_handle_e"></div>
                <div class="ui-resizable-handle ui-resizable-s" id="${elementID}_resizable_handle_s"></div>
                <div class="ui-resizable-handle ui-resizable-w" id="${elementID}_resizable_handle_w"></div>

                <div class="ui-resizable-handle ui-resizable-ne" id="${elementID}_resizable_handle_ne"></div>
                <div class="ui-resizable-handle ui-resizable-se" id="${elementID}_resizable_handle_se"></div>
                <div class="ui-resizable-handle ui-resizable-sw" id="${elementID}_resizable_handle_sw"></div>
                <div class="ui-resizable-handle ui-resizable-nw" id="${elementID}_resizable_handle_nw"></div>


                Hello world!
            </div>
        </div>
        `;
        document
          .getElementById("mainframe_content_edited")
          .insertAdjacentHTML("beforeend", newElement);
        // $(`#${elementID}`).resizable().draggable({
        //   cursor: "move",
        //   containment: "window"
        // });

        var set_position = function (width, height) {
          $(`${elementID}_resizable_handle_n`).css(
            "left",
            width / 2 - 4 + "px"
          );
          $(`${elementID}_resizable_handle_e`).css(
            "top",
            height / 2 - 4 + "px"
          );
          $(`${elementID}_resizable_handle_s`).css(
            "left",
            width / 2 - 4 + "px"
          );
          $(`${elementID}_resizable_handle_w`).css(
            "top",
            height / 2 - 4 + "px"
          );
        };
        $(elementID).resizable({
          handles: {
            n: `${elementID}_resizable_handle_n`,
            e: `${elementID}_resizable_handle_e`,
            s: `${elementID}_resizable_handle_s`,
            w: `${elementID}_resizable_handle_w`,
            ne: `${elementID}_resizable_handle_ne`,
            se: `${elementID}_resizable_handle_se`,
            sw: `${elementID}_resizable_handle_sw`,
            nw: `${elementID}_resizable_handle_nw`,
          },
          create: function (event, ui) {
            var width = $(event.target).width();
            var height = $(event.target).height();
            set_position(width, height);
          },
          resize: function (event, ui) {
            var width = $(event.target).width();
            var height = $(event.target).height();
            set_position(width, height);
          },
          //   alsoResize: "#rect1",
        });

        $(elementID).draggable();

        // document.getElementById(`${elementID}`).contentEditable = true;

        addedElements++;
      });
    });
  }
})();
