import avt from "../assets/image/avt.jpg"
import React, { Component } from 'react';

export default class Infor extends Component {
    render() {
        return (
                <div className="infor">
                    <div className="grid__row">
                        <div className="width2">
                            <img src={avt} alt="" />
                        </div>
                        <div className="width8">
                            <div className="txt-bold font-s-32">Lê Văn Phúc</div>
                            <div className="position">Backend developer</div>
                            <div className="infor__addi">
                                <div className="grid__row">
                                    <div className="attri">Ngày sinh:</div>
                                    <div className="value">27/02/2001</div>
                                </div>
                                <div className="grid__row">
                                    <div className="attri">Giới tính:</div>
                                    <div className="value">Nam</div>
                                </div>
                                <div className="grid__row">
                                    <div className="attri">Điện thoại:</div>
                                    <div className="value">098765431</div>
                                </div>
                                <div className="grid__row">
                                    <div className="attri">Email:</div>
                                    <div className="value">admin@gmail.com</div>
                                </div>
                                <div className="grid__row">
                                    <div className="attri">địa chỉ:</div>
                                    <div className="value">quận thủ đức, hồ chín minh</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}