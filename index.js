const checkIn = document.forms[0];
const checkOut = document.forms[1];
const hist = document.querySelector(".hist");

var checkhistory = [];
var checkedIn = [];
var checkedOut = [];

checkIn.addEventListener("submit", (e) => {
  try {
    let day = new Date();
    var newEntry = {
      firstName: checkIn["fname"].value,
      lastName: checkIn["lname"].value,
      id: checkIn["id"].value,
      phone: checkIn["phone"].value,
      room: checkIn["room"].value,
      date: day.toDateString(),
      time: `${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`,
      status: "Checked In",
    };
  } catch (err) {
    alert("error " + err);
  }

  console.log(newEntry);

  //   checkedIn.forEach((record) => {
  //     if (newEntry.id == record.id && newEntry.status === record.status ) {
  //       // do popover to show person has already checked in
  //     } else {
  //       checkhistory.push(newEntry);
  //       checkedIn.push(newEntry);
  //       //popover to notify successful checkin
  //     }
  //   });

  checkhistory.push(newEntry);
  checkedIn.push(newEntry);

  e.preventDefault();
  updateHistory(checkhistory);
});

checkOut.addEventListener("submit", () => {
  let newEntry = {
    firstName: checkOut["fname"].value,
    lastName: checkOut["lname"].value,
    id: checkOut["id"].value,
    phone: checkOut["phone"].value,
    room: checkOut["room"].value,
    date: "Monday",
    time: "2:50pm",
    status: "Checked Out",
  };

  checkedOut.forEach((record) => {
    // if (newEntry.id === record.id && newEntry.status === record.status) {
    //   // do popover to show person has already checked out
    // } else {
    //   history.push(newEntry);
    //   checkedOut.push(newEntry);
    //   //popover to notify successful checkout
    // }

    checkhistory.push(newEntry);
    checkedOut.push(newEntry);

    updateHistory(checkhistory);
  });
});

function updateHistory(history) {
  let showHistory = history.map((record) => {
    return `<tr>
        <td>${record.lastName} ${record.firstName}</td>
        <td>${record.id}</td>
        <td>${record.phone}</td>
        <td>${record.room}</td>
        <td>${record.date}</td>
        <td>${record.time}</td>
        <td>${record.status}</td>
      </tr>
    `;
  });

  showHistory = showHistory.join("");
  hist.innerHTML = showHistory;
}
