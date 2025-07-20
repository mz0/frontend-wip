const FormC = () => { 
 const [value, setValue] = useState("");
 const [comment, setComment] = useState("");

 const handleSubmit = (e) => {
   e.preventDefault();
   if (!value && (!comment || comment.length < 10)) {
     alert("If there's no Value, please comment (10 chars at least)")
   }
   console.log("Form submitted");
   setName(''); // clear input
 } 

 return ( 
   <form onSubmit={handleSubmit}>
     <label htmlFor="val1">Enter the Value</label>
     <input id="val1" type="text" value={value} 
       onChange={e => setValue(e.target.value)} 
     />

     <label htmlFor="someText">Comment (optional)</label>
     <textarea id="someText" value={comment}
       onChange={e => setComment(e.target.value)}
     /> 
     <button type="submit" disabled={!value}>Submit</button> 
   </form> 
 ); 
};

export default FormC;
