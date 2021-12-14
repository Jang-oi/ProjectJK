import {Button, Form} from "react-bootstrap";
import './SignUp.scss'

function SignUp() {
    return (
        <div className="main-Container">
            <div className="inner-Container">
                <div className="form-Container">
                    <Form.Floating className="mb-3">
                        <Form.Control type="text" placeholder="Id"/><label>아이디</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control type="password" placeholder="Password"/><label>비밀번호</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control type="password" placeholder="Password2"/><label>비밀번호 확인</label>
                    </Form.Floating>
                    <Button variant="dark">회원 가입</Button>
                </div>
            </div>
        </div>
    )
}

export default SignUp