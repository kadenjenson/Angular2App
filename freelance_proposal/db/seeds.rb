10.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: "https://kadens-portfolio.herokuapp.com/",
    tools: "Ruby on Rails, Angular, Java",
    estimated_hours: (80 + proposal),
    hourly_rate: 140,
    weeks_to_complete: 8,
    client_email: "sobeit99@gmail.com"
    )
end