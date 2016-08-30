(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['trainingform'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"container\">\r\n        <h2 class=\"page-header text-center\">Create Workout Log</h2>\r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">Add new item</div>\r\n              <div class=\"panel-body\">\r\n                <form role=\"form\" class=\"form-inline text-center training-form\" id=\"workout-form\">\r\n                  <div class=\"form-group\">\r\n                      <input type=\"number\" class=\"form-control training-time-input\" name=\"time\" placeholder=\"Time-spent (H)\" value=\""
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data}) : helper)))
    + "\">\r\n                      <span class=\"help-block\">&nbsp;</span>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <select class=\"form-control training-type-input\">\r\n                          <option value=\"Running\">Run</option>\r\n                          <option value=\"Swimming\">Swimming</option>\r\n                          <option value=\"Walking\">Walking</option>\r\n                          <option value=\"Paddling\">Paddling</option>\r\n                      </select>\r\n                      <span class=\"help-block\">&nbsp;</span>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <input type=\"date\" class=\"form-control training-date-input\" name=\"date\" value=\""
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\">\r\n                      <span class=\"help-block \">&nbsp;</span>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <button type=\"submit\" id=\"submitButton\" class=\"btn btn-success\">Add</button>\r\n                      <a href=\"#trainings\"  id=\"cancelButton\" class=\"btn btn-danger\">Cancel</a>\r\n                      <span class=\"help-block \">&nbsp;</span>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n        </div>\r\n    </div>";
},"useData":true});
})();