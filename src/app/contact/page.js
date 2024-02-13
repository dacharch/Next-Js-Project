import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "../styles/common.module.css"


export default function Contact() {
     return (
          <>
               <div className={styles.container}>
                    <h1>Contact Us</h1>
                    <ContactCard />
                    <section className={styles.contact_section}>
                        <h2>We'd love to hear <span> from you</span></h2>
                         <ContactForm/>
                    </section>
               </div>

               
          </>
     )
}