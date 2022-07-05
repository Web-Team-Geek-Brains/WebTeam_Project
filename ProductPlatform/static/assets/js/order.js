"use strict";

//селекторы основных
let company_inp = document.querySelector("#company");
let category_inp = document.querySelector("#category");
let description_textarea = document.querySelector("#description");
let edit_btn = document.querySelector("#edit-btn");
let submit_btn = document.querySelector("#submit-btn");
const responses = document.querySelector("#res");


function make_readonly() {
  company_inp.setAttribute("readonly", "readonly");
  company_inp.classList.add("read_only");
  category_inp.setAttribute("disabled", "true");
  category_inp.classList.add("read_only");
  description_textarea.setAttribute("readonly", "readonly");
  description_textarea.classList.add("read_only");
}

function make_modifiable() {
  category_inp.removeAttribute("disabled");
  category_inp.classList.remove("read_only");
  description_textarea.removeAttribute("readonly");
  description_textarea.classList.remove("read_only");
}

function approve_editing() {
  if (responses.children.length === 0) {
    edit_btn.style.display = "block";
  }
}

edit_btn.addEventListener("click", () => {
  make_modifiable();
  edit_btn.style.display = "none";
  submit_btn.style.display = "block";
});

make_readonly();
approve_editing();