import { Button } from "@material-ui/core";
import Repos from "./repos";

const LABEL_BUTTON = "ver repositórios";

const UserRepos = ({ userInfo, userRepos, getRepos }) => {
  return (
    <>
      <Button
        onClick={() => getRepos(userInfo.repos_url)}
        variant="contained"
        color="primary"
        fullWidth
      >
        {LABEL_BUTTON}
      </Button>
      {!!userRepos && <Repos userRepos={userRepos} />}
    </>
  );
};

export default UserRepos;
