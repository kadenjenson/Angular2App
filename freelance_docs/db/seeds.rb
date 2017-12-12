5.times do |d|
  FreelanceDoc.create!(
      title: "Doc #{d}", 
      desricption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
      file_url: "https://docs.google.com/document/d/1XIs0P_wIzClkpkiEzBIXlswi6a0guLIIip_fu-dAAFA/edit?usp=sharing", 
      image_url: "https://vignette.wikia.nocookie.net/rickandmorty/images/3/3e/Rick-and-morty-wallpaper.jpg/revision/latest?cb=20171014062009"
      )
end