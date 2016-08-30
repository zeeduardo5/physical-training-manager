(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['trainings'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " <h2 class=\"page-header text-center\">List of Workout</h2>\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"panel panel-primary\">\r\n              <div class=\"panel-heading\"><span id=\"totalHours\"></span></div>\r\n                <div class=\"panel-body\">\r\n                    <table class=\"table table-striped table-bordered\">\r\n                        <thead>\r\n                          <tr>\r\n                              <th>Time Spent (h)</th>\r\n                              <th>Type</th>\r\n                              <th>Date</th>\r\n                              <th></th>\r\n                          </tr>\r\n                        </thead>\r\n                      <tbody class=\"trainings-container\"></tbody>\r\n                    </table>\r\n                  </div>\r\n            </div>\r\n                <p class=\"text-center\">\r\n                    <a href=\"#trainings/new\" id=\"addButton\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-plus\"></span> Add Workout</a>\r\n                </p>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"panel panel-primary\">\r\n              <div class=\"panel-heading\">Workout Graph</div>\r\n                <div class=\"panel-body\">\r\n                  <canvas id=\"myChart\" width=\"200\" height=\"100\" >\r\n                      Your browser does not support the HTML5 canvas tag.</canvas>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n      </div>\r\n    </div>";
},"useData":true});
})();