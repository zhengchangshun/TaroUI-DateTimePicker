import Taro, { Component } from '@tarojs/taro';
import DateTimePicker from '@/components/DateTimePicker';
import './index.scss';

export default class TestDateTimePicker extends Component {

    state = {
        current: {}
    };

    onOK = ({ current }) => {
        this.setState({
            current
        });
    };


    render() {

        return (
            <DateTimePicker onOk={this.onOK}  initValue="2016/01/01 17:22:37" wrap-class="my-class"  select-item-class="mySelector" />
        );
    }
}
