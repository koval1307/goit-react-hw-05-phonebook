import React from "react";

import styles from "./contacts-list.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ContactListItem } from "../contactListItem/contactListItem";
function ContactList({ contactList, deleteContact }) {
  return (
    <TransitionGroup
      component="ul"
      
     
      className={styles.contact__list}
    >
      {contactList.map((el) => {
        return (
          <CSSTransition key={el.id} timeout={250} unmountOnExit
           classNames={styles}>
            <ContactListItem
              key={el.id}
              contact={el}
              deleteContact={deleteContact}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

export default ContactList;
