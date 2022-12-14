import React , {useState} from 'react'

export default function Contactform(props) {

    const handleUpClick =()=>{
        console.log("Uppercase was clicked "+ text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" , "success")
    }

    const handleLowClick =()=>{
        console.log("Uppercase was clicked "+ text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase" , "success")
    }
    const handleClearClick =()=>{
        let newText= "";
        setText(newText)
        props.showAlert("All contents cleared" , "success");
    }

    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Content copied!" , "success");
    }

    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed!" , "success");
    }

    const handleOnChange =(event)=>{
        console.log("Change is happening");
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <span contentEditable id="mytext" style="height:200;width:95%;border:1px solid black"></span> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'? '#1e1a1a' : 'white', color: props.mode === 'dark'? 'white' : 'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} color >Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button> 
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button> 
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length } mintutes reading time</p>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h2>Preview</h2>
            <p>{text.length>0? text: "Enter something in the textbox to preview"}</p>
        </div>

        </>

      
    );
}
