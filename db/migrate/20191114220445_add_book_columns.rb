class AddBookColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :rental_status, :string
    add_column :books, :rental_start_date, :date
    add_column :books, :rental_end_date, :date
    add_column :books, :member_id, :integer


  end
end
