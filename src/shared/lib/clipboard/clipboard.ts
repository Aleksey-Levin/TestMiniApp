
export function copyToClipboard(text?: string) {
  if (!text) return
  if (!navigator.clipboard.writeText) {
    prompt('Copy to clipboard: Ctrl+C, Enter', text)

    return
  }
  navigator.clipboard.writeText(text).then(
    () => { },
    () => {
      prompt('Copy to clipboard: Ctrl+C, Enter', text)
    },
  )
}
