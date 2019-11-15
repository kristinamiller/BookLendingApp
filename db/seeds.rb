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
  Member.destroy_all

  book1 = Book.create!(title: "The Grapes of Wrath", author: "John Steinbeck", rental_status: "available")
  
  book2 = Book.create!(title: "The Unbearable Lightness of Being", author: "Milan Kundera", rental_status: "available")

  book3 = Book.create!(title: "Bird by Bird", author: "Anne Lamott", rental_status: "available")

  book4 = Book.create!(title: "And the Mountains Echoed", author: "Khaled Hosseini", rental_status: "available")

  book12 = Book.create!(title: "Zero to One", author: "Peter Thiel", rental_status: "available")

  book13 = Book.create!(title: "Anna Karenina", author: "Leo Tolstoy", rental_status: "available")

  book14 = Book.create!(title: "Crime and Punishment", author: "Fyodor Dostoyevsky", rental_status: "available")

  member1 = Member.create!(username: "kristina")
  member2 = Member.create!(username: "bookworm123")
  member3 = Member.create!(username: "infrrd_bot")
  member4 = Member.create!(username: "steinbeck_fan")
  member5 = Member.create!(username: "books4ever")
  member6 = Member.create!(username: "readingislife")




end

