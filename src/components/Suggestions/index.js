function Suggestions() {
  return (
    <Container>
      <IconsContainer>
        <Icon src="/public/images/facebookIcon.svg"></Icon>
        <Icon src="/public/images/pinterestIcon.svg"></Icon>
        <Icon src="/public/images/twitterIcon.svg"></Icon>
      </IconsContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Contas sugeridas</span>
        </BoxHeader>
        <ItemContainer>
          {people.map((person, index) => (
            <Item>
              <User key={index} user={person}></User>
              <Button fontsize={14} outlined></Button>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Descobrir</span>
        </BoxHeader>
        <ItemContainer>
          {itens.map((item, index) => (
            <Item>
              <RecommendCard key={index} recommend={item}></RecommendCard>
              <ArrowIcon  ></ArrowIcon>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <DownloadImage src='/public/images/appstore.png'></DownloadImage>
      <DownloadImage src='/public/images/playstore.png'></DownloadImage>
      <DownloadImage src='/public/images/amazon.png'></DownloadImage>
    </Container>
  );
}
