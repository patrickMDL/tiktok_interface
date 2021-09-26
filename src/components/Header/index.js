import { Container, Content, LogoContainer, LogoIcon, OptionsContainer, Avatar, Logo, Icon } from "./styles"

function Header(){
    return (
            <Container>
                <Content>
                    <LogoContainer>
                        <LogoIcon src="/images/LogoIcon.svg"></LogoIcon>
                        <Logo src="/images/logo.svg"></Logo>
                    </LogoContainer>

                    <OptionsContainer>
                        <Icon src="/images/uploadIcon.svg"></Icon>
                        <Avatar>
                            <img src="/images/avatar.JPG"/>
                        </Avatar>
                    </OptionsContainer>
                </Content>
            </Container>
        )
}

export default Header;