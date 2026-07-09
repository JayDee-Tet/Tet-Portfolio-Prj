"use strict";
const navToggle1 = document.getElementById('navToggle1');
const navLinks = document.getElementById('navLinks');
const navToggle2 = document.getElementById('navToggle2');
const navToggle2Links = document.getElementById('navToggle2Links');
const navCaret = document.getElementById('navCaret');

navToggle1.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle1.classList.toggle('active'); //
});

navToggle2.addEventListener('click', (e) => {
    e.stopPropagation();
    navToggle2Links.classList.toggle('active');
    navCaret.classList.toggle('fa-caret-down');
    navCaret.classList.toggle('fa-caret-up');
});

document.addEventListener('click', (e) => {
    const target = e.target;
    if (!navLinks.contains(target) && !navToggle1.contains(target)) {
        navLinks.classList.remove('active');
        navToggle2Links.classList.remove('active');
        navToggle1.classList.remove('active');
        navCaret.classList.remove('fa-caret-up');
        navCaret.classList.add('fa-caret-down');
    }
});

document.addEventListener('click', (e) => {
    const target = e.target;
    if (!navLinks.contains(target) && !navToggle1.contains(target)) {
        navLinks.classList.remove('active');
        navToggle2Links.classList.remove('active');
        navToggle1.classList.remove('active');
    }
});