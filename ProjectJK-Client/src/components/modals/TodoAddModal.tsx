import {FloatingLabel, Modal, Form, Button} from "react-bootstrap";
import {useState} from "react";

interface IProps {
    modalShow: boolean,
    changeState: any
}

function TodoAddModal(props: IProps) {

    const [todo, setTodo] = useState('');
    const [isTodo, setIsTodo] = useState(false);
    const onTodoInputHandler = (event: any) => {
        const currentTodo = event.target.value;
        setTodo(currentTodo);
        if (currentTodo !== '') setIsTodo(true);
        else setIsTodo(false);
    }

    const [endMinDate, setEndMinDate] = useState('');
    const [isDate, setIsDate] = useState(false);
    const onDateChangeHandler = (event: any) => {
        const currentDate = event.target.value;
        if (event.currentTarget.id.includes('Start')) {
            setEndMinDate(currentDate);
            setStartDate(currentDate);
            setIsDate(true)
        } else {
            setEndDate(currentDate);
        }
    }
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const onTodoAddHandler = () => {
        const params = {startDate: startDate, tendDate: endDate, todo : todo}
        console.log(params);
    }

    const onHideHandler = () => {
        setIsTodo(false);
        setIsDate(false);
        props.changeState();
    }

    return (
        <Modal
            show={props.modalShow}
            onHide={onHideHandler}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    일정 추가하기
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FloatingLabel className={"mb-3"} controlId="floatingTodo" label="할일">
                    <Form.Control type="text" placeholder="text" onChange={onTodoInputHandler}/>
                </FloatingLabel>
                <FloatingLabel className={"mb-3"} controlId="floatingStartDate" label="시작 날짜">
                    <Form.Control type="date" placeholder="date" min={"2022-01-01"} max={"2024-01-01"}
                                  onChange={onDateChangeHandler}/>
                </FloatingLabel>
                <FloatingLabel className={"mb-3"} controlId="floatingEndDate" label="끝 날짜">
                    <Form.Control type="date" placeholder="date" min={endMinDate} max={"2024-01-01"}
                                  onChange={onDateChangeHandler}/>
                </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onTodoAddHandler} disabled={!(isTodo && isDate)}>추가</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TodoAddModal;