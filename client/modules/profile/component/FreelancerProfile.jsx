import React from 'react';
import {render}  from 'react-dom';
import Switch from 'react-toggle-switch';

// require("./css/toggle.css");
require("./css/style.css");
import "/node_modules/react-toggle-switch/dist/css/switch.min.css"

class FreelancerProfile extends React.Component {
    render() {
        const {user, img, error} = this.props;
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-3">
                        <div className="row well">
                            <div className="card card-block text-xs-center">
                                <h4 className="card-title text-center">Are you available?</h4>
                                <br/>
                                {user ? (user.availability.status ? <Switch ref="status" on/> : <Switch ref="status" off/>) : <Switch ref="status" off/>}
                                <br/>
                                <a href="#">Soon</a>
                            </div>
                        </div>
                        <br/>
                        <div className="row well">
                            <h4>Profile image</h4>
                            <img className="small-image" src={(this.state.thumnail == "" && img) ? img[0].imgURL : this.state.thumnail} alt="avatar" ref="img"/>
                            <form>
                                <div className="form-group">
                                    <input type="file" id="exampleInputFile" onChange={this.onChangeFile}/>
                                </div>
                            </form>
                            <button type="button" className="btn btn-danger" onClick={this.delete.bind(this)}>Delete profile logo</button>
                        </div>
                        <br/>
                        <div className="row well">
                            <h4>Background image</h4>
                            <img className="small-image" src={(this.state.bgthumnail == "" && img) ? img[0].bgimgURL : this.state.bgthumnail} alt="avatar" ref="bgimg"/>
                            <form>
                                <div className="form-group">
                                    <input type="file" id="exampleInputFile" onChange={this.onChangeFileBG}/>
                                </div>
                            </form>
                            <button type="button" className="btn btn-danger" onClick={this.deleteBG.bind(this)} >Delete Background company logo</button>
                        </div>
                        <br/>
                    </div>

                    <div className="col-md-8 col-md-offset-1 well">

                        <div className="col-sm-6">
                            <fieldset>
                                <form>
                                    <h2>Your basic information</h2>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder={user ? "" : "First name"}
                                               value={(this.state.value == '' && user) ? user.firstName : this.state.value}
                                               onChange={this.handleChange.bind(this)} ref="fname"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder={user ? "" : "Last name"}
                                               value={(this.state.value1 == '' && user) ? user.lastName : this.state.value1}
                                               onChange={this.handleChange1.bind(this)}  ref="lname"/>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" ref="position">
                                            <option selected={user ? (user.position == 'Position' ? 'selected' : null) : null} >Position</option>
                                            <option selected={user ? (user.position == 'Position 1' ? 'selected' : null) : null} >Position 1</option>
                                            <option selected={user ? (user.position == 'Position 2' ? 'selected' : null) : null} >Position 2</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" ref="location">
                                            <option selected={user ? (user.location == 'Location' ? 'selected' : null) : null} >Location</option>
                                            <option selected={user ? (user.location == 'Location 1' ? 'selected' : null) : null} >Location 1</option>
                                            <option selected={user ? (user.location == 'Location 2' ? 'selected' : null) : null} >Location 2</option>
                                        </select>
                                    </div>

                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" ref="travel" onChange={this.mark.bind(this)}
                                                   checked={user ? (((this.state.travel == null && user.travel) || this.state.travel == true) ? 'checked' : '') : null}/> Travel is possible
                                        </label>
                                    </div>
                                </form>
                            </fieldset>
                        </div>

                        <div className="col-sm-6">
                            <fieldset>
                                <h3>Experience in this Position</h3>
                                <div className="form-group">
                                    <select className="form-control" ref="experience">
                                        <option selected={user ? (user.ExperienceInPosition.experience == 'Experience in this Position' ? 'selected' : null) : null} >Experience in this Position</option>
                                        <option selected={user ? (user.ExperienceInPosition.experience == 'Experience in this Position 1' ? 'selected' : null) : null} >Experience in this Position 1</option>
                                        <option selected={user ? (user.ExperienceInPosition.experience == 'Experience in this Position 2' ? 'selected' : null) : null} >Experience in this Position 2</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <select className="form-control" ref="rate">
                                        <option selected={user ? (user.ExperienceInPosition.rate == 'Rate' ? 'selected' : null) : null} >Rate</option>
                                        <option selected={user ? (user.ExperienceInPosition.rate == 'Rate 1' ? 'selected' : null) : null} >Rate 1</option>
                                        <option selected={user ? (user.ExperienceInPosition.rate == 'Rate 2' ? 'selected' : null) : null} >Rate 2</option>
                                    </select>
                                    <span className="glyphicon glyphicon-lock" aria-hidden="true"></span> This is only
                                    visible to subscribers
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={user ? "" : "Link"}
                                           value={(this.state.value2 == '' && user) ? user.ExperienceInPosition.link : this.state.value2}
                                           onChange={this.handleChange2.bind(this)} ref="link"/>
                                </div>
                            </fieldset>
                        </div>

                        <div className="col-sm-12">
                            <hr/>
                            <fieldset>
                                <h2>Your details</h2>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={user ? "" : "Headline"}
                                           value={(this.state.value3 == '' && user) ? user.details.headline : this.state.value3}
                                           onChange={this.handleChange3.bind(this)}  ref="headline"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5"
                                              placeholder={user ? "" : "Introduce yourself in 300 characters"}
                                              ref="introduce" value={(this.state.value4 == '' && user) ? user.details.introduce : this.state.value4}
                                              onChange={this.onChangeText.bind(this)} maxLength="300"></textarea>
                                    <p>{(this.state.count == 300 && (user && this.refs.introduce.value !== '')) ? this.state.count - user.details.introduce.length : this.state.count} characters left</p>
                                </div>
                                <div className="form-group">
                                    <select className="form-control" ref="skill">
                                        <option selected={user ? (user.details.skill == 'Skills you have' ? 'selected' : null) : null} >Skills you have</option>
                                        <option selected={user ? (user.details.skill == 'Skills you have 1' ? 'selected' : null) : null} >Skills you have 1</option>
                                        <option selected={user ? (user.details.skill == 'Skills you have 2' ? 'selected' : null) : null} >Skills you have 2</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-control" ref="sector">
                                        <option selected={user ? (user.details.sector == 'Sectors you have worked in' ? 'selected' : null) : null} >Sectors you have worked in</option>
                                        <option selected={user ? (user.details.sector == 'Sectors you have worked in 1' ? 'selected' : null) : null} >Sectors you have worked in 1</option>
                                        <option selected={user ? (user.details.sector == 'Sectors you have worked in 2' ? 'selected' : null) : null} >Sectors you have worked in 2</option>
                                    </select>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.save.bind(this)}>Save
                                </button>
                            </fieldset>
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
            bgthumnail: '',
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            travel: null,
            count: 300
        };
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onChangeFileBG = this.onChangeFileBG.bind(this);
    }

    mark(e) {
        const travel = this.refs.travel.checked;
        this.setState({travel: travel});
    }

    delete(e) {
        e.preventDefault();
        const {deleteIMG} = this.props;
        const userId = this.props.user._id;
        if (this.props.img[0].imgURL !== '')
            deleteIMG(userId, 1);
        this.setState({thumnail: ''})
    }

    deleteBG(e) {
        e.preventDefault();
        const {deleteIMG} = this.props;
        const userId = this.props.user._id;
        if (this.props.img[0].bgimgURL !== '')
            deleteIMG(userId, 2);
        this.setState({bgthumnail: ''})
    }

    onChangeFile(e) {
        const FR = new FileReader();
        const instance = this;
        FR.onload = function (e) {
            instance.setState({thumnail: e.target.result});
        };
        FR.readAsDataURL(e.target.files[0]);
    }

    onChangeFileBG(e) {
        const FR = new FileReader();
        const instance = this;
        FR.onload = function (e) {
            instance.setState({bgthumnail: e.target.result});
        };
        FR.readAsDataURL(e.target.files[0]);
    }

    onChangeText(e) {
        const introduce = this.refs.introduce.value;
        this.setState({count: 300 - introduce.length});
        if (this.state.value4 == '' && introduce !== '')
            this.setState({value4: introduce});
        else this.setState({value4: event.target.value});
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
        const link = this.props.user.ExperienceInPosition.link;
        if (this.state.value2 == '' && link !== '')
            this.setState({value2: link});
        else this.setState({value2: event.target.value});
    }

    handleChange3(e) {
        const headline = this.props.user.details.headline;
        if (this.state.value3 == '' && headline !== '')
            this.setState({value3: headline});
        else this.setState({value3: event.target.value});
    }

    save(e) {
        e.preventDefault();
        const userId = this.props.user._id;
        const {editFreelancerProfile} = this.props;
        const {fname, lname, position, location, experience, rate, link, travel, headline, introduce, skill, sector} = this.refs;
        let img = null, bgimg = null;
        if (this.state.thumnail == '')
            img = this.props.img[0].imgURL;//
        else img = this.state.thumnail;
        if (this.state.bgthumnail == '')
            bgimg = this.props.img[0].bgimgURL;
        else bgimg = this.state.bgthumnail;
        const status = this.refs.status.state.on;
        const info = {fname: fname.value, lname: lname.value, position: position.value, location: location.value, travel: travel.checked};
        const ExperienceInPosition = {experience: experience.value, rate: rate.value, link: link.value};
        const details = {headline: headline.value, introduce: introduce.value, skill: skill.value, sector: sector.value};
        const image = {img, bgimg};
        editFreelancerProfile(userId, status, info, ExperienceInPosition, details, image);
    }
}
export default FreelancerProfile;