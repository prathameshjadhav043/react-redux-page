import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ContentItem } from './ContentItem'
import { AddTask, delTask } from '../actions/index'


export const Task = () => {

    const [del, setDel] = useState(false);
    const [add, setAdd] = useState(true);
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [user, setUser] = useState("");

    const list = useSelector((state) => state.taskReducers.list);
    const dispatch = useDispatch()

    const Edith = (list) => {
        setDesc(list.data);
        setDate(list.date);
        setTime(list.time);
        setUser(list.user);
    }
    const ID = (id) => {
        dispatch(delTask(id));
    }
    const clear = () => {
        setDesc('');
        setDate('');
        setTime('');
        setUser('');
    }
    let len = list.length;
    if (len === 0) {
        len = '';
    }
    const submit = (e) => {
        e.preventDefault();
        if (!desc || !date || !time || !user) {
            alert("Fill is Empty")
        }
        else if (desc.length > 250) {
            alert("enter only less than 24 charcater");
        }
        else {
            dispatch(AddTask(desc, date, time, user));
            setDel((e) => {
                if (e === true) return false;
            });
            setDesc('');
            setDate('');
            setTime('');
            setUser('');
        }
    }
    return (
        <>
            <div className="card">
                <h3>TASKS {len}</h3>
                <div className="space"></div>
                <button className="btn" onClick={() => {
                    setAdd((e) => {
                        if (e === true) return false;
                        else return true;
                    })
                }}><i class="fas fa-plus"></i></button>
            </div>
            {!add ? (<>
                <div className="content_add">
                    <div className="task_add">
                        <form onSubmit={submit}>
                            <label>Task Description</label><br />
                            <input className="input_task" type="text" placeholder=" Enter Task" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                            <div className="date_time">
                                <div className="date">
                                    <form>
                                        <label className="d">Date</label><br />
                                        <input type="date" className="date-s" name="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
                                    </form>
                                </div>
                                <div className="time">
                                    <form>
                                        <label className="t">Time</label><br />
                                        <input type="time" className="time-s" value={time} onChange={(e) => { setTime(e.target.value) }} />
                                    </form>
                                </div>
                            </div>
                            <label>Assign User</label><br />
                            <select className="User" name="User" value={user} onChange={(e) => { setUser(e.target.value) }}>
                                <option value="select">Choose...</option>
                                <option value="user 1">User 1</option>
                                <option value="user 2">User 2</option>
                                <option value="user 3">User 3</option>
                                <option value="user 4">User 4</option>
                                <option value="user 5">User 5</option>
                                <option value="user 6">User 6</option>
                            </select>
                            <div className="btns">
                                <div className="btns-1">
                                    {del ?
                                        (<>
                                            <button className="btn-d" onClick={() => { setDel(false); clear(); }}><i class="fas fa-trash-alt"></i></button>
                                        </>) : (<></>)
                                    }
                                </div>
                                <div className="btns-2">
                                    <button className="btn-c" onClick={() => {
                                        setAdd((e) => {
                                            if (e === true) return false;
                                            else return true;
                                        })
                                    }}>Cancle</button>
                                    <button className="btn-s">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
            ) : (
                <>
                    <div className="content_added">
                        {list.map((list) => {
                            return (
                                <ContentItem
                                    list={list}
                                    key={list.id}
                                    setAdd={setAdd}
                                    Edith={Edith}
                                    setDel={setDel}
                                    ID={ID}
                                />
                            )
                        })}
                    </div>
                </>)
            }

        </>)
}


