AutoForm.addInputType("tel", {
  template: "afInputTel_reactAutoformMaterialUi",
  valueConverters: {
    "stringArray": function (val) {
      if (typeof val === "string" && val.length > 0) {
        return [val];
      }
      return val;
    }
  },
  contextAdjust: function (context) {
    if (typeof context.atts.maxlength === "undefined" && typeof context.max === "number") {
      context.atts.maxlength = context.max;
    }
    context.atts.value = context.value;
    return context;
  }
});

const { TextField } = mui;
const TelFieldClass = React.createClass({
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
      <TextField
        hintText={this.props.atts.label}
        type='tel'
        defaultValue={this.props.atts.value}
        fullWidth={true}
        errorText={this.props.atts.err}
        id={this.props.atts.id}
        data-schema-key={this.props.atts.dsk}
      />
    );
  }
});

Template.afInputTel_reactAutoformMaterialUi.helpers({
  TelField(){
    return TelFieldClass;
  },
  atts() {
    let atts = new ReactAutoformUtility(this.atts);
    return atts;
  }
});

Template.afInputTel_reactAutoformMaterialUi.events({
   'keyup'(event) {
     let target = $(event.target)[0];
     let targetLength = target.value;
     $(target).inputmask("mask", {"mask": "(999) 999-9999"});
  }
})
