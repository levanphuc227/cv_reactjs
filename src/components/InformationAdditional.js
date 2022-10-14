import React, { Component } from 'react';
import '../assets/css/reset.css'
import '../assets/css/common.css'
import '../assets/css/reset.css'
export default class InformationAdditional extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="txt-bold font-s-24 txt-uppercase">học vấn</div>
                <div class="grid__row">
                    <div class="width2">2019-hiện tại</div>
                    <div class="width8">
                        <div class="txt-bold">UIT</div>
                        <div>Chuyên ngành: công nghệ thông tin</div>
                        <div>GPA:2/4</div>
                    </div>
                </div>
                <div class="txt-bold font-s-24 txt-uppercase">kĩ năng</div>
                <div class="grid__row">
                    <div class="width2"></div>
                    <div class="width8">
                        <div class="txt-bold">Nodejs</div>
                        <div>Đã có 2 dự án liên quan đến nodejs. trong dự án có sử dụng framework express có phân quyền cho
                            group
                            người dùng </div>
                        <div class="txt-bold">javascript</div>
                        <div> Hiểu và nắm được một số phần quan trọng như promise, callback, bất đồng bộ</div>
                        <div class="txt-bold">html,css</div>
                        <div> Có khả năng làm web responsive</div>

                    </div>
                </div>
                <div class="txt-bold font-s-24  txt-uppercase">dự án</div>
                <div class="txt-bold">Web bán điện thoại</div>
                <div>ở dự án này đã sữ dụng có các ngôn ngữ nodejs, reactjs.dự án này có những tính năng tiêu biểu như crud danh
                    mục
                    phẩm, sản phẩm, group users. tính năng nỗi bật mỗi sản phẩm có nhìu opition cho người dùng chọn mua sản mua.
                    những dữ liệu được lưu trữ trên mysql dữ liệu khi thực hiện các thao tác crud đảm bảo được tính toàn vẹn
                    giữa
                    liệu </div>
                <div class="txt-bold">Web bán sách</div>
                <div>ở dự án này đã sữ dụng có các ngôn ngữ nodejs, reactjs.dự án này có những tính năng tiêu biểu như crud danh
                    mục
                    phẩm, sản phẩm, group users. trang web có phần danh mục phẩm đa cấp.
                    những dữ liệu được lưu trữ trên mysql dữ liệu khi thực hiện các thao tác crud đảm bảo được tính toàn vẹn
                    giữa
                    liệu </div>
            </React.Fragment>

        );
    }
}