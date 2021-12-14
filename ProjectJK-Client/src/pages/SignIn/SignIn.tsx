import {Button, Form} from "react-bootstrap";

function SignIn() {
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
                    <Button variant="dark">로그인</Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn