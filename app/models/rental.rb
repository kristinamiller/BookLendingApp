# == Schema Information
#
# Table name: rentals
#
#  id         :bigint           not null, primary key
#  book_id    :integer          not null
#  member_id  :integer          not null
#  start_date :date
#  end_date   :date
#  status     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rental < ApplicationRecord

  belongs_to :member,
  foreign_key: :member_id,
  class_name: :Member

  belongs_to :book,
  foreign_key: :book_id,
  class_name: :Book


end
