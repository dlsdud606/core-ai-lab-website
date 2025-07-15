'use client';
import Link from "next/link";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="text-center my-5">
      <h1 className="display-4 mb-4">AI로 당신의 업무를 혁신하세요</h1>
      <p className="lead mb-5">
        코어에이아이랩은 직장인들을 위한 생성형 AI 실무 적용 교육을 제공합니다.
      </p>

      <Row className="justify-content-center mb-5">
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>업무 자동화 과정</Card.Title>
              <Card.Text>
                반복 업무 자동화, 데이터 분석, 보고서 작성 등 AI 활용법을
                배웁니다.
              </Card.Text>
              <Link href="/courses#automation" passHref legacyBehavior>
                <Button variant="primary">자세히 보기</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>디지털 마케팅 과정</Card.Title>
              <Card.Text>
                콘텐츠 제작, 리서치, 상품 기획 등 AI 기반 마케팅 전략을
                익힙니다.
              </Card.Text>
              <Link href="/courses#marketing" passHref legacyBehavior>
                <Button variant="primary">자세히 보기</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>컨설팅/자문</Card.Title>
              <Card.Text>
                AI 도입 및 활용 전략에 대한 전문적인 컨설팅을 제공합니다.
              </Card.Text>
              <Link href="/consulting" passHref legacyBehavior>
                <Button variant="primary">자세히 보기</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="mb-5">
        <h3>주요 활용 AI 툴</h3>
        <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
          <span className="badge bg-secondary fs-5">ChatGPT</span>
          <span className="badge bg-secondary fs-5">Gemini</span>
          <span className="badge bg-secondary fs-5">Claude</span>
          <span className="badge bg-secondary fs-5">Cursor</span>
          <span className="badge bg-secondary fs-5">기타 콘텐츠 제작 AI</span>
        </div>
      </div>

      <div className="mt-5">
        <Link href="/contact" passHref legacyBehavior>
          <Button variant="success" size="lg">
            수강 문의하기
          </Button>
        </Link>
      </div>
    </Container>
  );
}