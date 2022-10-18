import styled from '@emotion/styled';
export const Item = styled.li`
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border: 1px solid teal;
  width: 200px;
  list-style: none;
  background-color: yellowgreen;
`;
export const Status = styled.span`
  display: inline-block;
  padding: 0px;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: #fff;
  background-color: ${showStatus};
`;
export const Avatar = styled.img`
  display: inline-block;
  justify-content: center;
  margin-left: 20px;
`;
export const Name = styled.p`
  display: inline-block;
  margin-left: 20px;
  font-weight: 400;
  font-size: 20px;
  border: 1px solid teal;
`;

function showStatus(p) {
  return p.isOnline ? 'green' : 'red';
}
