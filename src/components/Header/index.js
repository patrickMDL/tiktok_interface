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
                            <img src="https://yt3.ggpht.com/yti/APfAmoExsGfV7YCQ4POgxRnyhpjtt1s30PzNVh8lplVc=s88-c-k-c0x00ffffff-no-rj-mogit"/>
                        </Avatar>
                    </OptionsContainer>
                </Content>
            </Container>
        )
}

export default Header;