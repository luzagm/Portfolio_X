"use strict";const input=document.querySelector(".js-input"),modal=document.getElementById("myModal"),openModalBtn=document.getElementById("modal-trigger"),closeModalBtn=document.querySelector(".js-close-button");function openModal(){""!==input.value&&modal.classList.remove("is-hidden")}function closeModal(){modal.classList.add("is-hidden")}function closeFromWindow(){modal.classList.add("is-hidden")}openModalBtn.addEventListener("click",openModal),closeModalBtn.addEventListener("click",closeModal),modal.addEventListener("click",closeFromWindow);