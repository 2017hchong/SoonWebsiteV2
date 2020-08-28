import React from "react";
import Select from 'react-select';

import './styles/PrayerRequestsForm.css';

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
};

const shareOptions = [
    {value: 'SJs', label: 'SJs'},
    {value: 'All members', label: 'All members'},
    {value: 'Staff and DPD', label: 'Staff and DPD'}
];

const customStyles = {
    control: (base, state) => ({
        ...base,
        background: "rgba(0,0,0,0)",
        borderRadius: 5,
        border: 0,
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
            background: "rgba(255, 255, 255, 0.45)"
        }
    }),
    menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
        hyphens: "none",
        // kill the gap
        marginTop: 0,
        textAlign: "left",
        // prevent menu to scroll y
        wordWrap: "break-word"
    }),
    menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0
    })
};

class PrayerRequestsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            prequest: '',
            options: '',
            errors: {
            },
            submitmsg: " SUBMIT ",
            submitted: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleSelectChange(selectedOption)  {

        const value = selectedOption.value;
        let errorsNew = this.state.errors;

        //class selector
        if(value === "SJs" || value === "All members" || value==="Staff and DPD"){
            errorsNew.options = "";
            this.setState({
                options: value,
                errors: errorsNew
            });
        }

        console.log(selectedOption, this.state);
    };

    handleInputChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'prequest':
                errors.prequest =
                    value.length === 0
                        ? 'Prayer request cannot be empty'
                        : '';
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
    }

    submitted() {
        this.setState({
            name: '',
            prequest: '',
            options: "Staff and DPD",
            submitmsg: " SUBMIT ",
        });
    }

    submitForm() {
        console.log("SUBMITTTEEDDD!!!");
    }

    checkAllFields() {
        //Make sure none of the selectors are empty
        let errorsNew = this.state.errors;
        let errorDetected = false;
        if(this.state.options.length === 0){
            errorsNew.options = "Select an option";
            errorDetected = true;
        }
        if(this.state.prequest.length === 0){
            errorsNew.prequest = 'Last name cannot be empty';
            errorDetected = true;
        }

        if(errorDetected) {
            this.setState({errors: errorsNew}, ()=> {
                console.log(errorsNew)
            });
            return false;
        }

        if(validateForm(this.state.errors)) {
            console.info('Valid Form');
            return true;
        }else{
            console.error('Invalid Form')
            return false;
        }
    }

    handleSubmit(e) {
        e.preventDefault();


        if(!this.checkAllFields()) {
            console.log("INVALID FORM");
            return;
        }

        //https://github.com/jamiewilson/form-to-google-sheets
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyMKnmLXPZM1c7Eb6P1zgUXPEIqFVT_KxNKJxGEwIwOWbJzODf2/exec';
        const form = new FormData();
        const d = new Date();
        const utc = d.getTime() + (d.getTimezoneOffset()*60000);
        const date = new Date(utc - (3600000*4));

        form.append('Date', date.toLocaleString());
        form.append('Name', this.state.name);
        form.append('Prayer Request', this.state.prequest);
        form.append('Share With: ', this.state.options);

        this.setState({
            submitmsg: " SUBMITTING... ",
        });

        fetch(scriptURL, { method: 'POST', body: form })
            .then(
                this.setState({
                    name: '',
                    prequest: '',
                    options: '',
                    errors: {
                    },
                    submitmsg: " SUBMIT ",
                    submitted: true
                })
            ).catch(error => alert("An error occurred. Please try again."));
    }

    render() {

        let header = this.state.submitted ? "Prayer Request Received" : "Prayer Requests Form";
        let description = this.state.submitted ?
            <div id={"interestFormDescription"} className={"details"}>
                We've received your prayer request! We will be praying for you!
            </div>
            :
            <div id={"interestFormDescription"} className={"details"}>
                No matter how big or small, we would love to pray for you! Feel free to remain anonymous if you would like.
            </div>;
        const form = this.state.submitted ? null :
            <form onSubmit={this.handleSubmit}>
                <div className={"inputCategory"}>
                    <div className={"singleRowInputs"}>
                        <div
                            className={`fullInput textInput details`}>
                            <div className={"body"}>Name</div>
                            <input
                                name={"name"}
                                type={"text"}
                                value={this.state.name}
                                onChange={this.handleInputChange} />
                            <div className={"underline"}></div>
                            <span className={"errorText"}>{this.state.errors["name"]}</span>
                        </div>
                    </div>
                </div>
                <div className={"inputCategory"}>
                    <div className={"singleRowInputs"}>
                        <div className={`fullInput textInput details 
                            ${this.state.errors["prequest"] === undefined || this.state.errors["prequest"].length === 0 ? "" : "errorInput"}`}>
                            <div className={"body"}>Prayer Request</div>
                            <textarea
                                name={"prequest"}
                                type={"text"}
                                value={this.state.prequest}
                                onChange={this.handleInputChange} />
                            <span className={"errorText"}>{this.state.errors["prequest"]}</span>
                        </div>
                    </div>
                </div>
                <div className={"inputCategory"}>
                    <div className={"body"}>Share Options </div>
                    <div className={"singleRowInputs"}>
                        <div className={`fullInput textInput details communicationOption
                            ${this.state.errors["options"] === undefined || this.state.errors["options"].length === 0 ? "" : "errorInput"}`}>
                            <div className={"selectContainer"}>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="options"
                                    options={shareOptions}
                                    styles={customStyles}
                                    onChange={this.handleSelectChange}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary: 'black',
                                        },
                                    })}
                                />
                            </div>
                            <div className={"underline"}></div>
                            <span className={"errorText"}>{this.state.errors["options"]}</span>
                        </div>
                    </div>
                </div>
                <input type="submit" value={this.state.submitmsg}/>
            </form>;

        return (
            <div id={"interestForm"}>
                <h2 id="interestFormHeader" className={"header"}>
                    {header}
                </h2>
                {description}
                {form}
            </div>

        );
    }
}

export default PrayerRequestsForm;