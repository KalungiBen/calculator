

        let showResult = document.querySelector("#display")
        let results = document.querySelector("#results")

        function appendToDisplay( value ){
        	if (showResult.innerText === "0"){
        		showResult.innerText  =  value;
    	}else{
    		showResult.innerText += value;
    	}
        	
        };

        function clearDisplay(){
        	showResult.innerText = "0";
        }
        // function del(){
        //     showResult.innerText -= value

        function calculateResult(){
            try{
                results.innerText = eval(showResult.innerText)
            }
            catch(error){
                results.innerText = "Syntax Error"
            }
        	
        }





