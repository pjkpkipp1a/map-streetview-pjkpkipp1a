(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init()",
 "propagateClick": false,
 "mobileMipmappingEnabled": false,
 "children": [
  "this.MainViewer",
  "this.Container_D83C8239_F8DE_01A1_41D3_401F7AD1E733",
  "this.IconButton_DC8D8382_F8CA_0763_41EC_64D2A891BD4E",
  "this.Image_CBFC9856_F846_01E3_41EB_804DF5C5CBA6",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "defaultVRPointer": "laser",
 "desktopMipmappingEnabled": false,
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } }
 },
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "downloadEnabled": false,
 "minHeight": 20,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 20,
 "class": "Player",
 "horizontalAlign": "left",
 "borderRadius": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "definitions": [{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_D6337F82_FDFA_743C_41D4_B9D14FEA7804",
 "levels": [
  {
   "url": "media/zoomImage_D7F32388_FDFE_0C4C_41B4_8CD8EEC9B5A5_0_0.jpg",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_D7F32388_FDFE_0C4C_41B4_8CD8EEC9B5A5_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_D7F32388_FDFE_0C4C_41B4_8CD8EEC9B5A5_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_D7F32388_FDFE_0C4C_41B4_8CD8EEC9B5A5_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.58,
  "pitch": 0
 },
 "id": "camera_D7F9FBD1_FDEE_13DC_41CC_C5767810DE2A",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.86,
  "pitch": 0
 },
 "id": "camera_D7C14C0F_FDEE_1443_41ED_5EA2F9652826",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8",
 "label": "DJI_0079",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -7.75,
   "panorama": "this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD",
   "distance": 1,
   "backwardYaw": -160.96
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -178.55,
   "panorama": "this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41",
   "distance": 1,
   "backwardYaw": 2.68
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_DC192400_FD2A_143C_41D7_EA700162DD9A",
  "this.overlay_D9387C91_FD2B_F45F_41D4_5B47DD57AC27"
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C",
 "label": "DJI_0061",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_D35F43B6_F85E_06A3_41C0_541DB69753A7",
  "this.overlay_C9497236_F84A_01A3_41E0_64279BA064A9"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446",
 "label": "DJI_0094",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -171.44,
   "panorama": "this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91",
   "distance": 1,
   "backwardYaw": -0.48
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -1.5,
   "panorama": "this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9",
   "distance": 1,
   "backwardYaw": -176
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E529B687_FD7A_7443_41E5_DC31F4F9122B",
  "this.overlay_E5AD9234_FD7A_0C45_41C8_3D068EBD2444"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "id": "FadeInEffect_D6498F82_FDFA_743C_41EC_13E1FCDF8A59",
 "duration": 500,
 "easing": "cubic_in"
},
{
 "class": "ImageResource",
 "id": "ImageResource_DC25C5B2_FD16_145D_41E2_0C08C857AFFD",
 "levels": [
  {
   "url": "media/popup_E490AE6F_FD6E_14C3_41DB_072101F62C94_0_0.jpg",
   "width": 3025,
   "class": "ImageResourceLevel",
   "height": 4339
  },
  {
   "url": "media/popup_E490AE6F_FD6E_14C3_41DB_072101F62C94_0_1.jpg",
   "width": 2855,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_E490AE6F_FD6E_14C3_41DB_072101F62C94_0_2.jpg",
   "width": 1427,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_E490AE6F_FD6E_14C3_41DB_072101F62C94_0_3.jpg",
   "width": 713,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_E490AE6F_FD6E_14C3_41DB_072101F62C94_0_4.jpg",
   "width": 356,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5",
 "label": "DJI_0062",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D08EA411_F85E_017E_41E0_BBC8757F163E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_D21A7D3A_F85E_03A3_41D7_949E46820388",
  "this.overlay_D2BF2301_F85A_075E_41E1_AC733CE76983"
 ]
},
{
 "class": "PlayList",
 "id": "playList_CC2939EB_FDEE_1FC3_41E9_C8A48C7D32DB",
 "items": [
  {
   "begin": "this.uidCC16B9FB_FDEE_1FCC_41EE_6BDAA36EEA9FMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "class": "MapPlayListItem",
   "player": "this.uidCC16B9FB_FDEE_1FCC_41EE_6BDAA36EEA9FMapPlayer"
  }
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E0CEB598_F846_036E_41A4_501C97854C8E",
 "label": "DJI_0621",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 1481.38,
   "class": "PanoramaMapLocation",
   "angle": 93.18,
   "y": 667.03
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 178.94,
   "panorama": "this.panorama_E33D4901_F846_0361_41EB_B13248C71FFA",
   "distance": 1,
   "backwardYaw": -175.69
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -3.73,
   "panorama": "this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80",
   "distance": 1,
   "backwardYaw": -179.26
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E22827CB_F846_0EE1_41C6_F471FE021232",
  "this.overlay_E2CBBC42_F846_01E2_41E8_C392563756A1"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.72,
  "pitch": 0
 },
 "id": "camera_D7E92BF0_FDEE_13DD_41EB_697765ACDFC0",
 "automaticZoomSpeed": 10
},
{
 "class": "SlideInEffect",
 "id": "effect_EDB1AC01_FD1E_143F_41E0_CF7D100094DC",
 "duration": 400,
 "easing": "quad_in",
 "from": "left"
},
{
 "class": "SlideInEffect",
 "id": "effect_1622AA86_310A_00F4_41A8_DBA0885BA83A",
 "duration": 400,
 "easing": "quad_in",
 "from": "left"
},
{
 "class": "ImageResource",
 "id": "ImageResource_D6340F82_FDFA_743C_41DB_990D3E76034C",
 "levels": [
  {
   "url": "media/zoomImage_D70DBA96_FDFE_1C45_41E3_4453421A2BDC_0_0.jpg",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_D70DBA96_FDFE_1C45_41E3_4453421A2BDC_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_D70DBA96_FDFE_1C45_41E3_4453421A2BDC_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_D70DBA96_FDFE_1C45_41E3_4453421A2BDC_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829",
 "label": "DJI_0630",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 4178.23,
   "class": "PanoramaMapLocation",
   "angle": 6.25,
   "y": 1339.6
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -98.72,
   "panorama": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597",
   "distance": 1,
   "backwardYaw": -3.73
  },
  {
   "panorama": "this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 175.91,
   "panorama": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E",
   "distance": 1,
   "backwardYaw": 175.58
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 90.42,
   "panorama": "this.panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD",
   "distance": 1,
   "backwardYaw": -98.22
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E6E47A19_F83A_016E_41E1_67301B85CC86",
  "this.overlay_E7EB74EC_F83A_02A6_41E1_5B31BF53810B",
  "this.overlay_D943E271_F83A_01A1_41E2_6A9AC7BADEB7",
  "this.overlay_E7B24F9E_F83D_FF62_41E5_B9342B818F2B"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_D648BF82_FDFA_743C_41A1_7F58460034A1",
 "levels": [
  {
   "url": "media/zoomImage_D70D9088_FDFE_0C4C_41A7_F9F5CD1F2E38_0_0.png",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_D70D9088_FDFE_0C4C_41A7_F9F5CD1F2E38_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_D70D9088_FDFE_0C4C_41A7_F9F5CD1F2E38_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_D70D9088_FDFE_0C4C_41A7_F9F5CD1F2E38_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_EF234E30_FD6A_145C_41D6_E617471C7E90",
 "label": "DJI_0097",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.7,
   "panorama": "this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8",
   "distance": 1,
   "backwardYaw": -176.47
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -172.72,
   "panorama": "this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741",
   "distance": 1,
   "backwardYaw": -5.93
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E62FCFAF_FD6E_7443_41AC_BB4B678CEDC4",
  "this.overlay_E312DBB1_FD6A_3C5C_41AF_A0FDB2D6B2EB"
 ]
},
{
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E0CEB598_F846_036E_41A4_501C97854C8E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "SlideOutEffect",
 "id": "effect_2A237CC9_317A_007D_4176_36E090D2269C",
 "duration": 400,
 "easing": "quad_in",
 "to": "left"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418",
 "label": "DJI_0068",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -176.52,
   "panorama": "this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143",
   "distance": 1,
   "backwardYaw": 1.64
  },
  {
   "panorama": "this.panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_D4CDF539_F84A_03A1_41D8_41067836AE7C",
  "this.overlay_CB763BB3_F87A_06A1_41E0_120ECCA126C2",
  "this.overlay_C98DCD29_F87A_03A1_41E9_FD8151F7536A"
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE",
 "label": "DJI_0084",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 177.39,
   "panorama": "this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783",
   "distance": 1,
   "backwardYaw": 0.63
  },
  {
   "panorama": "this.panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_DBEA5A08_FD2A_3C4C_41EE_A8C0B893E45F",
  "this.overlay_D5906E02_FD2A_343C_41DB_A5DAED4F7866"
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E3399290_FD3A_0C5C_41E2_B903795686D7",
 "label": "DJI_0082",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 1.3,
   "panorama": "this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783",
   "distance": 1,
   "backwardYaw": -171.22
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -145.95,
   "panorama": "this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9",
   "distance": 1,
   "backwardYaw": -6.4
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_D96EF79C_FD2A_1444_41E9_5D128F2FB42F",
  "this.overlay_DA0EDD6D_FD2A_14C4_41DD_CDF07B4C9F79"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_camera",
 "automaticZoomSpeed": 10
},
{
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "bodyPaddingRight": 5,
 "id": "window_D8E66787_F8CA_0F61_41EE_1EA702DAF7FC",
 "headerPaddingRight": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "width": 400,
 "headerBorderColor": "#000000",
 "paddingBottom": 0,
 "closeButtonIconHeight": 12,
 "headerPaddingLeft": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBackgroundColorRatios": [],
 "modal": true,
 "veilOpacity": 0.4,
 "closeButtonIconWidth": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "height": 600,
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titleFontColor": "#000000",
 "verticalAlign": "middle",
 "bodyPaddingBottom": 5,
 "minWidth": 20,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundOpacity": 1,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "title": "Ruang K3",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonIconLineWidth": 2,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "titlePaddingBottom": 5,
 "overflow": "scroll",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "shadow": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_D8F82787_F8CA_0F61_41D8_6B4E2DD4B97A"
 ],
 "footerHeight": 5,
 "closeButtonBackgroundColor": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "shadowBlurRadius": 6,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColorDirection": "vertical",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window40551"
 }
},
{
 "class": "SlideInEffect",
 "id": "effect_18BBC752_310E_006C_41B5_0D8B802FB057",
 "duration": 400,
 "easing": "quad_in",
 "from": "left"
},
{
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "bodyPaddingRight": 5,
 "id": "window_D9743F4C_F8CA_1FE6_41EC_B57B67206799",
 "headerPaddingRight": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "width": 400,
 "headerBorderColor": "#000000",
 "paddingBottom": 0,
 "closeButtonIconHeight": 12,
 "headerPaddingLeft": 10,
 "footerBackgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "footerBackgroundColor": [],
 "closeButtonBackgroundColorRatios": [],
 "modal": true,
 "veilOpacity": 0.4,
 "bodyBorderColor": "#000000",
 "bodyBackgroundOpacity": 1,
 "closeButtonIconWidth": 12,
 "closeButtonPaddingRight": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [],
 "footerBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "height": 600,
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titleFontColor": "#000000",
 "verticalAlign": "middle",
 "bodyPaddingBottom": 5,
 "minWidth": 20,
 "bodyBackgroundColor": [],
 "horizontalAlign": "center",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundOpacity": 1,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "title": "R WaKapro",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonIconLineWidth": 2,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "bodyBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "titlePaddingBottom": 5,
 "overflow": "scroll",
 "closeButtonPaddingLeft": 0,
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColorDirection": "vertical",
 "shadow": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "footerBackgroundOpacity": 1,
 "children": [
  "this.htmlText_D974CF4C_F8CA_1FE6_41B5_91ED4CE92060"
 ],
 "footerHeight": 5,
 "closeButtonBackgroundColor": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderSize": 0,
 "closeButtonBorderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "shadowBlurRadius": 6,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPaddingBottom": 0,
 "titleTextDecoration": "none",
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window40551"
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.48,
  "pitch": 0
 },
 "id": "camera_D65B2C5D_FDEE_14C7_41EE_0DC277B24E12",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.33,
  "pitch": 0
 },
 "id": "camera_CF0ADAE6_FDEE_1DC5_41E1_A0F3D8D0E8B1",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "id": "FadeInEffect_D6347F82_FDFA_743C_41E9_02CE7FC545B4",
 "duration": 500,
 "easing": "cubic_in"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.61,
  "pitch": 0
 },
 "id": "camera_D647FC6D_FDEE_14C7_41C6_44C7CAE9AE88",
 "automaticZoomSpeed": 10
},
{
 "class": "SlideInEffect",
 "id": "effect_F2D95D32_FD1A_145D_41DF_3B15A8774774",
 "duration": 400,
 "easing": "quad_in",
 "from": "left"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4",
 "label": "DJI_0091",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -6.14,
   "panorama": "this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B",
   "distance": 1,
   "backwardYaw": -170.29
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_EB47EAD9_FD7A_7DCF_41E0_27ADC486BC0C",
  "this.overlay_EB8AFFB7_FD79_F443_41A8_9074704ED00E"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.32,
  "pitch": 0
 },
 "id": "camera_CF9D1B15_FDEE_1C44_41E0_1ADF906ABA59",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 34.05,
  "pitch": 0
 },
 "id": "camera_D7AE3C2E_FDEE_1445_41E4_D3DCE60E9398",
 "automaticZoomSpeed": 10
},
{
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "bodyPaddingRight": 5,
 "id": "window_D9681AE8_F8CE_06AF_41DA_9D5E3FA15C29",
 "headerPaddingRight": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "width": 400,
 "headerBorderColor": "#000000",
 "paddingBottom": 0,
 "closeButtonIconHeight": 12,
 "headerPaddingLeft": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBackgroundColorRatios": [],
 "modal": true,
 "veilOpacity": 0.4,
 "closeButtonIconWidth": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "height": 600,
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titleFontColor": "#000000",
 "verticalAlign": "middle",
 "bodyPaddingBottom": 5,
 "minWidth": 20,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundOpacity": 1,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "title": "Musholla",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonIconLineWidth": 2,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "titlePaddingBottom": 5,
 "overflow": "scroll",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "shadow": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_D9685AE8_F8CE_06AF_41DC_073AB348BB0A"
 ],
 "footerHeight": 5,
 "closeButtonBackgroundColor": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "shadowBlurRadius": 6,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColorDirection": "vertical",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window40551"
 }
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB",
 "label": "DJI_0090",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 160.6,
   "panorama": "this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD",
   "distance": 1,
   "backwardYaw": 0.34
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E9DA229C_FD7A_0C44_41B4_321C1D441B46",
  "this.overlay_EB6F31DF_FD7A_0FC3_41C3_83F9B917F11F"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.1,
  "pitch": 0
 },
 "id": "camera_D706ABD1_FDEE_13DC_41DD_828FB402982A",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.53,
  "pitch": 0
 },
 "id": "camera_CE512B34_FDEE_1C45_41E6_5929FD7CD76B",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.33,
  "pitch": 0
 },
 "id": "camera_CCAD9A59_FDEE_1CCF_41C5_539424C0A278",
 "automaticZoomSpeed": 10
},
{
 "label": "videoplayback",
 "scaleMode": "fit_inside",
 "width": 360,
 "class": "Video",
 "thumbnailUrl": "media/video_C833CD10_F85A_037F_41D0_B7ECDC9E2312_t.jpg",
 "loop": false,
 "id": "video_C833CD10_F85A_037F_41D0_B7ECDC9E2312",
 "height": 640,
 "video": {
  "width": 360,
  "class": "VideoResource",
  "height": 640,
  "mp4Url": "media/video_C833CD10_F85A_037F_41D0_B7ECDC9E2312.mp4"
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.45,
  "pitch": 0
 },
 "id": "camera_D79ABC3E_FDEE_1445_41EB_079F505A25EA",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_D648DF82_FDFA_743C_41D9_C5C069DDE7ED",
 "levels": [
  {
   "url": "media/zoomImage_D7015BF4_FDFE_13C5_41EE_B1CF8FD5DA0B_0_0.png",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_D7015BF4_FDFE_13C5_41EE_B1CF8FD5DA0B_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_D7015BF4_FDFE_13C5_41EE_B1CF8FD5DA0B_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_D7015BF4_FDFE_13C5_41EE_B1CF8FD5DA0B_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.84,
  "pitch": 0
 },
 "id": "camera_D7D6ABFF_FDEE_13C3_41DF_C078F4C9F0F6",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.31,
  "pitch": 0
 },
 "id": "camera_CF41FAB7_FDEE_1C44_41DD_34E12891CAEC",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_camera",
 "automaticZoomSpeed": 10
},
{
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "bodyPaddingRight": 5,
 "id": "window_D93AEA2D_F8CA_01A6_41C1_BA5E174AAA2A",
 "headerPaddingRight": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "width": 400,
 "headerBorderColor": "#000000",
 "paddingBottom": 0,
 "closeButtonIconHeight": 12,
 "headerPaddingLeft": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBackgroundColorRatios": [],
 "modal": true,
 "veilOpacity": 0.4,
 "closeButtonIconWidth": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "height": 600,
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titleFontColor": "#000000",
 "verticalAlign": "middle",
 "bodyPaddingBottom": 5,
 "minWidth": 20,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundOpacity": 1,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "title": "Pantry",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonIconLineWidth": 2,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "titlePaddingBottom": 5,
 "overflow": "scroll",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "shadow": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_D9268A2D_F8CA_01A6_418B_46773F1D41B7"
 ],
 "footerHeight": 5,
 "closeButtonBackgroundColor": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "shadowBlurRadius": 6,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColorDirection": "vertical",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window40551"
 }
},
{
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "bodyPaddingRight": 5,
 "id": "window_D8FCCE7D_F8CE_01A6_41DE_92E309BE4ACE",
 "headerPaddingRight": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "width": 400,
 "headerBorderColor": "#000000",
 "paddingBottom": 0,
 "closeButtonIconHeight": 12,
 "headerPaddingLeft": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBackgroundColorRatios": [],
 "modal": true,
 "veilOpacity": 0.4,
 "closeButtonIconWidth": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "height": 600,
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titleFontColor": "#000000",
 "verticalAlign": "middle",
 "bodyPaddingBottom": 5,
 "minWidth": 20,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundOpacity": 1,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "title": "R Meeting",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonIconLineWidth": 2,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "titlePaddingBottom": 5,
 "overflow": "scroll",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "shadow": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_D8F8DE7D_F8CE_01A6_41D3_1ACD636C1FE1"
 ],
 "footerHeight": 5,
 "closeButtonBackgroundColor": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "shadowBlurRadius": 6,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColorDirection": "vertical",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window40551"
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -102.19,
  "pitch": 0
 },
 "id": "camera_CE373B34_FDEE_1C45_41BC_0391806D2E97",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "id": "FadeInEffect_D6335F82_FDFA_743C_41CC_00D51ED57F0E",
 "duration": 500,
 "easing": "cubic_in"
},
{
 "class": "SlideInEffect",
 "id": "effect_19F0E9E8_310A_003B_41C2_00E6E4570ABD",
 "duration": 400,
 "easing": "quad_in",
 "from": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -151.28,
  "pitch": 0
 },
 "id": "camera_CCCCCA39_FDEE_1C4F_41E5_A752088EBAFF",
 "automaticZoomSpeed": 10
},
{
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "bodyPaddingRight": 5,
 "id": "window_DA4F4546_F8CE_03E3_41D4_D803363C47A3",
 "headerPaddingRight": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "width": 400,
 "headerBorderColor": "#000000",
 "paddingBottom": 0,
 "closeButtonIconHeight": 12,
 "headerPaddingLeft": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBackgroundColorRatios": [],
 "modal": true,
 "veilOpacity": 0.4,
 "closeButtonIconWidth": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "height": 600,
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titleFontColor": "#000000",
 "verticalAlign": "middle",
 "bodyPaddingBottom": 5,
 "minWidth": 20,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundOpacity": 1,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "title": "Ruang Medis",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonIconLineWidth": 2,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "titlePaddingBottom": 5,
 "overflow": "scroll",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "shadow": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_DA4F3544_F8CE_03E7_41CC_3631A57FA65E"
 ],
 "footerHeight": 5,
 "closeButtonBackgroundColor": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "shadowBlurRadius": 6,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColorDirection": "vertical",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window40551"
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.33,
  "pitch": 0
 },
 "id": "camera_CFBFDB05_FDEE_1C47_41EF_1AC125649F1D",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_D64A6F82_FDFA_743C_41E8_60EAE178AD5D",
 "levels": [
  {
   "url": "media/zoomImage_CCBCF36A_FDFE_0CCD_41E6_DB2F8180019F_0_0.jpg",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_CCBCF36A_FDFE_0CCD_41E6_DB2F8180019F_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_CCBCF36A_FDFE_0CCD_41E6_DB2F8180019F_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_CCBCF36A_FDFE_0CCD_41E6_DB2F8180019F_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "rotationY": 0,
 "hfov": 4.38,
 "autoplay": true,
 "popupDistance": 100,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "rotationX": 0,
 "rotationZ": 0,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "id": "popup_CBC653AC_F85A_06A7_41E9_425465537D63",
 "hideEasing": "cubic_out",
 "pitch": -9.88,
 "popupMaxWidth": "95%",
 "loop": false,
 "yaw": -43.19,
 "showEasing": "cubic_in",
 "video": {
  "width": 360,
  "class": "VideoResource",
  "height": 640,
  "mp4Url": "media/video_C833CD10_F85A_037F_41D0_B7ECDC9E2312.mp4"
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.37,
  "pitch": 0
 },
 "id": "camera_D6529C5D_FDEE_14C7_41EC_8F90B378FFFE",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC",
 "label": "DJI_0063",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -10.89,
   "panorama": "this.panorama_D08EA411_F85E_017E_41E0_BBC8757F163E",
   "distance": 1,
   "backwardYaw": -168.59
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_D2BD8A38_F85A_01AE_41C6_C429DC095326",
  "this.overlay_D59BFE60_F85A_01DE_41A5_795AD89DFD91"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.78,
  "pitch": 0
 },
 "id": "camera_D6321C7D_FDEE_14C7_41ED_DFF686D88770",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.05,
  "pitch": 0
 },
 "id": "camera_CF7A7A88_FDEE_1C4C_41E3_E77E9F9B5643",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.66,
  "pitch": 0
 },
 "id": "camera_CF505AA7_FDEE_1C43_41CC_69F3561AF052",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "id": "FadeOutEffect_D64ABF82_FDFA_743C_41E9_D223E5A0B06A",
 "duration": 500,
 "easing": "cubic_out"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.53,
  "pitch": 0
 },
 "id": "camera_CE736B24_FDEE_1C45_41C9_877BE620EA26",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143",
 "label": "DJI_0067",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 1.64,
   "panorama": "this.panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418",
   "distance": 1,
   "backwardYaw": -176.52
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 153.44,
   "panorama": "this.panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600",
   "distance": 1,
   "backwardYaw": -0.63
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_D72621AA_F84A_02A2_41E6_4A56EB333545",
  "this.overlay_D7408C71_F84A_01BE_41E1_43E2788F8AA1",
  "this.overlay_C9F7BAF4_F85E_06A6_41E9_CB427F516052",
  "this.popup_CBC653AC_F85A_06A7_41E9_425465537D63"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.71,
  "pitch": 0
 },
 "id": "camera_CE275B44_FDEE_1CC4_41E4_259ACD256661",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51",
 "label": "DJI_0626",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 3344.59,
   "class": "PanoramaMapLocation",
   "angle": 176.52,
   "y": 2225.4
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 163,
   "panorama": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597",
   "distance": 1,
   "backwardYaw": 77.81
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -82.95,
   "panorama": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E",
   "distance": 1,
   "backwardYaw": 98.29
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E40E01D6_F84A_02E3_41A0_82636B824D3A",
  "this.overlay_E617AB7A_F84A_07A3_41DD_6FF28B8A336D"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.25,
  "pitch": 0
 },
 "id": "camera_D702CBD1_FDEE_13DC_41BF_31DEA802B333",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.91,
  "pitch": 0
 },
 "id": "camera_D67BBC4E_FDEE_14C4_41CD_6637DD4C009E",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783",
 "label": "DJI_0083",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 0.63,
   "panorama": "this.panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE",
   "distance": 1,
   "backwardYaw": 177.39
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -171.22,
   "panorama": "this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7",
   "distance": 1,
   "backwardYaw": 1.3
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_D8FCE06B_FD2A_0CCC_41D0_335B975F4FC0",
  "this.overlay_D574C29F_FD2A_0C43_41CB_319F495C5635"
 ]
},
{
 "class": "SlideOutEffect",
 "id": "effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB",
 "duration": 400,
 "easing": "quad_in",
 "to": "left"
},
{
 "class": "FadeInEffect",
 "id": "FadeInEffect_D6373F82_FDFA_743C_41E2_A2803042A821",
 "duration": 500,
 "easing": "cubic_in"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.56,
  "pitch": 0
 },
 "id": "camera_CFFA0AE6_FDEE_1DC5_41CA_D4FF69201154",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.8,
  "pitch": 0
 },
 "id": "camera_D6662C5D_FDEE_14C7_41E6_7F90600BD47D",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140",
 "label": "DJI_0099",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 175.47,
   "panorama": "this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8",
   "distance": 1,
   "backwardYaw": -3.2
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E142959B_FD6A_1443_41C8_E6B4548E98E7",
  "this.overlay_E2C07009_FD16_0C4C_41E9_04F98BE4703E"
 ]
},
{
 "class": "SlideInEffect",
 "id": "effect_4983BDE0_570B_E541_41B3_32D6394D0ACC",
 "duration": 400,
 "easing": "quad_in",
 "from": "left"
},
{
 "class": "FadeInEffect",
 "id": "FadeInEffect_D6378F82_FDFA_743C_41B8_24BE91EE0F6A",
 "duration": 500,
 "easing": "cubic_in"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.36,
  "pitch": 0
 },
 "id": "camera_D7CDDC0F_FDEE_1443_41CC_6EE831C41CD2",
 "automaticZoomSpeed": 10
},
{
 "class": "SlideInEffect",
 "id": "effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E",
 "duration": 400,
 "easing": "quad_in",
 "from": "left"
},
{
 "class": "ImageResource",
 "id": "ImageResource_D6379F82_FDFA_743C_41D6_6DC4A9EB32EC",
 "levels": [
  {
   "url": "media/zoomImage_D703B0F6_FDFE_0DC5_41E2_4175A49A0871_0_0.jpg",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_D703B0F6_FDFE_0DC5_41E2_4175A49A0871_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_D703B0F6_FDFE_0DC5_41E2_4175A49A0871_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_D703B0F6_FDFE_0DC5_41E2_4175A49A0871_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.17,
  "pitch": 0
 },
 "id": "camera_CFD9AAF5_FDEE_1DC7_41B7_031196A74F60",
 "automaticZoomSpeed": 10
},
{
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "bodyPaddingRight": 5,
 "id": "window_D970DDAD_F8CA_02A6_41A5_4D7570F486D3",
 "headerPaddingRight": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "width": 400,
 "headerBorderColor": "#000000",
 "paddingBottom": 0,
 "closeButtonIconHeight": 12,
 "headerPaddingLeft": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBackgroundColorRatios": [],
 "modal": true,
 "veilOpacity": 0.4,
 "closeButtonIconWidth": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "height": 600,
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titleFontColor": "#000000",
 "verticalAlign": "middle",
 "bodyPaddingBottom": 5,
 "minWidth": 20,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundOpacity": 1,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "title": "Toilet",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonIconLineWidth": 2,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "titlePaddingBottom": 5,
 "overflow": "scroll",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "shadow": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_D9722DAE_F8CA_02A2_41C6_76658ECC2D85"
 ],
 "footerHeight": 5,
 "closeButtonBackgroundColor": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "shadowBlurRadius": 6,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColorDirection": "vertical",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window45028"
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91",
 "label": "DJI_0093",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -163.71,
   "panorama": "this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B",
   "distance": 1,
   "backwardYaw": -4.67
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.48,
   "panorama": "this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446",
   "distance": 1,
   "backwardYaw": -171.44
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E53D4BB2_FD7E_3C5D_41E2_BDC281C2D7F3",
  "this.overlay_EAAAAC1C_FD7E_7444_41E7_5AF554F06BF6"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.42,
  "pitch": 0
 },
 "id": "camera_CC99BA68_FDEE_1CCD_41C1_465AA2696010",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.28,
  "pitch": 0
 },
 "id": "camera_CE60AB24_FDEE_1C45_41D7_18490568375F",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "id": "FadeInEffect_D648AF82_FDFA_743C_41E4_8379F7D70256",
 "duration": 500,
 "easing": "cubic_in"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.37,
  "pitch": 0
 },
 "id": "camera_CC87CA88_FDEE_1C4C_41DF_F2F9D2E62EBC",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.83,
  "pitch": 0
 },
 "id": "camera_CCB8FA49_FDEE_1CCF_41E1_020F2BBB5C07",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E33D4901_F846_0361_41EB_B13248C71FFA_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_camera",
 "automaticZoomSpeed": 10
},
{
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "bodyPaddingRight": 5,
 "id": "window_D85B49BF_F8CA_02A2_41E5_A0E4C700B32E",
 "headerPaddingRight": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "width": 400,
 "headerBorderColor": "#000000",
 "paddingBottom": 0,
 "closeButtonIconHeight": 12,
 "headerPaddingLeft": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBackgroundColorRatios": [],
 "modal": true,
 "veilOpacity": 0.4,
 "closeButtonIconWidth": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "height": 600,
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titleFontColor": "#000000",
 "verticalAlign": "middle",
 "bodyPaddingBottom": 5,
 "minWidth": 20,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundOpacity": 1,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "title": "R Keuangan",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonIconLineWidth": 2,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "titlePaddingBottom": 5,
 "overflow": "scroll",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "shadow": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_D85F59BF_F8CA_02A2_41D8_D43ABBD28E21"
 ],
 "footerHeight": 5,
 "closeButtonBackgroundColor": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "shadowBlurRadius": 6,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColorDirection": "vertical",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window40551"
 }
},
{
 "class": "SlideOutEffect",
 "id": "effect_EDE31937_FD1A_1C43_41E4_B1DB0E7241B4",
 "duration": 400,
 "easing": "quad_in",
 "to": "left"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5",
 "label": "DJI_0623",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 2129.61,
   "class": "PanoramaMapLocation",
   "angle": 95.32,
   "y": 1548.13
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -17.76,
   "panorama": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597",
   "distance": 1,
   "backwardYaw": 160.83
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -86.95,
   "panorama": "this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80",
   "distance": 1,
   "backwardYaw": 88.62
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 110.45,
   "panorama": "this.panorama_E1215927_F846_03A2_41E0_3C86E41E23DD",
   "distance": 1,
   "backwardYaw": -171.67
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E2DA3239_F84A_01AE_41E2_5ED5211F1DDA",
  "this.overlay_E413A7D3_F84A_0EE2_41E5_917C12BC01BD",
  "this.overlay_E6BD854D_F84A_03E1_41E3_7EE429620230"
 ]
},
{
 "class": "FadeOutEffect",
 "id": "FadeOutEffect_D6346F82_FDFA_743C_41CF_21F01FE38B8F",
 "duration": 500,
 "easing": "cubic_out"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -17,
  "pitch": 0
 },
 "id": "camera_CCE2FA1A_FDEE_1C4D_41E4_24AB7947EAFB",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "id": "FadeOutEffect_D637FF82_FDFA_743C_41CE_660518019038",
 "duration": 500,
 "easing": "cubic_out"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.5,
  "pitch": 0
 },
 "id": "camera_D7816C3E_FDEE_1445_41D0_C353249803A6",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 162.24,
  "pitch": 0
 },
 "id": "camera_CCC16A49_FDEE_1CCF_41EB_0C827E197CDF",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4",
 "label": "DJI_0087",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_EFD1196C_FD76_1CC5_41D7_108FE04A49B0"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_D6499F82_FDFA_743C_41E5_ABA7C2DD099F",
 "levels": [
  {
   "url": "media/zoomImage_D7E16D25_FDFE_7444_41E7_E32F415927E5_0_0.jpg",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_D7E16D25_FDFE_7444_41E7_E32F415927E5_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_D7E16D25_FDFE_7444_41E7_E32F415927E5_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_D7E16D25_FDFE_7444_41E7_E32F415927E5_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "class": "SlideOutEffect",
 "id": "effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0",
 "duration": 400,
 "easing": "quad_in",
 "to": "left"
},
{
 "class": "FadeOutEffect",
 "id": "FadeOutEffect_D6334F82_FDFA_743C_41CF_B29F67F212C4",
 "duration": 500,
 "easing": "cubic_out"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.05,
  "pitch": 0
 },
 "id": "camera_D7DDBBF0_FDEE_13DD_41CB_F785E7A2D8A3",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -69.55,
  "pitch": 0
 },
 "id": "camera_D66F4C4E_FDEE_14C4_41DD_15FDF20676B5",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_D093029E_F85E_0162_41DA_6815D43B6956",
 "label": "DJI_0070",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -178.16,
   "panorama": "this.panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761",
   "distance": 1,
   "backwardYaw": 2.09
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_C982E06E_F87E_01A2_41E6_EF812114D9BF"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.52,
  "pitch": 0
 },
 "id": "camera_CF8D5B15_FDEE_1C44_41E6_7AB2924DEB4A",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.7,
  "pitch": 0
 },
 "id": "camera_D638AC6D_FDEE_14C7_41E3_8CB2CDD79C0D",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_E33D4901_F846_0361_41EB_B13248C71FFA",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E33D4901_F846_0361_41EB_B13248C71FFA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E1215927_F846_03A2_41E0_3C86E41E23DD",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D08EA411_F85E_017E_41E0_BBC8757F163E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D093029E_F85E_0162_41DA_6815D43B6956",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D093029E_F85E_0162_41DA_6815D43B6956_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.video_C833CD10_F85A_037F_41D0_B7ECDC9E2312",
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 20)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ]
},
{
 "class": "FadeOutEffect",
 "id": "FadeOutEffect_D649EF82_FDFA_743C_41EE_7633738A8085",
 "duration": 500,
 "easing": "cubic_out"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.78,
  "pitch": 0
 },
 "id": "camera_D6271C7D_FDEE_14C7_41D0_A91E3A318F40",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.53,
  "pitch": 0
 },
 "id": "camera_D7F42BE0_FDEE_13FD_41E0_A9000EC3F393",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeInEffect",
 "id": "FadeInEffect_D636CF82_FDFA_743C_41E1_321D30D19850",
 "duration": 500,
 "easing": "cubic_in"
},
{
 "rotationY": 0,
 "hfov": 2.14,
 "popupDistance": 100,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "rotationX": 0,
 "rotationZ": 0,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_E490AE6F_FD6E_14C3_41DB_072101F62C94_0_3.jpg",
    "width": 713,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 3.81,
 "popupMaxWidth": "95%",
 "yaw": -39.83,
 "id": "popup_E490AE6F_FD6E_14C3_41DB_072101F62C94"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -17.07,
  "pitch": 0
 },
 "id": "camera_D78FFC3E_FDEE_1445_41D9_8A4F37659F4E",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "playList_CC29F9EB_FDEE_1FC3_41CF_65C36FA289CB",
 "items": [
  {
   "begin": "this.uidCC16B9FB_FDEE_1FCC_41EE_6BDAA36EEA9FMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "class": "MapPlayListItem",
   "player": "this.uidCC16B9FB_FDEE_1FCC_41EE_6BDAA36EEA9FMapPlayer"
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.41,
  "pitch": 0
 },
 "id": "camera_D613EC8D_FDEE_1444_41DF_60CCE5C95EC7",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905",
 "label": "DJI_0077",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -10.57,
   "panorama": "this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41",
   "distance": 1,
   "backwardYaw": -178.17
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E216830A_FD3A_0C4D_41EA_AD13F3ACDE2B",
  "this.overlay_E2B2873B_FD36_1443_41E1_AA7DB2A97E5A"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.6,
  "pitch": 0
 },
 "id": "camera_D61EAC7D_FDEE_14C7_41D4_3B5C8E5F988F",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A",
 "label": "DJI_0628",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 4920.24,
   "class": "PanoramaMapLocation",
   "angle": 97.93,
   "y": 2327.32
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -177.44,
   "panorama": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E",
   "distance": 1,
   "backwardYaw": -79.22
  },
  {
   "panorama": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E5175725_F846_0FA1_41DD_1BD351662726",
  "this.overlay_E600724E_F846_01E2_41E6_D57475C876AE",
  "this.overlay_E63A17FA_F846_0EA2_41E0_D2FB6BB00328"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_D636DF82_FDFA_743C_41E0_C85A6D9551B8",
 "levels": [
  {
   "url": "media/zoomImage_D7091C98_FDFE_F44D_41EB_A2FE65C63BF4_0_0.jpg",
   "width": 2835,
   "class": "ImageResourceLevel",
   "height": 1420
  },
  {
   "url": "media/zoomImage_D7091C98_FDFE_F44D_41EB_A2FE65C63BF4_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1025
  },
  {
   "url": "media/zoomImage_D7091C98_FDFE_F44D_41EB_A2FE65C63BF4_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/zoomImage_D7091C98_FDFE_F44D_41EB_A2FE65C63BF4_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741",
 "label": "DJI_0096",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 162.93,
   "panorama": "this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9",
   "distance": 1,
   "backwardYaw": 7.47
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -5.93,
   "panorama": "this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90",
   "distance": 1,
   "backwardYaw": -172.72
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E733D23B_FD6E_0C43_41E9_108BDB0604CD",
  "this.overlay_E63CED90_FD6E_345C_4189_F6304D075FBD"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600",
 "label": "DJI_0065",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -0.63,
   "panorama": "this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143",
   "distance": 1,
   "backwardYaw": 153.44
  },
  {
   "panorama": "this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_D49D6A98_F846_016E_41E1_9BAD053B2D5C",
  "this.overlay_D6CB4FE6_F84A_1EA3_41D8_9B5ED4DEE6A4"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.56,
  "pitch": 0
 },
 "id": "camera_CF6F6A97_FDEE_1C43_41CF_4114019C0118",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD",
 "label": "DJI_0629",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 5415.93,
   "class": "PanoramaMapLocation",
   "angle": 8.09,
   "y": 1469.95
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -98.22,
   "panorama": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829",
   "distance": 1,
   "backwardYaw": 90.42
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E594692E_F83A_03A3_41E7_8BCC8CE7F2B8",
  "this.overlay_E6A8CB20_F83A_075F_41E9_5467B09DC68C",
  "this.overlay_D823B76D_F83A_0FA6_41D5_AAC34859EF6C"
 ]
},
{
 "class": "FadeOutEffect",
 "id": "FadeOutEffect_D6353F82_FDFA_743C_41C2_56747B93DE41",
 "duration": 500,
 "easing": "cubic_out"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B",
 "label": "DJI_0092",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.67,
   "panorama": "this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91",
   "distance": 1,
   "backwardYaw": -163.71
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -170.29,
   "panorama": "this.panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4",
   "distance": 1,
   "backwardYaw": -6.14
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_EBEDF8BB_FD7E_3C4C_41A6_EFD4BA253322",
  "this.overlay_EA6AA925_FD7E_1C47_41B7_F18DB5C2FC9C"
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E",
 "label": "DJI_0085",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_DAABF5DD_FD16_17C7_41E7_11D811F08BEF",
  "this.overlay_D4AA161D_FD16_1447_41E8_7BB4D5148E08"
 ]
},
{
 "class": "SlideInEffect",
 "id": "effect_1A65691F_310E_0014_41BF_C2605660352F",
 "duration": 400,
 "easing": "quad_in",
 "from": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.06,
  "pitch": 0
 },
 "id": "camera_CFE82AF5_FDEE_1DC7_41D0_024375E5CC38",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9",
 "label": "DJI_0081",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -165.9,
   "panorama": "this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD",
   "distance": 1,
   "backwardYaw": 8.26
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -6.4,
   "panorama": "this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7",
   "distance": 1,
   "backwardYaw": -145.95
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_DE264589_FD2E_144F_41EA_F03E9C95ED95",
  "this.overlay_DEEFE5DD_FD2E_F7C4_41CB_F40F1122E62A"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.38,
  "pitch": 0
 },
 "id": "camera_CFC93AF5_FDEE_1DC7_41D4_9D63E50DE04B",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.04,
  "pitch": 0
 },
 "id": "camera_CFAF7B05_FDEE_1C47_41E5_7692EEE70CB3",
 "automaticZoomSpeed": 10
},
{
 "class": "SlideOutEffect",
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "duration": 400,
 "easing": "quad_in",
 "to": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.07,
  "pitch": 0
 },
 "id": "camera_CE417B34_FDEE_1C45_41C7_1790D36512A3",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E1215927_F846_03A2_41E0_3C86E41E23DD",
 "label": "DJI_0631",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 1921.61,
   "class": "PanoramaMapLocation",
   "angle": 185.97,
   "y": 2034.89
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -171.67,
   "panorama": "this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5",
   "distance": 1,
   "backwardYaw": 110.45
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E792CA83_F83E_0161_41DC_A70AD91B42F9",
  "this.overlay_DADEF45C_F83A_01E7_4195_70D0A9B70E11",
  "this.overlay_D9CAAA4C_F8CA_01E7_41E9_655BD48C94AC",
  "this.overlay_DA50C57E_F8CE_03A3_41AD_A501C0D2D570",
  "this.overlay_D888EE9D_F8CE_0166_41CD_ACAA8F2C295B",
  "this.overlay_D9652B01_F8CE_0761_41CF_2CF7CE66ED3E",
  "this.overlay_D823BFD1_F8CA_3EFE_41D4_763962077EAF",
  "this.overlay_D86BC9DF_F8CA_02E2_41C6_5B9F93C41365",
  "this.overlay_D8897EA4_F8CA_1EA7_41ED_5269659BDA84",
  "this.overlay_D9043F6C_F8CA_1FA6_41E6_2C067CF61B16"
 ]
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "maximumZoomFactor": 1.2,
 "label": "dirkeet copy",
 "id": "map_E1CB5A89_F85E_016E_41B9_415C953116A9",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "height": 3552,
 "width": 6549,
 "class": "Map",
 "scaleMode": "fit_inside",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9.png",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1735
   },
   {
    "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_lq.png",
    "width": 347,
    "class": "ImageResourceLevel",
    "height": 189,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "overlays": [
  "this.overlay_D2AF3286_F8C6_0162_41C7_6A5C2ECF5FF3",
  "this.overlay_D04E8287_F8C6_0161_41E3_2ED37AD54CBC",
  "this.overlay_DDB1012B_F8CA_03A1_41E9_C36807EF9EEB",
  "this.overlay_DEF09978_F9C6_03AF_41D1_17BABFAEF274",
  "this.overlay_DEB34C27_F9C6_01A2_41E6_2C631EEFE6F9",
  "this.overlay_DE784806_F9C6_0162_41E4_2B13E8590359",
  "this.overlay_DE30A456_F9C6_01E2_41DF_1F6D554C5B53",
  "this.overlay_DFEED59E_F9C6_0363_41DD_34BD2F585C96",
  "this.overlay_DF70F6C6_F9C6_0EE3_41E7_2FB78E69660D",
  "this.overlay_D0D43436_F9C6_01A2_41D6_8568A8DE73A8",
  "this.overlay_D0BC6EEE_F9C6_1EA2_41C8_311F02EAE7C5"
 ],
 "thumbnailUrl": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_t.png"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.28,
  "pitch": 0
 },
 "id": "camera_CCD5BA2A_FDEE_1C4C_41EA_CBE87F8DAF0B",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F",
 "label": "DJI_0088",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -2.16,
   "panorama": "this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD",
   "distance": 1,
   "backwardYaw": 173.67
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E9BD3BEC_FD76_33C5_41AC_409B212B4388",
  "this.overlay_EBAC5B6F_FD76_3CC3_41E5_5EC627BD568D"
 ]
},
{
 "class": "SlideOutEffect",
 "id": "effect_18885C2A_310A_003C_41B2_9B60A3A66C9F",
 "duration": 400,
 "easing": "quad_in",
 "to": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.27,
  "pitch": 0
 },
 "id": "camera_D7E7FBF0_FDEE_13DD_41E0_B9F0E8D1103A",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41",
 "label": "DJI_0078",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -178.17,
   "panorama": "this.panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905",
   "distance": 1,
   "backwardYaw": -10.57
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.68,
   "panorama": "this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8",
   "distance": 1,
   "backwardYaw": -178.55
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_DD01162F_FD36_3443_41E1_C172E098FB15",
  "this.overlay_DDE3B8A1_FD2A_1C7F_41C9_6847667EBC9F"
 ]
},
{
 "class": "SlideInEffect",
 "id": "effect_163FEAB2_310E_002C_416A_B20913F49C44",
 "duration": 400,
 "easing": "quad_in",
 "from": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.27,
  "pitch": 0
 },
 "id": "camera_CCA77A68_FDEE_1CCD_41D4_4F50AE85B9BB",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "id": "FadeOutEffect_D6372F82_FDFA_743C_41EF_688A1663F866",
 "duration": 500,
 "easing": "cubic_out"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "vfov": 180,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA",
 "label": "DJI_0086",
 "class": "Panorama",
 "hfovMin": "120%",
 "partial": false,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_t.jpg"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.3,
  "pitch": 0
 },
 "id": "camera_D7F2EBE0_FDEE_13FD_41E5_6FD1DF09801B",
 "automaticZoomSpeed": 10
},
{
 "class": "SlideOutEffect",
 "id": "effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9",
 "duration": 400,
 "easing": "quad_in",
 "to": "left"
},
{
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "bodyPaddingRight": 5,
 "id": "window_D8F51E85_F8CA_0166_41EC_2E26C441D0AB",
 "headerPaddingRight": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "width": 400,
 "headerBorderColor": "#000000",
 "paddingBottom": 0,
 "closeButtonIconHeight": 12,
 "headerPaddingLeft": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBackgroundColorRatios": [],
 "modal": true,
 "veilOpacity": 0.4,
 "closeButtonIconWidth": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "height": 600,
 "closeButtonBorderRadius": 11,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "backgroundColor": [],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "titleFontColor": "#000000",
 "verticalAlign": "middle",
 "bodyPaddingBottom": 5,
 "minWidth": 20,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundOpacity": 1,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "title": "R Kapro",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonIconLineWidth": 2,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyPaddingLeft": 5,
 "bodyBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "titlePaddingBottom": 5,
 "overflow": "scroll",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "shadow": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "children": [
  "this.htmlText_D8F9EE85_F8CA_0166_41BA_E35C1ED83643"
 ],
 "footerHeight": 5,
 "closeButtonBackgroundColor": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "shadowBlurRadius": 6,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "footerBackgroundColorDirection": "vertical",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window40551"
 }
},
{
 "class": "FadeOutEffect",
 "id": "FadeOutEffect_D6488F82_FDFA_743C_41E7_F117900A198E",
 "duration": 500,
 "easing": "cubic_out"
},
{
 "class": "PlayList",
 "id": "PlayList_F2B64C93_FCEA_1443_41E9_B22BA1D651CA",
 "items": [
  {
   "media": "this.video_C833CD10_F85A_037F_41D0_B7ECDC9E2312",
   "class": "VideoPlayListItem",
   "start": "this.viewer_uidCC4219DB_FDEE_1FC3_41EA_7B91C0394D8EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_F2B64C93_FCEA_1443_41E9_B22BA1D651CA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_F2B64C93_FCEA_1443_41E9_B22BA1D651CA, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidCC4219DB_FDEE_1FC3_41EA_7B91C0394D8EVideoPlayer)",
   "player": "this.viewer_uidCC4219DB_FDEE_1FC3_41EA_7B91C0394D8EVideoPlayer"
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D093029E_F85E_0162_41DA_6815D43B6956_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.11,
  "pitch": 0
 },
 "id": "camera_D7BEBC24_FDEE_1445_41EB_1BE2F7AA00E9",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E125F272_F846_01A2_41EE_4C9F4D77235E",
 "label": "DJI_0627",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 4164.4,
   "class": "PanoramaMapLocation",
   "angle": 181.48,
   "y": 2341.03
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 98.29,
   "panorama": "this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51",
   "distance": 1,
   "backwardYaw": -82.95
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -79.22,
   "panorama": "this.panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A",
   "distance": 1,
   "backwardYaw": -177.44
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 175.58,
   "panorama": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829",
   "distance": 1,
   "backwardYaw": 175.91
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E4B43267_F84A_01A2_41B1_9F3A4D092809",
  "this.overlay_E5E946D9_F84A_0EE1_41E5_82E70D3621B8",
  "this.overlay_D857CD9B_F846_0362_41E9_858A30B4C5CD"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E0D84B48_F846_07EF_41EB_51D535D34B80",
 "label": "DJI_0622",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 2305.88,
   "class": "PanoramaMapLocation",
   "angle": 95.31,
   "y": 768.95
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 28.72,
   "panorama": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597",
   "distance": 1,
   "backwardYaw": -170.28
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -179.26,
   "panorama": "this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E",
   "distance": 1,
   "backwardYaw": -3.73
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 88.62,
   "panorama": "this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5",
   "distance": 1,
   "backwardYaw": -86.95
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E2BF57D4_F846_0EE7_41DA_AAD6FE0C31C5",
  "this.overlay_E3339F8B_F846_1F61_41DF_091D718A2731",
  "this.overlay_E3EE104B_F84A_01E2_41E2_6DC6265439FE"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.43,
  "pitch": 0
 },
 "id": "camera_D7A33C2E_FDEE_1445_41E8_FAD0FEBAE12A",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E33D4901_F846_0361_41EB_B13248C71FFA",
 "label": "DJI_0620",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 729.34,
   "class": "PanoramaMapLocation",
   "angle": -78.5,
   "y": 615.88
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -175.69,
   "panorama": "this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E",
   "distance": 1,
   "backwardYaw": 178.94
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E284A805_F85A_0166_41D5_FE3474017F2D"
 ]
},
{
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "bodyPaddingRight": 0,
 "id": "window_F0E34AC5_FCEA_1DC7_41D1_F7185F602CC9",
 "headerPaddingRight": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonIconHeight": 20,
 "closeButtonBorderSize": 0,
 "paddingBottom": 0,
 "headerPaddingLeft": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "modal": true,
 "veilOpacity": 0.4,
 "closeButtonPressedBorderSize": 0,
 "bodyBackgroundOpacity": 0,
 "closeButtonIconWidth": 20,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedIconColor": "#888888",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "backgroundColor": [],
 "closeButtonBorderRadius": 0,
 "minHeight": 20,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "closeButtonPaddingLeft": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonIconColor": "#000000",
 "verticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundOpacity": 1,
 "minWidth": 20,
 "class": "Window",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonIconLineWidth": 5,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "closeButtonPaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "overflow": "scroll",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "closeButtonBackgroundColorDirection": "vertical",
 "shadow": true,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "footerBackgroundOpacity": 0,
 "children": [
  "this.viewer_uidCC4219DB_FDEE_1FC3_41EA_7B91C0394D8E"
 ],
 "footerHeight": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "borderSize": 0,
 "closeButtonBorderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#666666",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonPressedIconLineWidth": 5,
 "bodyPaddingTop": 0,
 "closeButtonRollOverIconLineWidth": 5,
 "paddingRight": 0,
 "closeButtonRollOverBorderColor": "#000000",
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 0,
 "contentOpaque": false,
 "closeButtonRollOverBorderSize": 0,
 "shadowBlurRadius": 6,
 "titlePaddingTop": 5,
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "borderRadius": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "shadowOpacity": 0.5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "paddingTop": 0,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPaddingBottom": 5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "backgroundColorRatios": [],
 "data": {
  "name": "Window984"
 },
 "closeButtonPressedBorderColor": "#000000"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9",
 "label": "DJI_0095",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 7.47,
   "panorama": "this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741",
   "distance": 1,
   "backwardYaw": 162.93
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -176,
   "panorama": "this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446",
   "distance": 1,
   "backwardYaw": -1.5
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E4A3FA93_FD7A_1C5C_41EC_CEB65ECDBBD7",
  "this.overlay_E466DE49_FD7A_74CF_41E8_5E3F115339B8",
  "this.overlay_E462F0DF_FD76_0DC3_41E0_12079B3A9E36",
  "this.popup_E490AE6F_FD6E_14C3_41DB_072101F62C94"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.78,
  "pitch": 0
 },
 "id": "camera_CC8D5A78_FDEE_1CCD_41C9_07D0B1306DEB",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_D08EA411_F85E_017E_41E0_BBC8757F163E",
 "label": "DJI_0064",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -168.59,
   "panorama": "this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC",
   "distance": 1,
   "backwardYaw": -10.89
  },
  {
   "panorama": "this.panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_D594FC4B_F846_01E1_41E3_61EA8E7C4A74",
  "this.overlay_C9B600A0_F846_015F_41E4_2FC2B5D290C8"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.74,
  "pitch": 0
 },
 "id": "camera_CF314AC6_FDEE_1DC5_41EA_6B97B98B86A1",
 "automaticZoomSpeed": 10
},
{
 "movementMode": "constrained",
 "class": "MapPlayer",
 "id": "uidCC16B9FB_FDEE_1FCC_41EE_6BDAA36EEA9FMapPlayer"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.09,
  "pitch": 0
 },
 "id": "camera_CF627AA7_FDEE_1C43_41C7_3BF2EE072585",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -26.56,
  "pitch": 0
 },
 "id": "camera_CF24EAD6_FDEE_1DC5_41D5_654828B63664",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597",
 "label": "DJI_0625",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 3084.44,
   "class": "PanoramaMapLocation",
   "angle": 107.14,
   "y": 1274.61
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 77.81,
   "panorama": "this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51",
   "distance": 1,
   "backwardYaw": 163
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -3.73,
   "panorama": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829",
   "distance": 1,
   "backwardYaw": -98.72
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -170.28,
   "panorama": "this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80",
   "distance": 1,
   "backwardYaw": 28.72
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 160.83,
   "panorama": "this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5",
   "distance": 1,
   "backwardYaw": -17.76
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E41B7857_F84E_01E1_41E3_56EE9E1563E6",
  "this.overlay_E40D12F0_F84E_06BF_41DC_7610CC1C2100",
  "this.overlay_E4BB4E91_F84E_0161_41DF_33667F56383A",
  "this.overlay_E4803176_F84E_03A3_41E5_2A2DCA209928"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "SlideOutEffect",
 "id": "effect_112869ED_311E_0034_41C2_70A247245BB7",
 "duration": 400,
 "easing": "quad_in",
 "to": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.71,
  "pitch": 0
 },
 "id": "camera_D6052C8D_FDEE_1444_41EC_CBF4138065B5",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD",
 "label": "DJI_0080",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 8.26,
   "panorama": "this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9",
   "distance": 1,
   "backwardYaw": -165.9
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -160.96,
   "panorama": "this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8",
   "distance": 1,
   "backwardYaw": -7.75
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_DFF0EB40_FD2A_1C3D_4167_6C3FFAD68770",
  "this.overlay_DE774ECD_FD2E_15C7_41D8_4901F0D878BF"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.4,
  "pitch": 0
 },
 "id": "camera_D7D88BFF_FDEE_13C3_41E6_27BF1870BFE8",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8",
 "label": "DJI_0098",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -3.2,
   "panorama": "this.panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140",
   "distance": 1,
   "backwardYaw": 175.47
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -176.47,
   "panorama": "this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90",
   "distance": 1,
   "backwardYaw": -1.7
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E6F23E26_FD6A_1445_41E5_8B04C77F0906",
  "this.overlay_E6C07FAB_FD6B_F443_41D9_A5C4382AFE6D"
 ]
},
{
 "class": "FadeInEffect",
 "id": "FadeInEffect_D64A5F82_FDFA_743C_41C8_4D4FE867A3C6",
 "duration": 500,
 "easing": "cubic_in"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.74,
  "pitch": 0
 },
 "id": "camera_D7B68C26_FDEE_1445_41E0_B29B5EC4A85A",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761",
 "label": "DJI_0069",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.09,
   "panorama": "this.panorama_D093029E_F85E_0162_41DA_6815D43B6956",
   "distance": 1,
   "backwardYaw": -178.16
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_C97CAA00_F87A_015E_41C5_5D5805861A98",
  "this.overlay_C9C4B5D6_F87A_02E2_41C1_953A58315FB1",
  "this.overlay_C9F8C1D5_F87E_02E1_41DD_E09FAF0B580C",
  "this.popup_C84D4770_F87E_0FBE_41E5_2449C50FA4A6"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.84,
  "pitch": 0
 },
 "id": "camera_CF14DAD6_FDEE_1DC5_41A4_E60917E4DFD1",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.29,
  "pitch": 0
 },
 "id": "camera_D7CA4C0F_FDEE_1443_41A3_D284FAAE4609",
 "automaticZoomSpeed": 10
},
{
 "class": "SlideInEffect",
 "id": "effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16",
 "duration": 400,
 "easing": "quad_in",
 "from": "left"
},
{
 "rotationY": 0,
 "hfov": 2.42,
 "popupDistance": 100,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "rotationX": 0,
 "rotationZ": 0,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C84D4770_F87E_0FBE_41E5_2449C50FA4A6_0_0.jpg",
    "width": 315,
    "class": "ImageResourceLevel",
    "height": 657
   },
   {
    "url": "media/popup_C84D4770_F87E_0FBE_41E5_2449C50FA4A6_0_1.jpg",
    "width": 245,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -4.29,
 "popupMaxWidth": "95%",
 "yaw": 73.65,
 "id": "popup_C84D4770_F87E_0FBE_41E5_2449C50FA4A6"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "SlideOutEffect",
 "id": "effect_EDB05026_FD1A_0C44_41EA_7A7383BCF1B7",
 "duration": 400,
 "easing": "quad_in",
 "to": "left"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD",
 "label": "DJI_0089",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 0.34,
   "panorama": "this.panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB",
   "distance": 1,
   "backwardYaw": 160.6
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 173.67,
   "panorama": "this.panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F",
   "distance": 1,
   "backwardYaw": -2.16
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_E9C6ACD3_FD76_15C3_41E6_F4B2CA4F98F2",
  "this.overlay_EBAFDA70_FD7A_1CDD_41CD_CB9541B3BF41"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4,
  "pitch": 0
 },
 "id": "camera_CF829B15_FDEE_1C44_41DF_ABF5E4EDFBE2",
 "automaticZoomSpeed": 10
},
{
 "class": "SlideOutEffect",
 "id": "effect_164A1542_310E_006C_41C8_B7C2AB9D709D",
 "duration": 400,
 "easing": "quad_in",
 "to": "left"
},
{
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "transitionDuration": 500,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingRight": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58",
  "this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC",
  "this.Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6"
 ],
 "id": "Container_D83C8239_F8DE_01A1_41D3_401F7AD1E733",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": 330,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "top": "0%",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": "100%",
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "propagateClick": false,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "transparencyActive": true,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "id": "IconButton_DC8D8382_F8CA_0763_41EC_64D2A891BD4E",
 "toolTipShadowHorizontalLength": 0,
 "width": 38,
 "toolTipBorderColor": "#767676",
 "right": "0%",
 "maxWidth": 128,
 "toolTipShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "maxHeight": 128,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "paddingRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "top": "0.44%",
 "minHeight": 1,
 "paddingLeft": 0,
 "toolTip": "Fullscreen",
 "height": 25,
 "verticalAlign": "middle",
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingTop": 4,
 "minWidth": 1,
 "class": "IconButton",
 "toolTipPaddingLeft": 6,
 "mode": "toggle",
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "iconURL": "skin/IconButton_DC8D8382_F8CA_0763_41EC_64D2A891BD4E.png",
 "paddingTop": 0,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "data": {
  "name": "IconButton1493"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "id": "Image_CBFC9856_F846_01E3_41EB_804DF5C5CBA6",
 "maxWidth": 480,
 "right": "0%",
 "maxHeight": 121,
 "width": "9.955%",
 "borderSize": 0,
 "url": "skin/Image_CBFC9856_F846_01E3_41EB_804DF5C5CBA6.jpg",
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": "4.741%",
 "top": "0.22%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image132788"
 },
 "shadow": false
},
{
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "right": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "bottom": 0,
 "top": 0,
 "minHeight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "class": "UIComponent",
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "paddingTop": 0,
 "visible": false,
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent84551"
 },
 "shadow": false
},
{
 "backgroundColorRatios": [],
 "propagateClick": false,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "bottom": 0,
 "top": 0,
 "minHeight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "class": "ZoomImage",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom",
 "paddingBottom": 0,
 "data": {
  "name": "ZoomImage84552"
 },
 "shadow": false
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "data": {
  "name": "CloseButton84553"
 },
 "iconWidth": 20,
 "id": "closeButtonPopupPanorama",
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "rollOverIconColor": "#666666",
 "fontSize": "1.29vmin",
 "pressedIconColor": "#888888",
 "right": 10,
 "borderSize": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 5,
 "iconHeight": 20,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 0,
 "paddingLeft": 5,
 "shadowBlurRadius": 6,
 "top": 10,
 "verticalAlign": "middle",
 "label": "",
 "mode": "push",
 "iconLineWidth": 5,
 "iconColor": "#000000",
 "minWidth": 0,
 "class": "CloseButton",
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "paddingTop": 5,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "gap": 5,
 "shadowSpread": 1,
 "cursor": "hand",
 "paddingBottom": 5,
 "fontWeight": "normal",
 "shadow": false
},
{
 "items": [
  {
   "hfov": 7.78,
   "pitch": -14.17,
   "yaw": -7.75,
   "image": "this.AnimatedImageResource_CD491F7B_FD16_14C3_41E9_71E02FD5D308",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.75,
   "hfov": 7.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.17
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DC192400_FD2A_143C_41D7_EA700162DD9A",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD, this.camera_CFAF7B05_FDEE_1C47_41E5_7692EEE70CB3); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.47,
   "pitch": -6.41,
   "yaw": -178.55,
   "image": "this.AnimatedImageResource_CD49FF7B_FD16_14C3_41E0_8FCA5C3A7D2A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.55,
   "hfov": 4.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.41
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D9387C91_FD2B_F45F_41D4_5B47DD57AC27",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41, this.camera_CF9D1B15_FDEE_1C44_41E0_1ADF906ABA59); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 6.29,
   "pitch": -17.94,
   "yaw": 0.06,
   "image": "this.AnimatedImageResource_CE9CF35D_F84E_07E1_41E0_101F2E7A926F",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.06,
   "hfov": 6.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.94
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D35F43B6_F85E_06A3_41C0_541DB69753A7",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.17,
   "hfov": 2.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.88
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.06,
   "pitch": -29.88,
   "yaw": 154.17,
   "image": "this.AnimatedImageResource_CE8EB380_F83A_075E_41D0_154C7C857A98",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C9497236_F84A_01A3_41E0_64279BA064A9",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.72,
   "pitch": -17.27,
   "yaw": -171.44,
   "image": "this.AnimatedImageResource_DC732593_FD16_1443_41E3_F25D26BF7548",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.44,
   "hfov": 3.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.27
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E529B687_FD7A_7443_41E5_DC31F4F9122B",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91, this.camera_CF8D5B15_FDEE_1C44_41E6_7AB2924DEB4A); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.83,
   "pitch": -11.98,
   "yaw": -1.5,
   "image": "this.AnimatedImageResource_DC728593_FD16_1443_41E6_7DCB441AA0FE",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.5,
   "hfov": 2.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.98
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E5AD9234_FD7A_0C45_41C8_3D068EBD2444",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9, this.camera_CF829B15_FDEE_1C44_41DF_ABF5E4EDFBE2); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.99,
   "pitch": -12.83,
   "yaw": -0.75,
   "image": "this.AnimatedImageResource_CE9C535E_F84E_07E3_41D9_D02B257628F2",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.75,
   "hfov": 2.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.83
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D21A7D3A_F85E_03A3_41D7_949E46820388",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.82,
   "pitch": -19.64,
   "yaw": 177.97,
   "image": "this.AnimatedImageResource_CE9C335E_F84E_07E3_41E6_93C9AB7D0121",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.97,
   "hfov": 3.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.64
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D2BF2301_F85A_075E_41E1_AC733CE76983",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.49,
   "pitch": -11.76,
   "yaw": -3.73,
   "image": "this.AnimatedImageResource_DC78D31D_F8C6_0766_41EC_C514FC835798",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.73,
   "hfov": 4.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.76
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E22827CB_F846_0EE1_41C6_F471FE021232",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80, this.camera_CF314AC6_FDEE_1DC5_41EA_6B97B98B86A1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.53,
   "pitch": -9.4,
   "yaw": 178.94,
   "image": "this.AnimatedImageResource_DC07131D_F8C6_0766_41E6_8F53B4690547",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.94,
   "hfov": 4.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.4
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E2CBBC42_F846_01E2_41E8_C392563756A1",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E33D4901_F846_0361_41EB_B13248C71FFA, this.camera_CF41FAB7_FDEE_1C44_41DD_34E12891CAEC); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.54,
   "pitch": -8.53,
   "yaw": -98.72,
   "image": "this.AnimatedImageResource_DC00031D_F8C6_0766_41E3_C640371472C3",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.72,
   "hfov": 4.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.53
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E6E47A19_F83A_016E_41E1_67301B85CC86",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597, this.camera_CCA77A68_FDEE_1CCD_41D4_4F50AE85B9BB); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.57,
   "pitch": -5.36,
   "yaw": -148.82,
   "image": "this.AnimatedImageResource_DC00431D_F8C6_0766_4163_A6633DB7C0B2",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.82,
   "hfov": 4.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.36
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E7EB74EC_F83A_02A6_41E1_5B31BF53810B",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.49,
   "pitch": -11.79,
   "yaw": 90.42,
   "image": "this.AnimatedImageResource_DC00831D_F8C6_0766_41C4_14E88D8CFFF2",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.42,
   "hfov": 4.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.79
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D943E271_F83A_01A1_41E2_6A9AC7BADEB7",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD, this.camera_CC8D5A78_FDEE_1CCD_41C9_07D0B1306DEB); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.54,
   "pitch": -8.18,
   "yaw": 175.91,
   "image": "this.AnimatedImageResource_DC00E31D_F8C6_0766_41C1_B5B78EA94EA3",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.91,
   "hfov": 4.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.18
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E7B24F9E_F83D_FF62_41E5_B9342B818F2B",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E, this.camera_CC99BA68_FDEE_1CCD_41C1_465AA2696010); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 5.34,
   "pitch": -10.46,
   "yaw": -1.7,
   "image": "this.AnimatedImageResource_DC75A593_FD16_1443_41E8_C08BED78D6C5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.7,
   "hfov": 5.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.46
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E62FCFAF_FD6E_7443_41AC_BB4B678CEDC4",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8, this.camera_CE512B34_FDEE_1C45_41E6_5929FD7CD76B); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.64,
   "pitch": -11.02,
   "yaw": -172.72,
   "image": "this.AnimatedImageResource_DC751593_FD16_1443_41E1_B0A4205EE97D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.72,
   "hfov": 4.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.02
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E312DBB1_FD6A_3C5C_41AF_A0FDB2D6B2EB",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741, this.camera_CE417B34_FDEE_1C45_41C7_1790D36512A3); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.98,
   "hfov": 5.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.62
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_1_HS_0_0.png",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "pitch": -10.62,
   "yaw": -56.98
  }
 ],
 "id": "overlay_D4CDF539_F84A_03A1_41D8_41067836AE7C",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 1.96,
   "pitch": -8.19,
   "yaw": -2.12,
   "image": "this.AnimatedImageResource_C38BD832_F846_01A2_41E6_299B6E04C3FD",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.12,
   "hfov": 1.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.19
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_CB763BB3_F87A_06A1_41E0_120ECCA126C2",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.93,
   "pitch": -10.99,
   "yaw": -176.52,
   "image": "this.AnimatedImageResource_C3885832_F846_01A2_41E5_90BB42AF8C45",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.52,
   "hfov": 3.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.99
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_C98DCD29_F87A_03A1_41E9_FD8151F7536A",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143, this.camera_D7CDDC0F_FDEE_1443_41CC_6EE831C41CD2); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.59,
   "pitch": -18.75,
   "yaw": 177.39,
   "image": "this.AnimatedImageResource_CD4E7F7E_FD16_14C5_41DB_734E66C00746",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.39,
   "hfov": 3.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.75
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DBEA5A08_FD2A_3C4C_41EE_A8C0B893E45F",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783, this.camera_CC87CA88_FDEE_1C4C_41DF_F2F9D2E62EBC); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.58,
   "pitch": -21.84,
   "yaw": -0.97,
   "image": "this.AnimatedImageResource_CD4EEF7E_FD16_14C5_41DF_40207F6CFC8D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.97,
   "hfov": 3.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.84
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D5906E02_FD2A_343C_41DB_A5DAED4F7866",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.78,
   "pitch": -21.02,
   "yaw": 1.3,
   "image": "this.AnimatedImageResource_CD4C0F7E_FD16_14C5_41CA_58F3EE6A0F16",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.3,
   "hfov": 2.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.02
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D96EF79C_FD2A_1444_41E9_5D128F2FB42F",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783, this.camera_D6271C7D_FDEE_14C7_41D0_A91E3A318F40); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.62,
   "pitch": -16.35,
   "yaw": -145.95,
   "image": "this.AnimatedImageResource_CD4CFF7E_FD16_14C5_41E0_5CEBD7EFA98D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.95,
   "hfov": 3.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.35
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DA0EDD6D_FD2A_14C4_41DD_CDF07B4C9F79",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9, this.camera_D61EAC7D_FDEE_14C7_41D4_3B5C8E5F988F); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "paddingBottom": 10,
 "id": "htmlText_D8F82787_F8CA_0F61_41D8_6B4E2DD4B97A",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "paddingLeft": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 },
 "shadow": false
},
{
 "paddingBottom": 10,
 "id": "htmlText_D974CF4C_F8CA_1FE6_41B5_91ED4CE92060",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "paddingLeft": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 },
 "shadow": false
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.01,
   "hfov": 3.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.03,
   "pitch": -15.13,
   "yaw": 159.01,
   "image": "this.AnimatedImageResource_DC71A593_FD16_1443_41E2_585EB0C15DE0",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB47EAD9_FD7A_7DCF_41E0_27ADC486BC0C",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.1,
   "pitch": -14.44,
   "yaw": -6.14,
   "image": "this.AnimatedImageResource_DC715593_FD16_1443_41E7_FBCFCF566AB7",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.14,
   "hfov": 3.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.44
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EB8AFFB7_FD79_F443_41A8_9074704ED00E",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B, this.camera_D6052C8D_FDEE_1444_41EC_CBF4138065B5); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "paddingBottom": 10,
 "id": "htmlText_D9685AE8_F8CE_06AF_41DC_073AB348BB0A",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "paddingLeft": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 },
 "shadow": false
},
{
 "items": [
  {
   "hfov": 3.58,
   "pitch": -16.11,
   "yaw": -4.19,
   "image": "this.AnimatedImageResource_DC6E4593_FD16_1443_41B1_45545916FCDA",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.19,
   "hfov": 3.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.11
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E9DA229C_FD7A_0C44_41B4_321C1D441B46",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.59,
   "pitch": -18.27,
   "yaw": 160.6,
   "image": "this.AnimatedImageResource_DC6E3593_FD16_1443_41C1_B0374C60D139",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.6,
   "hfov": 4.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.27
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EB6F31DF_FD7A_0FC3_41C3_83F9B917F11F",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD, this.camera_CF505AA7_FDEE_1C43_41CC_69F3561AF052); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "paddingBottom": 10,
 "id": "htmlText_D9268A2D_F8CA_01A6_418B_46773F1D41B7",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "paddingLeft": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 },
 "shadow": false
},
{
 "paddingBottom": 10,
 "id": "htmlText_D8F8DE7D_F8CE_01A6_41D3_1ACD636C1FE1",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "paddingLeft": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 },
 "shadow": false
},
{
 "paddingBottom": 10,
 "id": "htmlText_DA4F3544_F8CE_03E7_41CC_3631A57FA65E",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "paddingLeft": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 },
 "shadow": false
},
{
 "items": [
  {
   "hfov": 4.64,
   "pitch": -14.37,
   "yaw": -164.71,
   "image": "this.AnimatedImageResource_CE93935E_F84E_07E3_41D6_677503CD38E2",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.71,
   "hfov": 4.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.37
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D2BD8A38_F85A_01AE_41C6_C429DC095326",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 1.76,
   "pitch": -9.36,
   "yaw": -10.89,
   "image": "this.AnimatedImageResource_CE93735E_F84E_07E3_41EC_B606819DBADA",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.89,
   "hfov": 1.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.36
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D59BFE60_F85A_01DE_41A5_795AD89DFD91",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D08EA411_F85E_017E_41E0_BBC8757F163E, this.camera_D613EC8D_FDEE_1444_41DF_60CCE5C95EC7); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 6.37,
   "pitch": -7.87,
   "yaw": 153.44,
   "image": "this.AnimatedImageResource_CE91B35E_F84E_07E3_41BC_11B787D7DD91",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.44,
   "hfov": 6.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.87
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D72621AA_F84A_02A2_41E6_4A56EB333545",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600, this.camera_D6529C5D_FDEE_14C7_41EC_8F90B378FFFE); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.26,
   "pitch": -7.49,
   "yaw": 1.64,
   "image": "this.AnimatedImageResource_CE91635E_F84E_07E3_41E5_EC9CA43C9906",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.64,
   "hfov": 3.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.49
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D7408C71_F84A_01BE_41E1_43E2788F8AA1",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418, this.camera_D65B2C5D_FDEE_14C7_41EE_0DC277B24E12); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0_HS_2_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ]
   },
   "pitch": -9.88,
   "yaw": -43.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.19,
   "hfov": 4.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -9.88
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_C9F7BAF4_F85E_06A6_41E9_CB427F516052",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_CBC653AC_F85A_06A7_41E9_425465537D63, {'iconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'paddingBottom':5,'iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingTop':5,'borderColor':'#000000','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, true) } else { this.showPopupMedia(this.window_F0E34AC5_FCEA_1DC7_41D1_F7185F602CC9, this.video_C833CD10_F85A_037F_41D0_B7ECDC9E2312, this.PlayList_F2B64C93_FCEA_1443_41E9_B22BA1D651CA, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.52,
   "pitch": -9.82,
   "yaw": 163,
   "image": "this.AnimatedImageResource_DC04631D_F8C6_0766_41EA_472AE719EDA5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163,
   "hfov": 4.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.82
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E40E01D6_F84A_02E3_41A0_82636B824D3A",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597, this.camera_CE373B34_FDEE_1C45_41BC_0391806D2E97); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.56,
   "pitch": -6.81,
   "yaw": -82.95,
   "image": "this.AnimatedImageResource_DC04C31D_F8C6_0766_41E6_54F2EB65368D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.95,
   "hfov": 4.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.81
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E617AB7A_F84A_07A3_41DD_6FF28B8A336D",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E, this.camera_CE275B44_FDEE_1CC4_41E4_259ACD256661); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.83,
   "pitch": -8.21,
   "yaw": 0.63,
   "image": "this.AnimatedImageResource_CD4D0F7E_FD16_14C5_41E7_2E8A90846DBB",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.63,
   "hfov": 2.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.21
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D8FCE06B_FD2A_0CCC_41D0_335B975F4FC0",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE, this.camera_D647FC6D_FDEE_14C7_41C6_44C7CAE9AE88); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.47,
   "pitch": -14.4,
   "yaw": -171.22,
   "image": "this.AnimatedImageResource_CD4D8F7E_FD16_14C5_41E0_F661303D6CCD",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.22,
   "hfov": 3.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.4
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D574C29F_FD2A_0C43_41CB_319F495C5635",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7, this.camera_D638AC6D_FDEE_14C7_41E3_8CB2CDD79C0D); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.78,
   "hfov": 15.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_1_HS_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_1_HS_0_0.png",
      "width": 374,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ]
   },
   "pitch": -17.49,
   "yaw": -42.78,
   "distance": 50
  }
 ],
 "id": "overlay_E142959B_FD6A_1443_41C8_E6B4548E98E7",
 "data": {
  "label": "Stockyard"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.68,
   "pitch": -14.36,
   "yaw": 175.47,
   "image": "this.AnimatedImageResource_DC77A593_FD16_1443_41B5_113355C73433",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.47,
   "hfov": 4.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.36
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E2C07009_FD16_0C4C_41E9_04F98BE4703E",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8, this.camera_D6662C5D_FDEE_14C7_41E6_7F90600BD47D); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "paddingBottom": 10,
 "id": "htmlText_D9722DAE_F8CA_02A2_41C6_76658ECC2D85",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "paddingLeft": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText45029"
 },
 "shadow": false
},
{
 "items": [
  {
   "hfov": 2.7,
   "pitch": -15.92,
   "yaw": -163.71,
   "image": "this.AnimatedImageResource_DC73C593_FD16_1443_41CD_CFA984217730",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.71,
   "hfov": 2.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.92
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E53D4BB2_FD7E_3C5D_41E2_BDC281C2D7F3",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B, this.camera_CF0ADAE6_FDEE_1DC5_41E1_A0F3D8D0E8B1); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.04,
   "pitch": -13.5,
   "yaw": -0.48,
   "image": "this.AnimatedImageResource_DC73B593_FD16_1443_41D7_AE6A95014FC7",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.48,
   "hfov": 3.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EAAAAC1C_FD7E_7444_41E7_5AF554F06BF6",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446, this.camera_CFFA0AE6_FDEE_1DC5_41CA_D4FF69201154); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "paddingBottom": 10,
 "id": "htmlText_D85F59BF_F8CA_02A2_41D8_D43ABBD28E21",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "paddingLeft": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 },
 "shadow": false
},
{
 "items": [
  {
   "hfov": 4.54,
   "pitch": -8.28,
   "yaw": -17.76,
   "image": "this.AnimatedImageResource_DC06431D_F8C6_0766_41E9_2F6B612F49B6",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.76,
   "hfov": 4.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.28
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E2DA3239_F84A_01AE_41E2_5ED5211F1DDA",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597, this.camera_CFD9AAF5_FDEE_1DC7_41B7_031196A74F60); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.53,
   "pitch": -9.38,
   "yaw": -86.95,
   "image": "this.AnimatedImageResource_DC06831D_F8C6_0766_41D7_26F8E980C5AF",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.95,
   "hfov": 4.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.38
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E413A7D3_F84A_0EE2_41E5_917C12BC01BD",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80, this.camera_CFC93AF5_FDEE_1DC7_41D4_9D63E50DE04B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.56,
   "pitch": -6.16,
   "yaw": 110.45,
   "image": "this.AnimatedImageResource_DC06F31D_F8C6_0766_41E2_A760CB10BED8",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.45,
   "hfov": 4.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.16
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E6BD854D_F84A_03E1_41E3_7EE429620230",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E1215927_F846_03A2_41E0_3C86E41E23DD, this.camera_CFBFDB05_FDEE_1C47_41EF_1AC125649F1D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.5,
   "pitch": -16.92,
   "yaw": -2.21,
   "image": "this.AnimatedImageResource_DC6C5593_FD16_1443_41EB_6161E2A0071C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.21,
   "hfov": 2.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.92
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EFD1196C_FD76_1CC5_41D7_108FE04A49B0",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 1.91,
   "pitch": -6.43,
   "yaw": -178.16,
   "image": "this.AnimatedImageResource_C389C833_F846_01A2_41E8_674914BE09D6",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.16,
   "hfov": 1.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.43
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_C982E06E_F87E_01A2_41E6_EF812114D9BF",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761, this.camera_D67BBC4E_FDEE_14C4_41CD_6637DD4C009E); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 5.47,
   "pitch": -19.7,
   "yaw": -10.57,
   "image": "this.AnimatedImageResource_CD77EF7B_FD16_14C3_41B9_BB60CDB93F1E",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.57,
   "hfov": 5.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.7
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E216830A_FD3A_0C4D_41EA_AD13F3ACDE2B",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41, this.camera_CCB8FA49_FDEE_1CCF_41E1_020F2BBB5C07); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.11,
   "hfov": 2.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.31
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.82,
   "pitch": -20.31,
   "yaw": -115.11,
   "image": "this.AnimatedImageResource_CD485F7B_FD16_14C3_41A9_9A0AC0EB316F",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E2B2873B_FD36_1443_41E1_AA7DB2A97E5A",
 "data": {
  "label": "Info 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.56,
   "pitch": -6.26,
   "yaw": -82.85,
   "image": "this.AnimatedImageResource_DC02331D_F8C6_0766_41D1_ACE059955DDA",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.85,
   "hfov": 4.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.26
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E5175725_F846_0FA1_41DD_1BD351662726",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.57,
   "pitch": -4.45,
   "yaw": -136.94,
   "image": "this.AnimatedImageResource_DC02731D_F8C6_0766_41DD_BC73691E7992",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.94,
   "hfov": 4.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.45
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E600724E_F846_01E2_41E6_D57475C876AE",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.52,
   "pitch": -9.95,
   "yaw": -177.44,
   "image": "this.AnimatedImageResource_DC02C31D_F8C6_0766_41D6_DFB47224AFD5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.44,
   "hfov": 4.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.95
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E63A17FA_F846_0EA2_41E0_D2FB6BB00328",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E, this.camera_D6321C7D_FDEE_14C7_41ED_DFF686D88770); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.07,
   "pitch": -10.12,
   "yaw": 162.93,
   "image": "this.AnimatedImageResource_DC74C593_FD16_1443_41CD_42A1C340AA70",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.93,
   "hfov": 3.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.12
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E733D23B_FD6E_0C43_41E9_108BDB0604CD",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9, this.camera_CE736B24_FDEE_1C45_41C9_877BE620EA26); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3,
   "pitch": -10.11,
   "yaw": -5.93,
   "image": "this.AnimatedImageResource_DC723593_FD16_1443_41B1_917A8FBB6FD5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.93,
   "hfov": 3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.11
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E63CED90_FD6E_345C_4189_F6304D075FBD",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90, this.camera_CE60AB24_FDEE_1C45_41D7_18490568375F); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 8.47,
   "pitch": -15.64,
   "yaw": 178.37,
   "image": "this.AnimatedImageResource_CE92635E_F84E_07E3_41EE_15C53B8D7E1C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.37,
   "hfov": 8.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.64
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D49D6A98_F846_016E_41E1_9BAD053B2D5C",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.89,
   "pitch": -7.66,
   "yaw": -0.63,
   "image": "this.AnimatedImageResource_CE91C35E_F84E_07E3_41E1_0CA5C100D1DB",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.63,
   "hfov": 2.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.66
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D6CB4FE6_F84A_1EA3_41D8_9B5ED4DEE6A4",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143, this.camera_CF24EAD6_FDEE_1DC5_41D5_654828B63664); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.5,
   "pitch": -11.14,
   "yaw": -174.21,
   "image": "this.AnimatedImageResource_DC01131D_F8C6_0766_41D6_CA411A49AEAC",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.21,
   "hfov": 4.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.14
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E594692E_F83A_03A3_41E7_8BCC8CE7F2B8",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.56,
   "pitch": -6.78,
   "yaw": -140.63,
   "image": "this.AnimatedImageResource_DC01731D_F8C6_0766_41E3_0F8BC33EEC00",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.63,
   "hfov": 4.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.78
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E6A8CB20_F83A_075F_41E9_5467B09DC68C",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.52,
   "pitch": -9.78,
   "yaw": -98.22,
   "image": "this.AnimatedImageResource_DC01B31D_F8C6_0766_41C3_636FDC0E309B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.22,
   "hfov": 4.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.78
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D823B76D_F83A_0FA6_41D5_AAC34859EF6C",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829, this.camera_D7F9FBD1_FDEE_13DC_41CC_C5767810DE2A); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.69,
   "pitch": -14.14,
   "yaw": -170.29,
   "image": "this.AnimatedImageResource_DC70D593_FD16_1443_41E5_7377804412AD",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.29,
   "hfov": 4.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.14
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EBEDF8BB_FD7E_3C4C_41A6_EFD4BA253322",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4, this.camera_D7C14C0F_FDEE_1443_41ED_5EA2F9652826); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.26,
   "pitch": -11.94,
   "yaw": -4.67,
   "image": "this.AnimatedImageResource_DC704593_FD16_1443_41C1_064C00C89CD8",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.67,
   "hfov": 3.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.94
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EA6AA925_FD7E_1C47_41B7_F18DB5C2FC9C",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91, this.camera_D7CA4C0F_FDEE_1443_41A3_D284FAAE4609); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.99,
   "pitch": -21.57,
   "yaw": 4.3,
   "image": "this.AnimatedImageResource_CD4DDF7E_FD16_14C5_4197_C49A46B17EB0",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.3,
   "hfov": 3.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.57
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DAABF5DD_FD16_17C7_41E7_11D811F08BEF",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.54,
   "pitch": -20.04,
   "yaw": 157.02,
   "image": "this.AnimatedImageResource_CD4E6F7E_FD16_14C5_41EC_E1D0AAD49DA7",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.02,
   "hfov": 4.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.04
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D4AA161D_FD16_1447_41E8_7BB4D5148E08",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.98,
   "pitch": -16.76,
   "yaw": -6.4,
   "image": "this.AnimatedImageResource_CD4B0F7E_FD16_14C5_41D6_2CEF3FC726FB",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.4,
   "hfov": 2.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.76
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DE264589_FD2E_144F_41EA_F03E9C95ED95",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7, this.camera_D7AE3C2E_FDEE_1445_41E4_D3DCE60E9398); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.53,
   "pitch": -20.37,
   "yaw": -165.9,
   "image": "this.AnimatedImageResource_CD4BFF7E_FD16_14C5_41E1_8F34832306E0",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.9,
   "hfov": 4.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.37
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DEEFE5DD_FD2E_F7C4_41CB_F40F1122E62A",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD, this.camera_D7B68C26_FDEE_1445_41E0_B29B5EC4A85A); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.4,
   "pitch": -16.46,
   "yaw": -171.67,
   "image": "this.AnimatedImageResource_DC0F431D_F8C6_0766_41E6_8202E9606D4C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.67,
   "hfov": 4.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.46
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E792CA83_F83E_0161_41DC_A70AD91B42F9",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5, this.camera_D66F4C4E_FDEE_14C4_41DD_15FDF20676B5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.88,
   "pitch": -15.06,
   "yaw": 3.64,
   "image": "this.AnimatedImageResource_DC0F831D_F8C6_0766_41E1_6DC3E9AB38E9",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.64,
   "hfov": 4.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.06
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DADEF45C_F83A_01E7_4195_70D0A9B70E11",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showWindow(this.window_D8E66787_F8CA_0F61_41EE_1EA702DAF7FC, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.88,
   "pitch": -15.27,
   "yaw": 22.06,
   "image": "this.AnimatedImageResource_DB610A81_F8C6_015E_41E9_F7397B5A0FBE",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.06,
   "hfov": 4.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.27
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D9CAAA4C_F8CA_01E7_41E9_655BD48C94AC",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showWindow(this.window_D93AEA2D_F8CA_01A6_41C1_BA5E174AAA2A, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 5,
   "pitch": -8.6,
   "yaw": -68.92,
   "image": "this.AnimatedImageResource_DB7EFA81_F8C6_015E_41E7_BAE5327639C4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.92,
   "hfov": 5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.6
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DA50C57E_F8CE_03A3_41AD_A501C0D2D570",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showWindow(this.window_DA4F4546_F8CE_03E3_41D4_D803363C47A3, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.9,
   "pitch": -14.05,
   "yaw": 70.98,
   "image": "this.AnimatedImageResource_DB7E0A81_F8C6_015E_41E4_0D59A767A48D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.98,
   "hfov": 4.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.05
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D888EE9D_F8CE_0166_41CD_ACAA8F2C295B",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showWindow(this.window_D8FCCE7D_F8CE_01A6_41DE_92E309BE4ACE, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.98,
   "pitch": -9.94,
   "yaw": 140.38,
   "image": "this.AnimatedImageResource_DB7FFA81_F8C6_015E_41BB_060A4484E589",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.38,
   "hfov": 4.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.94
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D9652B01_F8CE_0761_41CF_2CF7CE66ED3E",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showWindow(this.window_D9681AE8_F8CE_06AF_41DA_9D5E3FA15C29, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 6.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_6_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ]
   },
   "pitch": -8.44,
   "yaw": -56.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.96,
   "hfov": 6.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.44
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D823BFD1_F8CA_3EFE_41D4_763962077EAF",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.showWindow(this.window_D970DDAD_F8CA_02A6_41A5_4D7570F486D3, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.98,
   "pitch": 9.94,
   "yaw": 59.99,
   "image": "this.AnimatedImageResource_DB7C9A81_F8C6_015E_41EB_78E5E3B9A313",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.99,
   "hfov": 4.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.94
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D86BC9DF_F8CA_02E2_41C6_5B9F93C41365",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showWindow(this.window_D85B49BF_F8CA_02A2_41E5_A0E4C700B32E, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.96,
   "pitch": 11.26,
   "yaw": 28.11,
   "image": "this.AnimatedImageResource_DB7C7A81_F8C6_015E_41B7_E73CD435E714",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.11,
   "hfov": 4.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.26
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D8897EA4_F8CA_1EA7_41ED_5269659BDA84",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showWindow(this.window_D8F51E85_F8CA_0166_41EC_2E26C441D0AB, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.91,
   "pitch": 13.69,
   "yaw": 3.75,
   "image": "this.AnimatedImageResource_DB7DFA81_F8C6_015E_41B7_F7905D405F53",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.75,
   "hfov": 4.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.69
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D9043F6C_F8CA_1FA6_41E6_2C067CF61B16",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showWindow(this.window_D9743F4C_F8CA_1FE6_41EC_B57B67206799, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "map": {
  "width": 187.85,
  "x": 639.26,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_1_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 532.72,
  "offsetY": 0,
  "height": 173.97,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D2AF3286_F8C6_0162_41C7_6A5C2ECF5FF3",
 "image": {
  "x": 635.41,
  "y": 528.89,
  "width": 187.85,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_1.png",
     "width": 91,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 173.97
 }
},
{
 "map": {
  "width": 187.85,
  "x": 1390.36,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_2_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 583.91,
  "offsetY": 0,
  "height": 173.97,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D04E8287_F8C6_0161_41E3_2ED37AD54CBC",
 "image": {
  "x": 1387.45,
  "y": 580.04,
  "width": 187.85,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_2.png",
     "width": 91,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 173.97
 }
},
{
 "map": {
  "width": 187.85,
  "x": 2215.38,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_3_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 685.8,
  "offsetY": 0,
  "height": 173.97,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DDB1012B_F8CA_03A1_41E9_C36807EF9EEB",
 "image": {
  "x": 2211.95,
  "y": 681.96,
  "width": 187.85,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_3.png",
     "width": 91,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 173.97
 }
},
{
 "map": {
  "width": 187.85,
  "x": 2035.68,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_4_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1461.15,
  "offsetY": 0,
  "height": 173.97,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DEF09978_F9C6_03AF_41D1_17BABFAEF274",
 "image": {
  "x": 2035.68,
  "y": 1461.15,
  "width": 187.85,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_4.png",
     "width": 91,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 173.97
 }
},
{
 "map": {
  "width": 187.85,
  "x": 1827.68,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_5_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1947.9,
  "offsetY": 0,
  "height": 173.97,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DEB34C27_F9C6_01A2_41E6_2C631EEFE6F9",
 "image": {
  "x": 1827.68,
  "y": 1947.9,
  "width": 187.85,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_5.png",
     "width": 91,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 173.97
 }
},
{
 "map": {
  "width": 187.85,
  "x": 2990.51,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_6_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1187.63,
  "offsetY": 0,
  "height": 173.97,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DE784806_F9C6_0162_41E4_2B13E8590359",
 "image": {
  "x": 2990.51,
  "y": 1187.63,
  "width": 187.85,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_6.png",
     "width": 91,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 173.97
 }
},
{
 "map": {
  "width": 187.85,
  "x": 4084.31,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_7_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1252.61,
  "offsetY": 0,
  "height": 173.97,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DE30A456_F9C6_01E2_41DF_1F6D554C5B53",
 "image": {
  "x": 4084.31,
  "y": 1252.61,
  "width": 187.85,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_7.png",
     "width": 91,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 173.97
 }
},
{
 "map": {
  "width": 187.85,
  "x": 5322.01,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_8_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1382.96,
  "offsetY": 0,
  "height": 173.97,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DFEED59E_F9C6_0363_41DD_34BD2F585C96",
 "image": {
  "x": 5322.01,
  "y": 1382.96,
  "width": 187.85,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_8.png",
     "width": 91,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 173.97
 }
},
{
 "map": {
  "width": 187.85,
  "x": 4826.32,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_9_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 2240.33,
  "offsetY": 0,
  "height": 173.97,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DF70F6C6_F9C6_0EE3_41E7_2FB78E69660D",
 "image": {
  "x": 4826.32,
  "y": 2240.33,
  "width": 187.85,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_9.png",
     "width": 91,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 173.97
 }
},
{
 "map": {
  "width": 187.85,
  "x": 4070.47,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_10_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 2254.04,
  "offsetY": 0,
  "height": 173.97,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D0D43436_F9C6_01A2_41D6_8568A8DE73A8",
 "image": {
  "x": 4070.47,
  "y": 2254.04,
  "width": 187.85,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_10.png",
     "width": 91,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 173.97
 }
},
{
 "map": {
  "width": 187.85,
  "x": 3250.67,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_11_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 2138.41,
  "offsetY": 0,
  "height": 173.97,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D0BC6EEE_F9C6_1EA2_41C8_311F02EAE7C5",
 "image": {
  "x": 3250.67,
  "y": 2138.41,
  "width": 187.85,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_HS_11.png",
     "width": 91,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ]
  },
  "height": 173.97
 }
},
{
 "items": [
  {
   "hfov": 6.58,
   "pitch": -16.75,
   "yaw": -2.16,
   "image": "this.AnimatedImageResource_DC6C3593_FD16_1443_41EC_3FA1ACCE31BD",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.16,
   "hfov": 6.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.75
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E9BD3BEC_FD76_33C5_41AC_409B212B4388",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD, this.camera_CCAD9A59_FDEE_1CCF_41C5_539424C0A278); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.36,
   "hfov": 6.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.93,
   "pitch": -22.94,
   "yaw": -154.36,
   "image": "this.AnimatedImageResource_DC6FB593_FD16_1443_41E4_B2F54E3055D0",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBAC5B6F_FD76_3CC3_41E5_5EC627BD568D",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.74,
   "pitch": -11.53,
   "yaw": -178.17,
   "image": "this.AnimatedImageResource_CD481F7B_FD16_14C3_41E4_A053BC758C50",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.17,
   "hfov": 4.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.53
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DD01162F_FD36_3443_41E1_C172E098FB15",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905, this.camera_D7A33C2E_FDEE_1445_41E8_FAD0FEBAE12A); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.36,
   "pitch": -32.81,
   "yaw": 2.68,
   "image": "this.AnimatedImageResource_CD48AF7B_FD16_14C3_41C4_76B8D70D7F6A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.68,
   "hfov": 3.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.81
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DDE3B8A1_FD2A_1C7F_41C9_6847667EBC9F",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8, this.camera_D79ABC3E_FDEE_1445_41EB_079F505A25EA); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "paddingBottom": 10,
 "id": "htmlText_D8F9EE85_F8CA_0166_41BA_E35C1ED83643",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "paddingLeft": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 },
 "shadow": false
},
{
 "class": "VideoPlayer",
 "id": "viewer_uidCC4219DB_FDEE_1FC3_41EA_7B91C0394D8EVideoPlayer",
 "viewerArea": "this.viewer_uidCC4219DB_FDEE_1FC3_41EA_7B91C0394D8E",
 "displayPlaybackBar": true
},
{
 "items": [
  {
   "hfov": 4.52,
   "pitch": -9.97,
   "yaw": 98.29,
   "image": "this.AnimatedImageResource_DC03031D_F8C6_0766_41B9_DB99F65DA10B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.29,
   "hfov": 4.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.97
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E4B43267_F84A_01A2_41B1_9F3A4D092809",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51, this.camera_CF7A7A88_FDEE_1C4C_41E3_E77E9F9B5643); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.51,
   "pitch": -10.89,
   "yaw": -79.22,
   "image": "this.AnimatedImageResource_DC03731D_F8C6_0766_41BF_7AE9E48D8B9D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.22,
   "hfov": 4.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.89
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E5E946D9_F84A_0EE1_41E5_82E70D3621B8",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A, this.camera_CF6F6A97_FDEE_1C43_41CF_4114019C0118); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.52,
   "pitch": -10.13,
   "yaw": 175.58,
   "image": "this.AnimatedImageResource_DC03A31D_F8C6_0766_419C_4259CDED36DF",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.58,
   "hfov": 4.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.13
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D857CD9B_F846_0362_41E9_858A30B4C5CD",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829, this.camera_CF627AA7_FDEE_1C43_41C7_3BF2EE072585); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.53,
   "pitch": -9.26,
   "yaw": 28.72,
   "image": "this.AnimatedImageResource_DC07431D_F8C6_0766_4159_FA1AA73442F8",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.72,
   "hfov": 4.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.26
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E2BF57D4_F846_0EE7_41DA_AAD6FE0C31C5",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597, this.camera_D7E92BF0_FDEE_13DD_41EB_697765ACDFC0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.5,
   "pitch": -10.99,
   "yaw": 88.62,
   "image": "this.AnimatedImageResource_DC07B31D_F8C6_0766_41B4_774183835ED9",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.62,
   "hfov": 4.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.99
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E3339F8B_F846_1F61_41DF_091D718A2731",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5, this.camera_D7DDBBF0_FDEE_13DD_41CB_F785E7A2D8A3); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.54,
   "pitch": -8.37,
   "yaw": -179.26,
   "image": "this.AnimatedImageResource_DC07E31D_F8C6_0766_41E7_11A974A5BD05",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.26,
   "hfov": 4.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.37
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E3EE104B_F84A_01E2_41E2_6DC6265439FE",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E, this.camera_D7E7FBF0_FDEE_13DD_41E0_B9F0E8D1103A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.61,
   "pitch": -15.45,
   "yaw": -175.69,
   "image": "this.AnimatedImageResource_DC78631D_F8C6_0766_41C0_E939DF204BC3",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.69,
   "hfov": 2.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.45
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E284A805_F85A_0166_41D5_FE3474017F2D",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E, this.camera_CFE82AF5_FDEE_1DC7_41D0_024375E5CC38); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "viewer_uidCC4219DB_FDEE_1FC3_41EA_7B91C0394D8E",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "transitionDuration": 500,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingRight": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "ViewerArea84550"
 }
},
{
 "items": [
  {
   "hfov": 4.25,
   "pitch": -12.88,
   "yaw": 7.47,
   "image": "this.AnimatedImageResource_DC727593_FD16_1443_41E0_807ADEDD1BBD",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.47,
   "hfov": 4.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.88
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E4A3FA93_FD7A_1C5C_41EC_CEB65ECDBBD7",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741, this.camera_D78FFC3E_FDEE_1445_41D9_8A4F37659F4E); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.93,
   "pitch": -10.84,
   "yaw": -176,
   "image": "this.AnimatedImageResource_DC75F593_FD16_1443_41D0_F725F93E92D8",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176,
   "hfov": 2.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.84
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E466DE49_FD7A_74CF_41E8_5E3F115339B8",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446, this.camera_D7816C3E_FDEE_1445_41D0_C353249803A6); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.4,
   "pitch": 3.81,
   "yaw": -39.83,
   "image": "this.AnimatedImageResource_DC756593_FD16_1443_41D9_A35611F14CF9",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.83,
   "hfov": 2.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.81
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E462F0DF_FD76_0DC3_41E0_12079B3A9E36",
 "data": {
  "label": "Info 02"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E490AE6F_FD6E_14C3_41DB_072101F62C94, {'iconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'paddingBottom':5,'iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingTop':5,'borderColor':'#000000','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, this.ImageResource_DC25C5B2_FD16_145D_41E2_0C08C857AFFD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.93,
   "pitch": -9.59,
   "yaw": -1.6,
   "image": "this.AnimatedImageResource_CE93235E_F84E_07E3_41E6_8C51B9C62948",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.6,
   "hfov": 2.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.59
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D594FC4B_F846_01E1_41E3_61EA8E7C4A74",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 5.35,
   "pitch": -12.35,
   "yaw": -168.59,
   "image": "this.AnimatedImageResource_CE92835E_F84E_07E3_41EB_8BCEA3476961",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.59,
   "hfov": 5.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.35
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_C9B600A0_F846_015F_41E4_2FC2B5D290C8",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC, this.camera_D7BEBC24_FDEE_1445_41EB_1BE2F7AA00E9); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.49,
   "pitch": -11.76,
   "yaw": -3.73,
   "image": "this.AnimatedImageResource_DC05231D_F8C6_0766_41AE_F27DE8D53993",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.73,
   "hfov": 4.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.76
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E41B7857_F84E_01E1_41E3_56EE9E1563E6",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829, this.camera_CCD5BA2A_FDEE_1C4C_41EA_CBE87F8DAF0B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.46,
   "pitch": -13.6,
   "yaw": 77.81,
   "image": "this.AnimatedImageResource_DC05831D_F8C6_0766_4150_C9A3CA08EC10",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 77.81,
   "hfov": 4.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.6
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E40D12F0_F84E_06BF_41DC_7610CC1C2100",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51, this.camera_CCE2FA1A_FDEE_1C4D_41E4_24AB7947EAFB); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.55,
   "pitch": -7.06,
   "yaw": 160.83,
   "image": "this.AnimatedImageResource_DC05C31D_F8C6_0766_41EC_69B9955756A5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.83,
   "hfov": 4.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.06
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E4BB4E91_F84E_0161_41DF_33667F56383A",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5, this.camera_CCC16A49_FDEE_1CCF_41EB_0C827E197CDF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.56,
   "pitch": -6.54,
   "yaw": -170.28,
   "image": "this.AnimatedImageResource_DC04331D_F8C6_0766_41E3_0D8D3512B197",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.28,
   "hfov": 4.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.54
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E4803176_F84E_03A3_41E5_2A2DCA209928",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80, this.camera_CCCCCA39_FDEE_1C4F_41E5_A752088EBAFF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 6.31,
   "pitch": -14.61,
   "yaw": 8.26,
   "image": "this.AnimatedImageResource_CD4A1F7B_FD16_14C3_41EA_26D49B1E8BDF",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.26,
   "hfov": 6.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.61
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DFF0EB40_FD2A_1C3D_4167_6C3FFAD68770",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9, this.camera_D706ABD1_FDEE_13DC_41DD_828FB402982A); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 3.6,
   "pitch": -16.06,
   "yaw": -160.96,
   "image": "this.AnimatedImageResource_CD4AFF7E_FD16_14C5_41DB_07E2F76F34D2",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.96,
   "hfov": 3.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.06
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DE774ECD_FD2E_15C7_41D8_4901F0D878BF",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8, this.camera_D702CBD1_FDEE_13DC_41BF_31DEA802B333); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.82,
   "pitch": -10.59,
   "yaw": -3.2,
   "image": "this.AnimatedImageResource_DC749593_FD16_1443_41EE_0C68E6E7D310",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.2,
   "hfov": 2.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.59
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E6F23E26_FD6A_1445_41E5_8B04C77F0906",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140, this.camera_D7F42BE0_FDEE_13FD_41E0_A9000EC3F393); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.75,
   "pitch": -10.67,
   "yaw": -176.47,
   "image": "this.AnimatedImageResource_DC747593_FD16_1443_41E1_47CD8237E4C4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.47,
   "hfov": 4.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.67
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E6C07FAB_FD6B_F443_41D9_A5C4382AFE6D",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90, this.camera_D7F2EBE0_FDEE_13FD_41E5_6FD1DF09801B); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.07,
   "pitch": -7.74,
   "yaw": 2.09,
   "image": "this.AnimatedImageResource_C3889833_F846_01A2_41E0_60415008F34A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.09,
   "hfov": 4.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.74
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_C97CAA00_F87A_015E_41C5_5D5805861A98",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D093029E_F85E_0162_41DA_6815D43B6956, this.camera_CF14DAD6_FDEE_1DC5_41A4_E60917E4DFD1); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.63,
   "pitch": -6.75,
   "yaw": -159.16,
   "image": "this.AnimatedImageResource_C3892833_F846_01A2_41E9_1A864C08D0EB",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.16,
   "hfov": 2.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.75
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_C9C4B5D6_F87A_02E2_41C1_953A58315FB1",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 5.04,
   "pitch": -4.29,
   "yaw": 73.65,
   "image": "this.AnimatedImageResource_C3895833_F846_01A2_41C7_903EBDB12CCC",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.65,
   "hfov": 5.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.29
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_C9F8C1D5_F87E_02E1_41DD_E09FAF0B580C",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_C84D4770_F87E_0FBE_41E5_2449C50FA4A6, {'iconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'paddingBottom':5,'iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingTop':5,'borderColor':'#000000','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 4.27,
   "pitch": -15.38,
   "yaw": 0.34,
   "image": "this.AnimatedImageResource_DC6F0593_FD16_1443_41DD_89ED25802034",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.34,
   "hfov": 4.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.38
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E9C6ACD3_FD76_15C3_41E6_F4B2CA4F98F2",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB, this.camera_D7D88BFF_FDEE_13C3_41E6_27BF1870BFE8); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "items": [
  {
   "hfov": 2.96,
   "pitch": -16.62,
   "yaw": 173.67,
   "image": "this.AnimatedImageResource_DC6EE593_FD16_1443_41DA_9825CEE1CCAB",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.67,
   "hfov": 2.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.62
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EBAFDA70_FD7A_1CDD_41CD_CB9541B3BF41",
 "data": {
  "label": "Arrow 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F, this.camera_D7D6ABFF_FDEE_13C3_41DF_C078F4C9F0F6); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_D83E5239_F8DE_01A1_41E2_92AEE4B33327",
  "this.IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054"
 ],
 "id": "Container_D83E6239_F8DE_01A1_41E6_78C235396A58",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "top": "0%",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": "100%",
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "visible": false,
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "propagateClick": true,
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_D83E1239_F8DE_01A1_41E5_88196F100AEF",
  "this.IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A"
 ],
 "id": "Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC",
 "scrollBarVisible": "rollOver",
 "width": 330,
 "scrollBarMargin": 2,
 "right": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": "100%",
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "propagateClick": false,
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "id": "Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6",
 "left": "4.24%",
 "maxWidth": 553,
 "width": "16.364%",
 "maxHeight": 1044,
 "url": "skin/Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6.png",
 "borderSize": 0,
 "paddingRight": 0,
 "top": "1.54%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": "6.836%",
 "minWidth": 1,
 "class": "Image",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image75720"
 },
 "shadow": false
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD491F7B_FD16_14C3_41E9_71E02FD5D308"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD49FF7B_FD16_14C3_41E0_8FCA5C3A7D2A"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CE9CF35D_F84E_07E1_41E0_101F2E7A926F"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_CE8EB380_F83A_075E_41D0_154C7C857A98"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC732593_FD16_1443_41E3_F25D26BF7548"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC728593_FD16_1443_41E6_7DCB441AA0FE"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CE9C535E_F84E_07E3_41D9_D02B257628F2"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CE9C335E_F84E_07E3_41E6_93C9AB7D0121"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC78D31D_F8C6_0766_41EC_C514FC835798"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC07131D_F8C6_0766_41E6_8F53B4690547"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC00031D_F8C6_0766_41E3_C640371472C3"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC00431D_F8C6_0766_4163_A6633DB7C0B2"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC00831D_F8C6_0766_41C4_14E88D8CFFF2"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC00E31D_F8C6_0766_41C1_B5B78EA94EA3"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC75A593_FD16_1443_41E8_C08BED78D6C5"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC751593_FD16_1443_41E1_B0A4205EE97D"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_C38BD832_F846_01A2_41E6_299B6E04C3FD"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_C3885832_F846_01A2_41E5_90BB42AF8C45"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4E7F7E_FD16_14C5_41DB_734E66C00746"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4EEF7E_FD16_14C5_41DF_40207F6CFC8D"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4C0F7E_FD16_14C5_41CA_58F3EE6A0F16"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4CFF7E_FD16_14C5_41E0_5CEBD7EFA98D"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC71A593_FD16_1443_41E2_585EB0C15DE0"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC715593_FD16_1443_41E7_FBCFCF566AB7"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC6E4593_FD16_1443_41B1_45545916FCDA"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC6E3593_FD16_1443_41C1_B0374C60D139"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CE93935E_F84E_07E3_41D6_677503CD38E2"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CE93735E_F84E_07E3_41EC_B606819DBADA"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CE91B35E_F84E_07E3_41BC_11B787D7DD91"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CE91635E_F84E_07E3_41E5_EC9CA43C9906"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC04631D_F8C6_0766_41EA_472AE719EDA5"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC04C31D_F8C6_0766_41E6_54F2EB65368D"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4D0F7E_FD16_14C5_41E7_2E8A90846DBB"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4D8F7E_FD16_14C5_41E0_F661303D6CCD"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC77A593_FD16_1443_41B5_113355C73433"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC73C593_FD16_1443_41CD_CFA984217730"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC73B593_FD16_1443_41D7_AE6A95014FC7"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC06431D_F8C6_0766_41E9_2F6B612F49B6"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC06831D_F8C6_0766_41D7_26F8E980C5AF"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC06F31D_F8C6_0766_41E2_A760CB10BED8"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC6C5593_FD16_1443_41EB_6161E2A0071C"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_C389C833_F846_01A2_41E8_674914BE09D6"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD77EF7B_FD16_14C3_41B9_BB60CDB93F1E"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_CD485F7B_FD16_14C3_41A9_9A0AC0EB316F"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC02331D_F8C6_0766_41D1_ACE059955DDA"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC02731D_F8C6_0766_41DD_BC73691E7992"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC02C31D_F8C6_0766_41D6_DFB47224AFD5"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC74C593_FD16_1443_41CD_42A1C340AA70"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC723593_FD16_1443_41B1_917A8FBB6FD5"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CE92635E_F84E_07E3_41EE_15C53B8D7E1C"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CE91C35E_F84E_07E3_41E1_0CA5C100D1DB"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC01131D_F8C6_0766_41D6_CA411A49AEAC"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC01731D_F8C6_0766_41E3_0F8BC33EEC00"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC01B31D_F8C6_0766_41C3_636FDC0E309B"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC70D593_FD16_1443_41E5_7377804412AD"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC704593_FD16_1443_41C1_064C00C89CD8"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4DDF7E_FD16_14C5_4197_C49A46B17EB0"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4E6F7E_FD16_14C5_41EC_E1D0AAD49DA7"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4B0F7E_FD16_14C5_41D6_2CEF3FC726FB"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4BFF7E_FD16_14C5_41E1_8F34832306E0"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC0F431D_F8C6_0766_41E6_8202E9606D4C"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_DC0F831D_F8C6_0766_41E1_6DC3E9AB38E9"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_DB610A81_F8C6_015E_41E9_F7397B5A0FBE"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_DB7EFA81_F8C6_015E_41E7_BAE5327639C4"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_DB7E0A81_F8C6_015E_41E4_0D59A767A48D"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_DB7FFA81_F8C6_015E_41BB_060A4484E589"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_DB7C9A81_F8C6_015E_41EB_78E5E3B9A313"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_8_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_DB7C7A81_F8C6_015E_41B7_E73CD435E714"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_9_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_DB7DFA81_F8C6_015E_41B7_F7905D405F53"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC6C3593_FD16_1443_41EC_3FA1ACCE31BD"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC6FB593_FD16_1443_41E4_B2F54E3055D0"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD481F7B_FD16_14C3_41E4_A053BC758C50"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD48AF7B_FD16_14C3_41C4_76B8D70D7F6A"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC03031D_F8C6_0766_41B9_DB99F65DA10B"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC03731D_F8C6_0766_41BF_7AE9E48D8B9D"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC03A31D_F8C6_0766_419C_4259CDED36DF"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC07431D_F8C6_0766_4159_FA1AA73442F8"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC07B31D_F8C6_0766_41B4_774183835ED9"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC07E31D_F8C6_0766_41E7_11A974A5BD05"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC78631D_F8C6_0766_41C0_E939DF204BC3"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC727593_FD16_1443_41E0_807ADEDD1BBD"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC75F593_FD16_1443_41D0_F725F93E92D8"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_DC756593_FD16_1443_41D9_A35611F14CF9"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CE93235E_F84E_07E3_41E6_8C51B9C62948"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CE92835E_F84E_07E3_41EB_8BCEA3476961"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC05231D_F8C6_0766_41AE_F27DE8D53993"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC05831D_F8C6_0766_4150_C9A3CA08EC10"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC05C31D_F8C6_0766_41EC_69B9955756A5"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC04331D_F8C6_0766_41E3_0D8D3512B197"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4A1F7B_FD16_14C3_41EA_26D49B1E8BDF"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_CD4AFF7E_FD16_14C5_41DB_07E2F76F34D2"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC749593_FD16_1443_41EE_0C68E6E7D310"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC747593_FD16_1443_41E1_47CD8237E4C4"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_C3889833_F846_01A2_41E0_60415008F34A"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_C3892833_F846_01A2_41E9_1A864C08D0EB"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41,
 "id": "AnimatedImageResource_C3895833_F846_01A2_41C7_903EBDB12CCC"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC6F0593_FD16_1443_41DD_89ED25802034"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "frameDuration": 62,
 "id": "AnimatedImageResource_DC6EE593_FD16_1443_41DA_9825CEE1CCAB"
},
{
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "id": "Container_D83E5239_F8DE_01A1_41E2_92AEE4B33327",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": 36,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "top": "0%",
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "Container black"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054",
 "left": 10,
 "maxWidth": 80,
 "maxHeight": 80,
 "width": 50,
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "40%",
 "top": "40%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC, true, 0, this.effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16, 'showEffect', false); this.setComponentVisibility(this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "mode": "push",
 "minWidth": 1,
 "class": "IconButton",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054.png",
 "rollOverIconURL": "skin/IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054_rollover.png",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "children": [
  "this.Container_D83E0239_F8DE_01A1_41D0_F56FFF66140C"
 ],
 "id": "Container_D83E1239_F8DE_01A1_41E5_88196F100AEF",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "90%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "Container"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A",
 "width": 50,
 "right": 9,
 "maxHeight": 50,
 "maxWidth": 50,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "40%",
 "bottom": "40%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC, false, 0, this.effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0, 'hideEffect', false); this.setComponentVisibility(this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58, true, 0, this.effect_4983BDE0_570B_E541_41B3_32D6394D0ACC, 'showEffect', false)",
 "mode": "push",
 "minWidth": 1,
 "class": "IconButton",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A.png",
 "rollOverIconURL": "skin/IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A_rollover.png",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false
},
{
 "backgroundColorRatios": [
  0.11
 ],
 "propagateClick": true,
 "children": [
  "this.Image_D83FF239_F8DE_01A1_41E8_88289901D50C",
  "this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB",
  "this.Container_D83CF239_F8DE_01A1_41C9_AB076235A8E0",
  "this.Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D",
  "this.Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D",
  "this.Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385",
  "this.Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4",
  "this.Container_D83F1239_F8DE_01A1_41D9_12715517E333",
  "this.Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7"
 ],
 "id": "Container_D83E0239_F8DE_01A1_41D0_F56FFF66140C",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 40,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "paddingLeft": 40,
 "top": "0%",
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "paddingTop": 40,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "scrollBarOpacity": 0.68,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 40,
 "data": {
  "name": "- Buttons set"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "id": "Image_D83FF239_F8DE_01A1_41E8_88289901D50C",
 "left": "0%",
 "maxWidth": 1095,
 "width": "100%",
 "maxHeight": 1095,
 "url": "skin/Image_D83FF239_F8DE_01A1_41E8_88289901D50C.png",
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minHeight": 30,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "25%",
 "minWidth": 40,
 "class": "Image",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "propagateClick": true,
 "data": {
  "name": "Image Company"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_D83FD239_F8DE_01A1_41EB_F702C37C1EC3",
  "this.Button_D83FC239_F8DE_01A1_41E1_F6D3D0F13731",
  "this.Container_D83FB239_F8DE_01A1_41D1_DD7782C73A51",
  "this.Button_D83FA239_F8DE_01A1_41D6_194EBE0D2616",
  "this.Container_D83F9239_F8DE_01A1_41A4_5D0E0A77149D",
  "this.Button_D83F8239_F8DE_01A1_41E1_76FC118CAE45",
  "this.Container_D83F7239_F8DE_01A1_41C0_0443DA8D3FC3",
  "this.Button_D83F6239_F8DE_01A1_41E3_A895FDF814B9",
  "this.Container_D83F5239_F8DE_01A1_41C1_51CBD66A5270",
  "this.Button_D83F4239_F8DE_01A1_41B5_28F3F291CA5F",
  "this.Container_D83F3239_F8DE_01A1_41E5_BF45B4748C56",
  "this.Button_D83F2239_F8DE_01A1_41DB_D384749A91D3",
  "this.Container_D83F1239_F8DE_01A1_41D2_0E8D22A7A304"
 ],
 "id": "Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "right": "0%",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "bottom": "26%",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "26%",
 "verticalAlign": "middle",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "layout": "vertical",
 "propagateClick": true,
 "data": {
  "name": "-Level 1"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_D83CE239_F8DE_01A1_41ED_667EE3235A14",
  "this.HTMLText_D83CD239_F8DE_01A1_41D9_0860B2AF7FB3",
  "this.Container_D83CC239_F8DE_01A1_41EE_85DF1A123FF2",
  "this.Container_D83C7239_F8DE_01A1_41D1_F44EDA364441"
 ],
 "id": "Container_D83CF239_F8DE_01A1_41C9_AB076235A8E0",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "bottom": "0%",
 "height": 130,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "bottom",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "gap": 5,
 "layout": "vertical",
 "propagateClick": true,
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "children": [
  "this.Button_D83C1239_F8DE_01A1_41D6_558AD54762AD",
  "this.Container_D83C0239_F8DE_01A1_41EE_BD3BD7A9642D",
  "this.Container_D83DF239_F8DE_01A1_4198_547846E01F95",
  "this.Button_D83DE239_F8DE_01A1_41B4_6E9C69515E17"
 ],
 "id": "Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "25%",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "visible": false,
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "layout": "vertical",
 "propagateClick": true,
 "data": {
  "name": "-Level 2-1"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "children": [
  "this.Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D",
  "this.Container_D83CA239_F8DE_01A1_41BC_B2761C1F2FC7",
  "this.Container_D83C9239_F8DE_01A1_41DC_8AFD484DE6D7",
  "this.Button_D83C8239_F8DE_01A1_41DF_711BF6E51B6A"
 ],
 "id": "Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "25%",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "visible": false,
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "layout": "vertical",
 "propagateClick": true,
 "data": {
  "name": "-Level 2-2"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "children": [
  "this.Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F",
  "this.Container_D83F4239_F8DE_01A1_41E4_ED596ADEA119",
  "this.Container_D83F3239_F8DE_01A1_41A1_4852C78B3F11",
  "this.Button_D83F2239_F8DE_01A1_41D9_732F6E60A6E7"
 ],
 "id": "Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "25%",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "visible": false,
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "layout": "vertical",
 "propagateClick": true,
 "data": {
  "name": "-Level 2-3"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "children": [
  "this.Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4",
  "this.Container_D83FE239_F8DE_01A1_41D3_FBDA8CA40BC4",
  "this.Container_D83FD239_F8DE_01A1_41CD_E150A46E78BB",
  "this.Button_D83FC239_F8DE_01A1_41ED_A362839BA01E"
 ],
 "id": "Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "25%",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "visible": false,
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "layout": "vertical",
 "propagateClick": true,
 "data": {
  "name": "-Level 2-4"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "children": [
  "this.Button_D83F0239_F8DE_01A1_41EE_30315EC39D44",
  "this.Container_D83CF239_F8DE_01A1_41A0_7990D06A16E5",
  "this.Container_D83CE239_F8DE_01A1_41C8_03BE266C9216",
  "this.Button_D83CB239_F8DE_01A1_41E1_E9E00A4EBA21",
  "this.Button_D83CA239_F8DE_01A1_41E0_2A57361F3EEB",
  "this.Button_D83C9239_F8DE_01A1_41C7_9FD986659EA7",
  "this.Button_D83C8239_F8DE_01A1_41ED_1459DB6FE1FA",
  "this.Button_D83C7239_F8DE_01A1_41E8_81BD8A73CC3E",
  "this.Button_D83C6239_F8DE_01A1_41EC_FD9BEA80D5C6",
  "this.Button_D83C5239_F8DE_01A1_41D0_A8EA4615E52A",
  "this.Button_D83C4239_F8DE_01A1_41EC_75CFF5ABCA12"
 ],
 "id": "Container_D83F1239_F8DE_01A1_41D9_12715517E333",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "25%",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "visible": false,
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "layout": "vertical",
 "propagateClick": true,
 "data": {
  "name": "-Level 2-5"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "children": [
  "this.Button_D83C0239_F8DE_01A1_41C4_33122759A932",
  "this.Container_D83DE239_F8DE_01A1_41E3_BF8402B43AD2",
  "this.Container_D83DD239_F8DE_01A1_41C9_1AE732875272",
  "this.Button_D83DC239_F8DE_01A1_41D3_5AF86AEFD7DE"
 ],
 "id": "Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "25%",
 "scrollBarWidth": 10,
 "bottom": "25%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "visible": false,
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "layout": "vertical",
 "propagateClick": true,
 "data": {
  "name": "-Level 2-6"
 },
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83FD239_F8DE_01A1_41EB_F702C37C1EC3",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button Tour Info"
 },
 "iconWidth": 32,
 "id": "Button_D83FC239_F8DE_01A1_41E1_F6D3D0F13731",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "label": "44c >",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_2A237CC9_317A_007D_4176_36E090D2269C, 'hideEffect', false); this.setComponentVisibility(this.Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D, true, 0, this.effect_1A65691F_310E_0014_41BF_C2605660352F, 'showEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83FB239_F8DE_01A1_41D1_DD7782C73A51",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button Panorama List"
 },
 "iconWidth": 32,
 "id": "Button_D83FA239_F8DE_01A1_41D6_194EBE0D2616",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 23,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "label": "44b >",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D, true, 0, this.effect_F2D95D32_FD1A_145D_41DF_3B15A8774774, 'showEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_EDE31937_FD1A_1C43_41E4_B1DB0E7241B4, 'hideEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83F9239_F8DE_01A1_41A4_5D0E0A77149D",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button Location"
 },
 "iconWidth": 32,
 "id": "Button_D83F8239_F8DE_01A1_41E1_76FC118CAE45",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "label": "36 >",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_112869ED_311E_0034_41C2_70A247245BB7, 'hideEffect', false); this.setComponentVisibility(this.Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385, true, 0, this.effect_18BBC752_310E_006C_41B5_0D8B802FB057, 'showEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "pressedLabel": "Inserdt Text",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83F7239_F8DE_01A1_41C0_0443DA8D3FC3",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button Floorplan"
 },
 "iconWidth": 32,
 "id": "Button_D83F6239_F8DE_01A1_41E3_A895FDF814B9",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "label": "ortho >",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB, 'hideEffect', false); this.setComponentVisibility(this.Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4, true, 0, this.effect_163FEAB2_310E_002C_416A_B20913F49C44, 'showEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83F5239_F8DE_01A1_41C1_51CBD66A5270",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button Photoalbum"
 },
 "iconWidth": 32,
 "id": "Button_D83F4239_F8DE_01A1_41B5_28F3F291CA5F",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "label": "Panel >",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_164A1542_310E_006C_41C8_B7C2AB9D709D, 'hideEffect', false); this.setComponentVisibility(this.Container_D83F1239_F8DE_01A1_41D9_12715517E333, true, 0, this.effect_19F0E9E8_310A_003B_41C2_00E6E4570ABD, 'showEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83F3239_F8DE_01A1_41E5_BF45B4748C56",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button Contact"
 },
 "iconWidth": 32,
 "id": "Button_D83F2239_F8DE_01A1_41DB_D384749A91D3",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 50,
 "verticalAlign": "middle",
 "label": "Direksi kit >",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_18885C2A_310A_003C_41B2_9B60A3A66C9F, 'hideEffect', false); this.setComponentVisibility(this.Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7, true, 0, this.effect_1622AA86_310A_00F4_41A8_DBA0885BA83A, 'showEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83F1239_F8DE_01A1_41D2_0E8D22A7A304",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "id": "Container_D83CE239_F8DE_01A1_41ED_667EE3235A14",
 "scrollBarVisible": "rollOver",
 "width": 40,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 2,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "horizontal",
 "paddingBottom": 0,
 "data": {
  "name": "blue line"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "id": "HTMLText_D83CD239_F8DE_01A1_41D9_0860B2AF7FB3",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 78,
 "minWidth": 1,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A",
  "this.IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422",
  "this.IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A",
  "this.IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F"
 ],
 "id": "Container_D83CC239_F8DE_01A1_41EE_85DF1A123FF2",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 56,
 "verticalAlign": "bottom",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "gap": 7,
 "layout": "horizontal",
 "propagateClick": false,
 "data": {
  "name": "-Container Icons 1"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112",
  "this.IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC",
  "this.IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237",
  "this.IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1"
 ],
 "id": "Container_D83C7239_F8DE_01A1_41D1_F44EDA364441",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 44,
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "gap": 7,
 "layout": "horizontal",
 "propagateClick": false,
 "data": {
  "name": "-Container Icons 2"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "id": "Button_D83C1239_F8DE_01A1_41D6_558AD54762AD",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 30,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 5,
 "height": 50,
 "verticalAlign": "middle",
 "label": "BACK",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/Button_D83C1239_F8DE_01A1_41D6_558AD54762AD.png",
 "rollOverIconURL": "skin/Button_D83C1239_F8DE_01A1_41D6_558AD54762AD_rollover.png",
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83C0239_F8DE_01A1_41EE_BD3BD7A9642D",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.5,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "id": "Container_D83DF239_F8DE_01A1_4198_547846E01F95",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "propagateClick": true,
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "iconWidth": 32,
 "id": "Button_D83DE239_F8DE_01A1_41B4_6E9C69515E17",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "15 Januari 2026",
 "mode": "push",
 "shadowBlurRadius": 15,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.mainPlayList.set('selectedIndex', 21)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "id": "Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 30,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 5,
 "height": 50,
 "verticalAlign": "middle",
 "label": "BACK",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D, false, 0, this.effect_EDB05026_FD1A_0C44_41EA_7A7383BCF1B7, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_EDB1AC01_FD1E_143F_41E0_CF7D100094DC, 'showEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D.png",
 "rollOverIconURL": "skin/Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D_rollover.png",
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83CA239_F8DE_01A1_41BC_B2761C1F2FC7",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.5,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "id": "Container_D83C9239_F8DE_01A1_41DC_8AFD484DE6D7",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "propagateClick": true,
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "iconWidth": 32,
 "id": "Button_D83C8239_F8DE_01A1_41DF_711BF6E51B6A",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "15 Januari 2026",
 "mode": "push",
 "shadowBlurRadius": 15,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.mainPlayList.set('selectedIndex', 34)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "id": "Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 30,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 5,
 "height": 50,
 "verticalAlign": "middle",
 "label": "BACK",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F.png",
 "rollOverIconURL": "skin/Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F_rollover.png",
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83F4239_F8DE_01A1_41E4_ED596ADEA119",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.5,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "id": "Container_D83F3239_F8DE_01A1_41A1_4852C78B3F11",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "propagateClick": true,
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "iconWidth": 32,
 "id": "Button_D83F2239_F8DE_01A1_41D9_732F6E60A6E7",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "15 Januari 2026",
 "mode": "push",
 "shadowBlurRadius": 15,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "id": "Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 30,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 5,
 "height": 50,
 "verticalAlign": "middle",
 "label": "BACK",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4.png",
 "rollOverIconURL": "skin/Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4_rollover.png",
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83FE239_F8DE_01A1_41D3_FBDA8CA40BC4",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.5,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "id": "Container_D83FD239_F8DE_01A1_41CD_E150A46E78BB",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "propagateClick": true,
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "iconWidth": 32,
 "id": "Button_D83FC239_F8DE_01A1_41ED_A362839BA01E",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "Soon",
 "mode": "push",
 "shadowBlurRadius": 15,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "id": "Button_D83F0239_F8DE_01A1_41EE_30315EC39D44",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 30,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 5,
 "height": 50,
 "verticalAlign": "middle",
 "label": "BACK",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83F1239_F8DE_01A1_41D9_12715517E333, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/Button_D83F0239_F8DE_01A1_41EE_30315EC39D44.png",
 "rollOverIconURL": "skin/Button_D83F0239_F8DE_01A1_41EE_30315EC39D44_rollover.png",
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83CF239_F8DE_01A1_41A0_7990D06A16E5",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.5,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "id": "Container_D83CE239_F8DE_01A1_41C8_03BE266C9216",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "propagateClick": true,
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "iconWidth": 32,
 "id": "Button_D83CB239_F8DE_01A1_41E1_E9E00A4EBA21",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "7 Desember 2025",
 "mode": "push",
 "shadowBlurRadius": 15,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.showPopupImage(this.ImageResource_D64A6F82_FDFA_743C_41E8_60EAE178AD5D, null, '90%', '90%', this.FadeInEffect_D64A5F82_FDFA_743C_41C8_4D4FE867A3C6, this.FadeOutEffect_D64ABF82_FDFA_743C_41E9_D223E5A0B06A, {'iconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'paddingBottom':5,'iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingTop':5,'borderColor':'#000000','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, null, null, false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button text 2"
 },
 "iconWidth": 32,
 "id": "Button_D83CA239_F8DE_01A1_41E0_2A57361F3EEB",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 23,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "14 Desember 2025",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.showPopupImage(this.ImageResource_D6499F82_FDFA_743C_41E5_ABA7C2DD099F, null, '90%', '90%', this.FadeInEffect_D6498F82_FDFA_743C_41EC_13E1FCDF8A59, this.FadeOutEffect_D649EF82_FDFA_743C_41EE_7633738A8085, {'iconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'paddingBottom':5,'iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingTop':5,'borderColor':'#000000','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, null, null, false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button text 3"
 },
 "iconWidth": 32,
 "id": "Button_D83C9239_F8DE_01A1_41C7_9FD986659EA7",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "21 desember 2025",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.showPopupImage(this.ImageResource_D648DF82_FDFA_743C_41D9_C5C069DDE7ED, null, '90%', '90%', this.FadeInEffect_D6373F82_FDFA_743C_41E2_A2803042A821, this.FadeOutEffect_D6372F82_FDFA_743C_41EF_688A1663F866, {'iconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'paddingBottom':5,'iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingTop':5,'borderColor':'#000000','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, null, null, false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "pressedLabel": "Lorem Ipsum",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button text 4"
 },
 "iconWidth": 32,
 "id": "Button_D83C8239_F8DE_01A1_41ED_1459DB6FE1FA",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "28 Desember 2025",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.showPopupImage(this.ImageResource_D648BF82_FDFA_743C_41A1_7F58460034A1, null, '90%', '90%', this.FadeInEffect_D648AF82_FDFA_743C_41E4_8379F7D70256, this.FadeOutEffect_D6488F82_FDFA_743C_41E7_F117900A198E, {'iconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'paddingBottom':5,'iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingTop':5,'borderColor':'#000000','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, null, null, false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button text 5"
 },
 "iconWidth": 32,
 "id": "Button_D83C7239_F8DE_01A1_41E8_81BD8A73CC3E",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "03 Januari 2025",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.showPopupImage(this.ImageResource_D6379F82_FDFA_743C_41D6_6DC4A9EB32EC, null, '90%', '90%', this.FadeInEffect_D6378F82_FDFA_743C_41B8_24BE91EE0F6A, this.FadeOutEffect_D637FF82_FDFA_743C_41CE_660518019038, {'iconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'paddingBottom':5,'iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingTop':5,'borderColor':'#000000','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, null, null, false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button text 6"
 },
 "iconWidth": 32,
 "id": "Button_D83C6239_F8DE_01A1_41EC_FD9BEA80D5C6",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "11 Januari 2025",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.showPopupImage(this.ImageResource_D636DF82_FDFA_743C_41E0_C85A6D9551B8, null, '90%', '90%', this.FadeInEffect_D636CF82_FDFA_743C_41E1_321D30D19850, this.FadeOutEffect_D6353F82_FDFA_743C_41C2_56747B93DE41, {'iconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'paddingBottom':5,'iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingTop':5,'borderColor':'#000000','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, null, null, false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button text 7"
 },
 "iconWidth": 32,
 "id": "Button_D83C5239_F8DE_01A1_41D0_A8EA4615E52A",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "18 Januari 2025",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.showPopupImage(this.ImageResource_D6340F82_FDFA_743C_41DB_990D3E76034C, null, '90%', '90%', this.FadeInEffect_D6347F82_FDFA_743C_41E9_02CE7FC545B4, this.FadeOutEffect_D6346F82_FDFA_743C_41CF_21F01FE38B8F, {'iconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'paddingBottom':5,'iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingTop':5,'borderColor':'#000000','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, null, null, false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button text 8"
 },
 "iconWidth": 32,
 "id": "Button_D83C4239_F8DE_01A1_41EC_75CFF5ABCA12",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "25 Januari 2025",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.showPopupImage(this.ImageResource_D6337F82_FDFA_743C_41D4_B9D14FEA7804, null, '90%', '90%', this.FadeInEffect_D6335F82_FDFA_743C_41CC_00D51ED57F0E, this.FadeOutEffect_D6334F82_FDFA_743C_41CF_B29F67F212C4, {'iconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'paddingBottom':5,'iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingTop':5,'borderColor':'#000000','pressedIconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, null, null, false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "Button <BACK"
 },
 "iconWidth": 30,
 "id": "Button_D83C0239_F8DE_01A1_41C4_33122759A932",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 30,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 5,
 "height": 50,
 "verticalAlign": "middle",
 "label": "BACK",
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/Button_D83C0239_F8DE_01A1_41C4_33122759A932.png",
 "rollOverIconURL": "skin/Button_D83C0239_F8DE_01A1_41C4_33122759A932_rollover.png",
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "rollOverFontFamily": "Oswald",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "id": "Container_D83DE239_F8DE_01A1_41E3_BF8402B43AD2",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": 1,
 "minWidth": 1,
 "class": "Container",
 "backgroundOpacity": 0.5,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "paddingBottom": 0,
 "id": "Container_D83DD239_F8DE_01A1_41C9_1AE732875272",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 8,
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "propagateClick": true,
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "iconWidth": 32,
 "id": "Button_D83DC239_F8DE_01A1_41D3_5AF86AEFD7DE",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "paddingRight": 0,
 "iconHeight": 32,
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "paddingLeft": 10,
 "height": 36,
 "verticalAlign": "middle",
 "label": "15 Januari 2026",
 "mode": "push",
 "shadowBlurRadius": 15,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "class": "Button",
 "iconBeforeLabel": true,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": true,
 "fontWeight": "normal",
 "shadow": false
},
{
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A",
 "maxWidth": 101,
 "maxHeight": 101,
 "width": 44,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 1,
 "class": "IconButton",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A.png",
 "rollOverIconURL": "skin/IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A_rollover.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Info"
 },
 "shadow": false
},
{
 "transparencyActive": false,
 "paddingBottom": 0,
 "id": "IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422",
 "maxWidth": 101,
 "maxHeight": 101,
 "width": 44,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 1,
 "class": "IconButton",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422.png",
 "rollOverIconURL": "skin/IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422_rollover.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Thumblist"
 },
 "shadow": false
},
{
 "transparencyActive": false,
 "paddingBottom": 0,
 "id": "IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A",
 "maxWidth": 101,
 "maxHeight": 101,
 "width": 44,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "click": "this.openLink('https://maps.app.goo.gl/1pubcp9CUWTmDFFbA', '_blank')",
 "mode": "push",
 "minWidth": 1,
 "class": "IconButton",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A.png",
 "rollOverIconURL": "skin/IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A_rollover.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Location"
 },
 "shadow": false
},
{
 "transparencyActive": false,
 "paddingBottom": 0,
 "id": "IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F",
 "maxWidth": 101,
 "maxHeight": 101,
 "width": 44,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 1,
 "class": "IconButton",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F.png",
 "rollOverIconURL": "skin/IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F_rollover.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "shadow": false
},
{
 "transparencyActive": false,
 "paddingBottom": 0,
 "id": "IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112",
 "maxWidth": 101,
 "pressedIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_pressed.png",
 "maxHeight": 101,
 "width": 44,
 "borderSize": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_pressed_rollover.png",
 "height": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "click": "this.openLink('https://www.instagram.com/pjkp_kipp1a?igsh=MXE0NjBhbjdqYzVnaw==', '_blank')",
 "mode": "push",
 "minWidth": 1,
 "class": "IconButton",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112.png",
 "rollOverIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_rollover.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Realtor"
 },
 "shadow": false
},
{
 "transparencyActive": false,
 "paddingBottom": 0,
 "id": "IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC",
 "maxWidth": 101,
 "maxHeight": 101,
 "width": 44,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 1,
 "class": "IconButton",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC.png",
 "rollOverIconURL": "skin/IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC_rollover.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Video"
 },
 "shadow": false
},
{
 "transparencyActive": true,
 "paddingBottom": 0,
 "id": "IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237",
 "maxWidth": 101,
 "maxHeight": 101,
 "width": 44,
 "borderSize": 0,
 "paddingRight": 0,
 "height": 44,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 1,
 "class": "IconButton",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237.png",
 "rollOverIconURL": "skin/IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237_rollover.png",
 "paddingTop": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "shadow": false
},
{
 "transparencyActive": false,
 "paddingBottom": 0,
 "id": "IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1",
 "maxWidth": 101,
 "pressedIconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1_pressed.png",
 "maxHeight": 101,
 "width": 50,
 "borderSize": 0,
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1_pressed_rollover.png",
 "height": 50,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 1,
 "class": "IconButton",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1.png",
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton --"
 },
 "shadow": false
}],
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "data": {
  "name": "Player22681"
 },
 "shadow": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
