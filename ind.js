var resume =[ {
    
        
            "name": "Karthick v",
            "age": "24",
            "mobilenum": "12345678",
            "gender": "Male",
            "email":"abc@gmail.com",
            "dob":"07mar1998",
            "qualification": "MBA International Bussiness",
            "PG":"71 %"  ,
            "UG": "75%",
            "HSC": "95%",
            "SSLC": "88%",
            "programming" :"c,c++,java,javascript,html,css",
            "hobbies":"music,playing,riding",
            "language known":"tamil,english",
            "nationality":"indian",
            "material status":"single",

            
    
        

}]
      
            
    
   console.log(resume);



   //for loop//
   for(var i=0;i<resume.length;i++)
   {
    console.log(resume[i])
   }




//for in loop//
for(var i in resume)
{
    console.log(resume)
}



//for each//
resume.forEach(i=>{
    console.log(i)
})


//for of//
for(const i of resume)
{
    console.log(i)
}

  

