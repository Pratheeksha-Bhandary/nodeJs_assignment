const fs=require("fs");

const createFile = async()=> {
    try{
        await fs.promises.writeFile("NewFile.txt","This is the new file created");
        console.log(" File created");
    }catch(error){
        console.log("File not created",error);
    }
    };

createFile();
