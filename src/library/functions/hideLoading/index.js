export function hideLoading() {
  setTimeout(() => {
    document.querySelector("#loading").classList.add("hidden");
  }, 1500);
}
