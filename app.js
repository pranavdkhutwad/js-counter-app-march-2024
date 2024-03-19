// Selectors
const incrementBtnProduct1 = document.querySelector(
  "#product-1 > .btn-increment"
);
const incrementBtnProduct2 = document.querySelector(
  "#product-2 > .btn-increment"
);
const incrementBtnProduct3 = document.querySelector(
  "#product-3 > .btn-increment"
);

const decrementBtnProduct1 = document.querySelector(
  "#product-1 > .btn-decrement"
);
const decrementBtnProduct2 = document.querySelector(
  "#product-2 > .btn-decrement"
);
const decrementBtnProduct3 = document.querySelector(
  "#product-3 > .btn-decrement"
);

const deleteBtnProduct1 = document.querySelector("#product-1 > .btn-delete");
const deleteBtnProduct2 = document.querySelector("#product-2 > .btn-delete");
const deleteBtnProduct3 = document.querySelector("#product-3 > .btn-delete");

const badgeProduct1 = document.querySelector("#product-1 > .badge");
const badgeProduct2 = document.querySelector("#product-2 > .badge");
const badgeProduct3 = document.querySelector("#product-3 > .badge");

const totalCount = document.querySelector(".total-count");

const product1 = document.querySelector("#product-1");
const product2 = document.querySelector("#product-2");
const product3 = document.querySelector("#product-3");

function getTotalCount() {
  return count1 + count2 + count3;
}

function updateTotalCount() {
  const count = getTotalCount();
  totalCount.textContent = count;
}

// Counters
let count1 = 0;
let count2 = 0;
let count3 = 0;

// Event listeners
incrementBtnProduct1.addEventListener("click", function () {
  count1 = count1 + 1;
  badgeProduct1.textContent = count1;
  updateTotalCount();
});

incrementBtnProduct2.addEventListener("click", function () {
  count2 = count2 + 1;
  badgeProduct2.textContent = count2;
  updateTotalCount();
});
incrementBtnProduct3.addEventListener("click", function () {
  count3 = count3 + 1;
  badgeProduct3.textContent = count3;
  updateTotalCount();
});

decrementBtnProduct1.addEventListener("click", function () {
  if (count1) {
    count1 = count1 - 1;
    badgeProduct1.textContent = count1 || "zero";
    updateTotalCount();
  }
});
decrementBtnProduct2.addEventListener("click", function () {
  if (count2) {
    count2 = count2 - 1;
    badgeProduct2.textContent = count2 || "zero";
    updateTotalCount();
  }
});
decrementBtnProduct3.addEventListener("click", function () {
  if (count3) {
    count3 = count3 - 1;
    badgeProduct3.textContent = count3 || "zero";
    updateTotalCount();
  }
});

deleteBtnProduct1.addEventListener("click", function () {
  product1.remove();
  count1 = 0;
  updateTotalCount();
});
deleteBtnProduct2.addEventListener("click", function () {
  product2.remove();
  count2 = 0;
  updateTotalCount();
});
deleteBtnProduct3.addEventListener("click", function () {
  product3.remove();
  count3 = 0;
  updateTotalCount();
});
