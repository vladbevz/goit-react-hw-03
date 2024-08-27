import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

export default function ContactList({contacts, onDelete}){
    
    return (
        <ul className={css.contacts_list}>{
            contacts.map( contact =>
                (<li key={contact.id}>
                    <Contact  contact={contact} onDelete={onDelete}/>
                </li>
                )

            )
        }
        </ul>
    )
}