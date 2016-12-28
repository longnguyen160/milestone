import React from 'react';
require("./css/style.css");

class CompanyProfile extends React.Component {

    render() {
        const {user, img, error} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Company Logo</h4>
                        <img src={(this.state.thumnail == "" && img) ? img[0].imgURL : this.state.thumnail} alt="avatar" className="small-image"/>
                        <form>
                            <div className="form-group">
                                <input type="file" id="exampleInputFile" onChange={this.onChangeFile}/>
                            </div>
                        </form>
                        <button type="button" className="btn btn-danger" onClick={this.delete.bind(this)}>Delete company logo</button>
                    </div>
                    <div className="col-md-8">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={user ? "" : "First name"}
                                       value={user ? user.firstName : null} ref="fname"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={user ? "" : "Last name"}
                                       value={user ? user.lastName : null} ref="lname"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={user ? "" : "Company"}
                                       value={user ? user.company : null} ref="company"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={user ? "" : "Company URL"}
                                       value={user ? user.companyURL : null} ref="companyURL"/>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-info" onClick={this.edit.bind(this)}>Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            thumnail: ''
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
        const imgURL = this.state.thumnail;
        editCompanyProfile(userId, fname.value, lname.value, company.value, companyURL.value, imgURL);
    }
}
export default CompanyProfile;