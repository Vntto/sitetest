function setTheme(darkTheme) {
    if (darkTheme) {
        document.documentElement.style.setProperty('--main-bg', '#24292e');
        document.documentElement.style.setProperty('--main-fg', '#ffffff');
        document.documentElement.style.setProperty('--main-accent', '#37f198');
        document.documentElement.style.setProperty('--toggle-bg', '#dfdfdf');
        document.documentElement.style.setProperty('--toggle-fg', '#24292e');
        document.documentElement.style.setProperty('--input-bg', '#e5e5e5');
        document.documentElement.style.setProperty('--button-bg', '#e5e5e5');
    } else {
        document.documentElement.style.setProperty('--main-bg', '#dfdfdf');
        document.documentElement.style.setProperty('--main-fg', '#000000');
        document.documentElement.style.setProperty('--main-accent', '#006674');
        document.documentElement.style.setProperty('--toggle-bg', '#24292e');
        document.documentElement.style.setProperty('--toggle-fg', '#dfdfdf');
        document.documentElement.style.setProperty('--input-bg', '#c5c5c5');
        document.documentElement.style.setProperty('--button-bg', '#24292e');
    }

    localStorage.setItem('darkTheme', darkTheme.toString());
}

setTheme(localStorage.getItem('darkTheme') === 'true');
