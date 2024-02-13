'use client'

import { useState } from "react";
import styles from "../contact/contact.module.css" ;
import { Mulish } from "next/font/google";

const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})



export default function ContactForm(){
    const[user,setUser]  = useState({
        username:"",
        email:"",
        phone:"",
        message:""
    })
    const [status, setStatus] = useState(null) ;



    function handleChange(e){
        let name = e.target.name ;
        let value = e.target.value  ;
    
        setUser((prevUser) => ({...prevUser, [name]:value})) ;
    }

    async function handleSubmit (){

        try{
            const response =  await fetch('/api/contact',{
                method: 'POST',
                headers: {'Content_Type':"application/json"},
                body: JSON.stringify({
                    usrname:user.username,
                    email:user.email ,
                    phone:user.phone,
                    message:user.message
                })

            })
            if(response.status===200){
                setUser({
                   username:"",
                   email:"",
                   phone:"",
                   message:""
                })
   
                setStatus('success') ;
           }else{
                setStatus('error') ;
           }

        }catch(e){
            console.log(e) ;

        }

       

    }
    
   
    return(
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                     Enter your name
                     <input type="text" name="username" id="username"
                         placeholder="Enter your username"
                         className={mulish.className}
                         onChange={handleChange}
                         value={user.username}
                         autoComplete="off"

                     />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                     Enter your Email
                     <input type="email" name="email" id="email"
                         placeholder="Enter your Email"
                         className={mulish.className}
                         onChange={handleChange}
                         value={user.email}
                         autoComplete="off"
                         required

                     />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                     Phone
                     <input type="number" name="phone" id="phone"
                         placeholder="Enter your phone"
                         className={mulish.className}
                         onChange={handleChange}
                         value={user.phone}
                         autoComplete="off"
                         required

                     />
                </label>
            </div>
           
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                     Enter your message
                     <textarea  name="message" id="message" rows={10}
                         placeholder="Enter your Message"
                         className={mulish.className}
                         onChange={handleChange}
                         value={user.message}
                         autoComplete="off"
                         required
                     />

                     
                </label>
            </div>
            <div>
               {status === 'success' && <p className={styles.success.msg}>Thank you for your message</p>} 
               {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message</p>}
            <button type="submit" className={mulish.className}
            onChange={handleChange}>
                        Send Message
                     </button>
            </div>
           
          

        </form>
    )
}