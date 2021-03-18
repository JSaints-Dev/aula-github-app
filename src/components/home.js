import { Grid } from "@material-ui/core";
import UserRepos from "./use-repos";
import UserInfo from "./user-info";

const Home = ({ userInfo, getRepos, userRepos }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <UserInfo userInfo={userInfo} />
      </Grid>

      <Grid item xs={12}>
        <UserRepos
          getRepos={getRepos}
          userInfo={userInfo}
          userRepos={userRepos}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
