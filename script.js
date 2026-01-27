(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3853CDA_FEF0_04FE_41EC_FA258B74F318",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "id": "effect_163FEAB2_310E_002C_416A_B20913F49C44",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 175.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D15B7E3C_FEF0_07BA_41B7_EC7242FCF52A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1690E4C_FEF0_07DA_41E0_41AE43D60912",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -5.2,
   "yaw": 98.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452"
  },
  {
   "backwardYaw": 178.5,
   "yaw": -5.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F34FC663_FE30_07CE_41BF_153D3F77B742"
  },
  {
   "backwardYaw": -5.67,
   "yaw": 176.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0087",
 "id": "panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5",
 "thumbnailUrl": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_t.jpg",
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
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F1E0A105_FE30_3D4A_41E4_49A9C9BF0428",
  "this.overlay_F1C7BEA6_FE30_0756_41EB_F30851E8B428",
  "this.overlay_EB9D6802_FE30_0B49_4115_E688B1EF4F90"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -4.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D0B57D7C_FEF0_05BA_41E0_E90BBE62BD62",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -102.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D10F5E2C_FEF0_075A_41DF_4DA35CA6A930",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -22.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CC673BEA_FEF0_0CDE_41DF_8F293BB48F99",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E33D4901_F846_0361_41EB_B13248C71FFA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "hideDuration": 500,
 "hfov": 4.38,
 "autoplay": true,
 "id": "popup_CBC653AC_F85A_06A7_41E9_425465537D63",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "yaw": -43.19,
 "class": "PopupPanoramaOverlay",
 "pitch": -9.88,
 "video": {
  "width": 360,
  "class": "VideoResource",
  "height": 640,
  "mp4Url": "media/video_C833CD10_F85A_037F_41D0_B7ECDC9E2312.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D12D5E2C_FEF0_075A_41EF_2094EC40EFD6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window40551"
 },
 "id": "window_D8FCCE7D_F8CE_01A6_41DE_92E309BE4ACE",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": 400,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "closeButtonIconHeight": 12,
 "modal": true,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "title": "R Meeting",
 "minWidth": 20,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingTop": 5,
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_D8F8DE7D_F8CE_01A6_41D3_1ACD636C1FE1"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingBottom": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingRight": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyPaddingTop": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonBackgroundColor": [],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 11,
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyPaddingLeft": 5,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "begin": "this.uidCF662B2A_FEF0_0D5E_41DE_756CF46CBA11MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "class": "MapPlayListItem",
   "player": "this.uidCF662B2A_FEF0_0D5E_41DE_756CF46CBA11MapPlayer"
  }
 ],
 "id": "playList_CF481B0A_FEF0_0D5E_41EC_AE6FF780C95D",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -171.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D2642CCA_FEF0_04DE_41E5_F1C8DCA07242",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3554D4B_FEF0_05DE_41D6_43A2956A0736",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_D64A5F82_FDFA_743C_41C8_4D4FE867A3C6",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "id": "effect_EDB1AC01_FD1E_143F_41E0_CF7D100094DC",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "duration": 500,
 "id": "FadeOutEffect_D64ABF82_FDFA_743C_41E9_D223E5A0B06A",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D38C7CEB_FEF0_04DF_41E8_51D68D4D55FA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeOutEffect_D649EF82_FDFA_743C_41EE_7633738A8085",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CCFE6BAA_FEF0_0D5E_41ED_F86C303706DC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3EA9D1B_FEF0_057E_41E6_1059B5853636",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
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
 "adjacentPanoramas": [
  {
   "backwardYaw": -98.22,
   "yaw": 90.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD"
  },
  {
   "backwardYaw": -3.73,
   "yaw": -98.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51"
  },
  {
   "backwardYaw": 175.58,
   "yaw": 175.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0630",
 "id": "panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829",
 "thumbnailUrl": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_t.jpg",
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
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 4178.23,
   "angle": 6.25,
   "y": 1339.6,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_E6E47A19_F83A_016E_41E1_67301B85CC86",
  "this.overlay_E7EB74EC_F83A_02A6_41E1_5B31BF53810B",
  "this.overlay_D943E271_F83A_01A1_41E2_6A9AC7BADEB7",
  "this.overlay_E7B24F9E_F83D_FF62_41E5_B9342B818F2B"
 ]
},
{
 "duration": 500,
 "id": "FadeOutEffect_D637FF82_FDFA_743C_41CE_660518019038",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -6.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CC328BCA_FEF0_0CDE_41E0_2547E525BD95",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600"
  },
  {
   "backwardYaw": -10.89,
   "yaw": -168.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D08EA411_F85E_017E_41E0_BBC8757F163E",
 "thumbnailUrl": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_t.jpg",
 "label": "DJI_0064",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D594FC4B_F846_01E1_41E3_61EA8E7C4A74",
  "this.overlay_C9B600A0_F846_015F_41E4_2FC2B5D290C8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 9.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CCE9CBAA_FEF0_0D5E_41EC_722B0ED5C857",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window40551"
 },
 "id": "window_D9681AE8_F8CE_06AF_41DA_9D5E3FA15C29",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": 400,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "closeButtonIconHeight": 12,
 "modal": true,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "title": "Musholla",
 "minWidth": 20,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingTop": 5,
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_D9685AE8_F8CE_06AF_41DC_073AB348BB0A"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingBottom": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingRight": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyPaddingTop": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonBackgroundColor": [],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 11,
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyPaddingLeft": 5,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.63,
   "yaw": 177.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0084",
 "id": "panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE",
 "thumbnailUrl": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_t.jpg",
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
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DBEA5A08_FD2A_3C4C_41EE_A8C0B893E45F",
  "this.overlay_D5906E02_FD2A_343C_41DB_A5DAED4F7866"
 ]
},
{
 "duration": 400,
 "id": "effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -81.21,
   "yaw": 89.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F05E450D_FE30_055A_41D7_34271D4DE57A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0097",
 "id": "panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC",
 "thumbnailUrl": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_t.jpg",
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
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EE5B381B_FE30_0B7E_41E9_F8A1C57BC933",
  "this.overlay_EC423668_FE30_07DA_41E9_E575F9D4AFAD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CCADDB6A_FEF0_0DDE_41E4_AA9F2AB234EF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "begin": "this.uidCF662B2A_FEF0_0D5E_41DE_756CF46CBA11MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "class": "MapPlayListItem",
   "player": "this.uidCF662B2A_FEF0_0D5E_41DE_756CF46CBA11MapPlayer"
  }
 ],
 "id": "playList_CF487B0A_FEF0_0D5E_41E4_7D1A38C94ABE",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 110.45,
   "yaw": -171.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0631",
 "id": "panorama_E1215927_F846_03A2_41E0_3C86E41E23DD",
 "thumbnailUrl": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_t.jpg",
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
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 1921.61,
   "angle": 185.97,
   "y": 2034.89,
   "class": "PanoramaMapLocation"
  }
 ],
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 162.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3286D3B_FEF0_05BE_41E7_614FB1352BAA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_D6378F82_FDFA_743C_41B8_24BE91EE0F6A",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_164A1542_310E_006C_41C8_B7C2AB9D709D",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -178.17,
   "yaw": -10.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0077",
 "id": "panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905",
 "thumbnailUrl": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_t.jpg",
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
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E216830A_FD3A_0C4D_41EA_AD13F3ACDE2B",
  "this.overlay_E2B2873B_FD36_1443_41E1_AA7DB2A97E5A"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -171.44,
   "yaw": -0.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446"
  },
  {
   "backwardYaw": -4.67,
   "yaw": -163.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0093",
 "id": "panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91",
 "thumbnailUrl": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_t.jpg",
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
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E53D4BB2_FD7E_3C5D_41E2_BDC281C2D7F3",
  "this.overlay_EAAAAC1C_FD7E_7444_41E7_5AF554F06BF6"
 ]
},
{
 "duration": 500,
 "id": "FadeOutEffect_D6353F82_FDFA_743C_41C2_56747B93DE41",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_EDE31937_FD1A_1C43_41E4_B1DB0E7241B4",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "id": "ImageResource_DC25C5B2_FD16_145D_41E2_0C08C857AFFD",
 "class": "ImageResource",
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
 "duration": 400,
 "id": "effect_4983BDE0_570B_E541_41B3_32D6394D0ACC",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "duration": 500,
 "id": "FadeInEffect_D6498F82_FDFA_743C_41EC_13E1FCDF8A59",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeOutEffect_D6372F82_FDFA_743C_41EF_688A1663F866",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 169.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D18D3DEB_FEF0_04DE_41E0_D6F9B27DD959",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
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
 "duration": 400,
 "id": "effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window40551"
 },
 "id": "window_D8F51E85_F8CA_0166_41EC_2E26C441D0AB",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": 400,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "closeButtonIconHeight": 12,
 "modal": true,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "title": "R Kapro",
 "minWidth": 20,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingTop": 5,
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_D8F9EE85_F8CA_0166_41BA_E35C1ED83643"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingBottom": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingRight": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyPaddingTop": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonBackgroundColor": [],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 11,
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyPaddingLeft": 5,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3
},
{
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window40551"
 },
 "id": "window_D85B49BF_F8CA_02A2_41E5_A0E4C700B32E",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": 400,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "closeButtonIconHeight": 12,
 "modal": true,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "title": "R Keuangan",
 "minWidth": 20,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingTop": 5,
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_D85F59BF_F8CA_02A2_41D8_D43ABBD28E21"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingBottom": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingRight": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyPaddingTop": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonBackgroundColor": [],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 11,
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyPaddingLeft": 5,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 74.32,
   "yaw": 83.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452"
  },
  {
   "backwardYaw": 90.59,
   "yaw": 1.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE"
  },
  {
   "backwardYaw": 82.65,
   "yaw": -178.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F34FC663_FE30_07CE_41BF_153D3F77B742"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0089",
 "id": "panorama_F3121C0E_FE30_0B56_41CF_51A65198536F",
 "thumbnailUrl": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_t.jpg",
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
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E91E6A4D_FE30_0FDA_41DA_69516DF752ED",
  "this.overlay_E6D2BB69_FE30_0DDA_41E6_76C071C44E04",
  "this.overlay_E6439C4E_FE30_0BD9_41C3_DF7BDC081FD6"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 178.94,
   "yaw": -175.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0620",
 "id": "panorama_E33D4901_F846_0361_41EB_B13248C71FFA",
 "thumbnailUrl": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_t.jpg",
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
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 729.34,
   "angle": -78.5,
   "y": 615.88,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_E284A805_F85A_0166_41D5_FE3474017F2D"
 ]
},
{
 "duration": 500,
 "id": "FadeInEffect_D6373F82_FDFA_743C_41E2_A2803042A821",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D244ECBA_FEF0_04BE_41D1_964FC7E70C0C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 19.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D148CE3C_FEF0_07BA_41EF_CB4654098C40",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
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
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window40551"
 },
 "id": "window_D93AEA2D_F8CA_01A6_41C1_BA5E174AAA2A",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": 400,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "closeButtonIconHeight": 12,
 "modal": true,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "title": "Pantry",
 "minWidth": 20,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingTop": 5,
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_D9268A2D_F8CA_01A6_418B_46773F1D41B7"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingBottom": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingRight": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyPaddingTop": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonBackgroundColor": [],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 11,
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyPaddingLeft": 5,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -38.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D2074C7A_FEF0_0BBE_41EA_825CE2E02FDE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1930DDB_FEF0_04FE_41D2_D2C538E59E2C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -4.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CCCBEB8A_FEF0_0D5E_41CB_82EA9006D53E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 81.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CCD60B6A_FEF0_0DDE_41C4_814E3510786E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -81.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D13C8E2C_FEF0_075A_41EA_0839896793B1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F3121C0E_FE30_0B56_41CF_51A65198536F"
  },
  {
   "backwardYaw": 177.36,
   "yaw": 81.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452"
  },
  {
   "backwardYaw": -10.63,
   "yaw": 173.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE"
  },
  {
   "backwardYaw": -92.2,
   "yaw": -10.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0091",
 "id": "panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C",
 "thumbnailUrl": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_t.jpg",
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
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E4315069_FED0_1BDA_41D0_DC041E176929",
  "this.overlay_E4722FEB_FED0_04DE_41D3_2BCD9559C28A",
  "this.overlay_E2F338FC_FED0_0CBA_41DB_9D08E0C50E1D",
  "this.overlay_E570C9D0_FED0_0CCA_41D2_720253F6CEED"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -101.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D110CE1C_FEF0_077A_41D6_4EE65E63D4C0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -97.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D335CD3B_FEF0_05BE_41E5_25803982ACE9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -36.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEB4DE5C_FEF0_07FA_41DD_058705F5DD0E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 97.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CC095BBA_FEF0_0CBE_41E8_7B10B984CB58",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 173.67,
   "yaw": -2.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0088",
 "id": "panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F",
 "thumbnailUrl": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_t.jpg",
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
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E9BD3BEC_FD76_33C5_41AC_409B212B4388",
  "this.overlay_EBAC5B6F_FD76_3CC3_41E5_5EC627BD568D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D374CD5B_FEF0_05FE_41D7_AB16C73E085F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1D6EDFB_FEF0_04BE_41E9_18DEF8E8FE3F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 81.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D33ECD3B_FEF0_05BE_41D2_AE8FD6E4CBC7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -96.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CC598BDA_FEF0_0CFE_41EB_8DF9D5A2AFDC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3C03D0B_FEF0_055E_41ED_FF280ABBAF0B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -91.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D23D7C9A_FEF0_0B7E_41D0_8BD2249CF584",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5"
  },
  {
   "backwardYaw": -168.59,
   "yaw": -10.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D08EA411_F85E_017E_41E0_BBC8757F163E"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC",
 "thumbnailUrl": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_t.jpg",
 "label": "DJI_0063",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D2BD8A38_F85A_01AE_41C6_C429DC095326",
  "this.overlay_D59BFE60_F85A_01DE_41A5_795AD89DFD91"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -172.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CCF52B9A_FEF0_0D7E_41EC_C261B0012112",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "id": "effect_1622AA86_310A_00F4_41A8_DBA0885BA83A",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 98.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3F48D0B_FEF0_055E_41E6_F6507389099C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 169.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D05C4DCB_FEF0_04DE_41EC_F5CFA0E3B496",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D2371C8A_FEF0_0B5E_41C3_6B4C6C9C323F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -98.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D2013C7A_FEF0_0BBE_41AC_88847CBD2E27",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D19EFDEB_FEF0_04DE_41EB_979C5A11772D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 52.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1BBDDFB_FEF0_04BE_41D2_CB5E83F7E6FA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -170.29,
   "yaw": -6.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0091",
 "id": "panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4",
 "thumbnailUrl": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_t.jpg",
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
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EB47EAD9_FD7A_7DCF_41E0_27ADC486BC0C",
  "this.overlay_EB8AFFB7_FD79_F443_41A8_9074704ED00E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D27AACCA_FEF0_04DE_41B2_77F8D92E04D0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D0652DDB_FEF0_04FE_41B1_E1F6E8BC0420",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.39,
   "yaw": 0.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE"
  },
  {
   "backwardYaw": 1.3,
   "yaw": -171.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0083",
 "id": "panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783",
 "thumbnailUrl": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_t.jpg",
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
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D8FCE06B_FD2A_0CCC_41D0_335B975F4FC0",
  "this.overlay_D574C29F_FD2A_0C43_41CB_319F495C5635"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 105.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1A9EDFB_FEF0_04BE_41E7_CE97052E7149",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -107.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3B94CEB_FEF0_04DF_41DE_169F78252198",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D0ADFD8B_FEF0_055E_419E_6FA701DEE05C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.09,
   "yaw": -178.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D093029E_F85E_0162_41DA_6815D43B6956",
 "thumbnailUrl": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_t.jpg",
 "label": "DJI_0070",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C982E06E_F87E_01A2_41E6_EF812114D9BF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D2305C8A_FEF0_0B5E_41D8_CF04747C4082",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 34.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D26EECDA_FEF0_04FE_41E8_100A5780ED5F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 17.35,
   "yaw": -173.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17"
  },
  {
   "backwardYaw": 81.82,
   "yaw": 72.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F05E450D_FE30_055A_41D7_34271D4DE57A"
  },
  {
   "backwardYaw": 141.02,
   "yaw": 143.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0096",
 "id": "panorama_F3301561_FE30_05CA_41E4_899879F569A0",
 "thumbnailUrl": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_t.jpg",
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
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EE57CAC2_FE30_0CC9_41C6_AA30921A40E8",
  "this.overlay_EF8AA5B0_FE30_054A_41E2_458E5C07B8A0",
  "this.overlay_D48E1C81_FED0_0B4A_41D8_181CAAD8E4C6"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D0067DAB_FEF0_055E_41E8_672500577404",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_112869ED_311E_0034_41C2_70A247245BB7",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D09AAD6D_FEF0_05DA_41E7_E34F577AC4D0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CC3C0BCA_FEF0_0CDE_41E3_06EC2F30C419",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D0F38D9C_FEF0_057A_41D6_EDB89F0FEB74",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeOutEffect_D6334F82_FDFA_743C_41CF_B29F67F212C4",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0085",
 "id": "panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E",
 "thumbnailUrl": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_t.jpg",
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
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DAABF5DD_FD16_17C7_41E7_11D811F08BEF",
  "this.overlay_D4AA161D_FD16_1447_41E8_7BB4D5148E08"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.64,
   "yaw": -176.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418",
 "thumbnailUrl": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_t.jpg",
 "label": "DJI_0068",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D4CDF539_F84A_03A1_41D8_41067836AE7C",
  "this.overlay_CB763BB3_F87A_06A1_41E0_120ECCA126C2",
  "this.overlay_C98DCD29_F87A_03A1_41E9_FD8151F7536A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 93.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D2269CAA_FEF0_0B5E_41DA_D7CA922BDD1C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D01BCDAB_FEF0_055E_41C2_3E1D7441ADE0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 39.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CC792BDA_FEF0_0CFE_41B5_DBC4E8EC8FAA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 100.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3E1AD1B_FEF0_057E_41EF_12E717F81498",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 98.73,
   "yaw": -5.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5"
  },
  {
   "backwardYaw": 83.46,
   "yaw": 74.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3121C0E_FE30_0B56_41CF_51A65198536F"
  },
  {
   "backwardYaw": 81.36,
   "yaw": 177.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C"
  },
  {
   "backwardYaw": -140.45,
   "yaw": -127.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505"
  },
  {
   "backwardYaw": 157.41,
   "yaw": -86.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0092",
 "id": "panorama_F3306D94_FE30_054A_41ED_4328F4CD8452",
 "thumbnailUrl": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_t.jpg",
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
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DEB3C259_FED7_FFFA_41D3_9233D05D2E9B",
  "this.overlay_E13F1E8A_FED0_075E_41D0_1C099C82F8F7",
  "this.overlay_E05C4816_FED0_0B76_41D1_FC27FBA98564",
  "this.overlay_E05EA533_FED0_054E_41DE_E39A54D527D3",
  "this.overlay_DE939A97_FED0_0F76_41D7_01EAC57C350B"
 ]
},
{
 "duration": 400,
 "id": "effect_19F0E9E8_310A_003B_41C2_00E6E4570ABD",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D223EC9A_FEF0_0B7E_41CB_A7C43FD849F7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_D636CF82_FDFA_743C_41E1_321D30D19850",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CC12DBAA_FEF0_0D5E_41DE_4AA443151D74",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window40551"
 },
 "id": "window_DA4F4546_F8CE_03E3_41D4_D803363C47A3",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": 400,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "closeButtonIconHeight": 12,
 "modal": true,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "title": "Ruang Medis",
 "minWidth": 20,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingTop": 5,
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_DA4F3544_F8CE_03E7_41CC_3631A57FA65E"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingBottom": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingRight": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyPaddingTop": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonBackgroundColor": [],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 11,
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyPaddingLeft": 5,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -3.2,
   "yaw": 175.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0099",
 "id": "panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140",
 "thumbnailUrl": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_t.jpg",
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
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E142959B_FD6A_1443_41C8_E6B4548E98E7",
  "this.overlay_E2C07009_FD16_0C4C_41E9_04F98BE4703E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.5,
   "yaw": -176,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446"
  },
  {
   "backwardYaw": 162.93,
   "yaw": 7.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0095",
 "id": "panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9",
 "thumbnailUrl": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_t.jpg",
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
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E4A3FA93_FD7A_1C5C_41EC_CEB65ECDBBD7",
  "this.overlay_E466DE49_FD7A_74CF_41E8_5E3F115339B8",
  "this.overlay_E462F0DF_FD76_0DC3_41E0_12079B3A9E36",
  "this.popup_E490AE6F_FD6E_14C3_41DB_072101F62C94"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -3.73,
   "yaw": -179.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E"
  },
  {
   "backwardYaw": -86.95,
   "yaw": 88.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5"
  },
  {
   "backwardYaw": -170.28,
   "yaw": 28.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0622",
 "id": "panorama_E0D84B48_F846_07EF_41EB_51D535D34B80",
 "thumbnailUrl": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_t.jpg",
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
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 2305.88,
   "angle": 95.31,
   "y": 768.95,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_E2BF57D4_F846_0EE7_41DA_AAD6FE0C31C5",
  "this.overlay_E3339F8B_F846_1F61_41DF_091D718A2731",
  "this.overlay_E3EE104B_F84A_01E2_41E2_6DC6265439FE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE974E4C_FEF0_07DA_41D2_53D6252AA231",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -178.16,
   "yaw": 2.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D093029E_F85E_0162_41DA_6815D43B6956"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761",
 "thumbnailUrl": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_t.jpg",
 "label": "DJI_0069",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C97CAA00_F87A_015E_41C5_5D5805861A98",
  "this.overlay_C9C4B5D6_F87A_02E2_41C1_953A58315FB1",
  "this.overlay_C9F8C1D5_F87E_02E1_41DD_E09FAF0B580C",
  "this.popup_C84D4770_F87E_0FBE_41E5_2449C50FA4A6"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -160.96,
   "yaw": -7.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD"
  },
  {
   "backwardYaw": 2.68,
   "yaw": -178.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0079",
 "id": "panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8",
 "thumbnailUrl": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_t.jpg",
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
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DC192400_FD2A_143C_41D7_EA700162DD9A",
  "this.overlay_D9387C91_FD2B_F45F_41D4_5B47DD57AC27"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -98.72,
   "yaw": -3.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829"
  },
  {
   "backwardYaw": -17.76,
   "yaw": 160.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5"
  },
  {
   "backwardYaw": 163,
   "yaw": 77.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51"
  },
  {
   "backwardYaw": 28.72,
   "yaw": -170.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0625",
 "id": "panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597",
 "thumbnailUrl": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_t.jpg",
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
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 3084.44,
   "angle": 107.14,
   "y": 1274.61,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_E41B7857_F84E_01E1_41E3_56EE9E1563E6",
  "this.overlay_E40D12F0_F84E_06BF_41DC_7610CC1C2100",
  "this.overlay_E4BB4E91_F84E_0161_41DF_33667F56383A",
  "this.overlay_E4803176_F84E_03A3_41E5_2A2DCA209928"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -26.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D2520CAA_FEF0_0B5E_41DE_395A861B4DA7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A"
  },
  {
   "backwardYaw": 90.42,
   "yaw": -98.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0629",
 "id": "panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD",
 "thumbnailUrl": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_t.jpg",
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
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 5415.93,
   "angle": 8.09,
   "y": 1469.95,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_E594692E_F83A_03A3_41E7_8BCC8CE7F2B8",
  "this.overlay_E6A8CB20_F83A_075F_41E9_5467B09DC68C",
  "this.overlay_D823B76D_F83A_0FA6_41D5_AAC34859EF6C"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_E33D4901_F846_0361_41EB_B13248C71FFA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_E33D4901_F846_0361_41EB_B13248C71FFA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E1215927_F846_03A2_41E0_3C86E41E23DD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D08EA411_F85E_017E_41E0_BBC8757F163E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D093029E_F85E_0162_41DA_6815D43B6956",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_D093029E_F85E_0162_41DA_6815D43B6956_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.video_C833CD10_F85A_037F_41D0_B7ECDC9E2312",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 20)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "camera": "this.panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "camera": "this.panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "camera": "this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "camera": "this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "camera": "this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "camera": "this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "camera": "this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "camera": "this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "camera": "this.panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "camera": "this.panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "camera": "this.panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F05E450D_FE30_055A_41D7_34271D4DE57A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "camera": "this.panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "camera": "this.panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "camera": "this.panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F34FC663_FE30_07CE_41BF_153D3F77B742",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "camera": "this.panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F3121C0E_FE30_0B56_41CF_51A65198536F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "camera": "this.panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "camera": "this.panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "camera": "this.panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "camera": "this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "camera": "this.panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "camera": "this.panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F3301561_FE30_05CA_41E4_899879F569A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "camera": "this.panorama_F3301561_FE30_05CA_41E4_899879F569A0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 0)",
   "camera": "this.panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_camera",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C",
 "thumbnailUrl": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_t.jpg",
 "label": "DJI_0061",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D35F43B6_F85E_06A3_41C0_541DB69753A7",
  "this.overlay_C9497236_F84A_01A3_41E0_64279BA064A9"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -171.67,
   "yaw": 110.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E1215927_F846_03A2_41E0_3C86E41E23DD"
  },
  {
   "backwardYaw": 160.83,
   "yaw": -17.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597"
  },
  {
   "backwardYaw": 88.62,
   "yaw": -86.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0623",
 "id": "panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5",
 "thumbnailUrl": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_t.jpg",
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
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 2129.61,
   "angle": 95.32,
   "y": 1548.13,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_E2DA3239_F84A_01AE_41E2_5ED5211F1DDA",
  "this.overlay_E413A7D3_F84A_0EE2_41E5_917C12BC01BD",
  "this.overlay_E6BD854D_F84A_03E1_41E3_7EE429620230"
 ]
},
{
 "duration": 500,
 "id": "FadeOutEffect_D6346F82_FDFA_743C_41CF_21F01FE38B8F",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3142D2B_FEF0_055E_4192_46316530E481",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4"
  },
  {
   "backwardYaw": 0.34,
   "yaw": 160.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0090",
 "id": "panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB",
 "thumbnailUrl": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_t.jpg",
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
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E9DA229C_FD7A_0C44_41B4_321C1D441B46",
  "this.overlay_EB6F31DF_FD7A_0FC3_41C3_83F9B917F11F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.63,
   "yaw": 153.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600"
  },
  {
   "backwardYaw": -176.52,
   "yaw": 1.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143",
 "thumbnailUrl": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_t.jpg",
 "label": "DJI_0067",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D72621AA_F84A_02A2_41E6_4A56EB333545",
  "this.overlay_D7408C71_F84A_01BE_41E1_43E2788F8AA1",
  "this.overlay_C9F7BAF4_F85E_06A6_41E9_CB427F516052",
  "this.popup_CBC653AC_F85A_06A7_41E9_425465537D63"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 160.6,
   "yaw": 0.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB"
  },
  {
   "backwardYaw": -2.16,
   "yaw": 173.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0089",
 "id": "panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD",
 "thumbnailUrl": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_t.jpg",
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
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E9C6ACD3_FD76_15C3_41E6_F4B2CA4F98F2",
  "this.overlay_EBAFDA70_FD7A_1CDD_41CD_CB9541B3BF41"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D308AD2B_FEF0_055E_41B7_D8E6B12E859A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E0CEB598_F846_036E_41A4_501C97854C8E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -5.36,
   "yaw": 178.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5"
  },
  {
   "backwardYaw": -178.29,
   "yaw": 82.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3121C0E_FE30_0B56_41CF_51A65198536F"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0088",
 "id": "panorama_F34FC663_FE30_07CE_41BF_153D3F77B742",
 "thumbnailUrl": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_t.jpg",
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
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E82D3545_FE30_05CA_41D2_E29073E4D693",
  "this.overlay_E9C5B56A_FE30_05D9_41D9_3DCBB6FE8025"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_18885C2A_310A_003C_41B2_9B60A3A66C9F",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.44,
   "yaw": -79.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A"
  },
  {
   "backwardYaw": 175.91,
   "yaw": 175.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829"
  },
  {
   "backwardYaw": -82.95,
   "yaw": 98.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0627",
 "id": "panorama_E125F272_F846_01A2_41EE_4C9F4D77235E",
 "thumbnailUrl": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_t.jpg",
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
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 4164.4,
   "angle": 181.48,
   "y": 2341.03,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_E4B43267_F84A_01A2_41B1_9F3A4D092809",
  "this.overlay_E5E946D9_F84A_0EE1_41E5_82E70D3621B8",
  "this.overlay_D857CD9B_F846_0362_41E9_858A30B4C5CD"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 153.44,
   "yaw": -0.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600",
 "thumbnailUrl": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_t.jpg",
 "label": "DJI_0065",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D49D6A98_F846_016E_41E1_9BAD053B2D5C",
  "this.overlay_D6CB4FE6_F84A_1EA3_41D8_9B5ED4DEE6A4"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3AD9CFB_FEF0_04BE_41D3_5DF7D0C170B8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -6.14,
   "yaw": -170.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4"
  },
  {
   "backwardYaw": -163.71,
   "yaw": -4.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0092",
 "id": "panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B",
 "thumbnailUrl": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_t.jpg",
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
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EBEDF8BB_FD7E_3C4C_41A6_EFD4BA253322",
  "this.overlay_EA6AA925_FD7E_1C47_41B7_F18DB5C2FC9C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D0EC2DAB_FEF0_055E_41E0_AF2919625767",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D214EC6A_FEF0_0BDE_41BE_569B5E2D9E34",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -178.55,
   "yaw": 2.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8"
  },
  {
   "backwardYaw": -10.57,
   "yaw": -178.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0078",
 "id": "panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41",
 "thumbnailUrl": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_t.jpg",
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
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DD01162F_FD36_3443_41E1_C172E098FB15",
  "this.overlay_DDE3B8A1_FD2A_1C7F_41C9_6847667EBC9F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 176.87,
   "yaw": -5.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5"
  },
  {
   "backwardYaw": -5.69,
   "yaw": 174.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F05E450D_FE30_055A_41D7_34271D4DE57A"
  },
  {
   "backwardYaw": 143.56,
   "yaw": 141.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3301561_FE30_05CA_41E4_899879F569A0"
  },
  {
   "backwardYaw": 82.35,
   "yaw": 78.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0086",
 "id": "panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD",
 "thumbnailUrl": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_t.jpg",
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
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F14A7FB9_FE30_04BB_41E6_B2B4EA7C17B0",
  "this.overlay_EE22FA79_FE30_0FBA_41EC_8BD52F81E46F",
  "this.overlay_EF4E4FB1_FE30_054A_41E0_2839369A4BD3",
  "this.overlay_F147C23B_FE31_FFBE_41EA_61F108933CA8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D101CE1C_FEF0_077A_41D7_A1791F6C7252",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2A237CC9_317A_007D_4176_36E090D2269C",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D093029E_F85E_0162_41DA_6815D43B6956_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "id": "effect_18BBC752_310E_006C_41B5_0D8B802FB057",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_EDB05026_FD1A_0C44_41EA_7A7383BCF1B7",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 73.65,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.42,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_C84D4770_F87E_0FBE_41E5_2449C50FA4A6",
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
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -4.29
},
{
 "duration": 500,
 "id": "FadeInEffect_D6347F82_FDFA_743C_41E9_02CE7FC545B4",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 169.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D076BDDB_FEF0_04FE_41DE_EF3D5C5CC363",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -7.75,
   "yaw": -160.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8"
  },
  {
   "backwardYaw": -165.9,
   "yaw": 8.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0080",
 "id": "panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD",
 "thumbnailUrl": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_t.jpg",
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
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DFF0EB40_FD2A_1C3D_4167_6C3FFAD68770",
  "this.overlay_DE774ECD_FD2E_15C7_41D8_4901F0D878BF"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 89.76,
   "yaw": -81.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC"
  },
  {
   "backwardYaw": 72.97,
   "yaw": 81.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3301561_FE30_05CA_41E4_899879F569A0"
  },
  {
   "backwardYaw": 174.52,
   "yaw": -5.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0085",
 "id": "panorama_F05E450D_FE30_055A_41D7_34271D4DE57A",
 "thumbnailUrl": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_t.jpg",
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
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EE70382F_FE30_0B56_41ED_AB3A51FA713C",
  "this.overlay_F1D8F7AD_FE30_055A_41DA_179875375104",
  "this.overlay_EE2BC220_FE30_3F4A_41E3_2D3BE24F2063"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D20A2C8A_FEF0_0B5E_41E8_B075F1119C78",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D0A0AD7C_FEF0_05BA_41B8_EB294BC6EF7D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -39.83,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.14,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_E490AE6F_FD6E_14C3_41DB_072101F62C94",
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
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.81
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D048BDCB_FEF0_04DE_41E8_702FA3DF9FDF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -105.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3013D2B_FEF0_055E_41E7_E2EB7FDEFF52",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 14.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D211AC6A_FEF0_0BDE_41DE_045C3D3BB1A2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 173.33,
   "yaw": -10.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C"
  },
  {
   "backwardYaw": 1.91,
   "yaw": 90.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3121C0E_FE30_0B56_41CF_51A65198536F"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0090",
 "id": "panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE",
 "thumbnailUrl": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_t.jpg",
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
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E664BA23_FED0_0F4E_41E0_71D646842AD1",
  "this.overlay_E4E3A490_FED0_1B4A_41EE_B18516F88889"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 8.26,
   "yaw": -165.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD"
  },
  {
   "backwardYaw": -145.95,
   "yaw": -6.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0081",
 "id": "panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9",
 "thumbnailUrl": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_t.jpg",
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
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DE264589_FD2E_144F_41EA_F03E9C95ED95",
  "this.overlay_DEEFE5DD_FD2E_F7C4_41CB_F40F1122E62A"
 ]
},
{
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingLeft": 5,
 "id": "window_F5C487B6_FE30_04B6_41E6_FF0EB58600F7",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Window561"
 },
 "scrollBarVisible": "rollOver",
 "closeButtonBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "closeButtonPaddingTop": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "modal": true,
 "shadowHorizontalLength": 3,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "minWidth": 20,
 "veilColorRatios": [
  0,
  1
 ],
 "backgroundColor": [],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonRollOverBorderColor": "#000000",
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconLineWidth": 5,
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "footerBackgroundOpacity": 0,
 "class": "Window",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "closeButtonRollOverBorderSize": 0,
 "propagateClick": false,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.viewer_uidCF233AEA_FEF0_0CDE_41EC_7B940AA71370"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingBottom": 5,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "borderSize": 0,
 "bodyBackgroundOpacity": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyPaddingTop": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPaddingRight": 5,
 "closeButtonBackgroundOpacity": 0.3,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 0,
 "headerPaddingTop": 10,
 "closeButtonPaddingBottom": 5,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "closeButtonIconWidth": 20,
 "closeButtonPressedIconColor": "#888888",
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonIconLineWidth": 5,
 "bodyPaddingRight": 0,
 "gap": 10,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#666666",
 "closeButtonPressedBorderColor": "#000000",
 "scrollBarWidth": 10,
 "closeButtonIconColor": "#000000",
 "layout": "vertical",
 "backgroundColorRatios": [],
 "closeButtonPressedBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1796E4C_FEF0_07DA_41E0_7DB38081DCD7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 16.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D0E1BD9C_FEF0_057A_417F_3999A4156254",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D089BD7C_FEF0_05BA_41E8_EAE292AFBD97",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 9.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D22F2CAA_FEF0_0B5E_41E1_A821576EE028",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D0C63D8B_FEF0_055E_41E0_A4FCAD6761D2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D02E0DCB_FEF0_04DE_41D9_0984A6D6728E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -69.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D023DDBB_FEF0_04BE_41E2_8127F6263696",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C"
  },
  {
   "backwardYaw": -86.79,
   "yaw": 157.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452"
  },
  {
   "backwardYaw": 167.49,
   "yaw": -74.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505"
  },
  {
   "backwardYaw": -173.28,
   "yaw": 17.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3301561_FE30_05CA_41E4_899879F569A0"
  },
  {
   "backwardYaw": 78.83,
   "yaw": 82.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0093",
 "id": "panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17",
 "thumbnailUrl": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_t.jpg",
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
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DEDAD4E6_FED0_04D6_41C1_254D96AFB818",
  "this.overlay_DFC3F29B_FED0_1F7E_41C2_CC1812E7D239",
  "this.overlay_DD0D3804_FED0_0B4A_41DF_3052E27AF7D8",
  "this.overlay_DD72A4D0_FED0_04CA_41D5_10890291435C",
  "this.overlay_DC2322F3_FED0_FCCE_41D9_765775E85A40"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.47,
   "yaw": -1.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8"
  },
  {
   "backwardYaw": -5.93,
   "yaw": -172.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0097",
 "id": "panorama_EF234E30_FD6A_145C_41D6_E617471C7E90",
 "thumbnailUrl": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_t.jpg",
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
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E62FCFAF_FD6E_7443_41AC_BB4B678CEDC4",
  "this.overlay_E312DBB1_FD6A_3C5C_41AF_A0FDB2D6B2EB"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D08EA411_F85E_017E_41E0_BBC8757F163E"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5",
 "thumbnailUrl": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_t.jpg",
 "label": "DJI_0062",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D21A7D3A_F85E_03A3_41D7_949E46820388",
  "this.overlay_D2BF2301_F85A_075E_41E1_AC733CE76983"
 ]
},
{
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBorderSize": 0,
 "id": "window_D9743F4C_F8CA_1FE6_41EC_B57B67206799",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Window40551"
 },
 "scrollBarVisible": "rollOver",
 "width": 400,
 "closeButtonPaddingTop": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "closeButtonIconHeight": 12,
 "modal": true,
 "shadowHorizontalLength": 3,
 "closeButtonBorderColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "title": "R WaKapro",
 "minWidth": 20,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "footerBackgroundOpacity": 1,
 "class": "Window",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingTop": 5,
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_D974CF4C_F8CA_1FE6_41B5_91ED4CE92060"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingBottom": 10,
 "bodyBorderSize": 0,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "bodyBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "footerBackgroundColorRatios": [],
 "bodyPaddingTop": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerBorderColor": "#000000",
 "closeButtonPaddingRight": 0,
 "closeButtonBackgroundOpacity": 1,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonBackgroundColor": [],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 11,
 "headerPaddingTop": 10,
 "closeButtonPaddingBottom": 0,
 "titleTextDecoration": "none",
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyPaddingLeft": 5,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "bodyBackgroundColor": [],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [],
 "borderRadius": 5,
 "gap": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBorderColor": "#000000",
 "closeButtonIconLineWidth": 2,
 "scrollBarWidth": 10,
 "closeButtonPaddingLeft": 0,
 "layout": "vertical",
 "backgroundColorRatios": [],
 "footerBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F3301561_FE30_05CA_41E4_899879F569A0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0087",
 "id": "panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4",
 "thumbnailUrl": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_t.jpg",
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
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EFD1196C_FD76_1CC5_41D7_108FE04A49B0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -4.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CC1E2BBA_FEF0_0CBE_41D4_FB8A18AC58BF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 7.47,
   "yaw": 162.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9"
  },
  {
   "backwardYaw": -172.72,
   "yaw": -5.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0096",
 "id": "panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741",
 "thumbnailUrl": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_t.jpg",
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
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E733D23B_FD6E_0C43_41E9_108BDB0604CD",
  "this.overlay_E63CED90_FD6E_345C_4189_F6304D075FBD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 77.81,
   "yaw": 163,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597"
  },
  {
   "backwardYaw": 98.29,
   "yaw": -82.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0626",
 "id": "panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51",
 "thumbnailUrl": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_t.jpg",
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
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 3344.59,
   "angle": 176.52,
   "y": 2225.4,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_E40E01D6_F84A_02E3_41A0_82636B824D3A",
  "this.overlay_E617AB7A_F84A_07A3_41DD_6FF28B8A336D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -12.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1F41E0B_FEF0_075E_41E7_29665617B256",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -81.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CC2BDBCA_FEF0_0CDE_41E5_05F925C9AADF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -176,
   "yaw": -1.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9"
  },
  {
   "backwardYaw": -0.48,
   "yaw": -171.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0094",
 "id": "panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446",
 "thumbnailUrl": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_t.jpg",
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
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E529B687_FD7A_7443_41E5_DC31F4F9122B",
  "this.overlay_E5AD9234_FD7A_0C45_41C8_3D068EBD2444"
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
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "DJI_0086",
 "id": "panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA",
 "thumbnailUrl": "media/panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -162.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D21A5C6A_FEF0_0BDE_41E5_8D3B34103031",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -6.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D2719CBA_FEF0_04BE_41D4_E2481DB8810D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E339F98C_FD3A_7C45_41DF_DD581255A6AA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D25DFCBA_FEF0_04BE_41D4_0477290756A2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 175.47,
   "yaw": -3.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140"
  },
  {
   "backwardYaw": -1.7,
   "yaw": -176.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0098",
 "id": "panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8",
 "thumbnailUrl": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_t.jpg",
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
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E6F23E26_FD6A_1445_41E5_8B04C77F0906",
  "this.overlay_E6C07FAB_FD6B_F443_41D9_A5C4382AFE6D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -5.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3A21CEB_FEF0_04DF_41EC_3E4807E6E36F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_C833CD10_F85A_037F_41D0_B7ECDC9E2312",
   "start": "this.viewer_uidCF233AEA_FEF0_0CDE_41EC_7B940AA71370VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_E023F4F4_FED0_04CA_41C2_F4853829559F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_E023F4F4_FED0_04CA_41C2_F4853829559F, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidCF233AEA_FEF0_0CDE_41EC_7B940AA71370VideoPlayer)",
   "player": "this.viewer_uidCF233AEA_FEF0_0CDE_41EC_7B940AA71370VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_E023F4F4_FED0_04CA_41C2_F4853829559F",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597"
  },
  {
   "backwardYaw": -79.22,
   "yaw": -177.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0628",
 "id": "panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A",
 "thumbnailUrl": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_t.jpg",
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
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 4920.24,
   "angle": 97.93,
   "y": 2327.32,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_E5175725_F846_0FA1_41DD_1BD351662726",
  "this.overlay_E600724E_F846_01E2_41E6_D57475C876AE",
  "this.overlay_E63A17FA_F846_0EA2_41E0_D2FB6BB00328"
 ]
},
{
 "id": "uidCF662B2A_FEF0_0D5E_41DE_756CF46CBA11MapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3CD2D0B_FEF0_055E_41A4_AC32A3595E76",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -171.22,
   "yaw": 1.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783"
  },
  {
   "backwardYaw": -6.4,
   "yaw": -145.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0082",
 "id": "panorama_E3399290_FD3A_0C5C_41E2_B903795686D7",
 "thumbnailUrl": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_t.jpg",
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
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D96EF79C_FD2A_1444_41E9_5D128F2FB42F",
  "this.overlay_DA0EDD6D_FD2A_14C4_41DD_CDF07B4C9F79"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D363FD5B_FEF0_05FE_41EE_D1AF51A36F5F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 4.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D0DB2D8B_FEF0_055E_41DB_F6E9306233CF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 500,
 "id": "FadeOutEffect_D6488F82_FDFA_743C_41E7_F117900A198E",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window40551"
 },
 "id": "window_D8E66787_F8CA_0F61_41EE_1EA702DAF7FC",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": 400,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "closeButtonIconHeight": 12,
 "modal": true,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "title": "Ruang K3",
 "minWidth": 20,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingTop": 5,
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_D8F82787_F8CA_0F61_41D8_6B4E2DD4B97A"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingBottom": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingRight": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyPaddingTop": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonBackgroundColor": [],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 11,
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyPaddingLeft": 5,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -175.69,
   "yaw": 178.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E33D4901_F846_0361_41EB_B13248C71FFA"
  },
  {
   "backwardYaw": -179.26,
   "yaw": -3.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0621",
 "id": "panorama_E0CEB598_F846_036E_41A4_501C97854C8E",
 "thumbnailUrl": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_t.jpg",
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
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_E1CB5A89_F85E_016E_41B9_415C953116A9",
   "x": 1481.38,
   "angle": 93.18,
   "y": 667.03,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_E22827CB_F846_0EE1_41C6_F471FE021232",
  "this.overlay_E2CBBC42_F846_01E2_41E8_C392563756A1"
 ]
},
{
 "duration": 500,
 "id": "FadeInEffect_D648AF82_FDFA_743C_41E4_8379F7D70256",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -10.98,
   "yaw": -92.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C"
  },
  {
   "backwardYaw": -127.25,
   "yaw": -140.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452"
  },
  {
   "backwardYaw": -74.72,
   "yaw": 167.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "DJI_0094",
 "id": "panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505",
 "thumbnailUrl": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_t.jpg",
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
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EE5B8CBF_FE30_04B6_41EF_B36606C93ECA",
  "this.overlay_DB0D12C2_FED0_1CCE_41DE_651331A57D97",
  "this.overlay_DBC85151_FED0_1DCA_41D2_C1FE99F0E02B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 6.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1E54E0B_FEF0_075E_41D6_84357704E1E9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -151.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D35F3D4B_FEF0_05DE_41DE_06F88C669DB9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window45028"
 },
 "id": "window_D970DDAD_F8CA_02A6_41A5_4D7570F486D3",
 "bodyBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": 400,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "titlePaddingLeft": 5,
 "closeButtonIconHeight": 12,
 "modal": true,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "title": "Toilet",
 "minWidth": 20,
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "headerBackgroundOpacity": 1,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadow": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingTop": 5,
 "propagateClick": false,
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_D9722DAE_F8CA_02A2_41C6_76658ECC2D85"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingBottom": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingRight": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "bodyPaddingTop": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "contentOpaque": false,
 "closeButtonBackgroundColor": [],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 11,
 "headerPaddingTop": 10,
 "titleTextDecoration": "none",
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyPaddingLeft": 5,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonIconWidth": 12,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonIconLineWidth": 2,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 172.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D2EDAC5A_FEF0_0BFE_41ED_DDDE19BA985F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_D6335F82_FDFA_743C_41CC_00D51ED57F0E",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 400,
 "id": "effect_1A65691F_310E_0014_41BF_C2605660352F",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -97.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEA55E5C_FEF0_07FA_41D5_F91B76840BF0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D399DCDA_FEF0_04FE_41CD_81449A1C3272",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE84DE5C_FEF0_07FA_41E5_0C8E4A39C4FA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -98.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CC493BDA_FEF0_0CFE_41D8_300B0CCE3F48",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 11.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D34B7D5B_FEF0_05FE_41E0_0867F0C98E05",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D36EDD6D_FEF0_05DA_41EE_8BE9B68C48F8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D0341DBB_FEF0_04BE_41E7_01F4A4E83E03",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "maximumZoomFactor": 1.2,
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
 "initialZoomFactor": 1,
 "id": "map_E1CB5A89_F85E_016E_41B9_415C953116A9",
 "thumbnailUrl": "media/map_E1CB5A89_F85E_016E_41B9_415C953116A9_t.png",
 "width": 6549,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
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
 "fieldOfViewOverlayRadiusScale": 0.3,
 "label": "dirkeet copy",
 "minimumZoomFactor": 0.5,
 "class": "Map",
 "height": 3552,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "duration": 400,
 "id": "effect_F2D95D32_FD1A_145D_41DF_3B15A8774774",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 93.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1C6AE0B_FEF0_075E_41E1_8F45D8141214",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CCC10B7A_FEF0_0DBE_41EB_7C27E9E57421",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 169.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D3D6ACFB_FEF0_04BE_41ED_E583A633140F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
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
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "children": [
  "this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58",
  "this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC",
  "this.Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83C8239_F8DE_01A1_41D3_401F7AD1E733",
 "scrollBarVisible": "rollOver",
 "width": 330,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 128,
 "maxWidth": 128,
 "toolTipShadowSpread": 0,
 "id": "IconButton_DC8D8382_F8CA_0763_41EC_64D2A891BD4E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "right": "0%",
 "width": 38,
 "toolTipOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "toolTipTextShadowColor": "#000000",
 "iconURL": "skin/IconButton_DC8D8382_F8CA_0763_41EC_64D2A891BD4E.png",
 "toolTip": "Fullscreen",
 "toolTipTextShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "mode": "toggle",
 "height": 25,
 "top": "0.44%",
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "shadow": false,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "data": {
  "name": "IconButton1493"
 }
},
{
 "maxHeight": 121,
 "maxWidth": 480,
 "id": "Image_CBFC9856_F846_01E3_41EB_804DF5C5CBA6",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "width": "9.955%",
 "url": "skin/Image_CBFC9856_F846_01E3_41EB_804DF5C5CBA6.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "0.22%",
 "minWidth": 1,
 "height": "4.741%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image132788"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minHeight": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "backgroundOpacity": 0.55,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent68033"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minHeight": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage68034"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton68035"
 },
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "fontStyle": "normal",
 "paddingLeft": 5,
 "paddingRight": 5,
 "fontSize": "1.29vmin",
 "right": 10,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "minHeight": 0,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "iconColor": "#000000",
 "minWidth": 0,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "top": 10,
 "label": "",
 "layout": "horizontal",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "class": "CloseButton",
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "paddingBottom": 5,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F34FC663_FE30_07CE_41BF_153D3F77B742, this.camera_D1930DDB_FEF0_04FE_41D2_D2C538E59E2C); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.54,
   "image": "this.AnimatedImageResource_E0EC24C5_FED0_04CA_41DD_81CDEDD8834A",
   "pitch": -20.09,
   "yaw": -5.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1E0A105_FE30_3D4A_41E4_49A9C9BF0428",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.54,
   "yaw": -5.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD, this.camera_D19EFDEB_FEF0_04DE_41EB_979C5A11772D); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.87,
   "image": "this.AnimatedImageResource_E0F3D4C5_FED0_04CA_41E9_08FA847D7332",
   "pitch": -27.04,
   "yaw": 176.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1C7BEA6_FE30_0756_41EB_F30851E8B428",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.87,
   "yaw": 176.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452, this.camera_D0652DDB_FEF0_04FE_41B1_E1F6E8BC0420); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.13,
   "image": "this.AnimatedImageResource_E0F354C5_FED0_04CA_41E4_08452348F183",
   "pitch": -28.58,
   "yaw": 98.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB9D6802_FE30_0B49_4115_E688B1EF4F90",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.13,
   "yaw": 98.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.58
  }
 ]
},
{
 "id": "htmlText_D8F8DE7D_F8CE_01A6_41D3_1ACD636C1FE1",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597, this.camera_CCC10B7A_FEF0_0DBE_41EB_7C27E9E57421); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.54,
   "image": "this.AnimatedImageResource_DC00031D_F8C6_0766_41E3_C640371472C3",
   "pitch": -8.53,
   "yaw": -98.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E6E47A19_F83A_016E_41E1_67301B85CC86",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.54,
   "yaw": -98.72,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.57,
   "image": "this.AnimatedImageResource_DC00431D_F8C6_0766_4163_A6633DB7C0B2",
   "pitch": -5.36,
   "yaw": -148.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E7EB74EC_F83A_02A6_41E1_5B31BF53810B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.57,
   "yaw": -148.82,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD, this.camera_CCD60B6A_FEF0_0DDE_41C4_814E3510786E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.49,
   "image": "this.AnimatedImageResource_DC00831D_F8C6_0766_41C4_14E88D8CFFF2",
   "pitch": -11.79,
   "yaw": 90.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D943E271_F83A_01A1_41E2_6A9AC7BADEB7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.49,
   "yaw": 90.42,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E, this.camera_CCCBEB8A_FEF0_0D5E_41CB_82EA9006D53E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.54,
   "image": "this.AnimatedImageResource_DC00E31D_F8C6_0766_41C1_B5B78EA94EA3",
   "pitch": -8.18,
   "yaw": 175.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E7B24F9E_F83D_FF62_41E5_B9342B818F2B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.54,
   "yaw": 175.91,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.93,
   "image": "this.AnimatedImageResource_CE93235E_F84E_07E3_41E6_8C51B9C62948",
   "pitch": -9.59,
   "yaw": -1.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D594FC4B_F846_01E1_41E3_61EA8E7C4A74",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.93,
   "yaw": -1.6,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC, this.camera_D076BDDB_FEF0_04FE_41DE_EF3D5C5CC363); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.35,
   "image": "this.AnimatedImageResource_CE92835E_F84E_07E3_41EB_8BCEA3476961",
   "pitch": -12.35,
   "yaw": -168.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C9B600A0_F846_015F_41E4_2FC2B5D290C8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.35,
   "yaw": -168.59,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "id": "htmlText_D9685AE8_F8CE_06AF_41DC_073AB348BB0A",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783, this.camera_D0ADFD8B_FEF0_055E_419E_6FA701DEE05C); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.59,
   "image": "this.AnimatedImageResource_CD4E7F7E_FD16_14C5_41DB_734E66C00746",
   "pitch": -18.75,
   "yaw": 177.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DBEA5A08_FD2A_3C4C_41EE_A8C0B893E45F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.59,
   "yaw": 177.39,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.58,
   "image": "this.AnimatedImageResource_CD4EEF7E_FD16_14C5_41DF_40207F6CFC8D",
   "pitch": -21.84,
   "yaw": -0.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D5906E02_FD2A_343C_41DB_A5DAED4F7866",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.58,
   "yaw": -0.97,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F05E450D_FE30_055A_41D7_34271D4DE57A, this.camera_D3F48D0B_FEF0_055E_41E6_F6507389099C); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.92,
   "image": "this.AnimatedImageResource_E0FB44D5_FED0_04CA_41D3_B4C3B121A709",
   "pitch": -32.31,
   "yaw": 89.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE5B381B_FE30_0B7E_41E9_F8A1C57BC933",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.92,
   "yaw": 89.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.47,
   "image": "this.AnimatedImageResource_E0FA84D5_FED0_04CA_41EC_9FED8355EE4D",
   "pitch": -19.68,
   "yaw": 32.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EC423668_FE30_07DA_41E9_E575F9D4AFAD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.47,
   "yaw": 32.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5, this.camera_D023DDBB_FEF0_04BE_41E2_8127F6263696); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.4,
   "image": "this.AnimatedImageResource_DC0F431D_F8C6_0766_41E6_8202E9606D4C",
   "pitch": -16.46,
   "yaw": -171.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E792CA83_F83E_0161_41DC_A70AD91B42F9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.4,
   "yaw": -171.67,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_D8E66787_F8CA_0F61_41EE_1EA702DAF7FC, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.88,
   "image": "this.AnimatedImageResource_DC0F831D_F8C6_0766_41E1_6DC3E9AB38E9",
   "pitch": -15.06,
   "yaw": 3.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DADEF45C_F83A_01E7_4195_70D0A9B70E11",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.88,
   "yaw": 3.64,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_D93AEA2D_F8CA_01A6_41C1_BA5E174AAA2A, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.88,
   "image": "this.AnimatedImageResource_DB610A81_F8C6_015E_41E9_F7397B5A0FBE",
   "pitch": -15.27,
   "yaw": 22.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9CAAA4C_F8CA_01E7_41E9_655BD48C94AC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.88,
   "yaw": 22.06,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_DA4F4546_F8CE_03E3_41D4_D803363C47A3, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5,
   "image": "this.AnimatedImageResource_DB7EFA81_F8C6_015E_41E7_BAE5327639C4",
   "pitch": -8.6,
   "yaw": -68.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA50C57E_F8CE_03A3_41AD_A501C0D2D570",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5,
   "yaw": -68.92,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_D8FCCE7D_F8CE_01A6_41DE_92E309BE4ACE, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.9,
   "image": "this.AnimatedImageResource_DB7E0A81_F8C6_015E_41E4_0D59A767A48D",
   "pitch": -14.05,
   "yaw": 70.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D888EE9D_F8CE_0166_41CD_ACAA8F2C295B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.9,
   "yaw": 70.98,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_D9681AE8_F8CE_06AF_41DA_9D5E3FA15C29, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.98,
   "image": "this.AnimatedImageResource_DB7FFA81_F8C6_015E_41BB_060A4484E589",
   "pitch": -9.94,
   "yaw": 140.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9652B01_F8CE_0761_41CF_2CF7CE66ED3E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.98,
   "yaw": 140.38,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_D970DDAD_F8CA_02A6_41A5_4D7570F486D3, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.56,
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
   "yaw": -56.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D823BFD1_F8CA_3EFE_41D4_763962077EAF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.56,
   "yaw": -56.96,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_D85B49BF_F8CA_02A2_41E5_A0E4C700B32E, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.98,
   "image": "this.AnimatedImageResource_DB7C9A81_F8C6_015E_41EB_78E5E3B9A313",
   "pitch": 9.94,
   "yaw": 59.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D86BC9DF_F8CA_02E2_41C6_5B9F93C41365",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.98,
   "yaw": 59.99,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_D8F51E85_F8CA_0166_41EC_2E26C441D0AB, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.96,
   "image": "this.AnimatedImageResource_DB7C7A81_F8C6_015E_41B7_E73CD435E714",
   "pitch": 11.26,
   "yaw": 28.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D8897EA4_F8CA_1EA7_41ED_5269659BDA84",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.96,
   "yaw": 28.11,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showWindow(this.window_D9743F4C_F8CA_1FE6_41EC_B57B67206799, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.91,
   "image": "this.AnimatedImageResource_DB7DFA81_F8C6_015E_41B7_F7905D405F53",
   "pitch": 13.69,
   "yaw": 3.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9043F6C_F8CA_1FA6_41E6_2C067CF61B16",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.91,
   "yaw": 3.75,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41, this.camera_D20A2C8A_FEF0_0B5E_41E8_B075F1119C78); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.47,
   "image": "this.AnimatedImageResource_CD77EF7B_FD16_14C3_41B9_BB60CDB93F1E",
   "pitch": -19.7,
   "yaw": -10.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E216830A_FD3A_0C4D_41EA_AD13F3ACDE2B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.47,
   "yaw": -10.57,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "items": [
  {
   "hfov": 2.82,
   "image": "this.AnimatedImageResource_CD485F7B_FD16_14C3_41A9_9A0AC0EB316F",
   "pitch": -20.31,
   "yaw": -115.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2B2873B_FD36_1443_41E1_AA7DB2A97E5A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.82,
   "yaw": -115.11,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B, this.camera_D15B7E3C_FEF0_07BA_41B7_EC7242FCF52A); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.7,
   "image": "this.AnimatedImageResource_DC73C593_FD16_1443_41CD_CFA984217730",
   "pitch": -15.92,
   "yaw": -163.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E53D4BB2_FD7E_3C5D_41E2_BDC281C2D7F3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -163.71,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446, this.camera_D12D5E2C_FEF0_075A_41EF_2094EC40EFD6); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.04,
   "image": "this.AnimatedImageResource_DC73B593_FD16_1443_41D7_AE6A95014FC7",
   "pitch": -13.5,
   "yaw": -0.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EAAAAC1C_FD7E_7444_41E7_5AF554F06BF6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.04,
   "yaw": -0.48,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "id": "htmlText_D8F9EE85_F8CA_0166_41BA_E35C1ED83643",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 }
},
{
 "id": "htmlText_D85F59BF_F8CA_02A2_41D8_D43ABBD28E21",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F34FC663_FE30_07CE_41BF_153D3F77B742, this.camera_D335CD3B_FEF0_05BE_41E5_25803982ACE9); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.54,
   "image": "this.AnimatedImageResource_E0F1F4C5_FED0_04CA_41D4_5E868EF659BB",
   "pitch": -29.64,
   "yaw": -178.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E91E6A4D_FE30_0FDA_41DA_69516DF752ED",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.54,
   "yaw": -178.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE, this.camera_D308AD2B_FEF0_055E_41B7_D8E6B12E859A); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.88,
   "image": "this.AnimatedImageResource_E0F164C5_FED0_04CA_41CB_EEB3C857D59A",
   "pitch": -23.76,
   "yaw": 1.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E6D2BB69_FE30_0DDA_41E6_76C071C44E04",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.88,
   "yaw": 1.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452, this.camera_D3013D2B_FEF0_055E_41E7_E2EB7FDEFF52); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.41,
   "image": "this.AnimatedImageResource_E0F0E4C5_FED0_04CA_41D3_72A1D8374BE3",
   "pitch": -19.77,
   "yaw": 83.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E6439C4E_FE30_0BD9_41C3_DF7BDC081FD6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.41,
   "yaw": 83.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E, this.camera_D101CE1C_FEF0_077A_41D7_A1791F6C7252); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.61,
   "image": "this.AnimatedImageResource_DC78631D_F8C6_0766_41C0_E939DF204BC3",
   "pitch": -15.45,
   "yaw": -175.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E284A805_F85A_0166_41D5_FE3474017F2D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.61,
   "yaw": -175.69,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "id": "htmlText_D9268A2D_F8CA_01A6_418B_46773F1D41B7",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452, this.camera_D02E0DCB_FEF0_04DE_41D9_0984A6D6728E); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.49,
   "image": "this.AnimatedImageResource_E0F6A4D5_FED0_04CA_41ED_FA10C3CB333B",
   "pitch": -24.24,
   "yaw": 81.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E4315069_FED0_1BDA_41D0_DC041E176929",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.49,
   "yaw": 81.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE, this.camera_D05C4DCB_FEF0_04DE_41EC_F5CFA0E3B496); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.48,
   "image": "this.AnimatedImageResource_E0F624D5_FED0_04CA_41E3_ADABBC2AEEB7",
   "pitch": -24.51,
   "yaw": 173.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E4722FEB_FED0_04DE_41D3_2BCD9559C28A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.48,
   "yaw": 173.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.64,
   "image": "this.AnimatedImageResource_E0F5F4D5_FED0_04CA_41D2_08D9E6BEF31E",
   "pitch": -19.59,
   "yaw": 131.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E2F338FC_FED0_0CBA_41DB_9D08E0C50E1D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.64,
   "yaw": 131.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505, this.camera_D048BDCB_FEF0_04DE_41E8_702FA3DF9FDF); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.59,
   "image": "this.AnimatedImageResource_E0F574D5_FED0_04CA_41E9_E76A1A043EA6",
   "pitch": -18.16,
   "yaw": -10.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E570C9D0_FED0_0CCA_41D2_720253F6CEED",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.59,
   "yaw": -10.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD, this.camera_CC328BCA_FEF0_0CDE_41E0_2547E525BD95); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.58,
   "image": "this.AnimatedImageResource_DC6C3593_FD16_1443_41EC_3FA1ACCE31BD",
   "pitch": -16.75,
   "yaw": -2.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E9BD3BEC_FD76_33C5_41AC_409B212B4388",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.58,
   "yaw": -2.16,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01c"
 },
 "items": [
  {
   "hfov": 6.93,
   "image": "this.AnimatedImageResource_DC6FB593_FD16_1443_41E4_B2F54E3055D0",
   "pitch": -22.94,
   "yaw": -154.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_EBAC5B6F_FD76_3CC3_41E5_5EC627BD568D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.93,
   "yaw": -154.36,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.64,
   "image": "this.AnimatedImageResource_CE93935E_F84E_07E3_41D6_677503CD38E2",
   "pitch": -14.37,
   "yaw": -164.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D2BD8A38_F85A_01AE_41C6_C429DC095326",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.64,
   "yaw": -164.71,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D08EA411_F85E_017E_41E0_BBC8757F163E, this.camera_D34B7D5B_FEF0_05FE_41E0_0867F0C98E05); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.76,
   "image": "this.AnimatedImageResource_CE93735E_F84E_07E3_41EC_B606819DBADA",
   "pitch": -9.36,
   "yaw": -10.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_D59BFE60_F85A_01DE_41A5_795AD89DFD91",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 1.76,
   "yaw": -10.89,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01c"
 },
 "items": [
  {
   "hfov": 3.03,
   "image": "this.AnimatedImageResource_DC71A593_FD16_1443_41E2_585EB0C15DE0",
   "pitch": -15.13,
   "yaw": 159.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_EB47EAD9_FD7A_7DCF_41E0_27ADC486BC0C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.03,
   "yaw": 159.01,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B, this.camera_CCE9CBAA_FEF0_0D5E_41EC_722B0ED5C857); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.1,
   "image": "this.AnimatedImageResource_DC715593_FD16_1443_41E7_FBCFCF566AB7",
   "pitch": -14.44,
   "yaw": -6.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB8AFFB7_FD79_F443_41A8_9074704ED00E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.1,
   "yaw": -6.14,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE, this.camera_D3EA9D1B_FEF0_057E_41E6_1059B5853636); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.83,
   "image": "this.AnimatedImageResource_CD4D0F7E_FD16_14C5_41E7_2E8A90846DBB",
   "pitch": -8.21,
   "yaw": 0.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D8FCE06B_FD2A_0CCC_41D0_335B975F4FC0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.83,
   "yaw": 0.63,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7, this.camera_D3142D2B_FEF0_055E_4192_46316530E481); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.47,
   "image": "this.AnimatedImageResource_CD4D8F7E_FD16_14C5_41E0_F661303D6CCD",
   "pitch": -14.4,
   "yaw": -171.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D574C29F_FD2A_0C43_41CB_319F495C5635",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.47,
   "yaw": -171.22,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761, this.camera_D374CD5B_FEF0_05FE_41D7_AB16C73E085F); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.91,
   "image": "this.AnimatedImageResource_C389C833_F846_01A2_41E8_674914BE09D6",
   "pitch": -6.43,
   "yaw": -178.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C982E06E_F87E_01A2_41E6_EF812114D9BF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 1.91,
   "yaw": -178.16,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F05E450D_FE30_055A_41D7_34271D4DE57A, this.camera_D2013C7A_FEF0_0BBE_41AC_88847CBD2E27); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.4,
   "image": "this.AnimatedImageResource_D1C61841_FED0_0BCA_41DF_C8B9006B3739",
   "pitch": -29.22,
   "yaw": 72.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE57CAC2_FE30_0CC9_41C6_AA30921A40E8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.4,
   "yaw": 72.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17, this.camera_D21A5C6A_FEF0_0BDE_41E5_8D3B34103031); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.26,
   "image": "this.AnimatedImageResource_D1C56841_FED0_0BCA_41E8_B91C2C585AA5",
   "pitch": -24.83,
   "yaw": -173.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EF8AA5B0_FE30_054A_41E2_458E5C07B8A0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.26,
   "yaw": -173.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD, this.camera_D2074C7A_FEF0_0BBE_41EA_825CE2E02FDE); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.87,
   "image": "this.AnimatedImageResource_D1C66841_FED0_0BCA_41EF_C3D05F976CA0",
   "pitch": -18.21,
   "yaw": 143.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D48E1C81_FED0_0B4A_41D8_181CAAD8E4C6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.87,
   "yaw": 143.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.99,
   "image": "this.AnimatedImageResource_CD4DDF7E_FD16_14C5_4197_C49A46B17EB0",
   "pitch": -21.57,
   "yaw": 4.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DAABF5DD_FD16_17C7_41E7_11D811F08BEF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.99,
   "yaw": 4.3,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.54,
   "image": "this.AnimatedImageResource_CD4E6F7E_FD16_14C5_41EC_E1D0AAD49DA7",
   "pitch": -20.04,
   "yaw": 157.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D4AA161D_FD16_1447_41E8_7BB4D5148E08",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.54,
   "yaw": 157.02,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "hfov": 5.23,
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
   "yaw": -56.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D4CDF539_F84A_03A1_41D8_41067836AE7C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.23,
   "yaw": -56.98,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.96,
   "image": "this.AnimatedImageResource_C38BD832_F846_01A2_41E6_299B6E04C3FD",
   "pitch": -8.19,
   "yaw": -2.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB763BB3_F87A_06A1_41E0_120ECCA126C2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 1.96,
   "yaw": -2.12,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143, this.camera_CCADDB6A_FEF0_0DDE_41E4_AA9F2AB234EF); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.93,
   "image": "this.AnimatedImageResource_C3885832_F846_01A2_41E5_90BB42AF8C45",
   "pitch": -10.99,
   "yaw": -176.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C98DCD29_F87A_03A1_41E9_FD8151F7536A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.93,
   "yaw": -176.52,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3121C0E_FE30_0B56_41CF_51A65198536F, this.camera_CC598BDA_FEF0_0CFE_41EB_8DF9D5A2AFDC); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.84,
   "image": "this.AnimatedImageResource_D1CD1831_FED0_0B4A_41DF_F9F1E513A774",
   "pitch": -24.05,
   "yaw": 74.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DEB3C259_FED7_FFFA_41D3_9233D05D2E9B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.84,
   "yaw": 74.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5, this.camera_CC2BDBCA_FEF0_0CDE_41E5_05F925C9AADF); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.24,
   "image": "this.AnimatedImageResource_D1CC9831_FED0_0B4A_41E3_20238A3810F8",
   "pitch": -21.94,
   "yaw": -5.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E13F1E8A_FED0_075E_41D0_1C099C82F8F7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.24,
   "yaw": -5.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C, this.camera_CC493BDA_FEF0_0CFE_41D8_300B0CCE3F48); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.74,
   "image": "this.AnimatedImageResource_D1C3E831_FED0_0B4A_41EB_0D61EDD18E93",
   "pitch": -26,
   "yaw": 177.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E05C4816_FED0_0B76_41D1_FC27FBA98564",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.74,
   "yaw": 177.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17, this.camera_CC673BEA_FEF0_0CDE_41DF_8F293BB48F99); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.67,
   "image": "this.AnimatedImageResource_D1C36831_FED0_0B4A_41EA_671AC47A8FD2",
   "pitch": -18.12,
   "yaw": -86.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E05EA533_FED0_054E_41DE_E39A54D527D3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.67,
   "yaw": -86.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505, this.camera_CC792BDA_FEF0_0CFE_41B5_DBC4E8EC8FAA); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.83,
   "image": "this.AnimatedImageResource_D1C2C831_FED0_0B4A_41D1_72B7ACC90F48",
   "pitch": -17.35,
   "yaw": -127.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DE939A97_FED0_0F76_41D7_01EAC57C350B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.83,
   "yaw": -127.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.35
  }
 ]
},
{
 "id": "htmlText_DA4F3544_F8CE_03E7_41CC_3631A57FA65E",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Stockyard"
 },
 "items": [
  {
   "hfov": 15.68,
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
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E142959B_FD6A_1443_41C8_E6B4548E98E7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.68,
   "yaw": -42.78,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8, this.camera_CC3C0BCA_FEF0_0CDE_41E3_06EC2F30C419); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.68,
   "image": "this.AnimatedImageResource_DC77A593_FD16_1443_41B5_113355C73433",
   "pitch": -14.36,
   "yaw": 175.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E2C07009_FD16_0C4C_41E9_04F98BE4703E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.68,
   "yaw": 175.47,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741, this.camera_D089BD7C_FEF0_05BA_41E8_EAE292AFBD97); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.25,
   "image": "this.AnimatedImageResource_DC727593_FD16_1443_41E0_807ADEDD1BBD",
   "pitch": -12.88,
   "yaw": 7.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E4A3FA93_FD7A_1C5C_41EC_CEB65ECDBBD7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.25,
   "yaw": 7.47,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446, this.camera_D09AAD6D_FEF0_05DA_41E7_E34F577AC4D0); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.93,
   "image": "this.AnimatedImageResource_DC75F593_FD16_1443_41D0_F725F93E92D8",
   "pitch": -10.84,
   "yaw": -176,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E466DE49_FD7A_74CF_41E8_5E3F115339B8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.93,
   "yaw": -176,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E490AE6F_FD6E_14C3_41DB_072101F62C94, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingBottom':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_DC25C5B2_FD16_145D_41E2_0C08C857AFFD, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.4,
   "image": "this.AnimatedImageResource_DC756593_FD16_1443_41D9_A35611F14CF9",
   "pitch": 3.81,
   "yaw": -39.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E462F0DF_FD76_0DC3_41E0_12079B3A9E36",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.4,
   "yaw": -39.83,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597, this.camera_D22F2CAA_FEF0_0B5E_41E1_A821576EE028); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.53,
   "image": "this.AnimatedImageResource_DC07431D_F8C6_0766_4159_FA1AA73442F8",
   "pitch": -9.26,
   "yaw": 28.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E2BF57D4_F846_0EE7_41DA_AAD6FE0C31C5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.53,
   "yaw": 28.72,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5, this.camera_D2269CAA_FEF0_0B5E_41DA_D7CA922BDD1C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.5,
   "image": "this.AnimatedImageResource_DC07B31D_F8C6_0766_41B4_774183835ED9",
   "pitch": -10.99,
   "yaw": 88.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E3339F8B_F846_1F61_41DF_091D718A2731",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.5,
   "yaw": 88.62,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEB598_F846_036E_41A4_501C97854C8E, this.camera_D223EC9A_FEF0_0B7E_41CB_A7C43FD849F7); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.54,
   "image": "this.AnimatedImageResource_DC07E31D_F8C6_0766_41E7_11A974A5BD05",
   "pitch": -8.37,
   "yaw": -179.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E3EE104B_F84A_01E2_41E2_6DC6265439FE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.54,
   "yaw": -179.26,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D093029E_F85E_0162_41DA_6815D43B6956, this.camera_D214EC6A_FEF0_0BDE_41BE_569B5E2D9E34); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.07,
   "image": "this.AnimatedImageResource_C3889833_F846_01A2_41E0_60415008F34A",
   "pitch": -7.74,
   "yaw": 2.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C97CAA00_F87A_015E_41C5_5D5805861A98",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.07,
   "yaw": 2.09,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.63,
   "image": "this.AnimatedImageResource_C3892833_F846_01A2_41E9_1A864C08D0EB",
   "pitch": -6.75,
   "yaw": -159.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C9C4B5D6_F87A_02E2_41C1_953A58315FB1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.63,
   "yaw": -159.16,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_C84D4770_F87E_0FBE_41E5_2449C50FA4A6, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingBottom':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.04,
   "image": "this.AnimatedImageResource_C3895833_F846_01A2_41C7_903EBDB12CCC",
   "pitch": -4.29,
   "yaw": 73.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C9F8C1D5_F87E_02E1_41DD_E09FAF0B580C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.04,
   "yaw": 73.65,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD, this.camera_D148CE3C_FEF0_07BA_41EF_CB4654098C40); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.78,
   "image": "this.AnimatedImageResource_CD491F7B_FD16_14C3_41E9_71E02FD5D308",
   "pitch": -14.17,
   "yaw": -7.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DC192400_FD2A_143C_41D7_EA700162DD9A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.78,
   "yaw": -7.75,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41, this.camera_D1796E4C_FEF0_07DA_41E0_7DB38081DCD7); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.47,
   "image": "this.AnimatedImageResource_CD49FF7B_FD16_14C3_41E0_8FCA5C3A7D2A",
   "pitch": -6.41,
   "yaw": -178.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9387C91_FD2B_F45F_41D4_5B47DD57AC27",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.47,
   "yaw": -178.55,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829, this.camera_D33ECD3B_FEF0_05BE_41D2_AE8FD6E4CBC7); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.49,
   "image": "this.AnimatedImageResource_DC05231D_F8C6_0766_41AE_F27DE8D53993",
   "pitch": -11.76,
   "yaw": -3.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E41B7857_F84E_01E1_41E3_56EE9E1563E6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.49,
   "yaw": -3.73,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51, this.camera_D3554D4B_FEF0_05DE_41D6_43A2956A0736); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.46,
   "image": "this.AnimatedImageResource_DC05831D_F8C6_0766_4150_C9A3CA08EC10",
   "pitch": -13.6,
   "yaw": 77.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E40D12F0_F84E_06BF_41DC_7610CC1C2100",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.46,
   "yaw": 77.81,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5, this.camera_D3286D3B_FEF0_05BE_41E7_614FB1352BAA); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.55,
   "image": "this.AnimatedImageResource_DC05C31D_F8C6_0766_41EC_69B9955756A5",
   "pitch": -7.06,
   "yaw": 160.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E4BB4E91_F84E_0161_41DF_33667F56383A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.55,
   "yaw": 160.83,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80, this.camera_D35F3D4B_FEF0_05DE_41DE_06F88C669DB9); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.56,
   "image": "this.AnimatedImageResource_DC04331D_F8C6_0766_41E3_0D8D3512B197",
   "pitch": -6.54,
   "yaw": -170.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E4803176_F84E_03A3_41E5_2A2DCA209928",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.56,
   "yaw": -170.28,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.5,
   "image": "this.AnimatedImageResource_DC01131D_F8C6_0766_41D6_CA411A49AEAC",
   "pitch": -11.14,
   "yaw": -174.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E594692E_F83A_03A3_41E7_8BCC8CE7F2B8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.5,
   "yaw": -174.21,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.56,
   "image": "this.AnimatedImageResource_DC01731D_F8C6_0766_41E3_0F8BC33EEC00",
   "pitch": -6.78,
   "yaw": -140.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E6A8CB20_F83A_075F_41E9_5467B09DC68C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.56,
   "yaw": -140.63,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829, this.camera_D1690E4C_FEF0_07DA_41E0_41AE43D60912); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.52,
   "image": "this.AnimatedImageResource_DC01B31D_F8C6_0766_41C3_636FDC0E309B",
   "pitch": -9.78,
   "yaw": -98.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D823B76D_F83A_0FA6_41D5_AAC34859EF6C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.52,
   "yaw": -98.22,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.29,
   "image": "this.AnimatedImageResource_CE9CF35D_F84E_07E1_41E0_101F2E7A926F",
   "pitch": -17.94,
   "yaw": 0.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D35F43B6_F85E_06A3_41C0_541DB69753A7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.29,
   "yaw": 0.06,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Info 01"
 },
 "items": [
  {
   "hfov": 2.06,
   "image": "this.AnimatedImageResource_CE8EB380_F83A_075E_41D0_154C7C857A98",
   "pitch": -29.88,
   "yaw": 154.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C9497236_F84A_01A3_41E0_64279BA064A9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.06,
   "yaw": 154.17,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597, this.camera_D2371C8A_FEF0_0B5E_41C3_6B4C6C9C323F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.54,
   "image": "this.AnimatedImageResource_DC06431D_F8C6_0766_41E9_2F6B612F49B6",
   "pitch": -8.28,
   "yaw": -17.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E2DA3239_F84A_01AE_41E2_5ED5211F1DDA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.54,
   "yaw": -17.76,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80, this.camera_D23D7C9A_FEF0_0B7E_41D0_8BD2249CF584); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.53,
   "image": "this.AnimatedImageResource_DC06831D_F8C6_0766_41D7_26F8E980C5AF",
   "pitch": -9.38,
   "yaw": -86.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E413A7D3_F84A_0EE2_41E5_917C12BC01BD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.53,
   "yaw": -86.95,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E1215927_F846_03A2_41E0_3C86E41E23DD, this.camera_D2305C8A_FEF0_0B5E_41D8_CF04747C4082); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.56,
   "image": "this.AnimatedImageResource_DC06F31D_F8C6_0766_41E2_A760CB10BED8",
   "pitch": -6.16,
   "yaw": 110.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E6BD854D_F84A_03E1_41E3_7EE429620230",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.56,
   "yaw": 110.45,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.58,
   "image": "this.AnimatedImageResource_DC6E4593_FD16_1443_41B1_45545916FCDA",
   "pitch": -16.11,
   "yaw": -4.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E9DA229C_FD7A_0C44_41B4_321C1D441B46",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.58,
   "yaw": -4.19,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD, this.camera_D1D6EDFB_FEF0_04BE_41E9_18DEF8E8FE3F); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.59,
   "image": "this.AnimatedImageResource_DC6E3593_FD16_1443_41C1_B0374C60D139",
   "pitch": -18.27,
   "yaw": 160.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB6F31DF_FD7A_0FC3_41C3_83F9B917F11F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.59,
   "yaw": 160.6,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600, this.camera_D0067DAB_FEF0_055E_41E8_672500577404); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.37,
   "image": "this.AnimatedImageResource_CE91B35E_F84E_07E3_41BC_11B787D7DD91",
   "pitch": -7.87,
   "yaw": 153.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D72621AA_F84A_02A2_41E6_4A56EB333545",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.37,
   "yaw": 153.44,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418, this.camera_D0341DBB_FEF0_04BE_41E7_01F4A4E83E03); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.26,
   "image": "this.AnimatedImageResource_CE91635E_F84E_07E3_41E5_EC9CA43C9906",
   "pitch": -7.49,
   "yaw": 1.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D7408C71_F84A_01BE_41E1_43E2788F8AA1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.26,
   "yaw": 1.64,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_CBC653AC_F85A_06A7_41E9_425465537D63, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingBottom':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_F5C487B6_FE30_04B6_41E6_FF0EB58600F7, this.video_C833CD10_F85A_037F_41D0_B7ECDC9E2312, this.PlayList_E023F4F4_FED0_04CA_41C2_F4853829559F, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.38,
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
   "yaw": -43.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C9F7BAF4_F85E_06A6_41E9_CB427F516052",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.38,
   "yaw": -43.19,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB, this.camera_D363FD5B_FEF0_05FE_41EE_D1AF51A36F5F); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.27,
   "image": "this.AnimatedImageResource_DC6F0593_FD16_1443_41DD_89ED25802034",
   "pitch": -15.38,
   "yaw": 0.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E9C6ACD3_FD76_15C3_41E6_F4B2CA4F98F2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.27,
   "yaw": 0.34,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F, this.camera_D36EDD6D_FEF0_05DA_41EE_8BE9B68C48F8); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.96,
   "image": "this.AnimatedImageResource_DC6EE593_FD16_1443_41DA_9825CEE1CCAB",
   "pitch": -16.62,
   "yaw": 173.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBAFDA70_FD7A_1CDD_41CD_CB9541B3BF41",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.96,
   "yaw": 173.67,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3121C0E_FE30_0B56_41CF_51A65198536F, this.camera_D3CD2D0B_FEF0_055E_41A4_AC32A3595E76); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.58,
   "image": "this.AnimatedImageResource_E0F2C4C5_FED0_04CA_41D5_C9E4F60B0095",
   "pitch": -33.1,
   "yaw": 82.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E82D3545_FE30_05CA_41D2_E29073E4D693",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.58,
   "yaw": 82.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5, this.camera_D3C03D0B_FEF0_055E_41ED_FF280ABBAF0B); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.74,
   "image": "this.AnimatedImageResource_E0F274C5_FED0_04CA_41A1_9479D5EEC50E",
   "pitch": -26.2,
   "yaw": 178.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E9C5B56A_FE30_05D9_41D9_3DCBB6FE8025",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.74,
   "yaw": 178.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51, this.camera_CC095BBA_FEF0_0CBE_41E8_7B10B984CB58); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.52,
   "image": "this.AnimatedImageResource_DC03031D_F8C6_0766_41B9_DB99F65DA10B",
   "pitch": -9.97,
   "yaw": 98.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E4B43267_F84A_01A2_41B1_9F3A4D092809",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.52,
   "yaw": 98.29,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A, this.camera_CC12DBAA_FEF0_0D5E_41DE_4AA443151D74); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.51,
   "image": "this.AnimatedImageResource_DC03731D_F8C6_0766_41BF_7AE9E48D8B9D",
   "pitch": -10.89,
   "yaw": -79.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5E946D9_F84A_0EE1_41E5_82E70D3621B8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.51,
   "yaw": -79.22,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829, this.camera_CC1E2BBA_FEF0_0CBE_41D4_FB8A18AC58BF); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.52,
   "image": "this.AnimatedImageResource_DC03A31D_F8C6_0766_419C_4259CDED36DF",
   "pitch": -10.13,
   "yaw": 175.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D857CD9B_F846_0362_41E9_858A30B4C5CD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.52,
   "yaw": 175.58,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.47,
   "image": "this.AnimatedImageResource_CE92635E_F84E_07E3_41EE_15C53B8D7E1C",
   "pitch": -15.64,
   "yaw": 178.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D49D6A98_F846_016E_41E1_9BAD053B2D5C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.47,
   "yaw": 178.37,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143, this.camera_D2520CAA_FEF0_0B5E_41DE_395A861B4DA7); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.89,
   "image": "this.AnimatedImageResource_CE91C35E_F84E_07E3_41E1_0CA5C100D1DB",
   "pitch": -7.66,
   "yaw": -0.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6CB4FE6_F84A_1EA3_41D8_9B5ED4DEE6A4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.89,
   "yaw": -0.63,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4, this.camera_D0F38D9C_FEF0_057A_41D6_EDB89F0FEB74); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.69,
   "image": "this.AnimatedImageResource_DC70D593_FD16_1443_41E5_7377804412AD",
   "pitch": -14.14,
   "yaw": -170.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBEDF8BB_FD7E_3C4C_41A6_EFD4BA253322",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.69,
   "yaw": -170.29,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91, this.camera_D0E1BD9C_FEF0_057A_417F_3999A4156254); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.26,
   "image": "this.AnimatedImageResource_DC704593_FD16_1443_41C1_064C00C89CD8",
   "pitch": -11.94,
   "yaw": -4.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA6AA925_FD7E_1C47_41B7_F18DB5C2FC9C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.26,
   "yaw": -4.67,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905, this.camera_D3D6ACFB_FEF0_04BE_41ED_E583A633140F); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.74,
   "image": "this.AnimatedImageResource_CD481F7B_FD16_14C3_41E4_A053BC758C50",
   "pitch": -11.53,
   "yaw": -178.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DD01162F_FD36_3443_41E1_C172E098FB15",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.74,
   "yaw": -178.17,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8, this.camera_D3AD9CFB_FEF0_04BE_41D3_5DF7D0C170B8); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.36,
   "image": "this.AnimatedImageResource_CD48AF7B_FD16_14C3_41C4_76B8D70D7F6A",
   "pitch": -32.81,
   "yaw": 2.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DDE3B8A1_FD2A_1C7F_41C9_6847667EBC9F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.36,
   "yaw": 2.68,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5, this.camera_CE974E4C_FEF0_07DA_41D2_53D6252AA231); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.04,
   "image": "this.AnimatedImageResource_E0ECA4C5_FED0_04CA_41CA_90D5F1481BD8",
   "pitch": -16.68,
   "yaw": -5.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F14A7FB9_FE30_04BB_41E6_B2B4EA7C17B0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.04,
   "yaw": -5.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17, this.camera_CEA55E5C_FEF0_07FA_41D5_F91B76840BF0); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.54,
   "image": "this.AnimatedImageResource_E0EC34C5_FED0_04CA_41E2_9C8AD6CF6740",
   "pitch": -25.11,
   "yaw": 78.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE22FA79_FE30_0FBA_41EC_8BD52F81E46F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.54,
   "yaw": 78.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3301561_FE30_05CA_41E4_899879F569A0, this.camera_CEB4DE5C_FEF0_07FA_41DD_058705F5DD0E); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.95,
   "image": "this.AnimatedImageResource_E0ED24C5_FED0_04CA_41C2_77B57090B4B6",
   "pitch": -18.37,
   "yaw": 141.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EF4E4FB1_FE30_054A_41E0_2839369A4BD3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.95,
   "yaw": 141.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F05E450D_FE30_055A_41D7_34271D4DE57A, this.camera_CE84DE5C_FEF0_07FA_41E5_0C8E4A39C4FA); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.89,
   "image": "this.AnimatedImageResource_E0ECD4C5_FED0_04CA_41DF_E73653FCB8F6",
   "pitch": -19.55,
   "yaw": 174.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F147C23B_FE31_FFBE_41EA_61F108933CA8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.89,
   "yaw": 174.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9, this.camera_D211AC6A_FEF0_0BDE_41DE_045C3D3BB1A2); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.31,
   "image": "this.AnimatedImageResource_CD4A1F7B_FD16_14C3_41EA_26D49B1E8BDF",
   "pitch": -14.61,
   "yaw": 8.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DFF0EB40_FD2A_1C3D_4167_6C3FFAD68770",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.31,
   "yaw": 8.26,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8, this.camera_D2EDAC5A_FEF0_0BFE_41ED_DDDE19BA985F); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.6,
   "image": "this.AnimatedImageResource_CD4AFF7E_FD16_14C5_41DB_07E2F76F34D2",
   "pitch": -16.06,
   "yaw": -160.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DE774ECD_FD2E_15C7_41D8_4901F0D878BF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.6,
   "yaw": -160.96,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3301561_FE30_05CA_41E4_899879F569A0, this.camera_D3B94CEB_FEF0_04DF_41DE_169F78252198); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.93,
   "image": "this.AnimatedImageResource_E0EE14C5_FED0_04CA_41D3_B5D504D8D0E7",
   "pitch": -32.86,
   "yaw": 81.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE70382F_FE30_0B56_41ED_AB3A51FA713C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.93,
   "yaw": 81.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC, this.camera_D38C7CEB_FEF0_04DF_41E8_51D68D4D55FA); this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.65,
   "image": "this.AnimatedImageResource_E0ED94C5_FED0_04CA_419E_2B127BB8599E",
   "pitch": -23.49,
   "yaw": -81.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1D8F7AD_FE30_055A_41DA_179875375104",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.65,
   "yaw": -81.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD, this.camera_D3A21CEB_FEF0_04DF_41EC_3E4807E6E36F); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.15,
   "image": "this.AnimatedImageResource_E0ED34C5_FED0_04CA_41DE_DEFC0B10043D",
   "pitch": -14.07,
   "yaw": -5.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE2BC220_FE30_3F4A_41E3_2D3BE24F2063",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.15,
   "yaw": -5.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3121C0E_FE30_0B56_41CF_51A65198536F, this.camera_D27AACCA_FEF0_04DE_41B2_77F8D92E04D0); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.72,
   "image": "this.AnimatedImageResource_E0F784C5_FED0_04CA_41CA_70473A13A17E",
   "pitch": -26.36,
   "yaw": 90.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E664BA23_FED0_0F4E_41E0_71D646842AD1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.72,
   "yaw": 90.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C, this.camera_D2719CBA_FEF0_04BE_41D4_E2481DB8810D); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.83,
   "image": "this.AnimatedImageResource_E0F724D5_FED0_04CA_41ED_2CF50B9F889F",
   "pitch": -20.91,
   "yaw": -10.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E4E3A490_FED0_1B4A_41EE_B18516F88889",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.83,
   "yaw": -10.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3399290_FD3A_0C5C_41E2_B903795686D7, this.camera_D26EECDA_FEF0_04FE_41E8_100A5780ED5F); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.98,
   "image": "this.AnimatedImageResource_CD4B0F7E_FD16_14C5_41D6_2CEF3FC726FB",
   "pitch": -16.76,
   "yaw": -6.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DE264589_FD2E_144F_41EA_F03E9C95ED95",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.98,
   "yaw": -6.4,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD, this.camera_D2642CCA_FEF0_04DE_41E5_F1C8DCA07242); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.53,
   "image": "this.AnimatedImageResource_CD4BFF7E_FD16_14C5_41E1_8F34832306E0",
   "pitch": -20.37,
   "yaw": -165.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DEEFE5DD_FD2E_F7C4_41CB_F40F1122E62A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.53,
   "yaw": -165.9,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "viewer_uidCF233AEA_FEF0_0CDE_41EC_7B940AA71370",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "ViewerArea68032"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD, this.camera_D110CE1C_FEF0_077A_41D6_4EE65E63D4C0); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.36,
   "image": "this.AnimatedImageResource_D1C25831_FED0_0B4A_41ED_96A7D894D539",
   "pitch": -20.43,
   "yaw": 82.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DEDAD4E6_FED0_04D6_41C1_254D96AFB818",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.36,
   "yaw": 82.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505, this.camera_D1F41E0B_FEF0_075E_41E7_29665617B256); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.42,
   "image": "this.AnimatedImageResource_D1C1C831_FED0_0B4A_41E6_DD13E0487C74",
   "pitch": -23.82,
   "yaw": -74.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DFC3F29B_FED0_1F7E_41C2_CC1812E7D239",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.42,
   "yaw": -74.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452, this.camera_D1C6AE0B_FEF0_075E_41E1_8F45D8141214); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.34,
   "image": "this.AnimatedImageResource_D1C15831_FED0_0B4A_41E9_7891C3101B7F",
   "pitch": -26.23,
   "yaw": 157.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DD0D3804_FED0_0B4A_41DF_3052E27AF7D8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.34,
   "yaw": 157.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3301561_FE30_05CA_41E4_899879F569A0, this.camera_D1E54E0B_FEF0_075E_41D6_84357704E1E9); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.62,
   "image": "this.AnimatedImageResource_D1C0B831_FED0_0B4A_41E8_931BA395E4CF",
   "pitch": -17.15,
   "yaw": 17.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DD72A4D0_FED0_04CA_41D5_10890291435C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.62,
   "yaw": 17.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.84,
   "image": "this.AnimatedImageResource_D1C03841_FED0_0BCA_41E5_F177BC12F3C1",
   "pitch": -24.58,
   "yaw": -136.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DC2322F3_FED0_FCCE_41D9_765775E85A40",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.84,
   "yaw": -136.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8, this.camera_D25DFCBA_FEF0_04BE_41D4_0477290756A2); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.34,
   "image": "this.AnimatedImageResource_DC75A593_FD16_1443_41E8_C08BED78D6C5",
   "pitch": -10.46,
   "yaw": -1.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E62FCFAF_FD6E_7443_41AC_BB4B678CEDC4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.34,
   "yaw": -1.7,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741, this.camera_D244ECBA_FEF0_04BE_41D1_964FC7E70C0C); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.64,
   "image": "this.AnimatedImageResource_DC751593_FD16_1443_41E1_B0A4205EE97D",
   "pitch": -11.02,
   "yaw": -172.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E312DBB1_FD6A_3C5C_41AF_A0FDB2D6B2EB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.64,
   "yaw": -172.72,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.99,
   "image": "this.AnimatedImageResource_CE9C535E_F84E_07E3_41D9_D02B257628F2",
   "pitch": -12.83,
   "yaw": -0.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D21A7D3A_F85E_03A3_41D7_949E46820388",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.99,
   "yaw": -0.75,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.82,
   "image": "this.AnimatedImageResource_CE9C335E_F84E_07E3_41E6_93C9AB7D0121",
   "pitch": -19.64,
   "yaw": 177.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D2BF2301_F85A_075E_41E1_AC733CE76983",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.82,
   "yaw": 177.97,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "id": "htmlText_D974CF4C_F8CA_1FE6_41B5_91ED4CE92060",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.5,
   "image": "this.AnimatedImageResource_DC6C5593_FD16_1443_41EB_6161E2A0071C",
   "pitch": -16.92,
   "yaw": -2.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EFD1196C_FD76_1CC5_41D7_108FE04A49B0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.5,
   "yaw": -2.21,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9, this.camera_CCF52B9A_FEF0_0D7E_41EC_C261B0012112); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.07,
   "image": "this.AnimatedImageResource_DC74C593_FD16_1443_41CD_42A1C340AA70",
   "pitch": -10.12,
   "yaw": 162.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E733D23B_FD6E_0C43_41E9_108BDB0604CD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.07,
   "yaw": 162.93,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90, this.camera_CCFE6BAA_FEF0_0D5E_41ED_F86C303706DC); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3,
   "image": "this.AnimatedImageResource_DC723593_FD16_1443_41B1_917A8FBB6FD5",
   "pitch": -10.11,
   "yaw": -5.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E63CED90_FD6E_345C_4189_F6304D075FBD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3,
   "yaw": -5.93,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597, this.camera_D10F5E2C_FEF0_075A_41DF_4DA35CA6A930); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.52,
   "image": "this.AnimatedImageResource_DC04631D_F8C6_0766_41EA_472AE719EDA5",
   "pitch": -9.82,
   "yaw": 163,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E40E01D6_F84A_02E3_41A0_82636B824D3A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.52,
   "yaw": 163,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E, this.camera_D13C8E2C_FEF0_075A_41EA_0839896793B1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.56,
   "image": "this.AnimatedImageResource_DC04C31D_F8C6_0766_41E6_54F2EB65368D",
   "pitch": -6.81,
   "yaw": -82.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E617AB7A_F84A_07A3_41DD_6FF28B8A336D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.56,
   "yaw": -82.95,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91, this.camera_D3853CDA_FEF0_04FE_41EC_FA258B74F318); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.72,
   "image": "this.AnimatedImageResource_DC732593_FD16_1443_41E3_F25D26BF7548",
   "pitch": -17.27,
   "yaw": -171.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E529B687_FD7A_7443_41E5_DC31F4F9122B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.72,
   "yaw": -171.44,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9, this.camera_D399DCDA_FEF0_04FE_41CD_81449A1C3272); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.83,
   "image": "this.AnimatedImageResource_DC728593_FD16_1443_41E6_7DCB441AA0FE",
   "pitch": -11.98,
   "yaw": -1.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5AD9234_FD7A_0C45_41C8_3D068EBD2444",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.83,
   "yaw": -1.5,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140, this.camera_D0B57D7C_FEF0_05BA_41E0_E90BBE62BD62); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.82,
   "image": "this.AnimatedImageResource_DC749593_FD16_1443_41EE_0C68E6E7D310",
   "pitch": -10.59,
   "yaw": -3.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E6F23E26_FD6A_1445_41E5_8B04C77F0906",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.82,
   "yaw": -3.2,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF234E30_FD6A_145C_41D6_E617471C7E90, this.camera_D0A0AD7C_FEF0_05BA_41B8_EB294BC6EF7D); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.75,
   "image": "this.AnimatedImageResource_DC747593_FD16_1443_41E1_47CD8237E4C4",
   "pitch": -10.67,
   "yaw": -176.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E6C07FAB_FD6B_F443_41D9_A5C4382AFE6D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.75,
   "yaw": -176.47,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "viewerArea": "this.viewer_uidCF233AEA_FEF0_0CDE_41EC_7B940AA71370",
 "id": "viewer_uidCF233AEA_FEF0_0CDE_41EC_7B940AA71370VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.56,
   "image": "this.AnimatedImageResource_DC02331D_F8C6_0766_41D1_ACE059955DDA",
   "pitch": -6.26,
   "yaw": -82.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5175725_F846_0FA1_41DD_1BD351662726",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.56,
   "yaw": -82.85,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.57,
   "image": "this.AnimatedImageResource_DC02731D_F8C6_0766_41DD_BC73691E7992",
   "pitch": -4.45,
   "yaw": -136.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E600724E_F846_01E2_41E6_D57475C876AE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.57,
   "yaw": -136.94,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E125F272_F846_01A2_41EE_4C9F4D77235E, this.camera_D3E1AD1B_FEF0_057E_41EF_12E717F81498); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.52,
   "image": "this.AnimatedImageResource_DC02C31D_F8C6_0766_41D6_DFB47224AFD5",
   "pitch": -9.95,
   "yaw": -177.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E63A17FA_F846_0EA2_41E0_D2FB6BB00328",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.52,
   "yaw": -177.44,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783, this.camera_D0EC2DAB_FEF0_055E_41E0_AF2919625767); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.78,
   "image": "this.AnimatedImageResource_CD4C0F7E_FD16_14C5_41CA_58F3EE6A0F16",
   "pitch": -21.02,
   "yaw": 1.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D96EF79C_FD2A_1444_41E9_5D128F2FB42F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.78,
   "yaw": 1.3,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9, this.camera_D01BCDAB_FEF0_055E_41C2_3E1D7441ADE0); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.62,
   "image": "this.AnimatedImageResource_CD4CFF7E_FD16_14C5_41E0_5CEBD7EFA98D",
   "pitch": -16.35,
   "yaw": -145.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA0EDD6D_FD2A_14C4_41DD_CDF07B4C9F79",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.62,
   "yaw": -145.95,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "id": "htmlText_D8F82787_F8CA_0F61_41D8_6B4E2DD4B97A",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText40552"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0D84B48_F846_07EF_41EB_51D535D34B80, this.camera_D0C63D8B_FEF0_055E_41E0_A4FCAD6761D2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.49,
   "image": "this.AnimatedImageResource_DC78D31D_F8C6_0766_41EC_C514FC835798",
   "pitch": -11.76,
   "yaw": -3.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E22827CB_F846_0EE1_41C6_F471FE021232",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.49,
   "yaw": -3.73,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E33D4901_F846_0361_41EB_B13248C71FFA, this.camera_D0DB2D8B_FEF0_055E_41DB_F6E9306233CF); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.53,
   "image": "this.AnimatedImageResource_DC07131D_F8C6_0766_41E6_8F53B4690547",
   "pitch": -9.4,
   "yaw": 178.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E2CBBC42_F846_01E2_41E8_C392563756A1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.53,
   "yaw": 178.94,
   "class": "HotspotPanoramaOverlayMap",
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
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17, this.camera_D1A9EDFB_FEF0_04BE_41E7_CE97052E7149); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.33,
   "image": "this.AnimatedImageResource_D1C7B841_FED0_0BCA_41D5_6E1B04977839",
   "pitch": -15.91,
   "yaw": 167.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE5B8CBF_FE30_04B6_41EF_B36606C93ECA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.33,
   "yaw": 167.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C, this.camera_D18D3DEB_FEF0_04DE_41E0_D6F9B27DD959); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.48,
   "image": "this.AnimatedImageResource_D1C71841_FED0_0BCA_41EE_E6714E9D2D43",
   "pitch": -22.16,
   "yaw": -92.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DB0D12C2_FED0_1CCE_41DE_651331A57D97",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.48,
   "yaw": -92.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F3306D94_FE30_054A_41ED_4328F4CD8452, this.camera_D1BBDDFB_FEF0_04BE_41D2_CB5E83F7E6FA); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.7,
   "image": "this.AnimatedImageResource_D1C69841_FED0_0BCA_41DA_ED67CD66C214",
   "pitch": -14.41,
   "yaw": -140.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DBC85151_FED0_1DCA_41D2_C1FE99F0E02B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.7,
   "yaw": -140.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.41
  }
 ]
},
{
 "id": "htmlText_D9722DAE_F8CA_02A2_41C6_76658ECC2D85",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "paddingTop": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText45029"
 }
},
{
 "map": {
  "width": 187.85,
  "x": 639.26,
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
  "class": "HotspotMapOverlayMap",
  "height": 173.97,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
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
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D2AF3286_F8C6_0162_41C7_6A5C2ECF5FF3",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 1390.36,
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
  "class": "HotspotMapOverlayMap",
  "height": 173.97,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
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
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D04E8287_F8C6_0161_41E3_2ED37AD54CBC",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 2215.38,
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
  "class": "HotspotMapOverlayMap",
  "height": 173.97,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
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
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DDB1012B_F8CA_03A1_41E9_C36807EF9EEB",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 2035.68,
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
  "class": "HotspotMapOverlayMap",
  "height": 173.97,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
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
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DEF09978_F9C6_03AF_41D1_17BABFAEF274",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 1827.68,
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
  "class": "HotspotMapOverlayMap",
  "height": 173.97,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
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
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DEB34C27_F9C6_01A2_41E6_2C631EEFE6F9",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 2990.51,
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
  "class": "HotspotMapOverlayMap",
  "height": 173.97,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
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
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE784806_F9C6_0162_41E4_2B13E8590359",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 4084.31,
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
  "class": "HotspotMapOverlayMap",
  "height": 173.97,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
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
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE30A456_F9C6_01E2_41DF_1F6D554C5B53",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 5322.01,
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
  "class": "HotspotMapOverlayMap",
  "height": 173.97,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
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
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DFEED59E_F9C6_0363_41DD_34BD2F585C96",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 4826.32,
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
  "class": "HotspotMapOverlayMap",
  "height": 173.97,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
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
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DF70F6C6_F9C6_0EE3_41E7_2FB78E69660D",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 4070.47,
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
  "class": "HotspotMapOverlayMap",
  "height": 173.97,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
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
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0D43436_F9C6_01A2_41D6_8568A8DE73A8",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 187.85,
  "x": 3250.67,
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
  "class": "HotspotMapOverlayMap",
  "height": 173.97,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
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
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0BC6EEE_F9C6_1EA2_41C8_311F02EAE7C5",
 "class": "AreaHotspotMapOverlay"
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_D83E5239_F8DE_01A1_41E2_92AEE4B33327",
  "this.IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83E6239_F8DE_01A1_41E6_78C235396A58",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_D83E1239_F8DE_01A1_41E5_88196F100AEF",
  "this.IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC",
 "scrollBarVisible": "rollOver",
 "right": 0,
 "width": 330,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 1044,
 "maxWidth": 553,
 "id": "Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6",
 "left": "4.24%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "16.364%",
 "url": "skin/Image_D187F5F9_FD1A_37CF_41D6_04A4BE0CDCD6.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "1.54%",
 "minWidth": 1,
 "height": "6.836%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image75720"
 }
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0EC24C5_FED0_04CA_41DD_81CDEDD8834A",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F3D4C5_FED0_04CA_41E9_08FA847D7332",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F32C60A2_FE30_1B4E_41E2_77629EF153B5_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F354C5_FED0_04CA_41E4_08452348F183",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC00031D_F8C6_0766_41E3_C640371472C3",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC00431D_F8C6_0766_4163_A6633DB7C0B2",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC00831D_F8C6_0766_41C4_14E88D8CFFF2",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE336F_F846_07A1_41E6_7BD0D93FA829_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC00E31D_F8C6_0766_41C1_B5B78EA94EA3",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CE93235E_F84E_07E3_41E6_8C51B9C62948",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08EA411_F85E_017E_41E0_BBC8757F163E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CE92835E_F84E_07E3_41EB_8BCEA3476961",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4E7F7E_FD16_14C5_41DB_734E66C00746",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E339EE12_FD3A_145D_41EE_6C1F4D4C5CEE_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4EEF7E_FD16_14C5_41DF_40207F6CFC8D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0FB44D5_FED0_04CA_41D3_B4C3B121A709",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3145B8B_FE30_0D5E_41EF_5186ED3C16BC_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0FA84D5_FED0_04CA_41EC_9FED8355EE4D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC0F431D_F8C6_0766_41E6_8202E9606D4C",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_DC0F831D_F8C6_0766_41E1_6DC3E9AB38E9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_DB610A81_F8C6_015E_41E9_F7397B5A0FBE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_DB7EFA81_F8C6_015E_41E7_BAE5327639C4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_DB7E0A81_F8C6_015E_41E4_0D59A767A48D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_DB7FFA81_F8C6_015E_41BB_060A4484E589",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_DB7C9A81_F8C6_015E_41EB_78E5E3B9A313",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_8_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_DB7C7A81_F8C6_015E_41B7_E73CD435E714",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_E1215927_F846_03A2_41E0_3C86E41E23DD_0_HS_9_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_DB7DFA81_F8C6_015E_41B7_F7905D405F53",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD77EF7B_FD16_14C3_41B9_BB60CDB93F1E",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_E3AEA4DE_FD3A_15C5_41ED_59851B3C9905_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CD485F7B_FD16_14C3_41A9_9A0AC0EB316F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC73C593_FD16_1443_41CD_CFA984217730",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF2A5D55_FD6A_14C4_41D5_C83170E63B91_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC73B593_FD16_1443_41D7_AE6A95014FC7",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F1F4C5_FED0_04CA_41D4_5E868EF659BB",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F164C5_FED0_04CA_41CB_EEB3C857D59A",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3121C0E_FE30_0B56_41CF_51A65198536F_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F0E4C5_FED0_04CA_41D3_72A1D8374BE3",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E33D4901_F846_0361_41EB_B13248C71FFA_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC78631D_F8C6_0766_41C0_E939DF204BC3",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F6A4D5_FED0_04CA_41ED_FA10C3CB333B",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F624D5_FED0_04CA_41E3_ADABBC2AEEB7",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F5F4D5_FED0_04CA_41D2_08D9E6BEF31E",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F315F7BF_FE30_04B6_41EF_0CDE01729E3C_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F574D5_FED0_04CA_41E9_E76A1A043EA6",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC6C3593_FD16_1443_41EC_3FA1ACCE31BD",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC580A1_FD6A_0C7F_41E5_ADDB9998F21F_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC6FB593_FD16_1443_41E4_B2F54E3055D0",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CE93935E_F84E_07E3_41D6_677503CD38E2",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D0E24_F85E_01A7_41CA_4F174F2876EC_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CE93735E_F84E_07E3_41EC_B606819DBADA",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC71A593_FD16_1443_41E2_585EB0C15DE0",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF28B1E5_FD6A_0FC4_41DA_7B7EB7D354C4_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC715593_FD16_1443_41E7_FBCFCF566AB7",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4D0F7E_FD16_14C5_41E7_2E8A90846DBB",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7385E_FD3A_1CC4_41E2_9F0352B9D783_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4D8F7E_FD16_14C5_41E0_F661303D6CCD",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D093029E_F85E_0162_41DA_6815D43B6956_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_C389C833_F846_01A2_41E8_674914BE09D6",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C61841_FED0_0BCA_41DF_C8B9006B3739",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C56841_FED0_0BCA_41E8_B91C2C585AA5",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3301561_FE30_05CA_41E4_899879F569A0_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C66841_FED0_0BCA_41EF_C3D05F976CA0",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4DDF7E_FD16_14C5_4197_C49A46B17EB0",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7F3EF_FD3A_73C4_41E4_AE2B28F03A8E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4E6F7E_FD16_14C5_41EC_E1D0AAD49DA7",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_C38BD832_F846_01A2_41E6_299B6E04C3FD",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D16CE_F85E_0EE2_41DB_6E0ABD118418_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_C3885832_F846_01A2_41E5_90BB42AF8C45",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1CD1831_FED0_0B4A_41DF_F9F1E513A774",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1CC9831_FED0_0B4A_41E3_20238A3810F8",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C3E831_FED0_0B4A_41EB_0D61EDD18E93",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C36831_FED0_0B4A_41EA_671AC47A8FD2",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F3306D94_FE30_054A_41ED_4328F4CD8452_0_HS_4_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C2C831_FED0_0B4A_41D1_72B7ACC90F48",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF29FE1F_FD6A_7443_41E3_B1989F0C6140_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC77A593_FD16_1443_41B5_113355C73433",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC727593_FD16_1443_41E0_807ADEDD1BBD",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC75F593_FD16_1443_41D0_F725F93E92D8",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_EF25FDEA_FD6A_37CD_41BF_0C1D3D30EAB9_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_DC756593_FD16_1443_41D9_A35611F14CF9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC07431D_F8C6_0766_4159_FA1AA73442F8",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC07B31D_F8C6_0766_41B4_774183835ED9",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D84B48_F846_07EF_41EB_51D535D34B80_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC07E31D_F8C6_0766_41E7_11A974A5BD05",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_C3889833_F846_01A2_41E0_60415008F34A",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_C3892833_F846_01A2_41E9_1A864C08D0EB",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D08F8CBE_F85E_02A2_41B8_E5BE7F157761_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C3895833_F846_01A2_41C7_903EBDB12CCC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD491F7B_FD16_14C3_41E9_71E02FD5D308",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3C7510C_FD3A_0C45_41D5_6A610394F1B8_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD49FF7B_FD16_14C3_41E0_8FCA5C3A7D2A",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC05231D_F8C6_0766_41AE_F27DE8D53993",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC05831D_F8C6_0766_4150_C9A3CA08EC10",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC05C31D_F8C6_0766_41EC_69B9955756A5",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0D9D6D4_F846_0EE7_41E9_99B80DD5F597_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC04331D_F8C6_0766_41E3_0D8D3512B197",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC01131D_F8C6_0766_41D6_CA411A49AEAC",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC01731D_F8C6_0766_41E3_0F8BC33EEC00",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E12E8DD7_F846_02E2_41B8_CABF057BC3FD_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC01B31D_F8C6_0766_41C3_636FDC0E309B",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CE9CF35D_F84E_07E1_41E0_101F2E7A926F",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D08741D2_F85E_02E3_41D9_4E14C5ED4E8C_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CE8EB380_F83A_075E_41D0_154C7C857A98",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC06431D_F8C6_0766_41E9_2F6B612F49B6",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC06831D_F8C6_0766_41D7_26F8E980C5AF",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEC109_F846_0361_41E0_DF10DBEF58F5_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC06F31D_F8C6_0766_41E2_A760CB10BED8",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC6E4593_FD16_1443_41B1_45545916FCDA",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC80C25_FD6A_F447_4183_5DB263E9C5EB_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC6E3593_FD16_1443_41C1_B0374C60D139",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CE91B35E_F84E_07E3_41BC_11B787D7DD91",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D08C80E7_F85E_02A2_41D9_ABEA20CEA143_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CE91635E_F84E_07E3_41E5_EC9CA43C9906",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC6F0593_FD16_1443_41DD_89ED25802034",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF24466E_FD6A_F4C5_41E8_8A2EF008DABD_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC6EE593_FD16_1443_41DA_9825CEE1CCAB",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F2C4C5_FED0_04CA_41D5_C9E4F60B0095",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F34FC663_FE30_07CE_41BF_153D3F77B742_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F274C5_FED0_04CA_41A1_9479D5EEC50E",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC03031D_F8C6_0766_41B9_DB99F65DA10B",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC03731D_F8C6_0766_41BF_7AE9E48D8B9D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E125F272_F846_01A2_41EE_4C9F4D77235E_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC03A31D_F8C6_0766_419C_4259CDED36DF",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CE92635E_F84E_07E3_41EE_15C53B8D7E1C",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D06D1A77_F85E_01A2_41E1_EF65F66F6600_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CE91C35E_F84E_07E3_41E1_0CA5C100D1DB",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC70D593_FD16_1443_41E5_7377804412AD",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC8E79E_FD6A_1444_41DA_56949347D25B_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC704593_FD16_1443_41C1_064C00C89CD8",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD481F7B_FD16_14C3_41E4_A053BC758C50",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3394B3C_FD3A_1C44_41E2_02AB2A95ED41_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD48AF7B_FD16_14C3_41C4_76B8D70D7F6A",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_E0ECA4C5_FED0_04CA_41CA_90D5F1481BD8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_E0EC34C5_FED0_04CA_41E2_9C8AD6CF6740",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_E0ED24C5_FED0_04CA_41C2_77B57090B4B6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F3306ADC_FE30_0CFA_41DD_34277382C6AD_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_E0ECD4C5_FED0_04CA_41DF_E73653FCB8F6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4A1F7B_FD16_14C3_41EA_26D49B1E8BDF",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E339A6C7_FD3A_35C4_41D5_8125205B43DD_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4AFF7E_FD16_14C5_41DB_07E2F76F34D2",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_E0EE14C5_FED0_04CA_41D3_B5D504D8D0E7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_E0ED94C5_FED0_04CA_419E_2B127BB8599E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F05E450D_FE30_055A_41D7_34271D4DE57A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_E0ED34C5_FED0_04CA_41DE_DEFC0B10043D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F784C5_FED0_04CA_41CA_70473A13A17E",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F33051F6_FE30_7CC9_41E8_73146627D1EE_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_E0F724D5_FED0_04CA_41ED_2CF50B9F889F",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4B0F7E_FD16_14C5_41D6_2CEF3FC726FB",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3DA0C82_FD3A_343D_41E7_99A8700162C9_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4BFF7E_FD16_14C5_41E1_8F34832306E0",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C25831_FED0_0B4A_41ED_96A7D894D539",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C1C831_FED0_0B4A_41E6_DD13E0487C74",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C15831_FED0_0B4A_41E9_7891C3101B7F",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C0B831_FED0_0B4A_41E8_931BA395E4CF",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F315D3EF_FE30_1CD6_41D6_712A014A4F17_0_HS_4_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C03841_FED0_0BCA_41E5_F177BC12F3C1",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC75A593_FD16_1443_41E8_C08BED78D6C5",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EF234E30_FD6A_145C_41D6_E617471C7E90_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC751593_FD16_1443_41E1_B0A4205EE97D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CE9C535E_F84E_07E3_41D9_D02B257628F2",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_D089D809_F85E_016E_41D8_1AEA2E133DB5_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CE9C335E_F84E_07E3_41E6_93C9AB7D0121",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_EE0E8A88_FD6A_1C4D_41EC_84A16D874DC4_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC6C5593_FD16_1443_41EB_6161E2A0071C",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC74C593_FD16_1443_41CD_42A1C340AA70",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC805F4_FD6A_17C5_41E4_7A80387E2741_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC723593_FD16_1443_41B1_917A8FBB6FD5",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC04631D_F8C6_0766_41EA_472AE719EDA5",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEDCAA_F846_02A3_41E1_93591EE64A51_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC04C31D_F8C6_0766_41E6_54F2EB65368D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC732593_FD16_1443_41E3_F25D26BF7548",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC83551_FD6A_34DF_41E7_DE226C3B6446_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC728593_FD16_1443_41E6_7DCB441AA0FE",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC749593_FD16_1443_41EE_0C68E6E7D310",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_ECC80624_FD6A_7445_41E8_59B94C6B4EA8_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC747593_FD16_1443_41E1_47CD8237E4C4",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC02331D_F8C6_0766_41D1_ACE059955DDA",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC02731D_F8C6_0766_41DD_BC73691E7992",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CE282B_F846_01A1_41DD_36E5CB1CB44A_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC02C31D_F8C6_0766_41D6_DFB47224AFD5",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4C0F7E_FD16_14C5_41CA_58F3EE6A0F16",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E3399290_FD3A_0C5C_41E2_B903795686D7_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CD4CFF7E_FD16_14C5_41E0_5CEBD7EFA98D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC78D31D_F8C6_0766_41EC_C514FC835798",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_E0CEB598_F846_036E_41A4_501C97854C8E_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_DC07131D_F8C6_0766_41E6_8F53B4690547",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C7B841_FED0_0BCA_41D5_6E1B04977839",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C71841_FED0_0BCA_41EE_E6714E9D2D43",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_F33039C1_FE30_0CCB_41D1_7088A1E1D505_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_D1C69841_FED0_0BCA_41DA_ED67CD66C214",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_D83E5239_F8DE_01A1_41E2_92AEE4B33327",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.4,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "width": 50,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054.png",
 "borderSize": 0,
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC, true, 0, this.effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16, 'showEffect', false); this.setComponentVisibility(this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_D83E4239_F8DE_01A1_418B_8EA356A42054_rollover.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container"
 },
 "children": [
  "this.Container_D83E0239_F8DE_01A1_41D0_F56FFF66140C"
 ],
 "id": "Container_D83E1239_F8DE_01A1_41E5_88196F100AEF",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "90%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "paddingLeft": 0,
 "id": "IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A",
 "transparencyActive": true,
 "right": 9,
 "width": 50,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A.png",
 "horizontalAlign": "center",
 "bottom": "40%",
 "top": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_D83E2239_F8DE_01A1_41EC_4FC08A3084BC, false, 0, this.effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0, 'hideEffect', false); this.setComponentVisibility(this.Container_D83E6239_F8DE_01A1_41E6_78C235396A58, true, 0, this.effect_4983BDE0_570B_E541_41B3_32D6394D0ACC, 'showEffect', false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_D83C9239_F8DE_01A1_41E5_7E260CEEEB3A_rollover.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "backgroundColorRatios": [
  0.11
 ],
 "data": {
  "name": "- Buttons set"
 },
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
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "paddingRight": 40,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.68,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 40,
 "class": "Container",
 "backgroundOpacity": 0.4,
 "paddingBottom": 40,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_D83FF239_F8DE_01A1_41E8_88289901D50C",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "url": "skin/Image_D83FF239_F8DE_01A1_41E8_88289901D50C.png",
 "minHeight": 30,
 "horizontalAlign": "left",
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "0%",
 "minWidth": 40,
 "height": "25%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "propagateClick": true,
 "data": {
  "name": "Image Company"
 }
},
{
 "data": {
  "name": "-Level 1"
 },
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
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "bottom": "26%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "26%",
 "layout": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_D83CE239_F8DE_01A1_41ED_667EE3235A14",
  "this.HTMLText_D83CD239_F8DE_01A1_41D9_0860B2AF7FB3",
  "this.Container_D83CC239_F8DE_01A1_41EE_85DF1A123FF2",
  "this.Container_D83C7239_F8DE_01A1_41D1_F44EDA364441"
 ],
 "id": "Container_D83CF239_F8DE_01A1_41C9_AB076235A8E0",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "bottom",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 130,
 "layout": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-1"
 },
 "children": [
  "this.Button_D83C1239_F8DE_01A1_41D6_558AD54762AD",
  "this.Container_D83C0239_F8DE_01A1_41EE_BD3BD7A9642D",
  "this.Container_D83DF239_F8DE_01A1_4198_547846E01F95",
  "this.Button_D83DE239_F8DE_01A1_41B4_6E9C69515E17"
 ],
 "id": "Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "layout": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-2"
 },
 "children": [
  "this.Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D",
  "this.Container_D83CA239_F8DE_01A1_41BC_B2761C1F2FC7",
  "this.Container_D83C9239_F8DE_01A1_41DC_8AFD484DE6D7",
  "this.Button_D83C8239_F8DE_01A1_41DF_711BF6E51B6A"
 ],
 "id": "Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "layout": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-3"
 },
 "children": [
  "this.Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F",
  "this.Container_D83F4239_F8DE_01A1_41E4_ED596ADEA119",
  "this.Container_D83F3239_F8DE_01A1_41A1_4852C78B3F11",
  "this.Button_D83F2239_F8DE_01A1_41D9_732F6E60A6E7"
 ],
 "id": "Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "layout": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-4"
 },
 "children": [
  "this.Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4",
  "this.Container_D83FE239_F8DE_01A1_41D3_FBDA8CA40BC4",
  "this.Container_D83FD239_F8DE_01A1_41CD_E150A46E78BB",
  "this.Button_D83FC239_F8DE_01A1_41ED_A362839BA01E"
 ],
 "id": "Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "layout": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-5"
 },
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
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "layout": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-6"
 },
 "children": [
  "this.Button_D83C0239_F8DE_01A1_41C4_33122759A932",
  "this.Container_D83DE239_F8DE_01A1_41E3_BF8402B43AD2",
  "this.Container_D83DD239_F8DE_01A1_41C9_1AE732875272",
  "this.Button_D83DC239_F8DE_01A1_41D3_5AF86AEFD7DE",
  "this.Button_D79424DE_FED0_04F6_41EB_CF35D6E8A52B"
 ],
 "id": "Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "layout": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83FD239_F8DE_01A1_41EB_F702C37C1EC3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83FC239_F8DE_01A1_41E1_F6D3D0F13731",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Tour Info"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "44c >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_2A237CC9_317A_007D_4176_36E090D2269C, 'hideEffect', false); this.setComponentVisibility(this.Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D, true, 0, this.effect_1A65691F_310E_0014_41BF_C2605660352F, 'showEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83FB239_F8DE_01A1_41D1_DD7782C73A51",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83FA239_F8DE_01A1_41D6_194EBE0D2616",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Panorama List"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "44b >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D, true, 0, this.effect_F2D95D32_FD1A_145D_41DF_3B15A8774774, 'showEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_EDE31937_FD1A_1C43_41E4_B1DB0E7241B4, 'hideEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F9239_F8DE_01A1_41A4_5D0E0A77149D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83F8239_F8DE_01A1_41E1_76FC118CAE45",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Location"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "pressedLabel": "Inserdt Text",
 "mode": "push",
 "height": 50,
 "label": "36 >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_112869ED_311E_0034_41C2_70A247245BB7, 'hideEffect', false); this.setComponentVisibility(this.Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385, true, 0, this.effect_18BBC752_310E_006C_41B5_0D8B802FB057, 'showEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F7239_F8DE_01A1_41C0_0443DA8D3FC3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83F6239_F8DE_01A1_41E3_A895FDF814B9",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Floorplan"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "ortho >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB, 'hideEffect', false); this.setComponentVisibility(this.Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4, true, 0, this.effect_163FEAB2_310E_002C_416A_B20913F49C44, 'showEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F5239_F8DE_01A1_41C1_51CBD66A5270",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83F4239_F8DE_01A1_41B5_28F3F291CA5F",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Photoalbum"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "Panel >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_164A1542_310E_006C_41C8_B7C2AB9D709D, 'hideEffect', false); this.setComponentVisibility(this.Container_D83F1239_F8DE_01A1_41D9_12715517E333, true, 0, this.effect_19F0E9E8_310A_003B_41C2_00E6E4570ABD, 'showEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F3239_F8DE_01A1_41E5_BF45B4748C56",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83F2239_F8DE_01A1_41DB_D384749A91D3",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Contact"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "Direksi kit >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, false, 0, this.effect_18885C2A_310A_003C_41B2_9B60A3A66C9F, 'hideEffect', false); this.setComponentVisibility(this.Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7, true, 0, this.effect_1622AA86_310A_00F4_41A8_DBA0885BA83A, 'showEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F1239_F8DE_01A1_41D2_0E8D22A7A304",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "blue line"
 },
 "id": "Container_D83CE239_F8DE_01A1_41ED_667EE3235A14",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 40,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "id": "HTMLText_D83CD239_F8DE_01A1_41D9_0860B2AF7FB3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 78,
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "data": {
  "name": "-Container Icons 1"
 },
 "children": [
  "this.IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A",
  "this.IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422",
  "this.IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A",
  "this.IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F"
 ],
 "id": "Container_D83CC239_F8DE_01A1_41EE_85DF1A123FF2",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 56,
 "layout": "horizontal",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 7,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "-Container Icons 2"
 },
 "children": [
  "this.IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112",
  "this.IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC",
  "this.IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237",
  "this.IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1"
 ],
 "id": "Container_D83C7239_F8DE_01A1_41D1_F44EDA364441",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 44,
 "layout": "horizontal",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 7,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83C1239_F8DE_01A1_41D6_558AD54762AD",
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconURL": "skin/Button_D83C1239_F8DE_01A1_41D6_558AD54762AD.png",
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83C2239_F8DE_01A1_41D3_297EB7FA0B8D, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_D83C1239_F8DE_01A1_41D6_558AD54762AD_rollover.png",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83C0239_F8DE_01A1_41EE_BD3BD7A9642D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_D83DF239_F8DE_01A1_4198_547846E01F95",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83DE239_F8DE_01A1_41B4_6E9C69515E17",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "15 Januari 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 21)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D",
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconURL": "skin/Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D.png",
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83CC239_F8DE_01A1_41EA_A6F8389BC33D, false, 0, this.effect_EDB05026_FD1A_0C44_41EA_7A7383BCF1B7, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_EDB1AC01_FD1E_143F_41E0_CF7D100094DC, 'showEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_D83CB239_F8DE_01A1_41ED_9A6795E3E70D_rollover.png",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83CA239_F8DE_01A1_41BC_B2761C1F2FC7",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_D83C9239_F8DE_01A1_41DC_8AFD484DE6D7",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83C8239_F8DE_01A1_41DF_711BF6E51B6A",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "15 Januari 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 34)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F",
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconURL": "skin/Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F.png",
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83F6239_F8DE_01A1_41DD_4D1CDFE35385, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_D83F5239_F8DE_01A1_41CE_14CC5EBEF12F_rollover.png",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83F4239_F8DE_01A1_41E4_ED596ADEA119",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_D83F3239_F8DE_01A1_41A1_4852C78B3F11",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83F2239_F8DE_01A1_41D9_732F6E60A6E7",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "15 Januari 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4",
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconURL": "skin/Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4.png",
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83E1239_F8DE_01A1_41D7_04B6DD0F0CA4, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_D83E0239_F8DE_01A1_41D4_3098BEAEC6A4_rollover.png",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83FE239_F8DE_01A1_41D3_FBDA8CA40BC4",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_D83FD239_F8DE_01A1_41CD_E150A46E78BB",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83FC239_F8DE_01A1_41ED_A362839BA01E",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "width": "100%",
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderSize": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Soon",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83F0239_F8DE_01A1_41EE_30315EC39D44",
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconURL": "skin/Button_D83F0239_F8DE_01A1_41EE_30315EC39D44.png",
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83F1239_F8DE_01A1_41D9_12715517E333, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_D83F0239_F8DE_01A1_41EE_30315EC39D44_rollover.png",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83CF239_F8DE_01A1_41A0_7990D06A16E5",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_D83CE239_F8DE_01A1_41C8_03BE266C9216",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83CB239_F8DE_01A1_41E1_E9E00A4EBA21",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "7 Desember 2025",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_D64A6F82_FDFA_743C_41E8_60EAE178AD5D, null, '90%', '90%', this.FadeInEffect_D64A5F82_FDFA_743C_41C8_4D4FE867A3C6, this.FadeOutEffect_D64ABF82_FDFA_743C_41E9_D223E5A0B06A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingBottom':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83CA239_F8DE_01A1_41E0_2A57361F3EEB",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 2"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "14 Desember 2025",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_D6499F82_FDFA_743C_41E5_ABA7C2DD099F, null, '90%', '90%', this.FadeInEffect_D6498F82_FDFA_743C_41EC_13E1FCDF8A59, this.FadeOutEffect_D649EF82_FDFA_743C_41EE_7633738A8085, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingBottom':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83C9239_F8DE_01A1_41C7_9FD986659EA7",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "pressedLabel": "Lorem Ipsum",
 "mode": "push",
 "height": 36,
 "label": "21 desember 2025",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_D648DF82_FDFA_743C_41D9_C5C069DDE7ED, null, '90%', '90%', this.FadeInEffect_D6373F82_FDFA_743C_41E2_A2803042A821, this.FadeOutEffect_D6372F82_FDFA_743C_41EF_688A1663F866, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingBottom':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83C8239_F8DE_01A1_41ED_1459DB6FE1FA",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 4"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "28 Desember 2025",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_D648BF82_FDFA_743C_41A1_7F58460034A1, null, '90%', '90%', this.FadeInEffect_D648AF82_FDFA_743C_41E4_8379F7D70256, this.FadeOutEffect_D6488F82_FDFA_743C_41E7_F117900A198E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingBottom':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83C7239_F8DE_01A1_41E8_81BD8A73CC3E",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 5"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "03 Januari 2025",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_D6379F82_FDFA_743C_41D6_6DC4A9EB32EC, null, '90%', '90%', this.FadeInEffect_D6378F82_FDFA_743C_41B8_24BE91EE0F6A, this.FadeOutEffect_D637FF82_FDFA_743C_41CE_660518019038, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingBottom':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83C6239_F8DE_01A1_41EC_FD9BEA80D5C6",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 6"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "11 Januari 2025",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_D636DF82_FDFA_743C_41E0_C85A6D9551B8, null, '90%', '90%', this.FadeInEffect_D636CF82_FDFA_743C_41E1_321D30D19850, this.FadeOutEffect_D6353F82_FDFA_743C_41C2_56747B93DE41, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingBottom':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83C5239_F8DE_01A1_41D0_A8EA4615E52A",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 7"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "18 Januari 2025",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_D6340F82_FDFA_743C_41DB_990D3E76034C, null, '90%', '90%', this.FadeInEffect_D6347F82_FDFA_743C_41E9_02CE7FC545B4, this.FadeOutEffect_D6346F82_FDFA_743C_41CF_21F01FE38B8F, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingBottom':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83C4239_F8DE_01A1_41EC_75CFF5ABCA12",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 8"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "25 Januari 2025",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.showPopupImage(this.ImageResource_D6337F82_FDFA_743C_41D4_B9D14FEA7804, null, '90%', '90%', this.FadeInEffect_D6335F82_FDFA_743C_41CC_00D51ED57F0E, this.FadeOutEffect_D6334F82_FDFA_743C_41CF_B29F67F212C4, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingBottom':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','paddingTop':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83C0239_F8DE_01A1_41C4_33122759A932",
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconURL": "skin/Button_D83C0239_F8DE_01A1_41C4_33122759A932.png",
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_D83C1239_F8DE_01A1_41D9_B036D3CB90E7, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_D83FE239_F8DE_01A1_41EE_FD5410C8F9DB, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_D83C0239_F8DE_01A1_41C4_33122759A932_rollover.png",
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_D83DE239_F8DE_01A1_41E3_BF8402B43AD2",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_D83DD239_F8DE_01A1_41C9_1AE732875272",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D83DC239_F8DE_01A1_41D3_5AF86AEFD7DE",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "15 Januari 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_D79424DE_FED0_04F6_41EB_CF35D6E8A52B",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "paddingRight": 0,
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "borderSize": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "27 Januari 2026",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 44)",
 "class": "Button",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A",
 "transparencyActive": true,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_D83CB239_F8DE_01A1_41DC_B04D3941CE8A_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_D83CA239_F8DE_01A1_41D1_2D6CE7CB2422_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Thumblist"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://maps.app.goo.gl/1pubcp9CUWTmDFFbA', '_blank')",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_D83C9239_F8DE_01A1_41BD_3E089183FA4A_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Location"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_D83C8239_F8DE_01A1_41C3_A0F65F66D13F_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Photoalbum"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://www.instagram.com/pjkp_kipp1a?igsh=MXE0NjBhbjdqYzVnaw==', '_blank')",
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_pressed_rollover.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_rollover.png",
 "pressedIconURL": "skin/IconButton_D83C5239_F8DE_01A1_41DD_A1EA905A1112_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Realtor"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_D83C4239_F8DE_01A1_41E6_36D2265B27BC_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Video"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237",
 "transparencyActive": true,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_D83C6239_F8DE_01A1_41E3_66D1AAC77237_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Floorplan"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1",
 "transparencyActive": false,
 "width": 50,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1.png",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1_pressed_rollover.png",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_D83C3239_F8DE_01A1_41E4_0C0F3B4477E1_pressed.png",
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton --"
 }
}],
 "start": "this.init()",
 "data": {
  "name": "Player22681"
 },
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
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "minHeight": 20,
 "scripts": {
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
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
