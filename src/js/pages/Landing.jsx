import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import Page from 'pages/Page'
import Layout from 'components/Layout'


/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class Landing extends Component {

  constructor(props){
    super(props);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleUpdateAuxilaryVerb = this.handleUpdateAuxilaryVerb.bind(this);
    const auxiliaryVerbs = ['is', 'are'];
    this.state = {
      dataSource: [],
      auxiliaryVerbs,
      auxiliaryVerb: auxiliaryVerbs[0]
    };
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  handleUpdateAuxilaryVerb(selection) {
    console.log('handleUpdateAuxilaryVerb() selection', selection);
    this.setState({auxiliaryVerb: selection});
  }

  render() {

    const {auxiliaryVerb, auxiliaryVerbs} = this.state;

    return (
      <Page name="landing">
        <Layout alonzo v_bottom h_center>
          <div>
            <AutoComplete
              hintText="Noun"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
              floatingLabelText="this"
              fullWidth
            />
          </div>
          <div>
            <AutoComplete
              filter={AutoComplete.noFilter}
              openOnFocus={true}
              dataSource={auxiliaryVerbs}
              fullWidth
              onUpdateInput={this.handleUpdateAuxilaryVerb}
              searchText={auxiliaryVerb}
            />
          </div>
          <div>
            <AutoComplete
              hintText="Verb"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
              floatingLabelText="that"
              fullWidth
            />
          </div>
        </Layout>
        <Layout>
          <RaisedButton label="submit" fullWidth />
        </Layout>
      </Page>
    );
  }
}

export default Landing;
