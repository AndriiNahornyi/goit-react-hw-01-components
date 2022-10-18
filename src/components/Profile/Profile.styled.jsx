import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: auto;
  border: 1px solid black;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;
export const Description = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const UserAvatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
`;
export const Name = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 26px;
  margin-bottom: 10px;
`;
export const Tag = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const Location = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const Stats = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
  background-color: gray;
  /* border: 1px solid gray; */
`;
export const Section = styled.li`
  width: 100%;
  border: 1px solid black;
`;
export const Label = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 400;
`;
export const Quantity = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  padding-bottom: 10px;
`;
