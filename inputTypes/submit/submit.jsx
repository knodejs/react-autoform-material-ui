AutoForm.addInputType("submit", {
  template: "afInputSubmit_reactAutoformMaterialUi"
});
const { RaisedButton } = mui;
const Submit = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (

      <RaisedButton type="submit" label={this.props.atts.label} secondary={true} >
      </RaisedButton>
    );
  }
});

Template["afInputSubmit_reactAutoformMaterialUi"].helpers({
	Submit: function(){

		return Submit;
	},
  atts(){
    
    let atts = ReactAutoformUtility(this.atts);
    atts.label = this.atts.buttonContent == undefined || null ? 'SUBMIT' : this.atts.buttonContent.toLocaleUpperCase();
    return atts;
  }
})