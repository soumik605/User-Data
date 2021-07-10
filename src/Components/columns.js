const columns = [
  {
    title: "Name",
    field: "name",
    validate: (rowData) => {
      if (rowData.name === undefined || rowData.name === "") {
        return "Required";
      } else if (rowData.name.length < 3) {
        return "Name should contain atleast 3 character";
      }
      return true;
    },
  },

  {
    title: "Username",
    field: "username",
    validate: (rowData) => {
      if (rowData.username === undefined || rowData.username === "") {
        return "Required";
      } else if (rowData.username.length < 3) {
        return "Username should contain atleast 3 character";
      }
      return true;
    },
  },

  {
    title: "Email Id",
    field: "email",
    validate: (rowData) => {
      if (rowData.email === undefined || rowData.email === "") {
        return "Required";
      } else if (!rowData.email.includes("@") || !rowData.email.includes(".")) {
        return "Enter valid email address";
      }
      return true;
    },
  },
  {
    title: "Phone",
    field: "phone",
    validate: (rowData) => {
      if (rowData.phone === undefined || rowData.phone === "") {
        return "Required";
      } else if (rowData.phone.length < 10) {
        return "Phone should contain atleast 10 digits";
      }
      return true;
    },
  },
  {
    title: "Website",
    field: "website",
    validate: (rowData) => {
      if (rowData.name === undefined || rowData.name === "") {
        return "Required";
      }
      return true;
    },
  },
];

export default columns;
