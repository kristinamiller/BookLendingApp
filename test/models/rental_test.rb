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

require 'test_helper'

class RentalTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
