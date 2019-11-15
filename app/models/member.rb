# == Schema Information
#
# Table name: members
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Member < ApplicationRecord

  # has_many :books,
  # foreign_key: :member_id,
  # class_name: :Book


end
