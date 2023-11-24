// Endorsement Form Elements
const textAreaEl = document.getElementById("endorsement-textarea");
const fromInputEl = document.getElementById("from-input");
const toInputEl = document.getElementById("to-input");
const submitBtnEl = document.getElementById("submit-button");

submitBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  submitForm();
});

// Endorsements list
const endorsementListEL = document.getElementById("endorsement-list");

const NewElClasses = {
  li: "endorsement-li",
  to: "endorsement-to-person fw-700",
  from: "endorsement-from-person",
  text: "endorsement-text",
  div: "from-and-like-el fw-700 flex flex-sb",
  likeBtn: "endorsement-likes",
};

// Functions

function submitForm() {
  const data = {
    to: `To ${toInputEl.value}`,
    from: `From ${fromInputEl.value}`,
    text: textAreaEl.value,
    likes: "🖤 0",
  };

  toInputEl.value = "";
  fromInputEl.value = "";
  textAreaEl.value = "";

  createEndorsement(data);
}

function createEndorsement(formData) {
  // create elements
  let endorsementLi = document.createElement("li");
  let spanTo = document.createElement("span");
  let endorsementText = document.createElement("p");
  let div = document.createElement("div");
  let spanFrom = document.createElement("span");
  let likeBtn = document.createElement("button");

  // Assign classes
  endorsementLi.setAttribute("class", NewElClasses.li);
  spanTo.setAttribute("class", NewElClasses.to);
  endorsementText.setAttribute("class", NewElClasses.text);
  div.setAttribute("class", NewElClasses.div);
  spanFrom.setAttribute("class", NewElClasses.from);
  likeBtn.setAttribute("class", NewElClasses.likeBtn);
  likeBtn.setAttribute("value", "0");

  // Button Event Listener
  likeBtn.addEventListener("click", (e) => {
    let value = parseInt(e.target.value) + 1;
    e.target.value = value;
    e.target.textContent = `🖤 ${value}`;
    console.log(e.target);
  });

  // insert form data
  spanTo.textContent = formData.to;
  spanFrom.textContent = formData.from;
  endorsementText.textContent = formData.text;
  likeBtn.textContent = formData.likes;

  // Assemble endorsement
  div.appendChild(spanFrom);
  div.appendChild(likeBtn);
  endorsementLi.appendChild(spanTo);
  endorsementLi.appendChild(endorsementText);
  endorsementLi.appendChild(div);

  // append to UL
  endorsementListEL.appendChild(endorsementLi);
}
