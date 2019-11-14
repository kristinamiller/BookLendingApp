# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do 

  Book.destroy_all

  book1 = Book.create!(title: "The Grapes of Wrath", author: "John Steinbeck")
  
  book2 = Book.create!(title: "The Unbearable Lightness of Being", author: "Milan Kundera")

  book3 = Book.create!(title: "Bird by Bird", author: "Anne Lamott")

  book4 = Book.create!(title: "And the Mountains Echoed", author: "Khaled Hosseini")

end

