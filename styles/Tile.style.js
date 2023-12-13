import styled from 'styled-components';

const TileWrapper = styled.div`
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
border-bottom: #436be5 solid; 
border-width: 5px;
display: grid;
grid-template-columns: 1fr 3fr;
margin: 20px;
`;

const DetaileWrapper = styled.div`
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
border-top: #436be5 solid; 
border-width: 5px;
margin: 20px;
padding: 10px;
`;

const Title = styled.div`
padding: 5px;
`;
const Description = styled.div`
padding: 5px;
`;
const DateTime = styled.div`
padding: 5px;
`;
const Status = styled.div`
padding: 5px;
`;
const Button = styled.button`
margin: 5px;
`;
const ImageWrapper = styled.div``;
const InfoWrapper = styled.div`
padding: 20px`;

module.exports={
    TileWrapper,ImageWrapper,InfoWrapper,DetaileWrapper,Title,Description,DateTime,Status,Button
}