import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import StarIcon from '@material-ui/icons/Star'
import List from '@material-ui/core/List'
import AnnouncementIcon from '@material-ui/icons/Announcement';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import GamesIcon from '@material-ui/icons/Games';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';


class ListComponent extends React.Component{

    render(){

        return(
            <List>
                <ListItem button>
                   <StarIcon  />
                   <ListItemText primary="Favourates"/>

                </ListItem><br></br>
                <ListItem button>
                    <AnnouncementIcon />
                    <ListItemText primary="Announcement or updates"/>

                </ListItem><br></br>
                <ListItem button>
                    <FilterDramaIcon />
                    <ListItemText primary="WHEATHER UPDATES" />

                </ListItem><br></br>
                <ListItem button>
                    <GamesIcon />
                    <ListItemText primary="PLAY GAMES" />


                </ListItem><br></br>
                <ListItem button>
                    <InsertInvitationIcon />
                    <ListItemText primary="INVITE YOUR FRIENDS TO CHAT " />

                </ListItem><br></br>
                <ListItem button>
                   <LiveHelpIcon />
                   <ListItemText primary="SUGGESTIONS OR REPORT A BUG" />

                </ListItem>

            </List>
        )
    }
}



export default ListComponent;