/*//clousers
function sub(a,b){
    return function(){
        console.log(a-b)
    }

}
let n=sub(14,4)
console.log(n)
n=function(){
 //   console.log(a-b)
}
n()*/



function outerFunction() {
    // This variable is a part of the closure
    let outerVariable = 10;
  
    function innerFunction() {
      // Inner function has access to outerVariable
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closureFunction = outerFunction();
  closureFunction();










//for java
 /* System.setProperty("webdriver.chrome.driver", "C:\\Users\\Lenovo\\Downloads\\chromedriver\\chromedriver\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.google.com");*/