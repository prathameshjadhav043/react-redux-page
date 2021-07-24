export const AddTask = (desc, date, time, user) => {
    return {
        type: "ADD_TASK",
        payload: {
            id: new Date().getTime().toString(),
            data: desc,
            date: date,
            time: time,
            user: user
        }
    }
}
export const delTask = (id) => {
    return {
        type: "DELETE_TASK",
        payload: {
            key: id
        }
    }
}



