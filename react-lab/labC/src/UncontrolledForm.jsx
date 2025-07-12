const FormU = () => { 
 const inputRef = useRef(null);
 const fileInput = useRef(null); 

 const handleSubmit = (e) => { 
   e.preventDefault();
   const inputValue = inputRef.current.value; 
   // Do something with the value 

   const files = fileInput.current.files; 
   // Do something with the files here 
 }
 
 return ( 
   <form onSubmit={handleSubmit}> 
     <input ref={inputRef} type="text" />
     <input ref={fileInput} type="file" /> 
   </form> 
 ); 
};

export default FormU;
