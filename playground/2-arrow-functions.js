const event = {
  name: "Birthday party",
  guests: ['Cauê', 'Paulo', 'Luan', 'Deborah'],
  printGuestList() {
    console.log('Guest List for ' + this.name)
    console.log(this)
    this.guests.forEach((guest) => {
      console.log(guest + " is going to the " + this.name)
    })
  }
}

event.printGuestList();