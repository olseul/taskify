import instance from "@/api/axios";
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ColumnHeader from "./ColumnHeader";
import { MOCK_DATA } from "./Columns";
import Button from "../button/Button";
import { DeviceSize } from "@/styles/DeviceSize";

interface ColumnProps {
  columnId: number;
  title: string;
}
export interface getCardsResponse {
  assignee: { id: number; nickname: string; profileImageUrl: string | null };
  columnId: number;
  createdAt: string;
  dashboardId: number;
  description: string;
  dueDate: string;
  id: number;
  imageUrl: string;
  tags: string[];
  teamId: string;
  title: string;
  updatedAt: string;
}
function Column({ columnId, title }: ColumnProps) {
  const [cards, setCards] = useState<getCardsResponse[]>([]);

  useEffect(() => {
    const getCards = async () => {
      const res = await instance.get("/cards", {
        params: {
          columnId,
        },
        headers: {
          Authorization: `Bearer ${MOCK_DATA.token}`,
        },
      });
      const cards = res.data.cards;
      setCards(() => {
        return [...cards];
      });
    };
    getCards();
  }, []);

  return (
    <Wrapper>
      <ColumnHeader title={title} columnId={columnId} count={cards.length} />
      <Container>
        <Button type="plus" size="L" disabled>
          +
        </Button>
        {cards.map((card) => {
          return <Card key={card.id} cardData={card} />;
        })}
      </Container>
    </Wrapper>
  );
}

export default Column;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-right: 0.1rem solid var(--Grayd9);

  @media (max-width: ${DeviceSize.tablet}) {
    border-bottom: 0.1rem solid var(--Grayd9);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
