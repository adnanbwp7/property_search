const initialData = [
    {
        id: '0',
        address: 'Ali Town',
        post_code: '158',
        property_type: 'Flat',
        no_of_rooms: '3',
        floor_area: '70',
        selected: false,
    },
    {
        id: '1',
        address: 'Johr Towm',
        post_code: '158',
        property_type: 'Terraced House',
        no_of_rooms: '5',
        floor_area: '48',
        selected: false,
    },
    {
        id: '2',
        address: 'Modal Town',
        post_code: '158',
        property_type: 'Semi Detached',
        no_of_rooms: '5',
        floor_area: '48',
        selected: false,
    },
    {
        id: '3',
        address: 'Gulberg',
        post_code: '158',
        property_type: 'Terraced House',
        no_of_rooms: '5',
        floor_area: '48',
        selected: false,
    }
]
const Property_Reducer = (state = initialData, action) => {
    switch (action.type) {
        case "data":
            return state

        // const newState = .filter((property) => property.address === action.payload)
        case "property_type":
            if (action.payload === 'All') {
                return state;
            } else {
                const newState = state.map((data) => {
                    console.log(data.property_type, action.payload);
                    if (data.property_type === action.payload) {
                        return data
                    }
                })
                return newState
            }

        case "selected":
            return state.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        selected: !item.selected
                    };
                }
                return item;
            });
        default:
            return state
    }
};

export default Property_Reducer;
