export function closeFilter() {
  const filter = document.getElementById("filter");
  const overlay = document.getElementById("overlay");

  filter.className =
    "absolute p-4 flex flex-col gap-4 bg-white h-screen top-0 -right-96 w-96 transition-all duration-1000 invisible";

  overlay.style.display = "none";
}
