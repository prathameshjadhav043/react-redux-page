const initialData = {
    list: []
}

// const [list, setLits] = useState([]);

const taskReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TASK":
            const { id, data, date, time, user } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data,
                        date: date,
                        time: time,
                        user: user,
                    }
                ]
            }
        case "DELETE_TASK":
            const { key } = action.payload;
            const newlist = state.list.filter((e) => e.id !== key);
            return {
                ...state,
                list: newlist
            }


        default: return state;
    }
}

export default taskReducers;