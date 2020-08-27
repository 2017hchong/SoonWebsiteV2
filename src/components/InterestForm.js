import React from "react";


import Select from 'react-select';

import './styles/InterestForm.css';
import SocialMediaButtons from "./SocialMediaButtons";

const validEmailRegex =
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validPhoneRegex =
    RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
};

const classOptions = [
    {value: '2024', label: '2024'},
    {value: '2023', label: '2023'},
    {value: '2022', label: '2022'},
    {value: '2021', label: '2021'},
    {value: 'other', label: 'other'},
];

const schoolOptions = [
    {value: 'CC', label: 'Columbia College'},
    {value: 'SEAS', label: 'SEAS (School of Engineering)'},
    {value: 'Barnard', label: 'Barnard'},
    {value: 'GS', label: 'General Studies'},
    {value: 'graduate', label: 'Graduate Program'},
];

const communicationOptions = [
    {value: 'Email', label: 'Email'},
    {value: 'Text', label: 'Text'}
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

class InterestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            class: '',
            school: '',
            email: '',
            phone: '',
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
        if(value === "2024" || value === "2023" || value === "2022" || value === "2021" || value === "other") {
            errorsNew.class = "";
            this.setState({
                class: value,
                errors: errorsNew
            });
        }
        else if(value === "CC" || value === "SEAS" || value === "GS" || value === "Barnard" || value === "graduate"){
            errorsNew.school = "";
            this.setState({
                school: value,
                errors: errorsNew
            });
        }
        else if(value === "Email" || value === "Text"){
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

        console.log(value);
        console.log(value.length === 0);

        switch (name) {
            case 'firstName':
                errors.firstName =
                    value.length === 0
                        ? 'First name cannot be empty'
                        : '';
                break;
            case 'lastName':
                errors.lastName =
                    value.length === 0
                        ? 'Last name cannot be empty'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'phone':
                errors.phone =
                    value.length === 0 || validPhoneRegex.test(value)
                        ? ''
                        : 'Phone number is not valid!';
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
        if(this.state.class.length === 0){
            errorsNew.class = "Select your class";
            errorDetected = true;
        }
        if(this.state.school.length === 0){
            errorsNew.school = "Select your school";
            errorDetected = true;
        }
        if(this.state.options.length === 0){
            errorsNew.options = "Select an option";
            errorDetected = true;
        }
        if(this.state.firstName.length === 0){
            errorsNew.firstName = 'First name cannot be empty';
            errorDetected = true;
        }
        if(this.state.lastName.length === 0){
            errorsNew.lastName = 'Last name cannot be empty';
            errorDetected = true;
        }
        if(!validEmailRegex.test(this.state.email)){
            errorsNew.email = 'Email is not valid';
            errorDetected = true;
        }
        if(this.state.phone.length > 0 && !validPhoneRegex.test(this.state.phone)){
            errorsNew.phone = 'Phone number is not valid';
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
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyM5EIf3Xwrz0jfIlxU1yFikZXSmEiqB8GDYwHiXfRiF7nVne4/exec';
        const form = new FormData();
        const d = new Date();
        const utc = d.getTime() + (d.getTimezoneOffset()*60000);
        const date = new Date(utc - (3600000*4));

        form.append('Date', date.toLocaleString());
        form.append('First Name', this.state.firstName);
        form.append('Last Name', this.state.lastName);
        form.append('Class', this.state.class);
        form.append('School', this.state.school);
        form.append('Email', this.state.email);
        form.append('Phone', this.state.phone);
        form.append('Best Communication', this.state.options);

        this.setState({
            submitmsg: " SUBMITTING... ",
        });

        fetch(scriptURL, { method: 'POST', body: form })
            .then(
                this.setState({
                    firstName: '',
                    lastName: '',
                    class: '',
                    school: '',
                    email: '',
                    phone: '',
                    options: '',
                    errors: {
                    },
                    submitmsg: " SUBMIT ",
                    submitted: true
                })
            ).catch(error => alert("An error occurred. Please try again."));
    }

    render() {

        let header = this.state.submitted ? "Thank you!" : "Interest Form";
        let description = this.state.submitted ?
            <div id={"interestFormDescription"} className={"details"}>
                Thank you for filling out the form! We have received your information, and one of our leaders will be in contact soon.
                In the meantime, don't hesitate to <span className={"bold"}>join us on Facebook</span> and
                <span className={"bold"}> follow us on Instagram</span> for latest announcements and event information!
                <SocialMediaButtons/>

            </div>
            :
            <div id={"interestFormDescription"} className={"details"}>
                Thank you for your interest in our ministry! If you want to get involved or know more,
                                    please fill out the form below and one of our staff members
                                    or student leaders will reach out to you shortly!
                <br/><br/>
                Questions? Check us out on <a className="linksA" href={"https://www.facebook.com/groups/columbiakccc/"}>Facebook</a> and
                <a className="linksA" href={"https://www.instagram.com/cu_soonmovement/"}> Instagram</a>.
            </div>;
        const form = this.state.submitted ? null :
            <form onSubmit={this.handleSubmit}>
            <div className={"inputCategory"}>
                <div className={"body"}> Name</div>
                <div className={"singleRowInputs"}>
                    <div className={`halfInput textInput details  
                            ${this.state.errors["firstName"] === undefined || this.state.errors["firstName"].length === 0 ? "" : "errorInput"}`}>
                        <input
                            placeholder={"First"}
                            name={"firstName"}
                            type={"text"}
                            value={this.state.firstName}
                            onChange={this.handleInputChange} />
                        <div className={"underline"}></div>
                        <span className={"errorText"}>{this.state.errors["firstName"]}</span>
                    </div>
                    <div className={`halfInput textInput details  
                            ${this.state.errors["lastName"] === undefined || this.state.errors["lastName"].length === 0 ? "" : "errorInput"}`}>
                        <input
                            placeholder={"Last"}
                            name={"lastName"}
                            type={"text"}
                            value={this.state.lastName}
                            onChange={this.handleInputChange} />
                        <div className={"underline"}></div>
                        <span className={"errorText"}>{this.state.errors["lastName"]}</span>
                    </div>
                </div>
            </div>
            <div className={"inputCategory"}>
                <div className={"singleRowInputs"}>
                    <div className={`halfInput textInput details 
                            ${this.state.errors["class"] === undefined || this.state.errors["class"].length === 0 ? "" : "errorInput"}`}>
                        <div className={"body"}>Class</div>
                        <div className={"selectContainer"}>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                // defaultValue={classOptions[0]}
                                name="class"
                                options={classOptions}
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
                        <span className={"errorText"}>{this.state.errors["class"]}</span>
                    </div>
                    <div className={`halfInput textInput details 
                            ${this.state.errors["school"] === undefined || this.state.errors["school"].length === 0 ? "" : "errorInput"}`}>
                        <div className={"body"}>School</div>
                        <div className={"selectContainer"}>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                // defaultValue={schoolOptions[0]}
                                name="school"
                                options={schoolOptions}
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
                        <span className={"errorText"}>{this.state.errors["school"]}</span>
                    </div>
                </div>
            </div>
            <div className={"inputCategory"}>
                <div className={"singleRowInputs"}>
                    <div
                        className={`fullInput textInput details 
                            ${this.state.errors["email"] === undefined || this.state.errors["email"].length === 0 ? "" : "errorInput"}`}
                    >
                        <div className={"body"}>Email</div>
                        <input
                            name={"email"}
                            type={"text"}
                            value={this.state.email}
                            onChange={this.handleInputChange} />
                        <div className={"underline"}></div>
                        <span className={"errorText"}>{this.state.errors["email"]}</span>
                    </div>
                </div>
            </div>
            <div className={"inputCategory"}>
                <div className={"singleRowInputs"}>
                    <div className={`fullInput textInput details 
                            ${this.state.errors["phone"] === undefined || this.state.errors["phone"].length === 0 ? "" : "errorInput"}`}>
                        <div className={"body"}>Phone</div>
                        <input
                            name={"phone"}
                            type={"phone"}
                            value={this.state.phone}
                            onChange={this.handleInputChange} />
                        <div className={"underline"}></div>
                        <span className={"errorText"}>{this.state.errors["phone"]}</span>
                    </div>
                </div>
            </div>
            <div className={"inputCategory"}>
                <div className={"body"}>Best Form of Communication </div>
                <div className={"singleRowInputs"}>
                    <div className={`fullInput textInput details communicationOption
                            ${this.state.errors["options"] === undefined || this.state.errors["options"].length === 0 ? "" : "errorInput"}`}>
                        <div className={"selectContainer"}>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                name="options"
                                options={communicationOptions}
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

export default InterestForm;