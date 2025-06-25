import React,{useState} from 'react'

function TextForm(props){
    const clickTohigh=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Coverted to uppercase","success")
    }
    const clickTolow=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("Coverted to Lowercase","success")
    }
    const copytext = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Text Copied to Clipboard", "success");
};

    const clickTocap=()=>{
        let newText = text.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(" ");
  props.showAlert("Coverted to Titlecase","success")
  setText(newText);
};
    
     const clickToclear=()=>{
        setText("")
        props.showAlert("Text Cleared","success")
        
    }
    const change=(event)=>{
        setText(event.target.value)
    
    }
    const [text,setText] =useState("");
    return(
        <>
        <h2 className='h2 my-3'>{props.heading}</h2>
        <div className="mb-3">
  
  <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?'#121212':'white',color:props.mode==="dark"?'white':'black'}}id="my-box" value={text} onChange={change} rows="8"></textarea>
 <button className="btn btn-primary mx-3 my-3" onClick={clickTohigh}>Convert to uppercase</button>
 <button className="btn btn-primary" onClick={clickTolow}>Convert to lowercase</button>
 <button className="btn btn-primary mx-3" onClick={clickToclear}>Clear Text</button>
 <button className="btn btn-primary mx-3" onClick={copytext}>Copy Text</button>
  <button className="btn btn-primary" onClick={clickTocap}>Title Case</button>
 <div className="container">
    <p className="para">{text.split(" ").length} words and characters are {text.length} </p>
    <p>{0.008*text.split(" ").length}Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview"}</p>
 </div>
  
</div>
        </>
    );
} 

export default TextForm;