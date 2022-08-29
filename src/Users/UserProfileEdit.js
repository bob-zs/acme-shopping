import React, {Component} from "react";
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { updateUser } from '../store/auth';

class UserProfileEdit extends Component {
    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            imageUrl:'',
            address:'',
            city:'',
            state:'',
            zipCode:''
        }
        this.update = this.update.bind(this);
    }
    async update(e){
       e.preventDefault();
        const information = {...this.state};
        try {
            await this.props.update(information);
        }
        catch(ex){
        console.error(ex);
        }
    }
    componentDidMount(){
        this.setState({
            firstName:this.props.auth.firstName, 
            lastName:this.props.auth.lastName,
            city:this.props.auth.city,
            state:this.props.auth.state,
            zipCode:this.props.auth.zipCode,
            email: this.props.auth.email,
            imageUrl:this.props.auth.imageUrl,
            address:this.props.auth.address 
        });
    };
    componentDidUpdate(prevProps){
        if(!prevProps.auth.id && this.props.auth.id){
            this.setState({
                firstName:this.props.auth.firstName, 
                lastName:this.props.auth.lastName,
                city:this.props.auth.city,
                state:this.props.auth.state,
                zipCode:this.props.auth.zipCode,
                email: this.props.auth.email,
                imageUrl:this.props.auth.imageUrl,
                address:this.props.auth.address 
            });
        }
        if(prevProps.auth.id && !this.props.auth.id){
            this.setState({
                firstName:'',
                lastName:'',
                email:'',
                imageUrl:'',
                address:'',
                city:'',
                state:'',
                zipCode:''
            })
        }
    };
    closeForm(){
        document.getElementById("editProfile-form").style.width = '0';
        document.getElementById("main-app").style.marginRight = '0';
    };
  render(){
        const { firstName,lastName,city,state,zipCode, email, imageUrl, address } = this.state;
        const { update, closeForm} = this;
    return (
        <section className='side' id="editProfile-form">
            <button className="closebtn" onClick={() => closeForm()}>&times;</button>
            <h2>Update Profile</h2>
            <form onSubmit={ update }>
                 <label>First Name:<br />
                        <input
                            type='text'
                            name='firstName'
                            value={ firstName }
                            onChange={ ev => this.setState({ firstName: ev.target.value })}
                            required
                        />
                    </label>
                    <label>Last Name:<br />
                        <input
                            type='text'
                            name='lastName'
                            value={ lastName }
                            onChange={ ev => this.setState({ lastName: ev.target.value })}
                            required
                        />
                    </label>
                    <label>Email:<br />
                        <input
                            type='email'
                            name='email'
                            value={ email }
                            onChange={ ev => this.setState({ email: ev.target.value })}
                            required
                        />
                    </label>
                    <label>imageUrl:<br />
                        <input
                            type='text'
                            name='imageUrl'
                            value={ imageUrl }
                            onChange={ ev => this.setState({ imageUrl: ev.target.value })}
                        />
                    </label>
                    <label>Street Address:<br />
                        <input
                            type='text'
                            name='address'
                            value={ address }
                            onChange={ ev => this.setState({ address: ev.target.value })}
                            required
                        />
                    </label>
                       <label>City:<br />
                        <input
                            type='text'
                            name='city'
                            value={ city }
                            onChange={ ev => this.setState({ city: ev.target.value })}
                            required
                        />
                    </label>
                       <label>State:<br />
                        <input
                            type='text'
                            name='state'
                            value={ state }
                            onChange={ ev => this.setState({ state: ev.target.value })}
                            required
                        />
                    </label>
                       <label>Zipcode:<br />
                        <input
                            type='text'
                            name='zipCode'
                            value={ zipCode }
                            onChange={ ev => this.setState({ zipCode: ev.target.value })}
                            required
                        />
                    </label>
                    <button type='submit'>Update Profile</button>
                </form>
        </section>
    )
  }
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

const mapDispatch = (dispatch)=>{
    return{
        update:(auth)=>dispatch(updateUser(auth))    
    }
};

export default connect(mapStateToProps, mapDispatch)(UserProfileEdit);