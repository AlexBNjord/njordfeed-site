
interface Iinfo  {
    "Welcomepage": {
        "Image":string
        "Video":string
        "SubTitle":string
        "Title0":string
        "Title1":string
        "Title2":string
        "Title3":string
        "Info":string
        "Button":string
        "Images": {image:string,title:string,link:string,subTitle:string,objectPosition:string} []
    },    
    "Navbar":{
        "Navigation": {
            title:string
            link:string
            type:string
            links?: {
                title:string
                link:string
                type:string               
            }[]
        }[],
    },
    "ThreeInfo" : {
        boxInfo: {
            title:string
            subtitle:string
        }[]        
    },  
    "SimplePage1":{
        title:string
        info:string
        boxInfo: {
            title:string
            subtitle:string
        }[],

    },"SimplePage2":{
        [key:string]:string        
    }, 
    "FadeHeader" : {
        image1:string
        image2:string
        list: {
            t:string
            st:string
        }[]
        text2:string
        button2:string
        link2:string

    },
    "PathPage":{
        [key:string]:string        
    },
    "Product":{
        "title0": string
        "subtitle0":string
        "list0":string [],
        "info0":string
        "subinfo0":string

        "title1": string
        "subtitle1":string
        "list1":string [],
        "info1":string
        "title2":string
        "info2":string
        "title3":string
        "info3":string
    },
    "Faq":{
        "title0": string        
        "list0":{
            "q":string
            "a":string
        }[],        
    },
    "Price":{
        "title0": string
        "info0": string
    },
    "LearnMore":{
        "title0": string        
        "list0":{
            "q":string
            "a":string
        }[],        
    },
    

    
    "Staff":{
        [key:string]:string
    },
    "Other":{
        [key:string]:string 
    },
    "OtherPage":{
        [key:string]:string
    },
    "Service":{
        [key:string]:string 
    },
    "CompanyInfo":{
        [key:string]:string
    },
    "Footer":{
        list: {
            title:string
            subtitle:string
        }[],
        links: {            
            link:string
        }[],
        madeBy:string
    },
    "Policy":{
        [key:string]:string
    }

       
}

export type{
    Iinfo

}