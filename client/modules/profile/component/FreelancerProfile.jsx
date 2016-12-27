import React from 'react';
require("./css/login.css");
require("./css/style.css");

class FreelancerProfile extends React.Component {
    render() {
        const {userId, error} = this.props;
        return (
            <div className="row">
                <div className="col-sm-4">
                    <div id="Card">
                        <div className="card card-block text-xs-center">
                            <h4 className="card-title">Are you available?</h4>
                            <a href="#" className="btn btn-info">Y/N Toggle</a>
                            <a href="#">Seen</a>
                        </div>
                    </div>

                    <div className="Card">
                        <h4>Profile image</h4>
                        <img src="css/img/default-avatar.jpg" alt="avatar"/>
                        <form>
                            <div className="form-group">
                                <input type="file" id="exampleInputFile"/>
                            </div>
                        </form>
                        <button type="submit" className="btn btn-danger">Delete profile logo</button>
                    </div>

                    <div className="Card">
                        <h4>Background image</h4>
                        <form>
                            <div className="form-group">
                                <input type="file" id="exampleInputFile"/>
                            </div>
                        </form>
                        <button type="submit" className="btn btn-danger">Delete Background company logo</button>
                    </div>

                </div>

                <div className="col-sm-8">
                    <div className="Card">
                        <div className="col-sm-6">
                            <fieldset>
                                <form>
                                    <h2>Your basic information</h2>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First name" ref="fname"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last name" ref="lname"/>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" ref="selectedPosition">
                                            <option>Position</option>
                                            <option>Position 1</option>
                                            <option>Position 2</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" ref="selectedLocation">
                                            <option>Location</option>
                                            <option>Location 1</option>
                                            <option>Location 2</option>
                                        </select>
                                    </div>

                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" ref="mark"/> Travel is possible
                                        </label>
                                    </div>
                                </form>
                            </fieldset>
                        </div>

                        <div className="col-sm-6">
                            <fieldset>
                                <h3>Experience in this Position</h3>
                                <div className="form-group">
                                    <select className="form-control" ref="selectedExperience">
                                        <option>Experience in this Position</option>
                                        <option>Experience in this Position 1</option>
                                        <option>Experience in this Position 2</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <select className="form-control" ref="selectedRate">
                                        <option>Rate</option>
                                        <option>Rate 1</option>
                                        <option>Rate 2</option>
                                    </select>
                                    <span className="glyphicon glyphicon-lock" aria-hidden="true"></span> This is only
                                    visible to subscribers
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Link" ref="link"/>
                                </div>
                            </fieldset>
                        </div>

                        <div className="col-sm-12">
                            <hr/>
                            <fieldset>
                                <h2>Your details</h2>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Headline" ref="headline"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5"
                                              placeholder="Introduce yourself in 300 characters" ref="introduce"></textarea>
                                    <p>243 characters left</p>
                                </div>
                                <div className="form-group">
                                    <select className="form-control" ref="skill">
                                        <option>Skills you have</option>
                                        <option>Skills you have 1</option>
                                        <option>Skills you have 2</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-control" ref="sector">
                                        <option>Sectors you have worked in</option>
                                        <option>Sectors you have worked in 1</option>
                                        <option>Sectors you have worked in 2</option>
                                    </select>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.save.bind(this)}>Save</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    save(e) {
        e.preventDefault();
        const {editFreelancerProfile} = this.props;
        const {fname, lname, position, location, experience, rate, link, travel, headline, introduce, skill, sector, img, bgimg} = this.refs;
        const userId = this.props.userId;
        editFreelancerProfile(userId, fname, lname, position.value, location.value, experience.value, rate.value, link, travel.value, headline.value, introduce.value, skill.value, sector.value, img, bgimg);
        this.refs.fname.value = '';
        this.refs.lname.value = '';
        this.refs.headline.value = '';
        this.refs.introduce.value = '';
        this.refs.link.value = '';

    }
}
export default FreelancerProfile;