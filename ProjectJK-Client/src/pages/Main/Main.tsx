import './Main.scss'
import Calender from "components/common/Calender";
import {Button} from "react-bootstrap";
import TodoAddModal from "../../components/modals/TodoAddModal";
import {useState} from "react";


function Main() {

    const [isModalShow, setIsModalShow] = useState(false);
    const onTodoAddHandler = () => {
        setIsModalShow(true);
    }
    const changeState = () => {
        setIsModalShow(false);
    }

    return (
        <div className="main-Container">
            <div className="inner-Container">
                <Calender/>
                <div className={'main-Button'}>
                    <Button variant="outline-dark" onClick={onTodoAddHandler}>일정추가</Button>
                    <Button variant="outline-dark">추가완료</Button>
                    <TodoAddModal modalShow={isModalShow} changeState={changeState}/>
                </div>
            </div>
        </div>
    )
}

export default Main;