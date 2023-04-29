# tailwindcss-bleed
Easy to use full-bleed layout.

## Basic usage

```html
<!-- Child elements have space on the left and right -->
<div class="bleed-4">
  <!-- Hero image in full-bleed -->
  <div class="bleed-none"></div>
  <div>Contents</div>
  <div>Contents</div>
  <div class="bleed-none">Contents in full-bleed</div>
</div>
```

| class           |                                          |
|-----------------|------------------------------------------|
| bleed-{spacing} | Space the left and right by the spacing. |
| bleed-none      | Ignore spaces                            |
