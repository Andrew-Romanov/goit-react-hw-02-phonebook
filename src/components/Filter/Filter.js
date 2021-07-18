import { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <label>
          {`Find by Name: `}
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.props.filterValue}
            onChange={this.props.whenChange}
          />
        </label>
      </>
    );
  };
};

export default Filter;