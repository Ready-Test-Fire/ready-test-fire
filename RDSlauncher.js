function launchRDS() {
  var request = new XMLHttpRequest();
  var dev_id = '360037001047353138383138';
  var access = '3877c854d0e868b16bba9510ce9951bb8f24d562';
  var data = 'params=' + 90 + '&access_token=' + access;
  var url = 'https://api.particle.io/v1/devices/' + dev_id + '/setpos/';
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(data);
}

function lockRDS() {
  var request = new XMLHttpRequest();
  var dev_id = '360037001047353138383138';
  var access = '3877c854d0e868b16bba9510ce9951bb8f24d562';
  var data = 'params=' + 0 + '&access_token=' + access;
  var url = 'https://api.particle.io/v1/devices/' + dev_id + '/setpos/';
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(data);
}
