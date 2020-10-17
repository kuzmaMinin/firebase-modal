import React from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hasAccount: false,
            name: '',
            key: '',
            value: '',
        }
    }

    handleChange = ({target: {value, id}}) => {
        this.setState({
            [id]: value,
        })
    }

    componentDidMount() {
        const db = firebase.database()
        const name = db.ref('name')
        name.on('value', (elem) => {
            this.setState({name: elem.val()})
        })
    }

    createAccount = () => {
        const {email, password} = this.state
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //    .catch(error => console.log(error))


        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.setState({hasAccount: true})
            })
            .catch(error => console.log(error))

        this.setState({
            email: '',
            password: ''
        })
    }

    sendData = () => {
        const {key, value} = this.state
        const db = firebase.database()
        db.ref(key).push(value)
        alert('ваши данные были добавлены в базу данных, вась')
        this.setState({
            key: '',
            value: ''
        })
    }

    render() {
        const {hasAccount, name} = this.state
        return (
            <div>
                {
                    hasAccount ?
                        (
                            <div className='add_block'>
                                <input
                                    type="text"id='key'
                                    placeholder='введите ключ'
                                    onChange={this.handleChange}
                                    value={this.state.key}
                                />
                                <input
                                    type="text"
                                    id='value'
                                    placeholder='введите значение'
                                    onChange={this.handleChange}
                                    value={this.state.value}
                                />
                                <input
                                    type="submit"
                                    onClick={this.sendData}
                                    value='добавить в БД'
                                />
                            </div>
                        )
                        :
                        (
                            <div className='login_block'>
                                <input
                                    type="text" id='email'
                                    placeholder='email'
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                                <input
                                    type="password"
                                    id='password'
                                    placeholder='password'
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                />
                                <input
                                    type="submit"
                                    onClick={this.createAccount}

                                />
                            </div>
                        )
                }

            </div>
        )
    }
}

export default App;

