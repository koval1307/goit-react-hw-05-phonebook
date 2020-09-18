import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Form from "./components/form/Form";
import ContactList from "./components/contactsList/contactsList";
import Filter from "./components/filter/Filter";
import styles from "./global.module.css";
import AppTitle from "../src/components/appTitle/AppTitle";
import Notification from "../src/components/Notification/Notification";
import "./components/Notification/notification.css"

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    notification: false,
  };

  getContact = (addedContact) => {
    if (
      this.state.contacts.find(
        (el) => el.name.toLowerCase() === addedContact.name.toLowerCase()
      )
    ) {
      this.setState({ notification: true });
  
    } else
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, addedContact],
        };
      });
  };
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  getFilteredName = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  getFilteredContacts = () => {
    return this.state.filter
      ? this.state.contacts.filter((el) =>
          el.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <AppTitle />
        <CSSTransition
          in={this.state.notification}
          unmountOnExit
          timeout={2000}
          classNames="notification"
          onEntered={() => this.setState({ notification: false })}
        >
          <Notification />
        </CSSTransition>
        <Form getContact={this.getContact} />

        <Filter
          filter={this.state.filter}
          getFilterName={this.getFilteredName}
        ></Filter>
        <ContactList
          contactList={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}

export default App;
