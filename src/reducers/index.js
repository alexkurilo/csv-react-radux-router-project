import {combineReducers} from 'redux';

import files from './files';
import content from './content';
import inputRadio from './inputRadio';

export default combineReducers({
    files,
    content,
    inputRadio
})