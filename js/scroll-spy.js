(function () {
  'use strict';

  var ids = ['home', 'projects', 'project-stars', 'project-vote', 'project-course', 'project-site', 'hobbies'];
  var targets = [];
  ids.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) { targets.push(el); }
  });
  if (!targets.length) { return; }

  var linkGroups = {};
  var links = document.querySelectorAll('.sidebar a[href^="#"], .mobile-nav a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    var id = links[i].getAttribute('href').slice(1);
    (linkGroups[id] = linkGroups[id] || []).push(links[i]);
  }

  function setActive(id) {
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    var group = linkGroups[id];
    if (group) {
      for (var j = 0; j < group.length; j++) {
        group[j].classList.add('active');
      }
    }
    if (id.indexOf('project-') === 0 && linkGroups['projects']) {
      var parents = linkGroups['projects'];
      for (var k = 0; k < parents.length; k++) {
        parents[k].classList.add('active');
      }
    }
  }

  var ticking = false;
  function update() {
    ticking = false;
    var pos = window.scrollY + window.innerHeight * 0.3;
    var current = targets[0];
    for (var i = 0; i < targets.length; i++) {
      if (targets[i].getBoundingClientRect().top + window.scrollY <= pos) {
        current = targets[i];
      }
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = targets[targets.length - 1];
    }
    setActive(current.id);
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });

  update();
})();
