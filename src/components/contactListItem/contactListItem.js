import React from "react";
import Button from "@material-ui/core/Button";
import styles from "../contactsList/contacts-list.module.css";

export function ContactListItem(

    { contact: { id, name, number }, deleteContact }
)
{
    const handleClick = event => deleteContact(event.currentTarget.id)

    return (
        <li className={styles.contactList__item}>
        <div className={styles.contacts}>
   
     <span className={styles.name}>{name}</span>
     <span className={styles.tel}>: {number}</span>
   </div>
   <Button
     className={styles.btn}
     variant="contained"
     color="secondary"
                type="button"
                id={id}
                onClick = {handleClick}
    
   >
     delete Contact
   </Button>
 </li>
    )
}

 