export function showFilter() {
  const filter = document.getElementById("filter");
  const overlay = document.getElementById("overlay");

  filter.className =
    " visible absolute p-6 flex flex-col gap-12 bg-purple-100 h-screen top-0 -right-0 w-96 transition-all duration-1000 z-30";
  overlay.style.display = "block";
}
