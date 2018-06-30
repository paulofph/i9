import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MaterialIcon from 'material-icons-react';
import './../../App.css';
import {
  selectIdea
} from './../../actions/actions'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.name();
    this.handleRefreshClick = this.name();
    console.log(props);
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    // dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  name() {
    this.props.dispatch(selectIdea());
    return null;
  }

  render() {
    return (
        <Card className="full-page">
          <Paper elevation={1}>
            <div className="pflex-row gradient-header">
              <div className="pflex-column pflex-5p  pt pb pl pr">
                <Typography variant="headline" color="textSecondary">
                  <MaterialIcon icon="add_circle" color='#ececec'/>
                </Typography>
              </div>
              <div className="pflex-column pflex-90p">
                <Typography variant="headline" color="textSecondary">
                  teste1
                </Typography>
              </div>
              <div className="pflex-column pflex-5p">
              <Typography variant="headline" className="light-font">
                  t
              </Typography> 
              </div>
            </div>

          </Paper>
          <CardContent>
            <Typography variant="headline" color="textSecondary">
              teste1
            </Typography>
          </CardContent>
        </Card>
    );
  }
}

export default connect() (LandingPage);