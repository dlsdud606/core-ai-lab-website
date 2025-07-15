'use client';
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Google Apps Script Web App URL을 여기에 입력하세요
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'YOUR_GOOGLE_SCRIPT_URL_HERE';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">수강 문의</h1>
      <p className="lead text-center mb-5">
        궁금한 점이 있으시면 언제든지 문의해주세요. 친절하게 답변해 드리겠습니다.
      </p>

      {submitStatus === 'success' && (
        <Alert variant="success" className="mx-auto mb-4" style={{ maxWidth: '600px' }}>
          문의가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert variant="danger" className="mx-auto mb-4" style={{ maxWidth: '600px' }}>
          문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
        </Alert>
      )}

      <Form className="mx-auto" style={{ maxWidth: '600px' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>이름</Form.Label>
          <Form.Control 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="이름을 입력하세요" 
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일 주소</Form.Label>
          <Form.Control 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="이메일을 입력하세요" 
            required
          />
          <Form.Text className="text-muted">
            저희는 귀하의 이메일을 다른 사람과 공유하지 않습니다.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>문의 내용</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="문의 내용을 입력하세요" 
            required
          />
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          className="w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? '전송 중...' : '문의하기'}
        </Button>
      </Form>
    </Container>
  );
}
