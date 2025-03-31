const utils = {
  /**
  * Fire confetti 🎉
  * @example utils.confetti()
  **/
  confetti: (): unknown => undefined as unknown,
  /**
  * Sets the clipboard's content to the provided string value.
  * @example `utils.copyToClipboard('value')`
  * @param value
  **/
  copyToClipboard: (value: string): unknown => undefined as unknown,
  /**
  * Downloads the current Retool page as a PDF with the provided fileName. 
  *     
  * An optional second parameter lets you provide an array of components (e.g. ['select1', 'textinput1']) and/or an array of css selectors to determine which elements are included or excluded from the screenshot. 
  * You can also pass a numerical "scale" parameter to configure the resolution (defaults to window.devicePixelRatio).
  * @example `utils.downloadPage(fileName, { selectorsToExclude, componentsToExclude, selectorsToInclude, componentsToInclude, scale })`
  * @param fileName
  **/
  downloadPage: (fileName: string): unknown => undefined as unknown,
  /**
  * Serializes the current Retool page as a base64 PDF string. 
  * An optional parameter lets you provide an array of components (e.g. ['select1', 'textinput1']) and/or an array of css selectors to determine which elements are included or excluded from the screenshot.
  * You can also pass a numerical "scale" parameter to configure the resolution (defaults to window.devicePixelRatio).
  * @example `utils.serializePage({ selectorsToExclude, componentsToExclude, selectorsToInclude, componentsToInclude, scale })`
  **/
  serializePage: (): unknown => undefined as unknown,
  /**
  * Downloads data using fileName (string) and fileType (string) if possible.
  * @example `utils.downloadFile(data, fileName, fileType)`
  * @param data
  * @param fileName
  * @param fileType
  **/
  downloadFile: (data: string | object, fileName: string, fileType: string): Promise<void> => undefined as unknown as Promise<void>,
  /**
  * Download a file with the referenced tabular data.
  * @example `utils.exportData(table1.data, 'fileName', 'csv')`
  * @param data The data to download. Accepts an array of entries or an object mapping column names to arrays of values.
  * @param fileName The downloaded file's name without an extension.
  * @param fileType
  * @param options
  * @param options.sheetName
  **/
  /**
  * Returns a timestamp and an object containing the current lat/long location of the user. The onSuccess object argument is optional.
  * @example `utils.getCurrentPosition({ onSuccess: (res) => void })`
  **/
  getCurrentPosition: (): unknown => undefined as unknown,
  /**
  * Converts the contents of a Blob or File URL to a base64 string.
  * @example `utils.getDataByObjectURL(signature1.value)`
  **/
  getDataByObjectURL: (): unknown => undefined as unknown,
  /**
  * [Mobile only] Returns the managed app config object
  * @example `utils.getManagedAppConfig()`
  **/
  getManagedAppConfig: (): unknown => undefined as unknown,
  /**
  * Retool uses client-side routing by default when `newTab` is `false`.
  * @example `utils.openApp(pageUuid, { queryParams: { key: 'value' }, newTab: true })`
  * @param uuid Note: if a user does not have access to the selected app this action will fail.
  * @param options
  * @param options.pageName
  * @param options.queryParams
  * @param options.hashParams
  * @param options.newTab
  **/
  openApp: (uuid: any, options: {pageName: any, queryParams: any, hashParams: any, newTab: boolean}): unknown => undefined as unknown,
  /**
  * Opens a URL (string) in a new tab by default. Pass in { newTab: false } to open url in current tab. Pass in { forceReload: true } to prevent client side routing and force a page reload. URL string must start with http:// or https://.
  * @example `utils.openUrl(url, { newTab: boolean = true, forceReload: boolean = false })`
  * @param url
  * @param options
  * @param options.newTab
  * @param options.forceReload Prevents client-side routing and forces a page reload.
  **/
  openUrl: (url: string, options: {newTab: boolean, forceReload: boolean}): unknown => undefined as unknown,
  /**
  * Shows a notification message on the top right corner of the screen for `duration` seconds (default 4.5s). Use this to display messages like error messages after a query fails. Supported `notificationTypes` are : "info" | "success" | "warning" | "error"
  * @example `utils.showNotification({ title, description, notificationType, duration })`
  * @param options
  * @param options.title
  * @param options.description
  * @param options.notificationType
  * @param options.duration
  **/
  showNotification: (options: {title: any, description: any, notificationType: 'info'|'success'|'warning'|'error', duration: any}): unknown => undefined as unknown,
  /**
  * [Android White-label Only] Clears the log of the user's locations
  * @example `utils.clearLocationLog()`
  **/
  clearLocationLog: (): unknown => undefined as unknown,
  /**
  * [Android White-label Only] Gets a log of the user's locations
  * @example `utils.getLocationLog()`
  **/
  getLocationLog: (): unknown => undefined as unknown,
  /**
  * Change locale for the current user's session - this will affect localization.
  * @param lng
  **/
  changeLocale: (lng: string): unknown => undefined as unknown,
  /**
  * Plays a sound. Note that this will fail in some browsers if the user has not interacted with the page.
  * @example `utils.playSound(url)`
  * @param url
  **/
  playSound: (url: string): Promise<void> => undefined as unknown as Promise<void>,
  /**
  * [Mobile Only] Clears the session from mobile app and takes user to login screen
  * @example `utils.mobileLogout()`
  **/
  mobileLogout: (): unknown => undefined as unknown
} as const