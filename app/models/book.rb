# == Schema Information
#
# Table name: books
#
#  id                :bigint           not null, primary key
#  title             :string           not null
#  author            :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  rental_status     :string
#  rental_start_date :date
#  rental_end_date   :date
#  member_id         :integer
#

class Book < ApplicationRecord

  # belongs_to :member,
  # foreign_key: :member_id,
  # class_name: :Member

end
