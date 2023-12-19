import calenderIcon from "@/assets/icons/calender.svg";
import mockIcon from "@/assets/icons/mockIcon.svg";
import { DeviceSize } from "@/styles/DeviceSize";
import Image from "next/image";
import styled from "styled-components";
import Tag from "../Chip/Tag";
import { getCardsResponse } from "../Column/Column";
import { formatDate } from "@/utils/FormatDate";

function Card({ cardData }: { cardData: getCardsResponse }) {
  return (
    <Wrapper>
      {cardData.imageUrl && <CardImage cardimage={cardData.imageUrl || null} />}
      <Title>{cardData.title}</Title>
      {cardData.tags[0] && (
        <Tags>
          {cardData.tags.map((tag) => {
            return (
              // <Tag bgColor="#F7DBF0" textColor="#D549B6">
              <div> {tag}</div>
              // </Tag>
            );
          })}
        </Tags>
      )}
      <Date>
        <Image src={calenderIcon} alt="calenderIcon" /> {formatDate(cardData.createdAt)}
      </Date>
      <ProfileImage src={mockIcon} alt="userProfileIcon" />
    </Wrapper>
  );
}
export default Card;

const Wrapper = styled.div`
  width: 31.4rem;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  justify-content: center;

  background-color: white;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--Grey30, #d9d9d9);

  padding: 2rem;

  cursor: pointer;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 54.4rem;
    height: 11rem;

    display: block;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 28.4rem;
    height: auto;

    display: flex;
    gap: 0.8rem;
    flex-direction: column;
  }
`;

const CardImage = styled.div<{ cardimage: string | null }>`
  width: 27.4rem;
  height: 16rem;

  background-image: url(${(props) => props.cardimage || ""});
  border-radius: 0.6rem;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 20%;
    height: 100%;
    float: left;

    margin-right: 2rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: 15rem;
    float: none;

    margin: 0;
  }
`;
const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.tablet}) {
    width: 70%;
    height: 50%;
    float: left;

    justify-self: center;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: auto;
    float: none;

    font-size: 1.4rem;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 0.6rem;

  @media (max-width: ${DeviceSize.tablet}) {
    height: 50%;

    float: left;
    margin-right: 1.6rem;
  }
  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: auto;
  }
`;

const Date = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  color: var(--Gray50);
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.tablet}) {
    width: auto;
    height: 50%;

    float: left;
  }
  @media (max-width: ${DeviceSize.mobile}) {
    width: 100%;
    height: auto;

    font-size: 1rem;
  }
`;

const ProfileImage = styled(Image)`
  width: 2.4rem;
  height: 2.4rem;

  position: absolute;
  bottom: 2rem;
  right: 2rem;

  @media (max-width: ${DeviceSize.mobile}) {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
