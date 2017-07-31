// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

// NOTE: I am working on body > wrapper > form > fields
let fields = document.getElementById("fields");

// NOTE: forloop to populate label and input tags with attributes == entries in the provided arrays
// iterate over first four and last 2 form field categories-- more or less identical form fields
// create HTML tag <label for ="id"> label </label>
// create HTML tag <input type="type" name="id" id="id" placeholder="">
// append back to fields > label, fields > input
// avoid select and textarea forms

for (let i = 0; i < formData.length; i++){
  if(i < 4 || i > 5){
    let arr_formData = formData[i];
    let label = document.createElement("label");
    let input = document.createElement("input");

    label.setAttribute("for", arr_formData.id);
    input.setAttribute("type", arr_formData.type);
    input.setAttribute("name", arr_formData.id);
    input.setAttribute("id", arr_formData.id);
    input.setAttribute("placeholder", arr_formData.label);

    fields.append(label);
    fields.append(input);
  } else if (i === 5){
    // NOTE: TEXTAREA uses formData[5]
    // <label for ="id"> Comments?? </label>
    // <textarea name ="id" id="id" placeholder="label">
    let fifth = formData [5];
    let textarea_label = document.createElement("label");
    let textarea_input = document.createElement("textarea");
    let icon = document.createElement("icon");

    textarea_label.setAttribute("for", fifth.id);
    textarea_input.setAttribute("name", fifth.id);
    textarea_input.setAttribute("id", fifth.id);
    textarea_input.setAttribute("placeholder", fifth.label);

    fields.append(textarea_label);
    fields.append(textarea_input);
  } else {
    // NOTE: Select form field LANGUAGE
    // <label for = "id"> Languages ??</label>
    // <select name="id" id="id" placeholder="">
    // <option value="value">label</option>

    let fourth = formData [4];
    let select_label = document.createElement("label");
    let select_input = document.createElement("select");
    let select_language = document.createElement("option");

    select_label.setAttribute("for", fourth.id);
    select_input.setAttribute("name", fourth.id);
    select_input.setAttribute("placeholder", fourth.label);
    select_input.setAttribute("id", fourth.id);
    select_language.append("Select Language");
    fields.append(select_label);
    fields.append(select_input);
    select_input.append(select_language);

      for (let j = 0; j < fourth.options.length; j ++){
        let options = fourth.options[j];
        let select_option = document.createElement("option");
        select_option.setAttribute("value", options.value);
        select_option.append(options.label);
        select_input.append(select_option);
      }
  }
}
