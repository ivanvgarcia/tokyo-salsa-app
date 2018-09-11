import React from 'react';

export default class VenueForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: props.venue ? props.venue.name : '',
            image: props.venue ? props.venue.image : '',
            address: props.venue ? props.venue.address : '',
            city: props.venue ? props.venue.city : '',
            state: props.venue ? props.venue.state : '',
            zipcode: props.venue ? props.venue.zipcode : '',
            description: props.venue ? props.venue.description : '',
            error: ''
        };
    }
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onImageChange = (e) => {
        const image = e.target.value;
        this.setState(() => ({ image }));
    };
    onAddressChange = (e) => {
        const address = e.target.value;
        this.setState(() => ({ address }));
    };
    onCityChange = (e) => {
        const city = e.target.value;
        this.setState(() => ({ city }));
    };
    onStateChange = (e) => {
        const state = e.target.value;
        this.setState(() => ({ state }));
    };
    onZipcodeChange = (e) => {
        const zipcode = e.target.value;
        if (zipcode.match(/^\d{0,7}$/)) {
            this.setState(() => ({ zipcode }));
        }  
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.name || 
            !this.state.image ||
            !this.state.address ||
            !this.state.city ||
            !this.state.state ||
            !this.state.zipcode ||
            !this.state.description) {
                this.setState(() => ({ error: 'Please fill out all parts of the form' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onAdd({
                name: this.state.name,
                image: this.state.image,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipcode: parseInt(this.state.amount, 10),
                description: this.state.description
            });
        }
    };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
            <input
                type="text"
                placeholder="Name of Venue"
                autoFocus
                value={this.state.name}
                onChange={this.onNameChange}
            />
            <input 
                type="text"
                placeholder="Paste an IMG Url"
                value={this.state.image}
                onChange={this.onImageChange}
            />
            <input 
                type="text"
                placeholder="Address"
                value={this.state.address}
                onChange={this.onAddressChange}
            />
            <input 
                type="text"
                placeholder="City"
                value={this.state.city}
                onChange={this.onCityChange}
            />
            <input 
                type="text"
                placeholder="State"
                value={this.state.state}
                onChange={this.onStateChange}
            />
            <input 
                type="text"
                placeholder="Zipcode"
                value={this.state.zipcode}
                onChange={this.onZipcodeChange}
            />
            <textarea
                placeholder="Add a Description"
                value={this.state.description}
                onChange={this.onDescriptionChange}
            >
            </textarea>
            <button className="btn">Add Venue</button>
        </form>
      </div>
    )
  }
}
