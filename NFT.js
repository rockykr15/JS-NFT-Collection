// create a variable to hold your NFT's
const NFTs =[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _city, _post, _salary) {
   const NFT ={
      "name": _name,
      "city": _city,
      "post": _post,
      "salary": _salary
   }
   NFTs.push(NFT);
   console.log("Minted:" + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i< NFTs.length;i++){
        console.log("\nID: \t\t" +(i+1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("City: \t\t" +NFTs[i].city);
        console.log("Post: \t\t" +NFTs[i].post);
        console.log("salary \t\t" + NFTs[i].salary);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Rocky" ,"Chandigarh", "software Dev", 350000);
listNFTs();
getTotalSupply();
