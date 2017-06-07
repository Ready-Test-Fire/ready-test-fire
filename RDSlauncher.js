function launchRDS() {
  var request = new XMLHttpRequest();
  var dev_id = ;
  var access = ;
  var data = 'params=' + 90 + '&access_token=' + access;
  var url = 'https://api.particle.io/v1/devices/' + dev_id + '/setpos/';
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(data);
}

function lockRDS() {
  var request = new XMLHttpRequest();
  var dev_id = process.env.DEV_ID ;
  var access = process.env.ACCESS;
  var data = 'params=' + 0 + '&access_token=' + access;
  var url = 'https://api.particle.io/v1/devices/' + dev_id + '/setpos/';
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(data);
}
