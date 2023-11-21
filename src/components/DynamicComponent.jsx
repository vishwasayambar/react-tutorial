function DynamicComponent(){
    let title = "Learning Dynamic Components";
    let descroption = "How to use Js Varibales in HTML directly, using {} braces you can use varibales and methods in HTML";

    let useOfMethod = () => {
        return "This is print Using Dynamic Method"
    } 
    
    return  <div>
        <h1>{title}</h1>
        <p>{descroption}</p>
        <p>{useOfMethod()}</p>
    </div>
}

export default DynamicComponent;