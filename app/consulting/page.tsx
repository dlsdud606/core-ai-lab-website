'use client';
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Consulting() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">AI 컨설팅 및 자문</h1>
      <p className="lead text-center mb-5">
        코어에이아이랩은 기업 및 개인의 AI 도입 및 활용 전략에 대한 전문적인 컨설팅을 제공합니다.
      </p>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>서비스 개요</Card.Title>
              <Card.Text>
                AI 기술 도입을 고민하는 기업이나 개인에게 최적화된 AI 솔루션과
                활용 전략을 제시합니다. 현재 업무 프로세스 분석부터 AI 도입
                후의 기대 효과 및 로드맵 수립까지 전반적인 과정을 지원합니다.
              </Card.Text>
              <Card.Title className="mt-4">서비스 내용</Card.Title>
              <ul>
                <li>AI 도입을 위한 현재 업무 프로세스 분석 및 진단</li>
                <li>맞춤형 AI 솔루션 및 툴 추천</li>
                <li>AI 활용 전략 수립 및 로드맵 제시</li>
                <li>AI 기반 신규 서비스/제품 기획 자문</li>
                <li>AI 윤리 및 보안 관련 자문</li>
                <li>지속적인 AI 역량 강화를 위한 교육 프로그램 연계</li>
              </ul>
              <Card.Title className="mt-4">대상</Card.Title>
              <ul>
                <li>AI 도입을 고려하는 기업 및 스타트업</li>
                <li>AI 기반 신규 사업을 기획하는 개인 또는 팀</li>
                <li>기존 업무에 AI를 적용하여 효율을 높이고자 하는 조직</li>
              </ul>
              <Card.Title className="mt-4">기대 효과</Card.Title>
              <ul>
                <li>업무 효율성 및 생산성 극대화</li>
                <li>새로운 비즈니스 기회 창출</li>
                <li>데이터 기반의 의사결정 능력 향상</li>
                <li>미래 경쟁력 확보</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
