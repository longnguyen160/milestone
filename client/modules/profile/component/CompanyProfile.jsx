import React from 'react';
require("./css/style.css");

class CompanyProfile extends React.Component {

    render() {
        const {user, img, error} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <div className="well">
                        <h4><dt>Company Logo</dt></h4>
                        <img src={(this.state.thumnail == "" && img) ? img[0].imgURL : this.state.thumnail} alt="avatar" className="small-image"/>
                        <form>
                            <div className="form-group">
                                <input type="file" id="exampleInputFile" onChange={this.onChangeFile}/>
                            </div>
                        </form>
                        <button type="button" className="btn btn-danger" onClick={this.delete.bind(this)}>Delete company logo</button>
                    </div>
                    </div>
                    
                    <div className="col-md-9">
                    <div className="well">
                        <form className="center-block">
                            <h4 className="text-left"><dt>Your basic information</dt></h4>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={user ? "" : "First name"}
                                       value={(this.state.value == '' && user) ? user.firstName : this.state.value}
                                       onChange={this.handleChange.bind(this)} ref="fname"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={user ? "" : "Last name"}
                                       value={(this.state.value1 == '' && user) ? user.lastName : this.state.value1}
                                       onChange={this.handleChange1.bind(this)} ref="lname"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={user ? "" : "Company"}
                                       value={(this.state.value2 == '' && user) ? user.company : this.state.value2}
                                       onChange={this.handleChange2.bind(this)} ref="company"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={user ? "" : "Company URL"}
                                       value={(this.state.value3 == '' && user) ? user.companyURL : this.state.value3}
                                       onChange={this.handleChange3.bind(this)} ref="companyURL"/>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-info" onClick={this.edit.bind(this)}>Save
                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }


    constructor(props) {
        super(props);
        this.state = {
            thumnail: '',
            value: '',
            value1: '',
            value2: '',
            value3: ''
        };
        this.onChangeFile = this.onChangeFile.bind(this);
    }

    onChangeFile(e){
        const FR= new FileReader();
        const instance = this;
        FR.onload = function(e) {
            instance.setState({thumnail: e.target.result});
        };
        FR.readAsDataURL( e.target.files[0] );
    }

    handleChange(e) {
        const fname = this.props.user.firstName;
        if (this.state.value == '' && fname !== '')
            this.setState({value: fname});
        else this.setState({value: event.target.value});
    }

    handleChange1(e) {
        const lname = this.props.user.lastName;
        if (this.state.value1 == '' && lname !== '')
            this.setState({value1: lname});
        else this.setState({value1: event.target.value});
    }

    handleChange2(e) {
        const company = this.props.user.company;
        if (this.state.value2 == '' && companyURL !== '')
            this.setState({value2: company});
        else this.setState({value2: event.target.value});
    }

    handleChange3(e) {
        const companyURL = this.props.user.companyURL;
        if (this.state.value3 == '' && companyURL !== '')
            this.setState({value3: companyURL});
        else this.setState({value3: event.target.value});
    }


    delete(e) {
        e.preventDefault();
        const {deleteIMG} = this.props;
        const userId = this.props.user._id;
        if (this.props.img[0].imgURL !== '')
            deleteIMG(userId);
        this.setState({thumnail: ''})
    }

    edit(e) {
        e.preventDefault();
        const {editCompanyProfile} = this.props;
        const {fname, lname, company, companyURL} = this.refs;
        const userId = this.props.user._id;
        let imgURL = null;
        if (this.state.thumnail == '')
            imgURL = this.props.img[0].imgURL;
        else imgURL = this.state.thumnail;
        editCompanyProfile(userId, fname.value, lname.value, company.value, companyURL.value, imgURL);
    }
}
export default CompanyProfile;