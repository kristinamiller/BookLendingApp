@books.each do |book|
  json.set! book[:id] do
    json.extract! book, :id, :title, :author, :rental_status, :rental_start_date, :rental_end_date
  end
end