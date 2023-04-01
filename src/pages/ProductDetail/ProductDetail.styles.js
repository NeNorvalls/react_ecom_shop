import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 800px;
  width: 70%;
  height: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    color: #007bff;
  }
`;

export const ProductImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  margin-right: 20px;
`;

export const ProductDetails = styled.div`
  width: 50%;
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  margin-bottom: 6px;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  background-color: yellow;
  display: inline-block;
  padding: 5px 5px;

  &::before {
    content: "$";
    color: red;
    text-decoration: line-through;
    margin-right: 5px;
  }
`;

export const ProductDiscountedPrice = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  display: inline-block;
  padding: 5px 10px;
`;

export const ProductDiscountedLabel = styled.span`
  background-color: yellow;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  margin-right: 10px;
`;

export const ProductRating = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

export const Review = styled.li`
  margin-bottom: 10px;
`;

export const ReviewUser = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  svg {
    color: gold;
    margin-right: 5px;
  }
`;

export const ReviewDescription = styled.p`
  margin-bottom: 5px;
`;
