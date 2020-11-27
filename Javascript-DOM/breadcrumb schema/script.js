//start script

console.log('s-s')
//making of script elements
var script = document.createElement('script');
script.type = "application/ld+json";
document.getElementsByTagName('head')[0].appendChild(script);

var breadcrumbSchema=[]



function ld_JSONTemplate(name,id,url){
    this.name=name
    this.id=id
    this.url=url
    this.data=function () {
           return {
            
                "@context": "https://json-ld.org/contexts/person.jsonld",
                "@id": id,
                "name": name,
                "url": url
              }
           }
       }
    

var navElement= document.querySelector(".rep-field-breadcrumbs")

for (let index = 0; index < navElement.children.length; index++) {
    var anchorElement = navElement.children[index];
    
    if(anchorElement.tagName=="A"){
        console.log(anchorElement.getAttribute("href"))
        
        
    }
    console.log("number of elements in anchor" + anchorElement.children.length )
    
        
    const nameData = anchorElement.children[0].innerHTML
    const IDData = anchorElement.children[1].innerHTML
    const URLData = anchorElement.getAttribute("href")
     

        
            
        
            
        
    const ldJSONEntry = new ld_JSONTemplate(nameData,IDData,URLData); 

    breadcrumbSchema.push(ldJSONEntry.data()) 
        
        
        



    

}

console.log(breadcrumbSchema)

//setting ld json object as script's inner html
script.innerHTML = JSON.stringify(breadcrumbSchema);