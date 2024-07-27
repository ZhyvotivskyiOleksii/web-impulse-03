'use strict';

const switchers = document.querySelectorAll('.switcher');
const nights = document.querySelectorAll('.night');
const suns = document.querySelectorAll('.sun');
const parents = document.querySelectorAll('.mob-parent, .parent'); // выбор всех нужных родительских элементов

// Function to apply theme
const applyTheme = (theme, initialLoad = false) => {
    if (initialLoad) {
        document.body.classList.add('no-transition');
    }

    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        parents.forEach(parent => {
            parent.style.boxShadow = 'var(--shadow-night)';
        });
        switchers.forEach(sw => {
            sw.classList.remove('sunny');
            sw.classList.add('dark');
        });
    } else {
        document.body.classList.remove('dark-mode');
        parents.forEach(parent => {
            parent.style.boxShadow = 'var(--shadow-sun)';
        });
        switchers.forEach(sw => {
            sw.classList.remove('dark');
            sw.classList.add('sunny');
        });
    }

    if (!initialLoad) {
        localStorage.setItem('theme', theme);
    }

    if (initialLoad) {
        setTimeout(() => document.body.classList.remove('no-transition'), 100);
    }
};

// Load theme from localStorage or system preference
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'sunny');
    applyTheme(currentTheme, true);
});

// Event listeners for manual theme change
nights.forEach(night => {
    night.addEventListener('click', () => {
        applyTheme('dark');
    });
});

suns.forEach(sun => {
    sun.addEventListener('click', () => {  
        applyTheme('sunny');
    });
});

// Event listener for system theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'sunny';
    applyTheme(newColorScheme);
});
