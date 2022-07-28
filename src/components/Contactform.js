import React , {useState} from 'react'

export default function Contactform(props) {

    const handleUpClick =()=>{
        console.log("Uppercase was clicked "+ text);
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleLowClick =()=>{
        console.log("Uppercase was clicked "+ text);
        let newText= text.toLowerCase();
        setText(newText)
    }
    // const handleBoldClick =(e)=>{
    //     console.log("Uppercase was clicked "+ text);
    //     let mytext= mytext.innerText
    //     mytext.innerHTML="<b>"+mytext.innerText+"</b>"
    //     setText(mytext)
    // }

    const handleOnChange =(event)=>{
        console.log("Change is happening");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here..");
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <span contentEditable id="mytext" style="height:200;width:95%;border:1px solid black"></span> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} color >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            {/* <button className="btn btn-primary" onClick={handleBoldClick}>Convert to Bold</button> */}
        </div>
        <div className="container my-3">
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length } mintutes reading time</p>
        </div>
        <div className="container my-3">
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>

      
    );
}
