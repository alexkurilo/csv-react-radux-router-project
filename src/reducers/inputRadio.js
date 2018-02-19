const initialState =
    [
        {
            separator: ';',
            /*number: 2,*/
            checked: "checked",

            separators: [
                {
                    parser: ',',
                    icon: '<img src="https://png.icons8.com/ios/30/000000/comma-filled.png"/>',
                    src: 'https://png.icons8.com/ios/30/000000/comma-filled.png',
                    /*checked: ''*/
                },
                {
                    parser: '.',
                    icon: '<img src="https://png.icons8.com/ios/5/000000/sphere-filled.png"/>>',
                    src: 'https://png.icons8.com/ios/30/000000/sphere-filled.png',
                    /*checked: ''*/
                },
                {
                    parser: ';',
                    icon: '<img src="https://png.icons8.com/material/30/000000/semicolon.png"/>',
                    src: 'https://png.icons8.com/material/30/000000/semicolon.png',
                    /*checked: 'checked'*/
                }
            ]
        }
    ]

export default function inputRadio (state = initialState, action) {
    if (action.type === "SELECT_SEPARATOR"){
        return[
            ...state,
            action.changeSeparator
        ];
    }
    return state;
}

