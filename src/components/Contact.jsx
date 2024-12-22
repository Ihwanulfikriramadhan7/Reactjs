import styled from "styled-components";

const ContocSection = styled.section`
padding: 40px 20px;
text-align: center;
background-color: blue;
color: white;
`;

const Title = styled.h2`
font-size: 2rem;
margin-bottom: 20px;
`;
const Button = styled.button`
padding: 10px 20px;
background-color: white;
color: blue;
border:none;
border-radius: 5px;
cursor: pointer;
&:hover{
    background-color: red;
    color: white;
}
`; 

function Contact() {
    return (
        <ContocSection>
            <Title>Contact</Title>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ipsum
                 vitae esse labore earum. Aliquid nam quia cumque consectetur temporibus
                 soluta velit. Natus quisquam expedita magnam? Dicta voluptas nostrum sint?</p>
                 <Button>Contact</Button>
        </ContocSection>
    );
}
export default Contact