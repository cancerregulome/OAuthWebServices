var Controller = require('./controller');

module.exports = Backbone.Router.extend({
    routes:{
        '':'home',
        'grid':'grid',
        'graph':'graph',
        'pwpv':'pwpv',
        'testwindow':'testwindow',
        'twoD/:f1/:f2':'twod',
        'oncovis':'oncovis',
        'oncovis/p:p1':'oncovis',
        'seqpeek':'seqpeek',
        ':analysis_id/:model_id/*remainder':'route_analysis'  //    url -> rf_ace/dataset_1/
    },

  graph: function() {
      Controller.graph.view();
  },

  testwindow: function() {
      Controller.testwindow.view();
  },

  grid: function() {
      Controller.grid.view();
  },

  pwpv: function() {
      Controller.pwpv.view();
  },

  twod: function() {
      Controller.twod.view();
  },

  route_analysis : function(analysis_id,model_id,remainder) {
      Controller.route_analysis(analysis_id,model_id,remainder);
  },

    oncovis: function() {
        Controller.oncovis.view();
    },

    seqpeek: function(gene_label) {
        Controller.seqpeek.view();
    },

  home: function() {
      Controller.home.view();
  }
});
