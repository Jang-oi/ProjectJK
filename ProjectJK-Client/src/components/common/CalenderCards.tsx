import {Button} from "react-bootstrap";

interface IProps {
    daysValue: {
        id: number,
        day: number,
        todos: string[]
    }
}

function CalenderCards(props: IProps) {
    return (
        <td>
            <span>{props.daysValue.day}</span>
            <div className="d-grid calender-todos">
                {(props.daysValue.todos).map((todo, index) => {
                    return (
                        <Button variant="primary" size="sm" key={index} draggable="true">
                            {todo}
                        </Button>
                    )
                })}
            </div>
        </td>
    )
}

export default CalenderCards;