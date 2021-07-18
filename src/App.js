import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import initialContacts from './utils/contacts.json';

class App extends Component {

  state = {
    contacts: initialContacts,
    filter: '',
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  whenSubmit = ({name, number}) => {
    this.setState(prevState =>
    ({
      contacts: [...prevState.contacts,
      { id: uuidv4(), name, number }]
    }));
  };

  formReset = () => {
    this.setState({name: '', number: '',});
  };

  render() {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (

      <MainContainer>

        <PageHeader title="React Homework 02. Phonebook" />


        <Section title="Add Contact">
          <ContactForm whenSubmit={this.whenSubmit} />
          {/* <form onSubmit={this.handleSubmit}>
            <label>
              {`Name: `}
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={this.state.name}
                onChange={this.handleChange}
                />
            </label>
            <br />
            <label>
              {`Number: `}
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={this.state.number}
                onChange={this.handleChange}
                />
            </label>
            <br />
            <button
              type="submit"
              >
              Add Contact
            </button>
          </form> */}
        </Section>

        <Section title="Contacts">
          <Filter
            filterValue={this.state.filter}
            whenChange={this.handleChange}
          />

          {/* <label>
            {`Find by Name: `}
            <input
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.filter}
              onChange={this.handleChange}
            />
          </label> */}
          <br />
          <ul>
            {filteredContacts.map((contact) => (
            // {this.state.contacts.map((contact) => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </Section>

        {/* <Section title="Feedback Statistics">
          {this.countTotalFeedback() > 0
            ? <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              likes={this.countPositiveFeedbackPercentage()}
            />
            : <Notification
              message="No feedback given"
            />
          }
        </Section> */}

      </MainContainer>

    );
  }
}

export default App;
