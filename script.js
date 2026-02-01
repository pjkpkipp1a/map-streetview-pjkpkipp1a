(function(){
    var script = {
 "start": "this.init()",
 "children": [
  "this.MainViewer",
  "this.Container_D83C8239_F8DE_01A1_41D3_401F7AD1E733",
  "this.IconButton_DC8D8382_F8CA_0763_41EC_64D2A891BD4E",
  "this.Image_CBFC9856_F846_01E3_41EB_804DF5C5CBA6",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "vrPolyfillScale": 1,
 "width": "100%",
 "minHeight": 20,
 "propagateClick": false,
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } }
 },
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Player",
 "paddingTop": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Player22681"
 },
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "definitions": [{
 "duration": 400,
 "to": "left",
 "id": "effect_18885C2A_310A_003C_41B2_9B60A3A66C9F",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -1.18,
   "backwardYaw": -175.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1",
   "distance": 1
  },
  {
   "yaw": 175.08,
   "backwardYaw": -2.07,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1689920B_1886_C7FE_411F_D51C73DB2C58",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (36)",
 "id": "panorama_156B183C_1886_C41A_41A4_F76C57352DB6",
 "thumbnailUrl": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_36D698B8_188E_441A_41A1_328CCD48991C",
  "this.overlay_2B90A240_188E_446A_41AB_B45D91494B9D"
 ]
},
{
 "label": "videoplayback",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_C833CD10_F85A_037F_41D0_B7ECDC9E2312_t.jpg",
 "width": 360,
 "loop": false,
 "id": "video_C833CD10_F85A_037F_41D0_B7ECDC9E2312",
 "class": "Video",
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
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -3.01,
   "backwardYaw": 162.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16305998_1886_441A_4190_E722743BB250",
   "distance": 1
  },
  {
   "yaw": -176.14,
   "backwardYaw": -3.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156BF412_1886_43EE_41B8_7388BC648A66",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (39)",
 "id": "panorama_16882A39_1886_441A_418A_7D40DAC33D36",
 "thumbnailUrl": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2ADB9986_1882_C4F6_41B6_4FE11116EF92",
  "this.overlay_2C6FD2C6_1882_4469_41A6_7D68DE9A60DA"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -175.28,
   "backwardYaw": -1.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156B183C_1886_C41A_41A4_F76C57352DB6",
   "distance": 1
  },
  {
   "yaw": -0.24,
   "backwardYaw": -171.34,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156BF412_1886_43EE_41B8_7388BC648A66",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (37)",
 "id": "panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1",
 "thumbnailUrl": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_282382D8_1882_441A_4195_1E50B0551C3F",
  "this.overlay_2AD9684D_1882_C47B_41A9_0E52227010D3"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21075F03_18FE_7DEF_419F_0EE4F019D655",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21F12EA2_18FE_7C2E_419C_7A96F463F7BB",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.uid5D69ECDC_18FE_7C1A_41B5_A94826E1FDFAMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "player": "this.uid5D69ECDC_18FE_7C1A_41B5_A94826E1FDFAMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_5D513CCE_18FE_7C76_41AC_6EE9A59FEF42",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "FadeInEffect_D64A5F82_FDFA_743C_41C8_4D4FE867A3C6",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_224DAF71_18FE_7C2A_4190_60C9A5286926",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -2.78,
   "backwardYaw": 177.15,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168FA75D_1886_4C1A_4179_20E5706A51BB",
   "distance": 1
  },
  {
   "yaw": 176.62,
   "backwardYaw": -3.01,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16827BBB_1886_441E_4162_A854BDF38582",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (24)",
 "id": "panorama_1568C183_1886_44EE_4198_385289F49EBB",
 "thumbnailUrl": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3C054828_1881_C43A_41A9_07DC8D88239C",
  "this.overlay_3C6E7D76_18BE_7C16_4191_FF9DAF21B8C4"
 ]
},
{
 "id": "ImageResource_D64A6F82_FDFA_743C_41E8_60EAE178AD5D",
 "class": "ImageResource",
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
 "duration": 500,
 "id": "FadeOutEffect_D6488F82_FDFA_743C_41E7_F117900A198E",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EB43D68_18FE_7C3A_4191_205CB952E0FC",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "duration": 500,
 "id": "FadeInEffect_D6373F82_FDFA_743C_41E2_A2803042A821",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22F82F41_18FE_7C6A_41B0_E756FFCA9F3E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_112869ED_311E_0034_41C2_70A247245BB7",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 177.77,
   "backwardYaw": 178.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_15696800_1887_C3EA_4193_41C41E09D840",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (13)",
 "id": "panorama_168F124D_1887_C47A_41B5_269C33A38101",
 "thumbnailUrl": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0133A4B8_1886_4C1A_41B5_5E53D3E54470"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E1F0D92_18FE_7CEE_41A4_E74E8FB6379B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_168F124D_1887_C47A_41B5_269C33A38101_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -156.22,
   "backwardYaw": 3.83,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156981E5_1887_C42A_41A4_E180D09B29AF",
   "distance": 1
  },
  {
   "yaw": -1.06,
   "backwardYaw": -172.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_15698DEA_1887_DC3E_41A7_FF02791C1673",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (6)",
 "id": "panorama_168FB7E7_1887_CC36_4194_4751F0D8A638",
 "thumbnailUrl": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0B1EDD71_1886_DC2A_41A5_EE12BE0FFC85",
  "this.overlay_0E335D74_1886_5C2A_41A3_0A88D6DE288B"
 ]
},
{
 "duration": 500,
 "id": "FadeOutEffect_D6372F82_FDFA_743C_41EF_688A1663F866",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_156B48D6_1886_C416_41AA_F65B64551AB1_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5FDB5DA5_18FE_7C2A_41A6_D1389617FEE3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -18.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -2.07,
   "backwardYaw": 175.08,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156B183C_1886_C41A_41A4_F76C57352DB6",
   "distance": 1
  },
  {
   "yaw": 178.86,
   "backwardYaw": -5.54,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (35)",
 "id": "panorama_1689920B_1886_C7FE_411F_D51C73DB2C58",
 "thumbnailUrl": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3578E74D_1881_CC7A_41B0_8ED19914B1E6",
  "this.overlay_36BA12D2_188E_446E_41B6_01F43ABF1A51",
  "this.overlay_367B368D_188E_CCFA_41A9_B9A725E641D4",
  "this.popup_37DF706D_188E_443A_41A9_D30E26ED17C7"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EE18D41_18FE_7C6A_41AD_B8786BBEE672",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22434F71_18FE_7C2A_41A8_FB0DEB46699A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_D636CF82_FDFA_743C_41E1_321D30D19850",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22609F81_18FE_7CEA_4172_70F9A93B96D8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_164A1542_310E_006C_41C8_B7C2AB9D709D",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_168324A3_1886_4C2E_418A_59482861C34C_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_226A5F81_18FE_7CEA_41B2_AECD6E4A37A6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 10.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22B61F63_18FE_7C2E_41B2_4DED9859C9AD",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 8.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -178.63,
   "backwardYaw": 1.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69",
   "distance": 1
  },
  {
   "yaw": -5.54,
   "backwardYaw": 178.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1689920B_1886_C7FE_411F_D51C73DB2C58",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (34)",
 "id": "panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46",
 "thumbnailUrl": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_34D678DB_1882_441E_4194_E71449EE140F",
  "this.overlay_377345FF_1882_CC16_4192_CAC2C336A0FF"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21D1FE71_18FE_7C2A_4199_2D7A296F1D4E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 177.15,
   "backwardYaw": -2.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1568C183_1886_44EE_4198_385289F49EBB",
   "distance": 1
  },
  {
   "yaw": -1.66,
   "backwardYaw": 178.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1568CD36_1886_BC16_41B1_49A531C59906",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (25)",
 "id": "panorama_168FA75D_1886_4C1A_4179_20E5706A51BB",
 "thumbnailUrl": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3D974FD7_18BE_DC16_41A9_3D34B9652CA6",
  "this.overlay_3DDE9886_18BF_C4F6_41AA_6D8B7C35CCDA"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_D636DF82_FDFA_743C_41E0_C85A6D9551B8",
 "class": "ImageResource",
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
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21E43E94_18FE_7CEA_417E_439695DD05CC",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "id": "effect_EDB1AC01_FD1E_143F_41E0_CF7D100094DC",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 164.16,
   "backwardYaw": -91.54,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16305998_1886_441A_4190_E722743BB250",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16882A39_1886_441A_418A_7D40DAC33D36"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (40)",
 "id": "panorama_156B0092_1886_44EE_4183_C968BB66FCFB",
 "thumbnailUrl": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2B455A42_1886_446E_418C_DF2FDF83D7F5",
  "this.overlay_2E416543_1886_4C6E_41A9_F822C4371301"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D228D10_18FE_7DEA_4191_3A48D02E1632",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 178.18,
   "backwardYaw": -1.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168FA75D_1886_4C1A_4179_20E5706A51BB",
   "distance": 1
  },
  {
   "yaw": 5.28,
   "backwardYaw": 161.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168E9320_1886_C42A_41B4_B34573995015",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (26)",
 "id": "panorama_1568CD36_1886_BC16_41B1_49A531C59906",
 "thumbnailUrl": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3D5C322A_18BE_443E_419D_EAD6C40AD945",
  "this.overlay_305C4CBC_18BE_5C1A_41A5_F7218808CCC2"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21D51E81_18FE_7CEA_4183_68A86BFB4CE3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21F6BEA2_18FE_7C2E_419D_47008FE78333",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 0.35,
   "backwardYaw": 171.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C",
   "distance": 1
  },
  {
   "yaw": 179.37,
   "backwardYaw": 0.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (19)",
 "id": "panorama_168324A3_1886_4C2E_418A_59482861C34C",
 "thumbnailUrl": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_067B9478_1882_4C1A_41AD_6427303A56B0",
  "this.overlay_38870A55_1882_446A_41B0_4A0041DC23CE"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21690EF2_18FE_7C2E_4178_B76D50EB8967",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1568CD36_1886_BC16_41B1_49A531C59906_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2173BEF8_18FE_7C1A_417C_79F83E83A634",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "media": "this.video_C833CD10_F85A_037F_41D0_B7ECDC9E2312",
   "start": "this.viewer_uid5D419CC2_18FE_7C6E_41B4_B63885656F19VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_2580A66A_189E_CC3E_41B3_6EA108F9B64C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_2580A66A_189E_CC3E_41B3_6EA108F9B64C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid5D419CC2_18FE_7C6E_41B4_B63885656F19VideoPlayer)",
   "player": "this.viewer_uid5D419CC2_18FE_7C6E_41B4_B63885656F19VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_2580A66A_189E_CC3E_41B3_6EA108F9B64C",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21308F12_18FE_7DE9_4198_05AD7101F711",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_EDE31937_FD1A_1C43_41E4_B1DB0E7241B4",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowBlurRadius": 6,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "id": "window_3A0B4B11_1886_C5EB_41B6_853DE4B4C97B",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "bodyPaddingRight": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "shadowVerticalLength": 0,
 "modal": true,
 "bodyPaddingTop": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [],
 "closeButtonPaddingTop": 5,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "class": "Window",
 "backgroundColor": [],
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonRollOverBorderColor": "#000000",
 "shadow": true,
 "titlePaddingTop": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "overflow": "scroll",
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingRight": 0,
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "shadowSpread": 1,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid5D419CC2_18FE_7C6E_41B4_B63885656F19"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "closeButtonRollOverBorderSize": 0,
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "footerHeight": 5,
 "paddingRight": 0,
 "titleFontFamily": "Arial",
 "borderSize": 0,
 "headerPaddingBottom": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundOpacity": 0.3,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonPaddingRight": 5,
 "scrollBarMargin": 2,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingTop": 10,
 "closeButtonBorderSize": 0,
 "closeButtonPressedBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "closeButtonBorderRadius": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "layout": "vertical",
 "gap": 10,
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 5,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "titlePaddingBottom": 5,
 "data": {
  "name": "Window52048"
 },
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#888888",
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21C44E71_18FE_7C2A_41A4_E6FB4B4576DF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -174.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22828F41_18FE_7C6A_41A0_B05841084CC7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_211B6F03_18FE_7DEF_41B1_1FC117E4B919",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21CAAE71_18FE_7C2A_4171_3D968347F5C1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_D6499F82_FDFA_743C_41E5_ABA7C2DD099F",
 "class": "ImageResource",
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
 "adjacentPanoramas": [
  {
   "yaw": 178.11,
   "backwardYaw": 177.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168F124D_1887_C47A_41B5_269C33A38101",
   "distance": 1
  },
  {
   "yaw": 0.9,
   "backwardYaw": -172.13,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (14)",
 "id": "panorama_15696800_1887_C3EA_4193_41C41E09D840",
 "thumbnailUrl": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_02175FEB_1882_7C3E_41B7_0FE30E125FD0",
  "this.overlay_021BBD53_1882_BC6F_415D_A9A6792BCE65"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -0.13,
   "backwardYaw": 178.52,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5",
   "distance": 1
  },
  {
   "yaw": -178.97,
   "backwardYaw": -1.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_15689373_1886_442E_41A5_C60E5861D34D",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (17)",
 "id": "panorama_16820952_1886_446E_41AE_05F23CCCD569",
 "thumbnailUrl": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_04257156_188E_4416_41AB_A7AF61A793D7",
  "this.overlay_05C9E0FE_188E_C419_41AD_D38CF5A24964"
 ]
},
{
 "duration": 500,
 "id": "FadeInEffect_D6378F82_FDFA_743C_41B8_24BE91EE0F6A",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21A08EC8_18FE_7C7A_4165_18D53F7C357A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 23.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_168E9320_1886_C42A_41B4_B34573995015_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "id": "FadeOutEffect_D64ABF82_FDFA_743C_41E9_D223E5A0B06A",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -165.49,
   "backwardYaw": -2.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8",
   "distance": 1
  },
  {
   "yaw": 0.46,
   "backwardYaw": 179.04,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1569968F_1887_CCF7_4198_DA5A84100B49",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (10)",
 "id": "panorama_1688209D_1887_C41A_41B2_DBB714B12D2E",
 "thumbnailUrl": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D657C0C_1882_43FA_41B0_155460B88351",
  "this.overlay_0ED6B055_1882_C46A_41A3_B07937B5E01D"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -159.32,
   "backwardYaw": -5.76,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156B2077_1886_C416_41A8_AC103B733ACF",
   "distance": 1
  },
  {
   "yaw": 1.69,
   "backwardYaw": -178.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (33)",
 "id": "panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69",
 "thumbnailUrl": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_33163C3E_1882_FC16_4192_AC3D2AC4C226",
  "this.overlay_34E4AB1C_1882_441A_41A2_DCD0B5E4F812"
 ]
},
{
 "hfovMax": 130,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "01 Februari (12)",
 "id": "panorama_15699C8B_1887_DCFE_4194_E680CC078165",
 "thumbnailUrl": "media/panorama_15699C8B_1887_DCFE_4194_E680CC078165_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21481ED6_18FE_7C16_41B2_F5F011E929C0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21BF2ED6_18FE_7C16_41A0_270DD2AB03E0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -1.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.22,
 "hideDuration": 500,
 "yaw": -49.4,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_37DF706D_188E_443A_41A9_D30E26ED17C7",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_37DF706D_188E_443A_41A9_D30E26ED17C7_0_3.jpg",
    "width": 713,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.74,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "yaw": -5.76,
   "backwardYaw": -159.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69",
   "distance": 1
  },
  {
   "yaw": 165.08,
   "backwardYaw": -4.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (32)",
 "id": "panorama_156B2077_1886_C416_41A8_AC103B733ACF",
 "thumbnailUrl": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3399A668_1881_CC3A_41AA_D1E05E73DD8C",
  "this.overlay_33DAA172_1882_442E_416A_AE2E6594B5C6"
 ]
},
{
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
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
 "label": "dirkeet copy",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "thumbnailUrl": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_t.png",
 "width": 6549,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "id": "map_E1CB5A89_F85E_016E_41B9_415C953116A9",
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "height": 3552,
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
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -171.34,
   "backwardYaw": -0.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1",
   "distance": 1
  },
  {
   "yaw": -3.11,
   "backwardYaw": -176.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16882A39_1886_441A_418A_7D40DAC33D36",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (38)",
 "id": "panorama_156BF412_1886_43EE_41B8_7388BC648A66",
 "thumbnailUrl": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_285600B9_1882_441A_41B7_04126CDD2C87",
  "this.overlay_2BFF365E_1883_CC16_41A4_525AB31A3B23"
 ]
},
{
 "movementMode": "constrained",
 "id": "uid5D69ECDC_18FE_7C1A_41B5_A94826E1FDFAMapPlayer",
 "class": "MapPlayer"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EA44D60_18FE_7C2A_41B7_56030BA72959",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EC07D2F_18FE_7C36_41B4_849B55697A80",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "id": "effect_1622AA86_310A_00F4_41A8_DBA0885BA83A",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "duration": 500,
 "id": "FadeOutEffect_D6353F82_FDFA_743C_41C2_56747B93DE41",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 161.67,
   "backwardYaw": 5.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1568CD36_1886_BC16_41B1_49A531C59906",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (27)",
 "id": "panorama_168E9320_1886_C42A_41B4_B34573995015",
 "thumbnailUrl": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3E68164D_1881_CC7A_41B3_675E7A0F2B18"
 ]
},
{
 "hfovMax": 130,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "DJI_0077",
 "id": "panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E",
 "thumbnailUrl": "media/panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_16827BBB_1886_441E_4162_A854BDF38582_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22CF6F2A_18FE_7C3E_41B1_4E2273E250C2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_15696800_1887_C3EA_4193_41C41E09D840_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5ECAED34_18FE_7C2A_41B0_B8743412E175",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -1.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_D6340F82_FDFA_743C_41DB_990D3E76034C",
 "class": "ImageResource",
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
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_D648AF82_FDFA_743C_41E4_8379F7D70256",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_16820952_1886_446E_41AE_05F23CCCD569_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -2.7,
   "backwardYaw": 169.43,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156B74D9_1886_CC1A_4192_3178A8595DBB",
   "distance": 1
  },
  {
   "yaw": -169.79,
   "backwardYaw": 0.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156B48D6_1886_C416_41AA_F65B64551AB1",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (29)",
 "id": "panorama_16817E88_1886_DCFA_41A8_B2F3277D9627",
 "thumbnailUrl": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_30AAD2D2_1881_C46E_41B2_8B4C7157D1C3",
  "this.overlay_3038C9BE_1886_4416_4198_0E60581F782A"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2182AEB2_18FE_7C2E_419E_A3ECDD011D63",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -17.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 178.52,
   "backwardYaw": -0.13,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16820952_1886_446E_41AE_05F23CCCD569",
   "distance": 1
  },
  {
   "yaw": 0.35,
   "backwardYaw": 179.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168324A3_1886_4C2E_418A_59482861C34C",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (18)",
 "id": "panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5",
 "thumbnailUrl": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_05294423_1881_CC2E_41B4_C096782BE368",
  "this.overlay_063FCC0F_1882_43F6_41B0_E2A4955E356F"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_156B2077_1886_C416_41A8_AC103B733ACF_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "yaw": -37.56,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.3,
 "autoplay": true,
 "id": "popup_3AB499D5_1886_C46A_41B0_5F47535A40D5",
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "pitch": -15.55,
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 360,
  "class": "VideoResource",
  "height": 640,
  "mp4Url": "media/video_C833CD10_F85A_037F_41D0_B7ECDC9E2312.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -154.86,
   "backwardYaw": 0.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9",
   "distance": 1
  },
  {
   "yaw": -2.47,
   "backwardYaw": -165.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1688209D_1887_C41A_41B2_DBB714B12D2E",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (9)",
 "id": "panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8",
 "thumbnailUrl": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0DDA1E76_1882_DC29_41B3_E26224795DB9",
  "this.overlay_0D338E28_1882_5C3A_418B_0350FA7EEB48"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22A2AF5C_18FE_7C1A_417D_2B614EB5F88C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_15699C8B_1887_DCFE_4194_E680CC078165"
  },
  {
   "yaw": 179.04,
   "backwardYaw": 0.46,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1688209D_1887_C41A_41B2_DBB714B12D2E",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (11)",
 "id": "panorama_1569968F_1887_CCF7_4198_DA5A84100B49",
 "thumbnailUrl": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0EE10094_1881_C4EA_41A8_42A569472A51",
  "this.overlay_0E3851AF_189E_4436_418E_978A583AE39C"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D188D06_18FE_7DF6_41A4_99C13D32607E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 25.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -2.43,
   "backwardYaw": 178.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730",
   "distance": 1
  },
  {
   "yaw": 177.18,
   "backwardYaw": -179.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (3)",
 "id": "panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88",
 "thumbnailUrl": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_09D73E5A_188E_DC1E_414D_BA372EAB2FD2",
  "this.overlay_093E1114_1881_C5EA_41A3_C0263E09EB6A"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -179.72,
   "backwardYaw": 177.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (2)",
 "id": "panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74",
 "thumbnailUrl": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0886F1E7_188F_C436_419B_A36340103717"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 179.09,
   "backwardYaw": 2.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0",
   "distance": 1
  },
  {
   "yaw": -3.77,
   "backwardYaw": -165.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16827BBB_1886_441E_4162_A854BDF38582",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (22)",
 "id": "panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F",
 "thumbnailUrl": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3AB68108_1881_C5FA_41A9_90409D9B4452",
  "this.overlay_3D9D34AB_1882_4C3E_41B1_C92C686ACA02"
 ]
},
{
 "duration": 400,
 "id": "effect_F2D95D32_FD1A_145D_41DF_3B15A8774774",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -165.22,
   "backwardYaw": -5.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E",
   "distance": 1
  },
  {
   "yaw": -1.49,
   "backwardYaw": -178.97,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16820952_1886_446E_41AE_05F23CCCD569",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (16)",
 "id": "panorama_15689373_1886_442E_41A5_C60E5861D34D",
 "thumbnailUrl": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_036F40AF_188E_C437_41AF_6C2B997B57C7",
  "this.overlay_04120FA3_188E_7C2F_418B_C4BDC31774AB"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "media": "this.video_C833CD10_F85A_037F_41D0_B7ECDC9E2312",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.panorama_16305998_1886_441A_4190_E722743BB250",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_16305998_1886_441A_4190_E722743BB250_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_156981E5_1887_C42A_41A4_E180D09B29AF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_156981E5_1887_C42A_41A4_E180D09B29AF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_168FB7E7_1887_CC36_4194_4751F0D8A638",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_15698DEA_1887_DC3E_41A7_FF02791C1673",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1688209D_1887_C41A_41B2_DBB714B12D2E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1569968F_1887_CCF7_4198_DA5A84100B49",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1569968F_1887_CCF7_4198_DA5A84100B49_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_15699C8B_1887_DCFE_4194_E680CC078165",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_15699C8B_1887_DCFE_4194_E680CC078165_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_168F124D_1887_C47A_41B5_269C33A38101",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_168F124D_1887_C47A_41B5_269C33A38101_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_15696800_1887_C3EA_4193_41C41E09D840",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_15696800_1887_C3EA_4193_41C41E09D840_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_15689373_1886_442E_41A5_C60E5861D34D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_15689373_1886_442E_41A5_C60E5861D34D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16820952_1886_446E_41AE_05F23CCCD569",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_16820952_1886_446E_41AE_05F23CCCD569_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_168324A3_1886_4C2E_418A_59482861C34C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_168324A3_1886_4C2E_418A_59482861C34C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16827BBB_1886_441E_4162_A854BDF38582",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_16827BBB_1886_441E_4162_A854BDF38582_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1568C183_1886_44EE_4198_385289F49EBB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1568C183_1886_44EE_4198_385289F49EBB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_168FA75D_1886_4C1A_4179_20E5706A51BB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1568CD36_1886_BC16_41B1_49A531C59906",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1568CD36_1886_BC16_41B1_49A531C59906_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_168E9320_1886_C42A_41B4_B34573995015",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_168E9320_1886_C42A_41B4_B34573995015_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_156B48D6_1886_C416_41AA_F65B64551AB1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_156B48D6_1886_C416_41AA_F65B64551AB1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16817E88_1886_DCFA_41A8_B2F3277D9627",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_156B74D9_1886_CC1A_4192_3178A8595DBB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_156B2077_1886_C416_41A8_AC103B733ACF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_156B2077_1886_C416_41A8_AC103B733ACF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1689920B_1886_C7FE_411F_D51C73DB2C58",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_156B183C_1886_C41A_41A4_F76C57352DB6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_156B183C_1886_C41A_41A4_F76C57352DB6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_156BF412_1886_43EE_41B8_7388BC648A66",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_156BF412_1886_43EE_41B8_7388BC648A66_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16882A39_1886_441A_418A_7D40DAC33D36",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_16882A39_1886_441A_418A_7D40DAC33D36_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_156B0092_1886_44EE_4183_C968BB66FCFB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_156B0092_1886_44EE_4183_C968BB66FCFB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2F9145EF_1883_CC36_41B4_7CF987DAE67E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36",
   "camera": "this.panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 154.29,
   "backwardYaw": 13.08,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C",
   "distance": 1
  },
  {
   "yaw": 2.14,
   "backwardYaw": 179.09,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (21)",
 "id": "panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0",
 "thumbnailUrl": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3827644E_1886_CC76_41A8_63EE53E2F6C0",
  "this.overlay_3CB95927_1886_4436_4142_BCE636595F13",
  "this.overlay_39E51266_1886_4436_41A1_F4186B9C0461",
  "this.popup_3AB499D5_1886_C46A_41B0_5F47535A40D5"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2A237CC9_317A_007D_4176_36E090D2269C",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_D6337F82_FDFA_743C_41D4_B9D14FEA7804",
 "class": "ImageResource",
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
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_156B183C_1886_C41A_41A4_F76C57352DB6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "id": "FadeOutEffect_D6346F82_FDFA_743C_41CF_21F01FE38B8F",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -7.49,
   "backwardYaw": 177.93,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156981E5_1887_C42A_41A4_E180D09B29AF",
   "distance": 1
  },
  {
   "yaw": 178.05,
   "backwardYaw": -2.43,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (4)",
 "id": "panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730",
 "thumbnailUrl": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0ACFAE83_1882_BCEE_41AD_15932544DD4C",
  "this.overlay_0A2BEA05_1883_C7EA_4180_ED36B7FB656C"
 ]
},
{
 "duration": 400,
 "id": "effect_18BBC752_310E_006C_41B5_0D8B802FB057",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_15689373_1886_442E_41A5_C60E5861D34D_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21AB1ECE_18FE_7C76_41B4_46C13DFC6C31",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_D6347F82_FDFA_743C_41E9_02CE7FC545B4",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -4.28,
   "backwardYaw": 165.08,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156B2077_1886_C416_41A8_AC103B733ACF",
   "distance": 1
  },
  {
   "yaw": 163.07,
   "backwardYaw": -1.88,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156B74D9_1886_CC1A_4192_3178A8595DBB",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (31)",
 "id": "panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031",
 "thumbnailUrl": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_314B4D31_1886_5C2A_4193_B40544C98B2D",
  "this.overlay_34CE23A8_1886_443A_4157_EC9B0A19FC7C"
 ]
},
{
 "duration": 500,
 "id": "FadeOutEffect_D649EF82_FDFA_743C_41EE_7633738A8085",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -3.01,
   "backwardYaw": 176.62,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1568C183_1886_44EE_4198_385289F49EBB",
   "distance": 1
  },
  {
   "yaw": -165.05,
   "backwardYaw": -3.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (23)",
 "id": "panorama_16827BBB_1886_441E_4162_A854BDF38582",
 "thumbnailUrl": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3BCFF774_1882_4C2A_4189_CC05B056485F",
  "this.overlay_3CF31BB4_1882_C42A_41AD_E434C0E7311D",
  "this.overlay_3E1BBA5C_1882_C41A_415D_5704A4430AD8",
  "this.popup_3F4589FC_1882_C41A_4184_38291BD824D3"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1568C183_1886_44EE_4198_385289F49EBB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E964D5A_18FE_7C1E_41B8_78590945B636",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_156B0092_1886_44EE_4183_C968BB66FCFB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EEA5D47_18FE_7C76_4196_CC1E05F8EEF6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_16882A39_1886_441A_418A_7D40DAC33D36_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E708D82_18FE_7CEE_41B7_F667DDAAD90B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_16305998_1886_441A_4190_E722743BB250_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "id": "effect_19F0E9E8_310A_003B_41C2_00E6E4570ABD",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_228FFF51_18FE_7C6A_41AF_E19B3A922B51",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22C4CF23_18FE_7C2E_41A3_F834A6DB84DA",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "id": "effect_1A65691F_310E_0014_41BF_C2605660352F",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_213BEF23_18FE_7C2E_4192_B4C437FB987E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -1.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 0.58,
   "backwardYaw": -169.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16817E88_1886_DCFA_41A8_B2F3277D9627",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (28)",
 "id": "panorama_156B48D6_1886_C416_41AA_F65B64551AB1",
 "thumbnailUrl": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3FF3B69A_1882_4C1E_41A0_D47955D0DB7B"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_215C3EE2_18FE_7C2E_4190_6B5F4E181169",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 162.84,
   "backwardYaw": -3.01,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16882A39_1886_441A_418A_7D40DAC33D36",
   "distance": 1
  },
  {
   "yaw": -91.54,
   "backwardYaw": 164.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_156B0092_1886_44EE_4183_C968BB66FCFB",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (1)",
 "id": "panorama_16305998_1886_441A_4190_E722743BB250",
 "thumbnailUrl": "media/panorama_16305998_1886_441A_4190_E722743BB250_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16305998_1886_441A_4190_E722743BB250_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2B03A212_1881_C7EE_4185_C059EFEF0016",
  "this.overlay_2BFB5029_1886_C43A_41B0_5A28FB49DA1E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -5.48,
   "backwardYaw": -165.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_15689373_1886_442E_41A5_C60E5861D34D",
   "distance": 1
  },
  {
   "yaw": -172.13,
   "backwardYaw": 0.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_15696800_1887_C3EA_4193_41C41E09D840",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (15)",
 "id": "panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E",
 "thumbnailUrl": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_03B5C725_1882_4C2A_41B0_E0770CBF51A2",
  "this.overlay_033E78B1_1882_C42A_4197_2E90BA156749"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21B4AED3_18FE_7C6E_4176_848463928071",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -1.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "DJI_0087",
 "id": "panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36",
 "thumbnailUrl": "media/panorama_2F79A756_1882_CC16_41B4_65CCA9D79D36_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "duration": 500,
 "id": "FadeOutEffect_D6334F82_FDFA_743C_41CF_B29F67F212C4",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E017D82_18FE_7CEE_41A8_065A2F5A58C0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21DEFE91_18FE_7CEA_417B_8E47C4A5D93D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22AD1F63_18FE_7C2E_4191_8F692F5D490B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D2A0D1C_18FE_7C1A_41A6_100B043BA78A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_156BF412_1886_43EE_41B8_7388BC648A66_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_218ACEB2_18FE_7C2E_4186_130B53792187",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21536EE2_18FE_7C2E_41B2_47081691A30B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 1.56,
 "hideDuration": 500,
 "yaw": 54.87,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_3F4589FC_1882_C41A_4184_38291BD824D3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3F4589FC_1882_C41A_4184_38291BD824D3_0_0.jpg",
    "width": 315,
    "class": "ImageResourceLevel",
    "height": 657
   },
   {
    "url": "media/popup_3F4589FC_1882_C41A_4184_38291BD824D3_0_1.jpg",
    "width": 245,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -14.72,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22DBDF32_18FE_7C2E_41B3_C4486C411C7F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -1.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "id": "effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5D374D29_18FE_7C3A_41B6_487DCC872E35",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 169.43,
   "backwardYaw": -2.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16817E88_1886_DCFA_41A8_B2F3277D9627",
   "distance": 1
  },
  {
   "yaw": -1.88,
   "backwardYaw": 163.07,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (30)",
 "id": "panorama_156B74D9_1886_CC1A_4192_3178A8595DBB",
 "thumbnailUrl": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_30646539_1886_CC1A_41A0_95B2D8F3AB35",
  "this.overlay_3325E55E_1887_CC16_41B0_8D2062CB214D"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21100F03_18FE_7DEF_41B1_CA05B7085180",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 20.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 13.08,
   "backwardYaw": 154.29,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0",
   "distance": 1
  },
  {
   "yaw": 171.77,
   "backwardYaw": 0.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168324A3_1886_4C2E_418A_59482861C34C",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (20)",
 "id": "panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C",
 "thumbnailUrl": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_38ED6746_1882_4C76_4192_E1856CE5FED9",
  "this.overlay_39ABB534_1886_4C2A_41A5_77333ADCAB24"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22E20F32_18FE_7C2E_41A5_038C5E2D8CDF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 177.93,
   "backwardYaw": -7.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730",
   "distance": 1
  },
  {
   "yaw": 3.83,
   "backwardYaw": -156.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168FB7E7_1887_CC36_4194_4751F0D8A638",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (5)",
 "id": "panorama_156981E5_1887_C42A_41A4_E180D09B29AF",
 "thumbnailUrl": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0A775D2F_1882_DC36_41B5_294F61D15046",
  "this.overlay_0E9098CA_1881_C47E_4184_DFBC30A2F1E0"
 ]
},
{
 "id": "ImageResource_D6379F82_FDFA_743C_41D6_6DC4A9EB32EC",
 "class": "ImageResource",
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
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_156981E5_1887_C42A_41A4_E180D09B29AF_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_D6335F82_FDFA_743C_41CC_00D51ED57F0E",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1569968F_1887_CCF7_4198_DA5A84100B49_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21EB0E94_18FE_7CEA_419B_FDF952942CFC",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "id": "effect_163FEAB2_310E_002C_416A_B20913F49C44",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21278F12_18FE_7DE9_41B8_A541163A6F4B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_217C8EF8_18FE_7C1A_41B2_DBE0A53C882D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E3D3D9A_18FE_7C1E_419F_FBFB37FC933A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -16.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5ED70D3B_18FE_7C1E_4177_19E0241439A3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 2.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 3.05,
   "backwardYaw": -177.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9",
   "distance": 1
  },
  {
   "yaw": -172.99,
   "backwardYaw": -1.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_168FB7E7_1887_CC36_4194_4751F0D8A638",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (7)",
 "id": "panorama_15698DEA_1887_DC3E_41A7_FF02791C1673",
 "thumbnailUrl": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0CC5E5FB_1887_CC1E_41B7_562ABFD91579",
  "this.overlay_0FBCA69F_1886_CC16_41A8_5B0F767C12B3"
 ]
},
{
 "items": [
  {
   "begin": "this.uid5D69ECDC_18FE_7C1A_41B5_A94826E1FDFAMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "player": "this.uid5D69ECDC_18FE_7C1A_41B5_A94826E1FDFAMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_5D516CCE_18FE_7C76_4179_85D9421F7A4A",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 0.74,
   "backwardYaw": -154.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8",
   "distance": 1
  },
  {
   "yaw": -177.9,
   "backwardYaw": 3.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_15698DEA_1887_DC3E_41A7_FF02791C1673",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "01 Februari (8)",
 "id": "panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9",
 "thumbnailUrl": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D98807E_1886_4419_41B6_B942528FB800",
  "this.overlay_0D97B4BD_1882_4C1A_41AA_84BEF7D379A4"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21DB5E81_18FE_7CEA_418E_6D3C4664DBED",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -25.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "id": "effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5EF8DD4D_18FE_7C7A_41AE_AC58E82AD103",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_15699C8B_1887_DCFE_4194_E680CC078165_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2197BEC2_18FE_7C6E_41B7_D20FEDA25F68",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 172.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E89DD54_18FE_7C6A_4197_9C354CC5357E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "id": "FadeOutEffect_D637FF82_FDFA_743C_41CE_660518019038",
 "easing": "cubic_out",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_D648BF82_FDFA_743C_41A1_7F58460034A1",
 "class": "ImageResource",
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
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E0F6D82_18FE_7CEE_41B5_9E246D8CF006",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E52CD73_18FE_7C2E_41B3_A86363844BC4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_D648DF82_FDFA_743C_41D9_C5C069DDE7ED",
 "class": "ImageResource",
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
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22967F51_18FE_7C6A_4189_8794530DDD72",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -166.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "height": 3072,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "DJI_0061",
 "id": "panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2",
 "thumbnailUrl": "media/panorama_2396FB1B_1887_C41E_41B6_5D2CC5DE96E2_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E601D73_18FE_7C2E_418C_F969BA4ADF89",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_EDB05026_FD1A_0C44_41EA_7A7383BCF1B7",
 "easing": "quad_in",
 "class": "SlideOutEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E2D0D9A_18FE_7C1E_4198_34CEC7E0DC79",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 400,
 "id": "effect_4983BDE0_570B_E541_41B3_32D6394D0ACC",
 "easing": "quad_in",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5FCDFDA5_18FE_7C2A_41A9_FB3450FE2D4A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_25E49679_189E_CC1A_41A0_9B08CBA44A0E",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_37DF706D_188E_443A_41A9_D30E26ED17C7_0_0.jpg",
   "width": 3025,
   "class": "ImageResourceLevel",
   "height": 4339
  },
  {
   "url": "media/popup_37DF706D_188E_443A_41A9_D30E26ED17C7_0_1.jpg",
   "width": 2855,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_37DF706D_188E_443A_41A9_D30E26ED17C7_0_2.jpg",
   "width": 1427,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_37DF706D_188E_443A_41A9_D30E26ED17C7_0_3.jpg",
   "width": 713,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_37DF706D_188E_443A_41A9_D30E26ED17C7_0_4.jpg",
   "width": 356,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5E424D68_18FE_7C3A_41B6_01C99433BFE7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_2256DF71_18FE_7C2A_41AD_FD8638F4304C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_22EF3F41_18FE_7C6A_41A2_86DA0A34CF82",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_21FA7EA2_18FE_7C2E_419A_4F2FCBF4E2CD",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -15.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_D6498F82_FDFA_743C_41EC_13E1FCDF8A59",
 "easing": "cubic_in",
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58",
  "this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC",
  "this.Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6"
 ],
 "id": "Container_D83C8239_F8DE_01A1_41D3_401F7AD1E733",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 330,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "transparencyActive": true,
 "maxHeight": 128,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "IconButton_DC8D8382_F8CA_0763_41EC_64D2A891BD4E",
 "backgroundOpacity": 0,
 "width": 38,
 "paddingRight": 0,
 "right": "0%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "iconURL": "skin/IconButton_DC8D8382_F8CA_0763_41EC_64D2A891BD4E.png",
 "borderSize": 0,
 "toolTip": "Fullscreen",
 "propagateClick": false,
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipTextShadowOpacity": 0,
 "top": "0.44%",
 "minWidth": 1,
 "toolTipBorderColor": "#767676",
 "mode": "toggle",
 "toolTipShadowSpread": 0,
 "class": "IconButton",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": 25,
 "shadow": false,
 "paddingBottom": 0,
 "toolTipFontColor": "#606060",
 "horizontalAlign": "center",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "data": {
  "name": "IconButton1493"
 },
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "maxWidth": 128
},
{
 "maxHeight": 121,
 "id": "Image_CBFC9856_F846_01E3_41EB_804DF5C5CBA6",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "right": "0%",
 "width": "9.955%",
 "borderRadius": 0,
 "url": "skin/Image_CBFC9856_F846_01E3_41EB_804DF5C5CBA6.jpg",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "0.22%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "height": "4.741%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image132788"
 },
 "maxWidth": 480
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bottom": 0,
 "minWidth": 0,
 "class": "UIComponent",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "UIComponent112747"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "class": "ZoomImage",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [],
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage112748"
 },
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "CloseButton112749"
 },
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "backgroundOpacity": 0.3,
 "paddingLeft": 5,
 "paddingRight": 5,
 "right": 10,
 "borderRadius": 0,
 "iconHeight": 20,
 "borderSize": 0,
 "iconColor": "#000000",
 "propagateClick": false,
 "minHeight": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconLineWidth": 5,
 "mode": "push",
 "fontSize": "1.29vmin",
 "fontColor": "#FFFFFF",
 "class": "CloseButton",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "paddingTop": 5,
 "label": "",
 "fontStyle": "normal",
 "pressedIconColor": "#888888",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 5,
 "horizontalAlign": "center",
 "visible": false,
 "iconBeforeLabel": true,
 "iconWidth": 20,
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1689920B_1886_C7FE_411F_D51C73DB2C58, this.camera_21D51E81_18FE_7CEA_4183_68A86BFB4CE3); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A71660_189E_CC2A_41A3_C73D751B0ADA",
   "yaw": 175.08,
   "pitch": -17.12,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_36D698B8_188E_441A_41A1_328CCD48991C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.62,
   "yaw": 175.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1, this.camera_21D1FE71_18FE_7C2A_4199_2D7A296F1D4E); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A7B660_189E_CC2A_41B4_164184544B40",
   "yaw": -1.18,
   "pitch": -9.27,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2B90A240_188E_446A_41AB_B45D91494B9D",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.77,
   "yaw": -1.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16305998_1886_441A_4190_E722743BB250, this.camera_2182AEB2_18FE_7C2E_419E_A3ECDD011D63); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.55,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A8D669_189E_CC3A_41AA_02C50C1E6F03",
   "yaw": -3.01,
   "pitch": -15.52,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2ADB9986_1882_C4F6_41B6_4FE11116EF92",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.55,
   "yaw": -3.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156BF412_1886_43EE_41B8_7388BC648A66, this.camera_218ACEB2_18FE_7C2E_4186_130B53792187); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A96669_189E_CC3A_41A1_70139FAA2E02",
   "yaw": -176.14,
   "pitch": -17.16,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2C6FD2C6_1882_4469_41A6_7D68DE9A60DA",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.62,
   "yaw": -176.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156B183C_1886_C41A_41A4_F76C57352DB6, this.camera_22AD1F63_18FE_7C2E_4191_8F692F5D490B); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.28,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A6B669_189E_CC3A_41AC_C60663A7FBB9",
   "yaw": -175.28,
   "pitch": -14.46,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_282382D8_1882_441A_4195_1E50B0551C3F",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.28,
   "yaw": -175.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156BF412_1886_43EE_41B8_7388BC648A66, this.camera_22B61F63_18FE_7C2E_41B2_4DED9859C9AD); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A72669_189E_CC3A_41B6_A82677CACA6D",
   "yaw": -0.24,
   "pitch": -8.81,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2AD9684D_1882_C47B_41A9_0E52227010D3",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.92,
   "yaw": -0.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16827BBB_1886_441E_4162_A854BDF38582, this.camera_5E017D82_18FE_7CEE_41A8_065A2F5A58C0); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.51,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BEA660_189E_CC2A_419F_2FBC48AFFC5F",
   "yaw": 176.62,
   "pitch": -15.64,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3C054828_1881_C43A_41A9_07DC8D88239C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.51,
   "yaw": 176.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168FA75D_1886_4C1A_4179_20E5706A51BB, this.camera_5E708D82_18FE_7CEE_41B7_F667DDAAD90B); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BDC660_189E_CC2A_41B5_0AA53E8D9C6C",
   "yaw": -2.78,
   "pitch": -11.27,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3C6E7D76_18BE_7C16_4191_FF9DAF21B8C4",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.12,
   "yaw": -2.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15696800_1887_C3EA_4193_41C41E09D840, this.camera_213BEF23_18FE_7C2E_4192_B4C437FB987E); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_244FA649_189E_CC7A_41AB_3A1420B86485",
   "yaw": 177.77,
   "pitch": -14.48,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0133A4B8_1886_4C1A_41B5_5E53D3E54470",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.25,
   "yaw": 177.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15698DEA_1887_DC3E_41A7_FF02791C1673, this.camera_5E964D5A_18FE_7C1E_41B8_78590945B636); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.73,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E01A60D_1882_CFFB_41B1_7DD9D7148C5F",
   "yaw": -1.06,
   "pitch": -15.03,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0B1EDD71_1886_DC2A_41A5_EE12BE0FFC85",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.73,
   "yaw": -1.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156981E5_1887_C42A_41A4_E180D09B29AF, this.camera_5E89DD54_18FE_7C6A_4197_9C354CC5357E); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E01960D_1882_CFFB_419D_53E55025326D",
   "yaw": -156.22,
   "pitch": -37.47,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0E335D74_1886_5C2A_41A3_0A88D6DE288B",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.88,
   "yaw": -156.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156B183C_1886_C41A_41A4_F76C57352DB6, this.camera_22C4CF23_18FE_7C2E_41A3_F834A6DB84DA); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A67660_189E_CC2A_41B1_4AC7A4C01406",
   "yaw": -2.07,
   "pitch": -8.84,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3578E74D_1881_CC7A_41B0_8ED19914B1E6",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.66,
   "yaw": -2.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46, this.camera_22CF6F2A_18FE_7C3E_41B1_4E2273E250C2); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.31,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A6F660_189E_CC2A_4175_CD2BD25FED08",
   "yaw": 178.86,
   "pitch": -14.56,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_36BA12D2_188E_446E_41B6_01F43ABF1A51",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.31,
   "yaw": 178.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_37DF706D_188E_443A_41A9_D30E26ED17C7, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_25E49679_189E_CC1A_41A0_9B08CBA44A0E, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A76660_189E_CC2A_41AB_F5A868525004",
   "yaw": -49.4,
   "pitch": 6.74,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_367B368D_188E_CCFA_41A9_B9A725E641D4",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.77,
   "yaw": -49.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1689920B_1886_C7FE_411F_D51C73DB2C58, this.camera_5ECAED34_18FE_7C2A_41B0_B8743412E175); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A54660_189E_CC2A_41B6_21859799929B",
   "yaw": -5.54,
   "pitch": -7.89,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_34D678DB_1882_441E_4194_E71449EE140F",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.75,
   "yaw": -5.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69, this.camera_5EC07D2F_18FE_7C36_41B4_849B55697A80); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.9,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A5F660_189E_CC2A_41AB_2AC3127B4543",
   "yaw": -178.63,
   "pitch": -11.88,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_377345FF_1882_CC16_4192_CAC2C336A0FF",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.9,
   "yaw": -178.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1568C183_1886_44EE_4198_385289F49EBB, this.camera_21AB1ECE_18FE_7C76_41B4_46C13DFC6C31); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BE7660_189E_CC2A_41A1_4AB2B8C4530C",
   "yaw": 177.15,
   "pitch": -12.68,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3D974FD7_18BE_DC16_41A9_3D34B9652CA6",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.74,
   "yaw": 177.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1568CD36_1886_BC16_41B1_49A531C59906, this.camera_21B4AED3_18FE_7C6E_4176_848463928071); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BE1660_189E_CC2A_4191_DB12878F1E2C",
   "yaw": -1.66,
   "pitch": -10.62,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3DDE9886_18BF_C4F6_41AA_6D8B7C35CCDA",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -1.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16305998_1886_441A_4190_E722743BB250, this.camera_21CAAE71_18FE_7C2A_4171_3D968347F5C1); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A9C669_189E_CC3A_4193_3D323A706246",
   "yaw": 164.16,
   "pitch": -18.55,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2B455A42_1886_446E_418C_DF2FDF83D7F5",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.58,
   "yaw": 164.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A9B669_189E_CC3A_41A0_BE333A3958FB",
   "yaw": -147,
   "pitch": -9.04,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2E416543_1886_4C6E_41A9_F822C4371301",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.05,
   "yaw": -147,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168FA75D_1886_4C1A_4179_20E5706A51BB, this.camera_5FCDFDA5_18FE_7C2A_41A9_FB3450FE2D4A); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.96,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BE9660_189E_CC2A_41B8_6B594F358186",
   "yaw": 178.18,
   "pitch": -13.76,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3D5C322A_18BE_443E_419D_EAD6C40AD945",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.96,
   "yaw": 178.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168E9320_1886_C42A_41B4_B34573995015, this.camera_5FDB5DA5_18FE_7C2A_41A6_D1389617FEE3); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BF0660_189E_CC2A_41A0_335CBE3378F4",
   "yaw": 5.28,
   "pitch": -13.88,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_305C4CBC_18BE_5C1A_41A5_F7218808CCC2",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.69,
   "yaw": 5.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C, this.camera_5E52CD73_18FE_7C2E_41B3_A86363844BC4); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B39649_189E_CC7A_41A4_9623DFDE6106",
   "yaw": 0.35,
   "pitch": -8.98,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_067B9478_1882_4C1A_41AD_6427303A56B0",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.6,
   "yaw": 0.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5, this.camera_5E601D73_18FE_7C2E_418C_F969BA4ADF89); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B43649_189E_CC7A_4164_77EFF03F39E6",
   "yaw": 179.37,
   "pitch": -10.69,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_38870A55_1882_446A_41B0_4A0041DC23CE",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.4,
   "yaw": 179.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "viewerArea": "this.viewer_uid5D419CC2_18FE_7C6E_41B4_B63885656F19",
 "id": "viewer_uid5D419CC2_18FE_7C6E_41B4_B63885656F19VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid5D419CC2_18FE_7C6E_41B4_B63885656F19",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea112746"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E, this.camera_215C3EE2_18FE_7C2E_4190_6B5F4E181169); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.59,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B05649_189E_CC7A_41AC_BE5246F7000E",
   "yaw": 0.9,
   "pitch": -12.86,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_02175FEB_1882_7C3E_41B7_0FE30E125FD0",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.59,
   "yaw": 0.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168F124D_1887_C47A_41B5_269C33A38101, this.camera_21536EE2_18FE_7C2E_41B2_47081691A30B); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.84,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B0E649_189E_CC7A_41B3_434C94345B14",
   "yaw": 178.11,
   "pitch": -12.79,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_021BBD53_1882_BC6F_415D_A9A6792BCE65",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.84,
   "yaw": 178.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5, this.camera_21BF2ED6_18FE_7C16_41A0_270DD2AB03E0); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.44,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B20649_189E_CC7A_41B4_B64B76D0505C",
   "yaw": -0.13,
   "pitch": -12.49,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_04257156_188E_4416_41AB_A7AF61A793D7",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.44,
   "yaw": -0.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15689373_1886_442E_41A5_C60E5861D34D, this.camera_21481ED6_18FE_7C16_41B2_F5F011E929C0); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.39,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B2D649_189E_CC7A_41AD_64E1A9F76D6A",
   "yaw": -178.97,
   "pitch": -10.49,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_05C9E0FE_188E_C419_41AD_D38CF5A24964",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.39,
   "yaw": -178.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8, this.camera_21EB0E94_18FE_7CEA_419B_FDF952942CFC); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.04,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E06960E_1882_CFF9_416C_3147F64E3D14",
   "yaw": -165.49,
   "pitch": -11.82,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0D657C0C_1882_43FA_41B0_155460B88351",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.04,
   "yaw": -165.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1569968F_1887_CCF7_4198_DA5A84100B49, this.camera_21F12EA2_18FE_7C2E_419C_7A96F463F7BB); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.38,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E07760E_1882_CFF9_417B_7C740C1C62ED",
   "yaw": 0.46,
   "pitch": -16.82,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0ED6B055_1882_C46A_41A3_B07937B5E01D",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.38,
   "yaw": 0.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46, this.camera_5EF8DD4D_18FE_7C7A_41AE_AC58E82AD103); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A45660_189E_CC2A_41B7_EDE5B3088843",
   "yaw": 1.69,
   "pitch": -9.87,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_33163C3E_1882_FC16_4192_AC3D2AC4C226",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.99,
   "yaw": 1.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156B2077_1886_C416_41A8_AC103B733ACF, this.camera_5EEA5D47_18FE_7C76_4196_CC1E05F8EEF6); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A4C660_189E_CC2A_41B4_BC95B956FBD5",
   "yaw": -159.32,
   "pitch": -12.29,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_34E4AB1C_1882_441A_41A2_DCD0B5E4F812",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.82,
   "yaw": -159.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69, this.camera_21100F03_18FE_7DEF_41B1_CA05B7085180); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A33660_189E_CC2A_419A_6CDE81393536",
   "yaw": -5.76,
   "pitch": -9.24,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3399A668_1881_CC3A_41AA_D1E05E73DD8C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.13,
   "yaw": -5.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031, this.camera_211B6F03_18FE_7DEF_41B1_1FC117E4B919); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.56,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A3A660_189E_CC2A_41B5_CBC35D44E345",
   "yaw": 165.08,
   "pitch": -12.41,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_33DAA172_1882_442E_416A_AE2E6594B5C6",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.56,
   "yaw": 165.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "map": {
  "width": 187.85,
  "x": 639.26,
  "height": 173.97,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 532.72
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 635.41,
  "height": 173.97,
  "y": 528.89,
  "width": 187.85,
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
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D2AF3286_F8C6_0162_41C7_6A5C2ECF5FF3",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 1390.36,
  "height": 173.97,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 583.91
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 1387.45,
  "height": 173.97,
  "y": 580.04,
  "width": 187.85,
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
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D04E8287_F8C6_0161_41E3_2ED37AD54CBC",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 2215.38,
  "height": 173.97,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 685.8
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 2211.95,
  "height": 173.97,
  "y": 681.96,
  "width": 187.85,
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
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DDB1012B_F8CA_03A1_41E9_C36807EF9EEB",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 2035.68,
  "height": 173.97,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 1461.15
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 2035.68,
  "height": 173.97,
  "y": 1461.15,
  "width": 187.85,
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
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DEF09978_F9C6_03AF_41D1_17BABFAEF274",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 1827.68,
  "height": 173.97,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 1947.9
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 1827.68,
  "height": 173.97,
  "y": 1947.9,
  "width": 187.85,
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
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DEB34C27_F9C6_01A2_41E6_2C631EEFE6F9",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 2990.51,
  "height": 173.97,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 1187.63
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 2990.51,
  "height": 173.97,
  "y": 1187.63,
  "width": 187.85,
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
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DE784806_F9C6_0162_41E4_2B13E8590359",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 4084.31,
  "height": 173.97,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 1252.61
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 4084.31,
  "height": 173.97,
  "y": 1252.61,
  "width": 187.85,
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
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DE30A456_F9C6_01E2_41DF_1F6D554C5B53",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 5322.01,
  "height": 173.97,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 1382.96
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 5322.01,
  "height": 173.97,
  "y": 1382.96,
  "width": 187.85,
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
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DFEED59E_F9C6_0363_41DD_34BD2F585C96",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 4826.32,
  "height": 173.97,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2240.33
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 4826.32,
  "height": 173.97,
  "y": 2240.33,
  "width": 187.85,
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
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_DF70F6C6_F9C6_0EE3_41E7_2FB78E69660D",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 4070.47,
  "height": 173.97,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2254.04
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 4070.47,
  "height": 173.97,
  "y": 2254.04,
  "width": 187.85,
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
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D0D43436_F9C6_01A2_41D6_8568A8DE73A8",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 3250.67,
  "height": 173.97,
  "offsetX": 0,
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
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2138.41
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 3250.67,
  "height": 173.97,
  "y": 2138.41,
  "width": 187.85,
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
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D0BC6EEE_F9C6_1EA2_41C8_311F02EAE7C5",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1, this.camera_5D2A0D1C_18FE_7C1A_41A6_100B043BA78A); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A7B669_189E_CC3A_4173_AA234B52A4DD",
   "yaw": -171.34,
   "pitch": -10.67,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_285600B9_1882_441A_41B7_04126CDD2C87",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.75,
   "yaw": -171.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16882A39_1886_441A_418A_7D40DAC33D36, this.camera_5D374D29_18FE_7C3A_41B6_487DCC872E35); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A85669_189E_CC3A_41AD_562C4F0B4841",
   "yaw": -3.11,
   "pitch": -8.66,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2BFF365E_1883_CC16_41A4_525AB31A3B23",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.78,
   "yaw": -3.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1568CD36_1886_BC16_41B1_49A531C59906, this.camera_21C44E71_18FE_7C2A_41A4_E6FB4B4576DF); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BFD660_189E_CC2A_41A4_A96D4609F262",
   "yaw": 161.67,
   "pitch": -10.84,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3E68164D_1881_CC7A_41B3_675E7A0F2B18",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.75,
   "yaw": 161.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156B74D9_1886_CC1A_4192_3178A8595DBB, this.camera_22828F41_18FE_7C6A_41A0_B05841084CC7); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A0C660_189E_CC2A_41A0_172AABF6F674",
   "yaw": -2.7,
   "pitch": -18.44,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_30AAD2D2_1881_C46E_41B2_8B4C7157D1C3",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.62,
   "yaw": -2.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156B48D6_1886_C416_41AA_F65B64551AB1, this.camera_228FFF51_18FE_7C6A_41AF_E19B3A922B51); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A17660_189E_CC2A_41AD_54F3B81D5140",
   "yaw": -169.79,
   "pitch": -12.29,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3038C9BE_1886_4416_4198_0E60581F782A",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.72,
   "yaw": -169.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168324A3_1886_4C2E_418A_59482861C34C, this.camera_5EB43D68_18FE_7C3A_4191_205CB952E0FC); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B34649_189E_CC7A_41B6_0717F40B4278",
   "yaw": 0.35,
   "pitch": -9.41,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_05294423_1881_CC2E_41B4_C096782BE368",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.18,
   "yaw": 0.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16820952_1886_446E_41AE_05F23CCCD569, this.camera_5EA44D60_18FE_7C2A_41B7_56030BA72959); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B31649_189E_CC7A_41B6_2C6271B19E68",
   "yaw": 178.52,
   "pitch": -10.08,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_063FCC0F_1882_43F6_41B0_E2A4955E356F",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.91,
   "yaw": 178.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1688209D_1887_C41A_41B2_DBB714B12D2E, this.camera_5E1F0D92_18FE_7CEE_41A4_E74E8FB6379B); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.3,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E06C60E_1882_CFF9_41A1_B37CCB6EF049",
   "yaw": -2.47,
   "pitch": -13.76,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0DDA1E76_1882_DC29_41B3_E26224795DB9",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.3,
   "yaw": -2.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9, this.camera_5E0F6D82_18FE_7CEE_41B5_9E246D8CF006); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.51,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E06A60E_1882_CFF9_41B3_F3F2798FD490",
   "yaw": -154.86,
   "pitch": -10.55,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0D338E28_1882_5C3A_418B_0350FA7EEB48",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.51,
   "yaw": -154.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.55,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E07560E_1882_CFF9_417D_ABC357FE4EE4",
   "yaw": -0.87,
   "pitch": -4.32,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0EE10094_1881_C4EA_41A8_42A569472A51",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -0.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1688209D_1887_C41A_41B2_DBB714B12D2E, this.camera_5E424D68_18FE_7C3A_41B6_01C99433BFE7); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.54,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E07060E_1882_CFF9_4192_1B2EAAC5FF65",
   "yaw": 179.04,
   "pitch": -23.84,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0E3851AF_189E_4436_418E_978A583AE39C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.54,
   "yaw": 179.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730, this.camera_22DBDF32_18FE_7C2E_41B3_C4486C411C7F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E00960D_1882_CFFB_419E_A363C989D77C",
   "yaw": -2.43,
   "pitch": -16.35,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_09D73E5A_188E_DC1E_414D_BA372EAB2FD2",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -2.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74, this.camera_22E20F32_18FE_7C2E_41A5_038C5E2D8CDF); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E01760D_1882_CFFB_41B4_F390D022F57A",
   "yaw": 177.18,
   "pitch": -13.9,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_093E1114_1881_C5EA_41A3_C0263E09EB6A",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.88,
   "yaw": 177.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88, this.camera_21E43E94_18FE_7CEA_417E_439695DD05CC); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E03560B_1882_CFFF_4176_9E9E7D6687B9",
   "yaw": -179.72,
   "pitch": -13.76,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0886F1E7_188F_C436_419B_A36340103717",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.7,
   "yaw": -179.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0, this.camera_22434F71_18FE_7C2A_41A8_FB0DEB46699A); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BCD660_189E_CC2A_41A5_F801D51D8A60",
   "yaw": 179.09,
   "pitch": -15.25,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3AB68108_1881_C5FA_41A9_90409D9B4452",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.79,
   "yaw": 179.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16827BBB_1886_441E_4162_A854BDF38582, this.camera_224DAF71_18FE_7C2A_4190_60C9A5286926); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.81,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BD4660_189E_CC2A_4168_77E09B880D50",
   "yaw": -3.77,
   "pitch": -11.44,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3D9D34AB_1882_4C3E_41B1_C92C686ACA02",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.81,
   "yaw": -3.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E, this.camera_22EF3F41_18FE_7C6A_41A2_86DA0A34CF82); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.01,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B1F649_189E_CC7A_418C_89445468A263",
   "yaw": -165.22,
   "pitch": -8.69,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_036F40AF_188E_C437_41AF_6C2B997B57C7",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.01,
   "yaw": -165.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16820952_1886_446E_41AE_05F23CCCD569, this.camera_22F82F41_18FE_7C6A_41B0_E756FFCA9F3E); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B19649_189E_CC7A_419E_455E87F4AADE",
   "yaw": -1.49,
   "pitch": -8.8,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_04120FA3_188E_7C2F_418B_C4BDC31774AB",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.21,
   "yaw": -1.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F, this.camera_22A2AF5C_18FE_7C1A_417D_2B614EB5F88C); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.09,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B5E649_189E_CC7A_41B3_9F17EEEC82FE",
   "yaw": 2.14,
   "pitch": -10.53,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3827644E_1886_CC76_41A8_63EE53E2F6C0",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.09,
   "yaw": 2.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C, this.camera_22967F51_18FE_7C6A_4189_8794530DDD72); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B59649_189E_CC7A_41AA_351408587372",
   "yaw": 154.29,
   "pitch": -14.01,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3CB95927_1886_4436_4142_BCE636595F13",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.4,
   "yaw": 154.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3AB499D5_1886_C46A_41B0_5F47535A40D5, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, true) } else { this.showPopupMedia(this.window_3A0B4B11_1886_C5EB_41B6_853DE4B4C97B, this.video_C833CD10_F85A_037F_41D0_B7ECDC9E2312, this.PlayList_2580A66A_189E_CC3E_41B3_6EA108F9B64C, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0_HS_2_0.png",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ]
   },
   "pitch": -15.55,
   "yaw": -37.56
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_39E51266_1886_4436_41A1_F4186B9C0461",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.3,
   "yaw": -37.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88, this.camera_21308F12_18FE_7DE9_4198_05AD7101F711); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E01560D_1882_CFFB_419C_FF46453BF99F",
   "yaw": 178.05,
   "pitch": -15.75,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0ACFAE83_1882_BCEE_41AD_15932544DD4C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.74,
   "yaw": 178.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156981E5_1887_C42A_41A4_E180D09B29AF, this.camera_21278F12_18FE_7DE9_41B8_A541163A6F4B); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E01060D_1882_CFFB_41B5_CBCAF9552542",
   "yaw": -7.49,
   "pitch": -30.71,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0A2BEA05_1883_C7EA_4180_ED36B7FB656C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.24,
   "yaw": -7.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156B2077_1886_C416_41A8_AC103B733ACF, this.camera_217C8EF8_18FE_7C1A_41B2_DBE0A53C882D); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.46,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A20660_189E_CC2A_4181_97F13AFF0504",
   "yaw": -4.28,
   "pitch": -16.14,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_314B4D31_1886_5C2A_4193_B40544C98B2D",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.46,
   "yaw": -4.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156B74D9_1886_CC1A_4192_3178A8595DBB, this.camera_21075F03_18FE_7DEF_419F_0EE4F019D655); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A2B660_189E_CC2A_41AE_B5C7B4E554B2",
   "yaw": 163.07,
   "pitch": -17.01,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_34CE23A8_1886_443A_4157_EC9B0A19FC7C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.41,
   "yaw": 163.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F, this.camera_2173BEF8_18FE_7C1A_417C_79F83E83A634); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.65,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BDE660_189E_CC2A_419F_31D35B7634DE",
   "yaw": -165.05,
   "pitch": -12.12,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3BCFF774_1882_4C2A_4189_CC05B056485F",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.65,
   "yaw": -165.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1568C183_1886_44EE_4198_385289F49EBB, this.camera_21690EF2_18FE_7C2E_4178_B76D50EB8967); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.36,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BD8660_189E_CC2A_41B1_EE0F1201D49A",
   "yaw": -3.01,
   "pitch": -11.13,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3CF31BB4_1882_C42A_41AD_E434C0E7311D",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.36,
   "yaw": -3.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3F4589FC_1882_C41A_4184_38291BD824D3, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25BE3660_189E_CC2A_41B3_F18BFA6A1684",
   "yaw": 54.87,
   "pitch": -14.72,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3E1BBA5C_1882_C41A_415D_5704A4430AD8",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.62,
   "yaw": 54.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16817E88_1886_DCFA_41A8_B2F3277D9627, this.camera_226A5F81_18FE_7CEA_41B2_AECD6E4A37A6); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A04660_189E_CC2A_41B3_7A9314B2767B",
   "yaw": 0.58,
   "pitch": -18.74,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3FF3B69A_1882_4C1E_41A0_D47955D0DB7B",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4,
   "yaw": 0.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_156B0092_1886_44EE_4183_C968BB66FCFB, this.camera_21FA7EA2_18FE_7C2E_419A_4F2FCBF4E2CD); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_24495649_189E_CC7A_41B5_24A2A99659B0",
   "yaw": -91.54,
   "pitch": -17.74,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2B03A212_1881_C7EE_4185_C059EFEF0016",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.6,
   "yaw": -91.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16882A39_1886_441A_418A_7D40DAC33D36, this.camera_21F6BEA2_18FE_7C2E_419D_47008FE78333); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.09,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_244AF649_189E_CC7A_41B3_77B0ABEC8636",
   "yaw": 162.84,
   "pitch": -19.52,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2BFB5029_1886_C43A_41B0_5A28FB49DA1E",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.09,
   "yaw": 162.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15696800_1887_C3EA_4193_41C41E09D840, this.camera_22609F81_18FE_7CEA_4172_70F9A93B96D8); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B0B649_189E_CC7A_41A8_C6DCD56964FC",
   "yaw": -172.13,
   "pitch": -12.58,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_03B5C725_1882_4C2A_41B0_E0770CBF51A2",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -172.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15689373_1886_442E_41A5_C60E5861D34D, this.camera_2256DF71_18FE_7C2A_41AD_FD8638F4304C); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B12649_189E_CC7A_41B4_5C07EA7D62AD",
   "yaw": -5.48,
   "pitch": -10.69,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_033E78B1_1882_C42A_4197_2E90BA156749",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.87,
   "yaw": -5.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031, this.camera_5E3D3D9A_18FE_7C1E_419F_FBFB37FC933A); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A1F660_189E_CC2A_4193_E2132E731ADA",
   "yaw": -1.88,
   "pitch": -11.61,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_30646539_1886_CC1A_41A0_95B2D8F3AB35",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.74,
   "yaw": -1.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16817E88_1886_DCFA_41A8_B2F3277D9627, this.camera_5E2D0D9A_18FE_7C1E_4198_34CEC7E0DC79); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25A19660_189E_CC2A_41B1_6E69502E7F77",
   "yaw": 169.43,
   "pitch": -17.92,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3325E55E_1887_CC16_41B0_8D2062CB214D",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.98,
   "yaw": 169.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0, this.camera_21DB5E81_18FE_7CEA_418E_6D3C4664DBED); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 1.81,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B4C649_189E_CC7A_4172_D8735785B135",
   "yaw": 13.08,
   "pitch": -9.62,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_38ED6746_1882_4C76_4192_E1856CE5FED9",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 1.81,
   "yaw": 13.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168324A3_1886_4C2E_418A_59482861C34C, this.camera_21DEFE91_18FE_7CEA_417B_8E47C4A5D93D); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25B54649_189E_CC7A_41A1_F38D0B8E8CB1",
   "yaw": 171.77,
   "pitch": -8.79,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_39ABB534_1886_4C2A_41A5_77333ADCAB24",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.68,
   "yaw": 171.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730, this.camera_2197BEC2_18FE_7C6E_41B7_D20FEDA25F68); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E01E60D_1882_CFFB_419F_E3B52EB866DB",
   "yaw": 177.93,
   "pitch": -11.6,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0A775D2F_1882_DC36_41B5_294F61D15046",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.05,
   "yaw": 177.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168FB7E7_1887_CC36_4194_4751F0D8A638, this.camera_21A08EC8_18FE_7C7A_4165_18D53F7C357A); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E01C60D_1882_CFFB_41AE_8B08EA5073DD",
   "yaw": 3.83,
   "pitch": -18.58,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0E9098CA_1881_C47E_4184_DFBC30A2F1E0",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.37,
   "yaw": 3.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9, this.camera_5ED70D3B_18FE_7C1E_4177_19E0241439A3); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.07,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E06760D_1882_CFFB_41B6_EFB19B45353E",
   "yaw": 3.05,
   "pitch": -13.35,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0CC5E5FB_1887_CC1E_41B7_562ABFD91579",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.07,
   "yaw": 3.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_168FB7E7_1887_CC36_4194_4751F0D8A638, this.camera_5EE18D41_18FE_7C6A_41AD_B8786BBEE672); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.54,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E06560D_1882_CFFB_4198_925E5E7B88C0",
   "yaw": -172.99,
   "pitch": -38.49,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0FBCA69F_1886_CC16_41A8_5B0F767C12B3",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.54,
   "yaw": -172.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8, this.camera_5D188D06_18FE_7DF6_41A4_99C13D32607E); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.52,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E06060D_1882_CFFB_41B8_01E5D37C8B76",
   "yaw": 0.74,
   "pitch": -12.87,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0D98807E_1886_4419_41B6_B942528FB800",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.52,
   "yaw": 0.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15698DEA_1887_DC3E_41A7_FF02791C1673, this.camera_5D228D10_18FE_7DEA_4191_3A48D02E1632); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E06E60D_1882_CFFB_41B6_BD174CCF3762",
   "yaw": -177.9,
   "pitch": -39.18,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0D97B4BD_1882_4C1A_41AA_84BEF7D379A4",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.37,
   "yaw": -177.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "children": [
  "this.Container_D83E5239_F8DE_01A1_41E2_92AEE4B33327",
  "this.IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054"
 ],
 "id": "Container_D83E6239_F8DE_01A1_41E6_78C235396A58",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 66,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_D83E1239_F8DE_01A1_41E5_88196F100AEF",
  "this.IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A"
 ],
 "id": "Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 330,
 "borderRadius": 0,
 "right": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "- EXPANDED"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "maxHeight": 1044,
 "id": "Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6",
 "left": "4.24%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "width": "16.364%",
 "borderRadius": 0,
 "url": "skin/Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6.png",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "1.54%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "height": "6.836%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image75720"
 },
 "maxWidth": 553
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A71660_189E_CC2A_41A3_C73D751B0ADA",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A7B660_189E_CC2A_41B4_164184544B40",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156B183C_1886_C41A_41A4_F76C57352DB6_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A8D669_189E_CC3A_41AA_02C50C1E6F03",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A96669_189E_CC3A_41A1_70139FAA2E02",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16882A39_1886_441A_418A_7D40DAC33D36_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A6B669_189E_CC3A_41AC_C60663A7FBB9",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A72669_189E_CC3A_41B6_A82677CACA6D",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16889E2A_1886_BC3E_4190_8BBBA23562B1_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25BEA660_189E_CC2A_419F_2FBC48AFFC5F",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25BDC660_189E_CC2A_41B5_0AA53E8D9C6C",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1568C183_1886_44EE_4198_385289F49EBB_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_244FA649_189E_CC7A_41AB_3A1420B86485",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168F124D_1887_C47A_41B5_269C33A38101_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E01A60D_1882_CFFB_41B1_7DD9D7148C5F",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E01960D_1882_CFFB_419D_53E55025326D",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168FB7E7_1887_CC36_4194_4751F0D8A638_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A67660_189E_CC2A_41B1_4AC7A4C01406",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A6F660_189E_CC2A_4175_CD2BD25FED08",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_25A76660_189E_CC2A_41AB_F5A868525004",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1689920B_1886_C7FE_411F_D51C73DB2C58_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A54660_189E_CC2A_41B6_21859799929B",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A5F660_189E_CC2A_41AB_2AC3127B4543",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156B5C2C_1886_DC3A_41B4_80051DCDED46_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25BE7660_189E_CC2A_41A1_4AB2B8C4530C",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25BE1660_189E_CC2A_4191_DB12878F1E2C",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168FA75D_1886_4C1A_4179_20E5706A51BB_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A9C669_189E_CC3A_4193_3D323A706246",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A9B669_189E_CC3A_41A0_BE333A3958FB",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156B0092_1886_44EE_4183_C968BB66FCFB_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25BE9660_189E_CC2A_41B8_6B594F358186",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25BF0660_189E_CC2A_41A0_335CBE3378F4",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1568CD36_1886_BC16_41B1_49A531C59906_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B39649_189E_CC7A_41A4_9623DFDE6106",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B43649_189E_CC7A_4164_77EFF03F39E6",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168324A3_1886_4C2E_418A_59482861C34C_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B05649_189E_CC7A_41AC_BE5246F7000E",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B0E649_189E_CC7A_41B3_434C94345B14",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_15696800_1887_C3EA_4193_41C41E09D840_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B20649_189E_CC7A_41B4_B64B76D0505C",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B2D649_189E_CC7A_41AD_64E1A9F76D6A",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16820952_1886_446E_41AE_05F23CCCD569_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E06960E_1882_CFF9_416C_3147F64E3D14",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E07760E_1882_CFF9_417B_7C740C1C62ED",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1688209D_1887_C41A_41B2_DBB714B12D2E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A45660_189E_CC2A_41B7_EDE5B3088843",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A4C660_189E_CC2A_41B4_BC95B956FBD5",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1689E659_1886_CC1B_41AC_D8AADE5C1B69_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A33660_189E_CC2A_419A_6CDE81393536",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A3A660_189E_CC2A_41B5_CBC35D44E345",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156B2077_1886_C416_41A8_AC103B733ACF_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A7B669_189E_CC3A_4173_AA234B52A4DD",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A85669_189E_CC3A_41AD_562C4F0B4841",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156BF412_1886_43EE_41B8_7388BC648A66_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25BFD660_189E_CC2A_41A4_A96D4609F262",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168E9320_1886_C42A_41B4_B34573995015_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A0C660_189E_CC2A_41A0_172AABF6F674",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A17660_189E_CC2A_41AD_54F3B81D5140",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16817E88_1886_DCFA_41A8_B2F3277D9627_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B34649_189E_CC7A_41B6_0717F40B4278",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B31649_189E_CC7A_41B6_2C6271B19E68",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_15689F10_1886_5DEA_41B0_92AC77D6F8D5_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E06C60E_1882_CFF9_41A1_B37CCB6EF049",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E06A60E_1882_CFF9_41B3_F3F2798FD490",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1569BA11_1887_C7EA_41B5_B34413D87FB8_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E07560E_1882_CFF9_417D_ABC357FE4EE4",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E07060E_1882_CFF9_4192_1B2EAAC5FF65",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1569968F_1887_CCF7_4198_DA5A84100B49_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E00960D_1882_CFFB_419E_A363C989D77C",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E01760D_1882_CFFB_41B4_F390D022F57A",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1569B591_1886_4CEB_41AE_D669C8C8CC88_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E03560B_1882_CFFF_4176_9E9E7D6687B9",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1577CFAA_1886_5C3E_41B1_7317AFEB1B74_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25BCD660_189E_CC2A_41A5_F801D51D8A60",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25BD4660_189E_CC2A_4168_77E09B880D50",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1568E61C_1886_4C1A_41A3_F12B27F7501F_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B1F649_189E_CC7A_418C_89445468A263",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B19649_189E_CC7A_419E_455E87F4AADE",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_15689373_1886_442E_41A5_C60E5861D34D_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B5E649_189E_CC7A_41B3_9F17EEEC82FE",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B59649_189E_CC7A_41AA_351408587372",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168CD00F_1886_43F6_41A0_1EDDF9F6C9A0_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E01560D_1882_CFFB_419C_FF46453BF99F",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E01060D_1882_CFFB_41B5_CBCAF9552542",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_168A2B8E_1886_44F6_4173_C3AE7F9B7730_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A20660_189E_CC2A_4181_97F13AFF0504",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A2B660_189E_CC2A_41AE_B5C7B4E554B2",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16885AA0_1886_C42A_41B7_6D1AAE7DE031_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25BDE660_189E_CC2A_419F_31D35B7634DE",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25BD8660_189E_CC2A_41B1_EE0F1201D49A",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_25BE3660_189E_CC2A_41B3_F18BFA6A1684",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_16827BBB_1886_441E_4162_A854BDF38582_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A04660_189E_CC2A_41B3_7A9314B2767B",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156B48D6_1886_C416_41AA_F65B64551AB1_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_24495649_189E_CC7A_41B5_24A2A99659B0",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_244AF649_189E_CC7A_41B3_77B0ABEC8636",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_16305998_1886_441A_4190_E722743BB250_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B0B649_189E_CC7A_41A8_C6DCD56964FC",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B12649_189E_CC7A_41B4_5C07EA7D62AD",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1683BDA9_1887_BC3A_41AB_BF3961E6702E_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A1F660_189E_CC2A_4193_E2132E731ADA",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25A19660_189E_CC2A_41B1_6E69502E7F77",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156B74D9_1886_CC1A_4192_3178A8595DBB_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B4C649_189E_CC7A_4172_D8735785B135",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_25B54649_189E_CC7A_41A1_F38D0B8E8CB1",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1568AA5F_1886_4416_4185_ED0A9E3E8C6C_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E01E60D_1882_CFFB_419F_E3B52EB866DB",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E01C60D_1882_CFFB_41AE_8B08EA5073DD",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_156981E5_1887_C42A_41A4_E180D09B29AF_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E06760D_1882_CFFB_41B6_EFB19B45353E",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E06560D_1882_CFFB_4198_925E5E7B88C0",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_15698DEA_1887_DC3E_41A7_FF02791C1673_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E06060D_1882_CFFB_41B8_01E5D37C8B76",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_0E06E60D_1882_CFFB_41B6_BD174CCF3762",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_1683145D_1887_CC1A_4199_7AA0C7264EC9_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "id": "Container_D83E5239_F8DE_01A1_41E2_92AEE4B33327",
 "left": "0%",
 "backgroundOpacity": 0.4,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 36,
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container black"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "transparencyActive": true,
 "maxHeight": 80,
 "id": "IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 50,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "40%",
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC, true, 0, this.effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16, 'showEffect', false); this.setComponentVisibility(this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "class": "IconButton",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand",
 "maxWidth": 80
},
{
 "children": [
  "this.Container_D83E0239_F8DE_01A1_41D0_F56FFF66140C"
 ],
 "id": "Container_D83E1239_F8DE_01A1_41E5_88196F100AEF",
 "left": "0%",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "borderSize": 0,
 "width": "90%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "transparencyActive": true,
 "maxHeight": 50,
 "id": "IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 9,
 "width": 50,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "40%",
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC, false, 0, this.effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0, 'hideEffect', false); this.setComponentVisibility(this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58, true, 0, this.effect_4983BDE0_570B_E541_41B3_32D6394D0ACC, 'showEffect', false)",
 "class": "IconButton",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand",
 "maxWidth": 50
},
{
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
 "backgroundOpacity": 0.4,
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "paddingRight": 40,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.68,
 "borderRadius": 0,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0.11
 ],
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 40,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 40,
 "horizontalAlign": "left",
 "data": {
  "name": "- Buttons set"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "height": "100%"
},
{
 "maxHeight": 1095,
 "id": "Image_D83FF239_F8DE_01A1_41E8_88289901D50C",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_D83FF239_F8DE_01A1_41E8_88289901D50C.png",
 "propagateClick": true,
 "minHeight": 30,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "0%",
 "minWidth": 40,
 "class": "Image",
 "paddingTop": 0,
 "height": "25%",
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Image Company"
 },
 "maxWidth": 1095
},
{
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
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "right": "0%",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "26%",
 "bottom": "26%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 1"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_D83CE239_F8DE_01A1_41ED_667EE3235A14",
  "this.HTMLText_D83CD239_F8DE_01A1_41D9_0860B2AF7FB3",
  "this.Container_D83CC239_F8DE_01A1_41EE_85DF1A123FF2",
  "this.Container_D83C7239_F8DE_01A1_41D1_F44EDA364441"
 ],
 "id": "Container_D83CF239_F8DE_01A1_41C9_AB076235A8E0",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 5,
 "paddingTop": 0,
 "height": 130,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container footer"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Button_D83C1239_F8DE_01A1_41D6_558AD54762AD",
  "this.Container_D83C0239_F8DE_01A1_41EE_BD3BD7A9642D",
  "this.Container_D83DF239_F8DE_01A1_4198_547846E01F95",
  "this.Button_D83DE239_F8DE_01A1_41B4_6E9C69515E17",
  "this.Button_002A5AFB_1886_C41F_41AE_44E28AA31EDC"
 ],
 "id": "Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "-Level 2-1"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D",
  "this.Container_D83CA239_F8DE_01A1_41BC_B2761C1F2FC7",
  "this.Container_D83C9239_F8DE_01A1_41DC_8AFD484DE6D7",
  "this.Button_D83C8239_F8DE_01A1_41DF_711BF6E51B6A",
  "this.Button_01C8B2FC_1882_441A_418B_3CA1951D6097"
 ],
 "id": "Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "-Level 2-2"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F",
  "this.Container_D83F4239_F8DE_01A1_41E4_ED596ADEA119",
  "this.Container_D83F3239_F8DE_01A1_41A1_4852C78B3F11",
  "this.Button_D83F2239_F8DE_01A1_41D9_732F6E60A6E7",
  "this.Button_0065D137_1887_C416_41B1_9F512B27F386"
 ],
 "id": "Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "-Level 2-3"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4",
  "this.Container_D83FE239_F8DE_01A1_41D3_FBDA8CA40BC4",
  "this.Container_D83FD239_F8DE_01A1_41CD_E150A46E78BB",
  "this.Button_D83FC239_F8DE_01A1_41ED_A362839BA01E"
 ],
 "id": "Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "-Level 2-4"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
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
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "-Level 2-5"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Button_D83C0239_F8DE_01A1_41C4_33122759A932",
  "this.Container_D83DE239_F8DE_01A1_41E3_BF8402B43AD2",
  "this.Container_D83DD239_F8DE_01A1_41C9_1AE732875272",
  "this.Button_D83DC239_F8DE_01A1_41D3_5AF86AEFD7DE",
  "this.Button_D79424DE_FED0_04F6_41EB_CF35D6E8A52B"
 ],
 "id": "Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 0,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "visible": false,
 "data": {
  "name": "-Level 2-6"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_D83FD239_F8DE_01A1_41EB_F702C37C1EC3",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button Tour Info"
 },
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_2A237CC9_317A_007D_4176_36E090D2269C, 'hideEffect', false); this.setComponentVisibility(this.Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D, true, 0, this.effect_1A65691F_310E_0014_41BF_C2605660352F, 'showEffect', false)",
 "id": "Button_D83FC239_F8DE_01A1_41E1_F6D3D0F13731",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "44c >",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83FB239_F8DE_01A1_41D1_DD7782C73A51",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button Panorama List"
 },
 "click": "this.setComponentVisibility(this.Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D, true, 0, this.effect_F2D95D32_FD1A_145D_41DF_3B15A8774774, 'showEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_EDE31937_FD1A_1C43_41E4_B1DB0E7241B4, 'hideEffect', false)",
 "id": "Button_D83FA239_F8DE_01A1_41D6_194EBE0D2616",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "44b >",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "gap": 23,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83F9239_F8DE_01A1_41A4_5D0E0A77149D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button Location"
 },
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_112869ED_311E_0034_41C2_70A247245BB7, 'hideEffect', false); this.setComponentVisibility(this.Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385, true, 0, this.effect_18BBC752_310E_006C_41B5_0D8B802FB057, 'showEffect', false)",
 "id": "Button_D83F8239_F8DE_01A1_41E1_76FC118CAE45",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedLabel": "Inserdt Text",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "36 >",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83F7239_F8DE_01A1_41C0_0443DA8D3FC3",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button Floorplan"
 },
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB, 'hideEffect', false); this.setComponentVisibility(this.Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4, true, 0, this.effect_163FEAB2_310E_002C_416A_B20913F49C44, 'showEffect', false)",
 "id": "Button_D83F6239_F8DE_01A1_41E3_A895FDF814B9",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Video Drone >",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83F5239_F8DE_01A1_41C1_51CBD66A5270",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button Photoalbum"
 },
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_164A1542_310E_006C_41C8_B7C2AB9D709D, 'hideEffect', false); this.setComponentVisibility(this.Container_D83F1239_F8DE_01A1_41D9_12715517E333, true, 0, this.effect_19F0E9E8_310A_003B_41C2_00E6E4570ABD, 'showEffect', false)",
 "id": "Button_D83F4239_F8DE_01A1_41B5_28F3F291CA5F",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Panel >",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83F3239_F8DE_01A1_41E5_BF45B4748C56",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button Contact"
 },
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_18885C2A_310A_003C_41B2_9B60A3A66C9F, 'hideEffect', false); this.setComponentVisibility(this.Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7, true, 0, this.effect_1622AA86_310A_00F4_41A8_DBA0885BA83A, 'showEffect', false)",
 "id": "Button_D83F2239_F8DE_01A1_41DB_D384749A91D3",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Direksi kit >",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83F1239_F8DE_01A1_41D2_0E8D22A7A304",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_D83CE239_F8DE_01A1_41ED_667EE3235A14",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 40,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "top",
 "layout": "horizontal",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minWidth": 1,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "blue line"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "height": 2
},
{
 "id": "HTMLText_D83CD239_F8DE_01A1_41D9_0860B2AF7FB3",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "height": 78,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A",
  "this.IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422",
  "this.IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A",
  "this.IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F"
 ],
 "id": "Container_D83CC239_F8DE_01A1_41EE_85DF1A123FF2",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "gap": 7,
 "paddingTop": 0,
 "height": 56,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 1"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112",
  "this.IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC",
  "this.IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237",
  "this.IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1"
 ],
 "id": "Container_D83C7239_F8DE_01A1_41D1_F44EDA364441",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "gap": 7,
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 2"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "rollOverIconURL": "skin/Button_D83C1239_F8DE_01A1_41D6_558AD54762AD_rollover.png",
 "id": "Button_D83C1239_F8DE_01A1_41D6_558AD54762AD",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "iconURL": "skin/Button_D83C1239_F8DE_01A1_41D6_558AD54762AD.png",
 "borderRadius": 0,
 "width": "100%",
 "iconHeight": 30,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "rollOverFontFamily": "Oswald",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "rollOverFontSize": 18,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83C0239_F8DE_01A1_41EE_BD3BD7A9642D",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_D83DF239_F8DE_01A1_4198_547846E01F95",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "height": 8,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "click": "this.mainPlayList.set('selectedIndex', 43)",
 "id": "Button_D83DE239_F8DE_01A1_41B4_6E9C69515E17",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "15 Januari 2026",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "layout": "horizontal",
 "id": "Button_002A5AFB_1886_C41F_41AE_44E28AA31EDC",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "click": "this.mainPlayList.set('selectedIndex', 28)",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "31 Januari 2026",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D, false, 0, this.effect_EDB05026_FD1A_0C44_41EA_7A7383BCF1B7, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_EDB1AC01_FD1E_143F_41E0_CF7D100094DC, 'showEffect', false)",
 "rollOverIconURL": "skin/Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D_rollover.png",
 "id": "Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "iconURL": "skin/Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D.png",
 "borderRadius": 0,
 "width": "100%",
 "iconHeight": 30,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "rollOverFontFamily": "Oswald",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "rollOverFontSize": 18,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83CA239_F8DE_01A1_41BC_B2761C1F2FC7",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_D83C9239_F8DE_01A1_41DC_8AFD484DE6D7",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "height": 8,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "click": "this.mainPlayList.set('selectedIndex', 42)",
 "id": "Button_D83C8239_F8DE_01A1_41DF_711BF6E51B6A",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "15 Januari 2026",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "layout": "horizontal",
 "id": "Button_01C8B2FC_1882_441A_418B_3CA1951D6097",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "click": "this.mainPlayList.set('selectedIndex', 2)",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "31 Januari 2026",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "rollOverIconURL": "skin/Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F_rollover.png",
 "id": "Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "iconURL": "skin/Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F.png",
 "borderRadius": 0,
 "width": "100%",
 "iconHeight": 30,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "rollOverFontFamily": "Oswald",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "rollOverFontSize": 18,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83F4239_F8DE_01A1_41E4_ED596ADEA119",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_D83F3239_F8DE_01A1_41A1_4852C78B3F11",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "height": 8,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "click": "this.mainPlayList.set('selectedIndex', 41)",
 "id": "Button_D83F2239_F8DE_01A1_41D9_732F6E60A6E7",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "15 Januari 2026",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "layout": "horizontal",
 "id": "Button_0065D137_1887_C416_41B1_9F512B27F386",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "31 Januari 2026",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "rollOverIconURL": "skin/Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4_rollover.png",
 "id": "Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "iconURL": "skin/Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4.png",
 "borderRadius": 0,
 "width": "100%",
 "iconHeight": 30,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "rollOverFontFamily": "Oswald",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "rollOverFontSize": 18,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83FE239_F8DE_01A1_41D3_FBDA8CA40BC4",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_D83FD239_F8DE_01A1_41CD_E150A46E78BB",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "height": 8,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_D83FC239_F8DE_01A1_41ED_A362839BA01E",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Soon",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_D83F1239_F8DE_01A1_41D9_12715517E333, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "rollOverIconURL": "skin/Button_D83F0239_F8DE_01A1_41EE_30315EC39D44_rollover.png",
 "id": "Button_D83F0239_F8DE_01A1_41EE_30315EC39D44",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "iconURL": "skin/Button_D83F0239_F8DE_01A1_41EE_30315EC39D44.png",
 "borderRadius": 0,
 "width": "100%",
 "iconHeight": 30,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "rollOverFontFamily": "Oswald",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "rollOverFontSize": 18,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83CF239_F8DE_01A1_41A0_7990D06A16E5",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_D83CE239_F8DE_01A1_41C8_03BE266C9216",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "height": 8,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "click": "this.showPopupImage(this.ImageResource_D64A6F82_FDFA_743C_41E8_60EAE178AD5D, null, '90%', '90%', this.FadeInEffect_D64A5F82_FDFA_743C_41C8_4D4FE867A3C6, this.FadeOutEffect_D64ABF82_FDFA_743C_41E9_D223E5A0B06A, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, false)",
 "id": "Button_D83CB239_F8DE_01A1_41E1_E9E00A4EBA21",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "7 Desember 2025",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 2"
 },
 "click": "this.showPopupImage(this.ImageResource_D6499F82_FDFA_743C_41E5_ABA7C2DD099F, null, '90%', '90%', this.FadeInEffect_D6498F82_FDFA_743C_41EC_13E1FCDF8A59, this.FadeOutEffect_D649EF82_FDFA_743C_41EE_7633738A8085, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, false)",
 "id": "Button_D83CA239_F8DE_01A1_41E0_2A57361F3EEB",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "14 Desember 2025",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 23,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 3"
 },
 "click": "this.showPopupImage(this.ImageResource_D648DF82_FDFA_743C_41D9_C5C069DDE7ED, null, '90%', '90%', this.FadeInEffect_D6373F82_FDFA_743C_41E2_A2803042A821, this.FadeOutEffect_D6372F82_FDFA_743C_41EF_688A1663F866, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, false)",
 "id": "Button_D83C9239_F8DE_01A1_41C7_9FD986659EA7",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "pressedLabel": "Lorem Ipsum",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "21 desember 2025",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 4"
 },
 "click": "this.showPopupImage(this.ImageResource_D648BF82_FDFA_743C_41A1_7F58460034A1, null, '90%', '90%', this.FadeInEffect_D648AF82_FDFA_743C_41E4_8379F7D70256, this.FadeOutEffect_D6488F82_FDFA_743C_41E7_F117900A198E, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, false)",
 "id": "Button_D83C8239_F8DE_01A1_41ED_1459DB6FE1FA",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "28 Desember 2025",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 5"
 },
 "click": "this.showPopupImage(this.ImageResource_D6379F82_FDFA_743C_41D6_6DC4A9EB32EC, null, '90%', '90%', this.FadeInEffect_D6378F82_FDFA_743C_41B8_24BE91EE0F6A, this.FadeOutEffect_D637FF82_FDFA_743C_41CE_660518019038, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, false)",
 "id": "Button_D83C7239_F8DE_01A1_41E8_81BD8A73CC3E",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "03 Januari 2025",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 6"
 },
 "click": "this.showPopupImage(this.ImageResource_D636DF82_FDFA_743C_41E0_C85A6D9551B8, null, '90%', '90%', this.FadeInEffect_D636CF82_FDFA_743C_41E1_321D30D19850, this.FadeOutEffect_D6353F82_FDFA_743C_41C2_56747B93DE41, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, false)",
 "id": "Button_D83C6239_F8DE_01A1_41EC_FD9BEA80D5C6",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "11 Januari 2025",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 7"
 },
 "click": "this.showPopupImage(this.ImageResource_D6340F82_FDFA_743C_41DB_990D3E76034C, null, '90%', '90%', this.FadeInEffect_D6347F82_FDFA_743C_41E9_02CE7FC545B4, this.FadeOutEffect_D6346F82_FDFA_743C_41CF_21F01FE38B8F, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, false)",
 "id": "Button_D83C5239_F8DE_01A1_41D0_A8EA4615E52A",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "18 Januari 2025",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 8"
 },
 "click": "this.showPopupImage(this.ImageResource_D6337F82_FDFA_743C_41D4_B9D14FEA7804, null, '90%', '90%', this.FadeInEffect_D6335F82_FDFA_743C_41CC_00D51ED57F0E, this.FadeOutEffect_D6334F82_FDFA_743C_41CF_B29F67F212C4, {'iconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'paddingTop':5,'rollOverIconHeight':20,'borderSize':0,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','paddingBottom':5,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','borderColor':'#000000','pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, false)",
 "id": "Button_D83C4239_F8DE_01A1_41EC_75CFF5ABCA12",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "25 Januari 2025",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "click": "this.setComponentVisibility(this.Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "rollOverIconURL": "skin/Button_D83C0239_F8DE_01A1_41C4_33122759A932_rollover.png",
 "id": "Button_D83C0239_F8DE_01A1_41C4_33122759A932",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingRight": 0,
 "iconURL": "skin/Button_D83C0239_F8DE_01A1_41C4_33122759A932.png",
 "borderRadius": 0,
 "width": "100%",
 "iconHeight": 30,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "rollOverFontFamily": "Oswald",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "rollOverFontSize": 18,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "gap": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_D83DE239_F8DE_01A1_41E3_BF8402B43AD2",
 "backgroundOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_D83DD239_F8DE_01A1_41C9_1AE732875272",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "height": 8,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_D83DC239_F8DE_01A1_41D3_5AF86AEFD7DE",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "15 Januari 2026",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_D79424DE_FED0_04F6_41EB_CF35D6E8A52B",
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "iconHeight": 32,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "rollOverShadowBlurRadius": 18,
 "mode": "push",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "27 Januari 2026",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "height": 36,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "transparencyActive": true,
 "maxHeight": 101,
 "id": "IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "id": "IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "id": "IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://maps.app.goo.gl/1pubcp9CUWTmDFFbA', '_blank')",
 "class": "IconButton",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "id": "IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "id": "IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedRollOverIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_pressed_rollover.png",
 "mode": "push",
 "click": "this.openLink('https://www.instagram.com/pjkp_kipp1a?utm_source=qr&igsh=b24wbHdyb3I3a3Vq', '_blank')",
 "class": "IconButton",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_rollover.png",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_pressed.png",
 "data": {
  "name": "IconButton Realtor"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "id": "IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": true,
 "maxHeight": 101,
 "id": "IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 44,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "height": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237_rollover.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "cursor": "hand",
 "maxWidth": 101
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "id": "IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 50,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1.png",
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedRollOverIconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1_pressed_rollover.png",
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "height": 50,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1_pressed.png",
 "visible": false,
 "data": {
  "name": "IconButton --"
 },
 "cursor": "hand",
 "maxWidth": 101
}],
 "height": "100%",
 "desktopMipmappingEnabled": false
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
