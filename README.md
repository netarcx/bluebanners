# Blue banners

Open `index.html` in a browser to see examples; no build is required. The banner stylesheet loads Roboto from Google Fonts; a sans-serif fallback is used if it is unavailable.

## Use on another website

Copy `bluebanners.css`, `bluebanners.js`, and `first_icon.svg` to your website. Adjust the paths below to match their location:

```html
<link rel="stylesheet" href="/assets/bluebanners.css">
<div id="awards"></div>
<script src="/assets/bluebanners.js"></script>
<script>
  document.getElementById('awards').appendChild(createBlueBanner({
    award: 'Winner',
    event: '2020 Lake Superior Regional',
    logoUrl: '/assets/first_icon.svg'
  }));
</script>
```

A four-digit year at the start of `event` is displayed on its own line above the event name, following the [FIRST banner reference](https://frb.firstinspiresawards.com/products/first%C2%AE-banners). Text without a leading year is displayed as supplied.

Call `createBlueBanner` for each award. It returns a DOM element, which you can append wherever you want. Use `longAward: true` and/or `longEvent: true` for the smaller text styles used for longer names. The default logo URL is `first_icon.svg` relative to the page, so set `logoUrl` when the asset is elsewhere. Arrange multiple banners with your site's layout, such as flexbox with a gap.

The examples are static; they do not automatically fetch team awards. Banner styling and the FIRST icon are based on assets from The Blue Alliance; the FIRST logo belongs to its respective owner.

## FIRST Robotics Competition logo version

Open `frc-banners.html` for the alternate design, or `team-1816.html` for the full Team 1816 example, including the 2022 state championship. It uses the unmodified reverse-color vertical program logo from [FIRST's official logo downloads](https://www.firstinspires.org/brand/logos-guidelines), displayed at the 120-pixel digital minimum specified by the [FIRST branding guidelines](https://www.firstinspires.org/hubfs/web/about/policy/first-brand-guidelines.pdf?hsLang=en). The banners are 240 × 400 pixels to preserve the 3:5 ratio and space around the logo.

To use this version on another page, include `bluebanners-frc.css` after `bluebanners.css`, copy `first-robotics-competition-reverse.png`, and add the class and logo URL when creating each banner:

```js
const banner = createBlueBanner({
  award: 'Winner',
  event: '2021 Gallium Group',
  logoUrl: '/assets/first-robotics-competition-reverse.png'
});
banner.classList.add('blue-banner--frc');
document.getElementById('awards').appendChild(banner);
```

Keep the logo at its specified size and preserve its proportions and clear space when adapting the layout. FIRST limits use of the program logo to official team, event, or program materials; consult its current logo and intellectual-property policies for the intended site.
