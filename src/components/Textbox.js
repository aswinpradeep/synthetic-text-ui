import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import ProgressButton from 'react-progress-button'
import LoadingButton from '@mui/lab/LoadingButton';
import DenseAppBar from './AppBar'
import './style.css';


export default class BasicTextFields extends React.Component {
    constructor() {
        super();
        this.initialState = { headline: "", keystring: "", gentext: "", gentext: "", buttonState: "", loading: false };
        this.state = this.initialState
        // this.onChangeDebounced = debounce(this.onChangeDebounced, 2000);

    }

    handleChange1(e) {
        e.preventDefault()
        this.setState({ headline: e.target.value });
        console.log(this.state.headline)
    }
    handleChange2(e) {
        e.preventDefault()
        this.setState({ keystring: e.target.value });
        console.log(this.state.keystring)
    }

    handleChange3(e) {
        e.preventDefault()
        this.setState({ gentext: e.target.value });
        console.log(this.state.gentext)
    }

    handleReset = () => {
        console.log("hello")

        this.setState({ headline: "" });

        this.setState({ keystring: "" });

        this.setState({ gentext: "" });

        // this.setState({ loading: false })


        console.log(this.state.headline)

    };
    handleApi = async () => {
        console.log("hello")
        console.log(this.state.headline)
        this.setState({ loading: true })
        const data = { "headline": this.state.headline, "keywords": this.state.keystring }
        console.log(data)
        await axios.post(`http://52.88.193.105:5001/generate_text`, data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({ gentext: res.data.generated_text });
            })
        this.setState({ loading: false })



    };

    handleClick() {
        this.setState({ buttonState: 'loading' })
        // make asynchronous call
        setTimeout(() => {
            this.setState({ buttonState: 'success' })
        }, 3000)
    };

    render() {
        return (
            <div>
                <DenseAppBar />
                <div class="split left">

                    <div class="centered">

                        <div className='divclass'>
                            <TextField className="textfield1" id="outlined-basic" label="Enter headline" variant="outlined" value={this.state.headline} onChange={e => this.handleChange1(e)}
                            /></div>

                        <div className='divclass'>
                            <TextField
                                id="outlined-multiline-static"
                                className="textfield1"
                                label="Enter keystring"
                                value={this.state.keystring}
                                multiline
                                rows={5}
                                onChange={e => this.handleChange2(e)}
                            />
                        </div>

                        <div id="container">

                            <div id="bloc1">  <LoadingButton variant="contained" onClick={this.handleApi} loading={this.state.loading}
                            >GENERATE TEXT</LoadingButton></div>
                            <div id="bloc1">  <Button variant="outlined" onClick={this.handleReset} >RESET </Button></div>

                        </div>
                    </div>


                    <div class="split right">
                        <div class="centered">

                            <div className='divclass'>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Generated Text"
                                    multiline
                                    rows={20}
                                    value={this.state.gentext}
                                    className="textfield2"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    onChange={e => this.handleChange3(e)}
                                /></div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}