import styled from 'styled-components';

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

const ContactName = styled.span`
  margin-right: 10px;
  font-size: 24px;
`;

const ContactNumber = styled.span`
/* margin-left: auto; */
  /* margin-right: 10px; */
  font-size: 24px;
  margin-left: auto;
`;

const ContactDeleteButton = styled.button`
  font-size: 16px;
  margin-left: 10px;
`;

const ContactEditButton = styled.button`
  font-size: 16px;
`;

const ContactData = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const ContactActioons = styled.div`
display: flex;
margin-left: auto;
padding-left: 100px;
`
export {
  ContactItem,
  ContactName,
  ContactNumber,
  ContactDeleteButton,
  ContactData,
  ContactActioons,
  ContactEditButton,
};