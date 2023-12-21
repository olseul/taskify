import ButtonSet from "@/components/ButtonSet/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import styled from "styled-components";
import NameInput from "./NameInput";

function ColumnCreateModal() {
  return (
    <Wrapper>
      <Title>새 컬럼 생성</Title>
      <NameInput label="이름" />
      <ButtonWrapper>
        <ButtonSet type="modalSet">{"생성"}</ButtonSet>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default ColumnCreateModal;

const Wrapper = styled.div`
  width: 54rem;
  height: 27.6rem;

  padding: 3.2rem 2.8rem 2.8rem 2.8rem;

  position: relative;

  border-radius: 8px;
  background: var(--MainLight);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;
    height: 24.1rem;

    padding: 2.8rem 2rem 2.8rem 2rem;
  }
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 2.8rem;
  bottom: 2.8rem;

  @media (max-width: ${DeviceSize.mobile}) {
    right: 2rem;
  }
`;
