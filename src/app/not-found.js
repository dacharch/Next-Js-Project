import styles from "./styles/common.module.css" ;
import Link from "next/link"

export default function Notfound(){
     return(
         <section className={styles.container}>
             <div className={styles.erro_page}>
                 <h1>404</h1>
                 <h2>Not Found</h2>
                 <p>Could not find  requested resource</p>
                 
                 <Link href="/">
                      <button>
                         Go to Home  Page
                      </button>
                 </Link>
             </div>

         </section>
     )
}