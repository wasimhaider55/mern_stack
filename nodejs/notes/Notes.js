 const { json } = require("express");
const fs = require("fs");
 class Notes {

    readFile() {
        fs.readFile("data.json", "utf8" , (err,data) => {
             if (err) return;
            const josn = JSON.parse(data);
            console.log(josn)
        })
    }


    search(id) {
      const data = this.readFile();
      console.log(data);
    }
 }


 module.exports = Notes;