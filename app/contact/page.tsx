'use client';
import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">수강 문의</h1>
      <p className="lead text-center mb-5">
        궁금한 점이 있으시면 언제든지 문의해주세요. 친절하게 답변해 드리겠습니다.
      </p>

      <Form className="mx-auto" style={{ maxWidth: '600px' }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력하세요" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일 주소</Form.Label>
          <Form.Control type="email" placeholder="이메일을 입력하세요" />
          <Form.Text className="text-muted">
            저희는 귀하의 이메일을 다른 사람과 공유하지 않습니다.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>문의 내용</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="문의 내용을 입력하세요" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          문의하기
        </Button>
      </Form>
    </Container>
  );
}
