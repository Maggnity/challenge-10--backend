var request = require("request");

var options = { method: 'POST',
  url: 'https://test.api.latam-pass.latam.com/oauth/authorize',
  headers:
   { 'Content-Type': 'application/x-www-form-urlencoded' },
  form: { response_type: 'code', state: 'gh53h54h45', client_id: 'mywebsite.com', scope: 'member-show-name redeem-create', redirect_uri: 'https://mywebsite.com/oauth/callback' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});