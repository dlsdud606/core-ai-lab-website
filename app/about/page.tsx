'use client';
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">코어에이아이랩 소개</h1>
      <p className="lead text-center mb-5">
        직장인들의 업무 생산성 향상과 디지털 역량 강화를 위한 AI 교육 전문 연구소입니다.
      </p>

      <section className="mb-5">
        <h2>비전 및 목표</h2>
        <p>
          코어에이아이랩은 빠르게 변화하는 AI 시대에 직장인들이 핵심 역량을 갖추고,
          업무에 AI를 효과적으로 적용하여 생산성을 극대화할 수 있도록 돕는 것을 목표로 합니다.
          실질적인 문제 해결 능력을 키우고, 미래 업무 환경에 능동적으로 대처할 수 있는
          인재 양성에 기여하고자 합니다.
        </p>
      </section>

      <section className="mb-5">
        <h2>강사진</h2>
        <p>
          각 분야의 전문가들로 구성된 강사진은 풍부한 실무 경험과 깊이 있는 AI 지식을 바탕으로
          수강생들에게 최적화된 교육을 제공합니다. 이론뿐만 아니라 실제 업무에 바로 적용할 수 있는
          실용적인 노하우를 전수하여 수강생들의 성장을 지원합니다.
        </p>
      </section>

      <section>
        <h2>교육 철학</h2>
        <p>
          저희 연구소는 &apos;실무 적용&apos;을 최우선 가치로 삼습니다. 단순히 AI 툴 사용법을 넘어,
          각자의 업무 환경에서 AI를 어떻게 활용하여 실제적인 성과를 창출할 수 있는지에 대한
          깊이 있는 이해와 적용 능력을 키우는 데 집중합니다. 지속적인 학습과 성장을 통해
          개인의 역량을 강화하고, 기업의 경쟁력 향상에 기여하는 것을 목표로 합니다.
        </p>
      </section>
    </Container>
  );
}
