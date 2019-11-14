# == Schema Information
#
# Table name: books
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ApplicationRecord

  has_many :rentals,
  foreign_key: :book_id,
  class_name: :Rental

end
