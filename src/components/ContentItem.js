import React from 'react'
import { delTask } from '../actions/index'
import { useDispatch } from 'react-redux'


export const ContentItem = ({ list, setAdd, Edith, setDel, ID }) => {
    const dispatch = useDispatch()
    return (
        <div className="box">
            <div className="item">
                <div className="head">
                    <img />
                    <div className="item_d">
                        <h4>{list.data}</h4>
                        <p>{list.date}</p>
                    </div>
                    <button className="item_p" onClick={() => {
                        setDel((e) => {
                            if (e === true) return false;
                            else return true;
                        })
                        setAdd((e) => {
                            if (e === true) return false;
                            else return true;
                        });
                        Edith(list);
                        ID(list.id);
                    }}><i class="fas fa-pencil-alt"></i></button>
                </div>
                <div className="item_btn">
                    <button className="btn_"><i class="fas fa-bell"></i></button>
                    <button className="btn_"><i class="fas fa-check"></i></button>
                </div>
            </div>
        </div >
    )
}
