const initialState = [
    {
        id: 0,
        name: ''
    }
];

export default function files (state = initialState, action) {
    if (action.type === "ADD_FILE"){
        if (state.length === 10){
            state.splice(0,1);
        }
        /*console.log(state.length);
        console.log(action.fileName);*/
        //debugger;
        for (let i=0; i < state.length-1; i++){
           /* console.log(i);
            debugger;*/
            if (state[i].name === action.fileName.name){
                state.splice(i, 1);
                /*console.log(state);*/
            }
        }
        return[
            ...state,
            action.fileName
        ];

    }
    return state;
}