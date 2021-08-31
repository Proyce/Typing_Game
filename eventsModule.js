let eventsModule = (function(dModule, uModule, cModule, wModule){
    let addEventListeners = function(){

        //character typing event listener

        //click on download button event listener

    };

                    
    return {
        //init function, initializes the test before start
        init: function(duration, textNumber){

            //fill the list of test words: data Module

            dModule.fillListOfTestWords(textNumber);
            addEventListeners();
        }
    };
             
        
})(dataModule, UIModule, certificateModule, wordsModule);