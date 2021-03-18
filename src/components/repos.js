import { List, ListItem } from "@material-ui/core";

const Repos = ({ userRepos }) => {
  return (
    <List component="nav">
      {userRepos.map((el, id) => (
        <ListItem key={id} button>
          {el.name}
        </ListItem>
      ))}
    </List>
  );
};

export default Repos;
