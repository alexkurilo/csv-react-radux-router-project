import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
    handleFileSelect(event){
        var myProps = this.props;
        myProps.onAddFile(event.target.files[event.target.files.length-1].name);
        /*console.log(this);*/
        var f = event.target.files[event.target.files.length-1]; // selected file
        /*console.log(f.name);*/

        var content;
        var reader = new FileReader();
        reader.onload = function(event) {
            content = event.target.result;
            myProps.onReadFile(content);
            /*console.log(content);*/
            return content;
        };

        reader.onerror = function(event) {
            console.error("Файл не может быть прочитан! код " + event.target.error.code);
        };
        reader.readAsText(f,["CP1251"]);
    }
    handleChange(event){
        var myProps = this.props;
        myProps.onSelectSeparator(event.target.value || this.props.inputRadio[this.props.inputRadio.length-1].separator);
        let inputChecked;

        /*for (let i=0; i<3 ; i++){
            /!*console.log(this.props.inputRadio[0].separators[this.props.inputRadio[this.props.inputRadio.length-1].checked].parser);*!/
            if (event.target.value === myProps.inputRadio[0].separators[i].parser){
                myProps.inputRadio[0].separators[i].checked = 'checked';
            }
        }*/
        console.log(event.target.value);
        if (event.target.innerText){
            for (let i=0; i<myProps.files.length-1; i++){
                if (myProps.files[i].name === event.target.innerText){
                    myProps.onAddFile(myProps.files[i].name);
                    /*console.log(myProps.files[i].name);*/
                    myProps.onReadFile(myProps.content[i].text);
                    /*console.log(myProps.content[i].text);*/
                    return;
                }
            }
        }
    }

    render() {
        console.log(this);
        var visibleStatus;
        let arr = this.props.content[this.props.content.length - 1].text.split('\n');
        let array = [];
        if (this.props.content[this.props.content.length - 1].text === ''){
            visibleStatus = 'none';
        }else{
            for (let i=0; i<arr.length; i++){
                array[i]=arr[i].split(this.props.inputRadio[this.props.inputRadio.length-1].separator);
            }
            visibleStatus = 'block';

        }

        return (
            <div className='app'>
                <div className='enteredWindow'>
                    <div className="api">
                        <input type="file"
                               name="files[]"
                               accept=".csv"
                               onChange={this.handleFileSelect.bind(this)}

                        />
                    </div>

                    <div className='separatorsWindow'>
                        <h4>
                            Выберите разделитель, выбрано:
                            {this.props.inputRadio[this.props.inputRadio.length-1].separator}
                        </h4>
                        <div className='separatorsBlock'>
                            {this.props.inputRadio[0].separators.map((item, index) =>
                                <div className='separatorBlock'
                                     key={index}>
                                    <label>
                                        <input className="radioButton"
                                               type="radio"
                                               name="separator"
                                               value={item.parser}
                                               checked={item.checked}
                                               onChange={this.handleChange.bind(this)}
                                        />
                                        <div className='separatorName'>
                                            <img src={item.src}/>
                                        </div>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='History'>
                        <center>
                            <h4>История открываемых файлов:</h4>
                        </center>
                        <ol >
                            {this.props.files.map((filename, index)=>
                                <li key={index}
                                    className='liHistory'
                                    onClick={this.handleChange.bind(this)}
                                >
                                    {filename.name}
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
                <div className="tableWindow" >
                    <output display = {visibleStatus}>
                        <center>
                            <div >
                                <h4>
                                        Вы открыли файл  {this.props.files[this.props.files.length - 1].name}
                                </h4>
                            </div>

                            <div className="table"
                                /*visible*/
                                >
                                <table className='tableStyle' >
                                    <tbody >
                                    {array.map((itemtr, indextr) =>
                                        <tr key = {indextr}>
                                            {itemtr.map((itemtd, indextd) =>
                                                <td key = {indextd}  >
                                                    {itemtd}
                                                </td>
                                            )}
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>

                        </center>
                    </output>
                </div>
            </div>
        );
    }

}

export default connect(
    state => (
        {
            content: state.content,
            files: state.files,
            inputRadio: state.inputRadio
        }
    ),
    dispatch => ({
        onReadFile: (text, visibleStatus)=>{
            const fileText = {
                text,
                visibleStatus
            }
            dispatch({type: 'READ_FILE', fileText})
        },
        onAddFile: (name) => {
            const fileName = {
                name
            }
            dispatch({type: 'ADD_FILE', fileName})
        },
        onSelectSeparator: (separator, number, checked) => {
            const changeSeparator = {
                separator,

            }
            dispatch({type: 'SELECT_SEPARATOR', changeSeparator})
        }
    })
)(App);
