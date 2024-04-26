import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top",
  timerProgressBar: true,
})

export const Error =
  (message) => Swal.fire("Error", message ? message : "Something went wrong", "error")