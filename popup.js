// Copyright (c) 2017 Kelvin Jimenez. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Remove wall from current page.
 */
function removeWall() {
  var script = 'document.body.style="overflow-y:auto;";\
  document.getElementsByClassName("g-overlay")[0].style = "z-index: -1";\
  document.getElementById("metered_overlay").style="z-index:-1"';
  chrome.tabs.executeScript({
    code: script
  });

}

document.addEventListener('DOMContentLoaded', () => {

  removeWall();
});

chrome.webNavigation.onCompleted.addListener(function() {
  removeWall();
});
