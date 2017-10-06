const schema = {
  type: "object",
  title: "Encounter",
  required: [],
  properties: {
    encounter: {
      type: "string",
      title: "Encounter",
    },
    firstName: {
      type: "string",
      title: "First name",
    },
    lastName: {
      type: "string",
      title: "Last name",
    },
    age: {
      type: "integer",
      title: "Age",
    },
    nickName: {
      type: "string",
      title: "nickname",
    },
    bio: {
      type: "string",
      title: "Bio",
    },
    password: {
      type: "string",
      title: "Password",
      minLength: 3,
    },
    telephone: {
      type: "string",
      title: "Telephone",
      minLength: 10,
    },
  },
};

const uiSchema = {
  "ui:order": [
    "encounter",
    "firstName",
    "lastName",
    "age",
    "nickName",
    "bio",
    "telephone",
    "password",
  ],
  "ui:tabOrder": ["2", "0", "1", "firstName", "lastName", "age", "nickName"],
  encounter: {
    classNames: "col-md-12",
  },
  firstName: {
    classNames: "col-md-4 col-xs-4 success",
    "ui:autofocus": true,
    "ui:emptyValue": "",
  },
  firstNameAlias: {
    classNames: "col-md-8 col-xs-4 success",
    nav: ["0-tab", "lastName-tab"],
  },
  firstNameOneAlias: {
    classNames: "col-md-8 col-xs-4 success",
    nav: ["0-tab"],
  },
  lastName: {
    classNames: "col-md-4 col-xs-4",
    nav: ["0-tab", "lastName-tab"],
  },
  age: {
    classNames: "col-md-4 col-xs-4",
    "ui:widget": "updown",
    "ui:title": "Age of person",
    nav: ["0-tab", "firstName-tab", "age-tab"],
  },
  nickName: {
    classNames: "col-md-4 col-xs-4",
    "ui:title": "nickname",
    nav: ["0-tab", "firstName-tab", "nickName-tab"],
  },
  bio: {
    "ui:widget": "textarea",
    classNames: "col-md-12",
    nav: "1-tab",
  },
  password: {
    classNames: "col-md-6 col-xs-6",
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!",
    nav: ["2-tab"],
  },
  telephone: {
    classNames: "col-md-6 col-xs-6",
    "ui:options": {
      inputType: "tel",
    },
    nav: "2-tab",
  },
  "ui:tabAlias": {
    firstName: ["firstNameAlias", "firstNameOneAlias"],
  },
};

const tabData = [
  {
    tabID: "0-tab",
    classNames: "danger",
    icon: "fa fa-address-book",
    orientation: "vertical",
  },
  {
    tabID: "firstName-tab",
    classNames: "danger",
    icon: "glyphicon glyphicon-align-left",
    orientation: "vertical",
  },
  {
    tabID: "lastName-tab",
    classNames: "danger",
    icon: "glyphicon glyphicon-align-right",
    orientation: "vertical",
  },
];

const formData = {
  encounter: "Some",
  lastName: "",
  firstName: "",
  age: 20,
};

export default {
  schema,
  uiSchema,
  formData,
  tabData,
  activeNav: "1-tab",
};
