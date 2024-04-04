import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top",
  timerProgressBar: true,
})

export const Error =
  () => Swal.fire("Error", "Something went wrong", "error")