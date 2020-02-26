$(function(){
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $('.selectlocation').selectpicker();
    

    //File Upload Code Start Here
    var input = document.getElementById('file-upload' );
    var infoArea = document.getElementById( 'file-upload-filename' );

    input.addEventListener('change', showFileName );

    function showFileName( event ) {
    
    // the change event gives us the input it occurred in 
    var input = event.srcElement;
    
    // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
    var fileName = input.files[0].name;
    
    // use fileName however fits your app best, i.e. add it into a div
    infoArea.textContent = fileName;
    }


      //File1 Upload Code Start Here
      var input1 = document.getElementById('file-upload1' );
      var infoArea1 = document.getElementById( 'file-upload-filename1' );
  
      input1.addEventListener('change', showFileName1 );
  
      function showFileName1( event1 ) {
      
      // the change event gives us the input it occurred in 
      var input1 = event1.srcElement;
      
      // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
      var fileName1 = input1.files[0].name;
      
      // use fileName however fits your app best, i.e. add it into a div
      infoArea1.textContent =  fileName1;
      }

});


