import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import App from './App';
import reducer from './reducers';
//import registerServiceWorker from './registerServiceWorker';

/*const initialState = {
    files: [
        'text name 1',
        'text name 2'
    ],
    fileText: [
        'filetext'
        ]
}

function tableFromCSV(state = initialState, action) {
    if (action.type === "ADD_FILE"){
        return{
            ...state,
            files: [...state.files, action.fileName]
        };
    }else if (action.type === "ADD_TEXT"){
        return{
            ...state,
            fileText: [...state.fileText, action.fileContent]
        };
    }
    return state;
}*/

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
//registerServiceWorker();

/*
import {createStore} from 'redux';

function tableFromCSV(state = [], action) {
    //debugger;
    if (action.type === "ADD_FILE"){
        return[
            ...state,
            action.fileName
        ];
    };
    if (action.type === "ADD_TEXT"){
        return[
            ...state,
            action.fileContent
        ];
    }
    return state;
}

const store = createStore(tableFromCSV);

const files = document.getElementById('files');
const filelist = document.querySelectorAll('.fileList')[0];
/!*console.log(store.getState());*!/

store.subscribe(()=> {
    /!*console.log("subscribe",store.getState());*!/
    filelist.innerHTML = "";
    store.getState().forEach(filename => {
        const li = document.createElement('li');
        li.textContent = filename;
        //console.log(filename);
        filelist.appendChild(li);
    })
});

function handleFileSelect(event) {
    var f = event.target.files[0]; // selected file
    /!*console.log(f.name);*!/
    var output; // files is a FileList of File objects. List some properties.
    output ='<strong>'+f.name+'</strong>';
    store.dispatch({ type: 'ADD_FILE', fileName: f.name });
    console.log(store);
    var reader = new FileReader();
    reader.onload = function(event) {
        var content = event.target.result;
        //console.log("Содержимое файла: " + content);
        //store.dispatch({ type: 'ADD_TEXT', fileContent: content });
        console.log(store);
    };
    reader.onerror = function(event) {
        console.error("Файл не может быть прочитан! код " + event.target.error.code);
    };

    reader.readAsText(f,["CP1251"]);
    const list = document.getElementById('list');
    list.innerHTML = '<ul>' + output + '</ul>';
}
files.addEventListener('change', handleFileSelect, false);

*/
