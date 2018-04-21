export const click = $e => {
  if (!$e) return
  const active = document.activeElement
  $e.click()
  active.focus()
  active.dispatchEvent(new window.Event('focus'))
}
