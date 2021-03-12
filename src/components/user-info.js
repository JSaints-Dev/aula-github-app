import styled from "styled-components";
import { Grid } from "@material-ui/core";

const Avatar = ({ urlImg }) => {
  return (
    <ContainerAvatar>
      <img src={urlImg} alt="foto" />
    </ContainerAvatar>
  );
};

const NameUser = styled.h3``;
const Location = styled.span``;
const Typography = styled.span``;

const Infos = ({ userInfo }) => {
  return (
    <ContainerInfos container>
      <Grid item xs={12}>
        <NameUser>{userInfo.name}</NameUser>
      </Grid>

      <Grid item xs={12}>
        <Location>{userInfo.location}</Location>
      </Grid>

      {!!userInfo.bio && (
        <Grid item xs={12}>
          <Typography>{userInfo.bio}</Typography>
        </Grid>
      )}

      <Grid item xs={12}>
        <Typography>{`${userInfo.followers} followers`}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>{`${userInfo.following} following`}</Typography>
      </Grid>
    </ContainerInfos>
  );
};

const UserInfo = ({ userInfo }) => {
  console.log(userInfo);
  return (
    <ContainerUserInfo>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={3}>
          <Avatar urlImg={userInfo.avatar_url} />
        </Grid>

        <Grid item xs={7}>
          <Infos userInfo={userInfo} />
        </Grid>
      </Grid>
    </ContainerUserInfo>
  );
};

const ContainerUserInfo = styled.div`
  align-items: center;
  display: flex;
  background-color: orange;
  height: 40%;
  width: 100%;
`;

const ContainerInfos = styled(Grid)``;

const ContainerAvatar = styled.div`
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }
`;

export default UserInfo;
