import React from "react"
import styles from "../../styles/common.module.css"
import Image from 'next/image' ;


export default async function Page({params}){
    const id = params.id ;
    
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4ce5c0d0b2msh5b25679812e1166p1055ddjsnbefdc9097cb6',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };
  
  
    const response = await fetch(url, options);
    const data = await response.json();
    let  main_data = data[0].details;
  
    return(
      <>
         <div className={styles.container}>
             <h2 className={styles.movie_title}> Netflix \ <span>{main_data.type}</span></h2>
             <div className={styles.card_section}>
                 <div>
                     <Image src={main_data.backgroundImage.url}
                            alt={main_data.title}
                            width={600}
                            height={300}
                     />
                 </div>
                 <div>
                      <h1>{main_data.title}</h1>
                      <p>{main_data.synopsis}</p>
                 </div>

             </div>

         </div>
         
      </>
        
    )
}