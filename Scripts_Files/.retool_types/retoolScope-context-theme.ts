const _LEVEL_1 = {
  "_theme_automatic": ["#fde68a","#eecff3","#a7f3d0","#bfdbfe","#c7d2fe","#fecaca","#fcd6bb"] as const,
}
const theme = {
  "_selector": ["theme"] as const,
    /**
  * Set the mode for the current app theme, if it has multiple modes.
  * @example `theme.setMode('Dark', { persist: true })`
  * @param modeName
  * @param options
  * @param options.persist If enabled, the selected mode will be persisted across sessions in this browser for all apps that use the same theme.
  **/
  setMode: (modeName: string, options: {persist: boolean | void}): void => undefined,
  "primary": "#0669bf",
  "success": "#059669",
  "labelFont": {
    "_selector": ["theme","labelFont"] as const,
    "size": "12px",
    "fontWeight": 500
  } as const,
  "mode": null,
  "danger": "#dc2626",
  "labelEmphasizedFont": {
    "_selector": ["theme","labelEmphasizedFont"] as const,
    "size": "12px",
    "fontWeight": 600
  } as const,
  "surfaceSecondary": "#ffffff",
  "mediumElevation": "0 0 5px 1px rgba(0, 0, 0, 0.06)",
  "lowElevation": "0 0 2px 1px rgba(0, 0, 0, 0.05)",
  "automatic": _LEVEL_1["_theme_automatic"] as RetoolArrayWrapper<["theme","automatic"], typeof _LEVEL_1["_theme_automatic"], 7>,
  "info": "#3170f9",
  "defaultFont": {
    "_selector": ["theme","defaultFont"] as const,
    "size": "12px",
    "fontWeight": 400
  } as const,
  "tertiary": "",
  "highlight": "#fde68a",
  "secondary": "",
  "surfacePrimary": "#ffffff",
  "h1Font": {
    "_selector": ["theme","h1Font"] as const,
    "size": "36px",
    "fontWeight": 700
  } as const,
  "canvas": "#f6f6f6",
  "h2Font": {
    "_selector": ["theme","h2Font"] as const,
    "size": "28px",
    "fontWeight": 700
  } as const,
  "tokens": {
    "_selector": ["theme","tokens"] as const
  } as const,
  "h3Font": {
    "_selector": ["theme","h3Font"] as const,
    "size": "24px",
    "fontWeight": 700
  } as const,
  "highElevation": "0 4px 16px 0 rgba(0, 0, 0, 0.12), 0 16px 32px 0 rgba(55, 55, 55, 0.08)",
  "h4Font": {
    "_selector": ["theme","h4Font"] as const,
    "size": "18px",
    "fontWeight": 700
  } as const,
  "h5Font": {
    "_selector": ["theme","h5Font"] as const,
    "size": "16px",
    "fontWeight": 700
  } as const,
  "warning": "#cd6f00",
  "h6Font": {
    "_selector": ["theme","h6Font"] as const,
    "size": "14px",
    "fontWeight": 700
  } as const,
  "borderRadius": "4px",
  "surfacePrimaryBorder": "",
  "textDark": "#0d0d0d",
  "textLight": "#ffffff",
  "surfaceSecondaryBorder": ""
} as const
