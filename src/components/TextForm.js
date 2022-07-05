import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick=()=>{
      console.log("upper case "+text)
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to Upper Case", "success")  
    }

    const handleLowClick=()=>{
        console.log("lower case "+text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success")
    }

    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value); 
    }

    const handleClearChange=(event)=>{
        console.log("clear change");
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared successfully", "success") 
    }

    const handleCopy = () => {
        console.log("text copied");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied successfully", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success")
    }

    //setText("New text")
    return (
        <div className="container" style={{color: props.mode ==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Input your text</label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'?'white':'grey', color:props.mode ==='light'?'#042743':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearChange}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </div>
    )
}
