'use client';
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Courses() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">교육 과정</h1>
      <p className="lead text-center mb-5">
        코어에이아이랩의 전문 교육 과정을 통해 AI 실무 역량을 강화하세요.
      </p>

      <section id="automation" className="mb-5">
        <h2 className="text-center mb-4">업무 자동화 과정</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>과정 개요</Card.Title>
                <Card.Text>
                  반복적이고 비효율적인 업무를 AI를 활용하여 자동화하고,
                  데이터 분석 및 보고서 작성 등 핵심 업무의 생산성을
                  극대화하는 방법을 학습합니다.
                </Card.Text>
                <Card.Title className="mt-4">주요 학습 내용</Card.Title>
                <ul>
                  <li>AI 기반 문서 요약 및 생성</li>
                  <li>스프레드시트 데이터 자동 분석 및 시각화</li>
                  <li>이메일 및 메시지 자동 응답 시스템 구축</li>
                  <li>AI를 활용한 보고서 및 제안서 작성</li>
                  <li>업무 흐름 자동화 (RPA 연동 등)</li>
                </ul>
                <Card.Title className="mt-4">주요 교육 툴</Card.Title>
                <p>ChatGPT, Gemini, Claude, Cursor 등</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="marketing" className="mb-5">
        <h2 className="text-center mb-4">디지털 마케팅 과정</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>과정 개요</Card.Title>
                <Card.Text>
                  AI를 활용하여 디지털 마케팅 전략을 수립하고 실행하는 방법을
                  학습합니다. 콘텐츠 제작부터 리서치, 상품 기획, 웹사이트 및
                  챗봇 제작까지 마케팅 전반에 AI를 적용하는 실무 역량을
                  강화합니다.
                </Card.Text>
                <Card.Title className="mt-4">주요 학습 내용</Card.Title>
                <ul>
                  <li>AI 기반 콘텐츠 (블로그, 광고 문구, 소셜 미디어) 제작</li>
                  <li>시장 및 고객 데이터 AI 기반 리서치 및 분석</li>
                  <li>AI를 활용한 상품 아이디어 발상 및 기획</li>
                  <li>AI 기반 웹사이트 기획 및 제작</li>
                  <li>고객 응대 및 마케팅 자동화를 위한 챗봇 제작</li>
                  <li>마케팅 데이터 분석 및 광고 최적화</li>
                </ul>
                <Card.Title className="mt-4">주요 교육 툴</Card.Title>
                <p>다양한 콘텐츠 제작 AI 프로그램 및 기타 마케팅 AI 툴</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}
