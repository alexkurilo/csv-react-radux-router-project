const initialState = [
    {
        id: 0,
        text: '',
        visibleStatus: true,
        historyText: ''
    }
];

export default function content (state = initialState, action) {
    if (action.type === "READ_FILE"){
        if (state.length === 10){
            state.splice(0,1);
        }
        console.log(state);
        console.log(action.fileText.text);
        for (let i=0; i < state.length-1; i++){
            console.log(i);
            //debugger;
            if (state[i].text === action.fileText.text){
                state.splice(i, 1);
                console.log(state);
            }
        }
        return[
            ...state,
            action.fileText
        ];
    }
    return state;
}