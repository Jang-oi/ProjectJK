import {Table} from "react-bootstrap";
import CalenderCards from "./CalenderCards";

function Calender() {

    // TODO [[{},{}...],[{},{}...],[{},{}...] ... ]  첫째주 ~ 여섯째주 까지 담은 배열
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const firstWeek = [{id: 1, day: 28, todos: ['멍때리기', '공부하기']},
        {id: 2, day: 29, todos: ['멍때리기', '공부하기']}, {id: 3, day: 30, todos: ['멍때리기', '공부하기']},
        {id: 4, day: 1, todos: []}, {id: 5, day: 2, todos: ['멍때리기']},
        {id: 6, day: 3, todos: ['멍때리기', '공부하기']}, {id: 7, day: 4, todos: ['멍때리기', '공부하기']}];
    const secondWeek = [{id: 1, day: 5, todos: ['멍때리기']},
        {id: 2, day: 6, todos: ['멍때리기', '공부하기']}, {id: 3, day: 7, todos: ['멍때리기', '공부하기']},
        {id: 4, day: 8, todos: []}, {id: 5, day: 9, todos: ['멍때리기', '공부하기']},
        {id: 6, day: 10, todos: ['멍때리기', '공부하기']}, {id: 7, day: 11, todos: ['멍때리기', '공부하기']}];
    const day = [firstWeek, secondWeek];

    return (
        <div className={'calender-Container'}>
            <div className={'calender-Header'}>
                <button className={'calender-arrowBtn'}>◀</button>
                <span>2021. 12</span>
                <button className={'calender-arrowBtn'}>▶</button>
            </div>
            <div className={'calender-Main'}>
                <Table responsive>
                    <thead>
                    <tr>
                        {days.map((value, index) => {
                            return (<th key={index}>{value}</th>)
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {day.map((value, index) => {
                        return (
                            <tr key={value[index].id}>
                                <CalenderCards daysValue={value[0]}/>
                                <CalenderCards daysValue={value[1]}/>
                                <CalenderCards daysValue={value[2]}/>
                                <CalenderCards daysValue={value[3]}/>
                                <CalenderCards daysValue={value[4]}/>
                                <CalenderCards daysValue={value[5]}/>
                                <CalenderCards daysValue={value[6]}/>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Calender